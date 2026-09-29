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
      '<div style="box-sizing:border-box; width:100%; max-width:100%; margin:0 auto; padding:6px 2px; font-family:system-ui,-apple-system,sans-serif; color:#f8fafc; overflow-x:hidden;">' +

      // Top Module Header Card
      '  <div style="background:#0f172a; border:1px solid #1e293b; border-radius:14px; padding:12px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; box-sizing:border-box; width:100%;">' +
      '    <div style="min-width:0; flex:1;">' +
      '      <h2 style="margin:0; font-size:1.05rem; font-weight:800; color:#ffffff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">🏠 16-2. किराया बहीखाता</h2>' +
      '      <span style="font-size:0.72rem; color:#10b981; font-weight:600; display:block;">सब-मीटर पर्ची व सॉवरेन P2P लेज़र</span>' +
      '    </div>' +
      '    <span style="background:#064e3b; color:#34d399; border:1px solid #059669; font-size:0.68rem; padding:3px 8px; border-radius:999px; font-weight:700; white-space:nowrap; margin-left:8px;">सक्रिय</span>' +
      '  </div>' +

      // Form Card
      '  <div style="background:#0f172a; border:1px solid #1e293b; border-radius:14px; padding:14px; margin-bottom:14px; box-sizing:border-box; width:100%;">' +
      '    <h3 style="margin:0 0 12px 0; font-size:0.9rem; font-weight:700; color:#e2e8f0;">नया किराया व सब-मीटर पर्ची दर्ज करें</h3>' +

      '    <div style="display:flex; flex-direction:column; gap:10px; width:100%; box-sizing:border-box;">' +
      '      <div style="width:100%; box-sizing:border-box;">' +
      '        <label style="display:block; font-size:0.72rem; color:#94a3b8; margin-bottom:4px; font-weight:600;">कमरा / फ्लैट संख्या</label>' +
      '        <input type="text" id="rm-cat16-unit" placeholder="उदा. कमरा 101 / फ्लैट 2B" style="width:100%; max-width:100%; box-sizing:border-box; padding:10px 12px; background:#030712; border:1px solid #334155; border-radius:8px; color:#ffffff; font-size:0.9rem; outline:none; display:block;" />' +
      '      </div>' +

      '      <div style="width:100%; box-sizing:border-box;">' +
      '        <label style="display:block; font-size:0.72rem; color:#94a3b8; margin-bottom:4px; font-weight:600;">मासिक किराया (₹)</label>' +
      '        <input type="number" id="rm-cat16-rent" placeholder="₹ 5000" style="width:100%; max-width:100%; box-sizing:border-box; padding:10px 12px; background:#030712; border:1px solid #334155; border-radius:8px; color:#ffffff; font-size:0.9rem; outline:none; display:block;" />' +
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
        html += '' +
          '<div style="background:#0f172a; border:1px solid #1e293b; border-radius:10px; padding:10px 12px; display:flex; justify-content:space-between; align-items:center; box-sizing:border-box; width:100%;">' +
          '  <div style="min-width:0; flex:1; padding-right:8px;">' +
          '    <div style="font-size:0.9rem; font-weight:700; color:#f8fafc; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">' + v.unitIdentifier + '</div>' +
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

    var btnAdd = container.querySelector('#rm-cat16-btn-add');
    if (btnAdd) {
      btnAdd.addEventListener('click', function () {
        var unitVal = (container.querySelector('#rm-cat16-unit') || {}).value;
        var rentVal = (container.querySelector('#rm-cat16-rent') || {}).value;
        var prevVal = (container.querySelector('#rm-cat16-prev-meter') || {}).value;
        var currVal = (container.querySelector('#rm-cat16-curr-meter') || {}).value;

        if (!unitVal || !rentVal) {
          alert('कृपया कमरा/फ्लैट पहचान और मासिक किराया अवश्य दर्ज करें।');
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
          container.innerHTML = '<div style="color:#ef4444; padding:16px;">किराया बहीखाता लोड करने में समस्या हुई।</div>';
        }
      }
    },
    unmount: function (container) {
      if (container) container.innerHTML = '';
    }
  };
});
