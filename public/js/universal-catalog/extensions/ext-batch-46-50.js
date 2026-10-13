/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION BATCH (46-50)
 * MODULE        : Official Google Play Store Standard Categories 46 to 50
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) MODULAR MICRO-BATCH
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-batch-46-50.js
 */

(function () {
  'use strict';

  // ==============================================================================
  // CATEGORY 46: SPORTS (OFFICIAL PLAY STORE GAME CATEGORY #14)
  // ==============================================================================
  var cat46 = {
    id: 'c46', catId: '46', number: '46.', num: '46.', icon: '🏏',
    title: 'Sports', category_name_en: 'Sports', category_name_hi: 'स्पोर्ट्स गेम्स, टर्फ व क्रिकेट लीग',
    subtitle: 'नाइट बॉक्स क्रिकेट टर्फ, 5v5 फुटबॉल टर्फ व स्पोर्ट्स किट्स',
    rating: '★ 4.9 (58k+ खिलाड़ी व टीमें)', trustBadge: 'Sports Facility Verified', supportBadge: 'ऑनलाइन स्लॉट बुकिंग',
    macroPillars: [
      { text: '🏏 46-1: फ्लडलाइट बॉक्स क्रिकेट व 5v5 फुटबॉल टर्फ स्लॉट बुकिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🏆 46-2: सप्ताहांत नाइट क्रिकेट टूर्नामेंट बैटल पास व नकद पुरस्कार', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '⚽ 46-3: स्पोर्ट्स किट्स, लेदर बॉल, बैट ग्रिप व शील्ड-मेडल हब', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '46-1': {
        code: '[46-1]', sub_code: '46-1', slug: 'box-cricket-football-turf', icon: '🏏',
        title: 'Floodlight Box Cricket & Turf Booking', hindiTitle: 'फ्लडलाइट बॉक्स क्रिकेट व टर्फ बुकिंग',
        categoryTag: 'टर्फ स्पोर्ट्स', tag: 'टर्फ स्पोर्ट्स', rating: '★ 4.9', reviewCount: '19,200+ घंटे', metaBadge: 'FIFA-ग्रेड ग्रास',
        servicesTitle: 'टर्फ सुविधाएं:',
        services: [
          { text: '🏏 1-घंटा बॉक्स क्रिकेट टर्फ स्लॉट (बैट, बॉल व स्टंप्स सहित)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '⚽ 5v5 मिनी फुटबॉल टर्फ व गोलपोस्ट मैच बुकिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '💡 एलईडी फ्लडलाइट्स, डगआउट व मिनरल वाटर सुविधा', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📱 डिजिटल स्कोरबोर्ड स्क्रीन व लाइव यूट्यूब स्ट्रीमिंग', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['ऑफिस सहकर्मियों और दोस्तों के साथ रात में खेलने का बेहतरीन अनुभव।', 'बारिश में भी न फिसलने वाली ऑल-वेदर आर्टिफिशियल टर्फ।', 'ऑनलाइन एडवांस स्लॉट रिजर्वेशन।'],
        btnText: 'टर्फ स्लॉट बुक करें', chips: ['Sabhi', 'Box Cricket', 'Football Turf', 'Floodlights', 'Live Stream']
      },
      '46-2': {
        code: '[46-2]', sub_code: '46-2', slug: 'night-cricket-tournament', icon: '🏆',
        title: 'Weekend Night Cricket League Pass', hindiTitle: 'वीकेंड नाइट क्रिकेट लीग टीम पास',
        categoryTag: 'टूर्नामेंट लीग', tag: 'टूर्नामेंट लीग', rating: '★ 4.9', reviewCount: '8,400+ टीमें', metaBadge: 'नकद पुरस्कार व ट्रॉफी',
        servicesTitle: 'लीग प्रारूप:',
        services: [
          { text: '🎟️ 8-ओवर टेनिस/लेदर बॉल नॉकआउट टूर्नामेंट टीम एंट्री', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🎖️ मैन ऑफ द मैच, बेस्ट बॉलर व बेस्ट बैट्समैन ट्रॉफीज', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🎙️ पेशेवर मैच कमेंटेटर, अंपायर व थर्ड-अंपायर कैमरा', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '💵 ₹25,000 से ₹1,00,000 तक नकद पुरस्कार वितरण', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['कॉलोनी और जिले की सर्वश्रेष्ठ क्रिकेट टीमों के बीच प्रतिष्ठा की जंग।', 'पारदर्शी अंपायरिंग और डिजिटल लाइव स्कोरिंग।', 'स्थानीय स्तर पर खेल प्रतिभाओं को मंच।'],
        btnText: 'टीम रजिस्टर करें', chips: ['Sabhi', 'Team Entry', 'Night League', 'Cash Prize', 'Pro Umpires']
      },
      '46-3': {
        code: '[46-3]', sub_code: '46-3', slug: 'sports-gear-trophy-hub', icon: '⚽',
        title: 'Sports Gear & Trophy Supply Hub', hindiTitle: 'स्पोर्ट्स गियर्स व ट्रॉफी सप्लाई हब',
        categoryTag: 'खेल सामग्री', tag: 'खेल सामग्री', rating: '★ 4.8', reviewCount: '12,100+ क्लब्स', metaBadge: 'थोक क्लब रेट',
        servicesTitle: 'स्पोर्ट्स उत्पाद:',
        services: [
          { text: '🏏 कश्मीर विलो व इंग्लिश विलो क्रिकेट बैट्स व पैड्स', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏆 स्कूल व स्पोर्ट्स मीट हेतु कस्टम नक्काशीदार ट्रॉफी व शील्ड', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🎽 टीम कस्टमाइज्ड जर्सी, नाम व नंबर प्रिंटिंग (10-सेट)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📦 भारी टेनिस बॉल्स, वॉलीबॉल व बैडमिंटन रैकेट्स', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['सीधे खेल सामग्री निर्माताओं से थोक डिस्काउंट रेट पर डिलीवरी।', 'टूर्नामेंट आयोजकों हेतु संपूर्ण किट व पुरस्कार कॉम्बो।', 'कस्टम लोगो प्रिंटिंग सपोर्ट।'],
        btnText: 'खेल सामग्री मंगाएं', chips: ['Sabhi', 'Cricket Bats', 'Custom Trophy', 'Team Jersey', 'Tennis Balls']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 47: STRATEGY (OFFICIAL PLAY STORE GAME CATEGORY #15)
  // ==============================================================================
  var cat47 = {
    id: 'c47', catId: '47', number: '47.', num: '47.', icon: '♟️',
    title: 'Strategy', category_name_en: 'Strategy', category_name_hi: 'स्ट्रेटेजी गेम्स, चाणक्य नीति व रणनीति',
    subtitle: 'चाणक्य नीति रणनीति खेल, चेस टैक्टिक्स व टाइम-कंट्रोल लीग',
    rating: '★ 4.9 (42k+ रणनीतिकार)', trustBadge: 'Grandmaster Certified', supportBadge: 'तार्किक रणनीति केंद्र',
    macroPillars: [
      { text: '♟️ 47-1: FIDE नियम आधारित क्लॉक-टाइम्ड रैपिड चेस लीग', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '📜 47-2: चाणक्य नीति युद्ध रणनीति, कूटनीति व संसाधन प्रबंधन खेल', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🪵 47-3: भारी वेटेड शीशम चेसमेन व फोल्डेबल वुडन बोर्ड सेट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '47-1': {
        code: '[47-1]', sub_code: '47-1', slug: 'rapid-chess-tactics-league', icon: '♟️',
        title: 'FIDE Rapid Chess Tactics League', hindiTitle: 'रैपिड चेस टैक्टिक्स लीग पास',
        categoryTag: 'रणनीतिक चेस', tag: 'रणनीतिक चेस', rating: '★ 4.9', reviewCount: '15,600+ खिलाड़ी', metaBadge: 'DGT क्लॉक सिंक',
        servicesTitle: 'चेस लीग सुविधाएं:',
        services: [
          { text: '⏱️ 10+5 और 15+10 टाइम कंट्रोल स्विस-सिस्टम लीग मैच', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '♟️ मिडलगेम टैक्टिक्स, पिन, फोर्क व डिस्कवर्ड अटैक क्लास', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📊 मैच बाद कंप्यूटर PGN एनालिसिस व ब्लंडर सुधार रिपोर्ट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏆 जिला स्तरीय ओपन चेस चैंपियनशिप मेडल व रेटिंग अंक', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['मन की दूरदर्शिता और तनाव में सटीक फैसले लेने का दिमागी खेल।', 'अंतरराष्ट्रीय रेटिंग नियमों पर पारदर्शी संचालन।', 'उभरते बाल शतरंज खिलाड़ियों हेतु विशेष वर्ग।'],
        btnText: 'चेस लीग जॉइन करें', chips: ['Sabhi', 'Swiss League', 'Tactics Class', 'PGN Analysis', 'Open Chess']
      },
      '47-2': {
        code: '[47-2]', sub_code: '47-2', slug: 'chanakya-niti-board-sim', icon: '📜',
        title: 'Chanakya War & Diplomacy Board Game', hindiTitle: 'चाणक्य युद्ध व कूटनीति बोर्ड खेल',
        categoryTag: 'ऐतिहासिक रणनीति', tag: 'ऐतिहासिक रणनीति', rating: '★ 4.8', reviewCount: '8,200+ रणनीतिकार', metaBadge: 'भारतीय कूटनीति',
        servicesTitle: 'रणनीतिक खेल फीचर्स:',
        services: [
          { text: '🏰 मगध साम्राज्य विस्तार, सेना प्रबंधन व गुप्तचर खेल', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🤝 4-प्लेयर कूटनीतिक संधियां, व्यापारिक मार्ग व संसाधन संतुलन', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📜 चाणक्य नीति श्लोक आधारित साम, दाम, दंड, भेद कार्ड्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '👥 पारिवारिक व युवा समूह हेतु 2-घंटे का बौद्धिक गेमप्ले', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['विदेशी रिस्क और मोनोपोली से कहीं बेहतर भारतीय इतिहास का रणनीति खेल।', 'युवाओं में नेतृत्व और मैनेजमेंट क्षमता का विकास।', 'आकर्षक बोर्ड और पीतल के टोकन।'],
        btnText: 'रणनीति गेम लें', chips: ['Sabhi', 'Empire Building', 'Diplomacy Game', 'Chanakya Cards', 'Board Token']
      },
      '47-3': {
        code: '[47-3]', sub_code: '47-3', slug: 'weighted-staunton-chess-set', icon: '🪵',
        title: 'Triple-Weighted Wooden Chess Set', hindiTitle: 'ट्रिपल-वेटेड शीशम चेस सेट',
        categoryTag: 'चेस उत्पाद', tag: 'चेस उत्पाद', rating: '★ 4.9', reviewCount: '6,400+ खरीदार', metaBadge: 'हाथ की नक्काशी',
        servicesTitle: 'चेस सेट उत्पाद:',
        services: [
          { text: '🪵 3.75-इंच किंग स्टॉन्टन भारी वेटेड शीशम व बॉक्सवुड मोहरे', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🟩 19x19 इंच फोल्डेबल इनलेड वुडन स्टोरेज बोर्ड', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🧵 नीचे ग्रीन फेल्ट पैडिंग (बोर्ड पर जीरो-स्क्रैच)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📦 लक्ज़री वेलवेट पाउच व गिफ्ट पैकिंग बॉक्स', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['हाथ में पकड़ते ही असली ग्रैंडमास्टर जैसा ठोस अहसास।', 'सालों-साल चलने वाली प्राकृतिक लकड़ी की स्थायी चमक।', 'शतरंज प्रेमियों के लिए एक यादगार शाही उपहार।'],
        btnText: 'चेस सेट खरीदें', chips: ['Sabhi', 'Staunton Set', 'Weighted Pieces', 'Sheesham Wood', 'Velvet Box']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 48: TRIVIA (OFFICIAL PLAY STORE GAME CATEGORY #16)
  // ==============================================================================
  var cat48 = {
    id: 'c48', catId: '48', number: '48.', num: '48.', icon: '🧠',
    title: 'Trivia', category_name_en: 'Trivia', category_name_hi: 'ट्रिविया गेम्स, क्विज व ज्ञान प्रतियोगिता',
    subtitle: 'लाइव बजर स्टेज क्विज, सामान्य ज्ञान मुकाबला व नकद पुरस्कार',
    rating: '★ 4.9 (46k+ क्विजर्स)', trustBadge: 'Fact & Knowledge Verified', supportBadge: 'लाइव बजर प्रतियोगिता',
    macroPillars: [
      { text: '🔔 48-1: इलेक्ट्रॉनिक बजर स्टेज क्विज प्रतियोगिता व टीम रजिस्ट्रेशन', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '💵 48-2: शनिवार शाम मेगा लाइव सामान्य ज्ञान नकद इनामी क्विज पास', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📚 48-3: 1,000 महत्वपूर्ण भारत व विश्व तथ्य क्विज कार्ड डेक सेट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '48-1': {
        code: '[48-1]', sub_code: '48-1', slug: 'live-buzzer-quiz-stage', icon: '🔔',
        title: 'Stage Buzzer Quiz Championship', hindiTitle: 'स्टेज इलेक्ट्रॉनिक बजर क्विज प्रतियोगिता',
        categoryTag: 'स्टेज क्विज', tag: 'स्टेज क्विज', rating: '★ 4.9', reviewCount: '11,200+ टीमें', metaBadge: 'डिजिटल बजर कंसोल',
        servicesTitle: 'स्टेज क्विज सुविधाएं:',
        services: [
          { text: '🔴 4-टीम वायरलेस इलेक्ट्रॉनिक बजर व एलईडी कंसोल सिस्टम', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📺 बड़ी स्क्रीन पर लाइव क्वेश्चन टाइमर व डिजिटल स्कोरकार्ड', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🎤 पेशेवर क्विज मास्टर (क्यूएम) द्वारा रोमांचक होस्टिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🥇 अंतर-विद्यालय व कॉलेज क्विज चैंपियनशिप ट्रॉफीज', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['केबीसी (KBC) जैसा वास्तविक बजर राउंड का तीव्र रोमांच।', 'गलत उत्तर पर माइनस मार्किंग और समय का सटीक दबाव।', 'स्कूलों और आयोजकों हेतु पूर्ण ऑन-वेन्यू सेटअप।'],
        btnText: 'क्विज रजिस्टर करें', chips: ['Sabhi', 'Buzzer Stage', 'Quiz Master', 'Live Timer', 'Trophy Prize']
      },
      '48-2': {
        code: '[48-2]', sub_code: '48-2', slug: 'saturday-cash-trivia-pass', icon: '💵',
        title: 'Saturday Mega Cash Trivia Pass', hindiTitle: 'शनिवार मेगा सामान्य ज्ञान क्विज पास',
        categoryTag: 'ज्ञान प्रतियोगिता', tag: 'ज्ञान प्रतियोगिता', rating: '★ 4.8', reviewCount: '24,000+ प्रतिभागी', metaBadge: 'पारदर्शी UPI पेआउट',
        servicesTitle: 'प्रतियोगिता प्रारूप:',
        services: [
          { text: '📱 20-सवाल 10-सेकंड मल्टीपल चॉइस लाइव मोबाइल क्विज', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🇮🇳 भारत का इतिहास, भूगोल, संविधान व करंट अफेयर्स', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏆 शीर्ष 10 मेधावी प्रतिभागियों को तत्काल नकद पुरस्कार', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📜 ई-प्रमाणपत्र व राज्य स्तरीय मेधावी सूची में स्थान', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['प्रतियोगी छात्रों हेतु तैयारी के साथ-साथ सम्मान व पॉकेट मनी का अवसर।', 'शून्य धांधली—एंटी-चीट लाइव टाइमर तकनीक।', 'साप्ताहिक नियमित आयोजन।'],
        btnText: 'क्विज पास लें', chips: ['Sabhi', 'Cash Trivia', 'GK Contest', 'Current Affairs', 'Instant Reward']
      },
      '48-3': {
        code: '[48-3]', sub_code: '48-3', slug: 'india-world-trivia-cards', icon: '📚',
        title: '1,000 Fact Trivia Flashcard Deck', hindiTitle: '1,000 भारत तथ्य ट्रिविया कार्ड डेक',
        categoryTag: 'ज्ञान उत्पाद', tag: 'ज्ञान उत्पाद', rating: '★ 4.9', reviewCount: '7,800+ सेट्स', metaBadge: 'लेमिनेटेड कार्ड्स',
        servicesTitle: 'ट्रिविया कार्ड उत्पाद:',
        services: [
          { text: '🇮🇳 भारतीय स्वतंत्रता संग्राम, मंदिर व नदियां ट्रिविया डेक', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🚀 विज्ञान के रोचक चमत्कार व अंतरिक्ष खोज फैक्ट्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '👨‍👩‍👧‍👦 पारिवारिक यात्रा व सफर में खेलने हेतु 100-कार्ड पॉकेट बॉक्स', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🚚 घर बैठे सुरक्षित होम डिलीवरी व कैश ऑन डिलीवरी', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['सफर में या शाम को घर पर ज्ञानवर्धक खेल खेलने का साधन।', 'मोबाइल स्क्रीन टाइम घटाकर वास्तविक ज्ञान बढ़ाने वाला खिलौना।', 'छात्रों के लिए सर्वोत्तम उपहार।'],
        btnText: 'कार्ड डेक मंगाएं', chips: ['Sabhi', 'Flashcards', 'India Facts', 'Science Trivia', 'Pocket Box']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 49: WORD (OFFICIAL PLAY STORE GAME CATEGORY #17)
  // ==============================================================================
  var cat49 = {
    id: 'c49', catId: '49', number: '49.', num: '49.', icon: '🔤',
    title: 'Word', category_name_en: 'Word', category_name_hi: 'वर्ड गेम्स, शब्द पहेली व स्पेलिंग बी',
    subtitle: 'स्पेलिंग बी प्रतियोगिता, क्रॉसवर्ड शब्द पहेली व स्क्रैबल बोर्ड',
    rating: '★ 4.9 (39k+ शब्द साधक)', trustBadge: 'Vocabulary Master Certified', supportBadge: 'भाषा संवर्धन केंद्र',
    macroPillars: [
      { text: '🐝 49-1: जिला स्तरीय ऑफलाइन स्पेलिंग बी मंच व पंजीकरण पास', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '📰 49-2: दैनिक हिंदी व अंग्रेजी क्रॉसवर्ड शब्द पहेली लीग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🪵 49-3: लकड़ी का मजबूत स्क्रैबल बोर्ड, शब्द टाइल्स व रैक सेट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '49-1': {
        code: '[49-1]', sub_code: '49-1', slug: 'district-spelling-bee', icon: '🐝',
        title: 'District Spelling Bee Championship', hindiTitle: 'जिला स्तरीय स्पेलिंग बी प्रतियोगिता',
        categoryTag: 'स्पेलिंग मंच', tag: 'स्पेलिंग मंच', rating: '★ 4.9', reviewCount: '9,400+ छात्र', metaBadge: 'ऑक्सफोर्ड मानक',
        servicesTitle: 'स्पेलिंग बी सुविधाएं:',
        services: [
          { text: '🎤 माइक पर कठिन अंग्रेजी शब्दों का सटीक उच्चारण व स्पेलिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📖 2,000 रूट वर्ड्स व प्रीफिक्स-सफिक्स डिक्शनरी गाइड बुक', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🥇 जिला विजेता को स्वर्ण पदक, नकद छात्रवृत्ति व प्रमाणपत्र', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '👥 स्कूल प्रतिनिधि टीम स्लॉट्स व पेरेंट्स गैलरी पास', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['बच्चों में अंग्रेजी शब्दावली और उच्चारण का आत्मविश्वास।', 'राज्य और राष्ट्रीय स्तर की प्रतियोगिताओं हेतु ठोस तैयारी।', 'निष्पक्ष निर्णायक मंडल।'],
        btnText: 'स्पेलिंग बी में जुड़ें', chips: ['Sabhi', 'Spelling Bee', 'Root Words', 'Gold Medal', 'Scholarship']
      },
      '49-2': {
        code: '[49-2]', sub_code: '49-2', slug: 'daily-crossword-league', icon: '📰',
        title: 'Hindi & English Crossword League', hindiTitle: 'दैनिक क्रॉसवर्ड शब्द पहेली लीग',
        categoryTag: 'शब्द पहेली', tag: 'शब्द पहेली', rating: '★ 4.8', reviewCount: '16,800+ सॉल्वर्स', metaBadge: 'दैनिक अखबार ग्रिड',
        servicesTitle: 'क्रॉसवर्ड सुविधाएं:',
        services: [
          { text: '🔠 बाएं से दाएं और ऊपर से नीचे शब्दों का सटीक जाल', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🇮🇳 हिंदी शब्द पहेली (साहित्यिक मुहावरे व पर्यायवाची शब्द)', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '⏱️ टाइम-ट्रायल क्रॉसवर्ड सॉल्विंग व लीडरबोर्ड स्कोर', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '💡 अक्षर हिंट्स, शब्द अर्थ व्याख्या व समाधान आर्काइव', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['हिंदी और अंग्रेजी दोनों भाषाओं की समृद्ध शब्दावली का दैनिक अभ्यास।', 'अखबार के क्रॉसवर्ड जैसा क्लासिक अनुभव डिजिटल सुविधा के साथ।', 'स्मरण शक्ति की उत्तम कसरत।'],
        btnText: 'क्रॉसवर्ड हल करें', chips: ['Sabhi', 'Daily Crossword', 'Hindi Words', 'Time Trial', 'Leaderboard']
      },
      '49-3': {
        code: '[49-3]', sub_code: '49-3', slug: 'wooden-scrabble-board-set', icon: '🪵',
        title: 'Teakwood Scrabble Board & Tile Set', hindiTitle: 'सागवान लकड़ी स्क्रैबल बोर्ड सेट',
        categoryTag: 'शब्द बोर्ड उत्पाद', tag: 'शब्द बोर्ड उत्पाद', rating: '★ 4.9', reviewCount: '5,500+ सेट्स', metaBadge: 'प्रीमियम लकड़ी टाइल्स',
        servicesTitle: 'स्क्रैबल उत्पाद:',
        services: [
          { text: '🪵 100 नक्काशीदार लकड़ी के अक्षर टाइल्स (अंक वैल्यू सहित)', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🔲 ग्रिड लॉक वाला घूमने वाला (Rotating) लकड़ी का स्क्रैबल बोर्ड', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🪵 4 लकड़ी के सॉलिड टाइल रैक व ड्रॉस्ट्रिंग वेलवेट बैग', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📖 आधिकारिक स्क्रैबल शब्दकोश मिनी गाइड बुकलेट', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['परिवार के साथ बैठकर घंटों शब्दों की रचना करने का आनंद।', 'घूमने वाले बोर्ड से टाइल्स हिलती नहीं हैं।', 'जीवन भर चलने वाला उत्कृष्ट विंटेज बोर्ड।'],
        btnText: 'स्क्रैबल सेट खरीदें', chips: ['Sabhi', 'Rotating Board', 'Wood Tiles', 'Tile Racks', 'Scrabble Guide']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 50: FAMILY (OFFICIAL PLAY STORE GAME CATEGORY #18 - FLAGSHIP REVENUE)
  // ==============================================================================
  var cat50 = {
    id: 'c50', catId: '50', number: '50.', num: '50.', icon: '👨‍👩‍👧‍👦',
    title: 'Family', category_name_en: 'Family', category_name_hi: 'फैमिली गेम्स, तंबोला व मेला स्टॉल्स',
    subtitle: 'शनिवार पारिवारिक तंबोला (Housie), मोहल्ला मेला स्टॉल्स व किटी पार्टी',
    rating: '★ 4.9 (85k+ परिवार व समितियां)', trustBadge: 'Family Unity Verified', supportBadge: 'पारिवारिक मनोरंजन केंद्र',
    macroPillars: [
      { text: '🎟️ 50-1: शनिवार मोहल्ला पारिवारिक तंबोला (हाउजी) डिजिटल पास', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🎪 50-2: सोसाइटी मेला, रिंग थ्रो व बैलून डार्ट गेम स्टॉल सेटअप', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🎲 50-3: महिला मंडल किटी पार्टी, इनडोर पारिवारिक फन गेम बंडल्स', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '50-1': {
        code: '[50-1]', sub_code: '50-1', slug: 'saturday-mohalla-tambola', icon: '🎟️',
        title: 'Saturday Mohalla Tambola (Housie) Pass', hindiTitle: 'शनिवार मोहल्ला तंबोला (हाउजी) पास',
        categoryTag: 'मास कम्युनिटी गेम', tag: 'मास कम्युनिटी गेम', rating: '★ 4.9', reviewCount: '48,000+ टिकट्स', metaBadge: 'बंपर उपहार व उत्सव',
        servicesTitle: 'तंबोला सुविधाएं:',
        services: [
          { text: '🎫 3-टिकट व 6-टिकट पारिवारिक शनिवार तंबोला पास', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📢 लाइव नंबर कॉलिंग, साउंड सिस्टम व डिजिटल टीवी डिस्प्ले', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🎁 जलदी-5, कॉर्नर्स, लाइन्स व फुल हाउस बंपर उपहार', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '☕ चाय-नाश्ता रिफ्रेशमेंट व पारिवारिक कम्युनिटी हॉल व्यवस्था', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['पूरे मोहल्ले और कॉलोनी के 500+ परिवारों को एक मंच पर लाने वाला विशाल कार्यक्रम।', 'नियमित शनिवार शाम का उत्साह और भारी टिकट बिक्री कैशफ्लो।', 'निष्पक्ष और पारदर्शी नंबर कॉलिंग।'],
        btnText: 'तंबोला पास बुक करें', chips: ['Sabhi', 'Tambola Pass', 'Full House', 'Early Five', 'Community Night']
      },
      '50-2': {
        code: '[50-2]', sub_code: '50-2', slug: 'fun-fair-game-stalls', icon: '🎪',
        title: 'Family Fun Fair Game Stalls Rental', hindiTitle: 'फैमिली मेला गेम स्टॉल्स रेंटल',
        categoryTag: 'मेला एक्टिवेशन', tag: 'मेला एक्टिवेशन', rating: '★ 4.9', reviewCount: '7,200+ स्टॉल्स', metaBadge: 'पूर्ण ऑन-साइट सेटअप',
        servicesTitle: 'मेला स्टॉल विकल्प:',
        services: [
          { text: '⭕ बोतल पर रिंग फेंकने (Ring Toss) का क्लासिक मेला स्टॉल', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🎈 एयर गन बैलून शूटिंग व डार्ट फोड़ने का कैनोपी स्टॉल', bg: 'rgba(239,68,68,0.15)', c: '#f87171' },
          { text: '🎳 मिनी बॉलिंग एलि व ग्लास पिरामिड बॉल थ्रो गेम', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🎪 आकर्षक टेंट, रोशनी, ऑपरेटर व बच्चों के गिफ्ट्स कॉम्बो', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: ['अपार्टमेंट्स, दुर्गा पूजा, दीवाली मेला व स्कूल वार्षिकोत्सव हेतु पसंदीदा आकर्षण।', 'आयोजकों हेतु हाई-टिकट रेंटल और टिकट बिक्री से अतिरिक्त आय।', '100% सुरक्षित और साफ-सुथरा सेटअप।'],
        btnText: 'मेला स्टॉल बुक करें', chips: ['Sabhi', 'Ring Toss', 'Balloon Shooting', 'Mela Setup', 'Game Operator']
      },
      '50-3': {
        code: '[50-3]', sub_code: '50-3', slug: 'kitty-party-family-kits', icon: '🎲',
        title: 'Kitty Party & Indoor Family Game Kits', hindiTitle: 'किटी पार्टी व पारिवारिक गेम किट',
        categoryTag: 'पारिवारिक पार्टी', tag: 'पारिवारिक पार्टी', rating: '★ 4.8', reviewCount: '11,400+ पार्टियां', metaBadge: 'रेडी-टू-प्ले किट',
        servicesTitle: 'पार्टी गेम किट्स:',
        services: [
          { text: '💃 10-मिनट महिला किटी पार्टी 25 फन टास्क व पहेली कार्ड्स', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '🪵 वुडन टंबलिंग टॉवर (Jenga) व पास द पार्सल म्यूजिक प्रॉप्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🎭 डम्ब शेराड्स बॉलीवुड मूवी गेसिंग कार्ड बॉक्स', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📦 1-बॉक्स में 5 मनोरंजक पारिवारिक खेल (डोरस्टेप डिलीवरी)', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: ['महिलाओं और परिवारों के मिलन समारोहों में हंसी और उत्साह भरने वाली किट।', 'बिना तैयारी के सीधे बॉक्स खोलकर खेलें।', 'विजेताओं हेतु आकर्षक उपहार बैग्स शामिल।'],
        btnText: 'पार्टी किट मंगाएं', chips: ['Sabhi', 'Kitty Party Kit', 'Jenga Tower', 'Dumb Charades', 'Family Box']
      }
    }
  };

  // ==============================================================================
  // REGISTRATION MATRIX: 46 TO 50 (MULTI-KEY SAFE LOOKUP)
  // ==============================================================================
  var BATCH_46_50 = {
    '46': cat46, 'c46': cat46, '046': cat46,
    '47': cat47, 'c47': cat47, '047': cat47,
    '48': cat48, 'c48': cat48, '048': cat48,
    '49': cat49, 'c49': cat49, '049': cat49,
    '50': cat50, 'c50': cat50, '050': cat50
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_46_50);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_46_50);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_46_50);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_46_50);
      }
    });
  }
})();
