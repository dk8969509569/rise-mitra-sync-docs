/**
 * ==============================================================================
 * RISE MITRA — 50 CANONICAL CATEGORIES & 150 SUB-SERVICES DATA REGISTRY
 * SPECIFICATION : FOLDER A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) | 14_04__EXT_005
 * GOVERNANCE    : GATE-16.6 • GATE-16.7 • GATE-23.5 • GATE-25.0 • ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/categories-data.js
 * DUAL-FOLDER REFERENCES:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror)       : 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 * STATUS        : 🟢 100% CANONICAL FROZEN • 32 APPS + 17 GAMES + 1 FAMILY = 50
 * ==============================================================================
 * 🔒 EXISTING MODULAR FILES LOCK (DO NOT CREATE DUPLICATE FILES):
 *   - public/js/categories-data.js (This File: 50 Categories & 150 Sub-Services SSOT)
 *   - public/js/universal-catalog/canonical-sub-matrix.js
 *   - public/js/universal-catalog/catalog-metadata-registry.js
 *   - public/js/universal-catalog/sub-card-renderer.js
 *   - public/js/universal-catalog/universal-card-engine.js
 *   - public/js/universal-catalog/extensions/ (ext-cat-01.js .. ext-batch-41-50.js)
 * ==============================================================================
 */

