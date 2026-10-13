/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION [CATEGORY 18]
 * MODULE        : Official Google Play Store Standard Category 18 (Maps & Navigation)
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) ISOLATED ATOMIC MODULE
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-cat-18.js
 */

(function () {
  'use strict';

  var cat18 = {
    id: 'c18',
    catId: '18',
    number: '18.',
    num: '18.',
    icon: '🧭',
    title: 'Maps & Navigation',
    category_name_en: 'Maps & Navigation',
    category_name_hi: 'परिवहन, टैक्सी व माल ढुलाई',
    subtitle: 'परिवहन, टैक्सी, टोटो, ई-रिक्शा, माल ढुलाई व लोकल गाइड',
    rating: '★ 4.8 (26k+ यात्री)',
    trustBadge: 'GPS Verified Vehicles',
    supportBadge: '24x7 ऑन-टाइम पिकअप',
    macroPillars: [
      { text: '🚖 18-1: 24 घंटे लोकल टैक्सी, एयरपोर्ट व आउटस्टेशन कैब', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🛺 18-2: मोहल्ले का ई-रिक्शा, टोटो व तुरंत ऑटो बुकिंग', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🚛 18-3: छोटा हाथी (टाटा ऐस), पिकअप माल ढुलाई व शिफ्टिंग', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subcategories: {
      '18-1': {
        code: '[18-1]',
        sub_code: '18-1',
        slug: 'city-cab-outstation',
        icon: '🚖',
        title: 'City Cab & Outstation Taxi',
        hindiTitle: 'लोकल टैक्सी व आउटस्टेशन कैब',
        categoryTag: 'टैक्सी सर्विस',
        tag: 'टैक्सी सर्विस',
        rating: '★ 4.9',
        reviewCount: '13,400+ ट्रिप्स',
        metaBadge: 'जीपीएस लाइव ट्रैकिंग',
        servicesTitle: 'उपलब्ध कैब सुविधाएं:',
        services: [
          { text: '🚗 सिडैन व हैचबैक लोकल राइड', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🚙 7-सीटर बड़ी गाड़ी आउटस्टेशन बुकिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '✈️ रेलवे स्टेशन व एयरपोर्ट 24 घंटे पिक/ड्रॉप', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🛣️ पारदर्शी प्रति किमी तय सरकारी रेट कार्ड', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'कोई सरचार्ज या पीक चार्ज नहीं—तय रेट पर साफ-सुथरी गाड़ी।',
          'अनुभवी, पृष्ठभूमि सत्यापित व विनम्र ड्राइवर।',
          'पारिवारिक यात्रा हेतु पूर्णतः सुरक्षित एसी गाड़ियां।'
        ],
        btnText: 'कैब बुक करें',
        chips: ['Sabhi', 'Local Cab', 'Outstation', 'Airport Drop', 'Fixed Rate']
      },
      '18-2': {
        code: '[18-2]',
        sub_code: '18-2',
        slug: 'toto-erickshaw-auto',
        icon: '🛺',
        title: 'Toto, E-Rickshaw & Auto',
        hindiTitle: 'टोटो, ई-रिक्शा व ऑटो सेवा',
        categoryTag: 'लोकल ट्रांसपोर्ट',
        tag: 'लोकल ट्रांसपोर्ट',
        rating: '★ 4.8',
        reviewCount: '9,800+ सवारी',
        metaBadge: 'तुरंत दरवाजे पर',
        servicesTitle: 'लोकल सवारी विकल्प:',
        services: [
          { text: '🛺 घर से मेन रोड / बाजार तक टोटो सेवा', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '⚡ साइलेंट व पॉल्यूशन-फ्री ई-रिक्शा रिजर्वेशन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🛵 बाइक टैक्सी (अकेले सफर हेतु सबसे सस्ता)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '👶 स्कूली बच्चों हेतु मासिक ऑटो पूलिंग व्यवस्था', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: [
          'गली-मोहल्लों में बिना जाम फंसे तेज आवागमन।',
          'न्यूनतम स्थानीय किराया।',
          'फोन कॉल पर तुरंत नजदीकी ड्राइवर उपलब्ध।'
        ],
        btnText: 'ऑटो / टोटो बुलाएं',
        chips: ['Sabhi', 'Toto Ride', 'E-Rickshaw', 'Bike Taxi', 'School Auto']
      },
      '18-3': {
        code: '[18-3]',
        sub_code: '18-3',
        slug: 'mini-truck-shifting',
        icon: '🚛',
        title: 'Mini Truck & Shifting',
        hindiTitle: 'पिकअप, छोटा हाथी व सामान ढुलाई',
        categoryTag: 'लॉजिस्टिक्स',
        tag: 'लॉजिस्टिक्स',
        rating: '★ 4.8',
        reviewCount: '4,100+ लोड',
        metaBadge: 'सुरक्षित डिलीवरी',
        servicesTitle: 'माल ढुलाई व शिफ्टिंग:',
        services: [
          { text: '🚛 टाटा ऐस (छोटा हाथी) लोकल शिफ्टिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📦 घर व दुकान का सामान शिफ्टिंग व लेबर सपोर्ट', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏗️ कंस्ट्रक्शन व दुकान माल सप्लाई ढुलाई', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🕒 घंटे या ट्रिप के आधार पर बुकिंग', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'सामान की टूट-फूट से बचाने हेतु प्रशिक्षित लेबर।',
          'किराया काम से पहले तय—मंजिल पर कोई मोलभाव नहीं।',
          'सामान सुरक्षित पहुंचाने की पूरी जवाबदेही।'
        ],
        btnText: 'छोटा हाथी बुक करें',
        chips: ['Sabhi', 'Tata Ace', 'Home Shifting', 'Loading Tempo', 'Labour Support']
      }
    }
  };

  var BATCH_18 = {
    '18': cat18,
    '018': cat18,
    'c18': cat18
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_18);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_18);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_18);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_18);
      }
    });
  }
})();
