/**
 * RISE MITRA — UNIVERSAL CATALOG EXTENSION [CATEGORY 20]
 * MODULE        : Official Google Play Store Standard Category 20 (Music & Audio)
 * ARCHITECTURE  : 100% ZERO-ELEMENT-LOSS (ZEL) ISOLATED ATOMIC MODULE
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/universal-catalog/extensions/ext-cat-20.js
 */

(function () {
  'use strict';

  var cat20 = {
    id: 'c20',
    catId: '20',
    number: '20.',
    num: '20.',
    icon: '🎵',
    title: 'Music & Audio',
    category_name_en: 'Music & Audio',
    category_name_hi: 'संगीत, रिकॉर्डिंग स्टूडियो व वाद्य यंत्र',
    subtitle: 'गायन, संगीत रिकॉर्डिंग, वाद्य यंत्र विक्रय व पॉडकास्ट स्टूडियो',
    rating: '★ 4.8 (11k+ कलाकार)',
    trustBadge: 'Acoustic Studio Certified',
    supportBadge: 'स्टूडियो स्लॉट उपलब्ध',
    macroPillars: [
      { text: '🎙️ 20-1: प्रोफेशनल ऑडियो रिकॉर्डिंग स्टूडियो, मिक्सिंग व डबिंग', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
      { text: '🎸 20-2: गिटार, हारमोनियम, तबला व वाद्य यंत्र बिक्री व रिपेयर', color: '#facc15', bg: 'rgba(250, 204, 21, 0.14)' },
      { text: '🎼 20-3: शास्त्रीय गायन, संगीत व वाद्य वादन क्लास', color: '#34d399', bg: 'rgba(52, 211, 153, 0.14)' }
    ],
    subcategories: {
      '20-1': {
        code: '[20-1]',
        sub_code: '20-1',
        slug: 'recording-studio-dubbing',
        icon: '🎙️',
        title: 'Recording Studio & Dubbing',
        hindiTitle: 'रिकॉर्डिंग स्टूडियो, मिक्सिंग व डबिंग',
        categoryTag: 'स्टूडियो प्रोडक्शन',
        tag: 'स्टूडियो प्रोडक्शन',
        rating: '★ 4.9',
        reviewCount: '4,200+ ट्रैक्स',
        metaBadge: 'साउंडप्रूफ एकॉस्टिक',
        servicesTitle: 'उपलब्ध स्टूडियो सुविधाएं:',
        services: [
          { text: '🎤 वोकल रिकॉर्डिंग, ट्रैक डबिंग व वॉइस-ओवर', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🎛️ प्रोफेशनल म्यूजिक मिक्सिंग व मास्टरिंग', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '📻 पॉडकास्ट रिकॉर्डिंग व यूट्यूब ऑडियो सेटअप', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🎹 बैकग्राउंड म्यूजिक (BGM) व जिंगल निर्माण', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'उच्च गुणवत्ता वाले कंडेनसर माइक्रोफोन व उद्योग मानक प्लगइन्स।',
          'गीत रिलीज हेतु सोशल व म्यूजिक प्लेटफॉर्म वितरण सहायता।',
          'प्रति घंटा या पूरे ट्रैक का किफायती पैकेज।'
        ],
        btnText: 'स्टूडियो बुक करें',
        chips: ['Sabhi', 'Vocal Recording', 'Mixing Mastering', 'Podcast Studio', 'BGM Jingle']
      },
      '20-2': {
        code: '[20-2]',
        sub_code: '20-2',
        slug: 'musical-instruments-repair',
        icon: '🎸',
        title: 'Musical Instruments & Repair',
        hindiTitle: 'वाद्य यंत्र बिक्री, सर्विस व रिपेयर',
        categoryTag: 'वाद्य यंत्र',
        tag: 'वाद्य यंत्र',
        rating: '★ 4.8',
        reviewCount: '3,800+ संगीत प्रेमी',
        metaBadge: 'ओरिजिनल ब्रांडेड',
        servicesTitle: 'वाद्य यंत्र सेवाएं:',
        services: [
          { text: '🎸 एकॉस्टिक व इलेक्ट्रिक गिटार, यूकुलेले', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '🎹 सिंथेसाइजर कीबोर्ड व पियानो', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🪘 पारंपरिक तबला, ढोलक, मांदर व नाल', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🔧 गिटार स्ट्रिंग बदलाव, हारमोनियम ट्यूनिंग व रिपेयर', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
        ],
        highlights: [
          'संगीत साधकों हेतु सही वाद्य यंत्र चयन की विशेषज्ञ सलाह।',
          'पुराने हारमोनियम व तबले की ट्यूनिंग व जीर्णोद्धार।',
          'सभी प्रकार की एसेसरीज, बैग्स व केबल्स उपलब्ध।'
        ],
        btnText: 'वाद्य यंत्र खरीदें/सुधरवाएं',
        chips: ['Sabhi', 'Guitar Ukulele', 'Keyboard Piano', 'Tabla Dholak', 'Harmonium Repair']
      },
      '20-3': {
        code: '[20-3]',
        sub_code: '20-3',
        slug: 'music-vocal-classes',
        icon: '🎼',
        title: 'Music & Vocal Classes',
        hindiTitle: 'गायन, संगीत व वाद्य वादन क्लास',
        categoryTag: 'संगीत शिक्षा',
        tag: 'संगीत शिक्षा',
        rating: '★ 4.9',
        reviewCount: '3,200+ विद्यार्थी',
        metaBadge: 'संबद्ध संगीत संस्थान',
        servicesTitle: 'उपलब्ध संगीत कोर्स:',
        services: [
          { text: '🎶 शास्त्रीय व सुगम संगीत गायन प्रशिक्षण', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
          { text: '🎸 गिटार, पियानो व कीबोर्ड वादन क्लास', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
          { text: '🥁 तबला व ड्रम वादन बेसिक से एडवांस', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
          { text: '📜 डिप्लोमा व डिग्री हेतु परीक्षा तैयारी', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
        ],
        highlights: [
          'अनुभवी गुरुओं द्वारा व्यक्तिगत मार्गदर्शन।',
          'बच्चों और वयस्कों हेतु लचीले वीकेंड बैचेस।',
          'स्टेज परफॉर्मेंस व रियलिटी शो ऑडिशन की तैयारी।'
        ],
        btnText: 'म्यूजिक क्लास जॉइन करें',
        chips: ['Sabhi', 'Classical Vocal', 'Guitar Classes', 'Tabla Lessons', 'Music Exam']
      }
    }
  };

  var BATCH_20 = {
    '20': cat20,
    '020': cat20,
    'c20': cat20
  };

  if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
    window.RM_CATALOG_REGISTRY.registerBatch(BATCH_20);
  } else if (window.RM_CATALOG_REGISTRY) {
    Object.assign(window.RM_CATALOG_REGISTRY, BATCH_20);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
        window.RM_CATALOG_REGISTRY.registerBatch(BATCH_20);
      } else if (window.RM_CATALOG_REGISTRY) {
        Object.assign(window.RM_CATALOG_REGISTRY, BATCH_20);
      }
    });
  }
})();
