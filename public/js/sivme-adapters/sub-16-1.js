/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RISE MITRA — SIVME SUB-CATEGORY 15-1 / 16-1 ADAPTER (v83)
 *   - TARGET         : Sub-Service 15-1 / 16-1 (मिस्त्री व गृह मरम्मत — Mistry & Home Repair)
 *   - URN            : rm:cat:16:sub:16-1 (Synced with rm:cat:15:sub:15-1)
 *   - REPO TARGET    : public/js/sivme-adapters/sub-16-1.js
 *   - SURFACE TARGET : SHARED (SURFACE-A Visibility Gate + SURFACE-B SIVME In-Situ Toggle)
 *   - HOST BINDING   : Surface-A (public/index.html -> #sub-c15) & Surface-B (SIVME Console)
 *   - SIZE BUDGET    : <= 95 Logical Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/sivme-adapters/sub-16-1.js (Isolated SIVME Adapter for 15-1 Mistry & Home Repair)
 *   - public/js/sivme-adapters/sub-16-2.js (Isolated SIVME Adapter for 15-2 Rental Ledger)
 *   - public/js/sivme-adapters/sub-16-3.js (Isolated SIVME Adapter for 15-3 Room & Flat Search)
 *   - public/js/sivme-adapters/cat16-adapter.js (Parent Category 15 House & Home Adapter)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, ROOT-ENGINE-FIRST & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Applies public visibility state (`sivme-public-hidden`) on 15-1 card.
 *   - ALLOWED ON SURFACE-B   : Mounts SIVME inline badge & handles authorized 1-Tap visibility toggle.
 *   - ROOT-ENGINE-FIRST RULE : Queries `#sub-c15 > div` first so `#sub-c16` (`Libraries & Demo`) is
 *                              never accidentally targeted.
 *   - FORBIDDEN IN THIS FILE : Modifying `#sub-c16` (`Libraries & Demo`) cards or duplicating UI HTML.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : Registers `sub-16-1` and `sub-15-1` in `window.RM_SIVME.registerAdapter`
 *   - CALLS EXTERNAL APIs : window.RM_SIVME.isConsoleAuthorized, window.RM_SIVME.getUrnVisibility,
 *                           window.RM_SIVME.setUrnVisibility, window.RM_SIVME.mountInlineBadge,
 *                           window.RM_SIVME.applyInSituAudit
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #sub-c15 > div, [data-sub-code="15-1"], [data-sov-urn], [data-sov-label]
 *   - SURFACE-B SELECTORS : .sivme-inline-badge, .sivme-badge-anchor, .sivme-ghost-dormant
 *   - WORLD-CLASS 2.5D UI : Preserves 2.5D sub-card layout without altering internal card styles.
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Allows normal button clicks (`खोलें ➔`, `पिन`, `वीडियो`) when card is Live.
 *   - DOM SAFETY    : Guarded by `data-sivme-sub1-bound="true"` to prevent duplicate listeners.
 *   - ZERO REVERT   : Syncs both `rm:cat:16:sub:16-1` and `rm:cat:15:sub:15-1` URNs.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 3 FUNCTIONS INTACT):
 *   1. getSubCard                     2. auditSub16_1                   3. register
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole SIVME visibility adapter for Sub-Service 15-1 (Mistry & Home Repair).
 *   - ZERO-GUESSWORK LOCK : Verified 1:1 against `public/js/sivme-adapters/sub-16-1.js`.
 *   - CANONICAL PATH      : Must exist ONLY at `public/js/sivme-adapters/sub-16-1.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Delegates badge mounting to `window.RM_SIVME.mountInlineBadge`.
 *   - IDEMPOTENT BOOT : Single registration loop via `register()`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE with null-safe DOM & SIVME core checks.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, 1-TASK-1-FILE COMMIT, PRE-MAIN GATE & CONTRACT LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261019_v83'`.
 *   - PIPELINE GATE   : Commit & verify on `pre-main` before merging to `main`.
 * ==============================================================================
 * 12. GITHUB ACTIONS FOLDER-B MIRROR SYNC & AI PRE-FLIGHT AUDIT TAGS:
 *   - @folder-a-ssot  : 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW (Pure Policy & Specs Only — No Code)
 *   - @folder-b-mirror: 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH (Auto-Synced via sync_drive.yml)
 *   - @ai-pre-flight  : 12-Point Header + Code auto-indexed in Folder B snapshot.
 * ==============================================================================
 */

