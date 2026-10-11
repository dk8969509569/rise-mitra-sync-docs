/**
 * RISE MITRA — UNIVERSAL FAVORITES SHORTCUTS ENGINE (PHASE 5 ARCHITECTURE)
 *
 * ==============================================================================
 * ⚠️ HARD INVARIANT & ANTI-PATTERN LOCK (STRICT NEGATIVE INVARIANT):
 * 1. ZERO ✕ / CLOSE / UNPIN BUTTONS ON HOME GRID CARDS.
 *    - Accidental cancellation strictly prohibited. Cards are 100% Tap-Safe.
 *    - Unpinning is EXCLUSIVELY allowed from inside the Catalog Modal.
 * 2. BILINGUAL TYPOGRAPHY: Line 1 English Roman (Bold) | Line 2 Hindi Subtitle.
 * 3. TOP ROW: Left Cyan Sequence Number (18px) | Right 40px Squircle Icon.
 * ==============================================================================
 *
 * SSOT Authority: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/favorites-engine.js
 */

(function initUniversalFavoritesEngine() {
  'use strict';

  const STORAGE_KEY = 'rm_user_pinned_shortcuts_v1';

  // ==============================================================================
  // 1. UNIVERSAL CANONICAL SUB-CATEGORY REGISTRY (100% SSOT INTACT)
  // ==============================================================================
  const CANONICAL_SUBCATS = {
    // 01. Tribal Arts & Handloom (Products)
    '01-1': { seq: '01-1', icon: '🥻', title: 'Tussar Silk & Handloom', hiTitle: 'तसर सिल्क, खादी व हथकरघा वस्त्र' },
    '01-2': { seq: '01-2', icon: '🏺', title: 'Dokra & Tribal Artifacts', hiTitle: 'डोकरा धातु कला व जनजातीय हस्तशिल्प' },
    '01-3': { seq: '01-3', icon: '🧱', title: 'Terracotta & Pottery', hiTitle: 'टेराकोटा, मूर्तिकला व मिट्टी बर्तन' },
    
    // 02. Auto & Vehicles (Services)
    '02-1': { seq: '02-1', icon: '🛵', title: 'Bike & Scooter Service', hiTitle: 'बाइक व स्कूटर सर्विस' },
    '02-2': { seq: '02-2', icon: '🚗', title: 'Car Repair & Washing', hiTitle: 'कार रिपेयर व वाशिंग' },
    '02-3': { seq: '02-3', icon: '🛺', title: 'Auto & Commercial Transport', hiTitle: 'ऑटो, टैक्सी व कमर्शियल वाहन' },

    // 03. Beauty & Salon (Services)
    '03-1': { seq: '03-1', icon: '💇‍♂️', title: "Men's Grooming", hiTitle: 'मेंस सैलून व हेयर स्टाइलिंग' },
    '03-2': { seq: '03-2', icon: '💅', title: "Women's Parlour", hiTitle: 'महिला ब्यूटी पार्लर व ब्राइडल मेकअप' },
    '03-3': { seq: '03-3', icon: '🌿', title: 'Ayurvedic Spa & Wellness', hiTitle: 'आयुर्वेदिक स्पा व थेरेपी' },

    // 04. Education & Study (Products & Utilities)
    '04-1': { seq: '04-1', icon: '🔔', title: 'Study Library & Reading Rooms', hiTitle: 'वाचनालय व शांत अध्ययन कक्ष' },
    '04-2': { seq: '04-2', icon: '📚', title: 'Competitive Books & Notes', hiTitle: 'प्रतियोगी पुस्तकें व स्टडी नोट्स' },

    // 06. Comics & Entertainment (Products & Media)
    '06-1': { seq: '06-1', icon: '🦸', title: 'Classic Indian Comics', hiTitle: 'अमर चित्र कथा, चाचा चौधरी व सुपरहीरो' },
    '06-2': { seq: '06-2', icon: '📱', title: 'Manga & Webtoons', hiTitle: 'डिजिटल मांगा व रंगीन वेबटून' },

    // 07. Government & Form Services (Citizen Utilities)
    '07-1': { seq: '07-1', icon: '📄', title: 'CSC & Digital Seva Kendra', hiTitle: 'डिजिटल सेवा व सरकारी प्रमाण पत्र' },
    '07-2': { seq: '07-2', icon: '📝', title: 'Online Forms & Admissions', hiTitle: 'ऑनलाइन आवेदन व प्रवेश फॉर्म' },

    // 08. Electronics & Appliances (Services & Repairs)
    '08-1': { seq: '08-1', icon: '📱', title: 'Smartphone & Gadget Care', hiTitle: 'स्मार्टफोन, लैपटॉप व स्क्रीन रिपेयर' },
    '08-2': { seq: '08-2', icon: '⚡', title: 'Electrical & Appliances', hiTitle: 'घरेलू बिजली उपकरण व वायरिंग' },

    // 14. Food & Daily Dining (Products)
    '14-1': { seq: '14-1', icon: '🍲', title: 'Local Dhaba & Tiffin', hiTitle: 'पारंपरिक भोजन व टिफिन सेवा' },
    '14-2': { seq: '14-2', icon: '☕', title: 'Tea, Snacks & Street Food', hiTitle: 'चाय, नाश्ता व स्ट्रीट फूड' },

    // 16. House & Home Care (Services & Utilities)
    '16-1': { seq: '16-1', icon: '🛠️', title: 'Mistry & Home Repair', hiTitle: 'मिस्त्री व दैनिक घरेलू मरम्मत सेवाएं' },
    '16-2': { seq: '16-2', icon: '📋', title: 'Rental Ledger', hiTitle: 'किराया बहीखाता व किरायेदार प्रबंधन' },
    '16-3': { seq: '16-3', icon: '🏠', title: 'Room & Flat Search', hiTitle: 'कमरा, फ्लैट व पीजी खोज (0% दलाली)' },

    // 20. Medical & Health (Products & Care)
    '20-1': { seq: '20-1', icon: '💊', title: 'Pharmacy & Medicines', hiTitle: 'दवाइयां व जेनेरिक मेडिकल स्टोर' },
    '20-2': { seq: '20-2', icon: '🩺', title: 'Doctor Consultation & Clinic', hiTitle: 'डॉक्टर परामर्श व प्राथमिक क्लिनिक' },

    // 27. Shopping & Retail (Products)
    '27-1': { seq: '27-1', icon: '🛒', title: 'Kirana & Daily Grocery', hiTitle: 'किराना दुकान व दैनिक घरेलू राशन' },
    '27-2': { seq: '27-2', icon: '👔', title: 'Clothing & Local Fashion', hiTitle: 'कपड़े, रेडीमेड गारमेंट्स व परिधान' },

    // 33. Revenue & Social Welfare (Citizen Services)
    '33-1': { seq: '33-1', icon: '🏛️', title: 'Panchayat & Block Office', hiTitle: 'पंचायत व प्रखंड जनसुविधा' },
    '33-2': { seq: '33-2', icon: '👵', title: 'Pensions & Women Welfare', hiTitle: 'सामाजिक सुरक्षा व पेंशन योजनाएं' },
    '33-3': { seq: '33-3', icon: '📜', title: 'Land Revenue & Khatiyan', hiTitle: 'राजस्व सेवाएं व भू-अभिलेख' }
  };

  function getSeqFromElement(el) {
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
    try {
      const dataStr = localStorage.getItem(STORAGE_KEY);
      if (!dataStr) return [];
      let raw = JSON.parse(dataStr);
      if (!Array.isArray(raw)) return [];

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
    } catch(e) {
      console.warn('RM Favorites Storage Read Warning:', e);
      return [];
    }
  }

  function savePinned(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      window.dispatchEvent(new CustomEvent('rm:favorites:changed', { detail: { list } }));
    } catch(e) {
      console.warn('RM Favorites Storage Write Warning:', e);
    }
    renderFavorites();
    updatePinButtonsUI();
  }

  // Canonical User Pin/Unpin Toggle (Catalog Modal Controls Only)
  window.toggleServicePin = function(id, title, hiTitle, seq, icon) {
    let list = getPinned();
    const targetSeq = seq || id;
    const existingIndex = list.findIndex(item => (targetSeq && (item.seq === targetSeq || item.code === targetSeq)) || item.id === id);

    if (existingIndex > -1) {
      list.splice(existingIndex, 1);
    } else {
      const s = targetSeq || '⭐';
      const c = CANONICAL_SUBCATS[s];
      list.push({
        id: id || `fav-${s}`,
        seq: s,
        code: s,
        icon: icon || (c ? c.icon : '⭐'),
        title: title || (c ? c.title : 'My Favorite'),
        enTitle: title || (c ? c.title : 'My Favorite'),
        hiTitle: hiTitle || (c ? c.hiTitle : 'मेरी पसंदीदा'),
        pinnedAt: Date.now()
      });
    }
    savePinned(list);
  };

  window.togglePinService = function(code, icon, enTitle, hiTitle, event) {
    if (event) event.stopPropagation();
    window.toggleServicePin(`fav-${code}`, enTitle, hiTitle, code, icon);
  };

  // Programmatic unpin handler (Only triggered via Catalog Modal)
  window.unpinFavoriteItem = function(seqOrCode) {
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
  // 5. SPACE-TOLERANT DEEP CONTAINER FINDER
  // ==============================================================================
  function findSubcardElement(btn) {
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
  // 6. CANONICAL-FIRST DATA EXTRACTOR
  // ==============================================================================
  function extractSubcardData(card) {
    if (!card) return null;
    const seq = getSeqFromElement(card);
    if (!seq) return null;

    if (CANONICAL_SUBCATS[seq]) {
      const c = CANONICAL_SUBCATS[seq];
      return { id: `fav-${seq}`, seq: c.seq, icon: c.icon, title: c.title, hiTitle: c.hiTitle };
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

    return { id: `fav-${seq}`, seq, icon, title, hiTitle };
  }

  // ==============================================================================
  // 7. EVENT LISTENER BINDING (STRICT CLICK INTERCEPTION)
  // ==============================================================================
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
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) rehydrateEngine();
  });

  window.addEventListener('storage', function(e) {
    if (!e || e.key === STORAGE_KEY) rehydrateEngine();
  });

  window.addEventListener('rm:favorites:changed', rehydrateEngine);

  document.addEventListener('click', function(e) {
    const target = e.target.closest('button, [onclick*="toggle"], [id*="toggle"], #cat-menu-btn');
    if (target) {
      setTimeout(updatePinButtonsUI, 150);
      setTimeout(updatePinButtonsUI, 400);
    }
  });

})();
