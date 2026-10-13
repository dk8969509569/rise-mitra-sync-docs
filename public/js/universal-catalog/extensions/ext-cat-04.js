/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION [CATEGORY 04]
 * MODULE        : Official Google Play Store Standard Category 04 (Books & Reference)
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) ISOLATED ATOMIC MODULE
 * BENCHMARK     : Kindle, Kuku FM, Google Play Books (100% Data Preservation)
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-cat-04.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var cat04 = {
    id: 'c4',
    catId: '4',
    number: '04.',
    num: '04.',
    icon: '📖',
    title: 'Books & Reference',
    category_name_en: 'Books & Reference',
    category_name_hi: 'पुस्तकालय, संदर्भ पुस्तकें व वाचनालय',
    subtitle: 'पुस्तकालय, संदर्भ पुस्तकें, अध्ययन सामग्री व वाचनालय',
    rating: '★ 4.8 (14k+ पाठक)',
    trustBadge: 'Verified Reference',
    supportBadge: '24x7 अध्ययन केंद्र',
    macroPillars: [
      { text: '🔕 04-1: शांत स्टडी लाइब्रेरी, रीडिंग रूम व वाईफाई', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📚 04-2: प्रतियोगी परीक्षा पुस्तकें, NCERT व नोट्स', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '📑 04-3: अकादमिक संदर्भ ग्रंथ, शोध पत्रिकाएं व ई-बुक्स', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subcategories: {
      '4-1': {
        code: '[04-1]',
        sub_code: '04-1',
        slug: 'study-library-reading-rooms',
        icon: '🔕',
        title: 'Study Library & Reading Rooms',
        hindiTitle: 'शांत स्टडी लाइब्रेरी व रीडिंग रूम',
        categoryTag: 'वाचनालय नेटवर्क',
        tag: 'वाचनालय नेटवर्क',
        rating: '★ 4.9',
        reviewCount: '6,400+ छात्र',
        metaBadge: 'AC व हाई-स्पीड वाईफाई',
        servicesTitle: 'उपलब्ध अध्ययन सुविधाएं:',
        services: [
          { text: '🪑 पर्सनल केबिन सीट व लॉकर बुकिंग', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '⚡ 24 घंटे पावर बैकअप व इनवर्टर', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📶 100 Mbps फाइबर इंटरनेट सुविधा', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '☕ आरओ मिनरल वाटर व टी-कॉफी जोन', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'शांतिपूर्ण अध्ययन हेतु आदर्श वातावरण।',
          'लचीली शिफ्ट व्यवस्था (4, 8 या 24 घंटे)।',
          'CCTV निगरानी व सुरक्षित अध्ययन परिसर।'
        ],
        btnText: 'लाइब्रेरी सीट बुक करें',
        chips: ['Sabhi', 'Cabin Seat', 'Power Backup', '100 Mbps WiFi', 'RO Water', '24-Hours Shift']
      },
      '4-2': {
        code: '[04-2]',
        sub_code: '04-2',
        slug: 'competitive-books-notes',
        icon: '📚',
        title: 'Competitive Books & Notes',
        hindiTitle: 'प्रतियोगी पुस्तकें, NCERT व नोट्स',
        categoryTag: 'पुस्तक भंडार',
        tag: 'पुस्तक भंडार',
        rating: '★ 4.8',
        reviewCount: '5,100+ पाठक',
        metaBadge: 'नवीनतम संस्करण',
        servicesTitle: 'उपलब्ध पाठ्य सामग्री:',
        services: [
          { text: '🏛️ JPSC, UPSC व SSC प्रामाणिक पुस्तकें', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📖 कक्षा 6 से 12 नवीन NCERT पुस्तकें', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📝 टॉपर्स हस्तलिखित क्लास नोट्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🎯 सॉल्व्ड क्वेश्चन बैंक व टेस्ट बुकलेट', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: [
          'न्यूनतम रियायती दरों पर नई व पुरानी पुस्तकें उपलब्ध।',
          'होम डिलीवरी व कूरियर सुविधा।',
          'सत्र समाप्ति पर पुरानी पुस्तकों की पुनः खरीद (बायबैक)।'
        ],
        btnText: 'पुस्तकें ऑर्डर करें',
        chips: ['Sabhi', 'UPSC Books', 'NCERT 6-12', 'Toppers Notes', 'Solved Papers', 'Book Buyback']
      },
      '4-3': {
        code: '[04-3]',
        sub_code: '04-3',
        slug: 'academic-reference-ebooks',
        icon: '📑',
        title: 'Academic Reference & E-Books',
        hindiTitle: 'संदर्भ ग्रंथ व डिजिटल ई-बुक्स',
        categoryTag: 'डिजिटल रिपॉजिटरी',
        tag: 'डिजिटल रिपॉजिटरी',
        rating: '★ 4.8',
        reviewCount: '2,800+ शोधकर्ता',
        metaBadge: 'डिजिटल एक्सेस',
        servicesTitle: 'संदर्भ एवं डिजिटल स्रोत:',
        services: [
          { text: '📜 विश्वविद्यालय शोध पत्र व थिसिस संदर्भ', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '💻 कानून, इंजीनियरिंग व मेडिकल संदर्भ ग्रंथ', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📱 10,000+ ई-बुक्स व पीडीएफ रिपॉजिटरी', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🗂️ प्रतियोगी परीक्षाओं के पिछले 15 वर्षों के पेपर', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'शोधार्थियों और शिक्षकों हेतु दुर्लभ संदर्भ सामग्री।',
          'तुरंत डिजिटल डाउनलोड व क्लाउड लाइब्रेरी लिंक।',
          'प्रामाणिक व कॉपीराइट-सत्यापित दस्तावेज।'
        ],
        btnText: 'संदर्भ ग्रंथ देखें',
        chips: ['Sabhi', 'Research Papers', 'Law & Medical', '10k E-Books', '15-Yr Papers', 'Digital PDF']
      }
    }
  };

  // 1:1 Subcategory lookup key parity (both '4-1' and '04-1')
  cat04.subcategories['04-1'] = cat04.subcategories['4-1'];
  cat04.subcategories['04-2'] = cat04.subcategories['4-2'];
  cat04.subcategories['04-3'] = cat04.subcategories['4-3'];

  var BATCH_04 = {
    '4': cat04,
    '04': cat04,
    'c4': cat04,
    'c04': cat04
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_04);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_04);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_04);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_04);
      }
    });
  }
})();
