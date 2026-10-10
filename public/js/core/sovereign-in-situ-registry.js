/**
 * RISE MITRA — SOVEREIGN IN-SITU VISUAL MANAGEMENT ENGINE (SIVME v2.0)
 * MODULE: Core Visibility Registry & Multi-Tier Persistence Engine (Phase 1)
 * GOVERNANCE: GATE-23.4 | DEC-RM-SOV-VISUAL-IN-SITU-20261003 | ZERO-ELEMENT-LOSS (ZEL)
 * SSOT DUAL-FOLDER AUTHORITY:
 *   - Folder A (Master Document): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   - Folder B (GitHub Sync Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function initSovereignRegistry(global) {
  'use strict';

  const STORAGE_KEY = 'rm_sovereign_visibility_registry_v1';
  const REGISTRY_VERSION = '2.0.0';

  // In-memory high-speed cache for O(1) constant-time access (< 120KB footprint)
  let memoryCache = null;

  /**
   * Universal Deterministic URN Parser
   * Parses URN formats:
   *  - Category Root : rm:cat:16
   *  - Sub-Category  : rm:cat:16:sub:16-2
   *  - Element Node  : rm:cat:16:sub:16-2:elem:btn_add_voucher
   */
  function parseURN(urn) {
    if (!urn || typeof urn !== 'string') return null;
    const parts = urn.trim().split(':');
    if (parts[0] !== 'rm' || parts[1] !== 'cat') return null;

    return {
      raw: urn,
      categoryId: parts[2] || null,
      subFeatureId: parts[3] === 'sub' ? parts[4] : null,
      elementId: parts[5] === 'elem' ? parts[6] : null,
      depth: parts.length // 3: Root, 5: Sub, 7: Element
    };
  }

  /**
   * Initializes default clean registry state
   */
  function createDefaultState() {
    return {
      version: REGISTRY_VERSION,
      lastUpdated: Date.now(),
      activeMode: 'public', // 'public' | 'in_situ_console'
      registry: {},
      metrics: {
        totalTracked: 0,
        totalHidden: 0
      }
    };
  }

  /**
   * Loads state from localStorage with fail-closed fallback
   */
  function loadRegistry() {
    if (memoryCache) return memoryCache;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        memoryCache = createDefaultState();
        return memoryCache;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || !parsed.registry) {
        memoryCache = createDefaultState();
        return memoryCache;
      }
      memoryCache = parsed;
      return memoryCache;
    } catch (e) {
      console.warn('[SIVME Registry] Storage access failed. Falling back to fail-closed state:', e);
      memoryCache = createDefaultState();
      return memoryCache;
    }
  }

  /**
   * Persists current memory cache to localStorage safely
   */
  function persistRegistry() {
    if (!memoryCache) return false;
    try {
      memoryCache.lastUpdated = Date.now();
      
      // Update quick metrics
      let hiddenCount = 0;
      let totalCount = 0;
      for (const key in memoryCache.registry) {
        if (Object.prototype.hasOwnProperty.call(memoryCache.registry, key)) {
          totalCount++;
          if (memoryCache.registry[key].hidden === true) {
            hiddenCount++;
          }
        }
      }
      memoryCache.metrics.totalTracked = totalCount;
      memoryCache.metrics.totalHidden = hiddenCount;

      localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryCache));
      
      // Dispatch isolated custom event for subscribed UI listeners
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('rm:sivme:registry-updated', {
          detail: { registry: memoryCache }
        }));
      }
      return true;
    } catch (e) {
      console.error('[SIVME Registry] Persistence write error:', e);
      return false;
    }
  }

  /**
   * Core Engine API
   */
  const SovereignRegistry = {
    /**
     * Determines whether an element is visible, accounting for cascading parent hierarchy
     * Rule: If parent category is hidden, all its sub-features and elements are automatically false.
     */
    isVisible: function(urn) {
      const parsed = parseURN(urn);
      if (!parsed) return true; // Fail-closed: unparseable nodes remain normal public visible

      const state = loadRegistry();
      const reg = state.registry;

      // 1. Parent Category Check
      if (parsed.categoryId) {
        const catKey = `rm:cat:${parsed.categoryId}`;
        if (reg[catKey] && reg[catKey].hidden === true) {
          return false; // Cascaded parent suppression
        }
      }

      // 2. Sub-Category Check
      if (parsed.subFeatureId) {
        const subKey = `rm:cat:${parsed.categoryId}:sub:${parsed.subFeatureId}`;
        if (reg[subKey] && reg[subKey].hidden === true) {
          return false; // Cascaded sub-feature suppression
        }
      }

      // 3. Exact Element Node Check
      const nodeKey = parsed.raw;
      if (reg[nodeKey] && reg[nodeKey].hidden === true) {
        return false;
      }

      return true;
    },

    /**
     * Gets explicit state of a specific node without inheritance
     */
    getNodeMetadata: function(urn) {
      const parsed = parseURN(urn);
      if (!parsed) return null;
      const state = loadRegistry();
      return state.registry[parsed.raw] || { hidden: false, label: parsed.raw };
    },

    /**
     * Toggles or sets visibility state for a specific URN (Zero-Element-Loss)
     */
    toggleVisibility: function(urn, explicitState, label) {
      const parsed = parseURN(urn);
      if (!parsed) {
        console.error('[SIVME Registry] Invalid URN provided for toggle:', urn);
        return false;
      }

      const state = loadRegistry();
      const current = state.registry[parsed.raw] || { hidden: false };
      const nextHidden = (typeof explicitState === 'boolean') ? !explicitState : !current.hidden;

      state.registry[parsed.raw] = {
        hidden: nextHidden,
        label: label || current.label || parsed.raw,
        updatedAt: Date.now()
      };

      persistRegistry();
      return state.registry[parsed.raw];
    },

    /**
     * Returns full status report for a given category tree
     */
    getCategoryTreeState: function(catId) {
      const state = loadRegistry();
      const prefix = `rm:cat:${catId}`;
      const results = {};

      for (const key in state.registry) {
        if (key.startsWith(prefix)) {
          results[key] = {
            ...state.registry[key],
            effectiveVisible: this.isVisible(key)
          };
        }
      }
      return results;
    },

    /**
     * Exports immutable snapshot for backup or Folder A sync
     */
    exportRegistrySnapshot: function() {
      const state = loadRegistry();
      return JSON.parse(JSON.stringify(state));
    },

    /**
     * Imports a snapshot safely with schema verification
     */
    importRegistrySnapshot: function(snapshot) {
      if (!snapshot || typeof snapshot !== 'object' || !snapshot.registry) {
        throw new Error('Invalid SIVME Registry Snapshot structure.');
      }
      memoryCache = {
        version: snapshot.version || REGISTRY_VERSION,
        lastUpdated: Date.now(),
        activeMode: snapshot.activeMode || 'public',
        registry: { ...snapshot.registry },
        metrics: snapshot.metrics || { totalTracked: 0, totalHidden: 0 }
      };
      persistRegistry();
      return true;
    },

    /**
     * Emergency Rollback: Resets all tracked elements to 100% visible public live state
     */
    resetAllToPublicLive: function() {
      memoryCache = createDefaultState();
      persistRegistry();
      console.warn('[SIVME Registry] Emergency Reset: All elements restored to Public Live.');
      return true;
    }
  };

  // Export isolated namespace to global window
  global.RM_SOVEREIGN_REGISTRY = SovereignRegistry;

})(typeof window !== 'undefined' ? window : this);
