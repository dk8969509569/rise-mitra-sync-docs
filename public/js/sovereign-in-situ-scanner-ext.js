/**
 * RISE MITRA — SOVEREIGN IN-SITU SCANNER EXTENSION (CHILD MODULE)
 * MODULE        : UI Shield, 50-Cat Touch Scroll, Deep Badge Purge & Cat-16 Adapter Bridge
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/sovereign-in-situ-scanner-ext.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT)
 *   Folder B (GitHub Mirror)
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
  // 1. UNIVERSAL ANTI-OVERLAP, 50-CAT TOUCH SCROLL & VIBRANT NOTCH SHIELD
  // ==============================================================================
  (function injectSpacingShield() {
    var styleId = 'sivme-universal-spacing-shield';
    if (document.getElementById(styleId)) return;
    var st = document.createElement('style');
    st.id = styleId;
    st.textContent = [
      '/* 1. Modal Stacking & Native Touch Scroll Engine */',
      '#categoryModal, #rm-fullscreen-view, div[id*="Modal"], div[id*="modal"] {',
      '  z-index: 99990 !important;',
      '}',
      '#categoryModal {',
      '  height: 100dvh !important;',
      '  max-height: 100dvh !important;',
      '  overflow-y: hidden !important;',
      '  padding-top: 48px !important;',
      '  padding-bottom: 24px !important;',
      '}',
      '#categoryModal > div:first-child {',
      '  height: calc(100dvh - 72px) !important;',
      '  max-height: calc(100dvh - 72px) !important;',
      '  display: flex !important;',
      '  flex-direction: column !important;',
      '  overflow: hidden !important;',
      '  position: relative !important;',
      '}',
      '/* Enable smooth scrolling across all 50 categories with dock clearance */',
      '#categoryModal .flex-1,',
      '#categoryModal div[class*="overflow-y-auto"] {',
      '  flex: 1 1 auto !important;',
      '  height: 100% !important;',
      '  min-height: 0 !important;',
      '  overflow-y: scroll !important;',
      '  overflow-x: hidden !important;',
      '  -webkit-overflow-scrolling: touch !important;',
      '  touch-action: pan-y !important;',
      '  padding-bottom: 120px !important;',
      '}',
      '#tier1-list, #tier2-list {',
      '  overflow: visible !important;',
      '}',
      '',
      '/* 2. Absolute suppression of background widgets when modal is active */',
      'body.sivme-modal-active main,',
      'body.sivme-modal-active header {',
      '  display: none !important;',
      '  visibility: hidden !important;',
      '  pointer-events: none !important;',
      '}',
      '',
      '/* 3. Strict Top-Right Notch with 44px Safe Touch Target */',
      '.sivme-notch-pill {',
      '  position: absolute !important;',
      '  top: -11px !important;',
      '  right: 12px !important;',
      '  left: auto !important;',
      '  z-index: 60 !important;',
      '  display: inline-flex !important;',
      '  visibility: visible !important;',
      '  opacity: 1 !important;',
      '  white-space: nowrap !important;',
      '  pointer-events: auto !important;',
      '  touch-action: manipulation !important;',
      '  min-height: 24px !important;',
      '  padding: 3px 10px !important;',
      '  font-size: 10.5px !important;',
      '}',
      '.sivme-notch-pill::before {',
      '  content: "" !important;',
      '  position: absolute !important;',
      '  top: -10px !important;',
      '  bottom: -10px !important;',
      '  left: -12px !important;',
      '  right: -12px !important;',
      '  z-index: 1 !important;',
      '}',
      '',
      '/* 4. Complete Isolation of Category 16 (Permanent Anti-Overlap Shield) */',
      '#categoryModal [data-cat-id="c16"] {',
      '  outline: none !important;',
      '  position: relative !important;',
      '}',
      '#categoryModal [data-cat-id="c16"] > .sivme-notch-pill,',
      '#categoryModal [data-cat-id="c16"] > .sivme-live-notch,',
      '#categoryModal [data-cat-id="c16"] > .sivme-inline-badge {',
      '  display: none !important;',
      '}',
      '#sub-c16 {',
      '  position: relative !important;',
      '  overflow: visible !important;',
      '  margin-top: 14px !important;',
      '}',
      '#sub-c16 > div {',
      '  position: relative !important;',
      '  overflow: visible !important;',
      '  min-height: 80px !important;',
      '  margin-top: 14px !important;',
      '  margin-bottom: 14px !important;',
      '}',
      '#sub-c16.hidden, #sub-c16[style*="display: none"] {',
      '  display: none !important;',
      '  height: 0 !important;',
      '  visibility: hidden !important;',
      '}',
      '#sub-c16.hidden .sivme-notch-pill, #sub-c16[style*="display: none"] .sivme-notch-pill {',
      '  display: none !important;',
      '}',
      '',
      '/* 5. Home Widgets Clearance & RM CASH Dedicated Border Notch */',
      '#cat-menu-btn { margin-bottom: 20px !important; position: relative !important; overflow: visible !important; }',
      '.sivme-search-container { margin-top: 20px !important; margin-bottom: 22px !important; position: relative !important; overflow: visible !important; }',
      '.wallet-card { margin-top: 24px !important; margin-bottom: 24px !important; position: relative !important; overflow: visible !important; }',
      '.wallet-card .sivme-notch-pill { top: -12px !important; right: 14px !important; z-index: 50 !important; }',
      '.wallet-card > div:first-child > span:last-child { margin-right: 76px !important; }',
      '',
      '/* 6. 12 Core Cashflow Verticals Grid Row & Column Clearance */',
      '#verticalTilesGrid { margin-top: 24px !important; margin-bottom: 24px !important; row-gap: 26px !important; }',
      '#verticalTilesGrid > div { position: relative !important; overflow: visible !important; margin-bottom: 0 !important; }',
      '#verticalTilesGrid > div .sivme-notch-pill { top: -11px !important; right: 4px !important; font-size: 9.5px !important; padding: 1.5px 6px !important; }',
      '',
      '/* 7. Suppress Unwanted Notch on Headers */',
      '.sivme-verticals-header-blocked .sivme-notch-pill,',
      '#rm-tier1-toggle .sivme-notch-pill,',
      '#rm-tier2-toggle .sivme-notch-pill,',
      'div:has(> #verticalTilesGrid) > div:first-child .sivme-notch-pill { display: none !important; }',
      '',
      '/* 8. Universal Catalog Cards Safe Spacing & Typography Shield */',
      '[data-cat-id], .sivme-cat-card, .sivme-subcat-card {',
      '  position: relative !important;',
      '  overflow: visible !important;',
      '  margin-top: 14px !important;',
      '  margin-bottom: 20px !important;',
      '}',
      '[data-cat-id] > div:first-child {',
      '  padding-right: 14px !important;',
      '  line-height: 1.35 !important;',
      '  flex: 1 1 auto !important;',
      '  min-width: 0 !important;',
      '}',
      '',
      '/* 9. Vibrant Dashed Borders (100% Unfaded Visibility) */',
      '.sivme-badge-anchor { position: relative !important; overflow: visible !important; }',
      '.sivme-ghost-live, .is-live {',
      '  outline: 2.5px dashed #10b981 !important;',
      '  outline-offset: 3px !important;',
      '  opacity: 1 !important;',
      '}',
      '.sivme-ghost-dormant, .is-hidden {',
      '  outline: 2.5px dashed #ff3838 !important;',
      '  outline-offset: 3px !important;',
      '  opacity: 1 !important;',
      '}',
      '.sivme-ghost-dormant > div:first-child, .is-hidden > div:first-child {',
      '  opacity: 0.55 !important;',
      '}',
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

  // Helper: Persist toggle across all storages with Cat-16 Adapter Bridge
  function persistToggle(urn, nextVis, label, core) {
    if (window.RM_CAT16_ADAPTER && typeof window.RM_CAT16_ADAPTER.persistCat16Toggle === 'function' && urn.indexOf('rm:cat:16') === 0) {
      window.RM_CAT16_ADAPTER.persistCat16Toggle(urn, nextVis, label, core);
      return;
    }

    if (core && typeof core.setUrnVisibility === 'function') {
      if (urn === 'rm:cat:16') {
        ['rm:cat:16:sub:16-1', 'rm:cat:16:sub:16-2', 'rm:cat:16:sub:16-3'].forEach(function (su) {
          core.setUrnVisibility(su, nextVis);
        });
      }
      core.setUrnVisibility(urn, nextVis, label);
    }

    if (window.RM_SovereignRegistry && typeof window.RM_SovereignRegistry.toggleVisibility === 'function') {
      try { window.RM_SovereignRegistry.toggleVisibility(urn, nextVis, label); } catch (_) {}
    }

    try {
      var regKey = 'rm_sovereign_visibility_registry_v1';
      var raw = localStorage.getItem(regKey);
      var regObj = raw ? JSON.parse(raw) : { activeMode: 'in_situ_console', registry: {}, items: {} };
      if (!regObj.registry) regObj.registry = {};
      if (!regObj.items) regObj.items = {};
      regObj.registry[urn] = { hidden: !nextVis, label: label, updatedAt: Date.now() };
      regObj.items[urn] = { visible: nextVis, label: label, updatedAt: Date.now() };
      localStorage.setItem(regKey, JSON.stringify(regObj));
    } catch (_) {}

    if (urn.indexOf('rm:cat:') === 0 && urn.indexOf(':sub:') === -1) {
      var cNum = urn.replace('rm:cat:', '');
      var n = parseInt(cNum, 10);
      var prefix = (n >= 34) ? 'g' : 'c';
      var catId = prefix + (cNum.length === 1 ? '0' + cNum : cNum);
      var numStr = (cNum.length === 1 ? '0' + cNum : cNum);
      try {
        var rawAct = localStorage.getItem('rm_active_categories_v1');
        var activeSet = new Set(rawAct ? JSON.parse(rawAct) : []);
        if (nextVis) {
          activeSet.add(catId); activeSet.add(numStr); activeSet.add(String(n));
        } else {
          activeSet.delete(catId); activeSet.delete(numStr); activeSet.delete(String(n));
          activeSet.delete('c' + numStr); activeSet.delete('g' + numStr);
        }
        localStorage.setItem('rm_active_categories_v1', JSON.stringify(Array.from(activeSet)));
      } catch (_) {}
    }

    if (urn.indexOf(':sub:') !== -1) {
      var subId = urn.split(':sub:')[1];
      if (subId) {
        try {
          var rawSub = localStorage.getItem('rm_active_subcategories_v1');
          var subSet = new Set(rawSub ? JSON.parse(rawSub) : []);
          if (nextVis) {
            subSet.add(subId);
          } else {
            subSet.delete(subId);
          }
          localStorage.setItem('rm_active_subcategories_v1', JSON.stringify(Array.from(subSet)));
        } catch (_) {}
      }
    }
  }

  // ==============================================================================
  // 3. MOUNT SINGLE TOP-RIGHT NOTCH PILL (TOUCH-ISOLATED 1-TAP TOGGLE)
  // ==============================================================================
  function mountInlineBadge(parentEl, urn, isVisible, label) {
    if (!parentEl) return;
    if (parentEl.getAttribute('data-cat-id') === 'c16') return;

    parentEl.querySelectorAll('.sivme-notch-pill, .sivme-live-notch, .sivme-inline-badge').forEach(function (n) {
      n.remove();
    });

    var badge = document.createElement('div');
    badge.className = 'sivme-notch-pill ' + (isVisible ? 'sivme-badge-live' : 'sivme-badge-dormant');
    badge.setAttribute('data-badge-urn', urn);
    badge.setAttribute('data-target-urn', urn);
    badge.setAttribute('data-badge-label', label || '');
    badge.setAttribute('data-badge-vis', String(isVisible));

    var targetHtml = isVisible
      ? '<span style="color:#10b981;font-size:11px;line-height:1;">🟢</span> <span style="line-height:1;">Live</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>'
      : '<span style="color:#ff4d4d;font-size:11px;line-height:1;">🔴</span> <span style="line-height:1;">Hidden</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>';

    badge.innerHTML = targetHtml;

    badge.style.cssText = [
      'position: absolute !important', 'top: -11px !important', 'right: 12px !important', 'left: auto !important', 'z-index: 60 !important',
      'background: ' + (isVisible ? '#064e3b' : '#7f1d1d') + ' !important',
      'border: 1.5px solid ' + (isVisible ? '#10b981' : '#ff4d4d') + ' !important',
      'color: ' + (isVisible ? '#34d399' : '#fca5a5') + ' !important',
      'font-family: ui-monospace, SFMono-Regular, system-ui, sans-serif !important',
      'font-size: 10.5px !important', 'font-weight: 800 !important', 'padding: 3px 10px !important',
      'border-radius: 9999px !important', 'box-shadow: 0 3px 10px rgba(0,0,0,0.85) !important',
      'cursor: pointer !important', 'display: inline-flex !important', 'visibility: visible !important',
      'opacity: 1 !important', 'align-items: center !important', 'gap: 4px !important',
      'user-select: none !important', '-webkit-user-select: none !important',
      'touch-action: manipulation !important', 'pointer-events: auto !important',
      'line-height: 1 !important', 'white-space: nowrap !important'
    ].join(';');

    var executeToggleAction = function (ev) {
      if (ev) {
        if (ev.cancelable) ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
      }

      var core = getCore();
      if (!core.isConsoleAuthorized()) return;

      var now = Date.now();
      if (now - (lastUrnActionTimes[urn] || 0) < 220) return;
      lastUrnActionTimes[urn] = now;

      var currentVis = isVisible;
      if (core.getUrnVisibility) {
        currentVis = core.getUrnVisibility(urn);
      } else {
        currentVis = badge.getAttribute('data-badge-vis') === 'true';
      }
      var nextVis = !currentVis;

      // 1. Instant Visual DOM Flip (0ms)
      badge.setAttribute('data-badge-vis', String(nextVis));
      badge.className = 'sivme-notch-pill ' + (nextVis ? 'sivme-badge-live' : 'sivme-badge-dormant');
      badge.innerHTML = nextVis
        ? '<span style="color:#10b981;font-size:11px;line-height:1;">🟢</span> <span style="line-height:1;">Live</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>'
        : '<span style="color:#ff4d4d;font-size:11px;line-height:1;">🔴</span> <span style="line-height:1;">Hidden</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>';
      badge.style.setProperty('background', (nextVis ? '#064e3b' : '#7f1d1d'), 'important');
      badge.style.setProperty('border', '1.5px solid ' + (nextVis ? '#10b981' : '#ff4d4d'), 'important');
      badge.style.setProperty('color', (nextVis ? '#34d399' : '#fca5a5'), 'important');

      var parentCard = badge.closest('[data-cat-id], .sivme-cat-card, .sivme-subcat-card, .sivme-vertical-card, .wallet-card');
      if (parentCard) {
        parentCard.classList.toggle('sivme-ghost-live', nextVis);
        parentCard.classList.toggle('sivme-ghost-dormant', !nextVis);
        parentCard.classList.toggle('is-live', nextVis);
        parentCard.classList.toggle('is-hidden', !nextVis);
        parentCard.style.setProperty('outline', '2.5px dashed ' + (nextVis ? '#10b981' : '#ff3838'), 'important');
        parentCard.style.setProperty('outline-offset', '3px', 'important');
        parentCard.style.setProperty('opacity', '1', 'important');
        var cardInner = parentCard.querySelector(':scope > div:first-child');
        if (cardInner) {
          cardInner.style.setProperty('opacity', nextVis ? '1' : '0.55', 'important');
        }
      }

      // 2. Persist across all local storage structures
      persistToggle(urn, nextVis, label, core);

      // 3. Sync floating console dock
      if (window.RM_SIVME && typeof window.RM_SIVME.applyInSituAudit === 'function') {
        setTimeout(window.RM_SIVME.applyInSituAudit, 30);
      }
    };

    badge.onclick = executeToggleAction;
    badge.addEventListener('touchend', executeToggleAction, { passive: false });

    parentEl.style.setProperty('overflow', 'visible', 'important');
    if (window.getComputedStyle(parentEl).position === 'static') {
      parentEl.style.setProperty('position', 'relative', 'important');
    }
    parentEl.appendChild(badge);
  }

  // ==============================================================================
  // 4. STRICT SYSTEM SHELL DENYLIST
  // ==============================================================================
  function isSystemShellElement(el) {
    if (!el || el.nodeType !== 1) return true;
    if (el.hasAttribute('data-cat-id') || el.classList.contains('sivme-cat-card') || el.classList.contains('sivme-subcat-card')) return false;
    if (el.classList.contains('wallet-card')) return false;
    if (el.closest('.wallet-card')) return true;

    var txt = el.textContent || '';
    if (txt.indexOf('12 CORE CASHFLOW VERTICALS') !== -1 && !el.closest('#verticalTilesGrid')) return true;
    if (txt.indexOf('जुड़ना मुफ़्त') !== -1) return true;
    if (el.id === 'rm-tier1-toggle' || el.id === 'rm-tier2-toggle' || el.closest('#rm-tier1-toggle') || el.closest('#rm-tier2-toggle')) return true;
    if (el.id === 'categoryModal') return true;

    return !!(
      el.closest('header') || el.closest('nav') || el.closest('#header-user-avatar') ||
      el.closest('[onclick*="closeFullscreenModule"]') || el.closest('#playStoreInstallBanner') ||
      el.closest('#sivmeFloatingDock') || el.closest('#sivme-floating-console-dock') ||
      el.classList.contains('acc-arrow') ||
      el.tagName === 'HEADER' || el.tagName === 'NAV'
    );
  }

  // ==============================================================================
  // 5. CATEGORY 16 ACCORDION CONTROLLER (HYBRID ADAPTER DELEGATION & FALLBACK)
  // ==============================================================================
  function auditCategory16Accordion(isAuth, auditElementFn, applyAuditFn) {
    if (window.RM_CAT16_ADAPTER && typeof window.RM_CAT16_ADAPTER.auditCat16Complete === 'function') {
      window.RM_CAT16_ADAPTER.auditCat16Complete(isAuth, auditElementFn);
      return;
    }

    // High-Reliability Fallback (Zero-Breakage Guarantee)
    var core = getCore();
    var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
    if (!c16) return;

    c16.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
    c16.style.removeProperty('outline');
    c16.querySelectorAll(':scope > .sivme-notch-pill, :scope > .sivme-live-notch, :scope > .sivme-inline-badge').forEach(function (n) {
      n.remove();
    });

    var c16Header = c16.querySelector(':scope > div:first-child');
    var isCat16Vis = core.getUrnVisibility('rm:cat:16');

    if (!isAuth) {
      c16.classList.toggle('sivme-public-hidden', !isCat16Vis);
      c16.style.display = isCat16Vis ? '' : 'none';
      if (c16Header) {
        c16Header.querySelectorAll('.sivme-notch-pill, .sivme-inline-badge, .sivme-live-notch').forEach(function (n) { n.remove(); });
        c16Header.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
      }
    } else {
      c16.classList.remove('sivme-public-hidden');
      c16.style.display = '';
      if (c16Header) {
        c16Header.classList.add('sivme-badge-anchor');
        c16Header.classList.toggle('sivme-ghost-live', isCat16Vis);
        c16Header.classList.toggle('sivme-ghost-dormant', !isCat16Vis);
        c16Header.style.setProperty('outline', '2.5px dashed ' + (isCat16Vis ? '#10b981' : '#ff3838'), 'important');
        c16Header.style.setProperty('outline-offset', '3px', 'important');
        c16Header.style.setProperty('opacity', '1', 'important');
        mountInlineBadge(c16Header, 'rm:cat:16', isCat16Vis, 'घर व मकान (House & Home)');

        if (c16Header.getAttribute('data-sivme-toggle-bound') !== 'true') {
          c16Header.setAttribute('data-sivme-toggle-bound', 'true');
          c16Header.addEventListener('click', function (e) {
            if (e.target.closest('.sivme-notch-pill, .sivme-inline-badge, .sivme-live-notch')) return;
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
  // 6. CATEGORY 16 SUB-CARDS CONTROLLER (HYBRID ADAPTER DELEGATION & FALLBACK)
  // ==============================================================================
  function auditSub16Cards(isAuth, auditElementFn, applyAuditFn) {
    if (window.RM_CAT16_ADAPTER && typeof window.RM_CAT16_ADAPTER.auditCat16Complete === 'function') {
      // 100% Handled inside RM_CAT16_ADAPTER to guarantee Zero-Overlap
      return;
    }

    var core = getCore();
    var sub = document.getElementById('sub-c16');
    var isSubOpen = sub && !sub.classList.contains('hidden') && sub.style.display !== 'none';

    document.querySelectorAll('#sub-c16 > div').forEach(function (subCard, idx) {
      var subUrn = 'rm:cat:16:sub:16-' + (idx + 1);
      var subLabelEl = subCard.querySelector('.text-xs') || subCard;
      var subLabel = subLabelEl ? subLabelEl.textContent.trim() : ('16-' + (idx + 1) + ' सेवा');

      if (!isSubOpen) {
        subCard.querySelectorAll('.sivme-notch-pill, .sivme-live-notch, .sivme-inline-badge').forEach(function (n) { n.remove(); });
        subCard.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
        subCard.style.removeProperty('outline');
        return;
      }

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
    persistToggle: persistToggle,
    isSystemShellElement: isSystemShellElement,
    auditCategory16Accordion: auditCategory16Accordion,
    auditSub16Cards: auditSub16Cards
  };
})();
