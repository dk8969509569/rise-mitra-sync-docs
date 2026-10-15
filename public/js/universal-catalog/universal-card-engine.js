/**
 * RISE MITRA — UNIVERSAL CATALOG CARD ENGINE (UI RENDERER)
 * MODULE        : Pure Modular Google Play Store App-Card Renderer (Decoupled SSOT)
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/universal-catalog/universal-card-engine.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var isSweeping = false;
  var lastParentTapTs = 0;
  var lastSubTapTs = 0;

  // Helper: Resolve Sub-Container across all ID conventions (sub-c1, sub-c01, sub-g34, sub-1, etc.)
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

  // Helper: Open Fullscreen Micro-App Viewport on 1-Tap for Sub-Card or Service Chip
  function openOneTapSubServiceViewport(info, cleanSub, selectedChipText, isGame) {
    if (cleanSub === '16-2' && typeof window.openFullscreenModule === 'function') {
      window.openFullscreenModule('16-2');
      return;
    }
    if (cleanSub === '16-3' && typeof window.openFullscreenModule === 'function') {
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

  // Auto-load decoupled Canonical 150 Sub-Category Matrix & Sub-Card Renderer Modules
  (function ensureCanonicalMatrixLoaded() {
    var head = document.head || document.documentElement;
    if (!window.RM_CANONICAL_SUB_MATRIX && !document.getElementById('rm-canonical-sub-matrix-script')) {
      var s1 = document.createElement('script');
      s1.id = 'rm-canonical-sub-matrix-script';
      s1.src = '/js/universal-catalog/canonical-sub-matrix.js?v=20261015_v18';
      s1.async = false;
      s1.onload = function () { sweepCatalog(); };
      head.appendChild(s1);
    }
    if (!window.RM_SUB_CARD_RENDERER && !document.getElementById('rm-sub-card-renderer-script')) {
      var s2 = document.createElement('script');
      s2.id = 'rm-sub-card-renderer-script';
      s2.src = '/js/universal-catalog/sub-card-renderer.js?v=20261015_v18';
      s2.async = false;
      s2.onload = function () { sweepCatalog(); };
      head.appendChild(s2);
    }
  })();

  // Helper: Access Decoupled Canonical 150 Sub-Category Matrix
  function getCanonicalMatrix() {
    return window.RM_CANONICAL_SUB_MATRIX || {};
  }

  // Helper: Normalize Category ID so "01" and "1" NEVER create two duplicate cards side-by-side
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

  // Helper: Check if a subcategory data object is a generic placeholder ("सेवा 01-1", "देसी खेल ...")
  function isGenericSubData(d) {
    if (window.RM_CARD_DATA_RESOLVER && typeof window.RM_CARD_DATA_RESOLVER.isGenericSubData === 'function') {
      return window.RM_CARD_DATA_RESOLVER.isGenericSubData(d);
    }
    return !d || !d.title || String(d.title).trim().indexOf('सेवा ') === 0;
  }

  // Helper: Fetch Category Data safely across both "01" and "1" registry keys (prefers rich unpadded entry)
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

  // Helper: Fetch Subcategory Data safely across both "01-1" and "1-1" registry keys (100% ZEL Signature Preserved)
  function fetchSubcategoryRegistryData(ids, cleanSub) {
    if (window.RM_CARD_DATA_RESOLVER && typeof window.RM_CARD_DATA_RESOLVER.fetchSubcategoryRegistryData === 'function') {
      return window.RM_CARD_DATA_RESOLVER.fetchSubcategoryRegistryData(ids, cleanSub);
    }
    var matrix = getCanonicalMatrix();
    var parts = String(cleanSub || '').split('-');
    var paddedSub = ids.paddedId + '-' + (parts[1] || '1');
    return matrix[paddedSub] || null;
  }

  // 1. RENDER UNIVERSAL PARENT CARD (TOP-LEFT: NUMBER ON TOP, LOGO BELOW | RIGHT: PLAY STORE TITLE)
  function renderParentCard(headerEl, catId, isOpen, subCount) {
    if (!headerEl) return;
    var ids = getNormalizedIds(catId);
    var numId = ids.normId;
    var displayNum = ids.displayNum;
    var canonicalParentId = 'rm-universal-parent-' + numId;

    // Force column layout on headerEl so duplicate flex-row side-by-side rendering is impossible
    headerEl.style.setProperty('display', 'flex', 'important');
    headerEl.style.setProperty('flex-direction', 'column', 'important');
    headerEl.style.setProperty('align-items', 'stretch', 'important');

    // Remove any legacy duplicate parent card (such as #rm-universal-parent-01 vs #rm-universal-parent-1)
    Array.from(headerEl.querySelectorAll('[id^="rm-universal-parent-"]')).forEach(function (node) {
      if (node.id !== canonicalParentId) {
        node.remove();
      }
    });

    var regData = fetchCategoryRegistryData(ids);

    // Standard Google Play Store Authoritative Names (Folder A SSOT — 100% Protected Against "undefined")
    var title = (regData && (regData.title || regData.name)) || ('Category ' + displayNum);
    var subtitle = (regData && (regData.subtitle || regData.hindiTitle || regData.hindi || regData.desc)) || 'दैनिक जनसेवाएं व आधिकारिक सुविधा केंद्र';
    var icon = (regData && regData.icon) || '📦';
    var rating = (regData && regData.rating) || '★ 4.9 (10k+ नागरिक)';
    var trustBadge = (regData && (regData.trustBadge || regData.badge)) || 'Rise Verified Network';
    var supportBadge = (regData && regData.supportBadge) || '24x7 सहायता केंद्र';

    var targetState = numId + ':' + String(Boolean(isOpen)) + ':' + String(subCount || 0) + ':' + title + ':' + subtitle;
    var existingContainer = headerEl.querySelector('#' + canonicalParentId);
    if (existingContainer && headerEl.getAttribute('data-rm-parent-rendered') === targetState) {
      return;
    }

    // Universal Future-Proof Domain Value Pillars
    var universalPillars = [
      { icon: '🛡️', text: '100% आधार व पुलिस सत्यापित सेवा प्रदाता नेटवर्क', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.12)' },
      { icon: '⚡', text: 'पारदर्शी तय रेट कार्ड, डिजिटल बिलिंग व शून्य छुपा शुल्क', color: '#34d399', bg: 'rgba(52, 211, 153, 0.12)' },
      { icon: '🔒', text: 'Rise Mitra कार्य संतुष्टि गारंटी व प्रत्यक्ष सहायता', color: '#facc15', bg: 'rgba(250, 204, 21, 0.12)' }
    ];

    // Wipe and hide all legacy text nodes and outside stray duplicate numbers (kills 009. 09. ▼)
    Array.from(headerEl.childNodes).forEach(function (node) {
      if (node.nodeType === 1 && node.id === canonicalParentId) {
        return;
      }
      if (node.nodeType === 1) {
        node.style.setProperty('display', 'none', 'important');
      } else if (node.nodeType === 3) {
        node.textContent = '';
      }
    });

    var container = existingContainer;
    if (!container) {
      container = document.createElement('div');
      container.id = canonicalParentId;
      container.style.cssText = [
        'width: 100% !important',
        'display: flex !important',
        'flex-direction: column !important',
        'gap: 12px !important',
        'padding: 16px 14px 14px 14px !important',
        'box-sizing: border-box !important',
        'text-align: left !important',
        'cursor: pointer !important',
        'touch-action: manipulation !important'
      ].join(';');

      headerEl.appendChild(container);
    }

    var pillarsHtml = universalPillars.map(function (p) {
      return '<div style="font-size:13px;font-weight:700;padding:8px 12px;background:' + p.bg + ';color:' + p.color + ';border:1px solid ' + p.color + '33;border-radius:9px;display:flex;align-items:center;gap:8px;"><span style="font-size:15px;">' + p.icon + '</span><span>' + p.text + '</span></div>';
    }).join('');

    var countText = (subCount && subCount > 0) ? (subCount + ' सेवाएं ') : 'सभी सेवाएं ';

    container.innerHTML = [
      '<!-- Top Row: Squircle Badge [Icon + Order Inside] + Right Column [Play Store Bold Title & Subtitle] -->',
      '<div style="display: flex; align-items: flex-start; gap: 14px; width: 100%;">',
      '  <!-- Squircle Badge: Order & Icon strictly INSIDE, zero numbers outside -->',
      '  <div style="width: 58px; height: 58px; min-width: 58px; border-radius: 16px; background: linear-gradient(135deg, #1e293b, #0f172a); border: 1.5px solid rgba(56, 189, 248, 0.4); display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.45); flex-shrink: 0;">',
      '    <span style="font-size: 24px; line-height: 1;">' + icon + '</span>',
      '    <span style="font-size: 11px; font-weight: 800; color: #38bdf8; font-family: ui-monospace, monospace; margin-top: 3px; line-height: 1;">' + displayNum + '</span>',
      '  </div>',
      '  <!-- Right Column: Standard Play Store Bold Title & Clean Subtitle -->',
      '  <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">',
      '    <div style="font-size: 21px; font-weight: 900; color: #ffffff; letter-spacing: -0.3px; line-height: 1.25; margin-bottom: 4px; word-break: break-word;">' + title + '</div>',
      '    <div style="font-size: 13.5px; font-weight: 600; color: #34d399; line-height: 1.35; margin-bottom: 6px; word-break: break-word;">' + subtitle + '</div>',
      '    <!-- Badges Row -->',
      '    <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">',
      '      <span style="font-size: 11.5px; font-weight: 800; color: #facc15; background: rgba(250, 204, 21, 0.12); border: 1px solid rgba(250, 204, 21, 0.3); padding: 2px 7px; border-radius: 5px;">' + rating + '</span>',
      '      <span style="font-size: 11.5px; font-weight: 700; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); padding: 2px 7px; border-radius: 5px;">✓ ' + trustBadge + '</span>',
      '      <span style="font-size: 11.5px; font-weight: 700; color: #94a3b8; background: rgba(255, 255, 255, 0.06); padding: 2px 7px; border-radius: 5px;">' + supportBadge + '</span>',
      '    </div>',
      '  </div>',
      '</div>',
      '<!-- Row 2: Universal Domain Value Pillars -->',
      '<div style="display: flex; flex-direction: column; gap: 7px; width: 100%; margin-top: 4px;">' + pillarsHtml + '</div>',
      '<!-- Row 3: Dropdown Toggle Button -->',
      '<div style="display: flex; justify-content: flex-end; align-items: center; width: 100%; margin-top: 2px;">',
      '  <div class="rm-parent-toggle-pill" style="font-size: 13px; font-weight: 800; color: ' + (isOpen ? '#f87171' : '#34d399') + '; background: ' + (isOpen ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)') + '; border: 1px solid ' + (isOpen ? '#ef4444' : '#10b981') + '; padding: 6px 14px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; touch-action: manipulation;">',
      '    <span>' + (isOpen ? 'समेटें ▲' : 'और देखें ▼') + '</span>',
      '  </div>',
      '</div>'
    ].join('');

    headerEl.setAttribute('data-rm-parent-rendered', targetState);
  }

  // Helper: Trigger original hidden button in legacy DOM (delegates to sub-card-renderer.js)
  function triggerLegacySubAction(subCardEl, keyword) {
    if (window.RM_SUB_CARD_RENDERER && typeof window.RM_SUB_CARD_RENDERER.triggerLegacySubAction === 'function') {
      return window.RM_SUB_CARD_RENDERER.triggerLegacySubAction(subCardEl, keyword);
    }
    return false;
  }

  // 2. RENDER SUB-CARD (DELEGATED TO MODULAR public/js/universal-catalog/sub-card-renderer.js — 100% ZEL)
  function renderSubCard(subCardEl, catId, subId) {
    if (window.RM_SUB_CARD_RENDERER && typeof window.RM_SUB_CARD_RENDERER.renderSubCard === 'function') {
      window.RM_SUB_CARD_RENDERER.renderSubCard(subCardEl, catId, subId);
    }
  }

  // 3. FULL AUTONOMOUS SCANNER ACROSS ALL 50 CATEGORIES (CHECKS BOTH sub-c AND sub-g CONTAINERS)
  function sweepCatalog() {
    if (isSweeping) return;
    isSweeping = true;
    try {
      var modal = document.getElementById('categoryModel') || document.getElementById('categoryModal') || document.body;
      var cats = modal.querySelectorAll('[data-cat-id]');
      cats.forEach(function (catEl) {
        var rawId = catEl.getAttribute('data-cat-id');
        if (!rawId) return;
        var ids = getNormalizedIds(rawId);

        var header = catEl.querySelector(':scope > div:first-child');

        // Critical ZEL Fix: Detects both sub-c (Services) and sub-g (Games) across "1" and "01" formats
        var sub = document.getElementById('sub-c' + ids.normId) ||
                  document.getElementById('sub-c' + ids.paddedId) ||
                  document.getElementById('sub-g' + ids.normId) ||
                  document.getElementById('sub-g' + ids.paddedId) ||
                  document.getElementById('sub-' + rawId) ||
                  document.getElementById('sub-' + ids.normId) ||
                  document.getElementById('sub-' + ids.paddedId);

        var isOpen = Boolean(
          sub &&
          !sub.classList.contains('hidden') &&
          sub.getAttribute('data-rm-collapsed') !== 'true' &&
          window.getComputedStyle(sub).display !== 'none'
        );
        var subCards = sub ? sub.querySelectorAll(':scope > div') : [];

        // Keep sub-container display and hidden class strictly synchronized
        if (sub) {
          if (isOpen) {
            sub.classList.remove('hidden');
            sub.style.setProperty('display', 'block', 'important');
          } else {
            sub.classList.add('hidden');
            sub.style.setProperty('display', 'none', 'important');
          }
        }

        if (header) {
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

  // Auto Boot Engine: Polled & 1-Tap Click Delegated (Zero Mutation Observer Loop)
  function boot() {
    sweepCatalog();
    setTimeout(sweepCatalog, 100);
    setTimeout(sweepCatalog, 300);
    setTimeout(sweepCatalog, 800);
    setTimeout(sweepCatalog, 1500);

    document.addEventListener('click', function (e) {
      if (e.target.closest('.sivme-notch-pill')) return;

      // Deterministic 1-Tap Parent Category Accordion Toggle
      var catEl = e.target.closest('[data-cat-id]');
      if (catEl) {
        var rawId = catEl.getAttribute('data-cat-id') || '';
        var cleanNum = rawId.replace(/[^0-9]/g, '');
        var intNum = parseInt(cleanNum, 10);
        var normNum = isNaN(intNum) ? cleanNum : String(intNum);
        var header = catEl.querySelector(':scope > div:first-child');
        var sub = resolveSubContainer(catEl, rawId, cleanNum);

        if (header && sub && header.contains(e.target) && !sub.contains(e.target)) {
          var now = Date.now();
          if (now - lastParentTapTs < 280) {
            e.stopImmediatePropagation();
            e.preventDefault();
            return;
          }
          lastParentTapTs = now;

          e.stopImmediatePropagation();
          e.preventDefault();

          var currentlyOpen = !sub.classList.contains('hidden') && window.getComputedStyle(sub).display !== 'none';
          var nextOpen = !currentlyOpen;
          var subCards = sub.querySelectorAll(':scope > div');

          if (nextOpen) {
            sub.classList.remove('hidden');
            sub.style.setProperty('display', 'block', 'important');
            subCards.forEach(function (sc, idx) {
              renderSubCard(sc, normNum, normNum + '-' + (idx + 1));
            });
          } else {
            sub.classList.add('hidden');
            sub.style.setProperty('display', 'none', 'important');
          }

          renderParentCard(header, normNum, nextOpen, subCards.length);
          return;
        }
      }

      if (e.target.closest('[data-cat-id], #categoryModel, #categoryModal, button')) {
        setTimeout(sweepCatalog, 40);
        setTimeout(sweepCatalog, 250);
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
    sweepCatalog: sweepCatalog
  };
})();
