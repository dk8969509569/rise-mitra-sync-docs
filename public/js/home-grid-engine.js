/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM 12 Core Cashflow Verticals Grid Engine (v2.1 Play Store A-Z)
 *   - REPO TARGET    : public/js/home-grid-engine.js
 *   - SURFACE TARGET : SURFACE-A ONLY (Customer PWA Home Screen #verticalTilesGrid)
 *   - HOST BINDING   : Surface-A (public/index.html) | Surface-B (public/owner-console.html)
 *   - SIZE BUDGET    : Target <= 300 Logical Lines (Surface-A <= 120 KB Gzipped | 0% Secrets)
 *   - GOVERNANCE     : GATE-23.5 | 3x4 BILINGUAL PLAY STORE TAXONOMY | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/home-grid-engine.js (This File: Sole Owner of 12 Core Verticals Home Grid)
 *   - public/js/categories-data.js (50 Canonical Play Store Categories SSOT — Cat 15 House & Home)
 *   - public/js/one-tap-catalog-hydrator.js (Part-1 Hydrator & Modal Dispatchers)
 *   - public/js/one-tap-shell-bridge.js (Master 1-Tap Event Router)
 *   - public/js/favorites-engine.js & public/js/favorites-data-extractor.js (My Favorites)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Rendering 12 Play Store Core Verticals in ascending order
 *                              (02 to 30, with 15 = House & Home) into #verticalTilesGrid,
 *                              quick-tile routing, and live search filtering.
 *   - ALLOWED ON SURFACE-B   : Passive data export (`window.RM_HomeGrid.data`); zero HUD block.
 *   - FORBIDDEN IN THIS FILE : Cross-surface DOM/secret leakage or dropping any ZEL element.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_HomeGrid, window.renderHomeGrid,
 *                           window.renderHomeMacroGrid, window.handleQuickTileClick,
 *                           window.filterQuickTiles
 *   - CALLS EXTERNAL APIs : window.handleLaunchCategory, window.toggleMenuDrawer,
 *                           window.openCatalogModal, window.handleCategoryClick
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #verticalTilesGrid, #liveSearchInput, [data-cat-id], [id^="sub-"]
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Direct 1-tap routing via handleQuickTileClick without ghost-click loops.
 *   - SCROLL SAFETY : Zero touchmove/scroll blocking listeners.
 *   - DOM SAFETY    : Scoped innerHTML update on #verticalTilesGrid only.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST:
 *   1. handleQuickTileClick       2. resolveVerticalGridContainer
 *   3. renderHomeGrid             4. filterQuickTiles
 *   + Listeners: DOMContentLoaded, load
 * ==============================================================================
 * 8. ONE JOB = ONE FILE & CANONICAL PATH LOCK (ANTI-DUPLICATE FILE GUARD):
 *   - SINGLE JOB RULE : Sole authoritative owner of Home Screen 12 Core Cashflow Verticals.
 *   - CANONICAL PATH  : Must exist ONLY at `public/js/home-grid-engine.js`.
 *   - BANNED ALIASES  : Never create duplicate vertical grid files or root `/js/` copies.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY) & IDEMPOTENT EXECUTION GUARD (NO DOHRAO RULE):
 *   - ZERO DOHRAO     : Single source of truth for `CORE_12_VERTICALS` across Home Screen.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['home-grid-engine']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Wrapped in strict IIFE + try/catch so Home Screen never hangs.
 *   - ZERO-STUB RULE  : 100% complete production code; zero `// TODO` placeholders.
 *   - MOBILE EDITING  : 2-line blank spacing preserved between major functional sections.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, PRE-MAIN GATE & CONTRACT PARITY LOCK:
 *   - VERSION SYNC    : Synchronized with `window.__RM_ACTIVE_CACHE_VER` (`20261017_v45`).
 *   - PIPELINE GATE   : Commit on `pre-main` and merge to `main` for live deployment.
 * ==============================================================================
 * 12. GITHUB ACTIONS FOLDER-B MIRROR SYNC & AI PRE-FLIGHT AUDIT TAGS:
 *   - @folder-a-ssot  : 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW (Pure Policy & Specs Only)
 *   - @folder-b-mirror: 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH (Auto-Synced via sync_drive.yml)
 *   - @ai-pre-flight  : 12-Point Header + Code auto-indexed in Folder B snapshot.
 * ==============================================================================
 */

