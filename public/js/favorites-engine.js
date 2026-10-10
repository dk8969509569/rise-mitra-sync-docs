/**
 * RISE MITRA — MODULAR FAVORITES SHORTCUTS ENGINE (PHASE 5)
 * Clean Minimalist Ergonomics: 18px Cyan Number + Center 48px Squircle Icon + Uncut Bilingual Title
 * SSOT Authority: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 */
(function initFavoritesEngine() {
  const STORAGE_KEY = 'rm_user_pinned_shortcuts_v1';

  // Canonical Sub-Category Registry (Guarantees 100% Precision Zero-Loss)
  const CANONICAL_SUBCATS = {
    '01-1': { seq: '01-1', icon: '🥻', title: 'Tussar Silk & Handloom', hiTitle: 'तसर सिल्क, खादी व हथकरघा वस्त्र' },
    '01-2': { seq: '01-2', icon: '🏺', title: 'Dokra & Tribal Artifacts', hiTitle: 'डोकरा धातु कला व जनजातीय हस्तशिल्प' },
    '01-3': { seq: '01-3', icon: '🧱', title: 'Terracotta & Pottery', hiTitle: 'टेराकोटा, मूर्तिकला व मिट्टी बर्तन' },
    '02-1': { seq: '02-1', icon: '🛵', title: 'Bike & Scooter Service', hiTitle: 'बाइक व स्कूटर सर्विस' },
    '02-2': { seq: '02-2', icon: '🚗', title: 'Car Repair & Washing', hiTitle: 'कार रिपेयर व वाशिंग' },
    '03-1': { seq: '03-1', icon: '💇‍♂️', title: "Men's Grooming", hiTitle: 'मेंस सैलून व हेयर स्टाइलिंग' },
    '03-2': { seq: '03-2', icon: '💅', title: "Women's Parlour", hiTitle: 'महिला ब्यूटी पार्लर व ब्राइडल मेकअप' },
    '06-1': { seq: '06-1', icon: '🦸', title: 'Classic Indian Comics', hiTitle: 'अमर चित्र कथा, चाचा चौधरी व सुपरहीरो' },
    '06-2': { seq: '06-2', icon: '📱', title: 'Manga & Webtoons', hiTitle: 'डिजिटल मांगा व रंगीन वेबटून' },
    '16-1': { seq: '16-1', icon: '🛠️', title: 'Mistry & Home Repair', hiTitle: 'मिस्त्री व दैनिक घरेलू मरम्मत सेवाएं' },
    '16-2': { seq: '16-2', icon: '📋', title: 'Rental Ledger', hiTitle: 'किराया बहीखाता व किरायेदार प्रबंधन' },
    '16-3': { seq: '16-3', icon: '🏠', title: 'Room & Flat Search', hiTitle: 'कमरा, फ्लैट व पीजी खोज (0% दलाली)' }
  };

  function getPinned() {
    try {
      let raw = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      let updated = false;

      raw = raw.map(item => {
        if (!item || !item.seq) return null;
        const c = CANONICAL_SUBCATS[item.seq];
        if (c && (item.title.includes('आइटम #') || item.hiTitle === 'उत्पाद व सेवा' || item.icon === '🪧' || item.icon === '🖌️')) {
          updated = true;
          return { ...item, icon: c.icon, title: c.title, hiTitle: c.hiTitle };
        }
        return item;
      }).filter(Boolean);

      if (updated) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(raw));
      }
      return raw;
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
    const existingIndex = list.findIndex(item => item.id === id || item.seq === seq);
    if (existingIndex > -1) {
      list.splice(existingIndex, 1);
    } else {
      list.push({
        id: id || `fav-${seq}`,
        seq: seq || '⭐',
        icon: icon || '🏷️',
        title: title || 'सेवा',
        hiTitle: hiTitle || '',
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
        const card = findSubcardElement(btn);
        const seqMatch = card ? card.textContent.match(/\b\d{1,2}-\d{1,2}\b/) : null;
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

    // CLEAN, UNCLUTTERED, COMPACT FAVORITES CARD (No Tags, No Cross, 100% Uncut Text)
    grid.innerHTML = list.map(item => `
      <div onclick="toggleMenuDrawer(true)" class="rm-solid-panel bg-[#0b1329]/95 border border-slate-700/80 hover:border-cyan-500/60 p-3.5 rounded-2xl flex flex-col items-center justify-between relative shadow-xl active:scale-95 transition-all min-h-[142px] cursor-pointer group text-center">
        <!-- Top: Clean Cyan Sequence Number (18px Bold) -->
        <div class="w-full flex justify-start items-center">
          <span class="text-cyan-400 font-black text-lg font-sans leading-none tracking-tight">
            ${item.seq}.
          </span>
        </div>
        
        <!-- Center: Bada 48px Squircle Icon Box -->
        <div class="my-1.5 flex items-center justify-center">
          <div class="w-12 h-12 rounded-2xl bg-[#02091d] border border-cyan-500/40 flex items-center justify-center text-2xl shadow-inner group-hover:scale-105 transition-transform overflow-hidden">
            ${item.icon}
          </div>
        </div>
        
        <!-- Bottom: Clean Bilingual Titles (ZERO TRUNCATION / NO CUTTING) -->
        <div class="w-full">
          <div class="text-[13px] font-black text-slate-100 leading-snug break-words group-hover:text-cyan-300 transition-colors">
            ${item.title}
          </div>
          <div class="text-[11px] text-emerald-400 font-semibold leading-snug mt-1 break-words">
            ${item.hiTitle}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Precision Sub-Card Container Finder
  function findSubcardElement(btn) {
    let curr = btn.parentElement;
    while (curr && curr !== document.body && curr.id !== 'categoryModal') {
      const text = curr.textContent || '';
      const matches = text.match(/\b\d{1,2}-\d{1,2}\.?\b/g);
      if (matches && matches.length === 1) {
        return curr;
      }
      curr = curr.parentElement;
    }
    return btn.closest('[data-cat-id], .c16-subcard-clean, [id^="sub-c"]') || btn.parentElement;
  }

  // Exact Sub-Category Header Extractor
  function extractSubcardData(card) {
    if (!card) return null;
    const seqMatch = card.textContent.match(/\b\d{1,2}-\d{1,2}\b/);
    const seq = seqMatch ? seqMatch[0] : '';

    if (seq && CANONICAL_SUBCATS[seq]) {
      const c = CANONICAL_SUBCATS[seq];
      return { id: `fav-${seq}`, seq: c.seq, icon: c.icon, title: c.title, hiTitle: c.hiTitle };
    }

    let icon = '🏷️';
    const squircle = card.querySelector('div[class*="rounded-2xl"], div[class*="rounded-xl"]');
    if (squircle) {
      const em = squircle.textContent.trim().match(/\p{Extended_Pictographic}/u);
      if (em) icon = em[0];
    }

    const enEl = card.querySelector('h3, h4, h5, .cat-bilingual-en, [class*="font-bold"]');
    const title = enEl ? enEl.textContent.trim() : (seq ? `सेवा #${seq}` : 'विशेष सेवा');

    let hiTitle = '';
    const greenEl = card.querySelector('[class*="text-emerald"], [class*="text-green"]');
    if (greenEl) hiTitle = greenEl.textContent.trim();

    return { id: card.id || `fav-${seq}`, seq, icon, title, hiTitle };
  }

  // Global Click Interception (Capture Phase)
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const text = btn.textContent.trim();
    if (text.includes('पिन') || text.includes('Pin')) {
      e.preventDefault();
      e.stopPropagation();

      const card = findSubcardElement(btn);
      const data = extractSubcardData(card);
      if (data) {
        window.toggleServicePin(data.id, data.title, data.hiTitle, data.seq, data.icon);
      }
    }
  }, true);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { renderFavorites(); updatePinButtonsUI(); });
  } else {
    renderFavorites();
    updatePinButtonsUI();
  }
})();
