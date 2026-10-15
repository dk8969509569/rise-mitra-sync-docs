/**
 * ==============================================================================
 * RISE MITRA — UNIVERSAL CATALOG METADATA REGISTRY (SSOT)
 * ==============================================================================
 * MODULE        : Lean Centralized Catalog Registry & Micro-Batch Orchestration Hub
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/universal-catalog/catalog-metadata-registry.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 *
 * ------------------------------------------------------------------------------
 * 📌 FILE KA SPASHT UDDESHYA (CLEAR PURPOSE & ZERO-CONFUSION BOUNDARY):
 * ------------------------------------------------------------------------------
 * 1. CENTRAL DATA SSOT: Yeh file sabhi 50 Categories (01 se 50) aur 150 Sub-Categories
 *    (01-1 se 50-3) ka Single Source of Truth (SSOT) metadata store hai.
 * 2. EXTENSION ORCHESTRATOR: Yeh `categories-data.js` aur `extensions/` folder ki
 *    sabhi modular files (`ext-cat-01.js` se `ext-batch-46-50.js`) ko load aur merge
 *    karta hai.
 * 3. UNIVERSAL ANTI-UNDEFINED SHIELD: Chahe kisi category ya extension file me
 *    sub-category ka naam `title`, `name`, `enName`, `hiName`, `enTitle`, `hiTitle`
 *    ya `name_en`/`name_hi` kisi bhi property key me ho, yeh file har sub-category
 *    object me `title` aur `subtitle` ko hamesha valid rakhti hai taaki UI card par
 *    kabhi bhi "undefined" na likha aaye.
 * ==============================================================================
 */

