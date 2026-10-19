/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RISE MITRA — SIVME CATEGORY 15/16 MASTER ADAPTER (v83)
 *   - FILE           : public/js/sivme-adapters/cat-16.js
 *   - SURFACE TARGET : SHARED (SURFACE-A Pin/Modal Fallback + SURFACE-B SIVME Badge Docking)
 *   - HOST BINDING   : Surface-A (public/index.html -> #sub-c15) & Surface-B (SIVME Console)
 *   - SIZE BUDGET    : <= 235 Logical Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : GATE-23.5 | ZERO-ELEMENT-LOSS (ZEL) | 100% Play Store Cat-15 Aligned
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/sivme-adapters/cat-16.js (Cat-15 House & Home Master SIVME & Pin Adapter)
 *   - public/js/sivme-adapters/cat16-adapter.js (Universal Card Engine SIVME Bridge)
 *   - public/js/sivme-adapters/sub-16-1.js, sub-16-2.js, sub-16-3.js (Sub-Card SIVME Adapters)
 *   - public/js/one-tap-accordion-engine.js (Authoritative 50-Category Accordion & Sub-Card Renderer)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, ROOT-ENGINE-FIRST & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Tree-line cleanup CSS, pinned shortcut sync (`rm_user_pinned_shortcuts_v1`),
 *                              and fallback sub-card rendering ONLY if `#sub-c15` is unhydrated.
 *   - ALLOWED ON SURFACE-B   : SIVME badge docking and parent-child URN visibility synchronization.
 *   - ROOT-ENGINE-FIRST RULE : Targets `#sub-c15` (`15. House & Home`) and preserves existing
 *                              Play Store 2.5D sub-cards rendered by `RM_SUB_CARD_RENDERER`.
 *   - FORBIDDEN IN THIS FILE : Wiping `#sub-c16` (`16. Libraries & Demo`) or overwriting hydrated
 *                              2.5D Play Store sub-cards inside `#sub-c15`.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : localStorage['rm_user_pinned_shortcuts_v1'],
 *                           registers `cat-16` and `cat-15` in `window.RM_SIVME.registerAdapter`
 *   - CALLS EXTERNAL APIs : window.RM_SIVME, window.openRentalLedger, window.openRentalSearch,
 *                           window.RM_SUB_CARD_RENDERER
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #categoryModal [data-cat-id="c15"], #sub-c15, .rm-clean-pin, .rm-clean-act
 *   - SURFACE-B SELECTORS : .sivme-inline-badge, [data-sivme-c16-ctrl]
 *   - WORLD-CLASS 2.5D UI : Preserves 2.5D glowing sub-cards and activates `15-1`, `15-2`, `15-3`.
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Never blocks `one-tap-accordion-engine.js` or `.rm-parent-toggle-pill` updates.
 *   - DOM SAFETY    : Canary check (`[data-sub-code]`, `.rm-sub-open-btn`) prevents wiping hydrated
 *                     Play Store 2.5D sub-cards.
 *   - ZERO REVERT   : All 3 sub-services (`15-1`, `15-2`, `15-3`) are set to `button` (`खोलें ›`).
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 11 FUNCTIONS INTACT):
 *   1. injectMasterStyles             2. getCore                        3. getPinnedList
 *   4. isPinned                       5. togglePinState                 6. syncCategory16Parent
 *   7. auditCategory16Parent          8. resolveTitles                  9. auditCat16SubCategories
 *   10. auditCategory16Complete       11. register
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Master SIVME badge & pin shortcut adapter for Category 15 (House & Home).
 *   - ZERO-GUESSWORK LOCK : Verified 1:1 against `public/js/sivme-adapters/cat-16.js` (v4.1).
 *   - CANONICAL PATH      : Must exist ONLY at `public/js/sivme-adapters/cat-16.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Injects `#rm-cat16-master-layout-v41` style tag once idempotently.
 *   - IDEMPOTENT BOOT : Single adapter registration via `register()`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch around localStorage access.
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

  var PARENT_URN = 'rm:cat:16';
  var ALT_PARENT_URN = 'rm:cat:15';
  var SUB_URNS = ['rm:cat:16:sub:16-1', 'rm:cat:16:sub:16-2', 'rm:cat:16:sub:16-3'];
  var PIN_STORAGE_KEY = 'rm_user_pinned_shortcuts_v1';

  // Layout Lockdown: Tree Lines Removal, Nowrap on Actions & Floating Badge Containment
  (function injectMasterStyles() {
    var styleId = 'rm-cat16-master-layout-v41';
    if (document.getElementById(styleId)) return;
    var st = document.createElement('style');
    st.id = styleId;
    st.textContent = [
      '#sub-c15, [id^="sub-c15"], #sub-c16, [id^="sub-c16"] { border-left: none !important; padding-left: 0 !important; margin-left: 0 !important; }',
      '#sub-c15::before, #sub-c15::after, #sub-c15 > div::before, #sub-c15 > div::after, #sub-c16::before, #sub-c16::after, #sub-c16 > div::before, #sub-c16 > div::after { display: none !important; content: none !important; border: none !important; }',
      '#categoryModal [data-cat-id] button, #categoryModal [data-cat-id] a, #categoryModal [data-cat-id] span[class*="text-emerald"], #categoryModal [data-cat-id] span[class*="text-cyan"] { white-space: nowrap !important; flex-shrink: 0 !important; }',
      '#categoryModal [data-cat-id] { position: relative !important; }',
      '#categoryModal [data-cat-id] > .sivme-inline-badge { position: absolute !important; top: 6px !important; right: 80px !important; margin: 0 !important; font-size: 9.5px !important; z-index: 10 !important; line-height: 1 !important; }'
    ].join('\n');
    document.head.appendChild(st);
  })();


  // 1. MASTER REGISTRY (PLAY STORE CAT-15 + BILINGUAL METADATA — ALL 3 ACTIVE)
  var SUB_CATEGORIES = [
    {
      id: 'sub-15-1',
      legacyId: 'sub-16-1',
      urn: 'rm:cat:16:sub:16-1',
      seq: '15-1',
      icon: '🛠️',
      en: 'Mistry & Home Repair',
      hi: 'मिस्त्री व गृह मरम्मत',
      actionType: 'button',
      actionText: 'खोलें ›',
      btnStyle: 'color: #34d399 !important; background: rgba(6, 78, 59, 0.85) !important; border: 1px solid rgba(16, 185, 129, 0.6) !important;'
    },
    {
      id: 'sub-15-2',
      legacyId: 'sub-16-2',
      urn: 'rm:cat:16:sub:16-2',
      seq: '15-2',
      icon: '📋',
      en: 'Rental Ledger',
      hi: 'किराया बहीखाता',
      actionType: 'button',
      actionText: 'खोलें ›',
      btnStyle: 'color: #34d399 !important; background: rgba(6, 78, 59, 0.85) !important; border: 1px solid rgba(16, 185, 129, 0.6) !important;'
    },
    {
      id: 'sub-15-3',
      legacyId: 'sub-16-3',
      urn: 'rm:cat:16:sub:16-3',
      seq: '15-3',
      icon: '🏠',
      en: 'Room & Flat Search',
      hi: 'कमरा व फ्लैट खोज',
      actionType: 'button',
      actionText: 'खोलें ›',
      btnStyle: 'color: #34d399 !important; background: rgba(6, 78, 59, 0.85) !important; border: 1px solid rgba(16, 185, 129, 0.6) !important;'
    }
  ];

  function getCore() {
    return window.RM_SIVME || null;
  }


  // 2. PINNED LOCAL STORAGE HELPERS
  function getPinnedList() {
    try {
      var raw = localStorage.getItem(PIN_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (_) { return []; }
  }

  function isPinned(id) {
    return getPinnedList().some(function (item) {
      return item.id === id || item.id === id.replace('15-', '16-') || item.id === id.replace('16-', '15-');
    });
  }

  function togglePinState(id, label, icon, seq) {
    var list = getPinnedList();
    var idx = -1;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id || list[i].seq === seq) { idx = i; break; }
    }
    if (idx !== -1) {
      list.splice(idx, 1);
    } else {
      list.push({ id: id, label: label, icon: icon, seq: seq, addedAt: Date.now() });
    }
    try {
      localStorage.setItem(PIN_STORAGE_KEY, JSON.stringify(list));
    } catch (_) {}

    window.dispatchEvent(new CustomEvent('rm_pinned_shortcuts_changed'));
    auditCat16SubCategories();
  }


  // 3. BI-DIRECTIONAL COMPUTED PARENT SYNC (100% ZEL Preserved)
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
    core.setUrnVisibility(PARENT_URN, allLive, 'घर व मकान (House & Home)');
    core.setUrnVisibility(ALT_PARENT_URN, allLive, 'घर व मकान (House & Home)');
  }


  // 4. AUTHORITATIVE 1-TAP ACCORDION CONTROLLER (Bound to c15 House & Home)
  function auditCategory16Parent() {
    var core = getCore();
    if (!core || !core.isConsoleAuthorized) return;

    var c15 = document.querySelector('#categoryModal [data-cat-id="c15"], #categoryModal [data-cat-id="15"]');
    if (!c15) return;

    var c15Header = c15.querySelector(':scope > div:first-child');
    var headerBadge = c15Header ? c15Header.querySelector('.sivme-inline-badge') : null;
    if (headerBadge) {
      headerBadge.style.cssText = 'position: relative !important; margin-left: 6px !important; margin-right: 4px !important; font-size: 10px !important; line-height: 1 !important; flex-shrink: 0 !important;';
    }

    syncCategory16Parent();
  }


  // 5. LANGUAGE RESOLVER (Default English-First)
  function resolveTitles(item) {
    var pref = 'en_first';
    try {
      pref = localStorage.getItem('rm_lang_pref') || 'en_first';
    } catch (_) {}

    if (pref === 'hi_first') {
      return { primary: item.hi, secondary: '(' + item.en + ')' };
    }
    return { primary: item.en, secondary: '(' + item.hi + ')' };
  }


  // 6. SUB-CATEGORY SIVME DOCKING & FALLBACK RENDERER (Anti-Overwrite Canary Guarded)
  function auditCat16SubCategories() {
    var container = document.getElementById('sub-c15');
    if (!container) return;

    var core = getCore();
    var isAuth = core && typeof core.isConsoleAuthorized === 'function' ? core.isConsoleAuthorized() : false;

    // CANARY CHECK: If Universal Play Store 2.5D Sub-Cards are already rendered inside #sub-c15,
    // NEVER wipe container.innerHTML; only dock SIVME badges if authorized!
    var existingPlayStoreCards = container.querySelectorAll('[data-sub-code], .rm-sub-open-btn');
    if (existingPlayStoreCards.length > 0) {
      Array.from(container.children).forEach(function (card, idx) {
        var meta = SUB_CATEGORIES[idx];
        if (!meta) return;
        if (core && typeof core.auditElement === 'function') {
          core.auditElement(card, meta.urn, meta.en + ' (' + meta.hi + ')', isAuth);
          var badge = card.querySelector('.sivme-inline-badge');
          if (badge) {
            badge.style.cssText = 'position: absolute !important; top: 10px !important; right: 12px !important; margin: 0 !important; font-size: 9.5px !important; padding: 2px 6px !important; border-radius: 6px !important; z-index: 10 !important; line-height: 1 !important;';
          }
        }
      });
      return;
    }

    // Fallback renderer ONLY when #sub-c15 has no Play Store cards
    SUB_CATEGORIES.forEach(function (item) {
      var card = document.getElementById(item.id) || document.getElementById(item.legacyId);
      var titles = resolveTitles(item);
      var pinned = isPinned(item.id);

      if (!card) {
        card = document.createElement('div');
        card.id = item.id;
        card.setAttribute('data-subcat-id', item.id);
        card.setAttribute('data-sub-code', item.seq);
        container.appendChild(card);
      }

      card.className = 'sivme-subcat-card';
      card.style.cssText = 'box-sizing: border-box !important; min-height: 104px !important; padding: 12px 14px 10px 14px !important; margin-bottom: 12px !important; border-radius: 14px !important; display: flex !important; flex-direction: column !important; justify-content: space-between !important; background: linear-gradient(180deg, rgba(24,33,47,0.96) 0%, rgba(11,17,30,0.98) 100%) !important; border: 1.5px solid rgba(56,189,248,0.4) !important; box-shadow: 0 4px 14px rgba(0,0,0,0.6) !important; position: relative !important;';

      var pinBtnHtml = pinned
        ? '<button type="button" class="rm-clean-pin" style="height: 28px !important; font-size: 12px !important; font-weight: 800 !important; border-radius: 9999px !important; padding: 0 12px !important; color: #38bdf8 !important; background: rgba(3, 105, 161, 0.3) !important; border: 1px solid rgba(56, 189, 248, 0.6) !important; cursor: pointer !important;">📌 पिन है</button>'
        : '<button type="button" class="rm-clean-pin" style="height: 28px !important; font-size: 12px !important; font-weight: 800 !important; border-radius: 9999px !important; padding: 0 12px !important; color: #94a3b8 !important; background: rgba(15, 23, 42, 0.8) !important; border: 1px solid rgba(71, 85, 105, 0.6) !important; cursor: pointer !important;">📌 पिन करें</button>';

      var actBtnHtml = '<button type="button" class="rm-clean-act rm-sub-open-btn" data-sub-code="' + item.seq + '" style="height: 28px !important; font-size: 12px !important; font-weight: 800 !important; border-radius: 9999px !important; padding: 0 14px !important; cursor: pointer !important; ' + item.btnStyle + '">' + item.actionText + '</button>';

      card.innerHTML =
        '<div style="display: flex !important; align-items: flex-start !important; gap: 10px !important; width: 100% !important; padding-right: 52px !important;">' +
          '<span style="font-family: monospace !important; font-size: 12px !important; font-weight: 900 !important; color: #38bdf8 !important; background: rgba(14, 165, 233, 0.18) !important; border: 1px solid rgba(56, 189, 248, 0.45) !important; border-radius: 7px !important; padding: 3px 6px !important;">' + item.seq + '</span>' +
          '<span style="font-size: 21px !important;">' + item.icon + '</span>' +
          '<div style="display: flex !important; flex-direction: column !important; gap: 3px !important; flex: 1 1 auto !important; min-width: 0 !important;">' +
            '<span style="font-size: 15px !important; font-weight: 800 !important; color: #ffffff !important;">' + titles.primary + '</span>' +
            '<span style="font-size: 13px !important; font-weight: 600 !important; color: #94a3b8 !important;">' + titles.secondary + '</span>' +
          '</div>' +
        '</div>' +
        '<div style="width: 100% !important; height: 1px !important; background: rgba(255, 255, 255, 0.08) !important; margin: 8px 0 6px 0 !important;"></div>' +
        '<div style="height: 28px !important; display: flex !important; align-items: center !important; justify-content: space-between !important; width: 100% !important;">' +
          pinBtnHtml + actBtnHtml +
        '</div>';

      var pinBtn = card.querySelector('.rm-clean-pin');
      if (pinBtn) {
        pinBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          togglePinState(item.id, titles.primary, item.icon, item.seq);
        });
      }

      if (core && typeof core.auditElement === 'function') {
        core.auditElement(card, item.urn, item.en + ' (' + item.hi + ')', isAuth);
      }
    });
  }


  // 7. MASTER EXECUTION & REGISTRATION
  function auditCategory16Complete() {
    auditCategory16Parent();
    auditCat16SubCategories();
  }

  function register() {
    var core = getCore();
    if (core && typeof core.registerAdapter === 'function') {
      core.registerAdapter('cat-16', auditCategory16Complete);
      core.registerAdapter('cat-15', auditCategory16Complete);
    } else {
      setTimeout(register, 40);
    }
  }

  window.addEventListener('rm_pinned_shortcuts_changed', auditCat16SubCategories);
  register();
})();
