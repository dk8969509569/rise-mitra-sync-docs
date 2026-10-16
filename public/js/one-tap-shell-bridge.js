/**
 * RISE MITRA — PART 2: MODULAR 1-TAP SHELL BRIDGE & DETERMINISTIC CONTROLLER (SLIM <=300L ZEL)
 * MODULE        : Decoupled 1-Tap Controller (Calls Part-1 Hydrator & Part-3 SubCard Router APIs)
 * GOVERNANCE    : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 * REPO TARGET   : public/js/one-tap-shell-bridge.js (Target <= 300 Lines per SSOT Rule 04)
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 * ==============================================================================
 * 🔒 EXISTING MODULAR FILES LOCK (3-FILE SPLIT — ZERO DUPLICATE IMPLEMENTATION):
 *   - /js/one-tap-shell-bridge.js (This File: Part-2 Slim Controller — ~240 Lines)
 *   - /js/one-tap-catalog-hydrator.js (Part-1: SubContainer Resolver, Card Hydrator & Modal APIs)
 *   - /js/one-tap-subcard-router.js (Part-3: Priority 0 Fullscreen Close, Case 2 & 32-3 DOM Repair)
 *   - /js/fullscreen-microapp-controller.js (Dedicated 15-3/15-2 & Fullscreen UI)
 * ==============================================================================
 */

