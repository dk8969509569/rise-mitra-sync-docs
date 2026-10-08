/**
 * RISE MITRA — SOVEREIGN IN-SITU SCANNER & UI ENGINE (MODULE 2 OF 2)
 * MODULE        : Universal Auto-Scanner, 12 Core Verticals, Notches & Touch Handlers
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/sovereign-in-situ-scanner.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var isAuditing = false;
  var lastUrnActionTimes = {};
  var lastAccordionToggleTime = 0;

  function getCore() {
    return window.RM_SIVME || {
      isConsoleAuthorized: function () { return false; },
      getUrnVisibility: function () { return true; },
      setUrnVisibility: function () {},
      getHiddenCount: function () { return 0; },
      cleanText: function (el) { return (el && el.textContent) ? el.textContent.trim() : ''; },
      enforceZELTemplateRendering: function () {},
      loadAdapters: function () {},
      getAdapters: function () { return {}; }
    };
  }

  // ==============================================================================
  // 1. URN SELECTORS CONFIG (16-3 Dynamic Filters)
  // ==============================================================================
  var URN_SELECTORS = [
    {
      urn: 'rm:cat:16:sub:16-3:elem:smart_omnibox',
      selector: '#rm-search-locality, #smartOmniboxGroup, #smartOmnibox, input[placeholder*="लालपुर"], input[placeholder*="8340"]',
      label: 'स्मार्ट खोज'
    },
    {
      urn: 'rm:cat:16:sub:16-3:elem:state_filter',
      selector: '#rm-cat16-search-state, #stateFilterGroup, #stateFilter, select[id*="state"]',
      label: 'राज्य फ़िल्टर'
    },
    {
      urn: 'rm:cat:16:sub:16-3:elem:district_filter',
      selector: '#rm-cat16-search-district, #districtFilterGroup, #districtFilter, select[id*="district"]',
      label: 'जिला फ़िल्टर'
    },
    {
      urn: 'rm:cat:16:sub:16-3:elem:budget_slider',
      selector: '#rm-search-budget-slider, #budgetSliderGroup, input[type="range"]',
      label: 'बजट स्लाइडर'
    },
    {
      urn: 'rm:cat:16:sub:16-3:elem:submeter_checkbox',
      selector: '#rm-search-submeter, #submeterFilterGroup, input[type="checkbox"]',
      label: 'सब-मीटर फ़िल्टर'
    }
  ];

  // ==============================================================================
  // 2. MOUNT UNCLIPPED INTERACTIVE NOTCH PILL
  // ==============================================================================
  function mountInlineBadge(parentEl, urn, isVisible, label) {
    var badge = parentEl.querySelector(':scope > .sivme-notch-pill');
    if (!badge) {
      badge = document.createElement('div');
      parentEl.appendChild(badge);
    }

    badge.className = 'sivme-notch-pill ' + (isVisible ? 'sivme-badge-live' : 'sivme-badge-dormant');
    badge.setAttribute('data-badge-urn', urn);
    badge.setAttribute('data-target-urn', urn);
    badge.setAttribute('data-badge-label', label || '');
    badge.setAttribute('data-badge-vis', String(isVisible));

    var targetHtml = isVisible
      ? '<span style="color:#10b981;font-size:10px;line-height:1;">🟢</span> <span style="line-height:1;">Live</span> <span style="font-size:9px;opacity:0.8;line-height:1;">⇄</span>'
      : '<span style="color:#ef4444;font-size:10px;line-height:1;">🔴</span> <span style="line-height:1;">Hidden</span> <span style="font-size:9px;opacity:0.8;line-height:1;">⇄</span>';

    badge.innerHTML = targetHtml;

    badge.style.cssText = [
      'position: absolute !important',
      'top: -10px !important',
      'right: 8px !important',
      'z-index: 99 !important',
      'background: ' + (isVisible ? '#064e3b' : '#7f1d1d') + ' !important',
      'border: 1.5px solid ' + (isVisible ? '#10b981' : '#ef4444') + ' !important',
      'color: ' + (isVisible ? '#34d399' : '#fca5a5') + ' !important',
      'font-family: ui-monospace, SFMono-Regular, system-ui, sans-serif !important',
      'font-size: 10px !important',
      'font-weight: 800 !important',
      'padding: 2px 7px !important',
      'border-radius: 9999px !important',
      'box-shadow: 0 3px 10px rgba(0, 0, 0, 0.75) !important',
      'cursor: pointer !important',
      'display: inline-flex !important',
      'visibility: visible !important',
      'opacity: 1 !important',
      'align-items: center !important',
      'gap: 3px !important',
      'user-select: none !important',
      'line-height: 1 !important',
      'white-space: nowrap !important'
    ].join(';');

    parentEl.style.setProperty('overflow', 'visible', 'important');
    if (window.getComputedStyle(parentEl).position === 'static') {
      parentEl.style.setProperty('position', 'relative', 'important');
    }
  }

  // ==============================================================================
  // 3. STRICT SYSTEM SHELL DENYLIST (0% Tampering on System Shell)
  // ==============================================================================
  function isSystemShellElement(el) {
    if (!el || el.nodeType !== 1) return true;
    return !!(
      el.closest('header') ||
      el.closest('nav') ||
      el.closest('#header-user-avatar') ||
      (el.closest('[onclick*="toggleMenuDrawer"]') && el.id !== 'cat-menu-btn') ||
      el.closest('[onclick*="closeFullscreenModule"]') ||
      el.closest('#playStoreInstallBanner') ||
      el.closest('.wallet-card') ||
      el.closest('#sivmeFloatingDock') ||
      el.closest('#sivme-floating-console-dock') ||
      el.classList.contains('acc-arrow') ||
      (el.textContent && el.textContent.indexOf('12 CORE CASHFLOW VERTICALS') !== -1 && !el.closest('#verticalTilesGrid')) ||
      el.tagName === 'HEADER' ||
      el.tagName === 'NAV'
    );
  }

  function auditElement(el, urn, label, isAuth) {
    if (!el || isSystemShellElement(el)) return;
    var core = getCore();
    if (typeof isAuth === 'undefined') isAuth = core.isConsoleAuthorized();
    el.setAttribute('data-sov-urn', urn);
    el.setAttribute('data-sov-label', label || '');
    var isVis = core.getUrnVisibility(urn);

    if (!isAuth) {
      if (!isVis) {
        el.classList.add('sivme-public-hidden');
        el.style.setProperty('display', 'none', 'important');
      } else {
        el.classList.remove('sivme-public-hidden');
        el.style.removeProperty('display');
      }
      var oldB = el.querySelector(':scope > .sivme-notch-pill, :scope > .sivme-inline-badge');
      if (oldB) oldB.remove();
      el.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
    } else {
      el.classList.remove('sivme-public-hidden');
      el.classList.add('sivme-badge-anchor');
      if (!isVis) {
        el.classList.remove('sivme-ghost-live');
        el.classList.add('sivme-ghost-dormant');
      } else {
        el.classList.remove('sivme-ghost-dormant');
        el.classList.add('sivme-ghost-live');
      }
      mountInlineBadge(el, urn, isVis, label);

      if (el.getAttribute('data-sivme-tap-bound') !== 'true') {
        el.setAttribute('data-sivme-tap-bound', 'true');

        el.addEventListener('click', function (e) {
          if (!core.isConsoleAuthorized()) return;
          if (e.target.closest('.sivme-notch-pill, .sivme-inline-badge')) return;

          var curVis = core.getUrnVisibility(urn);
          if (!curVis) {
            if (e.cancelable) e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            core.setUrnVisibility(urn, true, label);
            applyInSituAudit();
            return;
          }

          if (e.target.tagName === 'INPUT' || (el.classList.contains('sivme-cash-atomic-card') && e.target.closest('button, a, div[onclick]'))) {
            return;
          }

          if (el.classList.contains('sivme-btn-pill') || el.classList.contains('sivme-vertical-card') || el.classList.contains('sivme-catalog-card')) {
            if (urn === 'rm:cat:16') return;
            if (e.cancelable) e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            core.setUrnVisibility(urn, false, label);
            applyInSituAudit();
          }
        }, false);
      }
    }
  }

  // ==============================================================================
  // 4. UNIVERSAL AUTO-SCANNER
  // ==============================================================================
  function autoScanBusinessElements(isAuth) {
    var core = getCore();

    // 1. RM World Directory Button
    var dirBtn = document.getElementById('cat-menu-btn');
    if (dirBtn) {
      dirBtn.classList.add('sivme-btn-pill');
      auditElement(dirBtn, 'rm:elem:dir-menu-btn', 'RM World Directory', isAuth);
    }

    // 2. Global Search Box
    var searchBox = document.querySelector('input[placeholder*="खोजें"], input[placeholder*="search"]');
    if (searchBox && searchBox.parentElement) {
      var sParent = searchBox.parentElement;
      sParent.classList.add('sivme-search-container');
      auditElement(sParent, 'rm:elem:home-search', 'ग्लोबल खोज बार', isAuth);
    }

    // 3. Home Dashboard 12 Core Cashflow Verticals
    var vertCards = document.querySelectorAll('#verticalTilesGrid > div');
    vertCards.forEach(function (card) {
      var numSpan = card.querySelector('span.font-mono');
      var num = numSpan ? core.cleanText(numSpan).replace('.', '').trim() : '';
      if (!num) {
        var clickAttr = card.getAttribute('onclick') || '';
        var match = clickAttr.match(/['"]c?([0-9]{2})['"]/);
        if (match) num = match[1];
      }
      if (num) {
        var urn = 'rm:cat:' + (num.length === 1 ? '0' + num : num);
        var labelEl = card.querySelector('div.font-bold') || card;
        var label = core.cleanText(labelEl) || ('Vertical ' + num);
        card.classList.add('sivme-vertical-card');
        auditElement(card, urn, label, isAuth);
      }
    });

    // 4. 16-3 Inner Rental Search Dynamic Filters
    URN_SELECTORS.forEach(function (def) {
      try {
        var nodes = document.querySelectorAll(def.selector);
        nodes.forEach(function (node) {
          var targetNode = node;
          if (['INPUT', 'SELECT'].indexOf(node.tagName) !== -1 && node.parentElement) {
            targetNode = node.parentElement;
          }
          if (!isSystemShellElement(targetNode)) {
            auditElement(targetNode, def.urn, def.label, isAuth);
          }
        });
      } catch (_) {}
    });
  }

  // ==============================================================================
  // 5. CATEGORY 16 ACCORDION CONTROLLER & SUB-CARDS
  // ==============================================================================
  function auditCategory16Accordion(isAuth) {
    var core = getCore();
    var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
    if (!c16) return;

    var c16Header = c16.querySelector(':scope > div:first-child');
    var isCat16Vis = core.getUrnVisibility('rm:cat:16');

    if (!isAuth) {
      if (!isCat16Vis) {
        c16.classList.add('sivme-public-hidden');
        c16.style.setProperty('display', 'none', 'important');
      } else {
        c16.classList.remove('sivme-public-hidden');
        c16.style.removeProperty('display');
      }
      if (c16Header) {
        var oldB = c16Header.querySelector(':scope > .sivme-notch-pill, :scope > .sivme-inline-badge');
        if (oldB) oldB.remove();
        c16Header.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
      }
    } else {
      c16.classList.remove('sivme-public-hidden');
      c16.style.removeProperty('display');

      if (c16Header) {
        c16Header.classList.add('sivme-badge-anchor');
        if (!isCat16Vis) {
          c16Header.classList.add('sivme-ghost-dormant');
          c16Header.classList.remove('sivme-ghost-live');
        } else {
          c16Header.classList.remove('sivme-ghost-dormant');
          c16Header.classList.add('sivme-ghost-live');
        }
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

            if (isHidden) {
              sub.classList.remove('hidden');
              sub.style.display = 'block';
              if (chevron) chevron.textContent = '▲';
            } else {
              sub.style.display = 'none';
              sub.classList.add('hidden');
              if (chevron) chevron.textContent = '▼';
            }
          }, true);
        }
      }
    }
  }

  function auditSub16Cards(isAuth) {
    var core = getCore();
    var subCards = document.querySelectorAll('#sub-c16 > div');
    subCards.forEach(function (subCard, idx) {
      var subUrn = 'rm:cat:16:sub:16-' + (idx + 1);
      var subLabelEl = subCard.querySelector('.text-xs') || subCard;
      var subLabel = subLabelEl ? subLabelEl.textContent.trim() : ('16-' + (idx + 1) + ' सेवा');

      auditElement(subCard, subUrn, subLabel, isAuth);

      if (subCard.getAttribute('data-sivme-sub-bound') !== 'true') {
        subCard.setAttribute('data-sivme-sub-bound', 'true');
        subCard.addEventListener('click', function (e) {
          if (!core.isConsoleAuthorized()) return;
          var isDormant = subCard.classList.contains('sivme-ghost-dormant');
          var isBadgeClick = !!e.target.closest('.sivme-notch-pill, .sivme-inline-badge');

          if (isDormant || isBadgeClick) {
            if (e.cancelable) e.preventDefault();
            e.stopPropagation();

            var now = Date.now();
            if (now - (lastUrnActionTimes[subUrn] || 0) < 550) return;
            lastUrnActionTimes[subUrn] = now;

            var curVis = core.getUrnVisibility(subUrn);
            var targetVis = isDormant ? true : !curVis;
            core.setUrnVisibility(subUrn, targetVis, subLabel);

            if (targetVis) {
              core.setUrnVisibility('rm:cat:16', true, 'घर व मकान');
            }
            applyInSituAudit();
            return;
          }

          var openBtn = subCard.querySelector('button, a, [onclick]');
          if (openBtn && e.target !== openBtn && !openBtn.contains(e.target)) {
            openBtn.click();
          }
        }, false);
      }
    });
  }

  // ==============================================================================
  // 6. MAIN AUDIT ENGINE DISPATCHER
  // ==============================================================================
  function applyInSituAudit() {
    if (isAuditing) return;
    isAuditing = true;

    try {
      var core = getCore();
      core.enforceZELTemplateRendering();
      var isAuth = core.isConsoleAuthorized();

      var openModals = document.querySelectorAll('#categoryModal, #rentalLedgerModal, #rentalSearchModal, [id*="Modal"]');
      openModals.forEach(function (m) {
        if (m.classList.contains('hidden') || m.style.display === 'none') return;
        m.style.setProperty('height', '100dvh', 'important');
        m.style.setProperty('max-height', '100dvh', 'important');
      });

      auditCategory16Accordion(isAuth);
      auditSub16Cards(isAuth);

      var registeredAdapters = core.getAdapters ? core.getAdapters() : {};
      Object.keys(registeredAdapters).forEach(function (key) {
        try { registeredAdapters[key](); } catch (_) {}
      });

      autoScanBusinessElements(isAuth);

      var legacyDock = document.getElementById('sivmeFloatingDock');
      if (legacyDock) legacyDock.remove();
    } finally {
      setTimeout(function () {
        isAuditing = false;
      }, 30);
    }
  }

  // ==============================================================================
  // 7. EVENT LISTENERS & OBSERVER INITIALIZATION
  // ==============================================================================
  document.addEventListener('click', function (e) {
    var badge = e.target.closest('.sivme-notch-pill, .sivme-inline-badge');
    var core = getCore();
    if (!badge || !core.isConsoleAuthorized()) return;

    if (e.cancelable) e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    var urn = badge.getAttribute('data-badge-urn') || badge.getAttribute('data-target-urn');
    var label = badge.getAttribute('data-badge-label') || '';
    var curVis = badge.getAttribute('data-badge-vis') === 'true';
    var nextVis = !curVis;

    if (!urn) return;

    if (urn === 'rm:cat:16') {
      ['rm:cat:16:sub:16-1', 'rm:cat:16:sub:16-2', 'rm:cat:16:sub:16-3'].forEach(function (su) {
        core.setUrnVisibility(su, nextVis);
      });
      core.setUrnVisibility(urn, nextVis, label);
    } else {
      core.setUrnVisibility(urn, nextVis, label);
    }

    applyInSituAudit();
  }, true);

  window.RM_SIVME = window.RM_SIVME || {};
  window.RM_SIVME.mountInlineBadge = mountInlineBadge;
  window.RM_SIVME.auditElement = auditElement;
  window.RM_SIVME.applyInSituAudit = applyInSituAudit;

  // Initial Execution
  applyInSituAudit();

  document.addEventListener('click', function () { setTimeout(applyInSituAudit, 50); }, false);
  window.addEventListener('storage', applyInSituAudit);
  window.addEventListener('rm:sov:visibility-changed', applyInSituAudit);

  var obs = new MutationObserver(function () {
    if (!isAuditing) applyInSituAudit();
  });
  obs.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
})();
