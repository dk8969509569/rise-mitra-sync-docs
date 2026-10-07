/**
 * RISE MITRA — 12 CORE CASHFLOW VERTICALS GRID ENGINE
 * SPECIFICATION : FOLDER A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/home-grid-engine.js
 * GOVERNANCE    : GATE-23.5 | 3x4 BILINGUAL PLAY STORE TAXONOMY | 100% ZEL
 */

(function (window, document) {
  'use strict';

  // 12 Play Store Standard Bilingual Core Verticals Registry
  var CORE_12_VERTICALS = [
    {
      num: '16',
      catId: 'c16',
      subId: '16-2',
      icon: '🏠',
      enName: 'House & Home',
      hiName: 'घर व मकान',
      badge: 'खोलें ›',
      btnClass: 'text-emerald-400 bg-emerald-950/80 border-emerald-700/50',
      borderClass: 'border-emerald-500/40',
      action: 'launch'
    },
    {
      num: '02',
      catId: 'c02',
      subId: null,
      icon: '🚗',
      enName: 'Auto & Vehicles',
      hiName: 'वाहन व गैराज',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '03',
      catId: 'c03',
      subId: null,
      icon: '✂️',
      enName: 'Beauty & Salon',
      hiName: 'ब्यूटी व सैलून',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '14',
      catId: 'c14',
      subId: null,
      icon: '🍲',
      enName: 'Food & Drink',
      hiName: 'ढाबा व भोजन',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '20',
      catId: 'c20',
      subId: null,
      icon: '💊',
      enName: 'Medical & Clinic',
      hiName: 'दवाई व क्लिनिक',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '27',
      catId: 'c27',
      subId: null,
      icon: '🛒',
      enName: 'Shopping & Retail',
      hiName: 'किराना व खुदरा',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '05',
      catId: 'c05',
      subId: '05-1',
      icon: '💼',
      enName: 'Business & Khata',
      hiName: 'बहीखाता व सराफा',
      badge: 'खोलें ›',
      btnClass: 'text-cyan-300 bg-cyan-950/80 border-cyan-700/50',
      borderClass: 'border-cyan-500/40',
      action: 'launch'
    },
    {
      num: '13',
      catId: 'c13',
      subId: null,
      icon: '💰',
      enName: 'Finance & Vault',
      hiName: 'नकद व गिरवी',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '09',
      catId: 'c09',
      subId: null,
      icon: '🔨',
      enName: 'Education & Skills',
      hiName: 'हुनर व कारीगर',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '31',
      catId: 'c31',
      subId: null,
      icon: '🚖',
      enName: 'Travel & Local',
      hiName: 'यात्रा व स्थानीय सेवा',
      badge: '3 सेवाएं ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '30',
      catId: 'c30',
      subId: null,
      icon: '📐',
      enName: 'Tools & Utilities',
      hiName: 'ज़मीन नाप व टूल्स',
      badge: '3 टूल्स ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    },
    {
      num: '11',
      catId: 'c11',
      subId: null,
      icon: '🎟️',
      enName: 'Events & Passes',
      hiName: 'कार्यक्रम व पास',
      badge: '3 पासेस ›',
      btnClass: 'text-slate-300 bg-slate-800/80 border-slate-700',
      borderClass: 'border-slate-700/60',
      action: 'drawer'
    }
  ];

  // Tile Dispatcher: Fast-paths direct launches or focuses catalog drawer
  window.handleQuickTileClick = function (catId, subId) {
    if (catId === 'c16') {
      if (typeof window.handleLaunchCategory === 'function') {
        window.handleLaunchCategory('c16', subId || '16-2');
      }
      return;
    }
    if (catId === 'c05') {
      if (typeof window.handleLaunchCategory === 'function') {
        window.handleLaunchCategory('c05', subId || '05-1');
      }
      return;
    }

    if (typeof window.toggleMenuDrawer === 'function') {
      window.toggleMenuDrawer(true);
    }

    setTimeout(function () {
      var el = document.querySelector('[data-cat-id="' + catId + '"]');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        var sub = document.getElementById('sub-' + catId);
        if (sub && (sub.style.display === 'none' || sub.classList.contains('hidden'))) {
          if (typeof window.handleCategoryClick === 'function') {
            window.handleCategoryClick(catId, el);
          }
        }
      }
    }, 180);
  };

  // Render the 3x4 grid into #verticalTilesGrid
  function renderHomeGrid() {
    var grid = document.getElementById('verticalTilesGrid');
    if (!grid) return;

    grid.className = 'grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3 w-full';
    grid.innerHTML = CORE_12_VERTICALS.map(function (item) {
      var clickArg = item.subId ? "'" + item.catId + "', '" + item.subId + "'" : "'" + item.catId + "'";
      return [
        '<div onclick="handleQuickTileClick(' + clickArg + ')" class="cursor-pointer bg-gradient-to-b from-[#111a30] to-[#0d1424] hover:from-[#172342] hover:to-[#111a30] border ' + item.borderClass + ' rounded-xl p-2.5 flex flex-col items-center justify-between text-center transition-transform active:scale-95 shadow-md relative min-h-[102px]">',
        '  <span class="absolute top-1.5 left-2 text-[9px] font-mono font-bold text-amber-400 bg-amber-950/80 px-1 rounded">' + item.num + '</span>',
        '  <span class="text-2xl mt-1">' + item.icon + '</span>',
        '  <div class="mt-1 leading-tight w-full">',
        '    <div class="text-[11.5px] font-bold text-slate-100 tracking-tight leading-tight">' + item.enName + '</div>',
        '    <div class="text-[9.5px] font-medium text-slate-400 leading-tight mt-0.5">(' + item.hiName + ')</div>',
        '  </div>',
        '  <span class="mt-1 text-[9px] font-bold ' + item.btnClass + ' border px-2 py-0.5 rounded-full w-full">' + item.badge + '</span>',
        '</div>'
      ].join('\n');
    }).join('');
  }

  // Live Search Filter for Bilingual Grid
  window.filterQuickTiles = function () {
    var input = document.getElementById('liveSearchInput');
    var q = (input && input.value ? input.value : '').toLowerCase().trim();
    var grid = document.getElementById('verticalTilesGrid');
    if (!grid) return;
    Array.from(grid.children).forEach(function (card) {
      var txt = card.innerText.toLowerCase();
      card.style.display = txt.includes(q) ? 'flex' : 'none';
    });
  };

  window.RM_HomeGrid = {
    render: renderHomeGrid,
    data: CORE_12_VERTICALS
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHomeGrid);
  } else {
    renderHomeGrid();
  }

})(typeof window !== 'undefined' ? window : this, typeof document !== 'undefined' ? document : null);
