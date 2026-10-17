/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-1 Modular Catalog Hydrator, 0ms Home Healer & Sentinel (v49)
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
 *   - public/js/home-grid-engine.js (Companion 12 Core Cashflow Verticals Grid Engine)
 *   - public/js/one-tap-catalog-dom-engine.js (Part-1B: Canonical Catalog DOM & Accordion Engine)
 *   - public/js/fullscreen-microapp-controller.js (Fullscreen Micro-App Viewport Controller)
 *   - public/js/one-tap-shell-bridge.js (Part-2: Master 1-Tap Event Router)
 *   - public/js/favorites-engine.js & public/js/favorites-data-extractor.js (My Favorites Engine)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : 0ms Home Verticals healing ("वर्टिकल्स लोड हो रहे हैं...") in
 *                              official Play Store A-Z order (Cat 15 = House & Home), Catalog
 *                              Header "32 Categories • 18 Games Active" sync, parallel script
 *                              preload, Capture-Phase 1-Tap Accordion toggle (01-50), 1-tap CSS
 *                              injection, horizontal scrollbar elimination, bottom-nav scroll
 *                              clearance, stale SIVME/cache purge, and modal dispatchers.
 *   - ALLOWED ON SURFACE-B   : Conditional loading of /js/sovereign-in-situ-hud.js ONLY when
 *                              ?sivme=owner or ?sov_mode=in_situ is present in URL.
 *   - FORBIDDEN IN THIS FILE : Cross-surface DOM leakage or dropping any v39-v48 ZEL function.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.__RM_ACTIVE_CACHE_VER, window.__RM_OPEN_CAT_STATE,
 *                           window.__RM_LAST_MODAL_OPEN_TS, window.openCatalogModal,
 *                           window.closeCatalogModal, window.toggleMenuDrawer,
 *                           window.closeFullscreenModule, window.dismissPlayBanner,
 *                           window.launchOneTapServiceScreen, window.healHomeVerticalsInstantly,
 *                           window.toggleCategoryAccordion1Tap, window.RM_CATALOG_HYDRATOR
 *   - CALLS EXTERNAL APIs : window.RM_CATALOG_DOM_ENGINE.*, window.RM_FULLSCREEN_CONTROLLER.*,
 *                           window.RM_HomeGrid.render, window.renderHomeMacroGrid,
 *                           window.renderFavorites, window.updatePinButtonsUI
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #verticalTilesGrid, #categoryModal, #rm-fullscreen-view,
 *                           #fs-module-title, #playStoreInstallBanner, #pwa-install-banner, [data-cat-id]
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : 0ms instant modal open/close and Capture-Phase 1-Tap Accordion toggle
 *                     with 220ms debounce to prevent double-toggle race conditions (1 - 1 = 0).
 *   - SCROLL SAFETY : touch-action: manipulation, -webkit-overflow-scrolling: touch, touchmove
 *                     delta guard, and overflow-x: hidden to prevent scroll lock.
 *   - DOM SAFETY    : MutationObserver uses subtree: false to prevent recursive DOM freezes.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 23 MANDATORY FUNCTIONS INTACT):
 *   1. ensureFullscreenControllerLoaded 2. purgeStaleState             3. injectOneTapLockStyles
 *   4. healHomeVerticalsInstantly       5. forceCloseFullscreenViewport 6. normalizeFullscreenMicroAppDOM
 *   7. ensureMicroAppRendered           8. resolveCategorySubContainer  9. enforceTopLeftLargeNumbering
 *   10. installRenderDestructionShield  11. applyCategoryOpenState      12. syncAndHydrateCatalogCards
 *   13. openCatalogModal                14. closeCatalogModal           15. toggleMenuDrawer
 *   16. dismissPlayBanner               17. launchOneTapServiceScreen   18. attachCatalogHydrationObserver
 *   19. bootFastHomeAndCatalog          20. ensureSubCardsPopulated     21. updateAccordionPillUI
 *   22. findCategoryCardElement         23. installMasterOneTapAccordionEngine
 * ==============================================================================
 * 8. ONE JOB = ONE FILE & CANONICAL PATH LOCK (ANTI-DUPLICATE FILE GUARD):
 *   - SINGLE JOB RULE : Sole owner of Part-1 Catalog Hydrator, 0ms Home Healer & Modal Dispatchers.
 *   - CANONICAL PATH  : Must exist ONLY at `public/js/one-tap-catalog-hydrator.js`.
 *   - BANNED ALIASES  : Never create duplicate hydrator files or root `/js/` copies.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY) & IDEMPOTENT EXECUTION GUARD (NO DOHRAO RULE):
 *   - ZERO DOHRAO     : 50-card DOM loops are delegated to `one-tap-catalog-dom-engine.js`.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['one-tap-catalog-hydrator']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect Home Screen & Bahi-Khata.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or partial placeholders.
 *   - MOBILE EDITING  : 2-line blank spacing preserved between major functional blocks.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, PRE-MAIN GATE & CONTRACT PARITY LOCK:
 *   - VERSION SYNC    : Publishes `window.__RM_ACTIVE_CACHE_VER = '20261017_v49'`.
 *   - PIPELINE GATE   : Verified on `pre-main` Preview before merging to `main`.
 * ==============================================================================
 * 12. GITHUB ACTIONS FOLDER-B MIRROR SYNC & AI PRE-FLIGHT AUDIT TAGS:
 *   - @folder-a-ssot  : 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW (Pure Policy & Specs Only)
 *   - @folder-b-mirror: 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH (Auto-Synced via sync_drive.yml)
 *   - @ai-pre-flight  : 12-Point Header + Code auto-indexed in Folder B snapshot.
 * ==============================================================================
 */

