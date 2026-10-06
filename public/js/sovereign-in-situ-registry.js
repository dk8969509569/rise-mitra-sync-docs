/**
 * RISE MITRA — SOVEREIGN IN-SITU VISUAL MANAGEMENT ENGINE (SIVME)
 * MODULE        : Universal Visibility Registry & Cascading Inheritance Engine
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-SOV-VISUAL-IN-SITU-20261003 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/sovereign-in-situ-registry.js
 * DUAL-FOLDER REFERENCES:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    var lib = factory();
    root.RM_SovereignRegistry = lib;
    root.RiseMitraSIVME = lib;
    root.RM_SIVME = lib; // Phase 2 Global Alias
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var REGISTRY_STORAGE_KEY = 'rm_sovereign_visibility_registry_v1';
  var SESSION_AUTH_KEY = 'rm_sov_in_situ_session';
  var OWNER_CONFIG_STORAGE_KEY = 'rm_local_acct_owner_config';
  var REGISTRY_VERSION = '2.0.0';

  var DEFAULT_REGISTRY = {
    version: REGISTRY_VERSION,
    lastUpdated: Date.now(),
    activeMode: 'in_situ_console', // Default active for verified Owner in-situ testing
    registry: {
      // Category 16 Baseline Defaults
      'rm:cat:16': { hidden: false, label: 'House & Home (आवास व मिस्त्री)' },
      'rm:cat:16:sub:16-1': { hidden: false, label: '16-1. मिस्त्री व गृह मरम्मत' },
      'rm:cat:16:sub:16-2': { hidden: false, label: '16-2. किराया बहीखाता' },
      'rm:cat:16:sub:16-2:elem:pincode_box': { hidden: false, label: 'पिनकोड इनपुट बॉक्स' },
      'rm:cat:16:sub:16-2:elem:btn_add_slip': { hidden: false, label: 'रसीद बनाएं बटन' },
      'rm:cat:16:sub:16-3': { hidden: false, label: '16-3. कमरा व फ्लैट खोज' },
      'rm:cat:16:sub:16-3:elem:state_filter': { hidden: false, label: 'राज्य फ़िल्टर (State Filter)' },
      'rm:cat:16:sub:16-3:elem:district_filter': { hidden: false, label: 'ज़िला फ़िल्टर (District Filter)' },
      'rm:cat:16:sub:16-3:elem:smart_omnibox': { hidden: false, label: 'स्मार्ट खोज (Omnibox Search)' },
      'rm:cat:16:sub:16-3:elem:budget_slider': { hidden: false, label: 'मासिक किराया बजट (Budget Slider)' },
      'rm:cat:16:sub:16-3:elem:submeter_checkbox': { hidden: false, label: 'केवल सब-मीटर आवास चेकबॉक्स' },
      'rm:cat:16:sub:16-3:elem:country_filter': { hidden: true, label: 'देश फ़िल्टर (Country Filter)' }
    },
    metrics: {
      totalTracked: 11,
      totalHidden: 1
    }
  };

  var adapters = {};
  var elementRegistry = {};

  /**
   * Safe localStorage Reader
   */
  function loadRegistry() {
    try {
      var raw = localStorage.getItem(REGISTRY_STORAGE_KEY);
      if (!raw) {
        saveRegistry(DEFAULT_REGISTRY);
        return JSON.parse(JSON.stringify(DEFAULT_REGISTRY));
      }
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || !parsed.registry) {
        saveRegistry(DEFAULT_REGISTRY);
        return JSON.parse(JSON.stringify(DEFAULT_REGISTRY));
      }
      return parsed;
    } catch (err) {
      console.warn('[RM-SIVME] Registry storage read failed, using baseline:', err);
      return JSON.parse(JSON.stringify(DEFAULT_REGISTRY));
    }
  }

  /**
   * Safe localStorage Writer
   */
  function saveRegistry(data) {
    try {
      if (!data || typeof data !== 'object') return false;
      data.lastUpdated = Date.now();
      
      // Update Metrics
      var keys = Object.keys(data.registry || {});
      var hiddenCount = 0;
      keys.forEach(function (k) {
        if (data.registry[k] && data.registry[k].hidden === true) {
          hiddenCount++;
        }
      });
      data.metrics = {
        totalTracked: keys.length,
        totalHidden: hiddenCount
      };

      var jsonStr = JSON.stringify(data);
      localStorage.setItem(REGISTRY_STORAGE_KEY, jsonStr);

      // Surface B compatibility sync bridge
      syncToLegacyOwnerConfig(data);

      // Dispatch global runtime event for immediate DOM updates
      if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
        var event = new CustomEvent('rm:sov:visibility-changed', { detail: data });
        window.dispatchEvent(event);
      }

      // Apply In-Situ visual inspection outline & notches
      applyInSituVisualInspection();
      return true;
    } catch (err) {
      console.error('[RM-SIVME] Registry storage write failed:', err);
      return false;
    }
  }

  /**
   * Surface B Owner Config Bridge
   */
  function syncToLegacyOwnerConfig(regData) {
    try {
      var reg = (regData && regData.registry) ? regData.registry : {};
      var cfgRaw = localStorage.getItem(OWNER_CONFIG_STORAGE_KEY);
      var ownerCfg = cfgRaw ? JSON.parse(cfgRaw) : { filterVisibility: {} };
      if (!ownerCfg.filterVisibility) ownerCfg.filterVisibility = {};

      if (reg['rm:cat:16:sub:16-3:elem:state_filter']) {
        ownerCfg.filterVisibility.showState = !reg['rm:cat:16:sub:16-3:elem:state_filter'].hidden;
      }
      if (reg['rm:cat:16:sub:16-3:elem:district_filter']) {
        ownerCfg.filterVisibility.showDistrict = !reg['rm:cat:16:sub:16-3:elem:district_filter'].hidden;
      }
      if (reg['rm:cat:16:sub:16-3:elem:smart_omnibox']) {
        ownerCfg.filterVisibility.smartOmnibox = !reg['rm:cat:16:sub:16-3:elem:smart_omnibox'].hidden;
      }
      if (reg['rm:cat:16:sub:16-3:elem:budget_slider']) {
        ownerCfg.filterVisibility.budgetSlider = !reg['rm:cat:16:sub:16-3:elem:budget_slider'].hidden;
      }
      if (reg['rm:cat:16:sub:16-3:elem:submeter_checkbox']) {
        ownerCfg.filterVisibility.subMeterOnly = !reg['rm:cat:16:sub:16-3:elem:submeter_checkbox'].hidden;
      }
      if (reg['rm:cat:16:sub:16-3:elem:country_filter']) {
        ownerCfg.filterVisibility.showCountry = !reg['rm:cat:16:sub:16-3:elem:country_filter'].hidden;
      }

      var serialized = JSON.stringify(ownerCfg);
      localStorage.setItem(OWNER_CONFIG_STORAGE_KEY, serialized);
      localStorage.setItem('rm_local_acctdefault_owner_config', serialized);
      localStorage.setItem('rm_owner_filter_config_v1', serialized);
    } catch (e) {
      console.warn('[RM-SIVME] Legacy sync error:', e);
    }
  }

  /**
   * Parse Parent URN to enforce Cascading Inheritance
   */
  function getParentURNs(urn) {
    if (!urn || typeof urn !== 'string') return [];
    var parts = urn.split(':');
    var parents = [];

    var elemIndex = parts.indexOf('elem');
    if (elemIndex !== -1) {
      parents.push(parts.slice(0, elemIndex).join(':'));
    }

    var subIndex = parts.indexOf('sub');
    if (subIndex !== -1) {
      parents.push(parts.slice(0, subIndex).join(':'));
    }

    return parents;
  }

  /**
   * Determine Visibility (Cascading Hierarchy Aware)
   */
  function isVisible(urn) {
    if (!urn) return true;
    var state = loadRegistry();
    var reg = state.registry || {};

    // 1. Direct Self Check
    if (reg[urn] && reg[urn].hidden === true) {
      return false;
    }

    // 2. Cascading Parent Check
    var parents = getParentURNs(urn);
    for (var i = 0; i < parents.length; i++) {
      var p = parents[i];
      if (reg[p] && reg[p].hidden === true) {
        return false;
      }
    }

    return true;
  }

  /**
   * Toggle Visibility of a specific URN (1-Tap Live/Hidden Switch)
   */
  function toggleVisibility(urn, explicitState, label) {
    if (!urn) return false;
    var state = loadRegistry();
    if (!state.registry) state.registry = {};

    var currentItem = state.registry[urn] || { hidden: false, label: label || urn };
    var newHidden = (explicitState !== undefined) ? !explicitState : !currentItem.hidden;

    state.registry[urn] = {
      hidden: newHidden,
      label: label || currentItem.label || urn,
      updatedAt: Date.now()
    };

    saveRegistry(state);
    return !newHidden;
  }

  /**
   * Sovereign Console Mode Verification
   */
  function isConsoleModeActive() {
    try {
      var reg = loadRegistry();
      var sessionTicket = sessionStorage.getItem(SESSION_AUTH_KEY);
      var localTicket = localStorage.getItem(SESSION_AUTH_KEY);
      return Boolean(localTicket === 'SOV_ACTIVE_2026' || sessionTicket === 'SOV_ACTIVE_2026' || reg.activeMode === 'in_situ_console');
    } catch (_) {
      return false;
    }
  }

  /**
   * Activate or Deactivate In-Situ Console Mode
   */
  function setConsoleMode(active) {
    try {
      var state = loadRegistry();
      state.activeMode = active ? 'in_situ_console' : 'public';
      if (active) {
        localStorage.setItem(SESSION_AUTH_KEY, 'SOV_ACTIVE_2026');
        sessionStorage.setItem(SESSION_AUTH_KEY, 'SOV_ACTIVE_2026');
      } else {
        localStorage.removeItem(SESSION_AUTH_KEY);
        sessionStorage.removeItem(SESSION_AUTH_KEY);
      }
      saveRegistry(state);
      applyInSituVisualInspection();
      return true;
    } catch (err) {
      console.error('[RM-SIVME] Failed to toggle console mode:', err);
      return false;
    }
  }

  /**
   * Emergency Rollback to 100% Public Live
   */
  function resetAllToPublicLive() {
    var state = loadRegistry();
    var keys = Object.keys(state.registry || {});
    keys.forEach(function (k) {
      if (state.registry[k]) {
        state.registry[k].hidden = false;
      }
    });
    state.activeMode = 'public';
    try {
      localStorage.removeItem(SESSION_AUTH_KEY);
      sessionStorage.removeItem(SESSION_AUTH_KEY);
    } catch (_) {}
    saveRegistry(state);
    applyInSituVisualInspection();
    return true;
  }

  /**
   * Dock Floating Badges Cleanly Inside Cards (Categories 01 to 50)
   */
  function renderBadge(parentEl, urn, label, isAuth) {
    if (!parentEl) return;
    if (parentEl.classList.contains('sivme-subcat-card')) return;

    var existing = parentEl.querySelector(':scope > .sivme-inline-badge');
    if (existing) existing.remove();

    var isLive = isVisible(urn);
    var badge = document.createElement('span');
    badge.className = 'sivme-inline-badge';
    badge.setAttribute('data-urn', urn);

    if (isLive) {
      badge.textContent = '👁Live';
      badge.style.cssText = [
        'position: absolute !important',
        'top: 8px !important',
        'right: 76px !important',
        'font-size: 9.5px !important',
        'font-weight: 700 !important',
        'padding: 2px 6px !important',
        'border-radius: 6px !important',
        'background: rgba(6, 78, 59, 0.85) !important',
        'color: #34d399 !important',
        'border: 1px solid rgba(16, 185, 129, 0.45) !important',
        'line-height: 1 !important',
        'z-index: 10 !important',
        'pointer-events: none !important'
      ].join(';');
    } else {
      badge.textContent = '🚫Hidden';
      badge.style.cssText = [
        'position: absolute !important',
        'top: 8px !important',
        'right: 76px !important',
        'font-size: 9.5px !important',
        'font-weight: 700 !important',
        'padding: 2px 6px !important',
        'border-radius: 6px !important',
        'background: rgba(127, 29, 29, 0.85) !important',
        'color: #fca5a5 !important',
        'border: 1px solid rgba(239, 68, 68, 0.45) !important',
        'line-height: 1 !important',
        'z-index: 10 !important',
        'pointer-events: none !important'
      ].join(';');
    }

    if (window.getComputedStyle(parentEl).position === 'static') {
      parentEl.style.position = 'relative';
    }

    parentEl.appendChild(badge);
  }

  /**
   * Audit Element Interface
   */
  function auditElement(el, urn, label, isAuth) {
    if (!el || !urn) return;
    elementRegistry[urn] = { el: el, label: label, isAuth: isAuth };
    renderBadge(el, urn, label, isAuth);
  }

  /**
   * Adapter Registration and Dispatch
   */
  function registerAdapter(name, initFn) {
    adapters[name] = initFn;
    if (typeof initFn === 'function') {
      try { initFn(); } catch (err) { console.error('[RM-SIVME] Adapter Error (' + name + '):', err); }
    }
  }

  function triggerAllAdapters() {
    Object.keys(adapters).forEach(function (name) {
      if (typeof adapters[name] === 'function') {
        try { adapters[name](); } catch (e) {}
      }
    });
  }

  // ==============================================================================
  // INTERACTIVE UPPER-RIGHT NOTCH TOGGLE & DASHED BOUNDARIES ENGINE
  // ==============================================================================

  function getUrnFromElement(el) {
    if (el.getAttribute('data-sivme-urn')) return el.getAttribute('data-sivme-urn');
    var catId = el.getAttribute('data-cat-id');
    if (catId) {
      var num = catId.replace('c', '').replace('g', '');
      return 'rm:cat:' + num;
    }
    var subMatch = el.innerHTML.match(/\[(16-[123])\]/);
    if (subMatch && subMatch[1]) {
      return 'rm:cat:16:sub:' + subMatch[1];
    }
    return null;
  }

  function applyInSituVisualInspection() {
    var active = isConsoleModeActive();

    // 1. Hide legacy redundant HUD if present
    var legacyHud = document.getElementById('sivme-hud') || document.querySelector('.sivme-legacy-hud');
    if (legacyHud) legacyHud.style.display = 'none';

    // 2. Clean any orphan or dangling badges outside subcat cards
    var danglingBadges = document.querySelectorAll('.sivme-subcat-card + .sivme-inline-badge, #sub-c16 > .sivme-inline-badge');
    danglingBadges.forEach(function (b) { b.remove(); });

    // 3. Create or Update Top-Level Floating Control Dock
    var dock = document.getElementById('sivme-floating-console-dock');
    if (!dock) {
      dock = document.createElement('div');
      dock.id = 'sivme-floating-console-dock';
      dock.style.cssText = [
        'position: fixed !important',
        'bottom: 14px !important',
        'left: 50% !important',
        'transform: translateX(-50%) !important',
        'z-index: 99999 !important',
        'background: rgba(15, 23, 42, 0.96) !important',
        'backdrop-filter: blur(14px) !important',
        'border: 1px solid rgba(16, 185, 129, 0.6) !important',
        'box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.85), 0 0 15px rgba(16, 185, 129, 0.3) !important',
        'border-radius: 9999px !important',
        'padding: 6px 14px !important',
        'display: flex !important',
        'align-items: center !important',
        'gap: 10px !important',
        'color: #f8fafc !important',
        'font-family: system-ui, -apple-system, sans-serif !important',
        'font-size: 11px !important',
        'font-weight: 700 !important'
      ].join(';');
      document.body.appendChild(dock);
    }

    var state = loadRegistry();
    var hiddenCount = (state.metrics && state.metrics.totalHidden !== undefined) ? state.metrics.totalHidden : 0;

    dock.style.display = active ? 'flex' : 'none';
    dock.innerHTML = [
      '<span style="display:flex;align-items:center;gap:5px;color:#34d399;">',
      '  <span style="width:7px;height:7px;border-radius:50%;background:#10b981;box-shadow:0 0 8px #10b981;"></span>',
      '  <span>OWNER IN-SITU</span>',
      '</span>',
      '<span style="color:#64748b;">|</span>',
      '<span style="font-size:10px;color:' + (hiddenCount > 0 ? '#f87171' : '#94a3b8') + ';">Hidden: ' + hiddenCount + '</span>',
      '<button id="sivme-toggle-mode-btn" style="background:#1e293b;border:1px solid #475569;color:#e2e8f0;padding:3px 9px;border-radius:9999px;cursor:pointer;font-size:10.5px;">' + (active ? 'Disable' : 'Enable') + '</button>',
      '<button id="sivme-reload-btn" style="background:#065f46;border:1px solid #10b981;color:#a7f3d0;padding:3px 9px;border-radius:9999px;cursor:pointer;font-size:10.5px;">⚡ Reload</button>'
    ].join('');

    var toggleBtn = document.getElementById('sivme-toggle-mode-btn');
    if (toggleBtn) {
      toggleBtn.onclick = function (e) {
        e.stopPropagation();
        setConsoleMode(!active);
      };
    }

    var reloadBtn = document.getElementById('sivme-reload-btn');
    if (reloadBtn) {
      reloadBtn.onclick = function (e) {
        e.stopPropagation();
        window.location.reload();
      };
    }

    // 4. Scan and Inject Upper-Right Interactive Notch + Green/Red Dashed Outline
    var targets = document.querySelectorAll('[data-cat-id], .sivme-subcat-card');
    targets.forEach(function (el) {
      var urn = getUrnFromElement(el);
      if (!urn) return;

      var live = isVisible(urn);

      // Clean existing notch pill
      var oldNotch = el.querySelector(':scope > .sivme-notch-pill');
      if (oldNotch) oldNotch.remove();

      if (active) {
        if (window.getComputedStyle(el).position === 'static') {
          el.style.position = 'relative';
        }

        // Apply Green or Red Dashed Ghera using setProperty
        if (live) {
          el.style.setProperty('outline', '2px dashed #10b981', 'important');
          el.style.setProperty('outline-offset', '2px', 'important');
          el.style.opacity = '1';
        } else {
          el.style.setProperty('outline', '2px dashed #ef4444', 'important');
          el.style.setProperty('outline-offset', '2px', 'important');
          el.style.opacity = '0.55'; // Ghost mode for hidden element
        }

        // Create Upper-Right Interactive Notch
        var notch = document.createElement('div');
        notch.className = 'sivme-notch-pill';
        notch.setAttribute('data-target-urn', urn);
        
        if (live) {
          notch.innerHTML = '<span style="color:#10b981;">🟢</span> <span>Live</span> <span style="font-size:9px;opacity:0.75;">⇄</span>';
          notch.style.cssText = [
            'position: absolute !important',
            'top: -11px !important',
            'right: 14px !important',
            'z-index: 60 !important',
            'background: #064e3b !important',
            'border: 1.5px solid #10b981 !important',
            'color: #34d399 !important',
            'font-family: ui-sans-serif, system-ui, -apple-system, sans-serif !important',
            'font-size: 10px !important',
            'font-weight: 800 !important',
            'padding: 1.5px 8px !important',
            'border-radius: 9999px !important',
            'box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6), 0 0 6px rgba(16, 185, 129, 0.4) !important',
            'cursor: pointer !important',
            'display: flex !important',
            'align-items: center !important',
            'gap: 4px !important',
            'user-select: none !important',
            'line-height: 1.3 !important'
          ].join(';');
        } else {
          notch.innerHTML = '<span style="color:#ef4444;">🔴</span> <span>Hidden</span> <span style="font-size:9px;opacity:0.75;">⇄</span>';
          notch.style.cssText = [
            'position: absolute !important',
            'top: -11px !important',
            'right: 14px !important',
            'z-index: 60 !important',
            'background: #7f1d1d !important',
            'border: 1.5px solid #ef4444 !important',
            'color: #fca5a5 !important',
            'font-family: ui-sans-serif, system-ui, -apple-system, sans-serif !important',
            'font-size: 10px !important',
            'font-weight: 800 !important',
            'padding: 1.5px 8px !important',
            'border-radius: 9999px !important',
            'box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6), 0 0 6px rgba(239, 68, 68, 0.4) !important',
            'cursor: pointer !important',
            'display: flex !important',
            'align-items: center !important',
            'gap: 4px !important',
            'user-select: none !important',
            'line-height: 1.3 !important'
          ].join(';');
        }

        // Tap-to-Toggle Handler (Direct In-Situ Switch)
        notch.onclick = function (e) {
          e.stopPropagation();
          e.preventDefault();
          var targetUrn = this.getAttribute('data-target-urn');
          toggleVisibility(targetUrn);
        };

        el.appendChild(notch);
      } else {
        // Public Mode: Strip inspection outlines and notches
        el.style.removeProperty('outline');
        el.style.removeProperty('outline-offset');
        el.style.opacity = '1';
        el.style.display = live ? '' : 'none';
      }
    });
  }

  // Auto-trigger adapters and inspection when catalog opens
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
      applyInSituVisualInspection();
    });
    document.addEventListener('click', function (e) {
      if (e.target && e.target.closest && e.target.closest('#cat-menu-btn, [onclick*="category"], [data-cat-id]')) {
        setTimeout(triggerAllAdapters, 50);
        setTimeout(applyInSituVisualInspection, 60);
        setTimeout(triggerAllAdapters, 200);
        setTimeout(applyInSituVisualInspection, 220);
      }
    }, true);
  }

  return {
    version: REGISTRY_VERSION,
    REGISTRY_STORAGE_KEY: REGISTRY_STORAGE_KEY,
    SESSION_AUTH_KEY: SESSION_AUTH_KEY,
    loadRegistry: loadRegistry,
    saveRegistry: saveRegistry,
    isVisible: isVisible,
    getUrnVisibility: isVisible,
    toggleVisibility: toggleVisibility,
    setUrnVisibility: toggleVisibility,
    isConsoleModeActive: isConsoleModeActive,
    isConsoleAuthorized: isConsoleModeActive,
    setConsoleMode: setConsoleMode,
    resetAllToPublicLive: resetAllToPublicLive,
    getParentURNs: getParentURNs,
    renderBadge: renderBadge,
    auditElement: auditElement,
    registerAdapter: registerAdapter,
    triggerAllAdapters: triggerAllAdapters,
    applyInSituVisualInspection: applyInSituVisualInspection
  };
});
