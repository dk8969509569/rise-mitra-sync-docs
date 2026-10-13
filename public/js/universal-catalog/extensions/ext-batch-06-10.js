/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION BATCH (06-10)
 * MODULE        : Official Google Play Store Standard Categories 06 to 10
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) MODULAR MICRO-BATCH
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-batch-06-10.js
 */

(function () {
  'use strict';

  // ==============================================================================
  // CATEGORY 06: COMICS (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat06 = {
    id: 'c06', catId: '6', number: '06.', num: '06.', icon: '🦸',
    title: 'Comics', category_name_en: 'Comics', category_name_hi: 'चित्रकथा, बाल साहित्य व कॉमिक्स',
    subtitle: 'पौराणिक चित्रकथाएं, सचित्र बाल कहानियां व कॉमिक्स बुक्स',
    rating: '★ 4.8 (12k+ पाठक)', trustBadge: 'Creative Network', supportBadge: 'बाल व युवा मंच',
    macroPillars: [
      { text: '📚 06-1: रामायण, महाभारत व छत्रपति शिवाजी सचित्र ग्राफिक कॉमिक्स', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '📖 06-2: पंचतंत्र, जातक कथाएं व तेनालीराम 5-बुक्स कॉम्बो बॉक्स पार्सल', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🎨 06-3: क्षेत्रीय हास्य व्यंग्य स्ट्रिप्स, दैनिक सुडोकू व वर्ग पहेली', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '06-1': {
        code: '[06-1]', sub_code: '06-1', slug: 'pauranik-graphic-comics', icon: '📚',
        title: 'Pauranik Graphic Comics', hindiTitle: 'पौराणिक ग्राफिक कॉमिक्स पास',
        categoryTag: 'ग्राफिक कॉमिक्स', tag: 'ग्राफिक कॉमिक्स', rating: '★ 4.9', reviewCount: '5,800+ पाठक', metaBadge: 'एचडी आर्टवर्क',
        servicesTitle: 'कॉमिक्स संग्रह:',
        services: [
          { text: '⚔️ रामायण, महाभारत व अमर गाथा सचित्र डिजिटल कॉमिक्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🛡️ छत्रपति शिवाजी, महाराणा प्रताप वीर गाथा कॉमिक्स', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📱 फोन व टैबलेट पर रंगीन फुल-स्क्रीन रीडिंग मोड', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: ['बच्चों को भारतीय संस्कृति और इतिहास से जोड़ने वाला सचित्र माध्यम।', 'शानदार भारतीय चित्रकारों द्वारा तैयार जीवंत आर्टवर्क।', 'मासिक अनलिमिटेड रीडिंग पास।'],
        btnText: 'कॉमिक्स पढ़ें', chips: ['Sabhi', 'Ramayan Comics', 'Shivaji Comics', 'Graphic Novels']
      },
      '06-2': {
        code: '[06-2]', sub_code: '06-2', slug: 'kids-illustrated-books', icon: '📖',
        title: 'Kids Illustrated Books Combo', hindiTitle: 'सचित्र बाल कहानियां प्रिंटेड कॉम्बो बॉक्स',
        categoryTag: 'प्रिंटेड बाल पुस्तकें', tag: 'प्रिंटेड बाल पुस्तकें', rating: '★ 4.9', reviewCount: '4,400+ अभिभावक', metaBadge: '5-बुक्स कॉम्बो',
        servicesTitle: 'पुस्तक कॉम्बो बॉक्स:',
        services: [
          { text: '📦 पंचतंत्र, जातक कथाएं, तेनालीराम व बीरबल 5-पुस्तकों का सेट', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '👶 मोटे आर्ट पेपर पर रंगीन चित्र जो फटे नहीं', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🚚 घर बैठे सुरक्षित होम डिलीवरी व कैश ऑन डिलीवरी', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['मोबाइल स्क्रीन से दूर बच्चों में पढ़ने की स्वस्थ आदत का विकास।', 'सरल हिंदी भाषा और शिक्षाप्रद नैतिक कहानियां।', 'बच्चों के जन्मदिन हेतु सबसे उपयोगी उपहार।'],
        btnText: 'कॉम्बो बॉक्स मंगाएं', chips: ['Sabhi', 'Panchatantra Box', 'Bedtime Stories', 'Doorstep Parcel']
      },
      '06-3': {
        code: '[06-3]', sub_code: '06-3', slug: 'daily-humor-puzzles', icon: '🎨',
        title: 'Daily Humor & Comic Strips', hindiTitle: 'दैनिक हास्य स्ट्रिप्स व पहेलियां',
        categoryTag: 'हास्य व्यंग्य', tag: 'हास्य व्यंग्य', rating: '★ 4.8', reviewCount: '2,900+ पाठक', metaBadge: 'दैनिक नई स्ट्रिप्स',
        servicesTitle: 'मनोरंजक फीचर्स:',
        services: [
          { text: '😄 क्षेत्रीय सामाजिक हास्य-व्यंग्य कार्टून स्ट्रिप्स', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🧩 बच्चों की चित्र पहेली (Find the Difference)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏆 साप्ताहिक कॉमिक्स क्विज व मेडल प्रतियोगिता', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['तनाव भरे दिन में चेहरे पर मुस्कान लाने वाला स्वस्थ मनोरंजन।', 'पारिवारिक हास्य—सभी के साथ मिलकर पढ़ने योग्य।', 'दैनिक ताजा कार्टून स्ट्रिप्स।'],
        btnText: 'हास्य स्ट्रिप्स देखें', chips: ['Sabhi', 'Humor Strips', 'Picture Puzzle', 'Kids Contest']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 07: COMMUNICATION (OFFICIAL PLAY STORE TAXONOMY - CANONICAL FIXED)
  // ==============================================================================
  var cat07 = {
    id: 'c07', catId: '7', number: '07.', num: '07.', icon: '💬',
    title: 'Communication', category_name_en: 'Communication', category_name_hi: 'संचार, मर्चेंट डायरेक्टरी व साइबर सुरक्षा',
    subtitle: 'सत्यापित व्यापारी डायरेक्टरी, व्हाट्सएप ब्रॉडकास्टर व साइबर फ्रॉड शील्ड',
    rating: '★ 4.9 (29k+ नागरिक)', trustBadge: 'Verified Directory', supportBadge: '24x7 साइबर सहायता',
    macroPillars: [
      { text: '📞 07-1: भौतिक रूप से जाँचे गए स्थानीय दुकानदार व मिस्त्री संपर्क', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📢 07-2: त्योहारों पर ग्राहकों को सीधे व्हाट्सएप पर ऑफर व डिस्काउंट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🛡️ 07-3: फर्जी कॉल, लॉटरी व बिजली बिल ठगी से बचाव का 24x7 अलर्ट', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subcategories: {
      '07-1': {
        code: '[07-1]', sub_code: '07-1', slug: 'verified-merchant-directory', icon: '📞',
        title: 'Verified Merchant Directory', hindiTitle: 'सत्यापित स्थानीय व्यापारी व कारीगर संपर्क',
        categoryTag: 'स्थानीय डायरेक्टरी', tag: 'स्थानीय डायरेक्टरी', rating: '★ 4.9', reviewCount: '16,200+ नागरिक', metaBadge: 'भौतिक सत्यापन',
        servicesTitle: 'डायरेक्टरी सुविधाएं:',
        services: [
          { text: '🔍 मोहल्ले के इलेक्ट्रीशियन, प्लंबर व मिस्त्री फोन नंबर (1-टैप कॉल)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏪 राशन, हार्डवेयर व मेडिकल दुकानों के सीधे व्हाट्सएप नंबर', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '✅ दुकान का ग्रीन-टिक भौतिक सत्यापन व वास्तविक पता', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['बिना फोन में नंबर सेव किए सीधे व्हाट्सएप और कॉल की सुविधा।', 'फर्जी बिचौलियों से मुक्ति—सीधे असली कारीगर या दुकानदार से बात।', 'दूरी के अनुसार निकटतम सेवा प्रदाता की खोज।'],
        btnText: 'डायरेक्टरी देखें', chips: ['Sabhi', 'Mistri Contacts', 'Shop Numbers', 'Verified Green Tick']
      },
      '07-2': {
        code: '[07-2]', sub_code: '07-2', slug: 'whatsapp-promo-broadcaster', icon: '📢',
        title: 'WhatsApp Promo Broadcaster', hindiTitle: 'दुकान व्हाट्सएप ऑफर ब्रॉडकास्टर',
        categoryTag: 'व्यापार संचार', tag: 'व्यापार संचार', rating: '★ 4.8', reviewCount: '7,800+ व्यापारी', metaBadge: '1-क्लिक ब्रॉडकास्ट',
        servicesTitle: 'ब्रॉडकास्ट टूल्स:',
        services: [
          { text: '📲 त्योहारों व नए स्टॉक की सूचना 1000+ नियमित ग्राहकों को भेजें', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏷️ आकर्षक इमेज, डिस्काउंट कूपन व रेट लिस्ट टेम्पलेट्स', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🔒 सुरक्षित व एंटी-स्पैम अधिकृत व्हाट्सएप बिजनेस प्रोटोकॉल', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['स्थानीय दुकानदारों की बिक्री 3 गुना बढ़ाने का सबसे सीधा साधन।', 'ग्राहक के फोन पर सीधे डिजिटल पर्चा पहुंचे बिना छपाई के खर्च के।', 'आसान और तुरंत डिलीवरी।'],
        btnText: 'ऑफर संदेश भेजें', chips: ['Sabhi', 'Promo Broadcast', 'Festival Offers', 'Customer Retention']
      },
      '07-3': {
        code: '[07-3]', sub_code: '07-3', slug: 'cyber-fraud-spam-shield', icon: '🛡️',
        title: 'Cyber Fraud & Spam Shield', hindiTitle: 'साइबर फ्रॉड व ऑनलाइन ठगी सुरक्षा शील्ड',
        categoryTag: 'साइबर सुरक्षा', tag: 'साइबर सुरक्षा', rating: '★ 4.9', reviewCount: '18,500+ सुरक्षित नागरिक', metaBadge: '24x7 अलर्ट बुलेटिन',
        servicesTitle: 'सुरक्षा सेवाएं:',
        services: [
          { text: '🚨 बिजली बिल कटने, बैंक लॉटरी व फर्जी एपीके फाइल अलर्ट बुलेटिन', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📞 संदिग्ध फोन नंबर व बैंक खाते की त्वरित रिपोर्ट व जांच', bg: 'rgba(239,68,68,0.15)', c: '#f87171' },
          { text: '👨‍💼 साइबर ठगी होने पर स्थानीय थाने व हेल्पलाइन 1930 सहायता गाइड', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' }
        ],
        highlights: ['बुजुर्गों और आम नागरिकों को डिजिटल ठगों से बचाने वाली ढाल।', 'नए-नए फ्रॉड के तरीकों की तत्काल हिंदी में जानकारी।', 'सुरक्षित बैंकिंग और यूपीआई उपयोग मार्गदर्शन।'],
        btnText: 'साइबर शील्ड देखें', chips: ['Sabhi', 'Fraud Alert', 'Helpline 1930', 'Spam Check', 'Safe Banking']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 08: DATING & MATRIMONY (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat08 = {
    id: 'c08', catId: '8', number: '08.', num: '08.', icon: '💍',
    title: 'Dating', category_name_en: 'Dating', category_name_hi: 'वैवाहिक संबंध, रिश्ते व पारिवारिक मैचमेकिंग',
    subtitle: 'सत्यापित वैवाहिक संबंध, रिश्ते व पारिवारिक मैचमेकिंग',
    rating: '★ 4.8 (16k+ परिवार)', trustBadge: '100% Verified Profiles', supportBadge: 'गोपनीयता सुरक्षा',
    macroPillars: [
      { text: '💍 08-1: समाज व जाति अनुसार 100% सत्यापित पारिवारिक बायोडाटा', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '🔮 08-2: 36 गुण मिलान, नाड़ी/भकूट दोष व विद्वान आचार्यों से परामर्श', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🤝 08-3: प्रतिष्ठित स्थानीय पंडित व मैरिज ब्यूरो द्वारा आमने-सामने बैठक', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subcategories: {
      '08-1': {
        code: '[08-1]', sub_code: '08-1', slug: 'samajik-matrimony-profiles', icon: '💍',
        title: 'Samajik Matrimony Profiles', hindiTitle: 'सत्यापित पारिवारिक बायोडाटा व रिश्ते',
        categoryTag: 'पारिवारिक रिश्ते', tag: 'पारिवारिक रिश्ते', rating: '★ 4.9', reviewCount: '8,200+ रिश्ते', metaBadge: 'पारिवारिक सत्यापन',
        servicesTitle: 'रिश्ता खोज सुविधाएं:',
        services: [
          { text: '📑 शिक्षा, पेशा व पारिवारिक पृष्ठभूमि की ज़मीनी जांच वाले रिश्ते', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '🔒 केवल अभिभावक की अनुमति पर ही फोन नंबर व फोटो शेयरिंग', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '👥 समाज व उपजाति अनुसार अनुकूल वर-वधू की सुरक्षित खोज', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: ['फर्जी प्रोफाइलों से 100% मुक्त प्रामाणिक पारिवारिक बायोडाटा।', 'माता-पिता और अभिभावकों द्वारा सीधे बातचीत की मर्यादा।', 'गोपनीयता और मर्यादा की पूर्ण सुरक्षा।'],
        btnText: 'बायोडाटा देखें', chips: ['Sabhi', 'Verified Biodata', 'Parent Contacts', 'Samaj Filter']
      },
      '08-2': {
        code: '[08-2]', sub_code: '08-2', slug: 'kundali-milan-matching', icon: '🔮',
        title: 'Kundali Milan & Astrological Matching', hindiTitle: 'कुंडली मिलान, गुण दोष व ज्योतिषी परामर्श',
        categoryTag: 'कुंडली मिलान', tag: 'कुंडली मिलान', rating: '★ 4.9', reviewCount: '6,400+ कुंडलियां', metaBadge: '36 गुण मिलान',
        servicesTitle: 'ज्योतिषीय मिलान सेवाएं:',
        services: [
          { text: '📜 जन्म तिथि व समय अनुसार कंप्यूटर आधारित 36 गुण मिलान', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '⚠️ नाड़ी दोष, भकूट दोष व मांगलिक विचार विस्तृत विश्लेषण', bg: 'rgba(239,68,68,0.15)', c: '#f87171' },
          { text: '📿 काशी के विद्वान आचार्यों से फोन पर कुंडली समाधान परामर्श', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: ['विवाह से पहले दोनों पक्षों के ग्रहों और गुणों की सटीक जांच।', 'दोष निवारण और सुखी दांपत्य जीवन हेतु शास्त्रीय उपाय।', 'मुद्रण योग्य कुंडली मिलान पीडीएफ रिपोर्ट।'],
        btnText: 'कुंडली मिलाएं', chips: ['Sabhi', '36 Guna Milan', 'Manglik Check', 'Pandit Consultation']
      },
      '08-3': {
        code: '[08-3]', sub_code: '08-3', slug: 'vivah-madhyasth-network', icon: '🤝',
        title: 'Vivah Madhyasth & Meeting Network', hindiTitle: 'विवाह अगुआ व प्रत्यक्ष मुलाकात केंद्र',
        categoryTag: 'मध्यस्थ बैठक', tag: 'मध्यस्थ बैठक', rating: '★ 4.8', reviewCount: '4,100+ बैठकें', metaBadge: 'सम्मानजनक बैठक',
        servicesTitle: 'मध्यस्थ सेवाएं:',
        services: [
          { text: '🏛️ प्रतिष्ठित स्थानीय पंडितों व विवाह दूतों द्वारा दोनों पक्षों का समन्वय', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '☕ पारिवारिक सदस्यों की आमने-सामने शिष्ट बैठक व्यवस्था', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📜 सगाई व तिलक लग्न निर्धारण में स्थानीय मार्गदर्शन', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['पारंपरिक और विश्वसनीय तरीके से विवाह संबंधों को आगे बढ़ाना।', 'बिना किसी अनुचित दबाव के दोनों परिवारों की आपसी सहमति।', 'स्थानीय स्तर पर आदरणीय मध्यस्थ नेटवर्क।'],
        btnText: 'मध्यस्थ से संपर्क करें', chips: ['Sabhi', 'Aagua Network', 'Family Meeting', 'Tilak Planning']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 09: EDUCATION (OFFICIAL PLAY STORE TAXONOMY)
  // ==============================================================================
  var cat09 = {
    id: 'c09', catId: '9', number: '09.', num: '09.', icon: '🎓',
    title: 'Education', category_name_en: 'Education', category_name_hi: 'शिक्षा, होम ट्यूटर व प्रतियोगी तैयारी',
    subtitle: 'प्रतियोगी परीक्षा कोचिंग, ट्यूशन, कौशल विकास व कक्षाएं',
    rating: '★ 4.9 (35k+ विद्यार्थी)', trustBadge: 'Certified Educators', supportBadge: 'करियर हेल्पलाइन',
    macroPillars: [
      { text: '👨‍🏫 09-1: कक्षा 1 से 12वीं तक नजदीकी सत्यापित शिक्षक, 1-दिन डेमो', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📝 09-2: पुलिस, रेलवे, एसएससी भर्ती लाइव ऑल इंडिया टेस्ट पास', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🔧 09-3: मोबाइल रिपेयरिंग, घरेलू बिजली वायरिंग ऑफलाइन ट्रेनिंग', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subcategories: {
      '09-1': {
        code: '[09-1]', sub_code: '09-1', slug: 'home-tutors-coaching', icon: '👨‍🏫',
        title: 'Home Tutors & Local Coaching', hindiTitle: 'सत्यापित होम ट्यूटर व कोचिंग सेंटर',
        categoryTag: 'होम ट्यूटर', tag: 'होम ट्यूटर', rating: '★ 4.9', reviewCount: '14,500+ छात्र', metaBadge: '1-दिन फ्री डेमो',
        servicesTitle: 'ट्यूशन व कोचिंग विकल्प:',
        services: [
          { text: '🏡 कक्षा 1 से 10वीं तक सभी विषयों के होम ट्यूटर (घर पर विज़िट)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '📐 11वीं-12वीं फिजिक्स, केमिस्ट्री व मैथ्स स्पेशल फैकल्टी', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🏫 नजदीकी सर्वश्रेष्ठ कोचिंग संस्थानों में मासिक फीस छूट पास', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['बैकग्राउंड-सत्यापित और उच्च योग्यता प्राप्त स्थानीय शिक्षक।', 'व्यक्तिगत ध्यान से बच्चों के परीक्षा परिणाम में सुधार।', 'संतुष्टि के बाद ही मासिक फीस का भुगतान।'],
        btnText: 'ट्यूटर खोजें', chips: ['Sabhi', 'Home Tutor', 'Maths Faculty', 'Science Tutor', 'Coaching Pass']
      },
      '09-2': {
        code: '[09-2]', sub_code: '09-2', slug: 'sarkari-mock-test-pass', icon: '📝',
        title: 'Sarkari Exam Mock Test Pass', hindiTitle: 'सरकारी नौकरी ऑनलाइन मॉक टेस्ट पास',
        categoryTag: 'टेस्ट सीरीज', tag: 'टेस्ट सीरीज', rating: '★ 4.8', reviewCount: '19,200+ परीक्षार्थी', metaBadge: 'ऑल इंडिया रैंक',
        servicesTitle: 'परीक्षा मॉक टेस्ट श्रेणियां:',
        services: [
          { text: '👮 राज्य पुलिस कांस्टेबल व दरोगा भर्ती संपूर्ण टेस्ट सीरीज', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🚂 रेलवे ग्रुप-डी, एएलपी व एनटीपीसी टाइमर मॉक टेस्ट्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📊 एसएससी जीडी, सीएचएसएल व सीजीएल हिंदी/अंग्रेजी प्रश्नोत्तर', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' }
        ],
        highlights: ['नवीनतम परीक्षा पैटर्न और निगेटिव मार्किंग के साथ अभ्यास।', 'प्रत्येक टेस्ट के बाद तुरंत विस्तृत हल और कमजोर क्षेत्रों की रिपोर्ट।', 'लाखों छात्रों के बीच अपनी वास्तविक रैंक जानने का अवसर।'],
        btnText: 'मॉक टेस्ट दें', chips: ['Sabhi', 'Police Exam', 'Railway Mock', 'SSC GD', 'Rank Analysis']
      },
      '09-3': {
        code: '[09-3]', sub_code: '09-3', slug: 'practical-skill-institutes', icon: '🔧',
        title: 'Practical Vocational Skill Institutes', hindiTitle: 'व्यावहारिक हुनर विकास व ट्रेनिंग संस्थान',
        categoryTag: 'कौशल विकास', tag: 'कौशल विकास', rating: '★ 4.9', reviewCount: '6,800+ युवा', metaBadge: 'रोजगार गारंटी',
        servicesTitle: 'हुनर विकास कोर्स:',
        services: [
          { text: '📱 स्मार्टफोन हार्डवेयर, आईसी रिवॉलिंग व सॉफ्टवेयर रिपेयरिंग', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '⚡ हाउस वायरिंग, इनवर्टर, पंखा-मोटर वाइंडिंग कोर्स', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '❄️ एसी, फ्रिज व वॉशिंग मशीन रिपेयरिंग 45-दिवसीय हैंड्स-ऑन', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: ['किताबी ज्ञान नहीं—सीधे औजारों से हाथ का हुनर सीखने का प्रशिक्षण।', 'कोर्स पूरा होते ही दुकान खोलने या जॉब पाने में सहायता।', 'प्रमाणित संस्थान और अनुभवी मास्टर ट्रेनर्स।'],
        btnText: 'हुनर कोर्स चुनें', chips: ['Sabhi', 'Mobile Repair', 'Electrician Course', 'AC Repairing', 'Jobs']
      }
    }
  };

  // ==============================================================================
  // CATEGORY 10: ENTERTAINMENT (OFFICIAL PLAY STORE TAXONOMY - CANONICAL FIXED)
  // ==============================================================================
  var cat10 = {
    id: 'c10', catId: '10', number: '10.', num: '10.', icon: '🎪',
    title: 'Entertainment', category_name_en: 'Entertainment', category_name_hi: 'मनोरंजन, मेला व लाइव स्टेज कार्यक्रम',
    subtitle: 'मेला व सिनेमा पास, लाइव स्टेज कलाकार, डीजे व नौटंकी मंच',
    rating: '★ 4.8 (22k+ दर्शक)', trustBadge: 'Local Artist Network', supportBadge: 'ज़ीरो लाइन डिजिटल पास',
    macroPillars: [
      { text: '🎟️ 10-1: डिज्नीलैंड मेला, सर्कस, रामलीला व सिनेमा हॉल डिजिटल पास', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🎤 10-2: शादी/उत्सव हेतु लोक गायक, जागरण मंडली, एंकर व डीजे बुकिंग', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '🎭 10-3: पारंपरिक नौटंकी, बिदेसिया नाटक, हास्य कवि सम्मेलन व लोकगीत', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subcategories: {
      '10-1': {
        code: '[10-1]', sub_code: '10-1', slug: 'cinema-mela-tickets', icon: '🎟️',
        title: 'Cinema & Mela Entry Passes', hindiTitle: 'मेला, सर्कस, झूला व सिनेमा हॉल पास',
        categoryTag: 'टिकटिंग व पासेज', tag: 'टिकटिंग व पासेज', rating: '★ 4.9', reviewCount: '12,400+ दर्शक', metaBadge: 'ज़ीरो कतार पास',
        servicesTitle: 'मनोरंजन पासेज:',
        services: [
          { text: '🎡 डिज्नीलैंड आनंद मेला एंट्री व झूला कॉम्बो डिस्काउंट पास', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🎪 विख्यात रूसी व भारतीय सर्कस शो कंफर्म सीट टिकट्स', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🍿 स्थानीय सिनेमा हॉल मूवी टिकट्स व पॉपकॉर्न कॉम्बो', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }
        ],
        highlights: ['धूप और भीड़ में टिकट काउंटर पर खड़े होने से मुक्ति।', 'मोबाइल स्क्रीन दिखाते ही गेट पर वीआईपी सीधी एंट्री।', 'सप्ताहांत पर पारिवारिक डिस्काउंट पैकेज।'],
        btnText: 'पास बुक करें', chips: ['Sabhi', 'Mela Pass', 'Circus Tickets', 'Cinema Booking', 'Jhoola Combo']
      },
      '10-2': {
        code: '[10-2]', sub_code: '10-2', slug: 'live-stage-artists-dj', icon: '🎤',
        title: 'Live Stage Artists & DJ Troupe', hindiTitle: 'स्टेज कलाकार, जागरण मंडली व डीजे बुकिंग',
        categoryTag: 'लाइव स्टेज', tag: 'लाइव स्टेज', rating: '★ 4.9', reviewCount: '6,800+ आयोजन', metaBadge: 'प्रमाणित कलाकार',
        servicesTitle: 'स्टेज बुकिंग विकल्प:',
        services: [
          { text: '🎵 भोजपुरी, मैथिली व हिंदी सुप्रसिद्ध लोक गायक बुकिंग', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' },
          { text: '🪔 माता का जागरण, कीर्तन मंडली, झांकी व साउंड ट्रूप', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🔊 पार्टी डीजे, एंकरिंग व शादी संगीत डांस ट्रूप पैकेज', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' }
        ],
        highlights: ['समारोहों को यादगार बनाने वाले पेशेवर और सम्मानित कलाकार।', 'पारदर्शी अग्रिम बुकिंग और समय पर मंच पर उपस्थिति।', 'साउंड और लाइट सहित संपूर्ण पैकेज।'],
        btnText: 'कलाकार बुक करें', chips: ['Sabhi', 'Folk Singer', 'Jagran Mandali', 'Stage DJ', 'Dance Troupe']
      },
      '10-3': {
        code: '[10-3]', sub_code: '10-3', slug: 'regional-theater-comedy', icon: '🎭',
        title: 'Regional Folk Theater & Hasya Sammelan', hindiTitle: 'पारंपरिक नौटंकी, नाटक व हास्य कवि सम्मेलन',
        categoryTag: 'लोक रंगमंच', tag: 'लोक रंगमंच', rating: '★ 4.8', reviewCount: '3,800+ कार्यक्रम', metaBadge: 'सांस्कृतिक मंच',
        servicesTitle: 'रंगमंच कार्यक्रम:',
        services: [
          { text: '🎭 भिखारी ठाकुर रचित बिदेसिया नाटक व पारंपरिक लोक नाट्य', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🎪 राष्ट्रीय हास्य कवि सम्मेलन व मुशायरा मंच आयोजन', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🪕 कजरी, सोहर व आल्हा-ऊदल पारंपरिक गायन मंडली', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
        ],
        highlights: ['हमारी समृद्ध सांस्कृतिक धरोहर और लोक कलाओं का सजीव अनुभव।', 'उत्सवों और सार्वजनिक सम्मेलनों हेतु श्रेष्ठ बौद्धिक मनोरंजन।', 'कलाकारों को सीधा आर्थिक संबल।'],
        btnText: 'नाटक मंच देखें', chips: ['Sabhi', 'Bidesia Natak', 'Kavi Sammelan', 'Nautanki Troupe', 'Aalha Gaayan']
      }
    }
  };

  // ==============================================================================
  // REGISTRATION MATRIX: 06 TO 10 (MULTI-KEY SAFE LOOKUP)
  // ==============================================================================
  var BATCH_06_10 = {
    '6': cat06, '06': cat06, 'c6': cat06, 'c06': cat06,
    '7': cat07, '07': cat07, 'c7': cat07, 'c07': cat07,
    '8': cat08, '08': cat08, 'c8': cat08, 'c08': cat08,
    '9': cat09, '09': cat09, 'c9': cat09, 'c09': cat09,
    '10': cat10, 'c10': cat10, '010': cat10
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_06_10);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_06_10);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_06_10);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_06_10);
      }
    });
  }
})();
