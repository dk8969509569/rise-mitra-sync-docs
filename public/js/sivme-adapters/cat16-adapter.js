/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM SIVME Adapter — Category 15/16 House & Home Bridge (v83)
 *   - SPECIFICATION  : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 *   - REPO TARGET    : public/js/sivme-adapters/cat16-adapter.js
 *   - SURFACE TARGET : SHARED (SURFACE-A Catalog Fallback + SURFACE-B SIVME In-Situ Audit)
 *   - HOST BINDING   : Surface-A (public/index.html) & Surface-B (SIVME Authorized Mode)
 *   - SIZE BUDGET    : <= 245 Logical Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | 100% ZERO-ELEMENT-LOSS (ZEL)
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/sivme-adapters/cat16-adapter.js (House & Home Cat-15/16 SIVME & Card Adapter)
 *   - public/js/sivme-adapters/universal-accordion-engine.js (Universal Accordion Bridge)
 *   - public/js/universal-catalog/universal-card-engine.js (Authoritative 50-Category Renderer)
 *   - public/js/catalog/category-15/15-2-rental-template.js & 15-3-rental-template.js
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, ROOT-ENGINE-FIRST & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Delegates parent/sub-card rendering to `RM_UNIVERSAL_CARD_ENGINE`
 *                              with local fallback for Category 15 (`House & Home`).
 *   - ALLOWED ON SURFACE-B   : Mounts authoritative SIVME live/dormant notch pill and audits
 *                              15-1, 15-2, 15-3 sub-cards and 15-3 search filter URNs.
 *   - ROOT-ENGINE-FIRST RULE : Targets `c15` / `15` (`House & Home`) so `c16` (`Libraries & Demo`)
 *                              is never overwritten or hijacked.
 *   - FORBIDDEN IN THIS FILE : Overwriting Category 16 (`Libraries & Demo`) DOM cards.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_CAT16_ADAPTER, window.RM_CAT15_ADAPTER,
 *                           window.RM_SIVME.adapters['cat16'], window.RM_SIVME.adapters['cat15']
 *   - CALLS EXTERNAL APIs : window.RM_SIVME, window.RM_SovereignRegistry,
 *                           window.RM_UNIVERSAL_CARD_ENGINE
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #categoryModal [data-cat-id="c15"], #categoryModal [data-cat-id="15"],
 *                           #sub-c15, #rm-search-locality, #rm-cat16-search-state,
 *                           #rm-cat16-search-district, #rm-search-budget-slider, #rm-search-submeter
 *   - SURFACE-B SELECTORS : #sivme-c16-authoritative-badge, .sivme-notch-pill, .sivme-ghost-live
 *   - WORLD-CLASS 2.5D UI : Preserves 2.5D parent/sub-card layout and Play Store `15.` numbering.
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : 220ms debounce on `lastUrnActionTimes` prevents rapid double-toggle freeze.
 *   - DOM SAFETY    : Removes duplicate `.sivme-notch-pill` badges before mounting authoritative pill.
 *   - ZERO REVERT   : Delegates to `RM_UNIVERSAL_CARD_ENGINE` whenever loaded.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 7 FUNCTIONS INTACT):
 *   1. ensureUniversalScripts         2. getCore                        3. persistCat16Toggle
 *   4. mountCat16AuthoritativeBadge   5. renderPlayStoreCardInternal    6. enrichSubCardUIInternal
 *   7. auditCat16Complete             + Data: CAT16_URN_SELECTORS, SUBCARD_DATA
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole SIVME & fallback card adapter for House & Home (Category 15 / legacy 16).
 *   - ZERO-GUESSWORK LOCK : Verified 1:1 against `public/js/sivme-adapters/cat16-adapter.js`.
 *   - CANONICAL PATH      : Must exist ONLY at `public/js/sivme-adapters/cat16-adapter.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Shares `SUBCARD_DATA` across `15-x` and `16-x` keys without duplication.
 *   - IDEMPOTENT BOOT : Checks `script[src*="..."]` before injecting universal dependencies.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect all localStorage writes.
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

  var lastUrnActionTimes = {};

  // Auto-bridge: Ensure all universal engines and registries are auto-loaded
  (function ensureUniversalScripts() {
    var dependencies = [
      'js/sivme-adapters/universal-accordion-engine.js',
      'js/universal-catalog/catalog-metadata-registry.js',
      'js/universal-catalog/universal-card-engine.js'
    ];
    dependencies.forEach(function (src) {
      var fileName = src.split('/').pop();
      if (!document.querySelector('script[src*="' + fileName + '"]')) {
        var sc = document.createElement('script');
        sc.src = src;
        sc.async = false;
        document.head.appendChild(sc);
      }
    });
  })();

  function getCore() {
    return window.RM_SIVME || {
      isConsoleAuthorized: function () { return false; },
      getUrnVisibility: function () { return true; },
      setUrnVisibility: function () {},
      applyInSituAudit: function () {}
    };
  }


  // 1. DYNAMIC FILTERS URN SELECTORS CONTRACT (15-3 / 16-3)
  var CAT16_URN_SELECTORS = [
    { urn: 'rm:cat:16:sub:16-3:elem:smart_omnibox', selector: '#rm-search-locality, #smartOmniboxGroup, #smartOmnibox, input[placeholder*="लालपुर"], input[placeholder*="8340"]', label: 'स्मार्ट खोज' },
    { urn: 'rm:cat:16:sub:16-3:elem:state_filter', selector: '#rm-cat16-search-state, #stateFilterGroup, #stateFilter, select[id*="state"]', label: 'राज्य फ़िल्टर' },
    { urn: 'rm:cat:16:sub:16-3:elem:district_filter', selector: '#rm-cat16-search-district, #districtFilterGroup, #districtFilter, select[id*="district"]', label: 'जिला फ़िल्टर' },
    { urn: 'rm:cat:16:sub:16-3:elem:budget_slider', selector: '#rm-search-budget-slider, #budgetSliderGroup, input[type="range"]', label: 'बजट स्लाइडर' },
    { urn: 'rm:cat:16:sub:16-3:elem:submeter_checkbox', selector: '#rm-search-submeter, #submeterFilterGroup, input[type="checkbox"]', label: 'सब-मीटर फ़िल्टर' }
  ];


  // Helper: Persist toggle across all storages with auto parent wake-up (Syncs Cat 15 & Legacy 16)
  function persistCat16Toggle(urn, nextVis, label, core) {
    if (core && typeof core.setUrnVisibility === 'function') {
      if (urn === 'rm:cat:16' || urn === 'rm:cat:15') {
        ['rm:cat:16:sub:16-1', 'rm:cat:16:sub:16-2', 'rm:cat:16:sub:16-3', 'rm:cat:15:sub:15-1', 'rm:cat:15:sub:15-2', 'rm:cat:15:sub:15-3'].forEach(function (su) {
          core.setUrnVisibility(su, nextVis);
        });
      } else if ((urn.indexOf('rm:cat:16:sub:') === 0 || urn.indexOf('rm:cat:15:sub:') === 0) && nextVis === true) {
        core.setUrnVisibility('rm:cat:16', true, 'घर व मकान (House & Home)');
        core.setUrnVisibility('rm:cat:15', true, 'घर व मकान (House & Home)');
      }
      core.setUrnVisibility(urn, nextVis, label);
    }

    if (window.RM_SovereignRegistry && typeof window.RM_SovereignRegistry.toggleVisibility === 'function') {
      try {
        if ((urn.indexOf('rm:cat:16:sub:') === 0 || urn.indexOf('rm:cat:15:sub:') === 0) && nextVis === true) {
          window.RM_SovereignRegistry.toggleVisibility('rm:cat:16', true, 'घर व मकान (House & Home)');
          window.RM_SovereignRegistry.toggleVisibility('rm:cat:15', true, 'घर व मकान (House & Home)');
        }
        window.RM_SovereignRegistry.toggleVisibility(urn, nextVis, label);
      } catch (_) {}
    }

    try {
      var regKey = 'rm_sovereign_visibility_registry_v1';
      var raw = localStorage.getItem(regKey);
      var regObj = raw ? JSON.parse(raw) : { activeMode: 'in_situ_console', registry: {}, items: {} };
      if (!regObj.registry) regObj.registry = {};
      if (!regObj.items) regObj.items = {};
      regObj.registry[urn] = { hidden: !nextVis, label: label, updatedAt: Date.now() };
      regObj.items[urn] = { visible: nextVis, label: label, updatedAt: Date.now() };
      if ((urn.indexOf('rm:cat:16:sub:') === 0 || urn.indexOf('rm:cat:15:sub:') === 0) && nextVis === true) {
        regObj.registry['rm:cat:16'] = { hidden: false, label: 'घर व मकान (House & Home)', updatedAt: Date.now() };
        regObj.items['rm:cat:16'] = { visible: true, label: 'घर व मकान (House & Home)', updatedAt: Date.now() };
        regObj.registry['rm:cat:15'] = { hidden: false, label: 'घर व मकान (House & Home)', updatedAt: Date.now() };
        regObj.items['rm:cat:15'] = { visible: true, label: 'घर व मकान (House & Home)', updatedAt: Date.now() };
      }
      localStorage.setItem(regKey, JSON.stringify(regObj));
    } catch (_) {}

    try {
      var rawAct = localStorage.getItem('rm_active_categories_v1');
      var activeSet = new Set(rawAct ? JSON.parse(rawAct) : []);
      if (urn === 'rm:cat:16' || urn === 'rm:cat:15') {
        if (nextVis) { activeSet.add('c15'); activeSet.add('15'); activeSet.add('c16'); activeSet.add('16'); }
        else { activeSet.delete('c15'); activeSet.delete('15'); activeSet.delete('c16'); activeSet.delete('16'); }
      } else if ((urn.indexOf('rm:cat:16:sub:') === 0 || urn.indexOf('rm:cat:15:sub:') === 0) && nextVis === true) {
        activeSet.add('c15'); activeSet.add('15'); activeSet.add('c16'); activeSet.add('16');
      }
      localStorage.setItem('rm_active_categories_v1', JSON.stringify(Array.from(activeSet)));
    } catch (_) {}

    if (urn.indexOf(':sub:') !== -1) {
      var subId = urn.split(':sub:')[1];
      if (subId) {
        try {
          var rawSub = localStorage.getItem('rm_active_subcategories_v1');
          var subSet = new Set(rawSub ? JSON.parse(rawSub) : []);
          var altId = subId.indexOf('16-') === 0 ? subId.replace('16-', '15-') : subId.replace('15-', '16-');
          if (nextVis) { subSet.add(subId); subSet.add(altId); }
          else { subSet.delete(subId); subSet.delete(altId); }
          localStorage.setItem('rm_active_subcategories_v1', JSON.stringify(Array.from(subSet)));
        } catch (_) {}
      }
    }
  }


  // 2. MOUNT SINGLE AUTHORITATIVE NOTCH PILL FOR CAT 15 (HOUSE & HOME) HEADER ONLY
  function mountCat16AuthoritativeBadge(headerEl, isVisible) {
    if (!headerEl) return;

    var existing = headerEl.querySelector('#sivme-c16-authoritative-badge');
    headerEl.querySelectorAll('.sivme-notch-pill, .sivme-live-notch, .sivme-inline-badge').forEach(function (n) {
      if (n !== existing) n.remove();
    });

    var badge = existing || document.createElement('div');
    badge.id = 'sivme-c16-authoritative-badge';
    badge.className = 'sivme-notch-pill ' + (isVisible ? 'sivme-badge-live' : 'sivme-badge-dormant');
    badge.setAttribute('data-badge-urn', 'rm:cat:16');
    badge.setAttribute('data-target-urn', 'rm:cat:16');
    badge.setAttribute('data-badge-label', 'घर व मकान (House & Home)');
    badge.setAttribute('data-badge-vis', String(isVisible));

    badge.innerHTML = isVisible
      ? '<span style="color:#10b981;font-size:11px;line-height:1;">🟢</span> <span style="line-height:1;">Live</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>'
      : '<span style="color:#ff4d4d;font-size:11px;line-height:1;">🔴</span> <span style="line-height:1;">Hidden</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>';

    badge.style.cssText = [
      'position: absolute !important', 'top: -11px !important', 'right: 12px !important', 'left: auto !important', 'z-index: 70 !important',
      'background: ' + (isVisible ? '#064e3b' : '#7f1d1d') + ' !important',
      'border: 1.5px solid ' + (isVisible ? '#10b981' : '#ff4d4d') + ' !important',
      'color: ' + (isVisible ? '#34d399' : '#fca5a5') + ' !important',
      'font-family: ui-monospace, SFMono-Regular, system-ui, sans-serif !important',
      'font-size: 10.5px !important', 'font-weight: 800 !important', 'padding: 3px 10px !important',
      'border-radius: 9999px !important', 'box-shadow: 0 3px 10px rgba(0,0,0,0.85) !important',
      'cursor: pointer !important', 'display: inline-flex !important', 'visibility: visible !important',
      'opacity: 1 !important', 'align-items: center !important', 'gap: 4px !important',
      'user-select: none !important', '-webkit-user-select: none !important',
      'touch-action: manipulation !important', 'pointer-events: auto !important',
      'line-height: 1 !important', 'white-space: nowrap !important'
    ].join(';');

    var handleToggle = function (ev) {
      if (ev) {
        if (ev.cancelable) ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
      }
      var core = getCore();
      if (!core.isConsoleAuthorized()) return;

      var now = Date.now();
      if (now - (lastUrnActionTimes['rm:cat:16'] || 0) < 220) return;
      lastUrnActionTimes['rm:cat:16'] = now;

      var curVis = core.getUrnVisibility ? core.getUrnVisibility('rm:cat:16') : (badge.getAttribute('data-badge-vis') === 'true');
      var nextVis = !curVis;

      badge.setAttribute('data-badge-vis', String(nextVis));
      badge.className = 'sivme-notch-pill ' + (nextVis ? 'sivme-badge-live' : 'sivme-badge-dormant');
      badge.innerHTML = nextVis
        ? '<span style="color:#10b981;font-size:11px;line-height:1;">🟢</span> <span style="line-height:1;">Live</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>'
        : '<span style="color:#ff4d4d;font-size:11px;line-height:1;">🔴</span> <span style="line-height:1;">Hidden</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>';
      badge.style.setProperty('background', (nextVis ? '#064e3b' : '#7f1d1d'), 'important');
      badge.style.setProperty('border', '1.5px solid ' + (nextVis ? '#10b981' : '#ff4d4d'), 'important');
      badge.style.setProperty('color', (nextVis ? '#34d399' : '#fca5a5'), 'important');

      headerEl.classList.toggle('sivme-ghost-live', nextVis);
      headerEl.classList.toggle('sivme-ghost-dormant', !nextVis);
      headerEl.style.setProperty('outline', '2.5px dashed ' + (nextVis ? '#10b981' : '#ff3838'), 'important');
      headerEl.style.setProperty('outline-offset', '3px', 'important');
      headerEl.style.setProperty('opacity', '1', 'important');

      persistCat16Toggle('rm:cat:16', nextVis, 'घर व मकान (House & Home)', core);

      if (window.RM_SIVME && typeof window.RM_SIVME.applyInSituAudit === 'function') {
        setTimeout(window.RM_SIVME.applyInSituAudit, 30);
      }
    };

    badge.onclick = handleToggle;
    badge.addEventListener('touchend', handleToggle, { passive: false });

    headerEl.style.setProperty('overflow', 'visible', 'important');
    if (window.getComputedStyle(headerEl).position === 'static') {
      headerEl.style.setProperty('position', 'relative', 'important');
    }
    if (!existing) headerEl.appendChild(badge);
  }


  // 3. PLAY STORE PARENT CARD RENDERING (CATEGORY 15 = HOUSE & HOME)
  function renderPlayStoreCardInternal(headerEl, isOpen) {
    if (!headerEl) return;
    if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard === 'function') {
      window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard(headerEl, '15', isOpen);
      return;
    }

    var container = headerEl.querySelector('#c16-playstore-layout');
    if (!container) {
      Array.from(headerEl.children).forEach(function (child) {
        if (!child.id || (child.id !== 'sivme-c16-authoritative-badge' && child.id !== 'c16-playstore-layout')) {
          child.style.display = 'none';
        }
      });
      container = document.createElement('div');
      container.id = 'c16-playstore-layout';
      container.style.cssText = 'width:100% !important;display:flex !important;flex-direction:column !important;gap:10px !important;padding:14px 14px 12px 14px !important;box-sizing:border-box !important;';
      headerEl.appendChild(container);
    }

    container.innerHTML = [
      '<div style="display:flex;align-items:center;gap:12px;width:100%;">',
      '  <div style="font-size:22px;font-weight:900;color:#38bdf8;font-family:ui-monospace,monospace;line-height:1;flex-shrink:0;padding-right:2px;">15.</div>',
      '  <div style="width:48px;height:48px;border-radius:12px;background:linear-gradient(135deg,#1e293b,#0f172a);border:1.5px solid rgba(56,189,248,0.4);box-shadow:0 4px 10px rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="font-size:24px;line-height:1;">🏠</span></div>',
      '  <div style="display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;">',
      '    <div style="font-size:18px;font-weight:800;color:#ffffff;letter-spacing:-0.3px;line-height:1.25;">House &amp; Home</div>',
      '    <div style="font-size:13px;font-weight:600;color:#34d399;line-height:1.3;margin-top:2px;">कमरा खोजें (0% ब्रोकरेज), किराया बहीखाता व बिजली यूनिट, ऑन-कॉल मिस्त्री</div>',
      '  </div>',
      '</div>',
      '<div style="display:flex;align-items:center;gap:8px;width:100%;margin-top:1px;flex-wrap:wrap;">',
      '  <span style="font-size:12px;font-weight:800;color:#facc15;background:rgba(250,204,21,0.12);border:1px solid rgba(250,204,21,0.3);padding:2px 7px;border-radius:5px;">★ 4.9 रेटिंग</span>',
      '  <span style="font-size:12px;font-weight:700;color:#38bdf8;background:rgba(56,189,248,0.14);border:1px solid rgba(56,189,248,0.35);padding:2px 8px;border-radius:5px;">✓ Rise Verified Network</span>',
      '  <span style="font-size:12px;font-weight:700;color:#e2e8f0;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);padding:2px 8px;border-radius:5px;">24x7 सहायता</span>',
      '</div>',
      '<div style="display:flex;justify-content:flex-end;align-items:center;width:100%;margin-top:4px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.08);">',
      '  <div style="font-size:13px;font-weight:800;color:#10b981;background:rgba(16,185,129,0.15);border:1.5px solid rgba(16,185,129,0.5);padding:5px 14px;border-radius:9999px;display:inline-flex;align-items:center;gap:6px;">',
      '    <span>' + (isOpen ? 'समेटें ▲' : 'और देखें ▼') + '</span>',
      '  </div>',
      '</div>'
    ].join('');
  }


  // 4. SUB-CARDS DATA REGISTRY (LOCAL BACKUP FOR 15-1/15-2/15-3 & LEGACY 16-1/16-2/16-3)
  var SUBCARD_DATA = {
    '15-1': {
      meta: '<span style="color:#facc15;font-weight:800;">★ 4.9</span> • <span>28,500+ बुकिंग्स</span> • <span style="color:#34d399;font-weight:700;">⚡ 30 मिनट विज़िट</span>',
      tags: [
        { text: '❄️ AC, फ्रिज, वाशिंग मशीन व RO', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
        { text: '⚡ इलेक्ट्रीशियन व वायरिंग फॉल्ट', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
        { text: '🚰 प्लंबर, मोटर व पाइप फिटिंग', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
        { text: '🪚 कारपेंटर, लॉक व पेंटिंग कार्य', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
      ],
      desc: 'घर की हर मरम्मत और मेंटेनेंस के लिए एक ही जगह पर विश्वसनीय सेवा, पारदर्शी रेट कार्ड व 30-दिन कार्य गारंटी।'
    },
    '15-2': {
      meta: '<span style="color:#facc15;font-weight:800;">★ 4.9</span> • <span>19,400+ मकान मालिक</span> • <span style="color:#38bdf8;font-weight:700;">📱 WhatsApp रसीद</span>',
      tags: [
        { text: '🧾 1-टैप किराया रसीद', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
        { text: '⚡ सब-मीटर कैलकुलेटर', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
        { text: '👥 किराएदार खाता प्रबंधन', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
        { text: '📑 डिजिटल रेंट एग्रीमेंट', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
      ],
      desc: 'मकान मालिक और किराएदार दोनों के लिए आसान और पारदर्शी डिजिटल हिसाब-किताब, PDF रसीद व SMS ड्यू अलर्ट।'
    },
    '15-3': {
      meta: '<span style="color:#facc15;font-weight:800;">★ 4.9</span> • <span>0% ब्रोकरेज</span> • <span style="color:#34d399;font-weight:700;">🏠 डायरेक्ट मकान मालिक</span>',
      tags: [
        { text: '🛏️ सिंगल/शेयरिंग रूम व PG', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
        { text: '🏢 1/2/3 BHK फैमिली फ्लैट', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
        { text: '🏪 दुकान, ऑफिस व गोदाम', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
        { text: '📍 पिनकोड अनुसार सीधा संपर्क', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
      ],
      desc: 'बिना किसी ब्रोकर और दलाली के सीधे मकान मालिक से किराए पर कमरा, फ्लैट या दुकान लें।'
    }
  };
  SUBCARD_DATA['16-1'] = SUBCARD_DATA['15-1'];
  SUBCARD_DATA['16-2'] = SUBCARD_DATA['15-2'];
  SUBCARD_DATA['16-3'] = SUBCARD_DATA['15-3'];


  // 5. SUB-CARDS RENDERING (DELEGATED + LOCAL VOID-COLLAPSE FALLBACK)
  function enrichSubCardUIInternal(subCard, subId) {
    if (!subCard) return;
    var normId = String(subId || '').replace(/^16-/, '15-');
    if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard === 'function') {
      window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard(subCard, '15', normId);
      return;
    }

    var info = SUBCARD_DATA[normId] || SUBCARD_DATA[subId];
    if (!info) return;

    subCard.style.setProperty('height', 'auto', 'important');
    subCard.style.setProperty('min-height', 'auto', 'important');
    subCard.style.setProperty('display', 'flex', 'important');
    subCard.style.setProperty('flex-direction', 'column', 'important');
    subCard.style.setProperty('justify-content', 'flex-start', 'important');
    subCard.style.setProperty('gap', '10px', 'important');

    var old = subCard.querySelector('#subcard-enrich-' + subId) || subCard.querySelector('#subcard-enrich-' + normId);
    if (old) old.remove();

    var enrichDiv = document.createElement('div');
    enrichDiv.id = 'subcard-enrich-' + normId;
    enrichDiv.style.cssText = 'width:100% !important;display:flex !important;flex-direction:column !important;gap:8px !important;padding:10px 12px !important;background:rgba(15,23,42,0.65) !important;border:1px solid rgba(56,189,248,0.2) !important;border-radius:10px !important;box-sizing:border-box !important;text-align:left !important;';

    var tagsHtml = info.tags.map(function (t) {
      return '<span style="font-size:11.5px;font-weight:600;padding:3px 8px;background:' + t.bg + ';color:' + t.c + ';border:1px solid ' + t.c + '44;border-radius:6px;white-space:nowrap;">' + t.text + '</span>';
    }).join(' ');

    enrichDiv.innerHTML = [
      '<div style="font-size:12px;color:#94a3b8;display:flex;align-items:center;gap:6px;font-weight:600;">' + info.meta + '</div>',
      '<div style="display:flex;flex-wrap:wrap;gap:5px;">' + tagsHtml + '</div>',
      '<div style="font-size:12px;color:#cbd5e1;line-height:1.4;opacity:0.95;">' + info.desc + '</div>'
    ].join('');

    var bottomButtons = null;
    var children = subCard.children;
    for (var i = children.length - 1; i >= 0; i--) {
      var cText = children[i].textContent || '';
      if (cText.indexOf('पिन') !== -1 || cText.indexOf('वीडियो') !== -1 || cText.indexOf('खोलें') !== -1 || cText.indexOf('उपलब्ध') !== -1) {
        bottomButtons = children[i];
        break;
      }
    }
    if (bottomButtons && bottomButtons.parentElement === subCard) {
      subCard.insertBefore(enrichDiv, bottomButtons);
    } else {
      subCard.appendChild(enrichDiv);
    }
  }


  // 6. AUDIT CATEGORY 15 HOUSE & HOME (DECOUPLED NATIVE PASS-THROUGH)
  function auditCat16Complete(isAuth, auditElementFn) {
    var core = getCore();
    var c15Container = document.querySelector('#categoryModal [data-cat-id="c15"], #categoryModal [data-cat-id="15"]');
    if (!c15Container) return;

    c15Container.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
    c15Container.style.setProperty('outline', 'none', 'important');
    c15Container.querySelectorAll(':scope > .sivme-notch-pill, :scope > .sivme-live-notch, :scope > .sivme-inline-badge').forEach(function (n) {
      n.remove();
    });

    var c15Header = c15Container.querySelector(':scope > div:first-child');
    var isCatVis = core.getUrnVisibility('rm:cat:16') && core.getUrnVisibility('rm:cat:15');
    var subContainer = document.getElementById('sub-c15');
    var isSubOpen = subContainer && !subContainer.classList.contains('hidden') && subContainer.style.display !== 'none';

    renderPlayStoreCardInternal(c15Header, isSubOpen);

    if (!isAuth) {
      c15Container.classList.toggle('sivme-public-hidden', !isCatVis);
      c15Container.style.display = isCatVis ? '' : 'none';
      if (c15Header) {
        c15Header.querySelectorAll('.sivme-notch-pill, .sivme-inline-badge, .sivme-live-notch').forEach(function (n) { n.remove(); });
        c15Header.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
        c15Header.style.removeProperty('outline');
      }
    } else {
      c15Container.classList.remove('sivme-public-hidden');
      c15Container.style.display = '';
      if (c15Header) {
        c15Header.classList.add('sivme-badge-anchor');
        c15Header.classList.toggle('sivme-ghost-live', isCatVis);
        c15Header.classList.toggle('sivme-ghost-dormant', !isCatVis);
        c15Header.style.setProperty('outline', '2.5px dashed ' + (isCatVis ? '#10b981' : '#ff3838'), 'important');
        c15Header.style.setProperty('outline-offset', '3px', 'important');
        c15Header.style.setProperty('opacity', '1', 'important');

        mountCat16AuthoritativeBadge(c15Header, isCatVis);

        if (c15Header.getAttribute('data-sivme-pass-bound') !== 'true') {
          c15Header.setAttribute('data-sivme-pass-bound', 'true');
          c15Header.addEventListener('click', function (e) {
            if (e.target.closest('.sivme-notch-pill, #sivme-c16-authoritative-badge')) return;
            var sub = document.getElementById('sub-c15');
            if (sub) sub.style.removeProperty('display');
            if (window.RM_SIVME && typeof window.RM_SIVME.applyInSituAudit === 'function') {
              setTimeout(window.RM_SIVME.applyInSituAudit, 60);
              setTimeout(window.RM_SIVME.applyInSituAudit, 250);
            }
          }, false);
        }
      }
    }

    document.querySelectorAll('#sub-c15 > div').forEach(function (subCard, idx) {
      var subId = '15-' + (idx + 1);
      var subUrn = 'rm:cat:16:sub:16-' + (idx + 1);
      var subLabelEl = subCard.querySelector('.text-xs') || subCard;
      var subLabel = subLabelEl ? subLabelEl.textContent.trim() : (subId + ' सेवा');

      enrichSubCardUIInternal(subCard, subId);

      if (!isSubOpen || !isAuth) {
        subCard.querySelectorAll('.sivme-notch-pill, .sivme-live-notch, .sivme-inline-badge').forEach(function (n) { n.remove(); });
        subCard.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
        subCard.style.removeProperty('outline');
        return;
      }
      if (typeof auditElementFn === 'function') {
        auditElementFn(subCard, subUrn, subLabel, isAuth);
      }
    });

    CAT16_URN_SELECTORS.forEach(function (def) {
      var node = document.querySelector(def.selector);
      if (node && typeof auditElementFn === 'function') {
        auditElementFn(node.parentElement || node, def.urn, def.label, isAuth);
      }
    });
  }

  window.RM_CAT16_ADAPTER = {
    auditCat16Complete: auditCat16Complete,
    persistCat16Toggle: persistCat16Toggle,
    URN_SELECTORS: CAT16_URN_SELECTORS
  };
  window.RM_CAT15_ADAPTER = window.RM_CAT16_ADAPTER;

  if (window.RM_SIVME) {
    window.RM_SIVME.adapters = window.RM_SIVME.adapters || {};
    window.RM_SIVME.adapters['cat16'] = auditCat16Complete;
    window.RM_SIVME.adapters['cat15'] = auditCat16Complete;
  }
})();
