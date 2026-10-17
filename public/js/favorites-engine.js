/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Favorites Part-2 — Slim UI Renderer & Pin Controller v1.5
 *   - REPO TARGET    : public/js/favorites-engine.js
 *   - SURFACE TARGET : SURFACE-A ONLY (Customer PWA Home Grid & Catalog Modal Pin Sync)
 *   - HOST BINDING   : Surface-A (public/index.html) | Surface-B (public/owner-console.html)
 *   - SIZE BUDGET    : 232 Total Lines (<= 300 Logical Lines | 0% Duplicate Code)
 *   - GOVERNANCE     : 100% ZEL (Zero Element Loss) | Fail-Closed | Modular Isolation
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/favorites-engine.js (This File: Part-2 Slim UI & Pin Controller — 232 Lines)
 *   - public/js/favorites-data-extractor.js (Part-1: CANONICAL_SUBCATS & DOM Extractor — 248 Lines)
 *   - public/js/one-tap-shell-bridge.js (Master 1-Tap Router & Modal Controller — Surface-A)
 *   - public/js/universal-catalog/catalog-loader.js (Dynamic Atomic Category & Tier-2 Games Loader)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ⚠️ HARD INVARIANT & ANTI-PATTERN LOCK (STRICT NEGATIVE INVARIANT):
 *     1. ZERO ✕ / CLOSE / UNPIN BUTTONS ON HOME GRID CARDS (100% Tap-Safe).
 *        Unpinning is EXCLUSIVELY allowed from inside the Catalog Modal ([✓ पिन किया]).
 *     2. BILINGUAL TYPOGRAPHY: Line 1 English Roman (Bold) | Line 2 Hindi Subtitle.
 *     3. TOP ROW GEOMETRY: Left Cyan Sequence Number (18px) | Right 40px Squircle Icon.
 *   - ALLOWED ON SURFACE-A   : Loading Part-1, saving pins, rendering home grid & syncing buttons.
 *   - ALLOWED ON SURFACE-B   : Passive no-op if SIVME HUD is clicked; never blocks Owner HUD.
 *   - FORBIDDEN IN THIS FILE : Duplicating Part-1 functions (CANONICAL_SUBCATS, getPinned,
 *                              findSubcardElement, extractSubcardData live in Part-1).
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.toggleServicePin, window.togglePinService,
 *                           window.unpinFavoriteItem, window.RM_UserPinnedShortcuts,
 *                           window.RM_FavoritesEngine, window.renderFavorites,
 *                           window.updatePinButtonsUI, localStorage['rm_user_pinned_shortcuts_v1']
 *   - CALLS EXTERNAL APIs : window.RM_FAVORITES_DATA.*, window.toggleMenuDrawer,
 *                           window.renderCatalogItems
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #userPinnedFavoritesSection, #userPinnedFavoritesGrid,
 *                           #rm-favorites-mount-section, #rm-favorites-mount-grid,
 *                           #pinnedCountBadge, #categoryModal, [data-cat-id]
 *   - SURFACE-B SELECTORS : Never intercept .sivme-notch-pill, #sivme-hud, or [data-sivme]
 * ==============================================================================
 * 6. ANTI-FREEZE, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Intercept only catalog pin buttons ('पिन' / 'Pin'); let card taps pass cleanly.
 *   - SCROLL SAFETY : Passive lifecycle rehydration on DOMContentLoaded, pageshow, and focus.
 *   - DOM SAFETY    : Scoped updates to favorites grid and pin buttons without full-DOM loops.
 * ==============================================================================
 * 7. 100% ZEL FUNCTION MANIFEST (PART-2 SLIM CONTROLLER + 7 LIFECYCLE LISTENERS):
 *   1. ensureFavoritesDataModuleLoaded  2. getDataApi             3. savePinned
 *   4. toggleServicePin                 5. togglePinService       6. unpinFavoriteItem
 *   7. updatePinButtonsUI               8. ensureMountSection     9. handleCardClick
 *   10. renderFavorites                 11. rehydrateEngine
 *   + Delegated to Part-1: getSeqFromElement, getPinned, findSubcardElement, extractSubcardData
 * ==============================================================================
 */

