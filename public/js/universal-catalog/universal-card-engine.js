/**
 * RISE MITRA — UNIVERSAL CATALOG CARD ENGINE (UI RENDERER)
 * MODULE        : High-Impact Play Store Card Grid & Zero-Void Architecture
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/universal-catalog/universal-card-engine.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  // 1. RENDER PLAY STORE PARENT CARD (LARGE FONTS & UNIFIED GRID)
  function renderParentCard(headerEl, catId, isOpen) {
    if (!headerEl || !window.RM_CATALOG_REGISTRY) return;
    var data = window.RM_CATALOG_REGISTRY.getCategoryData(catId);
    if (!data) return;

    var container = headerEl.querySelector('#rm-universal-parent-' + catId);
    if (!container) {
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
        'gap: 12px !important',
        'padding: 16px 14px 12px 14px !important',
        'box-sizing: border-box !important'
      ].join(';');

      headerEl.appendChild(container);
    }

    var pillarsHtml = (data.macroPillars || []).map(function (p) {
      return '<span style="font-size:13px;font-weight:700;padding:6px 12px;background:' + p.bg + ';color:' + p.color + ';border:1.2px solid ' + p.color + '44;border-radius:8px;">' + p.text + '</span>';
    }).join(' ');

    container.innerHTML = [
      '<!-- Row 1: App Identity (Large Typography, Zero Cut-off) -->',
      '<div style="display: flex; align-items: center; gap: 14px; width: 100%;">',
      '  <div style="font-size: 24px; font-weight: 900; color: #38bdf8; font-family: ui-monospace, monospace; line-height: 1; flex-shrink: 0; padding-right: 2px;">' + data.number + '</div>',
      '  <div style="width: 56px; height: 56px; border-radius: 14px; background: linear-gradient(135deg, #1e293b, #0f172a); border: 1.5px solid rgba(56, 189, 248, 0.45); box-shadow: 0 4px 12px rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">',
      '    <span style="font-size: 28px; line-height: 1;">' + data.icon + '</span>',
      '  </div>',
      '  <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">',
      '    <div style="font-size: 19px; font-weight: 800; color: #ffffff; letter-spacing: -0.3px; line-height: 1.25; white-space: normal; word-break: break-word;">' + data.title + '</div>',
      '    <div style="font-size: 14px; font-weight: 600; color: #34d399; line-height: 1.35; margin-top: 3px;">' + data.subtitle + '</div>',
      '  </div>',
      '</div>',
      '<!-- Row 2: Credibility Badges -->',
      '<div style="display: flex; align-items: center; gap: 8px; width: 100%; margin-top: 2px; flex-wrap: wrap;">',
      '  <span style="font-size: 13px; font-weight: 800; color: #facc15; background: rgba(250, 204, 21, 0.12); border: 1px solid rgba(250, 204, 21, 0.3); padding: 3px 8px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px;">' + data.rating + '</span>',
      '  <span style="font-size: 12.5px; font-weight: 700; color: #38bdf8; background: rgba(56, 189, 248, 0.14); border: 1px solid rgba(56, 189, 248, 0.35); padding: 3px 8px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px;">✓ ' + data.trustBadge + '</span>',
      '  <span style="font-size: 12.5px; font-weight: 700; color: #e2e8f0; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); padding: 3px 8px; border-radius: 6px;">' + data.supportBadge + '</span>',
      '</div>',
      '<!-- Row 3: Department Pillars -->',
      '<div style="display: flex; flex-direction: column; gap: 6px; width: 100%; margin-top: 4px;">' + pillarsHtml + '</div>',
      '<!-- Row 4: Action Button -->',
      '<div style="display: flex; justify-content: flex-end; align-items: center; width: 100%; margin-top: 4px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.08);">',
      '  <div style="font-size: 13.5px; font-weight: 800; color: #10b981; background: rgba(16, 185, 129, 0.15); border: 1.5px solid rgba(16, 185, 129, 0.5); padding: 6px 16px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">',
      '    <span>3 सेवाएं ' + (isOpen ? 'छुपाएं' : 'देखें') + '</span>',
      '    <span style="font-size: 11px;">' + (isOpen ? '▲' : '▼') + '</span>',
      '  </div>',
      '</div>'
    ].join('');
  }

  // 2. RENDER SUB-CARD (ZERO VOID: REPLACES LEGACY SPREAD WITH TIGHT PLAY STORE CARD)
  function renderSubCard(subCardEl, catId, subId) {
    if (!subCardEl || !window.RM_CATALOG_REGISTRY) return;
    var info = window.RM_CATALOG_REGISTRY.getSubcategoryData(catId, subId);
    if (!info) return;

    // Hard-collapse outer container
    subCardEl.style.setProperty('height', 'auto', 'important');
    subCardEl.style.setProperty('min-height', 'auto', 'important');
    subCardEl.style.setProperty('display', 'flex', 'important');
    subCardEl.style.setProperty('flex-direction', 'column', 'important');
    subCardEl.style.setProperty('justify-content', 'flex-start', 'important');
    subCardEl.style.setProperty('gap', '0px', 'important');
    subCardEl.style.setProperty('padding', '12px !important', 'important');

    // Hide all original children to eliminate the vertical spread/void
    Array.from(subCardEl.children).forEach(function (child) {
      if (child.id !== 'rm-playstore-sub-' + subId && !child.classList.contains('sivme-notch-pill')) {
        child.style.display = 'none';
      }
    });

    var container = subCardEl.querySelector('#rm-playstore-sub-' + subId);
    if (!container) {
      container = document.createElement('div');
      container.id = 'rm-playstore-sub-' + subId;
      container.style.cssText = [
        'width: 100% !important',
        'display: flex !important',
        'flex-direction: column !important',
        'gap: 10px !important',
        'background: rgba(15, 23, 42, 0.75) !important',
        'border: 1.5px solid rgba(56, 189, 248, 0.25) !important',
        'border-radius: 14px !important',
        'padding: 14px !important',
        'box-sizing: border-box !important',
        'text-align: left !important'
      ].join(';');

      subCardEl.appendChild(container);
    }

    var servicesHtml = (info.services || []).map(function (s) {
      return '<span style="font-size:13px;font-weight:600;padding:5px 10px;background:' + s.bg + ';color:' + s.c + ';border:1.2px solid ' + s.c + '44;border-radius:7px;display:inline-flex;align-items:center;">' + s.text + '</span>';
    }).join(' ');

    var highlightsHtml = (info.highlights || []).map(function (h) {
      return '<div style="font-size:12.5px;color:#cbd5e1;line-height:1.45;display:flex;align-items:flex-start;gap:6px;"><span style="color:#10b981;font-weight:900;">✓</span><span>' + h + '</span></div>';
    }).join('');

    container.innerHTML = [
      '<!-- Top Row: Icon + Title (Large & Readable) -->',
      '<div style="display: flex; align-items: center; gap: 12px; width: 100%;">',
      '  <div style="width: 50px; height: 50px; border-radius: 12px; background: linear-gradient(135deg, #1e293b, #0f172a); border: 1.5px solid rgba(56, 189, 248, 0.4); display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">',
      '    <span style="font-size: 26px; line-height: 1;">' + info.icon + '</span>',
      '  </div>',
      '  <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">',
      '    <div style="display: flex; align-items: center; gap: 6px;">',
      '      <span style="font-size: 11.5px; font-weight: 800; color: #38bdf8; background: rgba(56, 189, 248, 0.15); padding: 1px 6px; border-radius: 4px;">' + info.code + '</span>',
      '      <span style="font-size: 11.5px; font-weight: 700; color: #94a3b8;">' + info.categoryTag + '</span>',
      '    </div>',
      '    <div style="font-size: 18.5px; font-weight: 800; color: #ffffff; letter-spacing: -0.3px; line-height: 1.25; margin-top: 2px;">' + info.title + '</div>',
      '    <div style="font-size: 13.5px; font-weight: 600; color: #34d399; line-height: 1.35; margin-top: 2px;">' + info.hindiTitle + '</div>',
      '  </div>',
      '</div>',
      '<!-- Play Store Rating & Stats Strip -->',
      '<div style="display: flex; align-items: center; gap: 8px; width: 100%; margin-top: 1px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.08); flex-wrap: wrap;">',
      '  <span style="font-size: 12.5px; font-weight: 800; color: #facc15; background: rgba(250, 204, 21, 0.12); padding: 2px 7px; border-radius: 5px;">' + info.rating + '</span>',
      '  <span style="font-size: 12px; font-weight: 600; color: #94a3b8;">' + info.reviewCount + '</span>',
      '  <span style="font-size: 12px; font-weight: 700; color: #34d399; background: rgba(52, 211, 153, 0.12); padding: 2px 7px; border-radius: 5px;">' + info.metaBadge + '</span>',
      '</div>',
      '<!-- Services Chips Row -->',
      '<div style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;">' + info.servicesTitle + '</div>',
      '<div style="display: flex; flex-wrap: wrap; gap: 6px; width: 100%;">' + servicesHtml + '</div>',
      '<!-- Highlights Feature Box -->',
      '<div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 10px 12px; margin-top: 4px; display: flex; flex-direction: column; gap: 5px;">' + highlightsHtml + '</div>',
      '<!-- Play Store Action Bar -->',
      '<div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.08);">',
      '  <div style="font-size: 12px; color: #94a3b8; font-weight: 600;">Rise Mitra Verified</div>',
      '  <div style="font-size: 13.5px; font-weight: 800; color: #ffffff; background: #059669; border: 1.5px solid #10b981; padding: 6px 18px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 3px 8px rgba(0,0,0,0.4); cursor: pointer;" onclick="var btn=this.closest(\'.bg-gray-800, [data-cat-id]\')?.querySelector(\'button:has-text, .grid button\'); if(btn) btn.click();">',
      '    <span>खोलें व बुक करें</span>',
      '    <span style="font-size: 11px;">➔</span>',
      '  </div>',
      '</div>'
    ].join('');
  }

  window.RM_UNIVERSAL_CARD_ENGINE = {
    renderParentCard: renderParentCard,
    renderSubCard: renderSubCard
  };
})();
