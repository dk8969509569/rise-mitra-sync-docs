/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION [CATEGORY 18]
 * MODULE        : Official Google Play Store Standard Category 18 (Maps & Navigation)
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) ISOLATED ATOMIC MODULE
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-cat-18.js
 */

(function () {
  'use strict';

  var cat18 = {
    id: 'c18',
    catId: '18',
    number: '18.',
    num: '18.',
    icon: '🗺️',
    title: 'Maps & Navigation',
    category_name_en: 'Maps & Navigation',
    category_name_hi: 'स्थानीय परिवहन, माल ढुलाई व कूरियर',
    subtitle: 'छोटा हाथी टेम्पो, 2-घंटे हाइपरलोकल कूरियर व पैकर्स मूवर्स',
    rating: '★ 4.9 (16k+ व्यापारी व नागरिक)',
    trustBadge: 'GPS Tracked Logistics',
    supportBadge: '15-मिनट लोडिंग पॉइंट',
    macroPillars: [
      { text: '🚚 18-1: टाटा ऐस छोटा हाथी, पिकअप टेम्पो फिक्स किमी रेट', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🛵 18-2: शहर के अंदर 2 घंटे में दुकान पार्सल व दवा कूरियर', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '📦 18-3: बबल रैप पैकिंग व घरेलू सामान शिफ्टिंग (ज़ीरो डैमेज)', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '18-1': {
        code: '[18-1]',
        sub_code: '18-1',
        slug: 'goods-tempo-booking',
        icon: '🚚',
        title: 'Goods Tempo Booking',
        hindiTitle: 'लोडिंग टेम्पो (छोटा हाथी व पिकअप)',
        tag: 'गुड्स टेम्पो',
        categoryTag: 'गुड्स टेम्पो',
        rating: '★ 4.9',
        reviewCount: '9,800+ ट्रिप्स',
        metaBadge: '15-मिनट पिकअप',
        servicesTitle: 'उपलब्ध कमर्शियल गाड़ियां:',
        services: [
          { text: '🚛 टाटा ऐस (छोटा हाथी) 750kg कैपेसिटी', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🛻 महिंद्रा बोलेरो पिकअप 1.5 टन क्षमता', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📏 पारदर्शी फिक्स किमी रेट, कोई ओवरचार्जिंग नहीं', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '👷 लोडिंग-अनलोडिंग हेल्पर सहायता विकल्प', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'टाटा ऐस (छोटा हाथी), बोलेरो पिकअप 15 मिनट में लोडिंग पॉइंट पर (फिक्स किमी रेट)।',
          'दुकान का माल, अनाज, टाइल्स व फर्नीचर सुरक्षित परिवहन।',
          'लाइव जीपीएस ट्रैकिंग द्वारा माल की लोकेशन निगरानी।'
        ],
        btnText: 'लोडिंग टेम्पो बुलाएं',
        chips: ['Sabhi', 'Tata Ace', 'Bolero Pickup', 'Fixed Rate', 'On-Demand']
      },
      '18-2': {
        code: '[18-2]',
        sub_code: '18-2',
        slug: 'hyperlocal-2hour-courier',
        icon: '🛵',
        title: 'Hyperlocal 2-Hour Courier',
        hindiTitle: '2-घंटे हाइपरलोकल इंट्रा-सिटी कूरियर',
        tag: 'लोकल कूरियर',
        categoryTag: 'लोकल कूरियर',
        rating: '★ 4.8',
        reviewCount: '4,400+ डिलीवरी',
        metaBadge: 'सुपरफास्ट बाइक राइडर',
        servicesTitle: 'त्वरित कूरियर सेवाएं:',
        services: [
          { text: '⚡ शहर के अंदर 2 घंटे में दुकान पार्सल डिलीवरी', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📑 जरूरी कानूनी दस्तावेज व स्टाम्प पेपर डिलीवरी', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '💊 इमरजेंसी दवा व मेडिकल टेस्ट रिपोर्ट डिलीवरी', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🔑 भूली हुई चाबी, टिफिन व घरेलू सामान पहुंचाना', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'शहर के अंदर 2 घंटे में दुकान पार्सल, जरूरी दस्तावेज व दवा बाइक राइडर डिलीवरी।',
          'ओटीपी आधारित सुरक्षित डिलीवरी प्रमाणीकरण।',
          'सस्ती व भरोसेमंद पॉइंट-टू-पॉइंट लोकल डिलीवरी।'
        ],
        btnText: 'कूरियर राइडर भेजें',
        chips: ['Sabhi', '2-Hour Delivery', 'Shop Parcel', 'Document Courier', 'Medicine Run']
      },
      '18-3': {
        code: '[18-3]',
        sub_code: '18-3',
        slug: 'packers-movers-shifting',
        icon: '📦',
        title: 'Packers & Movers Shifting',
        hindiTitle: 'पैकर्स व मूवर्स सुरक्षित घरेलू शिफ्टिंग',
        tag: 'पैकर्स मूवर्स',
        categoryTag: 'पैकर्स मूवर्स',
        rating: '★ 4.9',
        reviewCount: '2,100+ शिफ्टिंग्स',
        metaBadge: 'ज़ीरो डैमेज गारंटी',
        servicesTitle: 'शिफ्टिंग सुविधाएं:',
        services: [
          { text: '🫧 3-लेयर बबल रैप व कार्टन बॉक्स पैकिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🛋️ सोफा, बेड, फ्रिज, टीवी सुरक्षित अनइंस्टॉल व लोडिंग', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🏢 ऊपरी मंजिलों पर सुरक्षित चढ़ाना व अनपैक करना', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🛡️ सामान टूट-फूट सुरक्षा कवरेज अनुबंध', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'बबल रैप पैकिंग, सोफा, फ्रिज व घरेलू सामान सुरक्षित शिफ्टिंग (ज़ीरो डैमेज गारंटी)।',
          'घर या दुकान बदलते समय बिना तनाव सुरक्षित परिवहन।',
          'अनुभवी पेशेवर लोडिंग स्टाफ व फिक्स कोटेशन।'
        ],
        btnText: 'शिफ्टिंग कोटेशन लें',
        chips: ['Sabhi', 'Household Shifting', 'Bubble Wrap', 'Zero Damage', 'Safe Transit']
      }
    }
  };

  var BATCH_18 = {
    '18': cat18,
    '018': cat18,
    'c18': cat18
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_18);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_18);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_18);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_18);
      }
    });
  }
})();
