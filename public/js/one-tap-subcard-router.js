/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-3B Modular Sub-Card 1-Tap Router & DOM Repair (v67)
 *   - REPO TARGET    : public/js/one-tap-subcard-router.js
 *   - SURFACE TARGET : SHARED (Surface-A Public 1-Tap & Surface-B Owner SIVME Guard)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 290 Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/one-tap-subcard-router.js (This File: Part-3B Sub-Card Router & DOM Repair)
 *   - public/js/fullscreen-microapp-controller.js (Part-3A: Fullscreen Viewport & 15-2/15-3 UI)
 *   - public/js/one-tap-shell-bridge.js (Part-2: Master 1-Tap Shell Bridge)
 *   - public/js/one-tap-accordion-engine.js (Part-1C: 50 Category Card Accordions)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : forceCloseFullscreenViewport, ensureMicroAppRendered,
 *                              extractSubCardMetaAndChips, repairFullscreenSubServiceDOM,
 *                              handleFullscreenCloseOneTap, routeSubCardOneTap, handleSubCardOneTap.
 *   - ALLOWED ON SURFACE-B   : isSurfaceBOwnerActive & isSurfaceBElementTap pass-through guards.
 *   - FORBIDDEN IN THIS FILE : Large HTML micro-app templates (owned by fullscreen-microapp-controller.js).
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_SUBCARD_ROUTER, window.__RM_LAST_MODAL_OPEN_TS
 *   - CALLS EXTERNAL APIs : window.RM_FULLSCREEN_CONTROLLER.*, window.closeCatalogModal,
 *                           window.handleLaunchCategory, window.openFullscreenModule,
 *                           window.launchOneTapServiceScreen, window.RM_CANONICAL_SUB_MATRIX
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #rm-fullscreen-view, #categoryModal, #fs-module-title,
 *                           #rm-module-container, [id^="sub-"], .rm-service-chip, [data-fs-chip]
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, #sivme-drawer, [data-sivme-id], [id^="sivme-"]
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Pure router methods invoked by one-tap-shell-bridge.js (0% listener clash).
 *   - DOM SAFETY    : Restores #categoryModal on ‹ वापस and repairs 32-3 / select dropdowns & 4 chips.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 10 FUNCTIONS INTACT):
 *   1. isSurfaceBOwnerActive              2. isSurfaceBElementTap
 *   3. forceCloseFullscreenViewport       4. ensureMicroAppRendered
 *   5. extractSubCardMetaAndChips         6. repairFullscreenSubServiceDOM
 *   7. handleFullscreenCloseOneTap        8. routeSubCardOneTap
 *   9. handleSubCardOneTap                10. hookExternalRenderers
 * ==============================================================================
 * 8. ONE JOB = ONE FILE & CANONICAL PATH LOCK (ANTI-DUPLICATE FILE GUARD):
 *   - SINGLE JOB RULE : Sole owner of Sub-Card 1-Tap Routing, Chip Extraction & 32-3 DOM Repair.
 *   - CANONICAL PATH  : Must exist ONLY at `public/js/one-tap-subcard-router.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Delegates Fullscreen HTML rendering to `fullscreen-microapp-controller.js`.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['one-tap-subcard-router']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect all routing calls.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, PRE-MAIN GATE & CONTRACT PARITY LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261018_v67'`.
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
  if (window.__RM_LOADED_MODULES__['one-tap-subcard-router']) return;
  window.__RM_LOADED_MODULES__['one-tap-subcard-router'] = true;


  // 1. Surface-B (Owner In-Situ SIVME Mode) Detector & Pass-Through Guard
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


  // 2. Helper: Force-close Fullscreen Viewport reliably (100% ZEL fallback for Surface-A & Surface-B)
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


  // 3. Helper: Zero-Hang Micro-App Hydration Guard
  function ensureMicroAppRendered(subCode, titleText, subtitleText) {
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered === 'function') {
      window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered(subCode, titleText, subtitleText);
    }
  }


  // 4. Extract Real Category Icon & 4 Interactive Service Chips from Sub-Card or Matrix
  function extractSubCardMetaAndChips(subCode, subCardEl, matrixEntry, titleText) {
    var code = String(subCode || '01-1').replace(/\.$/, '').trim();
    var catNum = parseInt(code.split('-')[0], 10) || 1;
    var defaultIcons = {
      1: '🎨', 2: '🚗', 3: '💇', 4: '📚', 5: '🏛️', 6: '🦸', 7: '💬', 8: '💍', 9: '🎓', 10: '🎭',
      11: '🎟️', 12: '💰', 13: '🍲', 14: '🩺', 15: '🏠', 16: '📦', 17: '🗺️', 18: '🏥', 19: '💊', 20: '🎵',
      21: '📰', 22: '🍼', 23: '🐾', 24: '📷', 25: '⚡', 26: '🛒', 27: '🤝', 28: '🏆', 29: '📐', 30: '🚕',
      31: '🎬', 32: '⛅', 33: '🎮', 34: '⛺', 35: '🕹️', 36: '🎲', 37: '🃏', 38: '🎰', 39: '🎯', 40: '🎓'
    };
    var icon = (matrixEntry && matrixEntry.icon) || defaultIcons[catNum] || (catNum >= 33 ? '🎮' : '✨');
    var chips = [];

    if (!subCardEl) {
      var cands = document.querySelectorAll('#categoryModal [data-sub-code="' + code + '"], #categoryModal [data-rm-sub-rendered^="' + code + '"], #categoryModal [id^="sub-"] > div');
      for (var s = 0; s < cands.length; s++) {
        if ((cands[s].textContent || '').indexOf(code) !== -1) { subCardEl = cands[s]; break; }
      }
    }

    if (subCardEl) {
      var nodes = subCardEl.querySelectorAll('div, span');
      for (var i = 0; i < nodes.length; i++) {
        var txt = (nodes[i].textContent || '').trim();
        if (nodes[i].children.length === 0 && txt.length >= 1 && txt.length <= 4 && !/[0-9a-zA-Zअ-ह★✓]/.test(txt)) {
          icon = txt;
          break;
        }
      }
      var chipEls = subCardEl.querySelectorAll('.rm-service-chip, [style*="border-radius: 12px"], [style*="border-radius:12px"], .rounded-xl');
      for (var c = 0; c < chipEls.length; c++) {
        var cTxt = (chipEls[c].textContent || '').trim();
        if (cTxt.length > 5 && cTxt.length < 95 && cTxt.indexOf('★') === -1 && cTxt.indexOf(code) === -1 &&
            cTxt.indexOf('अभी बुक') === -1 && cTxt.indexOf('पिन') === -1 && cTxt.indexOf('वीडियो') === -1 && chips.indexOf(cTxt) === -1) {
          chips.push(cTxt);
        }
      }
    }
    if (chips.length === 0 && matrixEntry && Array.isArray(matrixEntry.services)) {
      chips = matrixEntry.services.map(function (sv) { return typeof sv === 'string' ? sv : (sv.text || ''); }).filter(Boolean).slice(0, 4);
    }
    if (chips.length === 0 && matrixEntry && Array.isArray(matrixEntry.chips)) chips = matrixEntry.chips.slice(0, 4);
    if (code === '05-1' && String(titleText || '').indexOf('Udhar') !== -1) {
      icon = '📒';
      chips = [
        '📒 डिजिटल उधार-जमा बहीखाता व ग्राहक हिसाब रजिस्टर',
        '📲 1-क्लिक व्हाट्सएप पेमेंट रिमाइंडर व डिजिटल रसीद',
        '📋 सरकारी उद्यम आधार (MSME) व व्यापार निबंधन',
        '💳 व्यवसाय चालू खाता (Current Account) व GST सहायता'
      ];
    }
    if (chips.length === 0) {
      var cleanT = (titleText || 'सेवा').replace(/^\d+-\d+\.?\s*/, '');
      chips = [
        '⚡ ' + cleanT + ' — तत्काल बुकिंग व प्राइम स्लॉट',
        '📋 ' + cleanT + ' — स्टैंडर्ड पैकेज व पारदर्शी रेट कार्ड',
        '🏷️ ' + cleanT + ' — मासिक पास / विशेष छूट पैकेज',
        '🤝 ' + cleanT + ' — सत्यापित विशेषज्ञ सहायता व होम सर्विस'
      ];
    }
    return { icon: icon, chips: chips.slice(0, 4) };
  }


  // 5. Helper: Repair Fullscreen Sub-Service DOM on Surface-A (Fixes 32-3 bullet title, Crop Damage text & empty select dropdown)
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
      if (el.children.length === 0 && el.textContent && el.textContent.indexOf('Crop Damage Insurance Claim') !== -1 && String(subCode).indexOf('01-') !== 0) {
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


  // 6. PRIORITY 0 Handler: Instant 1-Tap Close on Fullscreen Top-Right ✕, Top-Left ‹ वापस, or ‹ कैटलॉग पर वापस (Surface-A & Surface-B)
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


  // 7. Sub-Card 1-Tap Router (Routes 15-2/16-2, 15-3/16-3 & All 150 Sub-Cards with 4 Selectable Chips)
  function routeSubCardOneTap(e, target, subCard) {
    var ctrl = window.RM_FULLSCREEN_CONTROLLER || {};
    var rawAttr = (subCard.getAttribute('data-rm-sub-rendered') || '').split(':')[0];
    var subIdMatch = (subCard.textContent || '').match(/\b(\d{1,2}-\d)\b/);
    var subCode = subIdMatch ? subIdMatch[1] : (rawAttr || '01-1');

    if (subCode === '15-2' || subCode === '16-2' || subCode === '15-3' || subCode === '16-3') {
      var targetMod = (subCode === '15-2' || subCode === '16-2') ? '16-2' : '16-3';
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      if (typeof window.handleLaunchCategory === 'function') {
        try { window.handleLaunchCategory('c16', targetMod); } catch (err) {}
      } else if (typeof window.openFullscreenModule === 'function') {
        try { window.openFullscreenModule(targetMod); } catch (err) {}
      }
      ensureMicroAppRendered(subCode);
      if (ctrl.normalizeFullscreenMicroAppDOM) ctrl.normalizeFullscreenMicroAppDOM(subCode);
      setTimeout(function () {
        ensureMicroAppRendered(subCode);
        if (ctrl.normalizeFullscreenMicroAppDOM) ctrl.normalizeFullscreenMicroAppDOM(subCode);
      }, 30);
      return;
    }

    var tappedNode = target.closest('.rm-service-chip, div, span, button');
    var tappedText = tappedNode ? (tappedNode.textContent || '').trim() : '';
    var headingEl = subCard.querySelector('h3, h4, [style*="font-size: 20"], [style*="font-size: 18"], [style*="font-size: 19"], .font-black, .font-bold');
    var subHeadingEl = subCard.querySelector('.text-emerald-400, p');
    var matrix = window.RM_CANONICAL_SUB_MATRIX || {};
    var matrixEntry = matrix[subCode] || null;
    var domTitle = headingEl ? headingEl.textContent.trim() : '';
    var cardTitle = (domTitle && !/^\[\d{1,2}-\d\]$/.test(domTitle)) ? domTitle : ((matrixEntry && matrixEntry.title) || 'सत्यापित सेवा');
    var cardSubtitle = (subHeadingEl ? subHeadingEl.textContent.trim() : '') || (matrixEntry && matrixEntry.hindiTitle) || 'Rise Mitra सत्यापित सेवा व बुकिंग पोर्टल';

    var isServicePill = Boolean(target.closest('.rm-service-chip')) || (
      tappedText.length > 4 && tappedText.length < 95 && tappedNode !== subCard &&
      tappedText.indexOf(subCode) === -1 && tappedText.indexOf('उपलब्ध') === -1 &&
      tappedText.indexOf('प्रतिष्ठान') === -1 && tappedText.indexOf('खोलें') === -1 && tappedText.indexOf('खेलें') === -1
    );

    e.stopImmediatePropagation();
    e.stopPropagation();
    if (e.cancelable) e.preventDefault();

    var chosenPill = isServicePill ? tappedText : null;
    if (typeof window.launchOneTapServiceScreen === 'function') {
      window.launchOneTapServiceScreen(cardTitle, cardSubtitle, subCode, chosenPill, subCard, matrixEntry);
      setTimeout(function () {
        var fsC = document.getElementById('rm-module-container');
        if (fsC && !fsC.querySelector('[data-fs-chip]')) {
          window.launchOneTapServiceScreen(cardTitle, cardSubtitle, subCode, chosenPill, subCard, matrixEntry);
        }
        repairFullscreenSubServiceDOM(subCard, subCode);
      }, 35);
    }
  }


  // 8. CASE 2 Handler: 1-Tap inside Sub-Category Card ([id^="sub-"]) with Surface-A Clean Target & Surface-B Isolation
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

    routeSubCardOneTap(e, safeHeadingTarget, subCard);

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


  // 9. Hook External Renderers so openSmoothSubServiceScreen Always Uses 4-Chip Launcher
  function hookExternalRenderers() {
    if (window.RM_SUB_CARD_RENDERER && typeof window.launchOneTapServiceScreen === 'function') {
      window.RM_SUB_CARD_RENDERER.openSmoothSubServiceScreen = function (entry, subCode, title, subtitle, selectedPill) {
        window.launchOneTapServiceScreen(title, subtitle, subCode, selectedPill, null, entry);
      };
    }
    if (window.RM_FULLSCREEN_CONTROLLER) {
      window.RM_FULLSCREEN_CONTROLLER.extractSubCardMetaAndChips = extractSubCardMetaAndChips;
      window.RM_FULLSCREEN_CONTROLLER.routeSubCardOneTap = routeSubCardOneTap;
    }
  }
  hookExternalRenderers();
  setTimeout(hookExternalRenderers, 200);
  setTimeout(hookExternalRenderers, 800);

  window.RM_SUBCARD_ROUTER = {
    isSurfaceBOwnerActive: isSurfaceBOwnerActive,
    isSurfaceBElementTap: isSurfaceBElementTap,
    extractSubCardMetaAndChips: extractSubCardMetaAndChips,
    forceCloseFullscreenViewport: forceCloseFullscreenViewport,
    ensureMicroAppRendered: ensureMicroAppRendered,
    repairFullscreenSubServiceDOM: repairFullscreenSubServiceDOM,
    handleFullscreenCloseOneTap: handleFullscreenCloseOneTap,
    routeSubCardOneTap: routeSubCardOneTap,
    handleSubCardOneTap: handleSubCardOneTap
  };
})();
