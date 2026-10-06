/**
 * RISE MITRA — MODULAR CATALOG RUNTIME & DATA REGISTRY ENGINE
 * SPECIFICATION : FOLDER A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) | 14_04__EXT_004
 * GOVERNANCE    : 75:25 RATIO | 3-PILL ACTION STRIP (PIN + VIDEO + OPEN) | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/categories-data.js
 */

// ==============================================================================
// SECTION 1: CANONICAL 50-CATEGORY DATA REGISTRY (PLAY STORE SSOT)
// ==============================================================================

const RM_SERVICES_DATA = [
  { id: 'c01', num: '01', enName: 'Art & Design', hiName: 'डिज़ाइन व कला', name: 'Art & Design (डिज़ाइन व कला)', icon: '🎨' },
  { id: 'c02', num: '02', enName: 'Auto & Vehicles', hiName: 'वाहन सेवा', name: 'Auto & Vehicles (वाहन सेवा)', icon: '🚗' },
  { id: 'c03', num: '03', enName: 'Beauty & Salon', hiName: 'ब्यूटी व सैलून', name: 'Beauty & Salon (ब्यूटी व सैलून)', icon: '✂️' },
  { id: 'c04', num: '04', enName: 'Books & Reference', hiName: 'किताबें व संदर्भ', name: 'Books & Reference (किताबें व संदर्भ)', icon: '📚' },
  { id: 'c05', num: '05', enName: 'Business & Khata', hiName: 'सॉवरेन बहीखाता (Business Khata)', name: 'Business & Khata (सॉवरेन बहीखाता)', icon: '💼', action: 'launch' },
  { id: 'c06', num: '06', enName: 'Comics', hiName: 'कहानियाँ व कॉमिक्स', name: 'Comics (कहानियाँ व कॉमिक्स)', icon: '📖' },
  { id: 'c07', num: '07', enName: 'Communication', hiName: 'संपर्क व संवाद', name: 'Communication (संपर्क व संवाद)', icon: '💬' },
  { id: 'c08', num: '08', enName: 'Dating & Relations', hiName: 'रिश्ते व संबंध', name: 'Dating & Relations (रिश्ते व संबंध)', icon: '🤝' },
  { id: 'c09', num: '09', enName: 'Education & Skills', hiName: 'हुनर सीखें (Education)', name: 'Education & Skills (हुनर सीखें)', icon: '🎓' },
  { id: 'c10', num: '10', enName: 'Entertainment', hiName: 'मनोरंजन व कला', name: 'Entertainment (मनोरंजन)', icon: '🎭' },
  { id: 'c11', num: '11', enName: 'Events & Passes', hiName: 'कार्यक्रम व पास', name: 'Events & Passes (कार्यक्रम व पास)', icon: '🎟️' },
  { id: 'c12', num: '12', enName: 'Family & Care', hiName: 'परिवार व केयर', name: 'Family & Care (परिवार व केयर)', icon: '👨‍👩‍👧' },
  { id: 'c13', num: '13', enName: 'Finance & Ledger', hiName: 'RM CASH लेज़र (Finance)', name: 'Finance & Ledger (RM CASH लेज़र)', icon: '💰' },
  { id: 'c14', num: '14', enName: 'Food & Drink', hiName: 'ढाबा व भोजन', name: 'Food & Drink (ढाबा व भोजन)', icon: '🍲' },
  { id: 'c15', num: '15', enName: 'Health & Fitness', hiName: 'स्वस्थ मन व योग', name: 'Health & Fitness (स्वस्थ मन व योग)', icon: '🧘' },
  { id: 'c16', num: '16', enName: 'House & Home', hiName: 'घर व मकान', name: 'House & Home (घर व मकान)', icon: '🏠', hasChildren: true },
  { id: 'c17', num: '17', enName: 'Libraries & Demo', hiName: 'पुस्तकालय (Libraries)', name: 'Libraries & Demo (पुस्तकालय)', icon: '🏛️' },
  { id: 'c18', num: '18', enName: 'Lifestyle', hiName: 'स्वावलंबन (Lifestyle)', name: 'Lifestyle (स्वावलंबन)', icon: '🌱' },
  { id: 'c19', num: '19', enName: 'Maps & Navigation', hiName: 'मार्गदर्शन (Maps & Navigation)', name: 'Maps & Navigation (मार्गदर्शन)', icon: '🗺️' },
  { id: 'c20', num: '20', enName: 'Medical & Clinic', hiName: 'दवाई व क्लिनिक (Medical)', name: 'Medical & Clinic (दवाई व क्लिनिक)', icon: '💊' },
  { id: 'c21', num: '21', enName: 'Music & Audio', hiName: 'संगीत (Music & Audio)', name: 'Music & Audio (संगीत)', icon: '🎵' },
  { id: 'c22', num: '22', enName: 'News & Magazines', hiName: 'समाचार व पत्रिकाएं', name: 'News & Magazines (समाचार)', icon: '📰' },
  { id: 'c23', num: '23', enName: 'Parenting', hiName: 'शिशु पोषण व परवरिश', name: 'Parenting (शिशु पोषण)', icon: '🍼' },
  { id: 'c24', num: '24', enName: 'Personalization', hiName: 'थीम्स व सेटिंग्स', name: 'Personalization (थीम्स)', icon: '✨' },
  { id: 'c25', num: '25', enName: 'Photography', hiName: 'स्कैनर व फोटो', name: 'Photography (स्कैनर)', icon: '📷' },
  { id: 'c26', num: '26', enName: 'Productivity & Billing', hiName: 'बिलिंग व उत्पादकता', name: 'Productivity (बिलिंग)', icon: '🧾' },
  { id: 'c27', num: '27', enName: 'Shopping & Kirana', hiName: '0% किराना स्टोर', name: 'Shopping & Kirana (0% किराना)', icon: '🛒' },
  { id: 'c28', num: '28', enName: 'Social Networking', hiName: 'चौपाल व संवाद (Social)', name: 'Social Networking (चौपाल व संवाद)', icon: '🗣️' },
  { id: 'c29', num: '29', enName: 'Sports Community', hiName: 'खेलकूद व व्यायाम', name: 'Sports Community (खेलकूद)', icon: '⚽' },
  { id: 'c30', num: '30', enName: 'Tools & Utilities', hiName: 'कैलकुलेटर व टूल्स', name: 'Tools & Utilities (कैलकुलेटर)', icon: '🧮' },
  { id: 'c31', num: '31', enName: 'Travel & Local', hiName: 'यात्रा व स्थानीय सेवाएं', name: 'Travel & Local (यात्रा)', icon: '🧭' },
  { id: 'c32', num: '32', enName: 'Video Players & Editors', hiName: 'वीडियो प्लेयर व संपादन', name: 'Video Players & Editors (वीडियो)', icon: '🎬' },
  { id: 'c33', num: '33', enName: 'Weather', hiName: 'मौसम पूर्वानुमान', name: 'Weather (मौसम पूर्वानुमान)', icon: '🌤️️' }
];

