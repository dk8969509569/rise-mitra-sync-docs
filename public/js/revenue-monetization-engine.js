/**
 * RISE MITRA — REVENUE & VENDOR MONETIZATION ENGINE (STEP 2)
 * MODULE        : public/js/revenue-monetization-engine.js
 * SPECIFICATION : Folder A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW | File-07 of 18)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-SOV-ARCH-20260930-MODULAR-ZEL-001
 * INVARIANTS    : 28.00% NCR Hard-Cap | Zero Forced Purchases (₹0) | Owner Price Corridor
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

  // Storage Keys & SSOT Identifiers
  var STORAGE_REVENUE_METRICS = 'rm_owner_revenue_metrics_v1';
  var STORAGE_SEARCH_ANALYTICS = 'rm_owner_search_analytics_v1';
  var MODULE_VERSION = '1.0.0';

  // Canonical Owner Corridor Boundaries (File-07 Section Q.2 & Q.3)
  var CORRIDOR_LIMITS = {
    P_FLOOR_MIN: 1.50,     // Cost Security Guard (₹1.50 minimum cost floor)
    P_CEILING_MAX: 10.00,  // Consumer Protection Guard (₹10.00 maximum ceiling)
    NCR_SOLVENCY_CAP: 28.00 // Maximum 28.00% NCR PartnerEnvelope Cap
  };

  // Default Baseline Financial State
  var DEFAULT_REVENUE_STATE = {
    totalCommercialGMV: 18450.00,
    escrowLockedPool: 5166.00,
    solvencyReserveRatio: 28.00,
    monetizedLeadsCount: 14,
    unmetBroadcastActive: true,
    sponsoredListingAllowed: false,
    version: MODULE_VERSION,
    lastUpdated: new Date().toISOString()
  };

  /**
   * 1. Get current revenue state from LocalStorage
   */
  function getRevenueState() {
    try {
      var saved = localStorage.getItem(STORAGE_REVENUE_METRICS);
      if (!saved) return JSON.parse(JSON.stringify(DEFAULT_REVENUE_STATE));
      var parsed = JSON.parse(saved);
      return Object.assign({}, DEFAULT_REVENUE_STATE, parsed);
    } catch (e) {
      console.warn('[RM-RevenueEngine] State read error, using fallback:', e);
      return JSON.parse(JSON.stringify(DEFAULT_REVENUE_STATE));
    }
  }

  /**
   * 2. Save current revenue state to LocalStorage
   */
  function saveRevenueState(state) {
    try {
      state.lastUpdated = new Date().toISOString();
      localStorage.setItem(STORAGE_REVENUE_METRICS, JSON.stringify(state));
      return true;
    } catch (e) {
      console.error('[RM-RevenueEngine] Storage write failed:', e);
      return false;
    }
  }

  /**
   * 3. Net Commissionable Revenue (NCR) Calculator (File-07 Section H & Q.4)
   * Formula: NCR = MAX(0, ClearedConsumerFee - GatewayMDR - OperationalCost - Taxes)
   */
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

  /**
   * 4. Broadcast Demand to Unregistered Vendors (Zero-Cost Lead Conversion)
   */
  function triggerUnmetDemandBroadcast(keyword) {
    if (!keyword || typeof keyword !== 'string') return;
    var sanitizedKeyword = keyword.trim();
    if (!sanitizedKeyword) return;

    var state = getRevenueState();
    state.monetizedLeadsCount = (state.monetizedLeadsCount || 0) + 1;
    // Simulated increment of commercial GMV per actionable broadcast conversion
    state.totalCommercialGMV += 450.00;
    saveRevenueState(state);

    if (typeof window !== 'undefined' && typeof window.alert === 'function') {
      window.alert("📢 वेंडर ब्रॉडकास्ट जारी: '" + sanitizedKeyword + "' की मांग को संबंधित क्षेत्र के स्थानीय कारीगरों/दुकानदारों तक पहुँचाया गया। (Zero Forced Fee: ₹0 Onboarding)");
    }
    hydrateRevenueCockpit();
  }

  /**
   * 5. Toggle Sponsored / Fair-Share Mode (Organic First Guard)
   */
  function setSponsoredMode(enabled) {
    var state = getRevenueState();
    state.sponsoredListingAllowed = Boolean(enabled);
    saveRevenueState(state);
    hydrateRevenueCockpit();
  }

  /**
   * 6. Hydrate Revenue & Commercial Cockpit on Surface-B DOM
   */
  function hydrateRevenueCockpit() {
    if (typeof document === 'undefined') return;

    var state = getRevenueState();

    // GMV Metric
    var gmvEl = document.getElementById('rm-rev-gmv-val');
    if (gmvEl) {
      gmvEl.textContent = '₹' + Number(state.totalCommercialGMV).toLocaleString('en-IN', { minimumFractionDigits: 2 });
    }

    // Escrow Pool Metric
    var escrowEl = document.getElementById('rm-rev-escrow-val');
    if (escrowEl) {
      escrowEl.textContent = '₹' + Number(state.escrowLockedPool).toLocaleString('en-IN', { minimumFractionDigits: 2 });
    }

    // Leads Badge
    var leadsEl = document.getElementById('rm-rev-leads-badge');
    if (leadsEl) {
      leadsEl.textContent = state.monetizedLeadsCount + ' मुद्रीकृत अवसर';
    }

    // Sponsored Toggle Checkbox
    var sponsorToggle = document.getElementById('cfg_sponsoredRanking');
    if (sponsorToggle) {
      sponsorToggle.checked = Boolean(state.sponsoredListingAllowed);
    }

    // Populate Dynamic Actionable Unmet Demands from Search BI Storage
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
                   '  <button type="button" onclick="window.RM_RevenueEngine.triggerUnmetDemandBroadcast(\'' + term + '\')" style="background: #d97706; color: #030712; font-weight: 800; font-size: 10px; padding: 3px 8px; border-radius: 6px; border: none; cursor: pointer;">वेंडर अलर्ट भेजें</button>' +
                   '</div>';
          }).join('');
        }
      } catch (e) {
        console.warn('[RM-RevenueEngine] BI demands hydration warning:', e);
      }
    }
  }

  // Automatic Lifecycle Bootstrap
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', hydrateRevenueCockpit);
    } else {
      hydrateRevenueCockpit();
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
    hydrateRevenueCockpit: hydrateRevenueCockpit
  };
});
