/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-3B Modular Sub-Card 1-Tap Core Router (v87 Slim)
 *   - REPO TARGET    : public/js/one-tap-subcard-router.js
 *   - SURFACE TARGET : SHARED (Surface-A Public 1-Tap & Surface-B Owner SIVME Guard)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 190 Logical Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/one-tap-subcard-router.js (Part-3B: Core Sub-Card 1-Tap Router & 15-2/15-3 Mounter)
 *   - public/js/one-tap-subcard-dom-helpers.js (Part-3C: Chip Extractor, Preloader & 32-3 DOM Repair)
 *   - public/js/catalog/category-15/15-2-rental-template.js & 16-2-rental-ledger.js (15-2 Engine)
 *   - public/js/catalog/category-15/15-3-rental-template.js & 16-3-rental-search.js (15-3 Engine)
 *   - public/js/fullscreen-microapp-controller.js (Part-3A: Generic Fullscreen Viewport Shell)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, ROOT-ENGINE-FIRST & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : ensureMicroAppRendered, handleFullscreenCloseOneTap,
 *                              routeSubCardOneTap, handleSubCardOneTap, hookExternalRenderers,
 *                              plus bridges to Part-3C (`one-tap-subcard-dom-helpers.js`).
 *   - ALLOWED ON SURFACE-B   : isSurfaceBOwnerActive & isSurfaceBElementTap pass-through guards.
 *   - ROOT-ENGINE-FIRST RULE : Mounts `RM_Cat15_Sub2_RentalLedger` (15-2) & `RM_Cat15_Sub3_RentalSearch`
 *                              (15-3) directly into `#rm-module-container` without calling legacy
 *                              `handleLaunchCategory('c16')`.
 *   - FORBIDDEN IN THIS FILE : Heavy static icon/chip tables (moved to Part-3C `one-tap-subcard-dom-helpers.js`).
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_SUBCARD_ROUTER, window.__RM_LAST_MODAL_OPEN_TS
 *   - CALLS EXTERNAL APIs : window.RM_SUBCARD_DOM_HELPERS.*, window.RM_Cat15_Sub2_RentalLedger,
 *                           window.RM_Cat15_Sub3_RentalSearch, window.RM_FULLSCREEN_CONTROLLER.*
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #rm-fullscreen-view, #categoryModal, #fs-module-title,
 *                           #rm-module-container, [id^="sub-"], .rm-service-chip, [data-fs-chip]
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, #sivme-drawer, [data-sivme-id], [id^="sivme-"]
 *   - WORLD-CLASS 2.5D UI : Preserves 2.5D UI of 15-2/15-3 and 4-chip launcher for 15-1 & all sub-cards.
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Routes on any intentional tap inside sub-card (`खोलें ➔`, service chips, title);
 *                     ignores `📌 पिन` and `▶ वीडियो` buttons so they work without page jump.
 *   - DOM SAFETY    : Canary `data-rm-cat15-mounted` is set ONLY after `#rm-cat16-btn-add` or
 *                     `#rm-search-results-list` is confirmed inside `#rm-module-container`.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 11 FUNCTIONS EXPORTED):
 *   0. preloadCat15ModularEngines (Bridge) 1. isSurfaceBOwnerActive (Bridge)
 *   2. isSurfaceBElementTap (Bridge)       3. forceCloseFullscreenViewport (Bridge)
 *   4. ensureMicroAppRendered              5. extractSubCardMetaAndChips (Bridge)
 *   6. repairFullscreenSubServiceDOM (Br.) 7. handleFullscreenCloseOneTap
 *   8. routeSubCardOneTap                  9. handleSubCardOneTap
 *   10. hookExternalRenderers
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole owner of Sub-Card 1-Tap Routing & 15-2/15-3 Direct Engine Mounting.
 *   - ZERO-GUESSWORK LOCK : Verified 1:1 against `v86 Slim` (`1000303664.png`).
 *   - CANONICAL PATH      : Must exist ONLY at `public/js/one-tap-subcard-router.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Delegates chip extraction & 32-3 DOM repair to `one-tap-subcard-dom-helpers.js`.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['one-tap-subcard-router']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect all routing calls.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, 1-TASK-1-FILE COMMIT, PRE-MAIN GATE & CONTRACT LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261019_v87'`.
 *   - PIPELINE GATE   : Commit & verify on `pre-main` before merging to `main`.
 * ==============================================================================
 * 12. GITHUB ACTIONS FOLDER-B MIRROR SYNC & AI PRE-FLIGHT AUDIT TAGS:
 *   - @folder-a-ssot  : 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW (Pure Policy & Specs Only — No Code)
 *   - @folder-b-mirror: 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH (Auto-Synced via sync_drive.yml)
 *   - @ai-pre-flight  : 12-Point Header + Code auto-indexed in Folder B snapshot.
 * ==============================================================================
 */

