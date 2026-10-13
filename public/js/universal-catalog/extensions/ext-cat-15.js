/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION [CATEGORY 15]
 * MODULE        : Official Google Play Store Standard Category 15 (House & Home)
 * ARCHITECTURE  : 100% TRUE ZERO-ELEMENT-LOSS (ZEL) ISOLATED ATOMIC MODULE
 * HIGHEST GMV   : ROOM SEARCH + RENTAL LEDGER & SUB-METER + ALL 12 MISTRY REPAIR SERVICES
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-cat-15.js
 */

(function () {
  'use strict';

  var cat15 = {
    id: 'c15',
    catId: '15',
    number: '15.',
    num: '15.',
    icon: '🏠',
    title: 'House & Home',
    category_name_en: 'House & Home',
    category_name_hi: 'घर, कमरा खोज, किराया बहीखाता व मिस्त्री',
    subtitle: 'कमरा खोजें (0% ब्रोकरेज), किराया बहीखाता व बिजली यूनिट, ऑन-कॉल मिस्त्री',
    rating: '★ 4.9 (24k+ किराएदार व मकान मालिक)',
    trustBadge: 'Rise Verified & Landlord Network',
    supportBadge: '24x7 सहायता व तुरंत विज़िट',
    macroPillars: [
      { text: '🏠 15-1: 0% ब्रोकरेज छात्र कमरा, बैचलर रूम, फैमिली फ्लैट व हॉस्टल', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📑 15-2: डिजिटल किराया बहीखाता, सब-मीटर बिजली यूनिट व रेंट रसीद PDF', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🔨 15-3: इलेक्ट्रीशियन, प्लंबर, बढ़ई, पेंटर व राजमिस्त्री (12 ऑन-कॉल सेवाएं)', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subcategories: {
      '15-1': {
        code: '[15-1]',
        sub_code: '15-1',
        slug: 'room-flat-search',
        icon: '🏠',
        title: 'Room & Flat Search (0% Brokerage)',
        hindiTitle: 'कमरा, फ्लैट व हॉस्टल खोज (0% दलाली)',
        categoryTag: 'कमरा खोज नेटवर्क',
        tag: 'कमरा खोज नेटवर्क',
        rating: '★ 4.9',
        reviewCount: '14,800+ कमरे लिस्टेड',
        metaBadge: '0% ब्रोकरेज गारंटी',
        servicesTitle: 'आवास श्रेणियां व सुविधाएं:',
        services: [
          { text: '🎓 छात्र सिंगल/डबल बेड कमरा (कोचिंग एरिया नियर)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏢 1BHK / 2BHK फैमिली फ्लैट व स्वतंत्र मकान', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🛏️ गर्ल्स व बॉयज हॉस्टल / पीजी (वाईफाई व मेस सहित)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📞 सीधे मकान मालिक से मोबाइल संपर्क (बिना दलाल)', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'प्रतियोगी छात्रों, नौकरीपेशा व परिवारों हेतु 0% ब्रोकरेज पर कमरा खोज।',
          'सत्यापित मकान मालिकों की वास्तविक तस्वीरें, लोकेशन व किराया विवरण।',
          'कोचिंग मंडी, स्टेशन व बाजार के नजदीकी सुरक्षित मोहल्लों में कमरे।'
        ],
        btnText: 'खाली कमरा खोजें',
        chips: ['Sabhi', '0% Brokerage', 'Student Room', 'Family Flat', 'Girls PG', 'Direct Landlord']
      },
      '15-2': {
        code: '[15-2]',
        sub_code: '15-2',
        slug: 'rental-ledger-submeter',
        icon: '📑',
        title: 'Rental Ledger & Sub-Meter Billing',
        hindiTitle: 'किराया बहीखाता व बिजली सब-मीटर बिलिंग',
        categoryTag: 'डिजिटल बहीखाता',
        tag: 'डिजिटल बहीखाता',
        rating: '★ 4.9',
        reviewCount: '9,500+ मकान मालिक',
        metaBadge: '1-क्लिक व्हाट्सएप रसीद',
        servicesTitle: 'बहीखाता व बिलिंग टूल्स:',
        services: [
          { text: '⚡ बिजली सब-मीटर यूनिट खपत व ऑटो-बिल कैलकुलेटर', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🧾 जीएसटी व आयकर मान्य रेंट रसीद PDF डाउनलोड', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📲 1 तारीख को किराएदार को ऑटो व्हाट्सएप किराया रिमाइंडर', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🔐 सिक्योरिटी डिपॉजिट, बकाया व अग्रिम भुगतान लेजर', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: [
          'किराया बहीखाता: सब-मीटर रीडिंग डालते ही बिजली बिल व कमरे का कुल किराया ऑटो-कैलकुलेट।',
          'मकान मालिक और किराएदार के बीच पारदर्शिता—हिसाब की रसीद व्हाट्सएप पर तुरंत शेयर।',
          'पुराने भुगतानों का सुरक्षित डिजिटल रिकॉर्ड, शून्य विवाद।'
        ],
        btnText: 'किराया हिसाब जोड़ें',
        chips: ['Sabhi', 'Submeter Calc', 'Rent Receipt PDF', 'WhatsApp Reminder', 'Deposit Ledger']
      },
      '15-3': {
        code: '[15-3]',
        sub_code: '15-3',
        slug: 'mistry-home-repair-network',
        icon: '🔨',
        title: 'Mistry & Home Repair Network',
        hindiTitle: 'मिस्त्री व मेंटेनेंस नेटवर्क (12 ऑन-कॉल सेवाएं)',
        categoryTag: 'मिस्त्री नेटवर्क',
        tag: 'मिस्त्री नेटवर्क',
        rating: '★ 4.9',
        reviewCount: '20,400+ विज़िट्स',
        metaBadge: '30-दिन काम वारंटी',
        servicesTitle: 'संपूर्ण ऑन-कॉल रिपेयर सेवाएं (100% ZEL):',
        services: [
          // Original 15-1 Elements (Electrician)
          { text: '⚡ शॉर्ट सर्किट फॉल्ट, एमसीबी ट्रिपिंग व हाउस वायरिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🔄 सीलिंग फैन, कूलर, गीजर व इंडक्शन रिपेयर', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🔋 इनवर्टर-बैटरी सेटअप व यूपीएस मेंटेनेंस', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🌊 समर्सिबल बोरवेल पंप मोटर रिवाइंडिंग', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' },

          // Original 15-2 Elements (Plumber)
          { text: '🚰 नल टपकना, कंसील्ड पाइप लीकेज व वाल्व रिपेयर', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏗️ सिंटेक्स छत टंकी इंस्टॉलेशन व ऑटो-कट स्विच', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🚽 वेस्टर्न/इंडियन टॉयलेट सीट व वॉशबेसिन फिटिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🌀 सीवरेज ड्रेन ब्लॉकेज मशीन द्वारा सफाई', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' },

          // Original 15-3 Elements (Carpenter & Painter)
          { text: '🚪 लकड़ी दरवाजा, ताला, हैंडल व चैनल अलाइनमेंट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🛏️ बेड, अलमारी, मॉड्यूलर किचन व दराज रिपेयर', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🎨 एशियन पेंट्स डिस्टेंपर, ट्रैक्टर इमल्शन व एपेक्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🧱 वॉल पुट्टी, वॉटरप्रूफिंग व डैम्प-सील कोटिंग', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: [
          'इलेक्ट्रीशियन, प्लंबर, बढ़ई, पेंटर व राजमिस्त्री—30 मिनट में स्थानीय कुशल कारीगर आपके दरवाजे पर।',
          'शॉर्ट सर्किट, समर्सिबल, नल लीकेज, सिंटेक्स टंकी, दरवाजा-ताला व वॉल पुट्टी पक्की रिपेयरिंग।',
          'तय और पारदर्शी रेट कार्ड, 30-दिन की कार्य संतुष्टि वारंटी व शून्य छुपा शुल्क।'
        ],
        btnText: 'मिस्त्री / कारीगर बुलाएं',
        chips: [
          'Sabhi',
          'Short Circuit', 'Inverter Fix', 'Submersible Pump', 'Fan Repair',
          'Tap Leakage', 'Water Tank', 'CPVC Pipe', 'Drain Blockage',
          'Door Lock', 'Bed Repair', 'Wall Putty', 'Asian Paints',
          '30-Min Visit'
        ]
      }
    }
  };

  // Backward compatibility alias bindings for legacy code references
  cat15.subcategories['electrician-motor-repair'] = cat15.subcategories['15-3'];
  cat15.subcategories['plumber-sanitary'] = cat15.subcategories['15-3'];
  cat15.subcategories['carpenter-home-painting'] = cat15.subcategories['15-3'];

  var BATCH_15 = {
    '15': cat15,
    '015': cat15,
    'c15': cat15
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_15);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_15);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_15);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_15);
      }
    });
  }
})();