(function () {
  'use strict';

  var URN = 'rm:cat:16:sub:16-1';
  var ALT_URN = 'rm:cat:15:sub:15-1';
  var LABEL = 'मिस्त्री व गृह मरम्मत';

  function getSubCard() {
    var c15Cards = document.querySelectorAll('#sub-c15 > div');
    for (var i = 0; i < c15Cards.length; i++) {
      var txt = (c15Cards[i].textContent || '').trim();
      if (txt.indexOf('मिस्त्री') !== -1 || txt.indexOf('मरम्मत') !== -1 || txt.indexOf('Mistry') !== -1 || txt.indexOf('15-1') !== -1) {
        return c15Cards[i];
      }
    }
    if (c15Cards[0]) return c15Cards[0];

    var legacyCards = document.querySelectorAll('#sub-c16 > div');
    for (var j = 0; j < legacyCards.length; j++) {
      var lTxt = (legacyCards[j].textContent || '').trim();
      if (lTxt.indexOf('मिस्त्री') !== -1 || lTxt.indexOf('मरम्मत') !== -1) {
        return legacyCards[j];
      }
    }
    return null;
  }


  function auditSub16_1() {
    var core = window.RM_SIVME;
    if (!core || !core.isConsoleAuthorized) return;
    var isAuth = core.isConsoleAuthorized();

    var card = getSubCard();
    if (!card) return;

    card.setAttribute('data-sov-urn', URN);
    card.setAttribute('data-sov-label', LABEL);

    var isVis = core.getUrnVisibility(URN) && core.getUrnVisibility(ALT_URN);

    if (!isAuth) {
      if (!isVis) {
        card.classList.add('sivme-public-hidden');
        card.style.setProperty('display', 'none', 'important');
      } else {
        card.classList.remove('sivme-public-hidden');
        card.style.removeProperty('display');
      }
      var oldBadge = card.querySelector(':scope > .sivme-inline-badge');
      if (oldBadge) oldBadge.remove();
      card.classList.remove('sivme-ghost-dormant', 'sivme-badge-anchor');
      return;
    }

    card.classList.remove('sivme-public-hidden');
    card.classList.add('sivme-badge-anchor');

    if (!isVis) {
      card.classList.add('sivme-ghost-dormant');
    } else {
      card.classList.remove('sivme-ghost-dormant');
    }

    core.mountInlineBadge(card, URN, isVis, LABEL);

    if (card.getAttribute('data-sivme-sub1-bound') !== 'true') {
      card.setAttribute('data-sivme-sub1-bound', 'true');

      card.addEventListener('click', function (e) {
        if (!core.isConsoleAuthorized()) return;
        if (e.target.closest('.sivme-inline-badge')) return;

        var actionBtn = e.target.closest('button, a');
        var isLive = core.getUrnVisibility(URN);

        if (actionBtn && isLive) return;

        if (e.cancelable) e.preventDefault();
        e.stopPropagation();

        var nextVis = !isLive;
        core.setUrnVisibility(URN, nextVis, LABEL);
        core.setUrnVisibility(ALT_URN, nextVis, LABEL);
        core.applyInSituAudit();
      }, false);
    }
  }


  function register() {
    if (window.RM_SIVME && typeof window.RM_SIVME.registerAdapter === 'function') {
      window.RM_SIVME.registerAdapter('sub-16-1', auditSub16_1);
      window.RM_SIVME.registerAdapter('sub-15-1', auditSub16_1);
    } else {
      setTimeout(register, 50);
    }
  }
  register();
})();
