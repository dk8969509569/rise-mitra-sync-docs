/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION BATCH (36-40)
 * MODULE        : Official Google Play Store Standard Categories 36 to 40
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) MODULAR MICRO-BATCH
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-batch-36-40.js
 */

(function () {
  'use strict';

  // ==============================================================================
  // CATEGORY 36: BOARD (OFFICIAL PLAY STORE GAME CATEGORY #4)
  // ==============================================================================
  var cat36 = {
    id: 'c36', catId: '36', number: '36.', num: '36.', icon: '🎲',
    title: 'Board', category_name_en: 'Board', category_name_hi: 'बोर्ड गेम्स, कैरम, शतरंज व लूडो',
    subtitle: 'कैरम, शतरंज, लूडो क्लब, सांप-सीढ़ी व पारंपरिक बोर्ड गेम्स',
    rating: '★ 4.9 (65k+ बोर्ड मास्टर्स)', trustBadge: 'Fair-Play Dice Verified', supportBadge: '4-प्लेयर ऑनलाइन व लोकल',
    macroPillars: [
      { text: '🎱 36-1: कैरम क्लब बोर्ड बुकिंग व टूर्नामेंट (सिक्का व बोरिक पाउडर)', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '♟️ 36-2: शतरंज (चेस) क्लब, डिजिटल क्लॉक व कोचिंग मास्टर क्लास', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🎲 36-3: लकड़ी का मजबूत लूडो, सांप-सीढ़ी व पारंपारिक चौपड़ सेट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '36-1': {
        code: '[36-1]', sub_code: '36-1', slug: 'carrom-club-booking', icon: '🎱',
        title: 'Championship Carrom Club Booking', hindiTitle: 'चैंपियनशिप कैरम बोर्ड क्लब बुकिंग',
        categoryTag: 'कैरम क्लब', tag: 'कैरम क्लब', rating: '★ 4.9', reviewCount: '16,200+ मैच', metaBadge: 'इंग्लिश प्लाई बोर्ड',
        servicesTitle: 'कैरम क्लब सुविधाएं:',
        services: [
          { text: '🪵 सिस्को व चैंपियन 32-इंच इंग्लिश प्लाई बोर्ड स्लॉट', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '⚪ भारी प्रीमियम स्ट्राइकर, वेट गोटियां व बोरिक पाउडर', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '💡 टेबल के ठीक ऊपर सेंट्रलाइज्ड एलईडी शैडो-फ्री लाइट', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🏆 साप्ताहिक मोहल्ला कैरम सिंगल्स व डबल्स टूर्नामेंट', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'शाम के समय कैरम प्रेमियों का सबसे पसंदीदा अड्डा।',
          'बिना रुके लगातार घंटों अभ्यास करने हेतु अनुकूलित क्लब।',
          'नकद पुरस्कार वाले वीकेंड मुकाबले।'
        ],
        btnText: 'कैरम बोर्ड बुक करें', chips: ['Sabhi', 'English Ply', 'Pro Striker', 'LED Lighting', 'Weekly Tournament']
      },
      '36-2': {
        code: '[36-2]', sub_code: '36-2', slug: 'chess-academy-league', icon: '♟️',
        title: 'Chess Academy & League Pass', hindiTitle: 'शतरंज अकादमी व वीकेंड लीग पास',
        categoryTag: 'शतरंज क्लब', tag: 'शतरंज क्लब', rating: '★ 4.9', reviewCount: '8,400+ खिलाड़ी', metaBadge: 'फिडे मान्यता प्राप्त',
        servicesTitle: 'शतरंज सुविधाएं:',
        services: [
          { text: '⏱️ DGT डिजिटल चेस क्लॉक 10-मिनट रैपिड मैच स्लॉट्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🪵 भारी शीशम की लकड़ी के मोहरे व रोल-अप मैट सेट', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '👨‍🏫 फिडे रेटेड कोच द्वारा ओपनिंग व एंडगेम विश्लेषण', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🎖️ ईएलओ रेटिंग सुधार हेतु सप्ताहांत शतरंज लीग', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'छात्रों की तार्किक क्षमता और एकाग्रता बढ़ाने का शांत केंद्र।',
          'राष्ट्रीय स्तर के नियमों पर संचालित नियमित टूर्नामेंट।',
          'व्यक्तिगत मार्गदर्शन उपलब्ध।'
        ],
        btnText: 'शतरंज क्लब जॉइन करें', chips: ['Sabhi', 'Chess Clock', 'Staunton Pieces', 'FIDE Coach', 'Elo Rating']
      },
      '36-3': {
        code: '[36-3]', sub_code: '36-3', slug: 'wooden-ludo-chaupar', icon: '🎲',
        title: 'Solid Wooden Ludo & Chaupar', hindiTitle: 'सागवान लकड़ी लूडो व चौपड़ सेट',
        categoryTag: 'पारंपरिक बोर्ड', tag: 'पारंपरिक बोर्ड', rating: '★ 4.8', reviewCount: '5,100+ खरीदार', metaBadge: '100% शुद्ध लकड़ी',
        servicesTitle: 'पारंपरिक बोर्ड उत्पाद:',
        services: [
          { text: '🪵 18x18 इंच सागवान की नक्काशीदार लकड़ी लूडो बोर्ड', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🧵 कपड़े का पारंपरिक कढ़ाईदार चौपड़ (कौड़ियों सहित)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🐍 डबल-साइडेड लूडो व सांप-सीढ़ी टिकाऊ लेमिनेटेड बोर्ड', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🎲 भारी पीतल के पासे व लकड़ी की रंगीन गोटियां', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'सालों-साल चलने वाला कभी न फटने वाला मजबूत हस्तशिल्प बोर्ड।',
          'त्योहारों पर पूरे परिवार के साथ खेलने हेतु सबसे उत्तम उपहार।',
          'डोरस्टेप सुरक्षित डिलीवरी।'
        ],
        btnText: 'लूडो बोर्ड खरीदें', chips: ['Sabhi', 'Teakwood Board', 'Chaupar Cloth', 'Snakes & Ladders', 'Brass Dice']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 37: CARD (OFFICIAL PLAY STORE GAME CATEGORY #5)
  // ==============================================================================
  var cat37 = {
    id: 'c37', catId: '37', number: '37.', num: '37.', icon: '🃏',
    title: 'Card', category_name_en: 'Card', category_name_hi: 'कार्ड गेम्स, ताश व मैजिक शो',
    subtitle: 'वाटरप्रूफ पीवीसी ताश, जादूगर ताश शो व सीनियर ब्रिज क्लब',
    rating: '★ 4.8 (44k+ प्लेयर्स)', trustBadge: 'Skill Gaming Certified', supportBadge: 'फेयर-शफल डेक एल्गोरिदम',
    macroPillars: [
      { text: '🎩 37-1: पारिवारिक जन्मदिन व शादी समारोह हेतु लाइव जादूगर ताश शो बुकिंग', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🃏 37-2: कभी न फटने वाले कसीनो-ग्रेड पीवीसी ताश व ग्रीन फेल्ट टेबल मैट', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '👴 37-3: वरिष्ठ नागरिकों का शाम का मनोरंजन कम्युनिटी कार्ड क्लब पास', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '37-1': {
        code: '[37-1]', sub_code: '37-1', slug: 'live-magician-card-show', icon: '🎩',
        title: 'Live Magician Card Show', hindiTitle: 'समारोह लाइव जादूगर शो',
        categoryTag: 'लाइव मैजिक', tag: 'लाइव मैजिक', rating: '★ 4.9', reviewCount: '4,500+ समीक्षाएं', metaBadge: 'हाथ की सफाई शो',
        servicesTitle: 'उपलब्ध प्रमाणित सुविधाएं:',
        services: [
          { text: '✨ 100% सत्यापित व प्रशिक्षित पेशेवर जादूगर', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '⚡ तुरंत रिस्पॉन्स व ऑन-वेन्यू निष्पादन', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📜 डिजिटल पक्की रसीद व संतुष्टि गारंटी', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['बिना किसी हिडन चार्ज के पारदर्शी और तय रेट पर शो।', 'बच्चों और बड़ों के लिए पूरी तरह सुरक्षित और रोमांचक।', 'संतुष्टि न होने पर त्वरित समाधान।'],
        btnText: 'जादूगर बुक करें', chips: ['Sabhi', 'Card Magic', 'Stage Show', 'Birthday Special', 'Family Fun']
      },
      '37-2': {
        code: '[37-2]', sub_code: '37-2', slug: 'waterproof-plastic-cards', icon: '🃏',
        title: '100% Plastic Waterproof Cards', hindiTitle: 'वाटरप्रूफ पीवीसी ताश सेट',
        categoryTag: 'कार्ड सामग्री', tag: 'कार्ड सामग्री', rating: '★ 4.9', reviewCount: '7,800+ सेट्स', metaBadge: 'कसीनो-ग्रेड PVC',
        servicesTitle: 'उपलब्ध कार्ड उत्पाद:',
        services: [
          { text: '🎴 धोने योग्य 100% पीवीसी प्लास्टिक ब्रिज प्लेइंग कार्ड्स', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🟩 टेबल फेल्ट मैट व एंटी-स्लिप प्लेइंग पैड', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📦 2-डेक गोल्ड फॉयल लग्जरी गिफ्ट बॉक्स पैक', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['सालों चलने वाले टिकाऊ कार्ड जो पानी और चाय से खराब नहीं होते।', 'परफेक्ट ग्रिप और स्मूथ शफलिंग अनुभव।', 'घर तक सुरक्षित व त्वरित डिलीवरी।'],
        btnText: 'ताश सेट मंगाएं', chips: ['Sabhi', 'PVC Cards', 'Gold Foil', 'Table Mat', 'Waterproof']
      },
      '37-3': {
        code: '[37-3]', sub_code: '37-3', slug: 'senior-citizen-card-club', icon: '👴',
        title: 'Senior Citizen Bridge & Rummy Club', hindiTitle: 'सीनियर सिटीजन कार्ड क्लब पास',
        categoryTag: 'कम्युनिटी क्लब', tag: 'कम्युनिटी क्लब', rating: '★ 4.8', reviewCount: '3,200+ सदस्य', metaBadge: 'शाम का मनोरंजन',
        servicesTitle: 'क्लब सुविधाएं:',
        services: [
          { text: '☕ शाम की चाय-नाश्ता व सामाजिक गपशप चौपाल', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🪑 आरामदायक सोफा, शांत एसी हॉल व बोर्ड स्लॉट', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📑 मासिक मेंबरशिप पास व फ्रेंड्स टूर्नामेंट', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['वरिष्ठ नागरिकों हेतु तनाव-मुक्त और सुरक्षित सामाजिक केंद्र।', 'शून्य जुआ—केवल स्वस्थ बौद्धिक मनोरंजन।', 'दैनिक व मासिक लचीले स्लॉट्स।'],
        btnText: 'क्लब पास लें', chips: ['Sabhi', 'Bridge Club', 'Senior Center', 'Evening Tea', 'Social Hall']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 38: CASINO (OFFICIAL PLAY STORE GAME CATEGORY #6 - NON-GAMBLING)
  // ==============================================================================
  var cat38 = {
    id: 'c38', catId: '38', number: '38.', num: '38.', icon: '🎡',
    title: 'Casino', category_name_en: 'Casino', category_name_hi: 'पार्टी फन गेम्स, रूले टेबल व स्पिन व्हील',
    subtitle: 'शादी पार्टी फन रूले टेबल, लकी स्पिन व्हील व पार्टी क्रुपियर',
    rating: '★ 4.7 (29k+ स्पिनर्स)', trustBadge: 'Virtual Token Only', supportBadge: '100% गैर-नकद मनोरंजन',
    macroPillars: [
      { text: '🎲 38-1: शादी पार्टी हेतु गैर-जुआ फन रूले व ब्लैकजैक गेम टेबल', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🎡 38-2: दुकान प्रचार व त्योहार डिस्काउंट हेतु लकी स्पिन व्हील', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🎩 38-3: पेशेवर क्रुपियर (डीलर), कस्टमाइज्ड चिप्स व थीम सेटअप', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '38-1': {
        code: '[38-1]', sub_code: '38-1', slug: 'wedding-fun-casino-setup', icon: '🎲',
        title: 'Wedding Fun Roulette Setup', hindiTitle: 'शादी पार्टी फन रूले टेबल सेटअप',
        categoryTag: 'थीम पार्टी', tag: 'थीम पार्टी', rating: '★ 4.9', reviewCount: '4,500+ इवेंट्स', metaBadge: 'गैर-जुआ फन गेम्स',
        servicesTitle: 'पार्टी सेटअप विकल्प:',
        services: [
          { text: '🎡 लकड़ी का बड़ा रूले व्हील व ग्रीन फेल्ट लेआउट टेबल', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🪙 कस्टमाइज्ड प्लास्टिक टोकन चिप्स (शून्य नकद मूल्य)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '👔 सूट-बूट में ट्रेंड गेम एंकर व मनोरंजक होस्टिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: ['शादियों और संगीत पार्टियों में मेहमानों हेतु वीआईपी मनोरंजन।', 'कानूनी रूप से 100% सुरक्षित—कोई नकद लेन-देन नहीं।', 'आयोजन स्थल पर 1 घंटे में पूर्ण इंस्टॉलेशन।'],
        btnText: 'सेटअप बुक करें', chips: ['Sabhi', 'Roulette Table', 'Fun Chips', 'Theme Party', 'Event Host']
      },
      '38-2': {
        code: '[38-2]', sub_code: '38-2', slug: 'promotional-lucky-spin-wheel', icon: '🎡',
        title: 'Promotional Lucky Spin Wheel', hindiTitle: 'प्रचार लकी स्पिन व्हील निर्माण',
        categoryTag: 'शॉप प्रमोशन', tag: 'शॉप प्रमोशन', rating: '★ 4.8', reviewCount: '6,200+ दुकानें', metaBadge: 'कस्टम डिस्काउंट व्हील',
        servicesTitle: 'स्पिन व्हील उत्पाद:',
        services: [
          { text: '🎯 2-फुट व 3-फुट घूमने वाला स्टैंडी लकी स्पिनर व्हील', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏷️ दुकान के ऑफर व गिफ्ट कूपन कस्टमाइज्ड प्रिंटिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🎪 मेला व मॉल एक्टिवेशन हेतु फोल्डेबल स्टैंड', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['दुकान पर ग्राहकों की भारी भीड़ और बिक्री बढ़ाने का अचूक साधन।', 'मजबूत बेयरिंग और आकर्षक क्लिकर साउंड के साथ निर्माण।', 'दुकान के नाम और लोगो के साथ तैयार।'],
        btnText: 'व्हील बनवाएं', chips: ['Sabhi', 'Spin Wheel', 'Offer Spinner', 'Shop Activation', 'Discount Game']
      },
      '38-3': {
        code: '[38-3]', sub_code: '38-3', slug: 'party-game-dealer-troupe', icon: '🎩',
        title: 'Party Game Dealer Troupe', hindiTitle: 'पार्टी गेम डीलर व टेबल पैकेज',
        categoryTag: 'कॉर्पोरेट इवेंट', tag: 'कॉर्पोरेट इवेंट', rating: '★ 4.9', reviewCount: '2,800+ पार्टियां', metaBadge: 'पेशेवर डीलर',
        servicesTitle: 'डीलर सेवाएं:',
        services: [
          { text: '🤵 2 से 4 प्रशिक्षित गेम डीलर्स (ब्लैकजैक व पोकर फन)', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🃏 कसीनो-थीम प्रॉप्स, लाइट व विंटेज सजावट', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🎁 सर्वाधिक टोकन जीतने वाले मेहमानों हेतु पुरस्कार पैकेज', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' }
        ],
        highlights: ['कॉर्पोरेट एनुअल मीट और उत्सवों के लिए अनोखा आकर्षण।', 'अतिथियों को खेल के आसान नियम सिखाने की सुविधा।', 'तय समय पर अनुशासित व शालीन प्रस्तुति।'],
        btnText: 'डीलर टीम बुक करें', chips: ['Sabhi', 'Game Dealers', 'Props Setup', 'Corporate Night', 'Prizes']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 39: CASUAL (OFFICIAL PLAY STORE GAME CATEGORY #7)
  // ==============================================================================
  var cat39 = {
    id: 'c39', catId: '39', number: '39.', num: '39.', icon: '🎈',
    title: 'Casual', category_name_en: 'Casual', category_name_hi: 'कैजुअल गेम्स, लूडो लीग व फूजबॉल',
    subtitle: 'रविवार मोहल्ला लूडो लीग, फूजबॉल टोकन व लकड़ी का बड़ा लूडो',
    rating: '★ 4.9 (60k+ कैजुअल गेमर्स)', trustBadge: 'Relaxation Certified', supportBadge: 'तुरंत लोड व बिना झंझट',
    macroPillars: [
      { text: '🎲 39-1: रविवार पारिवारिक लूडो मुकाबला, चाय-नाश्ता व मेडल कॉम्बो', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '⚽ 39-2: कैफे टेबल सॉकर (फूजबॉल) टोकन व ब्रास डार्ट बोर्ड गेम्स', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🪵 39-3: नक्काशीदार लकड़ी का बड़ा लूडो व एंटी-स्ट्रेस गेम्स', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '39-1': {
        code: '[39-1]', sub_code: '39-1', slug: 'sunday-mohalla-ludo-league', icon: '🎲',
        title: 'Sunday Mohalla Ludo League', hindiTitle: 'रविवार मोहल्ला लूडो लीग पास',
        categoryTag: 'पारिवारिक गेम्स', tag: 'पारिवारिक गेम्स', rating: '★ 4.9', reviewCount: '32,000+ खिलाड़ी', metaBadge: 'चाय-नाश्ता व मेडल',
        servicesTitle: 'लीग प्रारूप:',
        services: [
          { text: '🎟️ सिंगल व 2-प्लेयर टीम वीकेंड लूडो एंट्री पास', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '☕ चाय-समोसा रिफ्रेशमेंट व पारिवारिक कम्युनिटी हॉल', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🥇 विजेता को चमचमाती लूडो शील्ड व विनर सर्टिफिकेट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: ['पड़ोसियों और परिवारों को एक साथ जोड़ने वाला स्वस्थ मनोरंजन।', 'हर रविवार सुबह 10 बजे से 1 बजे तक निश्चित आयोजन।', 'सभी उम्र के लोगों के लिए आसान खेल।'],
        btnText: 'लीग में जुड़ें', chips: ['Sabhi', 'Ludo League', 'Sunday Pass', 'Tea & Snacks', 'Trophy']
      },
      '39-2': {
        code: '[39-2]', sub_code: '39-2', slug: 'foosball-dart-tokens', icon: '⚽',
        title: 'Foosball & Dart Board Tokens', hindiTitle: 'फूजबॉल टोकन व डार्ट बोर्ड स्लॉट',
        categoryTag: 'कैफे गेम्स', tag: 'कैफे गेम्स', rating: '★ 4.8', reviewCount: '15,400+ गेम्स', metaBadge: '10-बॉल टोकन',
        servicesTitle: 'गेम सुविधाएं:',
        services: [
          { text: '⚽ 4-रॉड व 8-रॉड टेबल सॉकर (फूजबॉल) 10-गेम टोकन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🎯 मैग्नेटिक व ब्रिसल डार्ट बोर्ड 30-मिनट स्लॉट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🥤 यूथ कैफे गेमिंग कॉम्बो (कोल्ड ड्रिंक सहित)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['कॉलेज छात्रों और युवाओं में त्वरित रिफ्लेक्स मुकाबला।', 'शाम को कैफे में दोस्तों के साथ हैंगआउट का सबसे अच्छा विकल्प।', 'सर्टिफाइड और स्मूथ टेबल गियर्स।'],
        btnText: 'टोकन लें', chips: ['Sabhi', 'Foosball', 'Dart Board', 'Cafe Games', 'Combo Pack']
      },
      '39-3': {
        code: '[39-3]', sub_code: '39-3', slug: 'wooden-stress-busters', icon: '🪵',
        title: 'Handcrafted Wooden Stress Busters', hindiTitle: 'हस्तशिल्प लकड़ी गेम्स व खिलौने',
        categoryTag: 'हस्तशिल्प खिलौने', tag: 'हस्तशिल्प खिलौने', rating: '★ 4.9', reviewCount: '8,900+ खरीदार', metaBadge: 'सागवान लकड़ी',
        servicesTitle: 'उत्पाद श्रेणियां:',
        services: [
          { text: '🪵 हस्तनिर्मित लकड़ी का टिक-टैक-टो (काटा-जीरो) सेट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🧩 3D वुडन इंटरलॉकिंग ब्रेन टीज़र पहेली क्यूब्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '✨ ऑफिस डेस्क डेकोर व तनाव मुक्ति हस्तशिल्प गेम्स', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' }
        ],
        highlights: ['प्लास्टिक और स्क्रीन से दूर प्राकृतिक लकड़ी का सुकून।', 'ऑफिस डेस्क और घर की लिविंग रूम टेबल हेतु खूबसूरत सजावट।', 'उपहार देने के लिए सर्वोत्तम।'],
        btnText: 'गेम सेट खरीदें', chips: ['Sabhi', 'Tic Tac Toe', 'Brain Teaser', 'Desk Games', 'Wooden Craft']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 40: EDUCATIONAL (OFFICIAL PLAY STORE GAME CATEGORY #8)
  // ==============================================================================
  var cat40 = {
    id: 'c40', catId: '40', number: '40.', num: '40.', icon: '🎓',
    title: 'Educational', category_name_en: 'Educational', category_name_hi: 'एजुकेशनल गेम्स, साइंस किट्स व क्विज',
    subtitle: 'बच्चों के साइंस प्रोजेक्ट किट्स, मेंटल मैथ पहेलियां व बाल क्विज',
    rating: '★ 4.9 (45k+ छात्र व अभिभावक)', trustBadge: 'STEM Learning Verified', supportBadge: 'बाल बौद्धिक विकास केंद्र',
    macroPillars: [
      { text: '🔬 40-1: स्कूल साइंस प्रोजेक्ट DIY किट्स व मोटर-रोबोटिक्स मॉडल्स', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🧮 40-2: अबेकस, वैदिक गणित स्पीड पहेलियां व रुबिक क्यूब क्लास', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🏆 40-3: सामान्य ज्ञान (GK) बाल क्विज प्रतियोगिता व ज्ञान मंच', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '40-1': {
        code: '[40-1]', sub_code: '40-1', slug: 'stem-science-project-kits', icon: '🔬',
        title: 'STEM Science DIY Project Kits', hindiTitle: 'स्कूल साइंस प्रोजेक्ट DIY किट्स',
        categoryTag: 'साइंस किट्स', tag: 'साइंस किट्स', rating: '★ 4.9', reviewCount: '14,200+ छात्र', metaBadge: 'प्रैक्टिकल लर्निंग',
        servicesTitle: 'प्रोजेक्ट किट विकल्प:',
        services: [
          { text: '🔋 सोलर कार, विंडमिल व वॉटर अलार्म साइंस प्रोजेक्ट किट', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🤖 बेसिक रोबोटिक्स, डीसी मोटर व एलईडी वायर कनेक्शन सेट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📖 सरल हिंदी-अंग्रेजी प्रोजेक्ट गाइड बुक व चार्ट पेपर्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🚚 स्कूल साइंस एग्जिबिशन हेतु रेडी-टू-यूज प्रोजेक्ट्स', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['कक्षा 3 से 10वीं तक के छात्रों के लिए प्रायोगिक विज्ञान का आसान अभ्यास।', 'किफायती थोक दर पर संपूर्ण पार्ट्स के साथ बॉक्स।', '24 घंटे में स्कूल तक डिलीवरी।'],
        btnText: 'प्रोजेक्ट किट मंगाएं', chips: ['Sabhi', 'Solar Kit', 'Robotics DIY', 'Science Project', 'Exhibition Ready']
      },
      '40-2': {
        code: '[40-2]', sub_code: '40-2', slug: 'mental-math-abacus-pass', icon: '🧮',
        title: 'Mental Math & Abacus Puzzle Pass', hindiTitle: 'अबेकस व वैदिक गणित स्पीड क्लास पास',
        categoryTag: 'मैथ्स पहेली', tag: 'मैथ्स पहेली', rating: '★ 4.9', reviewCount: '9,800+ बच्चे', metaBadge: 'तेज दिमाग गारंटी',
        servicesTitle: 'गणित सीखने के टूल्स:',
        services: [
          { text: '🧮 17-रॉड जापानी सोरोबन अबेकस टूल व प्रैक्टिस वर्कबुक', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '⚡ वैदिक गणित 1-सेकंड गुणा-भाग ऑनलाइन/ऑफलाइन क्लास', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🧩 3x3 रुबिक क्यूब हल करने की फॉर्मूला मास्टरक्लास', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🎖️ स्पीड मैथ्स टेस्ट सीरीज व सर्टिफिकेट असेसमेंट', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['कैलकुलेटर से भी तेज दिमागी गणना करने की बाल क्षमता का विकास।', 'एकाग्रता और स्मरण शक्ति में चमत्कारी सुधार।', 'प्रमाणित विशेषज्ञ प्रशिक्षकों द्वारा मार्गदर्शन।'],
        btnText: 'क्लास पास लें', chips: ['Sabhi', 'Abacus Tool', 'Vedic Math', 'Rubik Cube', 'Speed Test']
      },
      '40-3': {
        code: '[40-3]', sub_code: '40-3', slug: 'bal-gyaan-quiz-league', icon: '🏆',
        title: 'Bal Gyaan Stage Quiz League', hindiTitle: 'बाल सामान्य ज्ञान (GK) मंच प्रतियोगिता',
        categoryTag: 'बाल क्विज मंच', tag: 'बाल क्विज मंच', rating: '★ 4.8', reviewCount: '11,500+ प्रतिभागी', metaBadge: 'ट्रॉफी व स्कॉलरशिप',
        servicesTitle: 'क्विज प्रतियोगिता श्रेणियां:',
        services: [
          { text: '🔔 बजर राउंड स्टेज क्विज पास (इतिहास, विज्ञान व भूगोल)', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📚 500 महत्वपूर्ण मासिक बाल सामान्य ज्ञान बुकलेट पीडीएफ', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🥇 जिला स्तरीय बाल मेधावी छात्रवृत्ति व ट्रॉफी पुरस्कार', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '👥 स्कूल-टू-स्कूल अंतर-विद्यालय ज्ञान मुकाबला लीग', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['बच्चों में सामान्य ज्ञान और सार्वजनिक मंच पर बोलने का आत्मविश्वास।', 'रोमांचक बजर सिस्टम और निष्पक्ष डिजिटल स्कोरिंग।', 'विजेताओं को छात्रवृत्ति और पदक सम्मान।'],
        btnText: 'क्विज में भाग लें', chips: ['Sabhi', 'Buzzer Quiz', 'GK Booklet', 'Scholarship', 'School League']
      }
    }
  };

  // ==============================================================================
  // REGISTRATION MATRIX: 36 TO 40 (MULTI-KEY SAFE LOOKUP)
  // ==============================================================================
  var BATCH_36_40 = {
    '36': cat36, 'c36': cat36, '036': cat36,
    '37': cat37, 'c37': cat37, '037': cat37,
    '38': cat38, 'c38': cat38, '038': cat38,
    '39': cat39, 'c39': cat39, '039': cat39,
    '40': cat40, 'c40': cat40, '040': cat40
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_36_40);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_36_40);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_36_40);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_36_40);
      }
    });
  }
})();