(function (window) {
  'use strict';

  // ==============================================================================
  // SECTION 1: 32 CANONICAL SERVICES (96 AI-PROOF REVENUE SUB-MODULES)
  // ==============================================================================

  var RM_SERVICES_DATA = [
    { id: 'c01', num: '01', enName: 'Art & Design', hiName: 'आर्ट व डिज़ाइन', icon: '🎨', hasChildren: true, children: [
      { id: '01-1', enName: 'Festival Post & Digital Card', hiName: 'दुकान त्योहार पोस्टर व डिजिटल कार्ड', icon: '📱', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '01-2', enName: 'Flex Board & Printing', hiName: 'फ्लेक्स बोर्ड, बैनर व ग्लो-साइन प्रिंटिंग', icon: '🪧', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '01-3', enName: 'Visiting Card & Bill Books', hiName: 'विज़िटिंग कार्ड, लेटरहेड व पक्की बिल बुक', icon: '📇', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c02', num: '02', enName: 'Auto & Vehicles', hiName: 'ऑटो व वाहन', icon: '🚗', hasChildren: true, children: [
      { id: '02-1', enName: 'Roadside Assistance (RSA)', hiName: 'ऑन-साइट पंचर, जंप-स्टार्ट व क्रेन टोइंग', icon: '🛞', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '02-2', enName: 'RTO Challan & FASTag', hiName: 'लंबित ई-चालान जांच व फ़ास्टैग रिचार्ज', icon: '📑', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '02-3', enName: 'Used Vehicles Buy/Sell', hiName: '0% दलाली पुरानी बाइक, कार व ट्रैक्टर बाज़ार', icon: '🔍', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c03', num: '03', enName: 'Beauty', hiName: 'ब्यूटी व सैलून', icon: '✂️', hasChildren: true, children: [
      { id: '03-1', enName: 'Salon at Home (Ladies Only)', hiName: 'घर पर फेशियल, रिका वैक्सिंग व हेयर स्पा', icon: '💅', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '03-2', enName: 'Bridal Makeup & Mehndi', hiName: 'एचडी ब्राइडल शादी मेकअप व दुल्हन मेहंदी', icon: '👰', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '03-3', enName: 'Men Grooming & Barber', hiName: 'मोहल्ला नाई ज़ीरो-वेटिंग डिजिटल टोकन', icon: '💈', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c04', num: '04', enName: 'Books & Reference', hiName: 'किताबें व संदर्भ', icon: '📚', hasChildren: true, children: [
      { id: '04-1', enName: 'Regional Audio Stories', hiName: 'हिंदी, भोजपुरी व मैथिली लोककथाएं व ऑडियो', icon: '🎧', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '04-2', enName: 'Sarkari Exam Notes', hiName: 'पुलिस, रेलवे, एसएससी हस्तलिखित नोट्स बंडल', icon: '📝', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '04-3', enName: 'Dainik Panchang & Sahitya', hiName: 'काशी/मिथिला पंचांग, लग्न मुहूर्त व धर्म साहित्य', icon: '📜', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c05', num: '05', enName: 'Business', hiName: 'सॉवरेन बहीखाता (Business)', icon: '💼', hasChildren: true, action: 'launch', children: [
      { id: '05-1', enName: 'Digital Udhar Khata', hiName: 'डिजिटल उधारी लेजर, ऑटो तगादा व UPI QR', icon: '📑', badge: 'खोलें ›', state: 'active', action: 'launch' },
      { id: '05-2', enName: 'Wholesale Mandi Network', hiName: 'किराना, कपड़ा, हार्डवेयर थोक भाव डायरेक्टरी', icon: '🏬', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '05-3', enName: 'Online Dukan QR Catalog', hiName: '30-सेकंड ऑनलाइन दुकान व काउंटर QR स्टैंडी', icon: '📱', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c06', num: '06', enName: 'Comics', hiName: 'कॉमिक्स व बाल साहित्य', icon: '🦸', hasChildren: true, children: [
      { id: '06-1', enName: 'Pauranik Graphic Comics', hiName: 'रामायण, महाभारत सचित्र ग्राफिक कॉमिक्स', icon: '📖', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '06-2', enName: 'Kids Illustrated Books', hiName: 'पंचतंत्र, तेनालीराम 5-पुस्तकों का प्रिंटेड कॉम्बो', icon: '📚', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '06-3', enName: 'Daily Humor & Puzzles', hiName: 'क्षेत्रीय हास्य व्यंग्य स्ट्रिप्स, दैनिक सुडोकू व पहेली', icon: '🧩', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c07', num: '07', enName: 'Communication', hiName: 'संचार व सत्यापन', icon: '💬', hasChildren: true, children: [
      { id: '07-1', enName: 'Verified Merchant Directory', hiName: 'सत्यापित स्थानीय दुकानदार व मिस्त्री (1-टैप कॉल)', icon: '📞', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '07-2', enName: 'WhatsApp Promo Broadcaster', hiName: 'त्योहारों पर थोक ऑफर व डिस्काउंट संदेश', icon: '📢', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '07-3', enName: 'Cyber Fraud & Spam Shield', hiName: 'लॉटरी, फर्जी कॉल व बिजली बिल ठगी से बचाव', icon: '🛡️', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c08', num: '08', enName: 'Dating & Matrimony', hiName: 'विवाह व रिश्ते', icon: '💍', hasChildren: true, children: [
      { id: '08-1', enName: 'Samajik Matrimony', hiName: 'समाज अनुसार सत्यापित पारिवारिक बायोडाटा', icon: '👥', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '08-2', enName: 'Kundali Milan & Matching', hiName: '36 गुण मिलान, नाड़ी/दोष व विद्वान परामर्श', icon: '📜', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '08-3', enName: 'Vivah Madhyasth Network', hiName: 'मोहल्ले के पंडित व मैरिज ब्यूरो सीधी बैठक', icon: '🤝', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c09', num: '09', enName: 'Education', hiName: 'शिक्षा व कोचिंग', icon: '🎓', hasChildren: true, children: [
      { id: '09-1', enName: 'Home Tutors & Coaching', hiName: 'कक्षा 1 से 12वीं तक नजदीकी सत्यापित शिक्षक', icon: '👨‍🏫', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '09-2', enName: 'Sarkari Mock Test Pass', hiName: 'पुलिस, रेलवे, एसएससी भर्ती लाइव टेस्ट सीरीज', icon: '📝', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '09-3', enName: 'Practical Skill Institutes', hiName: 'मोबाइल रिपेयरिंग, घरेलू बिजली वायरिंग ट्रेनिंग', icon: '🔧', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c10', num: '10', enName: 'Entertainment', hiName: 'मनोरंजन व उत्सव', icon: '🎭', hasChildren: true, children: [
      { id: '10-1', enName: 'Cinema & Mela Tickets', hiName: 'मेला, सर्कस, रामलीला व सिनेमा डिजिटल पास', icon: '🎟️', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '10-2', enName: 'Live Stage Artists & DJ', hiName: 'लोक गायक, जागरण मंडली, एंकर व डीजे पार्टी', icon: '🎤', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '10-3', enName: 'Regional Theater & Comedy', hiName: 'पारंपरिक नौटंकी, बिदेसिया नाटक व हास्य कवि सम्मेलन', icon: '🎪', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c11', num: '11', enName: 'Events', hiName: 'इवेंट्स व शादी समारोह', icon: '🎉', hasChildren: true, children: [
      { id: '11-1', enName: 'Tent & Light Decor', hiName: 'वॉटरप्रूफ जर्मन हैंगर, फ्लावर स्टेज व लाइटिंग', icon: '🎪', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '11-2', enName: 'Halwai & Catering Services', hiName: 'अनुभवी हलवाई टीम, देशी घी कैटरिंग व बर्तन', icon: '👨‍🍳', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '11-3', enName: 'Wedding Drone Photography', hiName: '4K ड्रोन कवरेज, प्री-वेडिंग व फोटो एल्बम', icon: '📹', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c12', num: '12', enName: 'Finance', hiName: 'फाइनेंस व बैंकिंग', icon: '💳', hasChildren: true, children: [
      { id: '12-1', enName: 'Doorstep AEPS Cash', hiName: 'फिंगरप्रिंट व माइक्रो-ATM से घर बैठे नकद निकासी', icon: '🏧', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '12-2', enName: 'Vyapar Micro-Loans', hiName: 'खुदरा दुकानदारों हेतु त्वरित व्यवसायिक ऋण', icon: '💰', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '12-3', enName: '1-Click Vehicle Insurance', hiName: 'बाइक/कार थर्ड पार्टी बीमा तत्काल रिन्यूअल', icon: '🛡️', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c13', num: '13', enName: 'Food & Drink', hiName: 'ढाबा व टिफिन', icon: '🍲', hasChildren: true, children: [
      { id: '13-1', enName: 'Monthly Tiffin Service', hiName: 'शुद्ध शाकाहारी 4-रोटी, दाल, सब्जी मासिक टिफिन', icon: '🍱', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '13-2', enName: 'Local Dhaba & Sweets', hiName: 'प्रसिद्ध ढाबों का भोजन व देशी घी मिठाई', icon: '🥘', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '13-3', enName: 'Bulk Mandi Event Ration', hiName: 'शादी, भंडारे हेतु थोक मंडी भाव आटा-तेल सप्लाई', icon: '🌾', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c14', num: '14', enName: 'Health & Fitness', hiName: 'स्वास्थ्य व योग', icon: '🧘', hasChildren: true, children: [
      { id: '14-1', enName: 'Doorstep Yoga & Physio', hiName: 'घर पर योग प्रशिक्षक व फिजियोथेरेपिस्ट विज़िट', icon: '🩺', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '14-2', enName: 'Local Gym Membership Passes', hiName: 'नजदीकी आधुनिक जिम का डिस्काउंटेड पास', icon: '🏋️', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '14-3', enName: 'Desi Akhada Nutrition', hiName: 'शुद्ध देशी गाय का ताजा A2 कच्चा दूध व सत्तू', icon: '🥛', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c15', num: '15', enName: 'House & Home', hiName: 'घरेलू सेवाएँ व मरम्मत', icon: '🏠', hasChildren: true, action: 'launch', children: [
      { id: '15-1', enName: 'Electrician & Motor Repair', hiName: 'शॉर्ट सर्किट, पंखा, इनवर्टर व समर्सिबल रिपेयर', icon: '⚡', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '15-2', enName: 'Plumber & Sanitary', hiName: 'नल लीकेज, छत टंकी फिटिंग व सीवरेज सफाई', icon: '🚰', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '15-3', enName: 'Carpenter & Home Painting', hiName: 'दरवाजा, बेड रिपेयर, दीवार पुट्टी व पेंटिंग', icon: '🪚', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c16', num: '16', enName: 'Libraries & Demo', hiName: 'लाइब्रेरी व अध्ययन डेस्क', icon: '🏛️', hasChildren: true, action: 'launch', children: [
      { id: '16-1', enName: 'AC Study Library Seat', hiName: 'साउंडप्रूफ केबिन डेस्क, 5G वाईफाई व शांत अध्ययन', icon: '🪑', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '16-2', enName: 'Old Books Buy/Sell Market', hiName: 'यूपीएससी, एसएससी, नीट पुरानी किताबें 50% छूट', icon: '📖', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '16-3', enName: 'Bulk School Stationery', hiName: 'कॉपियों के बंडल, पेन व प्रोजेक्ट किट्स मिल रेट', icon: '📦', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c17', num: '17', enName: 'Lifestyle', hiName: 'स्वावलंबन व लाइफस्टाइल', icon: '🌱', hasChildren: true, children: [
      { id: '17-1', enName: 'Steam Dry Cleaning & Laundry', hiName: 'सूट, शेरवानी, लहंगा, कंबल स्टीम ड्राई क्लीनिंग', icon: '👔', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '17-2', enName: 'Ladies Doorstep Tailoring', hiName: 'घर पर नाप, डिजाइनर ब्लाउज, सूट व फॉल-पीको', icon: '🧵', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '17-3', enName: 'Home Deep Cleaning', hiName: 'सोफा शैम्पू वॉश, किचन चिमनी व बाथरूम क्लीनिंग', icon: '🧹', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c18', num: '18', enName: 'Maps & Navigation', hiName: 'टेम्पो व ट्रांसपोर्ट', icon: '🚚', hasChildren: true, children: [
      { id: '18-1', enName: 'Goods Tempo Booking', hiName: 'टाटा ऐस, बोलेरो पिकअप 15 मिनट में (फिक्स रेट)', icon: '🚛', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '18-2', enName: 'Hyperlocal 2-Hour Courier', hiName: '2 घंटे में दुकान पार्सल, दस्तावेज व दवा डिलीवरी', icon: '🏍️', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '18-3', enName: 'Packers & Movers Shifting', hiName: 'बबल रैप पैकिंग, सोफा-फ्रिज सुरक्षित शिफ्टिंग', icon: '📦', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c19', num: '19', enName: 'Medical', hiName: 'दवाई व क्लिनिक (Medical)', icon: '🏥', hasChildren: true, children: [
      { id: '19-1', enName: 'Home Blood Sample Collect', hiName: 'एनएबीएल प्रमाणित लैब द्वारा घर से ब्लड सैंपल', icon: '💉', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '19-2', enName: 'Doorstep Discount Medicines', hiName: 'पर्चा भेजते ही 20% फ्लैट छूट पर दवाएं व बिल', icon: '💊', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '19-3', enName: '24x7 Oxygen Ambulance', hiName: 'ऑक्सीजन व स्ट्रेचर युक्त बेसिक लाइफ सपोर्ट वैन', icon: '🚑', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c20', num: '20', enName: 'Music & Audio', hiName: 'बैंड, डीजे व साउंड', icon: '🎺', hasChildren: true, children: [
      { id: '20-1', enName: 'Wedding Band & Baggi', hiName: 'ब्रास बैंड, शहनाई, फूलों से सजी बग्गी व लाइट', icon: '🥁', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '20-2', enName: 'DJ Sound System Rental', hiName: 'जेबीएल डबल बेस स्पीकर, शार्पी लाइट व जनरेटर', icon: '🔊', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '20-3', enName: 'Instrument Repair & Classes', hiName: 'हारमोनियम ट्यूनिंग, ढोलक-तबला रिपेयर व क्लास', icon: '🪕', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c21', num: '21', enName: 'News & Magazines', hiName: 'समाचार व पत्रिकाएं', icon: '📰', hasChildren: true, children: [
      { id: '21-1', enName: 'Hyperlocal Citizen News', hiName: 'वार्ड व ग्राम स्तर की सच्ची नागरिक समस्याएं', icon: '📢', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '21-2', enName: 'Newspaper Classified Ads', hiName: 'दैनिक अखबारों में नाम परिवर्तन व विज्ञापन', icon: '📑', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '21-3', enName: 'Monthly Magazines Courier', hiName: 'प्रतियोगिता दर्पण व सामान्य ज्ञान मासिक डिलीवरी', icon: '📬', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c22', num: '22', enName: 'Parenting', hiName: 'जच्चा-बच्चा देखभाल', icon: '👶', hasChildren: true, children: [
      { id: '22-1', enName: 'Newborn & Mother Massage Dai', hiName: 'अनुभवी दाई द्वारा पारंपरिक आयुर्वेदिक मालिश', icon: '🤱', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '22-2', enName: 'Pure Organic Baby Food', hiName: 'केमिकल-मुक्त भुना रागी व मखाना शिशु आहार दलिया', icon: '🥣', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '22-3', enName: 'Baby Cradle & Cotton Clothes', hiName: 'शुद्ध सूती झबले, लकड़ी का पारंपरिक पालना व झूला', icon: '🪆', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c23', num: '23', enName: 'Personalization', hiName: 'कस्टमाइजेशन व थीम्स', icon: '✨', hasChildren: true, children: [
      { id: '23-1', enName: 'Mobile Skins & UV Glass', hiName: 'फोन पर 360-डिग्री मैट/लेदर स्किन व यूवी ग्लास', icon: '📱', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '23-2', enName: 'Customized Photo Gifts', hiName: 'फोटो मग, कुशन, चाबी का गुच्छा व एलईडी फ्रेम', icon: '🎁', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '23-3', enName: 'Vehicle Radium & Plates', hiName: 'हाई-सिक्योरिटी नंबर प्लेट फ्रेम व रेडियम कटिंग', icon: '🚗', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c24', num: '24', enName: 'Photography', hiName: 'स्टूडियो व फोटोग्राफी', icon: '📷', hasChildren: true, children: [
      { id: '24-1', enName: 'Instant Passport Photos', hiName: 'सरकारी भर्ती व पहचान पत्र हेतु 5 मिनट में 8 फोटो', icon: '📸', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '24-2', enName: 'Shop Catalog Photo Shoot', hiName: 'दुकान सामान व कपड़ों का स्टूडियो शूट', icon: '🖼️', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '24-3', enName: 'Event Videography', hiName: 'मुंडन, जन्मदिन व उत्सवों की फुल एचडी वीडियो मिक्सिंग', icon: '📹', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c25', num: '25', enName: 'Productivity', hiName: 'ऑनलाइन फॉर्म व बिलिंग', icon: '🧾', hasChildren: true, children: [
      { id: '25-1', enName: 'Sarkari Online Form Filling', hiName: 'सरकारी नौकरी व छात्रवृत्ति फॉर्म बिना गलती ऑनलाइन', icon: '📋', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '25-2', enName: 'PAN & Identity Docs Help', hiName: 'नया पैन कार्ड आवेदन, पता सुधार व लेमिनेशन', icon: '🆔', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '25-3', enName: 'Bulk Xerox & Lamination', hiName: 'थोक डबल-साइड फोटोकॉपी व प्रोजेक्ट बाइंडिंग', icon: '📚', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c26', num: '26', enName: 'Shopping', hiName: 'किराना व वस्त्र बाज़ार', icon: '🛒', hasChildren: true, children: [
      { id: '26-1', enName: 'Monthly Grocery Ration', hiName: 'विश्वसनीय बनिया से शुद्ध आटा, दाल, तेल मासिक राशन', icon: '🛍️', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '26-2', enName: 'Wholesale Saree & Garments', hiName: 'थोक कपड़ा मंडी भाव पर साड़ियां व रेडीमेड वस्त्र', icon: '👗', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '26-3', enName: 'In-Store Easy Exchange', hiName: 'पसंद न आने पर 24 घंटे में काउंटर पर आसान वापसी', icon: '🔄', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c27', num: '27', enName: 'Social', hiName: 'चौपाल व नागरिक मंच (Social)', icon: '🗣️', hasChildren: true, children: [
      { id: '27-1', enName: 'Mohalla Civic Complaint Board', hiName: 'वार्ड पार्षद सड़क, नाली व स्ट्रीट लाइट समस्या बोर्ड', icon: '📢', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '27-2', enName: 'Kisan & Trader Union Forum', hiName: 'खाद-बीज उपलब्धता, मंडी भाव व सुरक्षा सहयोग मंच', icon: '🌾', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '27-3', enName: 'Emergency Blood Donor Net', hiName: 'अस्पताल में तुरंत पहुंचने वाले सत्यापित रक्तदाता', icon: '🩸', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c28', num: '28', enName: 'Sports', hiName: 'टर्फ ग्राउंड व खेलकूद', icon: '⚽', hasChildren: true, children: [
      { id: '28-1', enName: 'Night Box Cricket Turf', hiName: 'फ्लडलाइट बॉक्स क्रिकेट व फुटबॉल टर्फ स्लॉट', icon: '🏏', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '28-2', enName: 'Cricket Bat Repair & Grip', hiName: 'कश्मीर विलो बल्ले की नॉकिंग, थ्रेडिंग व टो-गार्ड', icon: '🪵', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '28-3', enName: 'Local Cricket Tournaments', hiName: 'टेनिस बॉल टूर्नामेंट टीम एंट्री व लाइव स्कोरिंग', icon: '🏆', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c29', num: '29', enName: 'Tools', hiName: 'पावर टूल्स व मिस्त्री किट', icon: '🧮', hasChildren: true, children: [
      { id: '29-1', enName: 'Daily Power Tools Rental', hiName: 'हैमर ड्रिल, मार्बल कटर, वेल्डिंग मशीन दैनिक किराया', icon: '🔧', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '29-2', enName: 'Power Tool Rewinding', hiName: 'पावर टूल कॉपर आर्मेचर वाइंडिंग व कार्बन ब्रश', icon: '⚡', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '29-3', enName: 'Mistry Hand Tools Kit', hiName: 'करनी, रंदा, साहुल, पाना व हथौड़ा संपूर्ण सेट', icon: '🔨', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c30', num: '30', enName: 'Travel & Local', hiName: 'यात्रा व टैक्सी स्टैंड', icon: '🧭', hasChildren: true, children: [
      { id: '30-1', enName: 'Bolero & Scorpio Rental', hiName: 'शादी, तिलक व यात्रा हेतु कमर्शियल गाड़ी बुकिंग', icon: '🚙', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '30-2', enName: 'Pilgrimage Tour Bus Seats', hiName: 'अयोध्या, काशी, गया 2x2 लग्जरी बस कंफर्म सीट', icon: '🚌', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '30-3', enName: 'Railway Station Drop Cabs', hiName: 'स्टेशन व एयरपोर्ट हेतु फिक्स-किराया टैक्सी सेवा', icon: '🚖', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c31', num: '31', enName: 'Video Players & Editors', hiName: 'वीडियो निर्माण व दुकान रील्स', icon: '🎬', hasChildren: true, children: [
      { id: '31-1', enName: 'Retail Shop Promo Reels', hiName: 'कपड़ों व जूतों की दुकान हेतु 30-सेकंड रील्स शूट', icon: '📱', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '31-2', enName: 'Wedding Video Song Mixing', hiName: 'शादी वीडियोग्राफी की 3D टाइटल, गीत व वीडियो मिक्सिंग', icon: '🎞️', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '31-3', enName: 'YouTube Channel Edit & Thumb', hiName: '1080p वीडियो एडिटिंग, वॉयस क्लीनिंग व थंबनेल', icon: '📽️', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]},
    { id: 'c32', num: '32', enName: 'Weather', hiName: 'मौसम पूर्वानुमान व रडार', icon: '🌤️', hasChildren: true, children: [
      { id: '32-1', enName: 'Village Rain & Storm Alerts', hiName: '72 घंटे का गांव स्तर पर सटीक बारिश, आंधी चेतावनी', icon: '🌧️', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '32-2', enName: 'Crop Spray Weather Advisory', hiName: 'मौसम अनुसार धान-गेहूं में कीटनाशक छिड़काव समय', icon: '🌾', badge: 'खोलें ›', state: 'active', action: 'action' },
      { id: '32-3', enName: 'Crop Damage Insurance Claim', hiName: 'सूखा व अतिवृष्टि में फसल क्षतिपूर्ति मुआवजा सर्वेक्षण', icon: '📋', badge: 'खोलें ›', state: 'active', action: 'action' }
    ]}
  ];

  // ==============================================================================
  // SECTION 2: 18 CANONICAL RECREATION & GAMES (54 P2P PHYSICAL SUB-MODULES)
  // 17 Play Store Games (Cat 33 to 49) + 1 Family Category (Cat 50) = 18 Canonical
  // ==============================================================================

  var RM_GAMES_DATA = [
    { id: 'c33', num: '33', gameId: 'g33', enName: 'Action Games', hiName: 'ऐक्शन गेमिंग व लेजर टैग', icon: '🎮', hasChildren: true, children: [
      { id: '33-1', enName: 'PS5 & PC Gaming Parlor', hiName: '4K स्क्रीन PS5 व गेमिंग पीसी 1-घंटा स्लॉट बुकिंग', icon: '🕹️', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '33-2', enName: 'Action Gaming Tournament Pass', hiName: 'स्थानीय लैन ई-स्पोर्ट्स मुकाबला टीम एंट्री पास', icon: '🏆', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '33-3', enName: 'Laser Tag Arena Party Setup', hiName: 'बर्थडे पार्टी हेतु लेजर टैग शूटिंग बंकर सेटअप', icon: '🔫', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c34', num: '34', gameId: 'g34', enName: 'Adventure Games', hiName: 'साहसिक कैंपिंग व ट्रैकिंग', icon: '⛺', hasChildren: true, children: [
      { id: '34-1', enName: 'Camping Tent & Gear Rental', hiName: '4-पर्सन वाटरप्रूफ टेंट, स्लीपिंग बैग व बॉनफायर', icon: '🏕️', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '34-2', enName: 'Local Forest Trekking Guides', hiName: 'स्थानीय पहाड़ी व जंगल ट्रैकिंग प्रमाणित गाइड', icon: '🌲', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '34-3', enName: 'Zipline & Adventure Park Pass', hiName: 'रिवर राफ्टिंग, जिपलाइन व एडवेंचर पार्क डिस्काउंट', icon: '🧗', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c35', num: '35', gameId: 'g35', enName: 'Arcade Games', hiName: 'मेला झूले व आर्केड जोन', icon: '🎡', hasChildren: true, children: [
      { id: '35-1', enName: 'Mela Jhoola & Dragon Train', hiName: 'मेले में ब्रेकडांस झूला, ड्रैगन ट्रेन व मौत का कुआं', icon: '🎢', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '35-2', enName: 'Arcade Center Token Packs', hiName: 'मॉल गेमिंग जोन सिक्के (टोकन) 30% अतिरिक्त बैलेंस', icon: '🪙', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '35-3', enName: 'Party Bouncy & Air Hockey', hiName: 'बच्चों की बर्थडे पार्टी बाउंसिंग झूला व एयर हॉकी', icon: '🎈', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c36', num: '36', gameId: 'g36', enName: 'Board Games', hiName: 'कैरम व शतरंज क्लब', icon: '♟️', hasChildren: true, children: [
      { id: '36-1', enName: 'Mohalla Carrom Tournament', hiName: 'मोहल्ला कैरम बोर्ड चैंपियनशिप रजिस्ट्रेशन मुकाबला', icon: '🎯', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '36-2', enName: 'Offline Chess Academy & Club', hiName: 'फिडे नियमों के साथ टाइमर शतरंज बोर्ड कोचिंग', icon: '♟', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '36-3', enName: 'Heavy Birch Carrom Boards', hiName: '32mm इंग्लिश बर्च वाटरप्रूफ कैरम बोर्ड व पाउडर', icon: '🪵', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c37', num: '37', gameId: 'g37', enName: 'Card Games', hiName: 'जादूगर शो व कार्ड क्लब', icon: '🃏', hasChildren: true, children: [
      { id: '37-1', enName: 'Live Magician Card Show', hiName: 'पारिवारिक उत्सव लाइव जादूगर ताश ट्रिक शो बुकिंग', icon: '🎩', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '37-2', enName: '100% Plastic Waterproof Cards', hiName: 'कसीनो-ग्रेड पीवीसी प्लेइंग ताश व ग्रीन फेल्ट मैट', icon: '♠️', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '37-3', enName: 'Senior Citizen Bridge Club', hiName: 'वरिष्ठ नागरिकों का शाम का मनोरंजन कम्युनिटी क्लब', icon: '👴', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c38', num: '38', gameId: 'g38', enName: 'Casino Games', hiName: 'फन रूले व लकी स्पिन व्हील', icon: '🎰', hasChildren: true, children: [
      { id: '38-1', enName: 'Wedding Fun Casino Setup', hiName: 'शादी पार्टी गैर-जुआ फन रूले व ब्लैकजैक गेम टेबल', icon: '🎲', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '38-2', enName: 'Promotional Lucky Spin Wheel', hiName: 'दुकान प्रचार व त्योहार डिस्काउंट लकी स्पिन व्हील', icon: '🎡', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '38-3', enName: 'Party Game Dealer Troupe', hiName: 'पेशेवर क्रुपियर (गेम डीलर), कस्टमाइज्ड चिप्स व टेबल', icon: '🎩', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c39', num: '39', gameId: 'g39', enName: 'Casual Games', hiName: 'मोहल्ला लूडो लीग व फूजबॉल', icon: '🎲', hasChildren: true, children: [
      { id: '39-1', enName: 'Sunday Mohalla Ludo League', hiName: 'रविवार पारिवारिक लूडो मुकाबला व मेडल कॉम्बो', icon: '🎲', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '39-2', enName: 'Foosball & Dart Board Tokens', hiName: 'कैफे टेबल सॉकर (फूजबॉल) टोकन व ब्रास डार्ट बोर्ड', icon: '⚽', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '39-3', enName: 'Handcrafted Wooden Ludo Sets', hiName: 'सागवान लकड़ी का बड़ा लूडो-सांप सीढ़ी बोर्ड', icon: '🪵', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c40', num: '40', gameId: 'g40', enName: 'Educational Games', hiName: 'अबेकस व साइंस मॉडल किट्स', icon: '🧮', hasChildren: true, children: [
      { id: '40-1', enName: 'Offline Abacus & Mental Math', hiName: 'बच्चों की दिमागी गणना तेज करने हेतु हैंड्स-ऑन क्लास', icon: '🧮', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '40-2', enName: 'Inter-School Brain Quiz Pass', hiName: 'क्षेत्रीय विज्ञान व सामान्य ज्ञान क्विज प्रतियोगिता', icon: '📜', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '40-3', enName: 'Wooden Science Model Kits', hiName: 'सोलर सिस्टम, हाइड्रोलिक क्रेन DIY लकड़ी किट्स', icon: '🔬', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c41', num: '41', gameId: 'g41', enName: 'Music Games', hiName: 'जैम रूम व कराओके पार्टी', icon: '🎤', hasChildren: true, children: [
      { id: '41-1', enName: 'Soundproof Jam Room Slot', hiName: 'ड्रम किट, कीबोर्ड व गिटार एम्पलीफायर 1-घंटा प्रैक्टिस', icon: '🥁', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '41-2', enName: 'Party Karaoke Machine Setup', hiName: 'डुअल वायरलेस माइक, स्क्रीन व भारी स्पीकर कॉम्बो', icon: '🎤', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '41-3', enName: 'Local Singing Audition Pass', hiName: 'क्षेत्रीय स्टेज गायन प्रतिभा खोज प्रतियोगिता पास', icon: '🎶', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c42', num: '42', gameId: 'g42', enName: 'Puzzle Games', hiName: 'रूबिक क्यूब व सुडोकू मीट', icon: '🧩', hasChildren: true, children: [
      { id: '42-1', enName: 'Rubiks Cube Speed Workshop', hiName: '2-दिवसीय वर्कशॉप—30 सेकंड में 3x3 क्यूब हल तकनीक', icon: '🧊', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '42-2', enName: 'District Sudoku Championship', hiName: 'जिला स्तरीय ऑफलाइन टाइमर सुडोकू प्रतियोगिता', icon: '📝', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '42-3', enName: 'Magnetic Speedcube Combos', hiName: 'स्मूथ मैग्नेटिक 3x3, 4x4 क्यूब्स व लुब्रिकेंट ऑयल', icon: '✨', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c43', num: '43', gameId: 'g43', enName: 'Racing Games', hiName: 'गो-कार्टिंग व साइक्लोथॉन', icon: '🏎️', hasChildren: true, children: [
      { id: '43-1', enName: 'Go-Karting Track Racing Pass', hiName: '10-लैप गो-कार्टिंग ट्रैक टिकट व सेफ्टी किट', icon: '🏎️', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '43-2', enName: 'RC Car Obstacle Track', hiName: 'हाई-स्पीड रिमोट कंट्रोल (RC) कार रेसिंग ट्रैक स्लॉट', icon: '🚗', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '43-3', enName: 'Bicycle Cyclothon Entry Pass', hiName: '10 किमी हाईवे साइकिल मैराथन प्रतियोगिता पास', icon: '🚴', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c44', num: '44', gameId: 'g44', enName: 'Role Playing Games', hiName: 'रामलीला व नुक्कड़ नाटक', icon: '🎭', hasChildren: true, children: [
      { id: '44-1', enName: 'Ramlila Character Auditions', hiName: 'रामलीला व ऐतिहासिक नाटकों हेतु पात्र चयन अभ्यास', icon: '👑', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '44-2', enName: 'Historical Costume Rental', hiName: 'राजा, सेनापति, मुकुट, तलवार व पारंपरिक वेशभूषा', icon: '🗡️', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '44-3', enName: 'Professional Nukkad Natak', hiName: 'सरकारी व सामाजिक जागरूकता हेतु पेशेवर नुक्कड़ टीम', icon: '📢', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c45', num: '45', gameId: 'g45', enName: 'Simulation Games', hiName: 'ड्राइविंग व ट्रैक्टर सिम्युलेटर', icon: '🚜', hasChildren: true, children: [
      { id: '45-1', enName: 'Car Driving Cockpit Sim', hiName: 'शून्य दुर्घटना जोखिम के साथ स्टीयरिंग व गियर क्लास', icon: '🚗', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '45-2', enName: 'Tractor & Harvester Training', hiName: 'खेत में ट्रैक्टर व कंबाइन हार्वेस्टर ऑपरेटिंग ट्रेनिंग', icon: '🚜', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '45-3', enName: '9D Virtual Reality (VR) Zone', hiName: '360° मोशन चेयर रोलर कोस्टर व फ्लाइट राइड स्लॉट', icon: '🥽', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c46', num: '46', gameId: 'g46', enName: 'Sports Games', hiName: 'लेदर बॉल क्रिकेट व ट्रॉफी', icon: '🏆', hasChildren: true, children: [
      { id: '46-1', enName: 'Leather Ball Night Cricket', hiName: '20-ओवर फ्लडलाइट नॉकआउट टूर्नामेंट टीम एंट्री', icon: '🏏', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '46-2', enName: '5v5 Football Turf Court', hiName: 'फुटसल कोर्ट 1-घंटा स्लॉट व साइज-5 मैच बॉल गियर', icon: '⚽', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '46-3', enName: 'Sports Trophies & Medals', hiName: 'टूर्नामेंट हेतु 3 फीट ब्रास ट्रॉफी, मेडल व जर्सी निर्माण', icon: '🥇', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c47', num: '47', gameId: 'g47', enName: 'Strategy Games', hiName: 'शतरंज रणनीति व कैंप', icon: '🧠', hasChildren: true, children: [
      { id: '47-1', enName: '7-Day Chess Tactics Camp', hiName: 'ग्रैंडमास्टर ओपनिंग और एंडगेम रणनीति ऑफलाइन कैंप', icon: '♟️', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '47-2', enName: 'Rapid Timed Chess League', hiName: '10-मिनट डिजिटल क्लॉक रैपिड शतरंज रेटिंग मैच', icon: '⏱️', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '47-3', enName: 'Weighted Wooden Chess Sets', hiName: 'भारी शीशम लकड़ी स्टॉन्टन मोहरे व रोल्ड विनाइल बोर्ड', icon: '🪵', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c48', num: '48', gameId: 'g48', enName: 'Trivia Games', hiName: 'लाइव बजर क्विज व GK बुक्स', icon: '💡', hasChildren: true, children: [
      { id: '48-1', enName: 'Live Buzzer Round Quiz Pass', hiName: 'स्कूल/कॉलेज सामान्य ज्ञान प्रतियोगिता पास (लाइव बजर)', icon: '🔔', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '48-2', enName: 'Saturday Cash Prize Trivia', hiName: 'शनिवार शाम नकद पुरस्कार वाली प्रश्नोत्तरी सभा टिकट', icon: '💰', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '48-3', enName: '5000 GK Question Booklets', hiName: 'स्थिर सामान्य ज्ञान व समसामयिकी 5000 Q&A प्रिंटेड बुकलेट', icon: '📖', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c49', num: '49', gameId: 'g49', enName: 'Word Games', hiName: 'स्पेलिंग बी व स्क्रैबल', icon: '🔤', hasChildren: true, children: [
      { id: '49-1', enName: 'Spelling Bee District Contest', hiName: 'जिला स्तरीय हिंदी व अंग्रेजी स्पेलिंग बी प्रतियोगिता पास', icon: '🐝', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '49-2', enName: 'Monthly Crossword Contest', hiName: 'अखबार वर्ग पहेली हल करने का मासिक डाक मुकाबला', icon: '📝', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '49-3', enName: 'Wooden Scrabble & Word Tiles', hiName: 'पाइनवुड लकड़ी की वर्णमाला टाइल्स व स्क्रैबल बोर्ड', icon: '🪵', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]},
    { id: 'c50', num: '50', gameId: 'g50', enName: 'Family Games', hiName: 'पारिवारिक तंबोला व आनंद मेला', icon: '🎡', hasChildren: true, children: [
      { id: '50-1', enName: 'Saturday Mohalla Tambola Pass', hiName: 'शनिवार पारिवारिक हाउजी टिकट व फुल-हाउस नकद लाभांश', icon: '🎟️', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '50-2', enName: 'Family Fun Fair Game Stalls', hiName: 'आनंद मेला हेतु रिंग थ्रो, गुब्बारा शूटिंग स्टॉल व ऑपरेटर', icon: '🎪', badge: 'खेलें ›', state: 'active', action: 'game' },
      { id: '50-3', enName: 'Kitty Party Fun Games Kit', hiName: 'महिलाओं की किटी पार्टी हेतु 10 मजेदार इनडोर गेम सेट्स', icon: '🎁', badge: 'खेलें ›', state: 'active', action: 'game' }
    ]}
  ];

  // ==============================================================================
  // SECTION 3: BASELINE EXPORTS, METADATA BRIDGES & REGISTRY APIS (100% ZEL)
  // ==============================================================================

  var c16Entry = RM_SERVICES_DATA.find(function (s) { return s.id === 'c16'; });
  var C16_CHILDREN = c16Entry ? c16Entry.children : [];

  var c15Entry = RM_SERVICES_DATA.find(function (s) { return s.id === 'c15'; });
  var C15_CHILDREN = c15Entry ? c15Entry.children : [];

  // Build Unified Flat Array for New Taxonomy Engines (Dual Compatibility)
  var ALL_CATEGORIES = [];

  RM_SERVICES_DATA.forEach(function (cat) {
    cat.tier = 1;
    cat.name = cat.enName + ' (' + cat.hiName + ')';
    cat.title = cat.enName;
    cat.hindiTitle = cat.hiName;
    cat.numId = parseInt(cat.num, 10);
    ALL_CATEGORIES.push(cat);
  });

  RM_GAMES_DATA.forEach(function (cat) {
    cat.tier = 2;
    cat.name = cat.enName + ' (' + cat.hiName + ')';
    cat.title = cat.enName;
    cat.hindiTitle = cat.hiName;
    cat.numId = parseInt(cat.num, 10);
    ALL_CATEGORIES.push(cat);
  });

  // 1. Authoritative Legacy Window Bindings
  window.RM_SERVICES_DATA = RM_SERVICES_DATA;
  window.RM_GAMES_DATA = RM_GAMES_DATA;
  window.C16_CHILDREN = C16_CHILDREN;
  window.C15_CHILDREN = C15_CHILDREN;

  // 2. Authoritative New Registry Window Bindings
  window.RM_CATEGORIES_DATA = ALL_CATEGORIES;
  window.RM_CATEGORIES_ALL = ALL_CATEGORIES;

  window.RM_CATALOG_REGISTRY = {
    getAllCategories: function () {
      return ALL_CATEGORIES;
    },
    getCategoryData: function (identifier) {
      if (!identifier) return null;
      var cleanId = String(identifier).toLowerCase().trim();
      var numOnly = cleanId.replace(/[^0-9]/g, '');
      var numVal = parseInt(numOnly, 10);

      for (var i = 0; i < ALL_CATEGORIES.length; i++) {
        var c = ALL_CATEGORIES[i];
        if (c.id === cleanId || 
            (c.gameId && c.gameId === cleanId) || 
            c.num === cleanId || 
            c.num === numOnly || 
            c.numId === numVal) {
          return c;
        }
      }
      return null;
    },
    getSubcategoryData: function (catId, subId) {
      var cat = this.getCategoryData(catId);
      if (!cat || !cat.children) return null;
      var cleanSub = String(subId).trim();

      for (var j = 0; j < cat.children.length; j++) {
        var sub = cat.children[j];
        if (sub.id === cleanSub) {
          return sub;
        }
      }
      return null;
    },
    getTier1Categories: function () {
      return RM_SERVICES_DATA;
    },
    getTier2Categories: function () {
      return RM_GAMES_DATA;
    }
  };

  // 3. Dispatch Ready Event for Reactive Engines
  try {
    window.dispatchEvent(new CustomEvent('RM_CATALOG_DATA_READY', {
      detail: { count: ALL_CATEGORIES.length, totalSubWings: 150 }
    }));
  } catch (e) {}

})(typeof window !== 'undefined' ? window : this);
