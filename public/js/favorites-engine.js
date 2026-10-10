/**
 * RISE MITRA — MODULAR FAVORITES SHORTCUTS ENGINE (PHASE 5)
 * Play Store Standard: 2.5D Elevation, Big Icons & Bilingual Titles
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
        icon: icon || '⭐',
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

    grid.innerHTML = list.map(item => `
      <div onclick="toggleMenuDrawer(true)" class="rm-solid-panel bg-gradient-to-b from-[#111a30] via-[#0d1527] to-[#090d18] border border-slate-700/80 p-3 rounded-2xl flex flex-col justify-between relative group shadow-xl active:scale-95 transition-all min-h-[110px] cursor-pointer">
        <div class="flex items-center justify-between w-full">
          <span class="text-[10px] font-black text-amber-400 bg-amber-950/80 border border-amber-700/60 px-2 py-0.5 rounded-md font-mono">${item.seq || '⭐'}</span>
          <button type="button" onclick="event.stopPropagation(); window.toggleServicePin('${item.id}');" title="पसंदीदा से हटाएं" class="w-6 h-6 rounded-full bg-slate-900/90 border border-slate-700/60 text-slate-400 hover:text-red-400 text-xs flex items-center justify-center cursor-pointer active:scale-90">✕</button>
        </div>
        <div class="flex justify-center my-1">
          <span class="text-3xl filter drop-shadow-md">${item.icon || '⭐'}</span>
        </div>
        <div class="text-center w-full">
          <div class="text-xs sm:text-sm font-black text-slate-100 truncate tracking-tight leading-tight">${item.title}</div>
          <div class="text-[10.5px] text-slate-400 font-medium truncate mt-0.5">${item.hiTitle}</div>
        </div>
      </div>
    `).join('');
  }

  document.addEventListener('click', function(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const text = btn.textContent.trim();
    if (text.includes('पिन') || text.includes('Pin')) {
      e.preventDefault();
      e.stopPropagation();

      const card = btn.closest('[data-cat-id], .c16-subcard-clean, [id^="sub-c"], div[class*="rounded-2xl"], div[class*="rounded-xl"]') || btn.parentElement;
      if (!card) return;

      const seqMatch = card.textContent.match(/\b\d{1,2}(?:-\d{1,2})?\b/);
      const seq = seqMatch ? seqMatch[0] : '⭐';

      const iconEl = card.querySelector('.text-3xl, .text-2xl, img, [class*="icon"]');
      let icon = '⭐';
      if (iconEl) {
        icon = iconEl.tagName === 'IMG' ? '⭐' : (iconEl.textContent.trim() || '⭐');
      }

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
