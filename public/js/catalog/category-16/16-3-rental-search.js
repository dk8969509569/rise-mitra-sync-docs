/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RISE MITRA — CATEGORY-15 MICRO-APP ENGINE (15-3 Root Engine Part-2 v83)
 *   - SPECIFICATION  : 14_04__EXT_004_MODULAR_ARCHITECTURE_MOBILE_SAFETY_RECOVERY_SPEC
 *   - REPO TARGET    : public/js/catalog/category-16/16-3-rental-search.js
 *   - SURFACE TARGET : SURFACE-A ONLY (15-3 Public Rental Search, Discovery & Auto-Publish Intake)
 *   - HOST BINDING   : Surface-A (Mounted into #rm-module-container via SIVME Adapter / Router)
 *   - SIZE BUDGET    : <= 230 Logical Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : GATE-16.7 | DEC-RM-SOV-ARCH-20260930-MODULAR-ZEL-001 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/catalog/category-16/16-3-rental-search.js (Part-2 Root Engine: Filter, Storage & Events)
 *   - public/js/catalog/category-15/15-3-rental-template.js (Part-1 Template: Seed Data, Geo & 2.5D HTML)
 *   - public/js/catalog/category-15/15-2-rental-template.js & 16-2-rental-ledger.js (15-2 Companion)
 *   - public/js/data/* (Pan-India Master States & Districts Dataset — `window.RM_INDIA_GEO`)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, ROOT-ENGINE-FIRST & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Multi-criteria listing filter, move-in cost calculator, sorting,
 *                              15-2 (16-2) ledger auto-publish intake, Part-1 template auto-loader,
 *                              and scoped DOM event binding inside `renderView`.
 *   - ALLOWED ON SURFACE-B   : Reads `rm_local_acct_owner_config` filter visibility flags safely.
 *   - ROOT-ENGINE-FIRST RULE : Delegates 2.5D HTML & seed data to `category-15/15-3-rental-template.js`
 *                              while keeping all 18 UMD exports 100% intact here.
 *   - FORBIDDEN IN THIS FILE : Changing canonical storage keys or breaking UMD global exports.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_Cat16_Sub3_RentalSearch, window.RiseMitraCatalog_16_3,
 *                           window.RM_Cat15_Sub3_RentalSearch, window.RiseMitraCatalog_15_3,
 *                           localStorage['rm_local_acct<id>_cat16_sub3_v1']
 *   - CALLS EXTERNAL APIs : window.RM_Cat15_Sub3_Template, window.RM_Cat16_Sub3_Template,
 *                           window.RM_INDIA_GEO
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #rm-search-locality, #rm-cat16-search-state, #rm-cat16-search-district,
 *                           #rm-search-budget, #rm-search-budget-slider, #rm-search-submeter,
 *                           #rm-search-btn-reset, #rm-search-btn-apply, #rm-search-count,
 *                           #rm-search-results-list, .rm-btn-contact
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (NEVER TOUCHED)
 *   - WORLD-CLASS 2.5D UI : Renders Part-1 2.5D cards & shell with 15px-18.5px anti-clipping fonts.
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Scoped event listeners inside `container`; zero global listener conflicts.
 *   - DOM SAFETY    : Preserves all `#rm-search-*` IDs and storage schemas 100%.
 *   - ZERO REVERT   : Preloads `category-15/15-3-rental-template.js` at boot so `renderView` runs in 0ms.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 16 FUNCTIONS INTACT):
 *   1. getOwnerFilterConfig           2. getStorageKey                  3. resolveGeoFromPincode (Bridge)
 *   4. filterListings                 5. calculateEstimatedMoveInCost   6. sortListings
 *   7. loadSearchData                 8. saveSearchData                 9. ingestUnitFromLedger
 *   10. loadAllListings               11. renderListingCard (Bridge)    12. renderView
 *   13. updateDistrictDropdown        14. attachContactHandlers         15. triggerSearch / 16. mount & unmount
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole authoritative Part-2 controller of 15-3 (16-3) Rental Search Engine.
 *   - ZERO-GUESSWORK LOCK : Paired 1:1 with `public/js/catalog/category-15/15-3-rental-template.js`.
 *   - CANONICAL PATH      : Active at `public/js/catalog/category-16/16-3-rental-search.js` until adapter sync.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Delegates HTML templates & seed listings to Part-1 (`15-3-rental-template.js`).
 *   - IDEMPOTENT BOOT : UMD factory pattern exports clean singleton module methods.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict UMD + try/catch boundaries around storage, filter, and mount.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, 1-TASK-1-FILE COMMIT, PRE-MAIN GATE & CONTRACT LOCK:
 *   - VERSION SYNC    : Upgraded `MODULE_VERSION = '1.2.0'` synced with `v83` release.
 *   - PIPELINE GATE   : Commit & verify on `pre-main` before merging to `main`.
 * ==============================================================================
 * 12. GITHUB ACTIONS FOLDER-B MIRROR SYNC & AI PRE-FLIGHT AUDIT TAGS:
 *   - @folder-a-ssot  : 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW (Pure Policy & Specs Only — No Code)
 *   - @folder-b-mirror: 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH (Auto-Synced via sync_drive.yml)
 *   - @ai-pre-flight  : 12-Point Header + Code auto-indexed in Folder B snapshot.
 * ==============================================================================
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    var lib = factory();
    root.RM_Cat16_Sub3_RentalSearch = lib;
    root.RiseMitraCatalog_16_3 = lib;
    root.RM_Cat15_Sub3_RentalSearch = lib;
    root.RiseMitraCatalog_15_3 = lib;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SUB_FEATURE_ID = '16-3';
  var CATEGORY_ID = 'category-16';
  var FEATURE_SLUG = 'rental-search';
  var SCHEMA_VERSION = '1';
  var MODULE_VERSION = '1.2.0';

  var DEFAULT_SEARCH_CONFIG = {
    defaultCity: 'इंदौर',
    maxBudgetLimit: 50000,
    currencySymbol: '₹',
    defaultRadiusKm: 10
  };

  function getTpl() {
    return (typeof window !== 'undefined') ? (window.RM_Cat15_Sub3_Template || window.RM_Cat16_Sub3_Template || null) : null;
  }

  function ensurePart1TemplateLoaded(onReady) {
    if (getTpl()) {
      if (typeof onReady === 'function') onReady();
      return;
    }
    if (typeof document === 'undefined') return;
    var existing = document.getElementById('rm-cat15-3-template-js');
    if (existing) {
      if (typeof onReady === 'function') existing.addEventListener('load', onReady);
      return;
    }
    var s = document.createElement('script');
    s.id = 'rm-cat15-3-template-js';
    s.src = '/js/catalog/category-15/15-3-rental-template.js?v=' + (window.__RM_ACTIVE_CACHE_VER || '20261019_v83');
    s.async = false;
    if (typeof onReady === 'function') s.onload = onReady;
    (document.head || document.documentElement).appendChild(s);
  }
  ensurePart1TemplateLoaded();

  function getOwnerFilterConfig() {
    try {
      var raw = localStorage.getItem('rm_local_acct_owner_config');
      if (raw) {
        var cfg = JSON.parse(raw);
        if (cfg && cfg.filterVisibility) return cfg.filterVisibility;
      }
    } catch (e) {}
    return { showCountry: false, showState: true, showDistrict: true, showLocality: true, smartOmnibox: true, showBudget: true, showSubmeter: true };
  }

  function getStorageKey(accountId) {
    var acct = (accountId && typeof accountId === 'string') ? accountId.replace(/[^a-zA-Z0-9_-]/g, '') : 'default';
    return 'rm_local_acct' + acct + '_cat16_sub3_v' + SCHEMA_VERSION;
  }


  // SECTION 2: MATHEMATICAL CALCULATORS & CANONICAL FINANCIAL FORMULAS
  function resolveGeoFromPincode(pCode) {
    var tpl = getTpl();
    if (tpl && typeof tpl.resolveGeoFromPincode === 'function') return tpl.resolveGeoFromPincode(pCode);
    if (!pCode) return null;
    var pin = String(pCode).trim();
    if (/^822/.test(pin)) return { state: 'झारखंड', stateEn: 'Jharkhand', district: 'पलामू (डाल्टनगंज)' };
    if (/^83/.test(pin)) return { state: 'झारखंड', stateEn: 'Jharkhand', district: 'रांची' };
    if (/^80|^81|^82|^84|^85/.test(pin)) return { state: 'बिहार', stateEn: 'Bihar', district: 'पटना' };
    if (/^45|^46|^47|^48/.test(pin)) return { state: 'मध्य प्रदेश', stateEn: 'Madhya Pradesh', district: 'इंदौर' };
    if (/^30|^31|^32|^33|^34/.test(pin)) return { state: 'राजस्थान', stateEn: 'Rajasthan', district: 'कोटा' };
    if (/^60|^61|^62|^63|^64/.test(pin)) return { state: 'तमिलनाडु', stateEn: 'Tamil Nadu', district: 'चेन्नई' };
    if (/^11/.test(pin)) return { state: 'दिल्ली', stateEn: 'Delhi', district: 'नई दिल्ली' };
    if (/^20|^21|^22|^23|^24|^25|^26|^27|^28/.test(pin)) return { state: 'उत्तर प्रदेश', stateEn: 'Uttar Pradesh', district: 'लखनऊ' };
    if (/^40|^41|^42|^43|^44/.test(pin)) return { state: 'महाराष्ट्र', stateEn: 'Maharashtra', district: 'मुंबई' };
    return null;
  }

  function filterListings(listings, filters) {
    if (!Array.isArray(listings)) return [];
    filters = filters || {};
    var maxRent = parseFloat(filters.maxRent) || Infinity;
    var unitType = filters.unitType || 'ALL';
    var locality = (filters.locality || '').trim().toLowerCase();
    var requireSubMeter = (filters.requireSubMeter !== undefined) ? Boolean(filters.requireSubMeter) : Boolean(filters.submeterOnly);
    var omni = (filters.omnibox || '').trim().toLowerCase();
    var stateFilter = (filters.state || '').trim().toLowerCase();
    var districtFilter = (filters.district || '').trim().toLowerCase();

    return listings.filter(function (item) {
      if (!item || (item.status && item.status !== 'AVAILABLE')) return false;
      var rent = parseFloat(item.monthlyRent) || 0;
      if (rent > maxRent) return false;
      if (unitType !== 'ALL' && item.unitType && item.unitType !== unitType) return false;

      var addr = item.addressPublic || {};
      var sName = (addr.state || item.state || '').trim().toLowerCase();
      var dName = (addr.district || item.district || '').trim().toLowerCase();
      var cName = (addr.city || item.city || '').trim().toLowerCase();
      var lName = (addr.locality || item.locality || '').trim().toLowerCase();
      var pCode = String(addr.pincode || item.pincode || '').trim().toLowerCase();
      var titleText = (item.title || '').toLowerCase();

      if (!sName && pCode) {
        var resolved = resolveGeoFromPincode(pCode);
        if (resolved) {
          sName = resolved.state.toLowerCase();
          if (!dName) dName = resolved.district.toLowerCase();
        }
      }

      if (stateFilter) {
        if (!sName) return false;
        var stateMatched = (sName === stateFilter || sName.indexOf(stateFilter) !== -1 || stateFilter.indexOf(sName) !== -1);
        if (!stateMatched && window.RM_INDIA_GEO && Array.isArray(window.RM_INDIA_GEO.states)) {
          var matchedGeo = window.RM_INDIA_GEO.states.find(function (st) {
            var hi = (st.nameHi || '').toLowerCase();
            var en = (st.name || '').toLowerCase();
            return (hi && hi === stateFilter) || (en && en === stateFilter);
          });
          if (matchedGeo) {
            var geoHi = (matchedGeo.nameHi || '').toLowerCase();
            var geoEn = (matchedGeo.name || '').toLowerCase();
            if (sName === geoHi || sName === geoEn || sName.indexOf(geoHi) !== -1 || sName.indexOf(geoEn) !== -1) stateMatched = true;
          }
        }
        if (!stateMatched) return false;
      }

      if (districtFilter) {
        if (!dName || !(dName === districtFilter || dName.indexOf(districtFilter) !== -1 || districtFilter.indexOf(dName) !== -1)) return false;
      }
      if (locality && lName.indexOf(locality) === -1 && cName.indexOf(locality) === -1 && dName.indexOf(locality) === -1) return false;
      if (requireSubMeter && !(item.electricityBilling && item.electricityBilling.meterType === 'sub_meter_per_unit')) return false;
      if (omni && titleText.indexOf(omni) === -1 && sName.indexOf(omni) === -1 && dName.indexOf(omni) === -1 && cName.indexOf(omni) === -1 && lName.indexOf(omni) === -1 && pCode.indexOf(omni) === -1) return false;
      return true;
    });
  }

  function calculateEstimatedMoveInCost(monthlyRent, securityDeposit, otherCharges) {
    var rent = parseFloat(monthlyRent) || 0;
    var deposit = parseFloat(securityDeposit) || 0;
    var other = parseFloat(otherCharges) || 0;
    return { monthlyRent: rent, securityDeposit: deposit, otherCharges: other, totalMoveInRequired: Math.round((rent + deposit + other) * 100) / 100 };
  }

  function sortListings(listings, sortBy) {
    if (!Array.isArray(listings)) return [];
    var list = listings.slice();
    if (sortBy === 'RENT_ASC') list.sort(function (a, b) { return (a.monthlyRent || 0) - (b.monthlyRent || 0); });
    else if (sortBy === 'RENT_DESC') list.sort(function (a, b) { return (b.monthlyRent || 0) - (a.monthlyRent || 0); });
    return list;
  }


  // SECTION 3: OFFLINE-FIRST PERSISTENCE & AUTO-PUBLISH INTAKE
  function loadSearchData(accountId, fallbackData) {
    try {
      var raw = localStorage.getItem(getStorageKey(accountId));
      return raw ? JSON.parse(raw) : (fallbackData || null);
    } catch (err) {
      return fallbackData || null;
    }
  }

  function saveSearchData(accountId, data) {
    try {
      localStorage.setItem(getStorageKey(accountId), JSON.stringify(data));
      return true;
    } catch (err) {
      return false;
    }
  }

  function ingestUnitFromLedger(property, unit, landlordProfile) {
    if (!property || !unit) return null;
    var lifecycle = unit.lifecycleStatus || {};
    var pub = unit.publicationSettings || {};
    if (!lifecycle.physicalPossessionReturned || !lifecycle.readyToRent || pub.mode === 'private_only' || !pub.consentActive) return null;

    var propAddr = property.address || {};
    var pCode = propAddr.pincode || '452010';
    var resolvedGeo = resolveGeoFromPincode(pCode);
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
        country: propAddr.country || 'IN',
        state: propAddr.state || (resolvedGeo ? resolvedGeo.state : 'मध्य प्रदेश'),
        district: propAddr.district || (resolvedGeo ? resolvedGeo.district : 'इंदौर'),
        city: propAddr.city || (resolvedGeo ? resolvedGeo.district : 'इंदौर'),
        locality: propAddr.locality || 'विजयनगर',
        pincode: pCode
      },
      electricityBilling: { meterType: unit.electricityConfig ? unit.electricityConfig.meterType : 'sub_meter_per_unit', ratePerUnit: unit.electricityConfig ? unit.electricityConfig.ratePerUnit : 8.0 },
      publicationMode: pub.mode || 'auto_publish',
      lifecycleVerification: { physicalPossessionConfirmed: true, readyToRentConfirmed: true, availableFromDate: lifecycle.futureAvailableDate || new Date().toISOString().slice(0, 10) },
      landlordContactMasked: { name: landlordProfile ? landlordProfile.name : 'मकान मालिक', maskedPhone: landlordProfile ? landlordProfile.maskedPhone : '+91 XXXXX00000', verifiedBadge: true },
      status: 'AVAILABLE',
      lastSyncedAt: new Date().toISOString()
    };
  }

  function loadAllListings(accountId, initialListings) {
    var listingsMap = {};
    var tpl = getTpl();
    var seeds = (tpl && Array.isArray(tpl.SEED_LISTINGS)) ? tpl.SEED_LISTINGS : [];
    seeds.forEach(function (item) { listingsMap[item.listingId] = item; });
    if (Array.isArray(initialListings)) initialListings.forEach(function (item) { if (item && item.listingId) listingsMap[item.listingId] = item; });
    var localData = loadSearchData(accountId);
    if (localData && Array.isArray(localData.publicListings)) localData.publicListings.forEach(function (item) { if (item && item.listingId) listingsMap[item.listingId] = item; });

    var result = [];
    for (var k in listingsMap) {
      if (Object.prototype.hasOwnProperty.call(listingsMap, k)) {
        var it = listingsMap[k];
        var addr = it.addressPublic || {};
        if (!addr.state && addr.pincode) {
          var autoG = resolveGeoFromPincode(addr.pincode);
          if (autoG) {
            addr.state = autoG.state;
            if (!addr.district) addr.district = autoG.district;
          }
        }
        result.push(it);
      }
    }
    return result;
  }


  // SECTION 4: FLUID DOM VIEWPORT & TACTILE EVENT HANDLERS
  function renderListingCard(item) {
    var tpl = getTpl();
    if (tpl && typeof tpl.renderListingCard === 'function') return tpl.renderListingCard(item);
    return '<div style="padding:12px;border:1px solid #334155;border-radius:10px;margin-bottom:8px;">' + (item ? item.title : '') + '</div>';
  }

  function renderView(container, options) {
    if (!container) return;
    var tpl = getTpl();
    if (!tpl || typeof tpl.buildRentalSearchShellHTML !== 'function') {
      ensurePart1TemplateLoaded(function () { renderView(container, options); });
      return;
    }
    options = options || {};
    var accountId = options.accountId || 'default';
    var state = options.state || { publicListings: [], searchDefaults: DEFAULT_SEARCH_CONFIG, i18n: { hi: { featureTitle: 'कमरा व फ्लैट खोज (0% दलाली)', actions: {}, labels: {} } } };
    var initialListings = (state && Array.isArray(state.publicListings)) ? state.publicListings : [];
    var allListings = loadAllListings(accountId, initialListings);
    var ownerCfg = getOwnerFilterConfig();
    var i18n = (state.i18n && state.i18n.hi) ? state.i18n.hi : {};

    container.innerHTML = tpl.buildRentalSearchShellHTML(allListings.length, ownerCfg, i18n);

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
          alert('मकान मालिक: ' + this.getAttribute('data-owner') + '\nमास्क्ड संपर्क: ' + this.getAttribute('data-phone') + '\n\nRise Mitra सुरक्षा नीति के अनुसार सीधी बातचीत शुरू की जा रही है (0% ब्रोकरेज)।');
        });
      }
    }

    function triggerSearch() {
      var omniVal = inputLocality ? inputLocality.value : '';
      var filtered = filterListings(allListings, {
        omnibox: omniVal,
        locality: omniVal,
        state: selectState ? selectState.value : '',
        district: selectDistrict ? selectDistrict.value : '',
        maxRent: inputBudget ? parseFloat(inputBudget.value) : Infinity,
        requireSubMeter: checkSubmeter ? checkSubmeter.checked : false
      });
      if (countSpan) countSpan.textContent = filtered.length;
      if (resultsContainer) {
        if (filtered.length === 0) {
          resultsContainer.innerHTML = '<div style="background:#0f172a;border:1.5px dashed #38bdf8;border-radius:14px;padding:24px 14px;text-align:center;color:#e2e8f0;font-size:15px;font-weight:700;margin-top:8px;"><div style="font-size:28px;margin-bottom:8px;">🔍</div><div>कोई आवास इस खोज मापदंड से मेल नहीं खाता</div><div style="font-size:13.5px;color:#94a3b8;margin-top:4px;">कृपया बजट बढ़ाएं, दूसरा जिला चुनें या सर्च बॉक्स में पिनकोड लिखें।</div></div>';
        } else {
          var cardsHtml = '';
          filtered.forEach(function (item) { cardsHtml += renderListingCard(item); });
          resultsContainer.innerHTML = cardsHtml;
          attachContactHandlers();
        }
      }
    }

    if (sliderBudget && inputBudget) {
      sliderBudget.addEventListener('input', function () { inputBudget.value = this.value; triggerSearch(); });
      inputBudget.addEventListener('input', function () { sliderBudget.value = this.value || 15000; triggerSearch(); });
    }
    if (inputLocality) inputLocality.addEventListener('input', triggerSearch);
    if (selectState) selectState.addEventListener('change', function () { updateDistrictDropdown(this.value); triggerSearch(); });
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
    triggerSearch();
  }


  // SECTION 5: LIFECYCLE MOUNT/UNMOUNT CONTRACT & UMD EXPORTS
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
        if (container) container.innerHTML = '<div style="color:#ef4444; padding:16px;">किराया खोज कैटलॉग लोड करने में समस्या हुई।</div>';
      }
    },
    unmount: function (container) {
      if (container) container.innerHTML = '';
    }
  };
});
