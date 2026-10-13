/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION BATCH (01-05)
 * MODULE        : Official Google Play Store Standard Categories 01 to 05
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) MODULAR MICRO-BATCH
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-batch-01-05.js
 */

(function () {
  'use strict';

  // ==============================================================================
  // CATEGORY 01: ART & DESIGN (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat01 = {
    id: 'c01', catId: '1', number: '01.', num: '01.', icon: '🎨',
    title: 'Art & Design', category_name_en: 'Art & Design', category_name_hi: 'आर्ट व डिज़ाइन',
    subtitle: 'फ्लेक्स बोर्ड, डिजिटल कार्ड, बिल बुक व विनाइल प्रिंटिंग',
    rating: '★ 4.9 (18k+ व्यवसायी)', trustBadge: 'Physical Print Guaranteed', supportBadge: '24x7 डिजाइन सपोर्ट',
    macroPillars: [
      { text: '📱 01-1: त्योहार पोस्टर व डिजिटल स्मार्ट कार्ड', color: '#86efac', bg: 'rgba(34, 197, 94, 0.14)' },
      { text: '🪧 01-2: फ्रंट शॉप मुख्य फ्लेक्स बोर्ड व ग्लो-साइन', color: '#fde047', bg: 'rgba(234, 179, 8, 0.14)' },
      { text: '📑 01-3: प्रीमियम विजिटिंग कार्ड व कार्बनलेस बिल बुक', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subcategories: {
      '01-1': {
        code: '[01-1]', sub_code: '01-1', slug: 'festival-post-digital-card', icon: '📱',
        title: 'Festival Post & Digital Card', hindiTitle: 'दुकान त्योहार पोस्टर व डिजिटल कार्ड',
        categoryTag: 'डिजिटल ब्रांडिंग', tag: 'डिजिटल ब्रांडिंग', rating: '★ 4.9', reviewCount: '8,900+ व्यापारी', metaBadge: '1-क्लिक शेयर',
        servicesTitle: 'उपलब्ध ब्रांडिंग सेवाएं:',
        services: [
          { text: '🖼️ दुकान नाम व फोटो सहित दैनिक त्योहार पोस्टर्स', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📇 1-टैप कॉल/व्हाट्सएप डिजिटल विजिटिंग कार्ड', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏷️ ऑफर बैनर व स्थानीय प्रचार पोस्टर्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '✨ एचडी सोशल मीडिया स्टेटस व रील्स टेम्प्लेट', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: ['व्यापार को डिजिटल पहचान देने वाले आकर्षक दैनिक पोस्टर्स।', 'बिना किसी ग्राफिक डिजाइनर के खर्च के तुरंत निर्माण।', 'WhatsApp पर ग्राहकों को सीधे भेजने योग्य।'],
        btnText: 'डिजिटल कार्ड बनाएं', chips: ['Sabhi', 'Festivals', 'Digital Card', 'Branding']
      },
      '01-2': {
        code: '[01-2]', sub_code: '01-2', slug: 'flex-board-printing', icon: '🪧',
        title: 'Flex Board & Printing', hindiTitle: 'लोहा फ्रेम फ्लेक्स बोर्ड व विनाइल',
        categoryTag: 'फिजिकल प्रिंटिंग', tag: 'फिजिकल प्रिंटिंग', rating: '★ 4.9', reviewCount: '4,400+ दुकानें', metaBadge: 'लोहे का मजबूत फ्रेम',
        servicesTitle: 'बोर्ड व विनाइल प्रिंटिंग विकल्प:',
        services: [
          { text: '🪧 फ्रंट शॉप मुख्य फ्लेक्स बोर्ड (लोहा फ्रेम सहित)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '💡 एलईडी पिक्सल ग्लो-साइन बोर्ड निर्माण', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🎨 दुकान के शीशे पर विनाइल स्टिकर पेस्टिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📐 फोल्डेबल रोल-अप स्टैंडी व कैनोपी टेंट', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['बारिश और धूप में सालों साल चलने वाला हैवी विनाइल व फ्लेक्स।', 'दुकान पर आकर सही नाप व इंस्टॉलेशन टीम सपोर्ट।', 'पक्का वेल्डिंग फ्रेम व बिजली फिटिंग गारंटी।'],
        btnText: 'फ्लेक्स बोर्ड ऑर्डर करें', chips: ['Sabhi', 'Flex Board', 'Glow Sign', 'Vinyl']
      },
      '01-3': {
        code: '[01-3]', sub_code: '01-3', slug: 'visiting-card-bill-books', icon: '📑',
        title: 'Visiting Card & Bill Books', hindiTitle: 'विजिटिंग कार्ड, बिल बुक व रबर स्टैम्प',
        categoryTag: 'स्टेशनरी प्रिंटिंग', tag: 'स्टेशनरी प्रिंटिंग', rating: '★ 4.8', reviewCount: '5,200+ व्यापारी', metaBadge: '3-कॉपी कार्बनलेस',
        servicesTitle: 'व्यापारिक स्टेशनरी निर्माण:',
        services: [
          { text: '💳 1000 प्रीमियम मैट/ग्लॉस कोटेड विजिटिंग कार्ड्स', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🧾 3-कॉपी कार्बनलेस पक्की दुकान बिल बुक', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🔘 ऑटो-इंक सेल्फ-इंकिंग रबर स्टैम्प (मुहर)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '✉️ फर्म लेटरहेड, लिफाफे व पक्के वाउचर', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['हाथ से लिखने पर नीचे अपने आप छपने वाली ओरिजिनल कार्बनलेस शीट।', 'जीएसटी नंबर और पते के साथ सरकारी मानकों अनुसार फॉर्मेटिंग।', 'दुकान के काउंटर तक पक्की डिलीवरी।'],
        btnText: 'बिल बुक व कार्ड छपवाएं', chips: ['Sabhi', 'Visiting Card', 'Bill Book', 'Stamp']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 02: AUTO & VEHICLES (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat02 = {
    id: 'c02', catId: '2', number: '02.', num: '02.', icon: '🚗',
    title: 'Auto & Vehicles', category_name_en: 'Auto & Vehicles', category_name_hi: 'ऑटो व वाहन सेवाएं',
    subtitle: 'ऑन-साइट पंचर, बैटरी जंपस्टार्ट, चालान व पुरानी गाड़ी बाजार',
    rating: '★ 4.9 (27k+ वाहन चालक)', trustBadge: 'Real On-Road Assist', supportBadge: '24x7 इमरजेंसी टोइंग',
    macroPillars: [
      { text: '🛞 02-1: 15-मिनट ऑन-साइट पंचर व बैटरी जंपस्टार्ट', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🚦 02-2: ई-चालान जांच, निपटान व फ़ास्टैग रिचार्ज', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🏍️ 02-3: 0% दलाली पुरानी बाइक, कार व ट्रैक्टर बाजार', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subcategories: {
      '02-1': {
        code: '[02-1]', sub_code: '02-1', slug: 'roadside-assistance', icon: '🛞',
        title: 'Roadside Assistance (RSA)', hindiTitle: 'इमरजेंसी ऑन-साइट पंचर व टोइंग',
        categoryTag: 'ऑन-रोड सहायता', tag: 'ऑन-रोड सहायता', rating: '★ 4.8', reviewCount: '14,200+ रेस्क्यू', metaBadge: '15 मिनट में पहुंच',
        servicesTitle: 'उपलब्ध आपातकालीन सेवाएं:',
        services: [
          { text: '🛞 ऑन-साइट ट्यूबलेस पंचर व हवा रीफिल', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🔋 डेड बैटरी जंपस्टार्ट केबल व नई बैटरी', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '⛽ हाईवे इमरजेंसी 2-लीटर पेट्रोल/डीजल डिलीवरी', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🚜 24x7 क्रेन टोचन व फ्लैटबेड रिकवरी वैन', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['सड़क पर गाड़ी खराब होने पर तुरंत निकटतम मिस्त्री रवाना।', 'पारदर्शी दूरी अनुसार तय फिक्स सरकारी रेट।', 'रात में भी सुरक्षित ऑन-रोड सहायता गारंटी।'],
        btnText: 'इमरजेंसी मदद बुलाएं', chips: ['Sabhi', 'Puncture', 'Battery Jumpstart', 'Towing', 'Fuel Delivery']
      },
      '02-2': {
        code: '[02-2]', sub_code: '02-2', slug: 'rto-challan-fastag', icon: '🚦',
        title: 'RTO Challan & FASTag', hindiTitle: 'ई-चालान जांच, निपटान व फ़ास्टैग',
        categoryTag: 'आरटीओ सेवाएं', tag: 'आरटीओ सेवाएं', rating: '★ 4.9', reviewCount: '8,400+ गाड़ियां', metaBadge: '1-क्लिक समाधान',
        servicesTitle: 'आरटीओ व फ़ास्टैग सेवाएं:',
        services: [
          { text: '📋 पेंडिंग ई-चालान जांच व कोर्ट निपटान सहायता', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '💳 सभी बैंकों का तत्काल फ़ास्टैग रिचार्ज', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📄 वाहन प्रदूषण जांच (PUC) व फिटनेस रिन्यूअल', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🛡️ 1-क्लिक बाइक/कार थर्ड पार्टी इंश्योरेंस', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: ['ट्रैफिक पुलिस चालान पर भारी छूट व लोक अदालत निपटान गाइड।', 'बिना आरटीओ ऑफिस के चक्कर काटे घर बैठे समाधान।', 'तुरंत डिजिटल रसीद व एसएमएस पुष्टि।'],
        btnText: 'चालान चेक करें', chips: ['Sabhi', 'Challan', 'FASTag', 'PUC', 'Insurance']
      },
      '02-3': {
        code: '[02-3]', sub_code: '02-3', slug: 'used-vehicles-buy-sell', icon: '🏍️',
        title: 'Used Vehicles Buy/Sell', hindiTitle: 'पुरानी बाइक, कार व ट्रैक्टर (0% दलाली)',
        categoryTag: 'वाहन बाजार', tag: 'वाहन बाजार', rating: '★ 4.9', reviewCount: '4,500+ सौदे', metaBadge: 'डायरेक्ट मालिक-ग्राहक',
        servicesTitle: 'उपलब्ध सर्टिफाइड वाहन:',
        services: [
          { text: '🛵 पुरानी बाइक व स्कूटी सीधी मालिक से खरीद', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🚗 प्रमाणित पुरानी फैमिली कारें (इंजन वारंटी)', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🚜 किसान पुराना ट्रैक्टर व कृषि ट्रॉली बाज़ार', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📑 आरटीओ वाहन ट्रांसफर व एनओसी दस्तावेज सहायता', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['बिना किसी दलाल या बिचौलिए के सीधे वाहन मालिक से बात करें।', 'चोरी व एक्सीडेंटल हिस्ट्री की 100% तकनीकी जांच।', 'फाइनेंस व आसान किश्तों की सुविधा उपलब्ध।'],
        btnText: 'वाहन बाजार देखें', chips: ['Sabhi', 'Used Bikes', 'Used Cars', 'Tractors', 'RTO Transfer']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 03: BEAUTY (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat03 = {
    id: 'c03', catId: '3', number: '03.', num: '03.', icon: '✂️',
    title: 'Beauty', category_name_en: 'Beauty', category_name_hi: 'ब्यूटी व ग्रूमिंग',
    subtitle: 'घर पर फेशियल, दुल्हन मेकअप, मेहंदी व नाई टोकन',
    rating: '★ 4.8 (21k+ संतुष्ट ग्राहक)', trustBadge: '100% Disposable Kit', supportBadge: 'होम सर्विस उपलब्ध',
    macroPillars: [
      { text: '💅 03-1: केवल महिलाओं हेतु घर पर फेशियल व रिका वैक्सिंग', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '👰 03-2: एचडी ब्राइडल शादी मेकअप व मारवाड़ी मेहंदी', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '💈 03-3: मोहल्ला नाई दुकान जीरो-वेटिंग डिजिटल टोकन', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '03-1': {
        code: '[03-1]', sub_code: '03-1', slug: 'salon-at-home', icon: '💅',
        title: 'Salon at Home (Ladies Only)', hindiTitle: 'घर पर सैलून सेवा (केवल महिलाएं)',
        categoryTag: 'होम सैलून', tag: 'होम सैलून', rating: '★ 4.9', reviewCount: '11,400+ महिलाएं', metaBadge: 'डिस्पोजेबल किट',
        servicesTitle: 'लोकप्रिय ब्यूटी सेवाएं:',
        services: [
          { text: '✨ रिका वैक्सिंग, थ्रेडिंग व अंडरआर्म केयर', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '💆 ओ3+ व गोल्ड ग्लो फेशियल घर पर', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '💇 हेयर स्पा, डैंड्रफ ट्रीटमेंट व हेयर कट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🦶 पेडीक्योर व मैनीक्योर रिलैक्सिंग स्पा', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['100% वन-टाइम डिस्पोजेबल किट—पूर्ण स्वच्छता की गारंटी।', 'प्रशिक्षित और बैकग्राउंड-वेरिफाइड महिला ब्यूटीशियन।', 'पारदर्शी रेट—कोई यात्रा शुल्क या हिडन चार्ज नहीं।'],
        btnText: 'होम सैलून बुक करें', chips: ['Sabhi', 'Facial', 'Rica Waxing', 'Hair Spa', 'Pedicure']
      },
      '03-2': {
        code: '[03-2]', sub_code: '03-2', slug: 'bridal-makeup-mehndi', icon: '👰',
        title: 'Bridal Makeup & Mehndi', hindiTitle: 'ब्राइडल एचडी मेकअप व दुल्हन मेहंदी',
        categoryTag: 'वेडिंग ब्यूटी', tag: 'वेडिंग ब्यूटी', rating: '★ 4.9', reviewCount: '5,800+ दुल्हनें', metaBadge: 'एचडी / एयरब्रश',
        servicesTitle: 'शादी एवं समारोह पैकेज:',
        services: [
          { text: '👰 एचडी व एयरब्रश ब्राइडल शादी मेकअप', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '🌿 मारवाड़ी, अरेबिक व पोट्रेट दुल्हन मेहंदी', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '💃 प्री-वेडिंग ग्रूमिंग व सगाई मेकअप पैकेज', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🥻 साड़ी ड्रेपिंग, हेयर स्टाइलिंग व ब्राइडल ज्वेलरी', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['शादी के दिन वेन्यू या घर पर पूरी टीम के साथ ऑन-टाइम पहुंच।', 'इंटरनेशनल ब्रांड्स (MAC, Huda Beauty) के ऑथेंटिक प्रोडक्ट्स।', 'शगुन की शुद्ध प्राकृतिक हर्बल मेहंदी—गहरा लाल रंग।'],
        btnText: 'ब्राइडल पैकेज चुनें', chips: ['Sabhi', 'Bridal HD', 'Mehndi Artist', 'Airbrush', 'Pre-Wedding']
      },
      '03-3': {
        code: '[03-3]', sub_code: '03-3', slug: 'men-grooming-barber', icon: '💈',
        title: 'Men Grooming & Barber', hindiTitle: 'नाई दुकान डिजिटल टोकन व ग्रूमिंग',
        categoryTag: 'मेंस ग्रूमिंग', tag: 'मेंस ग्रूमिंग', rating: '★ 4.8', reviewCount: '8,200+ पुरुष', metaBadge: 'जीरो-वेटिंग टोकन',
        servicesTitle: 'दुकान ग्रूमिंग सुविधाएं:',
        services: [
          { text: '⏱️ दुकान पर बिना लाइन लगे सीधा डिजिटल टोकन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '✂️ नया सीलबंद ब्लेड व स्टेरलाइज्ड कैंची हेयरकट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🧔 बियर्ड शेपिंग, स्टाइलिंग व चारकोल डी-टैन', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '💆 ठंडे तेल की हेड मसाज व फेस स्टीम', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['सैलून में फालतू बैठने से मुक्ति—घर से टोकन लेकर ठीक समय पर पहुंचे।', 'हर ग्राहक के सामने नया ब्लेड खोलने का सख्त नियम।', 'किफायती मोहल्ला रेट पर वीआईपी ग्रूमिंग।'],
        btnText: 'डिजिटल टोकन लें', chips: ['Sabhi', 'Digital Token', 'Haircut', 'Beard Trim', 'Head Massage']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 04: BOOKS & REFERENCE (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat04 = {
    id: 'c04', catId: '4', number: '04.', num: '04.', icon: '📖',
    title: 'Books & Reference', category_name_en: 'Books & Reference', category_name_hi: 'पुस्तकें, संदर्भ ग्रंथ व साहित्य',
    subtitle: 'पुस्तकालय, संदर्भ पुस्तकें, अध्ययन सामग्री व वाचनालय',
    rating: '★ 4.8 (14k+ पाठक)', trustBadge: 'Verified Reference', supportBadge: '24x7 अध्ययन केंद्र',
    macroPillars: [
      { text: '🎧 04-1: क्षेत्रीय लोककथाएं, ऑडियो कहानियां व चाणक्य नीति', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📝 04-2: सरकारी परीक्षा टॉपर्स हस्तलिखित नोट्स व सॉल्वड पेपर्स', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '📜 04-3: काशी/मिथिला दैनिक पंचांग, शुभ मुहूर्त व धर्म साहित्य', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subcategories: {
      '04-1': {
        code: '[04-1]', sub_code: '04-1', slug: 'regional-audio-stories', icon: '🎧',
        title: 'Regional Audio Stories', hindiTitle: 'क्षेत्रीय लोककथाएं व ऑडियो बुक',
        categoryTag: 'ऑडियो साहित्य', tag: 'ऑडियो साहित्य', rating: '★ 4.9', reviewCount: '6,800+ श्रोता', metaBadge: 'स्थानीय भाषा',
        servicesTitle: 'ऑडियो साहित्य श्रेणियां:',
        services: [
          { text: '🎙️ हिंदी, भोजपुरी व मैथिली लोककथाएं व वीर जीवनियां', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📜 चाणक्य नीति, विदुर नीति व पंचतंत्र ऑडियो संग्रह', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🌙 रात में सुनने योग्य सुकूनदायक प्रेरक कहानियां', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['अपनी मातृभाषा में समृद्ध सांस्कृतिक कहानियों का आनंद।', 'उच्च-गुणवत्ता वॉइस आर्टिस्ट रिकॉर्डिंग।', 'ऑफलाइन डाउनलोड सपोर्ट।'],
        btnText: 'कहानियां सुनें', chips: ['Sabhi', 'Folk Tales', 'Chanakya Niti', 'Bedtime Stories']
      },
      '04-2': {
        code: '[04-2]', sub_code: '04-2', slug: 'sarkari-exam-notes', icon: '📝',
        title: 'Sarkari Exam Notes & Solved Papers', hindiTitle: 'सरकारी परीक्षा टॉपर्स नोट्स',
        categoryTag: 'प्रतियोगी सामग्री', tag: 'प्रतियोगी सामग्री', rating: '★ 4.8', reviewCount: '5,400+ छात्र', metaBadge: 'प्रिंटेड बुकलेट',
        servicesTitle: 'अध्ययन सामग्री विकल्प:',
        services: [
          { text: '📚 पुलिस, रेलवे व एसएससी टॉपर्स हस्तलिखित नोट्स', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📑 पिछले 10-वर्षीय सॉल्वड पेपर्स प्रिंटेड बुकलेट', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🚚 घर तक सुरक्षित कूरियर डिलीवरी सुविधा', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['टॉपर्स द्वारा सत्यापित सटीक और संक्षिप्त परीक्षा नोट्स।', 'पक्की स्पाइरल बाइंडिंग और स्पष्ट फॉन्ट।', 'किफायती छात्र डिस्काउंट रेट।'],
        btnText: 'नोट्स ऑर्डर करें', chips: ['Sabhi', 'Handwritten Notes', 'Solved Papers', 'Postal Delivery']
      },
      '04-3': {
        code: '[04-3]', sub_code: '04-3', slug: 'dainik-panchang-sahitya', icon: '📜',
        title: 'Dainik Panchang & Dharmik Sahitya', hindiTitle: 'दैनिक पंचांग, शुभ मुहूर्त व साहित्य',
        categoryTag: 'धार्मिक संदर्भ', tag: 'धार्मिक संदर्भ', rating: '★ 4.9', reviewCount: '4,200+ पाठक', metaBadge: 'काशी पंचांग',
        servicesTitle: 'पंचांग व संदर्भ विकल्प:',
        services: [
          { text: '🗓️ काशी व मिथिला पंचांग, तिथि, नक्षत्र व चौघड़िया', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '💍 विवाह, गृह प्रवेश व मुंडन शुभ लग्न तिथियां', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📖 प्रामाणिक गीता, रामायण व वैदिक साहित्य', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: ['दैनिक पूजा और शुभ कार्यों हेतु 100% प्रामाणिक मुहूर्त।', 'विद्वान आचार्यों द्वारा संकलित पंचांग।', 'दैनिक पंचांग अलर्ट्स।'],
        btnText: 'पंचांग देखें', chips: ['Sabhi', 'Panchang', 'Shubh Muhurat', 'Vedic Texts']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 05: BUSINESS (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat05 = {
    id: 'c05', catId: '5', number: '05.', num: '05.', icon: '💼',
    title: 'Business', category_name_en: 'Business', category_name_hi: 'व्यापार, बहीखाता व मंडी नेटवर्क',
    subtitle: 'व्यापार निबंधन, एमएसएमई, जीएसटी, टैक्स व व्यावसायिक सेवाएं',
    rating: '★ 4.9 (9.5k+ उद्यमी)', trustBadge: 'MSME Certified', supportBadge: 'व्यापार सारथी 24x7',
    macroPillars: [
      { text: '📒 05-1: डिजिटल उधारी बहीखाता, व्हाट्सएप ऑटो-तगादा व लेजर', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🌾 05-2: थोक जिंस, किराना व निर्माण सामग्री मंडी नेटवर्क', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '📱 05-3: 30-सेकंड व्हाट्सएप ऑनलाइन दुकान कैटलॉग व क्यूआर', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '05-1': {
        code: '[05-1]', sub_code: '05-1', slug: 'digital-udhar-khata', icon: '📒',
        title: 'Digital Udhar Khata & Bahi', hindiTitle: 'डिजिटल उधारी बहीखाता व लेजर',
        categoryTag: 'व्यापार लेजर', tag: 'व्यापार लेजर', rating: '★ 4.9', reviewCount: '6,100+ व्यापारी', metaBadge: '100% सुरक्षित क्लाउड',
        servicesTitle: 'बहीखाता मुख्य टूल्स:',
        services: [
          { text: '📲 1-क्लिक स्वचालित व्हाट्सएप पेमेंट रिमाइंडर (तगादा)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '💳 सीधे बैंक खाते में शून्य-फीस यूपीआई पेमेंट लिंक', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📑 ग्राहकवार पीडीएफ खाता स्टेटमेंट व शेयरिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['कागजी डायरी खोने के डर से पूर्ण मुक्ति।', '3 गुना तेज उधारी वसूली और पारदर्शी हिसाब।', 'ऑफलाइन काम करने की पूरी सुविधा।'],
        btnText: 'खाता शुरू करें', chips: ['Sabhi', 'Udhar Ledger', 'WhatsApp Tagada', 'PDF Statement']
      },
      '05-2': {
        code: '[05-2]', sub_code: '05-2', slug: 'wholesale-mandi-network', icon: '🌾',
        title: 'Wholesale Mandi Network', hindiTitle: 'थोक मंडी नेटवर्क व डायरेक्टरी',
        categoryTag: 'थोक व्यापार', tag: 'थोक व्यापार', rating: '★ 4.8', reviewCount: '2,800+ डीलर', metaBadge: 'फैक्ट्री भाव',
        servicesTitle: 'थोक मंडी श्रेणियां:',
        services: [
          { text: '🍚 किराना, तेल व अनाज थोक मिल डिस्ट्रीब्यूटर भाव', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🧱 सरिया, सीमेंट व हार्डवेयर डायरेक्ट डिपो रेट्स', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '👕 थोक कपड़ा मंडी, साड़ी व रेडीमेड वस्त्र संपर्क', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: ['सीधे बड़े निर्माताओं और मिलों से जुड़कर भारी मार्जिन।', 'दैनिक ताजा मंडी भाव बुलेटिन।', 'सत्यापित और विश्वसनीय थोक व्यापारी।'],
        btnText: 'मंडी भाव देखें', chips: ['Sabhi', 'Grain Mandi', 'Cement & Steel', 'Garment Wholesale']
      },
      '05-3': {
        code: '[05-3]', sub_code: '05-3', slug: 'online-dukan-qr-catalog', icon: '📱',
        title: 'Online Dukan QR Catalog', hindiTitle: 'व्हाट्सएप ऑनलाइन दुकान व क्यूआर',
        categoryTag: 'डिजिटल दुकान', tag: 'डिजिटल दुकान', rating: '★ 4.9', reviewCount: '4,500+ दुकानें', metaBadge: '30-सेकंड सेटअप',
        servicesTitle: 'डिजिटल स्टोर सुविधाएं:',
        services: [
          { text: '🛍️ फोटो व कीमत सहित डिजिटल प्रोडक्ट कैटलॉग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏷️ काउंटर हेतु प्रिंटेड क्यूआर स्टैंडी होम डिलीवरी', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📦 सीधे व्हाट्सएप पर ग्राहक से होम डिलीवरी ऑर्डर', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['बिना किसी तकनीकी ज्ञान के 30 सेकंड में अपनी ऑनलाइन दुकान बनाएं।', 'काउंटर पर खड़े ग्राहक सीधे क्यूआर स्कैन कर सामान ऑर्डर कर सकते हैं।', '0% कमीशन—पूरा मुनाफा आपका।'],
        btnText: 'ऑनलाइन दुकान बनाएं', chips: ['Sabhi', 'Online Catalog', 'QR Standee', 'WhatsApp Orders']
      }
    }
  };

  // ==============================================================================
  // REGISTRATION MATRIX: 01 TO 05 (MULTI-KEY SAFE LOOKUP)
  // ==============================================================================
  var BATCH_01_05 = {
    '1': cat01, '01': cat01, 'c1': cat01, 'c01': cat01,
    '2': cat02, '02': cat02, 'c2': cat02, 'c02': cat02,
    '3': cat03, '03': cat03, 'c3': cat03, 'c03': cat03,
    '4': cat04, '04': cat04, 'c4': cat04, 'c04': cat04,
    '5': cat05, '05': cat05, 'c5': cat05, 'c05': cat05
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_01_05);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_01_05);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_01_05);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_01_05);
      }
    });
  }
})();
