/**
 * RISE MITRA — CATEGORY-16 MICRO-APP ENGINE
 * SUB-FEATURE   : 16-3 (Public Rental Search, Discovery & Auto-Publish Intake)
 * SPECIFICATION : 14_04__EXT_004_MODULAR_ARCHITECTURE_MOBILE_SAFETY_RECOVERY_SPEC
 * GOVERNANCE    : GATE-16.7 | DEC-RM-SOV-ARCH-20260930-MODULAR-ZEL-001
 * REPO TARGET   : public/js/catalog/category-16/16-3-rental-search.js
 */


// ==============================================================================
// SECTION 1: SPECIFICATION METADATA, SCHEMAS & STORAGE IDENTIFIERS
// ==============================================================================

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    var lib = factory();
    root.RM_Cat16_Sub3_RentalSearch = lib;
    root.RiseMitraCatalog_16_3 = lib;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SUB_FEATURE_ID = '16-3';
  var CATEGORY_ID = 'category-16';
  var FEATURE_SLUG = 'rental-search';
  var SCHEMA_VERSION = '1';
  var MODULE_VERSION = '1.0.0';

  var DEFAULT_SEARCH_CONFIG = {
    defaultCity: 'इंदौर',
    maxBudgetLimit: 50000,
    currencySymbol: '₹',
    defaultRadiusKm: 10
  };

  function getStorageKey(accountId) {
    var acct = (accountId && typeof accountId === 'string') ? accountId.replace(/[^a-zA-Z0-9_-]/g, '') : 'default';
    return 'rm_local_acct' + acct + '_cat16_sub3_v' + SCHEMA_VERSION;
  }


// ==============================================================================
// SECTION 2: MATHEMATICAL CALCULATORS & CANONICAL FINANCIAL FORMULAS
// ==============================================================================

  function filterListings(listings, filters) {
    if (!Array.isArray(listings)) return [];
    filters = filters || {};
    var maxRent = parseFloat(filters.maxRent) || Infinity;
    var unitType = filters.unitType || 'ALL';
    var locality = (filters.locality || '').trim().toLowerCase();
    var requireSubMeter = Boolean(filters.requireSubMeter);

    return listings.filter(function (item) {
      if (item.status !== 'AVAILABLE') return false;
      if (parseFloat(item.monthlyRent) > maxRent) return false;
      if (unitType !== 'ALL' && item.unitType !== unitType) return false;
      if (locality && item.addressPublic && item.addressPublic.locality) {
        if (item.addressPublic.locality.toLowerCase().indexOf(locality) === -1) return false;
      }
      if (requireSubMeter && (!item.electricityBilling || item.electricityBilling.meterType !== 'sub_meter_per_unit')) {
        return false;
      }
      return true;
    });
  }

  function calculateEstimatedMoveInCost(monthlyRent, securityDeposit, otherCharges) {
    var rent = parseFloat(monthlyRent) || 0;
    var deposit = parseFloat(securityDeposit) || 0;
    var other = parseFloat(otherCharges) || 0;
    var total = Math.round((rent + deposit + other) * 100) / 100;
    return {
      monthlyRent: rent,
      securityDeposit: deposit,
      otherCharges: other,
      totalMoveInRequired: total
    };
  }

  function sortListings(listings, sortBy) {
    if (!Array.isArray(listings)) return [];
    var list = listings.slice();
    if (sortBy === 'RENT_ASC') {
      list.sort(function (a, b) { return a.monthlyRent - b.monthlyRent; });
    } else if (sortBy === 'RENT_DESC') {
      list.sort(function (a, b) { return b.monthlyRent - a.monthlyRent; });
    }
    return list;
  }


