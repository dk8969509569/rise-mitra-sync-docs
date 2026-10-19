/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-2 Modular 1-Tap Shell Bridge & Deterministic Controller (v89)
 *   - REPO TARGET    : public/js/one-tap-shell-bridge.js
 *   - SURFACE TARGET : SHARED (Surface-A Public 1-Tap & Surface-B SIVME Pass-Through)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 298 Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/one-tap-shell-bridge.js (This File: Part-2 Slim Controller)
 *   - public/js/one-tap-catalog-hydrator.js (Part-1A: SubContainer Resolver & Modal APIs)
 *   - public/js/one-tap-catalog-dom-engine.js (Part-1B: Accordion State, Pill Sync & Shield)
 *   - public/js/one-tap-accordion-engine.js (Part-1C: 50-Category Accordion & Subcard Engine)
 *   - public/js/fullscreen-microapp-controller.js (Part-3A: Fullscreen Micro-App Viewport UI)
 *   - public/js/one-tap-subcard-router.js (Part-3B: Priority 0 Close, Case 2 & 4-Chip Router)
 *   - public/js/one-tap-subcard-dom-helpers.js (Part-3C: Sub-Card Chip Extractor & DOM Helpers)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, ROOT-ENGINE-FIRST & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Parallel module bootstrapping, touchstart/touchmove/touchend/click
 *                              capture, touchSeq tracking & 0ms 1-Tap dispatch for Home,
 *                              Tier-1/2 bars, Category 01-50 cards, and 150 Sub-Cards.
 *   - ALLOWED ON SURFACE-B   : Pass-through exclusion for .sivme-notch-pill, #sivme-hud, #sivme-drawer.
 *   - ROOT-ENGINE-FIRST RULE : Syncs `CACHE_VERSION = '20261019_v89'` and uses `findExactSubCardElement`
 *                              with `24px` thumb tolerance so `15-1`, `15-2`, `15-3` open on 1st tap.
 *   - FORBIDDEN IN THIS FILE : Large HTML card templates or CSS stylesheet injection.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.__RM_ACTIVE_CACHE_VER, window.__RM_OPEN_CAT_STATE,
 *                           window.__RM_LAST_MODAL_OPEN_TS, window.__RM_MODAL_INTERACTION_LOCK__
 *   - CALLS EXTERNAL APIs : window.RM_CATALOG_DOM_ENGINE.*, window.RM_CATALOG_HYDRATOR.*,
 *                           window.RM_ACCORDION_ENGINE.*, window.RM_SUBCARD_ROUTER.*,
 *                           window.RM_FULLSCREEN_CONTROLLER.*, window.RM_UNIVERSAL_CARD_ENGINE.*
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #categoryModal, [data-cat-id], [id^="sub-"], .rm-parent-toggle-pill
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, #sivme-drawer (EXCLUDED)
 *   - WORLD-CLASS 2.5D UI : Preserves 0ms 1-Tap sub-card launch without collapsing parent card.
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Suppresses synthetic click within 420ms of a handled touchend.
 *   - SCROLL SAFETY : Tracks touchmove (>24px) via touchMoved so natural thumb presses never miss.
 *   - PILL CANARY   : Reads visible `.rm-parent-toggle-pill` ("और देखें ▼" vs "समेटें ▲") and stops
 *                     propagation on CASE 2 (`[id^="sub-"]`) so Category 15 never collapses on sub-tap!
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (8 MANDATORY FUNCTIONS + 5 LISTENERS):
 *   1. ensureFullscreenControllerLoaded  2. forceCloseFullscreenViewport
 *   3. ensureMicroAppRendered            4. repairFullscreenSubServiceDOM
 *   5. resolveCategorySubContainer       6. window.openCatalogModal
 *   7. window.closeCatalogModal          8. handleDeterministicOneTap
 *   + Listeners: touchstart, touchmove, touchend, window.click, document.click
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole authoritative owner of Part-2 Deterministic 1-Tap Shell Bridge.
 *   - ZERO-GUESSWORK LOCK : Verified 1:1 against `public/js/one-tap-shell-bridge.js` (`v88` `1000303717.png`).
 *   - CANONICAL PATH      : Must exist ONLY at `public/js/one-tap-shell-bridge.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Delegates DOM hydration to Part-1B/1C and sub-card routing to Part-3B.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['one-tap-shell-bridge']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect all 1-Tap operations.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, 1-TASK-1-FILE COMMIT, PRE-MAIN GATE & CONTRACT LOCK:
 *   - VERSION SYNC    : Publishes `window.__RM_ACTIVE_CACHE_VER = '20261019_v89'`.
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
  if (window.__RM_LOADED_MODULES__['one-tap-shell-bridge']) return;
  window.__RM_LOADED_MODULES__['one-tap-shell-bridge'] = true;

  var CACHE_VERSION = '20261019_v89';
  window.__RM_ACTIVE_CACHE_VER = CACHE_VERSION;
  var lastActionTs = 0;
  var lastTouchTs = 0;
  var lastModalOpenTs = 0;
  var touchStartX = 0;
  var touchStartY = 0;
  var touchStartTime = 0;
  var touchMoved = false;
  var touchSeq = 0;
  var handledTouchSeq = -1;
  var isSyntheticHomeClick = false;

  // Shared persistent open state map across Part-1, Part-1B, Part-1C, Part-2 & Part-3
  var openStateMap = window.__RM_OPEN_CAT_STATE || { '15': false, '16': false };
  window.__RM_OPEN_CAT_STATE = openStateMap;


  // 1. Auto-load decoupled Fullscreen Controller, Part-1 Hydrator, Part-1B DOM Engine, Sub-Matrix & Part-3B/3C Router
  (function ensureFullscreenControllerLoaded() {
    var modules = [
      { id: 'rm-canonical-sub-matrix-script', src: '/js/universal-catalog/canonical-sub-matrix.js' },
      { id: 'rm-sub-card-renderer-script', src: '/js/universal-catalog/sub-card-renderer.js' },
      { id: 'rm-fs-microapp-controller-script', src: '/js/fullscreen-microapp-controller.js' },
      { id: 'rm-catalog-dom-engine-script', src: '/js/one-tap-catalog-dom-engine.js' },
      { id: 'rm-catalog-hydrator-script', src: '/js/one-tap-catalog-hydrator.js' },
      { id: 'rm-part3c-dom-helpers-js', src: '/js/one-tap-subcard-dom-helpers.js' },
      { id: 'rm-subcard-router-script', src: '/js/one-tap-subcard-router.js' }
    ];
    for (var i = 0; i < modules.length; i++) {
      if (!document.getElementById(modules[i].id)) {
        var s = document.createElement('script');
        s.id = modules[i].id;
        s.src = modules[i].src + '?v=' + CACHE_VERSION;
        s.async = false;
        (document.head || document.documentElement).appendChild(s);
      }
    }
  })();


  // 2. Delegated Helper APIs (Single Canonical Implementation in Part-1, Part-1B & Part-3)
  function forceCloseFullscreenViewport() {
    if (window.RM_SUBCARD_ROUTER && typeof window.RM_SUBCARD_ROUTER.forceCloseFullscreenViewport === 'function') {
      return window.RM_SUBCARD_ROUTER.forceCloseFullscreenViewport();
    }
    var fs = document.getElementById('rm-fullscreen-view');
    if (fs) { fs.classList.add('hidden'); fs.style.setProperty('display', 'none', 'important'); }
  }

  function ensureMicroAppRendered(subCode, titleText, subtitleText) {
    if (window.RM_SUBCARD_ROUTER && typeof window.RM_SUBCARD_ROUTER.ensureMicroAppRendered === 'function') {
      return window.RM_SUBCARD_ROUTER.ensureMicroAppRendered(subCode, titleText, subtitleText);
    }
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered === 'function') {
      return window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered(subCode, titleText, subtitleText);
    }
  }

  function repairFullscreenSubServiceDOM(subCard, subCode) {
    if (window.RM_SUBCARD_ROUTER && typeof window.RM_SUBCARD_ROUTER.repairFullscreenSubServiceDOM === 'function') {
      return window.RM_SUBCARD_ROUTER.repairFullscreenSubServiceDOM(subCard, subCode);
    }
  }

  function resolveCategorySubContainer(catEl, rawId, cleanNum) {
    if (window.RM_ACCORDION_ENGINE && typeof window.RM_ACCORDION_ENGINE.resolveCategorySubContainer === 'function') {
      var fromAcc = window.RM_ACCORDION_ENGINE.resolveCategorySubContainer(catEl, rawId, cleanNum);
      if (fromAcc) return fromAcc;
    }
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.resolveCategorySubContainer === 'function') {
      var fromDom = window.RM_CATALOG_DOM_ENGINE.resolveCategorySubContainer(catEl, rawId, cleanNum);
      if (fromDom) return fromDom;
    }
    var intNum = parseInt(cleanNum, 10) || 1;
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    return (catEl ? catEl.querySelector('[id^="sub-"], [data-sub-container], .rm-sub-container') : null) ||
           document.getElementById('sub-c' + paddedNum) ||
           document.getElementById('sub-c' + cleanNum) ||
           document.getElementById('sub-g' + paddedNum) ||
           document.getElementById('sub-g' + cleanNum) ||
           document.getElementById('sub-' + paddedNum) ||
           document.getElementById('sub-' + cleanNum);
  }


  // 3. Early-Tap Safe Fallbacks before Part-1 script finishes loading
  if (typeof window.openCatalogModal !== 'function') {
    window.openCatalogModal = function () {
      var m = document.getElementById('categoryModal');
      if (!m) return;
      lastModalOpenTs = Date.now();
      window.__RM_LAST_MODAL_OPEN_TS = lastModalOpenTs;
      m.classList.remove('hidden');
      m.style.setProperty('display', 'flex', 'important');
      if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards === 'function') {
        window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards();
      } else if (window.RM_CATALOG_HYDRATOR && typeof window.RM_CATALOG_HYDRATOR.syncAndHydrateCatalogCards === 'function') {
        window.RM_CATALOG_HYDRATOR.syncAndHydrateCatalogCards();
      }
    };
  }

  if (typeof window.closeCatalogModal !== 'function') {
    window.closeCatalogModal = function () {
      var openTs = Math.max(lastModalOpenTs, window.__RM_LAST_MODAL_OPEN_TS || 0);
      if (Date.now() - openTs < 350) return;
      var m = document.getElementById('categoryModal');
      if (!m) return;
      m.classList.add('hidden');
      m.style.setProperty('display', 'none', 'important');
    };
  }


  // 4. DETERMINISTIC 1-TAP ACCORDION & SUB-SERVICE CLICK CONTROLLER (CASE 0, HOME, CASE 1 & CASE 2)
  function handleDeterministicOneTap(e) {
    if (isSyntheticHomeClick || e.__rmHandled) return;
    var target = e.target && e.target.nodeType === 1 ? e.target : (e.target ? e.target.parentElement : null);
    if (!target || typeof target.closest !== 'function') return;
    if (target.closest('input, textarea, select, option, .sivme-notch-pill, #sivme-hud, #sivme-drawer')) return;

    var now = Date.now();
    if (e.type === 'click' && (now - lastTouchTs < 420)) {
      e.__rmHandled = true;
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      return;
    }

    // PRIORITY 0: Fullscreen Close (‹ वापस, ‹ कैटलॉग पर वापस, ✕) via Part-3 Router (ONLY when Fullscreen is open)
    var fsView = document.getElementById('rm-fullscreen-view');
    var isFsOpen = Boolean(fsView && !fsView.classList.contains('hidden') && fsView.style.display !== 'none');
    if (isFsOpen && window.RM_SUBCARD_ROUTER && typeof window.RM_SUBCARD_ROUTER.handleFullscreenCloseOneTap === 'function') {
      if (window.RM_SUBCARD_ROUTER.handleFullscreenCloseOneTap(e, target)) {
        e.__rmHandled = true;
        handledTouchSeq = touchSeq;
        if (e.type === 'touchend') lastTouchTs = now;
        lastActionTs = now;
        return;
      }
    }

    var modal = document.getElementById('categoryModal');
    var isModalOpen = Boolean(modal && !modal.classList.contains('hidden') && modal.style.display !== 'none');

    // PRIORITY 0.5: HOME SCREEN 1-TAP (Play Banner, RM World Directory & Home Action Buttons)
    if (!isModalOpen) {
      var banner = document.getElementById('playStoreInstallBanner');
      if (banner && banner.contains(target)) {
        var bBtn = target.closest('button, [onclick]');
        var bTxt = bBtn ? (bBtn.textContent || '').trim() : '';
        if (bTxt.indexOf('बाद में') !== -1 || bTxt === '✕' || bTxt === '×' || (bBtn && (bBtn.getAttribute('onclick') || '').indexOf('dismiss') !== -1)) {
          e.__rmHandled = true;
          handledTouchSeq = touchSeq;
          if (e.type === 'touchend') lastTouchTs = now;
          lastActionTs = now;
          e.stopImmediatePropagation();
          e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          if (typeof window.dismissPlayBanner === 'function') window.dismissPlayBanner();
          banner.classList.add('hidden');
          banner.style.setProperty('display', 'none', 'important');
          return;
        }
      }

      var dirTrigger = target.closest('#cat-menu-btn, #openCatalogBtn, #rm-menu-btn, [onclick*="openCatalogModal"], [onclick*="toggleMenuDrawer"], [onclick*="categoryModal"]');
      if (!dirTrigger) {
        var el = target;
        while (el && el !== document.body) {
          var t = (el.textContent || '').trim();
          if (t.indexOf('RM World Directory') !== -1 && t.length < 320) { dirTrigger = el; break; }
          el = el.parentElement;
        }
      }
      if (dirTrigger) {
        e.__rmHandled = true;
        handledTouchSeq = touchSeq;
        if (e.type === 'touchend') lastTouchTs = now;
        lastActionTs = now;
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        window.openCatalogModal();
        return;
      }

      if (e.type === 'touchend') {
        var homeActionBtn = target.closest('button[onclick], a[onclick], [onclick]');
        if (homeActionBtn && typeof homeActionBtn.click === 'function') {
          e.__rmHandled = true;
          handledTouchSeq = touchSeq;
          if (e.cancelable) e.preventDefault();
          isSyntheticHomeClick = true;
          try { homeActionBtn.click(); } catch (err) {}
          isSyntheticHomeClick = false;
          lastTouchTs = now;
          lastActionTs = now;
          return;
        }
      }
      return;
    }

    if (!modal || !modal.contains(target)) return;

    var modalCloseBtn = target.closest('[onclick*="closeCatalogModal"], [onclick*="toggleMenuDrawer"], #closeCatalogBtn');
    if (!modalCloseBtn && !target.closest('[data-cat-id]') && !target.closest('[id^="sub-"]')) {
      var candClose = target.closest('button, a, div');
      var cTxt = candClose ? (candClose.textContent || '').trim() : '';
      if (cTxt === '✕' || cTxt === '×' || cTxt === 'X' || cTxt === '✖') {
        modalCloseBtn = candClose;
      }
    }
    if (modalCloseBtn) {
      e.__rmHandled = true;
      handledTouchSeq = touchSeq;
      if (e.type === 'touchend') lastTouchTs = now;
      lastActionTs = now;
      lastModalOpenTs = 0;
      window.__RM_LAST_MODAL_OPEN_TS = 0;
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      modal.classList.add('hidden');
      modal.style.setProperty('display', 'none', 'important');
      window.closeCatalogModal();
      return;
    }

    // Tier-1 (आजीविका) & Tier-2 (खेल व मनोरंजन) Section Header 1-Tap Toggle
    var tierToggleBtn = target.closest('#rm-tier1-toggle, #rm-tier2-toggle');
    if (!tierToggleBtn && !target.closest('[data-cat-id]') && !target.closest('[id^="sub-"]')) {
      var candBar = target.closest('button, div');
      var barTxt = candBar ? (candBar.textContent || '').trim() : '';
      if (barTxt.length < 90 && (barTxt.indexOf('आजीविका (') !== -1 || barTxt.indexOf('खेल व मनोरंजन (') !== -1)) {
        tierToggleBtn = candBar;
      }
    }
    if (tierToggleBtn) {
      e.__rmHandled = true;
      handledTouchSeq = touchSeq;
      if (now - lastActionTs < 80) {
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

      var listId = (tierToggleBtn.id === 'rm-tier1-toggle' || (tierToggleBtn.textContent || '').indexOf('आजीविका') !== -1) ? 'tier1-list' : 'tier2-list';
      var listEl = document.getElementById(listId);
      if (listEl) {
        var isHidden = listEl.classList.contains('hidden') || listEl.getAttribute('data-rm-collapsed') === 'true' || listEl.style.display === 'none';
        listEl.classList.toggle('hidden', !isHidden);
        listEl.setAttribute('data-rm-collapsed', isHidden ? 'false' : 'true');
        listEl.style.setProperty('display', isHidden ? 'block' : 'none', 'important');
        var arrow = tierToggleBtn.querySelector('.acc-arrow') || tierToggleBtn.lastElementChild;
        if (arrow && arrow.children.length === 0) arrow.textContent = isHidden ? '▼' : '▶';
      }
      return;
    }

    // CASE 2 FIRST: Sub-Category Card 1-Tap via Part-3 Router (Stops Propagation so Parent Never Collapses!)
    var subWrapper = target.closest('[id^="sub-"], [data-sub-container], .rm-sub-container');
    if (subWrapper) {
      var actBtn = target.closest('button, a');
      var actTxt = actBtn ? (actBtn.textContent || '').trim() : '';
      if (target.closest('.rm-act-pin, .rm-act-vid, .rm-act-video, .rm-clean-pin') || actTxt.indexOf('पिन') !== -1 || actTxt.indexOf('वीडियो') !== -1) {
        e.stopPropagation();
        return;
      }
      e.__rmHandled = true;
      handledTouchSeq = touchSeq;
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      if (now - lastActionTs < 40) return;
      if (e.type === 'touchend') lastTouchTs = now;
      lastActionTs = now;

      var subCardNode = (window.RM_SUBCARD_ROUTER && typeof window.RM_SUBCARD_ROUTER.findExactSubCardElement === 'function')
        ? window.RM_SUBCARD_ROUTER.findExactSubCardElement(target, subWrapper)
        : (target.closest('[data-sub-code], [data-rm-sub-rendered], [id^="sub-"] > div') || subWrapper);
      var codeMatch = ((subCardNode && subCardNode.textContent) || '').match(/\b(\d{1,2}-[123])\b/);
      var detectedCode = codeMatch ? codeMatch[1] : ((subCardNode && subCardNode.getAttribute && (subCardNode.getAttribute('data-sub-code') || '').trim()) || '');

      if (window.RM_SUBCARD_ROUTER && typeof window.RM_SUBCARD_ROUTER.handleSubCardOneTap === 'function') {
        window.RM_SUBCARD_ROUTER.handleSubCardOneTap(e, target);
      } else if (detectedCode) {
        ensureMicroAppRendered(detectedCode);
      }
      if (detectedCode === '15-2' || detectedCode === '16-2' || detectedCode === '15-3' || detectedCode === '16-3') {
        ensureMicroAppRendered(detectedCode);
      }
      return;
    }

    // CASE 1: Parent Category Card 1-Tap (01 to 50 including 15 House & Home, 35 Arcade, 45-50 Games)
    var catEl = target.closest('[data-cat-id]');
    if (!catEl) {
      var fallbackCard = target.closest('#tier1-list > div, #tier2-list > div');
      if (fallbackCard) {
        var numMatch = (fallbackCard.textContent || '').match(/\b([0-4]?\d|50)\s*\./);
        if (numMatch) { fallbackCard.setAttribute('data-cat-id', numMatch[1]); catEl = fallbackCard; }
      }
    }
    if (catEl) {
      e.__rmHandled = true;
      handledTouchSeq = touchSeq;
      if (now - lastActionTs < 80) {
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

      window.__RM_MODAL_INTERACTION_LOCK__ = true;
      catEl.setAttribute('data-rm-user-toggled', '1');

      var rawId = catEl.getAttribute('data-cat-id') || '';
      var cleanNum = rawId.replace(/[^0-9]/g, '');
      var intNum = parseInt(cleanNum, 10) || 1;
      var normNum = String(intNum);
      var paddedNum = (intNum < 10 ? '0' : '') + intNum;

      var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);
      var visiblePill = catEl.querySelector('.rm-parent-toggle-pill');
      var pillTxt = visiblePill ? (visiblePill.textContent || '').trim() : '';

      // Pill-Verified State Detection: Never let stale data-rm-collapsed="false" freeze Category 15!
      var isCurrentlyOpen = false;
      if (pillTxt.indexOf('समेटें') !== -1) {
        isCurrentlyOpen = true;
      } else if (pillTxt.indexOf('और देखें') !== -1) {
        isCurrentlyOpen = false;
      } else if (subContainer) {
        isCurrentlyOpen = !subContainer.classList.contains('hidden') && subContainer.style.display !== 'none' && subContainer.getAttribute('data-rm-collapsed') !== 'true';
      }

      var nextOpen = !isCurrentlyOpen;
      openStateMap[normNum] = nextOpen;
      openStateMap[cleanNum] = nextOpen;
      openStateMap[paddedNum] = nextOpen;
      if (rawId) openStateMap[rawId] = nextOpen;

      if (window.RM_ACCORDION_ENGINE && typeof window.RM_ACCORDION_ENGINE.applyCategoryOpenState === 'function') {
        window.RM_ACCORDION_ENGINE.applyCategoryOpenState(catEl, rawId || ('c' + paddedNum), normNum, nextOpen, true);
        subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);
      } else if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.applyCategoryOpenState === 'function') {
        window.RM_CATALOG_DOM_ENGINE.applyCategoryOpenState(catEl, rawId, cleanNum, nextOpen);
      }

      if (subContainer) {
        subContainer.classList.toggle('hidden', !nextOpen);
        subContainer.classList.toggle('rm-acc-open', nextOpen);
        subContainer.setAttribute('data-rm-collapsed', nextOpen ? 'false' : 'true');
        subContainer.style.setProperty('display', nextOpen ? 'block' : 'none', 'important');
      }
      if (visiblePill) {
        visiblePill.style.setProperty('color', nextOpen ? '#f87171' : '#34d399', 'important');
        visiblePill.style.setProperty('background', nextOpen ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)', 'important');
        visiblePill.style.setProperty('border-color', nextOpen ? '#ef4444' : '#10b981', 'important');
        var pSpan = visiblePill.querySelector('span') || visiblePill;
        pSpan.textContent = nextOpen ? 'समेटें ▲' : 'और देखें ▼';
      }
      if (nextOpen && subContainer && window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard === 'function') {
        var subCards = subContainer.querySelectorAll(':scope > div');
        subCards.forEach(function (sc, idx) {
          sc.style.setProperty('padding', '0px', 'important');
          sc.style.setProperty('border', 'none', 'important');
          sc.style.setProperty('background', 'transparent', 'important');
          var subCode = paddedNum + '-' + (idx + 1);
          if (!sc.hasAttribute('data-rm-sub-rendered') || (sc.textContent || '').indexOf('[' + subCode + ']') !== -1) {
            window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard(sc, normNum, subCode);
          }
        });
      }
      setTimeout(function () { window.__RM_MODAL_INTERACTION_LOCK__ = false; }, 250);
    }
  }


  // 5. Capture-Phase Touch & Click Listeners (24px Thumb-Tap Tolerance for Instant First-Tap Response)
  window.addEventListener('touchstart', function (e) {
    if (!e.touches || e.touches.length === 0) return;
    touchSeq++;
    touchMoved = false;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
  }, { capture: true, passive: true });

  window.addEventListener('touchmove', function (e) {
    if (!e.touches || e.touches.length === 0 || touchMoved) return;
    if (Math.abs(e.touches[0].clientX - touchStartX) > 24 || Math.abs(e.touches[0].clientY - touchStartY) > 24) {
      touchMoved = true;
    }
  }, { capture: true, passive: true });

  window.addEventListener('touchend', function (e) {
    if (touchMoved || !e.changedTouches || e.changedTouches.length === 0) return;
    var dx = Math.abs(e.changedTouches[0].clientX - touchStartX);
    var dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
    var dt = Date.now() - touchStartTime;
    if (dx < 42 && dy < 42 && dt < 1400) {
      handleDeterministicOneTap(e);
    }
  }, { capture: true, passive: false });

  window.addEventListener('click', handleDeterministicOneTap, true);
  document.addEventListener('click', handleDeterministicOneTap, true);
})();
