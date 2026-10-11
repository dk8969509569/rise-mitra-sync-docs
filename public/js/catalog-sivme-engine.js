/**
 * RISE MITRA — UNIVERSAL CATALOG SIVME MASTER LOADER
 * SPECIFICATION : FOLDER A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) | Section 11-12
 * GOVERNANCE    : GATE-25.0 | MODULAR ARCHITECTURE | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/catalog-sivme-engine.js
 */

(function (window, document) {
  'use strict';

  var epoch = window.RM_DEPLOY_EPOCH || Date.now();

  function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src + '?v=' + epoch;
    script.async = false;
    if (callback) { script.onload = callback; }
    script.onerror = function () {
      console.error('[SIVME-Loader] Failed to load module:', src);
    };
    (document.head || document.documentElement).appendChild(script);
  }

  // 1. Load Module 1: Core State, SIVME Registry & Mode Auth Guard
  loadScript('/js/catalog-sivme-core-engine.js', function () {
    // 2. Load Module 2: UI Render, Accordion & 3-Pill Action Strip
    loadScript('/js/catalog-sivme-render-engine.js', function () {
      // 3. Global SIVME Hook Connection
      if (window.RM_SIVME && window.RM_CatalogCore) {
        window.RM_SIVME.applyInSituVisualInspection = window.RM_CatalogCore.enforceSingleSivmeOutline;
        window.RM_SIVME.__singleOutlineEnforced = true;
      }
    });
  });
})(typeof window !== 'undefined' ? window : this, typeof document !== 'undefined' ? document : null);
