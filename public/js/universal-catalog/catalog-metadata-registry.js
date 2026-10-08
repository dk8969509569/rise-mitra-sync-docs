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
    // CATEGORY 16: HOUSE & HOME (GOLDEN BLUEPRINT - ZERO DUPLICATION)
    '16': {
      id: 'c16',
      number: '16.',
      icon: '🏠',
      title: 'House & Home',
      subtitle: 'घर, आवास व दैनिक व्यवस्थापन केंद्र',
      rating: '★ 4.9 (12k+ परिवार)',
      trustBadge: 'Rise Verified Network',
      supportBadge: '24x7 सहायता केंद्र',
      macroPillars: [
        { text: '🛠️ 16-1: गृह मरम्मत व कुशल कारीगर', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.12)' },
        { text: '📋 16-2: डिजिटल किराया बहीखाता व लेजर', color: '#34d399', bg: 'rgba(52, 211, 153, 0.12)' },
        { text: '🏠 16-3: 0% ब्रोकरेज कमरा व फ्लैट खोज', color: '#facc15', bg: 'rgba(250, 204, 21, 0.12)' }
      ],
      subcategories: {
        '16-1': {
          code: '[16-1]',
          icon: '🛠️',
          title: 'Mistry & Home Repair',
          hindiTitle: 'मिस्त्री व दैनिक घरेलू मरम्मत सेवाएं',
          categoryTag: 'होम मेंटेनेंस',
          rating: '★ 4.8',
          reviewCount: '2,400+ समीक्षाएं',
          metaBadge: '⚡ 30 मिनट विज़िट',
          servicesTitle: 'उपलब्ध प्रमाणित कारीगर सेवाएं:',
          services: [
            { text: '🚰 प्लंबर (नल, मोटर, पाइप लीकेज)', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
            { text: '⚡ इलेक्ट्रीशियन (शॉर्ट सर्किट, वायरिंग)', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
            { text: '🪚 बढ़ई / कारपेंटर (फर्नीचर, ताला, किवाड़)', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
            { text: '🎨 पेंटर (वॉल पुट्टी, डिस्टेंपर, वॉटरप्रूफ)', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' },
            { text: '🧱 राजमिस्त्री (टाइल फिटिंग, प्लास्टर, चिनाई)', bg: 'rgba(52,211,153,0.12)', c: '#34d399' }
          ],
          highlights: [
            'तय और पारदर्शी रेट कार्ड — काम से पहले पक्का रेट, कोई मोलभाव नहीं।',
            '30 मिनट में स्थानीय व आधार-सत्यापित कारीगर आपके दरवाजे पर।',
            '7 दिन की कार्य संतुष्टि वारंटी व शून्य छुपा शुल्क।'
          ]
        },
        '16-2': {
          code: '[16-2]',
          icon: '📋',
          title: 'Rental Ledger',
          hindiTitle: 'किराया बहीखाता व किरायेदार प्रबंधन',
          categoryTag: 'फाइनेंस व प्रॉपर्टी टूल',
          rating: '★ 4.9',
          reviewCount: '4,800+ मकान मालिक',
          metaBadge: '₹0 आजीवन मुफ्त',
          servicesTitle: 'डिजिटल बहीखाता मुख्य टूल्स:',
          services: [
            { text: '🧾 1-क्लिक WhatsApp किराया रसीद (PDF)', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
            { text: '⚡ ऑटो सब-मीटर बिजली यूनिट कैलकुलेटर', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
            { text: '👥 किरायेदार आधार व पुलिस सत्यापन रिकॉर्ड', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
            { text: '⏰ स्वचालित मासिक SMS / WhatsApp ड्यू अलर्ट', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
            { text: '📑 कानूनी रेंट एग्रीमेंट ड्राफ्ट व ई-हस्ताक्षर', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
          ],
          highlights: [
            'पुराने रजिस्टर व डायरी से मुक्ति — बिजली यूनिट डालते ही कुल बिल का ऑटो कैलकुलेशन।',
            'मकान मालिक और किरायेदार दोनों के फोन पर रियल-टाइम हिसाब सिंक।',
            '100% सुरक्षित क्लाउड बैकअप व ऑटोमेटेड पेमेंट ट्रैकिंग।'
          ]
        },
        '16-3': {
          code: '[16-3]',
          icon: '🏠',
          title: 'Room & Flat Search',
          hindiTitle: 'कमरा, फ्लैट व पीजी खोज (0% दलाली)',
          categoryTag: 'रेंटल प्रॉपर्टी नेटवर्क',
          rating: '★ 4.9',
          reviewCount: '9,200+ छात्र व परिवार',
          metaBadge: '0% ब्रोकरेज',
          servicesTitle: 'किराए हेतु उपलब्ध विकल्प:',
          services: [
            { text: '🛏️ सिंगल कमरा / 1 RK (स्टूडेंट्स व जॉब)', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
            { text: '🏢 1 BHK / 2 BHK / 3 BHK फैमिली फ्लैट', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
            { text: '👩 गर्ल्स हॉस्टल व सेफ पीजी (CCTV व सुरक्षा)', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
            { text: '👨 बॉयज लॉज व मेस सुविधा', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
            { text: '🏬 दुकान व कमर्शियल ऑफिस स्पेस', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
          ],
          highlights: [
            'बिना किसी दलाल या ब्रोकर के सीधे असली मकान मालिक से बात करें।',
            'लालपुर, डोरंडा, बरियातू, हीनू, कांके, मोराबादी के सत्यापित रूम व फ्लैट।',
            'पानी, बिजली सब-मीटर, पार्किंग व गेट टाइमिंग की पहले से स्पष्ट जानकारी।'
          ]
        }
      }
    }
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
