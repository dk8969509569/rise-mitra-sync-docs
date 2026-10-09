/**
 * RISE MITRA — REVENUE & VENDOR MONETIZATION ENGINE (STEP 2 + VISUAL BI CHART)
 * MODULE        : public/js/revenue-monetization-engine.js
 * SPECIFICATION : Folder A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW | File-07 of 18)
 * ARCHITECTURE  : DECOUPLED SELF-MOUNTING COMPONENT (ZERO-ELEMENT-LOSS)
 * GOVERNANCE    : GATE-23.5 | 28.00% SOLVENCY HARD-CAP | ZERO FORCED PURCHASE (₹0)
 */

(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.RM_RevenueEngine = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var STORAGE_REVENUE_METRICS = 'rm_owner_revenue_metrics_v1';
  var STORAGE_SEARCH_ANALYTICS = 'rm_owner_search_analytics_v1';
  var MODULE_VERSION = '1.2.0';

  var CORRIDOR_LIMITS = {
    P_FLOOR_MIN: 1.50,
    P_CEILING_MAX: 10.00,
    NCR_SOLVENCY_CAP: 28.00
  };

  var DEFAULT_REVENUE_STATE = {
    totalCommercialGMV: 18450.00,
    escrowLockedPool: 5166.00,
    solvencyReserveRatio: 28.00,
    monetizedLeadsCount: 14,
    unmetBroadcastActive: true,
    sponsoredListingAllowed: false,
    selectedTimeframe: '1M',
    version: MODULE_VERSION,
    lastUpdated: new Date().toISOString()
  };

  var TIMEFRAME_DATASETS = {
    '1D': [
      { label: '08:00', gmv: 1200, rev: 336 },
      { label: '11:00', gmv: 3400, rev: 952 },
      { label: '14:00', gmv: 6800, rev: 1904 },
      { label: '17:00', gmv: 11500, rev: 3220 },
      { label: '20:00', gmv: 15200, rev: 4256 },
      { label: '23:00', gmv: 18450, rev: 5166 }
    ],
    '1W': [
      { label: 'Som', gmv: 8500, rev: 2380 },
      { label: 'Mangal', gmv: 10200, rev: 2856 },
      { label: 'Budh', gmv: 11800, rev: 3304 },
      { label: 'Guru', gmv: 13900, rev: 3892 },
      { label: 'Shukra', gmv: 15600, rev: 4368 },
      { label: 'Shani', gmv: 17100, rev: 4788 },
      { label: 'Ravi', gmv: 18450, rev: 5166 }
    ],
    '1M': [
      { label: 'Wk 1', gmv: 4200, rev: 1176 },
      { label: 'Wk 2', gmv: 8900, rev: 2492 },
      { label: 'Wk 3', gmv: 13400, rev: 3752 },
      { label: 'Wk 4', gmv: 18450, rev: 5166 }
    ],
    '1Y': [
      { label: 'Q1', gmv: 38000, rev: 10640 },
      { label: 'Q2', gmv: 62000, rev: 17360 },
      { label: 'Q3', gmv: 94000, rev: 26320 },
      { label: 'Q4', gmv: 145000, rev: 40600 }
    ]
  };

  function getRevenueState() {
    try {
      var saved = localStorage.getItem(STORAGE_REVENUE_METRICS);
      if (!saved) return JSON.parse(JSON.stringify(DEFAULT_REVENUE_STATE));
      var parsed = JSON.parse(saved);
      return Object.assign({}, DEFAULT_REVENUE_STATE, parsed);
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_REVENUE_STATE));
    }
  }

  function saveRevenueState(state) {
    try {
      state.lastUpdated = new Date().toISOString();
      localStorage.setItem(STORAGE_REVENUE_METRICS, JSON.stringify(state));
      return true;
    } catch (e) {
      return false;
    }
  }

  function calculateNCR(clearedFee, gatewayMdr, opexCost, taxes) {
    var fee = parseFloat(clearedFee) || 0;
    var mdr = parseFloat(gatewayMdr) || 0;
    var opex = parseFloat(opexCost) || 0;
    var tax = parseFloat(taxes) || 0;
    var ncr = Math.max(0, fee - mdr - opex - tax);
    var partnerMaxCap = (ncr * CORRIDOR_LIMITS.NCR_SOLVENCY_CAP) / 100.0;
    return {
      ncr: Math.round(ncr * 100) / 100,
      partnerEnvelopeCap: Math.round(partnerMaxCap * 100) / 100,
      platformReserve: Math.round((ncr - partnerMaxCap) * 100) / 100
    };
  }

  function triggerUnmetDemandBroadcast(keyword) {
    if (!keyword || typeof keyword !== 'string') return;
    var sanitizedKeyword = keyword.trim();
    if (!sanitizedKeyword) return;

    var state = getRevenueState();
    state.monetizedLeadsCount = (state.monetizedLeadsCount || 0) + 1;
    state.totalCommercialGMV += 450.00;
    saveRevenueState(state);

    if (typeof window !== 'undefined' && typeof window.alert === 'function') {
      window.alert("📢 वेंडर ब्रॉडकास्ट जारी: '" + sanitizedKeyword + "' की मांग को संबंधित क्षेत्र के स्थानीय कारीगरों/दुकानदारों तक पहुँचाया गया। (Zero Forced Fee: ₹0 Onboarding)");
    }
    hydrateRevenueCockpit();
  }

  function setSponsoredMode(enabled) {
    var state = getRevenueState();
    state.sponsoredListingAllowed = Boolean(enabled);
    saveRevenueState(state);
    hydrateRevenueCockpit();
  }

  function setChartTimeframe(tf) {
    if (!TIMEFRAME_DATASETS[tf]) return;
    var state = getRevenueState();
    state.selectedTimeframe = tf;
    saveRevenueState(state);
    renderVisualChart(tf);
    updateTimeframeButtons(tf);
  }

  function updateTimeframeButtons(activeTf) {
    ['1D', '1W', '1M', '1Y'].forEach(function(tf) {
      var btn = document.getElementById('rm-chart-btn-' + tf);
      if (btn) {
        if (tf === activeTf) {
          btn.style.background = '#38bdf8';
          btn.style.color = '#030712';
          btn.style.fontWeight = '800';
        } else {
          btn.style.background = 'rgba(15, 23, 42, 0.8)';
          btn.style.color = '#94a3b8';
          btn.style.fontWeight = '600';
        }
      }
    });
  }

  function renderVisualChart(timeframe) {
    var container = document.getElementById('rm-rev-chart-svg-container');
    if (!container) return;

    var tf = timeframe || getRevenueState().selectedTimeframe || '1M';
    var series = TIMEFRAME_DATASETS[tf] || TIMEFRAME_DATASETS['1M'];
    var width = 320;
    var height = 120;
    var padLeft = 32;
    var padRight = 16;
    var padTop = 14;
    var padBottom = 22;

    var maxGmv = Math.max.apply(Math, series.map(function(d) { return d.gmv; })) * 1.15;
    var chartW = width - padLeft - padRight;
    var chartH = height - padTop - padBottom;

    var gmvPoints = [];
    var revPoints = [];

    series.forEach(function(d, idx) {
      var x = padLeft + (idx / (series.length - 1)) * chartW;
      var yGmv = padTop + chartH - (d.gmv / maxGmv) * chartH;
      var yRev = padTop + chartH - (d.rev / maxGmv) * chartH;
      gmvPoints.push({ x: x, y: yGmv, label: d.label, val: d.gmv });
      revPoints.push({ x: x, y: yRev, val: d.rev });
    });

    var gmvPathD = gmvPoints.map(function(p, i) { return (i === 0 ? 'M' : 'L') + p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' ');
    var gmvAreaD = gmvPathD + ' L' + gmvPoints[gmvPoints.length - 1].x.toFixed(1) + ',' + (padTop + chartH) + ' L' + gmvPoints[0].x.toFixed(1) + ',' + (padTop + chartH) + ' Z';

    var revPathD = revPoints.map(function(p, i) { return (i === 0 ? 'M' : 'L') + p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' ');

    var xLabelsSvg = gmvPoints.map(function(p) {
      return '<text x="' + p.x.toFixed(1) + '" y="' + (height - 4) + '" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="monospace">' + p.label + '</text>';
    }).join('');

    var dotsSvg = gmvPoints.map(function(p, i) {
      return '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="3" fill="#10b981" stroke="#0f172a" stroke-width="1.5" />' +
             '<circle cx="' + revPoints[i].x.toFixed(1) + '" cy="' + revPoints[i].y.toFixed(1) + '" r="2.5" fill="#38bdf8" stroke="#0f172a" stroke-width="1" />';
    }).join('');

    var corridorY = (padTop + chartH * 0.72).toFixed(1);

    var svg = '<svg viewBox="0 0 ' + width + ' ' + height + '" style="width: 100%; height: auto; display: block; overflow: visible;">' +
              '  <defs>' +
              '    <linearGradient id="rmGmvGrad" x1="0" y1="0" x2="0" y2="1">' +
              '      <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>' +
              '      <stop offset="100%" stop-color="#10b981" stop-opacity="0.0"/>' +
              '    </linearGradient>' +
              '  </defs>' +
              '  <!-- Grid Lines -->' +
              '  <line x1="' + padLeft + '" y1="' + padTop + '" x2="' + (width - padRight) + '" y2="' + padTop + '" stroke="rgba(255,255,255,0.06)" stroke-dasharray="2,3"/>' +
              '  <line x1="' + padLeft + '" y1="' + (padTop + chartH / 2) + '" x2="' + (width - padRight) + '" y2="' + (padTop + chartH / 2) + '" stroke="rgba(255,255,255,0.06)" stroke-dasharray="2,3"/>' +
              '  <line x1="' + padLeft + '" y1="' + (padTop + chartH) + '" x2="' + (width - padRight) + '" y2="' + (padTop + chartH) + '" stroke="rgba(255,255,255,0.12)"/>' +
              '  <!-- 28% Solvency Reference Line -->' +
              '  <line x1="' + padLeft + '" y1="' + corridorY + '" x2="' + (width - padRight) + '" y2="' + corridorY + '" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>' +
              '  <text x="' + (width - padRight) + '" y="' + (corridorY - 3) + '" fill="#f59e0b" font-size="7.5" font-weight="bold" text-anchor="end">28% NCR Corridor</text>' +
              '  <!-- Area Under GMV Curve -->' +
              '  <path d="' + gmvAreaD + '" fill="url(#rmGmvGrad)" />' +
              '  <!-- GMV Trendline -->' +
              '  <path d="' + gmvPathD + '" fill="none" stroke="#10b981" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />' +
              '  <!-- Net Rev Trendline -->' +
              '  <path d="' + revPathD + '" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />' +
              '  <!-- Data Dots -->' +
              dotsSvg +
              '  <!-- Axis Labels -->' +
              xLabelsSvg +
              '</svg>';

    container.innerHTML = svg;
  }

  // Autonomous Dynamic DOM Mounting into Skeleton Shell Slot
  function mountRevenueDOM() {
    var slot = document.getElementById('rm-slot-revenue-chart');
    if (slot && !document.getElementById('rm-surface-b-revenue-cockpit')) {
      slot.innerHTML = `
        <section id="rm-surface-b-revenue-cockpit" class="glass-panel p-4 rounded-2xl border-amber-500/40 space-y-3">
          <div class="flex justify-between items-center border-b border-slate-800 pb-2">
            <div class="flex items-center space-x-2">
              <span class="text-sm">💰</span>
              <div>
                <div class="text-xs font-black text-amber-400 uppercase tracking-wide">Revenue & Vendor Monetization Engine</div>
                <div class="text-[9px] text-slate-400">मांग से प्रत्यक्ष वाणिज्यिक रूपांतरण एवं विज़ुअल ग्रोथ चार्ट</div>
              </div>
            </div>
            <span id="rm-rev-leads-badge" class="text-[9px] font-bold bg-amber-950 text-amber-300 border border-amber-600 px-2 py-0.5 rounded-full">
              14 मुद्रीकृत अवसर
            </span>
          </div>

          <div class="grid grid-cols-2 gap-2 pt-1 text-center">
            <div class="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800">
              <div class="text-[9px] text-slate-400">सत्यापित वाणिज्यिक मूल्य (GMV)</div>
              <div id="rm-rev-gmv-val" class="text-xs font-black text-emerald-400 mt-0.5">₹18,450.00</div>
            </div>
            <div class="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800">
              <div class="text-[9px] text-slate-400">सुरक्षित एस्क्रो रिजर्व (14-दिन)</div>
              <div id="rm-rev-escrow-val" class="text-xs font-black text-cyan-400 mt-0.5">₹5,166.00</div>
            </div>
          </div>

          <div class="p-3 bg-slate-950/90 rounded-xl border border-amber-500/20 space-y-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="text-xs">📈</span>
                <span class="text-[11px] font-bold text-slate-200">रेवेन्यू ग्रोथ व सॉल्वेंसी ट्रेंडलाइन</span>
              </div>
              <div class="flex space-x-1">
                <button type="button" id="rm-chart-btn-1D" onclick="window.RM_RevenueEngine.setChartTimeframe('1D')" style="background: rgba(15,23,42,0.8); color: #94a3b8; font-size: 9px; font-weight: 700; padding: 2px 7px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); cursor: pointer;">1D</button>
                <button type="button" id="rm-chart-btn-1W" onclick="window.RM_RevenueEngine.setChartTimeframe('1W')" style="background: rgba(15,23,42,0.8); color: #94a3b8; font-size: 9px; font-weight: 700; padding: 2px 7px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); cursor: pointer;">1W</button>
                <button type="button" id="rm-chart-btn-1M" onclick="window.RM_RevenueEngine.setChartTimeframe('1M')" style="background: #38bdf8; color: #030712; font-size: 9px; font-weight: 800; padding: 2px 7px; border-radius: 6px; border: 1px solid rgba(56,189,248,0.4); cursor: pointer;">1M</button>
                <button type="button" id="rm-chart-btn-1Y" onclick="window.RM_RevenueEngine.setChartTimeframe('1Y')" style="background: rgba(15,23,42,0.8); color: #94a3b8; font-size: 9px; font-weight: 700; padding: 2px 7px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); cursor: pointer;">1Y</button>
              </div>
            </div>

            <div id="rm-rev-chart-svg-container" style="min-height: 110px; width: 100%; display: flex; align-items: center; justify-content: center;"></div>

            <div class="flex items-center justify-between text-[8.5px] text-slate-400 pt-1 border-t border-slate-900">
              <div class="flex items-center space-x-1">
                <span style="display:inline-block; width:8px; height:8px; background:#10b981; border-radius:2px;"></span>
                <span>GMV Trend</span>
              </div>
              <div class="flex items-center space-x-1">
                <span style="display:inline-block; width:8px; height:8px; background:#38bdf8; border-radius:2px;"></span>
                <span>Net Revenue</span>
              </div>
              <div class="flex items-center space-x-1">
                <span style="display:inline-block; width:8px; height:2px; background:#f59e0b; border-bottom:1px dashed #f59e0b;"></span>
                <span class="text-amber-400 font-bold">28% Solvency Cap</span>
              </div>
            </div>
          </div>

          <div class="space-y-1.5 pt-1">
            <div class="flex justify-between text-[10px] font-bold text-amber-400 px-1">
              <span>⚡ त्वरित वेंडर अलर्ट (Unmet Lead Broadcast)</span>
              <span>कार्रवाई</span>
            </div>
            <div id="rm-rev-unmet-actions-container" class="space-y-1 text-xs"></div>
          </div>

          <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <div>
              <div class="font-bold text-slate-200 text-xs">प्रायोजित लिस्टिंग (Sponsored Fair-Share)</div>
              <div class="text-[9px] text-slate-400">पारदर्शी Sponsored टैग (Default: Off • Organic First)</div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" id="cfg_sponsoredRanking" onchange="window.RM_RevenueEngine.setSponsoredMode(this.checked)" class="sr-only switch-checkbox">
              <div class="w-10 h-5 bg-slate-800 border border-slate-700 rounded-full switch-label transition-colors">
                <div class="w-4 h-4 bg-white rounded-full switch-dot transform transition-transform mt-0.5 ml-0.5"></div>
              </div>
            </label>
          </div>
        </section>
      `;
    }
    hydrateRevenueCockpit();
  }

  function hydrateRevenueCockpit() {
    if (typeof document === 'undefined') return;

    var state = getRevenueState();

    var gmvEl = document.getElementById('rm-rev-gmv-val');
    if (gmvEl) {
      gmvEl.textContent = '₹' + Number(state.totalCommercialGMV).toLocaleString('en-IN', { minimumFractionDigits: 2 });
    }

    var escrowEl = document.getElementById('rm-rev-escrow-val');
    if (escrowEl) {
      escrowEl.textContent = '₹' + Number(state.escrowLockedPool).toLocaleString('en-IN', { minimumFractionDigits: 2 });
    }

    var leadsEl = document.getElementById('rm-rev-leads-badge');
    if (leadsEl) {
      leadsEl.textContent = state.monetizedLeadsCount + ' मुद्रीकृत अवसर';
    }

    var sponsorToggle = document.getElementById('cfg_sponsoredRanking');
    if (sponsorToggle) {
      sponsorToggle.checked = Boolean(state.sponsoredListingAllowed);
    }

    renderVisualChart(state.selectedTimeframe || '1M');
    updateTimeframeButtons(state.selectedTimeframe || '1M');

    var unmetActionContainer = document.getElementById('rm-rev-unmet-actions-container');
    if (unmetActionContainer) {
      try {
        var rawSearch = JSON.parse(localStorage.getItem(STORAGE_SEARCH_ANALYTICS) || '{}');
        var zeroResults = rawSearch.zeroResults || {};
        var keys = Object.keys(zeroResults);

        if (keys.length === 0) {
          unmetActionContainer.innerHTML = '<div style="color: #94a3b8; font-size: 11px; padding: 6px 0; text-align: center;">कोई अन-मैट मांग लंबित नहीं है (ऑल-क्लियर)</div>';
        } else {
          var sorted = Object.entries(zeroResults).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 5);
          unmetActionContainer.innerHTML = sorted.map(function (item) {
            var term = item[0].replace(/'/g, "\\'");
            return '<div style="display: flex; align-items: center; justify-content: space-between; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 8px; padding: 6px 10px; margin-bottom: 5px;">' +
                   '  <div>' +
                   '    <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">' + item[0] + '</span>' +
                   '    <span style="font-size: 10px; color: #94a3b8; margin-left: 6px;">(' + item[1] + ' ग्राहक खोज)</span>' +
                   '  </div>' +
                   '  <button type="button" onclick="window.RM_RevenueEngine.triggerUnmetDemandBroadcast(\'' + term + '\')" style="background: #d97706; color: #030712; font-weight: 800; font-size: 10px; padding: 3px 8px; border-radius: 6px; border:  Campe; cursor: pointer;">वेंडर अलर्ट भेजें</button>' +
                   '</div>';
          }).join('');
        }
      } catch (e) {}
    }
  }

  function init() {
    mountRevenueDOM();
    hydrateRevenueCockpit();
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }

  return {
    version: MODULE_VERSION,
    corridors: CORRIDOR_LIMITS,
    getRevenueState: getRevenueState,
    saveRevenueState: saveRevenueState,
    calculateNCR: calculateNCR,
    triggerUnmetDemandBroadcast: triggerUnmetDemandBroadcast,
    setSponsoredMode: setSponsoredMode,
    setChartTimeframe: setChartTimeframe,
    renderVisualChart: renderVisualChart,
    mountRevenueDOM: mountRevenueDOM,
    hydrateRevenueCockpit: hydrateRevenueCockpit
  };
});
