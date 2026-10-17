/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Favorites Part-1 — Canonical Sub-Category Data & DOM Extractor v1.3
 *   - REPO TARGET    : public/js/favorites-data-extractor.js
 *   - SURFACE TARGET : SURFACE-A ONLY (With Safe Pass-Through for Surface-B SIVME)
 *   - HOST BINDING   : Surface-A (public/index.html) | Surface-B (public/owner-console.html)
 *   - SIZE BUDGET    : Target <= 300 Logical Lines (Surface-A <= 120 KB Gzipped | 0% Secrets)
 *   - GOVERNANCE     : 100% ZEL | Fail-Closed | 28% NCR Cap | Modular Sandbox Isolation
 *   - SOURCE REFS    : Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/favorites-data-extractor.js (This File: Part-1 Canonical Registry & DOM Extractor)
 *   - public/js/favorites-engine.js (Part-2: Tap-Safe UI Renderer, Pin Sync & Lifecycle Controller)
 *   - public/js/one-tap-shell-bridge.js (Master 1-Tap Router & Modal Controller — Surface-A)
 *   - public/js/universal-catalog/catalog-loader.js (Dynamic Atomic Category & Tier-2 Games Loader)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Storing CANONICAL_SUBCATS (01-1 to 33-3), reading & auto-healing
 *                              localStorage['rm_user_pinned_shortcuts_v1'], finding sub-card DOM
 *                              containers, and extracting canonical/DOM card metadata.
 *   - ALLOWED ON SURFACE-B   : Passive data helper only; zero DOM mutation on Owner Console.
 *   - FORBIDDEN IN THIS FILE : Rendering Home Grid HTML or binding global click listeners
 *                              (strictly owned by Part-2 public/js/favorites-engine.js).
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_FAVORITES_DATA, localStorage['rm_user_pinned_shortcuts_v1']
 *   - CALLS EXTERNAL APIs : window.renderFavorites, window.updatePinButtonsUI (on module load)
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #categoryModal, [data-cat-id], .c16-subcard-clean, [id^="sub-c"],
 *                           .sivme-subcat-card, .cat-bilingual-hi, .cat-icon
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Zero event listeners in Part-1 (pure data & DOM query module).
 *   - SCROLL SAFETY : Zero scroll or touch listeners.
 *   - DOM SAFETY    : Read-only DOM extraction in findSubcardElement & extractSubcardData.
 * ==============================================================================
 * 7. 100% ZEL FUNCTION MANIFEST (PART-1: 4 MANDATORY FUNCTIONS + CANONICAL REGISTRY):
 *   1. getSeqFromElement       2. getPinned
 *   3. findSubcardElement      4. extractSubcardData
 * ==============================================================================
 */

