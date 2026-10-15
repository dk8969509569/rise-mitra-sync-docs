/**
 * RISE MITRA — MODULAR 1-TAP SHELL BRIDGE & DETERMINISTIC CONTROLLER
 * MODULE        : Decoupled Shell Controller, 1-Tap Catalog Sync, Cache Sentinel & SIVME Loader
 * GOVERNANCE    : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 * REPO TARGET   : public/js/one-tap-shell-bridge.js (pre-main staging verified)
 */

(function () {
  'use strict';

  var CACHE_VERSION = '20261015_v11';
  var lastActionTs = 0;

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
      '}',
      '.tactile-25d:active { transform: none !important; }',
      '#categoryModal.hidden, #rm-fullscreen-view.hidden, #playStoreInstallBanner.hidden, #categoryModal .hidden, #categoryModal [id^="sub-"].hidden, #categoryModal [id^="sub-"][data-rm-collapsed="true"] {',
      '  display: none !important;',
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

  // 3. GLOBAL MODAL & DRAWER DISPATCHERS (100% ZEL PRESERVED)
  window.openCatalogModal = function () {
    var m = document.getElementById('categoryModal');
    if (!m) return;
    m.classList.remove('hidden');
    m.style.setProperty('display', 'flex', 'important');
    if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
      setTimeout(window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog, 10);
    }
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

  if (typeof window.closeFullscreenModule !== 'function') {
    window.closeFullscreenModule = function () {
      var fs = document.getElementById('rm-fullscreen-view');
      if (fs) {
        fs.classList.add('hidden');
        fs.style.setProperty('display', 'none', 'important');
      }
    };
  }

  if (typeof window.dismissPlayBanner !== 'function') {
    window.dismissPlayBanner = function () {
      var b = document.getElementById('playStoreInstallBanner');
      if (b) {
        b.classList.add('hidden');
        b.style.setProperty('display', 'none', 'important');
      }
    };
  }

  // 4. FULLSCREEN 1-TAP SERVICE LAUNCHER
  function launchOneTapServiceScreen(titleText, subtitleText, subCode) {
    var fs = document.getElementById('rm-fullscreen-view');
    var fsTitle = document.getElementById('fs-module-title');
    var fsContainer = document.getElementById('rm-module-container');
    if (!fs || !fsContainer) return;

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

  // 5. DETERMINISTIC 1-TAP ACCORDION & SUB-SERVICE CLICK CONTROLLER
  document.addEventListener('click', function (e) {
    var modal = document.getElementById('categoryModal');
    if (!modal || modal.classList.contains('hidden') || !modal.contains(e.target)) return;
    if (e.target.closest('.sivme-notch-pill')) return;

    var now = Date.now();
    var catEl = e.target.closest('[data-cat-id]');

    // CASE 1: 1-Tap on Parent Category Card Header or "3 सेवाएं देखें ▼ / 3 सेवाएं छुपाएं ▲"
    if (catEl) {
      var rawId = catEl.getAttribute('data-cat-id') || '';
      var cleanNum = rawId.replace(/[^0-9]/g, '');
      var intNum = parseInt(cleanNum, 10);
      var paddedNum = (intNum < 10 ? '0' : '') + intNum;
      var normNum = isNaN(intNum) ? cleanNum : String(intNum);

      var subContainer = document.getElementById('sub-c' + cleanNum) ||
                         document.getElementById('sub-c' + paddedNum) ||
                         document.getElementById('sub-c' + normNum) ||
                         document.getElementById('sub-g' + cleanNum) ||
                         document.getElementById('sub-g' + paddedNum) ||
                         document.getElementById('sub-g' + normNum) ||
                         document.getElementById('sub-' + rawId) ||
                         document.getElementById('sub-' + cleanNum);

      if (subContainer && !subContainer.contains(e.target)) {
        if (now - lastActionTs < 300) {
          e.stopImmediatePropagation();
          e.preventDefault();
          return;
        }
        lastActionTs = now;

        e.stopImmediatePropagation();
        e.preventDefault();

        var isCurrentlyOpen = !subContainer.classList.contains('hidden') &&
                              subContainer.getAttribute('data-rm-collapsed') !== 'true' &&
                              window.getComputedStyle(subContainer).display !== 'none';

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
    var subWrapper = e.target.closest('[id^="sub-"]');
    if (subWrapper) {
      var actBtn = e.target.closest('.rm-act-pin, .rm-act-vid, .rm-act-video');
      if (actBtn) return;

      if (now - lastActionTs < 300) return;
      lastActionTs = now;

      var subCard = e.target.closest('[id^="sub-"] > div');
      if (!subCard) return;

      var subIdMatch = (subCard.textContent || '').match(/\b(\d{1,2}-\d)\s*\./);
      var subCode = subIdMatch ? subIdMatch[1] : (subCard.getAttribute('data-rm-sub-rendered') || '01-1');

      if (subCode === '16-2' && typeof window.openFullscreenModule === 'function') {
        window.openFullscreenModule('16-2');
        return;
      }
      if (subCode === '16-3' && typeof window.openFullscreenModule === 'function') {
        window.openFullscreenModule('16-3');
        return;
      }

      var tappedNode = e.target.closest('.rm-service-chip, div, span, button');
      var tappedText = tappedNode ? (tappedNode.textContent || '').trim() : '';
      var headingEl = subCard.querySelector('h3, h4, [style*="font-size: 20"], [style*="font-size: 18"], [style*="font-size: 19"], .font-black, .font-bold');
      var cardTitle = headingEl ? headingEl.textContent.trim() : 'सत्यापित सेवा';

      var isServicePill = tappedText.length > 4 &&
                          tappedText.length < 95 &&
                          tappedNode !== subCard &&
                          tappedText.indexOf(subCode) === -1 &&
                          tappedText.indexOf('उपलब्ध') === -1 &&
                          tappedText.indexOf('प्रतिष्ठान') === -1 &&
                          tappedText.indexOf('खोलें') === -1 &&
                          tappedText.indexOf('खेलें') === -1;

      var finalTitle = isServicePill ? tappedText : cardTitle;
      var finalSubtitle = isServicePill ? cardTitle : 'Rise Mitra सत्यापित सेवा व बुकिंग पोर्टल';

      e.stopImmediatePropagation();
      e.preventDefault();
      launchOneTapServiceScreen(finalTitle, finalSubtitle, subCode);
    }
  }, true);

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