// ==============================================================================
// SECTION 3: OFFLINE-FIRST PERSISTENCE & SOVEREIGN VOUCHER CREATION
// ==============================================================================

  function loadSearchData(accountId, fallbackData) {
    try {
      var raw = localStorage.getItem(getStorageKey(accountId));
      if (!raw) return fallbackData || null;
      var parsed = JSON.parse(raw);
      return parsed;
    } catch (err) {
      console.warn('[RM-16-3] Local storage load failed, using fallback:', err);
      return fallbackData || null;
    }
  }

  function saveSearchData(accountId, data) {
    try {
      localStorage.setItem(getStorageKey(accountId), JSON.stringify(data));
      return true;
    } catch (err) {
      console.error('[RM-16-3] Storage write failed:', err);
      return false;
    }
  }

  function ingestUnitFromLedger(property, unit, landlordProfile) {
    if (!property || !unit) return null;
    var lifecycle = unit.lifecycleStatus || {};
    if (!lifecycle.physicalPossessionReturned || !lifecycle.readyToRent) {
      return null;
    }

    var pub = unit.publicationSettings || {};
    if (pub.mode === 'private_only' || !pub.consentActive) {
      return null;
    }

    return {
      listingId: 'LST-' + (property.propertyId || 'PROP') + '-' + (unit.unitId || 'UNIT'),
      sourceSubFeature: '16-2',
      propertyId: property.propertyId,
      unitId: unit.unitId,
      title: (unit.unitLabel || 'कमरा') + ' - ' + (property.title || 'आवास'),
      unitType: unit.unitType || 'entire_flat',
      monthlyRent: parseFloat(unit.monthlyRent) || 0,
      securityDeposit: parseFloat(unit.securityDeposit) || 0,
      addressPublic: {
        city: property.address ? property.address.city : 'इंदौर',
        locality: property.address ? property.address.locality : 'विजयनगर',
        pincode: property.address ? property.address.pincode : '452010'
      },
      electricityBilling: {
        meterType: unit.electricityConfig ? unit.electricityConfig.meterType : 'sub_meter_per_unit',
        ratePerUnit: unit.electricityConfig ? unit.electricityConfig.ratePerUnit : 8.0
      },
      publicationMode: pub.mode || 'auto_publish',
      lifecycleVerification: {
        physicalPossessionConfirmed: true,
        readyToRentConfirmed: true,
        availableFromDate: lifecycle.futureAvailableDate || new Date().toISOString().slice(0, 10)
      },
      landlordContactMasked: {
        name: landlordProfile ? landlordProfile.name : 'मकान मालिक',
        maskedPhone: landlordProfile ? landlordProfile.maskedPhone : '+91 XXXXX00000',
        verifiedBadge: true
      },
      status: 'AVAILABLE',
      lastSyncedAt: new Date().toISOString()
    };
  }


