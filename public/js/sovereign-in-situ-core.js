/**
 * RISE MITRA — SOVEREIGN IN-SITU CORE KERNEL (MODULE 1 OF 2)
 * MODULE        : Core State, Auth Guard, Registry Bridge & Adapters Loader
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/sovereign-in-situ-core.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var SESSION_KEY = 'rm_sov_in_situ_session';
  var REGISTRY_STORAGE_KEY = 'rm_sovereign_visibility_registry_v1';
  var DEV_AUTO_KEY = 'rm_sov_automation_mode_active';
  var adapters = {};

  // ==============================================================================
  // 1. ZEL TEMPLATE SHIELD
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
    window.addEventListener('rm:sov:visibility-changed', enforceZELTemplateRendering);
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
  // 3. REGISTRY BRIDGE (Zero Recursive Cascades)
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
  // 4. HIDDEN COUNTER & TEXT SANITIZER
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
  // 5. STYLESHEET INJECTOR (2.5D Tactile Elevation & Explicit Notch Display)
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
    style.textContent = [
      '.sivme-badge-anchor { position: relative !important; overflow: visible !important; }',
      '.sivme-ghost-dormant { outline: 2px dashed #ef4444 !important; outline-offset: 3px !important; opacity: 0.45 !important; }',
      '.sivme-ghost-live { outline: 2px dashed #10b981 !important; outline-offset: 3px !important; opacity: 1 !important; }',
      '.sivme-public-hidden { display: none !important; }',
      '.sivme-notch-pill { display: inline-flex !important; visibility: visible !important; opacity: 1 !important; z-index: 99 !important; }',
      '#verticalTilesGrid > div { position: relative !important; overflow: visible !important; }',
      '#cat-menu-btn { position: relative !important; overflow: visible !important; }'
    ].join('\n');
    document.head.appendChild(style);
  }

  // ==============================================================================
  // 6. MICRO-MODULAR ADAPTER AUTOLOADER (8 Complete Modules)
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
  // 7. EXPORT CORE TO GLOBAL WINDOW
  // ==============================================================================
  window.RM_SIVME = window.RM_SIVME || {};
  window.RM_SIVME.isConsoleAuthorized = isConsoleAuthorized;
  window.RM_SIVME.getUrnVisibility = getUrnVisibility;
  window.RM_SIVME.setUrnVisibility = setUrnVisibility;
  window.RM_SIVME.getHiddenCount = getHiddenCount;
  window.RM_SIVME.cleanText = cleanText;
  window.RM_SIVME.enforceZELTemplateRendering = enforceZELTemplateRendering;
  window.RM_SIVME.injectStyles = injectStyles;
  window.RM_SIVME.loadAdapters = loadAdapters;
  window.RM_SIVME.registerAdapter = function (id, fn) {
    adapters[id] = fn;
    if (typeof window.RM_SIVME.applyInSituAudit === 'function') {
      setTimeout(window.RM_SIVME.applyInSituAudit, 20);
    }
  };
  window.RM_SIVME.getAdapters = function () { return adapters; };

  enforceZELTemplateRendering();
  injectStyles();
})();
