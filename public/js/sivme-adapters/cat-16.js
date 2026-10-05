/**
 * RISE MITRA — SIVME CATEGORY 16 MASTER ADAPTER
 * TARGET       : Category 16 Parent Accordion & Bi-Directional Child State Sync
 * SPECIFICATION: Micro-Modular Architecture (ZEL Frozen Core)
 * GOVERNANCE   : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var PARENT_URN = 'rm:cat:16';
  var SUB_URNS = ['rm:cat:16:sub:16-1', 'rm:cat:16:sub:16-2', 'rm:cat:16:sub:16-3'];

  function getCore() {
    return window.RM_SIVME || null;
  }

  // 1. BI-DIRECTIONAL COMPUTED PARENT SYNC
  function syncCategory16Parent() {
    var core = getCore();
    if (!core) return;

    var allLive = true;
    for (var i = 0; i < SUB_URNS.length; i++) {
      if (!core.getUrnVisibility(SUB_URNS[i])) {
        allLive = false;
        break;
      }
    }
    // Update Master Registry SSOT
    core.setUrnVisibility(PARENT_URN, allLive, 'घर व मकान (House & Home)');
  }

  // 2. AUTHORITATIVE 1-TAP ACCORDION CONTROLLER
  function auditCategory16Parent() {
    var core = getCore();
    if (!core || !core.isConsoleAuthorized) return;
    var isAuth = core.isConsoleAuthorized();

    var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
    if (!c16) return;

    var c16Header = c16.querySelector(':scope > div:first-child');
    if (c16Header && c16Header.getAttribute('data-sivme-c16-ctrl') !== 'true') {
      c16Header.setAttribute('data-sivme-c16-ctrl', 'true');

      // Strip native conflicting inline click listeners
      if (c16Header.hasAttribute('onclick')) c16Header.removeAttribute('onclick');
      c16Header.querySelectorAll('[onclick]').forEach(function (el) {
        el.removeAttribute('onclick');
      });

      c16Header.addEventListener('click', function (e) {
        // If badge itself is tapped, let badge listener handle cascade
        if (e.target.closest('.sivme-inline-badge')) return;

        if (e.cancelable) e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();

        var sub = document.getElementById('sub-c16');
        if (!sub) return;

        var isHidden = sub.classList.contains('hidden') || 
                       window.getComputedStyle(sub).display === 'none' || 
                       sub.style.display === 'none';

        var chevron = c16Header.querySelector('svg, [id*="chevron"]');

        if (isHidden) {
          sub.classList.remove('hidden', 'sivme-collapsed');
          sub.style.setProperty('display', 'block', 'important');
          if (chevron) chevron.style.transform = 'rotate(180deg)';
        } else {
          sub.classList.add('hidden', 'sivme-collapsed');
          sub.style.setProperty('display', 'none', 'important');
          if (chevron) chevron.style.transform = 'rotate(0deg)';
        }
      }, true);
    }

    syncCategory16Parent();
  }

  function register() {
    if (window.RM_SIVME && typeof window.RM_SIVME.registerAdapter === 'function') {
      window.RM_SIVME.registerAdapter('cat-16', auditCategory16Parent);
    } else {
      setTimeout(register, 40);
    }
  }
  register();
})();
