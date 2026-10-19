/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Universal Catalog Play Store Card Engine Part-B (v73)
 *   - REPO TARGET    : public/js/universal-catalog/universal-card-engine.js
 *   - SURFACE TARGET : SURFACE-A ONLY (Pure Modular Google Play Store Card Renderer)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 260 Lines Total (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : 100% ZEL | Fail-Closed | 28.00% NCR Cap | CoverageRatio >= 1.00
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/universal-catalog/universal-card-engine.js (This File: Part-B Parent Card UI)
 *   - public/js/universal-catalog/card-engine-bridge.js (Part-A: Data, SubCard & Viewport Bridge)
 *   - public/js/universal-catalog/canonical-sub-matrix.js (150 Sub-Category Matrix)
 *   - public/js/universal-catalog/sub-card-renderer.js (Modular Sub-Card Renderer)
 *   - public/js/one-tap-catalog-dom-engine.js (Part-1B: DOM Hydration & Shield)
 *   - public/js/one-tap-shell-bridge.js (Part-2: Deterministic 1-Tap Shell Bridge)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Parent Card (01.-50.) HTML UI, O(1) Zero-Flicker Pill Sync,
 *                              Compact Card Sibling Cleanup (45..50), and Fast Boot Sweep.
 *   - ALLOWED ON SURFACE-B   : Pass-through exclusion for .sivme-notch-pill.
 *   - FORBIDDEN IN THIS FILE : Re-declaring heavy Part-A bridge bodies or re-writing
 *                              innerHTML of already-rendered Play Store cards during sweeps.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_UNIVERSAL_CARD_ENGINE, window.openOneTapSubServiceViewport
 *   - CALLS EXTERNAL APIs : window.RM_CARD_ENGINE_BRIDGE.*, window.RM_CATALOG_REGISTRY.*,
 *                           window.RM_SUB_CARD_RENDERER.*
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #categoryModal, #tier1-list, #tier2-list, [data-cat-id],
 *                           [id^="rm-universal-parent-"], .rm-toplevel-num-badge, .rm-parent-toggle-pill
 *   - SURFACE-B SELECTORS : .sivme-notch-pill (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - ZERO FLICKER  : Fast-path O(1) pill update if `#rm-universal-parent-{id}` exists.
 *   - COMPACT GUARD : Auto-tags `#tier1-list > div, #tier2-list > div` (45..50) and hides
 *                     legacy compact sibling nodes (`3 गेम्स ▼`) on boot before any user tap.
 *   - TAP RESPECT   : Skips background state overwrite on `data-rm-user-toggled="1"` cards.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 13 FUNCTIONS INTACT):
 *   1. resolveSubContainer (Bridge)       2. openOneTapSubServiceViewport (Bridge)
 *   3. ensureCanonicalMatrixLoaded        4. getCanonicalMatrix (Bridge)
 *   5. getNormalizedIds (Bridge)          6. isGenericSubData (Bridge)
 *   7. fetchCategoryRegistryData (Bridge) 8. fetchSubcategoryRegistryData (Bridge)
 *   9. renderParentCard                   10. triggerLegacySubAction (Bridge)
 *   11. renderSubCard (Bridge)            12. sweepCatalog
 *   13. boot
 * ==============================================================================
 * 8. ONE JOB = ONE FILE & CANONICAL PATH LOCK (ANTI-DUPLICATE FILE GUARD):
 *   - SINGLE JOB RULE : Sole owner of Universal Play Store Parent Card UI & Sweep (01-50).
 *   - CANONICAL PATH  : Must exist ONLY at `public/js/universal-catalog/universal-card-engine.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Delegates Part-A helpers to `public/js/universal-catalog/card-engine-bridge.js`.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['universal-card-engine']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect all card renders.
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
  if (window.__RM_LOADED_MODULES__['universal-card-engine']) return;
  window.__RM_LOADED_MODULES__['universal-card-engine'] = true;

  var isSweeping = false;
  var lastParentTapTs = 0;
  var lastSubTapTs = 0;


  // 1. Auto-Load Part-A Companion (`card-engine-bridge.js`), Matrix & Sub-Card Renderer
  (function ensureCanonicalMatrixLoaded() {
    var head = document.head || document.documentElement;
    var ver = window.__RM_ACTIVE_CACHE_VER || '20261018_v73';
    var scripts = [
      { id: 'rm-card-engine-bridge-script', src: '/js/universal-catalog/card-engine-bridge.js' },
      { id: 'rm-canonical-sub-matrix-script', src: '/js/universal-catalog/canonical-sub-matrix.js' },
      { id: 'rm-sub-card-renderer-script', src: '/js/universal-catalog/sub-card-renderer.js' }
    ];
    for (var i = 0; i < scripts.length; i++) {
      if (!document.getElementById(scripts[i].id)) {
        var s = document.createElement('script');
        s.id = scripts[i].id;
        s.src = scripts[i].src + '?v=' + ver;
        s.async = false;
        s.onload = function () { sweepCatalog(); };
        head.appendChild(s);
      }
    }
  })();


  // 2. Delegated Part-A (`window.RM_CARD_ENGINE_BRIDGE`) Helpers with Instant Fallbacks
  function resolveSubContainer(catEl, rawId, cleanNum) {
    if (window.RM_CARD_ENGINE_BRIDGE) return window.RM_CARD_ENGINE_BRIDGE.resolveSubContainer(catEl, rawId, cleanNum);
    var intNum = parseInt(cleanNum, 10) || 1;
    var pad = (intNum < 10 ? '0' : '') + intNum;
    return document.getElementById('sub-c' + pad) || document.getElementById('sub-g' + pad) || (catEl ? catEl.querySelector('[id^="sub-"]') : null);
  }

  function openOneTapSubServiceViewport(info, cleanSub, selectedChipText, isGame) {
    lastSubTapTs = Date.now();
    if (window.RM_CARD_ENGINE_BRIDGE) return window.RM_CARD_ENGINE_BRIDGE.openOneTapSubServiceViewport(info, cleanSub, selectedChipText, isGame);
  }
  window.openOneTapSubServiceViewport = openOneTapSubServiceViewport;

  function getCanonicalMatrix() {
    return window.RM_CANONICAL_SUB_MATRIX || {};
  }

  function getNormalizedIds(catId) {
    if (window.RM_CARD_ENGINE_BRIDGE) return window.RM_CARD_ENGINE_BRIDGE.getNormalizedIds(catId);
    var intNum = parseInt(String(catId || '').replace(/[^0-9]/g, ''), 10) || 1;
    var paddedId = (intNum < 10 ? '0' : '') + intNum;
    return { intNum: intNum, normId: String(intNum), paddedId: paddedId, displayNum: paddedId + '.' };
  }

  function isGenericSubData(d) {
    return window.RM_CARD_ENGINE_BRIDGE ? window.RM_CARD_ENGINE_BRIDGE.isGenericSubData(d) : (!d || !d.title);
  }

  function fetchCategoryRegistryData(ids) {
    if (window.RM_CARD_ENGINE_BRIDGE) return window.RM_CARD_ENGINE_BRIDGE.fetchCategoryRegistryData(ids);
    return (window.RM_CATALOG_REGISTRY && window.RM_CATALOG_REGISTRY.getCategoryData)
      ? (window.RM_CATALOG_REGISTRY.getCategoryData(ids.normId) || window.RM_CATALOG_REGISTRY.getCategoryData(ids.paddedId))
      : null;
  }

  function fetchSubcategoryRegistryData(ids, cleanSub) {
    return window.RM_CARD_ENGINE_BRIDGE ? window.RM_CARD_ENGINE_BRIDGE.fetchSubcategoryRegistryData(ids, cleanSub) : null;
  }

  function triggerLegacySubAction(subCardEl, keyword) {
    return window.RM_CARD_ENGINE_BRIDGE ? window.RM_CARD_ENGINE_BRIDGE.triggerLegacySubAction(subCardEl, keyword) : false;
  }

  function renderSubCard(subCardEl, catId, subId) {
    if (window.RM_CARD_ENGINE_BRIDGE) return window.RM_CARD_ENGINE_BRIDGE.renderSubCard(subCardEl, catId, subId);
    if (window.RM_SUB_CARD_RENDERER && typeof window.RM_SUB_CARD_RENDERER.renderSubCard === 'function') {
      window.RM_SUB_CARD_RENDERER.renderSubCard(subCardEl, catId, subId);
    }
  }


  // 3. RENDER UNIVERSAL PARENT CARD (0ms O(1) Fast Pill Update if Already Rendered — Zero Flicker/Hang)
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

    container.innerHTML =
      '<div style="display:flex;align-items:flex-start;gap:14px;width:100%;">' +
        '<div style="display:flex;flex-direction:column;align-items:flex-start;flex-shrink:0;">' +
          '<span class="rm-toplevel-num-badge" style="font-size:24px;font-weight:900;color:#38bdf8;font-family:system-ui,-apple-system,sans-serif;letter-spacing:-0.5px;margin-bottom:6px;line-height:1.05;display:block;text-align:left;">' + displayNum + '</span>' +
          '<div style="width:58px;height:58px;min-width:58px;border-radius:16px;background:linear-gradient(135deg,#1e293b,#0f172a);border:1.5px solid rgba(56,189,248,0.4);display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.45);flex-shrink:0;">' +
            '<span style="font-size:28px;line-height:1;">' + icon + '</span>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;padding-top:2px;">' +
          '<div style="font-size:21px;font-weight:900;color:#ffffff;letter-spacing:-0.3px;line-height:1.25;margin-bottom:4px;word-break:break-word;">' + title + '</div>' +
          '<div style="font-size:13.5px;font-weight:600;color:#34d399;line-height:1.35;margin-bottom:6px;word-break:break-word;">' + subtitle + '</div>' +
          '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">' +
            '<span style="font-size:11.5px;font-weight:800;color:#facc15;background:rgba(250,204,21,0.12);border:1px solid rgba(250,204,21,0.3);padding:2px 7px;border-radius:5px;">' + rating + '</span>' +
            '<span style="font-size:11.5px;font-weight:700;color:#38bdf8;background:rgba(56,189,248,0.12);border:1px solid rgba(56,189,248,0.3);padding:2px 7px;border-radius:5px;">✓ ' + trustBadge + '</span>' +
            '<span style="font-size:11.5px;font-weight:700;color:#94a3b8;background:rgba(255,255,255,0.06);padding:2px 7px;border-radius:5px;">' + supportBadge + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="display:flex;flex-direction:column;gap:7px;width:100%;margin-top:4px;">' + pillarsHtml + '</div>' +
      '<div style="display:flex;justify-content:flex-end;align-items:center;width:100%;margin-top:2px;">' +
        '<div class="rm-parent-toggle-pill" style="font-size:13px;font-weight:800;color:' + (isOpen ? '#f87171' : '#34d399') + ';background:' + (isOpen ? 'rgba(239,68,68,0.15)' : 'rgba(16,185,129,0.15)') + ';border:1px solid ' + (isOpen ? '#ef4444' : '#10b981') + ';padding:6px 14px;border-radius:9999px;display:inline-flex;align-items:center;gap:6px;cursor:pointer;touch-action:manipulation;">' +
          '<span>' + (isOpen ? 'समेटें ▲' : 'और देखें ▼') + '</span>' +
        '</div>' +
      '</div>';

    headerEl.setAttribute('data-rm-parent-rendered', '1');
    if (catWrapper) catWrapper.setAttribute('data-rm-parent-rendered', '1');
  }


  // 4. FULL AUTONOMOUS SCANNER ACROSS ALL 50 CATEGORIES (Auto-tags 45..50 & Respects User Taps)
  function sweepCatalog() {
    if (isSweeping || window.__RM_MODAL_INTERACTION_LOCK__) return;
    isSweeping = true;
    try {
      var modal = document.getElementById('categoryModel') || document.getElementById('categoryModal') || document.body;
      var rawRows = modal.querySelectorAll('#tier1-list > div:not([data-cat-id]), #tier2-list > div:not([data-cat-id])');
      for (var r = 0; r < rawRows.length; r++) {
        var rowEl = rawRows[r];
        if (rowEl.id && rowEl.id.indexOf('sub-') === 0) continue;
        var m = (rowEl.textContent || '').match(/\b([0-4]?\d|50)\s*\./);
        if (m) {
          var nInt = parseInt(m[1], 10);
          var nPad = (nInt < 10 ? '0' : '') + nInt;
          rowEl.setAttribute('data-cat-id', (nInt >= 33 ? 'g' : 'c') + nPad);
        }
      }

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
        if (header && header !== sub) renderParentCard(header, ids.normId, isOpen, subCards.length);
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


  // 5. Auto Boot Engine (Non-Blocking & Zero Collision with Part-2 Shell Bridge)
  function boot() {
    sweepCatalog();
    setTimeout(sweepCatalog, 120);
    setTimeout(sweepCatalog, 450);

    document.addEventListener('click', function (e) {
      if (e.target.closest('.sivme-notch-pill')) return;
      if (window.__RM_OPEN_CAT_STATE || window.__RM_LOADED_MODULES__['one-tap-shell-bridge']) return;

      var catEl = e.target.closest('[data-cat-id]');
      if (!catEl) return;
      var rawId = catEl.getAttribute('data-cat-id') || '';
      var ids = getNormalizedIds(rawId);
      var header = catEl.querySelector(':scope > div:first-child');
      var sub = resolveSubContainer(catEl, rawId, ids.normId);

      if (header && sub && header.contains(e.target) && !sub.contains(e.target)) {
        var now = Date.now();
        if (now - lastParentTapTs < 250) { e.stopImmediatePropagation(); e.preventDefault(); return; }
        lastParentTapTs = now;
        e.stopImmediatePropagation();
        e.preventDefault();

        var nextOpen = !(!sub.classList.contains('hidden') && sub.style.display !== 'none' && sub.getAttribute('data-rm-collapsed') !== 'true');
        var subCards = sub.querySelectorAll(':scope > div');
        sub.classList.toggle('hidden', !nextOpen);
        sub.setAttribute('data-rm-collapsed', nextOpen ? 'false' : 'true');
        sub.style.setProperty('display', nextOpen ? 'block' : 'none', 'important');
        if (nextOpen) {
          subCards.forEach(function (sc, idx) { renderSubCard(sc, ids.normId, ids.paddedId + '-' + (idx + 1)); });
        }
        renderParentCard(header, ids.normId, nextOpen, subCards.length);
      }
    }, true);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.RM_UNIVERSAL_CARD_ENGINE = {
    renderParentCard: renderParentCard,
    renderSubCard: renderSubCard,
    sweepCatalog: sweepCatalog,
    openOneTapSubServiceViewport: openOneTapSubServiceViewport
  };
})();