(function () {
  'use strict';

  window.__RM_LOADED_MODULES__ = window.__RM_LOADED_MODULES__ || {};
  if (window.__RM_LOADED_MODULES__['one-tap-catalog-hydrator']) return;
  window.__RM_LOADED_MODULES__['one-tap-catalog-hydrator'] = true;

  var CACHE_VERSION = '20261017_v49';
  window.__RM_ACTIVE_CACHE_VER = CACHE_VERSION;
  var isSyncingDOM = false;
  var hasRenderedCatalogOnce = false;
  var lastAccordionTapTs = 0;
  var touchStartX = 0;
  var touchStartY = 0;
  var wasTouchDragged = false;

  // Shared state across Part 1 (Hydrator), Part 1B (DOM Engine) and Part 2 (1-Tap Bridge)
  var openStateMap = window.__RM_OPEN_CAT_STATE || { '15': true, '16': true };
  window.__RM_OPEN_CAT_STATE = openStateMap;
  window.__RM_LAST_MODAL_OPEN_TS = window.__RM_LAST_MODAL_OPEN_TS || 0;

  // Google Play Store Official Top 12 High-Revenue Verticals (World & India) in Ascending A-Z Order (15 = House & Home)
  var CORE_12_VERTICALS = [
    { seq: '02', catId: 'c02', icon: '🛵', en: 'Auto & Vehicles', hi: 'बाइक/कार रिपेयर, वाशिंग व गैराज' },
    { seq: '05', catId: 'c05', icon: '💼', en: 'Business', hi: 'व्यापार, थोक मंडी व उधार बहीखाता' },
    { seq: '07', catId: 'c07', icon: '📄', en: 'Communication', hi: 'सीएससी फॉर्म व सत्यापित मोहल्ला डायरेक्टरी' },
    { seq: '08', catId: 'c08', icon: '💍', en: 'Dating', hi: 'सामाजिक विवाह, कुंडली व रिश्ते' },
    { seq: '09', catId: 'c09', icon: '🎓', en: 'Education', hi: 'शिक्षा, मॉक टेस्ट व कौशल प्रशिक्षण' },
    { seq: '10', catId: 'c10', icon: '🎮', en: 'Entertainment', hi: 'मनोरंजन, इवेंट्स व 18 देसी खेल' },
    { seq: '12', catId: 'c12', icon: '💰', en: 'Finance', hi: 'वित्त, बचत लेजर व बिल भुगतान' },
    { seq: '13', catId: 'c13', icon: '🍲', en: 'Food & Drink', hi: 'ढाबा भोजन, टिफिन व स्ट्रीट फूड' },
    { seq: '15', catId: 'c15', icon: '🏠', en: 'House & Home', hi: 'घर, मिस्त्री, कमरा व किराया बहीखाता' },
    { seq: '19', catId: 'c19', icon: '💊', en: 'Medical', hi: 'दवाइयां, डॉक्टर परामर्श व जांच' },
    { seq: '26', catId: 'c26', icon: '🛒', en: 'Shopping', hi: 'किराना, दैनिक राशन व लोकल शॉपिंग' },
    { seq: '30', catId: 'c30', icon: '🚖', en: 'Travel & Local', hi: 'यात्रा, लोकल ऑटो व कमर्शियल वाहन' }
  ];


  // Auto-load & Preload decoupled Home Grid Engine, Fullscreen Micro-App Controller, Part-1B Catalog DOM Engine & Games Bridge
  (function ensureFullscreenControllerLoaded() {
    var head = document.head || document.documentElement;
    var modules = [
      { id: 'rm-home-grid-engine-script', src: '/js/home-grid-engine.js' },
      { id: 'rm-fs-microapp-controller-script', src: '/js/fullscreen-microapp-controller.js' },
      { id: 'rm-catalog-dom-engine-script', src: '/js/one-tap-catalog-dom-engine.js' },
      { id: 'rm-games-ent-bridge-script', src: '/js/universal-catalog/games-entertainment-bridge.js' }
    ];
    for (var i = 0; i < modules.length; i++) {
      if (!document.getElementById(modules[i].id)) {
        var fullUrl = modules[i].src + '?v=' + CACHE_VERSION;
        var preload = document.createElement('link');
        preload.rel = 'preload';
        preload.as = 'script';
        preload.href = fullUrl;
        head.appendChild(preload);

        var s = document.createElement('script');
        s.id = modules[i].id;
        s.src = fullUrl;
        s.async = true;
        if (modules[i].id === 'rm-home-grid-engine-script') {
          s.onload = function () { healHomeVerticalsInstantly(); };
        }
        head.appendChild(s);
      }
    }
  })();


  // 0. Instant 0ms Healer for "वर्टिकल्स लोड हो रहे हैं...", Catalog Header "18 Games Active" & Home Scroll Unlock
  function healHomeVerticalsInstantly() {
    try {
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';

      var banner = document.getElementById('playStoreInstallBanner') || document.getElementById('pwa-install-banner');
      if (banner && !window.__RM_USER_REQUESTED_INSTALL) {
        banner.classList.add('hidden');
        banner.style.setProperty('display', 'none', 'important');
      }

      if (window.RM_HomeGrid && typeof window.RM_HomeGrid.render === 'function') {
        try { window.RM_HomeGrid.render(); } catch (e) {}
      }
      if (typeof window.renderHomeMacroGrid === 'function') {
        try { window.renderHomeMacroGrid(); } catch (e) {}
      }
      var nodes = document.querySelectorAll('div, p, span, section');
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        var txt = (el.textContent || '').trim();
        if (el.children.length === 0 && txt.indexOf('Games Active') !== -1 && txt !== '32 Categories • 18 Games Active') {
          el.textContent = '32 Categories • 18 Games Active';
        }
        if (el.children.length === 0 && txt.indexOf('खेल व मनोरंजन') !== -1 && (txt.indexOf('(1 ') !== -1 || txt.indexOf('(17 ') !== -1)) {
          el.textContent = '🎮 खेल व मनोरंजन (18 श्रेणियां उपलब्ध)';
        }
        if (el.children.length === 0 && txt.indexOf('वर्टिकल्स लोड हो रहे हैं') !== -1) {
          var box = el.parentElement || el;
          box.className = 'grid grid-cols-2 gap-2.5 px-4 mb-24 max-w-lg mx-auto';
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
        }
      }
      if (typeof window.renderFavorites === 'function') {
        try { window.renderFavorites(); } catch (e) {}
      }
    } catch (err) {}
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


  // 2. INJECT ZEL 1-TAP INSTANT TOUCH, SUB-CONTAINER VISIBILITY LOCK, HORIZONTAL BAR FIX & TOP-LEFT LARGE NUMBERING CSS
  (function injectOneTapLockStyles() {
    var existing = document.getElementById('rm-zel-one-tap-lock');
    var style = existing || document.createElement('style');
    style.id = 'rm-zel-one-tap-lock';
    style.textContent = [
      'html, body { background-color: #0b0f19 !important; overflow-x: hidden !important; max-width: 100vw !important; width: 100% !important; overflow-y: auto !important; -webkit-overflow-scrolling: touch !important; }',
      'body { padding-bottom: 110px !important; min-height: 100vh !important; }',
      '::-webkit-scrollbar:horizontal { display: none !important; height: 0 !important; width: 0 !important; }',
      '#verticalTilesGrid { padding-bottom: 32px !important; margin-bottom: 24px !important; content-visibility: auto !important; }',
      '#playStoreInstallBanner, #pwa-install-banner { display: none !important; }',
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
    document.body.style.overflowY = 'auto';
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
      var fromEngine = window.RM_CATALOG_DOM_ENGINE.resolveCategorySubContainer(catEl, rawId, cleanNum);
      if (fromEngine) return fromEngine;
    }
    var intNum = parseInt(cleanNum, 10);
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    return (catEl && catEl.querySelector('[id^="sub-"], [data-sub-container], .rm-sub-container')) ||
           document.getElementById('sub-c' + paddedNum) ||
           document.getElementById('sub-c' + cleanNum) ||
           document.getElementById('sub-g' + paddedNum) ||
           document.getElementById('sub-g' + cleanNum) ||
           document.getElementById('sub-' + paddedNum) ||
           document.getElementById('sub-' + cleanNum);
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


  // Helper 20: Guarantee 3 Sub-Cards (XX-1, XX-2, XX-3) exist inside subContainer when expanded
  function ensureSubCardsPopulated(catEl, subContainer, intNum, paddedNum) {
    if (!subContainer || subContainer.children.length > 0) return;
    var enTitleEl = catEl ? catEl.querySelector('h3, h4, .text-white.font-bold, .text-slate-100.font-black, .text-xl') : null;
    var parentEn = enTitleEl ? (enTitleEl.textContent || '').replace(/^\d+\.\s*/, '').trim() : ('Category ' + paddedNum);
    var subTemplates = [
      { idx: 1, tag: 'प्रमुख सेवा (#1 मांग)', en: parentEn + ' — Hub 1', hi: 'तत्काल बुकिंग, सत्यापित विशेषज्ञ व होम सर्विस', badge: '⚡ 15-मिनट त्वरित सेवा' },
      { idx: 2, tag: 'डिजिटल टूल व बहीखाता', en: parentEn + ' — Ledger & Pass', hi: 'डिजिटल हिसाब, ऑटो-रसीद व मासिक पास प्रबंधन', badge: '🧾 ऑटो-बिलिंग व पास' },
      { idx: 3, tag: '0% कमीशन लोकल नेटवर्क', en: parentEn + ' — Local Directory', hi: 'पिनकोड अनुसार सीधे स्थानीय प्रदाता से जुड़ें (0% दलाली)', badge: '📍 पिनकोड डायरेक्ट कनेक्ट' }
    ];
    subContainer.innerHTML = subTemplates.map(function (t) {
      var subCode = paddedNum + '-' + t.idx;
      var safeEn = t.en.replace(/'/g, '');
      var safeHi = t.hi.replace(/'/g, '');
      return '<div data-sub-code="' + subCode + '" class="bg-[#081226] border border-cyan-500/40 rounded-2xl p-4 mt-3 shadow-xl">' +
        '<div class="flex items-center justify-between mb-1.5">' +
          '<span class="rm-sublevel-num-badge">' + subCode + '.</span>' +
          '<span class="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700">' + t.tag + '</span>' +
        '</div>' +
        '<div class="text-base font-black text-white leading-snug">' + t.en + '</div>' +
        '<div class="text-xs font-bold text-emerald-400 mt-0.5 mb-2">' + t.hi + '</div>' +
        '<div class="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 mb-3">' + t.badge + '</div>' +
        '<div class="flex items-center gap-2 mt-2 pt-2 border-t border-slate-800/80">' +
          '<button type="button" onclick="window.toggleFavoriteItem && window.toggleFavoriteItem(\'' + subCode + '\', \'' + safeEn + '\', \'' + safeHi + '\')" class="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200">📌 पिन</button>' +
          '<button type="button" onclick="window.launchOneTapServiceScreen && window.launchOneTapServiceScreen(\'' + safeEn + '\', \'' + safeHi + '\', \'' + subCode + '\')" class="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200">▶ वीडियो</button>' +
          '<button type="button" onclick="window.launchOneTapServiceScreen && window.launchOneTapServiceScreen(\'' + safeEn + '\', \'' + safeHi + '\', \'' + subCode + '\')" class="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs text-center shadow-md">खोलें →</button>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  // Helper 21: Instantly Sync "और देखें ▼" ⇄ "समेटें ▲" Pill Button on Parent Card
  function updateAccordionPillUI(catEl, isOpen) {
    if (!catEl) return;
    var candidates = catEl.querySelectorAll('button, span, div');
    for (var i = 0; i < candidates.length; i++) {
      var el = candidates[i];
      if (el.closest('[id^="sub-"]')) continue;
      if (el.children.length === 0) {
        var txt = (el.textContent || '').trim();
        if (txt.indexOf('और देखें') !== -1 || txt.indexOf('समेटें') !== -1 || txt.indexOf('सेवाएं') !== -1) {
          el.textContent = isOpen ? 'समेटें ▲' : 'और देखें ▼';
          var pill = el.tagName === 'BUTTON' ? el : (el.parentElement && el.parentElement.tagName === 'BUTTON' ? el.parentElement : el);
          pill.style.setProperty('border-color', isOpen ? 'rgba(244,63,94,0.75)' : 'rgba(16,185,129,0.75)', 'important');
          pill.style.setProperty('color', isOpen ? '#fda4af' : '#6ee7b7', 'important');
          pill.style.setProperty('background-color', isOpen ? 'rgba(76,5,25,0.55)' : 'rgba(6,78,59,0.45)', 'important');
          break;
        }
      }
    }
  }


  function applyCategoryOpenState(catEl, rawId, cleanNum, isOpen) {
    var intNum = parseInt(cleanNum, 10) || 1;
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    openStateMap[String(intNum)] = Boolean(isOpen);
    openStateMap[paddedNum] = Boolean(isOpen);
    openStateMap['c' + paddedNum] = Boolean(isOpen);
    openStateMap['c' + intNum] = Boolean(isOpen);
    openStateMap['g' + paddedNum] = Boolean(isOpen);
    if (rawId) openStateMap[rawId] = Boolean(isOpen);

    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.applyCategoryOpenState === 'function') {
      try { window.RM_CATALOG_DOM_ENGINE.applyCategoryOpenState(catEl, rawId, cleanNum, isOpen); } catch (e) {}
    }

    var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);
    if (!subContainer && catEl) {
      subContainer = document.createElement('div');
      subContainer.id = (intNum >= 33 ? 'sub-g' : 'sub-c') + paddedNum;
      subContainer.className = 'mt-3 space-y-3';
      catEl.appendChild(subContainer);
    }
    if (!subContainer) return false;
    if (isOpen) {
      ensureSubCardsPopulated(catEl, subContainer, intNum, paddedNum);
    }
    subContainer.classList.toggle('hidden', !isOpen);
    subContainer.setAttribute('data-rm-collapsed', isOpen ? 'false' : 'true');
    subContainer.style.setProperty('display', isOpen ? 'block' : 'none', 'important');
    updateAccordionPillUI(catEl, isOpen);
    return true;
  }

  function syncAndHydrateCatalogCards() {
    healHomeVerticalsInstantly();
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards === 'function') {
      hasRenderedCatalogOnce = true;
      return window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards();
    }
  }


  // Helper 22: Locate Category Card Element (01. to 50.) Reliably Across Livelihood & Games
  function findCategoryCardElement(target, modal) {
    if (!target || !modal) return null;
    var direct = target.closest('[data-cat-id], [id^="cat-c"], [id^="cat-g"], [data-game-cat]');
    if (direct && modal.contains(direct)) return direct;

    var cur = target;
    while (cur && cur !== modal && cur !== document.body) {
      if (cur.tagName === 'DIV') {
        var txt = (cur.textContent || '');
        if (txt.indexOf('और देखें') !== -1 || txt.indexOf('समेटें') !== -1) {
          var badges = cur.querySelectorAll('.rm-toplevel-num-badge, span, div');
          var numFound = '';
          var badgeCount = 0;
          for (var i = 0; i < badges.length && i < 25; i++) {
            var bTxt = (badges[i].textContent || '').trim();
            var m = bTxt.match(/^(0?[1-9]|[1-4][0-9]|50)\.$/);
            if (m && badges[i].children.length === 0) {
              numFound = m[1];
              badgeCount++;
            }
          }
          if (badgeCount === 1 && numFound) {
            var nInt = parseInt(numFound, 10);
            var nPad = (nInt < 10 ? '0' : '') + nInt;
            if (!cur.getAttribute('data-cat-id')) {
              cur.setAttribute('data-cat-id', (nInt >= 33 ? 'g' : 'c') + nPad);
            }
            return cur;
          }
        }
      }
      cur = cur.parentElement;
    }
    return null;
  }

  // Helper 23: Authoritative Capture-Phase 1-Tap Accordion Engine for All 50 Categories
  function installMasterOneTapAccordionEngine() {
    if (window.__RM_MASTER_ACCORDION_INSTALLED) return;
    window.__RM_MASTER_ACCORDION_INSTALLED = true;

    window.addEventListener('touchstart', function (e) {
      if (e.touches && e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        wasTouchDragged = false;
      }
    }, { capture: true, passive: true });

    window.addEventListener('touchmove', function (e) {
      if (e.touches && e.touches.length === 1) {
        if (Math.abs(e.touches[0].clientX - touchStartX) > 10 || Math.abs(e.touches[0].clientY - touchStartY) > 10) {
          wasTouchDragged = true;
        }
      }
    }, { capture: true, passive: true });

    window.addEventListener('touchend', function (e) {
      var modal = document.getElementById('categoryModal');
      if (!modal || modal.classList.contains('hidden') || !modal.contains(e.target)) return;
      if (e.target.closest('[id^="sub-"]')) return;
      var catEl = findCategoryCardElement(e.target, modal);
      if (catEl) {
        e.stopPropagation();
      }
    }, true);

    window.addEventListener('click', function (e) {
      if (wasTouchDragged) return;
      var modal = document.getElementById('categoryModal');
      if (!modal || modal.classList.contains('hidden') || !modal.contains(e.target)) return;

      var target = e.target;
      if (target.closest('[onclick*="closeCatalogModal"], [onclick*="toggleMenuDrawer"]')) return;
      if (target.closest('[id^="sub-"]')) return;

      var catEl = findCategoryCardElement(target, modal);
      if (!catEl) return;

      var now = Date.now();
      if (now - lastAccordionTapTs < 220) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return;
      }
      lastAccordionTapTs = now;

      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      var rawId = catEl.getAttribute('data-cat-id') || catEl.id || '';
      var numMatch = rawId.match(/(\d+)/);
      var cleanNum = numMatch ? numMatch[1] : '';
      if (!cleanNum) {
        var badgeEl = catEl.querySelector('.rm-toplevel-num-badge');
        if (badgeEl) {
          var bm = (badgeEl.textContent || '').match(/(\d+)/);
          if (bm) cleanNum = bm[1];
        }
      }
      if (!cleanNum) return;

      var intNum = parseInt(cleanNum, 10);
      var paddedNum = (intNum < 10 ? '0' : '') + intNum;
      var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);
      var isCurrentlyOpen = false;
      if (subContainer) {
        var disp = window.getComputedStyle(subContainer).display;
        isCurrentlyOpen = disp !== 'none' && subContainer.getAttribute('data-rm-collapsed') !== 'true' && !subContainer.classList.contains('hidden');
      }

      var nextOpen = !isCurrentlyOpen;
      isSyncingDOM = true;
      try {
        applyCategoryOpenState(catEl, rawId || ('c' + paddedNum), String(intNum), nextOpen);
      } finally {
        setTimeout(function () { isSyncingDOM = false; }, 120);
      }
    }, true);
  }
  window.toggleCategoryAccordion1Tap = applyCategoryOpenState;


  // 3. GLOBAL MODAL & DRAWER DISPATCHERS (100% ZEL PRESERVED + 0ms NON-BLOCKING PAINT)
  window.openCatalogModal = function () {
    var m = document.getElementById('categoryModal');
    if (!m) return;
    window.__RM_LAST_MODAL_OPEN_TS = Date.now();
    m.classList.remove('hidden');
    m.style.setProperty('display', 'flex', 'important');
    if (!hasRenderedCatalogOnce) {
      syncAndHydrateCatalogCards();
      setTimeout(syncAndHydrateCatalogCards, 10);
      setTimeout(syncAndHydrateCatalogCards, 50);
      setTimeout(syncAndHydrateCatalogCards, 140);
      setTimeout(syncAndHydrateCatalogCards, 260);
    } else {
      setTimeout(healHomeVerticalsInstantly, 10);
    }
    if (typeof window.updatePinButtonsUI === 'function') window.updatePinButtonsUI();
  };

  window.closeCatalogModal = function () {
    if (Date.now() - (window.__RM_LAST_MODAL_OPEN_TS || 0) < 180) return;
    var m = document.getElementById('categoryModal');
    if (!m) return;
    m.classList.add('hidden');
    m.style.setProperty('display', 'none', 'important');
    document.body.style.overflowY = 'auto';
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
    launchOneTapServiceScreen: launchOneTapServiceScreen,
    ensureSubCardsPopulated: ensureSubCardsPopulated,
    updateAccordionPillUI: updateAccordionPillUI,
    findCategoryCardElement: findCategoryCardElement
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
    installMasterOneTapAccordionEngine();
    healHomeVerticalsInstantly();
    setTimeout(healHomeVerticalsInstantly, 80);
    setTimeout(healHomeVerticalsInstantly, 250);
    attachCatalogHydrationObserver();
    var idleFn = window.requestIdleCallback || function (cb) { setTimeout(cb, 150); };
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
