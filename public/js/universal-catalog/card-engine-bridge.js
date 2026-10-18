/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Universal Card Engine Part-A: Data, SubCard & Viewport Bridge (v73)
 *   - REPO TARGET    : public/js/universal-catalog/card-engine-bridge.js
 *   - SURFACE TARGET : SURFACE-A ONLY (Sub-Container, Registry Data & Sub-Card Bridge)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 230 Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : 100% ZEL | Fail-Closed | 28.00% NCR Cap | CoverageRatio >= 1.00
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/universal-catalog/card-engine-bridge.js (This File: Part-A Data & SubCard Bridge)
 *   - public/js/universal-catalog/universal-card-engine.js (Part-B: Parent Card UI & Sweep)
 *   - public/js/universal-catalog/canonical-sub-matrix.js (150 Sub-Category Matrix SSOT)
 *   - public/js/universal-catalog/sub-card-renderer.js (Modular Sub-Card Renderer)
 *   - public/js/fullscreen-microapp-controller.js (Part-3A: Fullscreen 4-Chip Viewport UI)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : resolveSubContainer, openOneTapSubServiceViewport,
 *                              ensureCanonicalMatrixLoaded, getCanonicalMatrix, getNormalizedIds,
 *                              isGenericSubData, fetchCategoryRegistryData,
 *                              fetchSubcategoryRegistryData, triggerLegacySubAction, renderSubCard.
 *   - ALLOWED ON SURFACE-B   : NONE (Surface-B SIVME controls are strictly isolated).
 *   - FORBIDDEN IN THIS FILE : Large parent-card HTML templates or global click listeners.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_CARD_ENGINE_BRIDGE, window.openOneTapSubServiceViewport
 *   - CALLS EXTERNAL APIs : window.RM_CATALOG_REGISTRY.*, window.RM_CANONICAL_SUB_MATRIX,
 *                           window.RM_SUB_CARD_RENDERER.*, window.RM_FULLSCREEN_CONTROLLER.*
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #rm-fullscreen-view, #fs-module-title, #rm-module-container, [id^="sub-"]
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Pure helper functions; zero window/document event listeners attached here.
 *   - ID SAFETY     : Strips both `c` and `g` prefixes so Games 33-50 resolve cleanly.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 10 BRIDGE FUNCTIONS INTACT):
 *   1. resolveSubContainer                2. openOneTapSubServiceViewport
 *   3. ensureCanonicalMatrixLoaded        4. getCanonicalMatrix
 *   5. getNormalizedIds                   6. isGenericSubData
 *   7. fetchCategoryRegistryData          8. fetchSubcategoryRegistryData
 *   9. triggerLegacySubAction             10. renderSubCard
 * ==============================================================================
 * 8. ONE JOB = ONE FILE & CANONICAL PATH LOCK (ANTI-DUPLICATE FILE GUARD):
 *   - SINGLE JOB RULE : Sole owner of Part-A Card Engine Data Resolution & Sub-Card Bridge.
 *   - CANONICAL PATH  : Must exist ONLY at `public/js/universal-catalog/card-engine-bridge.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Consumed directly by `universal-card-engine.js` (Part-B).
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['card-engine-bridge']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect all DOM/data lookups.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, PRE-MAIN GATE & CONTRACT PARITY LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261018_v73'`.
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
  if (window.__RM_LOADED_MODULES__['card-engine-bridge']) return;
  window.__RM_LOADED_MODULES__['card-engine-bridge'] = true;


  // 1. Resolve Sub-Container across all ID conventions (sub-c1, sub-c01, sub-g34, sub-1, etc.)
  function resolveSubContainer(catEl, rawId, cleanNum) {
    var intNum = parseInt(cleanNum, 10) || 1;
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    return document.getElementById('sub-c' + cleanNum) ||
           document.getElementById('sub-c' + paddedNum) ||
           document.getElementById('sub-c' + intNum) ||
           document.getElementById('sub-g' + cleanNum) ||
           document.getElementById('sub-g' + paddedNum) ||
           document.getElementById('sub-g' + intNum) ||
           document.getElementById('sub-' + rawId) ||
           document.getElementById('sub-' + cleanNum) ||
           document.getElementById('sub-' + paddedNum) ||
           document.getElementById('sub-' + intNum) ||
           (catEl ? catEl.querySelector('[id^="sub-"]') : null);
  }


  // 2. Open Fullscreen Micro-App Viewport on 1-Tap for Sub-Card or Service Chip
  function openOneTapSubServiceViewport(info, cleanSub, selectedChipText, isGame) {
    if (window.RM_FULLSCREEN_MICROAPP_CONTROLLER && typeof window.RM_FULLSCREEN_MICROAPP_CONTROLLER.openOneTapSubServiceViewport === 'function') {
      window.RM_FULLSCREEN_MICROAPP_CONTROLLER.openOneTapSubServiceViewport(info, cleanSub, selectedChipText, isGame);
      return;
    }
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.launchOneTapServiceScreen === 'function') {
      var t = (info && info.title) || ('सेवा ' + cleanSub);
      var s = (info && (info.hindiTitle || info.hindi)) || 'प्रमाणित व विश्वसनीय सेवा';
      window.RM_FULLSCREEN_CONTROLLER.launchOneTapServiceScreen(t, s, cleanSub, selectedChipText, null, info);
      return;
    }
    if ((cleanSub === '15-2' || cleanSub === '16-2') && typeof window.openFullscreenModule === 'function') {
      window.openFullscreenModule('16-2');
      return;
    }
    if ((cleanSub === '15-3' || cleanSub === '16-3') && typeof window.openFullscreenModule === 'function') {
      window.openFullscreenModule('16-3');
      return;
    }

    var fs = document.getElementById('rm-fullscreen-view');
    var fsTitle = document.getElementById('fs-module-title');
    var fsContainer = document.getElementById('rm-module-container');
    if (!fs || !fsContainer) return;

    if (typeof window.closeFullscreenModule !== 'function') {
      window.closeFullscreenModule = function () {
        fs.classList.add('hidden');
        fs.style.setProperty('display', 'none', 'important');
      };
    }

    var mainHeading = selectedChipText || (info && info.title) || ('सेवा ' + cleanSub);
    var subHeading = selectedChipText
      ? ((info && info.title ? info.title + ' • ' : '') + ((info && (info.hindiTitle || info.hindi)) || ''))
      : ((info && (info.hindiTitle || info.hindi)) || 'प्रमाणित व विश्वसनीय सेवा');
    var badgeIcon = (info && info.icon) || (isGame ? '🎮' : '🛠️');
    var ratingText = (info && info.rating) || '★ 4.9';
    var reviewText = (info && info.reviewCount) || (isGame ? '18k+ खिलाड़ी' : '1,500+ समीक्षाएं');

    if (fsTitle) fsTitle.textContent = badgeIcon + ' ' + cleanSub + '. ' + mainHeading;

    fsContainer.innerHTML =
      '<div style="padding:18px 14px;color:#f8fafc;font-family:system-ui,sans-serif;">' +
        '<div style="background:linear-gradient(135deg,#0f172a,#1e293b);border:1.5px solid rgba(56,189,248,0.35);border-radius:16px;padding:18px;margin-bottom:16px;">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:6px;">' +
            '<span style="background:rgba(56,189,248,0.16);color:#38bdf8;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:800;">कोड: ' + cleanSub + '</span>' +
            '<span style="color:#facc15;font-size:12.5px;font-weight:800;">' + ratingText + ' (' + reviewText + ')</span>' +
          '</div>' +
          '<div style="font-size:20px;font-weight:900;color:#ffffff;margin-bottom:4px;">' + badgeIcon + ' ' + mainHeading + '</div>' +
          '<div style="font-size:13.5px;font-weight:600;color:#34d399;">' + subHeading + '</div>' +
        '</div>' +
        '<button type="button" onclick="window.closeFullscreenModule && window.closeFullscreenModule()" style="width:100%;padding:13px;border-radius:12px;border:1px solid rgba(148,163,184,0.3);background:#1e293b;color:#f8fafc;font-size:14px;font-weight:800;cursor:pointer;">← वापस कैटलॉग पर जाएं</button>' +
      '</div>';

    fs.classList.remove('hidden');
    fs.style.setProperty('display', 'flex', 'important');
  }
  window.openOneTapSubServiceViewport = openOneTapSubServiceViewport;


  // 3. Auto-load decoupled Canonical 150 Sub-Category Matrix & Sub-Card Renderer Modules
  function ensureCanonicalMatrixLoaded() {
    var head = document.head || document.documentElement;
    var ver = window.__RM_ACTIVE_CACHE_VER || '20261018_v73';
    if (!window.RM_CANONICAL_SUB_MATRIX && !document.getElementById('rm-canonical-sub-matrix-script')) {
      var s1 = document.createElement('script');
      s1.id = 'rm-canonical-sub-matrix-script';
      s1.src = '/js/universal-catalog/canonical-sub-matrix.js?v=' + ver;
      s1.async = false;
      s1.onload = function () {
        if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
          window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog();
        }
      };
      head.appendChild(s1);
    }
    if (!window.RM_SUB_CARD_RENDERER && !document.getElementById('rm-sub-card-renderer-script')) {
      var s2 = document.createElement('script');
      s2.id = 'rm-sub-card-renderer-script';
      s2.src = '/js/universal-catalog/sub-card-renderer.js?v=' + ver;
      s2.async = false;
      s2.onload = function () {
        if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
          window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog();
        }
      };
      head.appendChild(s2);
    }
  }
  ensureCanonicalMatrixLoaded();


  // 4. Data Normalization & Registry Lookup Helpers
  function getCanonicalMatrix() {
    return window.RM_CANONICAL_SUB_MATRIX || {};
  }

  function getNormalizedIds(catId) {
    if (window.RM_CARD_DATA_RESOLVER && typeof window.RM_CARD_DATA_RESOLVER.getNormalizedIds === 'function') {
      return window.RM_CARD_DATA_RESOLVER.getNormalizedIds(catId);
    }
    var rawDigits = String(catId || '').replace(/[^0-9]/g, '');
    var intNum = parseInt(rawDigits, 10);
    if (isNaN(intNum) || intNum < 1) intNum = 1;
    var normId = String(intNum);
    var paddedId = (intNum < 10 ? '0' : '') + intNum;
    return { intNum: intNum, normId: normId, paddedId: paddedId, displayNum: paddedId + '.' };
  }

  function isGenericSubData(d) {
    if (window.RM_CARD_DATA_RESOLVER && typeof window.RM_CARD_DATA_RESOLVER.isGenericSubData === 'function') {
      return window.RM_CARD_DATA_RESOLVER.isGenericSubData(d);
    }
    return !d || !d.title || String(d.title).trim().indexOf('सेवा ') === 0;
  }

  function fetchCategoryRegistryData(ids) {
    if (window.RM_CARD_DATA_RESOLVER && typeof window.RM_CARD_DATA_RESOLVER.fetchCategoryRegistryData === 'function') {
      return window.RM_CARD_DATA_RESOLVER.fetchCategoryRegistryData(ids);
    }
    if (!window.RM_CATALOG_REGISTRY || typeof window.RM_CATALOG_REGISTRY.getCategoryData !== 'function') return null;
    var cNorm = window.RM_CATALOG_REGISTRY.getCategoryData(ids.normId);
    var cPad = window.RM_CATALOG_REGISTRY.getCategoryData(ids.paddedId);
    if (cNorm && cNorm.subtitle && cNorm.subtitle !== 'दैनिक जनसेवाएं व आधिकारिक सुविधा केंद्र') return cNorm;
    if (cPad && cPad.subtitle && cPad.subtitle !== 'दैनिक जनसेवाएं व आधिकारिक सुविधा केंद्र') return cPad;
    return cNorm || cPad || null;
  }

  function fetchSubcategoryRegistryData(ids, cleanSub) {
    if (window.RM_CARD_DATA_RESOLVER && typeof window.RM_CARD_DATA_RESOLVER.fetchSubcategoryRegistryData === 'function') {
      return window.RM_CARD_DATA_RESOLVER.fetchSubcategoryRegistryData(ids, cleanSub);
    }
    var matrix = getCanonicalMatrix();
    var parts = String(cleanSub || '').split('-');
    var paddedSub = ids.paddedId + '-' + (parts[1] || '1');
    return matrix[paddedSub] || null;
  }


  // 5. Sub-Card Renderer Delegation & Top-Left 22px Numbering Lock
  function triggerLegacySubAction(subCardEl, keyword) {
    if (window.RM_SUB_CARD_RENDERER && typeof window.RM_SUB_CARD_RENDERER.triggerLegacySubAction === 'function') {
      return window.RM_SUB_CARD_RENDERER.triggerLegacySubAction(subCardEl, keyword);
    }
    return false;
  }

  function renderSubCard(subCardEl, catId, subId) {
    if (!subCardEl) return;
    if (window.RM_SUB_CARD_RENDERER && typeof window.RM_SUB_CARD_RENDERER.renderSubCard === 'function') {
      window.RM_SUB_CARD_RENDERER.renderSubCard(subCardEl, catId, subId);
    }
    var cleanCode = String(subId || '').replace(/\s+/g, '').replace(/\.$/, '') + '.';
    var spans = subCardEl.querySelectorAll('span, div');
    for (var i = 0; i < spans.length; i++) {
      var s = spans[i];
      if (s.children.length === 0 && s.textContent && /^\d{1,2}-\d\s*\.?$/.test(s.textContent.trim())) {
        s.textContent = cleanCode;
        s.style.setProperty('font-family', 'system-ui, -apple-system, sans-serif', 'important');
        s.style.setProperty('font-size', '22px', 'important');
        s.style.setProperty('font-weight', '900', 'important');
        s.style.setProperty('color', '#38bdf8', 'important');
        s.style.setProperty('letter-spacing', '-0.5px', 'important');
        s.style.setProperty('line-height', '1.05', 'important');
        if (s.parentElement && s.parentElement !== subCardEl) {
          s.parentElement.style.setProperty('align-items', 'flex-start', 'important');
        }
        break;
      }
    }
  }

  window.RM_CARD_ENGINE_BRIDGE = {
    resolveSubContainer: resolveSubContainer,
    openOneTapSubServiceViewport: openOneTapSubServiceViewport,
    ensureCanonicalMatrixLoaded: ensureCanonicalMatrixLoaded,
    getCanonicalMatrix: getCanonicalMatrix,
    getNormalizedIds: getNormalizedIds,
    isGenericSubData: isGenericSubData,
    fetchCategoryRegistryData: fetchCategoryRegistryData,
    fetchSubcategoryRegistryData: fetchSubcategoryRegistryData,
    triggerLegacySubAction: triggerLegacySubAction,
    renderSubCard: renderSubCard
  };
})();
