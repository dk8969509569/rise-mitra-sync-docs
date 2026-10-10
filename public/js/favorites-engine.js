/**
 * RISE MITRA — MODULAR FAVORITES SHORTCUTS ENGINE (PHASE 5)
 * Google Play Store Ergonomics: 1:1 Sub-Category Match (Squircle Icon + True Hindi Subtitle)
 * SSOT Authority: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 */
(function initFavoritesEngine() {
  const STORAGE_KEY = 'rm_user_pinned_shortcuts_v1';

  function getPinned() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const valid = raw.filter(item => item && item.title && item.title !== 'undefined');
      if (valid.length !== raw.length) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(valid));
      }
      return valid;
    } catch(e) { return []; }
  }

  function savePinned(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch(e) {}
    renderFavorites();
    updatePinButtonsUI();
  }

  window.toggleServicePin = function(id, title, hiTitle, seq, icon) {
    let list = getPinned();
    const existingIndex = list.findIndex(item => item.id === id);
    if (existingIndex > -1) {
      list.splice(existingIndex, 1);
    } else {
      list.push({
        id: id,
        title: title || 'पसंदीदा आइटम',
        hiTitle: hiTitle || 'त्वरित शॉर्टकट',
        seq: seq || '⭐',
        icon: icon || '🏷️',
        pinnedAt: Date.now()
      });
    }
    savePinned(list);
  };

  function updatePinButtonsUI() {
    const list = getPinned();
    document.querySelectorAll('button').forEach(btn => {
      const text = btn.textContent.trim();
      if (text.includes('पिन') || text.includes('Pin')) {
        const card = btn.closest('[data-cat-id], .c16-subcard-clean, [id^="sub-c"], div[class*="rounded-2xl"], div[class*="rounded-xl"]') || btn.parentElement;
        const seqMatch = card ? card.textContent.match(/\b\d{1,2}(?:-\d{1,2})?\b/) : null;
        const seq = seqMatch ? seqMatch[0] : '';
        const isPinned = list.some(item => (card && (item.id === card.id || item.id === card.getAttribute('data-cat-id'))) || (seq && item.seq === seq));
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

  function renderFavorites() {
    const section = document.getElementById('userPinnedFavoritesSection');
    const grid = document.getElementById('userPinnedFavoritesGrid');
    const badge = document.getElementById('pinnedCountBadge');
    if (!section || !grid) return;

    const list = getPinned();
    if (list.length === 0) {
      section.classList.add('hidden');
      return;
    }

    section.classList.remove('hidden');
    if (badge) badge.textContent = `${list.length} सेव`;

    // 100% Play Store Elevation: Squircle Icon Box + Bada Numbering + Authentic Subtitle (Tap-Safe Surface)
    grid.innerHTML = list.map(item => `
      <div onclick="toggleMenuDrawer(true)" class="rm-solid-panel bg-gradient-to-b from-[#111a30] via-[#0d1527] to-[#090d18] border border-slate-700/80 hover:border-amber-500/50 p-3.5 rounded-2xl flex flex-col justify-between relative shadow-xl active:scale-95 transition-all min-h-[118px] cursor-pointer group">
        <!-- Top Row: Bada Numbering Badge + Exact Catalog Squircle Icon Container -->
        <div class="flex items-center space-x-3 w-full">
          <span class="text-xs font-black text-amber-300 bg-amber-950/90 border border-amber-600/80 px-2.5 py-1 rounded-lg font-mono shadow-sm leading-none">
            ${item.seq || '⭐'}
          </span>
          <div class="w-11 h-11 rounded-2xl bg-gradient-to-b from-slate-900 to-[#02091d] border border-slate-700/80 flex items-center justify-center text-2xl shadow-inner group-hover:scale-105 transition-transform overflow-hidden">
            ${item.icon || '🏷️'}
          </div>
        </div>
        
        <!-- Bottom Area: Clean 2-Tier Typography (Exact Subtitle) -->
        <div class="mt-2.5 text-left w-full">
          <div class="text-xs sm:text-sm font-black text-slate-100 truncate tracking-tight leading-snug group-hover:text-amber-300 transition-colors">
            ${item.title}
          </div>
          <div class="text-[11px] text-emerald-400 font-medium truncate mt-0.5">
            ${item.hiTitle}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Precision Metadata Extraction Helper
  function extractSubcardMetadata(card) {
    if (!card) return null;

    // 1. Sequence Match (e.g. 06-1, 06-2, 03-1, 03-2, 16-1)
    const seqMatch = card.textContent.match(/\b\d{1,2}(?:-\d{1,2})?\b/);
    const seq = seqMatch ? seqMatch[0] : '⭐';

    // 2. Exact Header Squircle Icon Extraction (Ignores body bullet emojis)
    let icon = '';
    const squircleContainers = Array.from(card.querySelectorAll('div, span'))
      .filter(el => {
        if (el === card || el.closest('button')) return false;
        const cls = el.className || '';
        return (cls.includes('rounded-2xl') || cls.includes('rounded-xl') || cls.includes('cat-icon')) &&
               !cls.includes('w-full') && !cls.includes('grid');
      });

    for (let box of squircleContainers) {
      const img = box.querySelector('img');
      if (img && img.src) {
        icon = `<img src="${img.src}" class="w-7 h-7 object-contain inline-block">`;
        break;
      }
      const em = box.textContent.trim().match(/\p{Extended_Pictographic}/u);
      if (em && !['📌', '★', '✓', '▶', '⚡', '⭐', '🛡️', '🛡', '✕'].includes(em[0])) {
        icon = em[0];
        break;
      }
    }

    if (!icon) {
      const titleEl = card.querySelector('.cat-bilingual-en, h3, h4, h5, strong');
      const headerBox = titleEl ? titleEl.closest('.flex, div') : card;
      const em = headerBox ? headerBox.textContent.trim().match(/\p{Extended_Pictographic}/u) : null;
      if (em && !['📌', '★', '✓', '▶', '⚡', '⭐', '🛡️', '🛡', '✕'].includes(em[0])) {
        icon = em[0];
      }
    }
    if (!icon) icon = '🏷️';

    // 3. Exact English Title
    const enEl = card.querySelector('.cat-bilingual-en, h3, h4, h5, strong');
    let title = enEl ? enEl.textContent.trim() : '';

    // 4. Exact Devanagari Green Subtitle (Bypasses gray tag pill)
    let hiTitle = '';
    if (enEl && enEl.nextElementSibling && /[\u0900-\u097F]/.test(enEl.nextElementSibling.textContent)) {
      hiTitle = enEl.nextElementSibling.textContent.trim();
    }
    if (!hiTitle) {
      const greenEl = card.querySelector('[class*="text-emerald"], [class*="text-green"], .cat-bilingual-hi');
      if (greenEl && /[\u0900-\u097F]/.test(greenEl.textContent)) {
        hiTitle = greenEl.textContent.trim();
      }
    }
    if (!hiTitle) {
      const lines = card.innerText.split('\n').map(s => s.trim()).filter(s => s.length > 1);
      const titleIdx = lines.findIndex(l => title && l.includes(title));
      if (titleIdx !== -1 && lines[titleIdx + 1] && /[\u0900-\u097F]/.test(lines[titleIdx + 1])) {
        hiTitle = lines[titleIdx + 1];
      }
    }

    if (!title || title === 'undefined') title = seq !== '⭐' ? `आइटम #${seq}` : 'पसंदीदा सेवा';
    if (!hiTitle || hiTitle === 'undefined') hiTitle = 'उत्पाद व सेवा';

    const id = card.id || card.getAttribute('data-cat-id') || `fav-${seq}-${title.replace(/\s+/g, '-')}`;
    return { id, title, hiTitle, seq, icon };
  }

  // Global Click Capture Phase Interception
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const text = btn.textContent.trim();
    if (text.includes('पिन') || text.includes('Pin')) {
      e.preventDefault();
      e.stopPropagation();

      const card = btn.closest('[data-cat-id], .c16-subcard-clean, [id^="sub-c"], div[class*="rounded-2xl"], div[class*="rounded-xl"]') || btn.parentElement;
      const meta = extractSubcardMetadata(card);
      if (meta) {
        window.toggleServicePin(meta.id, meta.title, meta.hiTitle, meta.seq, meta.icon);
      }
    }
  }, true);

  // Auto-Sync: Refresh already pinned items with exact squircle & subtitle when catalog is viewed
  function autoSyncWithCatalogDOM() {
    const list = getPinned();
    if (list.length === 0) return;
    let changed = false;

    document.querySelectorAll('[data-cat-id], .c16-subcard-clean, [id^="sub-c"]').forEach(card => {
      const meta = extractSubcardMetadata(card);
      if (!meta) return;
      const idx = list.findIndex(item => item.id === meta.id || item.seq === meta.seq);
      if (idx > -1) {
        if (list[idx].icon !== meta.icon || list[idx].hiTitle !== meta.hiTitle) {
          list[idx].icon = meta.icon;
          list[idx].hiTitle = meta.hiTitle;
          list[idx].title = meta.title;
          changed = true;
        }
      }
    });

    if (changed) {
      savePinned(list);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { 
      renderFavorites(); 
      updatePinButtonsUI(); 
      setTimeout(autoSyncWithCatalogDOM, 800);
    });
  } else {
    renderFavorites();
    updatePinButtonsUI();
    setTimeout(autoSyncWithCatalogDOM, 800);
  }
})();
