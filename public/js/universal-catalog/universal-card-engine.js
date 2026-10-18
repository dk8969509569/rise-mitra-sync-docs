/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Universal Catalog Play Store Card Engine (v72)
 *   - REPO TARGET    : public/js/universal-catalog/universal-card-engine.js
 *   - SURFACE TARGET : SURFACE-A ONLY (Pure Modular Google Play Store Card Renderer)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 298 Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/universal-catalog/universal-card-engine.js (This File: UI Renderer)
 *   - public/js/universal-catalog/canonical-sub-matrix.js (150 Sub-Category Matrix)
 *   - public/js/universal-catalog/sub-card-renderer.js (Modular Sub-Card Renderer)
 *   - public/js/one-tap-catalog-dom-engine.js (Part-1B: DOM Hydration & Shield)
 *   - public/js/one-tap-accordion-engine.js (Part-1C: 0ms 1-Tap Accordion Engine)
 *   - public/js/one-tap-shell-bridge.js (Part-2: Deterministic 1-Tap Shell Bridge)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Parent Card (01.-50.) & Sub-Card (01-1.-50-3.) HTML UI,
 *                              Top-Left 24px/22px Numbering, Trust Pillars & Card Sweep.
 *   - ALLOWED ON SURFACE-B   : Pass-through exclusion for .sivme-notch-pill.
 *   - FORBIDDEN IN THIS FILE : Re-writing innerHTML of already-rendered Play Store cards
 *                              during background sweeps (causes flicker/hang).
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_UNIVERSAL_CARD_ENGINE, window.openOneTapSubServiceViewport
 *   - CALLS EXTERNAL APIs : window.RM_CATALOG_REGISTRY.*, window.RM_CANONICAL_SUB_MATRIX,
 *                           window.RM_SUB_CARD_RENDERER.*, window.RM_FULLSCREEN_CONTROLLER.*
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #categoryModal, [data-cat-id], [id^="rm-universal-parent-"],
 *                           .rm-toplevel-num-badge, .rm-parent-toggle-pill
 *   - SURFACE-B SELECTORS : .sivme-notch-pill (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - ZERO FLICKER  : Fast-path O(1) pill update if `#rm-universal-parent-{id}` exists.
 *   - COMPACT GUARD : Hides legacy compact sibling nodes on cards 45..50 (`3 गेम्स ▼`).
 *   - TAP RESPECT   : Skips background state overwrite on `data-rm-user-toggled="1"` cards.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 13 FUNCTIONS INTACT):
 *   1. resolveSubContainer                2. openOneTapSubServiceViewport
 *   3. ensureCanonicalMatrixLoaded        4. getCanonicalMatrix
 *   5. getNormalizedIds                   6. isGenericSubData
 *   7. fetchCategoryRegistryData          8. fetchSubcategoryRegistryData
 *   9. renderParentCard                   10. triggerLegacySubAction
 *   11. renderSubCard                     12. sweepCatalog
 *   13. boot
 * ==============================================================================
 * 8. ONE JOB = ONE FILE & CANONICAL PATH LOCK (ANTI-DUPLICATE FILE GUARD):
 *   - SINGLE JOB RULE : Sole owner of Universal Play Store Card HTML Rendering (01-50).
 *   - CANONICAL PATH  : Must exist ONLY at `public/js/universal-catalog/universal-card-engine.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Delegates sub-cards to `sub-card-renderer.js` & `fullscreen-microapp-controller.js`.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['universal-card-engine']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect all card renders.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, PRE-MAIN GATE & CONTRACT PARITY LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261018_v72'`.
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
  if (window.__RM_LOADED_MODULES__['universal-card-engine']) return;
  window.__RM_LOADED_MODULES__['universal-card-engine'] = true;

  var isSweeping = false;
  var lastParentTapTs = 0;
  var lastSubTapTs = 0;


  // 1. Helper: Resolve Sub-Container across all ID conventions (sub-c1, sub-c01, sub-g34, sub-1, etc.)
  function resolveSubContainer(catEl, rawId, cleanNum) {
    var intNum = parseInt(cleanNum, 10);
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


  // 2. Helper: Open Fullscreen Micro-App Viewport on 1-Tap for Sub-Card or Service Chip
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

    if (fsTitle) {
      fsTitle.textContent = badgeIcon + ' ' + cleanSub + '. ' + mainHeading;
    }

    fsContainer.innerHTML = [
      '<div style="padding: 18px 14px; color: #f8fafc; font-family: system-ui, sans-serif;">',
      '  <div style="background: linear-gradient(135deg, #0f172a, #1e293b); border: 1.5px solid rgba(56, 189, 248, 0.35); border-radius: 16px; padding: 18px; margin-bottom: 16px;">',
      '    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">',
      '      <span style="background: rgba(56, 189, 248, 0.16); color: #38bdf8; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 800;">कोड: ' + cleanSub + '</span>',
      '      <span style="color: #facc15; font-size: 12.5px; font-weight: 800;">' + ratingText + ' (' + reviewText + ')</span>',
      '    </div>',
      '    <div style="font-size: 20px; font-weight: 900; color: #ffffff; margin-bottom: 4px;">' + badgeIcon + ' ' + mainHeading + '</div>',
      '    <div style="font-size: 13.5px; font-weight: 600; color: #34d399;">' + subHeading + '</div>',
      '  </div>',
      '  <button type="button" onclick="window.closeFullscreenModule && window.closeFullscreenModule()" style="width: 100%; padding: 13px; border-radius: 12px; border: 1px solid rgba(148, 163, 184, 0.3); background: #1e293b; color: #f8fafc; font-size: 14px; font-weight: 800; cursor: pointer;">← वापस कैटलॉग पर जाएं</button>',
      '</div>'
    ].join('');

    fs.classList.remove('hidden');
    fs.style.setProperty('display', 'flex', 'important');
  }
  window.openOneTapSubServiceViewport = openOneTapSubServiceViewport;


  // 3. Auto-load decoupled Canonical 150 Sub-Category Matrix & Sub-Card Renderer Modules
  (function ensureCanonicalMatrixLoaded() {
    var head = document.head || document.documentElement;
    var ver = window.__RM_ACTIVE_CACHE_VER || '20261018_v72';
    if (!window.RM_CANONICAL_SUB_MATRIX && !document.getElementById('rm-canonical-sub-matrix-script')) {
      var s1 = document.createElement('script');
      s1.id = 'rm-canonical-sub-matrix-script';
      s1.src = '/js/universal-catalog/canonical-sub-matrix.js?v=' + ver;
      s1.async = false;
      s1.onload = function () { sweepCatalog(); };
      head.appendChild(s1);
    }
    if (!window.RM_SUB_CARD_RENDERER && !document.getElementById('rm-sub-card-renderer-script')) {
      var s2 = document.createElement('script');
      s2.id = 'rm-sub-card-renderer-script';
      s2.src = '/js/universal-catalog/sub-card-renderer.js?v=' + ver;
      s2.async = false;
      s2.onload = function () { sweepCatalog(); };
      head.appendChild(s2);
    }
  })();

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
    if (!window.RM_CATALOG_REGISTRY || typeof window.RM_CATALOG_REGISTRY.getCategoryData !== 'function') {
      return null;
    }
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


  // 4. RENDER UNIVERSAL PARENT CARD (0ms O(1) Fast Pill Update if Already Rendered — Zero Flicker/Hang)
  function renderParentCard(headerEl, catId, isOpen, subCount) {
    if (!headerEl) return;
    var ids = getNormalizedIds(catId);
    var numId = ids.normId;
    var displayNum = ids.displayNum;
    var canonicalParentId = 'rm-universal-parent-' + numId;

    var catWrapper = headerEl.closest('[data-cat-id]');
    if (catWrapper) {
      catWrapper.style.setProperty('display', 'flex', 'important');
      catWrapper.style.setProperty('flex-direction', 'column', 'important');
      catWrapper.style.setProperty('align-items', 'stretch', 'important');
      Array.from(catWrapper.children).forEach(function (sib) {
        if (sib !== headerEl && (!sib.id || sib.id.indexOf('sub-') !== 0) && !sib.classList.contains('sivme-notch-pill')) {
          sib.style.setProperty('display', 'none', 'important');
        }
      });
    }

    var regData = fetchCategoryRegistryData(ids);
    var existingContainer = headerEl.querySelector('#' + canonicalParentId);

    // O(1) Zero-Flicker Fast Path: If already rendered with real title, ONLY update toggle pill in 0ms!
    if (existingContainer && (!regData || existingContainer.getAttribute('data-rm-has-reg') === '1')) {
      var pillEl = existingContainer.querySelector('.rm-parent-toggle-pill');
      if (pillEl) {
        pillEl.style.setProperty('color', isOpen ? '#f87171' : '#34d399', 'important');
        pillEl.style.setProperty('background', isOpen ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)', 'important');
        pillEl.style.setProperty('border-color', isOpen ? '#ef4444' : '#10b981', 'important');
        var pSpan = pillEl.querySelector('span') || pillEl;
        pSpan.textContent = isOpen ? 'समेटें ▲' : 'और देखें ▼';
      }
      return;
    }

    headerEl.style.setProperty('display', 'flex', 'important');
    headerEl.style.setProperty('flex-direction', 'column', 'important');
    headerEl.style.setProperty('align-items', 'stretch', 'important');
    headerEl.removeAttribute('onclick');

    Array.from(headerEl.querySelectorAll('[id^="rm-universal-parent-"]')).forEach(function (node) {
      if (node.id !== canonicalParentId) node.remove();
    });

    var domTitle = headerEl.getAttribute('data-rm-saved-title') || '';
    var domSubtitle = headerEl.getAttribute('data-rm-saved-subtitle') || '';
    if (!domTitle) {
      var rawTitleNode = headerEl.querySelector('.font-bold, h3, h4, .text-base, .text-white');
      if (rawTitleNode && rawTitleNode.textContent) {
        domTitle = rawTitleNode.textContent.replace(/^\d+\.?\s*/, '').trim();
        if (domTitle) headerEl.setAttribute('data-rm-saved-title', domTitle);
      }
    }
    if (!domSubtitle) {
      var fullHeaderTxt = (catWrapper || headerEl).textContent || '';
      var hiMatch = fullHeaderTxt.match(/\(([^)]+[\u0900-\u097F][^)]*)\)/);
      if (hiMatch && hiMatch[1]) {
        domSubtitle = hiMatch[1].trim();
        headerEl.setAttribute('data-rm-saved-subtitle', domSubtitle);
      }
    }

    var title = (regData && (regData.title || regData.name)) || domTitle || ('Category ' + displayNum);
    var subtitle = (regData && (regData.subtitle || regData.hindiTitle || regData.hindi || regData.desc)) || domSubtitle || 'दैनिक जनसेवाएं व आधिकारिक सुविधा केंद्र';
    var icon = (regData && regData.icon) || (ids.intNum >= 33 ? '🎮' : '📦');
    var rating = (regData && regData.rating) || '★ 4.9 (10k+ नागरिक)';
    var trustBadge = (regData && (regData.trustBadge || regData.badge)) || 'Rise Verified Network';
    var supportBadge = (regData && regData.supportBadge) || '24x7 सहायता केंद्र';

    var universalPillars = [
      { icon: '🛡️', text: '100% सत्यापित व पुलिस वेरिफाइड सेवा प्रदाता नेटवर्क', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.12)' },
      { icon: '⚡', text: 'पारदर्शी तय रेट कार्ड, डिजिटल बिलिंग व शून्य छुपा शुल्क', color: '#34d399', bg: 'rgba(52, 211, 153, 0.12)' },
      { icon: '🔒', text: 'Rise Mitra कार्य संतुष्टि गारंटी व प्रत्यक्ष सहायता', color: '#facc15', bg: 'rgba(250, 204, 21, 0.12)' }
    ];

    Array.from(headerEl.childNodes).forEach(function (node) {
      if (node.nodeType === 1 && node.id === canonicalParentId) return;
      if (node.nodeType === 1) node.style.setProperty('display', 'none', 'important');
      else if (node.nodeType === 3) node.textContent = '';
    });

    var container = existingContainer;
    if (!container) {
      container = document.createElement('div');
      container.id = canonicalParentId;
      container.style.cssText = 'width:100% !important;display:flex !important;flex-direction:column !important;gap:12px !important;padding:16px 14px 14px 14px !important;box-sizing:border-box !important;text-align:left !important;cursor:pointer !important;touch-action:manipulation !important;';
      headerEl.appendChild(container);
    }
    if (regData) container.setAttribute('data-rm-has-reg', '1');

    var pillarsHtml = universalPillars.map(function (p) {
      return '<div style="font-size:13px;font-weight:700;padding:8px 12px;background:' + p.bg + ';color:' + p.color + ';border:1px solid ' + p.color + '33;border-radius:9px;display:flex;align-items:center;gap:8px;"><span style="font-size:15px;">' + p.icon + '</span><span>' + p.text + '</span></div>';
    }).join('');

    container.innerHTML = [
      '<div style="display: flex; align-items: flex-start; gap: 14px; width: 100%;">',
      '  <div style="display: flex; flex-direction: column; align-items: flex-start; flex-shrink: 0;">',
      '    <span class="rm-toplevel-num-badge" style="font-size: 24px; font-weight: 900; color: #38bdf8; font-family: system-ui, -apple-system, sans-serif; letter-spacing: -0.5px; margin-bottom: 6px; line-height: 1.05; display: block; text-align: left;">' + displayNum + '</span>',
      '    <div style="width: 58px; height: 58px; min-width: 58px; border-radius: 16px; background: linear-gradient(135deg, #1e293b, #0f172a); border: 1.5px solid rgba(56, 189, 248, 0.4); display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.45); flex-shrink: 0;">',
      '      <span style="font-size: 28px; line-height: 1;">' + icon + '</span>',
      '    </div>',
      '  </div>',
      '  <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0; padding-top: 2px;">',
      '    <div style="font-size: 21px; font-weight: 900; color: #ffffff; letter-spacing: -0.3px; line-height: 1.25; margin-bottom: 4px; word-break: break-word;">' + title + '</div>',
      '    <div style="font-size: 13.5px; font-weight: 600; color: #34d399; line-height: 1.35; margin-bottom: 6px; word-break: break-word;">' + subtitle + '</div>',
      '    <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">',
      '      <span style="font-size: 11.5px; font-weight: 800; color: #facc15; background: rgba(250, 204, 21, 0.12); border: 1px solid rgba(250, 204, 21, 0.3); padding: 2px 7px; border-radius: 5px;">' + rating + '</span>',
      '      <span style="font-size: 11.5px; font-weight: 700; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); padding: 2px 7px; border-radius: 5px;">✓ ' + trustBadge + '</span>',
      '      <span style="font-size: 11.5px; font-weight: 700; color: #94a3b8; background: rgba(255, 255, 255, 0.06); padding: 2px 7px; border-radius: 5px;">' + supportBadge + '</span>',
      '    </div>',
      '  </div>',
      '</div>',
      '<div style="display: flex; flex-direction: column; gap: 7px; width: 100%; margin-top: 4px;">' + pillarsHtml + '</div>',
      '<div style="display: flex; justify-content: flex-end; align-items: center; width: 100%; margin-top: 2px;">',
      '  <div class="rm-parent-toggle-pill" style="font-size: 13px; font-weight: 800; color: ' + (isOpen ? '#f87171' : '#34d399') + '; background: ' + (isOpen ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)') + '; border: 1px solid ' + (isOpen ? '#ef4444' : '#10b981') + '; padding: 6px 14px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; touch-action: manipulation;">',
      '    <span>' + (isOpen ? 'समेटें ▲' : 'और देखें ▼') + '</span>',
      '  </div>',
      '</div>'
    ].join('');

    headerEl.setAttribute('data-rm-parent-rendered', '1');
    if (catWrapper) catWrapper.setAttribute('data-rm-parent-rendered', '1');
  }

  function triggerLegacySubAction(subCardEl, keyword) {
    if (window.RM_SUB_CARD_RENDERER && typeof window.RM_SUB_CARD_RENDERER.triggerLegacySubAction === 'function') {
      return window.RM_SUB_CARD_RENDERER.triggerLegacySubAction(subCardEl, keyword);
    }
    return false;
  }


  // 5. RENDER SUB-CARD (DELEGATED TO sub-card-renderer.js + TOP-LEFT NUMBERING LOCK)
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


  // 6. FULL AUTONOMOUS SCANNER ACROSS ALL 50 CATEGORIES (Zero-Lag & Respects User Taps)
  function sweepCatalog() {
    if (isSweeping || window.__RM_MODAL_INTERACTION_LOCK__) return;
    isSweeping = true;
    try {
      var modal = document.getElementById('categoryModel') || document.getElementById('categoryModal') || document.body;
      var cats = modal.querySelectorAll('[data-cat-id]');
      var stateMap = window.__RM_OPEN_CAT_STATE || null;
      cats.forEach(function (catEl) {
        var rawId = catEl.getAttribute('data-cat-id');
        if (!rawId) return;
        var ids = getNormalizedIds(rawId);
        var header = catEl.querySelector(':scope > div:first-child') || catEl;
        var sub = resolveSubContainer(catEl, rawId, ids.normId);

        var isUserToggled = catEl.getAttribute('data-rm-user-toggled') === '1';
        var isOpen = isUserToggled
          ? Boolean(sub && !sub.classList.contains('hidden') && sub.style.display !== 'none' && sub.getAttribute('data-rm-collapsed') !== 'true')
          : ((stateMap && Object.prototype.hasOwnProperty.call(stateMap, ids.normId))
              ? Boolean(stateMap[ids.normId])
              : Boolean(sub && !sub.classList.contains('hidden') && sub.style.display !== 'none' && sub.getAttribute('data-rm-collapsed') !== 'true'));

        var subCards = sub ? sub.querySelectorAll(':scope > div') : [];

        if (sub && !isUserToggled) {
          sub.classList.toggle('hidden', !isOpen);
          sub.setAttribute('data-rm-collapsed', isOpen ? 'false' : 'true');
          sub.style.setProperty('display', isOpen ? 'block' : 'none', 'important');
        }

        if (header && header !== sub) {
          renderParentCard(header, ids.normId, isOpen, subCards.length);
        }

        if (sub && isOpen) {
          subCards.forEach(function (sc, idx) {
            renderSubCard(sc, ids.normId, ids.paddedId + '-' + (idx + 1));
          });
        }
      });
    } finally {
      isSweeping = false;
    }
  }


  // 7. Auto Boot Engine (Non-Blocking & Zero Collision with Part-2 Shell Bridge)
  function boot() {
    sweepCatalog();
    setTimeout(sweepCatalog, 120);
    setTimeout(sweepCatalog, 450);

    document.addEventListener('click', function (e) {
      if (e.target.closest('.sivme-notch-pill')) return;
      if (window.__RM_OPEN_CAT_STATE || window.__RM_LOADED_MODULES__['one-tap-shell-bridge']) return;

      var catEl = e.target.closest('[data-cat-id]');
      if (catEl) {
        var rawId = catEl.getAttribute('data-cat-id') || '';
        var ids = getNormalizedIds(rawId);
        var normNum = ids.normId;
        var header = catEl.querySelector(':scope > div:first-child');
        var sub = resolveSubContainer(catEl, rawId, ids.normId);

        if (header && sub && header.contains(e.target) && !sub.contains(e.target)) {
          var now = Date.now();
          if (now - lastParentTapTs < 250) {
            e.stopImmediatePropagation();
            e.preventDefault();
            return;
          }
          lastParentTapTs = now;
          e.stopImmediatePropagation();
          e.preventDefault();

          var currentlyOpen = !sub.classList.contains('hidden') && sub.style.display !== 'none' && sub.getAttribute('data-rm-collapsed') !== 'true';
          var nextOpen = !currentlyOpen;
          var subCards = sub.querySelectorAll(':scope > div');

          sub.classList.toggle('hidden', !nextOpen);
          sub.setAttribute('data-rm-collapsed', nextOpen ? 'false' : 'true');
          sub.style.setProperty('display', nextOpen ? 'block' : 'none', 'important');
          if (nextOpen) {
            subCards.forEach(function (sc, idx) {
              renderSubCard(sc, normNum, ids.paddedId + '-' + (idx + 1));
            });
          }
          renderParentCard(header, normNum, nextOpen, subCards.length);
        }
      }
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  window.RM_UNIVERSAL_CARD_ENGINE = {
    renderParentCard: renderParentCard,
    renderSubCard: renderSubCard,
    sweepCatalog: sweepCatalog,
    openOneTapSubServiceViewport: openOneTapSubServiceViewport
  };
})();
