/**
 * RISE MITRA — CANONICAL 150 SUB-CATEGORY MATRIX & DATA RESOLVER MODULE
 * MODULE        : Decoupled 50-Category (150 Sub-Wings) SSOT Matrix & Registry Lookup Helpers
 * GOVERNANCE    : GATE-23.5 | MAX 500-LINE BUDGET RULE | 100% ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/universal-catalog/canonical-sub-matrix.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  // Real-Data Top-3 Revenue Definitions for Category 15 & Category 16 (Eliminates Formality Chips & Wrong 🚰/🪚 Icons)
  var REAL_DATA_MISTRY_REPAIR = {
    icon: '🛠️',
    title: 'Mistry & Home Repair',
    hindiTitle: 'मिस्त्री, इलेक्ट्रीशियन, प्लंबर व घरेलू मरम्मत',
    categoryTag: 'ऑन-डिमांड होम रिपेयर (#1 रेवेन्यू)',
    rating: '★ 4.9',
    reviewCount: '28,500+ बुकिंग्स',
    metaBadge: '⚡ 30-मिनट होम विजिट',
    servicesTitle: 'सर्वाधिक मांग वाली टॉप-4 होम रिपेयर सेवाएं:',
    services: [
      { text: '❄️ एसी (AC), फ्रिज, वाशिंग मशीन व RO सर्विसिंग', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
      { text: '⚡ इलेक्ट्रीशियन, इनवर्टर, पंखा व एमसीबी वायरिंग फॉल्ट', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
      { text: '🚰 प्लंबर, पानी मोटर, टंकी व बाथरूम पाइप फिटिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
      { text: '🪚 कारपेंटर, दरवाजा-लॉक, फर्नीचर व होम पेंटिंग कार्य', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
    ],
    highlights: [
      'काम शुरू होने से पहले पारदर्शी तय रेट कार्ड व फिक्स विजिट शुल्क।',
      '100% पहचान सत्यापित स्थानीय कुशल मिस्त्री, इलेक्ट्रीशियन व प्लंबर नेटवर्क।',
      'प्रत्येक रिपेयर कार्य पर 30-दिन की सर्विस वारंटी व पक्की डिजिटल रसीद।'
    ],
    btnText: 'खोलें ➔'
  };

  var REAL_DATA_RENTAL_LEDGER = {
    icon: '📒',
    title: 'Rental Ledger',
    hindiTitle: 'किराया बहीखाता व किरायेदार प्रबंधन',
    categoryTag: 'प्रॉपटेक रेंटल बहीखाता (Top SaaS)',
    rating: '★ 4.9',
    reviewCount: '19,400+ मकान मालिक',
    metaBadge: '🧾 ऑटो-रेंट रसीद',
    servicesTitle: 'उपलब्ध किराया बहीखाता व प्रॉपर्टी प्रबंधन टूल:',
    services: [
      { text: '📖 मासिक किराया, एडवांस डिपाजिट व बकाया ऑटो-हिसाब', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
      { text: '⚡ सब-मीटर बिजली यूनिट रीडिंग व पानी बिल कैलकुलेटर', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
      { text: '📲 1-क्लिक व्हाट्सएप रेंट रिमाइंडर व डिजिटल किराया रसीद', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
      { text: '🪪 किरायेदार केवाईसी (KYC), रेंट एग्रीमेंट व कमरा आवंटन रिकॉर्ड', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
    ],
    highlights: [
      'मकान मालिक, पीजी (PG), हॉस्टल व मार्केट दुकान किराया हेतु ऑफलाइन-फर्स्ट डिजिटल बहीखाता।',
      'किराया प्राप्त होते ही किरायेदार को 1-टैप में प्रमाणित व्हाट्सएप रसीद भेजें।',
      'कमरा खाली होने की तिथि, पिछला बकाया व मीटर यूनिट का शून्य-त्रुटि हिसाब।'
    ],
    btnText: 'खोलें ➔'
  };

  var REAL_DATA_ROOM_FLAT_SEARCH = {
    icon: '🏢',
    title: 'Room & Flat Search',
    hindiTitle: 'कमरा, फ्लैट व पीजी खोज (0% दलाली)',
    categoryTag: '0% ब्रोकरेज प्रॉपर्टी सर्च (59% मार्केट शेयर)',
    rating: '★ 4.9',
    reviewCount: '34,800+ प्रॉपर्टीज',
    metaBadge: '🔑 0% दलाली (Direct Owner)',
    servicesTitle: 'उपलब्ध रूम, फ्लैट, पीजी व कमर्शियल प्रॉपर्टी विकल्प:',
    services: [
      { text: '🏠 फैमिली हेतु 1BHK, 2BHK, 3BHK फ्लैट व स्वतंत्र मकान', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
      { text: '🎓 छात्रों व वर्किंग प्रोफेशनल्स हेतु सिंगल/शेयरिंग रूम व PG', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
      { text: '🏪 मुख्य बाजार में दुकान, ऑफिस स्पेस व गोदाम किराये पर', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
      { text: '📍 पिनकोड व जीपीएस लोकेशन अनुसार सीधे मकान मालिक से संपर्क', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
    ],
    highlights: [
      'बिना किसी ब्रोकर या दलाली शुल्क (0% Brokerage) के सीधे मकान मालिक से संपर्क।',
      'असली कमरा फोटो, मासिक किराया, एडवांस शर्तें व पिनकोड लोकेशन पहले से सत्यापित।',
      'मकान मालिक अपना खाली कमरा, फ्लैट या दुकान 30 सेकंड में निःशुल्क सूचीबद्ध करें।'
    ],
    btnText: 'खोलें ➔'
  };

  // 1. CANONICAL 150 SUB-CATEGORY MASTER MATRIX (01-1 TO 50-3 — 100% ZEL)
  var CANONICAL_SUB_MATRIX = {
    '01-1': { icon: '🪧', title: 'Flex Banner & Glow Sign Boards', hindiTitle: 'फ्लेक्स बैनर, विनाइल व ग्लोसाइन बोर्ड', categoryTag: 'आउटडोर प्रिंटिंग', reviewCount: '8,200+ प्रतिष्ठान', metaBadge: 'ऑल-वेदर प्रिंट', servicesTitle: 'उपलब्ध बोर्ड व प्रिंटिंग सेवाएं:', services: [ { text: '🌟 एचडी स्टार फ्लेक्स बैनर (तेज धूप व बारिश सुरक्षित)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }, { text: '💡 एलईडी ग्लोसाइन बोर्ड व एक्रिलिक 3D लेटरिंग', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' }, { text: '🚪 दुकान शटर विनाइल पेस्टिंग व वन-वे विजन फिल्म', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }, { text: '🔩 आयरन फ्रेमिंग, ऑन-साइट इंस्टॉलेशन व फिटिंग', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' } ] },
    '01-2': { icon: '🎨', title: 'Festival Post & Digital Card', hindiTitle: 'फेस्टिवल पोस्टर, डिजिटल कार्ड व सोशल मीडिया ग्राफिक्स', categoryTag: 'डिजिटल डिज़ाइन', reviewCount: '9,400+ व्यापारी', metaBadge: 'तुरंत डाउनलोड', servicesTitle: 'उपलब्ध डिजिटल डिज़ाइन सेवाएं:', services: [ { text: '🎉 365 दिन त्योहार व शुभकामना पोस्टर (दुकान नाम सहित)', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' }, { text: '📲 इंटरएक्टिव पीडीएफ डिजिटल विजिटिंग कार्ड', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }, { text: '🏷️ नया व्यापार लोगो (Logo) व ब्रांडिंग पैकेज', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }, { text: '💒 व्हाट्सएप वीडियो शादी व आमंत्रण कार्ड', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' } ] },
    '01-3': { icon: '📇', title: 'Visiting Card & Bill Books', hindiTitle: 'विजिटिंग कार्ड, जीएसटी बिल बुक, पर्चा व शादी कार्ड प्रिंटिंग', categoryTag: 'ऑफसेट व कमर्शियल प्रिंट', reviewCount: '6,800+ ऑर्डर्स', metaBadge: 'थोक रेट प्रिंट', servicesTitle: 'उपलब्ध ऑफसेट व कार्ड प्रिंटिंग सेवाएं:', services: [ { text: '📇 मैट, ग्लॉसी व यूवी (UV) विजिटिंग कार्ड प्रिंटिंग', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' }, { text: '🧾 कार्बनलेस डुप्लीकेट जीएसटी बिल बुक व कैश मेमो', bg: 'rgba(52,211,153,0.15)', c: '#34d399' }, { text: '📄 रंगीन विज्ञापन पर्चा (Pamphlet) व हैंडबिल प्रिंटिंग', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }, { text: '💌 प्रीमियम शादी कार्ड व लेटरहेड छपाई', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' } ] },
    '02-1': { title: 'Roadside Assistance (RSA)', hindiTitle: 'ऑन-रोड वाहन ब्रेकडाउन व टोइंग सहायता' },
    '02-2': { title: 'RTO Challan & FASTag', hindiTitle: 'आरटीओ चालान, फास्टैग व वाहन दस्तावेज़ केंद्र' },
    '02-3': { title: 'Used Vehicles Buy/Sell', hindiTitle: 'सत्यापित पुराने वाहन खरीद व बिक्री बाज़ार' },
    '03-1': { title: 'Salon at Home (Ladies Only)', hindiTitle: 'महिला ब्यूटी पार्लर व होम सैलून सेवा' },
    '03-2': { title: 'Bridal Makeup & Mehndi', hindiTitle: 'ब्राइडल मेकअप व पारंपरिक मेहंदी आर्टिस्ट' },
    '03-3': { title: 'Men Grooming & Barber', hindiTitle: 'जेंट्स सैलून, हेयरकट व ग्रूमिंग केयर' },
    '04-1': { title: 'Regional Audio Stories', hindiTitle: 'स्थानीय भाषा ऑडियो कहानियां व लोक साहित्य' },
    '04-2': { title: 'Sarkari Exam Notes', hindiTitle: 'प्रतियोगी परीक्षा नोट्स, गाइड व प्रश्न बैंक' },
    '04-3': { title: 'Dainik Panchang & Sahitya', hindiTitle: 'दैनिक पंचांग, मुहूर्त व धार्मिक साहित्य' },
    '05-1': { title: 'Digital Udhar Khata', hindiTitle: 'सॉवरेन बहीखाता व डिजिटल लेन-देन रजिस्टर' },
    '05-2': { title: 'Wholesale Mandi Network', hindiTitle: 'थोक मंडी भाव व डायरेक्ट सप्लायर नेटवर्क' },
    '05-3': { title: 'Online Dukan QR Catalog', hindiTitle: 'ऑनलाइन दुकान क्यूआर कैटलॉग व ऑर्डर सिस्टम' },
    '06-1': { title: 'Pauranik Graphic Comics', hindiTitle: 'पौराणिक व ऐतिहासिक चित्रकथा कॉमिक्स' },
    '06-2': { title: 'Kids Illustrated Books', hindiTitle: 'बच्चों की सचित्र ज्ञानवर्धक पुस्तकें' },
    '06-3': { title: 'Daily Humor & Puzzles', hindiTitle: 'दैनिक हास्य कोना व दिमागी पहेलियां' },
    '07-1': { title: 'Verified Merchant Directory', hindiTitle: 'सत्यापित स्थानीय व्यापारी व सेवा निर्देशिका' },
    '07-2': { title: 'WhatsApp Promo Broadcaster', hindiTitle: 'ग्राहक सूचना व ऑफर ब्रॉडकास्ट टूल' },
    '07-3': { title: 'Cyber Fraud & Spam Shield', hindiTitle: 'साइबर ठगी व फर्जी कॉल सुरक्षा कवच' },
    '08-1': { title: 'Samajik Matrimony', hindiTitle: 'पारिवारिक व सामाजिक वैवाहिक परिचय मंच' },
    '08-2': { title: 'Kundali Milan & Matching', hindiTitle: 'वैदिक कुंडली मिलान व ज्योतिष परामर्श' },
    '08-3': { title: 'Vivah Madhyasth Network', hindiTitle: 'सत्यापित विवाह मध्यस्थ व पारिवारिक समन्वय' },
    '09-1': { title: 'Home Tutors & Coaching', hindiTitle: 'सत्यापित होम ट्यूटर व कोचिंग क्लासेस' },
    '09-2': { title: 'Sarkari Mock Test Pass', hindiTitle: 'सरकारी भर्ती लाइव मॉक टेस्ट सीरीज पास' },
    '09-3': { title: 'Practical Skill Institutes', hindiTitle: 'प्रैक्टिकल वोकेशनल व तकनीकी हुनर प्रशिक्षण' },
    '10-1': { title: 'Cinema & Mela Tickets', hindiTitle: 'स्थानीय सिनेमा, मेला व प्रदर्शनी टिकट' },
    '10-2': { title: 'Live Stage Artists & DJ', hindiTitle: 'लाइव स्टेज कलाकार, जागरण व डीजे बुकिंग' },
    '10-3': { title: 'Regional Theater & Comedy', hindiTitle: 'लोक नाटक, कवि सम्मेलन व सांस्कृतिक कार्यक्रम' },
    '11-1': { title: 'Tent & Light Decor', hindiTitle: 'टेंट हाउस, पंडाल व फ्लावर लाइट डेकोरेशन' },
    '11-2': { title: 'Halwai & Catering Services', hindiTitle: 'पारंपरिक हलवाई व पार्टी कैटरिंग सेवाएं' },
    '11-3': { title: 'Wedding Drone Photography', hindiTitle: 'वेडिंग फोटोग्राफी, सिनेमैटिक वीडियो व ड्रोन शूट' },
    '12-1': { title: 'Doorstep AEPS Cash', hindiTitle: 'मिनी एटीएम व डोरस्टेप नकद निकासी केंद्र' },
    '12-2': { title: 'Vyapar Micro-Loans', hindiTitle: 'छोटे व्यापारियों हेतु कार्यशील पूंजी व बचत समूह' },
    '12-3': { title: '1-Click Vehicle Insurance', hindiTitle: 'दोपहिया व चारपहिया वाहन बीमा नवीनीकरण' },
    '13-1': { title: 'Monthly Tiffin Service', hindiTitle: 'दैनिक घर जैसा शुद्ध टिफिन व भोजन डिब्बा' },
    '13-2': { title: 'Local Dhaba & Sweets', hindiTitle: 'पारंपरिक ढाबा थाली व शुद्ध देसी मिठाइयां' },
    '13-3': { title: 'Bulk Mandi Event Ration', hindiTitle: 'शादी व पार्टी हेतु थोक राशन व खाद्य आपूर्ति' },
    '14-1': { title: 'Doorstep Yoga & Physio', hindiTitle: 'प्राकृतिक योग, प्राणायाम व फिजियोथेरेपी केंद्र' },
    '14-2': { title: 'Local Gym Membership Passes', hindiTitle: 'व्यायामशाला, जिम व स्ट्रेंथ ट्रेनिंग पास' },
    '14-3': { title: 'Desi Akhada Nutrition', hindiTitle: 'देसी अखाड़ा पोषण, सत्तू व शुद्ध डाइट सप्लीमेंट' },
    '15-1': REAL_DATA_MISTRY_REPAIR,
    '15-2': REAL_DATA_RENTAL_LEDGER,
    '15-3': REAL_DATA_ROOM_FLAT_SEARCH,
    '16-1': { icon: '🛠️', title: 'Mistry & Home Repair', hindiTitle: 'मिस्त्री व दैनिक घरेलू मरम्मत सेवाएं', categoryTag: REAL_DATA_MISTRY_REPAIR.categoryTag, rating: REAL_DATA_MISTRY_REPAIR.rating, reviewCount: REAL_DATA_MISTRY_REPAIR.reviewCount, metaBadge: REAL_DATA_MISTRY_REPAIR.metaBadge, servicesTitle: REAL_DATA_MISTRY_REPAIR.servicesTitle, services: REAL_DATA_MISTRY_REPAIR.services, highlights: REAL_DATA_MISTRY_REPAIR.highlights, btnText: REAL_DATA_MISTRY_REPAIR.btnText },
    '16-2': REAL_DATA_RENTAL_LEDGER,
    '16-3': REAL_DATA_ROOM_FLAT_SEARCH,
    '17-1': { title: 'Steam Dry Cleaning & Laundry', hindiTitle: 'स्टीम ड्राई क्लीनिंग, लॉन्ड्री व आयरन सेवा' },
    '17-2': { title: 'Ladies Doorstep Tailoring', hindiTitle: 'लेडीज बुटीक, सिलाई व अल्टरेशन होम पिकअप' },
    '17-3': { title: 'Home Deep Cleaning', hindiTitle: 'घर, सोफा, बाथरूम व पानी टंकी डीप क्लीनिंग' },
    '18-1': { title: 'Goods Tempo Booking', hindiTitle: 'मालवाहक टेम्पो, पिकअप व छोटा हाथी बुकिंग' },
    '18-2': { title: 'Hyperlocal 2-Hour Courier', hindiTitle: 'शहर के भीतर 2-घंटे एक्सप्रेस पार्सल डिलीवरी' },
    '18-3': { title: 'Packers & Movers Shifting', hindiTitle: 'सुरक्षित घरेलू सामान पैकिंग व हाउस शिफ्टिंग' },
    '19-1': { title: 'Home Blood Sample Collect', hindiTitle: 'घर से ब्लड सैंपल जांच व प्रमाणित लैब रिपोर्ट' },
    '19-2': { title: 'Doorstep Discount Medicines', hindiTitle: 'सत्यापित दवा होम डिलीवरी (20% तक छूट)' },
    '19-3': { title: '24x7 Oxygen Ambulance', hindiTitle: '24x7 आपातकालीन एम्बुलेंस व ऑक्सीजन सेवा' },
    '20-1': { title: 'Wedding Band & Baggi', hindiTitle: 'शादी बैंड, घोड़ी-बग्गी व शहनाई पार्टी बुकिंग' },
    '20-2': { title: 'DJ Sound System Rental', hindiTitle: 'हाई-बेस डीजे साउंड सिस्टम व स्टेज ऑडियो रेंटल' },
    '20-3': { title: 'Instrument Repair & Classes', hindiTitle: 'हारमोनियम, तबला, गिटार मरम्मत व संगीत प्रशिक्षण' },
    '21-1': { title: 'Hyperlocal Citizen News', hindiTitle: 'वार्ड, पंचायत व जिले की सत्यापित ताज़ा खबरें' },
    '21-2': { title: 'Newspaper Classified Ads', hindiTitle: 'अखबार वर्गीकृत विज्ञापन व गजट सूचना बुकिंग' },
    '21-3': { title: 'Monthly Magazines Courier', hindiTitle: 'मासिक प्रतियोगी व पारिवारिक पत्रिका होम डिलीवरी' },
    '22-1': { title: 'Newborn & Mother Massage Dai', hindiTitle: 'नवजात शिशु व प्रसूता मालिश हेतु अनुभवी दाई सेवा' },
    '22-2': { title: 'Pure Organic Baby Food', hindiTitle: 'शिशु पोषण आहार व सुरक्षित बेबी केयर उत्पाद' },
    '22-3': { title: 'Baby Cradle & Cotton Clothes', hindiTitle: 'बच्चों के सूती वस्त्र, पालना व खिलौना सेट' },
    '23-1': { title: 'Mobile Skins & UV Glass', hindiTitle: 'मोबाइल 3D बैक स्किन, लेमिनेशन व यूवी ग्लास' },
    '23-2': { title: 'Customized Photo Gifts', hindiTitle: 'फोटो प्रिंटेड मग, टी-शर्ट, कुशन व एलईडी फ्रेम' },
    '23-3': { title: 'Vehicle Radium & Plates', hindiTitle: 'वाहन रेडियम आर्ट, नेम प्लेट व नंबर प्लेट' },
    '24-1': { title: 'Instant Passport Photos', hindiTitle: '5 मिनट में अर्जेंट पासपोर्ट साइज फोटो व फ्रेमिंग' },
    '24-2': { title: 'Shop Catalog Photo Shoot', hindiTitle: 'दुकान उत्पाद व ई-कॉमर्स कैटलॉग फोटोशूट' },
    '24-3': { title: 'Event Videography', hindiTitle: 'जन्मदिन, मुंडन व गृहप्रवेश एचडी वीडियोग्राफी' },
    '25-1': { title: 'Sarkari Online Form Filling', hindiTitle: 'ऑनलाइन नौकरी फॉर्म, जाति, आय व निवास प्रमाण पत्र' },
    '25-2': { title: 'PAN & Identity Docs Help', hindiTitle: 'पैन कार्ड, पासपोर्ट व दस्तावेज़ सुधार सहायता केंद्र' },
    '25-3': { title: 'Bulk Xerox & Lamination', hindiTitle: 'थोक फोटोकॉपी, स्पाइरल बाइंडिंग व लेमिनेशन' },
    '26-1': { title: 'Monthly Grocery Ration', hindiTitle: 'मासिक घरेलू किराना राशन किट व थोक बचत' },
    '26-2': { title: 'Wholesale Saree & Garments', hindiTitle: 'साड़ी, रेडीमेड कपड़े व फेस्टिवल गारमेंट्स कलेक्शन' },
    '26-3': { title: 'In-Store Easy Exchange', hindiTitle: 'लोकल दुकान गारंटी व आसान एक्सचेंज सुविधा' },
    '27-1': { title: 'Mohalla Civic Complaint Board', hindiTitle: 'मोहल्ला स्वच्छता, स्ट्रीट लाइट व जल समस्या चौपाल' },
    '27-2': { title: 'Kisan & Trader Union Forum', hindiTitle: 'स्थानीय किसान व व्यापार मंडल संवाद मंच' },
    '27-3': { title: 'Emergency Blood Donor Net', hindiTitle: 'आपातकालीन स्थानीय रक्तदाता (Blood Donor) नेटवर्क' },
    '28-1': { title: 'Night Box Cricket Turf', hindiTitle: 'नाइट बॉक्स क्रिकेट व बैडमिंटन कोर्ट स्लॉट बुकिंग' },
    '28-2': { title: 'Cricket Bat Repair & Grip', hindiTitle: 'क्रिकेट बैट नॉकिंग, ग्रिप, किट व स्पोर्ट्स सामग्री' },
    '28-3': { title: 'Local Cricket Tournaments', hindiTitle: 'स्थानीय क्रिकेट व फुटबॉल टूर्नामेंट टीम रजिस्ट्रेशन' },
    '29-1': { title: 'Daily Power Tools Rental', hindiTitle: 'ड्रिल, कटर, वेल्डिंग व जनरेटर दैनिक किराया केंद्र' },
    '29-2': { title: 'Power Tool Rewinding', hindiTitle: 'मोटर, पंखा व पावर टूल्स आर्मेचर वाइंडिंग रिपेयर' },
    '29-3': { title: 'Mistry Hand Tools Kit', hindiTitle: 'राजमिस्त्री, प्लंबर व इलेक्ट्रीशियन हैवी टूल किट' },
    '30-1': { title: 'Bolero & Scorpio Rental', hindiTitle: 'शादी व यात्रा हेतु बोलेरो, स्कॉर्पियो व इनोवा बुकिंग' },
    '30-2': { title: 'Pilgrimage Tour Bus Seats', hindiTitle: 'तीर्थ यात्रा व ग्रुप टूर लक्ज़री बस सीट बुकिंग' },
    '30-3': { title: 'Railway Station Drop Cabs', hindiTitle: 'रेलवे स्टेशन व एयरपोर्ट समयबद्ध पिकअप-ड्रॉप कैब' },
    '31-1': { title: 'Retail Shop Promo Reels', hindiTitle: 'दुकान प्रचार हेतु प्रोफेशनल वीडियो रील व वॉयसओवर' },
    '31-2': { title: 'Wedding Video Song Mixing', hindiTitle: 'शादी एल्बम 4K वीडियो मिक्सिंग व हाइलाइट एडिटिंग' },
    '31-3': { title: 'YouTube Channel Edit & Thumb', hindiTitle: 'यूट्यूब वीडियो एडिटिंग व आकर्षक थंबनेल डिज़ाइन' },
    '32-1': { title: 'Village Rain & Storm Alerts', hindiTitle: 'पंचायत स्तर सटीक बारिश, वज्रपात व आंधी अलर्ट' },
    '32-2': { title: 'Crop Spray Weather Advisory', hindiTitle: 'फसल बुवाई, सिंचाई व कीटनाशक छिड़काव मौसम सलाह' },
    '32-3': { title: 'Crop Damage Insurance Claim', hindiTitle: 'ओलावृष्टि व सुखाड़ फसल क्षति बीमा दावा सहायता' },
    '33-1': { title: 'PS5 & PC Gaming Parlor', hindiTitle: 'PS5 व हाई-एंड पीसी गेमिंग जोन स्लॉट बुकिंग' },
    '33-2': { title: 'Action Gaming Tournament Pass', hindiTitle: 'स्थानीय ई-स्पोर्ट्स व एक्शन गेमिंग प्रतियोगिता पास' },
    '33-3': { title: 'Laser Tag Arena Party Setup', hindiTitle: 'लेज़र टैग एरीना व टीम एडवेंचर पार्टी सेटअप' },
    '34-1': { title: 'Camping Tent & Gear Rental', hindiTitle: 'कैंपिंग टेंट, स्लीपिंग बैग व ट्रैकिंग गियर किराया' },
    '34-2': { title: 'Local Forest Trekking Guides', hindiTitle: 'स्थानीय झरना, पहाड़ व नेचर ट्रेल प्रमाणित गाइड' },
    '34-3': { title: 'Zipline & Adventure Park Pass', hindiTitle: 'ज़िपलाइन, रोप कोर्स व एडवेंचर पार्क एंट्री पास' },
    '35-1': { title: 'Mela Jhoola & Dragon Train', hindiTitle: 'मेला झूला, ड्रैगन ट्रेन व एम्यूजमेंट राइड टिकट' },
    '35-2': { title: 'Arcade Center Token Packs', hindiTitle: 'आर्केड गेम ज़ोन कॉम्बो टोकन व रिचार्ज कार्ड' },
    '35-3': { title: 'Party Bouncy & Air Hockey', hindiTitle: 'बर्थडे पार्टी मिकी माउस बाउंसी व एयर हॉकी रेंटल' },
    '36-1': { title: 'Mohalla Carrom Tournament', hindiTitle: 'मोहल्ला कैरम चैंपियनशिप व क्लब मैच रजिस्ट्रेशन' },
    '36-2': { title: 'Offline Chess Academy & Club', hindiTitle: 'शतरंज प्रशिक्षण अकादमी व संडे चेस क्लब' },
    '36-3': { title: 'Heavy Birch Carrom Boards', hindiTitle: 'वाटरप्रूफ चैंपियन कैरम बोर्ड, स्ट्राइकर व स्टैंड' },
    '37-1': { title: 'Live Magician Card Show', hindiTitle: 'पार्टी व स्कूल इवेंट हेतु लाइव मैजिशियन व कार्ड शो' },
    '37-2': { title: '100% Plastic Waterproof Cards', hindiTitle: 'प्रीमियम वाटरप्रूफ प्लास्टिक प्लेइंग कार्ड्स सेट' },
    '37-3': { title: 'Senior Citizen Bridge Club', hindiTitle: 'सीनियर सिटीजन ब्रिज व मनोरंजन क्लब मेंबरशिप' },
    '38-1': { title: 'Wedding Fun Casino Setup', hindiTitle: 'शादी व संगीत नाइट मनोरंजन फन गेम स्टॉल (0% सट्टा)' },
    '38-2': { title: 'Promotional Lucky Spin Wheel', hindiTitle: 'दुकान उद्घाटन व फेस्टिवल ऑफर लकी स्पिन व्हील' },
    '38-3': { title: 'Party Game Dealer Troupe', hindiTitle: 'फैमिली पार्टी एंकर व इंटरएक्टिव गेम होस्ट टीम' },
    '39-1': { title: 'Sunday Mohalla Ludo League', hindiTitle: 'संडे मोहल्ला फैमिली लूडो लीग व पुरस्कार स्पर्धा' },
    '39-2': { title: 'Foosball & Dart Board Tokens', hindiTitle: 'फूसबॉल टेबल, डार्ट बोर्ड व इंडोर क्लब पास' },
    '39-3': { title: 'Handcrafted Wooden Ludo Sets', hindiTitle: 'हस्तनिर्मित लकड़ी के फोल्डिंग लूडो व सांप-सीढ़ी बोर्ड' },
    '40-1': { title: 'Offline Abacus & Mental Math', hindiTitle: 'बच्चों हेतु अबेकस, वैदिक गणित व ब्रेन जिम क्लास' },
    '40-2': { title: 'Inter-School Brain Quiz Pass', hindiTitle: 'इंटर-स्कूल विज्ञान व सामान्य ज्ञान क्विज़ प्रतियोगिता' },
    '40-3': { title: 'Wooden Science Model Kits', hindiTitle: 'स्कूल प्रोजेक्ट साइंस किट व एजुकेशनल पज़ल खिलौने' },
    '41-1': { title: 'Soundproof Jam Room Slot', hindiTitle: 'साउंडप्रूफ म्यूजिक जैम रूम व रिकॉर्डिंग स्टूडियो स्लॉट' },
    '41-2': { title: 'Party Karaoke Machine Setup', hindiTitle: 'फैमिली गेट-टुगेदर कराओके माइक व स्पीकर रेंटल' },
    '41-3': { title: 'Local Singing Audition Pass', hindiTitle: 'स्थानीय सिंगिंग टैलेंट हंट व ढोलक-तबला मुकाबला' },
    '42-1': { title: 'Rubiks Cube Speed Workshop', hindiTitle: 'रूबिक्स क्यूब स्पीड-सॉल्विंग वर्कशॉप व ट्रेनिंग' },
    '42-2': { title: 'District Sudoku Championship', hindiTitle: 'जिला स्तरीय सुडोकू व क्रॉसवर्ड माइंड चैंपियनशिप' },
    '42-3': { title: 'Magnetic Speedcube Combos', hindiTitle: 'प्रोफेशनल मैग्नेटिक स्पीडक्यूब व ब्रेन टीज़र कॉम्बो' },
    '43-1': { title: 'Go-Karting Track Racing Pass', hindiTitle: 'गो-कार्टिंग रेसिंग ट्रैक लैप टिकट व टाइम ट्रायल' },
    '43-2': { title: 'RC Car Obstacle Track', hindiTitle: 'रिमोट कंट्रोल (RC) कार ऑफ-रोड ट्रैक रेसिंग' },
    '43-3': { title: 'Bicycle Cyclothon Entry Pass', hindiTitle: 'संडे मॉर्निंग फिटनेस साइक्लोथॉन व साइकिल रैली पास' },
    '44-1': { title: 'Ramlila Character Auditions', hindiTitle: 'रामलीला, सांस्कृतिक मंचन व लोक कला ऑडिशन' },
    '44-2': { title: 'Historical Costume Rental', hindiTitle: 'स्कूल ड्रामा, फैंसी ड्रेस व पौराणिक वेशभूषा किराया' },
    '44-3': { title: 'Professional Nukkad Natak', hindiTitle: 'जनजागरूकता व ब्रांड प्रमोशन नुक्कड़ नाटक मंडली' },
    '45-1': { title: 'Car Driving Cockpit Sim', hindiTitle: 'कार ड्राइविंग कॉकपिट सिमुलेटर केबिन ट्रेनिंग क्लास' },
    '45-2': { title: 'Tractor & Harvester Training', hindiTitle: 'ट्रैक्टर व कंबाइन हार्वेस्टर फील्ड ऑपरेटिंग ट्रेनिंग' },
    '45-3': { title: '9D Virtual Reality (VR) Zone', hindiTitle: '9D मोशन चेयर वर्चुअल रियलिटी (VR) राइड स्लॉट' },
    '46-1': { title: 'Leather Ball Night Cricket', hindiTitle: 'लेदर बॉल डे-नाइट क्रिकेट प्रैक्टिस नेट व बॉलिंग मशीन' },
    '46-2': { title: '5v5 Football Turf Court', hindiTitle: '5v5 सिंथेटिक फुटबॉल टर्फ व फ्लडलाइट ग्राउंड बुकिंग' },
    '46-3': { title: 'Sports Trophies & Medals', hindiTitle: 'टूर्नामेंट ट्रॉफी, मेडल, मोमेंटो व कस्टम टीम जर्सी' },
    '47-1': { title: '7-Day Chess Tactics Camp', hindiTitle: '7-दिवसीय शतरंज रणनीति व ग्रैंडमास्टर टैक्टिक्स कैंप' },
    '47-2': { title: 'Rapid Timed Chess League', hindiTitle: 'रैपिड ब्लिट्ज घड़ी शतरंज लीग व रेटिंग टूर्नामेंट' },
    '47-3': { title: 'Weighted Wooden Chess Sets', hindiTitle: 'टूर्नामेंट स्टैंडर्ड वेटेड वुडन चेस बोर्ड व डिजिटल क्लॉक' },
    '48-1': { title: 'Live Buzzer Round Quiz Pass', hindiTitle: 'लाइव स्टेज बज़र राउंड क्विज़ शो व टीम मुकाबला' },
    '48-2': { title: 'Saturday Cash Prize Trivia', hindiTitle: 'शनिवार ज्ञान विज्ञान ट्रिविया व स्कॉलरशिप क्विज़' },
    '48-3': { title: '5000 GK Question Booklets', hindiTitle: '5000+ सामान्य ज्ञान व समसामयिकी प्रश्नोत्तरी पुस्तिका' },
    '49-1': { title: 'Spelling Bee District Contest', hindiTitle: 'जिला स्तरीय स्पेलिंग बी व हिंदी-अंग्रेजी शब्दकोश स्पर्धा' },
    '49-2': { title: 'Monthly Crossword Contest', hindiTitle: 'मासिक वर्ग पहेली व शब्द ज्ञान प्रतियोगिता' },
    '49-3': { title: 'Wooden Scrabble & Word Tiles', hindiTitle: 'वुडन स्क्रैबल बोर्ड व बच्चों के अक्षर ज्ञान टाइल्स' },
    '50-1': { title: 'Saturday Mohalla Tambola Pass', hindiTitle: 'शनिवार पारिवारिक तंबोला (Housie) व गेट-टुगेदर पास' },
    '50-2': { title: 'Family Fun Fair Game Stalls', hindiTitle: 'सोसाइटी आनंद मेला, रिंग टॉस व फैमिली गेम स्टॉल' },
    '50-3': { title: 'Kitty Party Fun Games Kit', hindiTitle: 'किटी पार्टी, बर्थडे व पारिवारिक मनोरंजन गेम किट' }
  };

  // 2. DATA NORMALIZATION & REGISTRY RESOLVER HELPERS (100% ZEL)
  function getNormalizedIds(catId) {
    var rawDigits = String(catId || '').replace(/[^0-9]/g, '');
    var intNum = parseInt(rawDigits, 10);
    if (isNaN(intNum) || intNum < 1) intNum = 1;
    var normId = String(intNum);
    var paddedId = (intNum < 10 ? '0' : '') + intNum;
    return {
      intNum: intNum,
      normId: normId,
      paddedId: paddedId,
      displayNum: paddedId + '.'
    };
  }

  function isGenericSubData(d) {
    if (!d || !d.title) return true;
    var t = String(d.title).trim();
    return (
      t.indexOf('सेवा ') === 0 ||
      t.indexOf('देसी खेल ') === 0 ||
      t.indexOf('Subcategory') === 0 ||
      t.indexOf('Service ') === 0 ||
      /^\d{1,2}-\d$/.test(t)
    );
  }

  function fetchCategoryRegistryData(ids) {
    if (!window.RM_CATALOG_REGISTRY || typeof window.RM_CATALOG_REGISTRY.getCategoryData !== 'function') {
      return null;
    }
    var cNorm = window.RM_CATALOG_REGISTRY.getCategoryData(ids.normId);
    var cPad = window.RM_CATALOG_REGISTRY.getCategoryData(ids.paddedId);
    if (cNorm && cNorm.subtitle && cNorm.subtitle !== 'दैनिक जनसेवाएं व आधिकारिक सुविधा केंद्र') {
      return cNorm;
    }
    if (cPad && cPad.subtitle && cPad.subtitle !== 'दैनिक जनसेवाएं व आधिकारिक सुविधा केंद्र') {
      return cPad;
    }
    return cNorm || cPad || null;
  }

  function fetchSubcategoryRegistryData(ids, cleanSub) {
    var parts = String(cleanSub || '').split('-');
    var subIdx = parts[1] || '1';
    var paddedSub = ids.paddedId + '-' + subIdx;
    var normSub = ids.normId + '-' + subIdx;
    var fallbackSeed = null;
    var richRegistryCandidate = null;

    if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.getSubcategoryData === 'function') {
      var candidates = [
        window.RM_CATALOG_REGISTRY.getSubcategoryData(ids.normId, normSub),
        window.RM_CATALOG_REGISTRY.getSubcategoryData(ids.normId, paddedSub),
        window.RM_CATALOG_REGISTRY.getSubcategoryData(ids.paddedId, paddedSub),
        window.RM_CATALOG_REGISTRY.getSubcategoryData(ids.paddedId, normSub),
        window.RM_CATALOG_REGISTRY.getSubcategoryData(ids.paddedId, cleanSub),
        window.RM_CATALOG_REGISTRY.getSubcategoryData(ids.normId, cleanSub)
      ];
      for (var i = 0; i < candidates.length; i++) {
        var cand = candidates[i];
        if (cand && !fallbackSeed) fallbackSeed = cand;
        if (cand && !isGenericSubData(cand) && !richRegistryCandidate) {
          richRegistryCandidate = cand;
        }
      }
    }

    var baseSeed = richRegistryCandidate || fallbackSeed;
    var canonicalEntry = CANONICAL_SUB_MATRIX[paddedSub];
    if (canonicalEntry) {
      var merged = {};
      if (baseSeed) {
        for (var k in baseSeed) {
          if (Object.prototype.hasOwnProperty.call(baseSeed, k)) {
            merged[k] = baseSeed[k];
          }
        }
      }
      for (var ck in canonicalEntry) {
        if (Object.prototype.hasOwnProperty.call(canonicalEntry, ck)) {
          merged[ck] = canonicalEntry[ck];
        }
      }
      return merged;
    }

    return baseSeed;
  }

  // Export globally and trigger immediate re-sweep if Card Engine is already active
  window.RM_CANONICAL_SUB_MATRIX = CANONICAL_SUB_MATRIX;
  window.RM_CARD_DATA_RESOLVER = {
    getNormalizedIds: getNormalizedIds,
    isGenericSubData: isGenericSubData,
    fetchCategoryRegistryData: fetchCategoryRegistryData,
    fetchSubcategoryRegistryData: fetchSubcategoryRegistryData
  };

  if (typeof document !== 'undefined') {
    document.querySelectorAll('[data-rm-sub-rendered], [data-rm-parent-rendered]').forEach(function (el) {
      el.removeAttribute('data-rm-sub-rendered');
      el.removeAttribute('data-rm-parent-rendered');
    });
  }

  if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
    window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog();
  }
})();
