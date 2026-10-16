/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Favorites Part-2 — Tap-Safe UI Renderer & Pin Controller v1.4
 *   - REPO TARGET    : public/js/favorites-engine.js
 *   - SURFACE TARGET : SURFACE-A ONLY (Customer PWA Home Grid & Catalog Modal Pin Sync)
 *   - HOST BINDING   : Surface-A (public/index.html) | Surface-B (public/owner-console.html)
 *   - SIZE BUDGET    : Target <= 300 Logical Lines (Surface-A <= 120 KB Gzipped | 0% Secrets)
 *   - GOVERNANCE     : 100% ZEL (Zero Element Loss) | Fail-Closed | Modular Sandbox Isolation
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/favorites-engine.js (This File: Part-2 UI Renderer, Pin Sync & Controller)
 *   - public/js/favorites-data-extractor.js (Part-1: CANONICAL_SUBCATS 01-1..33-3 & Extractor)
 *   - public/js/one-tap-shell-bridge.js (Master 1-Tap Router & Modal Controller — Surface-A)
 *   - public/js/one-tap-catalog-hydrator.js (Catalog Card Hydration & Fullscreen Viewport)
 *   - public/js/universal-catalog/catalog-loader.js (Dynamic Atomic Category & Tier-2 Games Loader)
 *   - public/js/universal-catalog/games-entertainment-bridge.js (Play Store Taxonomy Bridge 33-50)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ⚠️ HARD INVARIANT & ANTI-PATTERN LOCK (STRICT NEGATIVE INVARIANT):
 *     1. ZERO ✕ / CLOSE / UNPIN BUTTONS ON HOME GRID CARDS:
 *        Accidental cancellation is strictly prohibited. Cards are 100% Tap-Safe.
 *        Unpinning is EXCLUSIVELY allowed from inside the Catalog Modal ([✓ पिन किया]).
 *     2. BILINGUAL TYPOGRAPHY: Line 1 English Roman (Bold) | Line 2 Hindi Subtitle.
 *     3. TOP ROW GEOMETRY: Left Cyan Sequence Number (18px) | Right 40px Squircle Icon.
 *   - ALLOWED ON SURFACE-A   : Auto-loading Part-1 favorites-data-extractor.js, persistent
 *                              localStorage read/write, natural sequence sort (01-1 to 50-3),
 *                              tap-safe home grid rendering, and catalog pin button sync.
 *   - ALLOWED ON SURFACE-B   : Passive no-op if SIVME HUD is clicked; never blocks Owner HUD.
 *   - FORBIDDEN IN THIS FILE : Cross-surface DOM/secret leakage, rendering ✕ buttons on home
 *                              cards, or wiping user pinned data on schema updates.
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
 *                           #pinnedCountBadge, #categoryModal, [data-cat-id], .c16-subcard-clean
 *   - SURFACE-B SELECTORS : Never intercept .sivme-notch-pill, #sivme-hud, or [data-sivme]
 * ==============================================================================
 * 6. ANTI-FREEZE, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Intercept only catalog pin buttons ('पिन' / 'Pin'); let card taps pass cleanly.
 *   - SCROLL SAFETY : Passive lifecycle rehydration on DOMContentLoaded, pageshow, and focus.
 *   - DOM SAFETY    : Scoped updates to favorites grid and pin buttons without full-DOM mutation loops.
 * ==============================================================================
 * 7. 100% ZEL FUNCTION MANIFEST (ALL 14 FUNCTIONS + 7 LIFECYCLE LISTENERS INTACT):
 *   1. ensureFavoritesDataModuleLoaded  2. getCanonicalSubcats    3. getSeqFromElement
 *   4. getPinned                        5. savePinned             6. toggleServicePin
 *   7. togglePinService                 8. unpinFavoriteItem      9. updatePinButtonsUI
 *   10. ensureMountSection              11. handleCardClick       12. renderFavorites
 *   13. findSubcardElement              14. extractSubcardData    15. rehydrateEngine
 *   + Listeners: click (capture pin), DOMContentLoaded, pageshow, focus,
 *                visibilitychange, storage, rm:favorites:changed, click (UI sync)
 * ==============================================================================
 */

