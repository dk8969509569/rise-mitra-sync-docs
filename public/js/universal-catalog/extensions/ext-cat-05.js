/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION [CATEGORY 05]
 * MODULE        : Official Google Play Store Standard Category 05 (Business)
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) ISOLATED ATOMIC MODULE
 * BENCHMARK     : IndiaMART, Khatabook, Vyapar (100% Data Preservation)
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-cat-05.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var cat05 = {
    id: 'c5',
    catId: '5',
    number: '05.',
    num: '05.',
    icon: '💼',
    title: 'Business',
    category_name_en: 'Business',
    category_name_hi: 'व्यापार, एमएसएमई, जीएसटी व टैक्स समाधान',
    subtitle: 'व्यापार निबंधन, एमएसएमई, जीएसटी, टैक्स व व्यावसायिक सेवाएं',
    rating: '★ 4.9 (9.5k+ उद्यमी)',
    trustBadge: 'MSME Certified',
    supportBadge: 'व्यापार सारथी 24x7',
    macroPillars: [
      { text: '🏛️ 05-1: उद्यम आधार, एमएसएमई व फर्म निबंधन', color: '#86efac', bg: 'rgba(34, 197, 94, 0.14)' },
      { text: '📊 05-2: जीएसटी रजिस्ट्रेशन, मासिक रिटर्न व टैक्स सेवा', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📑 05-3: ट्रेड लाइसेंस, फूड लाइसेंस (FSSAI) व लीगल डीड', color: '#fde047', bg: 'rgba(234, 179, 8, 0.14)' }
    ],
    subcategories: {
      '5-1': {
        code: '[05-1]',
        sub_code: '05-1',
        slug: 'msme-business-registration',
        icon: '🏛️',
        title: 'MSME & Business Registration',
        hindiTitle: 'उद्योग व एमएसएमई निबंधन',
        categoryTag: 'व्यापार निबंधन',
        tag: 'व्यापार निबंधन',
        rating: '★ 4.9',
        reviewCount: '4,100+ फर्में',
        metaBadge: '1-दिन में सर्टिफिकेट',
        servicesTitle: 'उपलब्ध निबंधन सेवाएं:',
        services: [
          { text: '📋 सरकारी उद्यम आधार (MSME) रजिस्ट्रेशन', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🤝 पार्टनरशिप डीड व प्रोपराइटरशिप गठन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏢 प्राइवेट लिमिटेड व ओपीसी कंपनी फॉर्मेशन', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '💳 व्यवसाय चालू खाता (Current Account) ओपनिंग', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'सरकारी सब्सिडी व लोन योजनाओं हेतु वैध एमएसएमई पंजीकरण।',
          'दस्तावेज संकलन घर बैठे—शून्य कार्यालय दौड़भाग।',
          'विशेषज्ञ चार्टर्ड एकाउंटेंट व वकीलों द्वारा परामर्श।'
        ],
        btnText: 'फर्म रजिस्टर करें',
        chips: ['Sabhi', 'MSME Certificate', 'Partnership Deed', 'Pvt Ltd Setup', 'Current Account', 'Subsidies']
      },
      '5-2': {
        code: '[05-2]',
        sub_code: '05-2',
        slug: 'gst-accounting-services',
        icon: '📊',
        title: 'GST & Accounting Services',
        hindiTitle: 'जीएसटी, टैक्स व एकाउंटिंग समाधान',
        categoryTag: 'टैक्स व एकाउंट्स',
        tag: 'टैक्स व एकाउंट्स',
        rating: '★ 4.9',
        reviewCount: '3,800+ व्यापारी',
        metaBadge: 'सटीक रिटर्न फाइलिंग',
        servicesTitle: 'टैक्स व बहीखाता सेवाएं:',
        services: [
          { text: '🧾 नया जीएसटी नंबर आवंटन व संशोधन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📈 GSTR-1 व GSTR-3B मासिक/त्रैमासिक रिटर्न', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '💰 आयकर रिटर्न (ITR) फाइलिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '💻 डिजिटल बहीखाता मेंटेनेंस', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: [
          'विलंब शुल्क व पेनल्टी से बचाने हेतु समय पर ऑटो-अलर्ट।',
          'पारदर्शी मासिक व वार्षिक एकाउंटिंग पैकेज।',
          'टैक्स नोटिस समाधान व विभागीय सहायता।'
        ],
        btnText: 'जीएसटी सेवाएं लें',
        chips: ['Sabhi', 'GST Filing', 'GSTR-1 & 3B', 'ITR Return', 'Digital Ledger', 'Zero Penalty']
      },
      '5-3': {
        code: '[05-3]',
        sub_code: '05-3',
        slug: 'trade-license-compliance',
        icon: '📑',
        title: 'Trade License & Compliance',
        hindiTitle: 'ट्रेड लाइसेंस व खाद्य सुरक्षा (FSSAI)',
        categoryTag: 'लाइसेंसिंग',
        tag: 'लाइसेंसिंग',
        rating: '★ 4.8',
        reviewCount: '1,600+ दुकानें',
        metaBadge: 'सरकारी मान्यता प्राप्त',
        servicesTitle: 'उपलब्ध लाइसेंस व अनुपालन:',
        services: [
          { text: '🏪 नगर निगम ट्रेड लाइसेंस आवेदन व नवीनीकरण', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🥗 FSSAI फूड लाइसेंस व बेसिक रजिस्ट्रेशन', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '⚖️ लेबर एक्ट व दुकान प्रतिष्ठान (Shop Act) पंजीयन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🔐 ट्रेडमार्क, कॉपीराइट व ब्रांड प्रोटेक्शन', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'कानूनी जांच से पूरी सुरक्षा—दुकान का पक्का सरकारी प्रमाण।',
          'लाइसेंस नवीनीकरण की पूर्व सूचना।',
          'स्थानीय नियमों के अनुसार सटीक दस्तावेज ड्राफ्टिंग।'
        ],
        btnText: 'लाइसेंस प्राप्त करें',
        chips: ['Sabhi', 'Trade License', 'FSSAI Food', 'Shop Act', 'Trademark', 'Brand Protection']
      }
    }
  };

  // 1:1 Subcategory lookup key parity (both '5-1' and '05-1')
  cat05.subcategories['05-1'] = cat05.subcategories['5-1'];
  cat05.subcategories['05-2'] = cat05.subcategories['5-2'];
  cat05.subcategories['05-3'] = cat05.subcategories['5-3'];

  var BATCH_05 = {
    '5': cat05,
    '05': cat05,
    'c5': cat05,
    'c05': cat05
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_05);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_05);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_05);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_05);
      }
    });
  }
})();
