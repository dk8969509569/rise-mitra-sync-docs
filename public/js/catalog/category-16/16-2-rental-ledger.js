/**
 * Rise Mitra — Category-16: House & Home
 * Sub-Feature 16-2: Rental Ledger & Bahi-Khata (Client Logic)
 * Contract: DEC-RM-SOV-ARCH-20260929-UNIVERSAL-ZEL-CATALOG (v0.3.1)
 * Storage Key: rm_local_acct{opaqueAccountId}_cat16_sub2_v1
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.RM_Cat16_Sub2_RentalLedger = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SUB_FEATURE_ID = '16-2';
  var CATEGORY_ID = 'category-16';
  var SCHEMA_VERSION = '1';

  function getStorageKey(accountId) {
    var acct = (accountId && typeof accountId === 'string') ? accountId.replace(/[^a-zA-Z0-9_-]/g, '') : 'default';
    return 'rm_local_acct' + acct + '_cat16_sub2_v' + SCHEMA_VERSION;
  }

  function calculateElectricity(prev, curr, rate) {
    var p = parseFloat(prev) || 0;
    var c = parseFloat(curr) || 0;
    var r = parseFloat(rate) || 0;
    var units = Math.max(0, c - p);
    var amount = Math.round(units * r * 100) / 100;
    return {
      unitsConsumed: units,
      electricityAmount: amount
    };
  }

  function calculateTotal(rent, electricityAmount, otherCharges) {
    var r = parseFloat(rent) || 0;
    var e = parseFloat(electricityAmount) || 0;
    var o = parseFloat(otherCharges) || 0;
    return Math.round((r + e + o) * 100) / 100;
  }

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
      unitIdentifier: (record.unitIdentifier || 'Unit-1').trim(),
      billingMonth: record.billingMonth || new Date().toISOString().substring(0, 7),
      rentAmount: parseFloat(record.rentAmount) || 0,
      previousMeterReading: parseFloat(record.previousMeterReading) || 0,
      currentMeterReading: parseFloat(record.currentMeterReading) || 0,
      unitsConsumed: ele.unitsConsumed,
      electricityAmount: ele.electricityAmount,
      otherCharges: parseFloat(record.otherCharges) || 0,
      netPayable: net,
      paymentStatus: record.paymentStatus || 'PENDING',
      timestamp: Date.now(),
      disclaimer: 'यह डिजिटल पर्ची केवल स्थानीय हिसाब के लिए है; बैंक सेटलमेंट का प्रमाण नहीं है।'
    };

    var vouchers = loadVouchers(accountId);
    vouchers.unshift(voucher);
    saveVouchers(accountId, vouchers);
    return voucher;
  }

  function renderView(container, options) {
    if (!container) return;
    options = options || {};
    var accountId = options.accountId || 'default';
    var vouchers = loadVouchers(accountId);

    var html = '' +
      '<div class="rm-cat16-ledger" style="padding:16px; font-family:sans-serif; color:#0f172a;">' +
      '  <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e2e8f0; padding-bottom:12px; margin-bottom:16px;">' +
      '    <div>' +
      '      <h2 style="margin:0; font-size:1.25rem; font-weight:700; color:#0f172a;">किराया बहीखाता (Rental Ledger)</h2>' +
      '      <span style="font-size:0.8rem; color:#64748b;">Sub-Feature 16-2 • Sovereign P2P Offline</span>' +
      '    </div>' +
      '    <span style="background:#10b981; color:#fff; font-size:0.75rem; padding:4px 8px; border-radius:4px; font-weight:600;">ACTIVE</span>' +
      '  </div>' +
      '  <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:14px; margin-bottom:16px;">' +
      '    <h3 style="margin:0 0 10px 0; font-size:0.95rem; font-weight:600;">नया किराया व सब-मीटर पर्ची दर्ज करें</h3>' +
      '    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">' +
      '      <input type="text" id="rm-cat16-unit" placeholder="कमरा / फ्लैट संख्या" style="padding:8px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.9rem;" />' +
      '      <input type="number" id="rm-cat16-rent" placeholder="मासिक किराया (₹)" style="padding:8px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.9rem;" />' +
      '      <input type="number" id="rm-cat16-prev-meter" placeholder="पिछली रीडिंग (Unit)" style="padding:8px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.9rem;" />' +
      '      <input type="number" id="rm-cat16-curr-meter" placeholder="वर्तमान रीडिंग (Unit)" style="padding:8px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.9rem;" />' +
      '    </div>' +
      '    <button id="rm-cat16-btn-add" style="margin-top:12px; width:100%; min-height:44px; background:#10b981; color:#fff; border:none; border-radius:6px; font-weight:600; font-size:0.95rem; cursor:pointer;">' +
      '      + रसीद बनाएं व हिसाब जोड़ें' +
      '    </button>' +
      '  </div>' +
      '  <div>' +
      '    <h3 style="margin:0 0 8px 0; font-size:0.95rem; font-weight:600;">हालिया रसीदें (' + vouchers.length + ')</h3>' +
      '    <div id="rm-cat16-list" style="display:flex; flex-direction:column; gap:8px;">';

    if (vouchers.length === 0) {
      html += '<p style="color:#64748b; font-size:0.85rem; margin:8px 0;">कोई रसीद दर्ज नहीं है। ऊपर दिए फ़ॉर्म से नई पर्ची जोड़ें।</p>';
    } else {
      for (var i = 0; i < vouchers.length; i++) {
        var v = vouchers[i];
        html += '' +
          '<div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:6px; padding:10px; display:flex; justify-content:space-between; align-items:center;">' +
          '  <div>' +
          '    <strong style="color:#0f172a; font-size:0.95rem;">' + v.unitIdentifier + '</strong> • ' +
          '    <span style="color:#64748b; font-size:0.8rem;">' + v.billingMonth + '</span><br/>' +
          '    <span style="font-size:0.8rem; color:#475569;">बिजली: ' + v.unitsConsumed + ' यूनिट (₹' + v.electricityAmount + ')</span>' +
          '  </div>' +
          '  <div style="text-align:right;">' +
          '    <div style="font-size:1rem; font-weight:700; color:#10b981;">₹' + v.netPayable + '</div>' +
          '    <span style="font-size:0.75rem; color:#f59e0b; font-weight:600;">' + v.paymentStatus + '</span>' +
          '  </div>' +
          '</div>';
      }
    }

    html += '</div></div></div>';
    container.innerHTML = html;

    var btnAdd = container.querySelector('#rm-cat16-btn-add');
    if (btnAdd) {
      btnAdd.addEventListener('click', function () {
        var unitVal = (container.querySelector('#rm-cat16-unit') || {}).value;
        var rentVal = (container.querySelector('#rm-cat16-rent') || {}).value;
        var prevVal = (container.querySelector('#rm-cat16-prev-meter') || {}).value;
        var currVal = (container.querySelector('#rm-cat16-curr-meter') || {}).value;

        if (!unitVal || !rentVal) {
          alert('कृपया कमरा संख्या और मासिक किराया अवश्य भरें।');
          return;
        }

        recordVoucher(accountId, {
          unitIdentifier: unitVal,
          rentAmount: rentVal,
          previousMeterReading: prevVal,
          currentMeterReading: currVal,
          unitRate: 8.0
        });

        renderView(container, options);
      });
    }
  }

  return {
    subFeatureId: SUB_FEATURE_ID,
    categoryId: CATEGORY_ID,
    schemaVersion: SCHEMA_VERSION,
    getStorageKey: getStorageKey,
    calculateElectricity: calculateElectricity,
    calculateTotal: calculateTotal,
    loadVouchers: loadVouchers,
    recordVoucher: recordVoucher,
    mount: function (container, options) {
      try {
        renderView(container, options);
      } catch (err) {
        console.error('[RM-16-2] Mount error:', err);
        if (container) {
          container.innerHTML = '<div style="color:#ef4444; padding:12px;">किराया बहीखाता लोड करने में समस्या हुई। कृपया पुनः प्रयास करें।</div>';
        }
      }
    },
    unmount: function (container) {
      if (container) container.innerHTML = '';
    }
  };
});
