/**
 * RISE MITRA — PART 3: MODULAR SUB-CARD 1-TAP ROUTER & FULLSCREEN DOM REPAIR (SURFACE-A & SURFACE-B ZEL)
 * MODULE        : Decoupled Fullscreen Close (Priority 0), Sub-Card Router (Case 2) & Dual-Surface Guard
 * SURFACES      : Surface-A (Public Citizen 1-Tap) & Surface-B (Owner In-Situ SIVME HUD Isolation)
 * GOVERNANCE    : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 * REPO TARGET   : public/js/one-tap-subcard-router.js (Split from one-tap-shell-bridge.js v32)
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  // Surface-B (Owner In-Situ SIVME Mode) Detector & Pass-Through Guard
  function isSurfaceBOwnerActive() {
    var params = new URLSearchParams(window.location.search);
    return params.get('sivme') === 'owner' ||
           params.get('sov_mode') === 'in_situ' ||
           params.get('dev_auto') === '1' ||
           sessionStorage.getItem('sivme_active') === '1';
  }

  function isSurfaceBElementTap(target) {
    if (!target || typeof target.closest !== 'function') return false;
    return Boolean(target.closest('.sivme-notch-pill, #sivme-hud, #sivme-drawer, [data-sivme-id], [id^="sivme-"]'));
  }

  // Helper: Force-close Fullscreen Viewport reliably (100% ZEL fallback for Surface-A & Surface-B)
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

  // Helper: Repair Fullscreen Sub-Service DOM on Surface-A (Fixes 32-3 bullet title, Crop Damage text & empty select dropdown)
  function repairFullscreenSubServiceDOM(subCard, subCode) {
    var fs = document.getElementById('rm-fullscreen-view');
    if (!fs || fs.classList.contains('hidden')) return;

    var cleanTitle = '';
    var cleanSub = '';
    var optionsList = [];

    if (subCard) {
      var hEl = subCard.querySelector('h3, h4, [style*="font-size: 20px"], .font-black, .font-bold');
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
      if (Array.isArray(entry.services) && entry.services.length > 0) {
        optionsList = entry.services.map(function (s) { return typeof s === 'string' ? s : (s.text || ''); }).filter(Boolean);
      }
    }

    var fsTitle = document.getElementById('fs-module-title');
    if (fsTitle && cleanTitle) {
      fsTitle.textContent = subCode + ' • ' + cleanTitle;
    }

    var container = document.getElementById('rm-module-container');
    if (!container) return;

    var innerHeading = container.querySelector('h2, h3, .text-xl, .text-lg, [style*="font-size: 19px"], [style*="font-size: 20px"]');
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

  // PRIORITY 0 Handler: Instant 1-Tap Close on Fullscreen Top-Right ✕, Top-Left ‹ वापस, or ‹ कैटलॉग पर वापस (Surface-A & Surface-B)
  function handleFullscreenCloseOneTap(e, target) {
    if (isSurfaceBElementTap(target)) return false;
    var fsView = document.getElementById('rm-fullscreen-view');
    if (!fsView || fsView.classList.contains('hidden')) return false;
    var fsCloseBtn = target.closest('#rm-fullscreen-view [onclick*="closeFullscreenModule"], #rm-fullscreen-view button, #rm-fullscreen-view a, #fs-back-btn, #fs-close-btn');
    if (!fsCloseBtn) return false;

    var btnTxt = (fsCloseBtn.textContent || '').trim();
    var isBack = btnTxt.indexOf('वापस') !== -1 || fsCloseBtn.id === 'fs-back-btn';
    var isCloseX = btnTxt === '✕' || btnTxt === '×' || btnTxt === 'X' || fsCloseBtn.id === 'fs-close-btn';
    var hasCloseAttr = (fsCloseBtn.getAttribute('onclick') || '').indexOf('closeFullscreenModule') !== -1;

    if (!isBack && !isCloseX && !hasCloseAttr) return false;

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
      window.__RM_LAST_MODAL_OPEN_TS = 0;
      if (typeof window.closeCatalogModal === 'function') window.closeCatalogModal();
    }
    return true;
  }

  // CASE 2 Handler: 1-Tap inside Sub-Category Card ([id^="sub-"]) with Surface-A Clean Target & Surface-B Isolation
  function handleSubCardOneTap(e, target) {
    if (isSurfaceBElementTap(target)) return false;
    var subCard = target.closest('[id^="sub-"] > div');
    if (!subCard) return false;

    var rawRenderedAttr = (subCard.getAttribute('data-rm-sub-rendered') || '').split(':')[0];
    var subIdMatch = (subCard.textContent || '').match(/\b(\d{1,2}-\d)\b/);
    var subCode = subIdMatch ? subIdMatch[1] : (rawRenderedAttr || '15-3');

    // Surface-A Guard: Only pass service chip if explicitly tapped; otherwise pass card heading so bullet lines never become title
    var tappedChip = target.closest('.rm-service-chip');
    var safeHeadingTarget = tappedChip || subCard.querySelector('h3, h4, [style*="font-size: 20px"], .font-black, .font-bold') || subCard;

    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.routeSubCardOneTap === 'function') {
      window.RM_FULLSCREEN_CONTROLLER.routeSubCardOneTap(e, safeHeadingTarget, subCard);
    } else {
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
    }

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
    return true;
  }

  window.RM_SUBCARD_ROUTER = {
    isSurfaceBOwnerActive: isSurfaceBOwnerActive,
    isSurfaceBElementTap: isSurfaceBElementTap,
    forceCloseFullscreenViewport: forceCloseFullscreenViewport,
    ensureMicroAppRendered: ensureMicroAppRendered,
    repairFullscreenSubServiceDOM: repairFullscreenSubServiceDOM,
    handleFullscreenCloseOneTap: handleFullscreenCloseOneTap,
    handleSubCardOneTap: handleSubCardOneTap
  };
})();
