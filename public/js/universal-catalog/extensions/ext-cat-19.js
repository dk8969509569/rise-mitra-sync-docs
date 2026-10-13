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
    icon: '🩺',
    title: 'Medical',
    category_name_en: 'Medical',
    category_name_hi: 'चिकित्सा, रक्त जांच व दवा डिलीवरी',
    subtitle: 'घर से ब्लड सैंपल, 20% छूट पर दवाएं व 24x7 ऑक्सीजन एम्बुलेंस',
    rating: '★ 4.9 (25k+ मरीज़ व परिवार)',
    trustBadge: 'NABL & Health Certified',
    supportBadge: '24x7 इमरजेंसी सेवा',
    macroPillars: [
      { text: '🩸 19-1: घर से ब्लड सैंपल जांच व 12 घंटे में डिजिटल रिपोर्ट', color: '#f87171', bg: 'rgba(239, 68, 68, 0.14)' },
      { text: '💊 19-2: पर्चा भेजते ही 20% फ्लैट छूट पर अंग्रेजी/आयुर्वेदिक दवाएं', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🚑 19-3: ऑक्सीजन व स्ट्रेचर युक्त 24x7 एम्बुलेंस तत्काल सेवा', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subcategories: {
      '19-1': {
        code: '[19-1]',
        sub_code: '19-1',
        slug: 'home-blood-sample-collect',
        icon: '🩸',
        title: 'Home Blood Sample Collect',
        hindiTitle: 'घर से ब्लड सैंपल संग्रह (एनएबीएल लैब)',
        tag: 'लैब टेस्ट',
        categoryTag: 'लैब टेस्ट',
        rating: '★ 4.9',
        reviewCount: '12,400+ टेस्ट्स',
        metaBadge: 'एनएबीएल प्रमाणित',
        servicesTitle: 'उपलब्ध जांच पैकेज:',
        services: [
          { text: '🔬 सीबीसी, ब्लड शुगर, लिपिड प्रोफाइल व थायराइड', bg: 'rgba(239,68,68,0.15)', c: '#f87171' },
          { text: '🏠 प्रमाणित फ्लेबोटोमिस्ट द्वारा घर पर सैंपल कलेक्शन', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📱 12 घंटे में व्हाट्सएप व ईमेल पर डिजिटल रिपोर्ट', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '👴 फुल बॉडी हेल्थ चेकअप (60+ टेस्ट्स कॉम्बो)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: [
          'एनएबीएल प्रमाणित लैब तकनीशियन द्वारा घर से ब्लड सैंपल व 12 घंटे में रिपोर्ट।',
          '100% डिस्पोजेबल व सीलबंद सुई का उपयोग।',
          'बुजुर्गों और मरीजों हेतु घर बैठे बिना कतार जांच की सुविधा।'
        ],
        btnText: 'ब्लड टेस्ट बुक करें',
        chips: ['Sabhi', 'Home Collection', 'NABL Lab', 'CBC Test', 'Sugar Profile', 'Full Checkup']
      },
      '19-2': {
        code: '[19-2]',
        sub_code: '19-2',
        slug: 'doorstep-discount-medicines',
        icon: '💊',
        title: 'Doorstep Discount Medicines',
        hindiTitle: 'डोरस्टेप दवा डिलीवरी (फ्लैट 20% छूट)',
        tag: 'दवा डिलीवरी',
        categoryTag: 'दवा डिलीवरी',
        rating: '★ 4.8',
        reviewCount: '8,600+ ऑर्डर्स',
        metaBadge: 'पक्का जीएसटी बिल',
        servicesTitle: 'दवा आपूर्ति विकल्प:',
        services: [
          { text: '📸 डॉक्टर का पर्चा अपलोड करें और 20% छूट पाएं', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '💊 सभी ब्रांडेड एलोपैथिक व जेनेरिक दवाएं', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🌿 पतंजलि, डाबर व बैद्यनाथ आयुर्वेदिक उत्पाद', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🚚 2 घंटे में नजदीकी मेडिकल स्टोर से होम डिलीवरी', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'पर्चा भेजते ही 20% फ्लैट छूट पर अंग्रेजी/आयुर्वेदिक दवाएं व पक्का जीएसटी बिल।',
          'असली और वैध एक्सपायरी डेट वाली दवाओं की आपूर्ति।',
          'मासिक नियमित बीपी/शुगर दवाओं पर अतिरिक्त बचत।'
        ],
        btnText: 'पर्चा भेजें व दवा मंगाएं',
        chips: ['Sabhi', '20% Flat Off', 'Ayurvedic', 'Allopathic', 'Upload Rx', 'GST Bill']
      },
      '19-3': {
        code: '[19-3]',
        sub_code: '19-3',
        slug: '24x7-oxygen-ambulance',
        icon: '🚑',
        title: '24x7 Oxygen Ambulance',
        hindiTitle: '24x7 आपातकालीन ऑक्सीजन एम्बुलेंस',
        tag: 'एम्बुलेंस सेवा',
        categoryTag: 'एम्बुलेंस सेवा',
        rating: '★ 4.9',
        reviewCount: '4,200+ इमरजेंसी',
        metaBadge: 'तत्काल डिस्पैच',
        servicesTitle: 'आपातकालीन सेवाएं:',
        services: [
          { text: '🫁 ऑक्सीजन सिलेंडर व स्ट्रेचर युक्त बेसिक लाइफ सपोर्ट वैन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏥 आईसीयू वेंटिलेटर एम्बुलेंस (गंभीर मरीजों हेतु)', bg: 'rgba(239,68,68,0.15)', c: '#f87171' },
          { text: '🚨 1-क्लिक कॉल पर निकटतम वाहन तुरंत रवाना', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🩺 नजदीकी अस्पताल व स्पेशलिस्ट डॉक्टर सहायता', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: [
          'ऑक्सीजन व स्ट्रेचर युक्त बेसिक लाइफ सपोर्ट वैन व नजदीकी डॉक्टर तत्काल अपॉइंटमेंट।',
          'सरकारी व पारदर्शी तय रेट पर त्वरित सेवा।',
          'प्रशिक्षित पैरामेडिकल स्टाफ व आपातकालीन सहायता।'
        ],
        btnText: 'एम्बुलेंस बुलाएं',
        chips: ['Sabhi', 'Oxygen Van', 'ICU Support', 'Doctor Connect', 'Immediate Dispatch']
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
