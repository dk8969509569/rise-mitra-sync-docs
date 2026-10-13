/**
 * RISE MITRA — UNIVERSAL CATALOG METADATA REGISTRY (SSOT)
 * MODULE        : Lean Centralized Catalog Registry & Micro-Batch Orchestration Hub
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/universal-catalog/catalog-metadata-registry.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  // ==============================================================================
  // 1. IN-MEMORY CANONICAL REGISTRY STORE (WITH INSTANT DOM TITLE SEEDS)
  // ==============================================================================

  var RM_CATALOG_REGISTRY = {
    '1': { id: 'c01', catId: '1', num: '01.', icon: '🎨', title: 'Art & Design', subtitle: 'फ्लेक्स बोर्ड, डिजिटल कार्ड, बिल बुक व विनाइल प्रिंटिंग' },
    '2': { id: 'c02', catId: '2', num: '02.', icon: '🚗', title: 'Auto & Vehicles', subtitle: 'ऑन-साइट पंचर, बैटरी जंपस्टार्ट, चालान व पुरानी गाड़ी बाजार' },
    '3': { id: 'c03', catId: '3', num: '03.', icon: '✂️', title: 'Beauty', subtitle: 'घर पर फेशियल, दुल्हन मेकअप, मेहंदी व नाई टोकन' },
    '14': { id: 'c14', catId: '14', num: '14.', icon: '🧘', title: 'Health & Fitness', subtitle: 'स्वस्थ मन, देसी अखाड़ा, योग, प्राकृतिक चिकित्सा व स्वास्थ्य लाभ' },
    '15': { id: 'c15', catId: '15', num: '15.', icon: '🏠', title: 'House & Home', subtitle: 'घर, आवास व दैनिक व्यवस्थापन केंद्र (मिस्त्री, प्लंबर व पेंटिंग)' },
    '16': { id: 'c16', catId: '16', num: '16.', icon: '📚', title: 'Libraries & Demo', subtitle: 'प्रतियोगी छात्र एसी केबिन डेस्क, पुरानी किताबें व स्टेशनरी' },
    '33': { id: 'c33', catId: '33', num: '33.', icon: '🎯', title: 'Action', subtitle: 'PS5/PC गेमिंग पार्लर, ई-स्पोर्ट्स टूर्नामेंट व लेजर टैग एरीना' },
    '34': { id: 'c34', catId: '34', num: '34.', icon: '🧭', title: 'Adventure', subtitle: 'ट्रेकिंग कैंप, ट्रेजर हंट क्वेस्ट व एडवेंचर पार्क एंट्री' },
    '35': { id: 'c35', catId: '35', num: '35.', icon: '🕹️', title: 'Arcade', subtitle: 'क्लासिक आर्केड गेम्स, रेट्रो जॉयस्टिक, स्पीड रन व तुरंत एक्शन' },
    '50': { id: 'c50', catId: '50', num: '50.', icon: '👨‍👩‍👧‍👦', title: 'Family', subtitle: 'शनिवार पारिवारिक तंबोला (Housie), मोहल्ला मेला स्टॉल्स व किटी पार्टी' }
  };

  // Seed aliases for instant lookup
  ['1', '2', '3', '14', '15', '16', '33', '34', '35', '50'].forEach(function (num) {
    var item = RM_CATALOG_REGISTRY[num];
    if (item) {
      RM_CATALOG_REGISTRY['c' + num] = item;
      var padded = (parseInt(num, 10) < 10 ? '0' : '') + num;
      RM_CATALOG_REGISTRY[padded] = item;
      RM_CATALOG_REGISTRY['c' + padded] = item;
    }
  });

  // ==============================================================================
  // 2. AUTHORITATIVE ENGINE API WITH DYNAMIC RESOLUTION & ZEL MERGE
  // ==============================================================================

  window.RM_CATALOG_REGISTRY = {
    getCategoryData: function (catId) {
      if (!catId) return null;
      var cleanId = String(catId).replace(/[^0-9]/g, '');
      if (!cleanId) return null;
      var intId = String(parseInt(cleanId, 10));
      var padded = (parseInt(cleanId, 10) < 10 ? '0' : '') + intId;

      return RM_CATALOG_REGISTRY[intId] ||
             RM_CATALOG_REGISTRY['c' + intId] ||
             RM_CATALOG_REGISTRY[padded] ||
             RM_CATALOG_REGISTRY['c' + padded] ||
             RM_CATALOG_REGISTRY[cleanId] || null;
    },

    getSubcategoryData: function (catId, subId) {
      var cat = this.getCategoryData(catId);
      if (!cat || !cat.subcategories) return null;
      var cleanSubId = String(subId).replace(/^[cg]/, '');
      var numParts = String(subId).match(/\d+/g);
      var normSubId = numParts && numParts.length >= 2 ? (parseInt(numParts[0], 10) + '-' + parseInt(numParts[1], 10)) : cleanSubId;

      if (cat.subcategories[cleanSubId]) return cat.subcategories[cleanSubId];
      if (cat.subcategories[normSubId]) return cat.subcategories[normSubId];

      // Backward compatible fallbacks
      if (normSubId === '15-1' && cat.subcategories['14-1']) return cat.subcategories['14-1'];
      if (normSubId === '15-2' && cat.subcategories['14-2']) return cat.subcategories['14-2'];
      if (normSubId === '15-3' && cat.subcategories['14-3']) return cat.subcategories['14-3'];
      if (normSubId === '16-1' && cat.subcategories['15-1']) return cat.subcategories['15-1'];
      if (normSubId === '16-2' && cat.subcategories['15-2']) return cat.subcategories['15-2'];
      if (normSubId === '16-3' && cat.subcategories['15-3']) return cat.subcategories['15-3'];

      return null;
    },

    registerBatch: function (batchData) {
      if (typeof batchData === 'object' && batchData !== null) {
        Object.keys(batchData).forEach(function (key) {
          var item = batchData[key];
          if (RM_CATALOG_REGISTRY[key] && typeof RM_CATALOG_REGISTRY[key] === 'object') {
            Object.assign(RM_CATALOG_REGISTRY[key], item);
          } else {
            RM_CATALOG_REGISTRY[key] = item;
          }
          var num = key.replace(/[^0-9]/g, '');
          if (num) {
            var intNum = String(parseInt(num, 10));
            var padded = (parseInt(num, 10) < 10 ? '0' : '') + intNum;
            RM_CATALOG_REGISTRY[intNum] = RM_CATALOG_REGISTRY[key];
            RM_CATALOG_REGISTRY['c' + intNum] = RM_CATALOG_REGISTRY[key];
            RM_CATALOG_REGISTRY[padded] = RM_CATALOG_REGISTRY[key];
            RM_CATALOG_REGISTRY['c' + padded] = RM_CATALOG_REGISTRY[key];
          }
        });

        // Trigger dynamic DOM card sweep if engine is active
        if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
          setTimeout(window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog, 20);
        }
      }
    },

    getAllCategories: function () {
      return RM_CATALOG_REGISTRY;
    }
  };

  // ==============================================================================
  // 3. REAL-TIME DOM TITLE PURGE HOOK (PURGES PLACEHOLDER TITLES IMMEDIATELY)
  // ==============================================================================

  function enforcePlayStoreTitlesInDOM() {
    var cards = document.querySelectorAll('#categoryModal [data-cat-id], #categoryModal [id*="cat-"], .sivme-cat-card');
    cards.forEach(function (card) {
      var rawId = card.getAttribute('data-cat-id') || card.id || '';
      var num = rawId.replace(/[^0-9]/g, '');
      if (!num) {
        var match = (card.textContent || '').match(/([0-9]{1,2})\./);
        if (match) num = match[1];
      }
      if (!num) return;

      var canonical = window.RM_CATALOG_REGISTRY.getCategoryData(num);
      if (canonical) {
        var titleEl = card.querySelector('h3, .category-title, .font-bold.text-lg, .text-xl');
        if (titleEl && (titleEl.textContent.indexOf('Category') !== -1 || titleEl.textContent.trim().length <= 4)) {
          titleEl.textContent = canonical.title;
        }
        var subEl = card.querySelector('p, .category-subtitle, .text-sm.text-slate-400');
        if (subEl && (subEl.textContent.indexOf('दैनिक जनसेवाएं') !== -1 || subEl.textContent.trim().length <= 4)) {
          subEl.textContent = canonical.subtitle;
        }
        var iconEl = card.querySelector('.category-icon, .text-2xl, .text-3xl');
        if (iconEl && (iconEl.textContent.indexOf('📦') !== -1 || iconEl.querySelector('img[src*="box"]'))) {
          iconEl.textContent = canonical.icon;
        }
      }
    });
  }

  // Poll DOM to ensure zero residual placeholder artifacts
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      enforcePlayStoreTitlesInDOM();
      setTimeout(enforcePlayStoreTitlesInDOM, 100);
      setTimeout(enforcePlayStoreTitlesInDOM, 500);
      setTimeout(enforcePlayStoreTitlesInDOM, 1500);
    });
  } else {
    enforcePlayStoreTitlesInDOM();
    setTimeout(enforcePlayStoreTitlesInDOM, 100);
    setTimeout(enforcePlayStoreTitlesInDOM, 500);
    setTimeout(enforcePlayStoreTitlesInDOM, 1500);
  }

  // ==============================================================================
  // 4. MICRO-BATCH EXTENSION LOADER (10 PARALLEL ASYNC EXTENSIONS - ALL 50 CATS)
  // ==============================================================================

  var extBatches = [
    'ext-batch-01-05.js',
    'ext-batch-06-10.js',
    'ext-batch-11-15.js',
    'ext-batch-16-20.js',
    'ext-batch-21-25.js',
    'ext-batch-26-30.js',
    'ext-batch-31-35.js',
    'ext-batch-36-40.js',
    'ext-batch-41-45.js',
    'ext-batch-46-50.js'
  ];

  extBatches.forEach(function (file) {
    var s = document.createElement('script');
    s.src = '/js/universal-catalog/extensions/' + file;
    s.async = true;
    document.head.appendChild(s);
  });

})();
