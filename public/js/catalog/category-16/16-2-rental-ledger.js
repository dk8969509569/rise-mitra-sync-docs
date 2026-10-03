/**
 * RISE MITRA — CATEGORY-16 MICRO-APP ENGINE
 * SUB-FEATURE   : 16-2 (Rental Ledger & Sub-Meter P2P Engine)
 * SPECIFICATION : 14_04__EXT_004_MODULAR_ARCHITECTURE_MOBILE_SAFETY_RECOVERY_SPEC
 * GOVERNANCE    : GATE-16.7 | DEC-RM-SOV-ARCH-20260930-MODULAR-ZEL-001
 * REPO TARGET   : public/js/catalog/category-16/16-2-rental-ledger.js
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
    root.RM_Cat16_Sub2_RentalLedger = lib;
    root.RiseMitraCatalog_16_2 = lib;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SUB_FEATURE_ID = '16-2';
  var CATEGORY_ID = 'category-16';
  var FEATURE_SLUG = 'rental-ledger';
  var SCHEMA_VERSION = '1';
  var MODULE_VERSION = '1.1.1';

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
    if (/^822/.test(pin)) {
      return { stateCode: 'JH', state: 'झारखंड', district: 'पलामू (डाल्टनगंज)' };
    }
    if (/^834/.test(pin)) {
      return { stateCode: 'JH', state: 'झारखंड', district: 'रांची' };
    }
    if (/^831/.test(pin)) {
      return { stateCode: 'JH', state: 'झारखंड', district: 'पूर्वी सिंहभूम (जमशेदपुर)' };
    }
    if (/^825|^826|^827|^828|^829|^832|^833|^835/.test(pin)) {
      return { stateCode: 'JH', state: 'झारखंड', district: 'रांची' };
    }

    // Bihar (800 Patna, 823 Gaya, 842 Muzaffarpur, 812 Bhagalpur, etc.)
    if (/^800|^801|^803/.test(pin)) {
      return { stateCode: 'BR', state: 'बिहार', district: 'पटना' };
    }
    if (/^823|^824/.test(pin)) {
      return { stateCode: 'BR', state: 'बिहार', district: 'गया' };
    }
    if (/^80|^81|^82|^84|^85/.test(pin)) {
      return { stateCode: 'BR', state: 'बिहार', district: 'पटना' };
    }

    // Madhya Pradesh (452 Indore, 462 Bhopal, 45-48 MP Zones)
    if (/^452/.test(pin)) {
      return { stateCode: 'MP', state: 'मध्य प्रदेश', district: 'इंदौर' };
    }
    if (/^462/.test(pin)) {
      return { stateCode: 'MP', state: 'मध्य प्रदेश', district: 'भोपाल' };
    }
    if (/^45|^46|^47|^48/.test(pin)) {
      return { stateCode: 'MP', state: 'मध्य प्रदेश', district: 'इंदौर' };
    }

    // Rajasthan (324 Kota, 302 Jaipur, 30-34 Rajasthan Zones)
    if (/^324/.test(pin)) {
      return { stateCode: 'RJ', state: 'राजस्थान', district: 'कोटा' };
    }
    if (/^302/.test(pin)) {
      return { stateCode: 'RJ', state: 'राजस्थान', district: 'जयपुर' };
    }
    if (/^30|^31|^32|^33|^34/.test(pin)) {
      return { stateCode: 'RJ', state: 'राजस्थान', district: 'जयपुर' };
    }

    // Delhi
    if (/^11/.test(pin)) {
      return { stateCode: 'DL', state: 'दिल्ली', district: 'नई दिल्ली' };
    }

    // Uttar Pradesh (20-28)
    if (/^226/.test(pin)) {
      return { stateCode: 'UP', state: 'उत्तर प्रदेश', district: 'लखनऊ' };
    }
    if (/^201|^203/.test(pin)) {
      return { stateCode: 'UP', state: 'उत्तर प्रदेश', district: 'गौतम बुद्ध नगर (नोएडा)' };
    }
    if (/^20|^21|^22|^23|^24|^25|^26|^27|^28/.test(pin)) {
      return { stateCode: 'UP', state: 'उत्तर प्रदेश', district: 'लखनऊ' };
    }

    // Maharashtra (40-44)
    if (/^400|^401/.test(pin)) {
      return { stateCode: 'MH', state: 'महाराष्ट्र', district: 'मुंबई' };
    }
    if (/^411/.test(pin)) {
      return { stateCode: 'MH', state: 'महाराष्ट्र', district: 'पुणे' };
    }
    if (/^40|^41|^42|^43|^44/.test(pin)) {
      return { stateCode: 'MH', state: 'महाराष्ट्र', district: 'मुंबई' };
    }

    // Tamil Nadu (60-64)
    if (/^600/.test(pin)) {
      return { stateCode: 'TN', state: 'तमिलनाडु', district: 'चेन्नई' };
    }
    if (/^60|^61|^62|^63|^64/.test(pin)) {
      return { stateCode: 'TN', state: 'तमिलनाडु', district: 'चेन्नई' };
    }

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
      '📋 *किराया व सब-मीटर डिजिटल पर्ची*',
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

    var html = '' +
      '<div style="box-sizing:border-box; width:100%; max-width:100%; margin:0 auto; padding:6px 2px; font-family:system-ui,-apple-system,sans-serif; color:#f8fafc; overflow-x:hidden;">' +

      // Top Module Header Card
      '  <div style="background:#0f172a; border:1px solid #1e293b; border-radius:14px; padding:12px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; box-sizing:border-box; width:100%;">' +
      '    <div style="min-width:0; flex:1;">' +
      '      <h2 style="margin:0; font-size:1.05rem; font-weight:800; color:#ffffff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">🏠 16-2. किराया बहीखाता</h2>' +
      '      <span style="font-size:0.72rem; color:#10b981; font-weight:600; display:block;">पैन-इंडिया सब-मीटर पर्ची व सॉवरेन लेज़र (v1.1)</span>' +
      '    </div>' +
      '    <span style="background:#064e3b; color:#34d399; border:1px solid #059669; font-size:0.68rem; padding:3px 8px; border-radius:999px; font-weight:700; white-space:nowrap; margin-left:8px;">सक्रिय</span>' +
      '  </div>' +

      // Publication Mode Selector
      '  <div style="background:#0f172a; border:1px solid #1e293b; border-radius:14px; padding:12px 14px; margin-bottom:12px; box-sizing:border-box; width:100%;">' +
      '    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">' +
      '      <span style="font-size:0.75rem; font-weight:700; color:#38bdf8;">📢 पब्लिकेशन मोड (16-3 खोज जुड़ाव):</span>' +
      '      <span style="font-size:0.68rem; color:#94a3b8;">मकान मालिक सहमति</span>' +
      '    </div>' +
      '    <select id="rm-cat16-pub-mode" style="width:100%; box-sizing:border-box; padding:8px 10px; background:#030712; border:1px solid #334155; border-radius:8px; color:#ffffff; font-size:0.85rem; outline:none; margin-bottom:8px;">' +
      '      <option value="auto_publish" selected>⚡ Auto-Publish (खाली होते ही स्वतः सार्वजनिक)</option>' +
      '      <option value="confirm_each_time">🔔 हर बार पुष्टि (Confirm Each Time)</option>' +
      '      <option value="private_only">🔒 केवल निजी (Private Ledger Only)</option>' +
      '    </select>' +
      '    <div style="display:flex; gap:12px; font-size:0.72rem; color:#cbd5e1;">' +
      '      <label style="display:flex; align-items:center; gap:4px; cursor:pointer;">' +
      '        <input type="checkbox" id="rm-cat16-possession" checked /> चाबी / कब्जा प्राप्त' +
      '      </label>' +
      '      <label style="display:flex; align-items:center; gap:4px; cursor:pointer;">' +
      '        <input type="checkbox" id="rm-cat16-ready" checked /> किराये के लिए तैयार' +
      '      </label>' +
      '    </div>' +
      '  </div>' +

      // Form Card
      '  <div style="background:#0f172a; border:1px solid #1e293b; border-radius:14px; padding:14px; margin-bottom:14px; box-sizing:border-box; width:100%;">' +
      '    <h3 style="margin:0 0 12px 0; font-size:0.9rem; font-weight:700; color:#e2e8f0;">नया किराया व सब-मीटर पर्ची दर्ज करें</h3>' +

      '    <div style="display:flex; flex-direction:column; gap:10px; width:100%; box-sizing:border-box;">' +
      '      <div style="width:100%; box-sizing:border-box;">' +
      '        <label style="display:block; font-size:0.72rem; color:#94a3b8; margin-bottom:4px; font-weight:600;">कमरा / फ्लैट संख्या</label>' +
      '        <input type="text" id="rm-cat16-unit" placeholder="उदा. 202 या फ्लैट 2B" style="width:100%; max-width:100%; box-sizing:border-box; padding:10px 12px; background:#030712; border:1px solid #334155; border-radius:8px; color:#ffffff; font-size:0.9rem; outline:none; display:block;" />' +
      '      </div>' +

      '      <div style="width:100%; box-sizing:border-box;">' +
      '        <label style="display:block; font-size:0.72rem; color:#94a3b8; margin-bottom:4px; font-weight:600;">मासिक किराया (₹)</label>' +
      '        <input type="number" id="rm-cat16-rent" placeholder="₹ 7000" style="width:100%; max-width:100%; box-sizing:border-box; padding:10px 12px; background:#030712; border:1px solid #334155; border-radius:8px; color:#ffffff; font-size:0.9rem; outline:none; display:block;" />' +
      '      </div>' +

      // Pan-India Geo Hierarchy Cascading Selectors with Pincode-First Hook
      '      <div style="border:1px solid #1e293b; background:#030712; border-radius:10px; padding:10px; box-sizing:border-box;">' +
      '        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">' +
      '          <span style="font-size:0.72rem; font-weight:700; color:#38bdf8;">📍 आवास का भौगोलिक स्थान (Pan-India)</span>' +
      '          <span id="rm-geo-hint" style="font-size:0.65rem; color:#10b981; font-weight:600;">पिनकोड से स्वतः चयन</span>' +
      '        </div>' +
      '        <div style="display:grid; grid-template-columns:1fr 1.5fr; gap:8px; margin-bottom:8px;">' +
      '          <div>' +
      '            <label style="display:block; font-size:0.68rem; color:#94a3b8; margin-bottom:3px; font-weight:700;">पिनकोड (6-अंक)</label>' +
      '            <input type="number" id="rm-cat16-pincode" placeholder="उदा. 822101" style="width:100%; box-sizing:border-box; padding:8px; background:#0b0f19; border:1px solid #10b981; border-radius:6px; color:#ffffff; font-size:0.85rem; font-weight:800; outline:none;" />' +
      '          </div>' +
      '          <div>' +
      '            <label style="display:block; font-size:0.68rem; color:#94a3b8; margin-bottom:3px;">मोहल्ला / इलाका</label>' +
      '            <input type="text" id="rm-cat16-locality" placeholder="उदा. लालपुर / विजयनगर" style="width:100%; box-sizing:border-box; padding:8px; background:#0b0f19; border:1px solid #334155; border-radius:6px; color:#ffffff; font-size:0.78rem; outline:none;" />' +
      '          </div>' +
      '        </div>' +
      '        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">' +
      '          <div>' +
      '            <label style="display:block; font-size:0.68rem; color:#94a3b8; margin-bottom:3px;">राज्य (State)</label>' +
      '            <select id="rm-cat16-state" style="width:100%; box-sizing:border-box; padding:8px; background:#0b0f19; border:1px solid #334155; border-radius:6px; color:#ffffff; font-size:0.78rem; outline:none;"></select>' +
      '          </div>' +
      '          <div>' +
      '            <label style="display:block; font-size:0.68rem; color:#94a3b8; margin-bottom:3px;">जिला (District)</label>' +
      '            <select id="rm-cat16-district" style="width:100%; box-sizing:border-box; padding:8px; background:#0b0f19; border:1px solid #334155; border-radius:6px; color:#ffffff; font-size:0.78rem; outline:none;"></select>' +
      '          </div>' +
      '        </div>' +
      '      </div>' +

      '      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; width:100%; box-sizing:border-box;">' +
      '        <div style="min-width:0; box-sizing:border-box;">' +
      '          <label style="display:block; font-size:0.72rem; color:#94a3b8; margin-bottom:4px; font-weight:600;">पिछली रीडिंग</label>' +
      '          <input type="number" id="rm-cat16-prev-meter" placeholder="Unit" style="width:100%; max-width:100%; box-sizing:border-box; padding:10px 8px; background:#030712; border:1px solid #334155; border-radius:8px; color:#ffffff; font-size:0.9rem; outline:none; display:block;" />' +
      '        </div>' +
      '        <div style="min-width:0; box-sizing:border-box;">' +
      '          <label style="display:block; font-size:0.72rem; color:#94a3b8; margin-bottom:4px; font-weight:600;">वर्तमान रीडिंग</label>' +
      '          <input type="number" id="rm-cat16-curr-meter" placeholder="Unit" style="width:100%; max-width:100%; box-sizing:border-box; padding:10px 8px; background:#030712; border:1px solid #334155; border-radius:8px; color:#ffffff; font-size:0.9rem; outline:none; display:block;" />' +
      '        </div>' +
      '      </div>' +

      '      <button id="rm-cat16-btn-add" style="margin-top:4px; width:100%; min-height:46px; background:#10b981; color:#022c22; border:none; border-radius:10px; font-weight:800; font-size:0.9rem; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px; box-sizing:border-box;">' +
      '        <span>+ रसीद बनाएं व हिसाब जोड़ें</span>' +
      '      </button>' +
      '    </div>' +
      '  </div>' +

      // Recent Records Section
      '  <div style="box-sizing:border-box; width:100%;">' +
      '    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding:0 2px;">' +
      '      <h3 style="margin:0; font-size:0.85rem; font-weight:700; color:#94a3b8; text-transform:uppercase;">हालिया रसीदें (' + vouchers.length + ')</h3>' +
      '      <span style="font-size:0.7rem; color:#64748b;">ऑफ़लाइन सुरक्षित</span>' +
      '    </div>' +
      '    <div id="rm-cat16-list" style="display:flex; flex-direction:column; gap:8px; width:100%; box-sizing:border-box;">';

    if (vouchers.length === 0) {
      html += '<div style="background:#0f172a; border:1px dashed #334155; border-radius:10px; padding:16px; text-align:center; color:#64748b; font-size:0.8rem; box-sizing:border-box;">कोई रसीद दर्ज नहीं है। ऊपर दिए फ़ॉर्म से पर्ची जोड़ें।</div>';
    } else {
      for (var i = 0; i < vouchers.length; i++) {
        var v = vouchers[i];
        var geoLabel = (v.geoAddress && v.geoAddress.district) ? (' • ' + v.geoAddress.district) : '';
        html += '' +
          '<div style="background:#0f172a; border:1px solid #1e293b; border-radius:10px; padding:10px 12px; display:flex; justify-content:space-between; align-items:center; box-sizing:border-box; width:100%;">' +
          '  <div style="min-width:0; flex:1; padding-right:8px;">' +
          '    <div style="font-size:0.9rem; font-weight:700; color:#f8fafc; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">' + v.unitIdentifier + '<span style="font-size:0.7rem; color:#38bdf8; font-weight:normal;">' + geoLabel + '</span></div>' +
          '    <div style="font-size:0.72rem; color:#94a3b8; margin-top:2px;">' +
          '      किराया: ₹' + v.rentAmount + ' • बिजली: ' + v.unitsConsumed + ' यूनिट (₹' + v.electricityAmount + ')' +
          '    </div>' +
          '    <div style="font-size:0.68rem; color:#64748b; margin-top:2px;">' + v.billingMonth + '</div>' +
          '  </div>' +
          '  <div style="text-align:right; flex-shrink:0;">' +
          '    <div style="font-size:1rem; font-weight:900; color:#34d399;">₹' + v.netPayable + '</div>' +
          '    <span style="font-size:0.65rem; color:#fbbf24; font-weight:700; background:#451a03; border:1px solid #78350f; padding:2px 5px; border-radius:4px; display:inline-block; margin-top:2px;">' + v.paymentStatus + '</span>' +
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
        var selectedStateText = selStateEl ? selStateEl.options[selStateEl.selectedIndex].text.split(' (')[0] : 'झारखंड';
        var selDistrictEl = container.querySelector('#rm-cat16-district');
        var selectedDistrictText = selDistrictEl ? selDistrictEl.options[selDistrictEl.selectedIndex].value : 'पलामू (डाल्टनगंज)';
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
            alert('✅ पर्ची सुरक्षित हुई और कमरा 16-3 खोज में (' + selectedDistrictText + ') के साथ प्रकाशित हुआ!');
          } else {
            alert('⚠️ पर्ची सुरक्षित हुई। कमरा 16-3 में प्रकाशित नहीं हुआ क्योंकि कब्जा या तैयारी अभी अधूरी है।');
          }
        } else if (pubMode === 'confirm_each_time') {
          if (possession && ready) {
            var confirmPublish = window.confirm('क्या आप ' + unitVal + ' को ' + selectedDistrictText + ' में 16-3 किराये की खोज में प्रकाशित करना चाहते हैं?');
            if (confirmPublish) {
              syncTo16_3Search(accountId, unitVal, rentVal, geoPayload);
              alert('✅ कमरा 16-3 किराये की खोज में सफलतापूर्वक प्रकाशित किया गया।');
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