(function (window, document) {
  'use strict';

  window.__RM_LOADED_MODULES__ = window.__RM_LOADED_MODULES__ || {};
  if (window.__RM_LOADED_MODULES__['home-grid-engine']) {
    if (typeof window.renderHomeGrid === 'function') window.renderHomeGrid();
    return;
  }
  window.__RM_LOADED_MODULES__['home-grid-engine'] = true;


  // 1. 12 Play Store Standard Bilingual Core Verticals Registry (Ascending A-Z Order, 15 = House & Home)
  var CORE_12_VERTICALS = [
    {
      num: '02',
      catId: 'c02',
      subId: null,
      icon: '🚗',
      enName: 'Auto & Vehicles',
      hiName: 'वाहन व गैराज',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '03',
      catId: 'c03',
      subId: null,
      icon: '✂️',
      enName: 'Beauty & Salon',
      hiName: 'ब्यूटी व सैलून',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '05',
      catId: 'c05',
      subId: '05-1',
      icon: '💼',
      enName: 'Business & Khata',
      hiName: 'बहीखाता व सराफा',
      badge: 'खोलें ›',
      btnClass: 'text-cyan-300 bg-cyan-950/80 border-cyan-700/50',
      borderClass: 'border-cyan-500/40',
      action: 'launch'
    },
    {
      num: '09',
      catId: 'c09',
      subId: null,
      icon: '🔨',
      enName: 'Education & Skills',
      hiName: 'हुनर व कारीगर',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '11',
      catId: 'c11',
      subId: null,
      icon: '🎟️',
      enName: 'Events & Passes',
      hiName: 'कार्यक्रम व पास',
      badge: '3 पासेस ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '12',
      catId: 'c12',
      subId: null,
      icon: '💰',
      enName: 'Finance & Vault',
      hiName: 'नकद व गिरवी',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '13',
      catId: 'c13',
      subId: null,
      icon: '🍲',
      enName: 'Food & Drink',
      hiName: 'ढाबा व भोजन',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '15',
      catId: 'c15',
      subId: '15-2',
      icon: '🏠',
      enName: 'House & Home',
      hiName: 'घर व मकान',
      badge: 'खोलें ›',
      btnClass: 'text-emerald-400 bg-emerald-950/80 border-emerald-700/50',
      borderClass: 'border-emerald-500/40',
      action: 'launch'
    },
    {
      num: '19',
      catId: 'c19',
      subId: null,
      icon: '💊',
      enName: 'Medical & Clinic',
      hiName: 'दवाई व क्लिनिक',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '26',
      catId: 'c26',
      subId: null,
      icon: '🛒',
      enName: 'Shopping & Retail',
      hiName: 'किराना व खुदरा',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '29',
      catId: 'c29',
      subId: null,
      icon: '📐',
      enName: 'Tools & Utilities',
      hiName: 'ज़मीन नाप व टूल्स',
      badge: '3 टूल्स ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '30',
      catId: 'c30',
      subId: null,
      icon: '🚖',
      enName: 'Travel & Local',
      hiName: 'यात्रा व स्थानीय सेवा',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    }
  ];


  // 2. Tile Dispatcher: Fast-paths direct launches or focuses catalog drawer (100% ZEL)
  window.handleQuickTileClick = function (catId, subId) {
    try {
      if (catId === 'c15' || catId === 'c16') {
        if (typeof window.handleLaunchCategory === 'function') {
          window.handleLaunchCategory('c16', subId || '16-2');
          return;
        }
      }
      if (catId === 'c05') {
        if (typeof window.handleLaunchCategory === 'function') {
          window.handleLaunchCategory('c05', subId || '05-1');
          return;
        }
      }

      if (typeof window.toggleMenuDrawer === 'function') {
        window.toggleMenuDrawer(true);
      } else if (typeof window.openCatalogModal === 'function') {
        window.openCatalogModal();
      }

      setTimeout(function () {
        var numOnly = String(catId || '').replace(/\D/g, '');
        var el = document.querySelector('[data-cat-id="' + catId + '"], [data-cat-id="' + numOnly + '"]');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          var sub = document.getElementById('sub-' + catId) || el.querySelector('[id^="sub-"]');
          if (sub && (sub.style.display === 'none' || sub.classList.contains('hidden'))) {
            if (typeof window.handleCategoryClick === 'function') {
              window.handleCategoryClick(catId, el);
            }
          }
        }
      }, 180);
    } catch (e) {}
  };


  // 3. Resilient Container Resolver (#verticalTilesGrid + Fallback for "वर्टिकल्स लोड हो रहे हैं...")
  function resolveVerticalGridContainer() {
    var grid = document.getElementById('verticalTilesGrid');
    if (grid) return grid;
    var nodes = document.querySelectorAll('div, p, span');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.children.length === 0 && (el.textContent || '').indexOf('वर्टिकल्स लोड हो रहे हैं') !== -1) {
        return el.parentElement || el;
      }
    }
    return null;
  }


  // 4. Render the 3x4 grid into #verticalTilesGrid (100% ZEL Card Structure Intact)
  function renderHomeGrid() {
    try {
      var grid = resolveVerticalGridContainer();
      if (!grid) return;

      grid.id = 'verticalTilesGrid';
      grid.className = 'grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3 w-full';
      grid.innerHTML = CORE_12_VERTICALS.map(function (item) {
        var clickArg = item.subId ? "'" + item.catId + "', '" + item.subId + "'" : "'" + item.catId + "'";
        return [
          '<div onclick="handleQuickTileClick(' + clickArg + ')" class="cursor-pointer bg-gradient-to-b from-[#111a30] to-[#0d1424] hover:from-[#172342] hover:to-[#111a30] border ' + item.borderClass + ' rounded-xl p-2.5 flex flex-col items-center justify-between text-center transition-transform active:scale-95 shadow-md relative min-h-[102px]">',
          '  <span class="absolute top-1.5 left-2 text-[9px] font-mono font-bold text-amber-400 bg-amber-950/80 px-1 rounded">' + item.num + '</span>',
          '  <span class="text-2xl mt-1">' + item.icon + '</span>',
          '  <div class="mt-1 leading-tight w-full">',
          '    <div class="text-[11.5px] font-bold text-slate-100 tracking-tight leading-tight">' + item.enName + '</div>',
          '    <div class="text-[9.5px] font-medium text-slate-400 leading-tight mt-0.5">(' + item.hiName + ')</div>',
          '  </div>',
          '  <span class="mt-1 text-[9px] font-bold ' + item.btnClass + ' border px-2 py-0.5 rounded-full w-full">' + item.badge + '</span>',
          '</div>'
        ].join('\n');
      }).join('');
    } catch (e) {}
  }


  // 5. Live Search Filter for Bilingual Grid (100% ZEL Intact)
  window.filterQuickTiles = function () {
    var input = document.getElementById('liveSearchInput');
    var q = (input && input.value ? input.value : '').toLowerCase().trim();
    var grid = document.getElementById('verticalTilesGrid');
    if (!grid) return;
    Array.from(grid.children).forEach(function (card) {
      var txt = (card.innerText || '').toLowerCase();
      card.style.display = txt.includes(q) ? 'flex' : 'none';
    });
  };


  // 6. Global Exports & Lifecycle Auto-Boot
  window.renderHomeGrid = renderHomeGrid;
  window.renderHomeMacroGrid = renderHomeGrid;
  window.RM_HomeGrid = {
    render: renderHomeGrid,
    data: CORE_12_VERTICALS
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHomeGrid);
  } else {
    renderHomeGrid();
  }
  window.addEventListener('load', renderHomeGrid);
  setTimeout(renderHomeGrid, 60);
  setTimeout(renderHomeGrid, 220);

})(typeof window !== 'undefined' ? window : this, typeof document !== 'undefined' ? document : null);
