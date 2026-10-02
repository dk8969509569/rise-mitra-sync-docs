/**
 * Rise Mitra - Pan-India Geographic Master Dataset (v1.0)
 * Dual-Folder Reference:
 *   Folder A (SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 * Scope: 28 States + 8 UTs with Key Academic & Migration Districts
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.RM_INDIA_GEO = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var states = [
    {
      code: 'JH',
      name: 'Jharkhand',
      nameHi: 'झारखंड',
      districts: [
        { id: 'JH-PAL', name: 'Palamu (Daltonganj)', nameHi: 'पलामू (डाल्टनगंज)' },
        { id: 'JH-RAN', name: 'Ranchi', nameHi: 'रांची' },
        { id: 'JH-DHN', name: 'Dhanbad', nameHi: 'धनबाद' },
        { id: 'JH-ESN', name: 'East Singhbhum (Jamshedpur)', nameHi: 'पूर्वी सिंहभूम (जमशेदपुर)' },
        { id: 'JH-BOK', name: 'Bokaro', nameHi: 'बोकारो' },
        { id: 'JH-HAZ', name: 'Hazaribagh', nameHi: 'हजारीबाग' },
        { id: 'JH-DEO', name: 'Deoghar', nameHi: 'देवघर' },
        { id: 'JH-GAR', name: 'Garhwa', nameHi: 'गढ़वा' },
        { id: 'JH-LAT', name: 'Latehar', nameHi: 'लातेहार' },
        { id: 'JH-GIR', name: 'Giridih', nameHi: 'गिरिडीह' },
        { id: 'JH-RAM', name: 'Ramgarh', nameHi: 'रामगढ़' },
        { id: 'JH-KOD', name: 'Koderma', nameHi: 'कोडरमा' },
        { id: 'JH-CHA', name: 'Chatra', nameHi: 'चतरा' },
        { id: 'JH-DUM', name: 'Dumka', nameHi: 'दुमका' },
        { id: 'JH-GOD', name: 'Godda', nameHi: 'गोड्डा' },
        { id: 'JH-SAH', name: 'Sahibganj', nameHi: 'साहिबगंज' },
        { id: 'JH-PAK', name: 'Pakur', nameHi: 'पाकुड़' },
        { id: 'JH-JAM', name: 'Jamtara', nameHi: 'जामताड़ा' },
        { id: 'JH-WSN', name: 'West Singhbhum (Chaibasa)', nameHi: 'पश्चिमी सिंहभूम' },
        { id: 'JH-SER', name: 'Seraikela Kharsawan', nameHi: 'सरायकेला खरसावां' },
        { id: 'JH-SIM', name: 'Simdega', nameHi: 'सिमडेगा' },
        { id: 'JH-GUM', name: 'Gumla', nameHi: 'गुमला' },
        { id: 'JH-LOH', name: 'Lohardaga', nameHi: 'लोहरदगा' },
        { id: 'JH-KHU', name: 'Khunti', nameHi: 'खूंटी' }
      ]
    },
    {
      code: 'BR',
      name: 'Bihar',
      nameHi: 'बिहार',
      districts: [
        { id: 'BR-PAT', name: 'Patna', nameHi: 'पटना' },
        { id: 'BR-GAY', name: 'Gaya', nameHi: 'गया' },
        { id: 'BR-MUZ', name: 'Muzaffarpur', nameHi: 'मुजफ्फरपुर' },
        { id: 'BR-BHA', name: 'Bhagalpur', nameHi: 'भागलपुर' },
        { id: 'BR-DAR', name: 'Darbhanga', nameHi: 'दरभंगा' },
        { id: 'BR-PUR', name: 'Purnia', nameHi: 'पूर्णिया' },
        { id: 'BR-ROH', name: 'Rohtas (Sasaram)', nameHi: 'रोहतास (सासाराम)' },
        { id: 'BR-SAR', name: 'Saran (Chhapra)', nameHi: 'सारण (छपरा)' },
        { id: 'BR-VAI', name: 'Vaishali (Hajipur)', nameHi: 'वैशाली (हाजीपुर)' },
        { id: 'BR-BEG', name: 'Begusarai', nameHi: 'बेगूसराय' },
        { id: 'BR-NAL', name: 'Nalanda (Bihar Sharif)', nameHi: 'नालंदा (बिहारशरीफ)' },
        { id: 'BR-AUR', name: 'Aurangabad', nameHi: 'औरंगाबाद' },
        { id: 'BR-SIW', name: 'Siwan', nameHi: 'सीवान' },
        { id: 'BR-BHO', name: 'Bhojpur (Arrah)', nameHi: 'भोजपुर (आरा)' },
        { id: 'BR-SAM', name: 'Samastipur', nameHi: 'समस्तीपुर' },
        { id: 'BR-MOT', name: 'East Champaran (Motihari)', nameHi: 'पूर्वी चंपारण' },
        { id: 'BR-BET', name: 'West Champaran (Bettiah)', nameHi: 'पश्चिम चंपारण' },
        { id: 'BR-KAT', name: 'Katihar', nameHi: 'कटिहार' },
        { id: 'BR-MUN', name: 'Munger', nameHi: 'मुंगेर' },
        { id: 'BR-SAH', name: 'Saharsa', nameHi: 'सहरसा' }
      ]
    },
    {
      code: 'MP',
      name: 'Madhya Pradesh',
      nameHi: 'मध्य प्रदेश',
      districts: [
        { id: 'MP-IND', name: 'Indore', nameHi: 'इंदौर' },
        { id: 'MP-BHO', name: 'Bhopal', nameHi: 'भोपाल' },
        { id: 'MP-JAB', name: 'Jabalpur', nameHi: 'जबलपुर' },
        { id: 'MP-GWA', name: 'Gwalior', nameHi: 'ग्वालियर' },
        { id: 'MP-UJJ', name: 'Ujjain', nameHi: 'उज्जैन' },
        { id: 'MP-SAG', name: 'Sagar', nameHi: 'सागर' },
        { id: 'MP-REW', name: 'Rewa', nameHi: 'रीवा' },
        { id: 'MP-SAT', name: 'Satna', nameHi: 'सतना' },
        { id: 'MP-RAT', name: 'Ratlam', nameHi: 'रतलाम' }
      ]
    },
    {
      code: 'UP',
      name: 'Uttar Pradesh',
      nameHi: 'उत्तर प्रदेश',
      districts: [
        { id: 'UP-LKO', name: 'Lucknow', nameHi: 'लखनऊ' },
        { id: 'UP-KAN', name: 'Kanpur', nameHi: 'कानपुर' },
        { id: 'UP-VAR', name: 'Varanasi', nameHi: 'वाराणसी' },
        { id: 'UP-PRY', name: 'Prayagraj (Allahabad)', nameHi: 'प्रयागराज' },
        { id: 'UP-NOI', name: 'Gautam Buddha Nagar (Noida)', nameHi: 'नोएडा' },
        { id: 'UP-GHA', name: 'Ghaziabad', nameHi: 'गाजियाबाद' },
        { id: 'UP-GOR', name: 'Gorakhpur', nameHi: 'गोरखपुर' },
        { id: 'UP-MEE', name: 'Meerut', nameHi: 'मेरठ' },
        { id: 'UP-AGR', name: 'Agra', nameHi: 'आगरा' },
        { id: 'UP-ALI', name: 'Aligarh', nameHi: 'अलीगढ़' },
        { id: 'UP-BAR', name: 'Bareilly', nameHi: 'बरेली' },
        { id: 'UP-JHA', name: 'Jhansi', nameHi: 'झांसी' }
      ]
    },
    {
      code: 'RJ',
      name: 'Rajasthan',
      nameHi: 'राजस्थान',
      districts: [
        { id: 'RJ-KOT', name: 'Kota', nameHi: 'कोटा' },
        { id: 'RJ-JAI', name: 'Jaipur', nameHi: 'जयपुर' },
        { id: 'RJ-JOD', name: 'Jodhpur', nameHi: 'जोधपुर' },
        { id: 'RJ-UDA', name: 'Udaipur', nameHi: 'उदयपुर' },
        { id: 'RJ-BIK', name: 'Bikaner', nameHi: 'बीकानेर' },
        { id: 'RJ-AJM', name: 'Ajmer', nameHi: 'अजमेर' },
        { id: 'RJ-SIK', name: 'Sikar', nameHi: 'सीकर' }
      ]
    },
    {
      code: 'DL',
      name: 'Delhi (NCT)',
      nameHi: 'दिल्ली',
      districts: [
        { id: 'DL-NDL', name: 'New Delhi', nameHi: 'नई दिल्ली' },
        { id: 'DL-CDL', name: 'Central Delhi', nameHi: 'सेंट्रल दिल्ली' },
        { id: 'DL-SDL', name: 'South Delhi', nameHi: 'साउथ दिल्ली' },
        { id: 'DL-NDL2', name: 'North Delhi', nameHi: 'नॉर्थ दिल्ली' },
        { id: 'DL-EDL', name: 'East Delhi', nameHi: 'ईस्ट दिल्ली' },
        { id: 'DL-WDL', name: 'West Delhi', nameHi: 'वेस्ट दिल्ली' },
        { id: 'DL-SWDL', name: 'South West Delhi', nameHi: 'साउथ वेस्ट दिल्ली' },
        { id: 'DL-NWD', name: 'North West Delhi', nameHi: 'नॉर्थ वेस्ट दिल्ली' }
      ]
    },
    {
      code: 'WB',
      name: 'West Bengal',
      nameHi: 'पश्चिम बंगाल',
      districts: [
        { id: 'WB-KOL', name: 'Kolkata', nameHi: 'कोलकाता' },
        { id: 'WB-HOW', name: 'Howrah', nameHi: 'हावड़ा' },
        { id: 'WB-N24', name: 'North 24 Parganas', nameHi: 'उत्तर 24 परगना' },
        { id: 'WB-DAR', name: 'Darjeeling (Siliguri)', nameHi: 'दार्जिलिंग (सिलीगुड़ी)' },
        { id: 'WB-BUR', name: 'Paschim Bardhaman (Asansol/Durgapur)', nameHi: 'आसनसोल/दुर्गापुर' }
      ]
    },
    {
      code: 'MH',
      name: 'Maharashtra',
      nameHi: 'महाराष्ट्र',
      districts: [
        { id: 'MH-MUM', name: 'Mumbai City', nameHi: 'मुंबई' },
        { id: 'MH-MSU', name: 'Mumbai Suburban', nameHi: 'मुंबई उपनगर' },
        { id: 'MH-PUN', name: 'Pune', nameHi: 'पुणे' },
        { id: 'MH-NAG', name: 'Nagpur', nameHi: 'नागपुर' },
        { id: 'MH-THA', name: 'Thane', nameHi: 'ठाणे' },
        { id: 'MH-NAS', name: 'Nashik', nameHi: 'नासिक' },
        { id: 'MH-AUR', name: 'Chhatrapati Sambhajinagar', nameHi: 'छत्रपति संभाजीनगर' }
      ]
    },
    {
      code: 'KA',
      name: 'Karnataka',
      nameHi: 'कर्नाटक',
      districts: [
        { id: 'KA-BLR', name: 'Bengaluru Urban', nameHi: 'बेंगलुरु अर्बन' },
        { id: 'KA-MYS', name: 'Mysuru', nameHi: 'मैसूरु' },
        { id: 'KA-MAN', name: 'Mangaluru', nameHi: 'मंगलुरु' },
        { id: 'KA-HUB', name: 'Hubballi-Dharwad', nameHi: 'हुबली-धारवाड़' }
      ]
    },
    {
      code: 'TS',
      name: 'Telangana',
      nameHi: 'तेलंगाना',
      districts: [
        { id: 'TS-HYD', name: 'Hyderabad', nameHi: 'हैदराबाद' },
        { id: 'TS-RAN', name: 'Ranga Reddy', nameHi: 'रंगारेड्डी' },
        { id: 'TS-MED', name: 'Medchal-Malkajgiri', nameHi: 'मेडचल' },
        { id: 'TS-WAR', name: 'Warangal', nameHi: 'वारंगल' }
      ]
    },
    {
      code: 'TN',
      name: 'Tamil Nadu',
      nameHi: 'तमिलनाडु',
      districts: [
        { id: 'TN-CHE', name: 'Chennai', nameHi: 'चेन्नई' },
        { id: 'TN-COI', name: 'Coimbatore', nameHi: 'कोयंबटूर' },
        { id: 'TN-MAD', name: 'Madurai', nameHi: 'मदुरै' }
      ]
    },
    {
      code: 'GJ',
      name: 'Gujarat',
      nameHi: 'गुजरात',
      districts: [
        { id: 'GJ-AHM', name: 'Ahmedabad', nameHi: 'अहमदाबाद' },
        { id: 'GJ-SUR', name: 'Surat', nameHi: 'सूरत' },
        { id: 'GJ-VAD', name: 'Vadodara', nameHi: 'वडोदरा' },
        { id: 'GJ-RAJ', name: 'Rajkot', nameHi: 'राजकोट' }
      ]
    },
    {
      code: 'HR',
      name: 'Haryana',
      nameHi: 'हरियाणा',
      districts: [
        { id: 'HR-GUR', name: 'Gurugram', nameHi: 'गुरुग्राम' },
        { id: 'HR-FAR', name: 'Faridabad', nameHi: 'फरीदाबाद' },
        { id: 'HR-ROH', name: 'Rohtak', nameHi: 'रोहतक' },
        { id: 'HR-HIS', name: 'Hisar', nameHi: 'हिसार' }
      ]
    },
    {
      code: 'PB',
      name: 'Punjab',
      nameHi: 'पंजाब',
      districts: [
        { id: 'PB-LUD', name: 'Ludhiana', nameHi: 'लुधियाना' },
        { id: 'PB-AMR', name: 'Amritsar', nameHi: 'अमृतसर' },
        { id: 'PB-JAL', name: 'Jalandhar', nameHi: 'जालंधर' },
        { id: 'PB-PAT', name: 'Patiala', nameHi: 'पटियाला' }
      ]
    },
    {
      code: 'CH',
      name: 'Chandigarh (UT)',
      nameHi: 'चंडीगढ़',
      districts: [
        { id: 'CH-CHD', name: 'Chandigarh', nameHi: 'चंडीगढ़' }
      ]
    },
    {
      code: 'UK',
      name: 'Uttarakhand',
      nameHi: 'उत्तराखंड',
      districts: [
        { id: 'UK-DEH', name: 'Dehradun', nameHi: 'देहरादून' },
        { id: 'UK-HAR', name: 'Haridwar', nameHi: 'हरिद्वार' },
        { id: 'UK-NAI', name: 'Nainital (Haldwani)', nameHi: 'हल्द्वानी/नैनीताल' }
      ]
    },
    {
      code: 'HP',
      name: 'Himachal Pradesh',
      nameHi: 'हिमाचल प्रदेश',
      districts: [
        { id: 'HP-SHI', name: 'Shimla', nameHi: 'शिमला' },
        { id: 'HP-KAN', name: 'Kangra (Dharamshala)', nameHi: 'कांगड़ा/धर्मशाला' }
      ]
    },
    {
      code: 'OD',
      name: 'Odisha',
      nameHi: 'ओडिशा',
      districts: [
        { id: 'OD-BHU', name: 'Khurda (Bhubaneswar)', nameHi: 'भुवनेश्वर' },
        { id: 'OD-CUT', name: 'Cuttack', nameHi: 'कटक' },
        { id: 'OD-ROU', name: 'Sundargarh (Rourkela)', nameHi: 'राउरकेला' }
      ]
    },
    {
      code: 'CG',
      name: 'Chhattisgarh',
      nameHi: 'छत्तीसगढ़',
      districts: [
        { id: 'CG-RAI', name: 'Raipur', nameHi: 'रायपुर' },
        { id: 'CG-DUR', name: 'Durg (Bhilai)', nameHi: 'दुर्ग (भिलाई)' },
        { id: 'CG-BIL', name: 'Bilaspur', nameHi: 'बिलासपुर' }
      ]
    },
    {
      code: 'AS',
      name: 'Assam',
      nameHi: 'असम',
      districts: [
        { id: 'AS-KAM', name: 'Kamrup Metropolitan (Guwahati)', nameHi: 'गुवाहाटी' },
        { id: 'AS-DIB', name: 'Dibrugarh', nameHi: 'डिब्रूगढ़' },
        { id: 'AS-SIL', name: 'Cachar (Silchar)', nameHi: 'सिलचर' }
      ]
    },
    {
      code: 'KL',
      name: 'Kerala',
      nameHi: 'केरल',
      districts: [
        { id: 'KL-TVM', name: 'Thiruvananthapuram', nameHi: 'तिरुवनंतपुरम' },
        { id: 'KL-EKM', name: 'Ernakulam (Kochi)', nameHi: 'कोच्चि' },
        { id: 'KL-KOZ', name: 'Kozhikode', nameHi: 'कोझिकोड' }
      ]
    },
    {
      code: 'AP',
      name: 'Andhra Pradesh',
      nameHi: 'आंध्र प्रदेश',
      districts: [
        { id: 'AP-VIS', name: 'Visakhapatnam', nameHi: 'विशाखापट्टनम' },
        { id: 'AP-VIJ', name: 'Vijayawada (NTR)', nameHi: 'विजयवाड़ा' },
        { id: 'AP-TIR', name: 'Tirupati', nameHi: 'तिरुपति' }
      ]
    },
    {
      code: 'JK',
      name: 'Jammu and Kashmir (UT)',
      nameHi: 'जम्मू और कश्मीर',
      districts: [
        { id: 'JK-SRI', name: 'Srinagar', nameHi: 'श्रीनगर' },
        { id: 'JK-JAM', name: 'Jammu', nameHi: 'जम्मू' }
      ]
    },
    {
      code: 'GA',
      name: 'Goa',
      nameHi: 'गोवा',
      districts: [
        { id: 'GA-NGA', name: 'North Goa', nameHi: 'उत्तर गोवा' },
        { id: 'GA-SGA', name: 'South Goa', nameHi: 'दक्षिण गोवा' }
      ]
    },
    {
      code: 'TR',
      name: 'Tripura',
      nameHi: 'त्रिपुरा',
      districts: [{ id: 'TR-WTR', name: 'West Tripura (Agartala)', nameHi: 'अगरतला' }]
    },
    {
      code: 'ML',
      name: 'Meghalaya',
      nameHi: 'मेघालय',
      districts: [{ id: 'ML-EKH', name: 'East Khasi Hills (Shillong)', nameHi: 'शिलांग' }]
    },
    {
      code: 'MN',
      name: 'Manipur',
      nameHi: 'मणिपुर',
      districts: [{ id: 'MN-IWE', name: 'Imphal West', nameHi: 'इम्फाल' }]
    },
    {
      code: 'NL',
      name: 'Nagaland',
      nameHi: 'नागालैंड',
      districts: [{ id: 'NL-DIM', name: 'Dimapur', nameHi: 'दीमापुर' }, { id: 'NL-KOH', name: 'Kohima', nameHi: 'कोहिमा' }]
    },
    {
      code: 'MZ',
      name: 'Mizoram',
      nameHi: 'मिजोरम',
      districts: [{ id: 'MZ-AIZ', name: 'Aizawl', nameHi: 'आइजोल' }]
    },
    {
      code: 'AR',
      name: 'Arunachal Pradesh',
      nameHi: 'अरुणाचल प्रदेश',
      districts: [{ id: 'AR-PAP', name: 'Papum Pare (Itanagar)', nameHi: 'ईटानगर' }]
    },
    {
      code: 'SK',
      name: 'Sikkim',
      nameHi: 'सिक्किम',
      districts: [{ id: 'SK-EAS', name: 'Gangtok', nameHi: 'गंगटोक' }]
    },
    {
      code: 'PY',
      name: 'Puducherry (UT)',
      nameHi: 'पुदुचेरी',
      districts: [{ id: 'PY-PDY', name: 'Puducherry', nameHi: 'पुदुचेरी' }]
    },
    {
      code: 'LA',
      name: 'Ladakh (UT)',
      nameHi: 'लद्दाख',
      districts: [{ id: 'LA-LEH', name: 'Leh', nameHi: 'लेह' }, { id: 'LA-KAR', name: 'Kargil', nameHi: 'कारगिल' }]
    },
    {
      code: 'AN',
      name: 'Andaman & Nicobar (UT)',
      nameHi: 'अंडमान और निकोबार',
      districts: [{ id: 'AN-SND', name: 'South Andaman (Port Blair)', nameHi: 'पोर्ट ब्लेयर' }]
    },
    {
      code: 'DH',
      name: 'Dadra, Nagar Haveli & Daman & Diu (UT)',
      nameHi: 'दादरा और नगर हवेली',
      districts: [{ id: 'DH-DAM', name: 'Daman', nameHi: 'दमन' }, { id: 'DH-SIL', name: 'Silvassa', nameHi: 'सिलवासा' }]
    },
    {
      code: 'LD',
      name: 'Lakshadweep (UT)',
      nameHi: 'लक्षद्वीप',
      districts: [{ id: 'LD-KAV', name: 'Kavaratti', nameHi: 'कवरत्ती' }]
    }
  ];

  return {
    version: '1.0.0',
    countryCode: 'IN',
    countryName: 'India',
    states: states,

    getStates: function () {
      return states.map(function (s) {
        return { code: s.code, name: s.name, nameHi: s.nameHi };
      });
    },

    getDistrictsByState: function (stateQuery) {
      if (!stateQuery) return [];
      var q = String(stateQuery).trim().toLowerCase();
      var found = states.filter(function (s) {
        return s.code.toLowerCase() === q ||
               s.name.toLowerCase() === q ||
               s.nameHi.toLowerCase() === q;
      })[0];
      return found ? found.districts : [];
    },

    matchQuery: function (query) {
      if (!query) return [];
      var q = String(query).trim().toLowerCase();
      var results = [];
      states.forEach(function (s) {
        s.districts.forEach(function (d) {
          if (d.name.toLowerCase().indexOf(q) !== -1 ||
              d.nameHi.toLowerCase().indexOf(q) !== -1 ||
              s.name.toLowerCase().indexOf(q) !== -1 ||
              s.nameHi.toLowerCase().indexOf(q) !== -1) {
            results.push({
              stateCode: s.code,
              stateName: s.name,
              stateNameHi: s.nameHi,
              districtId: d.id,
              districtName: d.name,
              districtNameHi: d.nameHi
            });
          }
        });
      });
      return results;
    }
  };
}));
