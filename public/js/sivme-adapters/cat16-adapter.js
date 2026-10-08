/**
 * RISE MITRA — SOVEREIGN IN-SITU ADAPTER: CATEGORY 16 (ISOLATED MODULE)
 * MODULE        : Dedicated House & Home (Cat-16) Accordion, Sub-Cards & Filter Controller
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/sivme-adapters/cat16-adapter.js
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
      setUrnVisibility: function () {},
      applyInSituAudit: function () {}
    };
  }

  // 1. DYNAMIC FILTERS URN SELECTORS CONTRACT (16-3)
  var CAT16_URN_SELECTORS = [
    { urn: 'rm:cat:16:sub:16-3:elem:smart_omnibox', selector: '#rm-search-locality, #smartOmniboxGroup, #smartOmnibox, input[placeholder*="लालपुर"], input[placeholder*="8340"]', label: 'स्मार्ट खोज' },
    { urn: 'rm:cat:16:sub:16-3:elem:state_filter', selector: '#rm-cat16-search-state, #stateFilterGroup, #stateFilter, select[id*="state"]', label: 'राज्य फ़िल्टर' },
    { urn: 'rm:cat:16:sub:16-3:elem:district_filter', selector: '#rm-cat16-search-district, #districtFilterGroup, #districtFilter, select[id*="district"]', label: 'जिला फ़िल्टर' },
    { urn: 'rm:cat:16:sub:16-3:elem:budget_slider', selector: '#rm-search-budget-slider, #budgetSliderGroup, input[type="range"]', label: 'बजट स्लाइडर' },
    { urn: 'rm:cat:16:sub:16-3:elem:submeter_checkbox', selector: '#rm-search-submeter, #submeterFilterGroup, input[type="checkbox"]', label: 'सब-मीटर फ़िल्टर' }
  ];

  // Helper: Persist toggle across all storages with auto parent wake-up
  function persistCat16Toggle(urn, nextVis, label, core) {
    if (core && typeof core.setUrnVisibility === 'function') {
      if (urn === 'rm:cat:16') {
        ['rm:cat:16:sub:16-1', 'rm:cat:16:sub:16-2', 'rm:cat:16:sub:16-3'].forEach(function (su) {
          core.setUrnVisibility(su, nextVis);
        });
      } else if (urn.indexOf('rm:cat:16:sub:') === 0 && nextVis === true) {
        // Child wake-up automatically ensures parent Category 16 is live
        core.setUrnVisibility('rm:cat:16', true, 'घर व मकान (House & Home)');
      }
      core.setUrnVisibility(urn, nextVis, label);
    }

    if (window.RM_SovereignRegistry && typeof window.RM_SovereignRegistry.toggleVisibility === 'function') {
      try {
        if (urn.indexOf('rm:cat:16:sub:') === 0 && nextVis === true) {
          window.RM_SovereignRegistry.toggleVisibility('rm:cat:16', true, 'घर व मकान (House & Home)');
        }
        window.RM_SovereignRegistry.toggleVisibility(urn, nextVis, label);
      } catch (_) {}
    }

    try {
      var regKey = 'rm_sovereign_visibility_registry_v1';
      var raw = localStorage.getItem(regKey);
      var regObj = raw ? JSON.parse(raw) : { activeMode: 'in_situ_console', registry: {}, items: {} };
      if (!regObj.registry) regObj.registry = {};
      if (!regObj.items) regObj.items = {};
      regObj.registry[urn] = { hidden: !nextVis, label: label, updatedAt: Date.now() };
      regObj.items[urn] = { visible: nextVis, label: label, updatedAt: Date.now() };
      if (urn.indexOf('rm:cat:16:sub:') === 0 && nextVis === true) {
        regObj.registry['rm:cat:16'] = { hidden: false, label: 'घर व मकान (House & Home)', updatedAt: Date.now() };
        regObj.items['rm:cat:16'] = { visible: true, label: 'घर व मकान (House & Home)', updatedAt: Date.now() };
      }
      localStorage.setItem(regKey, JSON.stringify(regObj));
    } catch (_) {}

    try {
      var rawAct = localStorage.getItem('rm_active_categories_v1');
      var activeSet = new Set(rawAct ? JSON.parse(rawAct) : []);
      if (urn === 'rm:cat:16') {
        if (nextVis) { activeSet.add('c16'); activeSet.add('16'); }
        else { activeSet.delete('c16'); activeSet.delete('16'); }
      } else if (urn.indexOf('rm:cat:16:sub:') === 0 && nextVis === true) {
        activeSet.add('c16'); activeSet.add('16');
      }
      localStorage.setItem('rm_active_categories_v1', JSON.stringify(Array.from(activeSet)));
    } catch (_) {}

    if (urn.indexOf(':sub:') !== -1) {
      var subId = urn.split(':sub:')[1];
      if (subId) {
        try {
          var rawSub = localStorage.getItem('rm_active_subcategories_v1');
          var subSet = new Set(rawSub ? JSON.parse(rawSub) : []);
          if (nextVis) { subSet.add(subId); } else { subSet.delete(subId); }
          localStorage.setItem('rm_active_subcategories_v1', JSON.stringify(Array.from(subSet)));
        } catch (_) {}
      }
    }
  }

  // 2. MOUNT SINGLE AUTHORITATIVE NOTCH PILL FOR CAT 16 HEADER
  function mountCat16AuthoritativeBadge(headerEl, isVisible) {
    if (!headerEl) return;

    var existing = headerEl.querySelector('#sivme-c16-authoritative-badge');
    headerEl.querySelectorAll('.sivme-notch-pill, .sivme-live-notch, .sivme-inline-badge').forEach(function (n) {
      if (n !== existing) n.remove();
    });

    var badge = existing || document.createElement('div');
    badge.id = 'sivme-c16-authoritative-badge';
    badge.className = 'sivme-notch-pill ' + (isVisible ? 'sivme-badge-live' : 'sivme-badge-dormant');
    badge.setAttribute('data-badge-urn', 'rm:cat:16');
    badge.setAttribute('data-target-urn', 'rm:cat:16');
    badge.setAttribute('data-badge-label', 'घर व मकान (House & Home)');
    badge.setAttribute('data-badge-vis', String(isVisible));

    var targetHtml = isVisible
      ? '<span style="color:#10b981;font-size:11px;line-height:1;">🟢</span> <span style="line-height:1;">Live</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>'
      : '<span style="color:#ff4d4d;font-size:11px;line-height:1;">🔴</span> <span style="line-height:1;">Hidden</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>';

    badge.innerHTML = targetHtml;

    badge.style.cssText = [
      'position: absolute !important', 'top: -11px !important', 'right: 12px !important', 'left: auto !important', 'z-index: 70 !important',
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

    var handleToggle = function (ev) {
      if (ev) {
        if (ev.cancelable) ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
      }

      var core = getCore();
      if (!core.isConsoleAuthorized()) return;

      var now = Date.now();
      if (now - (lastUrnActionTimes['rm:cat:16'] || 0) < 220) return;
      lastUrnActionTimes['rm:cat:16'] = now;

      var curVis = core.getUrnVisibility ? core.getUrnVisibility('rm:cat:16') : (badge.getAttribute('data-badge-vis') === 'true');
      var nextVis = !curVis;

      badge.setAttribute('data-badge-vis', String(nextVis));
      badge.className = 'sivme-notch-pill ' + (nextVis ? 'sivme-badge-live' : 'sivme-badge-dormant');
      badge.innerHTML = nextVis
        ? '<span style="color:#10b981;font-size:11px;line-height:1;">🟢</span> <span style="line-height:1;">Live</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>'
        : '<span style="color:#ff4d4d;font-size:11px;line-height:1;">🔴</span> <span style="line-height:1;">Hidden</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>';
      badge.style.setProperty('background', (nextVis ? '#064e3b' : '#7f1d1d'), 'important');
      badge.style.setProperty('border', '1.5px solid ' + (nextVis ? '#10b981' : '#ff4d4d'), 'important');
      badge.style.setProperty('color', (nextVis ? '#34d399' : '#fca5a5'), 'important');

      headerEl.classList.toggle('sivme-ghost-live', nextVis);
      headerEl.classList.toggle('sivme-ghost-dormant', !nextVis);
      headerEl.style.setProperty('outline', '2.5px dashed ' + (nextVis ? '#10b981' : '#ff3838'), 'important');
      headerEl.style.setProperty('outline-offset', '3px', 'important');
      headerEl.style.setProperty('opacity', '1', 'important');

      persistCat16Toggle('rm:cat:16', nextVis, 'घर व मकान (House & Home)', core);

      if (window.RM_SIVME && typeof window.RM_SIVME.applyInSituAudit === 'function') {
        setTimeout(window.RM_SIVME.applyInSituAudit, 30);
      }
    };

    badge.onclick = handleToggle;
    badge.addEventListener('touchend', handleToggle, { passive: false });

    headerEl.style.setProperty('overflow', 'visible', 'important');
    if (window.getComputedStyle(headerEl).position === 'static') {
      headerEl.style.setProperty('position', 'relative', 'important');
    }
    if (!existing) headerEl.appendChild(badge);
  }

  // 3. AUDIT CATEGORY 16 ACCORDION & SUB-CARDS (UNFROZEN ACCORDION & DIRECT TOGGLE)
  function auditCat16Complete(isAuth, auditElementFn) {
    var core = getCore();
    var c16Container = document.querySelector('#categoryModal [data-cat-id="c16"], #categoryModal [data-cat-id="16"]');
    if (!c16Container) return;

    c16Container.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
    c16Container.style.setProperty('outline', 'none', 'important');
    c16Container.querySelectorAll(':scope > .sivme-notch-pill, :scope > .sivme-live-notch, :scope > .sivme-inline-badge').forEach(function (n) {
      n.remove();
    });

    var c16Header = c16Container.querySelector(':scope > div:first-child');
    var isCat16Vis = core.getUrnVisibility('rm:cat:16');

    if (!isAuth) {
      c16Container.classList.toggle('sivme-public-hidden', !isCat16Vis);
      c16Container.style.display = isCat16Vis ? '' : 'none';
      if (c16Header) {
        c16Header.querySelectorAll('.sivme-notch-pill, .sivme-inline-badge, .sivme-live-notch').forEach(function (n) { n.remove(); });
        c16Header.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
        c16Header.style.removeProperty('outline');
      }
    } else {
      c16Container.classList.remove('sivme-public-hidden');
      c16Container.style.display = '';
      if (c16Header) {
        c16Header.classList.add('sivme-badge-anchor');
        c16Header.classList.toggle('sivme-ghost-live', isCat16Vis);
        c16Header.classList.toggle('sivme-ghost-dormant', !isCat16Vis);
        c16Header.style.setProperty('outline', '2.5px dashed ' + (isCat16Vis ? '#10b981' : '#ff3838'), 'important');
        c16Header.style.setProperty('outline-offset', '3px', 'important');
        c16Header.style.setProperty('opacity', '1', 'important');

        mountCat16AuthoritativeBadge(c16Header, isCat16Vis);

        // Reliable 1-Tap Accordion Toggle & Clean Display Removal
        if (c16Header.getAttribute('data-sivme-accordion-bound') !== 'true') {
          c16Header.setAttribute('data-sivme-accordion-bound', 'true');
          c16Header.addEventListener('click', function (e) {
            if (e.target.closest('.sivme-notch-pill, #sivme-c16-authoritative-badge')) return;

            var sub = document.getElementById('sub-c16');
            if (!sub) return;

            var now = Date.now();
            if (now - lastAccordionToggleTime < 280) return;
            lastAccordionToggleTime = now;

            // Strip conflicting inline style so Tailwind class controls state cleanly
            sub.style.removeProperty('display');

            var isCurrentlyHidden = sub.classList.contains('hidden');
            sub.classList.toggle('hidden', !isCurrentlyHidden);

            var chevron = c16Header.querySelector('.acc-arrow');
            if (chevron) chevron.textContent = isCurrentlyHidden ? '▲' : '▼';

            if (window.RM_SIVME && typeof window.RM_SIVME.applyInSituAudit === 'function') {
              setTimeout(window.RM_SIVME.applyInSituAudit, 40);
            }
          }, false);
        }
      }
    }

    // Sub-cards handling
    var subContainer = document.getElementById('sub-c16');
    var isSubOpen = subContainer && !subContainer.classList.contains('hidden') && subContainer.style.display !== 'none';

    document.querySelectorAll('#sub-c16 > div').forEach(function (subCard, idx) {
      var subUrn = 'rm:cat:16:sub:16-' + (idx + 1);
      var subLabelEl = subCard.querySelector('.text-xs') || subCard;
      var subLabel = subLabelEl ? subLabelEl.textContent.trim() : ('16-' + (idx + 1) + ' सेवा');

      if (!isSubOpen || !isAuth) {
        subCard.querySelectorAll('.sivme-notch-pill, .sivme-live-notch, .sivme-inline-badge').forEach(function (n) { n.remove(); });
        subCard.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
        subCard.style.removeProperty('outline');
        return;
      }

      if (typeof auditElementFn === 'function') {
        auditElementFn(subCard, subUrn, subLabel, isAuth);
      }
    });

    // Dynamic 16-3 filters handling
    CAT16_URN_SELECTORS.forEach(function (def) {
      var node = document.querySelector(def.selector);
      if (node && typeof auditElementFn === 'function') {
        auditElementFn(node.parentElement || node, def.urn, def.label, isAuth);
      }
    });
  }

  window.RM_CAT16_ADAPTER = {
    auditCat16Complete: auditCat16Complete,
    persistCat16Toggle: persistCat16Toggle,
    URN_SELECTORS: CAT16_URN_SELECTORS
  };

  if (window.RM_SIVME) {
    window.RM_SIVME.adapters = window.RM_SIVME.adapters || {};
    window.RM_SIVME.adapters['cat16'] = auditCat16Complete;
  }
})();
