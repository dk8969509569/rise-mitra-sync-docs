/**
 * RISE MITRA — MODULAR FAVORITES SHORTCUTS ENGINE (PHASE 5)
 * Universal Deep Extractor: Top-Left Cyan Number + Top-Right Squircle Icon + Uncut Bilingual Subtitle
 * SSOT Authority: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 */
(function initFavoritesEngine() {
  const STORAGE_KEY = 'rm_user_pinned_shortcuts_v1';

  // Canonical Sub-Category Fallback Registry (Covers Core Verticals)
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
    '08-1': { seq: '08-1', icon: '📱', title: 'Smartphone & Gadget Care', hiTitle: 'स्मार्टफोन, लैपटॉप व स्क्रीन रिपेयर' },
    '08-2': { seq: '08-2', icon: '⚡', title: 'Electrical & Appliances', hiTitle: 'घरेलू बिजली उपकरण व वायरिंग' },
    '16-1': { seq: '16-1', icon: '🛠️', title: 'Mistry & Home Repair', hiTitle: 'मिस्त्री व दैनिक घरेलू मरम्मत सेवाएं' },
    '16-2': { seq: '16-2', icon: '📋', title: 'Rental Ledger', hiTitle: 'किराया बहीखाता व किरायेदार प्रबंधन' },
    '16-3': { seq: '16-3', icon: '🏠', title: 'Room & Flat Search', hiTitle: 'कमरा, फ्लैट व पीजी खोज (0% दलाली)' }
  };

  function getPinned() {
    try {
      let raw = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      let updated = false;

      // Auto-Heal: Purge/Replace corrupted "सेवा #08-1" and "🏷️" entries
      raw = raw.map(item => {
        if (!item || !item.seq) return null;
        const c = CANONICAL_SUBCATS[item.seq];
        if (c && (item.title.includes('सेवा #') || item.title.includes('आइटम #') || !item.hiTitle || item.icon === '🏷️' || item.icon === '🪧')) {
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
        icon: icon || '⭐',
        title: title || 'पसंदीदा सेवा',
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

    // 100% BALANCED CARD: Top-Left Cyan Number + Top-Right Squircle Icon + Uncut 2-Tier Bilingual Text
    grid.innerHTML = list.map(item => `
      <div onclick="toggleMenuDrawer(true)" class="rm-solid-panel bg-[#0b1329]/95 border border-slate-700/80 hover:border-cyan-500/60 p-3.5 rounded-2xl flex flex-col justify-between relative shadow-xl active:scale-95 transition-all min-h-[142px] cursor-pointer group">
        <!-- Top Row: Bada Cyan Sequence Number (Left) + Squircle Icon Container (Right) -->
        <div class="flex items-center justify-between w-full">
          <span class="text-cyan-400 font-black text-xl font-sans tracking-tight leading-none">
            ${item.seq}.
          </span>
          <div class="w-11 h-11 rounded-2xl bg-[#02091d] border border-cyan-500/40 flex items-center justify-center text-2xl shadow-inner group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            ${item.icon}
          </div>
        </div>
        
        <!-- Bottom Row: Uncut Large Font 2-Tier Bilingual Title -->
        <div class="w-full text-left mt-2">
          <div class="text-[13.5px] font-black text-slate-100 leading-tight group-hover:text-cyan-300 transition-colors break-words">
            ${item.title}
          </div>
          <div class="text-[11.5px] text-emerald-400 font-bold leading-tight mt-1 break-words">
            ${item.hiTitle || 'विशेष सेवा'}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Universal Subcard Container Traversal (Stops exactly at the individual card box)
  function findSubcardElement(btn) {
    let el = btn;
    while (el && el !== document.body && el.id !== 'categoryModal') {
      el = el.parentElement;
      if (!el) break;
      const m = (el.textContent || '').match(/\b\d{1,2}-\d{1,2}\b/g) || [];
      const unique = [...new Set(m)];
      if (unique.length === 1) {
        return el;
      }
    }
    return btn.closest('[data-cat-id], .c16-subcard-clean, [id^="sub-c"]') || btn.parentElement;
  }

  // Universal Deep Subcard Data Extractor (Works across all 50 categories)
  function extractSubcardData(card) {
    if (!card) return null;
    const seqMatch = card.textContent.match(/\b\d{1,2}-\d{1,2}\b/);
    const seq = seqMatch ? seqMatch[0] : '';

    // Fast Path: Check canonical registry
    if (seq && CANONICAL_SUBCATS[seq]) {
      const c = CANONICAL_SUBCATS[seq];
      return { id: `fav-${seq}`, seq: c.seq, icon: c.icon, title: c.title, hiTitle: c.hiTitle };
    }

    // Dynamic Deep Path:
    // 1. English Title (Targets font-black, font-bold, text-base, headings)
    let title = '';
    const textEls = Array.from(card.querySelectorAll('div, h3, h4, h5, p, span'))
      .filter(el => !el.closest('button') && el.children.length === 0);

    for (let el of textEls) {
      const txt = el.textContent.trim();
      if (/[a-zA-Z]{3,}/.test(txt) && 
          !txt.includes('Live') && !txt.includes('Verified') && 
          !txt.includes('Protect') && !txt.includes('Play') &&
          !txt.includes('Reviews') && !txt.includes('Min')) {
        title = txt.replace(/^\d{1,2}-\d{1,2}\.?\s*/, '').trim();
        break;
      }
    }

    // 2. Hindi Subtitle (Targets emerald/green text or Devanagari text under the title)
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

    // 3. Real Icon (Extracts from squircle container or first emoji in the card header)
    let icon = '';
    const squircle = Array.from(card.querySelectorAll('div'))
      .find(d => {
        if (d.closest('button')) return false;
        const cls = d.className || '';
        return (cls.includes('rounded-2xl') || cls.includes('rounded-xl') || cls.includes('cat-icon')) &&
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

    if (!title || title === 'undefined') title = seq ? `सेवा #${seq}` : 'पसंदीदा सेवा';
    if (!hiTitle || hiTitle === 'undefined') hiTitle = 'उत्पाद व सेवा';
    if (!icon) icon = '⭐';

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
