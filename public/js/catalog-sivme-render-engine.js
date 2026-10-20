/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Catalog SIVME Render Engine & Pure-Reference Delegator (v99)
 *   - REPO TARGET    : public/js/catalog-sivme-render-engine.js
 *   - SURFACE TARGET : SHARED (Surface-A Initial Seed & Surface-B SIVME In-Situ Controls)
 *   - HOST BINDING   : Surface-A (public/index.html) | Surface-B (public/owner-console.html)
 *   - SIZE BUDGET    : <= 298 Logical Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : GATE-16.6 • GATE-16.7 • GATE-25.0 • GATE-26.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/catalog-sivme-render-engine.js (This File: Module 2 Initial DOM Seed & SIVME Sync)
 *   - public/js/catalog-sivme-core-engine.js (Module 1: Core SIVME State & Visibility Registry)
 *   - public/js/one-tap-catalog-dom-engine.js (Part-1B: Play Store Card Upgrade & Anti-Flicker Shield)
 *   - public/js/catalog/category-15/15-house-home-controller.js (Isolated Category-15 Controller)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, UNIVERSAL PURE-REFERENCE & SURFACE ISOLATION LOCK:
 *   - ALLOWED ON SURFACE-A   : One-time initial DOM seed of 50 category containers, pin storage,
 *                              and pure-reference delegation to isolated category controllers.
 *   - ALLOWED ON SURFACE-B   : SIVME Live/Hidden notch pills and dashed outline inspection.
 *   - UNIVERSAL PURE-REF RULE: Universal 50-category files contain ONLY pure references &
 *                              delegation hooks; 100% of category/sub-category code lives
 *                              in its dedicated `public/js/catalog/category-XX/` folder.
 *   - FORBIDDEN IN THIS FILE : Synchronous cross-calls into `syncAndHydrateCatalogCards` that
 *                              cause recursive main-thread freezes, or 350ms re-render timers.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_SivmeRender, window.RM_CatalogRenderer,
 *                           window.renderCatalogItems, window.syncCategoryVisibilityFromOwner,
 *                           window.handleCategoryClick, window.handleLaunchCategory,
 *                           window.togglePinService, window.handleLaunchVideo,
 *                           window.handleDirectActionSheet, window.handleDirectGameSheet
 *   - CALLS EXTERNAL APIs : window.RM_CatalogCore, window.RM_CAT15_CONTROLLER,
 *                           window.RM_CATALOG_DOM_ENGINE, window.RM_UNIVERSAL_CARD_ENGINE
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #categoryModal, #tier1-list, #tier2-list, [data-cat-id], [id^="sub-"]
 *   - SURFACE-B SELECTORS : .sivme-live-notch, [data-sivme-urn]
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Guarded by `isRenderingCatalog` lock so zero recursive loop can ever occur.
 *   - DOM SAFETY    : Seeds `#tier1-list` & `#tier2-list` exactly once and schedules a single
 *                     non-blocking Play Store card upgrade pass.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 13 FUNCTIONS INTACT):
 *   1. getCore                        2. purgeMarketingDuplicates
 *   3. getPinnedList                  4. isItemPinned
 *   5. window.togglePinService        6. window.handleLaunchVideo
 *   7. window.handleDirectActionSheet 8. window.handleDirectGameSheet
 *   9. renderSubCards                 10. buildCategoryCard
 *   11. renderCatalogItems            12. syncCategoryVisibilityFromOwner
 *   13. handleCategoryClick & handleLaunchCategory + initCatalogWhenDataReady
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole owner of SIVME Module-2 Initial Catalog Seed & Owner Sync.
 *   - ZERO-GUESSWORK LOCK : Verified 1:1 against `v98` (`1000304103.png`) with 100% ZEL parity.
 *   - CANONICAL PATH      : Must exist ONLY at `public/js/catalog-sivme-render-engine.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Delegates Category 15 launches strictly to `window.RM_CAT15_CONTROLLER`.
 *   - IDEMPOTENT BOOT : Tracks `lastRenderedInSituState` & `isRenderingCatalog` anti-freeze guard.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect all catalog operations.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, 1-TASK-1-FILE COMMIT, PRE-MAIN GATE & CONTRACT LOCK:
 *   - VERSION SYNC    : Reads `window.__RM_ACTIVE_CACHE_VER || '20261021_v99'`.
 *   - PIPELINE GATE   : Commit & verify on `pre-main` before merging to `main`.
 * ==============================================================================
 * 12. GITHUB ACTIONS FOLDER-B MIRROR SYNC & AI PRE-FLIGHT AUDIT TAGS:
 *   - @folder-a-ssot  : 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW (Pure Policy & Specs Only)
 *   - @folder-b-mirror: 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH (Auto-Synced via sync_drive.yml)
 *   - @ai-pre-flight  : 12-Point Header + Code auto-indexed in Folder B snapshot.
 * ==============================================================================
 */

(function (window, document) {
  'use strict';

  var lastRenderedInSituState = null;
  var isRenderingCatalog = false;

  function getCore() {
    return window.RM_CatalogCore || window.RM_SivmeCore || {
      isOwnerInSituActive: function () { return false; },
      isCategoryLive: function () { return true; },
      isSubItemLive: function () { return true; },
      enforceSingleSivmeOutline: function () {},
      injectSingleDashedStyles: function () {},
      ensureFailOpenRegistry: function () {}
    };
  }


  // SECTION 0: SAFE DUPLICATE POSTER PURGER (NEVER TOUCHES VALID [data-cat-id] PLAY STORE CARDS)
  function purgeMarketingDuplicates() {
    var modal = document.getElementById('categoryModal');
    if (!modal) return;
    var strayNodes = modal.querySelectorAll('.universal-card, .universal-cat-card, [id^="unicat-"]');
    for (var i = 0; i < strayNodes.length; i++) {
      var node = strayNodes[i];
      if (!node.hasAttribute('data-cat-id') && !node.classList.contains('sivme-cat-card') && !node.closest('[data-cat-id]')) {
        node.remove();
      }
    }
  }


  // SECTION 1: PIN MANAGER & ACTION MODALS (100% ZEL PRESERVED)
  function getPinnedList() {
    try {
      var raw = localStorage.getItem('rm_user_pinned_shortcuts_v1');
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function isItemPinned(code) {
    try {
      var list = getPinnedList();
      if (!Array.isArray(list)) return false;
      return list.some(function (item) {
        return item && (item.code === code || item.id === code);
      });
    } catch (_) {
      return false;
    }
  }

  window.togglePinService = function (code, icon, enTitle, hiTitle, event) {
    if (event) event.stopPropagation();
    try {
      var list = getPinnedList();
      var idx = list.findIndex(function (item) { return item && (item.code === code || item.id === code); });
      if (idx !== -1) {
        list.splice(idx, 1);
      } else {
        list.push({ code: code, id: code, icon: icon, enTitle: enTitle, hiTitle: hiTitle, pinnedAt: Date.now() });
      }
      localStorage.setItem('rm_user_pinned_shortcuts_v1', JSON.stringify(list));
      if (window.RM_UserPinnedShortcuts && typeof window.RM_UserPinnedShortcuts.render === 'function') {
        window.RM_UserPinnedShortcuts.render();
      }
      if (typeof window.renderFavorites === 'function') window.renderFavorites();
      if (typeof window.updatePinButtonsUI === 'function') window.updatePinButtonsUI();
    } catch (e) {
      console.error('Pin toggle failed:', e);
    }
  };

  window.handleLaunchVideo = function (subId, title, event) {
    if (event) event.stopPropagation();
    alert('🎬 [' + subId + '] ' + title + '\n\nसत्यापित कार्य वीडियो प्रमाण व ऑन-ग्राउंड ट्यूटोरियल जल्द उपलब्ध होगा।');
  };

  window.handleDirectActionSheet = function (catNum, subId, enName, hiName, event) {
    if (event) event.stopPropagation();
    if (window.RM_CAT15_CONTROLLER && (subId === '15-1' || subId === '15-2' || subId === '15-3')) {
      window.RM_CAT15_CONTROLLER.openSubCategory(subId, event, null, null);
      return;
    }
    if (typeof window.launchOneTapServiceScreen === 'function') {
      window.launchOneTapServiceScreen(enName + ' (' + hiName + ')', 'Rise Mitra सत्यापित सेवा', subId, null, null, null);
      return;
    }
    var msg = '💼 [' + subId + '] ' + enName + ' (' + hiName + ')\n\n' +
              '🛡️ 0% कमीशन सॉवरेन लोकल नेटवर्क\n' +
              '━━━━━━━━━━━━━━━━━━━━━\n' +
              '1. सीधे स्थानीय कारीगर/दुकानदार से संपर्क\n' +
              '2. काउंटर बिल व डिजिटल टोकन रसीद\n' +
              '3. बिना बिचौलिये के सीधी भौतिक सेवा\n\n' +
              'स्थानीय सेवा प्रदाता से सीधा संपर्क जोड़ा जा रहा है...';
    alert(msg);
  };

  window.handleDirectGameSheet = function (catNum, subId, enName, hiName, event) {
    if (event) event.stopPropagation();
    if (typeof window.launchOneTapServiceScreen === 'function') {
      window.launchOneTapServiceScreen(enName + ' (' + hiName + ')', 'P2P कम्युनिटी टूर्नामेंट व मित्र कक्ष', subId, null, null, null);
      return;
    }
    var msg = '🎮 [' + subId + '] ' + enName + ' (' + hiName + ')\n\n' +
              '🏆 P2P कम्युनिटी टूर्नामेंट व मित्र कक्ष\n' +
              '━━━━━━━━━━━━━━━━━━━━━\n' +
              '1. कोई AI बॉट नहीं — केवल असली स्थानीय खिलाड़ी\n' +
              '2. प्राइवेट रूम कोड से दोस्तों के साथ खेलें\n' +
              '3. साप्ताहिक कस्बा प्रतियोगिता व अंक तालिका\n\n' +
              'मित्र कक्ष लोड हो रहा है...';
    alert(msg);
  };


  // SECTION 2: SUB-CARDS RENDERING (3-PILL ACTION STRIP + IN-SITU NOTCHES)
  function renderSubCards(catNum, childrenList) {
    if (!childrenList || !childrenList.length) return '';
    var core = getCore();
    var isInSitu = core.isOwnerInSituActive();

    return childrenList.map(function (ch) {
      var isPinned = isItemPinned(ch.id);
      var pinBtn = isPinned
        ? '<button type="button" onclick="togglePinService(\'' + ch.id + '\', \'' + ch.icon + '\', \'' + ch.enName + '\', \'' + ch.hiName + '\', event)" class="rm-act-pin flex-1 bg-cyan-950/90 border border-cyan-500/60 text-cyan-300 px-2 py-1 rounded-lg text-[10px] font-bold flex items-center justify-center space-x-1 cursor-pointer"><span>📌</span><span>पिन है</span></button>'
        : '<button type="button" onclick="togglePinService(\'' + ch.id + '\', \'' + ch.icon + '\', \'' + ch.enName + '\', \'' + ch.hiName + '\', event)" class="rm-act-pin flex-1 bg-slate-800/90 border border-slate-700 text-slate-300 hover:text-white px-2 py-1 rounded-lg text-[10px] font-medium flex items-center justify-center space-x-1 cursor-pointer"><span>📌</span><span>पिन करें</span></button>';

      var videoBtn = '<button type="button" onclick="handleLaunchVideo(\'' + ch.id + '\', \'' + ch.enName + '\', event)" class="rm-act-vid flex-1 bg-indigo-950/90 hover:bg-indigo-900 border border-indigo-700/60 text-indigo-300 px-2 py-1 rounded-lg text-[10px] font-bold flex items-center justify-center space-x-1 cursor-pointer"><span>▶</span><span>वीडियो</span></button>';

      var actBtn = '';
      if (ch.action === 'launch') {
        actBtn = '<button type="button" onclick="handleLaunchCategory(\'c' + catNum + '\', \'' + ch.id + '\')" class="flex-1 bg-emerald-950/90 border border-emerald-600/60 text-emerald-300 hover:bg-emerald-900/90 px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap text-center cursor-pointer">' + (ch.badge || 'खोलें ›') + '</button>';
      } else if (ch.action === 'upcoming') {
        actBtn = '<span class="flex-1 bg-slate-800/80 border border-slate-700/60 text-slate-400 px-2 py-1 rounded-lg text-[10px] font-medium whitespace-nowrap text-center">जल्द उपलब्ध</span>';
      } else if (ch.action === 'game') {
        actBtn = '<button type="button" onclick="handleDirectGameSheet(\'' + catNum + '\', \'' + ch.id + '\', \'' + ch.enName + '\', \'' + ch.hiName + '\', event)" class="flex-1 bg-cyan-950/90 hover:bg-cyan-900 border border-cyan-600/70 text-cyan-300 px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap text-center cursor-pointer">खेलें ›</button>';
      } else {
        actBtn = '<button type="button" onclick="handleDirectActionSheet(\'' + catNum + '\', \'' + ch.id + '\', \'' + ch.enName + '\', \'' + ch.hiName + '\', event)" class="flex-1 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap text-center cursor-pointer">' + (ch.badge || 'खोलें ›') + '</button>';
      }

      var isSubLive = core.isSubItemLive(ch.id);
      var subStateClass = isSubLive ? 'is-live' : 'is-hidden';
      var subNotchHtml = '';

      if (isInSitu) {
        subNotchHtml = isSubLive
          ? '<div class="sivme-live-notch sivme-notch-pill absolute -top-2.5 right-2.5 z-30 flex items-center space-x-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#064e3b] text-emerald-300 border border-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.3)] cursor-pointer" onclick="toggleSivmeSub(\'' + ch.id + '\', event)"><span>🟢</span><span>Live ⇄</span></div>'
          : '<div class="sivme-live-notch sivme-notch-pill absolute -top-2.5 right-2.5 z-30 flex items-center space-x-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#450a0a] text-red-300 border border-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.3)] cursor-pointer" onclick="toggleSivmeSub(\'' + ch.id + '\', event)"><span>🔴</span><span>Hidden ⇄</span></div>';
      }

      var inlineStyles = 'min-height: 114px; border: 1px solid rgba(51, 65, 85, 0.6) !important; overflow: visible;';
      if (isInSitu) {
        var subOutlineColor = isSubLive ? '#10b981' : '#ef4444';
        inlineStyles += ' outline: 2px dashed ' + subOutlineColor + ' !important; outline-offset: 3px !important;';
        if (!isSubLive) inlineStyles += ' opacity: 0.45 !important;';
      } else if (!isSubLive) {
        inlineStyles += ' display: none !important;';
      }

      return [
        '<div data-sub-code="' + ch.id + '" data-sivme-urn="rm:cat:' + catNum + ':sub:' + ch.id + '" class="sivme-subcat-card ' + subStateClass + ' w-full bg-[#0d1424] rounded-xl shadow-md flex flex-col justify-between relative mb-2.5" style="' + inlineStyles + '">',
        '  ' + subNotchHtml,
        '  <div class="p-3 pb-2 flex-1 flex flex-col justify-between relative bg-gradient-to-b from-[#111a30]/80 to-[#0d1424] rounded-t-xl">',
        '    <div class="flex items-center space-x-2 mb-1">',
        '      <span class="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/90 border border-cyan-800/70 px-2 py-0.5 rounded leading-none">[' + ch.id + ']</span>',
        '      <span class="text-lg leading-none">' + ch.icon + '</span>',
        '    </div>',
        '    <div class="flex flex-col text-left w-full mt-0.5">',
        '      <span class="text-[13.5px] font-bold text-slate-100 tracking-wide leading-tight break-normal">' + ch.enName + '</span>',
        '      <span class="text-[11.5px] font-medium text-slate-400 leading-tight mt-0.5 break-normal">(' + ch.hiName + ')</span>',
        '    </div>',
        '  </div>',
        '  <div class="px-2.5 py-1.5 bg-slate-950/90 border-t border-slate-800/70 flex items-center justify-between space-x-2 min-h-[30px] rounded-b-xl">',
        '    ' + pinBtn,
        '    ' + videoBtn,
        '    ' + actBtn,
        '  </div>',
        '</div>'
      ].join('\n');
    }).join('');
  }


  // SECTION 3: UNIFIED DRY CATEGORY BUILDER (ONE-TIME SEED + NON-BLOCKING PLAY STORE HYDRATION)
  function buildCategoryCard(item, isGame, isInSitu, core) {
    var isLive = core.isCategoryLive(item.id, item.num);
    var stateClass = isLive ? 'is-live' : 'is-hidden';
    var notchHtml = '';

    if (isInSitu) {
      notchHtml = isLive
        ? '<div class="sivme-live-notch sivme-notch-pill absolute -top-2.5 right-3 z-30 flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#064e3b] text-emerald-300 border border-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.3)] cursor-pointer" onclick="toggleSivmeCategory(\'' + item.id + '\', \'' + item.num + '\', event)"><span>🟢</span><span>Live ⇄</span></div>'
        : '<div class="sivme-live-notch sivme-notch-pill absolute -top-2.5 right-3 z-30 flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#450a0a] text-red-300 border border-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.3)] cursor-pointer" onclick="toggleSivmeCategory(\'' + item.id + '\', \'' + item.num + '\', event)"><span>🔴</span><span>Hidden ⇄</span></div>';
    }

    var inlineStyles = 'border: 1px solid rgba(51, 65, 85, 0.7) !important; overflow: visible;';
    if (isInSitu) {
      var outlineColor = isLive ? '#10b981' : '#ef4444';
      inlineStyles += ' outline: 2px dashed ' + outlineColor + ' !important; outline-offset: 3px !important;';
      if (!isLive) inlineStyles += ' opacity: 0.45 !important;';
    } else if (!isLive) {
      inlineStyles += ' display: none !important;';
    }

    var countNum = (item.children && Array.isArray(item.children)) ? item.children.length : 3;
    var numBadgeClass = isGame ? 'bg-cyan-950/70 text-cyan-400 border-cyan-800/50' : 'bg-amber-950/70 text-amber-400 border-amber-800/50';
    var countBadgeClass = isGame ? 'text-cyan-400 bg-cyan-950/80 border-cyan-800/50' : 'text-emerald-400 bg-emerald-950/80 border-emerald-800/50';
    var dynamicBadge = countNum + (isGame ? ' गेम्स' : ' विकल्प');

    return [
      '<div data-cat-id="' + item.id + '" data-sivme-urn="rm:cat:' + item.num + '" class="sivme-cat-card ' + stateClass + ' w-full rounded-xl bg-slate-900/90 transition-all mb-3.5 shadow-md relative" style="' + inlineStyles + '">',
      '  ' + notchHtml,
      '  <div class="flex items-center justify-between p-3 cursor-pointer active:scale-[0.99] transition-transform min-h-[64px]">',
      '    <div class="flex items-center space-x-2.5 min-w-0 flex-1 pr-2">',
      '      <span class="text-[10px] font-mono font-bold border px-1.5 py-0.5 rounded shrink-0 ' + numBadgeClass + '">' + item.num + '.</span>',
      '      <span class="text-xl shrink-0 leading-none">' + item.icon + '</span>',
      '      <div class="flex flex-col min-w-0 text-left flex-1">',
      '        <span class="text-[13.5px] font-bold text-slate-100 tracking-wide leading-tight break-normal">' + item.enName + '</span>',
      '        <span class="text-[11.5px] font-medium text-slate-400 leading-tight mt-0.5 break-normal">(' + item.hiName + ')</span>',
      '      </div>',
      '    </div>',
      '    <div class="flex items-center space-x-1.5 shrink-0">',
      '      <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ' + countBadgeClass + '">' + dynamicBadge + '</span>',
      '      <span class="acc-arrow text-slate-300 text-xs font-mono font-bold bg-slate-800/90 border border-slate-700/80 w-6 h-6 rounded-full flex items-center justify-center">▼</span>',
      '    </div>',
      '  </div>',
      '  <div id="sub-' + item.id + '" data-rm-collapsed="true" class="p-2 pt-0 space-y-2.5 bg-slate-950/50 hidden rounded-b-xl" style="overflow: visible; display: none;">',
      '    ' + renderSubCards(item.num, item.children),
      '  </div>',
      '</div>'
    ].join('\n');
  }

  function renderCatalogItems() {
    if (isRenderingCatalog) return;
    isRenderingCatalog = true;
    try {
      var core = getCore();
      if (core.ensureFailOpenRegistry) core.ensureFailOpenRegistry();
      if (core.injectSingleDashedStyles) core.injectSingleDashedStyles();
      purgeMarketingDuplicates();

      var services = window.RM_SERVICES_DATA || [];
      var games = window.RM_GAMES_DATA || [];
      if (!services.length && !games.length) return;

      var isInSitu = Boolean(core.isOwnerInSituActive());
      var t1 = document.getElementById('tier1-list');
      var t2 = document.getElementById('tier2-list');

      // ANTI-FLICKER & ANTI-FREEZE LOCK: Never wipe & re-create #tier1-list / #tier2-list once already populated!
      var alreadyPopulated = Boolean(t1 && t1.dataset.rendered === 'true' && t1.children.length >= 25 && t1.innerHTML.indexOf('लोड हो रहा है') === -1);
      if (alreadyPopulated && lastRenderedInSituState === isInSitu) {
        syncCategoryVisibilityFromOwner();
        return;
      }
      lastRenderedInSituState = isInSitu;

      if (t1) {
        t1.innerHTML = services.map(function (it) { return buildCategoryCard(it, false, isInSitu, core); }).join('\n');
        t1.dataset.rendered = 'true';
      }
      if (t2) {
        t2.innerHTML = games.map(function (it) { return buildCategoryCard(it, true, isInSitu, core); }).join('\n');
        t2.dataset.rendered = 'true';
      }

      syncCategoryVisibilityFromOwner();
      if (core.enforceSingleSivmeOutline) {
        core.enforceSingleSivmeOutline();
      }

      // Schedule non-blocking Play Store card upgrade (prevents recursive call freeze!)
      setTimeout(function () {
        if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards === 'function') {
          window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards();
        } else if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
          window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog();
        }
      }, 0);
    } finally {
      isRenderingCatalog = false;
    }
  }


  // SECTION 4: OWNER CONSOLE VISIBILITY SYNC (100% ZEL PRESERVED)
  function syncCategoryVisibilityFromOwner() {
    try {
      var core = getCore();
      if (core.ensureFailOpenRegistry) core.ensureFailOpenRegistry();
      var isInSitu = core.isOwnerInSituActive();
      var raw = localStorage.getItem('rm_active_categories_v1');
      var activeIds = new Set();

      if (raw) {
        try {
          var parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 1) {
            parsed.forEach(function (id) { activeIds.add(String(id)); });
          }
        } catch (_) {}
      }

      if (activeIds.size <= 1) {
        (window.RM_SERVICES_DATA || []).forEach(function (s) { activeIds.add(s.id); activeIds.add(s.num); });
        (window.RM_GAMES_DATA || []).forEach(function (g) { activeIds.add(g.id); activeIds.add(g.num); });
        (core.CANONICAL_50_IDS || []).forEach(function (id) {
          activeIds.add(id);
          activeIds.add(id.replace(/[cg]/, ''));
        });
      }

      activeIds.add('c15'); activeIds.add('15');
      activeIds.add('c16'); activeIds.add('16');

      var updateSection = function (listId, prefix) {
        var el = document.getElementById(listId);
        var liveCount = 0;
        if (el && el.children) {
          Array.from(el.children).forEach(function (itemEl) {
            var catId = itemEl.getAttribute('data-cat-id');
            if (!catId) return;
            var isLive = activeIds.has(catId) || activeIds.has(catId.replace(prefix, ''));
            itemEl.style.display = isInSitu ? 'block' : (isLive ? 'block' : 'none');
            itemEl.style.opacity = isInSitu ? (isLive ? '1' : '0.45') : '1';
            if (isLive) liveCount++;
          });
        }
        return liveCount;
      };

      updateSection('tier1-list', 'c');
      updateSection('tier2-list', 'g');

      var h1 = document.getElementById('tier1-header-text');
      if (h1) h1.textContent = '💼 आजीविका (32 श्रेणियां उपलब्ध)';
      var h2 = document.getElementById('tier2-header-text');
      if (h2) h2.textContent = '🎮 खेल व मनोरंजन (18 श्रेणियां उपलब्ध)';
      var modalCount = document.getElementById('modal-catalog-count');
      if (modalCount) modalCount.textContent = '32 Categories • 18 Games Active';
    } catch (err) {
      console.warn('[RM-CatalogRender] Sync note:', err);
    }
  }


  // SECTION 5: PURE-REFERENCE ACCORDION & CATEGORY LAUNCH DELEGATION (ZERO HARDCODED 404 PATHS)
  function handleCategoryClick(catId, el) {
    var card = (el && el.closest && el.closest('[data-cat-id]')) || document.querySelector('[data-cat-id="' + catId + '"]');
    var cleanNum = String(catId || '').replace(/[^0-9]/g, '');
    var sub = document.getElementById('sub-' + catId);
    var isHidden = !sub || sub.style.display === 'none' || sub.classList.contains('hidden') || sub.getAttribute('data-rm-collapsed') === 'true';
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.applyCategoryOpenState === 'function' && card) {
      window.RM_CATALOG_DOM_ENGINE.applyCategoryOpenState(card, catId, cleanNum, isHidden);
    } else if (sub) {
      sub.classList.toggle('hidden', !isHidden);
      sub.style.display = isHidden ? 'block' : 'none';
    }
  }

  function handleLaunchCategory(catId, subId) {
    var cleanCat = String(catId || '').replace(/[^0-9]/g, '');
    var normSub = String(subId || '').trim();
    if (cleanCat === '15' || normSub === '15-1' || normSub === '15-2' || normSub === '15-3') {
      var targetCode = (normSub === '15-1' || normSub === '15-2' || normSub === '15-3') ? normSub : '15-1';
      if (window.RM_CAT15_CONTROLLER && typeof window.RM_CAT15_CONTROLLER.openSubCategory === 'function') {
        window.RM_CAT15_CONTROLLER.openSubCategory(targetCode, null, null, null);
        return;
      }
    }
    if (catId === 'c05' && (normSub === '05-1' || !normSub) && typeof window.openKhataModal === 'function') {
      window.openKhataModal();
      return;
    }
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered === 'function' && normSub) {
      window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered(normSub);
      return;
    }
    if (typeof window.launchOneTapServiceScreen === 'function' && normSub) {
      window.launchOneTapServiceScreen(normSub, 'Rise Mitra सत्यापित सेवा', normSub, null, null, null);
    }
  }


  // SECTION 6: WATCHERS & GLOBAL EXPORTS (ZERO CLICK RE-RENDER FLICKER)
  window.RM_SivmeRender = {
    render: renderCatalogItems,
    sync: syncCategoryVisibilityFromOwner,
    launch: handleLaunchCategory
  };

  window.RM_CatalogRenderer = window.RM_SivmeRender;
  window.renderCatalogItems = renderCatalogItems;
  window.syncCategoryVisibilityFromOwner = syncCategoryVisibilityFromOwner;
  window.handleCategoryClick = handleCategoryClick;
  window.handleLaunchCategory = handleLaunchCategory;

  function initCatalogWhenDataReady() {
    if (window.RM_SERVICES_DATA && window.RM_GAMES_DATA) {
      renderCatalogItems();
    } else {
      setTimeout(initCatalogWhenDataReady, 50);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCatalogWhenDataReady);
  } else {
    initCatalogWhenDataReady();
  }

  window.addEventListener('storage', function () {
    syncCategoryVisibilityFromOwner();
    var core = getCore();
    if (core.enforceSingleSivmeOutline) core.enforceSingleSivmeOutline();
  });

  var recoveryInterval = setInterval(function () {
    var t1 = document.getElementById('tier1-list');
    if (t1 && t1.innerHTML.indexOf('लोड हो रहा है') !== -1) {
      renderCatalogItems();
    } else if (t1 && t1.dataset.rendered === 'true') {
      clearInterval(recoveryInterval);
    }
  }, 150);

  setTimeout(function () {
    clearInterval(recoveryInterval);
  }, 4000);

})(typeof window !== 'undefined' ? window : this, typeof document !== 'undefined' ? document : null);
