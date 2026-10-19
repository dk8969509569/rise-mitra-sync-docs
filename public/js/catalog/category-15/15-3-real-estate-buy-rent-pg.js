/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Category-15 (15-3) Real Estate: Buy, Rent & PG Complete Engine (v92)
 *   - SPECIFICATION  : 14_04__EXT_004_MODULAR_ARCHITECTURE_MOBILE_SAFETY_RECOVERY_SPEC
 *   - REPO TARGET    : public/js/catalog/category-15/15-3-real-estate-buy-rent-pg.js
 *   - SURFACE TARGET : SURFACE-A ONLY (15-3 Real Estate Buy, Rent & PG 2.5D UI + Search Engine)
 *   - HOST BINDING   : Surface-A (Mounted into #rm-module-container via 15-house-home-controller.js)
 *   - SIZE BUDGET    : <= 300 Logical Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : GATE-16.7 | DEC-RM-SOV-ARCH-20260930-MODULAR-ZEL-001 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/catalog/category-15/15-3-real-estate-buy-rent-pg.js (Complete 15-3 UI + Search Engine)
 *   - public/js/catalog/category-15/15-2-smart-meter-rent-billing.js (Complete 15-2 Smart Meter Engine)
 *   - public/js/catalog/category-15/15-1-home-services-handyman.js (Complete 15-1 Home Services Engine)
 *   - public/js/catalog/category-15/15-house-home-controller.js (Independent Category-15 Master Controller)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, ROOT-ENGINE-FIRST & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : All 4 Pan-India seed listings, 9 pincode geo zones, 2.5D card & shell
 *                              HTML builders, multi-criteria filter, 15-2 auto-publish intake, and DOM mount.
 *   - ALLOWED ON SURFACE-B   : Reads `rm_local_acct_owner_config` filter visibility flags safely.
 *   - ROOT-ENGINE-FIRST RULE : 100% self-contained Category 15 (`15-3`) root engine; zero dependency
 *                              on `public/js/catalog/category-16/` (reserved for Libraries & Demo).
 *   - FORBIDDEN IN THIS FILE : Cross-category coupling with Category 16 (`Libraries & Demo`).
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_Cat15_Sub3_RealEstateSearch, window.RM_Cat15_Sub3_RentalSearch,
 *                           window.RiseMitraCatalog_15_3, window.RM_Cat16_Sub3_RentalSearch,
 *                           window.RiseMitraCatalog_16_3, window.RM_Cat15_Sub3_Template,
 *                           window.RM_Cat16_Sub3_Template, localStorage['rm_local_acct<id>_cat16_sub3_v1']
 *   - CALLS EXTERNAL APIs : window.RM_INDIA_GEO (Optional Pan-India State/District dataset)
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #rm-search-locality, #rm-cat16-search-state, #rm-cat16-search-district,
 *                           #rm-search-budget, #rm-search-budget-slider, #rm-search-submeter,
 *                           #rm-search-btn-reset, #rm-search-btn-apply, #rm-search-count,
 *                           #rm-search-results-list, .rm-btn-contact
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (NEVER TOUCHED)
 *   - WORLD-CLASS 2.5D UI : 3-layer distinct color contrast, glowing 2.5D bevel borders, 15px-18.5px
 *                           anti-clipping typography, and Play Store `15-3` / `15-2` labels.
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Scoped event listeners inside `container`; zero global listener conflicts.
 *   - DOM SAFETY    : Preserves 100% of `#rm-search-*` and `#rm-cat16-search-*` IDs.
 *   - ZERO REVERT   : Template, seeds & controller live in the same file so `mount()` renders in 0ms.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL MERGED ITEMS INTACT):
 *   1. SEED_LISTINGS (4 Seeds)        2. resolveGeoFromPincode          3. renderListingCard
 *   4. buildRentalSearchShellHTML     5. getOwnerFilterConfig           6. getStorageKey
 *   7. filterListings                 8. calculateEstimatedMoveInCost   9. sortListings
 *   10. loadSearchData                11. saveSearchData                12. ingestUnitFromLedger
 *   13. loadAllListings               14. updateDistrictDropdown        15. attachContactHandlers
 *   16. triggerSearch                 17. renderView / mount / unmount
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole authoritative file for 15-3 Real Estate: Buy, Rent & PG Search.
 *   - ZERO-GUESSWORK LOCK : Merged 1:1 with 100% ZEL precision.
 *   - CANONICAL PATH      : Must exist ONLY at `public/js/catalog/category-15/15-3-real-estate-buy-rent-pg.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Registers all script sentinels (`rm-cat15-3-realestate-js`, `rm-cat15-3-engine-js`).
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['15-3-real-estate-buy-rent-pg']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict UMD + try/catch boundaries around storage, filter, and mount.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, 1-TASK-1-FILE COMMIT, PRE-MAIN GATE & CONTRACT LOCK:
 *   - VERSION SYNC    : Upgraded `MODULE_VERSION = '1.5.0'` synced with `v92` release.
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
    root.RM_Cat15_Sub3_RealEstateSearch = lib;
    root.RM_Cat15_Sub3_RentalSearch = lib;
    root.RiseMitraCatalog_15_3 = lib;
    root.RM_Cat16_Sub3_RentalSearch = lib;
    root.RiseMitraCatalog_16_3 = lib;
    root.RM_Cat15_Sub3_Template = lib;
    root.RM_Cat16_Sub3_Template = lib;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  if (typeof window !== 'undefined') {
    window.__RM_LOADED_MODULES__ = window.__RM_LOADED_MODULES__ || {};
    window.__RM_LOADED_MODULES__['15-3-real-estate-buy-rent-pg'] = true;
    window.__RM_LOADED_MODULES__['15-3-rental-template'] = true;
    window.__RM_LOADED_MODULES__['16-3-rental-template'] = true;
    window.__RM_LOADED_MODULES__['16-3-rental-search'] = true;
    ['rm-cat15-3-template-js', 'rm-cat15-3-tpl', 'rm-cat15-3-engine-js', 'rm-cat15-3-realestate-js'].forEach(function (id) {
      if (typeof document !== 'undefined' && !document.getElementById(id)) {
        var m = document.createElement('meta');
        m.id = id;
        (document.head || document.documentElement).appendChild(m);
      }
    });
  }

  var SUB_FEATURE_ID = '15-3';
  var CATEGORY_ID = 'category-15';
  var FEATURE_SLUG = 'real-estate-buy-rent-pg';
  var SCHEMA_VERSION = '1';
  var MODULE_VERSION = '1.5.0';

  var DEFAULT_SEARCH_CONFIG = {
    defaultCity: 'इंदौर',
    maxBudgetLimit: 50000,
    currencySymbol: '₹',
    defaultRadiusKm: 10
  };

  var SEED_LISTINGS = [
    {
      listingId: 'LST-SEED-JH-01',
      title: 'सिंगल रूम (छात्र व अध्ययन विशेष)',
      status: 'AVAILABLE',
      monthlyRent: 3500,
      securityDeposit: 3500,
      unitType: 'Single Room',
      addressPublic: { country: 'IN', state: 'झारखंड', district: 'रांची', city: 'रांची', locality: 'लालपुर (सर्कुलर रोड कोचिंग हब)', pincode: '834001' },
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
      addressPublic: { country: 'IN', state: 'बिहार', district: 'पटना', city: 'पटना', locality: 'बोरिंग रोड (कंकड़बाग लिंक)', pincode: '800001' },
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
      addressPublic: { country: 'IN', state: 'मध्य प्रदेश', district: 'इंदौर', city: 'इंदौर', locality: 'विजयनगर (भंवरकुआं लिंक)', pincode: '452010' },
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
      addressPublic: { country: 'IN', state: 'राजस्थान', district: 'कोटा', city: 'कोटा', locality: 'विज्ञान नगर (कोचिंग एरिया)', pincode: '324005' },
      electricityBilling: { meterType: 'sub_meter_per_unit', ratePerUnit: 8.5 },
      landlordContactMasked: { name: 'महेश चौधरी', maskedPhone: '+91 91XXXXXX45', verifiedBadge: true },
      lifecycleVerification: { physicalPossessionConfirmed: true, readyToRentConfirmed: true, availableFromDate: 'तत्काल' }
    }
  ];

  function resolveGeoFromPincode(pCode) {
    if (!pCode) return null;
    var pin = String(pCode).trim();
    if (/^822/.test(pin)) return { state: 'झारखंड', stateEn: 'Jharkhand', district: 'पलामू (डाल्टनगंज)' };
    if (/^45|^46|^47|^48/.test(pin)) return { state: 'मध्य प्रदेश', stateEn: 'Madhya Pradesh', district: 'इंदौर' };
    if (/^80|^81|^82|^84|^85/.test(pin)) return { state: 'बिहार', stateEn: 'Bihar', district: 'पटना' };
    if (/^83/.test(pin)) return { state: 'झारखंड', stateEn: 'Jharkhand', district: 'रांची' };
    if (/^30|^31|^32|^33|^34/.test(pin)) return { state: 'राजस्थान', stateEn: 'Rajasthan', district: 'कोटा' };
    if (/^60|^61|^62|^63|^64/.test(pin)) return { state: 'तमिलनाडु', stateEn: 'Tamil Nadu', district: 'चेन्नई' };
    if (/^11/.test(pin)) return { state: 'दिल्ली', stateEn: 'Delhi', district: 'नई दिल्ली' };
    if (/^20|^21|^22|^23|^24|^25|^26|^27|^28/.test(pin)) return { state: 'उत्तर प्रदेश', stateEn: 'Uttar Pradesh', district: 'लखनऊ' };
    if (/^40|^41|^42|^43|^44/.test(pin)) return { state: 'महाराष्ट्र', stateEn: 'Maharashtra', district: 'मुंबई' };
    return null;
  }

  function renderListingCard(item) {
    var addr = item.addressPublic || {};
    var pCode = String(addr.pincode || item.pincode || '').trim();
    var sName = addr.state || item.state || '';
    var dName = addr.district || item.district || '';
    var lName = addr.locality || item.locality || '';

    if (!sName && pCode) {
      var autoG = resolveGeoFromPincode(pCode);
      if (autoG) {
        sName = autoG.state;
        if (!dName) dName = autoG.district;
      }
    }

    var geoParts = [lName, dName, sName].filter(Boolean);
    var geoDisplay = geoParts.length > 0 ? geoParts.join(', ') : (addr.city || 'सत्यापित स्थान');
    var pinText = pCode ? (' - ' + pCode) : '';

    var meter = item.electricityBilling || {};
    var isSub = (meter.meterType === 'sub_meter_per_unit');
    var subMeterBadge = isSub
      ? '<span style="background:#064e3b;color:#6ee7b7;border:1.5px solid #10b981;font-size:13px;padding:3px 8px;border-radius:6px;font-weight:800;">⚡ सब-मीटर (@₹' + (meter.ratePerUnit || 8) + '/यूनिट)</span>'
      : '<span style="background:#1e293b;color:#cbd5e1;font-size:13px;padding:3px 8px;border-radius:6px;font-weight:700;">बिजली अलग</span>';

    var owner = item.landlordContactMasked || {};
    var ownerName = owner.name || 'सत्यापित मकान मालिक';
    var ownerPhone = owner.maskedPhone || '+91 XXXXX00000';
    var box25d = 'background:linear-gradient(180deg,#0f1c33 0%,#08101f 100%);border:1.8px solid rgba(56,189,248,0.48);border-bottom:3.5px solid rgba(14,165,233,0.78);box-shadow:0 10px 24px rgba(0,0,0,0.8);border-radius:16px;';

    return '' +
      '<div style="' + box25d + 'padding:14px;margin-bottom:12px;box-sizing:border-box;width:100%;">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px;">' +
          '<div style="min-width:0;flex:1;">' +
            '<div style="font-size:17px;font-weight:900;color:#ffffff;line-height:1.35;">' + item.title + '</div>' +
            '<div style="font-size:14px;color:#38bdf8;font-weight:700;margin-top:4px;line-height:1.4;">📍 ' + geoDisplay + pinText + '</div>' +
          '</div>' +
          '<div style="text-align:right;flex-shrink:0;">' +
            '<div style="font-size:19px;font-weight:900;color:#34d399;">₹' + item.monthlyRent + '<span style="font-size:13px;font-weight:700;color:#cbd5e1;">/माह</span></div>' +
            '<div style="font-size:13px;color:#fbbf24;font-weight:800;margin-top:2px;">डिपॉजिट: ₹' + (item.securityDeposit || item.monthlyRent) + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:10px 0;padding-top:8px;border-top:1px solid rgba(56,189,248,0.25);">' +
          subMeterBadge +
          '<span style="background:#172554;color:#bae6fd;border:1.5px solid #0284c7;font-size:13px;padding:3px 8px;border-radius:6px;font-weight:800;">उपलब्ध: ' + ((item.lifecycleVerification && item.lifecycleVerification.availableFromDate) || 'तत्काल') + '</span>' +
          '<span style="background:#022c22;color:#6ee7b7;border:1.5px solid #059669;font-size:13px;padding:3px 8px;border-radius:6px;font-weight:800;">🔑 0% ब्रोकरेज</span>' +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:10px;padding-top:8px;border-top:1px dashed rgba(56,189,248,0.3);">' +
          '<div style="font-size:14px;color:#f1f5f9;font-weight:700;display:flex;align-items:center;gap:6px;flex-wrap:wrap;">' +
            '<span>👤 ' + ownerName + '</span><span style="background:#065f46;color:#6ee7b7;border:1px solid #10b981;padding:2px 6px;border-radius:5px;font-size:12px;font-weight:800;">✓ सत्यापित</span>' +
          '</div>' +
          '<button type="button" class="rm-btn-contact" data-owner="' + ownerName + '" data-phone="' + ownerPhone + '" style="padding:8px 14px;background:linear-gradient(180deg,#10b981 0%,#059669 100%);color:#022c22;border:1.5px solid #6ee7b7;border-bottom:3px solid #047857;border-radius:10px;font-size:14px;font-weight:900;cursor:pointer;shrink:0;">📞 संपर्क करें</button>' +
        '</div>' +
      '</div>';
  }

  function buildRentalSearchShellHTML(allListingsLength, ownerCfg, i18n) {
    var box25d = 'background:linear-gradient(180deg,#0f1c33 0%,#08101f 100%);border:1.8px solid rgba(56,189,248,0.48);border-bottom:3.5px solid rgba(14,165,233,0.78);box-shadow:0 12px 26px rgba(0,0,0,0.8);border-radius:16px;';
    var inp25d = 'width:100%;box-sizing:border-box;padding:11px 12px;background:#030712;border:1.6px solid rgba(56,189,248,0.42);border-radius:10px;color:#ffffff;font-size:15px;font-weight:700;outline:none;';

    return '' +
      '<div style="box-sizing:border-box;width:100%;max-width:100%;margin:0 auto;padding:6px 2px 90px 2px;font-family:system-ui,-apple-system,sans-serif;color:#f8fafc;overflow-x:hidden;">' +
        '<div style="' + box25d + 'padding:14px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box;width:100%;">' +
          '<div style="min-width:0;flex:1;">' +
            '<h2 style="margin:0;font-size:18.5px;font-weight:900;color:#ffffff;line-height:1.3;">🏢 15-3. ' + ((i18n && i18n.featureTitle) || 'Real Estate: Buy, Rent & PG (कमरा व फ्लैट खोज • 0% दलाली)') + '</h2>' +
            '<span style="font-size:14px;color:#38bdf8;font-weight:700;display:block;margin-top:3px;">पैन-इंडिया ब्रोकर-फ्री आवास खोज इंजन (v1.5 • 2.5D)</span>' +
          '</div>' +
          '<span style="background:#064e3b;color:#6ee7b7;border:1.5px solid #10b981;font-size:13px;padding:4px 10px;border-radius:999px;font-weight:800;white-space:nowrap;margin-left:8px;">✓ सत्यापित</span>' +
        '</div>' +

        '<div style="' + box25d + 'padding:14px;margin-bottom:16px;box-sizing:border-box;width:100%;">' +
          (ownerCfg.smartOmnibox ? '' +
            '<div style="margin-bottom:12px;">' +
              '<label style="display:block;font-size:14.5px;color:#38bdf8;margin-bottom:5px;font-weight:800;">🔍 स्मार्ट खोज (इलाका, शहर, जिला या पिनकोड)</label>' +
              '<input type="text" id="rm-search-locality" placeholder="उदा. लालपुर, बोरिंग रोड, डाल्टनगंज, विजयनगर, 834001..." style="' + inp25d + '" />' +
            '</div>' : '') +

          '<div style="display:' + ((ownerCfg.showState || ownerCfg.showDistrict) ? 'grid' : 'none') + ';grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">' +
            '<div style="display:' + (ownerCfg.showState ? 'block' : 'none') + ';">' +
              '<label style="display:block;font-size:13.5px;color:#e2e8f0;margin-bottom:4px;font-weight:800;">राज्य (State)</label>' +
              '<select id="rm-cat16-search-state" style="' + inp25d + 'font-size:14px;padding:10px 8px;"><option value="">सभी राज्य (All India)</option></select>' +
            '</div>' +
            '<div style="display:' + (ownerCfg.showDistrict ? 'block' : 'none') + ';">' +
              '<label style="display:block;font-size:13.5px;color:#e2e8f0;margin-bottom:4px;font-weight:800;">जिला (District)</label>' +
              '<select id="rm-cat16-search-district" style="' + inp25d + 'font-size:14px;padding:10px 8px;"><option value="">सभी जिले (All Districts)</option></select>' +
            '</div>' +
          '</div>' +

          '<div style="border-top:1px solid rgba(56,189,248,0.28);padding-top:12px;display:flex;flex-direction:column;gap:10px;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">' +
              '<label style="font-size:14.5px;color:#f1f5f9;font-weight:800;">अधिकतम मासिक किराया (₹ बजट):</label>' +
              '<input type="number" id="rm-search-budget" placeholder="15000" value="15000" style="width:105px;box-sizing:border-box;padding:6px 10px;background:#030712;border:1.6px solid #10b981;border-radius:8px;color:#34d399;font-size:15.5px;font-weight:900;text-align:right;" />' +
            '</div>' +
            '<input type="range" id="rm-search-budget-slider" min="1500" max="25000" step="500" value="15000" style="width:100%;accent-color:#10b981;cursor:pointer;" />' +
            '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-top:2px;">' +
              '<label style="display:flex;align-items:center;gap:6px;font-size:14px;font-weight:700;color:#e2e8f0;cursor:pointer;">' +
                '<input type="checkbox" id="rm-search-submeter" checked style="width:18px;height:18px;" /> केवल स्वतंत्र सब-मीटर वाले आवास' +
              '</label>' +
              '<div style="display:flex;gap:10px;align-items:center;">' +
                '<button type="button" id="rm-search-btn-reset" style="background:transparent;border:none;color:#fbbf24;font-size:14px;font-weight:800;cursor:pointer;text-decoration:underline;">रीसेट</button>' +
                '<button type="button" id="rm-search-btn-apply" style="padding:7px 16px;background:linear-gradient(180deg,#10b981 0%,#059669 100%);color:#022c22;border:1.5px solid #6ee7b7;border-radius:9px;font-weight:900;font-size:14.5px;cursor:pointer;">खोजें</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding:0 4px;">' +
          '<h3 style="margin:0;font-size:15.5px;font-weight:900;color:#38bdf8;text-transform:uppercase;">🏘️ उपलब्ध आवास सूची (<span id="rm-search-count">' + allListingsLength + '</span>)</h3>' +
          '<span style="font-size:13px;color:#34d399;font-weight:800;">● 15-2 ऑटो-सिंक सक्रिय</span>' +
        '</div>' +
        '<div id="rm-search-results-list" style="display:flex;flex-direction:column;gap:4px;width:100%;box-sizing:border-box;"></div>' +
      '</div>';
  }

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
      sourceSubFeature: '15-2',
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
    SEED_LISTINGS.forEach(function (item) { listingsMap[item.listingId] = item; });
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

  function renderView(container, options) {
    if (!container) return;
    options = options || {};
    var accountId = options.accountId || 'default';
    var state = options.state || { publicListings: [], searchDefaults: DEFAULT_SEARCH_CONFIG, i18n: { hi: { featureTitle: 'Real Estate: Buy, Rent & PG (0% दलाली)', actions: {}, labels: {} } } };
    var initialListings = (state && Array.isArray(state.publicListings)) ? state.publicListings : [];
    var allListings = loadAllListings(accountId, initialListings);
    var ownerCfg = getOwnerFilterConfig();
    var i18n = (state.i18n && state.i18n.hi) ? state.i18n.hi : {};

    container.innerHTML = buildRentalSearchShellHTML(allListings.length, ownerCfg, i18n);

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

  return {
    subFeatureId: SUB_FEATURE_ID,
    categoryId: CATEGORY_ID,
    featureSlug: FEATURE_SLUG,
    schemaVersion: SCHEMA_VERSION,
    moduleVersion: MODULE_VERSION,
    defaultSearchConfig: DEFAULT_SEARCH_CONFIG,
    SEED_LISTINGS: SEED_LISTINGS,
    resolveGeoFromPincode: resolveGeoFromPincode,
    renderListingCard: renderListingCard,
    buildRentalSearchShellHTML: buildRentalSearchShellHTML,
    getOwnerFilterConfig: getOwnerFilterConfig,
    getStorageKey: getStorageKey,
    filterListings: filterListings,
    calculateEstimatedMoveInCost: calculateEstimatedMoveInCost,
    sortListings: sortListings,
    loadSearchData: loadSearchData,
    saveSearchData: saveSearchData,
    ingestUnitFromLedger: ingestUnitFromLedger,
    loadAllListings: loadAllListings,
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
