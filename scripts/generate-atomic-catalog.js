/**
 * RISE MITRA — ATOMIC CATALOG 01-50 GENERATOR ENGINE
 * ARCHITECTURE  : 1 Category = 1 Independent File (Atomic & Anti-AI Resilient)
 * GOVERNANCE    : GATE-26.0 | ZERO-ELEMENT-LOSS (ZEL) MASTER SCRIPT
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW / EXT_005 Section 2.8)
 * TARGET FOLDER : public/js/universal-catalog/categories/
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/js/universal-catalog/categories');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 50 Official Categories Master Blueprint (100% Physical Execution & Real Cashflow Benchmarks)
const CATEGORIES_DATA = {
  1: {
    title: 'Art & Design', subtitle: 'त्योहार पोस्टर, दुकान प्रचार, फ्लेक्स बोर्ड व प्रिंटिंग हब',
    icon: '🎨', rating: '★ 4.9 (14k+ व्यापारी)', trust: 'Print & Design Verified', support: 'डोरस्टेप प्रिंट डिलीवरी',
    pillars: [
      { text: '📱 01-1: दुकान नाम व फोटो वाले 1-क्लिक त्योहार पोस्टर व स्मार्ट कार्ड', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🪧 01-2: दुकान फ्लेक्स बोर्ड, ग्लो-साइन व विनाइल बैनर प्रिंटिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📇 01-3: प्रीमियम विज़िटिंग कार्ड, लेटरहेड व पक्की बिल बुक', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '01-1', icon: '📱', title: 'Festival Post & Digital Card', hindi: 'दुकान त्योहार पोस्टर व डिजिटल कार्ड', tag: 'सोशल मीडिया ब्रांडिंग', badge: '1-क्लिक WhatsApp शेयर', btn: 'पोस्टर डिजाइन करें' },
      { subCode: '01-2', icon: '🪧', title: 'Flex Board & Printing', hindi: 'फ्लेक्स बोर्ड, बैनर व ग्लो-साइन प्रिंटिंग', tag: 'ऑफसेट व डिजिटल प्रिंटिंग', badge: 'डोरस्टेप डिलीवरी', btn: 'फ्लेक्स बोर्ड ऑर्डर करें' },
      { subCode: '01-3', icon: '📇', title: 'Visiting Card & Bill Books', hindi: 'विज़िटिंग कार्ड व पक्की बिल बुक', tag: 'व्यापारिक स्टेशनरी', badge: 'प्रीमियम फिनिश', btn: 'कार्ड व बिल बुक छपवाएं' }
    ]
  },
  2: {
    title: 'Auto & Vehicles', subtitle: 'ऑन-रोड इमरजेंसी सहायता, आरटीओ चालान व पुरानी गाड़ी बाज़ार',
    icon: '🚗', rating: '★ 4.9 (18k+ वाहन मालिक)', trust: 'RSA & Garage Verified', support: '15-मिनट ऑन-रोड विज़िट',
    pillars: [
      { text: '🚨 02-1: 15-मिनट ऑन-साइट पंचर, बैटरी जंप-स्टार्ट व क्रेन टोइंग', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.14)' },
      { text: '📜 02-2: आरटीओ चालान जांच, 1-क्लिक निपटान व फ़ास्टैग रिचार्ज', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🛵 02-3: पुरानी बाइक, कार व ट्रैक्टर ख़रीद-बिक्री (0% दलाली)', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subs: [
      { subCode: '02-1', icon: '🚨', title: 'Roadside Assistance (RSA)', hindi: 'ऑन-रोड इमरजेंसी सहायता व पंचर', tag: '24x7 इमरजेंसी सर्विस', badge: '15 मिनट विज़िट', btn: 'मैकेनिक बुलाएं' },
      { subCode: '02-2', icon: '📜', title: 'RTO Challan & FASTag', hindi: 'आरटीओ चालान जांच व फ़ास्टैग', tag: 'वाहन कागजात व टैक्स', badge: '1-क्लिक सरकारी सिंक', btn: 'चालान चेक व भरें' },
      { subCode: '02-3', icon: '🛵', title: 'Used Vehicles Buy/Sell', hindi: 'पुरानी गाड़ी ख़रीद-बिक्री (0% दलाली)', tag: 'प्रमाणित वाहन बाज़ार', badge: '0% ब्रोकरेज', btn: 'गाड़ी देखें या बेचें' }
    ]
  },
  3: {
    title: 'Beauty', subtitle: 'घर पर सैलून, ब्राइडल शादी मेकअप व नाई ग्रूमिंग हब',
    icon: '💄', rating: '★ 4.9 (12k+ महिलाएं व परिवार)', trust: 'Certified Beauticians', support: '100% हाइजीनिक किट',
    pillars: [
      { text: '💇‍♀️ 03-1: 100% डिस्पोजेबल किट संग घर पर फेशियल, वैक्सिंग व स्पा', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '👰 03-2: एचडी ब्राइडल शादी मेकअप व दुल्हन मेहंदी आर्टिस्ट', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '💈 03-3: मोहल्ला नाई दुकान ज़ीरो-वेटिंग डिजिटल टोकन व नया ब्लेड', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subs: [
      { subCode: '03-1', icon: '💇‍♀️', title: 'Salon at Home (Ladies Only)', hindi: 'डोरस्टेप लेडीज सैलून व फेशियल', tag: 'होम पार्लर सर्विस', badge: 'डिस्पोजेबल किट', btn: 'सैलून बुक करें' },
      { subCode: '03-2', icon: '👰', title: 'Bridal Makeup & Mehndi', hindi: 'ब्राइडल मेकअप व शादी मेहंदी', tag: 'शादी स्पेशल पैकेज', badge: 'सत्यापित आर्टिस्ट', btn: 'ब्राइडल पैकेज चुनें' },
      { subCode: '03-3', icon: '💈', title: 'Men Grooming & Barber', hindi: 'नाई दुकान टोकन व ग्रूमिंग', tag: 'जेंट्स सैलून', badge: 'ज़ीरो वेटिंग टोकन', btn: 'टोकन बुक करें' }
    ]
  },
  4: {
    title: 'Books & Reference', subtitle: 'क्षेत्रीय ऑडियो कहानियां, सरकारी भर्ती नोट्स व दैनिक पंचांग',
    icon: '📚', rating: '★ 4.8 (9k+ पाठक व छात्र)', trust: 'Verified Material', support: 'ऑडियो व प्रिंटेड पार्सल',
    pillars: [
      { text: '🎧 04-1: हिंदी, भोजपुरी व मैथिली लोककथाएं, जीवनियां व चाणक्य नीति', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📝 04-2: पुलिस, रेलवे व एसएससी टॉपर्स हस्तलिखित नोट्स बुकलेट', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🕉️ 04-3: काशी/मिथिला पंचांग, शुभ लग्न मुहूर्त व प्रामाणिक धर्म साहित्य', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '04-1', icon: '🎧', title: 'Regional Audio Stories', hindi: 'क्षेत्रीय ऑडियो लोक-कथाएं व साहित्य', tag: 'ऑडियो पॉडकास्ट', badge: 'मासिक पास', btn: 'ऑडियो सुनें' },
      { subCode: '04-2', icon: '📝', title: 'Sarkari Exam Notes', hindi: 'सरकारी परीक्षा हस्तलिखित नोट्स', tag: 'स्टडी मैटेरियल', badge: 'सत्यापित बुकलेट', btn: 'नोट्स मंगाएं' },
      { subCode: '04-3', icon: '🕉️', title: 'Dainik Panchang & Sahitya', hindi: 'दैनिक पंचांग व धर्म साहित्य', tag: 'पंचांग व मुहूर्त', badge: 'सटीक गणना', btn: 'पंचांग देखें' }
    ]
  },
  5: {
    title: 'Business', subtitle: 'डिजिटल उधारी बहीखाता, थोक मंडी सप्लायर व ऑनलाइन दुकान',
    icon: '💼', rating: '★ 4.9 (25k+ व्यापारी)', trust: 'Sovereign Ledger', support: '100% मुफ़्त ऑटो बैकअप',
    pillars: [
      { text: '📖 05-1: 100% सुरक्षित डिजिटल उधारी खाता व ऑटो व्हाट्सएप तगादा', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🏢 05-2: किराना, कपड़ा व सीमेंट सीधे मिल/फैक्ट्री थोक भाव डायरेक्टरी', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🛍️ 05-3: 30-सेकंड व्हाट्सएप ऑनलाइन दुकान व काउंटर क्यूआर स्टैंडी', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subs: [
      { subCode: '05-1', icon: '📖', title: 'Digital Udhar Khata', hindi: 'डिजिटल उधारी बहीखाता', tag: 'स्मार्ट अकाउंटिंग', badge: 'ऑटो WhatsApp रिमाइंडर', btn: 'खाता खोलें' },
      { subCode: '05-2', icon: '🏢', title: 'Wholesale Mandi Network', hindi: 'थोक मंडी व्यापारी डायरेक्टरी', tag: 'B2B ट्रेड डायरेक्टरी', badge: 'सीधा मिल संपर्क', btn: 'थोक सप्लायर खोजें' },
      { subCode: '05-3', icon: '🛍️', title: 'Online Dukan QR Catalog', hindi: 'ऑनलाइन दुकान QR कैटलॉग', tag: 'डिजिटल रिटेल', badge: 'काउंटर स्टैंडी', btn: 'दुकान बनाएं' }
    ]
  },
  6: {
    title: 'Comics', subtitle: 'पौराणिक ग्राफिक कॉमिक्स, बाल कथा पुस्तकें व दैनिक पहेली',
    icon: '🦸', rating: '★ 4.8 (8k+ परिवार)', trust: 'Cultural Illustrated', support: 'डोरस्टेप कॉम्बो पार्सल',
    pillars: [
      { text: '📖 06-1: रामायण, महाभारत व छत्रपति शिवाजी सचित्र ग्राफिक कॉमिक्स', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '📦 06-2: पंचतंत्र, जातक कथाएं 5-पुस्तकों का प्रिंटेड कॉम्बो बॉक्स', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🧩 06-3: क्षेत्रीय हास्य व्यंग्य स्ट्रिप्स, दैनिक सुडोकू व वर्ग पहेली', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '06-1', icon: '📖', title: 'Pauranik Graphic Comics', hindi: 'पौराणिक सचित्र कॉमिक्स', tag: 'धार्मिक व ऐतिहासिक', badge: 'मासिक डिजिटल पास', btn: 'कॉमिक्स पढ़ें' },
      { subCode: '06-2', icon: '📦', title: 'Kids Illustrated Books', hindi: 'सचित्र बाल कथा पुस्तकें', tag: 'प्रिंटेड बुक्स कॉम्बो', badge: 'डोरस्टेप पार्सल', btn: 'पुस्तकें मंगाएं' },
      { subCode: '06-3', icon: '🧩', title: 'Daily Humor & Puzzles', hindi: 'दैनिक हास्य व वर्ग पहेली', tag: 'दिमागी कसरत', badge: 'साप्ताहिक इनाम', btn: 'पहेली हल करें' }
    ]
  },
  7: {
    title: 'Communication', subtitle: 'सत्यापित स्थानीय व्यापारी संपर्क, व्हाट्सएप प्रोमो व साइबर शील्ड',
    icon: '📞', rating: '★ 4.9 (20k+ नागरिक)', trust: 'Ground Verified Directory', support: '24x7 अलर्ट बुलेटिन',
    pillars: [
      { text: '📞 07-1: भौतिक रूप से जाँचे गए स्थानीय दुकानदार व कारीगर डायरेक्टरी', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📢 07-2: त्योहारों पर मोहल्ले के ग्राहकों को व्हाट्सएप थोक ऑफर ब्रॉडकास्ट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🛡️ 07-3: लॉटरी, फर्जी कॉल व बिजली बिल ठगी से बचाव स्थानीय अलर्ट', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.14)' }
    ],
    subs: [
      { subCode: '07-1', icon: '📞', title: 'Verified Merchant Directory', hindi: 'सत्यापित व्यापारी संपर्क', tag: 'ग्रीन टिक डायरेक्टरी', badge: '1-टैप डायरेक्ट कॉल', btn: 'संपर्क देखें' },
      { subCode: '07-2', icon: '📢', title: 'WhatsApp Promo Broadcaster', hindi: 'व्हाट्सएप प्रोमो ब्रॉडकास्टर', tag: 'स्थानीय विज्ञापन', badge: 'थोक संदेश', btn: 'ऑफर भेजें' },
      { subCode: '07-3', icon: '🛡️', title: 'Cyber Fraud & Spam Shield', hindi: 'साइबर फ्रॉड व स्पैम शील्ड', tag: 'सुरक्षा अलर्ट', badge: '24x7 फ्रॉड अलर्ट', btn: 'अलर्ट जांचें' }
    ]
  },
  8: {
    title: 'Dating & Matrimony', subtitle: 'सत्यापित सामाजिक बायोडाटा, कुण्डली मिलान व अगुआ मध्यस्थ',
    icon: '💍', rating: '★ 4.9 (11k+ परिवार)', trust: '100% Background Verified', support: 'गोपनीय अभिभावक संपर्क',
    pillars: [
      { text: '📜 08-1: समाज व जाति अनुसार 100% सत्यापित पारिवारिक रिश्ते', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '🔮 08-2: 36 गुण मिलान, नाड़ी/मांगलिक दोष विचार व विद्वान परामर्श', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🤝 08-3: प्रतिष्ठित पंडित व मैरिज ब्यूरो द्वारा आमने-सामने बैठक', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subs: [
      { subCode: '08-1', icon: '📜', title: 'Samajik Matrimony', hindi: 'सामाजिक विवाह बायोडाटा', tag: 'पारिवारिक रिश्ते', badge: 'सत्यापित बैकग्राउंड', btn: 'रिश्ते देखें' },
      { subCode: '08-2', icon: '🔮', title: 'Kundali Milan & Matching', hindi: 'कुण्डली मिलान व परामर्श', tag: 'ज्योतिष परामर्श', badge: '36 गुण मिलान', btn: 'कुण्डली मिलाएं' },
      { subCode: '08-3', icon: '🤝', title: 'Vivah Madhyasth Network', hindi: 'अगुआ व मध्यस्थ नेटवर्क', tag: 'विवाह मंच', badge: 'आमने-सामने बैठक', btn: 'मध्यस्थ से मिलें' }
    ]
  },
  9: {
    title: 'Education', subtitle: 'होम ट्यूटर, सरकारी मॉक टेस्ट पास व प्रैक्टिकल वोकेशनल ट्रेनिंग',
    icon: '🎓', rating: '★ 4.9 (16k+ छात्र व युवा)', trust: 'Skill & Teacher Verified', support: '1-दिन फ्री डेमो क्लास',
    pillars: [
      { text: '👨‍🏫 09-1: कक्षा 1 से 12वीं तक नजदीकी सत्यापित होम शिक्षक व कोचिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🎯 09-2: पुलिस, रेलवे, एसएससी भर्ती लाइव ऑल इंडिया टेस्ट सीरीज पास', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🔧 09-3: मोबाइल रिपेयरिंग, घरेलू बिजली वायरिंग ऑफलाइन ट्रेनिंग सेंटर', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '09-1', icon: '👨‍🏫', title: 'Home Tutors & Coaching', hindi: 'सत्यापित होम ट्यूटर', tag: 'शैक्षणिक ट्यूशन', badge: '1-दिन फ्री डेमो', btn: 'ट्यूटर खोजें' },
      { subCode: '09-2', icon: '🎯', title: 'Sarkari Mock Test Pass', hindi: 'सरकारी मॉक टेस्ट पास', tag: 'भर्ती परीक्षा तैयारी', badge: 'ऑल इंडिया रैंक', btn: 'टेस्ट पास लें' },
      { subCode: '09-3', icon: '🔧', title: 'Practical Skill Institutes', hindi: 'प्रैक्टिकल स्किल ट्रेनिंग', tag: 'हाथ का हुनर', badge: 'ऑफलाइन वर्कशॉप', btn: 'हुनर सीखें' }
    ]
  },
  10: {
    title: 'Entertainment', subtitle: 'मेला व सिनेमा पास, लाइव स्टेज कलाकार, डीजे व नौटंकी मंच',
    icon: '🎪', rating: '★ 4.8 (19k+ दर्शक)', trust: 'Local Artist Network', support: 'ज़ीरो लाइन डिजिटल पास',
    pillars: [
      { text: '🎟️ 10-1: डिज्नीलैंड मेला, सर्कस, रामलीला व सिनेमा हॉल डिजिटल पास', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🎤 10-2: शादी/उत्सव हेतु लोक गायक, जागरण मंडली, एंकर व डीजे बुकिंग', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '🎭 10-3: पारंपरिक नौटंकी, बिदेसिया नाटक व हास्य कवि सम्मेलन संग्रह', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subs: [
      { subCode: '10-1', icon: '🎟️', title: 'Cinema & Mela Tickets', hindi: 'मेला, सर्कस व सिनेमा पास', tag: 'टिकटिंग व पासेज', badge: 'ज़ीरो कतार पास', btn: 'पास बुक करें' },
      { subCode: '10-2', icon: '🎤', title: 'Live Stage Artists & DJ', hindi: 'स्टेज कलाकार, मंडली व डीजे', tag: 'लाइव परफॉरमेंस', badge: 'उत्सव स्पेशल', btn: 'कलाकार बुक करें' },
      { subCode: '10-3', icon: '🎭', title: 'Regional Theater & Comedy', hindi: 'पारंपरिक नाटक व नौटंकी', tag: 'लोक कला', badge: 'सांस्कृतिक मंच', btn: 'कार्यक्रम देखें' }
    ]
  },
  11: {
    title: 'Events', subtitle: 'वाटरप्रूफ टेंट, शाही हलवाई कैटरिंग व 4K ड्रोन वीडियोग्राफी',
    icon: '🎉', rating: '★ 4.9 (10k+ शादी परिवार)', trust: 'Complete Event Network', support: 'ऑन-साइट फुल सेटअप',
    pillars: [
      { text: '⛺ 11-1: वॉटरप्रूफ जर्मन हैंगर टेंट, फ्लावर स्टेज व एलईडी पिक्सल लाइट', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🍲 11-2: अनुभवी शादी हलवाई टीम, शुद्ध देशी घी कैटरिंग व लाइव चाट स्टॉल', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🛸 11-3: 4K ड्रोन कैमरा हवाई कवरेज, सिनेमैटिक प्री-वेडिंग व फोटो एल्बम', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '11-1', icon: '⛺', title: 'Tent & Light Decor', hindi: 'टेंट, फ्लावर व लाइट डेकोरेशन', tag: 'इवेंट सेटअप', badge: 'जर्मन हैंगर', btn: 'टेंट बुक करें' },
      { subCode: '11-2', icon: '🍲', title: 'Halwai & Catering Services', hindi: 'शाही हलवाई व कैटरिंग सेवा', tag: 'शुद्ध खान-पान', badge: 'देशी घी कैटरिंग', btn: 'कैटरिंग चुनें' },
      { subCode: '11-3', icon: '🛸', title: 'Wedding Drone Photography', hindi: 'ड्रोन व सिनेमैटिक वीडियोग्राफी', tag: 'शादी कवरेज', badge: '4K ड्रोन शूट', btn: 'शूट बुक करें' }
    ]
  },
  12: {
    title: 'Finance', subtitle: 'डोरस्टेप आधार कैश निकासी, व्यापार माइक्रो लोन व वाहन बीमा',
    icon: '💳', rating: '★ 4.9 (22k+ ग्राहक)', trust: 'Banking & AEPS Verified', support: 'डोरस्टेप कैश डिलीवरी',
    pillars: [
      { text: '🏧 12-1: आधार कार्ड फिंगरप्रिंट व माइक्रो-ATM से घर बैठे नकद निकासी', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '💰 12-2: छोटे खुदरा दुकानदारों हेतु ₹10k से ₹2 लाख तक त्वरित व्यापार लोन', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🛡️ 12-3: बाइक/कार थर्ड पार्टी बीमा तत्काल रिन्यूअल व क्लेम सहायता', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subs: [
      { subCode: '12-1', icon: '🏧', title: 'Doorstep AEPS Cash', hindi: 'डोरस्टेप आधार कैश निकासी', tag: 'डिजिटल बैंकिंग', badge: 'माइक्रो ATM', btn: 'कैश मंगाएं' },
      { subCode: '12-2', icon: '💰', title: 'Vyapar Micro-Loans', hindi: 'दुकानदार व्यापार माइक्रो-ऋण', tag: 'व्यापारिक पूंजी', badge: 'दैनिक किस्त', btn: 'लोन आवेदन करें' },
      { subCode: '12-3', icon: '🛡️', title: '1-Click Vehicle Insurance', hindi: 'वाहन व दुकान बीमा', tag: 'जनरल इंश्योरेंस', badge: 'तत्काल पॉलिसी', btn: 'बीमा रिन्यू करें' }
    ]
  },
  13: {
    title: 'Food & Drink', subtitle: 'मासिक टिफिन सेवा, प्रसिद्ध लोकल ढाबा भोजन व थोक शादी राशन',
    icon: '🍲', rating: '★ 4.8 (21k+ छात्र व परिवार)', trust: 'Fresh & Hygienic', support: 'गरम टिफिन समय पर डिलीवरी',
    pillars: [
      { text: '🍱 13-1: छात्रों व नौकरीपेशा हेतु शुद्ध शाकाहारी 4-रोटी, दाल, सब्जी मासिक टिफिन', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🍛 13-2: प्रसिद्ध ढाबों की गरम दाल मखनी, पनीर व देशी घी मिठाई 30-मिनट डिलीवरी', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🌾 13-3: शादी, भंडारे हेतु थोक मंडी भाव पर आटा कट्टा, 15L तेल टिन व चीनी सप्लाई', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '13-1', icon: '🍱', title: 'Monthly Tiffin Service', hindi: 'मासिक शुद्ध टिफिन सेवा', tag: 'दैनिक भोजन', badge: 'मासिक पास', btn: 'टिफिन शुरू करें' },
      { subCode: '13-2', icon: '🍛', title: 'Local Dhaba & Sweets', hindi: 'प्रसिद्ध ढाबा व शुद्ध मिठाई', tag: 'फास्ट डिलीवरी', badge: '30-मिनट डिलीवरी', btn: 'खाना मंगाएं' },
      { subCode: '13-3', icon: '🌾', title: 'Bulk Mandi Event Ration', hindi: 'शादी व भंडारा थोक राशन', tag: 'थोक खाद्य जिंस', badge: 'सीधा मंडी रेट', btn: 'राशन ऑर्डर करें' }
    ]
  },
  14: {
    title: 'Health & Fitness', subtitle: 'डोरस्टेप योग व फिजियोथेरेपी, जिम पास व देशी अखाड़ा पोषण',
    icon: '🧘', rating: '★ 4.9 (13k+ फिटनेस साधक)', trust: 'Certified Trainers', support: 'घर पर एक्सपर्ट विज़िट',
    pillars: [
      { text: '💆 14-1: घर पर प्रमाणित योग प्रशिक्षक व जोड़ों/कमर दर्द फिजियोथेरेपिस्ट विज़िट', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🏋️ 14-2: नजदीकी आधुनिक जिम का 1-दिन, साप्ताहिक व मासिक डिस्काउंटेड पास', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🥛 14-3: देशी गाय का ताजा A2 कच्चा दूध, भुना चना-सत्तू व ड्राई फ्रूट्स डाइट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '14-1', icon: '💆', title: 'Doorstep Yoga & Physio', hindi: 'डोरस्टेप फिजियो व योग', tag: 'हेल्थकेयर विज़िट', badge: 'प्रमाणित थेरेपिस्ट', btn: 'थेरेपिस्ट बुलाएं' },
      { subCode: '14-2', icon: '🏋️', title: 'Local Gym Membership Passes', hindi: 'लोकल जिम डिस्काउंट पास', tag: 'जिम व फिटनेस', badge: 'फ्लेक्सिबल पास', btn: 'जिम पास लें' },
      { subCode: '14-3', icon: '🥛', title: 'Desi Akhada Nutrition', hindi: 'देसी अखाड़ा शुद्ध पोषण किट', tag: 'प्राकृतिक आहार', badge: 'A2 दूध व सत्तू', btn: 'डाइट मंगाएं' }
    ]
  },
  15: {
    title: 'House & Home', subtitle: 'इलेक्ट्रीशियन, प्लम्बर, मोटर रिपेयर, बढ़ई व पेंटिंग सेवा',
    icon: '🏠', rating: '★ 4.9 (28k+ घर मालिक)', trust: 'Verified Mistry Network', support: '30-दिन कार्य वारंटी',
    pillars: [
      { text: '⚡ 15-1: शॉर्ट सर्किट, पंखा-कूलर, इनवर्टर व समर्सिबल पंप रिपेयर (वारंटी सहित)', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🚰 15-2: नल लीकेज, छत टंकी फिटिंग व सीवरेज ब्लॉकेज मशीन सफाई', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🪚 15-3: दरवाजा, ताला, बेड-अलमारी रिपेयर, दीवार पुट्टी व एशियन पेंट्स कार्य', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '15-1', icon: '⚡', title: 'Electrician & Motor Repair', hindi: 'इलेक्ट्रीशियन व मोटर रिपेयर', tag: 'इलेक्ट्रिकल वर्क', badge: '30-दिन वारंटी', btn: 'इलेक्ट्रीशियन बुलाएं' },
      { subCode: '15-2', icon: '🚰', title: 'Plumber & Sanitary', hindi: 'प्लम्बर व ड्रेनेज सफाई', tag: 'सैनिटरी फिटिंग', badge: 'मशीन सफाई', btn: 'प्लम्बर बुलाएं' },
      { subCode: '15-3', icon: '🪚', title: 'Carpenter & Home Painting', hindi: 'बढ़ई व दीवार पेंटिंग', tag: 'होम रिपेयर', badge: 'पक्का कारीगर', btn: 'कारीगर बुक करें' }
    ]
  },
  16: {
    title: 'Libraries & Demo', subtitle: 'एसी रीडिंग रूम डेस्क, 50% छूट पुरानी किताबें व थोक स्टेशनरी',
    icon: '📖', rating: '★ 4.9 (15k+ प्रतियोगी छात्र)', trust: 'Academic Hub Verified', support: '24x7 शांत अध्ययन स्लॉट',
    pillars: [
      { text: '🪑 16-1: साउंडप्रूफ एसी केबिन डेस्क, 5G वाईफाई व आरओ पानी शांत अध्ययन स्लॉट', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📚 16-2: यूपीएससी, एसएससी, नीट व एनसीईआरटी प्रमाणित पुरानी किताबें 50% छूट', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '📦 16-3: कॉपियों के बंडल, पेन बॉक्स, रजिस्टर व प्रोजेक्ट किट्स थोक मिल रेट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '16-1', icon: '🪑', title: 'AC Study Library Seat', hindi: 'एसी लाइब्रेरी केबिन सीट', tag: 'शांत रीडिंग रूम', badge: '5G वाई-फाई', btn: 'सीट बुक करें' },
      { subCode: '16-2', icon: '📚', title: 'Old Books Buy/Sell Market', hindi: 'पुरानी किताबें बाज़ार (50% छूट)', tag: 'प्रतियोगी साहित्य', badge: '50% बचत', btn: 'किताबें खोजें' },
      { subCode: '16-3', icon: '📦', title: 'Bulk School Stationery', hindi: 'थोक स्कूल व ऑफिस स्टेशनरी', tag: 'थोक स्टेशनरी', badge: 'सीधा मिल रेट', btn: 'स्टेशनरी मंगाएं' }
    ]
  },
  17: {
    title: 'Lifestyle', subtitle: 'स्टीम ड्राई क्लीनिंग, डोरस्टेप महिला टेलरिंग व सोफा डीप क्लीनिंग',
    icon: '👔', rating: '★ 4.9 (17k+ संतुष्ट ग्राहक)', trust: 'Fabric Care Verified', support: '48-घंटे डोरस्टेप रिटर्न',
    pillars: [
      { text: '🧼 17-1: सूट, शेरवानी, लहंगा, कंबल मशीनी स्टीम ड्राई क्लीनिंग व डोरस्टेप डिलीवरी', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🪡 17-2: महिला टेलर द्वारा घर पर नाप, डिजाइनर ब्लाउज, सूट सिलाई व फॉल-पीको', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '🛋️ 17-3: सोफा शैम्पू वॉश, किचन चिमनी डीग्रेजिंग व बाथरूम टाइल्स मशीन क्लीनिंग', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '17-1', icon: '🧼', title: 'Steam Dry Cleaning & Laundry', hindi: 'स्टीम ड्राई क्लीनिंग व लाँड्री', tag: 'कपड़ा सुरक्षा', badge: '48 घंटे डिलीवरी', btn: 'कपड़े पिकअप कराएं' },
      { subCode: '17-2', icon: '🪡', title: 'Ladies Doorstep Tailoring', hindi: 'महिला टेलरिंग (घर पर नाप)', tag: 'सिलाई व फिटिंग', badge: 'घर पर नाप', btn: 'टेलर बुक करें' },
      { subCode: '17-3', icon: '🛋️', title: 'Home Deep Cleaning', hindi: 'सोफा व किचन डीप क्लीनिंग', tag: 'मशीनी सफाई', badge: 'दाग-मुक्त वॉश', btn: 'सफाई बुक करें' }
    ]
  },
  18: {
    title: 'Maps & Navigation', subtitle: 'लोडिंग टेम्पो (छोटा हाथी), 2-घंटे कूरियर व पैकर-मूवर्स शिफ्टिंग',
    icon: '🚚', rating: '★ 4.9 (24k+ व्यापारी व परिवार)', trust: 'Tracked & Insured Fleet', support: '15-मिनट लोडिंग पॉइंट विज़िट',
    pillars: [
      { text: '🛺 18-1: टाटा ऐस (छोटा हाथी), बोलेरो पिकअप 15 मिनट में लोडिंग पॉइंट पर (फिक्स रेट)', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🏍️ 18-2: शहर अंदर 2 घंटे में दुकान पार्सल, जरूरी दस्तावेज व दवा बाइक राइडर डिलीवरी', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '📦 18-3: बबल रैप पैकिंग, सोफा, फ्रिज व घरेलू सामान सुरक्षित शिफ्टिंग (ज़ीरो डैमेज)', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '18-1', icon: '🛺', title: 'Goods Tempo Booking', hindi: 'छोटा हाथी व लोडिंग टेम्पो', tag: 'माल ढुलाई', badge: 'फिक्स किमी रेट', btn: 'टेम्पो बुक करें' },
      { subCode: '18-2', icon: '🏍️', title: 'Hyperlocal 2-Hour Courier', hindi: 'शहर अंदर 2-घंटे कूरियर', tag: 'एक्सप्रेस राइडर', badge: '2 घंटे डिलीवरी', btn: 'पार्सल भेजें' },
      { subCode: '18-3', icon: '📦', title: 'Packers & Movers Shifting', hindi: 'पैकर व मूवर्स घरेलू शिफ्टिंग', tag: 'सुरक्षित शिफ्टिंग', badge: 'ज़ीरो डैमेज गारंटी', btn: 'शिफ्टिंग कोटेशन लें' }
    ]
  },
  19: {
    title: 'Medical', subtitle: 'घर से ब्लड सैंपल, 20% छूट पर्चा दवाएं व 24x7 ऑक्सीजन एम्बुलेंस',
    icon: '🏥', rating: '★ 4.9 (30k+ मरीज व परिवार)', trust: 'NABL & Pharmacy Certified', support: '24x7 इमरजेंसी लाइफलाइन',
    pillars: [
      { text: '💉 19-1: एनएबीएल प्रमाणित लैब तकनीशियन द्वारा घर से ब्लड सैंपल व 12 घंटे रिपोर्ट', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '💊 19-2: पर्चा भेजते ही 20% फ्लैट छूट पर अंग्रेजी/आयुर्वेदिक दवाएं व पक्का बिल', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🚑 19-3: ऑक्सीजन व स्ट्रेचर युक्त बेसिक लाइफ सपोर्ट वैन व डॉक्टर अपॉइंटमेंट', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.14)' }
    ],
    subs: [
      { subCode: '19-1', icon: '💉', title: 'Home Blood Sample Collect', hindi: 'घर से ब्लड टेस्ट सैंपल', tag: 'लैब डायग्नोस्टिक्स', badge: 'NABL रिपोर्ट', btn: 'टेस्ट बुक करें' },
      { subCode: '19-2', icon: '💊', title: 'Doorstep Discount Medicines', hindi: '20% छूट पर दवा डिलीवरी', tag: 'दवा व फार्मेसी', badge: 'फ्लैट 20% बचत', btn: 'पर्चा भेजें' },
      { subCode: '19-3', icon: '🚑', title: '24x7 Oxygen Ambulance', hindi: '24x7 ऑक्सीजन एम्बुलेंस', tag: 'इमरजेंसी मेडिकल', badge: 'ऑक्सीजन सपोर्ट', btn: 'एम्बुलेंस बुलाएं' }
    ]
  },
  20: {
    title: 'Music & Audio', subtitle: 'शादी ब्रास बैंड, बग्गी, JBL साउंड रेंटल व वाद्य यंत्र रिपेयर',
    icon: '🎺', rating: '★ 4.8 (11k+ उत्सव आयोजक)', trust: 'Master Musician Troupe', support: 'पार्टी बैकअप गारंटी',
    pillars: [
      { text: '🎺 20-1: वर्दीधारी ब्रास बैंड, शहनाई वादक, फूलों से सजी शाही घोड़ी, बग्गी व छाता', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🔊 20-2: जेबीएल डबल बेस स्पीकर, शार्पी लाइट, फॉग मशीन व जनरेटर बैकअप डीजे', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🪗 20-3: हारमोनियम ट्यूनिंग, ढोलक-तबला चमड़ा रिपेयर व उस्ताद द्वारा क्लास', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '20-1', icon: '🎺', title: 'Wedding Band & Baggi', hindi: 'शाही ब्रास बैंड व बग्गी', tag: 'शादी बारात', badge: 'शाही बग्गी', btn: 'बैंड बुक करें' },
      { subCode: '20-2', icon: '🔊', title: 'DJ Sound System Rental', hindi: 'JBL डीजे साउंड व लाइट्स', tag: 'पार्टी साउंड', badge: 'पावरफुल बेस', btn: 'डीजे सिस्टम चुनें' },
      { subCode: '20-3', icon: '🪗', title: 'Instrument Repair & Classes', hindi: 'वाद्य यंत्र रिपेयर व संगीत क्लास', tag: 'संगीत सेवा', badge: 'उस्ताद कारीगर', btn: 'रिपेयर कराएं' }
    ]
  },
  21: {
    title: 'News & Magazines', subtitle: 'वार्ड/ग्राम जमीनी रिपोर्टिंग, अखबार विज्ञापन व मासिक पत्रिकाएं',
    icon: '📰', rating: '★ 4.8 (14k+ पाठक)', trust: 'Citizen Journalist Network', support: 'निष्पक्ष समाधान मंच',
    pillars: [
      { text: '📢 21-1: वार्ड व ग्राम स्तर की सच्ची नागरिक समस्याएं, वीडियो रिपोर्टिंग मंच', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📰 21-2: प्रमुख दैनिक अखबारों में नाम परिवर्तन, संपत्ति व शादी विज्ञापन बुकिंग', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '📬 21-3: प्रतियोगिता दर्पण, सामान्य ज्ञान व कृषि मासिक पत्रिकाओं की होम डिलीवरी', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '21-1', icon: '📢', title: 'Hyperlocal Citizen News', hindi: 'जमीनी नागरिक रिपोर्टिंग', tag: 'नागरिक पत्रकारिता', badge: 'समाधान मंच', btn: 'मुद्दे दर्ज करें' },
      { subCode: '21-2', icon: '📰', title: 'Newspaper Classified Ads', hindi: 'अखबार क्लासीफाइड विज्ञापन', tag: 'प्रिंट विज्ञापन', badge: 'आसान बुकिंग', btn: 'विज्ञापन दें' },
      { subCode: '21-3', icon: '📬', title: 'Monthly Magazines Courier', hindi: 'मासिक ज्ञान पत्रिकाएं', tag: 'ज्ञान साहित्य', badge: 'मासिक डाक', btn: 'पत्रिका मंगाएं' }
    ]
  },
  22: {
    title: 'Parenting', subtitle: 'पारंपरिक जच्चा-बच्चा मालिश दाई, जैविक शिशु आहार व लकड़ी पालना',
    icon: '👶', rating: '★ 4.9 (9k+ माता-पिता)', trust: 'Experienced Traditional Dai', support: 'शुद्ध आयुर्वेदिक सामग्री',
    pillars: [
      { text: '🤱 22-1: प्रसव बाद अनुभवी दाई द्वारा पारंपरिक आयुर्वेदिक जच्चा-बच्चा मालिश सेवा', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '🥣 22-2: केमिकल-मुक्त भुना हुआ रागी, मखाना व ड्राई-फ्रूट्स शिशु पोषण आहार दलिया', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🪆 22-3: शुद्ध सूती झबले, लकड़ी का पारंपरिक पालना (झूला), वॉकर व सुरक्षित खिलौने', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subs: [
      { subCode: '22-1', icon: '🤱', title: 'Newborn & Mother Massage Dai', hindi: 'अनुभवी मालिश दाई', tag: 'जच्चा-बच्चा सेवा', badge: 'पारंपरिक देखभाल', btn: 'दाई बुक करें' },
      { subCode: '22-2', icon: '🥣', title: 'Pure Organic Baby Food', hindi: 'जैविक शिशु पोषण आहार', tag: 'शिशु स्वास्थ्य', badge: 'केमिकल मुक्त', btn: 'आहार ऑर्डर करें' },
      { subCode: '22-3', icon: '🪆', title: 'Baby Cradle & Cotton Clothes', hindi: 'पारंपरिक पालना व सूती वस्त्र', tag: 'शिशु सामग्री', badge: 'शुद्ध सूती झबले', btn: 'सामान देखें' }
    ]
  },
  23: {
    title: 'Personalization', subtitle: 'मोबाइल लेदर स्किन, यूवी ग्लास, फोटो गिफ्ट व वाहन रेडियम प्लेट',
    icon: '✨', rating: '★ 4.9 (18k+ युवा ग्राहक)', trust: 'Custom Craft Verified', support: 'ऑन-स्पॉट फिटिंग',
    pillars: [
      { text: '📱 23-1: फोन पर 360-डिग्री मैट/लेदर स्किन इंस्टॉलेशन व किनारों तक यूवी ग्लास', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🖼️ 23-2: फोटो प्रिंटेड मग, कुशन, चाबी का गुच्छा व एलईडी फोटो फ्रेम ऑन-स्पॉट', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🏍️ 23-3: बाइक/कार हाई-सिक्योरिटी नंबर प्लेट फ्रेम व वाटरप्रूफ रेडियम कटिंग', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '23-1', icon: '📱', title: 'Mobile Skins & UV Glass', hindi: 'मोबाइल स्किन व यूवी ग्लास', tag: 'गैजेट कस्टमाइज', badge: '360° लेदर स्किन', btn: 'स्किन लगवाएं' },
      { subCode: '23-2', icon: '🖼️', title: 'Customized Photo Gifts', hindi: 'कस्टमाइज्ड फोटो गिफ्ट्स', tag: 'उपहार व यादें', badge: 'ऑन-स्पॉट प्रिंटिंग', btn: 'गिफ्ट बनाएं' },
      { subCode: '23-3', icon: '🏍️', title: 'Vehicle Radium & Plates', hindi: 'वाहन रेडियम व नंबर प्लेट', tag: 'ऑटो स्टाइलिंग', badge: 'वाटरप्रूफ रेडियम', btn: 'प्लेट बनवाएं' }
    ]
  },
  24: {
    title: 'Photography', subtitle: '5-मिनट पासपोर्ट फोटो, दुकान कैटलॉग शूट व उत्सव वीडियोग्राफी',
    icon: '📷', rating: '★ 4.9 (15k+ ग्राहक)', trust: 'Pro Studio Verified', support: '5-मिनट एक्सप्रेस डिलीवरी',
    pillars: [
      { text: '🪪 24-1: सरकारी भर्ती व पहचान पत्र हेतु 5 मिनट में 8 पासपोर्ट फोटो कटिंग प्रिंट', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📸 24-2: स्थानीय दुकानों के कपड़ों व किराना सामान का स्टूडियो व्हाइट बैकग्राउंड शूट', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '📹 24-3: मुंडन, जन्मदिन व पारिवारिक उत्सवों की फुल एचडी वीडियो रिकॉर्डिंग व मिक्सिंग', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '24-1', icon: '🪪', title: 'Instant Passport Photos', hindi: '5-मिनट तत्काल पासपोर्ट फोटो', tag: 'सरकारी दस्तावेज फोटो', badge: '8 फोटो कटिंग', btn: 'फोटो खिंचवाएं' },
      { subCode: '24-2', icon: '📸', title: 'Shop Catalog Photo Shoot', hindi: 'दुकान प्रोडक्ट फोटो शूट', tag: 'कैटलॉग फोटोग्राफी', badge: 'व्हाइट बैकग्राउंड', btn: 'शूट बुक करें' },
      { subCode: '24-3', icon: '📹', title: 'Event Videography', hindi: 'उत्सव वीडियोग्राफी व मिक्सिंग', tag: 'पारिवारिक उत्सव', badge: 'फुल एचडी', btn: 'वीडियोग्राफर बुलाएं' }
    ]
  },
  25: {
    title: 'Productivity', subtitle: 'सरकारी ऑनलाइन भर्ती फॉर्म, नया पैन कार्ड व थोक फोटोकॉपी',
    icon: '🖨️', rating: '★ 4.9 (26k+ युवा व नागरिक)', trust: 'Zero-Error Online Seva', support: 'तुरंत डिजिटल प्रिंट',
    pillars: [
      { text: '📑 25-1: सरकारी नौकरी, छात्रवृत्ति व प्रवेश फॉर्म बिना गलती ऑनलाइन सबमिशन व प्रिंट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🆔 25-2: नया पैन कार्ड आवेदन, पता सुधार सहायता, प्लास्टिक कार्ड व लेमिनेशन सेवा', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📚 25-3: थोक डबल-साइड फोटोकॉपी, रंगीन प्रिंटिंग व प्रोजेक्ट स्पाइरल बाइंडिंग', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subs: [
      { subCode: '25-1', icon: '📑', title: 'Sarkari Online Form Filling', hindi: 'सरकारी ऑनलाइन फॉर्म सेवा', tag: 'ऑनलाइन आवेदन', badge: 'ज़ीरो-एरर गारंटी', btn: 'फॉर्म भरवाएं' },
      { subCode: '25-2', icon: '🆔', title: 'PAN & Identity Docs Help', hindi: 'पैन कार्ड व पहचान दस्तावेज', tag: 'दस्तावेज सेवा', badge: 'पैन कार्ड आवेदन', btn: 'दस्तावेज बनवाएं' },
      { subCode: '25-3', icon: '📚', title: 'Bulk Xerox & Lamination', hindi: 'थोक ज़ेरॉक्स व बाइंडिंग', tag: 'प्रिंटिंग सेवा', badge: 'सस्ता थोक रेट', btn: 'प्रिंट ऑर्डर करें' }
    ]
  },
  26: {
    title: 'Shopping', subtitle: 'मोहल्ला बनिया शुद्ध राशन, थोक कपड़ा मंडी साड़ियां व आसान वापसी',
    icon: '🛍️', rating: '★ 4.9 (35k+ परिवार)', trust: 'Mohalla Trusted Bania', support: 'काउंटर पर 24-घंटे वापसी',
    pillars: [
      { text: '🌾 26-1: मोहल्ले के विश्वसनीय बनिया से शुद्ध आटा, दाल, तेल मासिक राशन होम डिलीवरी', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '👗 26-2: थोक कपड़ा मंडी भाव पर साड़ियां, पैंट-शर्ट व बच्चों के रेडीमेड वस्त्र', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '🔄 26-3: सामान पसंद न आने पर 24 घंटे में दुकान काउंटर पर बिना झंझट आसान वापसी', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subs: [
      { subCode: '26-1', icon: '🌾', title: 'Monthly Grocery Ration', hindi: 'पक्का बनिया मासिक राशन', tag: 'शुद्ध किराना', badge: 'डोरस्टेप डिलीवरी', btn: 'राशन मंगाएं' },
      { subCode: '26-2', icon: '👗', title: 'Wholesale Saree & Garments', hindi: 'थोक साड़ियां व वस्त्र', tag: 'रेडीमेड कपड़ा बाज़ार', badge: 'थोक मंडी रेट', btn: 'कपड़े देखें' },
      { subCode: '26-3', icon: '🔄', title: 'In-Store Easy Exchange', hindi: 'काउंटर पर आसान सामान वापसी', tag: 'ग्राहक भरोसा', badge: '24 घंटे एक्सचेंज', btn: 'नियम देखें' }
    ]
  },
  27: {
    title: 'Social', subtitle: 'वार्ड नागरिक शिकायत बोर्ड, किसान-व्यापारी मंच व इमरजेंसी ब्लड डोनर',
    icon: '🤝', rating: '★ 4.9 (18k+ नागरिक)', trust: 'Civic Action Verified', support: 'आपातकालीन स्थानीय संपर्क',
    pillars: [
      { text: '📢 27-1: वार्ड पार्षद सड़क, नाली व स्ट्रीट लाइट समस्या समाधान सार्वजनिक बोर्ड', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.14)' },
      { text: '🌾 27-2: खाद-बीज उपलब्धता, मंडी भाव व व्यापारी सुरक्षा परस्पर सहयोग मंच', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🩸 27-3: आपातकाल में अस्पताल में तुरंत पहुंचने वाले सत्यापित स्थानीय रक्तदाता', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subs: [
      { subCode: '27-1', icon: '📢', title: 'Mohalla Civic Complaint Board', hindi: 'वार्ड नागरिक समस्या बोर्ड', tag: 'नागरिक सेवा', badge: 'सार्वजनिक बोर्ड', btn: 'समस्या पोस्ट करें' },
      { subCode: '27-2', icon: '🌾', title: 'Kisan & Trader Union Forum', hindi: 'किसान व व्यापारी चौपाल', tag: 'सहयोग मंच', badge: 'मंडी चर्चा', btn: 'मंच से जुड़ें' },
      { subCode: '27-3', icon: '🩸', title: 'Emergency Blood Donor Net', hindi: 'इमरजेंसी ब्लड डोनर नेटवर्क', tag: 'जीवन रक्षा', badge: 'सत्यापित डोनर', btn: 'रक्तदाता खोजें' }
    ]
  },
  28: {
    title: 'Sports', subtitle: 'फ्लडलाइट बॉक्स क्रिकेट टर्फ, बल्ला रिपेयर व जोनल टूर्नामेंट',
    icon: '🏏', rating: '★ 4.9 (20k+ खिलाड़ी)', trust: 'Play Turf Verified', support: 'दूधिया रोशनी में नाइट स्लॉट',
    pillars: [
      { text: '🏟️ 28-1: फ्लडलाइट बॉक्स क्रिकेट व फुटबॉल टर्फ ग्राउंड 1-घंटे का स्लॉट बुकिंग', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🏏 28-2: कश्मीर/इंग्लिश विलो बल्ले की नॉकिंग, थ्रेडिंग, बाइंडिंग व टो-गार्ड रिपेयर', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🏆 28-3: जोनल टेनिस बॉल टूर्नामेंट टीम एंट्री, लाइव डिजिटल स्कोरिंग व ट्रॉफी पास', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subs: [
      { subCode: '28-1', icon: '🏟️', title: 'Night Box Cricket Turf', hindi: 'बॉक्स क्रिकेट टर्फ स्लॉट', tag: 'टर्फ ग्राउंड', badge: 'फ्लडलाइट नाइट मैच', btn: 'टर्फ बुक करें' },
      { subCode: '28-2', icon: '🏏', title: 'Cricket Bat Repair & Grip', hindi: 'बल्ला नॉकिंग व रिपेयर', tag: 'स्पोर्ट्स गियर', badge: 'मजबूत बाइंडिंग', btn: 'बल्ला रिपेयर कराएं' },
      { subCode: '28-3', icon: '🏆', title: 'Local Cricket Tournaments', hindi: 'टेनिस बॉल टूर्नामेंट एंट्री', tag: 'टूर्नामेंट मुकाबला', badge: 'लाइव स्कोरिंग', btn: 'टीम रजिस्टर करें' }
    ]
  },
  29: {
    title: 'Tools', subtitle: 'हैमर ड्रिल दैनिक किराया, आर्मेचर रीवाइंडिंग व मिस्त्री टूल किट',
    icon: '🔧', rating: '★ 4.8 (12k+ मिस्त्री व ठेकेदार)', trust: 'Heavy Duty Hardware', support: 'किफायती दैनिक किराया',
    pillars: [
      { text: '⚙️ 29-1: हैमर ड्रिल, मार्बल कटर, वेल्डिंग मशीन व जनरेटर किफायती दैनिक किराया', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '⚡ 29-2: पावर टूल कॉपर आर्मेचर वाइंडिंग, कार्बन ब्रश व स्विच रिपेयरिंग कार्य', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🧰 29-3: करनी, रंदा, साहुल, पाना, हथौड़ा व छैनी संपूर्ण मिस्त्री हैंड टूल सेट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '29-1', icon: '⚙️', title: 'Daily Power Tools Rental', hindi: 'पावर टूल्स दैनिक किराया', tag: 'मशीन किराया', badge: 'किफायती दैनिक दर', btn: 'टूल किराए पर लें' },
      { subCode: '29-2', icon: '⚡', title: 'Power Tool Rewinding', hindi: 'आर्मेचर वाइंडिंग व रिपेयर', tag: 'टूल रिपेयरिंग', badge: 'शुद्ध तांबा वाइंडिंग', btn: 'मोटर रिपेयर कराएं' },
      { subCode: '29-3', icon: '🧰', title: 'Mistry Hand Tools Kit', hindi: 'पूर्ण मिस्त्री हैंड टूल किट', tag: 'कारीगर औजार', badge: 'पक्का स्टील किट', btn: 'किट खरीदें' }
    ]
  },
  30: {
    title: 'Travel & Local', subtitle: 'बारात बोलेरो/स्कॉर्पियो, तीर्थ यात्रा लग्जरी बस व स्टेशन कैब',
    icon: '🚖', rating: '★ 4.9 (21k+ यात्री)', trust: 'Verified Commercial Fleet', support: 'समय पर गाड़ी आगमन',
    pillars: [
      { text: '🚙 30-1: शादी, तिलक व पारिवारिक यात्रा हेतु बोलेरो/स्कॉर्पियो/इनोवा बुकिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🚌 30-2: अयोध्या, काशी, गया 2x2 लग्जरी पुशबैक टूर बस कंफर्म सीट बुकिंग', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🚕 30-3: स्टेशन व एयरपोर्ट हेतु समय पर पहुंचने वाली फिक्स-किराया टैक्सी सेवा', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '30-1', icon: '🚙', title: 'Bolero & Scorpio Rental', hindi: 'बारात व पारिवारिक गाड़ी किराया', tag: 'कमर्शियल वाहन', badge: 'अनुभवी ड्राइवर', btn: 'गाड़ी बुक करें' },
      { subCode: '30-2', icon: '🚌', title: 'Pilgrimage Tour Bus Seats', hindi: 'तीर्थ यात्रा लग्जरी बस सीट', tag: 'टूर पैकेज', badge: '2x2 पुशबैक सीट', btn: 'बस सीट बुक करें' },
      { subCode: '30-3', icon: '🚕', title: 'Railway Station Drop Cabs', hindi: 'स्टेशन फिक्स-किराया कैब', tag: 'लोकल टैक्सी', badge: 'फिक्स किराया', btn: 'टैक्सी बुलाएं' }
    ]
  },
  31: {
    title: 'Video Players & Editors', subtitle: 'दुकान इंस्टाग्राम रील्स, शादी वीडियो सॉन्ग मिक्सिंग व थंबनेल',
    icon: '🎬', rating: '★ 4.9 (13k+ क्रिएटर व दुकानदार)', trust: 'Creative Studio Verified', support: 'फुल एचडी 1080p आउटपुट',
    pillars: [
      { text: '📱 31-1: स्थानीय कपड़ों व जूतों की दुकान हेतु 30-सेकंड आकर्षक इंस्टाग्राम रील्स', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🎞️ 31-2: शादी वीडियोग्राफी की 3D टाइटल, गीत व सिनेमैटिक वीडियो मिक्सिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🎬 31-3: 1080p वीडियो एडिटिंग, बैकग्राउंड वॉयस क्लीनिंग व थंबनेल डिजाइन', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '31-1', icon: '📱', title: 'Retail Shop Promo Reels', hindi: 'दुकान प्रोमो रील्स निर्माण', tag: 'रील्स क्रिएशन', badge: '30-सेकंड वायरल रील', btn: 'रील बनवाएं' },
      { subCode: '31-2', icon: '🎞️', title: 'Wedding Video Song Mixing', hindi: 'शादी वीडियो मिक्सिंग व टाइटल', tag: 'वीडियो प्रोडक्शन', badge: '3D टाइटल व मिक्सिंग', btn: 'मिक्सिंग कराएं' },
      { subCode: '31-3', icon: '🎬', title: 'YouTube Channel Edit & Thumb', hindi: 'यूट्यूब एडिट व थंबनेल', tag: 'यूट्यूब एडिटिंग', badge: '1080p एचडी एडिट', btn: 'एडिटिंग बुक करें' }
    ]
  },
  32: {
    title: 'Weather', subtitle: 'ग्राम स्तर सटीक वर्षा चेतावनी, कीटनाशक छिड़काव सलाह व फसल क्लेम',
    icon: '🌦️', rating: '★ 4.8 (27k+ किसान)', trust: 'Agro-Met Certified', support: '72-घंटे रडार अलर्ट',
    pillars: [
      { text: '🌧️ 32-1: 72 घंटे का गांव स्तर पर सटीक बारिश, आंधी व ओलावृष्टि रडार चेतावनी', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🌾 32-2: मौसम अनुसार धान व गेहूं में कीटनाशक छिड़काव का सही वैज्ञानिक समय', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '📋 32-3: सूखा व अतिवृष्टि में सरकारी फसल क्षतिपूर्ति मुआवजा सर्वेक्षण सहायता', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subs: [
      { subCode: '32-1', icon: '🌧', title: 'Village Rain & Storm Alerts', hindi: 'ग्राम स्तर वर्षा व आंधी चेतावनी', tag: 'मौसम अलर्ट', badge: '72-घंटे रडार अलर्ट', btn: 'अलर्ट देखें' },
      { subCode: '32-2', icon: '🌾', title: 'Crop Spray Weather Advisory', hindi: 'कीटनाशक छिड़काव मौसम सलाह', tag: 'कृषि सलाह', badge: 'सही वैज्ञानिक समय', btn: 'सलाह पढ़ें' },
      { subCode: '32-3', icon: '📋', title: 'Crop Damage Insurance Claim', hindi: 'फसल क्षतिपूर्ति मुआवजा क्लेम', tag: 'फसल बीमा सहायता', badge: 'मुआवजा सर्वेक्षण', btn: 'क्लेम सहायता लें' }
    ]
  },
  33: {
    title: 'Action Games', subtitle: 'PS5 गेमिंग पार्लर स्लॉट, लैन ई-स्पोर्ट्स मुकाबला व लेजर टैग',
    icon: '🎮', rating: '★ 4.9 (16k+ गेमर्स)', trust: 'Gaming Hub Verified', support: '4K स्क्रीन व डुअल कंट्रोलर',
    pillars: [
      { text: '🕹️ 33-1: 4K स्क्रीन प्लेस्टेशन 5 व गेमिंग पीसी 1-घंटा स्लॉट बुकिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🏆 33-2: स्थानीय लैन ई-स्पोर्ट्स मुकाबला टीम एंट्री पास व नकद प्राइज पूल', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🔫 33-3: जन्मदिन पार्टी हेतु इन्फ्रारेड लेजर टैग शूटिंग बंकर सेटअप ऑन-साइट', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.14)' }
    ],
    subs: [
      { subCode: '33-1', icon: '🕹️', title: 'PS5 & PC Gaming Parlor', hindi: 'PS5 व गेमिंग पीसी स्लॉट', tag: 'गेमिंग पार्लर', badge: '4K डुअल कंट्रोलर', btn: 'स्लॉट बुक करें' },
      { subCode: '33-2', icon: '🏆', title: 'Action Gaming Tournament Pass', hindi: 'लैन मुकाबला टीम पास', tag: 'ई-स्पोर्ट्स', badge: 'नकद प्राइज पूल', btn: 'पास लें' },
      { subCode: '33-3', icon: '🔫', title: 'Laser Tag Arena Party Setup', hindi: 'लेजर टैग शूटिंग बंकर सेटअप', tag: 'पार्टी गेम', badge: 'इन्फ्रारेड बंकर', btn: 'सेटअप मंगाएं' }
    ]
  },
  34: {
    title: 'Adventure Games', subtitle: 'कैंपिंग टेंट रेंटल, प्रमाणित जंगल ट्रैकिंग गाइड व जिपलाइन पास',
    icon: '🏕️', rating: '★ 4.9 (11k+ साहसी पर्यटक)', trust: 'Outdoor Safety Certified', support: 'वाटरप्रूफ गियर व गाइड',
    pillars: [
      { text: '⛺ 34-1: 4-पर्सन वाटरप्रूफ कैंपिंग टेंट, स्लीपिंग बैग व बॉनफायर उपकरण किराया', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🧭 34-2: स्थानीय पहाड़ी व जंगल ट्रैकिंग हेतु प्रमाणित गाइड (सुरक्षित मार्ग)', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🧗 34-3: रिवर राफ्टिंग, जिपलाइन व एडवेंचर पार्क गतिविधि डिस्काउंट पास', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subs: [
      { subCode: '34-1', icon: '⛺', title: 'Camping Tent & Gear Rental', hindi: 'कैंपिंग टेंट व बॉनफायर किराया', tag: 'कैंपिंग उपकरण', badge: 'वाटरप्रूफ टेंट', btn: 'टेंट किराए पर लें' },
      { subCode: '34-2', icon: '🧭', title: 'Local Forest Trekking Guides', hindi: 'प्रमाणित जंगल ट्रैकिंग गाइड', tag: 'नेचर ट्रेक', badge: 'सुरक्षित रूट', btn: 'गाइड बुक करें' },
      { subCode: '34-3', icon: '🧗', title: 'Zipline & Adventure Park Pass', hindi: 'जिपलाइन व एडवेंचर पार्क पास', tag: 'एडवेंचर स्पोर्ट्स', badge: 'डिस्काउंट टिकट', btn: 'पास बुक करें' }
    ]
  },
  35: {
    title: 'Arcade Games', subtitle: 'मेला ब्रेकडांस झूला, ड्रैगन ट्रेन, आर्केड टोकन व एयर हॉकी',
    icon: '🎡', rating: '★ 4.8 (22k+ बच्चे व परिवार)', trust: 'Carnival Fair Certified', support: 'कॉम्बो डिस्काउंट पास',
    pillars: [
      { text: '🎠 35-1: शहर के मेले में ब्रेकडांस झूला, ड्रैगन ट्रेन व मौत का कुआं कॉम्बो पास', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🪙 35-2: मॉल गेमिंग जोन के सिक्के (टोकन) 30% अतिरिक्त गेम बैलेंस के साथ', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🎈 35-3: बच्चों की बर्थडे पार्टी हेतु एयर हॉकी टेबल व बाउंसिंग झूला किराया', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' }
    ],
    subs: [
      { subCode: '35-1', icon: '🎠', title: 'Mela Jhoola & Dragon Train', hindi: 'मेला झूला व ट्रेन कॉम्बो पास', tag: 'आनंद मेला', badge: 'कॉम्बो पास', btn: 'झूला पास लें' },
      { subCode: '35-2', icon: '🪙', title: 'Arcade Center Token Packs', hindi: 'आर्केड सेंटर टोकन पैक', tag: 'मॉल गेमिंग', badge: '30% एक्स्ट्रा टोकन', btn: 'टोकन खरीदें' },
      { subCode: '35-3', icon: '🎈', title: 'Party Bouncy & Air Hockey', hindi: 'बाउंसिंग झूला व एयर हॉकी', tag: 'पार्टी रेंटल', badge: 'ऑन-साइट रेंटल', btn: 'सेटअप मंगाएं' }
    ]
  },
  36: {
    title: 'Board Games', subtitle: 'मोहल्ला कैरम चैंपियनशिप, ऑफलाइन शतरंज क्लब व शीशम बोर्ड',
    icon: '♟️', rating: '★ 4.9 (14k+ खिलाड़ी)', trust: 'Tournament Board Certified', support: 'नकद पुरस्कार मुकाबला',
    pillars: [
      { text: '🎯 36-1: मोहल्ला कैरम बोर्ड चैंपियनशिप रजिस्ट्रेशन, ट्रॉफी व नकद पुरस्कार', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '♟️ 36-2: फिडे नियमों के साथ टाइमर शतरंज बोर्ड कोचिंग व वीकेंड क्लब मैच', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🪵 36-3: 32mm इंग्लिश बर्च वाटरप्रूफ कैरम बोर्ड, स्ट्राइकर व बोरिक पाउडर', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '36-1', icon: '🎯', title: 'Mohalla Carrom Tournament', hindi: 'मोहल्ला कैरम चैंपियनशिप', tag: 'कैरम मुकाबला', badge: 'नकद प्राइज', btn: 'रजिस्टर करें' },
      { subCode: '36-2', icon: '♟️', title: 'Offline Chess Academy & Club', hindi: 'ऑफलाइन शतरंज क्लब व मैच', tag: 'माइंड स्पोर्ट्स', badge: 'फिडे क्लॉक मैच', btn: 'क्लब ज्वाइन करें' },
      { subCode: '36-3', icon: '🪵', title: 'Heavy Birch Carrom Boards', hindi: '32mm बर्च कैरम बोर्ड सेट', tag: 'स्पोर्ट्स गियर', badge: 'इंग्लिश बर्च बोर्ड', btn: 'बोर्ड खरीदें' }
    ]
  },
  37: {
    title: 'Card Games', subtitle: 'लाइव जादूगर ताश शो, प्लास्टिक ताश व सीनियर सिटीजन ब्रिज क्लब',
    icon: '🃏', rating: '★ 4.8 (8k+ दर्शक व सदस्य)', trust: 'Entertainment Verified', support: 'कसीनो-ग्रेड वाटरप्रूफ मैट',
    pillars: [
      { text: '🎩 37-1: पारिवारिक जन्मदिन व शादी समारोह हेतु लाइव जादूगर ताश शो बुकिंग', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🃏 37-2: कभी न फटने वाले कसीनो-ग्रेड पीवीसी ताश व ग्रीन फेल्ट टेबल मैट', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '👴 37-3: वरिष्ठ नागरिकों का शाम का मनोरंजन कम्युनिटी कार्ड क्लब पास', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '37-1', icon: '🎩', title: 'Live Magician Card Show', hindi: 'समारोह लाइव जादूगर शो', tag: 'लाइव मैजिक', badge: 'हाथ की सफाई शो', btn: 'जादूगर बुक करें' },
      { subCode: '37-2', icon: '🃏', title: '100% Plastic Waterproof Cards', hindi: 'वाटरप्रूफ पीवीसी ताश सेट', tag: 'कार्ड सामग्री', badge: 'कसीनो-ग्रेड PVC', btn: 'ताश सेट मंगाएं' },
      { subCode: '37-3', icon: '👴', title: 'Senior Citizen Bridge Club', hindi: 'सीनियर सिटीजन कार्ड क्लब', tag: 'कम्युनिटी क्लब', badge: 'शाम का मनोरंजन', btn: 'क्लब पास लें' }
    ]
  },
  38: {
    title: 'Casino Games', subtitle: 'शादी पार्टी फन रूले टेबल, लकी स्पिन व्हील व पार्टी क्रुपियर',
    icon: '🎡', rating: '★ 4.8 (9k+ इवेंट्स)', trust: 'Non-Gambling Entertainment', support: 'पूर्ण पार्टी एंकर सेटअप',
    pillars: [
      { text: '🎲 38-1: शादी पार्टी हेतु गैर-जुआ फन रूले व ब्लैकजैक गेम टेबल व पार्टी एंकर', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🎡 38-2: दुकान प्रचार व त्योहार डिस्काउंट हेतु घूमने वाला लकी स्पिन व्हील', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🎩 38-3: पेशेवर क्रुपियर (गेम डीलर), कस्टमाइज्ड चिप्स व पोकर टेबल सेटअप', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '38-1', icon: '🎲', title: 'Wedding Fun Casino Setup', hindi: 'शादी पार्टी फन रूले टेबल', tag: 'थीम पार्टी', badge: 'गैर-जुआ फन गेम्स', btn: 'सेटअप बुक करें' },
      { subCode: '38-2', icon: '🎡', title: 'Promotional Lucky Spin Wheel', hindi: 'प्रचार लकी स्पिन व्हील निर्माण', tag: 'शॉप प्रमोशन', badge: 'कस्टम डिस्काउंट व्हील', btn: 'व्हील बनवाएं' },
      { subCode: '38-3', icon: '🎩', title: 'Party Game Dealer Troupe', hindi: 'पार्टी गेम डीलर व टेबल', tag: 'कॉर्पोरेट इवेंट', badge: 'पेशेवर डीलर', btn: 'डीलर टीम बुक करें' }
    ]
  },
  39: {
    title: 'Casual Games', subtitle: 'रविवार मोहल्ला लूडो लीग, फूजबॉल टोकन व लकड़ी का बड़ा लूडो',
    icon: '🎲', rating: '★ 4.9 (19k+ परिवार)', trust: 'Handcrafted Heritage', support: 'सागवान नक्काशीदार बोर्ड',
    pillars: [
      { text: '🎲 39-1: रविवार पारिवारिक लूडो मुकाबला, चाय-नाश्ता व विजेता मेडल कॉम्बो', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '⚽ 39-2: कैफे टेबल सॉकर (फूजबॉल) 10-बॉल टोकन व ब्रास डार्ट बोर्ड गेम्स', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🪵 39-3: सागवान की नक्काशीदार लकड़ी का बड़ा लूडो-सांप सीढ़ी बोर्ड होम डिलीवरी', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '39-1', icon: '🎲', title: 'Sunday Mohalla Ludo League', hindi: 'रविवार मोहल्ला लूडो लीग', tag: 'पारिवारिक गेम्स', badge: 'चाय-नाश्ता व मेडल', btn: 'लीग में जुड़ें' },
      { subCode: '39-2', icon: '⚽', title: 'Foosball & Dart Board Tokens', hindi: 'फूजबॉल टोकन व डार्ट बोर्ड', tag: 'कैफे गेम्स', badge: '10-बॉल टोकन', btn: 'टोकन लें' },
      { subCode: '39-3', icon: '🪵', title: 'Handcrafted Wooden Ludo Sets', hindi: 'सागवान लकड़ी लूडो सेट', tag: 'हस्तशिल्प खिलौने', badge: 'सागवान लकड़ी', btn: 'लूडो बोर्ड खरीदें' }
    ]
  },
  40: {
    title: 'Educational Games', subtitle: 'ऑफलाइन अबेकस क्लास, साइंस क्विज पास व लकड़ी साइंस मॉडल',
    icon: '🧩', rating: '★ 4.9 (13k+ छात्र व अभिभावक)', trust: 'STEM Learning Verified', support: 'हैंड्स-ऑन DIY किट्स',
    pillars: [
      { text: '🧮 40-1: बच्चों की दिमागी गणना तेज करने हेतु ऑफलाइन हैंड्स-ऑन अबेकस क्लास', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🏆 40-2: क्षेत्रीय विज्ञान व सामान्य ज्ञान ऑफलाइन क्विज प्रतियोगिता भागीदारी पास', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🤖 40-3: सोलर सिस्टम, हाइड्रोलिक क्रेन व रोबोटिक्स DIY लकड़ी असेंबली किट्स', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '40-1', icon: '🧮', title: 'Offline Abacus & Mental Math', hindi: 'ऑफलाइन अबेकस क्लास', tag: 'मेंटल मैथ', badge: 'हैंड्स-ऑन क्लास', btn: 'क्लास में जुड़ें' },
      { subCode: '40-2', icon: '🏆', title: 'Inter-School Brain Quiz Pass', hindi: 'इंटर-स्कूल साइंस क्विज पास', tag: 'क्विज प्रतियोगिता', badge: 'पार्टिसिपेशन पास', btn: 'क्विज पास लें' },
      { subCode: '40-3', icon: '🤖', title: 'Wooden Science Model Kits', hindi: 'लकड़ी हाइड्रोलिक व सोलर किट्स', tag: 'STEM मॉडल्स', badge: 'DIY लकड़ी किट', btn: 'साइंस किट मंगाएं' }
    ]
  },
  41: {
    title: 'Music Games', subtitle: 'साउंडप्रूफ जैम रूम, पार्टी वायरलेस कराओके व सिंगिंग ऑडिशन',
    icon: '🎤', rating: '★ 4.8 (10k+ संगीत प्रेमी)', trust: 'Studio Sound Certified', support: 'डुअल माइक व लिरिक्स स्क्रीन',
    pillars: [
      { text: '🥁 41-1: ड्रम किट, कीबोर्ड व गिटार एम्पलीफायर युक्त 1-घंटा म्यूजिक रूम प्रैक्टिस', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🎤 41-2: डुअल वायरलेस माइक, लिरिक्स स्क्रीन व भारी स्पीकर कॉम्बो पार्टी रेंटल', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🌟 41-3: क्षेत्रीय स्टेज गायन प्रतिभा खोज प्रतियोगिता ऑडिशन रजिस्ट्रेशन', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' }
    ],
    subs: [
      { subCode: '41-1', icon: '🥁', title: 'Soundproof Jam Room Slot', hindi: 'साउंडप्रूफ जैम रूम स्लॉट', tag: 'म्यूजिक प्रैक्टिस', badge: 'ड्रम व एम्पलीफायर', btn: 'जैम स्लॉट बुक करें' },
      { subCode: '41-2', icon: '🎤', title: 'Party Karaoke Machine Setup', hindi: 'पार्टी कराओके मशीन रेंटल', tag: 'पार्टी म्यूजिक', badge: 'डुअल वायरलेस माइक', btn: 'कराओके मंगाएं' },
      { subCode: '41-3', icon: '🌟', title: 'Local Singing Audition Pass', hindi: 'गायन प्रतियोगिता ऑडिशन पास', tag: 'टैलेंट हंट', badge: 'स्टेज ऑडिशन', btn: 'ऑडिशन रजिस्टर करें' }
    ]
  },
  42: {
    title: 'Puzzle Games', subtitle: 'रूबिक क्यूब स्पीड वर्कशॉप, जिला सुडोकू मीट व स्पीडक्यूब किट',
    icon: '🧩', rating: '★ 4.9 (12k+ क्यूबर्स व छात्र)', trust: 'Brain Training Certified', support: 'मैग्नेटिक क्यूब्स व ऑयल',
    pillars: [
      { text: '🧊 42-1: 2-दिवसीय प्रैक्टिकल वर्कशॉप—30 सेकंड में 3x3 क्यूब हल करने की तकनीक', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📝 42-2: जिला स्तरीय ऑफलाइन टाइमर सुडोकू प्रतियोगिता व योग्यता प्रमाणपत्र', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '✨ 42-3: स्मूथ मैग्नेटिक 3x3, 4x4 क्यूब्स व सिलिकॉन लुब्रिकेंट ऑयल कॉम्बो', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '42-1', icon: '🧊', title: 'Rubiks Cube Speed Workshop', hindi: 'रूबिक क्यूब स्पीड वर्कशॉप', tag: 'क्यूबिंग तकनीक', badge: '30-सेकंड सॉल्विंग', btn: 'वर्कशॉप जॉइन करें' },
      { subCode: '42-2', icon: '📝', title: 'District Sudoku Championship', hindi: 'जिला सुडोकू चैंपियनशिप', tag: 'माइंड लीग', badge: 'टाइमर प्रतियोगिता', btn: 'भाग लें' },
      { subCode: '42-3', icon: '✨', title: 'Magnetic Speedcube Combos', hindi: 'मैग्नेटिक स्पीडक्यूब कॉम्बो', tag: 'स्पीडक्यूब गियर', badge: 'स्मूथ मैग्नेटिक', btn: 'क्यूब किट खरीदें' }
    ]
  },
  43: {
    title: 'Racing Games', subtitle: 'पेट्रोल गो-कार्टिंग ट्रैक, RC कार रेसिंग व 10 किमी साइकिल मैराथन',
    icon: '🏎️', rating: '★ 4.9 (17k+ रेसर्स)', trust: 'Track Safety Certified', support: 'फुल हेलमेट व सेफ्टी किट',
    pillars: [
      { text: '🏎️ 43-1: 10-लैप गो-कार्टिंग ट्रैक टिकट, फुल हेलमेट व चेस्ट गार्ड सेफ्टी किट', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.14)' },
      { text: '🚗 43-2: हाई-स्पीड रिमोट कंट्रोल (RC) कार रेसिंग ट्रैक स्लॉट व मुकाबला', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🚴 43-3: 10 किमी हाईवे साइकिल मैराथन प्रतियोगिता रजिस्ट्रेशन (टी-शर्ट व मेडल)', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '43-1', icon: '🏎️', title: 'Go-Karting Track Racing Pass', hindi: 'गो-कार्टिंग ट्रैक रेसिंग पास', tag: 'मोटरस्पोर्ट्स', badge: '10-लैप ट्रैक पास', btn: 'लैप बुक करें' },
      { subCode: '43-2', icon: '🚗', title: 'RC Car Obstacle Track', hindi: 'RC कार हाई-स्पीड ट्रैक स्लॉट', tag: 'आरसी रेसिंग', badge: 'ऑब्स्टेकल ट्रैक', btn: 'ट्रैक स्लॉट लें' },
      { subCode: '43-3', icon: '🚴', title: 'Bicycle Cyclothon Entry Pass', hindi: '10 किमी साइकिल मैराथन पास', tag: 'साइक्लोथॉन', badge: 'टी-शर्ट व मेडल', btn: 'मैराथन में जुड़ें' }
    ]
  },
  44: {
    title: 'Role Playing Games', subtitle: 'रामलीला पात्र चयन, पारंपरिक ऐतिहासिक वेशभूषा व नुक्कड़ नाटक',
    icon: '🎭', rating: '★ 4.9 (15k+ रंगकर्मी)', trust: 'Traditional Folk Certified', support: 'राजसी मुकुट व वेशभूषा',
    pillars: [
      { text: '👑 44-1: रामलीला, कृष्णलीला व ऐतिहासिक नाटकों हेतु पात्र चयन व संवाद अभ्यास', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🗡️ 44-2: राजा, सेनापति, मुकुट, तलवार, धनुष व पारंपरिक नाटक वेशभूषा किराया', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📢 44-3: सरकारी व सामाजिक जागरूकता अभियानों हेतु पेशेवर नुक्कड़ नाटक टीम', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '44-1', icon: '👑', title: 'Ramlila Character Auditions', hindi: 'रामलीला पात्र ऑडिशन व रिहर्सल', tag: 'पारंपरिक नाटक', badge: 'संवाद अभ्यास', btn: 'ऑडिशन दें' },
      { subCode: '44-2', icon: '🗡️', title: 'Historical Costume Rental', hindi: 'ऐतिहासिक वेशभूषा व मुकुट किराया', tag: 'ड्रामा कॉस्ट्यूम', badge: 'राजसी मुकुट-तलवार', btn: 'वेशभूषा चुनें' },
      { subCode: '44-3', icon: '📢', title: 'Professional Nukkad Natak', hindi: 'पेशेवर नुक्कड़ नाटक टीम', tag: 'जागरूकता मंच', badge: 'सामाजिक नाटक', btn: 'टीम बुक करें' }
    ]
  },
  45: {
    title: 'Simulation Games', subtitle: 'कार ड्राइविंग कॉकपिट सिमुलेटर, ट्रैक्टर ट्रेनिंग व 9D VR राइड',
    icon: '🚜', rating: '★ 4.9 (18k+ युवा व छात्र)', trust: 'Vocational Simulator Certified', support: 'ज़ीरो दुर्घटना जोखिम',
    pillars: [
      { text: '🚗 45-1: शून्य दुर्घटना जोखिम के साथ स्टीयरिंग, गियर व ट्रैफिक नियम केबिन क्लास', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🚜 45-2: ग्रामीण युवाओं हेतु खेत में ट्रैक्टर व कंबाइन हार्वेस्टर ऑपरेटिंग ट्रेनिंग', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '👓 45-3: 360-डिग्री मोशन चेयर रोलर कोस्टर व फ्लाइट सिमुलेशन वीआर राइड स्लॉट', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subs: [
      { subCode: '45-1', icon: '🚗', title: 'Car Driving Cockpit Sim', hindi: 'कार ड्राइविंग कॉकपिट सिमुलेटर', tag: 'ड्राइविंग क्लास', badge: 'केबिन सिमुलेटर', btn: 'क्लास बुक करें' },
      { subCode: '45-2', icon: '🚜', title: 'Tractor & Harvester Training', hindi: 'ट्रैक्टर व हार्वेस्टर ट्रेनिंग', tag: 'कृषि मशीनरी', badge: 'फील्ड ऑपरेटिंग', btn: 'ट्रेनिंग लें' },
      { subCode: '45-3', icon: '👓', title: '9D Virtual Reality (VR) Zone', hindi: '9D मोशन वीआर राइड स्लॉट', tag: 'वीआर सिमुलेशन', badge: '360° मोशन चेयर', btn: 'राइड टिकट लें' }
    ]
  },
  46: {
    title: 'Sports Games', subtitle: '20-ओवर लेदर बॉल नाइट क्रिकेट, 5v5 फुटसल टर्फ व ब्रास ट्रॉफी',
    icon: '🏆', rating: '★ 4.9 (21k+ एथलीट्स)', trust: 'Tournament League Certified', support: '3-फीट ब्रास ट्रॉफी व मेडल',
    pillars: [
      { text: '🏏 46-1: 20-ओवर फ्लडलाइट नॉकआउट टूर्नामेंट टीम एंट्री, अंपायर व लाइव स्कोरिंग', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '⚽ 46-2: फुटसल कोर्ट 1-घंटा स्लॉट बुकिंग, साइज-5 मैच बॉल व गोलपोस्ट गियर', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🏆 46-3: टूर्नामेंट हेतु 3 फीट बड़ी ब्रास ट्रॉफी, मेडल व प्रिंटेड जर्सी सेट निर्माण', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '46-1', icon: '🏏', title: 'Leather Ball Night Cricket', hindi: '20-ओवर लेदर बॉल नाइट लीग', tag: 'नॉकआउट टूर्नामेंट', badge: 'फ्लडलाइट मैच', btn: 'टीम एंट्री लें' },
      { subCode: '46-2', icon: '⚽', title: '5v5 Football Turf Court', hindi: '5v5 फुटसल टर्फ कोर्ट स्लॉट', tag: 'फुटबॉल टर्फ', badge: 'मैच बॉल व गियर', btn: 'कोर्ट बुक करें' },
      { subCode: '46-3', icon: '🏆', title: 'Sports Trophies & Medals', hindi: '3-फीट ब्रास ट्रॉफी व जर्सी', tag: 'टूर्नामेंट पुरस्कार', badge: 'ब्रास ट्रॉफी', btn: 'ट्रॉफी बनवाएं' }
    ]
  },
  47: {
    title: 'Strategy Games', subtitle: 'ग्रैंडमास्टर चेस टैक्टिक्स कैंप, 10-मिनट रैपिड लीग व शीशम मोहरे',
    icon: '♟️', rating: '★ 4.9 (10k+ शतरंज खिलाड़ी)', trust: 'Grandmaster Tactics Verified', support: 'स्टॉन्टन शीशम मोहरे',
    pillars: [
      { text: '🧠 47-1: ग्रैंडमास्टर ओपनिंग और एंडगेम रणनीति सीखने का 7-दिवसीय ऑफलाइन कैंप', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '⏱️ 47-2: 10-मिनट डिजिटल क्लॉक रैपिड शतरंज रेटिंग मैच (वीकेंड लीग)', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🪵 47-3: भारी शीशम की लकड़ी के स्टॉन्टन मोहरे व रोल्ड विनाइल बोर्ड किट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '47-1', icon: '🧠', title: '7-Day Chess Tactics Camp', hindi: '7-दिवसीय चेस टैक्टिक्स कैंप', tag: 'माइंड स्ट्रैटेजी', badge: 'ग्रैंडमास्टर तकनीक', btn: 'कैंप में जुड़ें' },
      { subCode: '47-2', icon: '⏱️', title: 'Rapid Timed Chess League', hindi: '10-मिनट रैपिड चेस लीग', tag: 'रेटिंग मुकाबला', badge: 'डिजिटल क्लॉक', btn: 'लीग खेलें' },
      { subCode: '47-3', icon: '🪵', title: 'Weighted Wooden Chess Sets', hindi: 'शीशम लकड़ी स्टॉन्टन चेस सेट', tag: 'प्रीमियम चेस', badge: 'वेटेड शीशम मोहरे', btn: 'चेस सेट खरीदें' }
    ]
  },
  48: {
    title: 'Trivia Games', subtitle: 'लाइव बजर पोडियम क्विज पास, शनिवार नकद ट्रिविया व 5000 GK बुकलेट',
    icon: '💡', rating: '★ 4.8 (17k+ प्रतिभागी)', trust: 'Podium Stage Certified', support: 'प्रिंटेड बुकलेट पार्सल',
    pillars: [
      { text: '🔔 48-1: कॉलेज व स्कूल स्तरीय सामान्य ज्ञान प्रतियोगिता पास (लाइव बजर पोडियम)', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '💰 48-2: शनिवार शाम नकद पुरस्कार वाली प्रश्नोत्तरी सभा में भागीदारी टिकट', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '📖 48-3: स्थिर सामान्य ज्ञान व समसामयिकी 5000 प्रश्नोत्तर प्रिंटेड बुकलेट पार्सल', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subs: [
      { subCode: '48-1', icon: '🔔', title: 'Live Buzzer Round Quiz Pass', hindi: 'लाइव बजर पोडियम क्विज पास', tag: 'मंच क्विज', badge: 'लाइव बजर राउंड', btn: 'पास बुक करें' },
      { subCode: '48-2', icon: '💰', title: 'Saturday Cash Prize Trivia', hindi: 'शनिवार नकद पुरस्कार ट्रिविया', tag: 'नकद प्रश्नोत्तरी', badge: 'नकद पुरस्कार', btn: 'टिकट लें' },
      { subCode: '48-3', icon: '📖', title: '5000 GK Question Booklets', hindi: '5000 सामान्य ज्ञान बुकलेट', tag: 'प्रतियोगी साहित्य', badge: 'प्रिंटेड बुकलेट', btn: 'बुकलेट मंगाएं' }
    ]
  },
  49: {
    title: 'Word Games', subtitle: 'जिला स्पेलिंग बी प्रतियोगिता, मासिक वर्ग पहेली व पाइनवुड स्क्रैबल',
    icon: '🔤', rating: '★ 4.8 (11k+ भाषा प्रेमी)', trust: 'Linguistic Council Certified', support: 'लकड़ी वर्णमाला टाइल्स',
    pillars: [
      { text: '🎙️ 49-1: जिला स्तरीय हिंदी व अंग्रेजी स्पेलिंग बी प्रतियोगिता पास व प्रमाणपत्र', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📰 49-2: अखबार वर्ग पहेली हल करने का मासिक डाक मुकाबला व नकद इनाम', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🪵 49-3: पाइनवुड लकड़ी की वर्णमाला टाइल्स व घूमने वाला स्क्रैबल बोर्ड गेम', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '49-1', icon: '🎙️', title: 'Spelling Bee District Contest', hindi: 'जिला स्पेलिंग बी प्रतियोगिता', tag: 'स्पेलिंग मुकाबला', badge: 'मंच मुकाबला व सर्टिफिकेट', btn: 'भाग लें' },
      { subCode: '49-2', icon: '📰', title: 'Monthly Crossword Contest', hindi: 'मासिक वर्ग पहेली डाक मुकाबला', tag: 'शब्द पहेली', badge: 'नकद इनाम', btn: 'मुकाबला पास लें' },
      { subCode: '49-3', icon: '🪵', title: 'Wooden Scrabble & Word Tiles', hindi: 'पाइनवुड स्क्रैबल व वर्ड टाइल्स', tag: 'वुडन बोर्ड गेम', badge: 'पाइनवुड टाइल्स', btn: 'स्क्रैबल खरीदें' }
    ]
  },
  50: {
    title: 'Family Games & Community Fair', subtitle: 'शनिवार मोहल्ला हाउजी (तंबोला), आनंद मेला स्टॉल व किटी पार्टी गेम किट',
    icon: '🎡', rating: '★ 4.9 (25k+ परिवार)', trust: 'Community Fair Verified', support: 'फुल हाउस नकद लाभांश',
    pillars: [
      { text: '🎟️ 50-1: शनिवार पारिवारिक हाउजी टिकट व फुल-हाउस नकद लाभांश वितरण', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🎪 50-2: आनंद मेला हेतु रिंग थ्रो, गुब्बारा शूटिंग स्टॉल सेटअप व ऑपरेटर', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🎁 50-3: महिलाओं की किटी पार्टी हेतु 10 मजेदार इनडोर गेम सेट्स व उपहार पैक', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' }
    ],
    subs: [
      { subCode: '50-1', icon: '🎟️', title: 'Saturday Mohalla Tambola Pass', hindi: 'शनिवार मोहल्ला हाउजी (तंबोला)', tag: 'पारिवारिक हाउजी', badge: 'फुल-हाउस नकद लाभांश', btn: 'हाउजी टिकट लें' },
      { subCode: '50-2', icon: '🎪', title: 'Family Fun Fair Game Stalls', hindi: 'आनंद मेला शूटिंग व रिंग स्टॉल', tag: 'मेला गेम स्टॉल', badge: 'ऑन-साइट ऑपरेटर', btn: 'स्टॉल मंगाएं' },
      { subCode: '50-3', icon: '🎁', title: 'Kitty Party Fun Games Kit', hindi: 'किटी पार्टी 10-गेम किट व गिफ्ट्स', tag: 'महिला किटी गेम्स', badge: '10 इनडोर गेम सेट्स', btn: 'गेम किट मंगाएं' }
    ]
  }
};

console.log('🚀 Starting generation of all 50 Canonical Atomic Category Modules...');

for (let i = 1; i <= 50; i++) {
  const padId = String(i).padStart(2, '0');
  const data = CATEGORIES_DATA[i];

  const subcategoriesObj = {};
  data.subs.forEach(s => {
    subcategoriesObj[s.subCode] = {
      code: `[${s.subCode}]`,
      icon: s.icon,
      title: s.title,
      hindiTitle: s.hindi,
      categoryTag: s.tag,
      rating: '★ 4.9',
      reviewCount: '4,500+ समीक्षाएं',
      metaBadge: s.badge,
      servicesTitle: 'उपलब्ध प्रमाणित सुविधाएं:',
      services: [
        { text: '✨ 100% सत्यापित व प्रशिक्षित पेशेवर', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
        { text: '⚡ तुरंत रिस्पॉन्स व भौतिक निष्पादन', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
        { text: '📜 डिजिटल पक्की रसीद व वारंटी सपोर्ट', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
      ],
      highlights: [
        'बिना किसी हिडन चार्ज के पारदर्शी और तय रेट पर सेवा।',
        'लोकल टियर-2/3 बाज़ार के लिए 100% अनुकूलित व सुरक्षित।',
        'संतुष्टि न होने पर त्वरित समाधान और ग्राहक सहायता।'
      ],
      btnText: s.btn
    };
  });

  const fileContent = `/**
 * RISE MITRA — ATOMIC CATEGORY MODULE [${padId}: ${data.title.toUpperCase()}]
 * GOOGLE PLAY STORE CANONICAL TAXONOMY (CATEGORY ${padId})
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) ATOMIC MICRO-MODULE
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW / EXT_005 Section 2.8)
 * REPO TARGET   : public/js/universal-catalog/categories/cat-${padId}.js
 */

(function () {
  'use strict';

  var catData = {
    id: 'c${padId}',
    number: '${padId}.',
    icon: '${data.icon}',
    title: ${JSON.stringify(data.title)},
    subtitle: ${JSON.stringify(data.subtitle)},
    rating: ${JSON.stringify(data.rating)},
    trustBadge: ${JSON.stringify(data.trust)},
    supportBadge: ${JSON.stringify(data.support)},
    macroPillars: ${JSON.stringify(data.pillars, null, 6)},
    subcategories: ${JSON.stringify(subcategoriesObj, null, 6)}
  };

  var atomicBatch = {};
  atomicBatch['${padId}'] = catData;
  atomicBatch['${parseInt(padId, 10)}'] = catData;

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(atomicBatch);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(atomicBatch);
      }
    });
  }
})();
`;

  const filePath = path.join(targetDir, `cat-${padId}.js`);
  fs.writeFileSync(filePath, fileContent, 'utf8');
}

console.log('✓ Successfully generated all 50 atomic category files (01-50) with 100% Zero-Element-Loss!');
