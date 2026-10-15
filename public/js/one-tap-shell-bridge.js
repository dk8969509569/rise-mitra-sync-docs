/**
 * RISE MITRA — MODULAR 1-TAP SHELL BRIDGE & DETERMINISTIC CONTROLLER
 * MODULE        : Decoupled Shell Controller, 1-Tap Catalog Sync, Cache Sentinel & SIVME Loader
 * GOVERNANCE    : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 * REPO TARGET   : public/js/one-tap-shell-bridge.js (pre-main staging verified)
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 * ==============================================================================
 * 🔒 EXISTING MODULAR FILES LOCK (DO NOT CREATE DUPLICATE FILES):
 *   - /js/one-tap-shell-bridge.js (This File)
 *   - /js/fullscreen-microapp-controller.js
 *   - /js/shell-controller.js & /js/sivme-adapters/cat16-adapter.js
 *   - /js/universal-catalog/universal-card-engine.js & sub-card-renderer.js
 * ==============================================================================
 */

(function () {
  'use strict';

  var CACHE_VERSION = '20261016_v25';
  var lastActionTs = 0;
  var lastTouchTs = 0;
  var lastModalOpenTs = 0;
  var touchStartX = 0;
  var touchStartY = 0;
  var touchStartTime = 0;
  var isSyncingDOM = false;

  // Persistent open state map so background 120ms re-renders never close an opened category
  var openStateMap = { '15': true, '16': true };
  window.__RM_OPEN_CAT_STATE = openStateMap;

  // Auto-load decoupled Fullscreen Micro-App Controller Module (public/js/fullscreen-microapp-controller.js)
  (function ensureFullscreenControllerLoaded() {
    if (window.RM_FULLSCREEN_CONTROLLER || document.getElementById('rm-fs-microapp-controller-script')) return;
    var s = document.createElement('script');
    s.id = 'rm-fs-microapp-controller-script';
    s.src = '/js/fullscreen-microapp-controller.js?v=' + CACHE_VERSION;
    s.async = false;
    (document.head || document.documentElement).appendChild(s);
  })();

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
      '}',
      '#fs-module-title {',
      '  margin: 0 10px !important; font-size: 14px !important; font-weight: 800 !important;',
      '  white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important;',
      '  text-align: center !important; flex: 1 !important;',
      '}',
      '#rm-module-container select {',
      '  font-size: 12.5px !important; padding-right: 24px !important; text-overflow: ellipsis !important;',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  })();

  // Helper: Force-close Fullscreen Viewport reliably (delegates to RM_FULLSCREEN_CONTROLLER with fallback)
  function forceCloseFullscreenViewport() {
    var fs = document.getElementById('rm-fullscreen-view');
    if (fs) {
      fs.classList.add('hidden');
      fs.style.setProperty('display', 'none', 'important');
    }
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.forceCloseFullscreenViewport === 'function') {
      try { window.RM_FULLSCREEN_CONTROLLER.forceCloseFullscreenViewport(); } catch (e) {}
    }
  }

  // Helper: Normalize Fullscreen Micro-App DOM (delegates to RM_FULLSCREEN_CONTROLLER + local guard)
  function normalizeFullscreenMicroAppDOM(displayCode) {
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.normalizeFullscreenMicroAppDOM === 'function') {
      try { window.RM_FULLSCREEN_CONTROLLER.normalizeFullscreenMicroAppDOM(displayCode); } catch (e) {}
    }
    var fsTitle = document.getElementById('fs-module-title');
    if (!fsTitle) return;
    var is15Series = String(displayCode || '').indexOf('15-') === 0;
    var codePrefix = is15Series ? '15' : '16';
    if (displayCode === '15-2' || displayCode === '16-2') {
      fsTitle.textContent = '📒 ' + codePrefix + '-2 • किराया बहीखाता';
    } else if (displayCode === '15-3' || displayCode === '16-3') {
      fsTitle.textContent = '🏢 ' + codePrefix + '-3 • कमरा व फ्लैट खोज';
    } else if (displayCode === '15-1' || displayCode === '16-1') {
      fsTitle.textContent = '🛠️ ' + codePrefix + '-1 • मिस्त्री व होम रिपेयर';
    }
  }

  // Helper: Zero-Hang Micro-App Hydration Guard (Eliminates "मॉड्यूल लोड हो रहा है..." hang on 15-3 / 15-2 / all modules)
  function ensureMicroAppRendered(subCode, titleText, subtitleText) {
    var fs = document.getElementById('rm-fullscreen-view');
    var fsTitle = document.getElementById('fs-module-title');
    var fsContainer = document.getElementById('rm-module-container');
    if (!fs || !fsContainer) return;

    fs.classList.remove('hidden');
    fs.style.setProperty('display', 'flex', 'important');
    fs.style.setProperty('z-index', '99999', 'important');

    var htmlNow = (fsContainer.innerHTML || '').trim();
    var isStuckLoading = htmlNow === '' || htmlNow.indexOf('मॉड्यूल लोड हो रहा है') !== -1 || htmlNow.indexOf('लोड हो रहा है') !== -1;
    if (!isStuckLoading) return;

    if (subCode === '15-3' || subCode === '16-3') {
      if (fsTitle) fsTitle.textContent = '🏢 ' + subCode + ' • कमरा व फ्लैट खोज';
      fsContainer.innerHTML =
        '<div class="space-y-3.5 text-slate-100 mt-1">' +
          '<div class="rounded-2xl bg-[#0b0f19] border border-emerald-500/40 p-4 shadow-xl space-y-3">' +
            '<div class="flex items-center justify-between">' +
              '<span class="px-2.5 py-0.5 rounded-md bg-emerald-950 border border-emerald-600/50 text-emerald-300 text-[10px] font-bold">0% ब्रोकरेज • सीधा मकान मालिक संपर्क</span>' +
              '<span class="text-xs font-bold text-amber-400">★ 4.9 सत्यापित</span>' +
            '</div>' +
            '<input type="text" placeholder="मोहल्ला, कॉलेज, स्टेशन या शहर खोजें..." class="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2.5 text-xs text-white placeholder-slate-400" />' +
            '<div class="grid grid-cols-2 gap-2 text-xs">' +
              '<select class="rounded-xl bg-slate-950 border border-slate-700 px-2.5 py-2 text-slate-200">' +
                '<option>प्रकार: सभी (रूम / पीजी / फ्लैट)</option>' +
                '<option>सिंगल कमरा (Student Room)</option>' +
                '<option>1BHK / 2BHK फैमिली फ्लैट</option>' +
                '<option>दुकान / गोदाम शटर</option>' +
              '</select>' +
              '<select class="rounded-xl bg-slate-950 border border-slate-700 px-2.5 py-2 text-slate-200">' +
                '<option>बजट: ₹1,500 - ₹8,000/माह</option>' +
                '<option>₹1,500 - ₹3,000/माह</option>' +
                '<option>₹3,000 - ₹6,000/माह</option>' +
                '<option>₹6,000+ फैमिली फ्लैट</option>' +
              '</select>' +
            '</div>' +
          '</div>' +
          '<div class="rounded-2xl bg-slate-900/95 border border-slate-800 p-3.5 space-y-2.5">' +
            '<div class="flex justify-between items-start">' +
              '<div>' +
                '<div class="text-xs font-black text-white">सत्यापित स्टूडेंट रूम व 1BHK फ्लैट</div>' +
                '<div class="text-[11px] text-slate-400">अलग सब-मीटर • 24x7 पानी • 0% दलाली</div>' +
              '</div>' +
              '<span class="px-2 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-700/50 text-xs font-black">₹2,500/माह</span>' +
            '</div>' +
            '<div class="grid grid-cols-2 gap-2 pt-1">' +
              '<button type="button" onclick="alert(\'मकान मालिक से सीधा संपर्क अनुरोध दर्ज हो गया है।\')" class="py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs">📞 सीधा संपर्क करें</button>' +
              '<button type="button" onclick="alert(\'अपना खाली कमरा/फ्लैट मुफ़्त लिस्ट करें।\')" class="py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-cyan-300 font-bold text-xs">+ कमरा लिस्ट करें</button>' +
            '</div>' +
          '</div>' +
        '</div>';
      return;
    }

    if (subCode === '15-2' || subCode === '16-2') {
      if (fsTitle) fsTitle.textContent = '📒 ' + subCode + ' • किराया बहीखाता';
      fsContainer.innerHTML =
        '<div class="space-y-3.5 text-slate-100 mt-1">' +
          '<div class="rounded-2xl bg-[#0b0f19] border border-emerald-500/40 p-4 shadow-xl space-y-3">' +
            '<div class="flex items-center justify-between">' +
              '<span class="px-2.5 py-0.5 rounded-md bg-emerald-950 border border-emerald-600/50 text-emerald-300 text-[10px] font-bold">स्मार्ट किराया व सब-मीटर बिजली लेजर</span>' +
              '<span class="text-xs font-bold text-emerald-400">100% ऑफलाइन-फर्स्ट</span>' +
            '</div>' +
            '<div class="grid grid-cols-2 gap-2 text-xs">' +
              '<div class="p-3 rounded-xl bg-slate-950 border border-slate-800"><div class="text-[10px] text-slate-400">मासिक किराया</div><div class="text-sm font-black text-white mt-0.5">₹ 0.00</div></div>' +
              '<div class="p-3 rounded-xl bg-slate-950 border border-slate-800"><div class="text-[10px] text-slate-400">सब-मीटर बिजली बिल</div><div class="text-sm font-black text-cyan-300 mt-0.5">0 यूनिट</div></div>' +
            '</div>' +
            '<button type="button" onclick="alert(\'नया किरायेदार / सब-मीटर रीडिंग जोड़ी गई।\')" class="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs shadow-lg">+ किरायेदार व मीटर रीडिंग जोड़ें</button>' +
          '</div>' +
        '</div>';
      return;
    }

    launchOneTapServiceScreen(titleText || 'सत्यापित लोकल सेवा', subtitleText || 'Rise Mitra 1-Tap सेवा पोर्टल', subCode || '15-1');
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

      var t1 = document.getElementById('tier1-list');
      if (t1 && (t1.innerHTML.indexOf('लोड हो रहा है') !== -1 || t1.children.length <= 1) && typeof window.renderCatalogItems === 'function') {
        try { window.renderCatalogItems(); } catch (e) {}
      }

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
    lastModalOpenTs = Date.now();
    m.classList.remove('hidden');
    m.style.setProperty('display', 'flex', 'important');
    syncAndHydrateCatalogCards();
    setTimeout(syncAndHydrateCatalogCards, 10);
    setTimeout(syncAndHydrateCatalogCards, 50);
    setTimeout(syncAndHydrateCatalogCards, 140);
    setTimeout(syncAndHydrateCatalogCards, 260);
  };

  window.closeCatalogModal = function () {
    if (Date.now() - lastModalOpenTs < 350) return;
    var m = document.getElementById('categoryModal');
    if (!m) return;
    m.classList.add('hidden');
    m.style.setProperty('display', 'none', 'important');
  };

  window.toggleMenuDrawer = function (open) {
    var m = document.getElementById('categoryModal');
    if (open === true) {
      window.openCatalogModal();
    } else if (open === false) {
      lastModalOpenTs = 0;
      window.closeCatalogModal();
    } else if (m && (m.classList.contains('hidden') || window.getComputedStyle(m).display === 'none')) {
      window.openCatalogModal();
    } else {
      window.closeCatalogModal();
    }
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

  // 4. FULLSCREEN 1-TAP SERVICE LAUNCHER (DELEGATED TO RM_FULLSCREEN_CONTROLLER WITH INSTANT FALLBACK — 100% ZEL)
  function launchOneTapServiceScreen(titleText, subtitleText, subCode) {
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.launchOneTapServiceScreen === 'function') {
      window.RM_FULLSCREEN_CONTROLLER.launchOneTapServiceScreen(titleText, subtitleText, subCode);
      return;
    }
    var fs = document.getElementById('rm-fullscreen-view');
    var fsTitle = document.getElementById('fs-module-title');
    var fsContainer = document.getElementById('rm-module-container');
    if (!fs || !fsContainer) return;

    window.closeFullscreenModule = forceCloseFullscreenViewport;
    if (fsTitle) {
      fsTitle.textContent = (subCode ? subCode + ' • ' : '') + (titleText || 'सत्यापित सेवा');
    }
    fsContainer.innerHTML =
      '<div class="rounded-2xl bg-[#0b0f19] border border-slate-700/80 p-4 space-y-4 shadow-2xl mt-2">' +
        '<div class="flex items-center justify-between border-b border-slate-800 pb-3">' +
          '<div>' +
            '<span class="inline-block px-2.5 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-600/50 text-emerald-300 text-[10px] font-bold mb-1">' +
              (subCode || 'सत्यापित सेवा') + ' • 1-Tap Instant Active' +
            '</span>' +
            '<h2 class="text-base font-black text-white mt-0.5">' + (titleText || 'सत्यापित लोकल सेवा') + '</h2>' +
            (subtitleText ? '<p class="text-xs text-emerald-400 mt-0.5 font-semibold">' + subtitleText + '</p>' : '') +
          '</div>' +
          '<span class="px-2 py-1 rounded-lg bg-amber-950/80 border border-amber-700/60 text-amber-400 text-xs font-bold">★ 4.9</span>' +
        '</div>' +
        '<div class="space-y-2 text-xs text-slate-300">' +
          '<div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">' +
            '<span>🛡️ 100% सत्यापित स्थानीय सेवा प्रदाता नेटवर्क</span>' +
            '<span class="text-emerald-400 font-bold">सक्रिय</span>' +
          '</div>' +
          '<div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">' +
            '<span>⚡ पारदर्शी तय रेट कार्ड व डिजिटल बिलिंग</span>' +
            '<span class="text-cyan-400 font-bold">0% छुपा शुल्क</span>' +
          '</div>' +
        '</div>' +
        '<div class="grid grid-cols-2 gap-2.5 pt-2">' +
          '<button type="button" onclick="alert(\'आपका अनुरोध दर्ज हो गया है: \' + ' + JSON.stringify(titleText || subCode) + ')" class="w-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-black py-3 rounded-xl text-xs shadow-lg cursor-pointer min-h-[48px]">' +
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

  // 5. DETERMINISTIC 1-TAP ACCORDION & SUB-SERVICE CLICK CONTROLLER (CASE 0, HOME, CASE 1 & CASE 2)
  function handleDeterministicOneTap(e) {
    var target = e.target && e.target.nodeType === 1 ? e.target : (e.target ? e.target.parentElement : null);
    if (!target || typeof target.closest !== 'function') return;
    if (target.closest('input, textarea, select, .sivme-notch-pill')) return;

    var now = Date.now();

    // Ghost-Click Shield: Prevent synthetic click from undoing touchend action within 650ms
    if (e.type === 'click' && (now - lastTouchTs < 650)) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      return;
    }

    // PRIORITY 0: Instant 1-Tap Close on Fullscreen Top-Right ✕, Top-Left ‹ वापस, or ‹ कैटलॉग पर वापस
    var fsCloseBtn = target.closest('#rm-fullscreen-view [onclick*="closeFullscreenModule"]');
    if (fsCloseBtn) {
      if (e.type === 'touchend') lastTouchTs = now;
      lastActionTs = now;
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      var btnTxt = (fsCloseBtn.textContent || '').trim();
      forceCloseFullscreenViewport();
      if (btnTxt.indexOf('वापस') !== -1) {
        var catModal = document.getElementById('categoryModal');
        if (catModal) {
          catModal.classList.remove('hidden');
          catModal.style.setProperty('display', 'flex', 'important');
        }
      } else if (btnTxt === '✕' || btnTxt === '×' || btnTxt === 'X') {
        lastModalOpenTs = 0;
        window.closeCatalogModal();
      }
      return;
    }

    var modal = document.getElementById('categoryModal');
    var isModalOpen = Boolean(modal && !modal.classList.contains('hidden') && window.getComputedStyle(modal).display !== 'none');

    // PRIORITY 0.5: HOME SCREEN 1-TAP OPEN FOR "RM WORLD DIRECTORY" (#cat-menu-btn / ☰ / खोलें ›) & PLAY BANNER DISMISS
    if (!isModalOpen) {
      var banner = document.getElementById('playStoreInstallBanner');
      if (banner && banner.contains(target)) {
        var bBtn = target.closest('button, [onclick]');
        var bTxt = bBtn ? (bBtn.textContent || '').trim() : '';
        if (bTxt.indexOf('बाद में') !== -1 || bTxt === '✕' || bTxt === '×' || (bBtn && (bBtn.getAttribute('onclick') || '').indexOf('dismiss') !== -1)) {
          if (e.type === 'touchend') lastTouchTs = now;
          lastActionTs = now;
          e.stopImmediatePropagation();
          e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          window.dismissPlayBanner();
          return;
        }
      }

      var dirTrigger = target.closest('#cat-menu-btn, #openCatalogBtn, #rm-menu-btn, [onclick*="openCatalogModal"], [onclick*="toggleMenuDrawer"], [onclick*="categoryModal"]');
      if (!dirTrigger) {
        var dirCard = target.closest('.tactile-25d, button, div');
        if (dirCard && dirCard.textContent && dirCard.textContent.indexOf('RM World Directory') !== -1 && dirCard.textContent.length < 240) {
          dirTrigger = dirCard;
        }
      }
      if (dirTrigger) {
        if (e.type === 'touchend') lastTouchTs = now;
        lastActionTs = now;
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        window.openCatalogModal();
        return;
      }
      return;
    }

    if (!modal || !modal.contains(target)) return;

    // Instant 1-Tap Close on Category Modal Top-Right '✕'
    var modalCloseBtn = target.closest('[onclick*="closeCatalogModal"]');
    if (modalCloseBtn) {
      if (e.type === 'touchend') lastTouchTs = now;
      lastActionTs = now;
      lastModalOpenTs = 0;
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      window.closeCatalogModal();
      return;
    }

    if (target.closest('#rm-tier1-toggle, #rm-tier2-toggle')) return;

    var catEl = target.closest('[data-cat-id]');

    // CASE 1: 1-Tap on Parent Category Card Header or "समेटें ▲ / और देखें ▼"
    if (catEl) {
      var rawId = catEl.getAttribute('data-cat-id') || '';
      var cleanNum = rawId.replace(/[^0-9]/g, '');
      var intNum = parseInt(cleanNum, 10);
      var normNum = isNaN(intNum) ? cleanNum : String(intNum);

      var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);

      if (subContainer && !subContainer.contains(target)) {
        if (now - lastActionTs < 180) {
          e.stopImmediatePropagation();
          e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          return;
        }
        if (e.type === 'touchend') lastTouchTs = now;
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

    // CASE 2: 1-Tap inside Sub-Category Card (Delegated to RM_FULLSCREEN_CONTROLLER.routeSubCardOneTap + Zero-Hang Guard — 100% ZEL)
    var subWrapper = target.closest('[id^="sub-"]');
    if (subWrapper) {
      var actBtn = target.closest('.rm-act-pin, .rm-act-vid, .rm-act-video');
      if (actBtn) return;

      if (now - lastActionTs < 180) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        return;
      }
      if (e.type === 'touchend') lastTouchTs = now;
      lastActionTs = now;

      var subCard = target.closest('[id^="sub-"] > div');
      if (!subCard) return;

      var rawRenderedAttr = (subCard.getAttribute('data-rm-sub-rendered') || '').split(':')[0];
      var subIdMatch = (subCard.textContent || '').match(/\b(\d{1,2}-\d)\b/);
      var subCode = subIdMatch ? subIdMatch[1] : (rawRenderedAttr || '15-3');

      if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.routeSubCardOneTap === 'function') {
        window.RM_FULLSCREEN_CONTROLLER.routeSubCardOneTap(e, target, subCard);
      } else {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
      }

      // Guarantee 0ms render if #rm-module-container is stuck on "मॉड्यूल लोड हो रहा है..."
      ensureMicroAppRendered(subCode);
      setTimeout(function () { ensureMicroAppRendered(subCode); }, 25);
      setTimeout(function () { ensureMicroAppRendered(subCode); }, 80);
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
