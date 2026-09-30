/**
 * RISE MITRA — MODULAR CATALOG RUNTIME & DATA REGISTRY ENGINE
 * SPECIFICATION : 14_04__EXT_004_MODULAR_ARCHITECTURE_MOBILE_SAFETY_RECOVERY_SPEC
 * GOVERNANCE    : GATE-16.7 | DEC-RM-SOV-ARCH-20260930-MODULAR-ZEL-001
 * REPO TARGET   : public/js/categories-data.js
 */


// ==============================================================================
// SECTION 1: CANONICAL 50-CATEGORY DATA REGISTRY (SSOT)
// ==============================================================================

const RM_SERVICES_DATA = [
  { id: 'c01', num: '01', name: 'डिज़ाइन व कला (Art & Design)', icon: '🎨' },
  { id: 'c02', num: '02', name: 'वाहन सेवा (Auto & Vehicles)', icon: '🚗' },
  { id: 'c03', num: '03', name: 'ब्यूटी व सैलून (Beauty & Salon)', icon: '✂️' },
  { id: 'c04', num: '04', name: 'किताबें व संदर्भ (Books)', icon: '📚' },
  { id: 'c05', num: '05', name: 'सॉवरेन बहीखाता (Business Khata)', icon: '💼', action: 'launch' },
  { id: 'c06', num: '06', name: 'कहानियाँ व कॉमिक्स (Comics)', icon: '📖' },
  { id: 'c07', num: '07', name: 'संपर्क व संवाद (Communication)', icon: '💬' },
  { id: 'c08', num: '08', name: 'रिश्ते व संबंध (Relations)', icon: '🤝' },
  { id: 'c09', num: '09', name: 'हुनर सीखें (Education)', icon: '🎓' },
  { id: 'c10', num: '10', name: 'मनोरंजन (Entertainment)', icon: '🎭' },
  { id: 'c11', num: '11', name: 'कार्यक्रम व पास (Events)', icon: '🎟️' },
  { id: 'c12', num: '12', name: 'परिवार व केयर (Family & Care)', icon: '👨‍👩‍👧' },
  { id: 'c13', num: '13', name: 'RM CASH लेज़र (Finance)', icon: '💰' },
  { id: 'c14', num: '14', name: 'ढाबा व भोजन (Food & Drink)', icon: '🍲' },
  { id: 'c15', num: '15', name: 'स्वस्थ मन व योग (Health & Fitness)', icon: '🧘' },
  { id: 'c16', num: '16', name: 'घर व मकान (House & Home)', icon: '🏠', hasChildren: true },
  { id: 'c17', num: '17', name: 'पुस्तकालय (Libraries)', icon: '🏛️' },
  { id: 'c18', num: '18', name: 'स्वावलंबन (Lifestyle)', icon: '🌱' },
  { id: 'c19', num: '19', name: 'मार्गदर्शन (Maps & Navigation)', icon: '🗺️' },
  { id: 'c20', num: '20', name: 'दवाई व क्लिनिक (Medical)', icon: '💊' },
  { id: 'c21', num: '21', name: 'संगीत (Music & Audio)', icon: '🎵' },
  { id: 'c22', num: '22', name: 'समाचार (News & Magazines)', icon: '📰' },
  { id: 'c23', num: '23', name: 'शिशु पोषण (Parenting)', icon: '🍼' },
  { id: 'c24', num: '24', name: 'थीम्स (Personalization)', icon: '✨' },
  { id: 'c25', num: '25', name: 'स्कैनर (Photography)', icon: '📷' },
  { id: 'c26', num: '26', name: 'बिलिंग (Productivity)', icon: '🧾' },
  { id: 'c27', num: '27', name: '0% किराना स्टोर (Shopping)', icon: '🛒' },
  { id: 'c28', num: '28', name: 'चौपाल व संवाद (Social)', icon: '🗣️' },
  { id: 'c29', num: '29', name: 'खेलकूद (Sports Community)', icon: '⚽' },
  { id: 'c30', num: '30', name: 'कैलकुलेटर (Tools)', icon: '🧮' },
  { id: 'c31', num: '31', name: 'यात्रा (Travel & Local)', icon: '🧭' },
  { id: 'c32', num: '32', name: 'वीडियो प्लेयर व संपादन (Video)', icon: '🎬' },
  { id: 'c33', num: '33', name: 'मौसम पूर्वानुमान (Weather)', icon: '🌤️' }
];

