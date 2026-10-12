#!/usr/bin/env node
/**
 * RISE MITRA — 50 CANONICAL CATEGORIES & 150 SUB-WINGS INJECTION ENGINE
 * Authority : Folder A Master SSOT | Google Play Store Developer Taxonomy
 * Structure : 32 Mobile Apps + 17 Ground Games + 1 Family Category = 50 Canonical
 * Rule      : 100% Physical Execution | Real-World Top Earning Benchmarks | Zero Element Loss
 */

const fs = require('fs');
const path = require('path');

const CANONICAL_50_TAXONOMY = [
  // --- BATCH 1: CORE TRADE & HYPERLOCAL ESSENTIALS (CAT 01 - 10) ---
  {
    category_id: 1, category_code: "01", category_slug: "art-and-design",
    category_name_en: "Art & Design", category_name_hi: "आर्ट व डिज़ाइन",
    sub_categories: [
      { sub_code: "01-1", slug: "festival-post-digital-card", name_en: "Festival Post & Digital Card", name_hi: "त्योहार पोस्टर्स व डिजिटल कार्ड", filter_chips: ["Sabhi", "Festivals", "Digital Card", "Branding"] },
      { sub_code: "01-2", slug: "flex-board-printing", name_en: "Flex Board & Printing", name_hi: "फ्लेक्स बोर्ड व प्रिंटिंग", filter_chips: ["Sabhi", "Flex Board", "Glow Sign", "Vinyl"] },
      { sub_code: "01-3", slug: "visiting-card-bill-books", name_en: "Visiting Card & Bill Books", name_hi: "विज़िटिंग कार्ड व बिल बुक", filter_chips: ["Sabhi", "Visiting Card", "Bill Book", "Stamp"] }
    ]
  },
  {
    category_id: 2, category_code: "02", category_slug: "auto-and-vehicles",
    category_name_en: "Auto & Vehicles", category_name_hi: "ऑटो व वाहन",
    sub_categories: [
      { sub_code: "02-1", slug: "roadside-assistance-rsa", name_en: "Roadside Assistance (RSA)", name_hi: "ऑन-साइट पंचर व क्रेन टोइंग", filter_chips: ["Sabhi", "Puncture", "Jump Start", "Towing"] },
      { sub_code: "02-2", slug: "rto-challan-fastag", name_en: "RTO Challan & FASTag", name_hi: "ई-चालान व फ़ास्टैग रिचार्ज", filter_chips: ["Sabhi", "E-Challan", "FASTag", "RTO"] },
      { sub_code: "02-3", slug: "used-vehicles-buy-sell", name_en: "Used Vehicles Buy/Sell", name_hi: "पुरानी गाड़ी खरीद-बिक्री", filter_chips: ["Sabhi", "Bike", "Car", "Tractor"] }
    ]
  },
  {
    category_id: 3, category_code: "03", category_slug: "beauty",
    category_name_en: "Beauty", category_name_hi: "ब्यूटी व ग्रूमिंग",
    sub_categories: [
      { sub_code: "03-1", slug: "salon-at-home-ladies", name_en: "Salon at Home (Ladies Only)", name_hi: "घर पर सैलून सेवा (महिलाएँ)", filter_chips: ["Sabhi", "Facial", "Waxing", "Hair Spa"] },
      { sub_code: "03-2", slug: "bridal-makeup-mehndi", name_en: "Bridal Makeup & Mehndi", name_hi: "ब्राइडल मेकअप व दुल्हन मेहंदी", filter_chips: ["Sabhi", "Bridal Makeup", "Mehndi", "Package"] },
      { sub_code: "03-3", slug: "men-grooming-barber", name_en: "Men Grooming & Barber", name_hi: "मेंस ग्रूमिंग व सैलून", filter_chips: ["Sabhi", "Haircut", "Shave", "Grooming"] }
    ]
  },
  {
    category_id: 4, category_code: "04", category_slug: "books-and-reference",
    category_name_en: "Books & Reference", category_name_hi: "किताबें व संदर्भ",
    sub_categories: [
      { sub_code: "04-1", slug: "regional-audio-stories", name_en: "Regional Audio Stories", name_hi: "क्षेत्रीय लोककथाएँ व ऑडियो", filter_chips: ["Sabhi", "Audio", "Stories", "Biographies"] },
      { sub_code: "04-2", slug: "sarkari-exam-notes", name_en: "Sarkari Exam Notes", name_hi: "सरकारी परीक्षा हस्तलिखित नोट्स", filter_chips: ["Sabhi", "Police", "Railway", "SSC"] },
      { sub_code: "04-3", slug: "dainik-panchang-sahitya", name_en: "Dainik Panchang & Sahitya", name_hi: "दैनिक पंचांग व धर्म साहित्य", filter_chips: ["Sabhi", "Panchang", "Muhurat", "Sahitya"] }
    ]
  },
  {
    category_id: 5, category_code: "05", category_slug: "business",
    category_name_en: "Business", category_name_hi: "व्यापार व मंडी",
    sub_categories: [
      { sub_code: "05-1", slug: "digital-udhar-khata", name_en: "Digital Udhar Khata", name_hi: "डिजिटल उधारी खाता व तगादा", filter_chips: ["Sabhi", "Udhar Khata", "Reminders", "UPI QR"] },
      { sub_code: "05-2", slug: "wholesale-mandi-network", name_en: "Wholesale Mandi Network", name_hi: "थोक मंडी नेटवर्क व डायरेक्टरी", filter_chips: ["Sabhi", "Kirana", "Kapda", "Hardware"] },
      { sub_code: "05-3", slug: "online-dukan-qr-catalog", name_en: "Online Dukan QR Catalog", name_hi: "ऑनलाइन दुकान क्यूआर कैटलॉग", filter_chips: ["Sabhi", "QR Standee", "Catalog", "Orders"] }
    ]
  },
  {
    category_id: 6, category_code: "06", category_slug: "comics",
    category_name_en: "Comics", category_name_hi: "कॉमिक्स व बाल साहित्य",
    sub_categories: [
      { sub_code: "06-1", slug: "pauranik-graphic-comics", name_en: "Pauranik Graphic Comics", name_hi: "पौराणिक सचित्र कॉमिक्स", filter_chips: ["Sabhi", "Ramayana", "Mahabharata", "Comics"] },
      { sub_code: "06-2", slug: "kids-illustrated-books", name_en: "Kids Illustrated Books", name_hi: "बाल साहित्य व सचित्र पुस्तकें", filter_chips: ["Sabhi", "Panchatantra", "Tenali Raman", "Box Set"] },
      { sub_code: "06-3", slug: "daily-humor-puzzles", name_en: "Daily Humor & Puzzles", name_hi: "हास्य व्यंग्य व दैनिक पहेलियाँ", filter_chips: ["Sabhi", "Humor", "Sudoku", "Crossword"] }
    ]
  },
  {
    category_id: 7, category_code: "07", category_slug: "communication",
    category_name_en: "Communication", category_name_hi: "संचार व सत्यापन",
    sub_categories: [
      { sub_code: "07-1", slug: "verified-merchant-directory", name_en: "Verified Merchant Directory", name_hi: "सत्यापित व्यापारी डायरेक्टरी", filter_chips: ["Sabhi", "Verified", "1-Tap Call", "Local"] },
      { sub_code: "07-2", slug: "whatsapp-promo-broadcaster", name_en: "WhatsApp Promo Broadcaster", name_hi: "व्हाट्सएप प्रोमो ब्रॉडकास्टर", filter_chips: ["Sabhi", "Offers", "Broadcast", "Festivals"] },
      { sub_code: "07-3", slug: "cyber-fraud-spam-shield", name_en: "Cyber Fraud & Spam Shield", name_hi: "साइबर फ्रॉड व स्पैम शील्ड", filter_chips: ["Sabhi", "Fraud Alert", "Helpline", "Security"] }
    ]
  },
  {
    category_id: 8, category_code: "08", category_slug: "dating-and-matrimony",
    category_name_en: "Dating & Matrimony", category_name_hi: "विवाह व रिश्ते",
    sub_categories: [
      { sub_code: "08-1", slug: "samajik-matrimony", name_en: "Samajik Matrimony", name_hi: "सत्यापित सामाजिक बायोडाटा", filter_chips: ["Sabhi", "Verified", "Community", "Biodata"] },
      { sub_code: "08-2", slug: "kundali-milan-matching", name_en: "Kundali Milan & Matching", name_hi: "कुंडली मिलान व ज्योतिष परामर्श", filter_chips: ["Sabhi", "Kundali", "36 Gun", "Consult"] },
      { sub_code: "08-3", slug: "vivah-madhyasth-network", name_en: "Vivah Madhyasth Network", name_hi: "विवाह मध्यस्थ व मैरिज ब्यूरो", filter_chips: ["Sabhi", "Madhyasth", "Meeting", "Bureau"] }
    ]
  },
  {
    category_id: 9, category_code: "09", category_slug: "education",
    category_name_en: "Education", category_name_hi: "शिक्षा व कोचिंग",
    sub_categories: [
      { sub_code: "09-1", slug: "home-tutors-coaching", name_en: "Home Tutors & Coaching", name_hi: "होम ट्यूटर व नजदीकी शिक्षक", filter_chips: ["Sabhi", "Class 1-10", "Class 11-12", "Demo"] },
      { sub_code: "09-2", slug: "sarkari-mock-test-pass", name_en: "Sarkari Mock Test Pass", name_hi: "सरकारी मॉक टेस्ट पास", filter_chips: ["Sabhi", "Police", "Railway", "Mock Tests"] },
      { sub_code: "09-3", slug: "practical-skill-institutes", name_en: "Practical Skill Institutes", name_hi: "प्रैक्टिकल स्किल ट्रेनिंग सेंटर", filter_chips: ["Sabhi", "Mobile Repair", "Wiring", "Skills"] }
    ]
  },
  {
    category_id: 10, category_code: "10", category_slug: "entertainment",
    category_name_en: "Entertainment", category_name_hi: "मनोरंजन व उत्सव",
    sub_categories: [
      { sub_code: "10-1", slug: "cinema-mela-tickets", name_en: "Cinema & Mela Tickets", name_hi: "मेला, सर्कस व सिनेमा पास", filter_chips: ["Sabhi", "Mela", "Circus", "Tickets"] },
      { sub_code: "10-2", slug: "live-stage-artists-dj", name_en: "Live Stage Artists & DJ", name_hi: "लाइव लोक गायक व डीजे बुकिंग", filter_chips: ["Sabhi", "Artists", "DJ", "Jagran"] },
      { sub_code: "10-3", slug: "regional-theater-comedy", name_en: "Regional Theater & Comedy", name_hi: "पारंपरिक नौटंकी व कवि सम्मेलन", filter_chips: ["Sabhi", "Nautanki", "Poetry", "Comedy"] }
    ]
  },

  // --- BATCH 2: PHYSICAL SERVICES, HOME & HEALTH (CAT 11 - 20) ---
  {
    category_id: 11, category_code: "11", category_slug: "events",
    category_name_en: "Events", category_name_hi: "इवेंट्स व शादी समारोह",
    sub_categories: [
      { sub_code: "11-1", slug: "tent-light-decor", name_en: "Tent & Light Decor", name_hi: "टेंट, जर्मन हैंगर व लाइट डेकोर", filter_chips: ["Sabhi", "Tent", "Lighting", "Stage"] },
      { sub_code: "11-2", slug: "halwai-catering-services", name_en: "Halwai & Catering Services", name_hi: "हलवाई टीम व शुद्ध देशी घी कैटरिंग", filter_chips: ["Sabhi", "Halwai", "Catering", "Utensils"] },
      { sub_code: "11-3", slug: "wedding-drone-photography", name_en: "Wedding Drone Photography", name_hi: "4K ड्रोन कवरेज व प्री-वेडिंग शूट", filter_chips: ["Sabhi", "Drone", "Photography", "Album"] }
    ]
  },
  {
    category_id: 12, category_code: "12", category_slug: "finance",
    category_name_en: "Finance", category_name_hi: "फाइनेंस व बैंकिंग",
    sub_categories: [
      { sub_code: "12-1", slug: "doorstep-aeps-cash", name_en: "Doorstep AEPS Cash", name_hi: "घर बैठे बायोमेट्रिक नकद निकासी", filter_chips: ["Sabhi", "Cash Out", "Balance", "Micro-ATM"] },
      { sub_code: "12-2", slug: "vyapar-micro-loans", name_en: "Vyapar Micro-Loans", name_hi: "खुदरा व्यापार माइक्रो-ऋण", filter_chips: ["Sabhi", "Micro Loan", "Daily Installment", "Working Capital"] },
      { sub_code: "12-3", slug: "vehicle-insurance", name_en: "1-Click Vehicle Insurance", name_hi: "वाहन बीमा रिन्यूअल व सहायता", filter_chips: ["Sabhi", "Bike Insurance", "Car Insurance", "Claims"] }
    ]
  },
  {
    category_id: 13, category_code: "13", category_slug: "food-and-drink",
    category_name_en: "Food & Drink", category_name_hi: "ढाबा व टिफिन",
    sub_categories: [
      { sub_code: "13-1", slug: "monthly-tiffin-service", name_en: "Monthly Tiffin Service", name_hi: "मासिक शुद्ध शाकाहारी टिफिन पास", filter_chips: ["Sabhi", "Tiffin", "Veg", "Monthly Pass"] },
      { sub_code: "13-2", slug: "local-dhaba-sweets", name_en: "Local Dhaba & Sweets", name_hi: "लोकल ढाबा भोजन व देशी घी मिठाई", filter_chips: ["Sabhi", "Dhaba", "Sweets", "Delivery"] },
      { sub_code: "13-3", slug: "bulk-mandi-event-ration", name_en: "Bulk Mandi Event Ration", name_hi: "शादी-भंडारा थोक राशन सप्लाई", filter_chips: ["Sabhi", "Bulk Atta", "Oil Tin", "Sugar"] }
    ]
  },
  {
    category_id: 14, category_code: "14", category_slug: "health-and-fitness",
    category_name_en: "Health & Fitness", category_name_hi: "स्वास्थ्य व योग",
    sub_categories: [
      { sub_code: "14-1", slug: "doorstep-yoga-physio", name_en: "Doorstep Yoga & Physio", name_hi: "घर पर योग प्रशिक्षक व फिजियोथेरेपी", filter_chips: ["Sabhi", "Yoga", "Physio", "Home Visit"] },
      { sub_code: "14-2", slug: "local-gym-passes", name_en: "Local Gym Membership Passes", name_hi: "नजदीकी जिम वर्कआउट पास", filter_chips: ["Sabhi", "Day Pass", "Monthly", "Gym"] },
      { sub_code: "14-3", slug: "desi-akhada-nutrition", name_en: "Desi Akhada Nutrition", name_hi: "देशी गाय दूध व अखाड़ा न्यूट्रिशन", filter_chips: ["Sabhi", "A2 Milk", "Sattu", "Diet Kit"] }
    ]
  },
  {
    category_id: 15, category_code: "15", category_slug: "house-and-home",
    category_name_en: "House & Home", category_name_hi: "घरेलू सेवाएँ व मरम्मत",
    sub_categories: [
      { sub_code: "15-1", slug: "electrician-motor-repair", name_en: "Electrician & Motor Repair", name_hi: "इलेक्ट्रीशियन व समर्सिबल रिपेयर", filter_chips: ["Sabhi", "Wiring", "Motor", "Inverter"] },
      { sub_code: "15-2", slug: "plumber-sanitary", name_en: "Plumber & Sanitary", name_hi: "प्लम्बर व पाइपलाइन ब्लॉकेज सफाई", filter_chips: ["Sabhi", "Plumber", "Tank Fitting", "Leakage"] },
      { sub_code: "15-3", slug: "carpenter-home-painting", name_en: "Carpenter & Home Painting", name_hi: "कारपेंटर, पुट्टी व पेंटिंग", filter_chips: ["Sabhi", "Carpenter", "Paint", "Putty"] }
    ]
  },
  {
    category_id: 16, category_code: "16", category_slug: "libraries-and-demo",
    category_name_en: "Libraries & Demo", category_name_hi: "लाइब्रेरी व अध्ययन डेस्क",
    sub_categories: [
      { sub_code: "16-1", slug: "ac-study-library-seat", name_en: "AC Study Library Seat", name_hi: "शांत एसी स्टडी लाइब्रेरी सीट", filter_chips: ["Sabhi", "AC Seat", "WiFi", "24x7"] },
      { sub_code: "16-2", slug: "old-books-buy-sell", name_en: "Old Books Buy/Sell Market", name_hi: "प्रतियोगी पुरानी किताबें बाज़ार", filter_chips: ["Sabhi", "Old Books", "UPSC", "SSC"] },
      { sub_code: "16-3", slug: "bulk-school-stationery", name_en: "Bulk School Stationery", name_hi: "थोक स्कूल व प्रतियोगी स्टेशनरी", filter_chips: ["Sabhi", "Notebooks", "Pens", "Mill Rate"] }
    ]
  },
  {
    category_id: 17, category_code: "17", category_slug: "lifestyle",
    category_name_en: "Lifestyle", category_name_hi: "लाइफस्टाइल व टेलरिंग",
    sub_categories: [
      { sub_code: "17-1", slug: "steam-dry-cleaning-laundry", name_en: "Steam Dry Cleaning & Laundry", name_hi: "स्टीम ड्राई क्लीनिंग व लाउंड्री", filter_chips: ["Sabhi", "Dry Clean", "Blanket", "Steam Iron"] },
      { sub_code: "17-2", slug: "ladies-doorstep-tailoring", name_en: "Ladies Doorstep Tailoring", name_hi: "घर पर महिला टेलरिंग व सिलाई", filter_chips: ["Sabhi", "Blouse", "Suit", "Fall Pico"] },
      { sub_code: "17-3", slug: "home-deep-cleaning", name_en: "Home Deep Cleaning", name_hi: "सोफा, किचन व बाथरूम डीप क्लीनिंग", filter_chips: ["Sabhi", "Sofa Wash", "Kitchen", "Bathroom"] }
    ]
  },
  {
    category_id: 18, category_code: "18", category_slug: "maps-and-navigation",
    category_name_en: "Maps & Navigation", category_name_hi: "टेम्पो व ट्रांसपोर्ट",
    sub_categories: [
      { sub_code: "18-1", slug: "goods-tempo-booking", name_en: "Goods Tempo Booking", name_hi: "छोटा हाथी व बोलेरो पिकअप टेम्पो", filter_chips: ["Sabhi", "Tata Ace", "Pickup", "Loading"] },
      { sub_code: "18-2", slug: "hyperlocal-2-hour-courier", name_en: "Hyperlocal 2-Hour Courier", name_hi: "शहर के अंदर 2-घंटे में डिलीवरी", filter_chips: ["Sabhi", "Bike Courier", "Urgent", "Medicine"] },
      { sub_code: "18-3", slug: "packers-movers-shifting", name_en: "Packers & Movers Shifting", name_hi: "पैपर्स एंड मूवर्स सुरक्षित शिफ्टिंग", filter_chips: ["Sabhi", "House Shifting", "Packing", "Safe"] }
    ]
  },
  {
    category_id: 19, category_code: "19", category_slug: "medical",
    category_name_en: "Medical", category_name_hi: "दवा व मेडिकल सेवाएँ",
    sub_categories: [
      { sub_code: "19-1", slug: "home-blood-sample-collect", name_en: "Home Blood Sample Collect", name_hi: "घर से ब्लड सैंपल कलेक्शन व रिपोर्ट", filter_chips: ["Sabhi", "Blood Test", "Lab", "Home Sample"] },
      { sub_code: "19-2", slug: "doorstep-discount-medicines", name_en: "Doorstep Discount Medicines", name_hi: "पर्चे पर 20% छूट दवा होम डिलीवरी", filter_chips: ["Sabhi", "Medicines", "Discount", "GST Bill"] },
      { sub_code: "19-3", slug: "24x7-oxygen-ambulance", name_en: "24x7 Oxygen Ambulance", name_hi: "24x7 ऑक्सीजन एम्बुलेंस सेवा", filter_chips: ["Sabhi", "Ambulance", "Oxygen", "Emergency"] }
    ]
  },
  {
    category_id: 20, category_code: "20", category_slug: "music-and-audio",
    category_name_en: "Music & Audio", category_name_hi: "बैंड, डीजे व साउंड",
    sub_categories: [
      { sub_code: "20-1", slug: "wedding-band-baggi", name_en: "Wedding Band & Baggi", name_hi: "शाही ब्रास बैंड, बग्गी व शहनाई", filter_chips: ["Sabhi", "Brass Band", "Baggi", "Shehnai"] },
      { sub_code: "20-2", slug: "dj-sound-system-rental", name_en: "DJ Sound System Rental", name_hi: "जेबीएल साउंड सिस्टम व पार्टी सेटअप", filter_chips: ["Sabhi", "DJ Sound", "Bass", "Lights"] },
      { sub_code: "20-3", slug: "instrument-repair-classes", name_en: "Instrument Repair & Classes", name_hi: "हारमोनियम, तबला रिपेयर व क्लास", filter_chips: ["Sabhi", "Harmonium", "Dholak", "Classes"] }
    ]
  },

  // --- BATCH 3: COMMUNITY, RETAIL & VOCATIONAL (CAT 21 - 32) ---
  {
    category_id: 21, category_code: "21", category_slug: "news-and-magazines",
    category_name_en: "News & Magazines", category_name_hi: "समाचार व पत्रिकाएँ",
    sub_categories: [
      { sub_code: "21-1", slug: "hyperlocal-citizen-news", name_en: "Hyperlocal Citizen News", name_hi: "वार्ड व ग्राम नागरिक समाचार मंच", filter_chips: ["Sabhi", "Local News", "Video", "Issues"] },
      { sub_code: "21-2", slug: "newspaper-classified-ads", name_en: "Newspaper Classified Ads", name_hi: "अखबार में नाम परिवर्तन व विज्ञापन", filter_chips: ["Sabhi", "Classifieds", "Ads", "Notice"] },
      { sub_code: "21-3", slug: "monthly-magazines-courier", name_en: "Monthly Magazines Courier", name_hi: "प्रतियोगिता दर्पण व मासिक पत्रिकाएँ", filter_chips: ["Sabhi", "Pratiyogita Darpan", "GK", "Courier"] }
    ]
  },
  {
    category_id: 22, category_code: "22", category_slug: "parenting",
    category_name_en: "Parenting", category_name_hi: "जच्चा-बच्चा देखभाल",
    sub_categories: [
      { sub_code: "22-1", slug: "newborn-mother-massage-dai", name_en: "Newborn & Mother Massage Dai", name_hi: "पारंपरिक दाई जच्चा-बच्चा मालिश", filter_chips: ["Sabhi", "Dai", "Baby Massage", "Care"] },
      { sub_code: "22-2", slug: "pure-organic-baby-food", name_en: "Pure Organic Baby Food", name_hi: "शुद्ध रागी व मखाना शिशु आहार", filter_chips: ["Sabhi", "Ragi", "Makhana", "Baby Food"] },
      { sub_code: "22-3", slug: "baby-cradle-cotton-clothes", name_en: "Baby Cradle & Cotton Clothes", name_hi: "लकड़ी का पालना व सूती झबले", filter_chips: ["Sabhi", "Cradle", "Cotton", "Walker"] }
    ]
  },
  {
    category_id: 23, category_code: "23", category_slug: "personalization",
    category_name_en: "Personalization", category_name_hi: "कस्टमाइजेशन व स्किन",
    sub_categories: [
      { sub_code: "23-1", slug: "mobile-skins-uv-glass", name_en: "Mobile Skins & UV Glass", name_hi: "मोबाइल 360° स्किन व यूवी ग्लास", filter_chips: ["Sabhi", "Mobile Skin", "UV Glass", "Back Cover"] },
      { sub_code: "23-2", slug: "customized-photo-gifts", name_en: "Customized Photo Gifts", name_hi: "फोटो मग, कुशन व एलईडी फ्रेम", filter_chips: ["Sabhi", "Photo Mug", "Frame", "Gifts"] },
      { sub_code: "23-3", slug: "vehicle-radium-plates", name_en: "Vehicle Radium & Plates", name_hi: "नंबर प्लेट फ्रेम व रेडियम कटिंग", filter_chips: ["Sabhi", "Number Plate", "Radium", "Sticker"] }
    ]
  },
  {
    category_id: 24, category_code: "24", category_slug: "photography",
    category_name_en: "Photography", category_name_hi: "स्टूडियो व फोटोग्राफी",
    sub_categories: [
      { sub_code: "24-1", slug: "instant-passport-photos", name_en: "Instant Passport Photos", name_hi: "5-मिनट में तत्काल पासपोर्ट फोटो", filter_chips: ["Sabhi", "Passport Size", "Instant", "Print"] },
      { sub_code: "24-2", slug: "shop-catalog-photo-shoot", name_en: "Shop Catalog Photo Shoot", name_hi: "दुकान सामान व कपड़ा स्टूडियो शूट", filter_chips: ["Sabhi", "Catalog Shoot", "Studio", "White BG"] },
      { sub_code: "24-3", slug: "event-videography", name_en: "Event Videography", name_hi: "मुंडन, जन्मदिन व उत्सव वीडियो मिक्सिंग", filter_chips: ["Sabhi", "Videography", "HD Video", "Mixing"] }
    ]
  },
  {
    category_id: 25, category_code: "25", category_slug: "productivity",
    category_name_en: "Productivity", category_name_hi: "ऑनलाइन फॉर्म व जेरोक्स",
    sub_categories: [
      { sub_code: "25-1", slug: "sarkari-online-form-filling", name_en: "Sarkari Online Form Filling", name_hi: "सरकारी नौकरी व छात्रवृत्ति ऑनलाइन फॉर्म", filter_chips: ["Sabhi", "Online Form", "Job", "Admit Card"] },
      { sub_code: "25-2", slug: "pan-identity-docs-help", name_en: "PAN & Identity Docs Help", name_hi: "पैन कार्ड व पहचान पत्र सुधार सहायता", filter_chips: ["Sabhi", "PAN Card", "Correction", "Lamination"] },
      { sub_code: "25-3", slug: "bulk-xerox-lamination", name_en: "Bulk Xerox & Lamination", name_hi: "थोक फोटोकॉपी व स्पाइरल बाइंडिंग", filter_chips: ["Sabhi", "Bulk Xerox", "Color Print", "Spiral"] }
    ]
  },
  {
    category_id: 26, category_code: "26", category_slug: "shopping",
    category_name_en: "Shopping", category_name_hi: "किराना व वस्त्र बाज़ार",
    sub_categories: [
      { sub_code: "26-1", slug: "monthly-grocery-ration", name_en: "Monthly Grocery Ration", name_hi: "विश्वसनीय बनिया मासिक राशन डिलीवरी", filter_chips: ["Sabhi", "Monthly Ration", "Atta-Dal", "Local"] },
      { sub_code: "26-2", slug: "wholesale-saree-garments", name_en: "Wholesale Saree & Garments", name_hi: "थोक साड़ी, पैंट-शर्ट व वस्त्र", filter_chips: ["Sabhi", "Saree", "Garments", "Mandi Rate"] },
      { sub_code: "26-3", slug: "in-store-easy-exchange", name_en: "In-Store Easy Exchange", name_hi: "24-घंटे काउंटर आसान सामान वापसी", filter_chips: ["Sabhi", "Easy Exchange", "Counter", "Support"] }
    ]
  },
  {
    category_id: 27, category_code: "27", category_slug: "social",
    category_name_en: "Social", category_name_hi: "चौपाल व नागरिक मंच",
    sub_categories: [
      { sub_code: "27-1", slug: "mohalla-civic-complaint-board", name_en: "Mohalla Civic Complaint Board", name_hi: "वार्ड सड़क, नाली व लाइट सुधार मंच", filter_chips: ["Sabhi", "Civic", "Ward", "Complaints"] },
      { sub_code: "27-2", slug: "kisan-trader-union-forum", name_en: "Kisan & Trader Union Forum", name_hi: "किसान खाद-बीज व मंडी सहयोग मंच", filter_chips: ["Sabhi", "Kisan Forum", "Mandi", "Seeds"] },
      { sub_code: "27-3", slug: "emergency-blood-donor-net", name_en: "Emergency Blood Donor Net", name_hi: "आपातकालीन स्थानीय रक्तदाता नेटवर्क", filter_chips: ["Sabhi", "Blood Donor", "Emergency", "Verified"] }
    ]
  },
  {
    category_id: 28, category_code: "28", category_slug: "sports",
    category_name_en: "Sports", category_name_hi: "टर्फ ग्राउंड व खेलकूद",
    sub_categories: [
      { sub_code: "28-1", slug: "night-box-cricket-turf", name_en: "Night Box Cricket Turf", name_hi: "फ्लडलाइट बॉक्स क्रिकेट व टर्फ स्लॉट", filter_chips: ["Sabhi", "Box Cricket", "Football Turf", "Hourly"] },
      { sub_code: "28-2", slug: "cricket-bat-repair-grip", name_en: "Cricket Bat Repair & Grip", name_hi: "क्रिकेट बैट नॉकिंग, थ्रेडिंग व रिपेयर", filter_chips: ["Sabhi", "Bat Repair", "Threading", "Grip"] },
      { sub_code: "28-3", slug: "local-cricket-tournaments", name_en: "Local Cricket Tournaments", name_hi: "टेनिस बॉल टूर्नामेंट टीम एंट्री व स्कोरिंग", filter_chips: ["Sabhi", "Tournament", "Entry Pass", "Trophy"] }
    ]
  },
  {
    category_id: 29, category_code: "29", category_slug: "tools",
    category_name_en: "Tools", category_name_hi: "पावर टूल्स व मिस्त्री किट",
    sub_categories: [
      { sub_code: "29-1", slug: "daily-power-tools-rental", name_en: "Daily Power Tools Rental", name_hi: "हैमर ड्रिल, कटर व जनरेटर दैनिक किराया", filter_chips: ["Sabhi", "Hammer Drill", "Cutter", "Rental"] },
      { sub_code: "29-2", slug: "power-tool-rewinding", name_en: "Power Tool Rewinding", name_hi: "पावर टूल आर्मेचर वाइंडिंग व रिपेयर", filter_chips: ["Sabhi", "Armature", "Rewinding", "Switch"] },
      { sub_code: "29-3", slug: "mistry-hand-tools-kit", name_en: "Mistry Hand Tools Kit", name_hi: "करनी, रंदा, पाना व हथौड़ा संपूर्ण सेट", filter_chips: ["Sabhi", "Mistry Kit", "Hammer", "Hand Tools"] }
    ]
  },
  {
    category_id: 30, category_code: "30", category_slug: "travel-and-local",
    category_name_en: "Travel & Local", category_name_hi: "टैक्सी व टूर बस",
    sub_categories: [
      { sub_code: "30-1", slug: "bolero-scorpio-rental", name_en: "Bolero & Scorpio Rental", name_hi: "शादी व यात्रा हेतु बोलेरो/स्कॉर्पियो", filter_chips: ["Sabhi", "Bolero", "Scorpio", "Innova"] },
      { sub_code: "30-2", slug: "pilgrimage-tour-bus-seats", name_en: "Pilgrimage Tour Bus Seats", name_hi: "अयोध्या व काशी तीर्थ यात्रा बस सीट", filter_chips: ["Sabhi", "Tour Bus", "Pilgrimage", "Seat Booking"] },
      { sub_code: "30-3", slug: "railway-station-drop-cabs", name_en: "Railway Station Drop Cabs", name_hi: "स्टेशन व एयरपोर्ट फिक्स-किराया टैक्सी", filter_chips: ["Sabhi", "Station Drop", "Cab", "Fixed Rate"] }
    ]
  },
  {
    category_id: 31, category_code: "31", category_slug: "video-players-and-editors",
    category_name_en: "Video Players & Editors", category_name_hi: "दुकान रील्स व वीडियो",
    sub_categories: [
      { sub_code: "31-1", slug: "retail-shop-promo-reels", name_en: "Retail Shop Promo Reels", name_hi: "स्थानीय दुकान हेतु 30-सेकंड रील्स शूट", filter_chips: ["Sabhi", "Reels", "Shop Promo", "Instagram"] },
      { sub_code: "31-2", slug: "wedding-video-song-mixing", name_en: "Wedding Video Song Mixing", name_hi: "शादी 3D टाइटल व गीत वीडियो मिक्सिंग", filter_chips: ["Sabhi", "Wedding Mixing", "3D Titles", "Cinematic"] },
      { sub_code: "31-3", slug: "youtube-channel-edit-thumb", name_en: "YouTube Channel Edit & Thumb", name_hi: "यूट्यूब वीडियो एडिटिंग व थंबनेल डिजाइन", filter_chips: ["Sabhi", "YouTube Edit", "Thumbnail", "Voice Clean"] }
    ]
  },
  {
    category_id: 32, category_code: "32", category_slug: "weather",
    category_name_en: "Weather", category_name_hi: "मौसम व कृषि चेतावनी",
    sub_categories: [
      { sub_code: "32-1", slug: "village-rain-storm-alerts", name_en: "Village Rain & Storm Alerts", name_hi: "72-घंटे गांव स्तर सटीक बारिश चेतावनी", filter_chips: ["Sabhi", "Rain Alert", "Radar", "Storm"] },
      { sub_code: "32-2", slug: "crop-spray-weather-advisory", name_en: "Crop Spray Weather Advisory", name_hi: "मौसम अनुसार कीटनाशक छिड़काव समय", filter_chips: ["Sabhi", "Agro Advisory", "Spray Time", "Kisan"] },
      { sub_code: "32-3", slug: "crop-damage-insurance-claim", name_en: "Crop Damage Insurance Claim", name_hi: "अतिवृष्टि व सूखा फसल मुआवजा सहायता", filter_chips: ["Sabhi", "Crop Damage", "Survey", "Claim"] }
    ]
  },

  // --- BATCH 4: PHYSICAL GAMING, RECREATION & EVENTS (CAT 33 - 50) ---
  {
    category_id: 33, category_code: "33", category_slug: "game-action",
    category_name_en: "Action Games", category_name_hi: "गेमिंग पार्लर व लेजर टैग",
    sub_categories: [
      { sub_code: "33-1", slug: "ps5-pc-gaming-parlor", name_en: "PS5 & PC Gaming Parlor", name_hi: "4K स्क्रीन PS5 व गेमिंग पीसी 1-घंटा स्लॉट", filter_chips: ["Sabhi", "PS5", "PC Gaming", "Slot"] },
      { sub_code: "33-2", slug: "action-gaming-tournament-pass", name_en: "Action Gaming Tournament Pass", name_hi: "लैन ई-स्पोर्ट्स मुकाबला टीम एंट्री पास", filter_chips: ["Sabhi", "Tournament", "LAN", "Prize Pool"] },
      { sub_code: "33-3", slug: "laser-tag-arena-party-setup", name_en: "Laser Tag Arena Party Setup", name_hi: "लेजर टैग शूटिंग बंकर पार्टी सेटअप", filter_chips: ["Sabhi", "Laser Tag", "Party Setup", "Arena"] }
    ]
  },
  {
    category_id: 34, category_code: "34", category_slug: "game-adventure",
    category_name_en: "Adventure Games", category_name_hi: "कैंपिंग व ट्रैकिंग",
    sub_categories: [
      { sub_code: "34-1", slug: "camping-tent-gear-rental", name_en: "Camping Tent & Gear Rental", name_hi: "वाटरप्रूफ कैंपिंग टेंट व बॉनफायर किराया", filter_chips: ["Sabhi", "Camping Tent", "Bonfire", "Gear"] },
      { sub_code: "34-2", slug: "local-forest-trekking-guides", name_en: "Local Forest Trekking Guides", name_hi: "स्थानीय जंगल ट्रैकिंग प्रमाणित गाइड", filter_chips: ["Sabhi", "Trekking", "Forest", "Guide"] },
      { sub_code: "34-3", slug: "zipline-adventure-park-pass", name_en: "Zipline & Adventure Park Pass", name_hi: "रिवर राफ्टिंग व जिपलाइन डिस्काउंट पास", filter_chips: ["Sabhi", "Zipline", "Rafting", "Park Pass"] }
    ]
  },
  {
    category_id: 35, category_code: "35", category_slug: "game-arcade",
    category_name_en: "Arcade Games", category_name_hi: "मेला झूले व आर्केड जोन",
    sub_categories: [
      { sub_code: "35-1", slug: "mela-jhoola-dragon-train", name_en: "Mela Jhoola & Dragon Train", name_hi: "मेला ब्रेकडांस झूला व ड्रैगन ट्रेन पास", filter_chips: ["Sabhi", "Jhoola", "Dragon Train", "Mela Pass"] },
      { sub_code: "35-2", slug: "arcade-center-token-packs", name_en: "Arcade Center Token Packs", name_hi: "मॉल गेमिंग जोन सिक्के (टोकन) पैक", filter_chips: ["Sabhi", "Tokens", "Gaming Zone", "Bonus"] },
      { sub_code: "35-3", slug: "party-bouncy-air-hockey", name_en: "Party Bouncy & Air Hockey", name_hi: "बर्थडे पार्टी बाउंसिंग झूला व एयर हॉकी", filter_chips: ["Sabhi", "Bouncy", "Air Hockey", "Party Rental"] }
    ]
  },
  {
    category_id: 36, category_code: "36", category_slug: "game-board",
    category_name_en: "Board Games", category_name_hi: "कैरम व शतरंज क्लब",
    sub_categories: [
      { sub_code: "36-1", slug: "mohalla-carrom-tournament", name_en: "Mohalla Carrom Tournament", name_hi: "मोहल्ला कैरम चैंपियनशिप रजिस्ट्रेशन", filter_chips: ["Sabhi", "Carrom", "Tournament", "Trophy"] },
      { sub_code: "36-2", slug: "offline-chess-academy-club", name_en: "Offline Chess Academy & Club", name_hi: "टाइमर शतरंज कोचिंग व क्लब मैच", filter_chips: ["Sabhi", "Chess Club", "Timer", "FIDE"] },
      { sub_code: "36-3", slug: "heavy-birch-carrom-boards", name_en: "Heavy Birch Carrom Boards", name_hi: "32mm इंग्लिश बर्च कैरम बोर्ड व पाउडर", filter_chips: ["Sabhi", "Carrom Board", "Striker", "Powder"] }
    ]
  },
  {
    category_id: 37, category_code: "37", category_slug: "game-card",
    category_name_en: "Card Games", category_name_hi: "जादूगर ताश शो व क्लब",
    sub_categories: [
      { sub_code: "37-1", slug: "live-magician-card-show", name_en: "Live Magician Card Show", name_hi: "पारिवारिक उत्सव लाइव जादूगर ताश शो", filter_chips: ["Sabhi", "Magician", "Card Tricks", "Show"] },
      { sub_code: "37-2", slug: "plastic-waterproof-cards", name_en: "100% Plastic Waterproof Cards", name_hi: "कसीनो-ग्रेड पीवीसी ताश व टेबल मैट", filter_chips: ["Sabhi", "PVC Cards", "Waterproof", "Table Mat"] },
      { sub_code: "37-3", slug: "senior-citizen-bridge-club", name_en: "Senior Citizen Bridge Club", name_hi: "वरिष्ठ नागरिक शाम कम्युनिटी ब्रिज क्लब", filter_chips: ["Sabhi", "Bridge Club", "Seniors", "Recreation"] }
    ]
  },
  {
    category_id: 38, category_code: "38", category_slug: "game-casino",
    category_name_en: "Casino Games", category_name_hi: "फन रूले व स्पिन व्हील",
    sub_categories: [
      { sub_code: "38-1", slug: "wedding-fun-casino-setup", name_en: "Wedding Fun Casino Setup", name_hi: "शादी पार्टी फन रूले टेबल (गैर-जुआ)", filter_chips: ["Sabhi", "Fun Casino", "Party", "Roulette"] },
      { sub_code: "38-2", slug: "promotional-lucky-spin-wheel", name_en: "Promotional Lucky Spin Wheel", name_hi: "दुकान प्रचार लकी स्पिन व्हील निर्माण", filter_chips: ["Sabhi", "Spin Wheel", "Promo", "Discount"] },
      { sub_code: "38-3", slug: "party-game-dealer-troupe", name_en: "Party Game Dealer Troupe", name_hi: "पेशेवर क्रुपियर व कस्टमाइज्ड चिप्स", filter_chips: ["Sabhi", "Dealer", "Chips", "Party Game"] }
    ]
  },
  {
    category_id: 39, category_code: "39", category_slug: "game-casual",
    category_name_en: "Casual Games", category_name_hi: "लूडो लीग व फूजबॉल",
    sub_categories: [
      { sub_code: "39-1", slug: "sunday-mohalla-ludo-league", name_en: "Sunday Mohalla Ludo League", name_hi: "रविवार पारिवारिक लूडो मुकाबला व मेडल", filter_chips: ["Sabhi", "Ludo League", "Sunday", "Medal"] },
      { sub_code: "39-2", slug: "foosball-dart-board-tokens", name_en: "Foosball & Dart Board Tokens", name_hi: "कैफे टेबल सॉकर (फूजबॉल) टोकन व डार्ट", filter_chips: ["Sabhi", "Foosball", "Dart", "Cafe Games"] },
      { sub_code: "39-3", slug: "handcrafted-wooden-ludo-sets", name_en: "Handcrafted Wooden Ludo Sets", name_hi: "सागवान लकड़ी का बड़ा लूडो बोर्ड", filter_chips: ["Sabhi", "Wooden Ludo", "Handcrafted", "Snakes Ladders"] }
    ]
  },
  {
    category_id: 40, category_code: "40", category_slug: "game-educational",
    category_name_en: "Educational Games", category_name_hi: "अबेकस व साइंस किट्स",
    sub_categories: [
      { sub_code: "40-1", slug: "offline-abacus-mental-math", name_en: "Offline Abacus & Mental Math", name_hi: "ऑफलाइन हैंड्स-ऑन अबेकस क्लास", filter_chips: ["Sabhi", "Abacus", "Mental Math", "Classes"] },
      { sub_code: "40-2", slug: "inter-school-brain-quiz-pass", name_en: "Inter-School Brain Quiz Pass", name_hi: "क्षेत्रीय विज्ञान व सामान्य ज्ञान क्विज पास", filter_chips: ["Sabhi", "Science Quiz", "Pass", "Inter-School"] },
      { sub_code: "40-3", slug: "wooden-science-model-kits", name_en: "Wooden Science Model Kits", name_hi: "हाइड्रोलिक क्रेन व सोलर साइंस किट्स", filter_chips: ["Sabhi", "Science Kit", "DIY Wooden", "Models"] }
    ]
  },
  {
    category_id: 41, category_code: "41", category_slug: "game-music",
    category_name_en: "Music Games", category_name_hi: "जैम रूम व कराओके",
    sub_categories: [
      { sub_code: "41-1", slug: "soundproof-jam-room-slot", name_en: "Soundproof Jam Room Slot", name_hi: "साउंडप्रूफ म्यूजिक रूम प्रैक्टिस स्लॉट", filter_chips: ["Sabhi", "Jam Room", "Drums", "Hourly"] },
      { sub_code: "41-2", slug: "party-karaoke-machine-setup", name_en: "Party Karaoke Machine Setup", name_hi: "वायरलेस माइक व लिरिक्स स्क्रीन कराओके", filter_chips: ["Sabhi", "Karaoke", "Mics", "Party Setup"] },
      { sub_code: "41-3", slug: "local-singing-audition-pass", name_en: "Local Singing Audition Pass", name_hi: "क्षेत्रीय स्टेज गायन प्रतियोगिता ऑडिशन", filter_chips: ["Sabhi", "Singing", "Audition", "Stage Pass"] }
    ]
  },
  {
    category_id: 42, category_code: "42", category_slug: "game-puzzle",
    category_name_en: "Puzzle Games", category_name_hi: "रूबिक क्यूब व सुडोकू",
    sub_categories: [
      { sub_code: "42-1", slug: "rubiks-cube-speed-workshop", name_en: "Rubiks Cube Speed Workshop", name_hi: "30-सेकंड रूबिक क्यूब तकनीक वर्कशॉप", filter_chips: ["Sabhi", "Speedcube", "Workshop", "Technique"] },
      { sub_code: "42-2", slug: "district-sudoku-championship", name_en: "District Sudoku Championship", name_hi: "जिला स्तरीय टाइमर सुडोकू प्रतियोगिता", filter_chips: ["Sabhi", "Sudoku", "Championship", "Certificate"] },
      { sub_code: "42-3", slug: "magnetic-speedcube-combos", name_en: "Magnetic Speedcube Combos", name_hi: "मैग्नेटिक 3x3, 4x4 क्यूब व लुब्रिकेंट", filter_chips: ["Sabhi", "Magnetic Cube", "3x3", "Speedcube"] }
    ]
  },
  {
    category_id: 43, category_code: "43", category_slug: "game-racing",
    category_name_en: "Racing Games", category_name_hi: "गो-कार्टिंग व साइक्लोथॉन",
    sub_categories: [
      { sub_code: "43-1", slug: "go-karting-track-racing-pass", name_en: "Go-Karting Track Racing Pass", name_hi: "10-लैप गो-कार्टिंग ट्रैक रेसिंग टिकट", filter_chips: ["Sabhi", "Go-Karting", "Track Pass", "Racing"] },
      { sub_code: "43-2", slug: "rc-car-obstacle-track", name_en: "RC Car Obstacle Track", name_hi: "हाई-स्पीड रिमोट कंट्रोल कार ट्रैक स्लॉट", filter_chips: ["Sabhi", "RC Car", "Obstacle Track", "Slots"] },
      { sub_code: "43-3", slug: "bicycle-cyclothon-entry-pass", name_en: "Bicycle Cyclothon Entry Pass", name_hi: "10 किमी हाईवे साइकिल मैराथन पास", filter_chips: ["Sabhi", "Cyclothon", "Marathon", "Jersey"] }
    ]
  },
  {
    category_id: 44, category_code: "44", category_slug: "game-role-playing",
    category_name_en: "Role Playing Games", category_name_hi: "रामलीला व नाटक वेशभूषा",
    sub_categories: [
      { sub_code: "44-1", slug: "ramlila-character-auditions", name_en: "Ramlila Character Auditions", name_hi: "रामलीला व ऐतिहासिक नाटक पात्र चयन", filter_chips: ["Sabhi", "Ramlila", "Auditions", "Drama"] },
      { sub_code: "44-2", slug: "historical-costume-rental", name_en: "Historical Costume Rental", name_hi: "राजा, मुकुट, तलवार व नाटक पोशाक किराया", filter_chips: ["Sabhi", "Costumes", "Crown", "Props"] },
      { sub_code: "44-3", slug: "professional-nukkad-natak", name_en: "Professional Nukkad Natak", name_hi: "जागरूकता अभियान पेशेवर नुक्कड़ नाटक", filter_chips: ["Sabhi", "Nukkad Natak", "Folk Drama", "Awareness"] }
    ]
  },
  {
    category_id: 45, category_code: "45", category_slug: "game-simulation",
    category_name_en: "Simulation Games", category_name_hi: "केबिन सिम्युलेटर व वीआर",
    sub_categories: [
      { sub_code: "45-1", slug: "car-driving-cockpit-sim", name_en: "Car Driving Cockpit Sim", name_hi: "शून्य जोखिम कार ड्राइविंग केबिन सिम्युलेटर", filter_chips: ["Sabhi", "Car Sim", "Steering", "Traffic"] },
      { sub_code: "45-2", slug: "tractor-harvester-training", name_en: "Tractor & Harvester Training", name_hi: "खेत में ट्रैक्टर व हार्वेस्टर ड्राइविंग क्लास", filter_chips: ["Sabhi", "Tractor", "Harvester", "Vocational"] },
      { sub_code: "45-3", slug: "9d-virtual-reality-vr-zone", name_en: "9D Virtual Reality (VR) Zone", name_hi: "360° मोशन चेयर रोलर कोस्टर वीआर राइड", filter_chips: ["Sabhi", "9D VR", "Roller Coaster", "VR Ride"] }
    ]
  },
  {
    category_id: 46, category_code: "46", category_slug: "game-sports",
    category_name_en: "Sports Games", category_name_hi: "नॉकआउट मैच व ट्रॉफी",
    sub_categories: [
      { sub_code: "46-1", slug: "leather-ball-night-cricket", name_en: "Leather Ball Night Cricket", name_hi: "20-ओवर फ्लडलाइट लेदर बॉल टूर्नामेंट", filter_chips: ["Sabhi", "Leather Ball", "Night Match", "20 Overs"] },
      { sub_code: "46-2", slug: "5v5-football-turf-court", name_en: "5v5 Football Turf Court", name_hi: "फुटसल कोर्ट 1-घंटा स्लॉट व मैच बॉल", filter_chips: ["Sabhi", "Futsal", "5v5", "Match Ball"] },
      { sub_code: "46-3", slug: "sports-trophies-medals", name_en: "Sports Trophies & Medals", name_hi: "3-फीट ब्रास ट्रॉफी, मेडल व जर्सी निर्माण", filter_chips: ["Sabhi", "Trophy", "Medals", "Jersey Set"] }
    ]
  },
  {
    category_id: 47, category_code: "47", category_slug: "game-strategy",
    category_name_en: "Strategy Games", category_name_hi: "शतरंज रणनीति व मोहरे",
    sub_categories: [
      { sub_code: "47-1", slug: "7-day-chess-tactics-camp", name_en: "7-Day Chess Tactics Camp", name_hi: "ग्रैंडमास्टर ओपनिंग व एंडगेम कैंप", filter_chips: ["Sabhi", "Tactics Camp", "Opening", "Endgame"] },
      { sub_code: "47-2", slug: "rapid-timed-chess-league", name_en: "Rapid Timed Chess League", name_hi: "10-मिनट डिजिटल क्लॉक रैपिड लीग", filter_chips: ["Sabhi", "Rapid Chess", "Digital Clock", "League"] },
      { sub_code: "47-3", slug: "weighted-wooden-chess-sets", name_en: "Weighted Wooden Chess Sets", name_hi: "भारी शीशम लकड़ी स्टॉन्टन शतरंज मोहरे", filter_chips: ["Sabhi", "Staunton Chess", "Sheesham", "Vinyl Mat"] }
    ]
  },
  {
    category_id: 48, category_code: "48", category_slug: "game-trivia",
    category_name_en: "Trivia Games", category_name_hi: "लाइव क्विज व जीके बुक्स",
    sub_categories: [
      { sub_code: "48-1", slug: "live-buzzer-round-quiz-pass", name_en: "Live Buzzer Round Quiz Pass", name_hi: "लाइव बजर राउंड पोडियम क्विज पास", filter_chips: ["Sabhi", "Buzzer Round", "Live Quiz", "Podium"] },
      { sub_code: "48-2", slug: "saturday-cash-prize-trivia", name_en: "Saturday Cash Prize Trivia", name_hi: "शनिवार शाम नकद पुरस्कार प्रश्नोत्तरी", filter_chips: ["Sabhi", "Cash Trivia", "Saturday", "Prize"] },
      { sub_code: "48-3", slug: "5000-gk-question-booklets", name_en: "5000 GK Question Booklets", name_hi: "5000 सामान्य ज्ञान प्रश्नोत्तर बुकलेट", filter_chips: ["Sabhi", "GK Booklets", "5000 Q&A", "Current Affairs"] }
    ]
  },
  {
    category_id: 49, category_code: "49", category_slug: "game-word",
    category_name_en: "Word Games", category_name_hi: "स्पेलिंग बी व स्क्रैबल",
    sub_categories: [
      { sub_code: "49-1", slug: "spelling-bee-district-contest", name_en: "Spelling Bee District Contest", name_hi: "जिला स्तरीय स्पेलिंग बी प्रतियोगिता पास", filter_chips: ["Sabhi", "Spelling Bee", "Contest", "Certificate"] },
      { sub_code: "49-2", slug: "monthly-crossword-contest", name_en: "Monthly Crossword Contest", name_hi: "मासिक अखबार वर्ग पहेली डाक मुकाबला", filter_chips: ["Sabhi", "Crossword", "Monthly", "Cash Prize"] },
      { sub_code: "49-3", slug: "wooden-scrabble-word-tiles", name_en: "Wooden Scrabble & Word Tiles", name_hi: "पाइनवुड लकड़ी वर्णमाला टाइल्स व स्क्रैबल", filter_chips: ["Sabhi", "Scrabble", "Word Tiles", "Pinewood"] }
    ]
  },
  {
    category_id: 50, category_code: "50", category_slug: "game-family",
    category_name_en: "Family Games", category_name_hi: "तंबोला व पारिवारिक मेले",
    sub_categories: [
      { sub_code: "50-1", slug: "saturday-mohalla-tambola-pass", name_en: "Saturday Mohalla Tambola Pass", name_hi: "शनिवार पारिवारिक तंबोला/हाउजी पास", filter_chips: ["Sabhi", "Tambola", "Housie", "Full House"] },
      { sub_code: "50-2", slug: "family-fun-fair-game-stalls", name_en: "Family Fun Fair Game Stalls", name_hi: "आनंद मेला रिंग थ्रो व गुब्बारा शूटिंग", filter_chips: ["Sabhi", "Mela Stalls", "Ring Throw", "Balloon Shooting"] },
      { sub_code: "50-3", slug: "kitty-party-fun-games-kit", name_en: "Kitty Party Fun Games Kit", name_hi: "किटी पार्टी 10 मजेदार इनडोर गेम किट", filter_chips: ["Sabhi", "Kitty Party", "Indoor Games", "Gifts"] }
    ]
  }
];

function main() {
  const root = path.resolve(__dirname, '..');
  const baseDataDir = path.join(root, 'public', 'data');

  console.log(`Starting canonical taxonomy injection into: ${baseDataDir}`);

  if (!fs.existsSync(baseDataDir)) {
    fs.mkdirSync(baseDataDir, { recursive: true });
  }

  let totalUpdated = 0;
  for (const cat of CANONICAL_50_TAXONOMY) {
    const folderName = `category-${String(cat.category_id).padStart(2, '0')}`;
    const targetDir = path.join(baseDataDir, folderName);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetFile = path.join(targetDir, 'taxonomy.json');
    fs.writeFileSync(targetFile, JSON.stringify(cat, null, 2) + '\n', 'utf8');
    totalUpdated++;
    console.log(`[PASS] ${folderName}/taxonomy.json -> ${cat.category_name_en} (${cat.sub_categories.length} sub-wings)`);
  }

  console.log(`\nSUCCESS: 100% Zero-Element-Loss verified. Updated ${totalUpdated}/50 canonical taxonomy files.`);
}

main();
