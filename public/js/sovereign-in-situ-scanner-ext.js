/**
 * RISE MITRA — SOVEREIGN IN-SITU SCANNER EXTENSION (CHILD MODULE)
 * MODULE        : UI Shield, Anti-Overlap Spacing, Interactive Notches & Category-16 Accordion
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/sovereign-in-situ-scanner-ext.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var lastAccordionToggleTime = 0;
  var lastUrnActionTimes = {};

  function getCore() {
    return window.RM_SIVME || {
      isConsoleAuthorized: function () { return false; },
      getUrnVisibility: function () { return true; },
      setUrnVisibility: function () {}
    };
  }

  // ==============================================================================
  // 1. UNIVERSAL ANTI-OVERLAP, SAFE SPACING & MODAL UNCLIPPED SHIELD
  // ==============================================================================
  (function injectSpacingShield() {
    var styleId = 'sivme-universal-spacing-shield';
    if (document.getElementById(styleId)) return;
    var st = document.createElement('style');
    st.id = styleId;
    st.textContent = [
      '/* 1. Modal Stacking & Universal Visible Notches */',
      '#categoryModal, #rm-fullscreen-view, div[id*="Modal"], div[id*="modal"] { z-index: 99990 !important; }',
      '#categoryModal div, #categoryModal section, #tier1-list, #tier2-list { overflow: visible !important; }',
      'body.sivme-modal-active #verticalTilesGrid .sivme-notch-pill,',
      'body.sivme-modal-active .wallet-card .sivme-notch-pill,',
      'body.sivme-modal-active #cat-menu-btn .sivme-notch-pill,',
      'body.sivme-modal-active .sivme-search-container .sivme-notch-pill { display: none !important; visibility: hidden !important; }',
      '#categoryModal .sivme-notch-pill, #categoryModal .sivme-live-notch {',
      '  display: inline-flex !important;',
      '  visibility: visible !important;',
      '  opacity: 1 !important;',
      '  z-index: 100000 !important;',
      '  position: absolute !important;',
      '  top: -10px !important;',
      '  right: 12px !important;',
      '  pointer-events: auto !important;',
      '}',
      '',
      '/* 2. Home Widgets Clearance & RM CASH Dedicated Border Notch */',
      '#cat-menu-btn { margin-bottom: 20px !important; position: relative !important; overflow: visible !important; }',
      '.sivme-search-container { margin-top: 20px !important; margin-bottom: 22px !important; position: relative !important; overflow: visible !important; }',
      '.wallet-card { margin-top: 24px !important; margin-bottom: 24px !important; position: relative !important; overflow: visible !important; }',
      '.wallet-card .sivme-notch-pill { top: -12px !important; right: 14px !important; z-index: 100 !important; }',
      '.wallet-card > div:first-child > span:last-child { margin-right: 72px !important; }',
      '',
      '/* 3. 12 Core Cashflow Verticals Grid Row & Column Clearance */',
      '#verticalTilesGrid { margin-top: 24px !important; margin-bottom: 24px !important; row-gap: 26px !important; }',
      '#verticalTilesGrid > div { position: relative !important; overflow: visible !important; margin-bottom: 0 !important; }',
      '#verticalTilesGrid > div .sivme-notch-pill { top: -11px !important; right: 4px !important; font-size: 9.5px !important; padding: 1.5px 6px !important; }',
      '',
      '/* 4. Suppress Unwanted Notch on 12 Verticals Header Bar */',
      '.sivme-verticals-header-blocked .sivme-notch-pill,',
      'div:has(> #verticalTilesGrid) > div:first-child .sivme-notch-pill { display: none !important; }',
      '',
      '/* 5. Universal Catalog Cards Safe Spacing & Typography Shield */',
      '[data-cat-id], .sivme-cat-card, .sivme-subcat-card { position: relative !important; overflow: visible !important; margin-top: 14px !important; margin-bottom: 20px !important; }',
      '[data-cat-id] > div:first-child { padding-right: 12px !important; line-height: 1.35 !important; flex: 1 1 auto !important; min-width: 0 !important; }',
      '',
      '/* 6. Base Authoritative Notch Styles */',
      '.sivme-notch-pill { position: absolute !important; top: -10px !important; right: 10px !important; z-index: 99 !important; display: inline-flex !important; visibility: visible !important; opacity: 1 !important; white-space: nowrap !important; pointer-events: auto !important; touch-action: manipulation !important; }',
      '.sivme-badge-anchor { position: relative !important; overflow: visible !important; }',
      '.sivme-ghost-dormant { outline: 2px dashed #ef4444 !important; outline-offset: 3px !important; opacity: 0.45 !important; }',
      '.sivme-ghost-live { outline: 2px dashed #10b981 !important; outline-offset: 3px !important; opacity: 1 !important; }',
      '.sivme-public-hidden { display: none !important; }'
    ].join('\n');
    document.head.appendChild(st);
  })();

  // ==============================================================================
  // 2. 16-3 DYNAMIC FILTERS URN SELECTORS CONTRACT
  // ==============================================================================
  var URN_SELECTORS = [
    { urn: 'rm:cat:16:sub:16-3:elem:smart_omnibox', selector: '#rm-search-locality, #smartOmniboxGroup, #smartOmnibox, input[placeholder*="लालपुर"], input[placeholder*="8340"]', label: 'स्मार्ट खोज' },
    { urn: 'rm:cat:16:sub:16-3:elem:state_filter', selector: '#rm-cat16-search-state, #stateFilterGroup, #stateFilter, select[id*="state"]', label: 'राज्य फ़िल्टर' },
    { urn: 'rm:cat:16:sub:16-3:elem:district_filter', selector: '#rm-cat16-search-district, #districtFilterGroup, #districtFilter, select[id*="district"]', label: 'जिला फ़िल्टर' },
    { urn: 'rm:cat:16:sub:16-3:elem:budget_slider', selector: '#rm-search-budget-slider, #budgetSliderGroup, input[type="range"]', label: 'बजट स्लाइडर' },
    { urn: 'rm:cat:16:sub:16-3:elem:submeter_checkbox', selector: '#rm-search-submeter, #submeterFilterGroup, input[type="checkbox"]', label: 'सब-मीटर फ़िल्टर' }
  ];

  // ==============================================================================
  // 3. MOUNT SINGLE TOP-RIGHT NOTCH PILL WITH STRICT BARRIER
  // ==============================================================================
  function mountInlineBadge(parentEl, urn, isVisible, label) {
    var allExisting = parentEl.querySelectorAll(':scope > .sivme-notch-pill, :scope > .sivme-inline-badge');
    for (var i = 1; i < allExisting.length; i++) allExisting[i].remove();
    var badge = allExisting[0] || document.createElement('div');

    badge.className = 'sivme-notch-pill ' + (isVisible ? 'sivme-badge-live' : 'sivme-badge-dormant');
    badge.setAttribute('data-badge-urn', urn);
    badge.setAttribute('data-target-urn', urn);
    badge.setAttribute('data-badge-label', label || '');
    badge.setAttribute('data-badge-vis', String(isVisible));

    badge.innerHTML = isVisible
      ? '<span style="color:#10b981;font-size:10px;line-height:1;">🟢</span> <span style="line-height:1;">Live</span> <span style="font-size:9px;opacity:0.8;line-height:1;">⇄</span>'
      : '<span style="color:#ef4444;font-size:10px;line-height:1;">🔴</span> <span style="line-height:1;">Hidden</span> <span style="font-size:9px;opacity:0.8;line-height:1;">⇄</span>';

    badge.style.cssText = [
      'position: absolute !important', 'top: -10px !important', 'right: 10px !important', 'z-index: 100000 !important',
      'background: ' + (isVisible ? '#064e3b' : '#7f1d1d') + ' !important',
      'border: 1.5px solid ' + (isVisible ? '#10b981' : '#ef4444') + ' !important',
      'color: ' + (isVisible ? '#34d399' : '#fca5a5') + ' !important',
      'font-family: ui-monospace, SFMono-Regular, system-ui, sans-serif !important',
      'font-size: 10px !important', 'font-weight: 800 !important', 'padding: 2.5px 8px !important',
      'border-radius: 9999px !important', 'box-shadow: 0 3px 10px rgba(0,0,0,0.75) !important',
      'cursor: pointer !important', 'display: inline-flex !important', 'visibility: visible !important',
      'opacity: 1 !important', 'align-items: center !important', 'gap: 3.5px !important',
      'user-select: none !important', '-webkit-user-select: none !important',
      'touch-action: manipulation !important', 'pointer-events: auto !important',
      'line-height: 1 !important', 'white-space: nowrap !important'
    ].join(';');

    badge.onclick = function (ev) {
      if (ev.cancelable) ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation();
    };

    parentEl.style.setProperty('overflow', 'visible', 'important');
    if (window.getComputedStyle(parentEl).position === 'static') {
      parentEl.style.setProperty('position', 'relative', 'important');
    }
    if (!allExisting[0]) parentEl.appendChild(badge);
  }

  // ==============================================================================
  // 4. STRICT SYSTEM SHELL DENYLIST
  // ==============================================================================
  function isSystemShellElement(el) {
    if (!el || el.nodeType !== 1) return true;
    if (!el.classList.contains('wallet-card') && el.closest('.wallet-card')) return true;

    var txt = el.textContent || '';
    if (txt.indexOf('12 CORE CASHFLOW VERTICALS') !== -1 && !el.closest('#verticalTilesGrid')) return true;
    if (txt.indexOf('जुड़ना मुफ़्त') !== -1) return true;

    return !!(
      el.closest('header') || el.closest('nav') || el.closest('#header-user-avatar') ||
      (el.closest('[onclick*="toggleMenuDrawer"]') && el.id !== 'cat-menu-btn') ||
      el.closest('[onclick*="closeFullscreenModule"]') || el.closest('#playStoreInstallBanner') ||
      el.closest('#sivmeFloatingDock') || el.closest('#sivme-floating-console-dock') ||
      el.classList.contains('acc-arrow') ||
      el.tagName === 'HEADER' || el.tagName === 'NAV'
    );
  }

  // ==============================================================================
  // 5. CATEGORY 16 ACCORDION CONTROLLER
  // ==============================================================================
  function auditCategory16Accordion(isAuth, auditElementFn, applyAuditFn) {
    var core = getCore();
    var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
    if (!c16) return;
    var c16Header = c16.querySelector(':scope > div:first-child');
    var isCat16Vis = core.getUrnVisibility('rm:cat:16');

    if (!isAuth) {
      c16.classList.toggle('sivme-public-hidden', !isCat16Vis);
      c16.style.display = isCat16Vis ? '' : 'none';
      if (c16Header) {
        var oldB = c16Header.querySelector(':scope > .sivme-notch-pill, :scope > .sivme-inline-badge');
        if (oldB) oldB.remove();
        c16Header.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
      }
    } else {
      c16.classList.remove('sivme-public-hidden');
      c16.style.display = '';
      if (c16Header) {
        c16Header.classList.add('sivme-badge-anchor');
        c16Header.classList.toggle('sivme-ghost-live', isCat16Vis);
        c16Header.classList.toggle('sivme-ghost-dormant', !isCat16Vis);
        mountInlineBadge(c16Header, 'rm:cat:16', isCat16Vis, 'घर व मकान (House & Home)');

        if (c16Header.getAttribute('data-sivme-toggle-bound') !== 'true') {
          c16Header.setAttribute('data-sivme-toggle-bound', 'true');
          c16Header.addEventListener('click', function (e) {
            if (e.target.closest('.sivme-notch-pill, .sivme-inline-badge')) return;
            var now = Date.now();
            if (now - lastAccordionToggleTime < 350) return;
            lastAccordionToggleTime = now;
            var sub = document.getElementById('sub-c16');
            if (!sub) return;
            var isHidden = sub.classList.contains('hidden') || sub.style.display === 'none';
            var chevron = c16Header.querySelector('.acc-arrow');
            sub.classList.toggle('hidden', !isHidden);
            sub.style.display = isHidden ? 'block' : 'none';
            if (chevron) chevron.textContent = isHidden ? '▲' : '▼';
          }, true);
        }
      }
    }
  }

  // ==============================================================================
  // 6. CATEGORY 16 SUB-CARDS CONTROLLER
  // ==============================================================================
  function auditSub16Cards(isAuth, auditElementFn, applyAuditFn) {
    var core = getCore();
    document.querySelectorAll('#sub-c16 > div').forEach(function (subCard, idx) {
      var subUrn = 'rm:cat:16:sub:16-' + (idx + 1);
      var subLabelEl = subCard.querySelector('.text-xs') || subCard;
      var subLabel = subLabelEl ? subLabelEl.textContent.trim() : ('16-' + (idx + 1) + ' सेवा');
      auditElementFn(subCard, subUrn, subLabel, isAuth);

      if (subCard.getAttribute('data-sivme-sub-bound') !== 'true') {
        subCard.setAttribute('data-sivme-sub-bound', 'true');
        subCard.addEventListener('click', function (e) {
          if (!core.isConsoleAuthorized()) return;
          var isDormant = subCard.classList.contains('sivme-ghost-dormant');
          var isBadgeClick = !!e.target.closest('.sivme-notch-pill, .sivme-inline-badge');
          if (isDormant || isBadgeClick) {
            if (e.cancelable) e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            var now = Date.now();
            if (now - (lastUrnActionTimes[subUrn] || 0) < 550) return;
            lastUrnActionTimes[subUrn] = now;
            var curVis = core.getUrnVisibility(subUrn);
            var targetVis = isDormant ? true : !curVis;
            core.setUrnVisibility(subUrn, targetVis, subLabel);
            if (targetVis) core.setUrnVisibility('rm:cat:16', true, 'घर व मकान');
            applyAuditFn();
            return;
          }
          var openBtn = subCard.querySelector('button, a, [onclick]');
          if (openBtn && e.target !== openBtn && !openBtn.contains(e.target)) openBtn.click();
        }, false);
      }
    });
  }

  // ==============================================================================
  // 7. EXPORT TO SOVEREIGN IN-SITU SCANNER ENGINE
  // ==============================================================================
  window.RM_SIVME_EXT = {
    URN_SELECTORS: URN_SELECTORS,
    mountInlineBadge: mountInlineBadge,
    isSystemShellElement: isSystemShellElement,
    auditCategory16Accordion: auditCategory16Accordion,
    auditSub16Cards: auditSub16Cards
  };
})();