(function initUniversalFavoritesEngine() {
  'use strict';

  const STORAGE_KEY = 'rm_user_pinned_shortcuts_v1';

  // 1. Auto-load Part-1 Data & DOM Extractor Module (public/js/favorites-data-extractor.js)
  (function ensureFavoritesDataModuleLoaded() {
    if (window.RM_FAVORITES_DATA || document.getElementById('rm-favorites-data-extractor-script')) return;
    var s = document.createElement('script');
    s.id = 'rm-favorites-data-extractor-script';
    s.src = '/js/favorites-data-extractor.js?v=' + (window.__RM_ACTIVE_CACHE_VER || '20261017_v42');
    s.async = false;
    s.onload = function () { rehydrateEngine(); };
    (document.head || document.documentElement).appendChild(s);
  })();

  function getDataApi() {
    return window.RM_FAVORITES_DATA || {};
  }

  function getPinned() {
    if (getDataApi().getPinned) return getDataApi().getPinned();
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch (e) { return []; }
  }

  // 2. Persistence Writer & Canonical Pin/Unpin Toggle APIs (Catalog Modal Controls Only)
  function savePinned(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      window.dispatchEvent(new CustomEvent('rm:favorites:changed', { detail: { list } }));
    } catch (e) {
      console.warn('RM Favorites Storage Write Warning:', e);
    }
    renderFavorites();
    updatePinButtonsUI();
  }

  window.toggleServicePin = function (id, title, hiTitle, seq, icon, tag) {
    let list = getPinned();
    const targetSeq = seq || id;
    const existingIndex = list.findIndex(item => (targetSeq && (item.seq === targetSeq || item.code === targetSeq)) || item.id === id);

    if (existingIndex > -1) {
      list.splice(existingIndex, 1);
    } else {
      const s = targetSeq || '⭐';
      const c = (getDataApi().CANONICAL_SUBCATS || {})[s];
      list.push({
        id: id || `fav-${s}`,
        seq: s,
        code: s,
        tag: tag || (c ? c.tag : 'Favorite'),
        icon: icon || (c ? c.icon : '⭐'),
        title: title || (c ? c.title : 'My Favorite'),
        enTitle: title || (c ? c.title : 'My Favorite'),
        hiTitle: hiTitle || (c ? c.hiTitle : 'मेरी पसंदीदा'),
        pinnedAt: Date.now()
      });
    }
    savePinned(list);
  };

  window.togglePinService = function (code, icon, enTitle, hiTitle, event) {
    if (event) event.stopPropagation();
    window.toggleServicePin(`fav-${code}`, enTitle, hiTitle, code, icon);
  };

  window.unpinFavoriteItem = function (seqOrCode, event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
      event.stopPropagation();
    }
    let list = getPinned();
    const filtered = list.filter(item => item.seq !== seqOrCode && item.code !== seqOrCode && item.id !== seqOrCode);
    savePinned(filtered);
    if (typeof window.renderCatalogItems === 'function') window.renderCatalogItems();
  };

  // 3. Catalog Pin Buttons Synchronizer
  function updatePinButtonsUI() {
    const api = getDataApi();
    if (!api.findSubcardElement || !api.getSeqFromElement) return;
    const list = getPinned();
    document.querySelectorAll('button').forEach(btn => {
      const text = btn.textContent.trim();
      if (text.includes('पिन') || text.includes('Pin')) {
        const card = api.findSubcardElement(btn);
        const seq = api.getSeqFromElement(card);
        const isPinned = list.some(item =>
          (seq && (item.seq === seq || item.code === seq)) ||
          (card && (item.id === card.id || item.id === card.getAttribute('data-cat-id')))
        );
        btn.innerHTML = isPinned ? '✓ पिन किया' : '📌 पिन';
        btn.classList.toggle('bg-emerald-600', isPinned);
        btn.classList.toggle('text-white', isPinned);
        btn.classList.toggle('bg-slate-800', !isPinned);
        btn.classList.toggle('text-slate-300', !isPinned);
      }
    });
  }

  // 4. Natural Sequence Auto-Sort & Render (100% Tap-Safe, ZERO ✕ Cross Button)
  function ensureMountSection() {
    let section = document.getElementById('userPinnedFavoritesSection');
    let grid = document.getElementById('userPinnedFavoritesGrid');
    if (section && grid) {
      const titleEl = section.querySelector('h2, h3');
      if (titleEl) titleEl.textContent = 'My Favorites (मेरी पसंदीदा)';
      return { section, grid };
    }

    let existing = document.getElementById('rm-favorites-mount-section');
    if (existing) {
      return { section: existing, grid: existing.querySelector('#rm-favorites-mount-grid') || existing };
    }

    const allHeadings = document.querySelectorAll('h2, h3, div');
    let target = null;
    for (let i = 0; i < allHeadings.length; i++) {
      const txt = (allHeadings[i].textContent || '').trim();
      if (txt.includes('12 CORE CASHFLOW') || txt.includes('CASHFLOW VERTICALS')) {
        target = allHeadings[i].closest('section') || allHeadings[i];
        break;
      }
    }

    const mountSection = document.createElement('section');
    mountSection.id = 'rm-favorites-mount-section';
    mountSection.className = 'w-full max-w-lg mx-auto px-4 mb-5 transition-all duration-200';
    mountSection.innerHTML = `
      <div class="flex items-center justify-between mb-2.5">
        <div class="flex items-center space-x-1.5">
          <span class="text-amber-400 text-sm">⭐</span>
          <h3 class="text-xs font-bold text-slate-200 uppercase tracking-wider">My Favorites (मेरी पसंदीदा)</h3>
          <span id="pinnedCountBadge" class="text-[10px] font-bold bg-cyan-950 border border-cyan-800/60 text-cyan-300 px-2 py-0.5 rounded-full">0</span>
        </div>
        <span class="text-[10px] text-slate-400">1-Tap Shortcut (1-टैप शॉर्टकट)</span>
      </div>
      <div id="rm-favorites-mount-grid" class="grid grid-cols-2 gap-2.5"></div>
    `;

    if (target && target.parentNode) target.parentNode.insertBefore(mountSection, target);
    else (document.querySelector('main') || document.body).appendChild(mountSection);

    return { section: mountSection, grid: mountSection.querySelector('#rm-favorites-mount-grid') };
  }

  function handleCardClick(seq) {
    if (typeof window.toggleMenuDrawer === 'function') window.toggleMenuDrawer(true);
  }

  function renderFavorites() {
    const { section, grid } = ensureMountSection();
    const badge = document.getElementById('pinnedCountBadge') || (section ? section.querySelector('#pinnedCountBadge') : null);
    if (!section || !grid) return;

    const list = getPinned();
    if (list.length === 0) {
      section.classList.add('hidden');
      section.style.display = 'none';
      return;
    }

    section.classList.remove('hidden');
    section.style.display = 'block';
    if (badge) badge.textContent = `${list.length}`;

    list.sort((a, b) => {
      const parseSeq = (s) => {
        const parts = (s || '').replace('.', '').split('-').map(n => parseInt(n, 10) || 0);
        return (parts[0] || 0) * 1000 + (parts[1] || 0);
      };
      return parseSeq(a.seq) - parseSeq(b.seq);
    });

    // 100% TAP-SAFE: NO ✕ CROSS BUTTON ON THE CARD
    grid.innerHTML = list.map(item => `
      <div onclick="toggleMenuDrawer ? toggleMenuDrawer(true) : null" class="rm-solid-panel bg-[#0b1329]/95 border border-slate-700/80 hover:border-cyan-500/60 p-3.5 rounded-2xl flex flex-col justify-between relative shadow-xl active:scale-[0.98] transition-all min-h-[120px] cursor-pointer group" style="border-radius: 14px;">
        <div class="flex items-center justify-between w-full">
          <span class="text-cyan-400 font-black text-lg font-sans tracking-tight leading-none">${item.seq}.</span>
          <div class="w-10 h-10 rounded-xl bg-[#02091d] border border-cyan-500/40 flex items-center justify-center text-xl shadow-inner group-hover:scale-105 transition-transform overflow-hidden shrink-0">${item.icon}</div>
        </div>
        <div class="w-full text-left mt-2">
          <div class="text-[13px] font-black text-slate-100 leading-tight group-hover:text-cyan-300 transition-colors break-words">${item.title || item.enTitle}</div>
          <div class="text-[11px] text-emerald-400 font-bold leading-tight mt-1 break-words">${item.hiTitle || 'पसंदीदा'}</div>
        </div>
      </div>
    `).join('');
  }

  // 5. Event Listener Binding (Strict Click Interception + Surface-B SIVME Safe)
  document.addEventListener('click', function (e) {
    if (e.target && e.target.closest && e.target.closest('.sivme-notch-pill, #sivme-hud, [data-sivme]')) return;
    const btn = e.target.closest ? e.target.closest('button') : null;
    if (!btn) return;
    const text = btn.textContent.trim();
    if (text.includes('पिन') || text.includes('Pin')) {
      e.preventDefault();
      e.stopPropagation();
      const api = getDataApi();
      if (api.findSubcardElement && api.extractSubcardData) {
        const card = api.findSubcardElement(btn);
        const data = api.extractSubcardData(card);
        if (data) window.toggleServicePin(data.id, data.title, data.hiTitle, data.seq, data.icon, data.tag);
      }
    }
  }, true);

  // 6. Lifecycle Rehydration & Exports
  function rehydrateEngine() {
    renderFavorites();
    updatePinButtonsUI();
  }

  window.RM_UserPinnedShortcuts = { render: renderFavorites, getList: getPinned, unpin: window.unpinFavoriteItem };
  window.RM_FavoritesEngine = window.RM_UserPinnedShortcuts;
  window.renderFavorites = renderFavorites;
  window.updatePinButtonsUI = updatePinButtonsUI;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', rehydrateEngine);
  else rehydrateEngine();

  window.addEventListener('pageshow', rehydrateEngine);
  window.addEventListener('focus', rehydrateEngine);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) rehydrateEngine(); });
  window.addEventListener('storage', function (e) { if (!e || e.key === STORAGE_KEY) rehydrateEngine(); });
  window.addEventListener('rm:favorites:changed', rehydrateEngine);
  document.addEventListener('click', function (e) {
    const target = e.target.closest ? e.target.closest('button, [onclick*="toggle"], [id*="toggle"], #cat-menu-btn') : null;
    if (target) { setTimeout(updatePinButtonsUI, 150); setTimeout(updatePinButtonsUI, 400); }
  });
})();
