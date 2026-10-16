/**
 * RISE MITRA — PART 2: MODULAR 1-TAP SHELL BRIDGE & DETERMINISTIC CONTROLLER (AUDITED 100% ZEL)
 * MODULE        : Decoupled 1-Tap Controller (Works with Part-1: /js/one-tap-catalog-hydrator.js)
 * GOVERNANCE    : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 * REPO TARGET   : public/js/one-tap-shell-bridge.js (pre-main staging verified)
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 * ==============================================================================
 * 🔒 EXISTING MODULAR FILES LOCK (DO NOT CREATE DUPLICATE FILES):
 *   - /js/one-tap-shell-bridge.js (This File: Part-2 1-Tap Controller — ~265 Lines)
 *   - /js/one-tap-catalog-hydrator.js (Part-1 Companion: Sections 1,2,3,4,6,7 & Hydrator)
 *   - /js/fullscreen-microapp-controller.js (Dedicated 15-3/15-2 & Fullscreen UI)
 *   - /js/shell-controller.js & /js/sivme-adapters/cat16-adapter.js
 *   - /js/universal-catalog/universal-card-engine.js & sub-card-renderer.js
 * ==============================================================================
 */

(function () {
  'use strict';

  var CACHE_VERSION = '20261016_v30';
  var lastActionTs = 0;
  var lastTouchTs = 0;
  var lastModalOpenTs = 0;
  var touchStartX = 0;
  var touchStartY = 0;
  var touchStartTime = 0;

  // Shared persistent open state map across Part-1 & Part-2
  var openStateMap = window.__RM_OPEN_CAT_STATE || { '15': true, '16': true };
  window.__RM_OPEN_CAT_STATE = openStateMap;

  // Auto-load decoupled Fullscreen Micro-App Controller & Companion Hydrator Module (Part-1)
  (function ensureFullscreenControllerLoaded() {
    if (!window.RM_FULLSCREEN_CONTROLLER && !document.getElementById('rm-fs-microapp-controller-script')) {
      var s = document.createElement('script');
      s.id = 'rm-fs-microapp-controller-script';
      s.src = '/js/fullscreen-microapp-controller.js?v=' + CACHE_VERSION;
      s.async = false;
      (document.head || document.documentElement).appendChild(s);
    }
    if (!window.RM_CATALOG_HYDRATOR && !document.getElementById('rm-catalog-hydrator-script')) {
      var h = document.createElement('script');
      h.id = 'rm-catalog-hydrator-script';
      h.src = '/js/one-tap-catalog-hydrator.js?v=' + CACHE_VERSION;
      h.async = false;
      (document.head || document.documentElement).appendChild(h);
    }
  })();

  // Helper: Force-close Fullscreen Viewport reliably (100% ZEL fallback)
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

  // Helper: Zero-Hang Micro-App Hydration Guard
  function ensureMicroAppRendered(subCode, titleText, subtitleText) {
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered === 'function') {
      window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered(subCode, titleText, subtitleText);
    }
  }

  // Helper: Resolve sub-container across all 10 ID formats (sub-c01, sub-c1, sub-g34, etc.) + sibling fallback
  function resolveCategorySubContainer(catEl, rawId, cleanNum) {
    if (window.RM_CATALOG_HYDRATOR && typeof window.RM_CATALOG_HYDRATOR.resolveCategorySubContainer === 'function') {
      return window.RM_CATALOG_HYDRATOR.resolveCategorySubContainer(catEl, rawId, cleanNum);
    }
    var intNum = parseInt(cleanNum, 10);
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    var normNum = isNaN(intNum) ? cleanNum : String(intNum);
    var byId = document.getElementById('sub-c' + cleanNum) ||
               document.getElementById('sub-c' + paddedNum) ||
               document.getElementById('sub-c' + normNum) ||
               document.getElementById('sub-g' + cleanNum) ||
               document.getElementById('sub-g' + paddedNum) ||
               document.getElementById('sub-g' + normNum) ||
               document.getElementById('sub-' + rawId) ||
               document.getElementById('sub-' + cleanNum) ||
               document.getElementById('sub-' + paddedNum);
    if (byId) return byId;
    if (catEl) {
      var inside = catEl.querySelector('[id^="sub-"]');
      if (inside) return inside;
      var nextSib = catEl.nextElementSibling;
      if (nextSib && nextSib.id && nextSib.id.indexOf('sub-') === 0) return nextSib;
      if (catEl.children.length > 1) return catEl.children[1];
    }
    return null;
  }

  // Early-Tap Safe Fallbacks before Part-1 script finishes loading (100% ZEL Preserved)
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
    var target = e.target && e.target.nodeType === 1 ? e.target : (e.target ? e.target.parentElement : null);
    if (!target || typeof target.closest !== 'function') return;
    if (target.closest('input, textarea, select, .sivme-notch-pill')) return;

    var now = Date.now();

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
        window.__RM_LAST_MODAL_OPEN_TS = 0;
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
          if (t.indexOf('RM World Directory') !== -1 && t.length < 320) {
            dirTrigger = el;
            break;
          }
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

      // Instant 1-Tap for other Home Screen buttons (Surakshit Bahikhata, Install, Bottom Nav) on touchend
      if (e.type === 'touchend') {
        var homeActionBtn = target.closest('button[onclick], a[onclick], [onclick]');
        if (homeActionBtn && typeof homeActionBtn.click === 'function') {
          lastTouchTs = now;
          lastActionTs = now;
          if (e.cancelable) e.preventDefault();
          homeActionBtn.click();
          return;
        }
      }
      return;
    }

    if (!modal || !modal.contains(target)) return;

    var modalCloseBtn = target.closest('[onclick*="closeCatalogModal"]');
    if (modalCloseBtn) {
      if (e.type === 'touchend') lastTouchTs = now;
      lastActionTs = now;
      lastModalOpenTs = 0;
      window.__RM_LAST_MODAL_OPEN_TS = 0;
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      window.closeCatalogModal();
      return;
    }

    // Tier-1 (आजीविका) & Tier-2 (खेल व मनोरंजन) Section Header 1-Tap Toggle (Folder A/B v27 Parity)
    var tierToggleBtn = target.closest('#rm-tier1-toggle, #rm-tier2-toggle');
    if (tierToggleBtn) {
      if (now - lastActionTs < 200) {
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

      var listId = tierToggleBtn.id === 'rm-tier1-toggle' ? 'tier1-list' : 'tier2-list';
      var listEl = document.getElementById(listId);
      if (listEl) {
        var isHidden = listEl.classList.contains('hidden') || window.getComputedStyle(listEl).display === 'none';
        listEl.classList.toggle('hidden', !isHidden);
        listEl.style.setProperty('display', isHidden ? 'block' : 'none', 'important');
        var arrow = tierToggleBtn.querySelector('.acc-arrow');
        if (arrow) arrow.textContent = isHidden ? '▼' : '▶';
      }
      return;
    }

    // CASE 2 FIRST: 1-Tap inside Sub-Category Card (Delegated to RM_FULLSCREEN_CONTROLLER.routeSubCardOneTap + Zero-Hang Guard — 100% ZEL)
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
      return;
    }

    // CASE 1: 1-Tap on Parent Category Card Header or "समेटें ▲ / और देखें ▼" (Categories 01 to 50 including 33 Action Games)
    var catEl = target.closest('[data-cat-id]');
    if (catEl) {
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

      var rawId = catEl.getAttribute('data-cat-id') || '';
      var cleanNum = rawId.replace(/[^0-9]/g, '');
      var intNum = parseInt(cleanNum, 10);
      var normNum = isNaN(intNum) ? cleanNum : String(intNum);

      var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);
      var isCurrentlyOpen = Boolean(openStateMap[normNum]);
      if (subContainer) {
        isCurrentlyOpen = !subContainer.classList.contains('hidden') &&
                          subContainer.getAttribute('data-rm-collapsed') !== 'true' &&
                          window.getComputedStyle(subContainer).display !== 'none';
      }

      var nextOpen = !isCurrentlyOpen;
      openStateMap[normNum] = nextOpen;

      if (window.RM_CATALOG_HYDRATOR && typeof window.RM_CATALOG_HYDRATOR.applyCategoryOpenState === 'function') {
        window.RM_CATALOG_HYDRATOR.applyCategoryOpenState(catEl, rawId, cleanNum, nextOpen);
      } else if (subContainer) {
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
      }
      return;
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
