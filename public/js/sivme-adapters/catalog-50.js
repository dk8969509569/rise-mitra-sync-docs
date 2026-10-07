/**
 * RISE MITRA — SIVME MICRO-MODULAR ADAPTER
 * MODULE        : Universal Catalog 50 Categories Adapter
 * FILE          : catalog-50.js
 * SCOPE         : Categories 01 to 50 in Universal Catalog Modal (Dynamic Card Scanner)
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

  function auditCatalog50() {
    if (!window.RM_SIVME) return;

    var catalogCards = document.querySelectorAll(
      '#categoryModal [data-cat-id], ' +
      '#categoryModal [id*="cat-"], ' +
      '#categoryModal div[onclick*="category"], ' +
      '#categoryModal div[onclick*="Category"]'
    );

    var processedUrns = {};
    catalogCards.forEach(function (cCard) {
      if (cCard.closest('#sub-c16')) return;

      var catId = cCard.getAttribute('data-cat-id') || cCard.id || '';
      var numStr = catId.replace(/[^0-9]/g, '');

      if (!numStr) {
        var text = cleanText(cCard);
        var match = text.match(/([0-9]{1,2})\./);
        if (match) numStr = match[1];
      }

      if (!numStr || numStr === '16') return; // Category 16 is managed independently by cat-16 adapter
      if (numStr.length === 1) numStr = '0' + numStr;

      var urn = 'rm:cat:' + numStr;
      if (processedUrns[urn]) return;
      processedUrns[urn] = true;

      cCard.setAttribute('data-cat-id', 'c' + numStr);
      cCard.classList.add('sivme-catalog-card');

      var labelEl = cCard.querySelector('.text-xs.font-bold') || cCard.querySelector('.font-bold');
      var label = labelEl ? cleanText(labelEl) : ('श्रेणी ' + numStr);

      if (typeof window.RM_SIVME.auditElement === 'function') {
        window.RM_SIVME.auditElement(cCard, urn, label);
      }
    });
  }

  // Register with SIVME Core Engine
  function register() {
    if (window.RM_SIVME && typeof window.RM_SIVME.registerAdapter === 'function') {
      window.RM_SIVME.registerAdapter('catalog-50', auditCatalog50);
    } else {
      setTimeout(register, 40);
    }
  }

  register();
})();