(function () {
  'use strict';

  // ==============================================================================
  // 0. UNIVERSAL ANTI-UNDEFINED NORMALIZER HELPERS (TOLERANT SCHEMA CONTRACT)
  // ==============================================================================

  function isValidText(val) {
    if (typeof val !== 'string') return false;
    var t = val.trim();
    return t.length > 0 && t.toLowerCase() !== 'undefined' && t.toLowerCase() !== 'null';
  }

  function formatSubCode(rawId, fallbackCatNum, idx) {
    var str = String(rawId || '').trim().replace(/^[cg]/i, '').replace(/^sub-/i, '');
    var m = str.match(/(\d{1,2})\s*-\s*(\d{1,2})/);
    if (m) {
      var major = parseInt(m[1], 10);
      var minor = parseInt(m[2], 10);
      return (major < 10 ? '0' + major : String(major)) + '-' + minor;
    }
    if (fallbackCatNum && idx) {
      var cNum = parseInt(String(fallbackCatNum).replace(/[^0-9]/g, ''), 10);
      return (cNum < 10 ? '0' + cNum : String(cNum)) + '-' + idx;
    }
    return str;
  }

  function normalizeSubcategoryObject(sub, subKey, existingSub) {
    var merged = Object.assign({}, existingSub || {}, sub || {});
    var paddedCode = formatSubCode(subKey || merged.id || merged.seq || merged.code);

    var en = [
      merged.enName, merged.enTitle, merged.name_en, merged.en,
      existingSub && existingSub.enName, existingSub && existingSub.enTitle
    ].find(isValidText) || '';

    var hi = [
      merged.hiName, merged.hiTitle, merged.name_hi, merged.hi, merged.subtitle,
      existingSub && existingSub.hiName, existingSub && existingSub.hiTitle, existingSub && existingSub.subtitle
    ].find(isValidText) || '';

    var directTitle = [
      merged.title, merged.name, merged.label,
      existingSub && existingSub.title, existingSub && existingSub.name
    ].find(isValidText) || '';

    if (!en && directTitle) {
      var paren = directTitle.match(/^([^()]+)\(([^()]+)\)/);
      if (paren) {
        en = paren[1].trim();
        if (!hi) hi = paren[2].trim();
      } else {
        en = directTitle;
      }
    }

    var resolvedTitle = '';
    if (isValidText(directTitle)) {
      resolvedTitle = directTitle;
    } else if (en && hi && en.indexOf(hi) === -1) {
      resolvedTitle = en + ' (' + hi + ')';
    } else {
      resolvedTitle = en || hi || ('सेवा #' + (paddedCode || 'RM'));
    }

    merged.id = merged.id || paddedCode;
    merged.code = paddedCode || merged.code || merged.id;
    merged.seq = paddedCode || merged.seq || merged.id;
    merged.title = resolvedTitle;
    merged.name = resolvedTitle;
    merged.label = resolvedTitle;
    merged.enName = en || resolvedTitle;
    merged.enTitle = en || resolvedTitle;
    merged.hiName = hi || en || resolvedTitle;
    merged.hiTitle = hi || en || resolvedTitle;
    merged.subtitle = hi || merged.subtitle || en || 'सत्यापित स्थानीय जनसेवा';
    merged.icon = isValidText(merged.icon) ? merged.icon : ((existingSub && isValidText(existingSub.icon)) ? existingSub.icon : '✨');
    merged.badge = isValidText(merged.badge) ? merged.badge : 'खोलें ›';

    return merged;
  }

  function mergeCategoryRecord(existingCat, incomingCat, keyHint) {
    var base = Object.assign({}, existingCat || {}, incomingCat || {});
    var rawNum = String(keyHint || base.catId || base.num || base.id || '').replace(/[^0-9]/g, '');
    var intNum = rawNum ? String(parseInt(rawNum, 10)) : '';
    var paddedNum = rawNum ? ((parseInt(rawNum, 10) < 10 ? '0' : '') + intNum) : '';

    var en = [
      base.title, base.enName, base.category_name_en,
      existingCat && existingCat.title, existingCat && existingCat.enName
    ].find(isValidText) || ('Category ' + paddedNum);

    var hi = [
      base.subtitle, base.hiName, base.hindiTitle, base.category_name_hi,
      existingCat && existingCat.subtitle, existingCat && existingCat.hiName
    ].find(isValidText) || 'दैनिक जनसेवाएं';

    base.id = base.id || ('c' + paddedNum);
    base.catId = intNum || base.catId;
    base.num = base.num || (paddedNum ? paddedNum + '.' : '');
    base.title = en;
    base.enName = base.enName || en;
    base.subtitle = hi;
    base.hiName = base.hiName || hi;
    base.hindiTitle = base.hindiTitle || hi;
    base.icon = isValidText(base.icon) ? base.icon : ((existingCat && isValidText(existingCat.icon)) ? existingCat.icon : '📦');

    var subDict = {};

    // 1. Preserve existing subcategories
    if (existingCat && existingCat.subcategories && typeof existingCat.subcategories === 'object') {
      Object.keys(existingCat.subcategories).forEach(function (k) {
        var normCode = formatSubCode(k, paddedNum);
        subDict[normCode] = normalizeSubcategoryObject(existingCat.subcategories[k], normCode);
      });
    }
    if (existingCat && Array.isArray(existingCat.children)) {
      existingCat.children.forEach(function (ch, idx) {
        var normCode = formatSubCode(ch && (ch.id || ch.seq || ch.code), paddedNum, idx + 1);
        subDict[normCode] = normalizeSubcategoryObject(ch, normCode, subDict[normCode]);
      });
    }

    // 2. Merge incoming children array (from categories-data.js)
    if (Array.isArray(base.children)) {
      base.children.forEach(function (ch, idx) {
        var normCode = formatSubCode(ch && (ch.id || ch.seq || ch.code), paddedNum, idx + 1);
        subDict[normCode] = normalizeSubcategoryObject(ch, normCode, subDict[normCode]);
      });
    }

    // 3. Merge incoming subcategories object/array (from ext-cat-*.js / ext-batch-*.js)
    if (base.subcategories && typeof base.subcategories === 'object') {
      if (Array.isArray(base.subcategories)) {
        base.subcategories.forEach(function (ch, idx) {
          var normCode = formatSubCode(ch && (ch.id || ch.seq || ch.code), paddedNum, idx + 1);
          subDict[normCode] = normalizeSubcategoryObject(ch, normCode, subDict[normCode]);
        });
      } else {
        Object.keys(base.subcategories).forEach(function (k, idx) {
          var normCode = formatSubCode(k, paddedNum, idx + 1);
          subDict[normCode] = normalizeSubcategoryObject(base.subcategories[k], normCode, subDict[normCode]);
        });
      }
    }

    // 4. Bind all lookup variations ('03-1', '3-1', 'sub-03-1', 'sub-3-1')
    var finalSubMap = {};
    var finalChildren = [];
    Object.keys(subDict).forEach(function (codeKey) {
      var normSub = subDict[codeKey];
      finalSubMap[codeKey] = normSub;
      var m = codeKey.match(/(\d{1,2})-(\d{1,2})/);
      if (m) {
        var unpadded = parseInt(m[1], 10) + '-' + parseInt(m[2], 10);
        var padded = (parseInt(m[1], 10) < 10 ? '0' : '') + parseInt(m[1], 10) + '-' + parseInt(m[2], 10);
        finalSubMap[unpadded] = normSub;
        finalSubMap[padded] = normSub;
        finalSubMap['sub-' + unpadded] = normSub;
        finalSubMap['sub-' + padded] = normSub;
      }
      if (finalChildren.indexOf(normSub) === -1) {
        finalChildren.push(normSub);
      }
    });

    base.subcategories = finalSubMap;
    base.children = finalChildren;
    return base;
  }

  // ==============================================================================
  // 1. IN-MEMORY CANONICAL REGISTRY STORE (WITH ALL 17 INSTANT DOM TITLE SEEDS)
  // ==============================================================================

  var RM_CATALOG_REGISTRY = {
    '1':  { id: 'c01', catId: '1',  num: '01.', icon: '🎨', title: 'Art & Design', subtitle: 'फ्लेक्स बोर्ड, डिजिटल कार्ड, बिल बुक व विनाइल प्रिंटिंग' },
    '2':  { id: 'c02', catId: '2',  num: '02.', icon: '🚗', title: 'Auto & Vehicles', subtitle: 'ऑन-साइट पंचर, बैटरी जंपस्टार्ट, चालान व पुरानी गाड़ी बाजार' },
    '3':  { id: 'c03', catId: '3',  num: '03.', icon: '✂️', title: 'Beauty', subtitle: 'घर पर फेशियल, दुल्हन मेकअप, मेहंदी व नाई टोकन' },
    '4':  { id: 'c04', catId: '4',  num: '04.', icon: '📖', title: 'Books & Reference', subtitle: 'पुस्तकालय, संदर्भ पुस्तकें, अध्ययन सामग्री व वाचनालय' },
    '5':  { id: 'c05', catId: '5',  num: '05.', icon: '💼', title: 'Business', subtitle: 'व्यापार निबंधन, एमएसएमई, जीएसटी, टैक्स व व्यावसायिक सेवाएं' },
    '6':  { id: 'c06', catId: '6',  num: '06.', icon: '🦸', title: 'Comics', subtitle: 'चित्रकथा, बाल साहित्य, कॉमिक्स व रचनात्मक एनीमेशन' },
    '7':  { id: 'c07', catId: '7',  num: '07.', icon: '💬', title: 'Communication', subtitle: 'प्रज्ञा केंद्र, ऑनलाइन फॉर्म, डिजिटल दस्तावेज व डाक सेवाएं' },
    '8':  { id: 'c08', catId: '8',  num: '08.', icon: '💍', title: 'Dating', subtitle: 'सत्यापित वैवाहिक संबंध, रिश्ते व पारिवारिक मैचमेकिंग' },
    '9':  { id: 'c09', catId: '9',  num: '09.', icon: '🎓', title: 'Education', subtitle: 'प्रतियोगी परीक्षा कोचिंग, ट्यूशन, कौशल विकास व कक्षाएं' },
    '10': { id: 'c10', catId: '10', num: '10.', icon: '🎭', title: 'Entertainment', subtitle: 'टेंट हाउस, साउंड सिस्टम, स्टेज लाइटिंग व सांस्कृतिक आयोजन' },
    '14': { id: 'c14', catId: '14', num: '14.', icon: '🧘', title: 'Health & Fitness', subtitle: 'स्वस्थ मन, देसी अखाड़ा, योग, प्राकृतिक चिकित्सा व स्वास्थ्य लाभ' },
    '15': { id: 'c15', catId: '15', num: '15.', icon: '🏠', title: 'House & Home', subtitle: 'कमरा खोजें (0% ब्रोकरेज), किराया बहीखाता व बिजली यूनिट, ऑन-कॉल मिस्त्री' },
    '16': { id: 'c16', catId: '16', num: '16.', icon: '📚', title: 'Libraries & Demo', subtitle: 'प्रतियोगी छात्र एसी केबिन डेस्क, पुरानी किताबें व स्टेशनरी' },
    '33': { id: 'c33', catId: '33', num: '33.', icon: '🎯', title: 'Action', subtitle: 'PS5/PC गेमिंग पार्लर, ई-स्पोर्ट्स टूर्नामेंट व लेजर टैग एरीना' },
    '34': { id: 'c34', catId: '34', num: '34.', icon: '🧭', title: 'Adventure', subtitle: 'ट्रेकिंग कैंप, ट्रेजर हंट क्वेस्ट व एडवेंचर पार्क एंट्री' },
    '35': { id: 'c35', catId: '35', num: '35.', icon: '🕹️', title: 'Arcade', subtitle: 'क्लासिक आर्केड गेम्स, रेट्रो जॉयस्टिक, स्पीड रन व तुरंत एक्शन' },
    '50': { id: 'c50', catId: '50', num: '50.', icon: '👨‍👩‍👧‍👦', title: 'Family', subtitle: 'शनिवार पारिवारिक तंबोला (Housie), मोहल्ला मेला स्टॉल्स व किटी पार्टी' }
  };

  // Seed aliases for instant lookup (100% ZEL Preserved)
  Object.keys(RM_CATALOG_REGISTRY).forEach(function (num) {
    var item = mergeCategoryRecord(null, RM_CATALOG_REGISTRY[num], num);
    RM_CATALOG_REGISTRY[num] = item;
    if (item) {
      RM_CATALOG_REGISTRY['c' + num] = item;
      var intVal = parseInt(num, 10);
      var padded = (intVal < 10 ? '0' : '') + intVal;
      RM_CATALOG_REGISTRY[padded] = item;
      RM_CATALOG_REGISTRY['c' + padded] = item;
    }
  });

  // Auto-hydration from categories-data.js (RM_SERVICES_DATA & RM_GAMES_DATA)
  function hydrateFromBaseCategoriesData() {
    var baseList = [].concat(window.RM_SERVICES_DATA || [], window.RM_GAMES_DATA || []);
    baseList.forEach(function (cat) {
      if (!cat) return;
      var num = String(cat.num || cat.id || '').replace(/[^0-9]/g, '');
      if (!num) return;
      var intNum = String(parseInt(num, 10));
      var padded = (parseInt(num, 10) < 10 ? '0' : '') + intNum;
      var merged = mergeCategoryRecord(RM_CATALOG_REGISTRY[intNum], cat, intNum);
      RM_CATALOG_REGISTRY[intNum] = merged;
      RM_CATALOG_REGISTRY['c' + intNum] = merged;
      RM_CATALOG_REGISTRY[padded] = merged;
      RM_CATALOG_REGISTRY['c' + padded] = merged;
    });
  }

  hydrateFromBaseCategoriesData();
  window.addEventListener('RM_CATALOG_DATA_READY', hydrateFromBaseCategoriesData);

  // ==============================================================================
  // 2. AUTHORITATIVE ENGINE API WITH DYNAMIC RESOLUTION & ZEL MERGE
  // ==============================================================================

  window.RM_CATALOG_REGISTRY = {
    getCategoryData: function (catId) {
      if (!catId) return null;
      hydrateFromBaseCategoriesData();
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
      if (!subId && typeof catId === 'string' && catId.indexOf('-') !== -1) {
        subId = catId;
        catId = catId.split('-')[0];
      }
      var cat = this.getCategoryData(catId);
      if (!cat || !cat.subcategories) return null;
      var cleanSubId = String(subId).replace(/^[cg]/, '');
      var numParts = String(subId).match(/\d+/g);
      var normSubId = numParts && numParts.length >= 2 ? (parseInt(numParts[0], 10) + '-' + parseInt(numParts[1], 10)) : cleanSubId;
      var paddedSubId = numParts && numParts.length >= 2 ? ((parseInt(numParts[0], 10) < 10 ? '0' : '') + parseInt(numParts[0], 10) + '-' + parseInt(numParts[1], 10)) : cleanSubId;

      var found = cat.subcategories[cleanSubId] ||
                  cat.subcategories[normSubId] ||
                  cat.subcategories[paddedSubId];

      // Backward compatible fallbacks (100% ZEL Preserved)
      if (!found && normSubId === '15-1' && cat.subcategories['14-1']) found = cat.subcategories['14-1'];
      if (!found && normSubId === '15-2' && cat.subcategories['14-2']) found = cat.subcategories['14-2'];
      if (!found && normSubId === '15-3' && cat.subcategories['14-3']) found = cat.subcategories['14-3'];
      if (!found && normSubId === '16-1' && cat.subcategories['15-1']) found = cat.subcategories['15-1'];
      if (!found && normSubId === '16-2' && cat.subcategories['15-2']) found = cat.subcategories['15-2'];
      if (!found && normSubId === '16-3' && cat.subcategories['15-3']) found = cat.subcategories['15-3'];

      return found ? normalizeSubcategoryObject(found, paddedSubId) : null;
    },

    registerBatch: function (batchData) {
      if (typeof batchData === 'object' && batchData !== null) {
        hydrateFromBaseCategoriesData();
        Object.keys(batchData).forEach(function (key) {
          var item = batchData[key];
          if (!item || typeof item !== 'object') return;
          var num = key.replace(/[^0-9]/g, '');
          var intKey = num ? String(parseInt(num, 10)) : key;
          var existing = RM_CATALOG_REGISTRY[intKey] || RM_CATALOG_REGISTRY[key];
          var merged = mergeCategoryRecord(existing, item, intKey);
          RM_CATALOG_REGISTRY[key] = merged;
          if (num) {
            var intNum = String(parseInt(num, 10));
            var padded = (parseInt(num, 10) < 10 ? '0' : '') + intNum;
            RM_CATALOG_REGISTRY[intNum] = merged;
            RM_CATALOG_REGISTRY['c' + intNum] = merged;
            RM_CATALOG_REGISTRY[padded] = merged;
            RM_CATALOG_REGISTRY['c' + padded] = merged;
          }
        });

        enforcePlayStoreTitlesInDOM();
        // Trigger dynamic DOM card sweep if engine is active
        if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
          setTimeout(window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog, 20);
          setTimeout(enforcePlayStoreTitlesInDOM, 50);
        }
      }
    },

    getAllCategories: function () {
      hydrateFromBaseCategoriesData();
      return RM_CATALOG_REGISTRY;
    },

    getTier1Categories: function () {
      return window.RM_SERVICES_DATA || [];
    },

    getTier2Categories: function () {
      return window.RM_GAMES_DATA || [];
    }
  };

  // ==============================================================================
  // 3. REAL-TIME DOM TITLE & ANTI-UNDEFINED PURGE HOOK (PARENT + SUB-CARDS)
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
        if (titleEl && (titleEl.textContent.indexOf('Category') !== -1 || titleEl.textContent.indexOf('undefined') !== -1 || titleEl.textContent.trim().length <= 4)) {
          titleEl.textContent = canonical.title;
        }
        var subEl = card.querySelector('p, .category-subtitle, .text-sm.text-slate-400');
        if (subEl && (subEl.textContent.indexOf('दैनिक जनसेवाएं') !== -1 || subEl.textContent.indexOf('undefined') !== -1)) {
          subEl.textContent = canonical.subtitle;
        }
        var iconEl = card.querySelector('.category-icon, .text-2xl, .text-3xl');
        if (iconEl && (iconEl.textContent.indexOf('📦') !== -1 || iconEl.querySelector('img[src*="box"]'))) {
          iconEl.textContent = canonical.icon;
        }
      }
    });

    // Sub-category anti-undefined healer (heals 03-1, 03-2, 03-3 & all 150 sub-wings)
    var modal = document.getElementById('categoryModal');
    if (modal) {
      var leafNodes = modal.querySelectorAll('div, span, h3, h4, h5, p, strong');
      leafNodes.forEach(function (el) {
        if (el.children.length > 0) return;
        var txt = (el.textContent || '').trim();
        if (txt === 'undefined' || txt.indexOf('undefined') !== -1) {
          var curr = el.parentElement;
          var foundCode = '';
          while (curr && curr !== modal) {
            var m = (curr.textContent || '').match(/\b(\d{1,2})\s*-\s*(\d{1,2})\b/);
            if (m) {
              foundCode = (parseInt(m[1], 10) < 10 ? '0' + parseInt(m[1], 10) : m[1]) + '-' + m[2];
              break;
            }
            curr = curr.parentElement;
          }
          if (foundCode) {
            var subObj = window.RM_CATALOG_REGISTRY.getSubcategoryData(foundCode.split('-')[0], foundCode);
            if (subObj && isValidText(subObj.title)) {
              el.textContent = subObj.title;
            }
          }
        }
      });
    }
  }

  // Poll DOM & observe mutations to ensure zero residual placeholder or undefined artifacts
  function bindModalAntiUndefinedObserver() {
    var modal = document.getElementById('categoryModal');
    if (!modal || modal.__rmAntiUndefinedBound) return;
    modal.__rmAntiUndefinedBound = true;
    var obs = new MutationObserver(function () {
      enforcePlayStoreTitlesInDOM();
    });
    obs.observe(modal, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      hydrateFromBaseCategoriesData();
      enforcePlayStoreTitlesInDOM();
      bindModalAntiUndefinedObserver();
      setTimeout(enforcePlayStoreTitlesInDOM, 100);
      setTimeout(enforcePlayStoreTitlesInDOM, 500);
      setTimeout(enforcePlayStoreTitlesInDOM, 1500);
    });
  } else {
    hydrateFromBaseCategoriesData();
    enforcePlayStoreTitlesInDOM();
    bindModalAntiUndefinedObserver();
    setTimeout(enforcePlayStoreTitlesInDOM, 100);
    setTimeout(enforcePlayStoreTitlesInDOM, 500);
    setTimeout(enforcePlayStoreTitlesInDOM, 1500);
  }

  document.addEventListener('click', function () {
    setTimeout(enforcePlayStoreTitlesInDOM, 30);
    setTimeout(enforcePlayStoreTitlesInDOM, 150);
  }, true);

  // ==============================================================================
  // 4. MICRO-BATCH EXTENSION LOADER (100% ATOMIC MODULES 01 TO 20 + BATCHES 21-50)
  // ==============================================================================

  var extBatches = [
    'ext-cat-01.js', 'ext-cat-02.js', 'ext-cat-03.js', 'ext-cat-04.js', 'ext-cat-05.js',
    'ext-cat-06.js', 'ext-cat-07.js', 'ext-cat-08.js', 'ext-cat-09.js', 'ext-cat-10.js',
    'ext-cat-11.js', 'ext-cat-12.js', 'ext-cat-13.js', 'ext-cat-14.js', 'ext-cat-15.js',
    'ext-cat-16.js', 'ext-cat-17.js', 'ext-cat-18.js', 'ext-cat-19.js', 'ext-cat-20.js',
    'ext-batch-21-25.js',
    'ext-batch-26-30.js',
    'ext-batch-31-35.js',
    'ext-batch-36-40.js',
    'ext-batch-41-45.js',
    'ext-batch-46-50.js'
  ];

  extBatches.forEach(function (file) {
    if (!document.querySelector('script[src*="' + file + '"]')) {
      var s = document.createElement('script');
      s.src = '/js/universal-catalog/extensions/' + file;
      s.async = true;
      document.head.appendChild(s);
    }
  });

})();
