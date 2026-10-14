/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION [CATEGORY 02]
 * MODULE        : Official Google Play Store Standard Category 02 (Auto & Vehicles)
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) ISOLATED ATOMIC MODULE
 * BENCHMARK     : Park+, GoMechanic, Cars24 (Highest GMV Ground Model)
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-cat-02.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var cat02 = {
    id: 'c02',
    catId: '2',
    number: '02.',
    num: '02.',
    icon: '🚗',
    title: 'Auto & Vehicles',
    category_name_en: 'Auto & Vehicles',
    category_name_hi: 'वाहन सेवा, रिपेयरिंग व आरटीओ समाधान',
    subtitle: 'ऑन-साइट पंचर, बैटरी जंपस्टार्ट, चालान व पुरानी गाड़ी बाजार',
    rating: '★ 4.9 (26k+ वाहन चालक)',
    trustBadge: 'Mechanic & RTO Verified',
    supportBadge: '15-मिनट ऑन-साइट सहायता',
    macroPillars: [
      { text: '🛠️ 02-1: ऑन-साइट ट्यूबलेस पंचर, बैटरी जंपस्टार्ट व टोइंग', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🛵 02-2: डोरस्टेप बाइक/कार सर्विस, इंजन ऑयल व फोम वॉश', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🚦 02-3: पेंडिंग ट्रैफिक चालान छूट, आरसी ट्रांसफर व पुरानी गाड़ी', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '2-1': {
        code: '[02-1]',
        sub_code: '02-1',
        slug: 'roadside-puncture-breakdown',
        icon: '🛠️',
        title: 'Roadside Puncture & Breakdown',
        hindiTitle: 'ऑन-साइट पंचर, बैटरी जंपस्टार्ट व टोइंग',
        categoryTag: 'रोडसाइड असिस्टेंस',
        tag: 'रोडसाइड असिस्टेंस',
        rating: '★ 4.9',
        reviewCount: '11,800+ रेस्क्यू',
        metaBadge: '15-मिनट में मैकेनिक',
        servicesTitle: 'आपातकालीन वाहन सेवाएं:',
        services: [
          { text: '🛞 कार व बाइक ट्यूबलेस पंचर रिपेयर (ऑन-स्पॉट)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🔋 डेड बैटरी जंपस्टार्ट व नई एक्सिड/अमरोन बैटरी', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏗️ 24x7 हाइड्रोलिक क्रेन टोइंग (निकटतम गैराज तक)', bg: 'rgba(239,68,68,0.15)', c: '#f87171' },
          { text: '⛽ इमरजेंसी पेट्रोल/डीजल डिलीवरी (2 से 5 लीटर)', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: [
          'हाईवे या सुनसान रास्ते पर गाड़ी खराब होने पर 15 मिनट में ऑन-साइट मैकेनिक पहुंच।',
          'ट्यूबलेस टायर पंचर, मशरूम पैच व तुरंत बैटरी जंपस्टार्ट।',
          'तय और पारदर्शी विजिट चार्ज, कोई अनुचित ओवरचार्जिंग नहीं।'
        ],
        btnText: 'ऑन-साइट मैकेनिक बुलाएं',
        chips: ['Sabhi', 'Tyre Puncture', 'Battery Jumpstart', 'Hydraulic Towing', 'Fuel Emergency', '15-Min Rescue']
      },
      '2-2': {
        code: '[02-2]',
        sub_code: '02-2',
        slug: 'doorstep-bike-car-service',
        icon: '🛵',
        title: 'Doorstep Bike & Car Service',
        hindiTitle: 'डोरस्टेप बाइक/कार सर्विस व फोम वॉश',
        categoryTag: 'वाहन मेंटेनेंस',
        tag: 'वाहन मेंटेनेंस',
        rating: '★ 4.8',
        reviewCount: '8,900+ सर्विस',
        metaBadge: '100% असली स्पेयर पार्ट्स',
        servicesTitle: 'मेंटेनेंस व सर्विसिंग पैकेज:',
        services: [
          { text: '🏍️ 2-व्हीलर जनरल सर्विस (कैस्ट्रोल इंजन ऑयल + एयर फिल्टर)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🚗 4-व्हीलर 25-पॉइंट चेकअप, ब्रेक शू व एसी कूलिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🫧 हाई-प्रेशर शैम्पू फोम वॉश व टेफ्लॉन कोटिंग पॉलिश', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '⚙️ क्लच प्लेट, चेन सेट व डिस्क ब्रेक पैड रिप्लेसमेंट', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'गैराज के चक्कर काटने से मुक्ति—मैकेनिक आपके घर पर आकर करेगा पूरी सर्विस।',
          'सीलबंद ओरिजिनल कैस्ट्रोल इंजन ऑयल व कंपनी फिटेड स्पेयर पार्ट्स।',
          'सर्विस के बाद 30-दिन या 500 किमी तक की कार्य संतुष्टि वारंटी।'
        ],
        btnText: 'सर्विस स्लॉट बुक करें',
        chips: ['Sabhi', 'Bike Service', 'Car Service', 'Castrol Oil', 'Foam Wash', 'Brake Pad', '30-Day Warranty']
      },
      '2-3': {
        code: '[02-3]',
        sub_code: '02-3',
        slug: 'rto-challan-used-vehicles',
        icon: '🚦',
        title: 'RTO Challan & Used Vehicles',
        hindiTitle: 'आरटीओ चालान, ट्रांसफर व पुरानी गाड़ी बाजार',
        categoryTag: 'आरटीओ व वाहन बाजार',
        tag: 'आरटीओ व वाहन बाजार',
        rating: '★ 4.9',
        reviewCount: '5,500+ केस व गाड़ियां',
        metaBadge: 'लोक अदालत चालान छूट',
        servicesTitle: 'आरटीओ व रीसेल सेवाएं:',
        services: [
          { text: '🚦 पेंडिंग ट्रैफिक चालान चेक व लोक अदालत छूट निपटारा', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📑 आरसी ओनरशिप ट्रांसफर, एनओसी व एचपी निरस्तीकरण', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🔍 पुरानी कार/बाइक 50-पॉइंट तकनीकी जांच व मूल्यांकन', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🤝 सत्यापित मालिकों से सीधे पुरानी गाड़ी खरीद-बिक्री (0% ब्रोकरेज)', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: [
          'ट्रैफिक चालान पर कानूनी सहायता—लोक अदालत में 50% से 70% तक की छूट निपटारा।',
          'गाड़ी खरीदते समय मीटर टेम्परिंग व इंजन कंडीशन की पारदर्शी जांच रिपोर्ट।',
          'आरसी ट्रांसफर व फिटनेस रिन्यूअल बिना किसी सरकारी दफ्तर के धक्के।'
        ],
        btnText: 'चालान / आरसी जांचें',
        chips: ['Sabhi', 'Challan Discount', 'RC Transfer', 'Vehicle NOC', 'Used Cars', 'Engine Inspection']
      }
    }
  };

  var BATCH_02 = {
    '2': cat02,
    '02': cat02,
    'c02': cat02,
    'c2': cat02
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_02);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_02);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_02);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_02);
      }
    });
  }
})();