const RM_GAMES_DATA = [
  { id: 'g34', num: '34', enName: 'Action', hiName: 'ऐक्शन तीरंदाजी', name: 'Action (ऐक्शन तीरंदाजी)', icon: '🏹' },
  { id: 'g35', num: '35', enName: 'Adventure', hiName: 'रोमांचक यात्रा', name: 'Adventure (रोमांचक यात्रा)', icon: '🏔️' },
  { id: 'g36', num: '36', enName: 'Arcade', hiName: 'गेंद टप्पा आर्केड', name: 'Arcade (गेंद टप्पा)', icon: '🕹️' },
  { id: 'g37', num: '37', enName: 'Board', hiName: 'देसी लूडो व कैरम', name: 'Board (देसी लूडो व कैरम)', icon: '🎲' },
  { id: 'g38', num: '38', enName: 'Card', hiName: 'ताश सॉलिटेयर', name: 'Card (ताश सॉलिटेयर)', icon: '🃏' },
  { id: 'g39', num: '39', enName: 'Casino', hiName: 'लकी चक्र (Casino Points)', name: 'Casino (लकी चक्र)', icon: '🎡' },
  { id: 'g40', num: '40', enName: 'Casual', hiName: 'रंगोली क्राफ्ट', name: 'Casual (रंगोली क्राफ्ट)', icon: '🎨' },
  { id: 'g41', num: '41', enName: 'Educational', hiName: 'भारत क्विज़', name: 'Educational (भारत क्विज़)', icon: '🇮🇳' },
  { id: 'g42', num: '42', enName: 'Music', hiName: 'तबला व ढोलक ताल', name: 'Music (तबला व ढोलक ताल)', icon: '🥁' },
  { id: 'g43', num: '43', enName: 'Puzzle', hiName: 'दिमागी पहेलियाँ', name: 'Puzzle (दिमागी पहेलियाँ)', icon: '🧩' },
  { id: 'g44', num: '44', enName: 'Racing', hiName: 'बैलगाड़ी रेस', name: 'Racing (बैलगाड़ी रेस)', icon: '🏁' },
  { id: 'g45', num: '45', enName: 'Role Playing', hiName: 'गाँव का प्रधान', name: 'Role Playing (गाँव का प्रधान)', icon: '👑' },
  { id: 'g46', num: '46', enName: 'Simulation', hiName: 'खेत सिमुलेटर', name: 'Simulation (खेत सिमुलेटर)', icon: '🌾' },
  { id: 'g47', num: '47', enName: 'Sports', hiName: 'गली क्रिकेट', name: 'Sports (गली क्रिकेट)', icon: '🏏' },
  { id: 'g48', num: '48', enName: 'Strategy', hiName: 'चाणक्य नीति', name: 'Strategy (चाणक्य नीति)', icon: '♟️' },
  { id: 'g49', num: '49', enName: 'Trivia', hiName: 'देसी ट्रिविया व तथ्य', name: 'Trivia (देसी ट्रिविया)', icon: '💡' },
  { id: 'g50', num: '50', enName: 'Word', hiName: 'शब्द पहेली व कोश', name: 'Word (शब्द पहेली)', icon: '📝' }
];

