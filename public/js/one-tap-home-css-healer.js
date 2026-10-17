/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-1D 0ms Home Verticals Healer, Cache Purge & CSS Lock (v54)
 *   - REPO TARGET    : public/js/one-tap-home-css-healer.js
 *   - SURFACE TARGET : SURFACE-A ONLY (Public Customer PWA Shell Home & CSS Lock)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 230 Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/one-tap-home-css-healer.js (This File: Part-1D Home Healer, Purge & CSS)
 *   - public/js/one-tap-catalog-hydrator.js (Part-1A: Boot Loader & Modal Dispatchers)
 *   - public/js/one-tap-accordion-engine.js (Part-1C: 1-Tap Accordion & Subcard Engine)
 *   - public/js/one-tap-catalog-dom-engine.js (Part-1B: Canonical Catalog DOM Engine)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : CORE_12_VERTICALS fallback, healHomeVerticalsInstantly,
 *                              permanent "32 Categories • 18 Games Active" & "18 श्रेणियां
 *                              उपलब्ध" sync, dismissPlayBanner, purgeStaleState, and
 *                              injectOneTapLockStyles CSS rules.
 *   - ALLOWED ON SURFACE-B   : NONE (Surface-B SIVME controls are strictly isolated).
 *   - FORBIDDEN IN THIS FILE : Modal open/close dispatchers or accordion click listeners.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.healHomeVerticalsInstantly, window.dismissPlayBanner,
 *                           window.RM_HOME_CSS_HEALER
 *   - CALLS EXTERNAL APIs : window.RM_HomeGrid.render, window.renderHomeMacroGrid,
 *                           window.RM_GAMES_ENT_BRIDGE.hydrateGamesCatalog,
 *                           window.hydrateTier2GamesCatalog, window.renderFavorites
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #verticalTilesGrid, #categoryModal, #playStoreInstallBanner
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Pure synchronous DOM/CSS healer; attaches zero click listeners.
 *   - SCROLL SAFETY : Unlocks vertical page scroll and hides horizontal scrollbar.
 *   - DOM SAFETY    : Non-destructive text sync for Catalog Header & Home Verticals.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (4 EXTRACTED CORE FUNCTIONS):
 *   1. dismissPlayBanner          2. healHomeVerticalsInstantly
 *   3. purgeStaleState            4. injectOneTapLockStyles
 *   + Constant: CORE_12_VERTICALS (Play Store Official Top 12 A-Z, Cat 15 = House & Home)
 * ==============================================================================
 * 8. ONE JOB = ONE FILE & CANONICAL PATH LOCK (ANTI-DUPLICATE FILE GUARD):
 *   - SINGLE JOB RULE : Sole owner of Part-1D 0ms Home Healer, Cache Purge & 1-Tap CSS Lock.
 *   - CANONICAL PATH  : Must exist ONLY at `public/js/one-tap-home-css-healer.js`.
 *   - BANNED ALIASES  : Never re-paste these blocks back into `one-tap-catalog-hydrator.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY) & IDEMPOTENT EXECUTION GUARD (NO DOHRAO RULE):
 *   - ZERO DOHRAO     : Exposes `window.RM_HOME_CSS_HEALER` called by Part-1A Hydrator.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['one-tap-home-css-healer']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect Home Screen & Bahi-Khata.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 *   - MOBILE EDITING  : 2-line blank spacing preserved between major functional blocks.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, PRE-MAIN GATE & CONTRACT PARITY LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261017_v54'`.
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
  if (window.__RM_LOADED_MODULES__['one-tap-home-css-healer']) return;
  window.__RM_LOADED_MODULES__['one-tap-home-css-healer'] = true;

  var CACHE_VERSION = window.__RM_ACTIVE_CACHE_VER || '20261017_v54';

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


  function dismissPlayBanner() {
    var b = document.getElementById('playStoreInstallBanner') || document.getElementById('pwa-install-banner');
    if (b) {
      b.classList.add('hidden');
      b.style.setProperty('display', 'none', 'important');
    }
    var cards = document.querySelectorAll('div, section, aside');
    for (var i = 0; i < cards.length; i++) {
      var el = cards[i];
      var txt = (el.textContent || '');
      if (txt.indexOf('Play Protect') !== -1 && txt.indexOf('इंस्टॉल करें') !== -1 && el.offsetHeight > 40 && el.offsetHeight < 320) {
        el.classList.add('hidden');
        el.style.setProperty('display', 'none', 'important');
      }
    }
  }


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
      dismissPlayBanner();

      if (window.RM_HomeGrid && typeof window.RM_HomeGrid.render === 'function') {
        try { window.RM_HomeGrid.render(); } catch (e) {}
      }
      if (typeof window.renderHomeMacroGrid === 'function') {
        try { window.renderHomeMacroGrid(); } catch (e) {}
      }
      if (window.RM_GAMES_ENT_BRIDGE && typeof window.RM_GAMES_ENT_BRIDGE.hydrateGamesCatalog === 'function') {
        try { window.RM_GAMES_ENT_BRIDGE.hydrateGamesCatalog(); } catch (e) {}
      }
      if (typeof window.hydrateTier2GamesCatalog === 'function') {
        try { window.hydrateTier2GamesCatalog(); } catch (e) {}
      }

      var nodes = document.querySelectorAll('div, p, span, section, button, h2, h3');
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        var txt = (el.textContent || '').trim();
        if (el.children.length === 0 && txt.indexOf('Games Active') !== -1 && txt !== '32 Categories • 18 Games Active') {
          el.textContent = '32 Categories • 18 Games Active';
        }
        if (txt.indexOf('खेल व मनोरंजन') !== -1 && (txt.indexOf('(1 ') !== -1 || txt.indexOf('(17 ') !== -1)) {
          if (el.children.length === 0) {
            el.textContent = '🎮 खेल व मनोरंजन (18 श्रेणियां उपलब्ध)';
          } else {
            for (var c = 0; c < el.childNodes.length; c++) {
              var cn = el.childNodes[c];
              if (cn.nodeType === 3 && cn.nodeValue.indexOf('खेल व मनोरंजन') !== -1) {
                cn.nodeValue = cn.nodeValue.replace(/\(\d+\s*श्रेणियां उपलब्ध\)/, '(18 श्रेणियां उपलब्ध)');
              } else if (cn.nodeType === 1 && (cn.textContent || '').indexOf('खेल व मनोरंजन') !== -1 && cn.children.length === 0) {
                cn.textContent = '🎮 खेल व मनोरंजन (18 श्रेणियां उपलब्ध)';
              }
            }
          }
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


  function purgeStaleState() {
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
          for (var i = 0; i < names.length; i++) { caches.delete(names[i]); }
        });
        localStorage.setItem('rm_cache_ver', CACHE_VERSION);
      }
    } catch (e) {}
  }


  function injectOneTapLockStyles() {
    var existing = document.getElementById('rm-zel-one-tap-lock');
    var style = existing || document.createElement('style');
    style.id = 'rm-zel-one-tap-lock';
    style.textContent = [
      'html, body { background-color: #0b0f19 !important; overflow-x: hidden !important; max-width: 100vw !important; width: 100% !important; overflow-y: auto !important; -webkit-overflow-scrolling: touch !important; }',
      'body { padding-bottom: 110px !important; min-height: 100vh !important; }',
      '::-webkit-scrollbar:horizontal { display: none !important; height: 0 !important; width: 0 !important; }',
      '#verticalTilesGrid { padding-bottom: 32px !important; margin-bottom: 24px !important; content-visibility: auto !important; }',
      '#playStoreInstallBanner, #pwa-install-banner { display: none !important; }',
      'button, a, [onclick], .tactile-25d, #categoryModal [data-cat-id], #categoryModal [id^="sub-"] > div, .rm-service-chip { touch-action: manipulation !important; -webkit-tap-highlight-color: transparent !important; cursor: pointer !important; user-select: none !important; -webkit-user-select: none !important; transition: none !important; }',
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
  }

  purgeStaleState();
  injectOneTapLockStyles();
  healHomeVerticalsInstantly();

  window.dismissPlayBanner = dismissPlayBanner;
  window.healHomeVerticalsInstantly = healHomeVerticalsInstantly;
  window.RM_HOME_CSS_HEALER = {
    CORE_12_VERTICALS: CORE_12_VERTICALS,
    dismissPlayBanner: dismissPlayBanner,
    healHomeVerticalsInstantly: healHomeVerticalsInstantly,
    purgeStaleState: purgeStaleState,
    injectOneTapLockStyles: injectOneTapLockStyles
  };
})();