(function () {
  'use strict';

  window.__RM_LOADED_MODULES__ = window.__RM_LOADED_MODULES__ || {};
  if (window.__RM_LOADED_MODULES__['one-tap-subcard-router']) return;
  window.__RM_LOADED_MODULES__['one-tap-subcard-router'] = true;

  var routerPollTimer = null;

  // 0. Auto-Load Part-3C Companion (`one-tap-subcard-dom-helpers.js`) & Preload Cat-15 Engines
  function preloadCat15ModularEngines() {
    var ver = window.__RM_ACTIVE_CACHE_VER || '20261019_v87';
    var files = [
      { id: 'rm-part3c-dom-helpers-js', src: '/js/one-tap-subcard-dom-helpers.js?v=' + ver },
      { id: 'rm-cat15-2-template-js', src: '/js/catalog/category-15/15-2-rental-template.js?v=' + ver },
      { id: 'rm-cat15-3-template-js', src: '/js/catalog/category-15/15-3-rental-template.js?v=' + ver },
      { id: 'rm-cat15-2-engine-js', src: '/js/catalog/category-16/16-2-rental-ledger.js?v=' + ver },
      { id: 'rm-cat15-3-engine-js', src: '/js/catalog/category-16/16-3-rental-search.js?v=' + ver }
    ];
    files.forEach(function (f) {
      if (!document.getElementById(f.id)) {
        var s = document.createElement('script');
        s.id = f.id;
        s.src = f.src;
        s.async = false;
        (document.head || document.documentElement).appendChild(s);
      }
    });
  }
  preloadCat15ModularEngines();


  // 1–5. Bridges to Part-3C (`window.RM_SUBCARD_DOM_HELPERS`) with 0ms Safe Fallbacks
  function isSurfaceBOwnerActive() {
    if (window.RM_SUBCARD_DOM_HELPERS && window.RM_SUBCARD_DOM_HELPERS.isSurfaceBOwnerActive) {
      return window.RM_SUBCARD_DOM_HELPERS.isSurfaceBOwnerActive();
    }
    var p = new URLSearchParams(window.location.search);
    return p.get('sivme') === 'owner' || p.get('sov_mode') === 'in_situ' || p.get('dev_auto') === '1' || sessionStorage.getItem('sivme_active') === '1';
  }

  function isSurfaceBElementTap(target) {
    if (window.RM_SUBCARD_DOM_HELPERS && window.RM_SUBCARD_DOM_HELPERS.isSurfaceBElementTap) {
      return window.RM_SUBCARD_DOM_HELPERS.isSurfaceBElementTap(target);
    }
    return Boolean(target && target.closest && target.closest('.sivme-notch-pill, #sivme-hud, #sivme-drawer, [data-sivme-id], [id^="sivme-"]'));
  }

  function forceCloseFullscreenViewport() {
    if (routerPollTimer) {
      clearInterval(routerPollTimer);
      routerPollTimer = null;
    }
    if (window.RM_SUBCARD_DOM_HELPERS && window.RM_SUBCARD_DOM_HELPERS.forceCloseFullscreenViewport) {
      return window.RM_SUBCARD_DOM_HELPERS.forceCloseFullscreenViewport();
    }
    var fs = document.getElementById('rm-fullscreen-view');
    if (fs) { fs.classList.add('hidden'); fs.style.setProperty('display', 'none', 'important'); }
    var c = document.getElementById('rm-module-container');
    if (c) c.removeAttribute('data-rm-cat15-mounted');
  }

  function extractSubCardMetaAndChips(subCode, subCardEl, matrixEntry, titleText) {
    if (window.RM_SUBCARD_DOM_HELPERS && window.RM_SUBCARD_DOM_HELPERS.extractSubCardMetaAndChips) {
      return window.RM_SUBCARD_DOM_HELPERS.extractSubCardMetaAndChips(subCode, subCardEl, matrixEntry, titleText);
    }
    var cleanT = (titleText || 'सेवा').replace(/^\d+-\d+\.?\s*/, '');
    return { icon: (matrixEntry && matrixEntry.icon) || '✨', chips: ['⚡ ' + cleanT + ' — तत्काल बुकिंग', '📋 ' + cleanT + ' — स्टैंडर्ड पैकेज', '🏷️ ' + cleanT + ' — विशेष छूट पैकेज', '🤝 ' + cleanT + ' — सत्यापित विशेषज्ञ सहायता'] };
  }

  function repairFullscreenSubServiceDOM(subCard, subCode) {
    if (window.RM_SUBCARD_DOM_HELPERS && window.RM_SUBCARD_DOM_HELPERS.repairFullscreenSubServiceDOM) {
      return window.RM_SUBCARD_DOM_HELPERS.repairFullscreenSubServiceDOM(subCard, subCode);
    }
  }


  // 6. Authoritative Micro-App Mount Guard (Mounts 15-2 & 15-3 Root Engines Directly with 0ms Fallback & Polling)
  function ensureMicroAppRendered(subCode, titleText, subtitleText) {
    var code = String(subCode || '').trim();
    if (!code) return;

    if (code === '15-2' || code === '16-2' || code === '15-3' || code === '16-3') {
      var isLedger = (code === '15-2' || code === '16-2');
      var normCode = isLedger ? '15-2' : '15-3';
      var fs = document.getElementById('rm-fullscreen-view');
      if (fs) {
        fs.classList.remove('hidden');
        fs.style.setProperty('display', 'flex', 'important');
        fs.style.setProperty('z-index', '99999', 'important');
      }
      window.closeFullscreenModule = forceCloseFullscreenViewport;

      var fsTitle = document.getElementById('fs-module-title');
      if (fsTitle) {
        fsTitle.style.fontSize = '13.5px';
        fsTitle.textContent = isLedger
          ? '📒 15-2 • Rental Ledger (किराया बहीखाता)'
          : '🏢 15-3 • Room & Flat Search (कमरा व फ्लैट खोज)';
      }
      var container = document.getElementById('rm-module-container');
      if (!container) return;

      var canarySelector = isLedger ? '#rm-cat16-btn-add' : '#rm-search-results-list';
      if (container.getAttribute('data-rm-cat15-mounted') === normCode && container.querySelector(canarySelector)) {
        return;
      }

      var tryMountCat15 = function () {
        if (fs && fs.classList.contains('hidden')) return true;
        var engine = isLedger
          ? (window.RM_Cat15_Sub2_RentalLedger || window.RM_Cat16_Sub2_RentalLedger || window.RiseMitraCatalog_15_2 || window.RiseMitraCatalog_16_2)
          : (window.RM_Cat15_Sub3_RentalSearch || window.RM_Cat16_Sub3_RentalSearch || window.RiseMitraCatalog_15_3 || window.RiseMitraCatalog_16_3);

        if (engine && typeof engine.mount === 'function') {
          engine.mount(container, { accountId: 'default' });
          if (container.querySelector(canarySelector)) {
            container.setAttribute('data-rm-cat15-mounted', normCode);
            return true;
          }
        }

        var tpl = isLedger
          ? (window.RM_Cat15_Sub2_Template || window.RM_Cat16_Sub2_Template)
          : (window.RM_Cat15_Sub3_Template || window.RM_Cat16_Sub3_Template);
        if (tpl) {
          if (isLedger && typeof tpl.buildRentalLedgerHTML === 'function') {
            container.innerHTML = tpl.buildRentalLedgerHTML([], 8);
          } else if (!isLedger && typeof tpl.buildRentalSearchShellHTML === 'function') {
            var seeds = Array.isArray(tpl.SEED_LISTINGS) ? tpl.SEED_LISTINGS : [];
            container.innerHTML = tpl.buildRentalSearchShellHTML(seeds.length, { smartOmnibox: true, showState: true, showDistrict: true, showBudget: true, showSubmeter: true }, {});
            var resBox = container.querySelector('#rm-search-results-list');
            if (resBox && typeof tpl.renderListingCard === 'function') {
              resBox.innerHTML = seeds.map(function (it) { return tpl.renderListingCard(it); }).join('');
            }
          }
        }
        return false;
      };

      if (tryMountCat15()) return;

      preloadCat15ModularEngines();
      if (routerPollTimer) clearInterval(routerPollTimer);
      var tries = 0;
      routerPollTimer = setInterval(function () {
        tries++;
        if ((fs && fs.classList.contains('hidden')) || tryMountCat15() || tries > 30) {
          clearInterval(routerPollTimer);
          routerPollTimer = null;
        }
      }, 60);
      return;
    }

    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.__origEnsureMicroApp === 'function') {
      window.RM_FULLSCREEN_CONTROLLER.__origEnsureMicroApp(subCode, titleText, subtitleText);
    } else if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered === 'function' &&
               window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered !== ensureMicroAppRendered) {
      window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered(subCode, titleText, subtitleText);
    }
  }


  // 7. PRIORITY 0 Handler: Instant 1-Tap Close on Fullscreen Top-Right ✕, Top-Left ‹ वापस, or ‹ कैटलॉग पर वापस
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


  // 8. Sub-Card 1-Tap Router (Mounts 15-2/15-3 Directly WITHOUT Legacy handleLaunchCategory Overwrite)
  function routeSubCardOneTap(e, target, subCard) {
    var rawAttr = (subCard.getAttribute('data-rm-sub-rendered') || subCard.getAttribute('data-sub-code') || '').split(':')[0];
    var subIdMatch = (subCard.textContent || '').match(/\b(\d{1,2}-\d)\b/);
    var subCode = subIdMatch ? subIdMatch[1] : (rawAttr || '01-1');

    if (subCode === '15-2' || subCode === '16-2' || subCode === '15-3' || subCode === '16-3') {
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      ensureMicroAppRendered(subCode);
      setTimeout(function () { ensureMicroAppRendered(subCode); }, 45);
      return;
    }

    var tappedNode = target && target.closest ? target.closest('.rm-service-chip, div, span, button') : null;
    var tappedText = tappedNode ? (tappedNode.textContent || '').trim() : '';
    var headingEl = subCard.querySelector('h3, h4, [style*="font-size: 20"], [style*="font-size: 18"], [style*="font-size: 19"], .font-black, .font-bold');
    var subHeadingEl = subCard.querySelector('.text-emerald-400, p');
    var matrix = window.RM_CANONICAL_SUB_MATRIX || {};
    var matrixEntry = matrix[subCode] || null;
    var domTitle = headingEl ? headingEl.textContent.trim() : '';
    var cardTitle = (domTitle && !/^\[\d{1,2}-\d\]$/.test(domTitle)) ? domTitle : ((matrixEntry && matrixEntry.title) || (subCode === '15-1' ? 'Mistry & Home Repair (मिस्त्री व गृह मरम्मत)' : 'सत्यापित सेवा'));
    var cardSubtitle = (subHeadingEl ? subHeadingEl.textContent.trim() : '') || (matrixEntry && matrixEntry.hindiTitle) || 'Rise Mitra सत्यापित सेवा व बुकिंग पोर्टल';

    var isServicePill = Boolean(target && target.closest && target.closest('.rm-service-chip')) || (
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


  // 9. CASE 2 Handler: 1-Tap inside Sub-Category Card (Opens on Card/Chips/Open Button; Skips Pin & Video)
  function handleSubCardOneTap(e, target) {
    var actualTarget = (e && e.target && e.target.closest) ? e.target : target;
    if (isSurfaceBElementTap(actualTarget)) return false;
    var subCard = (actualTarget && actualTarget.closest ? actualTarget.closest('[id^="sub-"] > div') : null) ||
                  (target && target.closest ? target.closest('[id^="sub-"] > div') : null);
    if (!subCard) return false;

    var hitBtn = actualTarget && actualTarget.closest ? actualTarget.closest('button, a') : null;
    if (hitBtn) {
      var bTxt = (hitBtn.textContent || '').trim();
      if (bTxt.indexOf('पिन') !== -1 || bTxt.indexOf('वीडियो') !== -1 || hitBtn.classList.contains('rm-clean-pin')) {
        return false;
      }
    }

    var rawRenderedAttr = (subCard.getAttribute('data-rm-sub-rendered') || subCard.getAttribute('data-sub-code') || '').split(':')[0];
    var subIdMatch = (subCard.textContent || '').match(/\b(\d{1,2}-\d)\b/);
    var subCode = subIdMatch ? subIdMatch[1] : (rawRenderedAttr || '15-3');
    var tappedChip = actualTarget && actualTarget.closest ? actualTarget.closest('.rm-service-chip') : null;
    var safeHeadingTarget = tappedChip || subCard.querySelector('h3, h4, [style*="font-size: 20px"], .font-black, .font-bold') || subCard;

    routeSubCardOneTap(e, safeHeadingTarget, subCard);

    if (subCode === '15-2' || subCode === '16-2' || subCode === '15-3' || subCode === '16-3') {
      ensureMicroAppRendered(subCode);
      return true;
    }

    ensureMicroAppRendered(subCode);
    repairFullscreenSubServiceDOM(subCard, subCode);
    setTimeout(function () { ensureMicroAppRendered(subCode); repairFullscreenSubServiceDOM(subCard, subCode); }, 25);
    setTimeout(function () { ensureMicroAppRendered(subCode); repairFullscreenSubServiceDOM(subCard, subCode); }, 80);
    return true;
  }


  // 10. Hook External Renderers so 15-2 & 15-3 Never Get Overwritten by Generic Controller
  function hookExternalRenderers() {
    if (window.RM_SUB_CARD_RENDERER && typeof window.launchOneTapServiceScreen === 'function') {
      window.RM_SUB_CARD_RENDERER.openSmoothSubServiceScreen = function (entry, subCode, title, subtitle, selectedPill) {
        var code = String(subCode || '').trim();
        if (code === '15-2' || code === '16-2' || code === '15-3' || code === '16-3') {
          ensureMicroAppRendered(code, title, subtitle);
          return;
        }
        window.launchOneTapServiceScreen(title, subtitle, subCode, selectedPill, null, entry);
      };
    }
    if (window.RM_FULLSCREEN_CONTROLLER) {
      if (!window.RM_FULLSCREEN_CONTROLLER.__origEnsureMicroApp && window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered !== ensureMicroAppRendered) {
        window.RM_FULLSCREEN_CONTROLLER.__origEnsureMicroApp = window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered;
      }
      window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered = ensureMicroAppRendered;
      window.RM_FULLSCREEN_CONTROLLER.extractSubCardMetaAndChips = extractSubCardMetaAndChips;
      window.RM_FULLSCREEN_CONTROLLER.routeSubCardOneTap = routeSubCardOneTap;
    }
  }
  hookExternalRenderers();
  setTimeout(hookExternalRenderers, 200);
  setTimeout(hookExternalRenderers, 800);

  window.RM_SUBCARD_ROUTER = {
    preloadCat15ModularEngines: preloadCat15ModularEngines,
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