// ==============================================================================
// SECTION 4: FLUID DOM VIEWPORT & TACTILE EVENT HANDLERS
// ==============================================================================

  function renderView(container, options) {
    if (!container) return;
    options = options || {};
    var accountId = options.accountId || 'default';
    var state = options.state || {
      publicListings: [],
      searchDefaults: DEFAULT_SEARCH_CONFIG,
      i18n: { hi: { featureTitle: 'किराया खोज व आवास डायरेक्टरी', actions: {}, labels: {} } }
    };

    var listings = state.publicListings || [];
    var i18n = (state.i18n && state.i18n.hi) ? state.i18n.hi : {};
    var labels = i18n.labels || {};
    var actions = i18n.actions || {};

    var html = '' +
      '<div style="box-sizing:border-box; width:100%; max-width:100%; margin:0 auto; padding:6px 2px; font-family:system-ui,-apple-system,sans-serif; color:#f8fafc; overflow-x:hidden;">' +

      // Header Card
      '  <div style="background:#0f172a; border:1px solid #1e293b; border-radius:14px; padding:12px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; box-sizing:border-box; width:100%;">' +
      '    <div style="min-width:0; flex:1;">' +
      '      <h2 style="margin:0; font-size:1.05rem; font-weight:800; color:#ffffff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">🔍 16-3. ' + (i18n.featureTitle || 'किराया खोज') + '</h2>' +
      '      <span style="font-size:0.72rem; color:#38bdf8; font-weight:600; display:block;">सत्यापित आवास व पारदर्शी सब-मीटर विवरण</span>' +
      '    </div>' +
      '    <span style="background:#0284c720; color:#38bdf8; border:1px solid #0284c7; font-size:0.68rem; padding:3px 8px; border-radius:999px; font-weight:700; white-space:nowrap; margin-left:8px;">पब्लिक कैटलॉग</span>' +
      '  </div>' +

      // Filter Controls Card
      '  <div style="background:#0f172a; border:1px solid #1e293b; border-radius:14px; padding:12px; margin-bottom:12px; box-sizing:border-box; width:100%;">' +
      '    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:8px;">' +
      '      <div>' +
      '        <label style="display:block; font-size:0.70rem; color:#94a3b8; margin-bottom:4px;">इलाका (Locality)</label>' +
      '        <input type="text" id="rm-search-locality" placeholder="उदा. विजयनगर" style="width:100%; box-sizing:border-box; padding:8px; background:#030712; border:1px solid #334155; border-radius:6px; color:#ffffff; font-size:0.82rem; outline:none;" />' +
      '      </div>' +
      '      <div>' +
      '        <label style="display:block; font-size:0.70rem; color:#94a3b8; margin-bottom:4px;">अधिकतम किराया (₹)</label>' +
      '        <input type="number" id="rm-search-budget" placeholder="₹ 15000" style="width:100%; box-sizing:border-box; padding:8px; background:#030712; border:1px solid #334155; border-radius:6px; color:#ffffff; font-size:0.82rem; outline:none;" />' +
      '      </div>' +
      '    </div>' +
      '    <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.72rem; color:#cbd5e1;">' +
      '      <label style="display:flex; align-items:center; gap:4px; cursor:pointer;">' +
      '        <input type="checkbox" id="rm-search-submeter" checked /> केवल सब-मीटर वाले आवास' +
      '      </label>' +
      '      <button id="rm-search-btn-apply" style="padding:6px 12px; background:#0284c7; color:#ffffff; border:none; border-radius:6px; font-weight:700; font-size:0.75rem; cursor:pointer;">फ़िल्टर लागू करें</button>' +
      '    </div>' +
      '  </div>' +

      // Results Section
      '  <div style="box-sizing:border-box; width:100%;">' +
      '    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding:0 2px;">' +
      '      <h3 style="margin:0; font-size:0.85rem; font-weight:700; color:#94a3b8; text-transform:uppercase;">उपलब्ध आवास सूची (<span id="rm-search-count">' + listings.length + '</span>)</h3>' +
      '      <span style="font-size:0.7rem; color:#22c55e;">16-2 ऑटो-सिंक सक्रिय</span>' +
      '    </div>' +
      '    <div id="rm-search-results-list" style="display:flex; flex-direction:column; gap:10px; width:100%; box-sizing:border-box;">';

    function buildCardsHtml(items) {
      if (!items || items.length === 0) {
        return '<div style="background:#0f172a; border:1px dashed #334155; border-radius:10px; padding:16px; text-align:center; color:#64748b; font-size:0.8rem;">कोई आवास इस खोज मापदंड से मेल नहीं खाता।</div>';
      }
      var out = '';
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        var meter = it.electricityBilling || {};
        var addr = it.addressPublic || {};
        var owner = it.landlordContactMasked || {};

        out += '' +
          '<div style="background:#0f172a; border:1px solid #1e293b; border-radius:12px; padding:12px; box-sizing:border-box; width:100%;">' +
          '  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">' +
          '    <div>' +
          '      <div style="font-size:0.92rem; font-weight:800; color:#f8fafc;">' + it.title + '</div>' +
          '      <div style="font-size:0.75rem; color:#38bdf8; margin-top:2px;">📍 ' + addr.locality + ', ' + addr.city + ' (' + addr.pincode + ')</div>' +
          '    </div>' +
          '    <div style="text-align:right;">' +
          '      <div style="font-size:1.1rem; font-weight:900; color:#22c55e;">₹' + it.monthlyRent + '<span style="font-size:0.65rem; color:#94a3b8;">/माह</span></div>' +
          '      <div style="font-size:0.68rem; color:#64748b;">डिपॉजिट: ₹' + it.securityDeposit + '</div>' +
          '    </div>' +
          '  </div>' +

          '  <div style="background:#030712; padding:8px; border-radius:6px; margin:8px 0; font-size:0.72rem; color:#cbd5e1; display:flex; justify-content:space-between;">' +
          '    <span>⚡ बिजली: ' + (meter.meterType === 'sub_meter_per_unit' ? ('सब-मीटर @ ₹' + meter.ratePerUnit + '/यूनिट') : 'किराये में शामिल') + '</span>' +
          '    <span style="color:#f59e0b;">🔑 उपलब्ध: ' + ((it.lifecycleVerification && it.lifecycleVerification.availableFromDate) || 'तत्काल') + '</span>' +
          '  </div>' +

          '  <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #1e293b; padding-top:8px; margin-top:6px;">' +
          '    <div style="font-size:0.72rem; color:#94a3b8;">' +
          '      👤 ' + owner.name + ' <span style="background:#065f46; color:#34d399; padding:2px 4px; border-radius:4px; font-size:0.62rem;">सत्यापित</span>' +
          '    </div>' +
          '    <button class="rm-btn-contact" data-owner="' + owner.name + '" data-phone="' + owner.maskedPhone + '" style="padding:6px 10px; background:#10b981; color:#022c22; border:none; border-radius:6px; font-size:0.75rem; font-weight:800; cursor:pointer;">' +
          '      📞 संपर्क करें' +
          '    </button>' +
          '  </div>' +
          '</div>';
      }
      return out;
    }

    html += buildCardsHtml(listings);
    html += '</div></div></div>';
    container.innerHTML = html;

    var btnApply = container.querySelector('#rm-search-btn-apply');
    var resultsContainer = container.querySelector('#rm-search-results-list');
    var countSpan = container.querySelector('#rm-search-count');

    if (btnApply) {
      btnApply.addEventListener('click', function () {
        var locVal = (container.querySelector('#rm-search-locality') || {}).value;
        var budgetVal = (container.querySelector('#rm-search-budget') || {}).value;
        var subMeterVal = (container.querySelector('#rm-search-submeter') || {}).checked;

        var filtered = filterListings(listings, {
          locality: locVal,
          maxRent: budgetVal,
          requireSubMeter: subMeterVal
        });

        countSpan.textContent = filtered.length;
        resultsContainer.innerHTML = buildCardsHtml(filtered);
        attachContactHandlers();
      });
    }

    function attachContactHandlers() {
      var contactBtns = container.querySelectorAll('.rm-btn-contact');
      for (var j = 0; j < contactBtns.length; j++) {
        contactBtns[j].addEventListener('click', function () {
          var name = this.getAttribute('data-owner');
          var phone = this.getAttribute('data-phone');
          alert('मकान मालिक: ' + name + '\nमास्क्ड संपर्क: ' + phone + '\n\nप्लेटफ़ॉर्म सुरक्षा नीति के अनुसार प्रारंभिक बातचीत इन-ऐप चैट द्वारा शुरू की जाएगी।');
        });
      }
    }

    attachContactHandlers();
  }


// ==============================================================================
// SECTION 5: LIFECYCLE MOUNT/UNMOUNT CONTRACT & UMD EXPORTS
// ==============================================================================

  return {
    subFeatureId: SUB_FEATURE_ID,
    categoryId: CATEGORY_ID,
    featureSlug: FEATURE_SLUG,
    schemaVersion: SCHEMA_VERSION,
    moduleVersion: MODULE_VERSION,
    getStorageKey: getStorageKey,
    filterListings: filterListings,
    calculateEstimatedMoveInCost: calculateEstimatedMoveInCost,
    sortListings: sortListings,
    loadSearchData: loadSearchData,
    saveSearchData: saveSearchData,
    ingestUnitFromLedger: ingestUnitFromLedger,
    renderView: renderView,
    mount: function (container, options) {
      try {
        renderView(container, options);
      } catch (err) {
        console.error('[RM-16-3] Mount error:', err);
        if (container) {
          container.innerHTML = '<div style="color:#ef4444; padding:16px;">किराया खोज कैटलॉग लोड करने में समस्या हुई।</div>';
        }
      }
    },
    unmount: function (container) {
      if (container) container.innerHTML = '';
    }
  };
});
