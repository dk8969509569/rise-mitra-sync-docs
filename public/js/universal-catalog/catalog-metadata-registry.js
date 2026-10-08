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
    // CATEGORY 01: AGRICULTURE & FARMING
    '1': {
      id: 'c1',
      number: '01.',
      icon: '🌾',
      title: 'Agriculture & Farming',
      subtitle: 'कृषि, बीज, खाद व किसान बाजार',
      rating: '★ 4.9 (18k+ किसान)',
      trustBadge: 'Kisan Verified Network',
      supportBadge: 'कृषि मित्र 24x7',
      macroPillars: [
        { text: '🌱 01-1: प्रमाणित बीज व जैविक खाद केंद्र', color: '#86efac', bg: 'rgba(34, 197, 94, 0.14)' },
        { text: '🚜 01-2: ट्रैक्टर व आधुनिक कृषि यंत्र रेंटल', color: '#fde047', bg: 'rgba(234, 179, 8, 0.14)' },
        { text: '📈 01-3: दैनिक थोक मंडी भाव व डायरेक्ट फसल बिक्री', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
      ],
      subcategories: {
        '1-1': {
          code: '[01-1]', icon: '🌱', title: 'Seeds & Fertilizers', hindiTitle: 'प्रमाणित उन्नत बीज व जैविक खाद',
          categoryTag: 'कृषि इनपुट', rating: '★ 4.9', reviewCount: '4,200+ किसान', metaBadge: '100% सरकारी प्रमाणित',
          servicesTitle: 'उपलब्ध प्रमाणित कृषि सामग्री:',
          services: [
            { text: '🌾 हाइब्रिड धान व गेहूं बीज', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🧪 नीम लेपित यूरिया व डीएपी', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🪱 वर्मीकम्पोस्ट जैविक खाद', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '🐛 कीटनाशक व फफूंदनाशक', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
          ],
          highlights: ['न्यूनतम सरकारी दर पर पक्के बिल के साथ आपूर्ति।', 'मृदा परीक्षण रिपोर्ट अनुसार सही खाद चयन की सलाह।', 'पंचायत स्तर पर सुरक्षित होम डिलीवरी उपलब्ध।'],
          btnText: 'बीज व खाद बुक करें'
        },
        '1-2': {
          code: '[01-2]', icon: '🚜', title: 'Agri Equipment Rental', hindiTitle: 'ट्रैक्टर, रोटावेटर व कृषि यंत्र',
          categoryTag: 'मशीनरी रेंटल', rating: '★ 4.8', reviewCount: '2,900+ किसान', metaBadge: 'घंटे के आधार पर रेंट',
          servicesTitle: 'किराए हेतु आधुनिक मशीनरी:',
          services: [
            { text: '🚜 45-55 HP ट्रैक्टर बुकिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '⚙️ रोटावेटर व कल्टीवेटर', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🌾 हार्वेस्टर व रीपर मशीन', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '💧 सोलर बोरवेल व पंप सेट', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['बिना बिचौलिए सीधे नजदीकी ट्रैक्टर मालिक से संपर्क।', 'खेत की जुताई व कटाई हेतु तुरंत ऑपरेटर सहित बुकिंग।', 'पारदर्शी प्रति घंटा/प्रति एकड़ तय रेट कार्ड।'],
          btnText: 'यंत्र रेंट पर बुक करें'
        },
        '1-3': {
          code: '[01-3]', icon: '📈', title: 'Mandi Rates & Sales', hindiTitle: 'दैनिक थोक मंडी भाव व सीधी बिक्री',
          categoryTag: 'मंडी व्यापार', rating: '★ 4.9', reviewCount: '11,000+ किसान', metaBadge: '0% बिचौलिया कमीशन',
          servicesTitle: 'दैनिक कृषि व्यापार सुविधाएं:',
          services: [
            { text: '📊 पंडरा व प्रमुख मंडी भाव', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🚛 थोक खरीदार संपर्क सूत्र', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '❄️ कोल्ड स्टोरेज स्पेस बुकिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '⚖️ इलेक्ट्रॉनिक वजन व पारदर्शी भुगतान', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
          ],
          highlights: ['अपनी फसल का फोटो और मात्रा डालकर सीधे थोक व्यापारी से बोली लगवाएं।', 'लाइव मंडी भाव अपडेट रोज सुबह 8 बजे।', 'सीधे बैंक खाते में सुरक्षित भुगतान की सुविधा।'],
          btnText: 'लाइव मंडी भाव देखें'
        }
      }
    },

    // CATEGORY 02: EDUCATION & CAREER
    '2': {
      id: 'c2',
      number: '02.',
      icon: '📚',
      title: 'Education & Career',
      subtitle: 'शिक्षा, कोचिंग, ट्यूशन व लाइब्रेरी',
      rating: '★ 4.8 (24k+ छात्र)',
      trustBadge: 'Verified Mentors',
      supportBadge: 'करियर हेल्पलाइन',
      macroPillars: [
        { text: '📖 02-1: प्रतियोगी परीक्षा कोचिंग व टेस्ट सीरीज', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
        { text: '🏠 02-2: सत्यापित होम ट्यूटर व व्यक्तिगत शिक्षक', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
        { text: '🔕 02-3: डिजिटल लाइब्रेरी सीट बुकिंग व वाईफाई', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
      ],
      subcategories: {
        '2-1': {
          code: '[02-1]', icon: '📖', title: 'Competitive Coaching', hindiTitle: 'UPSC, JSSC, SSC व बैंकिंग कोचिंग',
          categoryTag: 'प्रतियोगी परीक्षा', rating: '★ 4.8', reviewCount: '6,200+ समीक्षाएं', metaBadge: 'डेमो क्लास उपलब्ध',
          servicesTitle: 'उपलब्ध प्रमुख कोर्स व बैच:',
          services: [
            { text: '🏛️ JPSC व JSSC स्पेशल बैच', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '🎯 SSC CGL / CHSL व रेलवे', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '📝 साप्ताहिक ऑफलाइन टेस्ट सीरीज', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '📚 प्रिंटेड स्टडी मटेरियल व नोट्स', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['अनुभवी शिक्षकों द्वारा पाठ्यक्रम अनुसार सटीक तैयारी।', 'नियमित डाउट क्लियरिंग व करंट अफेयर्स मैगज़ीन।', 'गरीब व मेधावी छात्रों के लिए छात्रवृत्ति छूट।'],
          btnText: 'कोचिंग व बैच खोजें'
        },
        '2-2': {
          code: '[02-2]', icon: '🏠', title: 'Home Tutors', hindiTitle: 'सत्यापित होम ट्यूटर (कक्षा 1 से 12)',
          categoryTag: 'व्यक्तिगत शिक्षण', rating: '★ 4.9', reviewCount: '3,800+ अभिभावक', metaBadge: 'बैकग्राउंड वेरिफाइड',
          servicesTitle: 'उपलब्ध विषय विशेषज्ञ ट्यूटर:',
          services: [
            { text: '📐 गणित व विज्ञान (Class 9-12)', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🗣️ स्पोकन इंग्लिश व ग्रामर', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '💻 कंप्यूटर व कोडिंग ट्यूटर', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '👶 प्राइमरी ऑल-सब्जेक्ट शिक्षक', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
          ],
          highlights: ['घर बैठे 2 दिन का फ्री ट्रायल क्लास।', 'महिला ट्यूटर की विशेष सुविधा व पहचान सत्यापन।', 'मासिक प्रोग्रेस टेस्ट रिपोर्ट सीधे अभिभावक को।'],
          btnText: 'ट्यूटर से संपर्क करें'
        },
        '2-3': {
          code: '[02-3]', icon: '🔕', title: 'Study Library', hindiTitle: 'शांत स्टडी लाइब्रेरी व रीडिंग रूम',
          categoryTag: 'लाइब्रेरी नेटवर्क', rating: '★ 4.9', reviewCount: '8,400+ छात्र', metaBadge: 'AC व हाई-स्पीड वाईफाई',
          servicesTitle: 'लाइब्रेरी सुविधाएं:',
          services: [
            { text: '🪑 पर्सनल केबिन सीट बुकिंग', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '⚡ 24 घंटे पावर बैकअप व AC', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '📶 100 Mbps फाइबर इंटरनेट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🔒 लॉकर सुविधा व CCTV सुरक्षा', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['लालपुर, रातू रोड, हरमू, डोरंडा में निकटतम सीट चुनें।', 'फ्लेक्सिबल शिफ्ट: 4 घंटे, 8 घंटे या 24 घंटे।', 'पिन-ड्रॉप साइलेंट माहौल अध्ययन के लिए अनुकूल।'],
          btnText: 'सीट बुक करें'
        }
      }
    },

    // CATEGORY 03: HEALTH & MEDICAL
    '3': {
      id: 'c3',
      number: '03.',
      icon: '🏥',
      title: 'Health & Medical',
      subtitle: 'दवा, क्लिनिक, डॉक्टर व एम्बुलेंस',
      rating: '★ 4.9 (31k+ मरीज)',
      trustBadge: 'Arogya Certified',
      supportBadge: 'इमरजेंसी 24x7',
      macroPillars: [
        { text: '🚑 03-1: 24x7 इमरजेंसी एम्बुलेंस व ऑक्सीजन सेवा', color: '#f87171', bg: 'rgba(239, 68, 68, 0.14)' },
        { text: '🩺 03-2: विशेषज्ञ डॉक्टर अपॉइंटमेंट व क्लिनिक', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
        { text: '💊 03-3: 20% छूट पर वास्तविक दवा होम डिलीवरी', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
      ],
      subcategories: {
        '3-1': {
          code: '[03-1]', icon: '🚑', title: 'Emergency Ambulance', hindiTitle: '24x7 आपातकालीन एम्बुलेंस व ऑक्सीजन',
          categoryTag: 'आपातकालीन सेवा', rating: '★ 4.9', reviewCount: '5,100+ मरीज', metaBadge: '15 मिनट में रिस्पांस',
          servicesTitle: 'आपातकालीन वाहन विकल्प:',
          services: [
            { text: '🚑 बेसिक लाइफ सपोर्ट (BLS)', bg: 'rgba(239,68,68,0.15)', c: '#f87171' },
            { text: '🏥 आईसीयू व वेंटिलेटर एम्बुलेंस', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '💨 मेडिकल ऑक्सीजन सिलेंडर डिलीवरी', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '🩸 निकटतम ब्लड बैंक डोनर संपर्क', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
          ],
          highlights: ['GPS ट्रैकिंग के साथ नजदीकी उपलब्ध एम्बुलेंस तुरंत रवाना।', 'पारदर्शी सरकारी रेट कार्ड, आपातकाल में कोई अतिरिक्त वसूली नहीं।', 'ट्रेन्ड पैरामेडिकल स्टाफ व प्राथमिक उपचार किट।'],
          btnText: 'इमरजेंसी एम्बुलेंस बुलाएं'
        },
        '3-2': {
          code: '[03-2]', icon: '🩺', title: 'Doctor Appointments', hindiTitle: 'विशेषज्ञ डॉक्टर क्लिनिक अपॉइंटमेंट',
          categoryTag: 'चिकित्सा परामर्श', rating: '★ 4.8', reviewCount: '9,400+ मरीज', metaBadge: 'शून्य कतार समय',
          servicesTitle: 'उपलब्ध विशेषज्ञ विभाग:',
          services: [
            { text: '❤️ हृदय रोग (Cardiologist)', bg: 'rgba(239,68,68,0.15)', c: '#f87171' },
            { text: '🦴 हड्डी व जोड़ (Orthopedic)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '👶 शिशु व बाल रोग (Pediatrician)', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '👩 स्त्री व प्रसूति (Gynecologist)', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
          ],
          highlights: ['अस्पतालों में घंटों लाइन में खड़े रहने से मुक्ति, कन्फर्म्ड टोकन।', 'डिजिटल प्रिस्क्रिप्शन सीधे आपके फोन पर।', 'घर से ब्लड सैंपल कलेक्शन व 6 घंटे में ऑनलाइन लैब रिपोर्ट।'],
          btnText: 'डॉक्टर अपॉइंटमेंट लें'
        },
        '3-3': {
          code: '[03-3]', icon: '💊', title: 'Pharmacy & Medicine', hindiTitle: 'सत्यापित दवा डिलीवरी (20% छूट)',
          categoryTag: 'फार्मेसी सेवा', rating: '★ 4.9', reviewCount: '16,000+ ग्राहक', metaBadge: '100% असली दवाएं',
          servicesTitle: 'फार्मेसी व दवा सुविधाएं:',
          services: [
            { text: '📸 पर्ची (Rx) फोटो अपलोड कर ऑर्डर', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
            { text: '📉 सभी दवाओं पर 15-20% फ्लैट छूट', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
            { text: '⚡ 2 घंटे में सुपरफास्ट लोकल डिलीवरी', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
            { text: '👴 बीपी, शुगर मासिक दवा ऑटो रिफिल', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
          ],
          highlights: ['केवल अधिकृत और लाइसेंसधारी मेडिकल स्टोर से आपूर्ति।', 'दवा का पक्का जीएसटी बिल व एक्सपायरी जांच प्रमाण।', 'ऑनलाइन या कैश ऑन डिलीवरी (COD) का विकल्प।'],
          btnText: 'दवा ऑर्डर करें'
        }
      }
    },

    // CATEGORY 16: HOUSE & HOME (GOLDEN BLUEPRINT - 100% INTACT SSOT)
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
          code: '[16-1]',
          icon: '🛠️',
          title: 'Mistry & Home Repair',
          hindiTitle: 'मिस्त्री व दैनिक घरेलू मरम्मत सेवाएं',
          categoryTag: 'होम मेंटेनेंस',
          rating: '★ 4.8',
          reviewCount: '2,400+ समीक्षाएं',
          metaBadge: '⚡ 30 मिनट विज़िट',
          servicesTitle: 'उपलब्ध प्रमाणित कारीगर सेवाएं:',
          services: [
            { text: '🚰 प्लंबर (नल, मोटर, पाइप लीकेज)', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
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
        '16-2': {
          code: '[16-2]',
          icon: '📋',
          title: 'Rental Ledger',
          hindiTitle: 'किराया बहीखाता व किरायेदार प्रबंधन',
          categoryTag: 'फाइनेंस व प्रॉपर्टी टूल',
          rating: '★ 4.9',
          reviewCount: '4,800+ मकान मालिक',
          metaBadge: '₹0 आजीवन मुफ्त',
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
        '16-3': {
          code: '[16-3]',
          icon: '🏠',
          title: 'Room & Flat Search',
          hindiTitle: 'कमरा, फ्लैट व पीजी खोज (0% दलाली)',
          categoryTag: 'रेंटल प्रॉपर्टी नेटवर्क',
          rating: '★ 4.9',
          reviewCount: '9,200+ छात्र व परिवार',
          metaBadge: '0% ब्रोकरेज',
          servicesTitle: 'किराए हेतु उपलब्ध विकल्प:',
          services: [
            { text: '🛏️ सिंगल कमरा / 1 RK (स्टूडेंट्स व जॉब)', bg: 'rgba(56,189,248,0.12)', c: '#38bdf8' },
            { text: '🏢 1 BHK / 2 BHK / 3 BHK फैमिली फ्लैट', bg: 'rgba(52,211,153,0.12)', c: '#34d399' },
            { text: '👩 Girls हॉस्टल व सेफ पीजी (CCTV व सुरक्षा)', bg: 'rgba(244,114,182,0.12)', c: '#f472b6' },
            { text: '👨 Boys लॉज व मेस सुविधा', bg: 'rgba(250,204,21,0.12)', c: '#facc15' },
            { text: '🏬 दुकान व कमर्शियल ऑफिस स्पेस', bg: 'rgba(192,132,252,0.12)', c: '#c084fc' }
          ],
          highlights: [
            'बिना किसी दलाल या ब्रोकर के सीधे असली मकान मालिक से बात करें।',
            'लालपुर, डोरंडा, बरियातू, हीनू, कांके, मोराबादी के सत्यापित रूम व फ्लैट।',
            'पानी, बिजली सब-मीटर, पार्किंग व गेट टाइमिंग की पहले से स्पष्ट जानकारी।'
          ],
          btnText: 'सीधे मालिक से संपर्क करें'
        }
      }
    }
  };

  // Authoritative Registry API with Modular Extension Support
  window.RM_CATALOG_REGISTRY = {
    getCategoryData: function (catId) {
      var cleanId = String(catId).replace(/^[c]/, '');
      return RM_CATALOG_REGISTRY[cleanId] || null;
    },
    getSubcategoryData: function (catId, subId) {
      var cat = this.getCategoryData(catId);
      if (!cat || !cat.subcategories) return null;
      var cleanSubId = String(subId).replace(/^[c]/, '');
      return cat.subcategories[cleanSubId] || null;
    },
    registerBatch: function (batchData) {
      if (typeof batchData === 'object') {
        Object.assign(RM_CATALOG_REGISTRY, batchData);
        // Automatically sweep catalog cards whenever a new extension registers
        if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
          setTimeout(window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog, 20);
        }
      }
    },
    getAllCategories: function () {
      return RM_CATALOG_REGISTRY;
    }
  };
})();
