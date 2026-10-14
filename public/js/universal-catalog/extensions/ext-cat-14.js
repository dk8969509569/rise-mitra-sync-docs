/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION [CATEGORY 14]
 * MODULE        : Official Google Play Store Standard Category 14 (Health & Fitness)
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) ISOLATED ATOMIC MODULE
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-cat-14.js
 */

(function () {
  'use strict';

  var cat14 = {
    id: 'c14',
    catId: '14',
    number: '14.',
    num: '14.',
    icon: '🧘',
    title: 'Health & Fitness',
    category_name_en: 'Health & Fitness',
    category_name_hi: 'स्वस्थ मन, देसी अखाड़ा, योग व वेलनेस',
    subtitle: 'स्वस्थ मन, देसी अखाड़ा, योग, प्राकृतिक चिकित्सा व स्वास्थ्य लाभ',
    rating: '★ 4.9 (19k+ साधक व परिवार)',
    trustBadge: 'Ayush & Health Verified',
    supportBadge: '24x7 स्वास्थ्य परामर्श',
    macroPillars: [
      { text: '🩺 14-1: घर पर प्रमाणित योग प्रशिक्षक व फिजियोथेरेपिस्ट विज़िट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🏋️ 14-2: नजदीकी आधुनिक जिम का डिस्काउंटेड वर्कआउट पास', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🥛 14-3: शुद्ध देशी गाय का ताजा A2 कच्चा दूध व चना-सत्तू', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subcategories: {
      '14-1': {
        code: '[14-1]',
        sub_code: '14-1',
        slug: 'doorstep-yoga-physio',
        icon: '🩺',
        title: 'Doorstep Yoga & Physio',
        hindiTitle: 'डोरस्टेप योग प्रशिक्षक व फिजियोथेरेपी',
        categoryTag: 'योग व फिजियो',
        tag: 'योग व फिजियो',
        rating: '★ 4.9',
        reviewCount: '5,600+ साधक',
        metaBadge: 'आयुष प्रमाणित',
        servicesTitle: 'उपलब्ध घरेलू सेवाएं:',
        services: [
          { text: '🌅 जोड़ों, कमर दर्द व साइटिका निवारण फिजियो विज़िट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🧘 सूर्य नमस्कार, प्राणायाम व ध्यान (Meditation) सत्र', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '⚖️ वजन नियंत्रण व पेट की चर्बी घटाने हेतु पावर योग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '👵 बुजुर्गों हेतु मोबिलिटी व स्ट्रेचिंग एक्सरसाइज', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: [
          'घर पर प्रमाणित योग प्रशिक्षक व जोड़ों/कमर दर्द निवारण हेतु फिजियोथेरेपिस्ट विज़िट।',
          'रीढ़ की हड्डी, बीपी, शुगर व जोड़ों के दर्द हेतु विशेष योगासन।',
          'व्यक्तिगत शारीरिक क्षमता अनुसार अनुकूलित सत्र।'
        ],
        btnText: 'फिजियो / योग बुक करें',
        chips: ['Sabhi', 'Home Yoga', 'Physiotherapy', 'Joint Pain', 'Breathing Exercise']
      },
      '14-2': {
        code: '[14-2]',
        sub_code: '14-2',
        slug: 'local-gym-passes',
        icon: '🏋️',
        title: 'Local Gym Membership Passes',
        hindiTitle: 'नजदीकी आधुनिक जिम वर्कआउट पास',
        categoryTag: 'जिम वर्कआउट पास',
        tag: 'जिम वर्कआउट पास',
        rating: '★ 4.9',
        reviewCount: '8,400+ मेंबर्स',
        metaBadge: 'फ्लेक्सिबल पास',
        servicesTitle: 'जिम पास विकल्प:',
        services: [
          { text: '🎟️ 1-दिन, साप्ताहिक व मासिक नो-कमिटमेंट वर्कआउट पास', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏃 ट्रेडमिल, क्रॉस ट्रेनर व हाई-टेक कार्डियो जोन', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏋️ डम्बल, बारबेल व ओलंपिक वेट लिफ्टिंग सेक्शन', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🧑‍🏫 सर्टिफाइड पर्सनल ट्रेनर व डाइट सपोर्ट', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'नजदीकी आधुनिक जिम का 1-दिन, साप्ताहिक व मासिक डिस्काउंटेड वर्कआउट पास।',
          'महिलाओं और पुरुषों हेतु अलग-अलग सुरक्षित टाइमिंग स्लॉट।',
          'बॉडी कंपोजिशन (BMI) जांच व मासिक फिटनेस ट्रैकिंग।'
        ],
        btnText: 'जिम पास लें',
        chips: ['Sabhi', 'Daily Pass', 'Monthly Gym', 'Cardio Zone', 'Weight Training']
      },
      '14-3': {
        code: '[14-3]',
        sub_code: '14-3',
        slug: 'desi-akhada-nutrition',
        icon: '🥛',
        title: 'Desi Akhada Nutrition',
        hindiTitle: 'देसी अखाड़ा पोषण, A2 कच्चा दूध व सत्तू',
        categoryTag: 'देसी पोषण आहार',
        tag: 'देसी पोषण आहार',
        rating: '★ 4.9',
        reviewCount: '4,000+ ग्राहक',
        metaBadge: '100% शुद्ध देशी',
        servicesTitle: 'प्राकृतिक पोषण उत्पाद:',
        services: [
          { text: '🥛 शुद्ध देशी गाय का ताजा अनपाश्चुरीकृत A2 कच्चा दूध', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🌾 भुना हुआ चना-सत्तू व देसी जौ का दलिया', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🍯 शुद्ध छोटी मक्खी का कच्चा शहद व मुनक्का', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🥜 ड्राई फ्रूट्स, बादाम मगज व शीलाजीत डाइट किट', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'शुद्ध देशी गाय का ताजा A2 कच्चा दूध, भुना चना-सत्तू व ड्राई फ्रूट्स डाइट किट।',
          'बिना किसी मिलावट के सीधे फार्म से शुद्धता की गारंटी।',
          'जिम व अखाड़ा जाने वाले युवाओं हेतु प्राकृतिक शक्तिवर्धक आहार।'
        ],
        btnText: 'देसी पोषण किट मंगाएं',
        chips: ['Sabhi', 'A2 Cow Milk', 'Desi Chana Sattu', 'Dry Fruits', 'Purity Guaranteed']
      }
    }
  };

  var BATCH_14 = {
    '14': cat14,
    '014': cat14,
    'c14': cat14
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_14);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_14);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_14);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_14);
      }
    });
  }
})();