(function initUniversalFavoritesEngine() {
  'use strict';

  const STORAGE_KEY = 'rm_user_pinned_shortcuts_v1';

  // ==============================================================================
  // 1. MODULAR PART-1 BRIDGE & CANONICAL SUB-CATEGORY RESOLVER (100% SSOT INTACT)
  // ==============================================================================
  function getCanonicalSubcats() {
    return (window.RM_FAVORITES_DATA && window.RM_FAVORITES_DATA.CANONICAL_SUBCATS) || {};
  }

  (function ensureFavoritesDataModuleLoaded() {
    if (window.RM_FAVORITES_DATA || document.getElementById('rm-favorites-data-extractor-script')) return;
    var s = document.createElement('script');
    s.id = 'rm-favorites-data-extractor-script';
    s.src = '/js/favorites-data-extractor.js?v=' + (window.__RM_ACTIVE_CACHE_VER || '20261017_v42');
    s.async = false;
    s.onload = function () {
      rehydrateEngine();
    };
    (document.head || document.documentElement).appendChild(s);
  })();

  function getSeqFromElement(el) {
    if (window.RM_FAVORITES_DATA && typeof window.RM_FAVORITES_DATA.getSeqFromElement === 'function') {
      return window.RM_FAVORITES_DATA.getSeqFromElement(el);
    }
    if (!el) return '';
    const text = el.textContent || '';
    const m = text.match(/\b(\d{1,2})\s*-\s*(\d{1,2})\b/);
    if (m) {
      const major = m[1].padStart(2, '0');
      const minor = m[2];
      return `${major}-${minor}`;
    }
    return '';
  }

  // ==============================================================================
  // 2. BULLETPROOF PERSISTENCE & TOLERANT STORAGE (ZERO DATA LOSS)
  // ==============================================================================
  function getPinned() {
    if (window.RM_FAVORITES_DATA && typeof window.RM_FAVORITES_DATA.getPinned === 'function') {
      return window.RM_FAVORITES_DATA.getPinned();
    }
    try {
      const dataStr = localStorage.getItem(STORAGE_KEY);
      if (!dataStr) return [];
      let raw = JSON.parse(dataStr);
      if (!Array.isArray(raw)) return [];

      const CANONICAL_SUBCATS = getCanonicalSubcats();
      let updated = false;
      raw = raw.map(item => {
        if (!item || typeof item !== 'object') return null;

        const seqVal = item.seq || item.code || item.id || '';
        if (!seqVal) return null;

        const c = CANONICAL_SUBCATS[seqVal];
        const titleStr = typeof item.title === 'string' ? item.title : (item.enTitle || '');
        const hiTitleStr = typeof item.hiTitle === 'string' ? item.hiTitle : '';

        if (c && (titleStr.includes('सेवा #') || titleStr.includes('आइटम #') || !hiTitleStr || item.icon === '🏷️' || item.icon === '🪧')) {
          updated = true;
          return {
            id: item.id || `fav-${c.seq}`,
            seq: c.seq,
            code: c.seq,
            tag: c.tag || 'Favorite',
            icon: c.icon,
            title: c.title,
            enTitle: c.title,
            hiTitle: c.hiTitle,
            pinnedAt: item.pinnedAt || Date.now()
          };
        }

        return {
          id: item.id || `fav-${seqVal}`,
          seq: seqVal,
          code: seqVal,
          tag: item.tag || (c ? c.tag : 'Favorite'),
          icon: item.icon || (c ? c.icon : '📌'),
          title: item.title || item.enTitle || (c ? c.title : `Item #${seqVal}`),
          enTitle: item.enTitle || item.title || (c ? c.title : `Item #${seqVal}`),
          hiTitle: item.hiTitle || (c ? c.hiTitle : 'पसंदीदा'),
          pinnedAt: item.pinnedAt || Date.now()
        };
      }).filter(Boolean);

      if (updated) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(raw));
      }
      return raw;
    } catch (e) {
      console.warn('RM Favorites Storage Read Warning:', e);
      return [];
    }
  }

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

  // Canonical User Pin/Unpin Toggle (Catalog Modal Controls Only)
  window.toggleServicePin = function (id, title, hiTitle, seq, icon, tag) {
    let list = getPinned();
    const targetSeq = seq || id;
    const existingIndex = list.findIndex(item => (targetSeq && (item.seq === targetSeq || item.code === targetSeq)) || item.id === id);

    if (existingIndex > -1) {
      list.splice(existingIndex, 1);
    } else {
      const s = targetSeq || '⭐';
      const CANONICAL_SUBCATS = getCanonicalSubcats();
      const c = CANONICAL_SUBCATS[s];
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

  // Programmatic unpin handler (Only triggered via Catalog Modal)
  window.unpinFavoriteItem = function (seqOrCode, event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
      event.stopPropagation();
    }
    let list = getPinned();
    const filtered = list.filter(item => item.seq !== seqOrCode && item.code !== seqOrCode && item.id !== seqOrCode);
    savePinned(filtered);
    if (window.renderCatalogItems && typeof window.renderCatalogItems === 'function') {
      window.renderCatalogItems();
    }
  };

  // ==============================================================================
  // 3. CATALOG PIN BUTTONS SYNCHRONIZER
  // ==============================================================================
  function updatePinButtonsUI() {
    const list = getPinned();
    document.querySelectorAll('button').forEach(btn => {
      const text = btn.textContent.trim();
      if (text.includes('पिन') || text.includes('Pin')) {
        const card = findSubcardElement(btn);
        const seq = getSeqFromElement(card);
        const isPinned = list.some(item =>
          (seq && (item.seq === seq || item.code === seq)) ||
          (card && (item.id === card.id || item.id === card.getAttribute('data-cat-id')))
        );

        if (isPinned) {
          btn.innerHTML = '✓ पिन किया';
          btn.classList.add('bg-emerald-600', 'text-white');
          btn.classList.remove('bg-slate-800', 'text-slate-300');
        } else {
          btn.innerHTML = '📌 पिन';
          btn.classList.remove('bg-emerald-600', 'text-white');
          btn.classList.add('bg-slate-800', 'text-slate-300');
        }
      }
    });
  }

  // ==============================================================================
  // 4. NATURAL SEQUENCE AUTO-SORT & RENDER (100% TAP-SAFE, ZERO ✕ CROSS BUTTON)
  // ==============================================================================
  function ensureMountSection() {
    let section = document.getElementById('userPinnedFavoritesSection');
    let grid = document.getElementById('userPinnedFavoritesGrid');

    if (section && grid) {
      const titleEl = section.querySelector('h2, h3');
      if (titleEl) {
        titleEl.textContent = 'My Favorites (मेरी पसंदीदा)';
      }
      return { section, grid };
    }

    let existingFallback = document.getElementById('rm-favorites-mount-section');
    if (existingFallback) {
      return {
        section: existingFallback,
        grid: existingFallback.querySelector('#rm-favorites-mount-grid') || existingFallback
      };
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

    if (target && target.parentNode) {
      target.parentNode.insertBefore(mountSection, target);
    } else {
      (document.querySelector('main') || document.body).appendChild(mountSection);
    }

    return {
      section: mountSection,
      grid: mountSection.querySelector('#rm-favorites-mount-grid')
    };
  }

  function handleCardClick(seq) {
    if (typeof window.toggleMenuDrawer === 'function') {
      window.toggleMenuDrawer(true);
    }
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

    // Natural Sequence Sorting (01-1 < 01-2 < 06-1 < 33-3)
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
        <!-- Top Row: Cyan Sequence Number (Left) + Squircle Icon Container (Right) -->
        <div class="flex items-center justify-between w-full">
          <span class="text-cyan-400 font-black text-lg font-sans tracking-tight leading-none">
            ${item.seq}.
          </span>
          <div class="w-10 h-10 rounded-xl bg-[#02091d] border border-cyan-500/40 flex items-center justify-center text-xl shadow-inner group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            ${item.icon}
          </div>
        </div>
        
        <!-- Bottom Row: Bilingual Typography (English Roman First, Hindi Devanagari Second) -->
        <div class="w-full text-left mt-2">
          <div class="text-[13px] font-black text-slate-100 leading-tight group-hover:text-cyan-300 transition-colors break-words">
            ${item.title || item.enTitle}
          </div>
          <div class="text-[11px] text-emerald-400 font-bold leading-tight mt-1 break-words">
            ${item.hiTitle || 'पसंदीदा'}
          </div>
        </div>
      </div>
    `).join('');
  }

  // ==============================================================================
  // 5. SPACE-TOLERANT DEEP CONTAINER FINDER (DELEGATED + 100% ZEL LOCAL FALLBACK)
  // ==============================================================================
  function findSubcardElement(btn) {
    if (window.RM_FAVORITES_DATA && typeof window.RM_FAVORITES_DATA.findSubcardElement === 'function') {
      return window.RM_FAVORITES_DATA.findSubcardElement(btn);
    }
    let curr = btn.parentElement;
    while (curr && curr !== document.body && curr.id !== 'categoryModal') {
      const seq = getSeqFromElement(curr);
      if (seq) {
        const allMatches = (curr.textContent || '').match(/\b\d{1,2}\s*-\s*\d{1,2}\b/g) || [];
        const unique = [...new Set(allMatches.map(s => s.replace(/\s+/g, '')))];
        if (unique.length === 1) {
          return curr;
        }
      }
      curr = curr.parentElement;
    }
    return btn.closest('[data-cat-id], .c16-subcard-clean, [id^="sub-c"], .sivme-subcat-card') || btn.parentElement;
  }

  // ==============================================================================
  // 6. CANONICAL-FIRST DATA EXTRACTOR (DELEGATED + 100% ZEL LOCAL FALLBACK)
  // ==============================================================================
  function extractSubcardData(card) {
    if (window.RM_FAVORITES_DATA && typeof window.RM_FAVORITES_DATA.extractSubcardData === 'function') {
      return window.RM_FAVORITES_DATA.extractSubcardData(card);
    }
    if (!card) return null;
    const seq = getSeqFromElement(card);
    if (!seq) return null;

    const CANONICAL_SUBCATS = getCanonicalSubcats();
    if (CANONICAL_SUBCATS[seq]) {
      const c = CANONICAL_SUBCATS[seq];
      return { id: `fav-${seq}`, seq: c.seq, tag: c.tag, icon: c.icon, title: c.title, hiTitle: c.hiTitle };
    }

    let title = '';
    const textEls = Array.from(card.querySelectorAll('div, h3, h4, h5, p, span'))
      .filter(el => !el.closest('button') && el.children.length === 0);

    for (let el of textEls) {
      const txt = el.textContent.trim();
      if (/[a-zA-Z]{3,}/.test(txt) &&
          !txt.includes('Live') && !txt.includes('Verified') &&
          !txt.includes('Protect') && !txt.includes('Play') &&
          !txt.includes('Reviews') && !txt.includes('Min')) {
        title = txt.replace(/^\d{1,2}\s*-\s*\d{1,2}\.?\s*/, '').trim();
        break;
      }
    }

    let hiTitle = '';
    const greenEl = card.querySelector('[class*="emerald"], [class*="green"], .cat-bilingual-hi');
    if (greenEl && /[\u0900-\u097F]/.test(greenEl.textContent)) {
      hiTitle = greenEl.textContent.trim();
    }
    if (!hiTitle) {
      for (let el of textEls) {
        const txt = el.textContent.trim();
        if (/[\u0900-\u097F]{4,}/.test(txt) &&
            !txt.includes('पिन') && !txt.includes('खोलें') &&
            !txt.includes('वीडियो') && !txt.includes('ग्राहक') &&
            !txt.includes('सत्यापित') && !txt.includes('समीक्षाएं')) {
          hiTitle = txt;
          break;
        }
      }
    }

    let icon = '';
    const squircle = Array.from(card.querySelectorAll('div'))
      .find(d => {
        if (d.closest('button')) return false;
        const cls = d.className || '';
        return typeof cls === 'string' &&
               (cls.includes('rounded-2xl') || cls.includes('rounded-xl') || cls.includes('cat-icon')) &&
               d.children.length <= 2 &&
               /\p{Extended_Pictographic}/u.test(d.textContent);
      });

    if (squircle) {
      const em = squircle.textContent.trim().match(/\p{Extended_Pictographic}/u);
      if (em) icon = em[0];
    }
    if (!icon) {
      const ems = textEls
        .map(el => el.textContent.trim().match(/\p{Extended_Pictographic}/u))
        .filter(Boolean)
        .map(m => m[0])
        .filter(e => !['📌', '★', '✓', '▶', '⚡', '⭐', '✕', '🛡️', '🛡'].includes(e));
      if (ems.length > 0) icon = ems[0];
    }

    if (!title) title = `Item #${seq}`;
    if (!hiTitle) hiTitle = 'पसंदीदा';
    if (!icon) icon = '⭐';

    return { id: `fav-${seq}`, seq, tag: 'Favorite', icon, title, hiTitle };
  }

  // ==============================================================================
  // 7. EVENT LISTENER BINDING (STRICT CLICK INTERCEPTION + SURFACE-B SIVME SAFE)
  // ==============================================================================
  document.addEventListener('click', function (e) {
    if (e.target && e.target.closest && e.target.closest('.sivme-notch-pill, #sivme-hud, [data-sivme]')) {
      return;
    }
    const btn = e.target.closest ? e.target.closest('button') : null;
    if (!btn) return;
    const text = btn.textContent.trim();
    if (text.includes('पिन') || text.includes('Pin')) {
      e.preventDefault();
      e.stopPropagation();

      const card = findSubcardElement(btn);
      const data = extractSubcardData(card);
      if (data) {
        window.toggleServicePin(data.id, data.title, data.hiTitle, data.seq, data.icon, data.tag);
      }
    }
  }, true);

  // ==============================================================================
  // 8. LIFECYCLE REHYDRATION & EXPORTS
  // ==============================================================================
  function rehydrateEngine() {
    renderFavorites();
    updatePinButtonsUI();
  }

  window.RM_UserPinnedShortcuts = {
    render: renderFavorites,
    getList: getPinned,
    unpin: window.unpinFavoriteItem
  };
  window.RM_FavoritesEngine = window.RM_UserPinnedShortcuts;
  window.renderFavorites = renderFavorites;
  window.updatePinButtonsUI = updatePinButtonsUI;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', rehydrateEngine);
  } else {
    rehydrateEngine();
  }

  window.addEventListener('pageshow', rehydrateEngine);
  window.addEventListener('focus', rehydrateEngine);
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) rehydrateEngine();
  });

  window.addEventListener('storage', function (e) {
    if (!e || e.key === STORAGE_KEY) rehydrateEngine();
  });

  window.addEventListener('rm:favorites:changed', rehydrateEngine);

  document.addEventListener('click', function (e) {
    const target = e.target.closest ? e.target.closest('button, [onclick*="toggle"], [id*="toggle"], #cat-menu-btn') : null;
    if (target) {
      setTimeout(updatePinButtonsUI, 150);
      setTimeout(updatePinButtonsUI, 400);
    }
  });

})();
