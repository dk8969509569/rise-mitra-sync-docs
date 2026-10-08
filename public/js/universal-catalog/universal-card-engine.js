/**
 * RISE MITRA — UNIVERSAL CATALOG CARD ENGINE (UI RENDERER)
 * MODULE        : Centralized Play Store Grid Renderer for All 50 Categories & Sub-Cards
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/universal-catalog/universal-card-engine.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  // 1. ENSURE METADATA REGISTRY DEPENDENCY
  (function ensureRegistry() {
    if (!window.RM_CATALOG_REGISTRY && !document.querySelector('script[src*="catalog-metadata-registry.js"]')) {
      var sc = document.createElement('script');
      sc.src = 'js/universal-catalog/catalog-metadata-registry.js';
      sc.async = false;
      document.head.appendChild(sc);
    }
  })();

  // 2. RENDER MASTER PLAY STORE PARENT CARD (MACRO LEVEL - ZERO DUPLICATION)
  function renderParentCard(headerEl, catId, isOpen) {
    if (!headerEl || !window.RM_CATALOG_REGISTRY) return;
    var data = window.RM_CATALOG_REGISTRY.getCategoryData(catId);
    if (!data) return;

    var container = headerEl.querySelector('#rm-universal-parent-' + catId);
    if (!container) {
      // Hide legacy messy markup without deleting event listeners
      Array.from(headerEl.children).forEach(function (child) {
        if (!child.id || (child.id.indexOf('authoritative-badge') === -1 && child.id.indexOf('rm-universal-parent') === -1)) {
          child.style.display = 'none';
        }
      });

      container = document.createElement('div');
      container.id = 'rm-universal-parent-' + catId;
      container.style.cssText = [
        'width: 100% !important',
        'display: flex !important',
        'flex-direction: column !important',
        'gap: 10px !important',
        'padding: 14px 14px 12px 14px !important',
        'box-sizing: border-box !important'
      ].join(';');

      headerEl.appendChild(container);
    }

    var pillarsHtml = (data.macroPillars || []).map(function (p) {
      return '<span style="font-size:12px;font-weight:600;padding:4px 10px;background:' + p.bg + ';color:' + p.color + ';border:1.2px solid #334155;border-radius:7px;">' + p.text + '</span>';
    }).join(' ');

    container.innerHTML = [
      '<!-- Row 1: App Identity -->',
      '<div style="display: flex; align-items: center; gap: 12px; width: 100%;">',
      '  <div style="font-size: 22px; font-weight: 900; color: #38bdf8; font-family: ui-monospace, monospace; line-height: 1; flex-shrink: 0; padding-right: 2px;">' + data.number + '</div>',
      '  <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #1e293b, #0f172a); border: 1.5px solid rgba(56, 189, 248, 0.4); box-shadow: 0 4px 10px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">',
      '    <span style="font-size: 24px; line-height: 1;">' + data.icon + '</span>',
      '  </div>',
      '  <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">',
      '    <div style="font-size: 18px; font-weight: 800; color: #ffffff; letter-spacing: -0.3px; line-height: 1.25; white-space: normal; word-break: break-word;">' + data.title + '</div>',
      '    <div style="font-size: 13px; font-weight: 600; color: #34d399; line-height: 1.3; margin-top: 2px;">' + data.subtitle + '</div>',
      '  </div>',
      '</div>',
      '<!-- Row 2: Credibility Badges -->',
      '<div style="display: flex; align-items: center; gap: 8px; width: 100%; margin-top: 1px;">',
      '  <span style="font-size: 12px; font-weight: 800; color: #facc15; background: rgba(250, 204, 21, 0.12); border: 1px solid rgba(250, 204, 21, 0.3); padding: 2px 7px; border-radius: 5px; display: inline-flex; align-items: center; gap: 3px;">' + data.rating + '</span>',
      '  <span style="font-size: 12px; font-weight: 700; color: #38bdf8; background: rgba(56, 189, 248, 0.14); border: 1px solid rgba(56, 189, 248, 0.35); padding: 2px 8px; border-radius: 5px; display: inline-flex; align-items: center; gap: 3px;">✓ ' + data.trustBadge + '</span>',
      '  <span style="font-size: 12px; font-weight: 700; color: #e2e8f0; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); padding: 2px 8px; border-radius: 5px;">' + data.supportBadge + '</span>',
      '</div>',
      '<!-- Row 3: Macro Value Pillars -->',
      '<div style="display: flex; flex-wrap: wrap; gap: 6px; width: 100%; margin-top: 2px;">' + pillarsHtml + '</div>',
      '<!-- Row 4: Action Button -->',
      '<div style="display: flex; justify-content: flex-end; align-items: center; width: 100%; margin-top: 4px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.08);">',
      '  <div style="font-size: 13px; font-weight: 800; color: #10b981; background: rgba(16, 185, 129, 0.15); border: 1.5px solid rgba(16, 185, 129, 0.5); padding: 5px 14px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">',
      '    <span>सेवाएं ' + (isOpen ? 'छुपाएं' : 'देखें') + '</span>',
      '    <span style="font-size: 11px;">' + (isOpen ? '▲' : '▼') + '</span>',
      '  </div>',
      '</div>'
    ].join('');
  }

  // 3. RENDER SUB-CARD PLAY STORE CONTENT & HARD-COLLAPSE VOID
  function renderSubCard(subCardEl, catId, subId) {
    if (!subCardEl || !window.RM_CATALOG_REGISTRY) return;
    var info = window.RM_CATALOG_REGISTRY.getSubcategoryData(catId, subId);
    if (!info) return;

    // Hard-collapse artificial empty gaps
    subCardEl.style.setProperty('height', 'auto', 'important');
    subCardEl.style.setProperty('min-height', 'auto', 'important');
    subCardEl.style.setProperty('display', 'flex', 'important');
    subCardEl.style.setProperty('flex-direction', 'column', 'important');
    subCardEl.style.setProperty('justify-content', 'flex-start', 'important');
    subCardEl.style.setProperty('gap', '10px', 'important');

    var old = subCardEl.querySelector('#rm-universal-sub-' + subId);
    if (old) old.remove();

    var enrichDiv = document.createElement('div');
    enrichDiv.id = 'rm-universal-sub-' + subId;
    enrichDiv.style.cssText = [
      'width: 100% !important',
      'display: flex !important',
      'flex-direction: column !important',
      'gap: 8px !important',
      'padding: 10px 12px !important',
      'background: rgba(15, 23, 42, 0.65) !important',
      'border: 1px solid rgba(56, 189, 248, 0.2) !important',
      'border-radius: 10px !important',
      'box-sizing: border-box !important',
      'text-align: left !important'
    ].join(';');

    var tagsHtml = (info.tags || []).map(function (t) {
      return '<span style="font-size:11.5px;font-weight:600;padding:3px 8px;background:' + t.bg + ';color:' + t.c + ';border:1px solid ' + t.c + '44;border-radius:6px;white-space:nowrap;">' + t.text + '</span>';
    }).join(' ');

    enrichDiv.innerHTML = [
      '<div style="font-size:12px;color:#94a3b8;display:flex;align-items:center;gap:6px;font-weight:600;">',
      '  <span style="color:#facc15;font-weight:800;">' + info.rating + '</span> • <span>' + info.metaBadge1 + '</span> • <span style="color:#34d399;font-weight:700;">' + info.metaBadge2 + '</span>',
      '</div>',
      '<div style="display:flex;flex-wrap:wrap;gap:5px;">' + tagsHtml + '</div>',
      '<div style="font-size:12px;color:#cbd5e1;line-height:1.4;opacity:0.95;">' + info.description + '</div>'
    ].join('');

    // Remove legacy spacing elements
    Array.from(subCardEl.children).forEach(function (ch) {
      if (ch.tagName === 'DIV' && !ch.id && !ch.textContent.trim() && ch !== enrichDiv) {
        ch.style.display = 'none';
      }
    });

    // Locate bottom buttons
    var bottomButtons = null;
    var children = subCardEl.children;
    for (var i = children.length - 1; i >= 0; i--) {
      var cText = children[i].textContent || '';
      if (cText.indexOf('पिन') !== -1 || cText.indexOf('वीडियो') !== -1 || cText.indexOf('खोलें') !== -1 || cText.indexOf('उपलब्ध') !== -1) {
        bottomButtons = children[i];
        break;
      }
    }

    if (bottomButtons && bottomButtons.parentElement === subCardEl) {
      subCardEl.insertBefore(enrichDiv, bottomButtons);
    } else {
      subCardEl.appendChild(enrichDiv);
    }
  }

  // Authoritative Universal Card Engine Export
  window.RM_UNIVERSAL_CARD_ENGINE = {
    renderParentCard: renderParentCard,
    renderSubCard: renderSubCard
  };
})();
