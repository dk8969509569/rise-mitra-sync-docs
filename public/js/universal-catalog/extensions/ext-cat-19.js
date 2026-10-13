/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION [CATEGORY 19]
 * MODULE        : Official Google Play Store Standard Category 19 (Medical)
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) ISOLATED ATOMIC MODULE
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-cat-19.js
 */

(function () {
  'use strict';

  var cat19 = {
    id: 'c19',
    catId: '19',
    number: '19.',
    num: '19.',
    icon: '🏥',
    title: 'Medical',
    category_name_en: 'Medical',
    category_name_hi: 'चिकित्सा, दवा, डॉक्टर व एम्बुलेंस',
    subtitle: 'चिकित्सा परामर्श, दवा, क्लिनिक, जांच व 24x7 एम्बुलेंस',
    rating: '★ 4.9 (31k+ मरीज)',
    trustBadge: 'Arogya Certified',
    supportBadge: 'इमरजेंसी 24x7',
    macroPillars: [
      { text: '🚑 19-1: 24x7 आपातकालीन एम्बुलेंस व ऑक्सीजन सेवा', color: '#f87171', bg: 'rgba(239, 68, 68, 0.14)' },
      { text: '🩺 19-2: विशेषज्ञ डॉक्टर अपॉइंटमेंट, क्लिनिक व लैब टेस्ट', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '💊 19-3: 20% छूट पर वास्तविक दवा होम डिलीवरी', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '19-1': {
        code: '[19-1]',
        sub_code: '19-1',
        slug: 'emergency-ambulance',
        icon: '🚑',
        title: 'Emergency Ambulance',
        hindiTitle: '24x7 आपातकालीन एम्बुलेंस व ऑक्सीजन',
        categoryTag: 'आपातकालीन सेवा',
        tag: 'आपातकालीन सेवा',
        rating: '★ 4.9',
        reviewCount: '5,100+ मरीज',
        metaBadge: '15 मिनट में रिस्पांस',
        servicesTitle: 'आपातकालीन वाहन विकल्प:',
        services: [
          { text: '🚑 बेसिक लाइफ सपोर्ट (BLS) एम्बुलेंस', bg: 'rgba(239,68,68,0.15)', c: '#f87171' },
          { text: '🏥 आईसीयू व वेंटिलेटर लाइफ सपोर्ट एम्बुलेंस', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '💨 मेडिकल ऑक्सीजन सिलेंडर व कंसंट्रेटर डिलीवरी', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🩸 निकटतम ब्लड बैंक डोनर संपर्क सूत्र', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: [
          'GPS ट्रैकिंग के साथ नजदीकी उपलब्ध एम्बुलेंस तुरंत रवाना।',
          'पारदर्शी तय रेट, आपातकाल में कोई अतिरिक्त वसूली नहीं।',
          'ट्रेन्ड पैरामेडिकल स्टाफ व प्राथमिक उपचार किट।'
        ],
        btnText: 'इमरजेंसी एम्बुलेंस बुलाएं',
        chips: ['Sabhi', 'BLS Ambulance', 'ICU Ventilator', 'Oxygen Cylinder', 'Blood Bank']
      },
      '19-2': {
        code: '[19-2]',
        sub_code: '19-2',
        slug: 'doctor-appointments-labs',
        icon: '🩺',
        title: 'Doctor Appointments & Lab Tests',
        hindiTitle: 'विशेषज्ञ डॉक्टर व पैथोलॉजी लैब',
        categoryTag: 'चिकित्सा परामर्श',
        tag: 'चिकित्सा परामर्श',
        rating: '★ 4.8',
        reviewCount: '9,400+ मरीज',
        metaBadge: 'शून्य कतार समय',
        servicesTitle: 'उपलब्ध विशेषज्ञ विभाग:',
        services: [
          { text: '❤️ हृदय रोग, हड्डी, शिशु व स्त्री रोग विशेषज्ञ', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '💉 घर से ब्लड सैंपल कलेक्शन व 6 घंटे में रिपोर्ट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🩻 एक्स-रे, अल्ट्रासाउंड व एमआरआई डिस्काउंट वाउचर', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📱 फोन पर ऑनलाइन वीडियो कंसल्टेशन', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'अस्पतालों में घंटों लाइन में खड़े रहने से मुक्ति, कन्फर्म्ड टोकन।',
          'डिजिटल प्रिस्क्रिप्शन सीधे आपके फोन पर सुरक्षित।',
          'एनबीएल प्रमाणित पैथोलॉजी लैब्स से विश्वसनीय जांच।'
        ],
        btnText: 'डॉक्टर अपॉइंटमेंट लें',
        chips: ['Sabhi', 'Specialist Doctor', 'Home Blood Test', 'X-Ray MRI', 'Teleconsultation']
      },
      '19-3': {
        code: '[19-3]',
        sub_code: '19-3',
        slug: 'pharmacy-medicine-delivery',
        icon: '💊',
        title: 'Pharmacy & Medicine Delivery',
        hindiTitle: 'सत्यापित दवा डिलीवरी (20% छूट)',
        categoryTag: 'फार्मेसी सेवा',
        tag: 'फार्मेसी सेवा',
        rating: '★ 4.9',
        reviewCount: '16,000+ ग्राहक',
        metaBadge: '100% असली दवाएं',
        servicesTitle: 'फार्मेसी व दवा सुविधाएं:',
        services: [
          { text: '📸 पर्ची फोटो अपलोड कर ऑर्डर करें', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📉 सभी दवाओं पर फ्लैट 15-20% छूट', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '⚡ 2 घंटे में सुपरफास्ट लोकल होम डिलीवरी', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '👴 बीपी, शुगर व थायराइड मासिक दवा ऑटो रिफिल', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'केवल अधिकृत और लाइसेंसधारी मेडिकल स्टोर से आपूर्ति।',
          'दवा का पक्का जीएसटी बिल व एक्सपायरी जांच प्रमाण।',
          'ऑनलाइन या कैश ऑन डिलीवरी (COD) का विकल्प।'
        ],
        btnText: 'दवा ऑर्डर करें',
        chips: ['Sabhi', 'Prescription Upload', '15-20% Discount', 'Fast Delivery', 'Chronic Refill']
      }
    }
  };

  var BATCH_19 = {
    '19': cat19,
    '019': cat19,
    'c19': cat19
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_19);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_19);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_19);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_19);
      }
    });
  }
})();
