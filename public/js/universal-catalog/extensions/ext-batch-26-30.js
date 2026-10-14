/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION BATCH (26-30)
 * MODULE        : Official Google Play Store Standard Categories 26 to 30
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) MODULAR MICRO-BATCH
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-batch-26-30.js
 */

(function () {
  'use strict';

  // ==============================================================================
  // CATEGORY 26: SHOPPING (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat26 = {
    id: 'c26', catId: '26', number: '26.', num: '26.', icon: '🛒',
    title: 'Shopping', category_name_en: 'Shopping', category_name_hi: 'थोक किराना, मासिक राशन व सुपरमार्केट',
    subtitle: 'थोक किराना, मासिक राशन, सुपरमार्केट व दैनिक सामग्री',
    rating: '★ 4.9 (42k+ परिवार)', trustBadge: 'Shuddhata Verified', supportBadge: 'सुपरफास्ट 2 घंटे डिलीवरी',
    macroPillars: [
      { text: '🌾 26-1: थोक भाव खाद्यान्न, आटा, चावल, दाल, तेल व चीनी', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🧼 26-2: दैनिक एफएमसीजी, ब्रांडेड मसाले, साबुन व क्लीनिंग किट', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📦 26-3: मासिक पारिवारिक राशन कॉम्बो पैक व फ्री होम डिलीवरी', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '26-1': {
        code: '[26-1]', sub_code: '26-1', slug: 'food-grains-bulk-ration', icon: '🌾',
        title: 'Food Grains & Bulk Ration', hindiTitle: 'थोक खाद्यान्न, दाल व खाद्य तेल',
        categoryTag: 'अनाज मंडी', tag: 'अनाज मंडी', rating: '★ 4.9', reviewCount: '18,400+ ग्राहक', metaBadge: '100% पत्थर-कचरा मुक्त',
        servicesTitle: 'उपलब्ध खाद्यान्न सामग्री:',
        services: [
          { text: '🍚 प्रीमियम बासमती, कतरनी व मंसूरी चावल', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🌾 चक्की फ्रेश एमपी शरबती गेहूं आटा', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🥣 अनपॉलिश अरहर, चना, मूंग व उड़द दाल', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🛢️ शुद्ध कच्ची घानी सरसों तेल व रिफाइंड तेल', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: ['मंडी के थोक भाव पर खुदरा खरीद की अनूठी सुविधा।', 'फैक्ट्री सीलबंद बोरियां और शुद्धता की पूर्ण गारंटी।', 'वजन में 1 ग्राम की भी हेराफेरी न होने का पक्का भरोसा।'],
        btnText: 'थोक राशन खरीदें', chips: ['Sabhi', 'Basmati Rice', 'Sharbati Atta', 'Unpolished Dal', 'Mustard Oil']
      },
      '26-2': {
        code: '[26-2]', sub_code: '26-2', slug: 'fmcg-daily-essentials', icon: '🧼',
        title: 'FMCG & Daily Essentials', hindiTitle: 'एफएमसीजी व ब्रांडेड घरेलू सामग्री',
        categoryTag: 'दैनिक उपभोग', tag: 'दैनिक उपभोग', rating: '★ 4.8', reviewCount: '14,200+ परिवार', metaBadge: 'एमआरपी से 10-15% छूट',
        servicesTitle: 'दैनिक घरेलू सामग्री:',
        services: [
          { text: '🧂 टाटा नमक, एवरेस्ट/एमडीएच खड़े व पिसे मसाले', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '☕ प्रीमियम चायपत्ती, कॉफी व बिस्कुट पैकेट', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🧼 सर्फ एक्सेल, डिटॉल, साबुन व फ्लोर क्लीनर', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🪥 टूथपेस्ट, शैम्पू व पर्सनल हाइजीन उत्पाद', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['सभी नामचीन ब्रांड्स का 100% ताजा और असली स्टॉक।', 'दुकानों से सस्ता रेट और घर तक मुफ्त पहुंचाना।', 'पक्का जीएसटी बिल और सुरक्षित डिजिटल भुगतान।'],
        btnText: 'घरेलू सामान मंगाएं', chips: ['Sabhi', 'Spices & Salt', 'Tea & Coffee', 'Detergent & Soap', 'Hygiene Kit']
      },
      '26-3': {
        code: '[26-3]', sub_code: '26-3', slug: 'monthly-family-ration-combo', icon: '📦',
        title: 'Monthly Family Ration Combo', hindiTitle: 'मासिक पारिवारिक राशन बंडल',
        categoryTag: 'मासिक बचत', tag: 'मासिक बचत', rating: '★ 4.9', reviewCount: '9,800+ घर', metaBadge: 'मासिक बजट सेवर',
        servicesTitle: 'मासिक राशन पैकेज विकल्प:',
        services: [
          { text: '👨‍👩‍👧‍👦 4 सदस्यों का संपूर्ण मासिक राशन कॉम्बो', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🧑‍🎓 हॉस्टल व स्टूडेंट्स स्पेशल मिनी राशन पैक', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📦 लिस्ट का फोटो भेजकर 1-क्लिक सीधा ऑर्डर', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🚚 अपार्टमेंट व घर के दरवाजे पर मुफ्त लोडिंग', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: ['हाथ से लिखी पर्ची का फोटो भेजें, 2 घंटे में सामान आपके घर।', 'मासिक राशन पर अतिरिक्त 5% विशेष परिवार छूट।', 'पसंद न आने पर उसी समय वापसी की पूरी सुविधा।'],
        btnText: 'राशन पर्ची भेजें', chips: ['Sabhi', 'Family Ration', 'Student Ration Pack', '1-Click Photo Order']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 27: SOCIAL (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat27 = {
    id: 'c27', catId: '27', number: '27.', num: '27.', icon: '🤝',
    title: 'Social', category_name_en: 'Social', category_name_hi: 'ग्राम पंचायत संवाद, नागरिक मंच व रक्तदान',
    subtitle: 'ग्राम पंचायत संवाद, नागरिक मंच, सामुदायिक समूह व जनकल्याण',
    rating: '★ 4.8 (28k+ नागरिक)', trustBadge: 'Community Verified', supportBadge: 'नागरिक संवाद केंद्र',
    macroPillars: [
      { text: '🏛️ 27-1: ग्राम सभा, पंचायत विकास योजनाएं व नागरिक सूचना मंच', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '👥 27-2: सत्यापित स्थानीय मोहल्ला समितियां व नागरिक मंच', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🩸 27-3: रक्तदान नेटवर्क, सामाजिक सहायता व जनसहयोग समूह', color: '#f87171', bg: 'rgba(239, 68, 68, 0.14)' }
    ],
    subcategories: {
      '27-1': {
        code: '[27-1]', sub_code: '27-1', slug: 'panchayat-village-forum', icon: '🏛️',
        title: 'Panchayat & Village Forum', hindiTitle: 'पंचायत संवाद व ग्राम सभा सूचना',
        categoryTag: 'पंचायत मंच', tag: 'पंचायत मंच', rating: '★ 4.9', reviewCount: '12,400+ ग्रामीण', metaBadge: 'पारदर्शी संवाद',
        servicesTitle: 'पंचायत संवाद सुविधाएं:',
        services: [
          { text: '📜 ग्राम सभा बैठक तिथि व कार्ययोजना सूचना', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🌾 मनरेगा मजदूरी व पंचायत विकास कार्य स्टेटस', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '💡 गांव की नली-गली, चापाकल मरम्मत शिकायत मंच', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📢 मुखिया, वार्ड सदस्य व पंचायत सचिव संपर्क सूत्र', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['गांव के विकास में प्रत्येक नागरिक की सीधी भागीदारी।', 'सरकारी योजनाओं के लाभुकों की निष्पक्ष सूची।', 'समस्याओं का ऑनलाइन पंजीकरण व त्वरित समाधान।'],
        btnText: 'पंचायत मंच से जुड़ें', chips: ['Sabhi', 'Gram Sabha', 'MNREGA Status', 'Civic Complaints']
      },
      '27-2': {
        code: '[27-2]', sub_code: '27-2', slug: 'citizen-groups-resident-forums', icon: '👥',
        title: 'Citizen Groups & Resident Forums', hindiTitle: 'नागरिक समूह व मोहल्ला समितियां',
        categoryTag: 'सामुदायिक समूह', tag: 'सामुदायिक समूह', rating: '★ 4.8', reviewCount: '8,900+ नागरिक', metaBadge: 'सत्यापित निवासी',
        servicesTitle: 'स्थानीय सामुदायिक मंच:',
        services: [
          { text: '🏘️ मोहल्ला सुधार समिति व आरडब्ल्यूए संवाद', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '👮 सुरक्षा निगरानी व अवांछित तत्वों की सूचना', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🎪 सार्वजनिक पूजा, दुर्गा पूजा व छठ मेला आयोजन समिति', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🌱 पर्यावरण, स्वच्छता व पौधारोपण अभियान', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: ['स्थानीय नागरिकों का संगठित और सुरक्षित डिजिटल समूह।', 'सामुदायिक कार्यक्रमों में आपसी तालमेल और सहयोग।', 'क्षेत्रीय समस्याओं पर एकजुट होकर समाधान निकालने का मंच।'],
        btnText: 'मोहल्ला ग्रुप जॉइन करें', chips: ['Sabhi', 'RWA Forum', 'Security Alerts', 'Puja Committee']
      },
      '27-3': {
        code: '[27-3]', sub_code: '27-3', slug: 'blood-donation-mutual-aid', icon: '🩸',
        title: 'Blood Donation & Mutual Aid', hindiTitle: 'रक्तदान नेटवर्क व आपातकालीन सहायता',
        categoryTag: 'जनकल्याण', tag: 'जनकल्याण', rating: '★ 4.9', reviewCount: '7,100+ डोनर्स', metaBadge: '24x7 निःशुल्क सेवा',
        servicesTitle: 'आपदा व जनसहायता नेटवर्क:',
        services: [
          { text: '🩸 आपातकाल में तुरंत सत्यापित ब्लड डोनर खोजें', bg: 'rgba(239,68,68,0.15)', c: '#f87171' },
          { text: '🤝 गरीब कन्या विवाह व शिक्षा सहयोग कोष', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🍲 लावारिस व जरूरतमंदों हेतु अन्नदान सेवा', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🚨 दुर्घटना व आपदा में वॉलंटियर रेस्क्यू टीम', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' }
        ],
        highlights: ['एक कॉल पर रक्तदान हेतु तैयार निष्ठावान युवाओं का दल।', 'प्रत्येक दान और सहायता का 100% पारदर्शी हिसाब।', 'मानवता की सेवा हेतु समर्पित निस्वार्थ नागरिक नेटवर्क।'],
        btnText: 'रक्तदाता खोजें / बनें', chips: ['Sabhi', 'Emergency Blood', 'Marriage Aid', 'Volunteer Rescue']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 28: SPORTS (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat28 = {
    id: 'c28', catId: '28', number: '28.', num: '28.', icon: '⚽',
    title: 'Sports', category_name_en: 'Sports', category_name_hi: 'स्पोर्ट्स टर्फ, बॉक्स क्रिकेट व खेल सामग्री',
    subtitle: 'स्पोर्ट्स टर्फ, बॉक्स क्रिकेट बुकिंग, खेल सामग्री व प्रशिक्षण',
    rating: '★ 4.9 (15k+ खिलाड़ी)', trustBadge: 'Sports Facility Certified', supportBadge: 'ऑनलाइन स्लॉट बुकिंग',
    macroPillars: [
      { text: '🏏 28-1: बॉक्स क्रिकेट व फीफा अप्रूव्ड फुटबॉल टर्फ ग्राउंड बुकिंग', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🏸 28-2: पेशेवर बैडमिंटन कोर्ट, टेबल टेनिस व स्विमिंग पूल स्लॉट्स', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🏆 28-3: खेल सामग्री, बैट, बॉल, जर्सी व एथलेटिक टूर्नामेंट्स', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subcategories: {
      '28-1': {
        code: '[28-1]', sub_code: '28-1', slug: 'box-cricket-football-turf', icon: '🏏',
        title: 'Box Cricket & Football Turf', hindiTitle: 'बॉक्स क्रिकेट व फुटबॉल टर्फ ग्राउंड',
        categoryTag: 'टर्फ ग्राउंड्स', tag: 'टर्फ ग्राउंड्स', rating: '★ 4.9', reviewCount: '7,800+ मैचेस', metaBadge: 'फ्लडलाइट्स युक्त',
        servicesTitle: 'टर्फ बुकिंग सुविधाएं:',
        services: [
          { text: '🏏 नाइट बॉक्स क्रिकेट टर्फ स्लॉट प्रति घंटा', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '⚽ 5-ए-साइड व 7-ए-साइड आर्टिफिशियल ग्रास फुटबॉल', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '💡 एलईडी फ्लडलाइट्स व बारिश में वाटरप्रूफ ड्रेनेज', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📹 मैच की लाइव रिकॉर्डिंग व स्कोरबोर्ड डिस्प्ले', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['दोस्तों और कॉर्पोरेट टीमों हेतु तनावमुक्त खेल का माहौल।', 'सॉफ्ट लेदर व टेनिस बॉल के साथ खेलने हेतु अनुकूल बाउंड्री।', 'शीतल पेयजल, चेंजिंग रूम व कैंटीन सुविधा उपलब्ध।'],
        btnText: 'टर्फ स्लॉट बुक करें', chips: ['Sabhi', 'Box Cricket Turf', 'Football Turf', 'Night Floodlights']
      },
      '28-2': {
        code: '[28-2]', sub_code: '28-2', slug: 'badminton-swimming-hub', icon: '🏸',
        title: 'Badminton & Swimming Hub', hindiTitle: 'बैडमिंटन कोर्ट व स्विमिंग पूल',
        categoryTag: 'इंडोर स्पोर्ट्स', tag: 'इंडोर स्पोर्ट्स', rating: '★ 4.8', reviewCount: '4,200+ मेंबर्स', metaBadge: 'वुडन कोर्ट्स',
        servicesTitle: 'इंडोर खेल सुविधाएं:',
        services: [
          { text: '🏸 सिंथेटिक व वुडन बैडमिंटन कोर्ट प्रति घंटा बुकिंग', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏊 स्वच्छ व क्लोरीनेटेड स्विमिंग पूल स्लॉट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏓 प्रोफेशनल टेबल टेनिस बोर्ड व बिलियर्ड्स टेबल', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🥋 कराटे, ताइक्वांडो व सेल्फ डिफेंस ट्रेनिंग', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: ['धूल और गर्मी से मुक्त पूर्णतः वातानुकूलित इंडोर कोर्ट्स।', 'शुरुआती खिलाड़ियों हेतु कोच और रैकेट रेंटल की सुविधा।', 'परिवार व बच्चों हेतु पूर्ण सुरक्षित माहौल।'],
        btnText: 'कोर्ट स्लॉट चुनें', chips: ['Sabhi', 'Badminton Court', 'Swimming Pool', 'Table Tennis', 'Karate']
      },
      '28-3': {
        code: '[28-3]', sub_code: '28-3', slug: 'sports-gear-tournaments', icon: '🏆',
        title: 'Sports Gear & Tournaments', hindiTitle: 'खेल सामग्री, जर्सी व टूर्नामेंट',
        categoryTag: 'खेल उपकरण', tag: 'खेल उपकरण', rating: '★ 4.8', reviewCount: '3,400+ खिलाड़ी', metaBadge: 'ओरिजिनल ब्रांड्स',
        servicesTitle: 'खेल उपकरण व आयोजक सेवाएं:',
        services: [
          { text: '🏏 कश्मीर विलो व इंग्लिश विलो क्रिकेट बैट', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '👕 कस्टमाइज्ड टीम जर्सी प्रिंटिंग व स्पोर्ट्स शूज', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏸 योनेक्स बैडमिंटन रैकेट, शटलकॉक व ग्रिप', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏆 स्थानीय क्रिकेट/फुटबॉल टूर्नामेंट रजिस्ट्रेशन', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['टिकाऊ और प्रामाणिक खेल सामग्री रियायती दरों पर।', 'स्कूलों और क्लबों हेतु बल्क किट्स पर विशेष छूट।', 'पुरस्कार राशि वाले स्थानीय खेल आयोजनों में सीधी प्रविष्टि।'],
        btnText: 'खेल सामग्री खरीदें', chips: ['Sabhi', 'Cricket Bats', 'Custom Jersey', 'Yonex Rackets', 'Tournaments']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 29: TOOLS (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat29 = {
    id: 'c29', catId: '29', number: '29.', num: '29.', icon: '🔧',
    title: 'Tools', category_name_en: 'Tools', category_name_hi: 'बोरवेल, पावर टूल्स रेंटल व मशीनरी',
    subtitle: 'सबमर्सिबल बोरवेल, पावर टूल्स, वेल्डिंग व मशीनरी रेंटल',
    rating: '★ 4.9 (22k+ कारीगर व बिल्डर्स)', trustBadge: 'Machinery Verified', supportBadge: 'साइट पर तुरंत डिलीवरी',
    macroPillars: [
      { text: '💧 29-1: डीप बोरवेल ड्रिलिंग, सबमर्सिबल पंप व मोटर फिटिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '⚙️ 29-2: पावर टूल्स (ड्रिल, कटर, वाइब्रेटर) किराए पर उपलब्ध', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🔩 29-3: वेल्डिंग मशीन, जनरेटर, कंप्रेसर व हार्डवेयर औजार', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '29-1': {
        code: '[29-1]', sub_code: '29-1', slug: 'borewell-drilling-pumps', icon: '💧',
        title: 'Borewell Drilling & Pumps', hindiTitle: 'बोरवेल ड्रिलिंग व सबमर्सिबल पंप',
        categoryTag: 'बोरवेल नेटवर्क', tag: 'बोरवेल नेटवर्क', rating: '★ 4.9', reviewCount: '8,400+ बोरिंग', metaBadge: 'सटीक वॉटर प्वाइंट जांच',
        servicesTitle: 'बोरवेल व पंप सुविधाएं:',
        services: [
          { text: '🚜 4.5 से 6.5 इंच आधुनिक रिग बोरवेल खनन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '⚡ क्रॉम्पटन / किर्लोस्कर 1 HP - 3 HP सबमर्सिबल पंप', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🚰 बोरवेल में फंसी मोटर निकालना व मोटर रिवाइंडिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🧪 भूजल सर्वेक्षण (Groundwater Survey) विशेषज्ञ', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['अनुभवी ऑपरेटरों द्वारा बिना किसी जोखिम के सटीक बोरिंग।', 'प्रति फीट पारदर्शी तय रेट कार्ड।', 'मोटर और पाइप फिटिंग की 1-वर्षीय ऑन-साइट सर्विस वारंटी।'],
        btnText: 'बोरवेल ड्रिलिंग बुक करें', chips: ['Sabhi', 'Rig Borewell', 'Submersible Pump', 'Motor Rewinding']
      },
      '29-2': {
        code: '[29-2]', sub_code: '29-2', slug: 'power-tools-on-rent', icon: '⚙️',
        title: 'Power Tools on Rent', hindiTitle: 'पावर टूल्स रेंटल व कटिंग मशीनें',
        categoryTag: 'टूल्स रेंटल', tag: 'टूल्स रेंटल', rating: '★ 4.8', reviewCount: '9,200+ कारीगर', metaBadge: 'प्रतिदिन किफायती किराया',
        servicesTitle: 'किराए हेतु उपलब्ध टूल्स:',
        services: [
          { text: '🔨 कंक्रीट ब्रेकर व हैमर ड्रिल मशीन', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🪚 मार्बल, ग्रेनाइट व टाइल कटर मशीन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏗️ कंक्रीट वाइब्रेटर व अर्थ कॉम्पेक्टर मशीन', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🪜 एल्युमिनियम फोल्डेबल सीढ़ी व मचान पाइप्स', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: ['महंगी मशीनें खरीदने के बजाय कम किराए पर काम निपटाएं।', 'काम के बीच मशीन खराब होने पर तुरंत 1 घंटे में रिप्लेसमेंट।', 'साइट पर तुरंत डिलीवरी व पिकअप सुविधा।'],
        btnText: 'मशीन रेंट पर लें', chips: ['Sabhi', 'Hammer Drill', 'Marble Cutter', 'Vibrator Machine', 'Ladder Rent']
      },
      '29-3': {
        code: '[29-3]', sub_code: '29-3', slug: 'welding-heavy-machinery', icon: '🔩',
        title: 'Welding & Heavy Machinery', hindiTitle: 'वेल्डिंग, जनरेटर व हार्डवेयर टूल्स',
        categoryTag: 'मशीनरी टूल्स', tag: 'मशीनरी टूल्स', rating: '★ 4.8', reviewCount: '4,800+ प्रोजेक्ट्स', metaBadge: 'हैवी ड्यूटी परफॉर्मेंस',
        servicesTitle: 'हार्डवेयर व प्लांट टूल्स:',
        services: [
          { text: '⚡ इन्वर्टर आर्क व टीआईजी वेल्डिंग मशीन', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🔋 5 KVA से 62 KVA साइलेंट डीजल जनरेटर रेंट', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '💨 हाई-प्रेशर एयर कंप्रेसर व पेंट स्प्रे गन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🧰 नट, बोल्ट, पाना सेट व इलेक्ट्रीशियन टूलकिट', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['निर्माण और फेब्रिकेशन कार्यों हेतु औद्योगिक ग्रेड मशीनरी।', 'ईंधन कुशल व निर्बाध चलने वाले जनरेटर सेट्स।', 'कारीगरों और ठेकेदारों हेतु आवश्यक सभी हार्डवेयर औजार।'],
        btnText: 'वेल्डिंग मशीनरी मंगाएं', chips: ['Sabhi', 'Inverter Welding', 'Diesel Generator', 'Air Compressor', 'Tool Kit']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 30: TRAVEL & LOCAL (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat30 = {
    id: 'c30', catId: '30', number: '30.', num: '30.', icon: '✈️',
    title: 'Travel & Local', category_name_en: 'Travel & Local', category_name_hi: 'तीर्थ यात्रा, टूर पैकेज व टिकटिंग',
    subtitle: 'तीर्थ यात्रा, टूर पैकेज, ट्रेन/फ्लाइट टिकटिंग व लोकल गाइड',
    rating: '★ 4.9 (31k+ यात्री)', trustBadge: 'IRCTC / IATA Certified', supportBadge: '24x7 यात्रा सहायता',
    macroPillars: [
      { text: '🕉️ 30-1: संपूर्ण धार्मिक तीर्थ यात्रा, देवघर, बनारस व चार धाम बस', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🎟️ 30-2: तत्काल ट्रेन टिकट, फ्लाइट बुकिंग व होटल रिजर्वेशन', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🌲 30-3: स्थानीय पर्यटन, जलप्रपात, बेतला सफारी व सत्यापित गाइड', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '30-1': {
        code: '[30-1]', sub_code: '30-1', slug: 'pilgrimage-teerth-yatra', icon: '🕉️',
        title: 'Pilgrimage & Teerth Yatra', hindiTitle: 'धार्मिक तीर्थ यात्रा व स्पेशल बसें',
        categoryTag: 'तीर्थ यात्रा', tag: 'तीर्थ यात्रा', rating: '★ 4.9', reviewCount: '14,100+ तीर्थयात्री', metaBadge: 'भोजन व आवास सहित',
        servicesTitle: 'उपलब्ध तीर्थ पैकेज:',
        services: [
          { text: '🛕 देवघर बाबा धाम व बासुकीनाथ स्पेशल टूर बस', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🚩 काशी विश्वनाथ, अयोध्या राम मंदिर व प्रयागराज', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '⛰️ जगन्नाथ पुरी, गया जी पिंडदान व गंगासागर यात्रा', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🚌 वातानुकूलित 2x2 पुशबैक डीलक्स बस सुविधा', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: ['वरिष्ठ नागरिकों हेतु आरामदायक और समर्पित केयरटेकर स्टाफ।', 'शुद्ध वैष्णव सात्विक भोजन और होटल में रुकने की पक्की व्यवस्था।', 'मंदिरों में सुलभ व कतार-मुक्त वीआईपी दर्शन में सहयोग।'],
        btnText: 'तीर्थ यात्रा बुक करें', chips: ['Sabhi', 'Deoghar Tour', 'Ayodhya Kashi', 'Puri Yatra', 'Deluxe Bus']
      },
      '30-2': {
        code: '[30-2]', sub_code: '30-2', slug: 'train-flight-hotel-booking', icon: '🎟️',
        title: 'Train, Flight & Hotel Booking', hindiTitle: 'ट्रेन, फ्लाइट टिकट व होटल बुकिंग',
        categoryTag: 'टिकटिंग सेवा', tag: 'टिकटिंग सेवा', rating: '★ 4.8', reviewCount: '11,200+ बुकिंग', metaBadge: 'अधिकृत आईआरसीटीसी एजेंट',
        servicesTitle: 'टिकटिंग व आवास सेवाएं:',
        services: [
          { text: '🚆 अधिकृत रेलवे ई-टिकट व तत्काल कन्फर्मेशन सेवा', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '✈️ न्यूनतम किराए पर घरेलू व अंतरराष्ट्रीय फ्लाइट टिकटिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏨 बजट व 3-स्टार फैमिली होटल 30% छूट पर रूम', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🚌 इंटरस्टेट स्लीपर वॉल्वो बस सीट बुकिंग', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['टिकट कैंसिल होने पर बिना देरी तुरंत रिफंड की सुविधा।', 'त्योहारों में कन्फर्म्ड सीट विकल्पों की तलाश में सहायता।', 'बिना छुपे शुल्कों के पारदर्शी व पक्की रसीद।'],
        btnText: 'टिकट बुक कराएं', chips: ['Sabhi', 'Railway Tickets', 'Flight Booking', 'Budget Hotels', 'Volvo Bus']
      },
      '30-3': {
        code: '[30-3]', sub_code: '30-3', slug: 'local-sightseeing-tour-guides', icon: '🌲',
        title: 'Local Sightseeing & Tour Guides', hindiTitle: 'लोकल टूरिज्म व गाइड सेवाएं',
        categoryTag: 'पर्यटन गाइड', tag: 'पर्यटन गाइड', rating: '★ 4.8', reviewCount: '5,900+ पर्यटक', metaBadge: 'पर्यटन विभाग पंजीकृत',
        servicesTitle: 'स्थानीय पर्यटन सुविधाएं:',
        services: [
          { text: '🌊 हुंडरू, जोन्हा व दशम फॉल्स 1-डे टूर पैकेज', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🐅 बेतला नेशनल पार्क व नेतरहाट सनसेट सफारी', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🧑‍🏫 ऐतिहासिक व पुरातात्विक स्थलों हेतु सर्टिफाइड गाइड', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🚙 दर्शनीय स्थलों हेतु इनोवा/स्कॉर्पियो फुल डे रेंटल', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['पर्यटकों की सुरक्षा व सम्मानजनक व्यवहार की 100% गारंटी।', 'स्थानीय इतिहास, संस्कृति और खान-पान का प्रामाणिक अनुभव।', 'परिवार और समूहों हेतु कस्टमाइज्ड सुरक्षित यात्रा कार्यक्रम।'],
        btnText: 'टूर गाइड बुक करें', chips: ['Sabhi', 'Waterfalls Tour', 'Betla Safari', 'Certified Guide', 'Car Rental']
      }
    }
  };

  // ==============================================================================
  // REGISTRATION MATRIX: 26 TO 30 (MULTI-KEY SAFE LOOKUP)
  // ==============================================================================
  var BATCH_26_30 = {
    '26': cat26, '026': cat26, 'c26': cat26,
    '27': cat27, '027': cat27, 'c27': cat27,
    '28': cat28, '028': cat28, 'c28': cat28,
    '29': cat29, '029': cat29, 'c29': cat29,
    '30': cat30, '030': cat30, 'c30': cat30
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_26_30);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_26_30);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_26_30);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_26_30);
      }
    });
  }
})();
