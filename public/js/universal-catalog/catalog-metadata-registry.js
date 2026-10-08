/**
 * RISE MITRA — UNIVERSAL CATALOG METADATA REGISTRY (SSOT)
 * MODULE        : Centralized High-Performance Catalog Registry for All 50 Categories
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/universal-catalog/catalog-metadata-registry.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var RM_CATALOG_REGISTRY = {
    // CATEGORY 16: GOLDEN BLUEPRINT (SSOT)
    '16': {
      id: 'c16',
      number: '16.',
      icon: '🏠',
      title: 'House & Home',
      subtitle: 'घर, आवास व दैनिक व्यवस्थापन केंद्र',
      rating: '★ 4.9',
      trustBadge: 'Rise Verified Network',
      supportBadge: '24x7 सहायता',
      macroPillars: [
        { text: '🏡 संपूर्ण घरेलू समाधान', color: '#93c5fd', bg: '#1e293b' },
        { text: '🛡️ 100% सुरक्षित लेन-देन', color: '#86efac', bg: '#1e293b' },
        { text: '📍 स्थानीय मित्र सपोर्ट', color: '#fde047', bg: '#1e293b' }
      ],
      subcategories: {
        '16-1': {
          code: '[16-1]',
          icon: '🛠️',
          title: 'Mistry & Home Repair',
          hindiTitle: 'मिस्त्री व गृह मरम्मत',
          rating: '★ 4.8',
          metaBadge1: '120+ कुशल कारीगर',
          metaBadge2: '⚡ 30 मिनट विज़िट',
          tags: [
            { text: '🚰 प्लम्बिंग व नल फिटिंग', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
            { text: '⚡ वायरिंग व उपकरण रिपेयर', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
            { text: '🚪 बढ़ई व फर्नीचर कार्य', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
            { text: '🎨 पुताई व वॉलकेयर', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' },
            { text: '🧱 राजमिस्त्री व प्लास्टर', bg: 'rgba(52,211,153,0.12)', c: '#34d399' }
          ],
          description: 'घर की हर मरम्मत और मेंटेनेंस के लिए एक ही जगह पर विश्वसनीय सेवा, पारदर्शी रेट कार्ड व कार्य गारंटी।'
        },
        '16-2': {
          code: '[16-2]',
          icon: '📋',
          title: 'Rental Ledger',
          hindiTitle: 'किराया बहीखाता',
          rating: '★ 4.9',
          metaBadge1: '₹0 कमीशन',
          metaBadge2: '📱 WhatsApp रसीद',
          tags: [
            { text: '🧾 1-टैप किराया रसीद', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
            { text: '⚡ सब-मीटर कैलकुलेटर', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
            { text: '👥 किराएदार खाता प्रबंधन', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
            { text: '📑 डिजिटल रेंट एग्रीमेंट', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
          ],
          description: 'मकान मालिक और किराएदार दोनों के लिए आसान और पारदर्शी डिजिटल हिसाब-किताब, PDF रसीद व SMS ड्यू अलर्ट।'
        },
        '16-3': {
          code: '[16-3]',
          icon: '🏠',
          title: 'Room & Flat Search',
          hindiTitle: 'कमरा व फ्लैट खोज',
          rating: '★ 4.9',
          metaBadge1: '0% ब्रोकरेज',
          metaBadge2: '🏠 डायरेक्ट मकान मालिक',
          tags: [
            { text: '🛏️ सिंगल/शेयरिंग रूम', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
            { text: '🏢 1/2/3 BHK फ्लैट', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
            { text: '👩 गर्ल्स हॉस्टल/PG', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
            { text: '👨 बॉयज लॉज', bg: 'rgba(250,204,21,0.12)', c: '#facc15' }
          ],
          description: 'बिना किसी ब्रोकर और दलाली के सीधे मकान मालिक से किराए पर कमरा या फ्लैट लें। लालपुर, डोरंडा, बरियातू, कांके।'
        }
      }
    }

    // CATEGORIES 01 TO 50 WILL BE APPENDED HERE IN AUTOMATED BATCHES
  };

  // Authoritative Registry API
  window.RM_CATALOG_REGISTRY = {
    getCategoryData: function (catId) {
      var cleanId = String(catId).replace(/^[c]/, '');
      return RM_CATALOG_REGISTRY[cleanId] || null;
    },
    getSubcategoryData: function (catId, subId) {
      var cat = this.getCategoryData(catId);
      if (!cat || !cat.subcategories) return null;
      var cleanSubId = String(subId).replace(/^[c]/, '');
      return cat.subcategories[cleanSubId] || null;
    },
    registerBatch: function (batchData) {
      if (typeof batchData === 'object') {
        Object.assign(RM_CATALOG_REGISTRY, batchData);
      }
    }
  };
})();
