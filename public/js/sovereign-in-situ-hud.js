/**
 * RISE MITRA — SOVEREIGN IN-SITU HUD MASTER LOADER
 * SPECIFICATION : FOLDER A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) | Section II-18
 * GOVERNANCE    : GATE-23.5 | MODULAR ARCHITECTURE | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/sovereign-in-situ-hud.js
 * DUAL-FOLDER REFERENCES:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var epoch = window.RM_DEPLOY_EPOCH || Date.now();

  function loadScript(src, next) {
    var script = document.createElement('script');
    script.src = src + '?v=' + epoch;
    script.async = false;
    if (next) script.onload = next;
    script.onerror = function () {
      console.error('[SIVME-HUD-Loader] Module load failed:', src);
    };
    (document.head || document.documentElement).appendChild(script);
  }

  // Step 1: Core State & Auth Guard -> Step 2: Universal Scanner & UI Engine
  loadScript('/js/sovereign-in-situ-core.js', function () {
    if (window.RM_SIVME && typeof window.RM_SIVME.loadAdapters === 'function') {
      window.RM_SIVME.loadAdapters();
    }
    loadScript('/js/sovereign-in-situ-scanner.js');
  });
})();
