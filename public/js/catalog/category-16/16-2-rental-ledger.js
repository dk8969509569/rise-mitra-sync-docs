/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RISE MITRA — CATEGORY-15 MICRO-APP ENGINE (15-2 Root Engine Part-2 v83)
 *   - SPECIFICATION  : 14_04__EXT_004_MODULAR_ARCHITECTURE_MOBILE_SAFETY_RECOVERY_SPEC
 *   - REPO TARGET    : public/js/catalog/category-16/16-2-rental-ledger.js
 *   - SURFACE TARGET : SURFACE-A ONLY (15-2 Rental Ledger & Sub-Meter P2P Root Controller)
 *   - HOST BINDING   : Surface-A (Mounted into #rm-module-container via SIVME Adapter / Router)
 *   - SIZE BUDGET    : <= 225 Logical Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : GATE-16.7 | DEC-RM-SOV-ARCH-20260930-MODULAR-ZEL-001 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/catalog/category-16/16-2-rental-ledger.js (Part-2 Root Engine: Math, Storage & DOM Events)
 *   - public/js/catalog/category-15/15-2-rental-template.js (Part-1 Template: Pincode Geo, Slip & 2.5D HTML)
 *   - public/js/catalog/category-16/16-3-rental-search.js (15-3 Companion: 0% Brokerage Room Search)
 *   - public/js/data/* (Pan-India Master States & Districts Dataset — `window.RM_INDIA_GEO`)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, ROOT-ENGINE-FIRST & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Sub-meter electricity & rent math, offline voucher persistence,
 *                              15-3 (16-3) auto-publish sync, Part-1 template auto-loader,
 *                              and scoped DOM event binding inside `renderView`.
 *   - ALLOWED ON SURFACE-B   : NONE (Surface-B Owner Console is strictly isolated).
 *   - ROOT-ENGINE-FIRST RULE : Delegates 2.5D HTML & pincode regex to `category-15/15-2-rental-template.js`
 *                              while keeping all 19 UMD exports 100% intact here.
 *   - FORBIDDEN IN THIS FILE : Changing canonical storage keys or breaking UMD global exports.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_Cat16_Sub2_RentalLedger, window.RiseMitraCatalog_16_2,
 *                           window.RM_Cat15_Sub2_RentalLedger, window.RiseMitraCatalog_15_2,
 *                           localStorage['rm_local_acct<id>_cat16_sub2_v1'],
 *                           localStorage['rm_local_acct<id>_cat16_sub3_v1']
 *   - CALLS EXTERNAL APIs : window.RM_Cat15_Sub2_Template, window.RM_Cat16_Sub2_Template,
 *                           window.RM_INDIA_GEO
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #rm-cat16-pub-mode, #rm-cat16-possession, #rm-cat16-ready,
 *                           #rm-cat16-unit, #rm-cat16-rent, #rm-cat16-pincode, #rm-cat16-locality,
 *                           #rm-cat16-state, #rm-cat16-district, #rm-cat16-prev-meter,
 *                           #rm-cat16-curr-meter, #rm-cat16-btn-add, #rm-cat16-list, [data-rm-wa-idx]
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (NEVER TOUCHED)
 *   - WORLD-CLASS 2.5D UI : Renders Part-1 2.5D template and binds 1-Tap WhatsApp & Pincode handlers.
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Scoped event listeners inside `container`; zero global listener conflicts.
 *   - DOM SAFETY    : Preserves all `#rm-cat16-*` IDs and storage schemas 100%.
 *   - ZERO REVERT   : Preloads `category-15/15-2-rental-template.js` at boot so `renderView` runs in 0ms.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 16 FUNCTIONS INTACT):
 *   1. getStorageKey                  2. calculateElectricity           3. calculateTotal
 *   4. calculateNetPayable            5. calculateProratedRent          6. evaluatePublicationEligibility
 *   7. resolveGeoFromPincode (Bridge) 8. loadVouchers                   9. saveVouchers
 *   10. recordVoucher                 11. formatDigitalSlipText(Bridge) 12. syncTo16_3Search
 *   13. renderView                    14. populateDistricts             15. mount / 16. unmount
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole authoritative Part-2 controller of 15-2 (16-2) Rental Ledger.
 *   - ZERO-GUESSWORK LOCK : Paired 1:1 with `public/js/catalog/category-15/15-2-rental-template.js`.
 *   - CANONICAL PATH      : Active at `public/js/catalog/category-16/16-2-rental-ledger.js` until adapter sync.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Delegates HTML template & pincode lookup to Part-1 (`15-2-rental-template.js`).
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

  function getTpl() {
    return (typeof window !== 'undefined') ? (window.RM_Cat15_Sub2_Template || window.RM_Cat16_Sub2_Template || null) : null;
  }

  function ensurePart1TemplateLoaded(onReady) {
    if (getTpl()) {
      if (typeof onReady === 'function') onReady();
      return;
    }
    if (typeof document === 'undefined') return;
    var existing = document.getElementById('rm-cat15-2-template-js');
    if (existing) {
      if (typeof onReady === 'function') existing.addEventListener('load', onReady);
      return;
    }
    var s = document.createElement('script');
    s.id = 'rm-cat15-2-template-js';
    s.src = '/js/catalog/category-15/15-2-rental-template.js?v=' + (window.__RM_ACTIVE_CACHE_VER || '20261019_v83');
    s.async = false;
    if (typeof onReady === 'function') s.onload = onReady;
    (document.head || document.documentElement).appendChild(s);
  }
  ensurePart1TemplateLoaded();

  function getStorageKey(accountId) {
    var acct = (accountId && typeof accountId === 'string') ? accountId.replace(/[^a-zA-Z0-9_-]/g, '') : 'default';
    return 'rm_local_acct' + acct + '_cat16_sub2_v' + SCHEMA_VERSION;
  }


  // SECTION 2: MATHEMATICAL CALCULATORS & CANONICAL FINANCIAL FORMULAS
  function calculateElectricity(prev, curr, rate) {
    var p = parseFloat(prev) || 0;
    var c = parseFloat(curr) || 0;
    var r = parseFloat(rate) || 8.0;
    var units = Math.max(0, c - p);
    var amount = Math.round(units * r * 100) / 100;
    return { previousReading: p, currentReading: c, unitsConsumed: units, ratePerUnit: r, electricityAmount: amount };
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
    return { grossTotal: gross, advancePaid: advance, netPayable: net, remainingAdvance: remainingAdvance };
  }

  function calculateProratedRent(monthlyRent, activeDays, totalDaysInMonth) {
    var rent = parseFloat(monthlyRent) || 0;
    var days = parseInt(activeDays, 10) || 0;
    var totalDays = parseInt(totalDaysInMonth, 10) || 30;
    if (days >= totalDays) return rent;
    return Math.round((rent / totalDays) * days * 100) / 100;
  }

  function evaluatePublicationEligibility(unit) {
    if (!unit || typeof unit !== 'object') return { eligible: false, reason: 'INVALID_UNIT_CONFIG' };
    var pub = unit.publicationSettings || {};
    var mode = pub.mode || PUBLICATION_MODES.CONFIRM_EACH_TIME;
    var consentActive = Boolean(pub.consentActive);
    var lifecycle = unit.lifecycleStatus || {};
    var possession = Boolean(lifecycle.physicalPossessionReturned);
    var readyToRent = Boolean(lifecycle.readyToRent);

    if (mode === PUBLICATION_MODES.PRIVATE_ONLY) return { eligible: false, mode: mode, reason: 'UNIT_SET_TO_PRIVATE_ONLY' };
    if (!consentActive) return { eligible: false, mode: mode, reason: 'OWNER_CONSENT_INACTIVE' };
    if (!possession) return { eligible: false, mode: mode, reason: 'POSSESSION_NOT_RETURNED' };
    if (!readyToRent) return { eligible: false, mode: mode, reason: 'UNIT_NOT_READY_FOR_RENT' };
    if (mode === PUBLICATION_MODES.CONFIRM_EACH_TIME) return { eligible: true, mode: mode, actionRequired: 'CONFIRM_BEFORE_PUBLISH' };
    if (mode === PUBLICATION_MODES.AUTO_PUBLISH) return { eligible: true, mode: mode, actionRequired: 'AUTO_PUBLISH_AUTHORIZED' };
    return { eligible: false, reason: 'UNKNOWN_PUBLICATION_MODE' };
  }

  function resolveGeoFromPincode(pCode) {
    var tpl = getTpl();
    if (tpl && typeof tpl.resolveGeoFromPincode === 'function') return tpl.resolveGeoFromPincode(pCode);
    if (!pCode) return null;
    var pin = String(pCode).trim();
    if (/^822/.test(pin)) return { stateCode: 'JH', state: 'झारखंड', district: 'पलामू (डाल्टनगंज)' };
    return null;
  }


  // SECTION 3: OFFLINE-FIRST PERSISTENCE & SOVEREIGN VOUCHER CREATION
  function loadVouchers(accountId) {
    try {
      var raw = localStorage.getItem(getStorageKey(accountId));
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      return [];
    }
  }

  function saveVouchers(accountId, vouchers) {
    try {
      localStorage.setItem(getStorageKey(accountId), JSON.stringify(vouchers));
      return true;
    } catch (err) {
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
      geoAddress: record.geoAddress || { state: 'झारखंड', district: 'पलामू (डाल्टनगंज)', locality: 'मुख्य बाजार', pincode: '822101' },
      timestamp: Date.now(),
      disclaimer: 'यह डिजिटल पर्ची केवल स्थानीय हिसाब के लिए है; बैंक सेटलमेंट का प्रमाण नहीं है।'
    };
    var vouchers = loadVouchers(accountId);
    vouchers.unshift(voucher);
    saveVouchers(accountId, vouchers);
    return voucher;
  }

  function formatDigitalSlipText(voucher) {
    var tpl = getTpl();
    if (tpl && typeof tpl.formatDigitalSlipText === 'function') return tpl.formatDigitalSlipText(voucher);
    return voucher ? ('📋 किराया पर्ची: ' + voucher.unitIdentifier + ' • कुल देय: ₹' + voucher.netPayable) : '';
  }


  // SECTION 4: FLUID DOM VIEWPORT & TACTILE EVENT HANDLERS
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

      searchState.publicListings = searchState.publicListings.filter(function (item) { return item.title !== targetTitle; });
      searchState.publicListings.unshift({
        listingId: 'LST-' + (acct || 'default') + '-' + cleanUnit.replace(/\s+/g, '-').toUpperCase(),
        sourceSubFeature: '16-2',
        unitIdentifier: cleanUnit,
        title: targetTitle,
        unitType: 'single_room',
        monthlyRent: parseFloat(rentAmount) || 0,
        securityDeposit: Math.round((parseFloat(rentAmount) || 0) * 1.5),
        addressPublic: { country: 'IN', state: stateName, district: districtName, city: districtName, locality: localityName, pincode: pincodeVal },
        electricityBilling: { meterType: 'sub_meter_per_unit', ratePerUnit: 8.0 },
        lifecycleVerification: { physicalPossessionConfirmed: true, readyToRentConfirmed: true, availableFromDate: new Date().toISOString().slice(0, 10) },
        landlordContactMasked: { name: 'सत्यापित मकान मालिक', maskedPhone: '+91 XXXXX00000', verifiedBadge: true },
        status: 'AVAILABLE',
        lastSyncedAt: new Date().toISOString()
      });
      localStorage.setItem(key, JSON.stringify(searchState));
      return true;
    } catch (err) {
      return false;
    }
  }

  function renderView(container, options) {
    if (!container) return;
    var tpl = getTpl();
    if (!tpl || typeof tpl.buildRentalLedgerHTML !== 'function') {
      ensurePart1TemplateLoaded(function () { renderView(container, options); });
      return;
    }
    options = options || {};
    var accountId = options.accountId || 'default';
    var vouchers = loadVouchers(accountId);
    container.innerHTML = tpl.buildRentalLedgerHTML(vouchers);

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
        if (targetDistrictName && (val.indexOf(targetDistrictName) !== -1 || targetDistrictName.indexOf(val) !== -1)) matchedIdx = idx;
        districtSelect.appendChild(opt);
      });
      if (districtSelect.options.length > matchedIdx) districtSelect.selectedIndex = matchedIdx;
    }

    if (stateSelect) {
      stateSelect.innerHTML = '';
      if (window.RM_INDIA_GEO && Array.isArray(window.RM_INDIA_GEO.states)) {
        window.RM_INDIA_GEO.states.forEach(function (s) {
          var opt = document.createElement('option');
          opt.value = s.code;
          opt.textContent = (s.nameHi || s.name) + ' (' + s.name + ')';
          if (s.code === 'JH') opt.selected = true;
          stateSelect.appendChild(opt);
        });
        populateDistricts('JH', 'पलामू (डाल्टनगंज)');
      } else {
        stateSelect.innerHTML = '<option value="JH">झारखंड</option><option value="MP">मध्य प्रदेश</option>';
        populateDistricts('JH', 'पलामू (डाल्टनगंज)');
      }
      stateSelect.addEventListener('change', function () { populateDistricts(this.value); });
    }

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
        if (vouchers[idx]) window.open('https://wa.me/?text=' + encodeURIComponent(formatDigitalSlipText(vouchers[idx])), '_blank');
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
        var geoPayload = { state: selectedStateText, district: selectedDistrictText, locality: localityVal, pincode: pincodeVal };
        recordVoucher(accountId, { unitIdentifier: unitVal, rentAmount: rentVal, previousMeterReading: prevVal, currentMeterReading: currVal, unitRate: 8.0, geoAddress: geoPayload });

        if (pubMode === 'auto_publish') {
          if (possession && ready) {
            syncTo16_3Search(accountId, unitVal, rentVal, geoPayload);
            alert('✅ पर्ची सुरक्षित हुई और कमरा 15-3 खोज में (' + selectedDistrictText + ') के साथ प्रकाशित हुआ!');
          } else {
            alert('⚠️ पर्ची सुरक्षित हुई। कमरा 15-3 में प्रकाशित नहीं हुआ क्योंकि कब्जा या तैयारी अभी अधूरी है।');
          }
        } else if (pubMode === 'confirm_each_time' && possession && ready) {
          if (window.confirm('क्या आप ' + unitVal + ' को ' + selectedDistrictText + ' में 15-3 किराये की खोज में प्रकाशित करना चाहते हैं?')) {
            syncTo16_3Search(accountId, unitVal, rentVal, geoPayload);
            alert('✅ कमरा 15-3 किराये की खोज में सफलतापूर्वक प्रकाशित किया गया।');
          }
        }
        renderView(container, options);
      });
    }
  }


  // SECTION 5: LIFECYCLE MOUNT/UNMOUNT CONTRACT & UMD EXPORTS
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
        if (container) container.innerHTML = '<div style="color:#ef4444; padding:16px;">किराया बहीखाता लोड करने में समस्या हुई।</div>';
      }
    },
    unmount: function (container) {
      if (container) container.innerHTML = '';
    }
  };
});
