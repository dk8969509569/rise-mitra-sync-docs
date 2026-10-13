/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION [CATEGORY 17]
 * MODULE        : Official Google Play Store Standard Category 17 (Lifestyle)
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) ISOLATED ATOMIC MODULE
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-cat-17.js
 */

(function () {
  'use strict';

  var cat17 = {
    id: 'c17',
    catId: '17',
    number: '17.',
    num: '17.',
    icon: '👗',
    title: 'Lifestyle',
    category_name_en: 'Lifestyle',
    category_name_hi: 'फैशन, बुटीक, दर्जी व आभूषण',
    subtitle: 'फैशन, बुटीक, दर्जी, आभूषण व आधुनिक जीवनशैली',
    rating: '★ 4.8 (21k+ ग्राहक)',
    trustBadge: 'Master Fitters',
    supportBadge: 'डोरस्टेप नाप व फिटिंग',
    macroPillars: [
      { text: '🧵 17-1: विशेषज्ञ दर्जी, लेडीज बुटीक व परफेक्ट फिटिंग', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '💎 17-2: पारंपरिक व आधुनिक आभूषण, ज्वेलरी व श्रृंगार', color: '#fde047', bg: 'rgba(234, 179, 8, 0.14)' },
      { text: '👠 17-3: आधुनिक परिधान, फुटवियर व लाइफस्टाइल एसेसरीज', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subcategories: {
      '17-1': {
        code: '[17-1]',
        sub_code: '17-1',
        slug: 'fashion-tailoring',
        icon: '🧵',
        title: 'Fashion & Tailoring',
        hindiTitle: 'दर्जी, बुटीक व सिलाई डिजाइनिंग',
        categoryTag: 'टेलरिंग व बुटीक',
        tag: 'टेलरिंग व बुटीक',
        rating: '★ 4.8',
        reviewCount: '17,000+ ग्राहक',
        metaBadge: 'परफेक्ट फिटिंग गारंटी',
        servicesTitle: 'सिलाई व डिजाइनिंग सेवाएं:',
        services: [
          { text: '👗 डिजाइनर ब्लाउज, सूट व अनारकली सिलाई', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '👔 मेंस पैंट-शर्ट, कोट-पैंट व सफारी सूट', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '✂️ 24 घंटे में तुरंत अल्टरेशन व री-फिटिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏠 घर बैठे नाप लेने व कपड़े पिकअप की सुविधा', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: [
          'मास्टर टेलर्स द्वारा परफेक्ट फिटिंग की गारंटी।',
          'शादी और त्योहारों पर समय से पहले डिलीवरी।',
          'पारदर्शी सिलाई रेट व फैंसी बुटीक डिजाइन्स।'
        ],
        btnText: 'दर्जी बुक करें',
        chips: ['Sabhi', 'Ladies Boutique', 'Gents Tailor', 'Alteration', 'Doorstep Measurement']
      },
      '17-2': {
        code: '[17-2]',
        sub_code: '17-2',
        slug: 'jewellery-ornaments',
        icon: '💎',
        title: 'Jewellery & Ornaments',
        hindiTitle: 'पारंपरिक आभूषण व फैशन ज्वेलरी',
        categoryTag: 'आभूषण',
        tag: 'आभूषण',
        rating: '★ 4.9',
        reviewCount: '7,500+ खरीदार',
        metaBadge: '100% हॉलमार्क',
        servicesTitle: 'उपलब्ध आभूषण संग्रह:',
        services: [
          { text: '💍 916 बीआईएस हॉलमार्क शुद्ध सोने व चांदी के जेवर', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '✨ ब्राइडल रेंटल कुंदन, पोलकी व एडी ज्वेलरी सेट', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '🪙 चांदी के सिक्के, पायल व पूजा सामग्री', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🧼 पुराने जेवरों की सुरक्षित पॉलिशिंग व रिपेयर', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: [
          'शादियों हेतु किफायती किराए पर ब्राइडल ज्वेलरी सेट उपलब्ध।',
          'कंप्यूटरीकृत शुद्धता जांच प्रमाण पत्र।',
          'पारदर्शी मेकिंग चार्ज व न्यूनतम दरें।'
        ],
        btnText: 'ज्वेलरी संग्रह देखें',
        chips: ['Sabhi', 'Gold Hallmark', 'Bridal Rental', 'Silver Ornaments', 'Jewellery Repair']
      },
      '17-3': {
        code: '[17-3]',
        sub_code: '17-3',
        slug: 'footwear-accessories',
        icon: '👠',
        title: 'Footwear & Accessories',
        hindiTitle: 'फुटवियर, बैग्स व लाइफस्टाइल उत्पाद',
        categoryTag: 'एसेसरीज',
        tag: 'एसेसरीज',
        rating: '★ 4.8',
        reviewCount: '5,200+ ग्राहक',
        metaBadge: 'टिकाऊ व स्टाइलिश',
        servicesTitle: 'फैशन एसेसरीज विकल्प:',
        services: [
          { text: '👞 फॉर्मल व कैजुअल लेदर शूज व स्नीकर्स', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '👡 पार्टी वियर सैंडल्स व हील्स', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '👜 लेदर बेल्ट, पर्स, हैंडबैग व बैकपैक', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🕶️ सनग्लासेस, कलाई घड़ियां व परफ्यूम्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: [
          'दैनिक उपयोग व पार्टियों हेतु टिकाऊ और आरामदायक फुटवियर।',
          'नवीनतम ट्रेंड्स के अनुसार नियमित नया स्टॉक।',
          'आसान रिप्लेसमेंट व वारंटी सपोर्ट।'
        ],
        btnText: 'एसेसरीज खरीदें',
        chips: ['Sabhi', 'Leather Shoes', 'Party Footwear', 'Handbags & Belts', 'Watches']
      }
    }
  };

  var BATCH_17 = {
    '17': cat17,
    '017': cat17,
    'c17': cat17
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_17);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_17);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_17);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_17);
      }
    });
  }
})();
