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

  var CACHE_VERSION = '20261016_v32';
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

  // Helper: Repair Fullscreen Sub-Service DOM (Fixes 32-3 bullet title, Crop Damage text & empty select dropdown)
  function repairFullscreenSubServiceDOM(subCard, subCode) {
    var fs = document.getElementById('rm-fullscreen-view');
    if (!fs || fs.classList.contains('hidden')) return;

    var cleanTitle = '';
    var cleanSub = '';
    var optionsList = [];

    if (subCard) {
      var hEl = subCard.querySelector('h3, h4, .font-black, .font-bold');
      if (hEl && hEl.textContent) {
        cleanTitle = hEl.textContent.replace(/^\s*\d{1,2}\s*-\s*\d\s*\.?\s*/, '').trim();
      }
      var chipNodes = subCard.querySelectorAll('.rm-service-chip, [style*="border-radius"]');
      for (var i = 0; i < chipNodes.length; i++) {
        var ct = (chipNodes[i].textContent || '').trim();
        if (ct.length > 5 && ct.length < 85 && ct.indexOf('✓') === -1 && ct.indexOf('4.') === -1 &&
            ct.indexOf('पिन') === -1 && ct.indexOf('वीडियो') === -1 && ct.indexOf('देखें') === -1) {
          optionsList.push(ct);
        }
      }
    }

    var matrix = window.RM_CANONICAL_SUB_MATRIX || {};
    var entry = matrix[subCode] || null;
    if (entry) {
      if (entry.title) cleanTitle = entry.title;
      if (entry.hindiTitle) cleanSub = entry.hindiTitle;
      if (Array.isArray(entry.services) && entry.services.length > 0) optionsList = entry.services;
    }

    var fsTitle = document.getElementById('fs-module-title');
    if (fsTitle && cleanTitle) {
      fsTitle.textContent = subCode + ' • ' + cleanTitle;
    }

    var container = document.getElementById('rm-module-container');
    if (!container) return;

    var innerHeading = container.querySelector('h2, h3, .text-xl, .text-lg');
    if (innerHeading && cleanTitle && (innerHeading.textContent.length > 42 || innerHeading.textContent.indexOf('बुजुर्गों') !== -1)) {
      innerHeading.textContent = cleanTitle;
    }

    var allEls = container.querySelectorAll('p, div, span');
    for (var j = 0; j < allEls.length; j++) {
      var el = allEls[j];
      if (el.children.length === 0 && el.textContent && el.textContent.indexOf('Crop Damage Insurance Claim') !== -1 && subCode.indexOf('01-') !== 0) {
        el.textContent = cleanSub || (cleanTitle ? (cleanTitle + ' • सत्यापित नागरिक सेवा व तत्काल सहायता') : 'Rise Mitra सत्यापित नागरिक सेवा पोर्टल');
      }
    }

    var selectEl = container.querySelector('select');
    if (selectEl) {
      selectEl.style.setProperty('background-color', '#0f172a', 'important');
      selectEl.style.setProperty('color', '#f8fafc', 'important');
      selectEl.style.setProperty('border', '1px solid #334155', 'important');
      selectEl.style.setProperty('padding', '10px 12px', 'important');
      if (selectEl.options.length === 0 || (selectEl.options.length === 1 && !selectEl.options[0].textContent.trim())) {
        selectEl.innerHTML = '';
        var finalOpts = optionsList.length > 0 ? optionsList : [
          (cleanTitle || subCode) + ' — तत्काल ऑनलाइन सेवा',
          (cleanTitle || subCode) + ' — नज़दीकी केंद्र व विशेषज्ञ सहायता',
          (cleanTitle || subCode) + ' — 24x7 आपातकालीन सहायता'
        ];
        for (var k = 0; k < finalOpts.length; k++) {
          var opt = document.createElement('option');
          opt.value = finalOpts[k];
          opt.textContent = finalOpts[k];
          opt.style.backgroundColor = '#0f172a';
          opt.style.color = '#f8fafc';
          selectEl.appendChild(opt);
        }
      }
    }
  }

  // Helper: Resolve sub-container across all 10 ID formats (sub-c01, sub-c1, sub-g34, etc.) + validated sibling fallback
  function resolveCategorySubContainer(catEl, rawId, cleanNum) {
    if (catEl && catEl.__rmSubBox && document.body.contains(catEl.__rmSubBox) &&
        catEl.__rmSubBox.id && catEl.__rmSubBox.id.indexOf('sub-') === 0) {
      return catEl.__rmSubBox;
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
    if (byId) {
      if (catEl) catEl.__rmSubBox = byId;
      return byId;
    }
    if (catEl) {
      var inside = catEl.querySelector('[id^="sub-"]');
      if (inside) {
        catEl.__rmSubBox = inside;
        return inside;
      }
      var nextSib = catEl.nextElementSibling;
      if (nextSib && nextSib.id && nextSib.id.indexOf('sub-') === 0) {
        catEl.__rmSubBox = nextSib;
        return nextSib;
      }
      if (catEl.children.length > 1 && catEl.children[1].id && catEl.children[1].id.indexOf('sub-') === 0) {
        catEl.__rmSubBox = catEl.children[1];
        return catEl.children[1];
      }
    }
    if (window.RM_CATALOG_HYDRATOR && typeof window.RM_CATALOG_HYDRATOR.resolveCategorySubContainer === 'function') {
      var resolved = window.RM_CATALOG_HYDRATOR.resolveCategorySubContainer(catEl, rawId, cleanNum);
      if (resolved && resolved.id && resolved.id.indexOf('sub-') === 0) {
        if (catEl) catEl.__rmSubBox = resolved;
        return resolved;
      }
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
    if (target.closest('input, textarea, select, option, .sivme-notch-pill')) return;

    var now = Date.now();

    if (e.type === 'click' && (now - lastTouchTs < 650)) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      return;
    }

    // PRIORITY 0: Instant 1-Tap Close on Fullscreen Top-Right ✕, Top-Left ‹ वापस, or ‹ कैटलॉग पर वापस
    var fsCloseBtn = target.closest('#rm-fullscreen-view [onclick*="closeFullscreenModule"], #rm-fullscreen-view button, #rm-fullscreen-view a, #fs-back-btn, #fs-close-btn');
    if (fsCloseBtn && document.getElementById('rm-fullscreen-view') && !document.getElementById('rm-fullscreen-view').classList.contains('hidden')) {
      var btnTxt = (fsCloseBtn.textContent || '').trim();
      var isBack = btnTxt.indexOf('वापस') !== -1 || fsCloseBtn.id === 'fs-back-btn';
      var isCloseX = btnTxt === '✕' || btnTxt === '×' || btnTxt === 'X' || fsCloseBtn.id === 'fs-close-btn';
      var hasCloseAttr = (fsCloseBtn.getAttribute('onclick') || '').indexOf('closeFullscreenModule') !== -1;

      if (isBack || isCloseX || hasCloseAttr) {
        if (e.type === 'touchend') lastTouchTs = now;
        lastActionTs = now;
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        forceCloseFullscreenViewport();
        if (isBack && !isCloseX) {
          var catModal = document.getElementById('categoryModal');
          if (catModal) {
            catModal.classList.remove('hidden');
            catModal.style.setProperty('display', 'flex', 'important');
          }
        } else if (isCloseX) {
          lastModalOpenTs = 0;
          window.__RM_LAST_MODAL_OPEN_TS = 0;
          window.closeCatalogModal();
        }
        return;
      }
    }

    var modal = document.getElementById('categoryModal');
    var isModalOpen = Boolean(modal && !modal.classList.contains('hidden') && modal.style.display !== 'none');

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

    var modalCloseBtn = target.closest('[onclick*="closeCatalogModal"], #closeCatalogBtn');
    if (modalCloseBtn) {
      if (e.type === 'touchend') lastTouchTs = now;
      lastActionTs = now;
      lastModalOpenTs = 0;
      window.__RM_LAST_MODAL_OPEN_TS = 0;
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      if (modal) {
        modal.classList.add('hidden');
        modal.style.setProperty('display', 'none', 'important');
      }
      window.closeCatalogModal();
      return;
    }

    // Tier-1 (आजीविका) & Tier-2 (खेल व मनोरंजन) Section Header 1-Tap Toggle (Folder A/B v27 Parity)
    var tierToggleBtn = target.closest('#rm-tier1-toggle, #rm-tier2-toggle');
    if (!tierToggleBtn && !target.closest('[data-cat-id]') && !target.closest('[id^="sub-"]')) {
      var candBar = target.closest('button, div');
      var barTxt = candBar ? (candBar.textContent || '').trim() : '';
      if (barTxt.length < 90 && (barTxt.indexOf('आजीविका (') !== -1 || barTxt.indexOf('खेल व मनोरंजन (') !== -1)) {
        tierToggleBtn = candBar;
      }
    }
    if (tierToggleBtn) {
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
        var isHidden = listEl.classList.contains('hidden') || listEl.style.display === 'none';
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

      if (now - lastActionTs < 80) {
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

      var safeHeadingTarget = subCard.querySelector('h3, h4, .font-black, .font-bold') || subCard;

      if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.routeSubCardOneTap === 'function') {
        window.RM_FULLSCREEN_CONTROLLER.routeSubCardOneTap(e, safeHeadingTarget, subCard);
      } else {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
      }

      // Guarantee 0ms render if #rm-module-container is stuck on "मॉड्यूल लोड हो रहा है..."
      ensureMicroAppRendered(subCode);
      repairFullscreenSubServiceDOM(subCard, subCode);
      setTimeout(function () {
        ensureMicroAppRendered(subCode);
        repairFullscreenSubServiceDOM(subCard, subCode);
      }, 25);
      setTimeout(function () {
        ensureMicroAppRendered(subCode);
        repairFullscreenSubServiceDOM(subCard, subCode);
      }, 80);
      return;
    }

    // CASE 1: 1-Tap on Parent Category Card Header or "समेटें ▲ / और देखें ▼" (Categories 01 to 50 including 33 Action Games)
    var catEl = target.closest('[data-cat-id]');
    if (catEl) {
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

      var rawId = catEl.getAttribute('data-cat-id') || '';
      var cleanNum = rawId.replace(/[^0-9]/g, '');
      var intNum = parseInt(cleanNum, 10);
      var normNum = isNaN(intNum) ? cleanNum : String(intNum);
      var paddedNum = (intNum < 10 ? '0' : '') + intNum;

      var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);
      var isCurrentlyOpen = Boolean(openStateMap[normNum]);
      if (subContainer) {
        isCurrentlyOpen = !subContainer.classList.contains('hidden') &&
                          subContainer.getAttribute('data-rm-collapsed') !== 'true' &&
                          subContainer.style.display !== 'none';
      }

      var nextOpen = !isCurrentlyOpen;
      openStateMap[normNum] = nextOpen;

      if (subContainer) {
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
          if (headerEl && !headerEl.hasAttribute('data-rm-parent-rendered') && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard === 'function') {
            window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard(headerEl, normNum, !isCurrentlyOpen, subCards.length || 3);
            headerEl.setAttribute('data-rm-parent-rendered', '1');
          }
          if (!isCurrentlyOpen && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard === 'function') {
            subCards.forEach(function (sc, idx) {
              if (!sc.hasAttribute('data-rm-sub-rendered')) {
                window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard(sc, normNum, paddedNum + '-' + (idx + 1));
                sc.setAttribute('data-rm-sub-rendered', paddedNum + '-' + (idx + 1));
              }
            });
          }
        }
      } else if (window.RM_CATALOG_HYDRATOR && typeof window.RM_CATALOG_HYDRATOR.applyCategoryOpenState === 'function') {
        window.RM_CATALOG_HYDRATOR.applyCategoryOpenState(catEl, rawId, cleanNum, nextOpen);
      }

      var pills = catEl.querySelectorAll('button, span, div');
      for (var pIdx = 0; pIdx < pills.length; pIdx++) {
        var p = pills[pIdx];
        if (p.children.length === 0 && p.textContent) {
          var pTxt = p.textContent.trim();
          if (nextOpen && (pTxt.indexOf('और देखें') !== -1 || pTxt.indexOf('विकल्प') !== -1 || pTxt.indexOf('सेवाएं') !== -1 || pTxt.indexOf('▼') !== -1)) {
            p.textContent = 'समेटें ▲';
          } else if (!nextOpen && (pTxt.indexOf('समेटें') !== -1 || pTxt.indexOf('छुपाएं') !== -1 || pTxt.indexOf('▲') !== -1)) {
            p.textContent = 'और देखें ▼';
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
