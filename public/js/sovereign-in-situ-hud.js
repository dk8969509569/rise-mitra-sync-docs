/**
 * RISE MITRA — SOVEREIGN IN-SITU VISUAL MANAGEMENT ENGINE (SIVME)
 * MODULE        : Surface-A Floating HUD & Universal Auto-Scanner (Kernel v3.8)
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/sovereign-in-situ-hud.js
 */

(function () {
  'use strict';

  var SESSION_KEY = 'rm_sov_in_situ_session';
  var REGISTRY_STORAGE_KEY = 'rm_sovereign_visibility_registry_v1';
  var DEV_AUTO_KEY = 'rm_sov_automation_mode_active';
  var isAuditing = false;
  var auditTimer = null;
  var adapters = {};
  var lastUrnActionTimes = {};
  var lastAccordionToggleTime = 0;

  // ==============================================================================
  // 1. ZEL TEMPLATE SHIELD: Ensure legacy modules always render complete DOM
  // ==============================================================================
  function enforceZELTemplateRendering() {
    try {
      var configKeys = [
        'rm_local_acct_owner_config',
        'rm_local_acctdefault_owner_config',
        'rm_owner_filter_config_v1'
      ];
      configKeys.forEach(function (k) {
        var raw = localStorage.getItem(k);
        var cfg = raw ? JSON.parse(raw) : { filterVisibility: {} };
        if (!cfg.filterVisibility) cfg.filterVisibility = {};
        cfg.filterVisibility.smartOmnibox = true;
        cfg.filterVisibility.showState = true;
        cfg.filterVisibility.showDistrict = true;
        cfg.filterVisibility.showLocality = true;
        cfg.filterVisibility.budgetSlider = true;
        cfg.filterVisibility.subMeterOnly = true;
        localStorage.setItem(k, JSON.stringify(cfg));
      });
    } catch (_) {}
  }

  if (typeof window !== 'undefined') {
    enforceZELTemplateRendering();
    window.addEventListener('rm:sov:visibility-changed', function () {
      enforceZELTemplateRendering();
    });
  }

  // ==============================================================================
  // 2. CONSOLE AUTHORIZATION GUARD
  // ==============================================================================
  function isConsoleAuthorized() {
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get('sov_mode') === 'in_situ' || params.get('dev_auto') === '1') {
        sessionStorage.setItem(SESSION_KEY, 'SOV_ACTIVE_2026');
        localStorage.setItem(SESSION_KEY, 'SOV_ACTIVE_2026');
        localStorage.setItem(DEV_AUTO_KEY, 'true');
      }

      if (localStorage.getItem(DEV_AUTO_KEY) === 'true') {
        sessionStorage.setItem(SESSION_KEY, 'SOV_ACTIVE_2026');
        return true;
      }

      var sToken = sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY);
      if (sToken === 'SOV_ACTIVE_2026') return true;

      var regRaw = localStorage.getItem(REGISTRY_STORAGE_KEY);
      if (regRaw) {
        var reg = JSON.parse(regRaw);
        if (reg && reg.activeMode === 'in_situ_console') return true;
      }
      return false;
    } catch (_) {
      return false;
    }
  }

  // ==============================================================================
  // 3. REGISTRY BRIDGE (Strict Single-Item Setter - Zero Recursive Cascades)
  // ==============================================================================
  function getRegistry() {
    try {
      var raw = localStorage.getItem(REGISTRY_STORAGE_KEY);
      return raw ? JSON.parse(raw) : { activeMode: 'in_situ_console', items: {} };
    } catch (_) {
      return { activeMode: 'in_situ_console', items: {} };
    }
  }

  function getUrnVisibility(urn) {
    if (urn === 'rm:cat:16') {
      var s1 = getUrnVisibility('rm:cat:16:sub:16-1');
      var s2 = getUrnVisibility('rm:cat:16:sub:16-2');
      var s3 = getUrnVisibility('rm:cat:16:sub:16-3');
      return (s1 && s2 && s3);
    }

    if (window.RM_SovereignRegistry && typeof window.RM_SovereignRegistry.isVisible === 'function') {
      return window.RM_SovereignRegistry.isVisible(urn);
    }
    var reg = getRegistry();
    if (reg && reg.items && reg.items[urn] !== undefined && reg.items[urn].visible !== undefined) {
      return !!reg.items[urn].visible;
    }
    return true;
  }

  function setUrnVisibility(urn, nextVis, label) {
    if (window.RM_SovereignRegistry && typeof window.RM_SovereignRegistry.toggleVisibility === 'function') {
      try {
        window.RM_SovereignRegistry.toggleVisibility(urn, nextVis, label);
      } catch (_) {}
    }
    try {
      var reg = getRegistry();
      if (!reg.items) reg.items = {};
      reg.items[urn] = { visible: nextVis, label: label, updatedAt: Date.now() };
      localStorage.setItem(REGISTRY_STORAGE_KEY, JSON.stringify(reg));
    } catch (_) {}

    if (window.RM_SovereignRegistry) {
      try {
        if (typeof window.RM_SovereignRegistry.setVisibility === 'function') {
          window.RM_SovereignRegistry.setVisibility(urn, nextVis, label);
        } else if (typeof window.RM_SovereignRegistry.set === 'function') {
          window.RM_SovereignRegistry.set(urn, nextVis);
        }
      } catch (_) {}
    }
  }

  // ==============================================================================
  // 4. BULLETPROOF RECONCILED HIDDEN COUNTER & CLEAN TEXT SANITIZER
  // ==============================================================================
  function getHiddenCount() {
    var hiddenUrns = {};
    var reg = getRegistry();
    if (reg && reg.items) {
      Object.keys(reg.items).forEach(function (k) {
        if (k === 'rm:cat:16') return;
        if (reg.items[k] && reg.items[k].visible === false) {
          hiddenUrns[k] = true;
        } else if (reg.items[k] && reg.items[k].visible === true) {
          delete hiddenUrns[k];
        }
      });
    }

    if (!getUrnVisibility('rm:cat:16')) {
      hiddenUrns['rm:cat:16'] = true;
    } else {
      delete hiddenUrns['rm:cat:16'];
    }

    return Object.keys(hiddenUrns).length;
  }

  function cleanText(el) {
    if (!el) return '';
    var clone = el.cloneNode(true);
    var badges = clone.querySelectorAll('.sivme-inline-badge, .sivme-live-notch, .sivme-notch-pill');
    badges.forEach(function (b) { b.remove(); });
    return (clone.textContent || '').trim();
  }

  // ==============================================================================
  // 5. STYLESHEET INJECTOR (2.5D Tactile Elevation & Modal Z-Index Hierarchy)
  // ==============================================================================
  function injectStyles() {
    if (document.getElementById('sivme-core-stylesheet')) return;
    var link = document.createElement('link');
    link.id = 'sivme-core-stylesheet';
    link.rel = 'stylesheet';
    link.href = '/css/sivme-hud.css?v=20261006_v25';
    document.head.appendChild(link);

    if (document.getElementById('sivme-core-styles')) return;
    var style = document.createElement('style');
    style.id = 'sivme-core-styles';
    style.textContent = `
      .sivme-badge-anchor {
        position: relative !important;
        isolation: isolate !important;
      }
      .sivme-ghost-dormant {
        outline: 2px dashed #ef4444 !important;
        outline-offset: 3px !important;
        opacity: 0.45 !important;
      }
      .sivme-ghost-live {
        outline: 2px dashed #10b981 !important;
        outline-offset: 3px !important;
        opacity: 1 !important;
      }
      .sivme-public-hidden {
        display: none !important;
      }
      .sivme-inline-badge {
        position: absolute;
        top: -10px !important;
        right: 12px !important;
        z-index: 50 !important;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 10px !important;
        font-weight: 800;
        padding: 2.5px 8px !important;
        border-radius: 9999px;
        cursor: pointer;
        display: inline-flex !important;
        align-items: center !important;
        gap: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.85);
        user-select: none !important;
        white-space: nowrap !important;
      }
      .sivme-badge-live {
        background: #064e3b !important;
        color: #6ee7b7 !important;
        border: 1.5px solid #10b981 !important;
      }
      .sivme-badge-dormant {
        background: #7f1d1d !important;
        color: #fca5a5 !important;
        border: 1.5px solid #ef4444 !important;
      }
      /* Protect modals Z-Index */
      #categoryModal { z-index: 99990 !important; }
      div[id*="Modal"]:not(#categoryModal), div[id*="modal"]:not(#categoryModal), #rm-fullscreen-view {
        z-index: 100001 !important;
      }
    `;
    document.head.appendChild(style);
  }

  // ==============================================================================
  // 6. MOUNT INLINE TOGGLE BADGE
  // ==============================================================================
  function mountInlineBadge(parentEl, urn, isVisible, label) {
    var badge = parentEl.querySelector(':scope > .sivme-inline-badge');
    var targetClass = isVisible ? 'sivme-inline-badge sivme-badge-live' : 'sivme-inline-badge sivme-badge-dormant';
    var targetHtml = isVisible ? '<span>👁️</span><span>Live</span>' : '<span>🚫</span><span>Hidden</span>';

    if (!badge) {
      badge = document.createElement('div');
      parentEl.appendChild(badge);
    }

    badge.className = targetClass;
    if (badge.innerHTML !== targetHtml) badge.innerHTML = targetHtml;
    badge.setAttribute('data-badge-urn', urn);
    badge.setAttribute('data-badge-label', label || '');
    badge.setAttribute('data-badge-vis', String(isVisible));
  }

  // ==============================================================================
  // 7. STRICT SYSTEM SHELL DENYLIST (0% Tampering on System Controls)
  // ==============================================================================
  function isSystemShellElement(el) {
    if (!el || el.nodeType !== 1) return true;
    return !!(
      el.closest('header') ||
      el.closest('nav') ||
      el.closest('#header-user-avatar') ||
      el.closest('[onclick*="toggleMenuDrawer"]') ||
      el.closest('[onclick*="closeFullscreenModule"]') ||
      el.closest('#playStoreInstallBanner') ||
      el.closest('.wallet-card') ||
      el.closest('#sivmeFloatingDock') ||
      el.closest('#sivme-floating-console-dock') ||
      el.classList.contains('acc-arrow') ||
      el.id === 'cat-menu-btn' ||
      el.tagName === 'HEADER' ||
      el.tagName === 'NAV'
    );
  }

  function auditElement(el, urn, label, isAuth) {
    if (!el || isSystemShellElement(el)) return;
    if (typeof isAuth === 'undefined') isAuth = isConsoleAuthorized();
    el.setAttribute('data-sov-urn', urn);
    el.setAttribute('data-sov-label', label || '');
    var isVis = getUrnVisibility(urn);

    if (!isAuth) {
      if (!isVis) {
        el.classList.add('sivme-public-hidden');
        el.style.setProperty('display', 'none', 'important');
      } else {
        el.classList.remove('sivme-public-hidden');
        el.style.removeProperty('display');
      }
      var oldB = el.querySelector(':scope > .sivme-inline-badge');
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
          if (!isConsoleAuthorized()) return;
          if (e.target.closest('.sivme-inline-badge')) return;

          var curVis = getUrnVisibility(urn);

          if (!curVis) {
            if (e.cancelable) e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            setUrnVisibility(urn, true, label);
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
            setUrnVisibility(urn, false, label);
            applyInSituAudit();
          }
        }, false);
      }
    }
  }

  // ==============================================================================
  // 8. UNIVERSAL AUTO-SCANNER (12 Core Verticals & 16-3 Dynamic Filters)
  // ==============================================================================
  function autoScanBusinessElements(isAuth) {
    // 1. Home Dashboard: 12 Core Cashflow Verticals
    var vertCards = document.querySelectorAll('#verticalTilesGrid > div, [data-vertical-id]');
    vertCards.forEach(function (card) {
      if (isSystemShellElement(card)) return;
      var numSpan = card.querySelector('span.font-mono');
      var num = numSpan ? cleanText(numSpan).replace('.', '').trim() : '';
      if (!num) {
        var clickAttr = card.getAttribute('onclick') || '';
        var match = clickAttr.match(/['"]c?([0-9]{2})['"]/);
        if (match) num = match[1];
      }
      if (num) {
        var urn = 'rm:cat:' + (num.length === 1 ? '0' + num : num);
        var labelEl = card.querySelector('div.font-bold') || card;
        var label = cleanText(labelEl) || ('Vertical ' + num);
        card.classList.add('sivme-vertical-card');
        auditElement(card, urn, label, isAuth);
      }
    });

    // 2. 16-3 Inner Rental Search Dynamic Filters
    var filterSelectors = [
      { sel: '#rm-search-locality', urn: 'rm:cat:16:sub:16-3:elem:smart_omnibox', label: 'स्मार्ट खोज' },
      { sel: '#rm-cat16-search-state', urn: 'rm:cat:16:sub:16-3:elem:state_filter', label: 'राज्य फ़िल्टर' },
      { sel: '#rm-cat16-search-district', urn: 'rm:cat:16:sub:16-3:elem:district_filter', label: 'ज़िला फ़िल्टर' },
      { sel: '#rm-search-budget-slider', urn: 'rm:cat:16:sub:16-3:elem:budget_slider', label: 'बजट स्लाइडर' },
      { sel: '#rm-search-submeter', urn: 'rm:cat:16:sub:16-3:elem:submeter_checkbox', label: 'सब-मीटर फ़िल्टर' }
    ];

    filterSelectors.forEach(function (item) {
      var el = document.querySelector(item.sel);
      if (el && !isSystemShellElement(el)) {
        var targetContainer = el.parentElement || el;
        auditElement(targetContainer, item.urn, item.label, isAuth);
      }
    });
  }

  // ==============================================================================
  // 9. PURE KERNEL AUDIT ENGINE & CATEGORY 16 ACCORDION
  // ==============================================================================
  function applyInSituAudit() {
    if (isAuditing) return;
    isAuditing = true;

    try {
      enforceZELTemplateRendering();
      var isAuth = isConsoleAuthorized();

      // Dynamic Viewport Height for Open Modals
      var openModals = document.querySelectorAll('#categoryModal, #rentalLedgerModal, #rentalSearchModal, [id*="Modal"]');
      openModals.forEach(function (m) {
        if (m.classList.contains('hidden') || m.style.display === 'none') return;
        m.style.setProperty('height', '100dvh', 'important');
        m.style.setProperty('max-height', '100dvh', 'important');
      });

      // Category 16 Header Audit
      var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
      if (c16) {
        var c16Header = c16.querySelector(':scope > div:first-child');
        var isCat16Vis = getUrnVisibility('rm:cat:16');

        if (!isAuth) {
          if (!isCat16Vis) {
            c16.classList.add('sivme-public-hidden');
            c16.style.setProperty('display', 'none', 'important');
          } else {
            c16.classList.remove('sivme-public-hidden');
            c16.style.removeProperty('display');
          }
          if (c16Header) {
            var oldB = c16Header.querySelector(':scope > .sivme-inline-badge');
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
          }
        }
      }

      // Execute All 8 Registered Micro-Adapters
      Object.keys(adapters).forEach(function (key) {
        try { adapters[key](); } catch (_) {}
      });

      // Run Universal Auto-Scanner for 12 Verticals & Filters
      autoScanBusinessElements(isAuth);

      // Clean Duplicate HUD Dock
      updateFloatingDock(isAuth, getHiddenCount());
    } finally {
      setTimeout(function () { isAuditing = false; }, 30);
    }
  }

  // ==============================================================================
  // 10. DEDUPLICATED FLOATING DOCK (Eliminates Duplicate Bottom Bar Overlap)
  // ==============================================================================
  function updateFloatingDock(isAuth, hiddenCount) {
    var legacyDock = document.getElementById('sivmeFloatingDock');
    if (legacyDock) {
      legacyDock.remove();
    }
    // Master Dock is rendered and synchronized by sovereign-in-situ-registry.js
  }

  // ==============================================================================
  // 11. MICRO-MODULAR ADAPTER AUTOLOADER (8 Complete Modules)
  // ==============================================================================
  function loadAdapters() {
    var basePath = '/js/sivme-adapters/';
    var curr = document.currentScript;
    if (curr && curr.src) {
      try {
        var u = new URL(curr.src);
        basePath = u.pathname.substring(0, u.pathname.lastIndexOf('/') + 1) + 'sivme-adapters/';
      } catch (_) {}
    }

    var scripts = [
      basePath + 'home-widgets.js',
      basePath + 'core-verticals-9.js',
      basePath + 'catalog-50.js',
      basePath + 'cat-16.js',
      basePath + 'sub-16-1.js',
      basePath + 'sub-16-2.js',
      basePath + 'sub-16-3.js',
      basePath + 'user-pinned-shortcuts.js'
    ];

    scripts.forEach(function (src) {
      if (!document.querySelector('script[src*="' + src + '"]')) {
        var s = document.createElement('script');
        s.src = src + '?v=20261006_v8';
        s.async = true;
        document.head.appendChild(s);
      }
    });
  }

  // ==============================================================================
  // 12. BULLETPROOF GLOBAL BADGE CAPTURE LISTENER
  // ==============================================================================
  document.addEventListener('click', function (e) {
    var badge = e.target.closest('.sivme-inline-badge');
    if (!badge || !isConsoleAuthorized()) return;

    if (e.cancelable) e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    var urn = badge.getAttribute('data-badge-urn');
    var label = badge.getAttribute('data-badge-label') || '';
    var curVis = badge.getAttribute('data-badge-vis') === 'true';
    var nextVis = !curVis;

    if (!urn) return;

    if (urn === 'rm:cat:16') {
      ['rm:cat:16:sub:16-1', 'rm:cat:16:sub:16-2', 'rm:cat:16:sub:16-3'].forEach(function (su) {
        setUrnVisibility(su, nextVis);
      });
      setUrnVisibility(urn, nextVis, label);
    } else {
      setUrnVisibility(urn, nextVis, label);
    }

    applyInSituAudit();
  }, true);

  // ==============================================================================
  // 13. GLOBAL SIVME API & DYNAMIC OBSERVER
  // ==============================================================================
  window.RM_SIVME = {
    isConsoleAuthorized: isConsoleAuthorized,
    getUrnVisibility: getUrnVisibility,
    setUrnVisibility: setUrnVisibility,
    mountInlineBadge: mountInlineBadge,
    auditElement: auditElement,
    applyInSituAudit: applyInSituAudit,
    registerAdapter: function (id, fn) {
      adapters[id] = fn;
      setTimeout(applyInSituAudit, 20);
    }
  };

  // INITIALIZE
  enforceZELTemplateRendering();
  injectStyles();
  loadAdapters();
  applyInSituAudit();

  document.addEventListener('click', function () { setTimeout(applyInSituAudit, 50); }, false);
  window.addEventListener('storage', applyInSituAudit);
  window.addEventListener('rm:sov:visibility-changed', applyInSituAudit);

  var obs = new MutationObserver(function () {
    if (!isAuditing) applyInSituAudit();
  });
  obs.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
})();
