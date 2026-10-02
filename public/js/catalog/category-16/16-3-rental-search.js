/**
 * RISE MITRA — CATEGORY-16 MICRO-APP ENGINE
 * SUB-FEATURE   : 16-3 (Public Rental Search, Discovery & Auto-Publish Intake)
 * SPECIFICATION : 14_04__EXT_004_MODULAR_ARCHITECTURE_MOBILE_SAFETY_RECOVERY_SPEC
 * GOVERNANCE    : GATE-16.7 | DEC-RM-SOV-ARCH-20260930-MODULAR-ZEL-001
 * REPO TARGET   : public/js/catalog/category-16/16-3-rental-search.js
 * DUAL-FOLDER REFERENCES:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
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
  var MODULE_VERSION = '1.1.0';

  var DEFAULT_SEARCH_CONFIG = {
    defaultCity: 'इंदौर',
    maxBudgetLimit: 50000,
    currencySymbol: '₹',
    defaultRadiusKm: 10
  };

  // Surface B Configuration Resolver
  function getOwnerFilterConfig() {
    try {
      var raw = localStorage.getItem('rm_local_acct_owner_config');
      if (raw) {
        var cfg = JSON.parse(raw);
        if (cfg && cfg.filterVisibility) return cfg.filterVisibility;
      }
    } catch (e) {
      console.warn('[RM-16-3] Failed to parse owner config:', e);
    }
    return {
      showCountry: false,
      showState: true,
      showDistrict: true,
      showLocality: true,
      smartOmnibox: true,
      showBudget: true,
      showSubmeter: true
    };
  }

  function getStorageKey(accountId) {
    var acct = (accountId && typeof accountId === 'string') ? accountId.replace(/[^a-zA-Z0-9_-]/g, '') : 'default';
    return 'rm_local_acct' + acct + '_cat16_sub3_v' + SCHEMA_VERSION;
  }

  // Pan-India Academic & Migration Seed Listings
  var SEED_LISTINGS = [
    {
      listingId: 'LST-SEED-JH-01',
      title: 'सिंगल रूम (छात्र व अध्ययन विशेष)',
      status: 'AVAILABLE',
      monthlyRent: 3500,
      securityDeposit: 3500,
      unitType: 'Single Room',
      addressPublic: {
        country: 'IN',
        state: 'झारखंड',
        district: 'रांची',
        city: 'रांची',
        locality: 'लालपुर (सर्कुलर रोड कोचिंग हब)',
        pincode: '834001'
      },
      electricityBilling: { meterType: 'sub_meter_per_unit', ratePerUnit: 8.0 },
      landlordContactMasked: { name: 'संजय कुमार (मकान मालिक)', maskedPhone: '+91 94XXXXXX12', verifiedBadge: true },
      lifecycleVerification: { physicalPossessionConfirmed: true, readyToRentConfirmed: true, availableFromDate: 'तत्काल' }
    },
    {
      listingId: 'LST-SEED-BR-01',
      title: '1 BHK स्वतंत्र फ्लैट (विद्यार्थी/कर्मचारी)',
      status: 'AVAILABLE',
      monthlyRent: 4800,
      securityDeposit: 4800,
      unitType: '1 BHK',
      addressPublic: {
        country: 'IN',
        state: 'बिहार',
        district: 'पटना',
        city: 'पटना',
        locality: 'बोरिंग रोड (कंकड़बाग लिंक)',
        pincode: '800001'
      },
      electricityBilling: { meterType: 'sub_meter_per_unit', ratePerUnit: 8.0 },
      landlordContactMasked: { name: 'राकेश रंजन', maskedPhone: '+91 98XXXXXX88', verifiedBadge: true },
      lifecycleVerification: { physicalPossessionConfirmed: true, readyToRentConfirmed: true, availableFromDate: 'तत्काल' }
    },
    {
      listingId: 'LST-SEED-MP-01',
      title: '1 BHK फ्लैट (शांत वातावरण व स्वच्छ पानी)',
      status: 'AVAILABLE',
      monthlyRent: 4500,
      securityDeposit: 4500,
      unitType: '1 BHK',
      addressPublic: {
        country: 'IN',
        state: 'मध्य प्रदेश',
        district: 'इंदौर',
        city: 'इंदौर',
        locality: 'विजयनगर (भंवरकुआं लिंक)',
        pincode: '452010'
      },
      electricityBilling: { meterType: 'sub_meter_per_unit', ratePerUnit: 8.0 },
      landlordContactMasked: { name: 'सुरेश जी (मकान मालिक)', maskedPhone: '+91 98XXXXXX01', verifiedBadge: true },
      lifecycleVerification: { physicalPossessionConfirmed: true, readyToRentConfirmed: true, availableFromDate: 'तत्काल' }
    },
    {
      listingId: 'LST-SEED-RJ-01',
      title: 'स्टूडेंट पीजी रूम (स्टडी टेबल व अटैच लेट-बाथ)',
      status: 'AVAILABLE',
      monthlyRent: 5500,
      securityDeposit: 5000,
      unitType: 'Single Room',
      addressPublic: {
        country: 'IN',
        state: 'राजस्थान',
        district: 'कोटा',
        city: 'कोटा',
        locality: 'विज्ञान नगर (कोचिंग एरिया)',
        pincode: '324005'
      },
      electricityBilling: { meterType: 'sub_meter_per_unit', ratePerUnit: 8.5 },
      landlordContactMasked: { name: 'महेश चौधरी', maskedPhone: '+91 91XXXXXX45', verifiedBadge: true },
      lifecycleVerification: { physicalPossessionConfirmed: true, readyToRentConfirmed: true, availableFromDate: 'तत्काल' }
    }
  ];

// ==============================================================================
// SECTION 2: MATHEMATICAL CALCULATORS & CANONICAL FINANCIAL FORMULAS
// ==============================================================================

  function filterListings(listings, filters) {
    if (!Array.isArray(listings)) return [];
    filters = filters || {};
    var maxRent = parseFloat(filters.maxRent) || Infinity;
    var unitType = filters.unitType || 'ALL';
    var locality = (filters.locality || '').trim().toLowerCase();
    var requireSubMeter = (filters.requireSubMeter !== undefined)
      ? Boolean(filters.requireSubMeter)
      : Boolean(filters.submeterOnly);

    var omni = (filters.omnibox || '').trim().toLowerCase();
    var stateFilter = (filters.state || '').trim().toLowerCase();
    var districtFilter = (filters.district || '').trim().toLowerCase();

    return listings.filter(function (item) {
      if (!item) return false;
      if (item.status && item.status !== 'AVAILABLE') return false;

      var rent = parseFloat(item.monthlyRent) || 0;
      if (rent > maxRent) return false;

      if (unitType !== 'ALL' && item.unitType && item.unitType !== unitType) return false;

      var addr = item.addressPublic || {};
      var sName = (addr.state || '').toLowerCase();
      var dName = (addr.district || '').toLowerCase();
      var cName = (addr.city || '').toLowerCase();
      var lName = (addr.locality || '').toLowerCase();
      var pCode = String(addr.pincode || '').toLowerCase();
      var titleText = (item.title || '').toLowerCase();

      // State Filter Match
      if (stateFilter && sName.indexOf(stateFilter) === -1 && stateFilter.indexOf(sName) === -1) {
        return false;
      }

      // District Filter Match
      if (districtFilter && dName.indexOf(districtFilter) === -1 && districtFilter.indexOf(dName) === -1) {
        return false;
      }

      // Locality Direct Match (Legacy Support)
      if (locality && lName.indexOf(locality) === -1 && cName.indexOf(locality) === -1 && dName.indexOf(locality) === -1) {
        return false;
      }

      // Sub-meter Filter
      if (requireSubMeter) {
        var isSubMeter = item.electricityBilling && item.electricityBilling.meterType === 'sub_meter_per_unit';
        if (!isSubMeter) return false;
      }

      // Universal Smart Omnibox Multi-Match (Omni, Locality, City, District, State, Pincode)
      if (omni) {
        var matchOmni = (titleText.indexOf(omni) !== -1) ||
                        (sName.indexOf(omni) !== -1) ||
                        (dName.indexOf(omni) !== -1) ||
                        (cName.indexOf(omni) !== -1) ||
                        (lName.indexOf(omni) !== -1) ||
                        (pCode.indexOf(omni) !== -1);
        if (!matchOmni) return false;
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
      list.sort(function (a, b) { return (a.monthlyRent || 0) - (b.monthlyRent || 0); });
    } else if (sortBy === 'RENT_DESC') {
      list.sort(function (a, b) { return (b.monthlyRent || 0) - (a.monthlyRent || 0); });
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
        country: (property.address && property.address.country) ? property.address.country : 'IN',
        state: (property.address && property.address.state) ? property.address.state : 'मध्य प्रदेश',
        district: (property.address && property.address.district) ? property.address.district : 'इंदौर',
        city: (property.address && property.address.city) ? property.address.city : 'इंदौर',
        locality: (property.address && property.address.locality) ? property.address.locality : 'विजयनगर',
        pincode: (property.address && property.address.pincode) ? property.address.pincode : '452010'
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

  function loadAllListings(accountId, initialListings) {
    var listingsMap = {};

    SEED_LISTINGS.forEach(function (item) {
      listingsMap[item.listingId] = item;
    });

    if (Array.isArray(initialListings)) {
      initialListings.forEach(function (item) {
        if (item && item.listingId) listingsMap[item.listingId] = item;
      });
    }

    var localData = loadSearchData(accountId);
    if (localData && Array.isArray(localData.publicListings)) {
      localData.publicListings.forEach(function (item) {
        if (item && item.listingId) listingsMap[item.listingId] = item;
      });
    }

    var result = [];
    for (var k in listingsMap) {
      if (Object.prototype.hasOwnProperty.call(listingsMap, k)) {
        result.push(listingsMap[k]);
      }
    }
    return result;
  }

// ==============================================================================
// SECTION 4: FLUID DOM VIEWPORT & TACTILE EVENT HANDLERS
// ==============================================================================

  function renderListingCard(item) {
    var addr = item.addressPublic || {};
    var geoParts = [addr.locality, addr.district, addr.state].filter(Boolean);
    var geoDisplay = geoParts.length > 0 ? geoParts.join(', ') : (addr.city || 'सत्यापित स्थान');
    var pinText = addr.pincode ? (' - ' + addr.pincode) : '';

    var meter = item.electricityBilling || {};
    var isSub = (meter.meterType === 'sub_meter_per_unit');
    var subMeterBadge = isSub
      ? '<span style="background:#064e3b; color:#34d399; border:1px solid #059669; font-size:0.65rem; padding:2px 6px; border-radius:4px; font-weight:700;">⚡ सब-मीटर (@₹' + (meter.ratePerUnit || 8) + '/यूनिट)</span>'
      : '<span style="background:#1e293b; color:#94a3b8; font-size:0.65rem; padding:2px 6px; border-radius:4px;">बिजली अलग</span>';

    var owner = item.landlordContactMasked || {};
    var ownerName = owner.name || 'सत्यापित मकान मालिक';
    var ownerPhone = owner.maskedPhone || '+91 XXXXX00000';

    return '' +
      '<div style="background:#0f172a; border:1px solid #1e293b; border-radius:12px; padding:12px; margin-bottom:10px; box-sizing:border-box; width:100%;">' +
        '<div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">' +
          '<div style="min-width:0; flex:1; padding-right:8px;">' +
            '<div style="font-size:0.92rem; font-weight:800; color:#f8fafc; line-height:1.3;">' + item.title + '</div>' +
            '<div style="font-size:0.75rem; color:#38bdf8; font-weight:600; margin-top:3px;">📍 ' + geoDisplay + pinText + '</div>' +
          '</div>' +
          '<div style="text-align:right; flex-shrink:0;">' +
            '<div style="font-size:1.05rem; font-weight:900; color:#10b981;">₹' + item.monthlyRent + '<span style="font-size:0.68rem; font-weight:normal; color:#94a3b8;">/माह</span></div>' +
            '<div style="font-size:0.65rem; color:#f59e0b; font-weight:700;">डिपॉजिट: ₹' + (item.securityDeposit || item.monthlyRent) + '</div>' +
          '</div>' +
        '</div>' +

        '<div style="display:flex; flex-wrap:wrap; gap:6px; align-items:center; margin:8px 0; padding-top:6px; border-top:1px solid #1e293b;">' +
          subMeterBadge +
          '<span style="background:#172554; color:#93c5fd; border:1px solid #1d4ed8; font-size:0.65rem; padding:2px 6px; border-radius:4px; font-weight:600;">उपलब्ध: ' + ((item.lifecycleVerification && item.lifecycleVerification.availableFromDate) || 'तत्काल') + '</span>' +
          '<span style="background:#022c22; color:#6ee7b7; border:1px solid #047857; font-size:0.65rem; padding:2px 6px; border-radius:4px; font-weight:700;">0% ब्रोकरेज</span>' +
        '</div>' +

        '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; padding-top:6px; border-top:1px dashed #1e293b;">' +
          '<div style="font-size:0.72rem; color:#cbd5e1; display:flex; align-items:center; gap:4px;">' +
            '<span>👤 ' + ownerName + ' <span style="background:#065f46; color:#34d399; padding:2px 4px; border-radius:4px; font-size:0.62rem;">सत्यापित</span></span>' +
          '</div>' +
          '<button class="rm-btn-contact" data-owner="' + ownerName + '" data-phone="' + ownerPhone + '" style="padding:6px 12px; background:#10b981; color:#022c22; border:none; border-radius:6px; font-size:0.75rem; font-weight:800; cursor:pointer;">' +
            '📞 संपर्क करें' +
          '</button>' +
        '</div>' +
      '</div>';
  }

  function renderView(container, options) {
    if (!container) return;
    options = options || {};
    var accountId = options.accountId || 'default';
    var state = options.state || {
      publicListings: [],
      searchDefaults: DEFAULT_SEARCH_CONFIG,
      i18n: { hi: { featureTitle: 'किराया खोज व आवास डायरेक्टरी', actions: {}, labels: {} } }
    };

    var initialListings = (state && Array.isArray(state.publicListings)) ? state.publicListings : [];
    var allListings = loadAllListings(accountId, initialListings);
    var ownerCfg = getOwnerFilterConfig();

    var i18n = (state.i18n && state.i18n.hi) ? state.i18n.hi : {};

    var html = '' +
      '<div style="box-sizing:border-box; width:100%; max-width:100%; margin:0 auto; padding:6px 2px; font-family:system-ui,-apple-system,sans-serif; color:#f8fafc; overflow-x:hidden;">' +

        // Top Header
        '<div style="background:#0f172a; border:1px solid #1e293b; border-radius:14px; padding:12px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; box-sizing:border-box; width:100%;">' +
          '<div style="min-width:0; flex:1;">' +
            '<h2 style="margin:0; font-size:1.05rem; font-weight:800; color:#ffffff;">🔍 16-3. ' + (i18n.featureTitle || 'कमरा व फ्लैट खोज') + '</h2>' +
            '<span style="font-size:0.72rem; color:#38bdf8; font-weight:600; display:block;">पैन-इंडिया ब्रोकर-फ्री आवास खोज इंजन</span>' +
          '</div>' +
          '<span style="background:#064e3b; color:#34d399; border:1px solid #059669; font-size:0.68rem; padding:3px 8px; border-radius:999px; font-weight:700;">सत्यापित</span>' +
        '</div>' +

        // Unified Search & Filter Controller Card
        '<div style="background:#0f172a; border:1px solid #1e293b; border-radius:14px; padding:12px 14px; margin-bottom:14px; box-sizing:border-box; width:100%;">' +

          // Universal Smart Omnibox Search
          (ownerCfg.smartOmnibox ? '' +
            '<div style="margin-bottom:10px;">' +
              '<label style="display:block; font-size:0.72rem; color:#94a3b8; margin-bottom:4px; font-weight:700;">🔍 स्मार्ट खोज (इलाका, शहर, जिला या पिनकोड)</label>' +
              '<input type="text" id="rm-search-locality" placeholder="उदा. लालपुर, बोरिंग रोड, डाल्टनगंज, विजयनगर, 834001..." style="width:100%; box-sizing:border-box; padding:9px 12px; background:#030712; border:1px solid #334155; border-radius:8px; color:#ffffff; font-size:0.85rem; outline:none;" />' +
            '</div>' : '') +

          // Cascading State & District Selectors
          '<div style="display:' + ((ownerCfg.showState || ownerCfg.showDistrict) ? 'grid' : 'none') + '; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:10px;">' +
            '<div style="display:' + (ownerCfg.showState ? 'block' : 'none') + ';">' +
              '<label style="display:block; font-size:0.68rem; color:#94a3b8; margin-bottom:3px; font-weight:600;">राज्य (State)</label>' +
              '<select id="rm-cat16-search-state" style="width:100%; box-sizing:border-box; padding:7px; background:#030712; border:1px solid #334155; border-radius:6px; color:#ffffff; font-size:0.78rem; outline:none;">' +
                '<option value="">सभी राज्य (All India)</option>' +
              '</select>' +
            '</div>' +
            '<div style="display:' + (ownerCfg.showDistrict ? 'block' : 'none') + ';">' +
              '<label style="display:block; font-size:0.68rem; color:#94a3b8; margin-bottom:3px; font-weight:600;">जिला (District)</label>' +
              '<select id="rm-cat16-search-district" style="width:100%; box-sizing:border-box; padding:7px; background:#030712; border:1px solid #334155; border-radius:6px; color:#ffffff; font-size:0.78rem; outline:none;">' +
                '<option value="">सभी जिले (All Districts)</option>' +
              '</select>' +
            '</div>' +
          '</div>' +

          // Budget & Sub-meter Controls
          '<div style="border-top:1px solid #1e293b; padding-top:10px; display:flex; flex-direction:column; gap:8px;">' +
            '<div style="display:flex; justify-content:space-between; align-items:center;">' +
              '<label style="font-size:0.72rem; color:#cbd5e1; font-weight:600;">अधिकतम मासिक किराया (₹ बजट):</label>' +
              '<div style="display:flex; align-items:center; gap:6px;">' +
                '<input type="number" id="rm-search-budget" placeholder="15000" value="15000" style="width:90px; box-sizing:border-box; padding:4px 8px; background:#030712; border:1px solid #334155; border-radius:6px; color:#10b981; font-size:0.8rem; font-weight:800; text-align:right;" />' +
              '</div>' +
            '</div>' +
            '<input type="range" id="rm-search-budget-slider" min="1500" max="25000" step="500" value="15000" style="width:100%; accent-color:#10b981; cursor:pointer;" />' +

            '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:2px;">' +
              '<label style="display:flex; align-items:center; gap:6px; font-size:0.72rem; color:#cbd5e1; cursor:pointer;">' +
                '<input type="checkbox" id="rm-search-submeter" checked /> केवल स्वतंत्र सब-मीटर वाले आवास' +
              '</label>' +
              '<div style="display:flex; gap:8px;">' +
                '<button id="rm-search-btn-reset" style="background:transparent; border:none; color:#f59e0b; font-size:0.68rem; font-weight:700; cursor:pointer; text-decoration:underline;">रीसेट</button>' +
                '<button id="rm-search-btn-apply" style="padding:5px 12px; background:#10b981; color:#022c22; border:none; border-radius:6px; font-weight:800; font-size:0.75rem; cursor:pointer;">खोजें</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        // Result Counter & Listing Viewport
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding:0 2px;">' +
          '<h3 style="margin:0; font-size:0.85rem; font-weight:700; color:#94a3b8; text-transform:uppercase;">' +
            'उपलब्ध आवास सूची (<span id="rm-search-count">' + allListings.length + '</span>)' +
          '</h3>' +
          '<span style="font-size:0.68rem; color:#22c55e;">16-2 ऑटो-सिंक सक्रिय</span>' +
        '</div>' +

        '<div id="rm-search-results-list" style="display:flex; flex-direction:column; gap:2px; width:100%; box-sizing:border-box;"></div>' +
      '</div>';

    container.innerHTML = html;

    // Element references
    var inputLocality = container.querySelector('#rm-search-locality');
    var selectState = container.querySelector('#rm-cat16-search-state');
    var selectDistrict = container.querySelector('#rm-cat16-search-district');
    var inputBudget = container.querySelector('#rm-search-budget');
    var sliderBudget = container.querySelector('#rm-search-budget-slider');
    var checkSubmeter = container.querySelector('#rm-search-submeter');
    var btnApply = container.querySelector('#rm-search-btn-apply');
    var btnReset = container.querySelector('#rm-search-btn-reset');
    var resultsContainer = container.querySelector('#rm-search-results-list');
    var countSpan = container.querySelector('#rm-search-count');

    // Populate States from Master Geo Dataset
    if (selectState && window.RM_INDIA_GEO && Array.isArray(window.RM_INDIA_GEO.states)) {
      window.RM_INDIA_GEO.states.forEach(function (s) {
        var opt = document.createElement('option');
        opt.value = s.nameHi || s.name;
        opt.setAttribute('data-code', s.code);
        opt.textContent = (s.nameHi || s.name) + ' (' + s.name + ')';
        selectState.appendChild(opt);
      });
    }

    function updateDistrictDropdown(selectedStateName) {
      if (!selectDistrict) return;
      selectDistrict.innerHTML = '<option value="">सभी जिले (All Districts)</option>';
      if (!selectedStateName || !window.RM_INDIA_GEO) return;

      var distList = window.RM_INDIA_GEO.getDistrictsByState(selectedStateName);
      distList.forEach(function (d) {
        var opt = document.createElement('option');
        opt.value = d.nameHi || d.name;
        opt.textContent = (d.nameHi || d.name) + ' (' + d.name + ')';
        selectDistrict.appendChild(opt);
      });
    }

    function attachContactHandlers() {
      var contactBtns = container.querySelectorAll('.rm-btn-contact');
      for (var j = 0; j < contactBtns.length; j++) {
        contactBtns[j].addEventListener('click', function () {
          var name = this.getAttribute('data-owner');
          var phone = this.getAttribute('data-phone');
          alert('मकान मालिक: ' + name + '\nमास्क्ड संपर्क: ' + phone + '\n\nRise Mitra सुरक्षा नीति के अनुसार सीधी बातचीत शुरू की जा रही है (0% ब्रोकरेज)।');
        });
      }
    }

    function triggerSearch() {
      var omniVal = inputLocality ? inputLocality.value : '';
      var stateVal = selectState ? selectState.value : '';
      var districtVal = selectDistrict ? selectDistrict.value : '';
      var budgetVal = inputBudget ? parseFloat(inputBudget.value) : Infinity;
      var submeterVal = checkSubmeter ? checkSubmeter.checked : false;

      var filtered = filterListings(allListings, {
        omnibox: omniVal,
        locality: omniVal,
        state: stateVal,
        district: districtVal,
        maxRent: budgetVal,
        requireSubMeter: submeterVal
      });

      if (countSpan) {
        countSpan.textContent = filtered.length;
      }

      if (resultsContainer) {
        if (filtered.length === 0) {
          resultsContainer.innerHTML = '' +
            '<div style="background:#0f172a; border:1px dashed #334155; border-radius:12px; padding:24px 14px; text-align:center; color:#94a3b8; font-size:0.8rem; margin-top:8px;">' +
              '<div style="font-size:1.8rem; margin-bottom:8px;">🔍</div>' +
              '<div style="font-weight:700; color:#f8fafc; margin-bottom:4px;">कोई आवास इस खोज मापदंड से मेल नहीं खाता</div>' +
              '<div style="font-size:0.72rem; color:#64748b;">कृपया बजट बढ़ाएं, दूसरा जिला चुनें या सर्च बॉक्स में केवल मुख्य शहर/पिनकोड लिखें।</div>' +
            '</div>';
        } else {
          var cardsHtml = '';
          filtered.forEach(function (item) {
            cardsHtml += renderListingCard(item);
          });
          resultsContainer.innerHTML = cardsHtml;
          attachContactHandlers();
        }
      }
    }

    // Two-Way Sync between slider and numeric input
    if (sliderBudget && inputBudget) {
      sliderBudget.addEventListener('input', function () {
        inputBudget.value = this.value;
        triggerSearch();
      });
      inputBudget.addEventListener('input', function () {
        sliderBudget.value = this.value || 15000;
        triggerSearch();
      });
    }

    // Dynamic Search Triggers
    if (inputLocality) inputLocality.addEventListener('input', triggerSearch);
    if (selectState) {
      selectState.addEventListener('change', function () {
        updateDistrictDropdown(this.value);
        triggerSearch();
      });
    }
    if (selectDistrict) selectDistrict.addEventListener('change', triggerSearch);
    if (checkSubmeter) checkSubmeter.addEventListener('change', triggerSearch);
    if (btnApply) btnApply.addEventListener('click', triggerSearch);

    if (btnReset) {
      btnReset.addEventListener('click', function () {
        if (inputLocality) inputLocality.value = '';
        if (selectState) selectState.value = '';
        if (selectDistrict) selectDistrict.innerHTML = '<option value="">सभी जिले (All Districts)</option>';
        if (inputBudget) inputBudget.value = 15000;
        if (sliderBudget) sliderBudget.value = 15000;
        if (checkSubmeter) checkSubmeter.checked = false;
        triggerSearch();
      });
    }

    // Initial Search Execution
    triggerSearch();
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
    defaultSearchConfig: DEFAULT_SEARCH_CONFIG,
    getStorageKey: getStorageKey,
    filterListings: filterListings,
    calculateEstimatedMoveInCost: calculateEstimatedMoveInCost,
    sortListings: sortListings,
    loadSearchData: loadSearchData,
    saveSearchData: saveSearchData,
    ingestUnitFromLedger: ingestUnitFromLedger,
    loadAllListings: loadAllListings,
    renderListingCard: renderListingCard,
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
