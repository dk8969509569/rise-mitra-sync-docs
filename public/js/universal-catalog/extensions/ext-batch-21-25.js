/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION BATCH (21-25)
 * MODULE        : Official Google Play Store Standard Categories 21 to 25
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) MODULAR MICRO-BATCH
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-batch-21-25.js
 */

(function () {
  'use strict';

  // ==============================================================================
  // CATEGORY 21: NEWS & MAGAZINES (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat21 = {
    id: 'c21', catId: '21', number: '21.', num: '21.', icon: '📰',
    title: 'News & Magazines', category_name_en: 'News & Magazines', category_name_hi: 'दैनिक समाचार, क्षेत्रीय पत्रिकाएं व प्रेस मंच',
    subtitle: 'दैनिक समाचार, क्षेत्रीय पत्रिकाएं, कानूनी विज्ञप्ति व प्रेस मंच',
    rating: '★ 4.8 (19k+ पाठक)', trustBadge: 'Press Verified', supportBadge: '24x7 समाचार बुलेटिन',
    macroPillars: [
      { text: '📰 21-1: दैनिक क्षेत्रीय व राष्ट्रीय समाचार पत्र, ई-पेपर व बुलेटिन', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📜 21-2: आधिकारिक गजट, कानूनी नोटिस, टेंडर व प्रेस विज्ञप्ति', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '📚 21-3: मासिक पत्रिकाएं, प्रतियोगी करंट अफेयर्स व संपादकीय', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '21-1': {
        code: '[21-1]', sub_code: '21-1', slug: 'daily-news-epapers', icon: '📰',
        title: 'Daily News & E-Papers', hindiTitle: 'दैनिक समाचार पत्र व ई-पेपर',
        categoryTag: 'समाचार नेटवर्क', tag: 'समाचार नेटवर्क', rating: '★ 4.9', reviewCount: '10,800+ पाठक', metaBadge: 'सुबह 6 बजे डिलीवरी',
        servicesTitle: 'दैनिक समाचार सेवाएं:',
        services: [
          { text: '🗞️ प्रभात खबर, दैनिक भास्कर व जागरण होम डिलीवरी', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📱 डिजिटल ई-पेपर पीडीएफ व दैनिक हेडलाइंस अलर्ट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏙️ स्थानीय जिला व प्रखंड स्तरीय प्रामाणिक रिपोर्टिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📢 ग्राम पंचायत सूचना पट्ट व सामुदायिक अपडेट्स', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['सत्यापित पत्रकारों द्वारा निष्पक्ष व सटीक खबरें।', 'बिना फेक न्यूज के विश्वसनीय स्थानीय कवरेज।', 'घर बैठे मासिक हॉकर बिल भुगतान सुविधा।'],
        btnText: 'अखबार मंगाएं', chips: ['Sabhi', 'Daily Newspaper', 'E-Paper PDF', 'Local Reporting']
      },
      '21-2': {
        code: '[21-2]', sub_code: '21-2', slug: 'public-legal-notices', icon: '📜',
        title: 'Public & Legal Notices', hindiTitle: 'सार्वजनिक व कानूनी प्रेस विज्ञप्ति',
        categoryTag: 'प्रेस विज्ञप्ति', tag: 'प्रेस विज्ञप्ति', rating: '★ 4.8', reviewCount: '4,200+ प्रकाशन', metaBadge: 'डीआईपीआर अधिकृत',
        servicesTitle: 'सूचना एवं विज्ञापन सेवाएं:',
        services: [
          { text: '📑 अदालती समन, बेदखली व कानूनी सार्वजनिक सूचना', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🏛️ सरकारी टेंडर, नीलामी व शुद्धिपत्र विज्ञापन', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🪪 नाम परिवर्तन, दस्तावेज गुमशुदगी प्रेस घोषणा', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏢 कॉरपोरेट प्रेस रिलीज व वित्तीय ऑडिट रिपोर्ट', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: ['प्रमुख समाचार पत्रों में न्यूनतम सरकारी दर पर विज्ञापन प्रकाशन।', 'प्रकाशन के दिन ही अखबार की मूल प्रति व ई-क्लिपिंग उपलब्ध।', 'कानूनी रूप से वैध प्रारूप ड्राफ्टिंग सहायता।'],
        btnText: 'नोटिस प्रकाशित कराएं', chips: ['Sabhi', 'Court Summons', 'Govt Tender', 'Name Change Ad']
      },
      '21-3': {
        code: '[21-3]', sub_code: '21-3', slug: 'magazines-periodicals', icon: '📚',
        title: 'Magazines & Periodicals', hindiTitle: 'मासिक पत्रिकाएं व प्रतियोगी साहित्य',
        categoryTag: 'पत्रिका भंडार', tag: 'पत्रिका भंडार', rating: '★ 4.8', reviewCount: '3,900+ ग्राहक', metaBadge: 'नवीनतम अंक',
        servicesTitle: 'उपलब्ध मासिक पत्रिकाएं:',
        services: [
          { text: '🎯 प्रतियोगिता दर्पण, क्रॉनिकल व योजना कुरुक्षेत्र', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🌿 इंडिया टुडे, आउटलुक व बिजनेस वर्ल्ड', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📖 सरिता, गृहशोभा व कादंबिनी पारिवारिक पत्रिकाएं', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '👶 बच्चों की चंपक, नंदन व बालहंस स्पेशल अंक', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['घर बैठे वार्षिक सदस्यता पर 20% तक की छूट।', 'प्रतियोगी छात्रों हेतु मासिक समसामयिकी बंडल।', 'हर महीने की 1 तारीख को नया अंक दरवाजे पर।'],
        btnText: 'पत्रिका सब्सक्राइब करें', chips: ['Sabhi', 'Competition Darpan', 'Yojana Kurukshetra', 'Kids Monthly']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 22: PARENTING (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat22 = {
    id: 'c22', catId: '22', number: '22.', num: '22.', icon: '🍼',
    title: 'Parenting', category_name_en: 'Parenting', category_name_hi: 'शिशु देखभाल, मातृत्व पोषण व खिलौने',
    subtitle: 'शिशु देखभाल, मातृत्व पोषण, खिलौने व परिवार कल्याण केंद्र',
    rating: '★ 4.9 (16k+ अभिभावक)', trustBadge: 'Child Safety Certified', supportBadge: 'बाल कल्याण हेल्पलाइन',
    macroPillars: [
      { text: '👶 22-1: नवजात शिशु देखभाल, डायपर, प्राम व मातृत्व पोषण', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '🧸 22-2: सुरक्षित शैक्षिक खिलौने, बेबी वॉकर व बौद्धिक खेल', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '👩‍⚕️ 22-3: शिशु रोग विशेषज्ञ परामर्श, टीकाकरण व डेकेयर केंद्र', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subcategories: {
      '22-1': {
        code: '[22-1]', sub_code: '22-1', slug: 'newborn-maternity-essentials', icon: '👶',
        title: 'Newborn & Maternity Essentials', hindiTitle: 'शिशु सामग्री व मातृत्व पोषण',
        categoryTag: 'बेबी केयर', tag: 'बेबी केयर', rating: '★ 4.9', reviewCount: '8,200+ माताएं', metaBadge: '100% स्किन सेफ',
        servicesTitle: 'उपलब्ध शिशु उत्पाद:',
        services: [
          { text: '🧷 पैम्पर्स, मैमीपोको प्रीमियम डायपर व वेट वाइप्स', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '🧴 जॉनसन, हिमालया ऑर्गेनिक बेबी ऑयल व शैम्पू', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🍼 बीपीए-मुक्त फीडिंग बॉटल, स्टेरिलाइजर व टीथर', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🤱 प्रसूति आहार, लैक्टेशन पोषण व मैटरनिटी गाउन', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['शिशु की नाजुक त्वचा हेतु बाल रोग विशेषज्ञों द्वारा प्रमाणित सामग्री।', 'सर्टिफाइड ऑर्गेनिक फैब्रिक के आरामदायक कपड़े।', 'मातृत्व स्वास्थ्य हेतु प्रमाणित पौष्टिक सप्लीमेंट्स।'],
        btnText: 'बेबी किट ऑर्डर करें', chips: ['Sabhi', 'Premium Diapers', 'Organic Baby Oil', 'Feeding Bottles']
      },
      '22-2': {
        code: '[22-2]', sub_code: '22-2', slug: 'educational-toys-gear', icon: '🧸',
        title: 'Educational Toys & Gear', hindiTitle: 'सुरक्षित खिलौने व बेबी गियर',
        categoryTag: 'खिलौने व गियर', tag: 'खिलौने व गियर', rating: '★ 4.8', reviewCount: '5,100+ खरीदार', metaBadge: 'नॉन-टॉक्सिक सामग्री',
        servicesTitle: 'खिलौने व गियर विकल्प:',
        services: [
          { text: '🪵 सुरक्षित लकड़ी के मोंटेसरी पजल व ब्लॉक गेम्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🛴 बेबी वॉकर, प्राम, स्ट्रॉलर व राइड-ऑन कार', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🛏️ फोल्डेबल बेबी कॉट, पालना व मच्छरदानी नेट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🎨 बच्चों के बौद्धिक विकास व वर्णमाला साउंड टॉयज', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['शार्प किनारों से मुक्त सुरक्षित खिलौने।', 'मजबूत और टिकाऊ गियर जो वर्षों तक काम आएं।', 'आयु अनुसार बच्चों के मानसिक व शारीरिक विकास में सहायक।'],
        btnText: 'खिलौने व प्राम देखें', chips: ['Sabhi', 'Montessori Toys', 'Baby Stroller', 'Baby Cot Net']
      },
      '22-3': {
        code: '[22-3]', sub_code: '22-3', slug: 'pediatric-daycare-connect', icon: '👩‍⚕️',
        title: 'Pediatric & Daycare Connect', hindiTitle: 'शिशु स्वास्थ्य व डेकेयर केंद्र',
        categoryTag: 'शिशु स्वास्थ्य', tag: 'शिशु स्वास्थ्य', rating: '★ 4.9', reviewCount: '3,400+ परिवार', metaBadge: 'सत्यापित आया व नर्स',
        servicesTitle: 'बाल कल्याण सुविधाएं:',
        services: [
          { text: '💉 सरकारी व वैकल्पिक टीकाकरण चार्ट व ड्यू अलर्ट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🩺 शिशु रोग विशेषज्ञ (Pediatrician) क्लिनिक अपॉइंटमेंट', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏡 पृष्ठभूमि सत्यापित बेबीसिटर (आया) व जेन्टल नर्स', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '🏫 सीसीटीवी से लैस सुरक्षित डेकेयर व प्ले-स्कूल लिस्टिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['कामकाजी माता-पिता हेतु सुरक्षित व भरोसेमंद शिशु देखभाल।', 'टीकाकरण छूटने से बचाने हेतु स्वचालित फोन रिमाइंडर।', 'आपातकाल में नजदीकी शिशु आईसीयू अस्पतालों से सीधा संपर्क।'],
        btnText: 'डॉक्टर / डेकेयर खोजें', chips: ['Sabhi', 'Vaccine Chart', 'Pediatrician Clinic', 'Verified Nanny']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 23: PERSONALIZATION (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat23 = {
    id: 'c23', catId: '23', number: '23.', num: '23.', icon: '✨',
    title: 'Personalization', category_name_en: 'Personalization', category_name_hi: 'कस्टमाइज्ड गिफ्टिंग व इंटीरियर आर्ट',
    subtitle: 'कस्टमाइज्ड गिफ्टिंग, 3D एक्रेलिक नेमप्लेट व इंटीरियर आर्ट',
    rating: '★ 4.8 (17k+ ग्राहक)', trustBadge: 'Artisan Crafted', supportBadge: 'कस्टम डिजाइन रिव्यू',
    macroPillars: [
      { text: '🏠 23-1: 3D एक्रेलिक, ब्रास व एलईडी होम नेमप्लेट', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🎁 23-2: कस्टमाइज्ड फोटो मग, टी-शर्ट, कुशन व कीचेन', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '🖼️ 23-3: 3D वॉल डेकोर, कैनवास प्रिंट्स व कस्टमाइज्ड मोमेंटो', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subcategories: {
      '23-1': {
        code: '[23-1]', sub_code: '23-1', slug: '3d-nameplates-signages', icon: '🏠',
        title: '3D Nameplates & Signages', hindiTitle: '3D एक्रेलिक व एलईडी नेमप्लेट',
        categoryTag: 'होम साइनेज', tag: 'होम साइनेज', rating: '★ 4.9', reviewCount: '6,800+ घर', metaBadge: 'वॉटरप्रूफ एक्रेलिक',
        servicesTitle: 'उपलब्ध नेमप्लेट विकल्प:',
        services: [
          { text: '✨ गोल्डन मिरर फिनिश 3D एक्रेलिक नेमप्लेट', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '💡 बैक-लिट एलईडी वार्म लाइट होम नेमप्लेट्स', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🪵 नेचुरल टीकवुड व ब्रास मेटल नक्काशी प्लेट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏬 दुकान व कमर्शियल नियॉन लाइट ग्लो साइन बोर्ड', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['धूप और बारिश में 10 वर्षों तक रंग न उड़ने की वारंटी।', 'ऑर्डर से पहले व्हाट्सएप पर 3D डिजाइन प्रीव्यू।', 'स्क्रू और आसान इंस्टॉलेशन किट साथ में उपलब्ध।'],
        btnText: 'नेमप्लेट डिजाइन करें', chips: ['Sabhi', 'Golden Acrylic', 'LED Nameplate', 'Teakwood Brass']
      },
      '23-2': {
        code: '[23-2]', sub_code: '23-2', slug: 'customized-gifts-apparel', icon: '🎁',
        title: 'Customized Gifts & Apparel', hindiTitle: 'कस्टमाइज्ड गिफ्ट्स व टी-शर्ट प्रिंटिंग',
        categoryTag: 'पर्सनलाइज्ड गिफ्ट्स', tag: 'पर्सनलाइज्ड गिफ्ट्स', rating: '★ 4.8', reviewCount: '7,400+ ऑर्डर्स', metaBadge: 'एचडी सब्लिमेशन',
        servicesTitle: 'गिफ्टिंग उत्पाद:',
        services: [
          { text: '☕ मैजिक कलर चेंजिंग फोटो मग व सिपर बॉटल', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '👕 कॉटन टी-शर्ट व हुडीज पर डायरेक्ट प्रिंटिंग', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🛋️ फोटो कुशन, एलईडी लैंप व एक्रेलिक कीचेन', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🖊️ लेजर एनग्रेव्ड मेटल पेन, डायरी व वॉलेट कॉम्बो', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: ['जन्मदिन, सालगिरह और विदाई समारोह हेतु यादगार उपहार।', 'धोने पर भी प्रिंट खराब न होने वाली आधुनिक तकनीक।', 'कॉर्पोरेट बल्क ऑर्डर्स पर विशेष थोक दरें।'],
        btnText: 'गिफ्ट कस्टमाइज करें', chips: ['Sabhi', 'Magic Photo Mug', 'Custom T-Shirts', 'Laser Pen Diary']
      },
      '23-3': {
        code: '[23-3]', sub_code: '23-3', slug: 'wall-decor-trophies', icon: '🖼️',
        title: 'Wall Decor & Trophies', hindiTitle: 'वॉल आर्ट व कस्टमाइज्ड मोमेंटो',
        categoryTag: 'इंटीरियर आर्ट', tag: 'इंटीरियर आर्ट', rating: '★ 4.8', reviewCount: '3,200+ प्रोजेक्ट्स', metaBadge: 'प्रीमियम फिनिशिंग',
        servicesTitle: 'डेकोर व ट्रॉफी सेवाएं:',
        services: [
          { text: '🖼️ प्रीमियम कैनवास फ्रेम व मोजेक फोटो कोलाज', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏆 स्कूल, कॉलेज व खेल प्रतियोगिता हेतु शील्ड व ट्रॉफी', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🎖️ मेटल मेडल, रिबन व लेमिनेटेड सर्टिफिकेट फ्रेम', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🌿 3D मेटल वॉल आर्ट व लिविंग रूम हैंगिंग स्कल्प्चर', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['घर और दफ्तर की दीवारों को प्रीमियम आर्ट गैलरी लुक।', 'इवेंट के दिन से पहले सुरक्षित डिलीवरी की पक्की गारंटी।', 'हर बजट और आकार में अनुकूलन योग्य।'],
        btnText: 'वॉल आर्ट व ट्रॉफी चुनें', chips: ['Sabhi', 'Canvas Frames', 'Custom Trophies', 'Metal Medals']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 24: PHOTOGRAPHY (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat24 = {
    id: 'c24', catId: '24', number: '24.', num: '24.', icon: '📸',
    title: 'Photography', category_name_en: 'Photography', category_name_hi: 'फोटो स्टूडियो, 4K ड्रोन व वीडियोग्राफी',
    subtitle: 'फोटो स्टूडियो, 4K ड्रोन वीडियोग्राफी, प्री-वेडिंग व इवेंट शूट',
    rating: '★ 4.9 (24k+ ग्राहक)', trustBadge: 'Cinematography Certified', supportBadge: 'अत्याधुनिक कैमरा उपकरण',
    macroPillars: [
      { text: '👰 24-1: शादी, प्री-वेडिंग व सिनेमैटिक 4K वीडियोग्राफी', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '🚁 24-2: 4K ड्रोन एरियल शूटिंग, क्रेन व लाइव एलईडी वॉल', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🖼️ 24-3: फोटो स्टूडियो, पासपोर्ट फोटो व प्रीमियम कैनवर्ट एल्बम', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subcategories: {
      '24-1': {
        code: '[24-1]', sub_code: '24-1', slug: 'wedding-cinematic-shoots', icon: '👰',
        title: 'Wedding & Cinematic Shoots', hindiTitle: 'शादी व प्री-वेडिंग सिनेमैटिक शूट',
        categoryTag: 'वेडिंग फोटोग्राफी', tag: 'वेडिंग फोटोग्राफी', rating: '★ 4.9', reviewCount: '11,400+ शादियां', metaBadge: 'सोनी FX3 सिनेमैटिक',
        servicesTitle: 'उपलब्ध फोटोग्राफी सेवाएं:',
        services: [
          { text: '💍 प्री-वेडिंग लव स्टोरी शूट व सिनेमैटिक टीजर', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '📸 ट्रेडिशनल व कैंडिड फोटोग्राफी (अनलॉक्ड मोमेंट्स)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🎥 4K फुल एचडी वेडिंग फिल्म व हाइलाइट्स रील', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '💻 यूट्यूब व फेसबुक पर शादी का लाइव टेलीकास्ट', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['अनुभवी सिनेमैटोग्राफर्स द्वारा बॉलीवुड स्टाइल निर्देशन।', 'रॉ फुटेज और पूरी तरह कलर-ग्रेडेड फाइनल मास्टर फाइल।', 'समय पर संपादन और तय तिथि पर सुरक्षित हैंडओवर।'],
        btnText: 'फोटोग्राफर स्लॉट बुक करें', chips: ['Sabhi', 'Pre-Wedding Shoot', 'Candid Photos', '4K Film Video']
      },
      '24-2': {
        code: '[24-2]', sub_code: '24-2', slug: 'drone-live-coverage', icon: '🚁',
        title: 'Drone & Live Event Coverage', hindiTitle: '4K ड्रोन शूटिंग व लाइव कवरेज',
        categoryTag: 'ड्रोन वीडियोग्राफी', tag: 'ड्रोन वीडियोग्राफी', rating: '★ 4.9', reviewCount: '6,200+ इवेंट्स', metaBadge: 'डीजीसीए सर्टिफाइड पायलट',
        servicesTitle: 'एरियल व लाइव उपकरण:',
        services: [
          { text: '🚁 डीजेआई 4K एचडी ड्रोन एरियल वीडियोग्राफी', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏗️ 24 फीट जिब क्रेन व स्मूथ गिम्बल स्टेबलाइजर', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📺 पी-3/पी-4 आउटडोर एलईडी वॉल स्क्रीन सेटअप', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🎛️ मल्टी-कैमरा ऑनलाइन मिक्सर सेटअप (लाइव स्विचिंग)', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['विशाल जनसभाओं और भव्य शादियों का विहंगम हवाई दृश्य।', 'बिना झटकों के स्टेबल व सुपर शार्प 60 FPS रिकॉर्डिंग।', 'सरकारी नियमों और सुरक्षा मानकों का पूर्ण पालन।'],
        btnText: 'ड्रोन टीम बुक करें', chips: ['Sabhi', 'DJI 4K Drone', 'Jib Crane', 'LED Wall Setup']
      },
      '24-3': {
        code: '[24-3]', sub_code: '24-3', slug: 'studio-karizma-albums', icon: '🖼️',
        title: 'Studio & Karizma Photo Albums', hindiTitle: 'फोटो स्टूडियो व करिश्मा एल्बम',
        categoryTag: 'फोटो स्टूडियो', tag: 'फोटो स्टूडियो', rating: '★ 4.8', reviewCount: '6,800+ ग्राहक', metaBadge: 'वाटरप्रूफ नॉन-टीयर',
        servicesTitle: 'स्टूडियो व प्रिंट सेवाएं:',
        services: [
          { text: '🪪 5 मिनट में बायोमेट्रिक पासपोर्ट साइज फोटो', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📖 करिश्मा / फेदर टच प्रीमियम एचडी फोटो एल्बम', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '👶 बेबी फोटोशूट व मैटरनिटी स्टूडियो सेटअप', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🖼️ पुरानी ब्लैक एंड व्हाइट फोटो की कलर रीस्टोरेशन', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['जिंदगी भर सुरक्षित रहने वाले वाटरप्रूफ और लेमिनेटेड पेज।', 'आकर्षक लेदर व वेलवेट कवर बॉक्स के साथ एल्बम।', 'हाई-एंड स्टूडियो लाइटिंग व विभिन्न बैकड्रॉप्स उपलब्ध।'],
        btnText: 'स्टूडियो विजिट करें', chips: ['Sabhi', 'Passport Photos', 'Karizma Album', 'Baby Photoshoot']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 25: PRODUCTIVITY (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat25 = {
    id: 'c25', catId: '25', number: '25.', num: '25.', icon: '⚡',
    title: 'Productivity', category_name_en: 'Productivity', category_name_hi: 'दस्तावेज ड्राफ्टिंग, जेरोक्स व ऑफिस टूल्स',
    subtitle: 'हाई-स्पीड जेरोक्स, लीगल ड्राफ्टिंग, एफिडेविट व ऑफिस टूल्स',
    rating: '★ 4.9 (38k+ नागरिक व व्यवसायी)', trustBadge: 'Legal & Office Certified', supportBadge: 'तुरंत दस्तावेज तैयार',
    macroPillars: [
      { text: '📜 25-1: शपथ पत्र (Affidavit), एग्रीमेंट व कानूनी दस्तावेज ड्राफ्टिंग', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '📄 25-2: हाई-स्पीड जेरोक्स, कलर प्रिंट, लैमिनेशन व स्पाइरल बाइंडिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '💻 25-3: हिंदी/अंग्रेजी टाइपिंग, ऑनलाइन ई-स्टाम्प व पीडीएफ टूल्स', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '25-1': {
        code: '[25-1]', sub_code: '25-1', slug: 'affidavits-legal-drafting', icon: '📜',
        title: 'Affidavits & Legal Drafting', hindiTitle: 'शपथ पत्र, रेंट एग्रीमेंट व लीगल डीड',
        categoryTag: 'कानूनी ड्राफ्टिंग', tag: 'कानूनी ड्राफ्टिंग', rating: '★ 4.9', reviewCount: '15,400+ दस्तावेज', metaBadge: 'बार काउंसिल प्रमाणित',
        servicesTitle: 'दस्तावेज ड्राफ्टिंग सेवाएं:',
        services: [
          { text: '📑 प्रथम श्रेणी कार्यपालक दंडाधिकारी शपथ पत्र', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🏠 मकान व दुकान रेंट एग्रीमेंट ड्राफ्ट (ई-हस्ताक्षर)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🤝 पार्टनरशिप, पावर ऑफ अटॉर्नी व वसीयतनामा ड्राफ्ट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '⚖️ नोटरी पब्लिक मुहर व सत्यापन सहायता', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['कोर्ट-कचहरी के अनावश्यक चक्करों से मुक्ति—तय कानूनी फॉर्मेट।', 'सरकारी ई-स्टाम्प पेपर के साथ पूर्णतः तैयार दस्तावेज।', 'अनुभवी अधिवक्ताओं द्वारा प्रारूप की सटीक जांच।'],
        btnText: 'शपथ पत्र बनवाएं', chips: ['Sabhi', 'Affidavit Draft', 'Rent Agreement', 'Notary Attest']
      },
      '25-2': {
        code: '[25-2]', sub_code: '25-2', slug: 'high-speed-print-xerox', icon: '📄',
        title: 'High-Speed Print & Xerox', hindiTitle: 'हाई-स्पीड प्रिंट, जेरोक्स व बाइंडिंग',
        categoryTag: 'दस्तावेज छपाई', tag: 'दस्तावेज छपाई', rating: '★ 4.8', reviewCount: '16,200+ ग्राहक', metaBadge: 'थोक दर उपलब्ध',
        servicesTitle: 'छपाई व बाइंडिंग सेवाएं:',
        services: [
          { text: '📑 थोक ब्लैक/व्हाइट व कलर फोटोकॉपी (75 GSM)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📚 कॉलेज प्रोजेक्ट, थिसिस हार्डकवर व स्पाइरल बाइंडिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🪪 आवश्यक पहचान व वोटर पीवीसी कार्ड प्रिंटिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🛡️ हॉट रोलर लेमिनेशन व वॉटरप्रूफिंग', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: ['व्हाट्सएप पर फाइल भेजकर बिना रुके तैयार प्रिंट प्राप्त करें।', 'कोचिंग नोट्स और किताबों की थोक छपाई पर विशेष छूट।', 'अल्ट्रा-फास्ट 100 पेज प्रति मिनट की औद्योगिक प्रिंटिंग स्पीड।'],
        btnText: 'प्रिंट ऑर्डर भेजें', chips: ['Sabhi', 'Bulk Xerox', 'Thesis Binding', 'PVC Cards']
      },
      '25-3': {
        code: '[25-3]', sub_code: '25-3', slug: 'typing-bureau-estamps', icon: '💻',
        title: 'Typing Bureau & E-Stamps', hindiTitle: 'हिंदी टाइपिंग व ई-स्टाम्प सुविधा',
        categoryTag: 'ऑफिस सेवाएं', tag: 'ऑफिस सेवाएं', rating: '★ 4.9', reviewCount: '6,800+ सेवाएं', metaBadge: 'शून्य टाइपिंग अशुद्धि',
        servicesTitle: 'टाइपिंग व ई-स्टाम्प टूल्स:',
        services: [
          { text: '📜 ₹10 से ₹500 तक का तत्काल सरकारी ई-स्टाम्प पेपर', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '⌨️ कृतिदेव, मंगल व इनस्क्रिप्ट हिंदी/अंग्रेजी टाइपिंग', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🗂️ हस्तलिखित पन्नों से वर्ड व एक्सेल डेटा एंट्री', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📥 पीडीएफ कम्प्रेशन, मर्जिंग व डिजिटल हस्ताक्षर', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: ['कोर्ट, सरकारी दफ्तर व टेंडर हेतु मान्य औपचारिक भाषा।', 'तुरंत ऑनलाइन ई-स्टाम्प जनरेशन।', 'गोपनीय सरकारी व व्यावसायिक दस्तावेजों की पूर्ण सुरक्षा।'],
        btnText: 'टाइपिंग व स्टाम्प लें', chips: ['Sabhi', 'E-Stamp Paper', 'Hindi Typing', 'Data Entry']
      }
    }
  };

  // ==============================================================================
  // REGISTRATION MATRIX: 21 TO 25 (MULTI-KEY SAFE LOOKUP)
  // ==============================================================================
  var BATCH_21_25 = {
    '21': cat21, '021': cat21, 'c21': cat21,
    '22': cat22, '022': cat22, 'c22': cat22,
    '23': cat23, '023': cat23, 'c23': cat23,
    '24': cat24, '024': cat24, 'c24': cat24,
    '25': cat25, '025': cat25, 'c25': cat25
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_21_25);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_21_25);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_21_25);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_21_25);
      }
    });
  }
})();
