/**
 * RISE MITRA — MODULAR 1-TAP SHELL BRIDGE & DETERMINISTIC CONTROLLER
 * MODULE        : Decoupled Shell Controller, 1-Tap Catalog Sync, Cache Sentinel & SIVME Loader
 * GOVERNANCE    : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 * REPO TARGET   : public/js/one-tap-shell-bridge.js (pre-main staging verified)
 */

(function () {
  'use strict';

  var CACHE_VERSION = '20261015_v21';
  var lastActionTs = 0;
  var touchStartX = 0;
  var touchStartY = 0;
  var touchStartTime = 0;
  var isSyncingDOM = false;

  // Persistent open state map so background 120ms re-renders never close an opened category
  var openStateMap = { '15': true, '16': true };
  window.__RM_OPEN_CAT_STATE = openStateMap;

  // 1. AUTO-PURGE STALE SIVME FLAGS & STALE CACHE ON NORMAL PUBLIC LAUNCH
  (function purgeStaleState() {
    var urlParams = new URLSearchParams(window.location.search);
    var isOwnerLaunch = urlParams.get('sivme') === 'owner' ||
                        urlParams.get('sov_mode') === 'in_situ' ||
                        urlParams.get('dev_auto') === '1';
    if (!isOwnerLaunch) {
      try {
        localStorage.removeItem('sivme_active');
        localStorage.removeItem('sivme_mode');
        localStorage.removeItem('rm_sivme_state');
        sessionStorage.removeItem('sivme_active');
      } catch (e) {}
    }
    try {
      if (localStorage.getItem('rm_cache_ver') !== CACHE_VERSION && 'caches' in window) {
        caches.keys().then(function (names) {
          for (var i = 0; i < names.length; i++) {
            caches.delete(names[i]);
          }
        });
        localStorage.setItem('rm_cache_ver', CACHE_VERSION);
      }
    } catch (e) {}
  })();

  // 2. INJECT ZEL 1-TAP INSTANT TOUCH & SUB-CONTAINER VISIBILITY LOCK CSS
  (function injectOneTapLockStyles() {
    if (document.getElementById('rm-zel-one-tap-lock')) return;
    var style = document.createElement('style');
    style.id = 'rm-zel-one-tap-lock';
    style.textContent = [
      'button, a, [onclick], .tactile-25d, #categoryModal [data-cat-id], #categoryModal [id^="sub-"] > div, .rm-service-chip {',
      '  touch-action: manipulation !important;',
      '  -webkit-tap-highlight-color: transparent !important;',
      '  cursor: pointer !important;',
      '  user-select: none !important;',
      '  -webkit-user-select: none !important;',
      '}',
      '.tactile-25d:active { transform: none !important; }',
      '#categoryModal.hidden, #rm-fullscreen-view.hidden, #playStoreInstallBanner.hidden, #categoryModal .hidden, #categoryModal [id^="sub-"].hidden, #categoryModal [id^="sub-"][data-rm-collapsed="true"] {',
      '  display: none !important;',
      '}',
      '#categoryModal [id^="sub-"][data-rm-collapsed="false"] {',
      '  display: block !important;',
      '}',
      '#categoryModal:not(.hidden) {',
      '  position: fixed !important; inset: 0 !important; z-index: 50 !important;',
      '  background-color: #0b0f19 !important; display: flex !important; justify-content: center !important;',
      '}',
      '#rm-fullscreen-view:not(.hidden) {',
      '  position: fixed !important; inset: 0 !important; z-index: 99999 !important; display: flex !important;',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  })();

  // Helper: Force-close Fullscreen Viewport reliably (clears inline display:flex !important so Top-Right X works)
  function forceCloseFullscreenViewport() {
    var fs = document.getElementById('rm-fullscreen-view');
    if (fs) {
      fs.classList.add('hidden');
      fs.style.setProperty('display', 'none', 'important');
    }
  }

  // Helper: Resolve sub-container across all ID formats (sub-c01, sub-c1, sub-g34, etc.)
  function resolveCategorySubContainer(catEl, rawId, cleanNum) {
    var intNum = parseInt(cleanNum, 10);
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    var normNum = isNaN(intNum) ? cleanNum : String(intNum);
    return document.getElementById('sub-c' + cleanNum) ||
           document.getElementById('sub-c' + paddedNum) ||
           document.getElementById('sub-c' + normNum) ||
           document.getElementById('sub-g' + cleanNum) ||
           document.getElementById('sub-g' + paddedNum) ||
           document.getElementById('sub-g' + normNum) ||
           document.getElementById('sub-' + rawId) ||
           document.getElementById('sub-' + cleanNum) ||
           document.getElementById('sub-' + paddedNum) ||
           (catEl ? catEl.querySelector('[id^="sub-"]') : null);
  }

  // Helper: Hydrate Play Store Cards & enforce openStateMap after legacy 20ms/120ms renders
  function syncAndHydrateCatalogCards() {
    if (isSyncingDOM) return;
    isSyncingDOM = true;
    try {
      var modal = document.getElementById('categoryModal');
      if (!modal) return;

      if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
        window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog();
      }

      var cats = modal.querySelectorAll('[data-cat-id]');
      cats.forEach(function (catEl) {
        var rawId = catEl.getAttribute('data-cat-id') || '';
        var cleanNum = rawId.replace(/[^0-9]/g, '');
        if (!cleanNum) return;
        var intNum = parseInt(cleanNum, 10);
        var normNum = isNaN(intNum) ? cleanNum : String(intNum);

        var headerEl = catEl.querySelector(':scope > div:first-child');
        if (headerEl && headerEl.hasAttribute('onclick')) {
          headerEl.removeAttribute('onclick');
        }

        var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);
        if (!subContainer) return;

        var isOpen = Boolean(openStateMap[normNum]);
        var subCards = subContainer.querySelectorAll(':scope > div');

        if (isOpen) {
          subContainer.classList.remove('hidden');
          subContainer.setAttribute('data-rm-collapsed', 'false');
          subContainer.style.setProperty('display', 'block', 'important');
          if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard === 'function') {
            subCards.forEach(function (sc, idx) {
              window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard(sc, normNum, normNum + '-' + (idx + 1));
            });
          }
        } else {
          subContainer.classList.add('hidden');
          subContainer.setAttribute('data-rm-collapsed', 'true');
          subContainer.style.setProperty('display', 'none', 'important');
        }

        if (headerEl && window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard === 'function') {
          window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard(headerEl, normNum, isOpen, subCards.length || 3);
        }
      });
    } finally {
      isSyncingDOM = false;
    }
  }

  // 3. GLOBAL MODAL & DRAWER DISPATCHERS (100% ZEL PRESERVED)
  window.openCatalogModal = function () {
    var m = document.getElementById('categoryModal');
    if (!m) return;
    m.classList.remove('hidden');
    m.style.setProperty('display', 'flex', 'important');
    syncAndHydrateCatalogCards();
    setTimeout(syncAndHydrateCatalogCards, 10);
    setTimeout(syncAndHydrateCatalogCards, 50);
    setTimeout(syncAndHydrateCatalogCards, 140);
    setTimeout(syncAndHydrateCatalogCards, 260);
  };

  window.closeCatalogModal = function () {
    var m = document.getElementById('categoryModal');
    if (!m) return;
    m.classList.add('hidden');
    m.style.setProperty('display', 'none', 'important');
  };

  window.toggleMenuDrawer = function (open) {
    if (open) window.openCatalogModal();
    else window.closeCatalogModal();
  };

  window.closeFullscreenModule = forceCloseFullscreenViewport;

  if (typeof window.dismissPlayBanner !== 'function') {
    window.dismissPlayBanner = function () {
      var b = document.getElementById('playStoreInstallBanner');
      if (b) {
        b.classList.add('hidden');
        b.style.setProperty('display', 'none', 'important');
      }
    };
  }

  // 4. FULLSCREEN 1-TAP SERVICE LAUNCHER (100% ZEL PRESERVED)
  function launchOneTapServiceScreen(titleText, subtitleText, subCode) {
    var fs = document.getElementById('rm-fullscreen-view');
    var fsTitle = document.getElementById('fs-module-title');
    var fsContainer = document.getElementById('rm-module-container');
    if (!fs || !fsContainer) return;

    window.closeFullscreenModule = forceCloseFullscreenViewport;

    if (fsTitle) {
      fsTitle.textContent = (subCode ? subCode + ' • ' : '') + titleText;
    }

    fsContainer.innerHTML =
      '<div class="rounded-2xl bg-[#0b0f19] border border-slate-700/80 p-4 space-y-4 shadow-2xl mt-2">' +
        '<div class="flex items-start justify-between border-b border-slate-800 pb-3">' +
          '<div>' +
            '<span class="inline-block px-2.5 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-600/50 text-emerald-300 text-[10px] font-bold mb-1.5">' +
              (subCode || 'सत्यापित सेवा') + ' • 1-Tap Instant Active' +
            '</span>' +
            '<h2 class="text-base font-black text-white leading-snug">' + titleText + '</h2>' +
            (subtitleText ? '<p class="text-xs text-emerald-400 mt-1 font-medium">' + subtitleText + '</p>' : '') +
          '</div>' +
          '<span class="px-2 py-1 rounded-lg bg-amber-950/80 border border-amber-700/60 text-amber-400 text-xs font-bold">★ 4.9</span>' +
        '</div>' +
        '<div class="space-y-2 text-xs text-slate-300">' +
          '<div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">' +
            '<span>🛡️ 100% आधार व पुलिस सत्यापित सेवा प्रदाता नेटवर्क</span>' +
            '<span class="text-emerald-400 font-bold">सक्रिय</span>' +
          '</div>' +
          '<div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">' +
            '<span>⚡ पारदर्शी तय रेट कार्ड व डिजिटल बिलिंग</span>' +
            '<span class="text-cyan-400 font-bold">0% छुपा शुल्क</span>' +
          '</div>' +
        '</div>' +
        '<div class="grid grid-cols-2 gap-2.5 pt-2">' +
          '<button type="button" onclick="alert(\'आपका अनुरोध दर्ज हो गया है: \' + ' + JSON.stringify(titleText) + ')" class="w-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-black py-3 rounded-xl text-xs shadow-lg cursor-pointer min-h-[48px]">' +
            '✓ अभी बुक / ऑर्डर करें' +
          '</button>' +
          '<button type="button" onclick="closeFullscreenModule()" class="w-full bg-slate-800 hover:bg-slate-700 active:scale-95 border border-slate-600/80 text-slate-100 font-bold py-3 rounded-xl text-xs cursor-pointer min-h-[48px]">' +
            '‹ कैटलॉग पर वापस' +
          '</button>' +
        '</div>' +
      '</div>';

    fs.classList.remove('hidden');
    fs.style.setProperty('display', 'flex', 'important');
    fs.style.setProperty('z-index', '99999', 'important');
  }

  // 5. DETERMINISTIC 1-TAP ACCORDION & SUB-SERVICE CLICK CONTROLLER (CASE 1 & CASE 2)
  function handleDeterministicOneTap(e) {
    var target = e.target;
    if (!target || typeof target.closest !== 'function') return;

    // PRIORITY 0: Instant 1-Tap Close on Fullscreen Top-Right ✕, Top-Left ‹ वापस, or ‹ कैटलॉग पर वापस
    var fsCloseBtn = target.closest('#rm-fullscreen-view [onclick*="closeFullscreenModule"]');
    if (fsCloseBtn) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      forceCloseFullscreenViewport();
      return;
    }

    var modal = document.getElementById('categoryModal');
    if (!modal || modal.classList.contains('hidden') || !modal.contains(target)) return;
    if (target.closest('.sivme-notch-pill')) return;
    if (target.closest('[onclick*="closeCatalogModal"], #rm-tier1-toggle, #rm-tier2-toggle')) return;

    var now = Date.now();
    var catEl = target.closest('[data-cat-id]');

    // CASE 1: 1-Tap on Parent Category Card Header or "3 सेवाएं देखें ▼ / 3 सेवाएं छुपाएं ▲"
    if (catEl) {
      var rawId = catEl.getAttribute('data-cat-id') || '';
      var cleanNum = rawId.replace(/[^0-9]/g, '');
      var intNum = parseInt(cleanNum, 10);
      var normNum = isNaN(intNum) ? cleanNum : String(intNum);

      var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);

      if (subContainer && !subContainer.contains(target)) {
        if (now - lastActionTs < 380) {
          e.stopImmediatePropagation();
          e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          return;
        }
        lastActionTs = now;

        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();

        var isCurrentlyOpen = !subContainer.classList.contains('hidden') &&
                              subContainer.getAttribute('data-rm-collapsed') !== 'true' &&
                              window.getComputedStyle(subContainer).display !== 'none';

        var nextOpen = !isCurrentlyOpen;
        openStateMap[normNum] = nextOpen;

        if (isCurrentlyOpen) {
          subContainer.classList.add('hidden');
          subContainer.setAttribute('data-rm-collapsed', 'true');
          subContainer.style.setProperty('display', 'none', 'important');
        } else {
          subContainer.classList.remove('hidden');
          subContainer.setAttribute('data-rm-collapsed', 'false');
          subContainer.style.setProperty('display', 'block', 'important');
        }

        var headerEl = catEl.querySelector(':scope > div:first-child');
        var subCards = subContainer.querySelectorAll(':scope > div');
        if (window.RM_UNIVERSAL_CARD_ENGINE) {
          if (headerEl && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard === 'function') {
            window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard(headerEl, normNum, !isCurrentlyOpen, subCards.length || 3);
          }
          if (!isCurrentlyOpen && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard === 'function') {
            subCards.forEach(function (sc, idx) {
              window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard(sc, normNum, normNum + '-' + (idx + 1));
            });
          }
        }
        return;
      }
    }

    // CASE 2: 1-Tap inside Sub-Category Card (e.g., "01-1. Flex Banner & Glow Sign Boards" or its 4 service boxes)
    var subWrapper = target.closest('[id^="sub-"]');
    if (subWrapper) {
      var actBtn = target.closest('.rm-act-pin, .rm-act-vid, .rm-act-video');
      if (actBtn) return;

      if (now - lastActionTs < 380) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        return;
      }
      lastActionTs = now;

      var subCard = target.closest('[id^="sub-"] > div');
      if (!subCard) return;

      var rawRenderedAttr = (subCard.getAttribute('data-rm-sub-rendered') || '').split(':')[0];
      var subIdMatch = (subCard.textContent || '').match(/\b(\d{1,2}-\d)\s*\./);
      var subCode = subIdMatch ? subIdMatch[1] : (rawRenderedAttr || '01-1');

      // Route 15-2 / 16-2 (Rental Ledger) & 15-3 / 16-3 (Room & Flat Search) to their Complete Micro-Apps!
      if ((subCode === '15-2' || subCode === '16-2') && typeof window.openFullscreenModule === 'function') {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        window.closeFullscreenModule = forceCloseFullscreenViewport;
        if (typeof window.handleLaunchCategory === 'function') {
          window.handleLaunchCategory('c16', '16-2');
        } else {
          window.openFullscreenModule('16-2');
        }
        var fs162 = document.getElementById('rm-fullscreen-view');
        if (fs162) {
          fs162.classList.remove('hidden');
          fs162.style.setProperty('display', 'flex', 'important');
          fs162.style.setProperty('z-index', '99999', 'important');
        }
        return;
      }
      if ((subCode === '15-3' || subCode === '16-3') && typeof window.openFullscreenModule === 'function') {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        window.closeFullscreenModule = forceCloseFullscreenViewport;
        if (typeof window.handleLaunchCategory === 'function') {
          window.handleLaunchCategory('c16', '16-3');
        } else {
          window.openFullscreenModule('16-3');
        }
        var fs163 = document.getElementById('rm-fullscreen-view');
        if (fs163) {
          fs163.classList.remove('hidden');
          fs163.style.setProperty('display', 'flex', 'important');
          fs163.style.setProperty('z-index', '99999', 'important');
        }
        return;
      }

      var tappedNode = target.closest('.rm-service-chip, div, span, button');
      var tappedText = tappedNode ? (tappedNode.textContent || '').trim() : '';
      var headingEl = subCard.querySelector('h3, h4, [style*="font-size: 20"], [style*="font-size: 18"], [style*="font-size: 19"], .font-black, .font-bold');
      var matrix = window.RM_CANONICAL_SUB_MATRIX || {};
      var matrixEntry = matrix[subCode] || null;
      var cardTitle = (matrixEntry && matrixEntry.title) || (headingEl ? headingEl.textContent.trim() : 'सत्यापित सेवा');
      if (/^\[\d{1,2}-\d\]$/.test(cardTitle) && matrixEntry && matrixEntry.title) {
        cardTitle = matrixEntry.title;
      }

      var isServicePill = Boolean(target.closest('.rm-service-chip')) || (
                          tappedText.length > 4 &&
                          tappedText.length < 95 &&
                          tappedNode !== subCard &&
                          tappedText.indexOf(subCode) === -1 &&
                          tappedText.indexOf('उपलब्ध') === -1 &&
                          tappedText.indexOf('प्रतिष्ठान') === -1 &&
                          tappedText.indexOf('खोलें') === -1 &&
                          tappedText.indexOf('खेलें') === -1);

      if (window.RM_SUB_CARD_RENDERER && typeof window.RM_SUB_CARD_RENDERER.openSmoothSubServiceScreen === 'function' && matrixEntry) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        window.RM_SUB_CARD_RENDERER.openSmoothSubServiceScreen(
          matrixEntry,
          subCode,
          cardTitle,
          matrixEntry.hindiTitle || 'Rise Mitra सत्यापित सेवा व बुकिंग पोर्टल',
          isServicePill ? tappedText : null,
          parseInt(subCode.split('-')[0], 10) >= 34
        );
        return;
      }

      var finalTitle = isServicePill ? tappedText : cardTitle;
      var finalSubtitle = isServicePill ? cardTitle : ((matrixEntry && matrixEntry.hindiTitle) || 'Rise Mitra सत्यापित सेवा व बुकिंग पोर्टल');

      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      launchOneTapServiceScreen(finalTitle, finalSubtitle, subCode);
    }
  }

  // Bind on window capture phase so it runs before all document-level listeners
  window.addEventListener('touchstart', function (e) {
    if (!e.touches || e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
  }, { capture: true, passive: true });

  window.addEventListener('touchend', function (e) {
    if (!e.changedTouches || e.changedTouches.length !== 1) return;
    var dx = Math.abs(e.changedTouches[0].clientX - touchStartX);
    var dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
    var dt = Date.now() - touchStartTime;
    if (dx < 18 && dy < 18 && dt < 500) {
      handleDeterministicOneTap(e);
    }
  }, { capture: true, passive: false });

  window.addEventListener('click', handleDeterministicOneTap, true);
  document.addEventListener('click', handleDeterministicOneTap, true);

  // Auto-upgrade any raw cards injected by 20ms/120ms timers in catalog-sivme-render-engine.js
  function attachCatalogHydrationObserver() {
    var modal = document.getElementById('categoryModal');
    if (!modal || typeof MutationObserver === 'undefined') return;
    var obs = new MutationObserver(function () {
      if (isSyncingDOM) return;
      var rawHeader = modal.querySelector('[data-cat-id] > div:first-child:not([data-rm-parent-rendered])');
      if (rawHeader) {
        syncAndHydrateCatalogCards();
      }
    });
    obs.observe(modal, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      window.closeFullscreenModule = forceCloseFullscreenViewport;
      attachCatalogHydrationObserver();
      setTimeout(syncAndHydrateCatalogCards, 60);
      setTimeout(syncAndHydrateCatalogCards, 180);
    });
  } else {
    window.closeFullscreenModule = forceCloseFullscreenViewport;
    attachCatalogHydrationObserver();
    setTimeout(syncAndHydrateCatalogCards, 60);
    setTimeout(syncAndHydrateCatalogCards, 180);
  }

  // 6. SERVICE WORKER AUTO-UPDATE SENTINEL
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      for (var i = 0; i < regs.length; i++) {
        regs[i].update();
      }
    });
  }

  // 7. CONDITIONAL SIVME DEBUG ENGINE LOADER (SURFACE-B ONLY)
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('sivme') === 'owner' || urlParams.get('sov_mode') === 'in_situ') {
    var s = document.createElement('script');
    s.src = '/js/sovereign-in-situ-hud.js';
    s.async = false;
    document.body.appendChild(s);
  }
})();
