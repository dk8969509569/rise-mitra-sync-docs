/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-1 Modular Catalog Hydrator, 0ms Home Healer & Sentinel (v44)
 *   - REPO TARGET    : public/js/one-tap-catalog-hydrator.js
 *   - SURFACE TARGET : SURFACE-A ONLY (With Conditional Loader for Surface-B SIVME)
 *   - HOST BINDING   : Surface-A (public/index.html) | Surface-B (public/owner-console.html)
 *   - SIZE BUDGET    : Target <= 300 Logical Lines (Surface-A <= 120 KB Gzipped | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/one-tap-catalog-hydrator.js (This File: Part-1 CSS Lock, Home Healer & Dispatchers)
 *   - public/js/one-tap-catalog-dom-engine.js (Part-1B: Canonical Catalog DOM & Accordion Engine)
 *   - public/js/fullscreen-microapp-controller.js (Fullscreen Micro-App Viewport Controller)
 *   - public/js/one-tap-shell-bridge.js (Part-2: Master 1-Tap Event Router)
 *   - public/js/favorites-engine.js & public/js/favorites-data-extractor.js (My Favorites Engine)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : 0ms Home Verticals healing ("वर्टिकल्स लोड हो रहे हैं..."),
 *                              1-tap lock CSS injection, stale SIVME/cache purge, and modal
 *                              open/close dispatchers delegated to Part-1B DOM Engine.
 *   - ALLOWED ON SURFACE-B   : Conditional loading of /js/sovereign-in-situ-hud.js ONLY when
 *                              ?sivme=owner or ?sov_mode=in_situ is present in URL.
 *   - FORBIDDEN IN THIS FILE : Cross-surface DOM leakage or dropping any v39 ZEL function.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.__RM_ACTIVE_CACHE_VER, window.__RM_OPEN_CAT_STATE,
 *                           window.__RM_LAST_MODAL_OPEN_TS, window.openCatalogModal,
 *                           window.closeCatalogModal, window.toggleMenuDrawer,
 *                           window.closeFullscreenModule, window.dismissPlayBanner,
 *                           window.launchOneTapServiceScreen, window.healHomeVerticalsInstantly,
 *                           window.RM_CATALOG_HYDRATOR
 *   - CALLS EXTERNAL APIs : window.RM_CATALOG_DOM_ENGINE.*, window.RM_FULLSCREEN_CONTROLLER.*,
 *                           window.renderHomeMacroGrid, window.renderFavorites, window.updatePinButtonsUI
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #categoryModal, #rm-fullscreen-view, #fs-module-title,
 *                           #playStoreInstallBanner, #pwa-install-banner, [data-cat-id]
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : 0ms instant modal open/close without blocking main thread on boot.
 *   - SCROLL SAFETY : touch-action: manipulation and -webkit-overflow-scrolling: touch.
 *   - DOM SAFETY    : MutationObserver uses subtree: false to prevent recursive DOM freezes.
 * ==============================================================================
 * 7. 100% ZEL FUNCTION MANIFEST (ALL 17 MANDATORY FUNCTIONS INTACT):
 *   1. ensureFullscreenControllerLoaded 2. purgeStaleState             3. injectOneTapLockStyles
 *   4. healHomeVerticalsInstantly       5. forceCloseFullscreenViewport 6. normalizeFullscreenMicroAppDOM
 *   7. ensureMicroAppRendered           8. resolveCategorySubContainer  9. enforceTopLeftLargeNumbering
 *   10. installRenderDestructionShield  11. applyCategoryOpenState      12. syncAndHydrateCatalogCards
 *   13. openCatalogModal                14. closeCatalogModal           15. toggleMenuDrawer
 *   16. dismissPlayBanner               17. launchOneTapServiceScreen   18. attachCatalogHydrationObserver
 * ==============================================================================
 */

(function () {
  'use strict';

  var CACHE_VERSION = '20261017_v44';
  window.__RM_ACTIVE_CACHE_VER = CACHE_VERSION;
  var isSyncingDOM = false;
  var hasRenderedCatalogOnce = false;

  // Shared state across Part 1 (Hydrator), Part 1B (DOM Engine) and Part 2 (1-Tap Bridge)
  var openStateMap = window.__RM_OPEN_CAT_STATE || { '15': true, '16': true };
  window.__RM_OPEN_CAT_STATE = openStateMap;
  window.__RM_LAST_MODAL_OPEN_TS = window.__RM_LAST_MODAL_OPEN_TS || 0;

  var CORE_12_VERTICALS = [
    { seq: '01', icon: '🛠️', en: 'Daily Home & Mistry Services', hi: 'दैनिक घरेलू व मिस्त्री सेवाएं' },
    { seq: '02', icon: '🛒', en: 'Kirana, Rashan & Local Retail', hi: 'किराना, राशन व लोकल बाज़ार' },
    { seq: '03', icon: '🩺', en: 'Medical, Pharmacy & Wellness', hi: 'दवाइयां, क्लिनिक व स्वास्थ्य' },
    { seq: '04', icon: '🛵', en: 'Auto, Transport & Vehicle Care', hi: 'वाहन रिपेयर, ऑटो व ट्रांसपोर्ट' },
    { seq: '05', icon: '📄', en: 'CSC, Online Forms & Citizen Seva', hi: 'डिजिटल सेवा, फॉर्म व प्रमाण पत्र' },
    { seq: '06', icon: '🏠', en: 'Room Search & Rent Bahikhata', hi: 'कमरा/फ्लैट खोज व किराया बहीखाता' },
    { seq: '07', icon: '🍲', en: 'Local Dining, Tiffin & Street Food', hi: 'भोजन, टिफिन व स्ट्रीट फूड' },
    { seq: '08', icon: '📚', en: 'Study Library, Books & Coaching', hi: 'लाइब्रेरी, पुस्तकें व शिक्षा' },
    { seq: '09', icon: '📱', en: 'Mobile, Electronics & Appliance Care', hi: 'मोबाइल, लैपटॉप व बिजली उपकरण' },
    { seq: '10', icon: '🥻', en: 'Tribal Arts, Handloom & Fashion', hi: 'हथकरघा, डोकरा कला व परिधान' },
    { seq: '11', icon: '💇‍♂️', en: 'Salon, Parlour & Personal Care', hi: 'सैलून, ब्यूटी पार्लर व स्पा' },
    { seq: '12', icon: '🎮', en: 'Games, Sports & Entertainment', hi: 'खेल, मनोरंजन व इवेंट्स (18 श्रेणियां)' }
  ];

  // Auto-load decoupled Fullscreen Micro-App Controller, Part-1B Catalog DOM Engine & Games Bridge
  (function ensureFullscreenControllerLoaded() {
    var modules = [
      { id: 'rm-fs-microapp-controller-script', src: '/js/fullscreen-microapp-controller.js' },
      { id: 'rm-catalog-dom-engine-script', src: '/js/one-tap-catalog-dom-engine.js' },
      { id: 'rm-games-ent-bridge-script', src: '/js/universal-catalog/games-entertainment-bridge.js' }
    ];
    for (var i = 0; i < modules.length; i++) {
      if (!document.getElementById(modules[i].id)) {
        var s = document.createElement('script');
        s.id = modules[i].id;
        s.src = modules[i].src + '?v=' + CACHE_VERSION;
        s.async = true;
        (document.head || document.documentElement).appendChild(s);
      }
    }
  })();

  // 0. Instant 0ms Healer for "वर्टिकल्स लोड हो रहे हैं..." on Home Screen
  function healHomeVerticalsInstantly() {
    if (typeof window.renderHomeMacroGrid === 'function') {
      try { window.renderHomeMacroGrid(); } catch (e) {}
    }
    var nodes = document.querySelectorAll('div, p, span, section');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.children.length === 0 && (el.textContent || '').trim().indexOf('वर्टिकल्स लोड हो रहे हैं') !== -1) {
        var box = el.parentElement || el;
        box.className = 'grid grid-cols-2 gap-2.5 px-4 mb-6 max-w-lg mx-auto';
        box.innerHTML = CORE_12_VERTICALS.map(function (v) {
          return '<div onclick="window.openCatalogModal && window.openCatalogModal()" class="bg-[#0b1329]/95 border border-slate-700/80 hover:border-cyan-500/60 p-3.5 rounded-2xl flex flex-col justify-between shadow-lg active:scale-[0.98] cursor-pointer min-h-[112px]">' +
            '<div class="flex items-center justify-between w-full mb-1.5">' +
              '<span class="text-cyan-400 font-black text-base leading-none">' + v.seq + '.</span>' +
              '<div class="w-9 h-9 rounded-xl bg-[#02091d] border border-cyan-500/30 flex items-center justify-center text-lg">' + v.icon + '</div>' +
            '</div>' +
            '<div class="text-left">' +
              '<div class="text-[12.5px] font-black text-slate-100 leading-tight">' + v.en + '</div>' +
              '<div class="text-[11px] font-bold text-emerald-400 leading-tight mt-1">' + v.hi + '</div>' +
            '</div>' +
          '</div>';
        }).join('');
        break;
      }
    }
    if (typeof window.renderFavorites === 'function') {
      try { window.renderFavorites(); } catch (e) {}
    }
  }
  window.healHomeVerticalsInstantly = healHomeVerticalsInstantly;

  // 1. AUTO-PURGE STALE SIVME FLAGS, STALE VISIBILITY LOCKS & STALE CACHE ON NORMAL PUBLIC LAUNCH
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
        localStorage.removeItem('rm_active_categories_v1');
        localStorage.removeItem('rm_sovereign_visibility_registry_v1');
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

  // 2. INJECT ZEL 1-TAP INSTANT TOUCH, SUB-CONTAINER VISIBILITY LOCK & TOP-LEFT LARGE NUMBERING CSS
  (function injectOneTapLockStyles() {
    var existing = document.getElementById('rm-zel-one-tap-lock');
    var style = existing || document.createElement('style');
    style.id = 'rm-zel-one-tap-lock';
    style.textContent = [
      'html, body { background-color: #0b0f19 !important; }',
      'button, a, [onclick], .tactile-25d, #categoryModal [data-cat-id], #categoryModal [id^="sub-"] > div, .rm-service-chip {',
      '  touch-action: manipulation !important; -webkit-tap-highlight-color: transparent !important;',
      '  cursor: pointer !important; user-select: none !important; -webkit-user-select: none !important;',
      '  transition: none !important;',
      '}',
      '.tactile-25d:active { transform: none !important; }',
      '#categoryModal { -webkit-overflow-scrolling: touch !important; }',
      '#categoryModal.hidden, #rm-fullscreen-view.hidden, #playStoreInstallBanner.hidden, #categoryModal [id^="sub-"]:not([data-rm-collapsed="false"]).hidden, #categoryModal [id^="sub-"][data-rm-collapsed="true"] { display: none !important; }',
      '#categoryModal [id^="sub-"][data-rm-collapsed="false"] { display: block !important; }',
      '#categoryModal:not(.hidden) { position: fixed !important; inset: 0 !important; z-index: 50 !important; background-color: #0b0f19 !important; display: flex !important; justify-content: center !important; }',
      '#rm-fullscreen-view:not(.hidden) { position: fixed !important; inset: 0 !important; z-index: 99999 !important; display: flex !important; background-color: #0b0f19 !important; }',
      '#fs-module-title { margin: 0 10px !important; font-size: 14px !important; font-weight: 800 !important; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; text-align: center !important; flex: 1 !important; }',
      '#rm-module-container select { font-size: 12.5px !important; padding-right: 24px !important; text-overflow: ellipsis !important; }',
      '#rm-module-container select:empty, #rm-module-container div:empty:not([class*="h-"]):not([class*="w-"]) { display: none !important; }',
      '.rm-toplevel-num-badge { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important; font-size: 24px !important; font-weight: 900 !important; color: #38bdf8 !important; line-height: 1.05 !important; letter-spacing: -0.5px !important; margin-bottom: 6px !important; display: block !important; text-align: left !important; white-space: nowrap !important; }',
      '.rm-sublevel-num-badge { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important; font-size: 22px !important; font-weight: 900 !important; color: #38bdf8 !important; line-height: 1.05 !important; letter-spacing: -0.5px !important; margin-bottom: 6px !important; display: block !important; text-align: left !important; white-space: nowrap !important; }'
    ].join('\n');
    if (!existing) (document.head || document.documentElement).appendChild(style);
  })();

  // Helper: Force-close Fullscreen Viewport reliably
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

  // Helper: Normalize Fullscreen Micro-App DOM
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

  // Helper: Zero-Hang Micro-App Hydration Guard
  function ensureMicroAppRendered(subCode, titleText, subtitleText) {
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered === 'function') {
      window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered(subCode, titleText, subtitleText);
    }
  }

  // Delegated Part-1B DOM Engine Helpers (Canonical Implementation in public/js/one-tap-catalog-dom-engine.js)
  function resolveCategorySubContainer(catEl, rawId, cleanNum) {
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.resolveCategorySubContainer === 'function') {
      return window.RM_CATALOG_DOM_ENGINE.resolveCategorySubContainer(catEl, rawId, cleanNum);
    }
    var intNum = parseInt(cleanNum, 10);
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    return (catEl && catEl.querySelector('[id^="sub-"]')) ||
           document.getElementById('sub-c' + paddedNum) ||
           document.getElementById('sub-c' + cleanNum) ||
           document.getElementById('sub-g' + paddedNum) ||
           document.getElementById('sub-g' + cleanNum);
  }

  function enforceTopLeftLargeNumbering(catEl, subContainer, paddedNum) {
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.enforceTopLeftLargeNumbering === 'function') {
      return window.RM_CATALOG_DOM_ENGINE.enforceTopLeftLargeNumbering(catEl, subContainer, paddedNum);
    }
  }

  function installRenderDestructionShield() {
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.installRenderDestructionShield === 'function') {
      return window.RM_CATALOG_DOM_ENGINE.installRenderDestructionShield();
    }
  }

  function applyCategoryOpenState(catEl, rawId, cleanNum, isOpen) {
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.applyCategoryOpenState === 'function') {
      return window.RM_CATALOG_DOM_ENGINE.applyCategoryOpenState(catEl, rawId, cleanNum, isOpen);
    }
    var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);
    if (!subContainer) return false;
    subContainer.classList.toggle('hidden', !isOpen);
    subContainer.setAttribute('data-rm-collapsed', isOpen ? 'false' : 'true');
    subContainer.style.setProperty('display', isOpen ? 'block' : 'none', 'important');
    return true;
  }

  function syncAndHydrateCatalogCards() {
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards === 'function') {
      hasRenderedCatalogOnce = true;
      return window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards();
    }
  }

  // 3. GLOBAL MODAL & DRAWER DISPATCHERS (100% ZEL PRESERVED + NON-BLOCKING PAINT)
  window.openCatalogModal = function () {
    var m = document.getElementById('categoryModal');
    if (!m) return;
    window.__RM_LAST_MODAL_OPEN_TS = Date.now();
    m.classList.remove('hidden');
    m.style.setProperty('display', 'flex', 'important');
    syncAndHydrateCatalogCards();
    if (typeof window.updatePinButtonsUI === 'function') window.updatePinButtonsUI();
    setTimeout(syncAndHydrateCatalogCards, 10);
    setTimeout(syncAndHydrateCatalogCards, 50);
    setTimeout(syncAndHydrateCatalogCards, 140);
    setTimeout(syncAndHydrateCatalogCards, 260);
  };

  window.closeCatalogModal = function () {
    if (Date.now() - (window.__RM_LAST_MODAL_OPEN_TS || 0) < 350) return;
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
      window.__RM_LAST_MODAL_OPEN_TS = 0;
      window.closeCatalogModal();
    } else if (m && (m.classList.contains('hidden') || window.getComputedStyle(m).display === 'none')) {
      window.openCatalogModal();
    } else {
      window.closeCatalogModal();
    }
  };

  window.closeFullscreenModule = forceCloseFullscreenViewport;

  window.dismissPlayBanner = function () {
    var b = document.getElementById('playStoreInstallBanner') || document.getElementById('pwa-install-banner');
    if (b) {
      b.classList.add('hidden');
      b.style.setProperty('display', 'none', 'important');
    }
  };

  // 4. FULLSCREEN 1-TAP SERVICE LAUNCHER
  function launchOneTapServiceScreen(titleText, subtitleText, subCode) {
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.launchOneTapServiceScreen === 'function') {
      window.RM_FULLSCREEN_CONTROLLER.launchOneTapServiceScreen(titleText, subtitleText, subCode);
    }
  }
  window.launchOneTapServiceScreen = launchOneTapServiceScreen;

  // Expose all helpers on window.RM_CATALOG_HYDRATOR for Part 2 Bridge
  window.RM_CATALOG_HYDRATOR = {
    openStateMap: openStateMap,
    forceCloseFullscreenViewport: forceCloseFullscreenViewport,
    normalizeFullscreenMicroAppDOM: normalizeFullscreenMicroAppDOM,
    ensureMicroAppRendered: ensureMicroAppRendered,
    resolveCategorySubContainer: resolveCategorySubContainer,
    enforceTopLeftLargeNumbering: enforceTopLeftLargeNumbering,
    installRenderDestructionShield: installRenderDestructionShield,
    applyCategoryOpenState: applyCategoryOpenState,
    syncAndHydrateCatalogCards: syncAndHydrateCatalogCards,
    launchOneTapServiceScreen: launchOneTapServiceScreen
  };

  function attachCatalogHydrationObserver() {
    var modal = document.getElementById('categoryModal');
    if (!modal || typeof MutationObserver === 'undefined') return;
    var obs = new MutationObserver(function () {
      if (isSyncingDOM || modal.classList.contains('hidden')) return;
      installRenderDestructionShield();
      var rawHeader = modal.querySelector('[data-cat-id] > div:first-child:not([data-rm-parent-rendered])');
      if (rawHeader) {
        syncAndHydrateCatalogCards();
      }
    });
    obs.observe(modal, { childList: true, subtree: false });
  }

  function bootFastHomeAndCatalog() {
    window.closeFullscreenModule = forceCloseFullscreenViewport;
    healHomeVerticalsInstantly();
    setTimeout(healHomeVerticalsInstantly, 80);
    setTimeout(healHomeVerticalsInstantly, 250);
    attachCatalogHydrationObserver();
    var idleFn = window.requestIdleCallback || function (cb) { setTimeout(cb, 350); };
    idleFn(syncAndHydrateCatalogCards);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootFastHomeAndCatalog);
  } else {
    bootFastHomeAndCatalog();
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
