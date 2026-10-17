/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-1A Modular Catalog Hydrator & Modal Dispatcher (v52)
 *   - REPO TARGET    : public/js/one-tap-catalog-hydrator.js
 *   - SURFACE TARGET : SURFACE-A ONLY (With Conditional Loader for Surface-B SIVME)
 *   - HOST BINDING   : Surface-A (public/index.html) | Surface-B (public/owner-console.html)
 *   - SIZE BUDGET    : <= 255 Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/one-tap-catalog-hydrator.js (This File: Part-1A Loader & Modal Dispatchers)
 *   - public/js/one-tap-home-css-healer.js (Part-1D: 0ms Home Verticals Healer & CSS Lock)
 *   - public/js/one-tap-accordion-engine.js (Part-1C: 1-Tap Accordion & Subcard Engine)
 *   - public/js/one-tap-catalog-dom-engine.js (Part-1B: Canonical Catalog DOM Engine)
 *   - public/js/home-grid-engine.js (Companion 12 Core Cashflow Verticals Grid Engine)
 *   - public/js/fullscreen-microapp-controller.js (Fullscreen Micro-App Viewport Controller)
 *   - public/js/one-tap-shell-bridge.js (Part-2: Master 1-Tap Event Router)
 *   - public/js/favorites-engine.js & public/js/favorites-data-extractor.js (My Favorites Engine)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Parallel script preloader (zero hanging progress bar),
 *                              modal open/close dispatchers, install popup auto-dismissal,
 *                              fullscreen micro-app bridges, and Part-1B/1C/1D API bridges.
 *   - ALLOWED ON SURFACE-B   : Conditional loading of /js/sovereign-in-situ-hud.js ONLY when
 *                              ?sivme=owner or ?sov_mode=in_situ is present in URL.
 *   - FORBIDDEN IN THIS FILE : Cross-surface DOM leakage or dropping any v39-v51 ZEL function.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.__RM_ACTIVE_CACHE_VER, window.__RM_OPEN_CAT_STATE,
 *                           window.__RM_LAST_MODAL_OPEN_TS, window.openCatalogModal,
 *                           window.closeCatalogModal, window.toggleMenuDrawer,
 *                           window.closeFullscreenModule, window.dismissPlayBanner,
 *                           window.launchOneTapServiceScreen, window.healHomeVerticalsInstantly,
 *                           window.toggleCategoryAccordion1Tap, window.RM_CATALOG_HYDRATOR
 *   - CALLS EXTERNAL APIs : window.RM_HOME_CSS_HEALER.*, window.RM_ACCORDION_ENGINE.*,
 *                           window.RM_CATALOG_DOM_ENGINE.*, window.RM_FULLSCREEN_CONTROLLER.*,
 *                           window.updatePinButtonsUI
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #verticalTilesGrid, #categoryModal, #rm-fullscreen-view,
 *                           #fs-module-title, #playStoreInstallBanner, #pwa-install-banner, [data-cat-id]
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : 0ms modal open/close; delegates 1-Tap Accordion to Part-1C Engine.
 *   - SCROLL SAFETY : Restores body.style.overflowY = 'auto' on modal/fullscreen close.
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
 *   - SINGLE JOB RULE : Sole owner of Part-1A Boot Orchestrator, Modal Dispatchers & API Bridge.
 *   - CANONICAL PATH  : Must exist ONLY at `public/js/one-tap-catalog-hydrator.js`.
 *   - BANNED ALIASES  : Never create duplicate hydrator files or exceed 300 lines.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY) & IDEMPOTENT EXECUTION GUARD (NO DOHRAO RULE):
 *   - ZERO DOHRAO     : Calls Part-1B, Part-1C & Part-1D via `window.*` APIs (0% copy-paste).
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['one-tap-catalog-hydrator']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect Home Screen & Bahi-Khata.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 *   - MOBILE EDITING  : 2-line blank spacing preserved between major functional blocks.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, PRE-MAIN GATE & CONTRACT PARITY LOCK:
 *   - VERSION SYNC    : Publishes `window.__RM_ACTIVE_CACHE_VER = '20261017_v52'`.
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

  var CACHE_VERSION = '20261017_v52';
  window.__RM_ACTIVE_CACHE_VER = CACHE_VERSION;
  var isSyncingDOM = false;
  var hasRenderedCatalogOnce = false;

  // Shared state across Part 1A (Hydrator), Part 1B (DOM Engine), Part 1C (Accordion) and Part 1D (Healer)
  var openStateMap = window.__RM_OPEN_CAT_STATE || { '15': true, '16': true };
  window.__RM_OPEN_CAT_STATE = openStateMap;
  window.__RM_LAST_MODAL_OPEN_TS = window.__RM_LAST_MODAL_OPEN_TS || 0;


  // 1. Non-Blocking Parallel Script Loader for Part-1D Healer, Part-1C Accordion, Part-1B DOM Engine, Home Grid, Fullscreen & Games
  (function ensureFullscreenControllerLoaded() {
    var head = document.head || document.documentElement;
    var modules = [
      { id: 'rm-home-css-healer-script', src: '/js/one-tap-home-css-healer.js' },
      { id: 'rm-home-grid-engine-script', src: '/js/home-grid-engine.js' },
      { id: 'rm-accordion-engine-script', src: '/js/one-tap-accordion-engine.js' },
      { id: 'rm-fs-microapp-controller-script', src: '/js/fullscreen-microapp-controller.js' },
      { id: 'rm-catalog-dom-engine-script', src: '/js/one-tap-catalog-dom-engine.js' },
      { id: 'rm-games-ent-bridge-script', src: '/js/universal-catalog/games-entertainment-bridge.js' }
    ];
    for (var i = 0; i < modules.length; i++) {
      if (!document.getElementById(modules[i].id)) {
        var fullUrl = modules[i].src + '?v=' + CACHE_VERSION;
        var s = document.createElement('script');
        s.id = modules[i].id;
        s.src = fullUrl;
        s.async = true;
        if (modules[i].id === 'rm-home-css-healer-script' || modules[i].id === 'rm-home-grid-engine-script') {
          s.onload = function () { healHomeVerticalsInstantly(); };
        } else if (modules[i].id === 'rm-accordion-engine-script') {
          s.onload = function () { installMasterOneTapAccordionEngine(); };
        }
        head.appendChild(s);
      }
    }
  })();


  // 2. Delegated Part-1D Home & CSS Healer Bridges (`public/js/one-tap-home-css-healer.js`)
  function healHomeVerticalsInstantly() {
    try { window.dismissPlayBanner(); } catch (e) {}
    if (window.RM_HOME_CSS_HEALER && typeof window.RM_HOME_CSS_HEALER.healHomeVerticalsInstantly === 'function') {
      return window.RM_HOME_CSS_HEALER.healHomeVerticalsInstantly();
    }
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


  // 3. Fullscreen Viewport Helpers (100% v51 ZEL Intact)
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

  function ensureMicroAppRendered(subCode, titleText, subtitleText) {
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered === 'function') {
      window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered(subCode, titleText, subtitleText);
    }
  }


  // 4. Delegated Part-1C (`public/js/one-tap-accordion-engine.js`) & Part-1B (`public/js/one-tap-catalog-dom-engine.js`) Bridges
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
    if (window.RM_ACCORDION_ENGINE && typeof window.RM_ACCORDION_ENGINE.enforceTopLeftLargeNumbering === 'function') {
      return window.RM_ACCORDION_ENGINE.enforceTopLeftLargeNumbering(catEl, subContainer, paddedNum);
    }
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.enforceTopLeftLargeNumbering === 'function') {
      return window.RM_CATALOG_DOM_ENGINE.enforceTopLeftLargeNumbering(catEl, subContainer, paddedNum);
    }
  }

  function installRenderDestructionShield() {
    if (window.RM_ACCORDION_ENGINE && typeof window.RM_ACCORDION_ENGINE.installRenderDestructionShield === 'function') {
      return window.RM_ACCORDION_ENGINE.installRenderDestructionShield();
    }
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
      return window.RM_ACCORDION_ENGINE.applyCategoryOpenState(catEl, rawId, cleanNum, isOpen);
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
    healHomeVerticalsInstantly();
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards === 'function') {
      hasRenderedCatalogOnce = true;
      return window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards();
    }
  }


  // 5. Global Modal & Drawer Dispatchers (100% ZEL Preserved + 0ms Non-Blocking Paint)
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
    var cards = document.querySelectorAll('div, section, aside');
    for (var i = 0; i < cards.length; i++) {
      var el = cards[i];
      var txt = (el.textContent || '');
      if (txt.indexOf('Play Protect') !== -1 && txt.indexOf('इंस्टॉल करें') !== -1 && el.offsetHeight > 40 && el.offsetHeight < 320) {
        el.classList.add('hidden');
        el.style.setProperty('display', 'none', 'important');
      }
    }
  };

  function launchOneTapServiceScreen(titleText, subtitleText, subCode) {
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.launchOneTapServiceScreen === 'function') {
      window.RM_FULLSCREEN_CONTROLLER.launchOneTapServiceScreen(titleText, subtitleText, subCode);
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
    injectOneTapLockStyles: injectOneTapLockStyles
  };


  // 6. Hydration Observer, Fast Boot, Service Worker Sentinel & Surface-B SIVME Loader
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
    window.dismissPlayBanner();
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

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        navigator.serviceWorker.getRegistrations().then(function (regs) {
          for (var i = 0; i < regs.length; i++) {
            regs[i].update();
          }
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
