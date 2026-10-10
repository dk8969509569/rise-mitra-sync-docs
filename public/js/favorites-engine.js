/**
 * RISE MITRA — MODULAR FAVORITES SHORTCUTS ENGINE (PHASE 5)
 * Play Store Ergonomics: Large Numbering + 32px Real Icon + Tap-Safe Surface (No Cross Button)
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

    // 100% Tap-Safe Play Store Card (No Unpin Cross, Big Numbering, Large Real Icon)
    grid.innerHTML = list.map(item => `
      <div onclick="toggleMenuDrawer(true)" class="rm-solid-panel bg-gradient-to-b from-[#111a30] via-[#0d1527] to-[#090d18] border border-slate-700/80 hover:border-amber-500/50 p-3.5 rounded-2xl flex flex-col justify-between relative shadow-xl active:scale-95 transition-all min-h-[114px] cursor-pointer group">
        <!-- Top Row: Prominent Numbering Badge + Large 32px Sub-Category Icon -->
        <div class="flex items-center space-x-2.5 w-full">
          <span class="text-xs font-black text-amber-300 bg-amber-950/90 border border-amber-600/80 px-2.5 py-1 rounded-lg font-mono shadow-sm leading-none">
            ${item.seq || '⭐'}
          </span>
          <span class="text-3xl filter drop-shadow-md leading-none group-hover:scale-110 transition-transform">
            ${item.icon || '🏷️'}
          </span>
        </div>
        
        <!-- Bottom Area: Clean Bilingual Play Store Typography -->
        <div class="mt-2.5 text-left w-full">
          <div class="text-xs sm:text-sm font-black text-slate-100 truncate tracking-tight leading-snug group-hover:text-amber-300 transition-colors">
            ${item.title}
          </div>
          <div class="text-[11px] text-slate-400 font-medium truncate mt-0.5">
            ${item.hiTitle}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Smart Subcategory Metadata & Real Icon Extraction (Capture Phase)
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const text = btn.textContent.trim();
    if (text.includes('पिन') || text.includes('Pin')) {
      e.preventDefault();
      e.stopPropagation();

      const card = btn.closest('[data-cat-id], .c16-subcard-clean, [id^="sub-c"], div[class*="rounded-2xl"], div[class*="rounded-xl"]') || btn.parentElement;
      if (!card) return;

      // 1. Sequence Match (e.g. 01-1, 01-2, 16-1)
      const seqMatch = card.textContent.match(/\b\d{1,2}(?:-\d{1,2})?\b/);
      const seq = seqMatch ? seqMatch[0] : '⭐';

      // 2. Real Category Icon Extraction
      let icon = '';
      const img = card.querySelector('img');
      if (img && img.src) {
        icon = `<img src="${img.src}" class="w-7 h-7 object-contain inline-block">`;
      } else {
        const emojiRegex = /\p{Extended_Pictographic}/u;
        const candidateElements = Array.from(card.querySelectorAll('div, span, p'))
          .filter(el => !el.closest('button') && el.children.length === 0);
        
        for (let el of candidateElements) {
          const t = el.textContent.trim();
          if (emojiRegex.test(t) && !['📌', '★', '✓', '▶', '⚡', '⭐'].includes(t)) {
            const m = t.match(emojiRegex);
            if (m) { icon = m[0]; break; }
          }
        }
      }
      if (!icon) icon = '🏷️';

      // 3. Bilingual Title Extraction
      let title = '';
      let hiTitle = '';
      const enEl = card.querySelector('.cat-bilingual-en, [class*="bilingual-en"]');
      const hiEl = card.querySelector('.cat-bilingual-hi, [class*="bilingual-hi"]');
      if (enEl) title = enEl.textContent.trim();
      if (hiEl) hiTitle = hiEl.textContent.trim();

      if (!title) {
        const lines = card.innerText.split('\n').map(s => s.trim()).filter(s => s.length > 1);
        for (let line of lines) {
          if (!title && /[a-zA-Z]/.test(line) && !line.includes('Live') && !line.includes('पिन') && !line.includes('सत्यापित') && !line.includes('खोलें')) {
            title = line.replace(/^\d{1,2}(?:-\d{1,2})?\.?\s*/, '').trim();
          }
          if (!hiTitle && /[\u0900-\u097F]/.test(line) && !line.includes('पिन') && !line.includes('सत्यापित') && !line.includes('खोलें') && !line.includes('ग्राहक')) {
            hiTitle = line.trim();
          }
        }
      }

      if (!title || title === 'undefined') title = seq !== '⭐' ? `आइटम #${seq}` : 'पसंदीदा सेवा';
      if (!hiTitle || hiTitle === 'undefined') hiTitle = 'उत्पाद व सेवा';

      const id = card.id || card.getAttribute('data-cat-id') || `fav-${seq}-${title.replace(/\s+/g, '-')}`;
      window.toggleServicePin(id, title, hiTitle, seq, icon);
    }
  }, true);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { renderFavorites(); updatePinButtonsUI(); });
  } else {
    renderFavorites();
    updatePinButtonsUI();
  }
})();