(function initFavoritesDataExtractor() {
  'use strict';

  const STORAGE_KEY = 'rm_user_pinned_shortcuts_v1';

  // ==============================================================================
  // 1. UNIVERSAL CANONICAL SUB-CATEGORY REGISTRY (100% SSOT INTACT)
  // ==============================================================================
  const CANONICAL_SUBCATS = {
    // 01. Tribal Arts & Handloom (Products)
    '01-1': { seq: '01-1', tag: 'Handloom', icon: '🥻', title: 'Tussar Silk & Handloom', hiTitle: 'तसर सिल्क, खादी व हथकरघा वस्त्र' },
    '01-2': { seq: '01-2', tag: 'Tribal Art', icon: '🏺', title: 'Dokra & Tribal Artifacts', hiTitle: 'डोकरा धातु कला व जनजातीय हस्तशिल्प' },
    '01-3': { seq: '01-3', tag: 'Pottery', icon: '🧱', title: 'Terracotta & Pottery', hiTitle: 'टेराकोटा, मूर्तिकला व मिट्टी बर्तन' },

    // 02. Auto & Vehicles (Services)
    '02-1': { seq: '02-1', tag: 'Bike Service', icon: '🛵', title: 'Bike & Scooter Service', hiTitle: 'बाइक व स्कूटर सर्विस' },
    '02-2': { seq: '02-2', tag: 'Car Service', icon: '🚗', title: 'Car Repair & Washing', hiTitle: 'कार रिपेयर व वाशिंग' },
    '02-3': { seq: '02-3', tag: 'Transport', icon: '🛺', title: 'Auto & Commercial Transport', hiTitle: 'ऑटो, टैक्सी व कमर्शियल वाहन' },

    // 03. Beauty & Salon (Services)
    '03-1': { seq: '03-1', tag: 'Grooming', icon: '💇‍♂️', title: "Men's Grooming", hiTitle: 'मेंस सैलून व हेयर स्टाइलिंग' },
    '03-2': { seq: '03-2', tag: 'Parlour', icon: '💅', title: "Women's Parlour", hiTitle: 'महिला ब्यूटी पार्लर व ब्राइडल मेकअप' },
    '03-3': { seq: '03-3', tag: 'Wellness', icon: '🌿', title: 'Ayurvedic Spa & Wellness', hiTitle: 'आयुर्वेदिक स्पा व थेरेपी' },

    // 04. Education & Study (Products & Utilities)
    '04-1': { seq: '04-1', tag: 'Library', icon: '🔔', title: 'Study Library & Reading Rooms', hiTitle: 'वाचनालय व शांत अध्ययन कक्ष' },
    '04-2': { seq: '04-2', tag: 'Books', icon: '📚', title: 'Competitive Books & Notes', hiTitle: 'प्रतियोगी पुस्तकें व स्टडी नोट्स' },

    // 06. Comics & Entertainment (Products & Media)
    '06-1': { seq: '06-1', tag: 'Comics', icon: '🦸', title: 'Classic Indian Comics', hiTitle: 'अमर चित्र कथा, चाचा चौधरी व सुपरहीरो' },
    '06-2': { seq: '06-2', tag: 'Webtoons', icon: '📱', title: 'Manga & Webtoons', hiTitle: 'डिजिटल मांगा व रंगीन वेबटून' },

    // 07. Government & Form Services (Citizen Utilities)
    '07-1': { seq: '07-1', tag: 'Digital Seva', icon: '📄', title: 'CSC & Digital Seva Kendra', hiTitle: 'डिजिटल सेवा व सरकारी प्रमाण पत्र' },
    '07-2': { seq: '07-2', tag: 'Online Forms', icon: '📝', title: 'Online Forms & Admissions', hiTitle: 'ऑनलाइन आवेदन व प्रवेश फॉर्म' },

    // 08. Electronics & Appliances (Services & Repairs)
    '08-1': { seq: '08-1', tag: 'Gadget Care', icon: '📱', title: 'Smartphone & Gadget Care', hiTitle: 'स्मार्टफोन, लैपटॉप व स्क्रीन रिपेयर' },
    '08-2': { seq: '08-2', tag: 'Appliances', icon: '⚡', title: 'Electrical & Appliances', hiTitle: 'घरेलू बिजली उपकरण व वायरिंग' },

    // 14. Food & Daily Dining (Products)
    '14-1': { seq: '14-1', tag: 'Dining', icon: '🍲', title: 'Local Dhaba & Tiffin', hiTitle: 'पारंपरिक भोजन व टिफिन सेवा' },
    '14-2': { seq: '14-2', tag: 'Snacks', icon: '☕', title: 'Tea, Snacks & Street Food', hiTitle: 'चाय, नाश्ता व स्ट्रीट फूड' },

    // 16. House & Home Care (Services & Utilities)
    '16-1': { seq: '16-1', tag: 'Home Repair', icon: '🛠️', title: 'Mistry & Home Repair', hiTitle: 'मिस्त्री व दैनिक घरेलू मरम्मत सेवाएं' },
    '16-2': { seq: '16-2', tag: 'Rent Ledger', icon: '📋', title: 'Rental Ledger', hiTitle: 'किराया बहीखाता व किरायेदार प्रबंधन' },
    '16-3': { seq: '16-3', tag: 'Room Search', icon: '🏠', title: 'Room & Flat Search', hiTitle: 'कमरा, फ्लैट व पीजी खोज (0% दलाली)' },

    // 20. Medical & Health (Products & Care)
    '20-1': { seq: '20-1', tag: 'Pharmacy', icon: '💊', title: 'Pharmacy & Medicines', hiTitle: 'दवाइयां व जेनेरिक मेडिकल स्टोर' },
    '20-2': { seq: '20-2', tag: 'Clinic', icon: '🩺', title: 'Doctor Consultation & Clinic', hiTitle: 'डॉक्टर परामर्श व प्राथमिक क्लिनिक' },

    // 27. Shopping & Retail (Products)
    '27-1': { seq: '27-1', tag: 'Grocery', icon: '🛒', title: 'Kirana & Daily Grocery', hiTitle: 'किराना दुकान व दैनिक घरेलू राशन' },
    '27-2': { seq: '27-2', tag: 'Fashion', icon: '👔', title: 'Clothing & Local Fashion', hiTitle: 'कपड़े, रेडीमेड गारमेंट्स व परिधान' },

    // 33. Revenue & Social Welfare (Citizen Services)
    '33-1': { seq: '33-1', tag: 'Panchayat', icon: '🏛️', title: 'Panchayat & Block Office', hiTitle: 'पंचायत व प्रखंड जनसुविधा' },
    '33-2': { seq: '33-2', tag: 'Welfare', icon: '👵', title: 'Pensions & Women Welfare', hiTitle: 'सामाजिक सुरक्षा व पेंशन योजनाएं' },
    '33-3': { seq: '33-3', tag: 'Land Records', icon: '📜', title: 'Land Revenue & Khatiyan', hiTitle: 'राजस्व सेवाएं व भू-अभिलेख' }
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
  // 2. BULLETPROOF PERSISTENCE READER & AUTO-HEALER (ZERO DATA LOSS)
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

  // ==============================================================================
  // 3. SPACE-TOLERANT DEEP CONTAINER FINDER
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
  // 4. CANONICAL-FIRST DATA EXTRACTOR
  // ==============================================================================
  function extractSubcardData(card) {
    if (!card) return null;
    const seq = getSeqFromElement(card);
    if (!seq) return null;

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

  window.RM_FAVORITES_DATA = {
    STORAGE_KEY: STORAGE_KEY,
    CANONICAL_SUBCATS: CANONICAL_SUBCATS,
    getSeqFromElement: getSeqFromElement,
    getPinned: getPinned,
    findSubcardElement: findSubcardElement,
    extractSubcardData: extractSubcardData
  };

  if (typeof window.renderFavorites === 'function') window.renderFavorites();
  if (typeof window.updatePinButtonsUI === 'function') window.updatePinButtonsUI();
})();
