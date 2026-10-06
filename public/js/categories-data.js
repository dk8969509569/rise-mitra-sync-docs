/**
 * RISE MITRA — 50 CANONICAL CATEGORIES & 150 SUB-SERVICES DATA REGISTRY
 * SPECIFICATION : FOLDER A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) | 14_04__EXT_004
 * GOVERNANCE    : GATE-23.5 | 75:25 RATIO | 3-PILL ACTION STRIP | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/categories-data.js
 * DUAL-FOLDER REFERENCES:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function (window) {
  'use strict';

  // ==============================================================================
  // SECTION 1: 33 CANONICAL SERVICES (99 AI-PROOF REVENUE SUB-MODULES)
  // ==============================================================================

  var RM_SERVICES_DATA = [
    {
      id: 'c01', num: '01', enName: 'Art & Design', hiName: 'डिज़ाइन व कला', icon: '🎨', hasChildren: true,
      children: [
        { id: '01-1', enName: 'Flex & Hoarding Print', hiName: 'फ्लेक्स बोर्ड व बैनर प्रिंटिंग', icon: '🪧', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '01-2', enName: 'Dukan Signboard Maker', hiName: 'दुकान बोर्ड व ऐक्रेलिक नेमप्लेट', icon: '🖌️', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '01-3', enName: 'Rubber Stamp & Card Print', hiName: 'मुहर, रबर स्टैम्प व विज़िटिंग कार्ड', icon: '💌', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c02', num: '02', enName: 'Auto & Vehicles', hiName: 'वाहन सेवा', icon: '🚗', hasChildren: true,
      children: [
        { id: '02-1', enName: 'Local Garage & Service', hiName: 'गैराज, मोबिल ऑयल व सर्विसिंग', icon: '🔧', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '02-2', enName: 'Tube Puncture & Emergency', hiName: 'टायर पंक्चर व ऑन-रोड मदद', icon: '🛞', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '02-3', enName: 'Used Vehicle Inspection', hiName: 'पुरानी गाड़ी भौतिक जाँच व सौदा', icon: '🔍', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c03', num: '03', enName: 'Beauty & Salon', hiName: 'ब्यूटी व सैलून', icon: '✂️', hasChildren: true,
      children: [
        { id: '03-1', enName: 'Home Barber & Haircut', hiName: 'घर पर बाल कटाई व दाढ़ी ट्रिम', icon: '💈', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '03-2', enName: 'Bridal Makeup & Mehendi', hiName: 'दुल्हन शृंगार, मेहंदी व फेशियल', icon: '💅', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '03-3', enName: 'Parlour Ledger & Token', hiName: 'सैलून व पार्लर टोकन बहीखाता', icon: '📒', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c04', num: '04', enName: 'Books & Reference', hiName: 'किताबें व संदर्भ', icon: '📚', hasChildren: true,
      children: [
        { id: '04-1', enName: 'Coaching Exam Notes', hiName: 'प्रतियोगी परीक्षा क्लासरूम नोट्स', icon: '📝', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '04-2', enName: 'Gram Panchayat Rules', hiName: 'ग्राम पंचायत नियमावली व फॉर्म', icon: '📜', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '04-3', enName: 'Old Textbook Exchange', hiName: 'पुरानी स्कूल-कॉलेज किताब बाज़ार', icon: '📖', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c05', num: '05', enName: 'Business & Khata', hiName: 'सॉवरेन बहीखाता (Business Khata)', icon: '💼', hasChildren: true, action: 'launch',
      children: [
        { id: '05-1', enName: 'Sovereign Bahi-Khata', hiName: 'सॉवरेन व्यापार बहीखाता लेज़र', icon: '📑', badge: 'खोलें ›', state: 'active', action: 'launch' },
        { id: '05-2', enName: 'GST Bill & Thermal Print', hiName: 'पक्का GST बिल व थर्मल रसीद', icon: '🧾', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '05-3', enName: 'Udhar Wasooli & Inventory', hiName: 'उधार वसूली व दुकान स्टॉक लेज़र', icon: '📦', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c06', num: '06', enName: 'Comics', hiName: 'कहानियाँ व कॉमिक्स', icon: '📖', hasChildren: true,
      children: [
        { id: '06-1', enName: 'Desi Chitra-Katha Store', hiName: 'देसी चित्रकथा व कॉमिक्स संग्रह', icon: '🎨', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '06-2', enName: 'Veer Gatha & History', hiName: 'ऐतिहासिक वीर गाथा व चरित्र', icon: '🛡️', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '06-3', enName: 'Bal Sahitya Pustak', hiName: 'बाल साहित्य व पंचतंत्र नीति कथाएं', icon: '👶', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c07', num: '07', enName: 'Communication', hiName: 'संपर्क व संवाद', icon: '💬', hasChildren: true,
      children: [
        { id: '07-1', enName: 'Dukan Broadcast SMS', hiName: 'दुकानदार ब्रॉडकास्ट व ग्राहक अलर्ट', icon: '📢', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '07-2', enName: 'Verified Vyapar Directory', hiName: 'सत्यापित कस्बा व्यापार संपर्क डायरी', icon: '📔', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '07-3', enName: 'Customer Support Line', hiName: 'सीधा ग्राहक सहायता हेल्पलाइन', icon: '📞', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c08', num: '08', enName: 'Dating & Relations', hiName: 'रिश्ते व संबंध', icon: '🤝', hasChildren: true,
      children: [
        { id: '08-1', enName: 'Samaj Matrimonial', hiName: 'सामाजिक वैवाहिक मंच व बायोडाटा', icon: '💍', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '08-2', enName: 'Family Background Check', hiName: 'पारिवारिक पृष्ठभूमि भौतिक सत्यापन', icon: '👥', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '08-3', enName: 'Vivah Mandap Booking', hiName: 'विवाह मंडप, धर्मशाला व हलवाई', icon: '🏡', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c09', num: '09', enName: 'Education & Skills', hiName: 'हुनर सीखें (Education)', icon: '🎓', hasChildren: true,
      children: [
        { id: '09-1', enName: 'Hunar Workshop Training', hiName: 'हाथ का हुनर (वेल्डर/इलेक्ट्रीशियन)', icon: '🔨', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '09-2', enName: 'Police/Army Physical Daud', hiName: 'पुलिस/सेना दौड़ व फिजिकल ट्रेनिंग', icon: '🏃', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '09-3', enName: 'Motor Driving School', hiName: 'मोटर ड्राइविंग व लाइसेंस गाइड', icon: '🚗', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c10', num: '10', enName: 'Entertainment', hiName: 'मनोरंजन व कला', icon: '🎭', hasChildren: true,
      children: [
        { id: '10-1', enName: 'Local Nautanki & Ramlila', hiName: 'नौटंकी, रामलीला व लाइव मंच पास', icon: '🎪', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '10-2', enName: 'Kavi Sammelan & Ragini', hiName: 'रागिनी व कवि सम्मेलन सीट पास', icon: '🎤', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '10-3', enName: 'Kasba Cinema & Talkies', hiName: 'स्थानीय सिनेमा व सांस्कृतिक शो टिकट', icon: '🎟', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c11', num: '11', enName: 'Events & Passes', hiName: 'कार्यक्रम व पास', icon: '🎟️', hasChildren: true,
      children: [
        { id: '11-1', enName: 'Tirth Mela Stall Pass', hiName: 'तीर्थ मेला व हाट दूकान पास', icon: '🚩', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '11-2', enName: 'Katha & Bhandara Entry', hiName: 'कथा, भागवत व भंडारा सेवा पास', icon: '🪔', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '11-3', enName: 'Dangal & Kushti Ticket', hiName: 'दंगल, कुश्ती व टूर्नामेंट प्रवेश टिकट', icon: '🤼', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c12', num: '12', enName: 'Family & Care', hiName: 'परिवार व केयर', icon: '👨‍👩‍👧', hasChildren: true,
      children: [
        { id: '12-1', enName: 'Senior Citizen Nurse', hiName: 'बुजुर्ग सेवा व घरेलू अटेंडेंट', icon: '👵', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '12-2', enName: 'Emergency Ambulance SOS', hiName: 'आपातकालीन एम्बुलेंस व ग्राम सुरक्षा', icon: '🚨', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '12-3', enName: 'Family Asset & Will Vault', hiName: 'पारिवारिक संपत्ति व वसीयत खाता', icon: '🔐', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c13', num: '13', enName: 'Finance & Ledger', hiName: 'RM CASH लेज़र (Finance)', icon: '💰', hasChildren: true,
      children: [
        { id: '13-1', enName: 'RM Cash Sovereign Vault', hiName: 'सॉवरेन वाउचर व नकद लेज़र', icon: '🪙', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '13-2', enName: 'SHG Mahila Bachat Samooh', hiName: 'महिला स्वयं सहायता समूह बही', icon: '👭', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '13-3', enName: 'Rural Byaj & Loan Ledger', hiName: 'ग्रामीण ब्याज, कर्ज़ व किश्त खाता', icon: '🧮', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c14', num: '14', enName: 'Food & Drink', hiName: 'ढाबा व भोजन', icon: '🍲', hasChildren: true,
      children: [
        { id: '14-1', enName: 'Daily Dhaba Tiffin Pass', hiName: 'ढाबा व मासिक टिफ़िन सेवा', icon: '🍱', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '14-2', enName: 'Halwai Bulk Feast Order', hiName: 'हलवाई व दावत कैटरिंग बुकिंग', icon: '👨‍🍳', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '14-3', enName: 'Pure Dairy Milk & Paneer', hiName: 'शुद्ध दूध, घी व ताज़ा पनीर आपूर्ति', icon: '🥛', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c15', num: '15', enName: 'Health & Fitness', hiName: 'स्वस्थ मन व योग', icon: '🧘', hasChildren: true,
      children: [
        { id: '15-1', enName: 'Desi Akhada & Gym Pass', hiName: 'देसी अखाड़ा व व्यायामशाला पास', icon: '🏋️', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '15-2', enName: 'Ayurvedic Nadi Vaidya', hiName: 'आयुर्वेदिक नाड़ी वैद्य परामर्श', icon: '🌿', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '15-3', enName: 'Physical BP & Sugar Diary', hiName: 'बीपी व शुगर भौतिक जांच रिकॉर्ड', icon: '🩺', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c16', num: '16', enName: 'House & Home', hiName: 'घर व मकान', icon: '🏠', hasChildren: true,
      children: [
        { id: '16-1', enName: 'Mistry & Home Repair', hiName: 'मिस्त्री व गृह मरम्मत', icon: '🛠️', badge: 'जल्द उपलब्ध', state: 'upcoming', action: 'upcoming' },
        { id: '16-2', enName: 'Rental Ledger', hiName: 'किराया बहीखाता', icon: '📋', badge: 'खोलें ›', state: 'active', action: 'launch' },
        { id: '16-3', enName: 'Room & Flat Search', hiName: 'कमरा व फ्लैट खोज', icon: '🏠', badge: 'खोलें ›', state: 'active', action: 'launch' }
      ]
    },
    {
      id: 'c17', num: '17', enName: 'Libraries & Demo', hiName: 'पुस्तकालय (Libraries)', icon: '🏛️', hasChildren: true,
      children: [
        { id: '17-1', enName: 'Study Center Desk Seat', hiName: 'लाइब्रेरी सीट व स्टडी डेस्क बुकिंग', icon: '🪑', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '17-2', enName: 'Legal Stamp & Affidavit', hiName: 'शपथ पत्र व कानूनी दस्तावेज़ ड्राफ्ट', icon: '📑', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '17-3', enName: 'Sarkari CSC Form Apply', hiName: 'सरकारी योजना व फॉर्म जनसेवा केंद्र', icon: '📋', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c18', num: '18', enName: 'Lifestyle', hiName: 'स्वावलंबन (Lifestyle)', icon: '🌱', hasChildren: true,
      children: [
        { id: '18-1', enName: 'Pandit Ji Hawan Booking', hiName: 'पंडित जी व गृह प्रवेश हवन पूजा', icon: '🪔', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '18-2', enName: 'Vastu Site Inspection', hiName: 'मकान व दुकान वास्तु भौतिक निरीक्षण', icon: '🧭', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '18-3', enName: 'Kutir Udyog Raw Material', hiName: 'स्वावलंबन कुटीर उद्योग कच्चा माल', icon: '🧵', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c19', num: '19', enName: 'Maps & Navigation', hiName: 'मार्गदर्शन (Maps & Navigation)', icon: '🗺️️', hasChildren: true,
      children: [
        { id: '19-1', enName: 'Gali Mohalla Landmark', hiName: 'गली-मोहल्ला लैंडमार्क सत्यापन', icon: '📍', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '19-2', enName: 'Mandi & Haat Route', hiName: 'साप्ताहिक हाट व थोक मंडी मार्ग', icon: '🛒', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '19-3', enName: 'Nearest Mechanic Spot', hiName: 'नज़दीकी मिस्त्री व वर्कशॉप खोज', icon: '🧭', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c20', num: '20', enName: 'Medical & Clinic', hiName: 'दवाई व क्लिनिक (Medical)', icon: '💊', hasChildren: true,
      children: [
        { id: '20-1', enName: 'Doctor OPD Token Booking', hiName: 'क्लिनिक डॉक्टर पर्चा टोकन', icon: '🩺', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '20-2', enName: 'Blood Sample Home Pickup', hiName: 'घर से खून जांच व पैथोलॉजी रिपोर्ट', icon: '🧪', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '20-3', enName: 'Urgent Medical Stock', hiName: 'नज़दीकी मेडिकल स्टोर आवश्यक दवा', icon: '💉', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c21', num: '21', enName: 'Music & Audio', hiName: 'संगीत (Music & Audio)', icon: '🎵', hasChildren: true,
      children: [
        { id: '21-1', enName: 'DJ & Sound System Hire', hiName: 'डीजे व लाउडस्पीकर सेट बुकिंग', icon: '🔊', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '21-2', enName: 'Bhajan Mandali & Jagran', hiName: 'भजन मंडली, कीर्तन व जागरण दल', icon: '🥁', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '21-3', enName: 'Shehnai & Band Baaja', hiName: 'शहनाई, ढोल व शादी बैंड बुकिंग', icon: '🎺', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c22', num: '22', enName: 'News & Magazines', hiName: 'समाचार व पत्रिकाएं', icon: '📰', hasChildren: true,
      children: [
        { id: '22-1', enName: 'Kasba Tehsil Bulletin', hiName: 'कस्बा, तहसील व वार्ड स्थानीय समाचार', icon: '📢', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '22-2', enName: 'Daily Mandi Bhaav Rate', hiName: 'दैनिक अनाज, सब्जी व फसल भाव', icon: '🌾', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '22-3', enName: 'Karigar Niyukti Alerts', hiName: 'स्थानीय कारीगर भर्ती व काम सूचना', icon: '💼', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c23', num: '23', enName: 'Parenting', hiName: 'शिशु पोषण व परवरिश', icon: '🍼', hasChildren: true,
      children: [
        { id: '23-1', enName: 'Shishu Teeka Alert', hiName: 'टीकाकरण तारीख व स्वास्थ्य अलर्ट', icon: '💉', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '23-2', enName: 'Dai Maa & Tel Malish', hiName: 'अनुभवी दाई माँ व नवजात तेल मालिश', icon: '🤱', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '23-3', enName: 'Shishu Paushtik Aahar', hiName: 'शिशु व धात्री माता शुद्ध देसी आहार', icon: '🥣', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c24', num: '24', enName: 'Personalization', hiName: 'थीम्स व सेटिंग्स', icon: '✨', hasChildren: true,
      children: [
        { id: '24-1', enName: 'Dukan LED Board Theme', hiName: 'दुकान स्क्रीन व ऑफर डिस्प्ले बोर्ड', icon: '📱', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '24-2', enName: 'Vehicle Graphic Wrap', hiName: 'वाहन स्टीकर, नंबर प्लेट व ग्राफिक', icon: '🚗', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '24-3', enName: 'Uniform & Cap Embroidery', hiName: 'व्यापारिक यूनिफॉर्म व कैप प्रिंटिंग', icon: '👕', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c25', num: '25', enName: 'Photography', hiName: 'स्कैनर व फोटो', icon: '📷', hasChildren: true,
      children: [
        { id: '25-1', enName: 'Passport Photo Print', hiName: 'तत्काल पासपोर्ट फोटो व लैमिनेशन', icon: '🖨️', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '25-2', enName: 'Shaadi Cameraman & Drone', hiName: 'शादी वीडियो व ड्रोन कैमरा ऑपरेटर', icon: '📹', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '25-3', enName: 'Zameen Khasra HD Scan', hiName: 'ज़मीन खसरा नक्शा व रजिस्ट्री स्कैन', icon: '📐', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c26', num: '26', enName: 'Productivity & Billing', hiName: 'बिलिंग व उत्पादकता', icon: '🧾', hasChildren: true,
      children: [
        { id: '26-1', enName: 'Dukan Roznamcha Ledger', hiName: 'दुकान कच्चा-पक्का दैनिक रोजनामचा', icon: '🖨️', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '26-2', enName: 'Thermal Invoice Generator', hiName: 'थर्मल रसीद प्रिंटर बिल जेनरेटर', icon: '📄', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '26-3', enName: 'Daily Cash Tally Vault', hiName: 'गल्ला नकद मिलान व खर्च तिजोरी', icon: '🗄️', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c27', num: '27', enName: 'Shopping & Kirana', hiName: '0% किराना स्टोर', icon: '🛒', hasChildren: true,
      children: [
        { id: '27-1', enName: '0% Commission Kirana', hiName: 'मोहल्ला किराना स्टोर होम डिलीवरी', icon: '🛍️', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '27-2', enName: 'Khet Se Sidha Anaaj', hiName: 'खेत से सीधा गेहूं, दाल व तेल बोरियां', icon: '🌾', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '27-3', enName: 'Wholesale B2B Mandi', hiName: 'थोक मंडी भाव व थोक दूकान माल', icon: '🏬', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c28', num: '28', enName: 'Social Networking', hiName: 'चौपाल व संवाद (Social)', icon: '🗣️', hasChildren: true,
      children: [
        { id: '28-1', enName: 'Kasba Panchayat Forum', hiName: 'गाँव चौपाल व पंचायत विचार मंच', icon: '🌳', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '28-2', enName: 'Vyapari Mandal Union', hiName: 'स्थानीय व्यापारी संघ व बाजार यूनियन', icon: '🏛️', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '28-3', enName: 'Karigar Skill Showroom', hiName: 'कारीगर व कारीगरी कार्य शोकेस', icon: '🤝', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c29', num: '29', enName: 'Sports Community', hiName: 'खेलकूद व व्यायाम', icon: '⚽', hasChildren: true,
      children: [
        { id: '29-1', enName: 'Gali Cricket Scorer', hiName: 'क्रिकेट लाइव बॉल-टू-बॉल स्कोरर', icon: '🏏', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '29-2', enName: 'Turf & Ground Booking', hiName: 'खेल मैदान, टर्फ व पिच बुकिंग', icon: '🏟️', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '29-3', enName: 'Tournament Prize Hub', hiName: 'प्रतियोगिता व शील्ड आयोजन बही', icon: '🏆', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c30', num: '30', enName: 'Tools & Utilities', hiName: 'कैलकुलेटर व टूल्स', icon: '🧮', hasChildren: true,
      children: [
        { id: '30-1', enName: 'Zameen Bigha & Gaj Naap', hiName: 'ज़मीन नाप, बीघा, कट्ठा व गज टूल', icon: '📐', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '30-2', enName: 'Gramin Byaj & EMI Tool', hiName: 'ग्रामीण ब्याज दर व किश्त कैलकुलेटर', icon: '🪙', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '30-3', enName: 'Anaaj Tola & Man Converter', hiName: 'मन, क्विंटल व सेर अनाज कनवर्टर', icon: '⚖️', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c31', num: '31', enName: 'Travel & Local', hiName: 'यात्रा व स्थानीय सेवाएं', icon: '🧭', hasChildren: true,
      children: [
        { id: '31-1', enName: 'Bus Stand & Auto Timings', hiName: 'रोडवेज बस व ऑटो स्टैंड समय सारणी', icon: '🚌', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '31-2', enName: 'Local Taxi Driver Stand', hiName: 'कस्बा टैक्सी व पिकअप ड्राइवर संपर्क', icon: '🚖', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '31-3', enName: 'Tirth Yatra Dharmshala', hiName: 'तीर्थ यात्रा बस व धर्मशाला कमरा', icon: '🛕', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c32', num: '32', enName: 'Video Players & Editors', hiName: 'वीडियो प्लेयर व संपादन', icon: '🎬', hasChildren: true,
      children: [
        { id: '32-1', enName: 'Dukan 30-Sec Ad Player', hiName: 'दुकान 30-सेकंड उत्पाद वीडियो शोकेस', icon: '📺', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '32-2', enName: 'Karigar Work Portfolio', hiName: 'कारीगर काम वीडियो प्रमाण लाइब्रेरी', icon: '📽️', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '32-3', enName: 'Kasba Business Promo', hiName: 'स्थानीय व्यापार विज्ञापन क्लिप्स', icon: '🎞️️', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    },
    {
      id: 'c33', num: '33', enName: 'Weather', hiName: 'मौसम पूर्वानुमान', icon: '🌤️', hasChildren: true,
      children: [
        { id: '33-1', enName: 'Fasal Barish Alert', hiName: 'फसल कटाई समय वर्षा चेतावनी', icon: '🌧️', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '33-2', enName: 'Mandi Open Grain Alert', hiName: 'मंडी खुले अनाज तिरपाल सुरक्षा', icon: '⛺', badge: 'खोलें ›', state: 'active', action: 'action' },
        { id: '33-3', enName: 'Sinchai Nehar Timetable', hiName: 'तापमान व सिंचाई नहर पानी सलाह', icon: '💧', badge: 'खोलें ›', state: 'active', action: 'action' }
      ]
    }
  ];

  // ==============================================================================
  // SECTION 2: 17 CANONICAL GAMES (51 P2P HUMAN TOURNAMENT SUB-MODULES)
  // ==============================================================================

  var RM_GAMES_DATA = [
    {
      id: 'g34', num: '34', enName: 'Action', hiName: 'ऐक्शन तीरंदाजी', icon: '🏹', hasChildren: true,
      children: [
        { id: '34-1', enName: 'Teerandazi Trophy Match', hiName: 'धनुर्विद्या तीरंदाजी ट्रॉफी मैच', icon: '🎯', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '34-2', enName: 'Gada Yuddh Duel', hiName: 'गदा युद्ध व अखाड़ा द्वंद्वयुद्ध', icon: '⚔️', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '34-3', enName: 'Durg Rakshak Defense', hiName: 'किला रक्षक रणनीति ऐक्शन', icon: '🏰', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g35', num: '35', enName: 'Adventure', hiName: 'रोमांचक यात्रा', icon: '🏔️', hasChildren: true,
      children: [
        { id: '35-1', enName: 'Bharat Yatra Quest', hiName: 'भारत दर्शन साहसिक यात्रा खोज', icon: '🗺️', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '35-2', enName: 'Van Rakshak Safari', hiName: 'वन्य जीवन व जंगल सुरक्षा क्वेस्ट', icon: '🌲', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '35-3', enName: 'Tirth Marg Safarnama', hiName: 'तीर्थ मार्ग व पौराणिक धरोहर खोज', icon: '🌊', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g36', num: '36', enName: 'Arcade', hiName: 'गेंद टप्पा आर्केड', icon: '🕹️', hasChildren: true,
      children: [
        { id: '36-1', enName: 'Gend Tappa Fast Run', hiName: 'गेंद टप्पा स्पीड रन आर्केड', icon: '⚽', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '36-2', enName: 'Desi Gulel Target', hiName: 'देसी गुलेल सटीक लक्ष्य भेद', icon: '🎯', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '36-3', enName: 'Patang Pech Kaat', hiName: 'आसमानी पतंग पेंच मुकाबला', icon: '🪁', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g37', num: '37', enName: 'Board', hiName: 'देसी लूडो व कैरम', icon: '🎲', hasChildren: true,
      children: [
        { id: '37-1', enName: 'Desi 4-Player Ludo', hiName: 'देसी 4-खिलाड़ी लूडो क्लब', icon: '🎲', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '37-2', enName: 'Carrom Striker Pool', hiName: 'कैरम बोर्ड व क्वीन स्ट्राइकर', icon: '⚪', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '37-3', enName: 'Chaturang Chess Battle', hiName: 'चतुरंग पारंपारिक भारतीय शतरंज', icon: '♟️️', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g38', num: '38', enName: 'Card', hiName: 'ताश सॉलिटेयर', icon: '🃏', hasChildren: true,
      children: [
        { id: '38-1', enName: 'Tash Solitaire Offline', hiName: 'देसी ताश सॉलिटेयर गेम', icon: '♠️', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '38-2', enName: '28-Card Points Battle', hiName: '28 पत्ती देसी अंक मुकाबला', icon: '♥️', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '38-3', enName: 'Parivarik Tash Room', hiName: 'पारिवारिक ताश क्लब (अंक कक्ष)', icon: '♣️️', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g39', num: '39', enName: 'Casino', hiName: 'लकी चक्र (Casino Points)', icon: '🎡', hasChildren: true,
      children: [
        { id: '39-1', enName: 'Dukan Daily Lucky Wheel', hiName: 'दुकानदार दैनिक लॉयल्टी चक्र', icon: '🎡', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '39-2', enName: 'Voucher Spin & Win', hiName: 'सॉवरेन वाउचर स्पिनर पासा', icon: '🎁', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '39-3', enName: 'Jackpot Token Roll', hiName: 'गोल्डन टोकन जैकपॉट रोल', icon: '💰', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g40', num: '40', enName: 'Casual', hiName: 'रंगोली क्राफ्ट', icon: '🎨', hasChildren: true,
      children: [
        { id: '40-1', enName: 'Rangoli Match-3 Craft', hiName: 'देसी रंगोली डिज़ाइन मैच-3', icon: '🏵️', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '40-2', enName: 'Mitti Bartan Chak Maker', hiName: 'मिट्टी के बर्तन चाक मेकर', icon: '🏺', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '40-3', enName: 'Bagicha Fruit Connect', hiName: 'बगीचा ताज़ा फल तोड़ो पहेली', icon: '🍎', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g41', num: '41', enName: 'Educational', hiName: 'भारत क्विज़', icon: '🇮🇳', hasChildren: true,
      children: [
        { id: '41-1', enName: 'Bharat GK Quiz Battle', hiName: 'भारत सामान्य ज्ञान मुकाबला', icon: '📜', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '41-2', enName: 'Ganit Desi Paheli Shodh', hiName: 'गणित पहेलियाँ व दिमागी जोड़', icon: '🔢', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '41-3', enName: 'Sanvidhan & Niyam Gyan', hiName: 'संविधान व नागरिक नियम ज्ञान', icon: '⚖️', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g42', num: '42', enName: 'Music', hiName: 'तबला व ढोलक ताल', icon: '🥁', hasChildren: true,
      children: [
        { id: '42-1', enName: 'Dholak & Tabla Beat Tap', hiName: 'ढोलक व तबला थाप मैच', icon: '🥁', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '42-2', enName: 'Bansuri Sur Harmony', hiName: 'बांसुरी सुर मेलोडी ताल गेम', icon: '🪈', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '42-3', enName: 'Sitar Melody Challenge', hiName: 'सितार व हारमोनियम स्वर अभ्यास', icon: '🪕', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g43', num: '43', enName: 'Puzzle', hiName: 'दिमागी पहेलियाँ', icon: '🧩', hasChildren: true,
      children: [
        { id: '43-1', enName: 'Desi Bujho To Jane', hiName: 'देसी बूझो तो जाने पहेली', icon: '💡', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '43-2', enName: 'Lakdi Block Puzzle', hiName: 'लकड़ी ब्लॉक मैचिंग board पहेली', icon: '🪵', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '43-3', enName: 'Kasba Bhool-Bhulaiya', hiName: 'कस्बा भूल-भुलैया रास्ता खोज', icon: '🌀', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g44', num: '44', enName: 'Racing', hiName: 'बैलगाड़ी रेस', icon: '🏁', hasChildren: true,
      children: [
        { id: '44-1', enName: 'Desi Bailgadi Race', hiName: 'देसी बैलगाड़ी रेस ट्रैक', icon: '🐂', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '44-2', enName: 'Khet Tractor Mud Pull', hiName: 'खेत ट्रैक्टर टोचन मुकाबला', icon: '🚜', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '44-3', enName: 'Highway Auto Sprint', hiName: 'हाईवे ऑटो रिक्शा रेस', icon: '🛺', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g45', num: '45', enName: 'Role Playing', hiName: 'गाँव का प्रधान', icon: '👑', hasChildren: true,
      children: [
        { id: '45-1', enName: 'Gaon Ka Pradhan Sim', hiName: 'गाँव का प्रधान (विकास व फैसले)', icon: '👑', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '45-2', enName: 'Raja Aur Senapati War', hiName: 'राजा और सेनापति युद्धनीति', icon: '⚔️', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '45-3', enName: 'Vanvasi Yoddha Safar', hiName: 'वनवासी योद्धा सफरनामा', icon: '🏹', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g46', num: '46', enName: 'Simulation', hiName: 'खेत सिमुलेटर', icon: '🌾', hasChildren: true,
      children: [
        { id: '46-1', enName: 'Desi Khet & Krishi Sim', hiName: 'खेत बुवाई व सिंचाई सिमुलेटर', icon: '🌾', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '46-2', enName: 'Dairy Pashudhan Farm', hiName: 'डेयरी व पशुपालन सिमुलेटर', icon: '🐄', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '46-3', enName: 'Kirana Dukan Galla Sim', hiName: 'किराना दुकान गल्ला सिमुलेटर', icon: '🏪', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g47', num: '47', enName: 'Sports', hiName: 'गली क्रिकेट', icon: '🏏', hasChildren: true,
      children: [
        { id: '47-1', enName: 'Gali Cricket Master', hiName: 'गली क्रिकेट 1-टैप शॉट', icon: '🏏', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '47-2', enName: 'Pro Kabaddi Mat Clash', hiName: 'देसी कबड्डी रेड मुकाबला', icon: '🤼', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '47-3', enName: 'Desi Football Penalty', hiName: 'पेनल्टी शूटआउट देसी कप', icon: '⚽', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g48', num: '48', enName: 'Strategy', hiName: 'चाणक्य नीति', icon: '♟️', hasChildren: true,
      children: [
        { id: '48-1', enName: 'Chanakya Niti Vistaar', hiName: 'चाणक्य नीति (राज्य विस्तार)', icon: '📜', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '48-2', enName: 'Durg Kilebandi War', hiName: 'दुर्ग रक्षा व सामरिक व्यूह', icon: '🏰', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '48-3', enName: 'Vyapari Mahasangh League', hiName: 'व्यापारी महासंघ बाजार वर्चस्व', icon: '🪙', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g49', num: '49', enName: 'Trivia', hiName: 'देसी ट्रिविया व तथ्य', icon: '💡', hasChildren: true,
      children: [
        { id: '49-1', enName: 'Kasba Facts & Trivia', hiName: 'देसी रोचक तथ्य व पहेली', icon: '💡', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '49-2', enName: 'Ramayana Mahabharata League', hiName: 'रामायण व महाभारत प्रश्नोत्तरी', icon: '🏹', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '49-3', enName: 'Indian Railways Route Quiz', hiName: 'भारतीय रेल व स्टेशन ट्रिविया', icon: '🚆', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    },
    {
      id: 'g50', num: '50', enName: 'Word', hiName: 'शब्द पहेली व कोश', icon: '📝', hasChildren: true,
      children: [
        { id: '50-1', enName: 'Hindi Shabd Paheli', hiName: 'हिंदी शब्द क्रॉसवर्ड पहेली', icon: '📝', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '50-2', enName: 'Akshar Jodo Desi Kosh', hiName: 'अक्षर जोड़ो देसी शब्दकोश', icon: '🔡', badge: 'खेलें ›', state: 'active', action: 'game' },
        { id: '50-3', enName: 'Matra & Vyakaran Shuddhata', hiName: 'मात्रा व व्याकरण शुद्धता ज्ञान', icon: '📖', badge: 'खेलें ›', state: 'active', action: 'game' }
      ]
    }
  ];

  // ==============================================================================
  // SECTION 3: BASELINE EXPORTS & WINDOW BINDINGS
  // ==============================================================================

  var C16_CHILDREN = RM_SERVICES_DATA.find(function (s) { return s.id === 'c16'; }).children;

  window.RM_SERVICES_DATA = RM_SERVICES_DATA;
  window.RM_GAMES_DATA = RM_GAMES_DATA;
  window.C16_CHILDREN = C16_CHILDREN;

})(typeof window !== 'undefined' ? window : this);
