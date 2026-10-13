/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION BATCH (11-15)
 * MODULE        : Official Google Play Store Standard Categories 11 to 15
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) MODULAR MICRO-BATCH
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-batch-11-15.js
 */

(function () {
  'use strict';

  // ==============================================================================
  // CATEGORY 11: EVENTS (OFFICIAL GOOGLE PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat11 = {
    id: 'c11',
    number: '11.',
    icon: '🎪',
    title: 'Events',
    category_name_en: 'Events',
    category_name_hi: 'कार्यक्रम, टेंट व उत्सव आयोजन',
    subtitle: 'विवाह मंडप, वाटरप्रूफ टेंट, हलवाई कैटरिंग व 4K ड्रोन कवरेज',
    rating: '★ 4.9 (14k+ आयोजक)',
    trustBadge: 'Event & Decor Verified',
    supportBadge: '24x7 ऑन-साइट सहायता',
    macroPillars: [
      { text: '⛺ 11-1: वाटरप्रूफ जर्मन हैंगर, फ्लावर स्टेज व वीआईपी सोफा', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🍲 11-2: अनुभवी हलवाई टीम, शुद्ध देशी घी कैटरिंग व बर्तन', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🚁 11-3: 4K ड्रोन कैमरा हवाई कवरेज व सिनेमैटिक एल्बम', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subcategories: {
      '11-1': {
        code: '[11-1]', sub_code: '11-1', slug: 'tent-light-decor', icon: '⛺',
        title: 'Tent & Light Decor', hindiTitle: 'वाटरप्रूफ जर्मन हैंगर व स्टेज डेकोरेशन',
        categoryTag: 'टेंट व डेकोर', rating: '★ 4.8', reviewCount: '5,100+ शादियां', metaBadge: 'प्रीमियम जर्मन हैंगर',
        servicesTitle: 'उपलब्ध सज्जा व टेंट विकल्प:',
        services: [
          { text: '🎪 ऑल-वेदर वाटरप्रूफ जर्मन हैंगर पंडाल', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🌺 फ्रेश डच रोज, ऑर्चिड व गेंदा मंडप', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '🏛️ रॉयल रिसेप्शन स्टेज व 3D बैकड्रॉप', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '💡 एलईडी पिक्सल पाथवे व गेट लाइटिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: [
          'वॉटरप्रूफ जर्मन हैंगर, फ्लावर स्टेज, एलईडी पिक्सल लाइटिंग व वीआईपी सोफा सेटअप।',
          'नए और आधुनिक इंस्टाग्राम-रेडी सेल्फी व स्टेज पॉइंट्स।',
          'तय समय से पहले ऑन-साइट इंस्टॉलेशन पूर्ण करने की गारंटी।'
        ],
        btnText: 'टेंट व स्टेज बुक करें',
        chips: ['Sabhi', 'German Hangar', 'Flower Stage', 'Pixel Lighting', 'VIP Sofa']
      },
      '11-2': {
        code: '[11-2]', sub_code: '11-2', slug: 'halwai-catering-services', icon: '🍲',
        title: 'Halwai & Catering Services', hindiTitle: 'हलवाई कारीगर व शुद्ध कैटरिंग सेवा',
        categoryTag: 'कैटरिंग नेटवर्क', rating: '★ 4.9', reviewCount: '7,400+ कार्यक्रम', metaBadge: '100% शुद्धता गारंटी',
        servicesTitle: 'उपलब्ध कैटरिंग सेवाएं:',
        services: [
          { text: '🍲 शुद्ध देशी घी मिष्ठान व शाही पकवान', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🥗 लाइव चाट, डोसा व चाइनीज स्टॉल', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '☕ वेलकम ड्रिंक्स, मॉकटेल्स व सूप बार', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🍽️ क्रॉकरी, वेटर व सर्विस स्टाफ टीम', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'अनुभवी शादी हलवाई टीम, शुद्ध देशी घी कैटरिंग, लाइव चाट स्टॉल व बड़े बर्तन किराया।',
          'प्रति प्लेट पारदर्शी तय रेट कार्ड, कोई छुपा शुल्क नहीं।',
          'छोटे घरेलू आयोजनों से लेकर 5000+ मेहमानों की पूर्ण व्यवस्था।'
        ],
        btnText: 'हलवाई मेन्यू बुक करें',
        chips: ['Sabhi', 'Desi Ghee Halwai', 'Live Chaat', 'Catering Service', 'Utensils']
      },
      '11-3': {
        code: '[11-3]', sub_code: '11-3', slug: 'wedding-drone-photography', icon: '🚁',
        title: 'Wedding Drone Photography', hindiTitle: '4K ड्रोन कैमरा व सिनेमैटिक एल्बम',
        categoryTag: 'ड्रोन व वीडियोग्राफी', rating: '★ 4.9', reviewCount: '3,500+ प्रोजेक्ट्स', metaBadge: '4K अल्ट्रा एचडी',
        servicesTitle: 'कवरेज सुविधाएं:',
        services: [
          { text: '🚁 4K ड्रोन कैमरा हवाई लाइव कवरेज', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🎬 सिनेमैटिक प्री-वेडिंग व टीजर वीडियो', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '📖 फेदर-टच प्रीमियम लेदर फोटो एल्बम', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🎥 3-कैमरा लाइव मिक्सिंग व एलईडी वॉल डिस्प्ले', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: [
          '4K ड्रोन कैमरा हवाई कवरेज, सिनेमैटिक प्री-वेडिंग शूट व फेदर-टच फोटो एल्बम।',
          'समारोह का हर पल 4K सिनेमैटिक क्वालिटी में कैद।',
          'पारदर्शी लिखित अनुबंध व तय समय पर डिलीवरी।'
        ],
        btnText: 'ड्रोन वीडियोग्राफी बुक करें',
        chips: ['Sabhi', '4K Drone Shoot', 'Pre-Wedding', 'Cinematic Video', 'Photo Album']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 12: FINANCE (OFFICIAL GOOGLE PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat12 = {
    id: 'c12',
    number: '12.',
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
        code: '[12-1]', sub_code: '12-1', slug: 'doorstep-aeps-cash', icon: '🏧',
        title: 'Doorstep AEPS Cash', hindiTitle: 'बायोमेट्रिक व माइक्रो-ATM नकद निकासी',
        categoryTag: 'डोरस्टेप बैंकिंग', rating: '★ 4.9', reviewCount: '28,000+ ट्रांजेक्शन', metaBadge: '100% सुरक्षित बायोमेट्रिक',
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
        code: '[12-2]', sub_code: '12-2', slug: 'vyapar-micro-loans', icon: '📈',
        title: 'Vyapar Micro-Loans', hindiTitle: 'दुकानदार मुद्रा व सूक्ष्म व्यापार ऋण',
        categoryTag: 'व्यापार ऋण', rating: '★ 4.8', reviewCount: '9,200+ व्यापारी', metaBadge: 'दैनिक किस्त सुविधा',
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
        code: '[12-3]', sub_code: '12-3', slug: 'vehicle-insurance-help', icon: '🛡️',
        title: '1-Click Vehicle Insurance', hindiTitle: 'वाहन बीमा तत्काल रिन्यूअल व क्लेम सहायता',
        categoryTag: 'बीमा सेवा', rating: '★ 4.9', reviewCount: '7,800+ पॉलिसियां', metaBadge: 'तुरंत डिजिटल पॉलिसी',
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

  // ==============================================================================
  // CATEGORY 13: FOOD & DRINK (OFFICIAL GOOGLE PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat13 = {
    id: 'c13',
    number: '13.',
    icon: '🍲',
    title: 'Food & Drink',
    category_name_en: 'Food & Drink',
    category_name_hi: 'दैनिक खान-पान, टिफिन व ढाबा',
    subtitle: 'मासिक शाकाहारी टिफिन, ढाबा भोजन व शादी-भंडारा थोक राशन',
    rating: '★ 4.8 (32k+ उपभोक्ता)',
    trustBadge: 'FSSAI Hygenic Food',
    supportBadge: '30-मिनट डिलीवरी',
    macroPillars: [
      { text: '🍱 13-1: छात्रों व नौकरीपेशा हेतु शुद्ध सात्विक मासिक टिफिन', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🥘 13-2: प्रसिद्ध ढाबों की गरम दाल मखनी, पनीर व देशी घी मिठाई', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🌾 13-3: शादी-भंडारे हेतु थोक मंडी भाव पर आटा, तेल व चीनी', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subcategories: {
      '13-1': {
        code: '[13-1]', sub_code: '13-1', slug: 'monthly-tiffin-service', icon: '🍱',
        title: 'Monthly Tiffin Service', hindiTitle: 'मासिक शाकाहारी टिफिन व घरेलू मेस',
        categoryTag: 'मासिक टिफिन', rating: '★ 4.9', reviewCount: '14,200+ छात्र व कर्मी', metaBadge: 'घर जैसा शुद्ध स्वाद',
        servicesTitle: 'उपलब्ध टिफिन योजनाएं:',
        services: [
          { text: '🍲 4 रोटी, दाल, चावल, मौसमी सब्जी व सलाद थाली', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '⏰ दोपहर 1 बजे व रात 8 बजे समय पर डिलीवरी', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📅 मासिक टिफिन पास (संडे स्पेशल खीर-पूरी)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '❌ छुट्टी के दिन कैंसिलेशन व पैसा एडजस्टमेंट', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'छात्रों व नौकरीपेशा हेतु शुद्ध शाकाहारी 4-रोटी, दाल, मौसमी सब्जी मासिक टिफिन पास।',
          'कम तेल-मसाले में पकाया गया स्वास्थ्यवर्धक घरेलू भोजन।',
          'हॉस्टल, लॉज और ऑफिस में गर्म टिफिन डिलीवरी।'
        ],
        btnText: 'टिफिन पास बुक करें',
        chips: ['Sabhi', 'Veg Tiffin', 'Student Thali', 'Daily Delivery', 'Pure Desi']
      },
      '13-2': {
        code: '[13-2]', sub_code: '13-2', slug: 'local-dhaba-sweets', icon: '🥘',
        title: 'Local Dhaba & Sweets', hindiTitle: 'स्थानीय ढाबा भोजन व शुद्ध मिष्ठान',
        categoryTag: 'ढाबा व मिष्ठान', rating: '★ 4.8', reviewCount: '11,000+ ग्राहक', metaBadge: '30-मिनट डिलीवरी',
        servicesTitle: 'ढाबा व मिष्ठान मेन्यू:',
        services: [
          { text: '🍛 दाल मखनी, कढ़ाई पनीर व तंदूरी बटर रोटी', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🪔 शुद्ध देशी घी काजू कतली, लड्डू व गुलाब जामुन', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '🥨 गरमा-गरम समोसा, कचौरी व ढोकला', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🎂 बर्थडे फ्रेश क्रीम केक व कस्टमाइज्ड गिफ्ट बॉक्स', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' }
        ],
        highlights: [
          'शहर के प्रसिद्ध ढाबों की गरम दाल मखनी, पनीर व देशी घी मिठाई 30-मिनट डिलीवरी।',
          'फूड सेफ्टी नियमों (FSSAI) का कड़ाई से पालन।',
          'ऑनलाइन ऑर्डर पर विशेष छूट व कूपन ऑफर।'
        ],
        btnText: 'ढाबा भोजन मंगाएं',
        chips: ['Sabhi', 'Dal Makhani', 'Paneer Special', 'Desi Ghee Sweets', 'Fast Delivery']
      },
      '13-3': {
        code: '[13-3]', sub_code: '13-3', slug: 'bulk-mandi-event-ration', icon: '🌾',
        title: 'Bulk Mandi Event Ration', hindiTitle: 'शादी, यज्ञ व भंडारा थोक राशन सप्लाई',
        categoryTag: 'इवेंट थोक राशन', rating: '★ 4.9', reviewCount: '6,800+ आयोजक', metaBadge: 'सीधे मंडी मिल भाव',
        servicesTitle: 'थोक राशन कैटलॉग:',
        services: [
          { text: '🌾 चक्की फ्रेश आटा (50kg कट्टा) व बासमती चावल', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🛢️ 15-लीटर फॉर्च्यून / देशी सरसों तेल टिन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🍬 उत्तम क्वालिटी चीनी बोरी व दाल थोक बैग्स', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🚚 आयोजन स्थल तक निःशुल्क टेम्पो अनलोडिंग', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'शादी, भंडारे हेतु थोक मंडी भाव पर आटा कट्टा, 15-लीटर तेल टिन व चीनी सप्लाई।',
          'सीधे थोक मिल भाव पर ताजी सामग्री की आपूर्ति।',
          'समय पर आयोजन स्थल पर सुरक्षित डिलीवरी।'
        ],
        btnText: 'थोक राशन ऑर्डर करें',
        chips: ['Sabhi', 'Atta Katta', 'Oil 15L Tin', 'Sugar Bags', 'Wholesale Rate']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 14: HEALTH & FITNESS (OFFICIAL GOOGLE PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat14 = {
    id: 'c14',
    number: '14.',
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
        code: '[14-1]', sub_code: '14-1', slug: 'doorstep-yoga-physio', icon: '🩺',
        title: 'Doorstep Yoga & Physio', hindiTitle: 'डोरस्टेप योग प्रशिक्षक व फिजियोथेरेपी',
        categoryTag: 'योग व फिजियो', rating: '★ 4.9', reviewCount: '5,600+ साधक', metaBadge: 'आयुष प्रमाणित',
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
        code: '[14-2]', sub_code: '14-2', slug: 'local-gym-passes', icon: '🏋️',
        title: 'Local Gym Membership Passes', hindiTitle: 'नजदीकी आधुनिक जिम वर्कआउट पास',
        categoryTag: 'जिम वर्कआउट पास', rating: '★ 4.9', reviewCount: '8,400+ मेंबर्स', metaBadge: 'फ्लेक्सिबल पास',
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
        code: '[14-3]', sub_code: '14-3', slug: 'desi-akhada-nutrition', icon: '🥛',
        title: 'Desi Akhada Nutrition', hindiTitle: 'देसी अखाड़ा पोषण, A2 कच्चा दूध व सत्तू',
        categoryTag: 'देसी पोषण आहार', rating: '★ 4.9', reviewCount: '4,000+ ग्राहक', metaBadge: '100% शुद्ध देशी',
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

  // ==============================================================================
  // CATEGORY 15: HOUSE & HOME (CANONICAL BLUEPRINT WITH ROOM SEARCH & RENT LEDGER)
  // ==============================================================================
  var cat15 = {
    id: 'c15',
    number: '15.',
    num: '15.',
    icon: '🏠',
    title: 'House & Home',
    category_name_en: 'House & Home',
    category_name_hi: 'कमरा खोज, किराया बहीखाता व घरेलू मिस्त्री',
    subtitle: 'कमरा खोज (0% दलाली), किराया बहीखाता व मिस्त्री नेटवर्क',
    rating: '★ 4.9 (28k+ परिवार व छात्र)',
    trustBadge: '0% Brokerage & Verified',
    supportBadge: '24x7 आवास सहायता',
    macroPillars: [
      { text: '🏠 15-1: 0% ब्रोकरेज कमरा, 1RK/2BHK फ्लैट, छात्र लॉज व पीजी खोज', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '📋 15-2: डिजिटल किराया बहीखाता, बिजली सब-मीटर व WhatsApp रसीद', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🛠️ 15-3: इलेक्ट्रीशियन, प्लंबर, बढ़ई, पेंटर व दैनिक गृह मरम्मत', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subcategories: {
      '15-1': {
        code: '[15-1]', sub_code: '15-1', slug: 'room-flat-search', icon: '🏠',
        title: 'Room & Flat Search (0% Brokerage)', hindiTitle: 'कमरा, फ्लैट, हॉस्टल व पीजी खोज (शून्य दलाली)',
        categoryTag: 'आवास खोज', rating: '★ 4.9', reviewCount: '14,800+ छात्र व परिवार', metaBadge: '0% ब्रोकरेज',
        servicesTitle: 'आवास खोज विकल्प:',
        services: [
          { text: '🛏️ प्रतियोगी छात्रों हेतु सिंगल रूम व 1 RK बजट आवास (शून्य दलाली)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🏢 1 BHK / 2 BHK / 3 BHK पारिवारिक फ्लैट व स्वतंत्र मकान', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '👭 गर्ल्स हॉस्टल, सेफ पीजी व मेस सुविधा युक्त बॉयज लॉज', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '🏪 दुकान, गोदाम व व्यावसायिक परिसर किराये हेतु सीधा संपर्क', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: [
          'बिना किसी दलाल या बिचौलिए के सीधे मकान मालिक से फोन पर बात करें।',
          'कोचिंग और कॉलेज के पास सत्यापित सुरक्षित कमरे।',
          'तय किराया और बिना किसी छिपे चार्ज के पारदर्शी व्यवस्था।'
        ],
        btnText: 'कमरा / फ्लैट खोजें',
        chips: ['Sabhi', 'Single Room', '1BHK/2BHK', 'Hostel & PG', 'Commercial Shop']
      },
      '15-2': {
        code: '[15-2]', sub_code: '15-2', slug: 'rental-ledger', icon: '📋',
        title: 'Rental Ledger & Tenant Bahi-Khata', hindiTitle: 'किराया बहीखाता व किरायेदार प्रबंधन',
        categoryTag: 'किराया लेजर', rating: '★ 4.9', reviewCount: '8,400+ मकान मालिक', metaBadge: '₹0 आजीवन मुफ्त',
        servicesTitle: 'डिजिटल बहीखाता सुविधाएं:',
        services: [
          { text: '🧾 1-क्लिक WhatsApp किराया रसीद (PDF) व मासिक ऑटो-रिमाइंडर', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '⚡ ऑटो सब-मीटर बिजली यूनिट कैलकुलेटर (यूनिट × दर = कुल बिल)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📑 डिजिटल रेंट एग्रीमेंट ड्राफ्ट व किरायेदार पुलिस सत्यापन रिकॉर्ड', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '💰 सुरक्षा जमा (Security Deposit) व बकाया हिसाब-किताब लेजर', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'कागजी डायरी और हिसाब के विवादों से मकान मालिक व किरायेदार दोनों को मुक्ति।',
          'किराया आते ही फोन पर पक्की रसीद और स्वतः लेजर अपडेट।',
          'सरकारी ई-स्टाम्प रेंट एग्रीमेंट बनाने में पूर्ण सहयोग।'
        ],
        btnText: 'किराया बहीखाता खोलें',
        chips: ['Sabhi', 'Rent Slip PDF', 'Sub-meter Calculator', 'Rent Agreement', 'Deposit Ledger']
      },
      '15-3': {
        code: '[15-3]', sub_code: '15-3', slug: 'mistry-home-repair', icon: '🛠️',
        title: 'Mistry & Home Repair', hindiTitle: 'इलेक्ट्रीशियन, प्लंबर, बढ़ई व पेंटर नेटवर्क',
        categoryTag: 'होम मेंटेनेंस', rating: '★ 4.8', reviewCount: '18,500+ मरम्मत कार्य', metaBadge: '30 मिनट में पहुंच',
        servicesTitle: 'उपलब्ध मिस्त्री व कारीगर सेवाएं:',
        services: [
          { text: '⚡ इलेक्ट्रीशियन: शॉर्ट सर्किट, पंखा-कूलर, इनवर्टर व समर्सिबल रिपेयर', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🚰 प्लंबर: नल लीकेज, छत की टंकी फिटिंग व सीवरेज ब्लॉकेज सफाई', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🪚 बढ़ई: लकड़ी दरवाजा, ताला, बेड-अलमारी रिपेयर व चैनल अलाइनमेंट', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '🎨 पेंटर व राजमिस्त्री: दीवार पुट्टी, वॉटरप्रूफिंग, डिस्टेंपर व टाइल वर्क', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: [
          'तय और पारदर्शी रेट कार्ड—काम से पहले पक्का रेट, कोई मोलभाव नहीं।',
          '30 मिनट में स्थानीय कुशल कारीगर आपके दरवाजे पर।',
          '7 दिन की कार्य संतुष्टि वारंटी व शून्य छुपा शुल्क।'
        ],
        btnText: 'कारीगर बुक करें',
        chips: ['Sabhi', 'Electrician', 'Plumber', 'Carpenter', 'Painter', 'Mason']
      }
    }
  };

  // ==============================================================================
  // REGISTRATION MATRIX: 11 TO 15 (MULTI-LOOKUP SAFE KEYS)
  // ==============================================================================
  var BATCH_11_15 = {
    '11': cat11, 'c11': cat11, '011': cat11,
    '12': cat12, 'c12': cat12, '012': cat12,
    '13': cat13, 'c13': cat13, '013': cat13,
    '14': cat14, 'c14': cat14, '014': cat14,
    '15': cat15, 'c15': cat15, '015': cat15
  };

  // Central Registry Registration with Event Fallback
  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_11_15);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_11_15);
      }
    });
  }
})();
