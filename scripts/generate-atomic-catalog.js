/**
 * RISE MITRA — ATOMIC CATALOG 01-50 GENERATOR ENGINE
 * ARCHITECTURE  : 1 Category = 1 Independent File (Atomic & Anti-AI Resilient)
 * GOVERNANCE    : GATE-26.0 | ZERO-ELEMENT-LOSS (ZEL) MASTER SCRIPT
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * TARGET FOLDER : public/js/universal-catalog/categories/
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/js/universal-catalog/categories');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 50 Official Play Store Categories Master Blueprint (Anti-AI Physical Execution Focused)
const CATEGORIES_DATA = {
  1: {
    title: 'Art & Design', subtitle: 'त्योहार पोस्टर, दुकान प्रचार, फ्लेक्स बोर्ड व प्रिंटिंग हब',
    icon: '🎨', rating: '★ 4.9 (14k+ व्यापारी)', trust: 'Print & Design Verified', support: 'डोरस्टेप प्रिंट डिलीवरी',
    pillars: [
      { text: '📱 01-1: दुकान नाम व फोटो वाले 1-क्लिक त्योहार पोस्टर व कार्ड', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🪧 01-2: दुकान फ्लेक्स बोर्ड, ग्लो साइन व विनाइल बैनर प्रिंटिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📇 01-3: प्रीमियम विज़िटिंग कार्ड, लेटरहेड व जीएसटी बिल बुक', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '01-1', icon: '📱', title: 'Festival Post & Digital Card', hindi: 'दुकान त्योहार पोस्टर व डिजिटल कार्ड', tag: 'सोशल मीडिया ब्रांडिंग', badge: '1-क्लिक WhatsApp शेयर', btn: 'पोस्टर डिजाइन करें' },
      { subCode: '01-2', icon: '🪧', title: 'Flex Board & Banner Printing', hindi: 'फ्लेक्स बोर्ड, बैनर व ग्लो-साइन प्रिंटिंग', tag: 'ऑफसेट व डिजिटल प्रिंटिंग', badge: 'डोरस्टेप डिलीवरी', btn: 'फ्लेक्स बोर्ड ऑर्डर करें' },
      { subCode: '01-3', icon: '📇', title: 'Visiting Card & Bill Books', hindi: 'विज़िटिंग कार्ड, लेटरहेड व बिल बुक', tag: 'व्यापारिक स्टेशनरी', badge: 'प्रीमियम फिनिश', btn: 'कार्ड व बिल बुक छपवाएं' }
    ]
  },
  2: {
    title: 'Auto & Vehicles', subtitle: 'ऑन-रोड इमरजेंसी सहायता, गैरेज सर्विस, चालान व सेकंड-हैंड गाड़ी',
    icon: '🚗', rating: '★ 4.9 (18k+ वाहन मालिक)', trust: 'RSA & Garage Verified', support: '15-मिनट ऑन-रोड विज़िट',
    pillars: [
      { text: '🚨 02-1: 15-मिनट ऑन-रोड पंचर, बैटरी जंप-स्टार्ट व क्रेन टोइंग', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.14)' },
      { text: '📜 02-2: आरटीओ चालान जांच, तत्काल निपटान व फ़ास्टैग रिचार्ज', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🛵 02-3: सेकंड-हैंड बाइक, कार व ट्रैक्टर ख़रीद-बिक्री (0% दलाली)', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subs: [
      { subCode: '02-1', icon: '🚨', title: 'Roadside Assistance (RSA)', hindi: 'ऑन-रोड इमरजेंसी सहायता व पंचर', tag: '24x7 इमरजेंसी सर्विस', badge: '15 मिनट विज़िट', btn: 'इमरजेंसी मैकेनिक बुलाएं' },
      { subCode: '02-2', icon: '📜', title: 'RTO Challan & FASTag', hindi: 'आरटीओ चालान जांच व फ़ास्टैग', tag: 'वाहन कागजात व टैक्स', badge: '1-क्लिक सरकारी सिंक', btn: 'चालान चेक व भरें' },
      { subCode: '02-3', icon: '🛵', title: 'Used Vehicles Buy/Sell', hindi: 'पुरानी गाड़ी ख़रीद-बिक्री (0% दलाली)', tag: 'प्रमाणित वाहन बाज़ार', badge: '0% ब्रोकरेज', btn: 'गाड़ी देखें या बेचें' }
    ]
  },
  3: {
    title: 'Beauty', subtitle: 'घर पर सैलून, ब्राइडल मेकअप, मेहंदी व जेंट्स ग्रूमिंग हब',
    icon: '💄', rating: '★ 4.9 (12k+ महिलाएं व परिवार)', trust: 'Certified Beauticians', support: '100% हाइजीनिक किट',
    pillars: [
      { text: '💇‍♀️ 03-1: डोरस्टेप ब्यूटी पार्लर व सैलून एट होम (ओनली लेडीज)', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.14)' },
      { text: '👰 03-2: शादी ब्राइडल मेकअप व दुल्हन मेहंदी आर्टिस्ट बुकिंग', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '💈 03-3: मोहल्ला नाई दुकान बिना कतार डिजिटल टोकन बुकिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' }
    ],
    subs: [
      { subCode: '03-1', icon: '💇‍♀️', title: 'Salon at Home', hindi: 'डोरस्टेप लेडीज सैलून व फेशियल', tag: 'होम पार्लर सर्विस', badge: 'डिस्पोजेबल किट', btn: 'सैलून सर्विस बुक करें' },
      { subCode: '03-2', icon: '👰', title: 'Bridal & Mehndi Artists', hindi: 'ब्राइडल मेकअप व शादी मेहंदी', tag: 'शादी स्पेशल पैकेज', badge: 'सत्यापित आर्टिस्ट', btn: 'ब्राइडल पैकेज चुनें' },
      { subCode: '03-3', icon: '💈', title: 'Men Grooming & Barber', hindi: 'नाई दुकान टोकन व ग्रूमिंग', tag: 'जेंट्स सैलून', badge: 'ज़ीरो वेटिंग टोकन', btn: 'टोकन बुक करें' }
    ]
  },
  4: {
    title: 'Books & Reference', subtitle: 'क्षेत्रीय ऑडियो कहानियां, सरकारी भर्ती नोट्स व दैनिक पंचांग',
    icon: '📚', rating: '★ 4.8 (9k+ पाठक व छात्र)', trust: 'Verified Material', support: 'ऑडियो व पीडीएफ एक्सेस',
    pillars: [
      { text: '🎧 04-1: हिंदी, भोजपुरी व मैथिली ऑडियो कहानियां व जीवनियां', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '📝 04-2: पुलिस, रेलवे व एसएससी हस्तलिखित नोट्स व सॉल्वड पेपर्स', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🕉️ 04-3: दैनिक सटीक पंचांग, शुभ मुहूर्त व प्रामाणिक धर्म साहित्य', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subs: [
      { subCode: '04-1', icon: '🎧', title: 'Desi Audio Kahaniyan', hindi: 'देसी ऑडियो कहानियां व जीवनियां', tag: 'क्षेत्रीय ऑडियो पॉडकास्ट', badge: 'मासिक पास', btn: 'ऑडियो सुनें' },
      { subCode: '04-2', icon: '📝', title: 'Sarkari Exam Notes', hindi: 'सरकारी परीक्षा नोट्स व पीडीएफ', tag: 'स्टडी मैटेरियल', badge: 'सत्यापित नोट्स', btn: 'नोट्स डाउनलोड करें' },
      { subCode: '04-3', icon: '🕉️', title: 'Dainik Panchang & Sahitya', hindi: 'दैनिक पंचांग व धर्म साहित्य', tag: 'पंचांग व मुहूर्त', badge: 'सटीक गणना', btn: 'पंचांग देखें' }
    ]
  },
  5: {
    title: 'Business', subtitle: 'डिजिटल उधारी बहीखाता, थोक मंडी सप्लायर व ऑनलाइन दुकान',
    icon: '💼', rating: '★ 4.9 (25k+ व्यापारी)', trust: 'Sovereign Ledger', support: '100% मुफ़्त ऑटो बैकअप',
    pillars: [
      { text: '📖 05-1: 100% सुरक्षित डिजिटल उधारी बहीखाता व SMS पेमेंट लिंक', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
      { text: '🏢 05-2: किराना, कपड़ा व हार्डवेयर थोक सप्लायर डायरेक्टरी', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🛍️ 05-3: 30-सेकंड में व्हाट्सएप ऑनलाइन दुकान व डिजिटल कैटलॉग', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
    ],
    subs: [
      { subCode: '05-1', icon: '📖', title: 'Digital Udhar Khata', hindi: 'डिजिटल उधारी बहीखाता', tag: 'स्मार्ट अकाउंटिंग', badge: 'ऑटो SMS रिमाइंडर', btn: 'खाता खोलें' },
      { subCode: '05-2', icon: '🏢', title: 'Wholesale Supplier Network', hindi: 'थोक मंडी व सप्लायर नेटवर्क', tag: 'B2B ट्रेड डायरेक्टरी', badge: 'सीधा डीलर संपर्क', btn: 'थोक सप्लायर खोजें' },
      { subCode: '05-3', icon: '🛍️', title: 'Online Dukan QR Catalog', hindi: 'ऑनलाइन दुकान व क्यूआर कैटलॉग', tag: 'डिजिटल रिटेल', badge: 'WhatsApp ऑर्डर', btn: 'दुकान बनाएं' }
    ]
  }
};

const PLAY_STORE_NAMES = [
  '', 'Art & Design', 'Auto & Vehicles', 'Beauty', 'Books & Reference', 'Business',
  'Comics', 'Communication', 'Dating', 'Education', 'Entertainment',
  'Events', 'Finance', 'Food & Drink', 'Health & Fitness', 'House & Home',
  'Libraries & Demo', 'Lifestyle', 'Maps & Navigation', 'Medical', 'Music & Audio',
  'News & Magazines', 'Parenting', 'Personalization', 'Photography', 'Productivity',
  'Shopping', 'Social', 'Sports', 'Tools', 'Travel & Local',
  'Video Players & Editors', 'Weather', 'Action Games', 'Adventure Games', 'Arcade Games',
  'Board Games', 'Card Games', 'Casino Games', 'Casual Games', 'Educational Games',
  'Music Games', 'Puzzle Games', 'Racing Games', 'Role Playing Games', 'Simulation Games',
  'Sports Games', 'Strategy Games', 'Trivia Games', 'Word Games', 'Family Games'
];

for (let i = 1; i <= 50; i++) {
  const padId = String(i).padStart(2, '0');
  const catName = PLAY_STORE_NAMES[i] || `Category ${padId}`;
  
  let data = CATEGORIES_DATA[i];
  if (!data) {
    data = {
      title: catName,
      subtitle: `प्रमाणित सेवाएं, हाइपरलोकल वेंडर्स व सुरक्षित निष्पादन केंद्र`,
      icon: i > 32 ? '🎮' : '💼',
      rating: '★ 4.8 (8k+ संतुष्ट यूज़र्स)',
      trust: 'Play Store Verified',
      support: '24x7 सहायता व गारंटी',
      pillars: [
        { text: `⚡ ${padId}-1: प्रमाणित प्राथमिक सेवा व त्वरित विज़िट`, color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
        { text: `🛡️ ${padId}-2: 100% पारदर्शी दर सूची व डिजिटल बिलिंग`, color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' },
        { text: `🤝 ${padId}-3: स्थानीय सत्यापित एक्सपर्ट व कार्य संतुष्टि गारंटी`, color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' }
      ],
      subs: [
        { subCode: `${padId}-1`, icon: '⚡', title: `${catName} Essential`, hindi: `प्राथमिक सेवा व समाधान`, tag: 'हाइपरलोकल सेवा', badge: 'त्वरित विज़िट', btn: 'सेवा बुक करें' },
        { subCode: `${padId}-2`, icon: '🛡️', title: `${catName} Direct Connect`, hindi: `सत्यापित विशेषज्ञ संपर्क`, tag: 'सीधी डील', badge: '0% बिचौलिया', btn: 'संपर्क करें' },
        { subCode: `${padId}-3`, icon: '🤝', title: `${catName} Custom Solutions`, hindi: `अनुकूलित सेवा पैकेज`, tag: 'गारंटीड समाधान', badge: 'संतुष्टि गारंटी', btn: 'विवरण देखें' }
      ]
    };
  }

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
        { text: '⚡ तुरंत रिस्पॉन्स व सुरक्षित सेवा', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
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
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
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

console.log('✓ Successfully generated all 50 atomic category files (01-50)!');
