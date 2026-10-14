/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION [CATEGORY 12]
 * MODULE        : Official Google Play Store Standard Category 12 (Finance)
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) ISOLATED ATOMIC MODULE
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-cat-12.js
 */

(function () {
  'use strict';

  var cat12 = {
    id: 'c12',
    catId: '12',
    number: '12.',
    num: '12.',
    icon: '💳',
    title: 'Finance',
    category_name_en: 'Finance',
    category_name_hi: 'बैंकिंग, ऋण व वित्तीय सेवाएं',
    subtitle: 'घर पर AEPS कैश निकासी, माइक्रो-ऋण व 1-क्लिक वाहन बीमा',
    rating: '★ 4.9 (45k+ नागरिक)',
    trustBadge: 'RBI & NPCI Compliant',
    supportBadge: '24x7 डिजिटल सहायता',
    macroPillars: [
      { text: '🏧 12-1: आधार बायोमेट्रिक निकासी व माइक्रो-ATM बैंकिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📈 12-2: खुदरा व्यापारियों हेतु ₹10k-₹2L त्वरित माइक्रो-ऋण', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🛡️ 12-3: 1-क्लिक बाइक/कार थर्ड पार्टी बीमा व क्लेम सहायता', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subcategories: {
      '12-1': {
        code: '[12-1]',
        sub_code: '12-1',
        slug: 'doorstep-aeps-cash',
        icon: '🏧',
        title: 'Doorstep AEPS Cash',
        hindiTitle: 'बायोमेट्रिक व माइक्रो-ATM नकद निकासी',
        categoryTag: 'डोरस्टेप बैंकिंग',
        tag: 'डोरस्टेप बैंकिंग',
        rating: '★ 4.9',
        reviewCount: '28,000+ ट्रांजेक्शन',
        metaBadge: '100% सुरक्षित बायोमेट्रिक',
        servicesTitle: 'उपलब्ध वित्तीय सेवाएं:',
        services: [
          { text: '👆 बायोमेट्रिक द्वारा किसी भी बैंक से नकद निकासी', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '⚡ तुरंत बैंक बैलेंस चेक व मिनी स्टेटमेंट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📲 24x7 तत्काल मनी ट्रांसफर (IMPS/NEFT)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🏦 नया सेविंग व जीरो बैलेंस खाता खोलना', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'बायोमेट्रिक व माइक्रो-ATM से घर बैठे नकद निकासी व बैलेंस जांच।',
          'बैंक की लंबी लाइनों से मुक्ति—मोहल्ले में तुरंत कैश निकासी।',
          'वृद्धजनों व महिलाओं हेतु डोरस्टेप बैंकिंग सुविधा।'
        ],
        btnText: 'डोरस्टेप कैश मंगाएं',
        chips: ['Sabhi', 'Doorstep ATM', 'Cash Out', 'Balance Check', 'Mini Statement']
      },
      '12-2': {
        code: '[12-2]',
        sub_code: '12-2',
        slug: 'vyapar-micro-loans',
        icon: '📈',
        title: 'Vyapar Micro-Loans',
        hindiTitle: 'दुकानदार मुद्रा व सूक्ष्म व्यापार ऋण',
        categoryTag: 'व्यापार ऋण',
        tag: 'व्यापार ऋण',
        rating: '★ 4.8',
        reviewCount: '9,200+ व्यापारी',
        metaBadge: 'दैनिक किस्त सुविधा',
        servicesTitle: 'ऋण सहायता विकल्प:',
        services: [
          { text: '🏪 ₹10,000 से ₹2 लाख तक त्वरित वर्किंग कैपिटल', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📅 आसान दैनिक / साप्ताहिक किस्तों में भुगतान', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🌾 किसान क्रेडिट कार्ड (KCC) नवीनीकरण परामर्श', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📊 सिबिल स्कोर सुधार व लोन फाइलिंग सहायता', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: [
          'छोटे खुदरा व्यापारियों हेतु ₹10k से ₹2 लाख तक त्वरित व्यवसायिक ऋण (दैनिक किस्त)।',
          'कम ब्याज पर लोन प्रक्रिया में मदद व सही बैंक का मार्गदर्शन।',
          'बिना किसी दलाल के पारदर्शी कागजी कार्रवाई।'
        ],
        btnText: 'ऋण पात्रता जांचें',
        chips: ['Sabhi', 'Daily Installment', 'Working Capital', 'Low Interest', 'Fast Approval']
      },
      '12-3': {
        code: '[12-3]',
        sub_code: '12-3',
        slug: 'vehicle-insurance-help',
        icon: '🛡️',
        title: '1-Click Vehicle Insurance',
        hindiTitle: 'वाहन बीमा तत्काल रिन्यूअल व क्लेम सहायता',
        categoryTag: 'बीमा सेवा',
        tag: 'बीमा सेवा',
        rating: '★ 4.9',
        reviewCount: '7,800+ पॉलिसियां',
        metaBadge: 'तुरंत डिजिटल पॉलिसी',
        servicesTitle: 'उपलब्ध बीमा योजनाएं:',
        services: [
          { text: '🛵 बाइक व कार का तुरंत 1-वर्षीय थर्ड पार्टी बीमा', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏥 कैशलेस फैमिली हेल्थ इंश्योरेंस पॉलिसी', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🚜 ट्रैक्टर व लोडिंग वाहन पॉलिसी रिन्यूअल', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '⚖️ दुर्घटना क्लेम निपटारे में स्थानीय सहायता', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'बाइक/कार थर्ड पार्टी बीमा तत्काल रिन्यूअल व क्लेम निपटान में स्थानीय सहायता।',
          'चालान से बचने हेतु 2 मिनट में बाइक बीमा का पक्का प्रिंट।',
          'आपातकाल में हॉस्पिटल क्लेम निपटारे में व्यक्तिगत सहायता।'
        ],
        btnText: 'बीमा पॉलिसी बनाएं',
        chips: ['Sabhi', 'Bike Insurance', 'Car Insurance', 'Instant Policy', 'Claim Help']
      }
    }
  };

  var BATCH_12 = {
    '12': cat12,
    '012': cat12,
    'c12': cat12
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_12);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_12);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_12);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_12);
      }
    });
  }
})();