(function () {
  'use strict';

  var CACHE_VERSION = '20261016_v34';
  var lastActionTs = 0;
  var lastTouchTs = 0;
  var lastModalOpenTs = 0;
  var touchStartX = 0;
  var touchStartY = 0;
  var touchStartTime = 0;
  var isSyntheticHomeClick = false;

  // Shared persistent open state map across Part-1, Part-2 & Part-3
  var openStateMap = window.__RM_OPEN_CAT_STATE || { '15': true, '16': true };
  window.__RM_OPEN_CAT_STATE = openStateMap;

  // Auto-load decoupled Fullscreen Controller, Part-1 Hydrator & Part-3 SubCard Router
  (function ensureFullscreenControllerLoaded() {
    var modules = [
      { id: 'rm-fs-microapp-controller-script', src: '/js/fullscreen-microapp-controller.js' },
      { id: 'rm-catalog-hydrator-script', src: '/js/one-tap-catalog-hydrator.js' },
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

  // Delegated Helper APIs (Single Canonical Implementation in Part-1 & Part-3 per SSOT Rule 04)
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
  }

  function repairFullscreenSubServiceDOM(subCard, subCode) {
    if (window.RM_SUBCARD_ROUTER && typeof window.RM_SUBCARD_ROUTER.repairFullscreenSubServiceDOM === 'function') {
      return window.RM_SUBCARD_ROUTER.repairFullscreenSubServiceDOM(subCard, subCode);
    }
  }

  function resolveCategorySubContainer(catEl, rawId, cleanNum) {
    if (window.RM_CATALOG_HYDRATOR && typeof window.RM_CATALOG_HYDRATOR.resolveCategorySubContainer === 'function') {
      return window.RM_CATALOG_HYDRATOR.resolveCategorySubContainer(catEl, rawId, cleanNum);
    }
    return catEl ? catEl.querySelector('[id^="sub-"]') : null;
  }

  // Early-Tap Safe Fallbacks before Part-1 script finishes loading
  if (typeof window.openCatalogModal !== 'function') {
    window.openCatalogModal = function () {
      var m = document.getElementById('categoryModal');
      if (!m) return;
      lastModalOpenTs = Date.now();
      window.__RM_LAST_MODAL_OPEN_TS = lastModalOpenTs;
      m.classList.remove('hidden');
      m.style.setProperty('display', 'flex', 'important');
      if (window.RM_CATALOG_HYDRATOR && typeof window.RM_CATALOG_HYDRATOR.syncAndHydrateCatalogCards === 'function') {
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

  // 5. DETERMINISTIC 1-TAP ACCORDION & SUB-SERVICE CLICK CONTROLLER (CASE 0, HOME, CASE 1 & CASE 2)
  function handleDeterministicOneTap(e) {
    if (isSyntheticHomeClick) return;
    var target = e.target && e.target.nodeType === 1 ? e.target : (e.target ? e.target.parentElement : null);
    if (!target || typeof target.closest !== 'function') return;
    if (target.closest('input, textarea, select, option, .sivme-notch-pill, #sivme-hud, #sivme-drawer')) return;

    var now = Date.now();
    if (e.type === 'click' && (now - lastTouchTs < 650)) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      return;
    }

    // PRIORITY 0: Fullscreen Close (‹ वापस, ‹ कैटलॉग पर वापस, ✕) via Part-3 Router
    if (window.RM_SUBCARD_ROUTER && typeof window.RM_SUBCARD_ROUTER.handleFullscreenCloseOneTap === 'function') {
      if (window.RM_SUBCARD_ROUTER.handleFullscreenCloseOneTap(e, target)) {
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

    var modalCloseBtn = target.closest('[onclick*="closeCatalogModal"], #closeCatalogBtn');
    if (modalCloseBtn) {
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
      if (now - lastActionTs < 80) return;
      if (e.type === 'touchend') lastTouchTs = now;
      lastActionTs = now;
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();

      var listId = (tierToggleBtn.id === 'rm-tier1-toggle' || (tierToggleBtn.textContent || '').indexOf('आजीविका') !== -1) ? 'tier1-list' : 'tier2-list';
      var listEl = document.getElementById(listId);
      if (listEl) {
        var isHidden = listEl.classList.contains('hidden') || listEl.style.display === 'none';
        listEl.classList.toggle('hidden', !isHidden);
        listEl.style.setProperty('display', isHidden ? 'block' : 'none', 'important');
        var arrow = tierToggleBtn.querySelector('.acc-arrow');
        if (arrow) arrow.textContent = isHidden ? '▼' : '▶';
      }
      return;
    }

    // CASE 2 FIRST: Sub-Category Card 1-Tap via Part-3 Router
    var subWrapper = target.closest('[id^="sub-"]');
    if (subWrapper) {
      if (target.closest('.rm-act-pin, .rm-act-vid, .rm-act-video')) return;
      if (now - lastActionTs < 80) return;
      if (e.type === 'touchend') lastTouchTs = now;
      lastActionTs = now;
      if (window.RM_SUBCARD_ROUTER && typeof window.RM_SUBCARD_ROUTER.handleSubCardOneTap === 'function') {
        window.RM_SUBCARD_ROUTER.handleSubCardOneTap(e, target);
      }
      return;
    }

    // CASE 1: Parent Category Card 1-Tap (01 to 50 including 33 Action Games) via Part-1 Hydrator
    var catEl = target.closest('[data-cat-id]');
    if (!catEl) {
      var fallbackCard = target.closest('#tier1-list > div, #tier2-list > div');
      if (fallbackCard) {
        var numMatch = (fallbackCard.textContent || '').match(/\b([0-4]?\d|50)\s*\./);
        if (numMatch) { fallbackCard.setAttribute('data-cat-id', numMatch[1]); catEl = fallbackCard; }
      }
    }
    if (catEl) {
      if (now - lastActionTs < 80) return;
      if (e.type === 'touchend') lastTouchTs = now;
      lastActionTs = now;
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();

      var rawId = catEl.getAttribute('data-cat-id') || '';
      var cleanNum = rawId.replace(/[^0-9]/g, '');
      var intNum = parseInt(cleanNum, 10);
      var normNum = isNaN(intNum) ? cleanNum : String(intNum);

      var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);
      var isCurrentlyOpen = subContainer
        ? (!subContainer.classList.contains('hidden') && subContainer.getAttribute('data-rm-collapsed') !== 'true' && subContainer.style.display !== 'none')
        : Boolean(openStateMap[normNum]);

      var nextOpen = !isCurrentlyOpen;
      openStateMap[normNum] = nextOpen;

      if (window.RM_CATALOG_HYDRATOR && typeof window.RM_CATALOG_HYDRATOR.applyCategoryOpenState === 'function') {
        window.RM_CATALOG_HYDRATOR.applyCategoryOpenState(catEl, rawId, cleanNum, nextOpen);
      }
    }
  }

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
})();
