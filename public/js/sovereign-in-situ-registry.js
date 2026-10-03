/**
 * RISE MITRA — SOVEREIGN IN-SITU VISUAL MANAGEMENT ENGINE (SIVME)
 * MODULE        : Universal Visibility Registry & Cascading Inheritance Engine
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.4 | DEC-RM-SOV-VISUAL-IN-SITU-20261003 | ZERO-ELEMENT-LOSS (ZEL)
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
    activeMode: 'public', // 'public' | 'in_situ_console'
    registry: {
      // Category 16 Baseline Defaults
      'rm:cat:16': { hidden: false, label: 'House & Home (आवास व मिस्त्री)' },
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
   * Udaharan:
   * 'rm:cat:16:sub:16-3:elem:budget_slider' -> Parent 1: 'rm:cat:16:sub:16-3', Parent 2: 'rm:cat:16'
   */
  function getParentURNs(urn) {
    if (!urn || typeof urn !== 'string') return [];
    var parts = urn.split(':');
    var parents = [];

    // If it has :elem:, the parent sub-feature is everything before :elem:
    var elemIndex = parts.indexOf('elem');
    if (elemIndex !== -1) {
      parents.push(parts.slice(0, elemIndex).join(':'));
    }

    // If it has :sub:, the parent category is everything before :sub:
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
        return false; // Inherited Dormant
      }
    }

    return true;
  }

  /**
   * Toggle Visibility of a specific URN
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
      var sessionTicket = sessionStorage.getItem(SESSION_AUTH_KEY);
      var reg = loadRegistry();
      return Boolean(sessionTicket === 'SOV_ACTIVE_2026' || reg.activeMode === 'in_situ_console');
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
        sessionStorage.setItem(SESSION_AUTH_KEY, 'SOV_ACTIVE_2026');
      } else {
        sessionStorage.removeItem(SESSION_AUTH_KEY);
      }
      saveRegistry(state);
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
      sessionStorage.removeItem(SESSION_AUTH_KEY);
    } catch (_) {}
    saveRegistry(state);
    return true;
  }

  return {
    version: REGISTRY_VERSION,
    REGISTRY_STORAGE_KEY: REGISTRY_STORAGE_KEY,
    SESSION_AUTH_KEY: SESSION_AUTH_KEY,
    loadRegistry: loadRegistry,
    saveRegistry: saveRegistry,
    isVisible: isVisible,
    toggleVisibility: toggleVisibility,
    isConsoleModeActive: isConsoleModeActive,
    setConsoleMode: setConsoleMode,
    resetAllToPublicLive: resetAllToPublicLive,
    getParentURNs: getParentURNs
  };
});
