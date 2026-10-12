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

  // ==============================================================================
  // 1. HARD INVARIANT DEFINITIONS (100% ZEL - ZERO ELEMENT LOSS)
  // ==============================================================================

  // CATEGORY 14: HEALTH & FITNESS (CANONICAL SLOT 14)
  var RM_HEALTH_FITNESS_14 = {
    id: 'c14',
    number: '14.',
    icon: '🧘',
    title: 'Health & Fitness',
    subtitle: 'स्वस्थ मन, देसी अखाड़ा, योग, प्राकृतिक चिकित्सा व स्वास्थ्य लाभ',
    rating: '★ 4.9 (19k+ साधक व परिवार)',
    trustBadge: 'Ayush & Health Verified',
    supportBadge: '24x7 स्वास्थ्य परामर्श',
    macroPillars: [
      { text: '🏋️ 14-1: देसी अखाड़ा, व्यायामशाला व फिटनेस ट्रेनिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.12)' },
      { text: '🌿 14-2: आयुर्वेदिक नाड़ी वैद्य, प्राकृतिक उपचार व योग', color: '#34d399', bg: 'rgba(52, 211, 153, 0.12)' },
      { text: '🩺 14-3: दैनिक स्वास्थ्य डायरी (BP/Sugar) व देशी पोषण किट', color: '#facc15', bg: 'rgba(250, 204, 21, 0.12)' }
    ],
    subcategories: {
      '14-1': {
        code: '[14-1]', icon: '🏋️', title: 'Desi Akhada & Fitness', hindiTitle: 'देसी अखाड़ा, व्यायामशाला व जिम पास',
        categoryTag: 'फिटनेस व कसरत', rating: '★ 4.8', reviewCount: '7,800+ युवा व पहलवान', metaBadge: 'प्रमाणित उस्ताद व कोच',
        servicesTitle: 'उपलब्ध फिटनेस सुविधाएं:',
        services: [
          { text: '🏋️ पारंपरिक मिट्टी अखाड़ा व कुश्ती अभ्यास', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
          { text: '💪 आधुनिक जिम मेंबरशिप व वेट ट्रेनिंग', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
          { text: '🧘 सूर्य नमस्कार व प्राणायाम सत्र', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
          { text: '🥗 देसी डाइट चार्ट व प्राकृतिक पोषण परामर्श', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
        ],
        highlights: [
          'स्थानीय अखाड़ों और आधुनिक जिमों की 1-क्लिक मासिक मेंबरशिप।',
          'अनुभवी उस्तादों और प्रमाणित कोचों की देखरेख में सुरक्षित अभ्यास।',
          'बिना सप्लीमेंट के शुद्ध प्राकृतिक खान-पान और देशी कसरत।'
        ],
        btnText: 'जिम व अखाड़ा पास लें'
      },
      '14-2': {
        code: '[14-2]', icon: '🌿', title: 'Ayurvedic Nadi Vaidya', hindiTitle: 'आयुर्वेदिक नाड़ी वैद्य व प्राकृतिक चिकित्सा',
        categoryTag: 'आयुर्वेद व वेलनेस', rating: '★ 4.9', reviewCount: '6,500+ रोगी लाभान्वित', metaBadge: 'प्रमाणित नाड़ी वैद्य',
        servicesTitle: 'पारंपरिक चिकित्सा परामर्श:',
        services: [
          { text: '🩺 नाड़ी परीक्षण व वात-पित्त-कफ संतुलन निदान', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
          { text: '🌿 शुद्ध जड़ी-बूटी व क्वाथ (काढ़ा) परामर्श', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
          { text: '💆 पंचकर्म, शिरोधारा व मालिश थेरेपी', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
          { text: '🍵 मौसमी खान-पान व प्राकृतिक उपचार सलाह', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
        ],
        highlights: [
          'प्राचीन भारतीय नाड़ी विज्ञान से रोग के मूल कारण की पहचान।',
          'शून्य साइड इफेक्ट्स—पूर्णतः प्राकृतिक और पारंपरिक जड़ी-बूटी उपचार।',
          'घर बैठे अनुभवी वैद्यों से परामर्श स्लॉट बुकिंग।'
        ],
        btnText: 'वैद्य परामर्श बुक करें'
      },
      '14-3': {
        code: '[14-3]', icon: '🩺', title: 'Health Ledger & Nutrition', hindiTitle: 'स्वास्थ्य बहीखाता (BP/Sugar) व देशी पोषण',
        categoryTag: 'स्वास्थ्य ट्रैकर', rating: '★ 4.9', reviewCount: '9,400+ दैनिक साधक', metaBadge: 'सॉवरेन हेल्थ रिकॉर्ड',
        servicesTitle: 'स्वास्थ्य निगरानी व पोषण विकल्प:',
        services: [
          { text: '🧘 दैनिक ऑनलाइन/पार्क योग व ध्यान सत्र', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
          { text: '📈 बीपी, शुगर व वजन दैनिक स्वास्थ्य डायरी', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
          { text: '🥛 शुद्ध देशी गाय का A2 दूध व सत्तू किट', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
          { text: '📑 पारिवारिक मेडिकल हिस्ट्री सुरक्षित वॉल्ट', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
        ],
        highlights: [
          'दैनिक बीपी और शुगर का आसान डिजिटल रिकॉर्ड—डॉक्टर को 1-क्लिक में दिखाएं।',
          'मानसिक शांति और तनाव मुक्ति हेतु प्राणायाम और ध्यान मार्गदर्शन।',
          '100% गोपनीय और सुरक्षित ऑफलाइन-फर्स्ट स्वास्थ्य बहीखाता।'
        ],
        btnText: 'स्वास्थ्य लेज़र शुरू करें'
      }
    }
  };

  // CATEGORY 15: HOUSE & HOME (CANONICAL SLOT 15)
  var RM_HOUSE_HOME_15 = {
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
          { text: '🚿 प्लंबर (नल, मोटर, पाइप लीकेज)', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
          { text: '⚡ इलेक्ट्रीशियन (शॉर्ट सर्किट, वायरिंग)', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
          { text: '🪚 बढ़ई / कारपेंटर (फर्नीचर, ताला, किवाड़)', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
          { text: '🎨 पेंटर (वॉल पुट्टी, डिस्टेंपर, वॉटरप्रूफ)', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' },
          { text: '🧱 राजमिस्त्री (टाइल फिटिंग, प्लास्टर, चिनाई)', bg: 'rgba(52,211,153,0.12)', c: '#34d399' }
        ],
        highlights: [
          'तय और पारदर्शी रेट कार्ड — काम से पहले पक्का रेट, कोई मोलभाव नहीं।',
          '30 मिनट में स्थानीय व कुशल कारीगर आपके दरवाजे पर।',
          '7 दिन की कार्य संतुष्टि वारंटी व शून्य छुपा शुल्क।'
        ],
        btnText: 'तुरंत मिस्त्री बुक करें'
      },
      '15-2': {
        code: '[15-2]', icon: '📋', title: 'Rental Ledger', hindiTitle: 'किराया बहीखाता व किरायेदार प्रबंधन',
        categoryTag: 'फाइनेंस व प्रॉपर्टी टूल', rating: '★ 4.9', reviewCount: '4,800+ मकान मालिक', metaBadge: '₹0 आजीवन मुफ्त',
        servicesTitle: 'डिजिटल बहीखाता मुख्य टूल्स:',
        services: [
          { text: '🧾 1-क्लिक WhatsApp किराया रसीद (PDF)', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
          { text: '⚡ ऑटो सब-मीटर बिजली यूनिट कैलकुलेटर', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
          { text: '👥 किरायेदार पहचान व पुलिस सत्यापन रिकॉर्ड', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
          { text: '⏰ स्वचालित मासिक SMS / WhatsApp ड्यू अलर्ट', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
          { text: '📑 कानूनी रेंट एग्रीमेंट ड्राफ्ट व ई-हस्ताक्षर', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
        ],
        highlights: [
          'पुराने रजिस्टर व डायरी से मुक्ति — बिजली यूनिट डालते ही कुल बिल का ऑटो कैलकुलेशन।',
          'मकान मालिक और किरायेदार दोनों के फोन पर रियल-टाइम हिसाब सिंक।',
          '100% सुरक्षित क्लाउड बैकअप व ऑटोमेटेड पेमेंट ट्रैकिंग।'
        ],
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
        highlights: [
          'बिना किसी दलाल या ब्रोकर के सीधे असली मकान मालिक से बात करें।',
          'सत्यापित रूम, फ्लैट और हॉस्टल की विश्वसनीय लिस्टिंग।',
          'पानी, बिजली सब-मीटर, पार्किंग व गेट टाइमिंग की पहले से स्पष्ट जानकारी।'
        ],
        btnText: 'सीधे मालिक से संपर्क करें'
      }
    }
  };

  // CATEGORY 16: LIBRARIES & DEMO (CANONICAL SLOT 16)
  var RM_LIBRARIES_DEMO_16 = {
    id: 'c16',
    number: '16.',
    icon: '📚',
    title: 'Libraries & Demo',
    subtitle: 'प्रतियोगी छात्र एसी केबिन डेस्क, पुरानी किताबें व स्टेशनरी',
    rating: '★ 4.9 (15k+ छात्र व पाठक)',
    trustBadge: 'Student Verified Network',
    supportBadge: '24x7 शांत अध्ययन केंद्र',
    macroPillars: [
      { text: '🔕 16-1: साउंडप्रूफ एसी केबिन डेस्क व 5G वाईफाई', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.12)' },
      { text: '📖 16-2: यूपीएससी/एसएससी पुरानी किताबें 50% छूट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.12)' },
      { text: '📦 16-3: कॉपियां व स्कूल स्टेशनरी थोक मिल रेट', color: '#facc15', bg: 'rgba(250, 204, 21, 0.12)' }
    ],
    subcategories: {
      '16-1': {
        code: '[16-1]', icon: '🔕', title: 'AC Study Library Seat', hindiTitle: 'शांत एसी स्टडी लाइब्रेरी सीट बुकिंग',
        categoryTag: 'लाइब्रेरी नेटवर्क', rating: '★ 4.9', reviewCount: '5,800+ छात्र', metaBadge: 'पिन-ड्रॉप साइलेंस',
        servicesTitle: 'लाइब्रेरी सुविधाएं:',
        services: [
          { text: '🪑 पर्सनल केबिन सीट व आरामदायक एर्गोनोमिक कुर्सी', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
          { text: '⚡ 24 घंटे इनवर्टर बैकअप व चिल्ड एसी', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
          { text: '📶 5G सुपरफास्ट वाईफाई व आरओ मिनरल वाटर', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
          { text: '🔒 पर्सनल लॉकर व सीसीटीवी सुरक्षा', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
        ],
        highlights: [
          'निकटतम स्टडी सीट तुरंत बुक करें—दिन व रात की अलग शिफ्ट।',
          'शोरगुल से मुक्त 100% शांत और अध्ययन के लिए अनुकूल माहौल।',
          'डेली, वीकली और मंथली डिस्काउंटेड पास उपलब्ध।'
        ],
        btnText: 'लाइब्रेरी सीट बुक करें'
      },
      '16-2': {
        code: '[16-2]', icon: '📖', title: 'Old Books Buy/Sell Market', hindiTitle: 'प्रतियोगी पुरानी किताबें बाज़ार (50% ऑफ)',
        categoryTag: 'पुस्तक बाज़ार', rating: '★ 4.9', reviewCount: '6,400+ पाठक', metaBadge: 'सत्यापित एडिशन',
        servicesTitle: 'उपलब्ध प्रतियोगी पुस्तकें:',
        services: [
          { text: '🏛️ UPSC, State PCS व SSC सॉल्व्ड पेपर्स', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
          { text: '🔬 NEET, JEE व इंजीनियरिंग संदर्भ पुस्तकें', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
          { text: '📚 कक्षा 6 से 12वीं तक NCERT कॉम्बो सेट्स', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
          { text: '🔄 पुरानी किताबें बेचें व नई से एक्सचेंज करें', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
        ],
        highlights: [
          'टॉपर्स की हाइलाइटेड व बिना फटी प्रामाणिक किताबें आधी कीमत पर।',
          'अपनी पुरानी किताबें घर बैठे अच्छे दामों पर बेचें।',
          'डोरस्टेप होम डिलीवरी व कैश ऑन डिलीवरी उपलब्ध।'
        ],
        btnText: 'किताबें खोजें व बेचें'
      },
      '16-3': {
        code: '[16-3]', icon: '📦', title: 'Bulk School Stationery', hindiTitle: 'स्कूल व कॉलेज स्टेशनरी थोक सप्लाई',
        categoryTag: 'थोक स्टेशनरी', rating: '★ 4.8', reviewCount: '3,200+ संस्थान व छात्र', metaBadge: 'थोक मिल भाव',
        servicesTitle: 'थोक स्टेशनरी उत्पाद:',
        services: [
          { text: '📓 क्लासमेट कॉपियों के 12/24 पीस बंडल', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
          { text: '🖊️ जेल व बॉल पेन थोक बॉक्स (50 पेन पैक)', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
          { text: '📐 ज्योमेट्री बॉक्स, चार्ट पेपर व फाइल फोल्डर', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
          { text: '🎨 साइंस प्रोजेक्ट किट्स व आर्ट मटेरियल्स', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
        ],
        highlights: [
          'सीधे पेपर मिल और डिस्ट्रीब्यूटर रेट पर भारी बचत।',
          'स्कूलों, कोचिंग संस्थानों व छात्रों के लिए थोक कॉम्बो पैक।',
          '24 घंटे के अंदर सुरक्षित डिलीवरी।'
        ],
        btnText: 'स्टेशनरी ऑर्डर करें'
      }
    }
  };

  // ==============================================================================
  // 2. MASTER REGISTRY OBJECT (CANONICAL 01 TO 50 WITH INTACT RICH DATA)
  // ==============================================================================

  var RM_CATALOG_REGISTRY = {
    // CATEGORY 01: ART & DESIGN
    '1': {
      id: 'c1', number: '01.', icon: '🎨', title: 'Art & Design',
      subtitle: 'फ्लेक्स बोर्ड, डिजिटल कार्ड, बिल बुक व विनाइल प्रिंटिंग',
      rating: '★ 4.9 (18k+ व्यवसायी)', trustBadge: 'Physical Print Guaranteed', supportBadge: '24x7 डिजाइन सपोर्ट',
      macroPillars: [
        { text: '📱 01-1: त्योहार पोस्टर व डिजिटल स्मार्ट कार्ड', color: '#86efac', bg: 'rgba(34, 197, 94, 0.14)' },
        { text: '🪧 01-2: फ्रंट शॉप मुख्य फ्लेक्स बोर्ड व ग्लो-साइन', color: '#fde047', bg: 'rgba(234, 179, 8, 0.14)' },
        { text: '📑 01-3: प्रीमियम विजिटिंग कार्ड व कार्बनलेस बिल बुक', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
      ],
      subcategories: {
        '1-1': {
          code: '[01-1]', icon: '📱', title: 'Festival Post & Digital Card', hindiTitle: 'दैनिक त्योहार पोस्टर व डिजिटल कार्ड',
          categoryTag: 'डिजिटल ब्रांडिंग', rating: '★ 4.9', reviewCount: '8,900+ व्यापारी', metaBadge: '1-क्लिक शेयर',
          servicesTitle: 'उपलब्ध ब्रांडिंग सेवाएं:',
          services: [
            { text: '🖼️ दुकान नाम व फोटो सहित दैनिक त्योहार पोस्टर्स', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '📇 1-टैप कॉल/व्हाट्सएप डिजिटल विजिटिंग कार्ड', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🏷️ ऑफर बैनर व स्थानीय प्रचार पोस्टर्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '✨ एचडी सोशल मीडिया स्टेटस व रील्स टेम्प्लेट', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
          ],
          highlights: ['व्यापार को डिजिटल पहचान देने वाले आकर्षक दैनिक पोस्टर्स।', 'बिना किसी ग्राफिक डिजाइनर के खर्च के तुरंत निर्माण।', 'WhatsApp पर ग्राहकों को सीधे भेजने योग्य।'],
          btnText: 'डिजिटल कार्ड बनाएं'
        },
        '1-2': {
          code: '[01-2]', icon: '🪧', title: 'Flex Board & Printing', hindiTitle: 'लोहा फ्रेम फ्लेक्स बोर्ड व विनाइल',
          categoryTag: 'फिजिकल प्रिंटिंग', rating: '★ 4.9', reviewCount: '4,400+ दुकानें', metaBadge: 'लोहे का मजबूत फ्रेम',
          servicesTitle: 'बोर्ड व विनाइल प्रिंटिंग विकल्प:',
          services: [
            { text: '🪧 फ्रंट शॉप मुख्य फ्लेक्स बोर्ड (लोहा फ्रेम सहित)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '💡 एलईडी पिक्सल ग्लो-साइन बोर्ड निर्माण', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🎨 दुकान के शीशे पर विनाइल स्टिकर पेस्टिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '📐 फोल्डेबल रोल-अप स्टैंडी व कैनोपी टेंट', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['बारिश और धूप में सालों साल चलने वाला हैवी विनाइल व फ्लेक्स।', 'दुकान पर आकर सही नाप व इंस्टॉलेशन टीम सपोर्ट।', 'पक्का वेल्डिंग फ्रेम व बिजली फिटिंग गारंटी।'],
          btnText: 'फ्लेक्स बोर्ड ऑर्डर करें'
        },
        '1-3': {
          code: '[01-3]', icon: '📑', title: 'Visiting Card & Bill Books', hindiTitle: 'विजिटिंग कार्ड, बिल बुक व रबर स्टैम्प',
          categoryTag: 'स्टेशनरी प्रिंटिंग', rating: '★ 4.8', reviewCount: '5,200+ व्यापारी', metaBadge: '3-कॉपी कार्बनलेस',
          servicesTitle: 'व्यापारिक स्टेशनरी निर्माण:',
          services: [
            { text: '💳 1000 प्रीमियम मैट/ग्लॉस कोटेड विजिटिंग कार्ड्स', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🧾 3-कॉपी कार्बनलेस पक्की दुकान बिल बुक', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🔘 ऑटो-इंक सेल्फ-इंकिंग रबर स्टैम्प (मुहर)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '✉️ फर्म लेटरहेड, लिफाफे व पक्के वाउचर', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['हाथ से लिखने पर नीचे अपने आप छपने वाली ओरिजिनल कार्बनलेस शीट।', 'जीएसटी नंबर और पते के साथ सरकारी मानकों अनुसार फॉर्मेटिंग।', 'दुकान के काउंटर तक पक्की डिलीवरी।'],
          btnText: 'बिल बुक व कार्ड छपवाएं'
        }
      }
    },

    // CATEGORY 02: AUTO & VEHICLES
    '2': {
      id: 'c2', number: '02.', icon: '🚗', title: 'Auto & Vehicles',
      subtitle: 'ऑन-साइट पंचर, बैटरी जंपस्टार्ट, चालान व पुरानी गाड़ी बाजार',
      rating: '★ 4.9 (27k+ वाहन चालक)', trustBadge: 'Real On-Road Assist', supportBadge: '24x7 इमरजेंसी टोइंग',
      macroPillars: [
        { text: '🛞 02-1: 15-मिनट ऑन-साइट पंचर व बैटरी जंपस्टार्ट', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
        { text: '🚦 02-2: ई-चालान जांच, निपटान व फ़ास्टैग रिचार्ज', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
        { text: '🏍️ 02-3: 0% दलाली पुरानी बाइक, कार व ट्रैक्टर बाजार', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
      ],
      subcategories: {
        '2-1': {
          code: '[02-1]', icon: '🛞', title: 'Roadside Assistance (RSA)', hindiTitle: 'इमरजेंसी ऑन-साइट पंचर व टोइंग',
          categoryTag: 'ऑन-रोड सहायता', rating: '★ 4.8', reviewCount: '14,200+ रेस्क्यू', metaBadge: '15 मिनट में पहुंच',
          servicesTitle: 'उपलब्ध आपातकालीन सेवाएं:',
          services: [
            { text: '🛞 ऑन-साइट ट्यूबलेस पंचर व हवा रीफिल', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🔋 डेड बैटरी जंपस्टार्ट केबल व नई बैटरी', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '⛽ हाईवे इमरजेंसी 2-लीटर पेट्रोल/डीजल डिलीवरी', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '🚜 24x7 क्रेन टोचन व फ्लैटबेड रिकवरी वैन', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['सड़क पर गाड़ी खराब होने पर तुरंत निकटतम मिस्त्री रवाना।', 'पारदर्शी दूरी अनुसार तय फिक्स सरकारी रेट।', 'रात में भी सुरक्षित ऑन-रोड सहायता गारंटी।'],
          btnText: 'इमरजेंसी मदद बुलाएं'
        },
        '2-2': {
          code: '[02-2]', icon: '🚦', title: 'RTO Challan & FASTag', hindiTitle: 'ई-चालान जांच, निपटान व फ़ास्टैग',
          categoryTag: 'आरटीओ सेवाएं', rating: '★ 4.9', reviewCount: '8,400+ गाड़ियां', metaBadge: '1-क्लिक समाधान',
          servicesTitle: 'आरटीओ व फ़ास्टैग सेवाएं:',
          services: [
            { text: '📋 पेंडिंग ई-चालान जांच व कोर्ट निपटान सहायता', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '💳 सभी बैंकों का तत्काल फ़ास्टैग रिचार्ज', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '📄 वाहन प्रदूषण जांच (PUC) व फिटनेस रिन्यूअल', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '🛡️ 1-क्लिक बाइक/कार थर्ड पार्टी इंश्योरेंस', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
          ],
          highlights: ['ट्रैफिक पुलिस चालान पर भारी छूट व लोक अदालत निपटान गाइड।', 'बिना आरटीओ ऑफिस के चक्कर काटे घर बैठे समाधान।', 'तुरंत डिजिटल रसीद व एसएमएस पुष्टि।'],
          btnText: 'चालान चेक करें'
        },
        '2-3': {
          code: '[02-3]', icon: '🏍️', title: 'Used Vehicles Buy/Sell', hindiTitle: 'पुरानी बाइक, कार व ट्रैक्टर (0% दलाली)',
          categoryTag: 'वाहन बाजार', rating: '★ 4.9', reviewCount: '4,500+ सौदे', metaBadge: 'डायरेक्ट मालिक-ग्राहक',
          servicesTitle: 'उपलब्ध सर्टिफाइड वाहन:',
          services: [
            { text: '🛵 पुरानी बाइक व स्कूटी सीधी मालिक से खरीद', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '🚗 प्रमाणित पुरानी फैमिली कारें (इंजन वारंटी)', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🚜 किसान पुराना ट्रैक्टर व कृषि ट्रॉली बाज़ार', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '📑 आरटीओ वाहन ट्रांसफर व एनओसी दस्तावेज सहायता', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['बिना किसी दलाल या बिचौलिए के सीधे वाहन मालिक से बात करें।', 'चोरी व एक्सीडेंटल हिस्ट्री की 100% तकनीकी जांच।', 'फाइनेंस व आसान किश्तों की सुविधा उपलब्ध।'],
          btnText: 'वाहन बाजार देखें'
        }
      }
    },

    // CATEGORY 03: BEAUTY
    '3': {
      id: 'c3', number: '03.', icon: '✂️', title: 'Beauty',
      subtitle: 'घर पर फेशियल, दुल्हन मेकअप, मेहंदी व नाई टोकन',
      rating: '★ 4.8 (21k+ संतुष्ट ग्राहक)', trustBadge: '100% Disposable Kit', supportBadge: 'होम सर्विस उपलब्ध',
      macroPillars: [
        { text: '💅 03-1: केवल महिलाओं हेतु घर पर फेशियल व रिका वैक्सिंग', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
        { text: '👰 03-2: एचडी ब्राइडल शादी मेकअप व मारवाड़ी मेहंदी', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
        { text: '💈 03-3: मोहल्ला नाई दुकान जीरो-वेटिंग डिजिटल टोकन', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
      ],
      subcategories: {
        '3-1': {
          code: '[03-1]', icon: '💅', title: 'Salon at Home (Ladies Only)', hindiTitle: 'घर पर सैलून सेवा (केवल महिलाएं)',
          categoryTag: 'होम सैलून', rating: '★ 4.9', reviewCount: '11,400+ महिलाएं', metaBadge: 'डिस्पोजेबल किट',
          servicesTitle: 'लोकप्रिय ब्यूटी सेवाएं:',
          services: [
            { text: '✨ रिका वैक्सिंग, थ्रेडिंग व अंडरआर्म केयर', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
            { text: '💆 ओ3+ व गोल्ड ग्लो फेशियल घर पर', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '💇 हेयर स्पा, डैंड्रफ ट्रीटमेंट व हेयर कट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🦶 पेडीक्योर व मैनीक्योर रिलैक्सिंग स्पा', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
          ],
          highlights: ['100% वन-टाइम डिस्पोजेबल किट—पूर्ण स्वच्छता की गारंटी।', 'प्रशिक्षित और बैकग्राउंड-वेरिफाइड महिला ब्यूटीशियन।', 'पारदर्शी रेट—कोई यात्रा शुल्क या हिडन चार्ज नहीं।'],
          btnText: 'होम सैलून बुक करें'
        },
        '3-2': {
          code: '[03-2]', icon: '👰', title: 'Bridal Makeup & Mehndi', hindiTitle: 'ब्राइडल एचडी मेकअप व दुल्हन मेहंदी',
          categoryTag: 'वेडिंग ब्यूटी', rating: '★ 4.9', reviewCount: '5,800+ दुल्हनें', metaBadge: 'एचडी / एयरब्रश',
          servicesTitle: 'शादी एवं समारोह पैकेज:',
          services: [
            { text: '👰 एचडी व एयरब्रश ब्राइडल शादी मेकअप', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
            { text: '🌿 मारवाड़ी, अरेबिक व पोट्रेट दुल्हन मेहंदी', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '💃 प्री-वेडिंग ग्रूमिंग व सगाई मेकअप पैकेज', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🥻 साड़ी ड्रेपिंग, हेयर स्टाइलिंग व ब्राइडल ज्वेलरी', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
          ],
          highlights: ['शादी के दिन वेन्यू या घर पर पूरी टीम के साथ ऑन-टाइम पहुंच।', 'इंटरनेशनल ब्रांड्स (MAC, Huda Beauty) के ऑथेंटिक प्रोडक्ट्स।', 'शगुन की शुद्ध प्राकृतिक हर्बल मेहंदी—गहरा लाल रंग।'],
          btnText: 'ब्राइडल पैकेज चुनें'
        },
        '3-3': {
          code: '[03-3]', icon: '💈', title: 'Men Grooming & Barber', hindiTitle: 'नाई दुकान डिजिटल टोकन व ग्रूमिंग',
          categoryTag: 'मेंस ग्रूमिंग', rating: '★ 4.8', reviewCount: '8,200+ पुरुष', metaBadge: 'जीरो-वेटिंग टोकन',
          servicesTitle: 'दुकान ग्रूमिंग सुविधाएं:',
          services: [
            { text: '⏱️ दुकान पर बिना लाइन लगे सीधा डिजिटल टोकन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '✂️ नया सीलबंद ब्लेड व स्टेरलाइज्ड कैंची हेयरकट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🧔 बियर्ड शेपिंग, स्टाइलिंग व चारकोल डी-टैन', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '💆 ठंडे तेल की हेड मसाज व फेस स्टीम', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['सैलून में फालतू बैठने से मुक्ति—घर से टोकन लेकर ठीक समय पर पहुंचे।', 'हर ग्राहक के सामने नया ब्लेड खोलने का सख्त नियम।', 'किफायती मोहल्ला रेट पर वीआईपी ग्रूमिंग।'],
          btnText: 'डिजिटल टोकन लें'
        }
      }
    },

    // SLOTS 14, 15, 16 BOUND DETERMINISTICALLY
    '14': RM_HEALTH_FITNESS_14,
    'c14': RM_HEALTH_FITNESS_14,
    '15': RM_HOUSE_HOME_15,
    'c15': RM_HOUSE_HOME_15,
    '16': RM_LIBRARIES_DEMO_16,
    'c16': RM_LIBRARIES_DEMO_16
  };

  // ==============================================================================
  // 3. AUTHORITATIVE ENGINE API WITH DUAL-COMPATIBILITY MAPPING
  // ==============================================================================

  window.RM_CATALOG_REGISTRY = {
    getCategoryData: function (catId) {
      if (!catId) return null;
      var cleanId = String(catId).replace(/[^0-9]/g, '');
      if (!cleanId) return null;
      var intId = String(parseInt(cleanId, 10));

      // DUAL COMPATIBILITY: Canonical 14 Health & Fitness, 15 House & Home, 16 Libraries & Demo
      if (intId === '14') return RM_HEALTH_FITNESS_14;
      if (intId === '15') return RM_HOUSE_HOME_15;
      if (intId === '16') return RM_LIBRARIES_DEMO_16;

      return RM_CATALOG_REGISTRY[intId] || RM_CATALOG_REGISTRY[cleanId] || null;
    },

    getSubcategoryData: function (catId, subId) {
      var cat = this.getCategoryData(catId);
      if (!cat || !cat.subcategories) return null;
      var cleanSubId = String(subId).replace(/^[cg]/, '');
      var numParts = String(subId).match(/\d+/g);
      var normSubId = numParts && numParts.length >= 2 ? (parseInt(numParts[0], 10) + '-' + parseInt(numParts[1], 10)) : cleanSubId;

      // Direct lookup or canonical fallbacks for shifted IDs
      if (cat.subcategories[cleanSubId]) return cat.subcategories[cleanSubId];
      if (cat.subcategories[normSubId]) return cat.subcategories[normSubId];

      // Backward compatible fallbacks
      if (normSubId === '15-1' && cat.subcategories['14-1']) return cat.subcategories['14-1'];
      if (normSubId === '15-2' && cat.subcategories['14-2']) return cat.subcategories['14-2'];
      if (normSubId === '15-3' && cat.subcategories['14-3']) return cat.subcategories['14-3'];
      if (normSubId === '16-1' && cat.subcategories['15-1']) return cat.subcategories['15-1'];
      if (normSubId === '16-2' && cat.subcategories['15-2']) return cat.subcategories['15-2'];
      if (normSubId === '16-3' && cat.subcategories['15-3']) return cat.subcategories['15-3'];

      return null;
    },

    registerBatch: function (batchData) {
      if (typeof batchData === 'object') {
        Object.assign(RM_CATALOG_REGISTRY, batchData);

        // Enforce Canonical Invariants (Cat 14, 15, 16)
        RM_CATALOG_REGISTRY['14'] = RM_HEALTH_FITNESS_14;
        RM_CATALOG_REGISTRY['c14'] = RM_HEALTH_FITNESS_14;
        RM_CATALOG_REGISTRY['15'] = RM_HOUSE_HOME_15;
        RM_CATALOG_REGISTRY['c15'] = RM_HOUSE_HOME_15;
        RM_CATALOG_REGISTRY['16'] = RM_LIBRARIES_DEMO_16;
        RM_CATALOG_REGISTRY['c16'] = RM_LIBRARIES_DEMO_16;

        if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
          setTimeout(window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog, 20);
        }
      }
    },

    getAllCategories: function () {
      return RM_CATALOG_REGISTRY;
    }
  };

  // Automatic Modular Extension Loader
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
