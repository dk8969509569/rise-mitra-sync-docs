/**
 * Rise Mitra (RM WORLD) — 50 Categories Modular Extension & Drawer Controller
 * Canonical Binding: File-14 Section Q & 00_SPEC (Skeleton Shell Invariant)
 * Features: 33 Play Store Apps + 17 Anti-RMG Games • Dynamic Accordion Injection • Auto-Close
 * Architecture: DEC-RM-SOV-ARCH-20260929-UNIVERSAL-ZEL-CATALOG (v0.3.1)
 */

(function () {
  'use strict';

  // 1. CANONICAL 50 PLAY STORE TAXONOMY (33 APPS + 17 GAMES)
  const PLAYSTORE_50_CATEGORIES = [
    // TIER 1: 33 APPLICATIONS
    { id: "c01", tier: 1, hash: "#cat-art-design", icon: "🎨", en: "01. Art & Design", hi: "01. Art & Design (कला व डिज़ाइन)" },
    { id: "c02", tier: 1, hash: "#cat-auto-vehicles", icon: "🚗", en: "02. Auto & Vehicles", hi: "02. Auto & Vehicles (ऑटो व वाहन)" },
    { id: "c03", tier: 1, hash: "#cat-beauty", icon: "💄", en: "03. Beauty", hi: "03. Beauty (सौंदर्य व ग्रूमिंग)" },
    { id: "c04", tier: 1, hash: "#cat-books-reference", icon: "📚", en: "04. Books & Reference", hi: "04. Books & Reference (किताबें)" },
    { id: "c05", tier: 1, hash: "#merchant-khata", icon: "💼", en: "05. Business", hi: "05. Business (सॉवरेन बहीखाता)" },
    { id: "c06", tier: 1, hash: "#cat-comics", icon: "🎭", en: "06. Comics", hi: "06. Comics (कॉमिक्स व वेबटून)" },
    { id: "c07", tier: 1, hash: "#cat-communication", icon: "💬", en: "07. Communication", hi: "07. Communication (संचार व चैट)" },
    { id: "c08", tier: 1, hash: "#cat-dating", icon: "❤️", en: "08. Dating", hi: "08. Dating (परिचय व रिश्ते)" },
    { id: "c09", tier: 1, hash: "#hunar-seekhein", icon: "🎓", en: "09. Education", hi: "09. Education (हुनर व शिक्षा)" },
    { id: "c10", tier: 1, hash: "#cat-entertainment", icon: "🎬", en: "10. Entertainment", hi: "10. Entertainment (मनोरंजन)" },
    { id: "c11", tier: 1, hash: "#cat-events", icon: "🎟️", en: "11. Events", hi: "11. Events (मेले व आयोजन)" },
    { id: "c12", tier: 1, hash: "#cat-family", icon: "👨‍👩‍👧", en: "12. Family", hi: "12. Family (परिवार व बच्चे)" },
    { id: "c13", tier: 1, hash: "#ledger-balance", icon: "💰", en: "13. Finance", hi: "13. Finance (RM CASH लेज़र)" },
    { id: "c14", tier: 1, hash: "#cat-food-drink", icon: "🍲", en: "14. Food & Drink", hi: "14. Food & Drink (खान-पान)" },
    { id: "c15", tier: 1, hash: "#swasth-man", icon: "🌿", en: "15. Health & Fitness", hi: "15. Health & Fitness (स्वास्थ्य)" },
    {
      id: "c16",
      categoryId: "category-16",
      tier: 1,
      hash: "#cat-house-home",
      icon: "🏠",
      en: "16. House & Home",
      hi: "16. House & Home (घर व मरम्मत)",
      defaultSubFeature: "16-2",
      modulePath: "/js/catalog/category-16/16-2-rental-ledger.js",
      dataPath: "/data/category-16/16-2-rental-ledger.json",
      schemaPath: "/data/category-16/16-2-rental-ledger.schema.json",
      cacheBundle: [
        "/js/catalog/category-16/16-2-rental-ledger.js",
        "/data/category-16/16-2-rental-ledger.json",
        "/data/category-16/16-2-rental-ledger.schema.json"
      ]
    },
    { id: "c17", tier: 1, hash: "#cat-libraries-demo", icon: "📦", en: "17. Libraries & Demo", hi: "17. Libraries & Demo (टूल्स)" },
    { id: "c18", tier: 1, hash: "#lifestyle-hub", icon: "🧘", en: "18. Lifestyle", hi: "18. Lifestyle (जीवनशैली)" },
    { id: "c19", tier: 1, hash: "#hyperlocal-map", icon: "🗺️", en: "19. Maps & Navigation", hi: "19. Maps & Navigation (नक्शा)" },
    { id: "c20", tier: 1, hash: "#cat-medical", icon: "💊", en: "20. Medical", hi: "20. Medical (दवा व डॉक्टर)" },
    { id: "c21", tier: 1, hash: "#cat-music-audio", icon: "🎵", en: "21. Music & Audio", hi: "21. Music & Audio (संगीत)" },
    { id: "c22", tier: 1, hash: "#cat-news", icon: "📰", en: "22. News & Magazines", hi: "22. News & Magazines (समाचार)" },
    { id: "c23", tier: 1, hash: "#cat-parenting", icon: "🍼", en: "23. Parenting", hi: "23. Parenting (शिशु पोषण)" },
    { id: "c24", tier: 1, hash: "#cat-personalization", icon: "✨", en: "24. Personalization", hi: "24. Personalization (थीम्स)" },
    { id: "c25", tier: 1, hash: "#cat-photography", icon: "📸", en: "25. Photography", hi: "25. Photography (कैमरा)" },
    { id: "c26", tier: 1, hash: "#invoicing-tool", icon: "⚡", en: "26. Productivity", hi: "26. Productivity (उत्पादकता)" },
    { id: "c27", tier: 1, hash: "#kirana-store", icon: "🛒", en: "27. Shopping", hi: "27. Shopping (0% किराना स्टोर)" },
    { id: "c28", tier: 1, hash: "#cat-social", icon: "🌐", en: "28. Social", hi: "28. Social (चौपाल व समाज)" },
    { id: "c29", tier: 1, hash: "#cat-sports-app", icon: "🏏", en: "29. Sports", hi: "29. Sports (खेलकूद व लाइव)" },
    { id: "c30", tier: 1, hash: "#utility-tools", icon: "🛠️", en: "30. Tools", hi: "30. Tools (कैलकुलेटर व टूल्स)" },
    { id: "c31", tier: 1, hash: "#cat-travel", icon: "✈️", en: "31. Travel & Local", hi: "31. Travel & Local (यात्रा)" },
    { id: "c32", tier: 1, hash: "#cat-video", icon: "🎞️", en: "32. Video Players & Editors", hi: "32. Video Players & Editors" },
    { id: "c33", tier: 1, hash: "#cat-weather", icon: "☀️", en: "33. Weather", hi: "33. Weather (मौसम पूर्वानुमान)" },

    // TIER 2: 17 CASUAL GAMES (ANTI-RMG)
    { id: "g34", tier: 2, hash: "#game-action", icon: "🏹", en: "01. Action", hi: "01. Action (एक्शन तीरंदाजी)" },
    { id: "g35", tier: 2, hash: "#game-adventure", icon: "🧭", en: "02. Adventure", hi: "02. Adventure (रोमांचक यात्रा)" },
    { id: "g36", tier: 2, hash: "#game-arcade", icon: "🕹️", en: "03. Arcade", hi: "03. Arcade (गेंद टप्पा / आर्केड)" },
    { id: "g37", tier: 2, hash: "#game-board", icon: "🎲", en: "04. Board", hi: "04. Board (देसी लूडो व कैरम)" },
    { id: "g38", tier: 2, hash: "#game-card", icon: "🃏", en: "05. Card", hi: "05. Card (सॉलिटेयर - Zero Cash)" },
    { id: "g39", tier: 2, hash: "#game-casino", icon: "🎡", en: "06. Casino", hi: "06. Casino (पॉइंट्स लकी चक्र)" },
    { id: "g40", tier: 2, hash: "#game-casual", icon: "🎈", en: "07. Casual", hi: "07. Casual (रंगोली व हल्के खेल)" },
    { id: "g41", tier: 2, hash: "#game-educational", icon: "🧠", en: "08. Educational", hi: "08. Educational (ज्ञान क्विज़)" },
    { id: "g42", tier: 2, hash: "#game-music", icon: "🥁", en: "09. Music", hi: "09. Music (संगीत ताल व बीट)" },
    { id: "g43", tier: 2, hash: "#game-puzzle", icon: "🧩", en: "10. Puzzle", hi: "10. Puzzle (दिमागी पहेलियाँ)" },
    { id: "g44", tier: 2, hash: "#game-racing", icon: "🏎️", en: "11. Racing", hi: "11. Racing (बैलगाड़ी / कार्ट रेस)" },
    { id: "g45", tier: 2, hash: "#game-role-playing", icon: "👑", en: "12. Role Playing", hi: "12. Role Playing (गाँव का प्रधान)" },
    { id: "g46", tier: 2, hash: "#game-simulation", icon: "🚜", en: "13. Simulation", hi: "13. Simulation (खेत सिमुलेटर)" },
    { id: "g47", tier: 2, hash: "#game-sports", icon: "🏏", en: "14. Sports", hi: "14. Sports (गली क्रिकेट)" },
    { id: "g48", tier: 2, hash: "#game-strategy", icon: "♟️", en: "15. Strategy", hi: "15. Strategy (चाणक्य नीति / शतरंज)" },
    { id: "g49", tier: 2, hash: "#game-trivia", icon: "❓", en: "16. Trivia", hi: "16. Trivia (देसी ट्रिविया व तथ्य)" },
    { id: "g50", tier: 2, hash: "#game-word", icon: "🔤", en: "17. Word", hi: "17. Word (शब्द पहेली व कोश)" }
  ];

  // 2. DYNAMIC ACCORDION INJECTION & AUTO-RENDER
  function renderCategoriesAccordion() {
    const tier1Box = document.getElementById('tier1-list') || document.getElementById('rm-tier1-list');
    const tier2Box = document.getElementById('tier2-list') || document.getElementById('rm-tier2-list');
    if (!tier1Box || !tier2Box) return;

    const currentLang = document.documentElement.lang || 'hi';
    tier1Box.innerHTML = '';
    tier2Box.innerHTML = '';

    const frag1 = document.createDocumentFragment();
    const frag2 = document.createDocumentFragment();

    PLAYSTORE_50_CATEGORIES.forEach(item => {
      const a = document.createElement('a');
      a.href = item.hash;
      a.className = 'rm-menu-item';
      a.setAttribute('data-category-id', item.id);
      const title = currentLang === 'en' ? item.en : item.hi;
      a.innerHTML = `<span style="font-size:1.1rem; line-height:1;">${item.icon}</span><span>${title}</span>`;
      a.setAttribute('data-en', item.en);
      a.setAttribute('data-hi', item.hi);

      if (item.tier === 1) {
        frag1.appendChild(a);
      } else {
        frag2.appendChild(a);
      }
    });

    tier1Box.appendChild(frag1);
    tier2Box.appendChild(frag2);
  }

  // 3. ON-DEMAND MODULAR SCRIPT LOADER (ZERO ELEMENT LOSS)
  function loadCatalogModule(catId, targetContainer) {
    const cat = PLAYSTORE_50_CATEGORIES.find(c => c.id === catId || c.categoryId === catId);
    if (!cat || !cat.modulePath) return false;

    const mountPoint = targetContainer || document.getElementById('rm-module-container') || document.getElementById('main-content');
    if (!mountPoint) return false;

    if (window.RM_Cat16_Sub2_RentalLedger) {
      window.RM_Cat16_Sub2_RentalLedger.mount(mountPoint);
      return true;
    }

    const script = document.createElement('script');
    script.src = cat.modulePath;
    script.async = true;
    script.onload = function () {
      if (window.RM_Cat16_Sub2_RentalLedger) {
        window.RM_Cat16_Sub2_RentalLedger.mount(mountPoint);
      }
    };
    script.onerror = function () {
      mountPoint.innerHTML = '<div style="padding:16px; color:#ef4444;">मॉड्यूल लोड करने में विफलता हुई।</div>';
    };
    document.body.appendChild(script);
    return true;
  }

  // 4. AUTO-CLOSE DRAWER & HASH DISPATCHER
  document.addEventListener('click', function (e) {
    const menuItem = e.target.closest('.rm-menu-item') || e.target.closest('.rm-cat-item');
    if (menuItem) {
      const drawer = document.getElementById('rm-drawer-menu');
      const backdrop = document.getElementById('rm-drawer-backdrop');
      if (drawer) drawer.style.transform = 'translateX(-100%)';
      if (backdrop) backdrop.style.display = 'none';
      document.body.style.overflow = '';

      const catId = menuItem.getAttribute('data-category-id');
      if (catId === 'c16') {
        loadCatalogModule('c16');
      }
    }
  });

  // Export to Global Scope & Immediate Init
  window.PLAYSTORE_50_CATEGORIES = PLAYSTORE_50_CATEGORIES;
  window.renderCategoriesAccordion = renderCategoriesAccordion;
  window.loadCatalogModule = loadCatalogModule;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCategoriesAccordion);
  } else {
    renderCategoriesAccordion();
  }
})();
