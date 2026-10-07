/**
 * RISE MITRA — SIVME MICRO-MODULAR ADAPTER
 * MODULE        : 9 Core Verticals Grid Adapter (Home Screen)
 * FILE          : core-verticals-9.js
 * SCOPE         : 9 Core Pillars (Mind, Skills, Grocery, Delivery, BizTools, Expert, Voucher, Ledger, Emergency)
 * GOVERNANCE    : GATE-23.5 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : dk8969509569/rise-mitra-sync-docs (pre-main branch)
 */

(function () {
  'use strict';

  function cleanText(el) {
    if (!el) return '';
    var clone = el.cloneNode(true);
    var badges = clone.querySelectorAll('.sivme-inline-badge');
    badges.forEach(function (b) { b.remove(); });
    return (clone.textContent || '').trim();
  }

  function auditCoreVerticals9() {
    if (!window.RM_SIVME) return;

    var verticalCards = document.querySelectorAll('.grid > div, [data-vertical-id]');
    verticalCards.forEach(function (vCard) {
      if (vCard.closest('#categoryModal')) return;

      var txt = cleanText(vCard);
      var vUrn = null;
      var vLabel = null;

      if (txt.indexOf('स्वस्थ मन') !== -1) { vUrn = 'rm:vertical:mind'; vLabel = 'स्वस्थ मन'; }
      else if (txt.indexOf('कौशल') !== -1) { vUrn = 'rm:vertical:skills'; vLabel = 'कौशल सीखें'; }
      else if (txt.indexOf('किराना') !== -1) { vUrn = 'rm:vertical:grocery'; vLabel = 'किराना'; }
      else if (txt.indexOf('डिलीवरी') !== -1) { vUrn = 'rm:vertical:delivery'; vLabel = 'डिलीवरी'; }
      else if (txt.indexOf('व्यापार टूल्स') !== -1) { vUrn = 'rm:vertical:biztools'; vLabel = 'व्यापार टूल्स'; }
      else if (txt.indexOf('विशेषज्ञ') !== -1) { vUrn = 'rm:vertical:expert'; vLabel = 'विशेषज्ञ सलाह'; }
      else if (txt.indexOf('वाउचर') !== -1) { vUrn = 'rm:vertical:voucher'; vLabel = 'वाउचर'; }
      else if (txt.indexOf('बहीखाता') !== -1) { vUrn = 'rm:vertical:ledger'; vLabel = 'बहीखाता'; }
      else if (txt.indexOf('आपात') !== -1) { vUrn = 'rm:vertical:emergency'; vLabel = 'आपात सहायता'; }

      if (!vUrn) return;

      vCard.classList.add('sivme-vertical-card');
      if (typeof window.RM_SIVME.auditElement === 'function') {
        window.RM_SIVME.auditElement(vCard, vUrn, vLabel);
      }
    });
  }

  // Register with SIVME Core Engine
  function register() {
    if (window.RM_SIVME && typeof window.RM_SIVME.registerAdapter === 'function') {
      window.RM_SIVME.registerAdapter('core-verticals-9', auditCoreVerticals9);
    } else {
      setTimeout(register, 40);
    }
  }

  register();
})();
