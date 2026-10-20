/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-1A Universal Pure-Reference Hydrator (v100 PERMANENT LOCK)
 *   - REPO TARGET    : public/js/one-tap-catalog-hydrator.js
 *   - SURFACE TARGET : SURFACE-A ONLY (With Conditional Loader for Surface-B SIVME)
 *   - HOST BINDING   : Surface-A (public/index.html) | Surface-B (public/owner-console.html)
 *   - SIZE BUDGET    : <= 298 Lines Total (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/one-tap-catalog-hydrator.js (This File: Permanent Frozen Universal Switchboard)
 *   - public/js/one-tap-home-css-healer.js (Part-1D: 0ms Home Verticals Healer & CSS Lock)
 *   - public/js/one-tap-accordion-engine.js (Part-1C: 1-Tap Accordion & Subcard Engine)
 *   - public/js/one-tap-catalog-dom-engine.js (Part-1B: Canonical Catalog DOM Engine)
 *   - public/js/home-grid-engine.js (Companion 12 Core Cashflow Verticals Grid Engine)
 *   - public/js/fullscreen-microapp-controller.js (Part-3A: Fullscreen Micro-App Controller)
 *   - public/js/one-tap-subcard-router.js & one-tap-subcard-dom-helpers.js (Part-3B/3C: Sub-Card Router)
 *   - public/js/catalog/category-XX/* (Isolated Category 01-50 Controllers & Sub-Category Engines)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, UNIVERSAL PURE-REFERENCE & SURFACE ISOLATION LOCK:
 *   - ALLOWED ON SURFACE-A   : Auto-epoch cache-busted script preloader, dynamic 01-50 category
 *                              controller registry (`window.RM_CATEGORY_CONTROLLERS`), and
 *                              0ms modal open/close dispatchers with zero home re-render lag.
 *   - ALLOWED ON SURFACE-B   : Conditional loading of /js/sovereign-in-situ-hud.js ONLY when
 *                              ?sivme=owner or ?sov_mode=in_situ is present in URL.
 *   - UNIVERSAL PURE-REF RULE: Permanently locked Universal Switchboard. All future Category 01-50
 *                              work happens strictly inside `public/js/catalog/category-XX/`.
 *   - FORBIDDEN IN THIS FILE : Hardcoded static cache versions that require manual edits, or
 *                              repeated Home Grid re-renders during Catalog Modal open/close.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.__RM_ACTIVE_CACHE_VER, window.RM_CATEGORY_CONTROLLERS,
 *                           window.RM_SUB_ENGINES, window.registerCategoryController,
 *                           window.__RM_OPEN_CAT_STATE, window.__RM_LAST_MODAL_OPEN_TS,
 *                           window.openCatalogModal, window.closeCatalogModal,
 *                           window.toggleMenuDrawer, window.closeFullscreenModule,
 *                           window.dismissPlayBanner, window.launchOneTapServiceScreen,
 *                           window.healHomeVerticalsInstantly, window.RM_CATALOG_HYDRATOR
 *   - CALLS EXTERNAL APIs : window.RM_CATEGORY_CONTROLLERS[catNum], window.RM_CAT15_CONTROLLER.*,
 *                           window.RM_ACCORDION_ENGINE.*, window.RM_CATALOG_DOM_ENGINE.*
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #verticalTilesGrid, #categoryModal, #rm-fullscreen-view,
 *                           #fs-module-title, #playStoreInstallBanner, #pwa-install-banner, [data-cat-id]
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : 0ms modal open/close without triggering redundant Home Grid re-renders.
 *   - SCROLL SAFETY : Restores body.style.overflowY = 'auto' on modal/fullscreen close.
 *   - DOM SAFETY    : MutationObserver disconnects permanently once 50 cards are hydrated.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 24 FUNCTIONS INTACT):
 *   1. ensureFullscreenControllerLoaded 2. registerCategoryController   3. purgeStaleState
 *   4. injectOneTapLockStyles           5. healHomeVerticalsInstantly   6. forceCloseFullscreenViewport
 *   7. normalizeFullscreenMicroAppDOM   8. ensureMicroAppRendered       9. resolveCategorySubContainer
 *   10. enforceTopLeftLargeNumbering    11. installRenderDestructionShield 12. applyCategoryOpenState
 *   13. syncAndHydrateCatalogCards      14. openCatalogModal            15. closeCatalogModal
 *   16. toggleMenuDrawer                17. dismissPlayBanner           18. launchOneTapServiceScreen
 *   19. attachCatalogHydrationObserver  20. bootFastHomeAndCatalog      21. ensureSubCardsPopulated
 *   22. updateAccordionPillUI           23. findCategoryCardElement     24. installMasterOneTapAccordionEngine
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole owner of Part-1A Universal Reference Switchboard & Modal APIs.
 *   - ZERO-GUESSWORK LOCK : Verified 1:1 against `v96` (`1000304119.png`) with 100% ZEL parity.
 *   - CANONICAL PATH      : Must exist ONLY at `public/js/one-tap-catalog-hydrator.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Delegates all category-specific work via `window.RM_CATEGORY_CONTROLLERS`.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['one-tap-catalog-hydrator']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect Home Screen & Bahi-Khata.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, 1-TASK-1-FILE COMMIT, PRE-MAIN GATE & CONTRACT LOCK:
 *   - VERSION SYNC    : Uses automatic 5-minute rolling epoch so manual version edits are NEVER needed.
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

  // FUTURE-PROOF AUTO-CACHE BUSTER: Rolling 5-min window so Universal files NEVER need manual version edits!
  var CACHE_VERSION = 'v100_' + Math.floor(Date.now() / 300000);
  window.__RM_ACTIVE_CACHE_VER = CACHE_VERSION;
  var isSyncingDOM = false;
  var hasRenderedCatalogOnce = false;
  var hasHealedHomeOnce = false;
  var lastHydratorHealTs = 0;

  // FUTURE-PROOF PLUG-AND-PLAY REGISTRY FOR ALL 50 CATEGORIES (01 TO 50) & 150 SUB-ENGINES
  window.RM_CATEGORY_CONTROLLERS = window.RM_CATEGORY_CONTROLLERS || {};
  window.RM_SUB_ENGINES = window.RM_SUB_ENGINES || {};
  window.registerCategoryController = function (catNum, controllerObj) {
    var clean = String(catNum || '').replace(/[^0-9]/g, '');
    if (!clean || !controllerObj) return;
    var intNum = parseInt(clean, 10);
    var padded = (intNum < 10 ? '0' : '') + intNum;
    window.RM_CATEGORY_CONTROLLERS[String(intNum)] = controllerObj;
    window.RM_CATEGORY_CONTROLLERS[padded] = controllerObj;
    window.RM_CATEGORY_CONTROLLERS['c' + padded] = controllerObj;
    window.RM_CATEGORY_CONTROLLERS['g' + padded] = controllerObj;
  };

  var openStateMap = window.__RM_OPEN_CAT_STATE || { '15': false, '16': false };
  window.__RM_OPEN_CAT_STATE = openStateMap;
  window.__RM_LAST_MODAL_OPEN_TS = window.__RM_LAST_MODAL_OPEN_TS || 0;


  // 1. Non-Blocking Parallel Script Loader (Auto Cache-Busted)
  (function ensureFullscreenControllerLoaded() {
    var head = document.head || document.documentElement;
    var modules = [
      { id: 'rm-home-css-healer-script', src: '/js/one-tap-home-css-healer.js' },
      { id: 'rm-accordion-engine-script', src: '/js/one-tap-accordion-engine.js' },
      { id: 'rm-home-grid-engine-script', src: '/js/home-grid-engine.js' },
      { id: 'rm-fs-microapp-controller-script', src: '/js/fullscreen-microapp-controller.js' },
      { id: 'rm-part3c-dom-helpers-js', src: '/js/one-tap-subcard-dom-helpers.js' },
      { id: 'rm-subcard-router-script', src: '/js/one-tap-subcard-router.js' },
      { id: 'rm-cat15-independent-controller-js', src: '/js/catalog/category-15/15-house-home-controller.js' },
      { id: 'rm-catalog-dom-engine-script', src: '/js/one-tap-catalog-dom-engine.js' },
      { id: 'rm-games-ent-bridge-script', src: '/js/universal-catalog/games-entertainment-bridge.js' }
    ];
    for (var i = 0; i < modules.length; i++) {
      var existing = document.getElementById(modules[i].id);
      if (existing && existing.tagName !== 'SCRIPT') {
        if (existing.parentNode) existing.parentNode.removeChild(existing);
        existing = null;
      }
      if (!existing) {
        var s = document.createElement('script');
        s.id = modules[i].id;
        s.src = modules[i].src + '?v=' + CACHE_VERSION;
        s.async = true;
        if (modules[i].id === 'rm-accordion-engine-script') {
          s.onload = function () { installMasterOneTapAccordionEngine(); };
        }
        head.appendChild(s);
      }
    }
  })();


  // 2. One-Time Home Verticals Healer (Never Re-Renders Home Grid During Catalog Open/Close)
  function healHomeVerticalsInstantly() {
    if (window.__RM_MODAL_INTERACTION_LOCK__) return;
    var now = Date.now();
    if (hasHealedHomeOnce && now - lastHydratorHealTs < 2000) return;
    lastHydratorHealTs = now;

    try {
      window.dismissPlayBanner();
      if (!hasHealedHomeOnce) {
        if (typeof window.lockGames18StatePermanently === 'function') {
          window.lockGames18StatePermanently();
        } else if (window.RM_HOME_CSS_HEALER && typeof window.RM_HOME_CSS_HEALER.lockGames18StatePermanently === 'function') {
          window.RM_HOME_CSS_HEALER.lockGames18StatePermanently();
        }
        if (window.RM_HOME_CSS_HEALER && typeof window.RM_HOME_CSS_HEALER.healHomeVerticalsInstantly === 'function') {
          window.RM_HOME_CSS_HEALER.healHomeVerticalsInstantly();
        }
        var gridEl = document.getElementById('verticalTilesGrid');
        if (gridEl && gridEl.children.length < 12) {
          if (window.RM_HomeGrid && typeof window.RM_HomeGrid.render === 'function') window.RM_HomeGrid.render();
          else if (typeof window.renderHomeMacroGrid === 'function') window.renderHomeMacroGrid();
        }
        if (typeof window.renderFavorites === 'function') window.renderFavorites();
        hasHealedHomeOnce = true;
      }

      var modalCount = document.getElementById('modal-catalog-count');
      if (modalCount && modalCount.textContent !== '32 Categories • 18 Games Active') {
        modalCount.textContent = '32 Categories • 18 Games Active';
      }
    } catch (e) {}
  }

  function purgeStaleState() {
    if (window.RM_HOME_CSS_HEALER && typeof window.RM_HOME_CSS_HEALER.purgeStaleState === 'function') {
      return window.RM_HOME_CSS_HEALER.purgeStaleState();
    }
  }

  function injectOneTapLockStyles() {
    if (window.RM_HOME_CSS_HEALER && typeof window.RM_HOME_CSS_HEALER.injectOneTapLockStyles === 'function') {
      return window.RM_HOME_CSS_HEALER.injectOneTapLockStyles();
    }
  }
  window.healHomeVerticalsInstantly = healHomeVerticalsInstantly;


  // 3. Fullscreen Viewport Helpers & Dynamic 01-50 Pure-Reference Delegator
  function forceCloseFullscreenViewport() {
    var fs = document.getElementById('rm-fullscreen-view');
    if (fs) {
      fs.classList.add('hidden');
      fs.style.setProperty('display', 'none', 'important');
    }
    var c = document.getElementById('rm-module-container');
    if (c) {
      c.removeAttribute('data-rm-cat15-mounted');
      c.removeAttribute('data-rm-cat15-engine-live');
    }
    document.body.style.overflowY = 'auto';
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.forceCloseFullscreenViewport === 'function') {
      try { window.RM_FULLSCREEN_CONTROLLER.forceCloseFullscreenViewport(); } catch (e) {}
    }
  }

  function normalizeFullscreenMicroAppDOM(displayCode) {
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.normalizeFullscreenMicroAppDOM === 'function') {
      try { window.RM_FULLSCREEN_CONTROLLER.normalizeFullscreenMicroAppDOM(displayCode); } catch (e) {}
    }
  }

  function ensureMicroAppRendered(subCode, titleText, subtitleText) {
    var code = String(subCode || '').trim();
    var parts = code.split('-');
    var catNum = parts[0] ? String(parseInt(parts[0], 10)) : '';

    // Dynamic Pure-Reference Lookup for Any Category (01 to 50)
    var dynCtrl = (catNum && window.RM_CATEGORY_CONTROLLERS && window.RM_CATEGORY_CONTROLLERS[catNum]) ||
                  (catNum === '15' ? window.RM_CAT15_CONTROLLER : null);
    if (dynCtrl && typeof dynCtrl.openSubCategory === 'function') {
      return dynCtrl.openSubCategory(code, null, null, null);
    }
    if (window.RM_SUB_ENGINES && window.RM_SUB_ENGINES[code] && typeof window.RM_SUB_ENGINES[code].mount === 'function') {
      var container = document.getElementById('rm-module-container');
      if (container) return window.RM_SUB_ENGINES[code].mount(container);
    }
    if (window.RM_SUBCARD_ROUTER && typeof window.RM_SUBCARD_ROUTER.ensureMicroAppRendered === 'function') {
      return window.RM_SUBCARD_ROUTER.ensureMicroAppRendered(subCode, titleText, subtitleText);
    }
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered === 'function') {
      return window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered(subCode, titleText, subtitleText);
    }
  }


  // 4. Delegated Part-1C (`one-tap-accordion-engine.js`) & Part-1B (`one-tap-catalog-dom-engine.js`) Bridges
  function resolveCategorySubContainer(catEl, rawId, cleanNum) {
    if (window.RM_ACCORDION_ENGINE && typeof window.RM_ACCORDION_ENGINE.resolveCategorySubContainer === 'function') {
      return window.RM_ACCORDION_ENGINE.resolveCategorySubContainer(catEl, rawId, cleanNum);
    }
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.resolveCategorySubContainer === 'function') {
      return window.RM_CATALOG_DOM_ENGINE.resolveCategorySubContainer(catEl, rawId, cleanNum);
    }
    return catEl ? catEl.querySelector('[id^="sub-"]') : null;
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

  function ensureSubCardsPopulated(catEl, subContainer, intNum, paddedNum) {
    if (window.RM_ACCORDION_ENGINE && typeof window.RM_ACCORDION_ENGINE.ensureSubCardsPopulated === 'function') {
      return window.RM_ACCORDION_ENGINE.ensureSubCardsPopulated(catEl, subContainer, intNum, paddedNum);
    }
  }

  function updateAccordionPillUI(catEl, isOpen) {
    if (window.RM_ACCORDION_ENGINE && typeof window.RM_ACCORDION_ENGINE.updateAccordionPillUI === 'function') {
      return window.RM_ACCORDION_ENGINE.updateAccordionPillUI(catEl, isOpen);
    }
  }

  function applyCategoryOpenState(catEl, rawId, cleanNum, isOpen) {
    if (window.RM_ACCORDION_ENGINE && typeof window.RM_ACCORDION_ENGINE.applyCategoryOpenState === 'function') {
      return window.RM_ACCORDION_ENGINE.applyCategoryOpenState(catEl, rawId, cleanNum, isOpen, true);
    }
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.applyCategoryOpenState === 'function') {
      return window.RM_CATALOG_DOM_ENGINE.applyCategoryOpenState(catEl, rawId, cleanNum, isOpen);
    }
    return false;
  }

  function findCategoryCardElement(target, modal) {
    if (window.RM_ACCORDION_ENGINE && typeof window.RM_ACCORDION_ENGINE.findCategoryCardElement === 'function') {
      return window.RM_ACCORDION_ENGINE.findCategoryCardElement(target, modal);
    }
    return target ? target.closest('[data-cat-id]') : null;
  }

  function installMasterOneTapAccordionEngine() {
    if (window.RM_ACCORDION_ENGINE && typeof window.RM_ACCORDION_ENGINE.installMasterOneTapAccordionEngine === 'function') {
      return window.RM_ACCORDION_ENGINE.installMasterOneTapAccordionEngine();
    }
  }
  window.toggleCategoryAccordion1Tap = applyCategoryOpenState;

  function syncAndHydrateCatalogCards() {
    if (isSyncingDOM || window.__RM_MODAL_INTERACTION_LOCK__) return;
    isSyncingDOM = true;
    try {
      var modal = document.getElementById('categoryModal');
      var t1 = document.getElementById('tier1-list');
      var needsDomEngine = !hasRenderedCatalogOnce || (t1 && t1.children.length < 25) || (modal && modal.innerHTML.indexOf('3 विकल्प') !== -1);
      if (needsDomEngine && window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards === 'function') {
        window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards();
        if (t1 && t1.children.length >= 25 && (!modal || modal.innerHTML.indexOf('3 विकल्प') === -1)) {
          hasRenderedCatalogOnce = true;
        }
      }
    } finally {
      isSyncingDOM = false;
    }
  }


  // 5. Global Modal & Drawer Dispatchers (0.00ms Instant Open/Close)
  window.openCatalogModal = function () {
    var m = document.getElementById('categoryModal');
    if (!m) return;
    window.__RM_LAST_MODAL_OPEN_TS = Date.now();
    m.classList.remove('hidden');
    m.style.setProperty('display', 'flex', 'important');
    if (!hasRenderedCatalogOnce) {
      syncAndHydrateCatalogCards();
    }
  };

  window.closeCatalogModal = function () {
    var m = document.getElementById('categoryModal');
    if (!m) return;
    m.classList.add('hidden');
    m.style.setProperty('display', 'none', 'important');
    document.body.style.overflowY = 'auto';
  };

  window.toggleMenuDrawer = function (open) {
    var m = document.getElementById('categoryModal');
    if (open === true) window.openCatalogModal();
    else if (open === false) { window.__RM_LAST_MODAL_OPEN_TS = 0; window.closeCatalogModal(); }
    else if (m && (m.classList.contains('hidden') || m.style.display === 'none')) window.openCatalogModal();
    else window.closeCatalogModal();
  };

  window.closeFullscreenModule = forceCloseFullscreenViewport;

  window.dismissPlayBanner = function () {
    if (window.RM_HOME_CSS_HEALER && typeof window.RM_HOME_CSS_HEALER.dismissPlayBanner === 'function') {
      return window.RM_HOME_CSS_HEALER.dismissPlayBanner();
    }
    var b = document.getElementById('playStoreInstallBanner') || document.getElementById('pwa-install-banner');
    if (b) { b.classList.add('hidden'); b.style.setProperty('display', 'none', 'important'); }
  };

  function launchOneTapServiceScreen(titleText, subtitleText, subCode, preselectedChip, subCardEl, matrixEntry) {
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.launchOneTapServiceScreen === 'function') {
      window.RM_FULLSCREEN_CONTROLLER.launchOneTapServiceScreen(titleText, subtitleText, subCode, preselectedChip, subCardEl, matrixEntry);
    }
  }
  window.launchOneTapServiceScreen = launchOneTapServiceScreen;

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
    findCategoryCardElement: findCategoryCardElement,
    purgeStaleState: purgeStaleState,
    injectOneTapLockStyles: injectOneTapLockStyles,
    registerCategoryController: window.registerCategoryController
  };


  // 6. Non-Blocking Hydration Observer (Permanently Disconnects Once Hydrated)
  function attachCatalogHydrationObserver() {
    var modal = document.getElementById('categoryModal');
    if (!modal || typeof MutationObserver === 'undefined') return;
    var obs = new MutationObserver(function () {
      if (hasRenderedCatalogOnce) {
        obs.disconnect();
        return;
      }
      if (isSyncingDOM || window.__RM_MODAL_INTERACTION_LOCK__ || modal.classList.contains('hidden')) return;
      syncAndHydrateCatalogCards();
    });
    obs.observe(modal, { childList: true, subtree: false });
  }

  function bootFastHomeAndCatalog() {
    window.closeFullscreenModule = forceCloseFullscreenViewport;
    window.dismissPlayBanner();
    installMasterOneTapAccordionEngine();
    healHomeVerticalsInstantly();
    attachCatalogHydrationObserver();
    setTimeout(syncAndHydrateCatalogCards, 40);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootFastHomeAndCatalog);
  else bootFastHomeAndCatalog();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        navigator.serviceWorker.getRegistrations().then(function (regs) {
          for (var i = 0; i < regs.length; i++) { regs[i].update(); }
        });
      }, 2000);
    }, { once: true });
  }

  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('sivme') === 'owner' || urlParams.get('sov_mode') === 'in_situ') {
    var s = document.createElement('script');
    s.src = '/js/sovereign-in-situ-hud.js';
    s.async = false;
    document.body.appendChild(s);
  }
})();