const RM_GAMES_DATA = [
  { id: 'g34', num: '34', name: 'ऐक्शन तीरंदाजी (Action)', icon: '🏹' },
  { id: 'g35', num: '35', name: 'रोमांचक यात्रा (Adventure)', icon: '🏔️' },
  { id: 'g36', num: '36', name: 'गेंद टप्पा (Arcade)', icon: '🕹️' },
  { id: 'g37', num: '37', name: 'देसी लूडो व कैरम (Board)', icon: '🎲' },
  { id: 'g38', num: '38', name: 'ताश सॉलिटेयर (Card)', icon: '🃏' },
  { id: 'g39', num: '39', name: 'लकी चक्र (Casino Points)', icon: '🎡' },
  { id: 'g40', num: '40', name: 'रंगोली क्राफ्ट (Casual)', icon: '🎨' },
  { id: 'g41', num: '41', name: 'भारत क्विज़ (Educational)', icon: '🇮🇳' },
  { id: 'g42', num: '42', name: 'तबला व ढोलक ताल (Music)', icon: '🥁' },
  { id: 'g43', num: '43', name: 'दिमागी पहेलियाँ (Puzzle)', icon: '🧩' },
  { id: 'g44', num: '44', name: 'बैलगाड़ी रेस (Racing)', icon: '🏁' },
  { id: 'g45', num: '45', name: 'गाँव का प्रधान (Role Playing)', icon: '👑' },
  { id: 'g46', num: '46', name: 'खेत सिमुलेटर (Simulation)', icon: '🌾' },
  { id: 'g47', num: '47', name: 'गली क्रिकेट (Sports)', icon: '🏏' },
  { id: 'g48', num: '48', name: 'चाणक्य नीति (Strategy)', icon: '♟️' },
  { id: 'g49', num: '49', name: 'देसी ट्रिविया व तथ्य (Trivia)', icon: '💡' },
  { id: 'g50', num: '50', name: 'शब्द पहेली व कोश (Word)', icon: '📝' }
];

const C16_CHILDREN = [
  { id: '16-1', name: 'मिस्त्री व गृह मरम्मत', icon: '🔧', badge: 'जल्द उपलब्ध', state: 'upcoming' },
  { id: '16-2', name: 'किराया बहीखाता (Rental Ledger)', icon: '🏠', badge: 'खोलें ›', state: 'active', action: 'launch' },
  { id: '16-3', name: 'कमरा व फ्लैट लिस्टिंग', icon: '🏢', badge: 'जल्द उपलब्ध', state: 'upcoming' }
];


// ==============================================================================
// SECTION 2: DOM CARD RENDER ENGINE (2.5D ELEVATION & CONTRAST)
// ==============================================================================

function renderCatalogItems() {
  const t1 = document.getElementById('tier1-list');
  const t2 = document.getElementById('tier2-list');

  if (t1 && (!t1.dataset.rendered || t1.innerHTML.includes('कैटलॉग लोड'))) {
    t1.innerHTML = RM_SERVICES_DATA.map(item => `
      <div data-cat-id="${item.id}" class="rounded-xl bg-slate-900/90 border border-slate-800 transition-all overflow-hidden mb-2 shadow-md">
        <div onclick="handleCategoryClick('${item.id}', this)" class="flex items-center justify-between p-3 cursor-pointer hover:border-emerald-500/50 active:scale-[0.98] transition-transform">
          <div class="flex items-center space-x-2.5">
            <span class="text-[10px] font-mono font-bold bg-amber-950/60 text-amber-400 border border-amber-800/40 px-1.5 py-0.5 rounded">${item.num}.</span>
            <span class="text-lg">${item.icon}</span>
            <span class="text-xs font-bold text-slate-200">${item.name}</span>
          </div>
          <div class="flex items-center space-x-1.5">
            ${item.hasChildren ? '<span class="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">3 सेवाएं</span>' : ''}
            <span class="text-xs text-slate-400 font-bold">${item.hasChildren ? '▼' : 'खोलें ›'}</span>
          </div>
        </div>
        ${item.id === 'c16' ? `
          <div id="sub-c16" class="p-2 pt-0 space-y-1.5 border-t border-slate-800/60 bg-slate-950/60 block">
            ${C16_CHILDREN.map(ch => `
              <div onclick="handleLaunchCategory('c16', '${ch.id}')" class="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/60 cursor-pointer active:scale-[0.98] transition-transform">
                <div class="flex items-center space-x-2">
                  <span>${ch.icon}</span>
                  <span class="text-xs text-slate-300 font-medium">${ch.name}</span>
                </div>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded ${ch.action === 'launch' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-800 text-slate-400'}">${ch.badge}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `).join('');
    t1.dataset.rendered = 'true';
  }

  if (t2 && (!t2.dataset.rendered || t2.innerHTML.includes('गेम्स लोड'))) {
    t2.innerHTML = RM_GAMES_DATA.map(item => `
      <div data-cat-id="${item.id}" class="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 active:scale-[0.98] transition-transform cursor-pointer mb-2 shadow-md" onclick="alert('${item.name} गेम जल्द शुरू होगा')">
        <div class="flex items-center space-x-2.5">
          <span class="text-[10px] font-mono font-bold bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 px-1.5 py-0.5 rounded">${item.num}.</span>
          <span class="text-lg">${item.icon}</span>
          <span class="text-xs font-bold text-slate-200">${item.name}</span>
        </div>
        <span class="text-xs text-cyan-400 font-semibold px-2 py-1 bg-cyan-950/60 rounded-lg border border-cyan-800/40">खेलें ›</span>
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
    if (sub) {
      const isHidden = sub.style.display === 'none';
      sub.style.display = isHidden ? 'block' : 'none';
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
      openFullscreenModule('🏠 16-2. किराया बहीखाता (Rental Ledger)');
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
