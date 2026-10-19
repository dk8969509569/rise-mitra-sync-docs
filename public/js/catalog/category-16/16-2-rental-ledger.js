/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RISE MITRA — CATEGORY-15/16 MICRO-APP ENGINE (15-2 / 16-2 Rental Ledger v83)
 *   - SPECIFICATION  : 14_04__EXT_004_MODULAR_ARCHITECTURE_MOBILE_SAFETY_RECOVERY_SPEC
 *   - REPO TARGET    : public/js/catalog/category-16/16-2-rental-ledger.js
 *   - SURFACE TARGET : SURFACE-A ONLY (15-2 Rental Ledger & Sub-Meter P2P Engine)
 *   - HOST BINDING   : Surface-A (Mounted into #rm-module-container via SIVME Adapter / Router)
 *   - SIZE BUDGET    : <= 275 Logical Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : GATE-16.7 | DEC-RM-SOV-ARCH-20260930-MODULAR-ZEL-001 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/catalog/category-16/16-2-rental-ledger.js (15-2 Root Engine: Rental Ledger & Sub-Meter)
 *   - public/js/catalog/category-16/16-3-rental-search.js (15-3 Companion: 0% Brokerage Room Search)
 *   - public/js/data/* (Pan-India Master States & Districts Dataset — `window.RM_INDIA_GEO`)
 *   - public/js/sivme-adapters/* & public/js/one-tap-subcard-router.js (Module Mount Bridges)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, ROOT-ENGINE-FIRST & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Sub-meter electricity & rent math, Pincode-first Pan-India geo
 *                              auto-resolver, offline voucher persistence, 15-3 (16-3) auto-publish
 *                              sync, WhatsApp digital slip, and World-Class 2.5D UI rendering.
 *   - ALLOWED ON SURFACE-B   : NONE (Surface-B Owner Console is strictly isolated).
 *   - ROOT-ENGINE-FIRST RULE : All 2.5D glowing borders, 15px-19px anti-clipping fonts, and `15-2`/`15-3`
 *                              UI labels live directly inside `renderView` in this root engine.
 *   - FORBIDDEN IN THIS FILE : Changing canonical storage keys or breaking UMD global exports.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_Cat16_Sub2_RentalLedger, window.RiseMitraCatalog_16_2,
 *                           window.RM_Cat15_Sub2_RentalLedger, window.RiseMitraCatalog_15_2,
 *                           localStorage['rm_local_acct<id>_cat16_sub2_v1'],
 *                           localStorage['rm_local_acct<id>_cat16_sub3_v1']
 *   - CALLS EXTERNAL APIs : window.RM_INDIA_GEO.states, window.RM_INDIA_GEO.getDistrictsByState
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #rm-cat16-pub-mode, #rm-cat16-possession, #rm-cat16-ready,
 *                           #rm-cat16-unit, #rm-cat16-rent, #rm-cat16-pincode, #rm-cat16-locality,
 *                           #rm-cat16-state, #rm-cat16-district, #rm-cat16-prev-meter,
 *                           #rm-cat16-curr-meter, #rm-cat16-btn-add, #rm-cat16-list, [data-rm-wa-idx]
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (NEVER TOUCHED)
 *   - WORLD-CLASS 2.5D UI : 3-layer distinct color contrast, glowing 2.5D bevel borders, 15px-19px
 *                           anti-clipping typography, and 1-Tap WhatsApp receipt sharing.
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Scoped event listeners inside `container`; zero global listener conflicts.
 *   - DOM SAFETY    : Preserves all `#rm-cat16-*` IDs and storage schemas 100%.
 *   - ZERO REVERT   : Native 2.5D styles in `renderView` ensure re-renders never revert UI.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 16 FUNCTIONS INTACT):
 *   1. getStorageKey                  2. calculateElectricity           3. calculateTotal
 *   4. calculateNetPayable            5. calculateProratedRent          6. evaluatePublicationEligibility
 *   7. resolveGeoFromPincode          8. loadVouchers                   9. saveVouchers
 *   10. recordVoucher                 11. formatDigitalSlipText         12. syncTo16_3Search
 *   13. renderView                    14. populateDistricts             15. mount / 16. unmount
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole authoritative owner of 15-2 (16-2) Rental Ledger & Sub-Meter Engine.
 *   - ZERO-GUESSWORK LOCK : Verified 1:1 against `16-2-rental-ledger.js` (v1.1.1).
 *   - CANONICAL PATH      : Must exist at `public/js/catalog/category-16/16-2-rental-ledger.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Consumes `window.RM_INDIA_GEO` for Pan-India state/district lists.
 *   - IDEMPOTENT BOOT : UMD factory pattern exports clean singleton module methods.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict UMD + try/catch boundaries around storage, sync, and mount.
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
    root.RM_Cat16_Sub2_RentalLedger = lib;
    root.RiseMitraCatalog_16_2 = lib;
    root.RM_Cat15_Sub2_RentalLedger = lib;
    root.RiseMitraCatalog_15_2 = lib;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SUB_FEATURE_ID = '16-2';
  var CATEGORY_ID = 'category-16';
  var FEATURE_SLUG = 'rental-ledger';
  var SCHEMA_VERSION = '1';
  var MODULE_VERSION = '1.2.0';

  var PUBLICATION_MODES = {
    PRIVATE_ONLY: 'private_only',
    CONFIRM_EACH_TIME: 'confirm_each_time',
    AUTO_PUBLISH: 'auto_publish'
  };

  function getStorageKey(accountId) {
    var acct = (accountId && typeof accountId === 'string') ? accountId.replace(/[^a-zA-Z0-9_-]/g, '') : 'default';
    return 'rm_local_acct' + acct + '_cat16_sub2_v' + SCHEMA_VERSION;
  }


// ==============================================================================
// SECTION 2: MATHEMATICAL CALCULATORS & CANONICAL FINANCIAL FORMULAS
// ==============================================================================

  function calculateElectricity(prev, curr, rate) {
    var p = parseFloat(prev) || 0;
    var c = parseFloat(curr) || 0;
    var r = parseFloat(rate) || 8.0;
    var units = Math.max(0, c - p);
    var amount = Math.round(units * r * 100) / 100;
    return {
      previousReading: p,
      currentReading: c,
      unitsConsumed: units,
      ratePerUnit: r,
      electricityAmount: amount
    };
  }

  function calculateTotal(rent, electricityAmount, otherCharges) {
    var r = parseFloat(rent) || 0;
    var e = parseFloat(electricityAmount) || 0;
    var o = parseFloat(otherCharges) || 0;
    return Math.round((r + e + o) * 100) / 100;
  }

  function calculateNetPayable(rentAmount, electricityAmount, arrearsDue, advancePaid, otherCharges) {
    var gross = calculateTotal(rentAmount, electricityAmount, otherCharges) + (parseFloat(arrearsDue) || 0);
    var advance = parseFloat(advancePaid) || 0;
    var net = Math.max(0, Math.round((gross - advance) * 100) / 100);
    var remainingAdvance = Math.max(0, Math.round((advance - gross) * 100) / 100);
    return {
      grossTotal: gross,
      advancePaid: advance,
      netPayable: net,
      remainingAdvance: remainingAdvance
    };
  }

  function calculateProratedRent(monthlyRent, activeDays, totalDaysInMonth) {
    var rent = parseFloat(monthlyRent) || 0;
    var days = parseInt(activeDays, 10) || 0;
    var totalDays = parseInt(totalDaysInMonth, 10) || 30;
    if (days >= totalDays) return rent;
    return Math.round((rent / totalDays) * days * 100) / 100;
  }

  function evaluatePublicationEligibility(unit) {
    if (!unit || typeof unit !== 'object') {
      return { eligible: false, reason: 'INVALID_UNIT_CONFIG' };
    }
    var pub = unit.publicationSettings || {};
    var mode = pub.mode || PUBLICATION_MODES.CONFIRM_EACH_TIME;
    var consentActive = Boolean(pub.consentActive);
    var lifecycle = unit.lifecycleStatus || {};
    var possession = Boolean(lifecycle.physicalPossessionReturned);
    var readyToRent = Boolean(lifecycle.readyToRent);

    if (mode === PUBLICATION_MODES.PRIVATE_ONLY) {
      return { eligible: false, mode: mode, reason: 'UNIT_SET_TO_PRIVATE_ONLY' };
    }
    if (!consentActive) {
      return { eligible: false, mode: mode, reason: 'OWNER_CONSENT_INACTIVE' };
    }
    if (!possession) {
      return { eligible: false, mode: mode, reason: 'POSSESSION_NOT_RETURNED' };
    }
    if (!readyToRent) {
      return { eligible: false, mode: mode, reason: 'UNIT_NOT_READY_FOR_RENT' };
    }
    if (mode === PUBLICATION_MODES.CONFIRM_EACH_TIME) {
      return { eligible: true, mode: mode, actionRequired: 'CONFIRM_BEFORE_PUBLISH' };
    }
    if (mode === PUBLICATION_MODES.AUTO_PUBLISH) {
      return { eligible: true, mode: mode, actionRequired: 'AUTO_PUBLISH_AUTHORIZED' };
    }
    return { eligible: false, reason: 'UNKNOWN_PUBLICATION_MODE' };
  }

  // Pincode to State & District Auto-Resolver
  function resolveGeoFromPincode(pCode) {
    if (!pCode) return null;
    var pin = String(pCode).trim();
    if (pin.length < 3) return null;

    // Jharkhand (822 Palamu/Garhwa, 834 Ranchi, 831 Jamshedpur, 825-829 Coalfield/North Chotanagpur)
    if (/^822/.test(pin)) return { stateCode: 'JH', state: 'झारखंड', district: 'पलामू (डाल्टनगंज)' };
    if (/^834/.test(pin)) return { stateCode: 'JH', state: 'झारखंड', district: 'रांची' };
    if (/^831/.test(pin)) return { stateCode: 'JH', state: 'झारखंड', district: 'पूर्वी सिंहभूम (जमशेदपुर)' };
    if (/^825|^826|^827|^828|^829|^832|^833|^835/.test(pin)) return { stateCode: 'JH', state: 'झारखंड', district: 'रांची' };

    // Bihar (800 Patna, 823 Gaya, 842 Muzaffarpur, 812 Bhagalpur, etc.)
    if (/^800|^801|^803/.test(pin)) return { stateCode: 'BR', state: 'बिहार', district: 'पटना' };
    if (/^823|^824/.test(pin)) return { stateCode: 'BR', state: 'बिहार', district: 'गया' };
    if (/^80|^81|^82|^84|^85/.test(pin)) return { stateCode: 'BR', state: 'बिहार', district: 'पटना' };

    // Madhya Pradesh (452 Indore, 462 Bhopal, 45-48 MP Zones)
    if (/^452/.test(pin)) return { stateCode: 'MP', state: 'मध्य प्रदेश', district: 'इंदौर' };
    if (/^462/.test(pin)) return { stateCode: 'MP', state: 'मध्य प्रदेश', district: 'भोपाल' };
    if (/^45|^46|^47|^48/.test(pin)) return { stateCode: 'MP', state: 'मध्य प्रदेश', district: 'इंदौर' };

    // Rajasthan (324 Kota, 302 Jaipur, 30-34 Rajasthan Zones)
    if (/^324/.test(pin)) return { stateCode: 'RJ', state: 'राजस्थान', district: 'कोटा' };
    if (/^302/.test(pin)) return { stateCode: 'RJ', state: 'राजस्थान', district: 'जयपुर' };
    if (/^30|^31|^32|^33|^34/.test(pin)) return { stateCode: 'RJ', state: 'राजस्थान', district: 'जयपुर' };

    // Delhi
    if (/^11/.test(pin)) return { stateCode: 'DL', state: 'दिल्ली', district: 'नई दिल्ली' };

    // Uttar Pradesh (20-28)
    if (/^226/.test(pin)) return { stateCode: 'UP', state: 'उत्तर प्रदेश', district: 'लखनऊ' };
    if (/^201|^203/.test(pin)) return { stateCode: 'UP', state: 'उत्तर प्रदेश', district: 'गौतम बुद्ध नगर (नोएडा)' };
    if (/^20|^21|^22|^23|^24|^25|^26|^27|^28/.test(pin)) return { stateCode: 'UP', state: 'उत्तर प्रदेश', district: 'लखनऊ' };

    // Maharashtra (40-44)
    if (/^400|^401/.test(pin)) return { stateCode: 'MH', state: 'महाराष्ट्र', district: 'मुंबई' };
    if (/^411/.test(pin)) return { stateCode: 'MH', state: 'महाराष्ट्र', district: 'पुणे' };
    if (/^40|^41|^42|^43|^44/.test(pin)) return { stateCode: 'MH', state: 'महाराष्ट्र', district: 'मुंबई' };

    // Tamil Nadu (60-64)
    if (/^600/.test(pin)) return { stateCode: 'TN', state: 'तमिलनाडु', district: 'चेन्नई' };
    if (/^60|^61|^62|^63|^64/.test(pin)) return { stateCode: 'TN', state: 'तमिलनाडु', district: 'चेन्नई' };

    return null;
  }


// ==============================================================================
// SECTION 3: OFFLINE-FIRST PERSISTENCE & SOVEREIGN VOUCHER CREATION
// ==============================================================================

  function loadVouchers(accountId) {
    try {
      var raw = localStorage.getItem(getStorageKey(accountId));
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.warn('[RM-16-2] Storage read failed:', err);
      return [];
    }
  }

  function saveVouchers(accountId, vouchers) {
    try {
      localStorage.setItem(getStorageKey(accountId), JSON.stringify(vouchers));
      return true;
    } catch (err) {
      console.error('[RM-16-2] Storage write failed:', err);
      return false;
    }
  }

  function recordVoucher(accountId, record) {
    if (!record || typeof record !== 'object') return null;
    var ele = calculateElectricity(record.previousMeterReading, record.currentMeterReading, record.unitRate || 8.0);
    var net = calculateTotal(record.rentAmount, ele.electricityAmount, record.otherCharges);

    var voucher = {
      voucherId: 'VCH-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase(),
      accountRef: accountId || 'default',
      unitIdentifier: (record.unitIdentifier || 'कमरा 101').trim(),
      billingMonth: record.billingMonth || new Date().toISOString().substring(0, 7),
      rentAmount: parseFloat(record.rentAmount) || 0,
      previousMeterReading: parseFloat(record.previousMeterReading) || 0,
      currentMeterReading: parseFloat(record.currentMeterReading) || 0,
      unitsConsumed: ele.unitsConsumed,
      electricityAmount: ele.electricityAmount,
      otherCharges: parseFloat(record.otherCharges) || 0,
      netPayable: net,
      paymentStatus: record.paymentStatus || 'बाकी (Pending)',
      geoAddress: record.geoAddress || {
        state: 'झारखंड',
        district: 'पलामू (डाल्टनगंज)',
        locality: 'मुख्य बाजार',
        pincode: '822101'
      },
      timestamp: Date.now(),
      disclaimer: 'यह डिजिटल पर्ची केवल स्थानीय हिसाब के लिए है; बैंक सेटलमेंट का प्रमाण नहीं है।'
    };

    var vouchers = loadVouchers(accountId);
    vouchers.unshift(voucher);
    saveVouchers(accountId, vouchers);
    return voucher;
  }

  function formatDigitalSlipText(voucher) {
    if (!voucher) return '';
    var geoStr = (voucher.geoAddress && voucher.geoAddress.district) ? (' (' + voucher.geoAddress.district + ', ' + voucher.geoAddress.state + ')') : '';
    return [
      '📋 *किराया व सब-मीटर डिजिटल पर्ची (15-2)*',
      '━━━━━━━━━━━━━━━━━━━━━',
      '🏠 कमरा / इकाई: ' + voucher.unitIdentifier + geoStr,
      '📅 बिलिंग माह: ' + voucher.billingMonth,
      '─────────────────────',
      '💵 मासिक किराया: ₹' + voucher.rentAmount,
      '⚡ सब-मीटर बिजली: ' + voucher.unitsConsumed + ' यूनिट @ ₹8.00 = ₹' + voucher.electricityAmount,
      (voucher.otherCharges > 0 ? ('💧 अन्य शुल्क: ₹' + voucher.otherCharges + '\n') : '') +
      '━━━━━━━━━━━━━━━━━━━━━',
      '💰 *कुल देय राशि: ₹' + voucher.netPayable + '*',
      '📌 स्थिति: ' + voucher.paymentStatus,
      '━━━━━━━━━━━━━━━━━━━━━',
      '⚠️ _' + (voucher.disclaimer || 'यह डिजिटल पर्ची केवल स्थानीय हिसाब के लिए है; बैंक सेटलमेंट का प्रमाण नहीं है।') + '_'
    ].filter(Boolean).join('\n');
  }


// ==============================================================================
// SECTION 4: FLUID DOM VIEWPORT & TACTILE EVENT HANDLERS
// ==============================================================================

  function syncTo16_3Search(acct, unitLabel, rentAmount, geo) {
    try {
      var key = 'rm_local_acct' + (acct || 'default') + '_cat16_sub3_v1';
      var raw = localStorage.getItem(key);
      var searchState = raw ? JSON.parse(raw) : { publicListings: [] };
      if (!Array.isArray(searchState.publicListings)) searchState.publicListings = [];

      var cleanUnit = (unitLabel || '').trim();
      var targetTitle = cleanUnit + ' - आवासीय कमरा';
      var stateName = (geo && geo.state) ? geo.state : 'झारखंड';
      var districtName = (geo && geo.district) ? geo.district : 'पलामू (डाल्टनगंज)';
      var localityName = (geo && geo.locality) ? geo.locality : 'मुख्य बाजार';
      var pincodeVal = (geo && geo.pincode) ? geo.pincode : '822101';

      // Deduplication: यदि यह यूनिट पहले से मौजूद है तो केवल नया अपडेटेड कार्ड रखें
      searchState.publicListings = searchState.publicListings.filter(function (item) {
        return item.title !== targetTitle;
      });

      var newListing = {
        listingId: 'LST-' + (acct || 'default') + '-' + cleanUnit.replace(/\s+/g, '-').toUpperCase(),
        sourceSubFeature: '16-2',
        unitIdentifier: cleanUnit,
        title: targetTitle,
        unitType: 'single_room',
        monthlyRent: parseFloat(rentAmount) || 0,
        securityDeposit: Math.round((parseFloat(rentAmount) || 0) * 1.5),
        addressPublic: {
          country: 'IN',
          state: stateName,
          district: districtName,
          city: districtName,
          locality: localityName,
          pincode: pincodeVal
        },
        electricityBilling: {
          meterType: 'sub_meter_per_unit',
          ratePerUnit: 8.0
        },
        lifecycleVerification: {
          physicalPossessionConfirmed: true,
          readyToRentConfirmed: true,
          availableFromDate: new Date().toISOString().slice(0, 10)
        },
        landlordContactMasked: {
          name: 'सत्यापित मकान मालिक',
          maskedPhone: '+91 XXXXX00000',
          verifiedBadge: true
        },
        status: 'AVAILABLE',
        lastSyncedAt: new Date().toISOString()
      };

      searchState.publicListings.unshift(newListing);
      localStorage.setItem(key, JSON.stringify(searchState));
      return true;
    } catch (err) {
      console.warn('[RM-16-2] Sync to 16-3 failed:', err);
      return false;
    }
  }

  function renderView(container, options) {
    if (!container) return;
    options = options || {};
    var accountId = options.accountId || 'default';
    var vouchers = loadVouchers(accountId);
    var box25d = 'background:linear-gradient(180deg,#0f1c33 0%,#08101f 100%);border:1.8px solid rgba(56,189,248,0.48);border-bottom:3.5px solid rgba(14,165,233,0.78);box-shadow:0 12px 26px rgba(0,0,0,0.8);border-radius:16px;';
    var inp25d = 'width:100%;max-width:100%;box-sizing:border-box;padding:11px 12px;background:#030712;border:1.6px solid rgba(56,189,248,0.42);border-radius:10px;color:#ffffff;font-size:15.5px;font-weight:700;outline:none;display:block;';

    var html = '' +
      '<div style="box-sizing:border-box; width:100%; max-width:100%; margin:0 auto; padding:6px 2px 90px 2px; font-family:system-ui,-apple-system,sans-serif; color:#f8fafc; overflow-x:hidden;">' +

      // Top Module Header Card
      '  <div style="' + box25d + ' padding:14px; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center; box-sizing:border-box; width:100%;">' +
      '    <div style="min-width:0; flex:1;">' +
      '      <h2 style="margin:0; font-size:18.5px; font-weight:900; color:#ffffff; line-height:1.3;">🏠 15-2. किराया बहीखाता (Rental Ledger)</h2>' +
      '      <span style="font-size:14px; color:#34d399; font-weight:700; display:block; margin-top:3px;">पैन-इंडिया सब-मीटर पर्ची व सॉवरेन लेज़र (v1.2 • 2.5D)</span>' +
      '    </div>' +
      '    <span style="background:#064e3b; color:#6ee7b7; border:1.5px solid #10b981; font-size:13px; padding:4px 10px; border-radius:999px; font-weight:800; white-space:nowrap; margin-left:8px;">● सक्रिय</span>' +
      '  </div>' +

      // Publication Mode Selector
      '  <div style="' + box25d + ' padding:14px; margin-bottom:14px; box-sizing:border-box; width:100%;">' +
      '    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; gap:6px; flex-wrap:wrap;">' +
      '      <span style="font-size:15px; font-weight:800; color:#38bdf8;">📢 पब्लिकेशन मोड (15-3 खोज जुड़ाव):</span>' +
      '      <span style="font-size:13px; color:#cbd5e1; font-weight:700;">मकान मालिक सहमति</span>' +
      '    </div>' +
      '    <select id="rm-cat16-pub-mode" style="' + inp25d + ' margin-bottom:10px;">' +
      '      <option value="auto_publish" selected>⚡ Auto-Publish (खाली होते ही स्वतः लाइव)</option>' +
      '      <option value="confirm_each_time">🔔 हर बार पुष्टि (Confirm Each Time)</option>' +
      '      <option value="private_only">🔒 केवल निजी (Private Ledger Only)</option>' +
      '    </select>' +
      '    <div style="display:flex; gap:16px; font-size:14.5px; font-weight:700; color:#f1f5f9; flex-wrap:wrap;">' +
      '      <label style="display:flex; align-items:center; gap:6px; cursor:pointer;">' +
      '        <input type="checkbox" id="rm-cat16-possession" checked style="width:18px;height:18px;" /> चाबी / कब्जा प्राप्त' +
      '      </label>' +
      '      <label style="display:flex; align-items:center; gap:6px; cursor:pointer;">' +
      '        <input type="checkbox" id="rm-cat16-ready" checked style="width:18px;height:18px;" /> किराये के लिए तैयार' +
      '      </label>' +
      '    </div>' +
      '  </div>' +

      // Form Card
      '  <div style="' + box25d + ' padding:15px; margin-bottom:16px; box-sizing:border-box; width:100%;">' +
      '    <h3 style="margin:0 0 12px 0; font-size:17px; font-weight:900; color:#ffffff;">📝 नया किराया व सब-मीटर पर्ची दर्ज करें</h3>' +

      '    <div style="display:flex; flex-direction:column; gap:12px; width:100%; box-sizing:border-box;">' +
      '      <div style="width:100%; box-sizing:border-box;">' +
      '        <label style="display:block; font-size:14.5px; color:#e2e8f0; margin-bottom:5px; font-weight:800;">कमरा / फ्लैट संख्या</label>' +
      '        <input type="text" id="rm-cat16-unit" placeholder="उदा. 202 या फ्लैट 2B" style="' + inp25d + '" />' +
      '      </div>' +

      '      <div style="width:100%; box-sizing:border-box;">' +
      '        <label style="display:block; font-size:14.5px; color:#e2e8f0; margin-bottom:5px; font-weight:800;">मासिक किराया (₹)</label>' +
      '        <input type="number" id="rm-cat16-rent" placeholder="₹ 7000" style="' + inp25d + '" />' +
      '      </div>' +

      // Pan-India Geo Hierarchy Cascading Selectors with Pincode-First Hook
      '      <div style="border:1.6px solid rgba(16,185,129,0.45); background:#040914; border-radius:14px; padding:12px; box-sizing:border-box;">' +
      '        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; gap:6px; flex-wrap:wrap;">' +
      '          <span style="font-size:14.5px; font-weight:800; color:#38bdf8;">📍 आवास का भौगोलिक स्थान (Pan-India)</span>' +
      '          <span id="rm-geo-hint" style="font-size:13px; color:#34d399; font-weight:800;">पिनकोड से स्वतः चयन</span>' +
      '        </div>' +
      '        <div style="display:grid; grid-template-columns:1fr 1.3fr; gap:8px; margin-bottom:10px;">' +
      '          <div>' +
      '            <label style="display:block; font-size:13.5px; color:#cbd5e1; margin-bottom:4px; font-weight:800;">पिनकोड (6-अंक)</label>' +
      '            <input type="number" id="rm-cat16-pincode" placeholder="उदा. 822101" style="' + inp25d + ' border-color:#10b981;" />' +
      '          </div>' +
      '          <div>' +
      '            <label style="display:block; font-size:13.5px; color:#cbd5e1; margin-bottom:4px; font-weight:800;">मोहल्ला / इलाका</label>' +
      '            <input type="text" id="rm-cat16-locality" placeholder="उदा. लालपुर / विजयनगर" style="' + inp25d + '" />' +
      '          </div>' +
      '        </div>' +
      '        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">' +
      '          <div>' +
      '            <label style="display:block; font-size:13.5px; color:#cbd5e1; margin-bottom:4px; font-weight:800;">राज्य (State)</label>' +
      '            <select id="rm-cat16-state" style="' + inp25d + ' font-size:14px; padding:10px 8px;"></select>' +
      '          </div>' +
      '          <div>' +
      '            <label style="display:block; font-size:13.5px; color:#cbd5e1; margin-bottom:4px; font-weight:800;">जिला (District)</label>' +
      '            <select id="rm-cat16-district" style="' + inp25d + ' font-size:14px; padding:10px 8px;"></select>' +
      '          </div>' +
      '        </div>' +
      '      </div>' +

      '      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; width:100%; box-sizing:border-box;">' +
      '        <div style="min-width:0; box-sizing:border-box;">' +
      '          <label style="display:block; font-size:14px; color:#e2e8f0; margin-bottom:5px; font-weight:800;">पिछली रीडिंग</label>' +
      '          <input type="number" id="rm-cat16-prev-meter" placeholder="Unit" style="' + inp25d + '" />' +
      '        </div>' +
      '        <div style="min-width:0; box-sizing:border-box;">' +
      '          <label style="display:block; font-size:14px; color:#e2e8f0; margin-bottom:5px; font-weight:800;">वर्तमान रीडिंग</label>' +
      '          <input type="number" id="rm-cat16-curr-meter" placeholder="Unit" style="' + inp25d + '" />' +
      '        </div>' +
      '      </div>' +

      '      <button type="button" id="rm-cat16-btn-add" style="margin-top:4px; width:100%; min-height:50px; background:linear-gradient(180deg,#10b981 0%,#059669 100%); color:#022c22; border:1.5px solid #6ee7b7; border-bottom:3.5px solid #047857; border-radius:12px; font-weight:900; font-size:16px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px; box-sizing:border-box; box-shadow:0 8px 20px rgba(16,185,129,0.35);">' +
      '        <span>+ रसीद बनाएं व हिसाब जोड़ें</span>' +
      '      </button>' +
      '    </div>' +
      '  </div>' +

      // Recent Records Section
      '  <div style="box-sizing:border-box; width:100%;">' +
      '    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding:0 4px;">' +
      '      <h3 style="margin:0; font-size:16px; font-weight:900; color:#38bdf8; text-transform:uppercase;">🧾 हालिया रसीदें (' + vouchers.length + ')</h3>' +
      '      <span style="font-size:13.5px; color:#34d399; font-weight:700;">● ऑफ़लाइन सुरक्षित</span>' +
      '    </div>' +
      '    <div id="rm-cat16-list" style="display:flex; flex-direction:column; gap:10px; width:100%; box-sizing:border-box;">';

    if (vouchers.length === 0) {
      html += '<div style="' + box25d + ' padding:18px; text-align:center; color:#cbd5e1; font-size:15px; font-weight:700; box-sizing:border-box;">कोई रसीद दर्ज नहीं है। ऊपर दिए फ़ॉर्म से पर्ची जोड़ें।</div>';
    } else {
      for (var i = 0; i < vouchers.length; i++) {
        var v = vouchers[i];
        var geoLabel = (v.geoAddress && v.geoAddress.district) ? (' • ' + v.geoAddress.district) : '';
        html += '' +
          '<div style="' + box25d + ' padding:13px 14px; display:flex; justify-content:space-between; align-items:center; gap:10px; box-sizing:border-box; width:100%;">' +
          '  <div style="min-width:0; flex:1; padding-right:8px;">' +
          '    <div style="font-size:16.5px; font-weight:900; color:#ffffff; line-height:1.35;">' + v.unitIdentifier + '<span style="font-size:13.5px; color:#38bdf8; font-weight:700;">' + geoLabel + '</span></div>' +
          '    <div style="font-size:14px; color:#e2e8f0; font-weight:700; margin-top:4px;">' +
          '      किराया: ₹' + v.rentAmount + ' • बिजली: ' + v.unitsConsumed + ' यूनिट (₹' + v.electricityAmount + ')' +
          '    </div>' +
          '    <div style="font-size:13px; color:#94a3b8; font-weight:600; margin-top:3px;">📅 ' + v.billingMonth + '</div>' +
          '  </div>' +
          '  <div style="text-align:right; flex-shrink:0; display:flex; flex-direction:column; align-items:flex-end; gap:5px;">' +
          '    <div style="font-size:18px; font-weight:900; color:#34d399;">₹' + v.netPayable + '</div>' +
          '    <span style="font-size:12px; color:#fbbf24; font-weight:800; background:#451a03; border:1px solid #78350f; padding:2px 7px; border-radius:6px; display:inline-block;">' + v.paymentStatus + '</span>' +
          '    <button type="button" data-rm-wa-idx="' + i + '" style="background:#064e3b; color:#a7f3d0; border:1.5px solid #10b981; padding:4px 9px; border-radius:7px; font-size:12px; font-weight:800; cursor:pointer;">📲 पर्ची भेजें</button>' +
          '  </div>' +
          '</div>';
      }
    }

    html += '</div></div></div>';
    container.innerHTML = html;

    // Populate Pan-India States & Districts
    var stateSelect = container.querySelector('#rm-cat16-state');
    var districtSelect = container.querySelector('#rm-cat16-district');
    var pincodeInput = container.querySelector('#rm-cat16-pincode');
    var geoHint = container.querySelector('#rm-geo-hint');

    function populateDistricts(selectedStateCode, targetDistrictName) {
      if (!districtSelect) return;
      districtSelect.innerHTML = '';
      if (!window.RM_INDIA_GEO || typeof window.RM_INDIA_GEO.getDistrictsByState !== 'function') {
        districtSelect.innerHTML = '<option value="पलामू (डाल्टनगंज)">पलामू (डाल्टनगंज)</option><option value="इंदौर">इंदौर</option>';
        return;
      }
      var distList = window.RM_INDIA_GEO.getDistrictsByState(selectedStateCode);
      var matchedIdx = 0;
      distList.forEach(function (d, idx) {
        var opt = document.createElement('option');
        var val = d.nameHi || d.name;
        opt.value = val;
        opt.textContent = val + ' (' + d.name + ')';
        if (targetDistrictName && (val.indexOf(targetDistrictName) !== -1 || targetDistrictName.indexOf(val) !== -1)) {
          matchedIdx = idx;
        }
        districtSelect.appendChild(opt);
      });
      if (districtSelect.options.length > matchedIdx) {
        districtSelect.selectedIndex = matchedIdx;
      }
    }

    if (stateSelect) {
      stateSelect.innerHTML = '';
      if (window.RM_INDIA_GEO && Array.isArray(window.RM_INDIA_GEO.states)) {
        window.RM_INDIA_GEO.states.forEach(function (s) {
          var opt = document.createElement('option');
          opt.value = s.code;
          opt.textContent = (s.nameHi || s.name) + ' (' + s.name + ')';
          if (s.code === 'JH') opt.selected = true; // डिफ़ॉल्ट झारखंड
          stateSelect.appendChild(opt);
        });
        populateDistricts('JH', 'पलामू (डाल्टनगंज)');
      } else {
        stateSelect.innerHTML = '<option value="JH">झारखंड</option><option value="MP">मध्य प्रदेश</option>';
        populateDistricts('JH', 'पलामू (डाल्टनगंज)');
      }

      stateSelect.addEventListener('change', function () {
        populateDistricts(this.value);
      });
    }

    // Pincode Auto-Fill Event Listener
    if (pincodeInput) {
      pincodeInput.addEventListener('input', function () {
        var pCode = String(this.value || '').trim();
        if (pCode.length === 6) {
          var resolved = resolveGeoFromPincode(pCode);
          if (resolved) {
            if (stateSelect) {
              stateSelect.value = resolved.stateCode;
              populateDistricts(resolved.stateCode, resolved.district);
            }
            if (geoHint) {
              geoHint.textContent = '✓ ' + resolved.state + ' - ' + resolved.district;
              geoHint.style.color = '#34d399';
            }
          }
        } else if (pCode.length < 6 && geoHint) {
          geoHint.textContent = 'पिनकोड से स्वतः चयन';
          geoHint.style.color = '#10b981';
        }
      });
    }

    var waBtns = container.querySelectorAll('[data-rm-wa-idx]');
    for (var w = 0; w < waBtns.length; w++) {
      waBtns[w].addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-rm-wa-idx'), 10);
        var slipVoucher = vouchers[idx];
        if (!slipVoucher) return;
        var slipTxt = formatDigitalSlipText(slipVoucher);
        window.open('https://wa.me/?text=' + encodeURIComponent(slipTxt), '_blank');
      });
    }

    var btnAdd = container.querySelector('#rm-cat16-btn-add');
    if (btnAdd) {
      btnAdd.addEventListener('click', function () {
        var unitVal = (container.querySelector('#rm-cat16-unit') || {}).value;
        var rentVal = (container.querySelector('#rm-cat16-rent') || {}).value;
        var prevVal = (container.querySelector('#rm-cat16-prev-meter') || {}).value;
        var currVal = (container.querySelector('#rm-cat16-curr-meter') || {}).value;
        var pubMode = (container.querySelector('#rm-cat16-pub-mode') || {}).value || 'auto_publish';
        var possession = Boolean((container.querySelector('#rm-cat16-possession') || {}).checked);
        var ready = Boolean((container.querySelector('#rm-cat16-ready') || {}).checked);

        var selStateEl = container.querySelector('#rm-cat16-state');
        var selectedStateText = selStateEl && selStateEl.options[selStateEl.selectedIndex] ? selStateEl.options[selStateEl.selectedIndex].text.split(' (')[0] : 'झारखंड';
        var selDistrictEl = container.querySelector('#rm-cat16-district');
        var selectedDistrictText = selDistrictEl && selDistrictEl.options[selDistrictEl.selectedIndex] ? selDistrictEl.options[selDistrictEl.selectedIndex].value : 'पलामू (डाल्टनगंज)';
        var localityVal = (container.querySelector('#rm-cat16-locality') || {}).value || 'मुख्य बाजार';
        var pincodeVal = (container.querySelector('#rm-cat16-pincode') || {}).value || '822101';

        if (!unitVal || !rentVal) {
          alert('कृपया कमरा/फ्लैट पहचान और मासिक किराया अवश्य दर्ज करें।');
          return;
        }

        var geoPayload = {
          state: selectedStateText,
          district: selectedDistrictText,
          locality: localityVal,
          pincode: pincodeVal
        };

        recordVoucher(accountId, {
          unitIdentifier: unitVal,
          rentAmount: rentVal,
          previousMeterReading: prevVal,
          currentMeterReading: currVal,
          unitRate: 8.0,
          geoAddress: geoPayload
        });

        if (pubMode === 'auto_publish') {
          if (possession && ready) {
            syncTo16_3Search(accountId, unitVal, rentVal, geoPayload);
            alert('✅ पर्ची सुरक्षित हुई और कमरा 15-3 खोज में (' + selectedDistrictText + ') के साथ प्रकाशित हुआ!');
          } else {
            alert('⚠️ पर्ची सुरक्षित हुई। कमरा 15-3 में प्रकाशित नहीं हुआ क्योंकि कब्जा या तैयारी अभी अधूरी है।');
          }
        } else if (pubMode === 'confirm_each_time') {
          if (possession && ready) {
            var confirmPublish = window.confirm('क्या आप ' + unitVal + ' को ' + selectedDistrictText + ' में 15-3 किराये की खोज में प्रकाशित करना चाहते हैं?');
            if (confirmPublish) {
              syncTo16_3Search(accountId, unitVal, rentVal, geoPayload);
              alert('✅ कमरा 15-3 किराये की खोज में सफलतापूर्वक प्रकाशित किया गया।');
            }
          }
        }

        renderView(container, options);
      });
    }
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
    publicationModes: PUBLICATION_MODES,
    getStorageKey: getStorageKey,
    calculateElectricity: calculateElectricity,
    calculateTotal: calculateTotal,
    calculateNetPayable: calculateNetPayable,
    calculateProratedRent: calculateProratedRent,
    evaluatePublicationEligibility: evaluatePublicationEligibility,
    resolveGeoFromPincode: resolveGeoFromPincode,
    loadVouchers: loadVouchers,
    saveVouchers: saveVouchers,
    recordVoucher: recordVoucher,
    formatDigitalSlipText: formatDigitalSlipText,
    syncTo16_3Search: syncTo16_3Search,
    renderView: renderView,
    mount: function (container, options) {
      try {
        renderView(container, options);
      } catch (err) {
        console.error('[RM-16-2] Mount error:', err);
        if (container) {
          container.innerHTML = '<div style="color:#ef4444; padding:16px;">किराया बहीखाता लोड करने में समस्या हुई।</div>';
        }
      }
    },
    unmount: function (container) {
      if (container) container.innerHTML = '';
    }
  };
});
