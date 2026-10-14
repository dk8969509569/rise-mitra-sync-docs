/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION [CATEGORY 09]
 * MODULE        : Official Google Play Store Standard Category 09 (Education)
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) ISOLATED ATOMIC MODULE
 * BENCHMARK     : PhysicsWallah, Unacademy, Duolingo (100% Data Preservation)
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-cat-09.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var cat09 = {
    id: 'c9',
    catId: '9',
    number: '09.',
    num: '09.',
    icon: '🎓',
    title: 'Education',
    category_name_en: 'Education',
    category_name_hi: 'प्रतियोगी परीक्षा कोचिंग, ट्यूशन व कौशल विकास',
    subtitle: 'प्रतियोगी परीक्षा कोचिंग, ट्यूशन, कौशल विकास व कक्षाएं',
    rating: '★ 4.9 (35k+ विद्यार्थी)',
    trustBadge: 'Certified Educators',
    supportBadge: 'करियर हेल्पलाइन',
    macroPillars: [
      { text: '🏛️ 09-1: JPSC, JSSC, SSC व रेलवे ऑफलाइन/ऑनलाइन बैच', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🏠 09-2: कक्षा 1 से 12 व्यक्तिगत विषय विशेषज्ञ होम ट्यूटर', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '💻 09-3: कंप्यूटर, कोडिंग, एआई व वोकेशनल कौशल विकास', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subcategories: {
      '9-1': {
        code: '[09-1]',
        sub_code: '09-1',
        slug: 'competitive-exam-coaching',
        icon: '🏛️',
        title: 'Competitive Exam Coaching',
        hindiTitle: 'JPSC, JSSC, SSC व रेलवे कोचिंग',
        categoryTag: 'प्रतियोगी परीक्षा',
        tag: 'प्रतियोगी परीक्षा',
        rating: '★ 4.9',
        reviewCount: '16,200+ छात्र',
        metaBadge: 'डेमो क्लास उपलब्ध',
        servicesTitle: 'उपलब्ध प्रतियोगी बैच:',
        services: [
          { text: '🏛️ JPSC व JSSC कंबाइंड स्पेशल बैच', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🎯 SSC CGL, CHSL व GD कांस्टेबल बैच', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🚆 रेलवे स्पेशल प्रतियोगी तैयारी', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📝 ओएमआर आधारित साप्ताहिक टेस्ट सीरीज', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'अनुभवी व चयनित फैकल्टी द्वारा विषयवार गहन अध्यापन।',
          'नियमित डाउट क्लियरिंग व करेंट अफेयर्स मैगजीन।',
          'गरीब व मेधावी विद्यार्थियों हेतु विशेष छात्रवृत्ति।'
        ],
        btnText: 'कोचिंग बैच जॉइन करें',
        chips: ['Sabhi', 'JPSC Batch', 'JSSC Special', 'SSC CGL', 'Railway Prep', 'OMR Test Series']
      },
      '9-2': {
        code: '[09-2]',
        sub_code: '09-2',
        slug: 'home-tutors-tuition',
        icon: '🏠',
        title: 'Home Tutors & Tuition',
        hindiTitle: 'सत्यापित होम ट्यूटर (कक्षा 1 से 12)',
        categoryTag: 'व्यक्तिगत शिक्षण',
        tag: 'व्यक्तिगत शिक्षण',
        rating: '★ 4.9',
        reviewCount: '11,400+ अभिभावक',
        metaBadge: 'पृष्ठभूमि सत्यापित',
        servicesTitle: 'उपलब्ध विषय विशेषज्ञ शिक्षक:',
        services: [
          { text: '📐 9वीं से 12वीं गणित, भौतिकी व रसायन ट्यूटर', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🗣️ स्पोकन इंग्लिश, ग्रामर व पर्सनालिटी क्लास', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '👶 1st से 8th ऑल-सब्जेक्ट फाउंडेशन शिक्षक', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '👩 महिला ट्यूटर्स की विशेष सुरक्षित सुविधा', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: [
          '2 दिन का निःशुल्क डेमो क्लास आपके घर पर।',
          'प्रत्येक शिक्षक का पहचान व शैक्षणिक दस्तावेज सत्यापन।',
          'मासिक प्रोग्रेस रिपोर्ट कार्ड अभिभावकों को।'
        ],
        btnText: 'होम ट्यूटर बुक करें',
        chips: ['Sabhi', 'Maths Science', 'Spoken English', 'Class 1-8 All', 'Female Tutor', 'Free Demo']
      },
      '9-3': {
        code: '[09-3]',
        sub_code: '09-3',
        slug: 'it-vocational-skills',
        icon: '💻',
        title: 'IT & Vocational Skills',
        hindiTitle: 'कंप्यूटर, कोडिंग व कौशल प्रशिक्षण',
        categoryTag: 'कौशल विकास',
        tag: 'कौशल विकास',
        rating: '★ 4.8',
        reviewCount: '7,400+ युवा',
        metaBadge: '100% जॉब रेडी',
        servicesTitle: 'उपलब्ध तकनीकी कोर्स:',
        services: [
          { text: '💻 DCA, ADCA व एमएस ऑफिस मास्टर क्लास', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🌐 वेब डेवलपमेंट, पायथन व कोडिंग बेसिक्स', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📱 डिजिटल मार्केटिंग, ग्राफिक व वीडियो एडिटिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🔧 हार्डवेयर व नेटवर्किंग रिपेयरिंग', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'व्यावहारिक प्रोजेक्ट आधारित हैंड्स-ऑन ट्रेनिंग।',
          'प्रमाणित सरकारी मान्यता प्राप्त सर्टिफिकेट।',
          'इंटरव्यू तैयारी व प्लेसमेंट सहायता।'
        ],
        btnText: 'कोर्स में दाखिला लें',
        chips: ['Sabhi', 'DCA ADCA', 'Python Coding', 'Web Development', 'Digital Marketing', 'Job Ready']
      }
    }
  };

  // 1:1 Subcategory lookup key parity (both '9-1' and '09-1')
  cat09.subcategories['09-1'] = cat09.subcategories['9-1'];
  cat09.subcategories['09-2'] = cat09.subcategories['9-2'];
  cat09.subcategories['09-3'] = cat09.subcategories['9-3'];

  var BATCH_09 = {
    '9': cat09,
    '09': cat09,
    'c9': cat09,
    'c09': cat09
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_09);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_09);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_09);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_09);
      }
    });
  }
})();