const C16_CHILDREN = [
  { id: '16-1', enName: 'Mistry & Home Repair', hiName: 'मिस्त्री व गृह मरम्मत', icon: '🛠️', badge: 'जल्द उपलब्ध', state: 'upcoming', action: 'upcoming', videoUrl: null },
  { id: '16-2', enName: 'Rental Ledger', hiName: 'किराया बहीखाता', icon: '📋', badge: 'खोलें ›', state: 'active', action: 'launch', videoUrl: 'rental-ledger-intro' },
  { id: '16-3', enName: 'Room & Flat Search', hiName: 'कमरा व फ्लैट खोज', icon: '🏠', badge: 'खोलें ›', state: 'active', action: 'launch', videoUrl: 'rental-search-intro' }
];

// Helper: LocalStorage Pin Manager
function getPinnedList() {
  try {
    const raw = localStorage.getItem('rm_user_pinned_shortcuts_v1');
    return raw ? JSON.parse(raw) : [];
  } catch (_) {
    return [];
  }
}

function isItemPinned(code) {
  const list = getPinnedList();
  return list.some(item => item.code === code || item.id === code);
}

window.togglePinService = function (code, icon, enTitle, hiTitle, event) {
  if (event) event.stopPropagation();
  try {
    let list = getPinnedList();
    const idx = list.findIndex(item => item.code === code || item.id === code);
    if (idx !== -1) {
      list.splice(idx, 1);
    } else {
      list.push({ code: code, id: code, icon: icon, enTitle: enTitle, hiTitle: hiTitle, pinnedAt: Date.now() });
    }
    localStorage.setItem('rm_user_pinned_shortcuts_v1', JSON.stringify(list));
    if (window.RM_UserPinnedShortcuts && typeof window.RM_UserPinnedShortcuts.render === 'function') {
      window.RM_UserPinnedShortcuts.render();
    }
    renderCatalogItems();
  } catch (e) {
    console.error('Pin toggle failed:', e);
  }
};

