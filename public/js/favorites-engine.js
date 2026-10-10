/**
 * RISE MITRA — MODULAR FAVORITES SHORTCUTS ENGINE (PHASE 5)
 * 1:1 Sub-Category Upper-Part Clone (Exact Cyan Sequence + Tag + Squircle + Bilingual)
 * SSOT Authority: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 */
(function initFavoritesEngine() {
  const STORAGE_KEY = 'rm_user_pinned_shortcuts_v1';

  // Canonical Sub-Category Registry (Guarantees 100% Precision Zero-Loss)
  const CANONICAL_SUBCATS = {
    '01-1': { seq: '01-1', tag: 'पारंपरिक कला', icon: '🥻', title: 'Tussar Silk & Handloom', hiTitle: 'तसर सिल्क, खादी व हथकरघा वस्त्र' },
    '01-2': { seq: '01-2', tag: 'धातु शिल्प', icon: '🏺', title: 'Dokra & Tribal Artifacts', hiTitle: 'डोकरा धातु कला व जनजातीय हस्तशिल्प' },
    '01-3': { seq: '01-3', tag: 'मिट्टी शिल्प', icon: '🧱', title: 'Terracotta & Pottery', hiTitle: 'टेराकोटा, मूर्तिकला व मिट्टी बर्तन' },
    '02-1': { seq: '02-1', tag: 'टू-व्हीलर रिपेयर', icon: '🛵', title: 'Bike & Scooter Service', hiTitle: 'बाइक व स्कूटर सर्विस' },
    '02-2': { seq: '02-2', tag: 'फोर-व्हीलर सर्विस', icon: '🚗', title: 'Car Repair & Washing', hiTitle: 'कार रिपेयर व वाशिंग' },
    '03-1': { seq: '03-1', tag: 'मेंस ग्रूमिंग', icon: '💇‍♂️', title: "Men's Grooming", hiTitle: 'मेंस सैलून व हेयर स्टाइलिंग' },
    '03-2': { seq: '03-2', tag: 'ब्यूटी व स्किनकेयर', icon: '💅', title: "Women's Parlour", hiTitle: 'महिला ब्यूटी पार्लर व ब्राइडल मेकअप' },
    '06-1': { seq: '06-1', tag: 'क्लासिक चित्रकथा', icon: '🦸', title: 'Classic Indian Comics', hiTitle: 'अमर चित्र कथा, चाचा चौधरी व सुपरहीरो' },
    '06-2': { seq: '06-2', tag: 'आधुनिक कॉमिक्स', icon: '📱', title: 'Manga & Webtoons', hiTitle: 'डिजिटल मांगा व रंगीन वेबटून' },
    '16-1': { seq: '16-1', tag: 'होम मेंटेनेंस', icon: '🛠️', title: 'Mistry & Home Repair', hiTitle: 'मिस्त्री व दैनिक घरेलू मरम्मत सेवाएं' },
    '16-2': { seq: '16-2', tag: 'फाइनेंस व प्रॉपर्टी टूल', icon: '📋', title: 'Rental Ledger', hiTitle: 'किराया बहीखाता व किरायेदार प्रबंधन' },
    '16-3': { seq: '16-3', tag: 'रेंटल प्रॉपर्टी नेटवर्क', icon: '🏠', title: 'Room & Flat Search', hiTitle: 'कमरा, फ्लैट व पीजी खोज (0% दलाली)' }
  };

  function getPinned() {
    try {
      let raw = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      let updated = false;

      // Auto-Heal: Purge old corrupted "आइटम #01-1" / "उत्पाद व सेवा" data immediately
      raw = raw.map(item => {
        if (!item || !item.seq) return null;
        const c = CANONICAL_SUBCATS[item.seq];
        if (c && (item.title.includes('आइटम #') || item.hiTitle === 'उत्पाद व सेवा' || item.icon === '🪧' || item.icon === '🖌️' || !item.tag)) {
          updated = true;
          return { ...item, tag: c.tag, icon: c.icon, title: c.title, hiTitle: c.hiTitle };
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

  window.toggleServicePin = function(id, title, hiTitle, seq, icon, tag) {
    let list = getPinned();
    const existingIndex = list.findIndex(item => item.id === id || item.seq === seq);
    if (existingIndex > -1) {
      list.splice(existingIndex, 1);
    } else {
      list.push({
        id: id || `fav-${seq}`,
        seq: seq || '⭐',
        tag: tag || 'सेवा',
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

    // EXACT 1:1 SUB-CATEGORY UPPER-PART REPLICA (Cyan Sequence + Tag Pill + Squircle Icon + Bilingual)
    grid.innerHTML = list.map(item => `
      <div onclick="toggleMenuDrawer(true)" class="rm-solid-panel bg-[#0b1329]/95 border border-slate-700/80 hover:border-cyan-500/60 p-3 rounded-2xl flex flex-col justify-between relative shadow-xl active:scale-95 transition-all min-h-[116px] cursor-pointer group">
        <!-- Sub-Category Header Row 1: Cyan Sequence Number + Tag Pill -->
        <div class="flex items-center space-x-1.5 w-full">
          <span class="text-cyan-400 font-black text-sm sm:text-base font-sans leading-none tracking-tight">
            ${item.seq}.
          </span>
          <span class="bg-slate-800/90 text-slate-300 text-[9.5px] px-1.5 py-0.5 rounded font-medium truncate max-w-[85px] leading-tight">
            ${item.tag || 'सेवा'}
          </span>
        </div>
        
        <!-- Sub-Category Header Row 2: Squircle Icon + Bilingual Title/Subtitle -->
        <div class="flex items-center space-x-2.5 mt-2">
          <div class="w-10 h-10 rounded-xl bg-[#02091d] border border-cyan-500/30 flex items-center justify-center text-xl shrink-0 shadow-inner group-hover:scale-105 transition-transform">
            ${item.icon}
          </div>
          <div class="text-left min-w-0 flex-1">
            <div class="text-xs font-black text-slate-100 truncate leading-snug group-hover:text-cyan-300 transition-colors">
              ${item.title}
            </div>
            <div class="text-[10px] text-emerald-400 font-semibold truncate mt-0.5">
              ${item.hiTitle}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Precision Sub-Card Container Finder (Never Stops at Button Wrapper)
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

    // Fast-path: Check canonical registry first
    if (seq && CANONICAL_SUBCATS[seq]) {
      const c = CANONICAL_SUBCATS[seq];
      return { id: `fav-${seq}`, seq: c.seq, tag: c.tag, icon: c.icon, title: c.title, hiTitle: c.hiTitle };
    }

    // Dynamic Extraction for any other sub-categories
    let tag = '';
    const tagEl = card.querySelector('[class*="bg-slate-800"], [class*="badge"]');
    if (tagEl) tag = tagEl.textContent.trim();

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

    return { id: card.id || `fav-${seq}`, seq, tag, icon, title, hiTitle };
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
        window.toggleServicePin(data.id, data.title, data.hiTitle, data.seq, data.icon, data.tag);
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
