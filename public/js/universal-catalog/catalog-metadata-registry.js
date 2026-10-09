/**
 * RISE MITRA — UNIVERSAL CATALOG METADATA REGISTRY (SSOT)
 * MODULE        : Centralized High-Performance Catalog Registry & Modular Extension Hub
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/universal-catalog/catalog-metadata-registry.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var RM_CATALOG_REGISTRY = {
    // CATEGORY 01: ART & DESIGN (OFFICIAL GOOGLE PLAY STORE TAXONOMY)
    '1': {
      id: 'c1',
      number: '01.',
      icon: '🎨',
      title: 'Art & Design',
      subtitle: 'हस्तशिल्प, खादी, डोकरा कला, ग्राफिक्स व रचनात्मक डिजाइन',
      rating: '★ 4.9 (18k+ कद्रदान)',
      trustBadge: 'Artisan Verified Network',
      supportBadge: '24x7 सहायता केंद्र',
      macroPillars: [
        { text: '🥻 01-1: तसर सिल्क, खादी व हथकरघा वस्त्र निर्माण', color: '#86efac', bg: 'rgba(34, 197, 94, 0.14)' },
        { text: '🏺 01-2: प्राचीन डोकरा धातु कला व पारंपरिक शिल्प', color: '#fde047', bg: 'rgba(234, 179, 8, 0.14)' },
        { text: '🎨 01-3: आधुनिक 3D डिजाइनिंग, लोगो व ब्रांड आर्ट', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
      ],
      subcategories: {
        '1-1': {
          code: '[01-1]', icon: '🥻', title: 'Tussar Silk & Handloom', hindiTitle: 'तसर सिल्क, खादी व हथकरघा वस्त्र',
          categoryTag: 'पारंपरिक कला', rating: '★ 4.9', reviewCount: '8,900+ ग्राहक', metaBadge: 'सिल्क मार्क प्रमाणित',
          servicesTitle: 'उपलब्ध कला एवं वस्त्र उत्पाद:',
          services: [
            { text: '🥻 शुद्ध तसर सिल्क व कुचई सिल्क साड़ी', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '👕 प्राकृतिक खादी कुर्ता, पाजामा व जैकेट', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🛏️ हथकरघा सूती चादरें, खेस व गमछा', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '🧣 ऊनी शॉल व एथनिक हस्तनिर्मित वस्त्र', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
          ],
          highlights: ['सीधे ग्रामीण दस्तकारों व बुनकरों द्वारा निर्मित 100% शुद्ध उत्पाद।', 'प्राकृतिक रंगों से रंगा पर्यावरण-अनुकूल जैविक फैब्रिक।', 'शादी और समारोहों हेतु पारंपरिक व सुरुचिपूर्ण संग्रह।'],
          btnText: 'वस्त्र व कला देखें'
        },
        '1-2': {
          code: '[01-2]', icon: '🏺', title: 'Dokra & Tribal Artifacts', hindiTitle: 'डोकरा धातु कला व जनजातीय हस्तशिल्प',
          categoryTag: 'धातु शिल्प', rating: '★ 4.9', reviewCount: '4,400+ कला प्रेमी', metaBadge: 'हॉस्ट लॉस्ट-वैक्स कास्टिंग',
          servicesTitle: 'पारंपरिक धातु कला उत्पाद:',
          services: [
            { text: '🐘 डोकरा नक्काशी हाथी, घोड़ा व नर्तक मूर्तियां', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '🪔 पीतल के पारंपरिक दीये, घंटी व पूजा पात्र', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🖼️ सोहराई व कोहबर पारंपरिक भित्ति चित्र फ्रेम', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🎁 कॉर्पोरेट गिफ्टिंग हेतु यूनिक एंटीक मोमेंटो', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['4000 वर्ष पुरानी लॉस्ट-वैक्स ढलाई तकनीक से निर्मित अद्वितीय पीस।', 'घर के लिविंग रूम को ऐतिहासिक और शाही लुक देने वाली कलाकृतियां।', 'स्थानीय कारीगरों को सीधा आर्थिक संबल।'],
          btnText: 'कलाकृतियां खरीदें'
        },
        '1-3': {
          code: '[01-3]', icon: '🎨', title: 'Creative Graphic Design', hindiTitle: 'ग्राफिक डिजाइनिंग, 3D आर्ट व लोगो',
          categoryTag: 'डिजिटल आर्ट', rating: '★ 4.8', reviewCount: '5,200+ प्रोजेक्ट्स', metaBadge: 'हाई-रेसोल्यूशन वेक्टर्स',
          servicesTitle: 'क्रिएटिव डिजाइन सुविधाएं:',
          services: [
            { text: '✒️ आधुनिक बिजनेस लोगो व ब्रांड आइडेंटिटी', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '📦 प्रोडक्ट पैकेजिंग व लेबल डिजाइन', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🖼️ सोशल मीडिया क्रिएटिव्स व डिजिटल पोस्टर', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '📐 3D प्रोडक्ट रेंडरिंग व मॉकअप्स', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['व्यापार को प्रीमियम ब्रांड लुक देने वाले आधुनिक ग्राफिक्स।', 'असीमित रिवीजन व तुरंत सोर्स फाइल डिलीवरी।', 'प्रिंट और सोशल मीडिया दोनों फॉर्मेट में रेडी-टू-यूज फाइल्स।'],
          btnText: 'डिजाइन ऑर्डर करें'
        }
      }
    },

    // CATEGORY 02: AUTO & VEHICLES (OFFICIAL GOOGLE PLAY STORE TAXONOMY)
    '2': {
      id: 'c2',
      number: '02.',
      icon: '🚗',
      title: 'Auto & Vehicles',
      subtitle: 'वाहन सर्विस, गैराज, रेंटल व 24x7 ऑन-रोड सहायता',
      rating: '★ 4.9 (27k+ वाहन चालक)',
      trustBadge: 'Expert Mechanics',
      supportBadge: '24x7 ऑन-रोड सहायता',
      macroPillars: [
        { text: '🏍️ 02-1: टू-व्हीलर सर्विस, इंजन ऑयल व पार्ट्स बदलाव', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
        { text: '🚗 02-2: कार जनरल सर्विस, एसी रिपेयर व डेंटिंग-पेंटिंग', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
        { text: '🛞 02-3: 24x7 इमरजेंसी पंचर, टोइंग व वाहन रेंटल', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
      ],
      subcategories: {
        '2-1': {
          code: '[02-1]', icon: '🏍️', title: 'Bike & Scooter Service', hindiTitle: 'बाइक व स्कूटी रिपेयर सर्विस',
          categoryTag: 'टू-व्हीलर गैराज', rating: '★ 4.8', reviewCount: '14,200+ बाइक्स', metaBadge: 'ओरिजिनल स्पेयर पार्ट्स',
          servicesTitle: 'बाइक व स्कूटी रखरखाव:',
          services: [
            { text: '🛢️ ब्रांडेड कैस्ट्रॉल/मोटोरोला ऑयल चेंज', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '⚙️ कार्बोरेटर/एफआई ट्यूनिंग व माइलेज सेटिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🛑 डिस्क पैड, ब्रेक शू व क्लच प्लेट बदलाव', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '🚿 फोम वॉश, चेन क्लीनिंग व ल्यूब पैकेज', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['घर बैठे बाइक सर्विस—पिकअप व ड्रॉप की निःशुल्क सुविधा।', 'सभी रिप्लेस किए गए पार्ट्स का पक्का बॉक्स व पुराना पार्ट वापसी।', 'सर्विस के बाद 15 दिन की फ्री ट्यूनिंग वारंटी।'],
          btnText: 'बाइक सर्विस बुक करें'
        },
        '2-2': {
          code: '[02-2]', icon: '🚗', title: 'Car Repair & Workshop', hindiTitle: 'कार सर्विस, डेंटिंग व एसी रिपेयर',
          categoryTag: 'कार वर्कशॉप', rating: '★ 4.9', reviewCount: '8,400+ कारें', metaBadge: 'OBD2 कंप्यूटर डायग्नोसिस',
          servicesTitle: 'कार वर्कशॉप सुविधाएं:',
          services: [
            { text: '💻 इंजन स्कैनिंग व सेंसर एरर डायग्नोसिस', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '❄️ कार एसी गैस रिफिल, कूलिंग कॉइल सर्विस', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🎨 पेंट बूथ डेंटिंग, स्क्रैच रिमूवल व पॉलिश', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '✨ सेरामिक कोटिंग, टेफ्लॉन व डीप इंटीरियर क्लीन', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
          ],
          highlights: ['कंपनी शोरूम की तुलना में 40% कम खर्च में गुणवत्तापूर्ण काम।', 'ओरिजिनल फैक्ट्री कलर मैचिंग पेंट बूथ तकनीक।', 'सर्विस हिस्ट्री और इंश्योरेंस कैशलेस क्लेम में सहायता।'],
          btnText: 'कार सर्विस स्लॉट लें'
        },
        '2-3': {
          code: '[02-3]', icon: '🛞', title: 'Roadside Assistance & Rentals', hindiTitle: 'इमरजेंसी टोइंग, पंचर व वाहन रेंटल',
          categoryTag: 'ऑन-रोड सहायता', rating: '★ 4.9', reviewCount: '4,500+ रेस्क्यू', metaBadge: '20 मिनट में पहुंच',
          servicesTitle: 'आपातकालीन व रेंटल विकल्प:',
          services: [
            { text: '🛞 ऑन-साइट ट्यूबलेस पंचर व टायर रिप्लेसमेंट', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '🔋 डिस्चार्ज बैटरी जंपस्टार्ट व नई बैटरी डिलीवरी', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🚜 फ्लैटबेड हाइड्रोलिक टोइंग व रिकवरी वाहन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🛵 सेल्फ ड्राइव स्कूटी, बाइक व कार रेंटल', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['शहर व हाईवे पर कहीं भी गाड़ी बंद होने पर तुरंत सहायता दल रवाना।', 'पारदर्शी दूरी अनुसार तय सरकारी रेट कार्ड।', 'न्यूनतम सिक्योरिटी डिपॉजिट पर सेल्फ ड्राइव वाहन उपलब्ध।'],
          btnText: 'इमरजेंसी हेल्प बुलाएं'
        }
      }
    },

    // CATEGORY 03: BEAUTY (OFFICIAL GOOGLE PLAY STORE TAXONOMY)
    '3': {
      id: 'c3',
      number: '03.',
      icon: '✂️',
      title: 'Beauty',
      subtitle: 'सैलून, ब्यूटी पार्लर, स्पा, ग्रूमिंग व स्किनकेयर',
      rating: '★ 4.8 (21k+ ग्राहक)',
      trustBadge: 'Hygiene Certified',
      supportBadge: 'होम सर्विस उपलब्ध',
      macroPillars: [
        { text: '💇 03-1: पुरुष हेयरकट, शेविंग व बियर्ड ग्रूमिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
        { text: '💅 03-2: महिला ब्यूटी पार्लर, फेशियल व मेकअप', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
        { text: '🌿 03-3: आयुर्वेदिक स्पा व बॉडी मसाज थेरेपी', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
      ],
      subcategories: {
        '3-1': {
          code: '[03-1]', icon: '💇', title: 'Men\'s Grooming', hindiTitle: 'मेंस सैलून व हेयर स्टाइलिंग',
          categoryTag: 'मेंस ग्रूमिंग', rating: '★ 4.8', reviewCount: '8,200+ पुरुष', metaBadge: '1-बार डिस्पोजेबल किट',
          servicesTitle: 'उपलब्ध ग्रूमिंग सेवाएं:',
          services: [
            { text: '✂️ आधुनिक हेयरकट व हेड मसाज', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🧔 दाढ़ी शेपिंग व बियर्ड स्पा', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '✨ डी-टैन व चारकोल फेशियल', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '🎨 हेयर कलर व केराटिन ट्रीटमेंट', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['100% सैनिटाइज्ड औजार व नए ब्लेड का अनिवार्य उपयोग।', 'सैलून में कतार से मुक्ति—समय तय कर सीधा स्लॉट बुक करें।', 'अनुभवी स्टाइलिस्ट द्वारा घर पर भी सेवा उपलब्ध।'],
          btnText: 'सैलून स्लॉट बुक करें'
        },
        '3-2': {
          code: '[03-2]', icon: '💅', title: 'Women\'s Parlour', hindiTitle: 'महिला ब्यूटी पार्लर व ब्राइडल मेकअप',
          categoryTag: 'ब्यूटी व स्किनकेयर', rating: '★ 4.9', reviewCount: '11,400+ महिलाएं', metaBadge: 'प्रमाणित ब्यूटीशियन',
          servicesTitle: 'लोकप्रिय ब्यूटी सेवाएं:',
          services: [
            { text: '✨ गोल्ड, डायमंड व हाइड्रा फेशियल', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
            { text: '💅 मैनीक्योर व पेडीक्योर स्पा', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🌿 रिका वैक्सिंग व थ्रेडिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '👰 पार्टी व ब्राइडल एचडी मेकअप', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
          ],
          highlights: ['केवल महिलाओं के लिए सुरक्षित होम-सर्विस सुविधा।', 'ब्रांडेड कॉस्मेटिक्स का ही इस्तेमाल।', 'पारदर्शी रेट कार्ड—कोई अतिरिक्त हिडन चार्ज नहीं।'],
          btnText: 'ब्यूटीशियन बुक करें'
        },
        '3-3': {
          code: '[03-3]', icon: '🌿', title: 'Spa & Wellness', hindiTitle: 'आयुर्वेदिक स्पा व थेरेपी सेंटर',
          categoryTag: 'वेलनेस व स्पा', rating: '★ 4.8', reviewCount: '3,800+ ग्राहक', metaBadge: 'प्रशिक्षित थेरेपिस्ट',
          servicesTitle: 'आरामदायक थेरेपी विकल्प:',
          services: [
            { text: '💆 डीप टिशू व स्वीडिश मसाज', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🌿 आयुर्वेदिक शिरोधारा व पंचकर्म', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🦶 फुट रिफ्लेक्सोलॉजी व एक्यूप्रेशर', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '💨 हर्बल स्टीम बाथ व बॉडी डिटॉक्स', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['तनाव मुक्त शांत वातावरण और प्राइवेट केबिन।', 'शुद्ध जड़ी-बूटियों से बने औषधीय तेलों का प्रयोग।', 'शारीरिक थकान व तनाव निवारक प्राकृतिक थेरेपी।'],
          btnText: 'स्पा सेशन बुक करें'
        }
      }
    },

    // CATEGORY 15: HOUSE & HOME (OFFICIAL GOOGLE PLAY STORE TAXONOMY)
    '15': {
      id: 'c15',
      number: '15.',
      icon: '🏠',
      title: 'House & Home',
      subtitle: 'घर, आवास व दैनिक व्यवस्थापन केंद्र',
      rating: '★ 4.9 (12k+ परिवार)',
      trustBadge: 'Rise Verified Network',
      supportBadge: '24x7 सहायता केंद्र',
      macroPillars: [
        { text: '🛠️ 15-1: गृह मरम्मत व कुशल कारीगर', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.12)' },
        { text: '📋 15-2: डिजिटल किराया बहीखाता व लेजर', color: '#34d399', bg: 'rgba(52, 211, 153, 0.12)' },
        { text: '🏠 15-3: 0% ब्रोकरेज कमरा व फ्लैट खोज', color: '#facc15', bg: 'rgba(250, 204, 21, 0.12)' }
      ],
      subcategories: {
        '15-1': {
          code: '[15-1]', icon: '🛠️', title: 'Mistry & Home Repair', hindiTitle: 'मिस्त्री व दैनिक घरेलू मरम्मत सेवाएं',
          categoryTag: 'होम मेंटेनेंस', rating: '★ 4.8', reviewCount: '2,400+ समीक्षाएं', metaBadge: '⚡ 30 मिनट विज़िट',
          servicesTitle: 'उपलब्ध प्रमाणित कारीगर सेवाएं:',
          services: [
            { text: '🚰 प्लंबर (नल, मोटर, पाइप लीकेज)', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
            { text: '⚡ इलेक्ट्रीशियन (शॉर्ट सर्किट, वायरिंग)', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
            { text: '🪚 बढ़ई / कारपेंटर (फर्नीचर, ताला, किवाड़)', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
            { text: '🎨 पेंटर (वॉल पुट्टी, डिस्टेंपर, वॉटरप्रूफ)', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' },
            { text: '🧱 राजमिस्त्री (टाइल फिटिंग, प्लास्टर, चिनाई)', bg: 'rgba(52,211,153,0.12)', c: '#34d399' }
          ],
          highlights: ['तय और पारदर्शी रेट कार्ड — काम से पहले पक्का रेट, कोई मोलभाव नहीं।', '30 मिनट में स्थानीय व कुशल कारीगर आपके दरवाजे पर।', '7 दिन की कार्य संतुष्टि वारंटी व शून्य छुपा शुल्क।'],
          btnText: 'तुरंत मिस्त्री बुक करें'
        },
        '15-2': {
          code: '[15-2]', icon: '📋', title: 'Rental Ledger', hindiTitle: 'किराया बहीखाता व किरायेदार प्रबंधन',
          categoryTag: 'फाइनेंस व प्रॉपर्टी टूल', rating: '★ 4.9', reviewCount: '4,800+ मकान मालिक', metaBadge: '₹0 आजीवन मुफ्त',
          servicesTitle: 'डिजिटल बहीखाता मुख्य टूल्स:',
          services: [
            { text: '🧾 1-क्लिक WhatsApp किराया रसीद (PDF)', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
            { text: '⚡ ऑटो सब-मीटर बिजली यूनिट कैलकुलेटर', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
            { text: '👥 किरायेदार पहचान व सत्यापन रिकॉर्ड', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
            { text: '⏰ स्वचालित मासिक SMS / WhatsApp ड्यू अलर्ट', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
            { text: '📑 कानूनी रेंट एग्रीमेंट ड्राफ्ट व ई-हस्ताक्षर', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
          ],
          highlights: ['पुराने रजिस्टर व डायरी से मुक्ति — बिजली यूनिट डालते ही कुल बिल का ऑटो कैलकुलेशन।', 'मकान मालिक और किरायेदार दोनों के फोन पर रियल-टाइम हिसाब सिंक।', '100% सुरक्षित क्लाउड बैकअप व ऑटोमेटेड पेमेंट ट्रैकिंग।'],
          btnText: 'बहीखाता खोलें व रसीद बनाएं'
        },
        '15-3': {
          code: '[15-3]', icon: '🏠', title: 'Room & Flat Search', hindiTitle: 'कमरा, फ्लैट व पीजी खोज (0% दलाली)',
          categoryTag: 'रेंटल प्रॉपर्टी नेटवर्क', rating: '★ 4.9', reviewCount: '9,200+ छात्र व परिवार', metaBadge: '0% ब्रोकरेज',
          servicesTitle: 'किराए हेतु उपलब्ध विकल्प:',
          services: [
            { text: '🛏️ सिंगल कमरा / 1 RK (स्टूडेंट्स व जॉब)', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
            { text: '🏢 1 BHK / 2 BHK / 3 BHK फैमिली फ्लैट', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
            { text: '👩 Girls हॉस्टल व सेफ पीजी (सुरक्षा सहित)', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
            { text: '👨 Boys लॉज व मेस सुविधा', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
            { text: '🏬 दुकान व कमर्शियल ऑफिस स्पेस', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
          ],
          highlights: ['बिना किसी दलाल या ब्रोकर के सीधे असली मकान मालिक से बात करें।', 'सत्यापित रूम, फ्लैट और हॉस्टल की विश्वसनीय लिस्टिंग।', 'पानी, बिजली सब-मीटर, पार्किंग व गेट टाइमिंग की पहले से स्पष्ट जानकारी।'],
          btnText: 'सीधे मालिक से संपर्क करें'
        }
      }
    },

    // CATEGORY 16: DUAL-ALIAS FOR HOUSE & HOME (100% BACKWARD COMPATIBILITY)
    '16': {
      id: 'c16',
      number: '16.',
      icon: '🏠',
      title: 'House & Home',
      subtitle: 'घर, आवास व दैनिक व्यवस्थापन केंद्र',
      rating: '★ 4.9 (12k+ परिवार)',
      trustBadge: 'Rise Verified Network',
      supportBadge: '24x7 सहायता केंद्र',
      macroPillars: [
        { text: '🛠️ 16-1: गृह मरम्मत व कुशल कारीगर', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.12)' },
        { text: '📋 16-2: डिजिटल किराया बहीखाता व लेजर', color: '#34d399', bg: 'rgba(52, 211, 153, 0.12)' },
        { text: '🏠 16-3: 0% ब्रोकरेज कमरा व फ्लैट खोज', color: '#facc15', bg: 'rgba(250, 204, 21, 0.12)' }
      ],
      subcategories: {
        '16-1': {
          code: '[16-1]', icon: '🛠️', title: 'Mistry & Home Repair', hindiTitle: 'मिस्त्री व दैनिक घरेलू मरम्मत सेवाएं',
          categoryTag: 'होम मेंटेनेंस', rating: '★ 4.8', reviewCount: '2,400+ समीक्षाएं', metaBadge: '⚡ 30 मिनट विज़िट',
          servicesTitle: 'उपलब्ध प्रमाणित कारीगर सेवाएं:',
          services: [
            { text: '🚰 प्लंबर (नल, मोटर, पाइप लीकेज)', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
            { text: '⚡ इलेक्ट्रीशियन (शॉर्ट सर्किट, वायरिंग)', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
            { text: '🪚 बढ़ई / कारपेंटर (फर्नीचर, ताला, किवाड़)', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
            { text: '🎨 पेंटर (वॉल पुट्टी, डिस्टेंपर, वॉटरप्रूफ)', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' },
            { text: '🧱 राजमिस्त्री (टाइल फिटिंग, प्लास्टर, चिनाई)', bg: 'rgba(52,211,153,0.12)', c: '#34d399' }
          ],
          highlights: ['तय और पारदर्शी रेट कार्ड — काम से पहले पक्का रेट, कोई मोलभाव नहीं।', '30 मिनट में स्थानीय व कुशल कारीगर आपके दरवाजे पर।', '7 दिन की कार्य संतुष्टि वारंटी व शून्य छुपा शुल्क।'],
          btnText: 'तुरंत मिस्त्री बुक करें'
        },
        '16-2': {
          code: '[16-2]', icon: '📋', title: 'Rental Ledger', hindiTitle: 'किराया बहीखाता व किरायेदार प्रबंधन',
          categoryTag: 'फाइनेंस व प्रॉपर्टी टूल', rating: '★ 4.9', reviewCount: '4,800+ मकान मालिक', metaBadge: '₹0 आजीवन मुफ्त',
          servicesTitle: 'डिजिटल बहीखाता मुख्य टूल्स:',
          services: [
            { text: '🧾 1-क्लिक WhatsApp किराया रसीद (PDF)', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
            { text: '⚡ ऑटो सब-मीटर बिजली यूनिट कैलकुलेटर', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
            { text: '👥 किरायेदार पहचान व सत्यापन रिकॉर्ड', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
            { text: '⏰ स्वचालित मासिक SMS / WhatsApp ड्यू अलर्ट', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
            { text: '📑 कानूनी रेंट एग्रीमेंट ड्राफ्ट व ई-हस्ताक्षर', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
          ],
          highlights: ['पुराने रजिस्टर व डायरी से मुक्ति — बिजली यूनिट डालते ही कुल बिल का ऑटो कैलकुलेशन।', 'मकान मालिक और किरायेदार दोनों के फोन पर रियल-टाइम हिसाब सिंक।', '100% सुरक्षित क्लाउड बैकअप व ऑटोमेटेड पेमेंट ट्रैकिंग।'],
          btnText: 'बहीखाता खोलें व रसीद बनाएं'
        },
        '16-3': {
          code: '[16-3]', icon: '🏠', title: 'Room & Flat Search', hindiTitle: 'कमरा, फ्लैट व पीजी खोज (0% दलाली)',
          categoryTag: 'रेंटल प्रॉपर्टी नेटवर्क', rating: '★ 4.9', reviewCount: '9,200+ छात्र व परिवार', metaBadge: '0% ब्रोकरेज',
          servicesTitle: 'किराए हेतु उपलब्ध विकल्प:',
          services: [
            { text: '🛏️ सिंगल कमरा / 1 RK (स्टूडेंट्स व जॉब)', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
            { text: '🏢 1 BHK / 2 BHK / 3 BHK फैमिली फ्लैट', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
            { text: '👩 Girls हॉस्टल व सेफ पीजी (सुरक्षा सहित)', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
            { text: '👨 Boys लॉज व मेस सुविधा', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
            { text: '🏬 दुकान व कमर्शियल ऑफिस स्पेस', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
          ],
          highlights: ['बिना किसी दलाल या ब्रोकर के सीधे असली मकान मालिक से बात करें।', 'सत्यापित रूम, फ्लैट और हॉस्टल की विश्वसनीय लिस्टिंग।', 'पानी, बिजली सब-मीटर, पार्किंग व गेट टाइमिंग की पहले से स्पष्ट जानकारी।'],
          btnText: 'सीधे मालिक से संपर्क करें'
        }
      }
    }
  };

  // Authoritative Registry API with Robust ID Normalization
  window.RM_CATALOG_REGISTRY = {
    getCategoryData: function (catId) {
      if (!catId) return null;
      var cleanId = String(catId).replace(/[^0-9]/g, '');
      if (!cleanId) return null;
      var intId = String(parseInt(cleanId, 10));
      return RM_CATALOG_REGISTRY[intId] || RM_CATALOG_REGISTRY[cleanId] || null;
    },
    getSubcategoryData: function (catId, subId) {
      var cat = this.getCategoryData(catId);
      if (!cat || !cat.subcategories) return null;
      var cleanSubId = String(subId).replace(/^[c]/, '');
      var numParts = String(subId).match(/\d+/g);
      var normSubId = numParts && numParts.length >= 2 ? (parseInt(numParts[0], 10) + '-' + parseInt(numParts[1], 10)) : cleanSubId;
      return cat.subcategories[cleanSubId] || cat.subcategories[normSubId] || null;
    },
    registerBatch: function (batchData) {
      if (typeof batchData === 'object') {
        Object.assign(RM_CATALOG_REGISTRY, batchData);
        if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
          setTimeout(window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog, 20);
        }
      }
    },
    getAllCategories: function () {
      return RM_CATALOG_REGISTRY;
    }
  };

  // Automatic Modular Extension Loader (Loads 5 extension batches dynamically)
  var extBatches = [
    'ext-batch-01-10.js',
    'ext-batch-11-20.js',
    'ext-batch-21-30.js',
    'ext-batch-31-40.js',
    'ext-batch-41-50.js'
  ];

  extBatches.forEach(function (file) {
    var s = document.createElement('script');
    s.src = '/js/universal-catalog/extensions/' + file;
    s.async = true;
    document.head.appendChild(s);
  });

})();