window.handleLaunchVideo = function (subId, title, event) {
  if (event) event.stopPropagation();
  alert('🎬 [' + subId + '] ' + title + '\n\nवीडियो ट्यूटोरियल व गाइड जल्द उपलब्ध होगी।');
};

// ==============================================================================
// SECTION 2: DOM CARD RENDER ENGINE (75:25 RATIO & 3-PILL ACTION STRIP)
// ==============================================================================

function renderCatalogItems() {
  const t1 = document.getElementById('tier1-list');
  const t2 = document.getElementById('tier2-list');

  if (t1) {
    t1.innerHTML = RM_SERVICES_DATA.map(item => `
      <div data-cat-id="${item.id}" class="w-full rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all overflow-hidden mb-2 shadow-md relative">
        <div onclick="handleCategoryClick('${item.id}', this)" class="flex items-center justify-between p-3 cursor-pointer active:scale-[0.99] transition-transform min-h-[64px]">
          <div class="flex items-center space-x-2.5 min-w-0 flex-1 pr-2">
            <span class="text-[10px] font-mono font-bold bg-amber-950/70 text-amber-400 border border-amber-800/50 px-1.5 py-0.5 rounded shrink-0">${item.num}.</span>
            <span class="text-xl shrink-0 leading-none">${item.icon}</span>
            <div class="flex flex-col min-w-0 text-left flex-1">
              <span class="text-[13.5px] font-bold text-slate-100 tracking-wide leading-tight break-normal">${item.enName}</span>
              <span class="text-[11.5px] font-medium text-slate-400 leading-tight mt-0.5 break-normal">(${item.hiName})</span>
            </div>
          </div>
          <div class="flex items-center space-x-1.5 shrink-0">
            ${item.hasChildren ? `
              <span class="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/50 whitespace-nowrap">3 सेवाएं</span>
              <span class="acc-arrow text-slate-300 text-xs font-mono font-bold bg-slate-800/90 border border-slate-700/80 w-6 h-6 rounded-full flex items-center justify-center">▼</span>
            ` : `
              <button type="button" class="bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700/80 px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap cursor-pointer shadow-sm">
                खोलें ›
              </button>
            `}
          </div>
        </div>
        ${item.id === 'c16' ? `
          <div id="sub-c16" class="p-2 pt-0 space-y-2.5 bg-slate-950/50 block">
            ${C16_CHILDREN.map(ch => {
              const isPinned = isItemPinned(ch.id);
              const pinBtn = isPinned 
                ? `<button type="button" onclick="togglePinService('${ch.id}', '${ch.icon}', '${ch.enName}', '${ch.hiName}', event)" class="flex-1 bg-cyan-950/90 border border-cyan-500/60 text-cyan-300 px-2 py-1 rounded-lg text-[10px] font-bold flex items-center justify-center space-x-1 cursor-pointer"><span>📌</span><span>पिन है</span></button>`
                : `<button type="button" onclick="togglePinService('${ch.id}', '${ch.icon}', '${ch.enName}', '${ch.hiName}', event)" class="flex-1 bg-slate-800/90 border border-slate-700 text-slate-300 hover:text-white px-2 py-1 rounded-lg text-[10px] font-medium flex items-center justify-center space-x-1 cursor-pointer"><span>📌</span><span>पिन करें</span></button>`;
              
              const videoBtn = `<button type="button" onclick="handleLaunchVideo('${ch.id}', '${ch.enName}', event)" class="flex-1 bg-indigo-950/90 hover:bg-indigo-900 border border-indigo-700/60 text-indigo-300 px-2 py-1 rounded-lg text-[10px] font-bold flex items-center justify-center space-x-1 cursor-pointer"><span>▶</span><span>वीडियो</span></button>`;

              const actBtn = ch.action === 'launch'
                ? `<button type="button" onclick="handleLaunchCategory('c16', '${ch.id}')" class="flex-1 bg-emerald-950/90 border border-emerald-600/60 text-emerald-300 hover:bg-emerald-900/90 px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap text-center cursor-pointer">खोलें ›</button>`
                : `<span class="flex-1 bg-slate-800/80 border border-slate-700/60 text-slate-400 px-2 py-1 rounded-lg text-[10px] font-medium whitespace-nowrap text-center">जल्द उपलब्ध</span>`;

              return `
                <div class="sivme-subcat-card w-full bg-[#0d1424] border border-slate-800/90 rounded-xl overflow-hidden shadow-md flex flex-col justify-between" style="min-height: 114px;">
                  <!-- 75% BILINGUAL CONTENT ZONE (Full Width Typography) -->
                  <div class="p-3 pb-2 flex-1 flex flex-col justify-between relative bg-gradient-to-b from-[#111a30]/80 to-[#0d1424]">
                    <div class="flex items-center justify-between mb-1">
                      <div class="flex items-center space-x-2">
                        <span class="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/90 border border-cyan-800/70 px-2 py-0.5 rounded leading-none">[${ch.id}]</span>
                        <span class="text-lg leading-none">${ch.icon}</span>
                      </div>
                      <span class="sivme-inline-badge text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-950/90 text-emerald-300 border border-emerald-700/60 leading-none">👁️Live</span>
                    </div>
                    <div class="flex flex-col text-left w-full mt-0.5">
                      <span class="text-[13.5px] font-bold text-slate-100 tracking-wide leading-tight break-normal">${ch.enName}</span>
                      <span class="text-[11.5px] font-medium text-slate-400 leading-tight mt-0.5 break-normal">(${ch.hiName})</span>
                    </div>
                  </div>
                  <!-- 25% ACTION STRIP ZONE (Symmetrical 3-Pill Grid: 32% - 32% - 32%) -->
                  <div class="px-2.5 py-1.5 bg-slate-950/90 border-t border-slate-800/70 flex items-center justify-between space-x-2 min-h-[30px]">
                    ${pinBtn}
                    ${videoBtn}
                    ${actBtn}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}
      </div>
    `).join('');
    t1.dataset.rendered = 'true';
  }

  if (t2) {
    t2.innerHTML = RM_GAMES_DATA.map(item => `
      <div data-cat-id="${item.id}" class="w-full rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 active:scale-[0.99] transition-transform cursor-pointer mb-2 shadow-md flex items-center justify-between p-3 min-h-[64px]" onclick="alert('${item.enName} (${item.hiName}) गेम जल्द शुरू होगा')">
        <div class="flex items-center space-x-2.5 min-w-0 flex-1 pr-2">
          <span class="text-[10px] font-mono font-bold bg-cyan-950/70 text-cyan-400 border border-cyan-800/50 px-1.5 py-0.5 rounded shrink-0">${item.num}.</span>
          <span class="text-xl shrink-0 leading-none">${item.icon}</span>
          <div class="flex flex-col min-w-0 text-left flex-1">
            <span class="text-[13.5px] font-bold text-slate-100 tracking-wide leading-tight break-normal">${item.enName}</span>
            <span class="text-[11.5px] font-medium text-slate-400 leading-tight mt-0.5 break-normal">(${item.hiName})</span>
          </div>
        </div>
        <span class="shrink-0 text-xs text-cyan-400 font-bold px-3 py-1 bg-cyan-950/70 rounded-full border border-cyan-800/50 whitespace-nowrap">खेलें ›</span>
      </div>
    `).join('');
    t2.dataset.rendered = 'true';
  }

  syncCategoryVisibilityFromOwner();
}

// ==============================================================================
// SECTION 3: OWNER CONSOLE VISIBILITY SYNC (SURFACE PARITY)
// ==============================================================================

function syncCategoryVisibilityFromOwner() {
  const raw = localStorage.getItem('rm_active_categories_v1');
  let activeIds;

  if (!raw) {
    activeIds = new Set(RM_SERVICES_DATA.map(s => s.id).concat(RM_GAMES_DATA.map(g => g.id)));
  } else {
    try {
      activeIds = new Set(JSON.parse(raw));
      activeIds.add('c16');
      activeIds.add('16');
    } catch (_) {
      activeIds = new Set(RM_SERVICES_DATA.map(s => s.id).concat(RM_GAMES_DATA.map(g => g.id)));
    }
  }

  const t1List = document.getElementById('tier1-list');
  let liveT1 = 0;
  if (t1List) {
    Array.from(t1List.children).forEach(itemEl => {
      const catId = itemEl.dataset.catId;
      if (!catId) return;
      const num = catId.replace('c', '');
      const isLive = activeIds.has(catId) || activeIds.has(num);
      itemEl.style.display = isLive ? 'block' : 'none';
      if (isLive) liveT1++;
    });

    const t1Header = document.getElementById('tier1-header-text');
    if (t1Header) t1Header.textContent = `💼 आजीविका (${liveT1} सेवाएं उपलब्ध)`;
  }

  const t2List = document.getElementById('tier2-list');
  let liveT2 = 0;
  if (t2List) {
    Array.from(t2List.children).forEach(itemEl => {
      const catId = itemEl.dataset.catId;
      if (!catId) return;
      const num = catId.replace('g', '');
      const isLive = activeIds.has(catId) || activeIds.has(num);
      itemEl.style.display = isLive ? 'flex' : 'none';
      if (isLive) liveT2++;
    });

    const t2Header = document.getElementById('tier2-header-text');
    if (t2Header) t2Header.textContent = `🎮 खेल व मनोरंजन (${liveT2} श्रेणियां उपलब्ध)`;
  }

  const modalCount = document.getElementById('modal-catalog-count');
  if (modalCount) {
    modalCount.textContent = `${liveT1} Services • ${liveT2} Games Active`;
  }
}

// ==============================================================================
// SECTION 4: NAVIGATION, MODULE MOUNTING & CONTAINER RECOVERY
// ==============================================================================

function handleCategoryClick(catId, el) {
  if (catId === 'c16') {
    const sub = document.getElementById('sub-c16');
    const arrow = el ? el.querySelector('.acc-arrow') : null;
    if (sub) {
      const isHidden = sub.style.display === 'none' || sub.classList.contains('hidden');
      sub.style.display = isHidden ? 'block' : 'none';
      if (arrow) arrow.textContent = isHidden ? '▲' : '▼';
    }
  } else if (catId === 'c05') {
    handleLaunchCategory('c05', '05-1');
  } else {
    alert(catId + ' सेवा का विस्तार जल्द उपलब्ध होगा।');
  }
}

function handleLaunchCategory(catId, subId) {
  if (typeof toggleMenuDrawer === 'function') toggleMenuDrawer(false);
  const container = document.getElementById('rm-module-container');
  if (!container) return;

  if (catId === 'c16' && (subId === '16-2' || !subId)) {
    if (typeof openFullscreenModule === 'function') {
      openFullscreenModule('🏠 16-2. Rental Ledger (किराया बहीखाता)');
    }

    if (window.RM_Cat16_Sub2_RentalLedger && typeof window.RM_Cat16_Sub2_RentalLedger.mount === 'function') {
      window.RM_Cat16_Sub2_RentalLedger.mount(container);
    } else {
      container.innerHTML = '<div class="p-6 text-center text-xs text-emerald-400 animate-pulse">किराया बहीखाता लोड हो रहा है...</div>';
      const script = document.createElement('script');
      script.src = '/js/catalog/category-16/16-2-rental-ledger.js?v=' + (window.RM_DEPLOY_EPOCH || Date.now());
      script.async = true;

      script.onload = function () {
        if (window.RM_Cat16_Sub2_RentalLedger && typeof window.RM_Cat16_Sub2_RentalLedger.mount === 'function') {
          window.RM_Cat16_Sub2_RentalLedger.mount(container);
        } else {
          container.innerHTML = '<div class="p-6 text-center text-xs text-amber-400 bg-amber-950/40 border border-amber-800/60 rounded-xl">मॉड्यूल लोड हुआ किंतु इनिशियलाइज़ नहीं हो सका।</div>';
        }
      };

      script.onerror = function () {
        container.innerHTML = '<div class="p-6 text-center text-xs text-red-400 bg-red-950/40 border border-red-800/60 rounded-xl space-y-2"><div>मॉड्यूल लोड नहीं हो सका — कृपया पुनः प्रयास करें।</div><button onclick="handleLaunchCategory(\'c16\', \'16-2\')" class="px-3 py-1 bg-red-900/60 border border-red-700 text-red-200 rounded text-[10px] font-bold cursor-pointer">रीट्राई करें</button></div>';
      };

      document.body.appendChild(script);
    }
  } else if (catId === 'c16' && subId === '16-3') {
    if (typeof openFullscreenModule === 'function') {
      openFullscreenModule('🏠 16-3. Room & Flat Search (कमरा व फ्लैट खोज)');
    }

    if (window.RM_Cat16_Sub3_RentalSearch && typeof window.RM_Cat16_Sub3_RentalSearch.mount === 'function') {
      window.RM_Cat16_Sub3_RentalSearch.mount(container);
    } else {
      container.innerHTML = '<div class="p-6 text-center text-xs text-emerald-400 animate-pulse">कमरा व फ्लैट खोज लोड हो रहा है...</div>';
      const script = document.createElement('script');
      script.src = '/js/catalog/category-16/16-3-rental-search.js?v=' + (window.RM_DEPLOY_EPOCH || Date.now());
      script.async = true;

      script.onload = function () {
        if (window.RM_Cat16_Sub3_RentalSearch && typeof window.RM_Cat16_Sub3_RentalSearch.mount === 'function') {
          window.RM_Cat16_Sub3_RentalSearch.mount(container);
        } else {
          container.innerHTML = '<div class="p-6 text-center text-xs text-amber-400 bg-amber-950/40 border border-amber-800/60 rounded-xl">मॉड्यूल लोड हुआ किंतु इनिशियलाइज़ नहीं हो सका।</div>';
        }
      };

      script.onerror = function () {
        container.innerHTML = '<div class="p-6 text-center text-xs text-red-400 bg-red-950/40 border border-red-800/60 rounded-xl space-y-2"><div>मॉड्यूल लोड नहीं हो सका — कृपया पुनः प्रयास करें।</div><button onclick="handleLaunchCategory(\'c16\', \'16-3\')" class="px-3 py-1 bg-red-900/60 border border-red-700 text-red-200 rounded text-[10px] font-bold cursor-pointer">रीट्राई करें</button></div>';
      };

      document.body.appendChild(script);
    }
  } else if (catId === 'c05') {
    alert('सॉवरेन बहीखाता (Business Khata) लोड हो रहा है...');
  } else {
    alert('यह सेवा जल्द ही एक्टिवेट होगी।');
  }
}

// ==============================================================================
// SECTION 5: AUTO-BOOTSTRAP & PUBLIC API EXPORTS
// ==============================================================================

window.RM_CatalogRenderer = {
  render: renderCatalogItems,
  sync: syncCategoryVisibilityFromOwner,
  launch: handleLaunchCategory
};

window.renderCatalogItems = renderCatalogItems;
window.syncCategoryVisibilityFromOwner = syncCategoryVisibilityFromOwner;
window.handleCategoryClick = handleCategoryClick;
window.handleLaunchCategory = handleLaunchCategory;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderCatalogItems);
} else {
  renderCatalogItems();
}

window.addEventListener('storage', syncCategoryVisibilityFromOwner);
