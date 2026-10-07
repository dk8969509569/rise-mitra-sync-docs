/**
 * RISE MITRA — SOVEREIGN PROFILE, NETWORK & CONTROL HUB ENGINE
 * SPECIFICATION : FOLDER A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/profile-hub-engine.js
 * GOVERNANCE    : GATE-25.0 | FINANCIAL FREEDOM & NETWORK PARTNERSHIP | 100% ZEL
 */

(function (window, document) {
  'use strict';

  var STORAGE_KEY_AVATAR = 'rm_user_avatar_base64';

  // Angel One style clean vector fintech silhouette
  var DEFAULT_SILHOUETTE_SVG = [
    '<svg class="w-full h-full text-slate-200 fill-current p-0.5" viewBox="0 0 24 24">',
    '  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>',
    '</svg>'
  ].join('');

  var profileState = {
    userName: 'Diwakar Kumar',
    clientId: 'USR-***489',
    rawClientId: 'RM-IN-489201',
    partnerRank: 'Sovereign Crown Partner',
    teamSize: '142 Partners',
    networkVolume: '₹3,48,200',
    phoneMasked: '+91 98XXXXXX89',
    panMasked: 'ABCDE****F',
    bankAccountMasked: 'SBI •••• 4210',
    kycStatus: 'VERIFIED_OFFLINE',
    dpdpStatus: 'COMPLIANT_SECURE',
    appVersion: 'RM WORLD v1.0.4 (Build 20261007)'
  };

  function getSavedAvatar() {
    try {
      return localStorage.getItem(STORAGE_KEY_AVATAR) || '';
    } catch (e) {
      return '';
    }
  }

  function saveAvatar(base64Data) {
    try {
      if (base64Data) {
        localStorage.setItem(STORAGE_KEY_AVATAR, base64Data);
      } else {
        localStorage.removeItem(STORAGE_KEY_AVATAR);
      }
    } catch (e) {
      console.warn('Avatar storage failed:', e);
    }
    syncAllAvatars();
  }

  function syncAllAvatars() {
    var avatarData = getSavedAvatar();
    
    // 1. Sync Header Avatar (Top-Right)
    var headerAvatar = document.getElementById('header-user-avatar');
    if (headerAvatar) {
      if (avatarData) {
        headerAvatar.innerHTML = '<img src="' + avatarData + '" alt="Profile" class="w-full h-full object-cover rounded-full" />';
      } else {
        headerAvatar.innerHTML = DEFAULT_SILHOUETTE_SVG;
      }
    }

    // 2. Sync Profile Hub Modal Avatar
    var modalAvatar = document.getElementById('profile-hub-avatar');
    if (modalAvatar) {
      if (avatarData) {
        modalAvatar.innerHTML = '<img src="' + avatarData + '" alt="Profile" class="w-full h-full object-cover rounded-full" />';
      } else {
        modalAvatar.innerHTML = '<div class="w-full h-full flex items-center justify-center p-2.5">' + DEFAULT_SILHOUETTE_SVG + '</div>';
      }
    }
  }

  // Handle Photo Picker & Compression (offline friendly)
  function handlePhotoSelect(event) {
    var file = event.target.files && event.target.files[0];
    if (!file) return;

    var reader = new FileReader();
    reader.onload = function (e) {
      var img = new Image();
      img.onload = function () {
        // Compress & scale to 200x200 square
        var canvas = document.createElement('canvas');
        var maxSide = 200;
        var w = img.width;
        var h = img.height;
        var size = Math.min(w, h);
        var sx = (w - size) / 2;
        var sy = (h - size) / 2;

        canvas.width = maxSide;
        canvas.height = maxSide;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, sx, sy, size, size, 0, 0, maxSide, maxSide);

        var compressedBase64 = canvas.toDataURL('image/jpeg', 0.82);
        saveAvatar(compressedBase64);
        alert('प्रोफ़ाइल फ़ोटो सफलतापूर्वक सेट हो गई!');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  function renderProfileHub(container) {
    if (!container) return;

    var savedAvatar = getSavedAvatar();
    var avatarInnerHtml = savedAvatar
      ? '<img src="' + savedAvatar + '" alt="Profile" class="w-full h-full object-cover rounded-full" />'
      : '<div class="w-full h-full flex items-center justify-center p-2.5">' + DEFAULT_SILHOUETTE_SVG + '</div>';

    container.innerHTML = [
      '<div class="w-full max-w-md mx-auto text-slate-100 font-sans pb-12 space-y-4">',

      // Hidden File Input for Camera / Gallery
      '  <input type="file" id="rm-avatar-file-input" accept="image/*" class="hidden" onchange="window.RM_ProfileHub.handlePhoto(event)" />',

      // 1. Top Bar
      '  <div class="flex items-center justify-between pb-2 border-b border-slate-800/80">',
      '    <div class="flex items-center space-x-3">',
      '      <button type="button" onclick="window.closeFullscreenModule()" class="text-xl text-slate-300 hover:text-white cursor-pointer px-1 py-0.5">←</button>',
      '      <h2 class="text-base font-black tracking-wide text-white">Profile & Sovereign Hub</h2>',
      '    </div>',
      '    <button type="button" onclick="alert(\'सूचना केंद्र: आपके 3 नए पार्टनर जुड़ चुके हैं व रॉयल्टी क्रेडिट उपलब्ध है!\')" class="text-slate-400 hover:text-white p-1.5 cursor-pointer">🔔</button>',
      '  </div>',

      // 2. Identity Card with Interactive Photo Upload
      '  <div class="bg-gradient-to-b from-[#111a30] to-[#0d1424] border border-slate-800 rounded-2xl p-4 shadow-lg">',
      '    <div class="flex items-center space-x-3.5">',
      '      <div class="relative cursor-pointer group" onclick="document.getElementById(\'rm-avatar-file-input\').click()" title="फ़ोटो बदलें">',
      '        <div id="profile-hub-avatar" class="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center shadow-inner border-2 border-cyan-400/50 overflow-hidden">',
      '          ' + avatarInnerHtml,
      '        </div>',
      '        <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border border-slate-900 flex items-center justify-center text-[11px] shadow-md group-hover:scale-110 transition-transform">',
      '          📷',
      '        </div>',
      '      </div>',
      '      <div class="flex-1 min-w-0">',
      '        <div class="flex items-center space-x-2">',
      '          <h3 class="text-base font-black text-white truncate">' + profileState.userName + '</h3>',
      '          <span class="text-[9px] bg-emerald-950 text-emerald-400 border border-emerald-700/60 px-1.5 py-0.5 rounded font-bold">सत्यापित</span>',
      '        </div>',
      '        <div class="flex items-center space-x-2 mt-0.5 text-xs text-slate-400 font-mono">',
      '          <span>Client ID</span>',
      '          <span class="bg-slate-900 border border-slate-700/80 text-cyan-300 px-2 py-0.5 rounded font-bold">' + profileState.clientId + '</span>',
      '          <button type="button" onclick="navigator.clipboard.writeText(\'' + profileState.rawClientId + '\'); alert(\'Client ID कॉपी हो गया: ' + profileState.rawClientId + '\');" class="text-slate-400 hover:text-cyan-300">📋</button>',
      '        </div>',
      '        <div class="mt-1 flex items-center space-x-2">',
      '          <span class="text-[10px] text-amber-300 font-bold bg-amber-950/60 border border-amber-700/40 px-1.5 py-0.2 rounded">👑 ' + profileState.partnerRank + '</span>',
      '          <span class="text-slate-600">•</span>',
      '          <button type="button" onclick="document.getElementById(\'rm-avatar-file-input\').click()" class="text-[10px] text-cyan-400 hover:underline font-bold">फ़ोटो बदलें</button>',
      '          <span class="text-slate-600">•</span>',
      '          <button type="button" onclick="if(confirm(\'क्या आप फ़ोटो हटाना चाहते हैं?\')) window.RM_ProfileHub.removePhoto();" class="text-[10px] text-slate-400 hover:text-red-400">हटाएं</button>',
      '        </div>',
      '      </div>',
      '    </div>',

      // 3. 4 Core Quick Tiles (Financial Freedom & Network Power)
      '    <div class="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800/80">',
      '      <div onclick="alert(\'व्यक्तिगत विवरण, आधार व व्यापार KYC खुला\')" class="cursor-pointer bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 p-2.5 rounded-xl flex items-center space-x-2.5 transition-all">',
      '        <span class="text-lg">🪪</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Personal Details</div>',
      '          <div class="text-[9px] text-slate-400">व्यापार व आधार KYC</div>',
      '        </div>',
      '      </div>',
      '      <div onclick="alert(\'पार्टनर नेटवर्क: ' + profileState.teamSize + ' | कुल वॉल्यूम: ' + profileState.networkVolume + '\')" class="cursor-pointer bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 p-2.5 rounded-xl flex items-center space-x-2.5 transition-all">',
      '        <span class="text-lg">🤝</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Partner Network</div>',
      '          <div class="text-[9px] text-amber-400 font-bold">' + profileState.teamSize + ' सक्रिय</div>',
      '        </div>',
      '      </div>',
      '      <div onclick="window.handleQuickTileClick(\'c13\')" class="cursor-pointer bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 p-2.5 rounded-xl flex items-center space-x-2.5 transition-all">',
      '        <span class="text-lg">💼</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Sovereign Vault</div>',
      '          <div class="text-[9px] text-emerald-400 font-bold">नकद व गिरवी लेज़र</div>',
      '        </div>',
      '      </div>',
      '      <div onclick="alert(\'खाता विवरणी व रिपोर्ट्स लोड हो रहे हैं...\')" class="cursor-pointer bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 p-2.5 rounded-xl flex items-center space-x-2.5 transition-all">',
      '        <span class="text-lg">📊</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Reports</div>',
      '          <div class="text-[9px] text-slate-400">बहीखाता स्टेटमेंट P&L</div>',
      '        </div>',
      '      </div>',
      '    </div>',
      '  </div>',

      // 4. Section: Sovereign Partnership Program (Financial Freedom & Network Power)
      '  <div class="bg-gradient-to-b from-[#111a30] to-[#0d1424] border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/70">',
      '    <div class="px-4 py-2.5 bg-slate-900/60 flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-amber-400">',
      '      <span>👑 Sovereign Partnership Program</span>',
      '      <span class="text-[9px] text-slate-400 font-normal">वित्तीय स्वतंत्रता मॉडल</span>',
      '    </div>',
      '    <div onclick="alert(\'राइज मित्रा रेवेन्यू व रॉयल्टी प्लान खुल रहा है — 0% कॉर्पोरेट कमीशन, 100% कम्युनिटी पेआउट\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-amber-400">📈</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Partnership Revenue Plan</div>',
      '          <div class="text-[10px] text-slate-400">12 कोर वर्टिकल्स रॉयल्टी व डिस्ट्रीब्यूशन ब्लूप्रिंट</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '    <div onclick="alert(\'नया एसोसिएट पार्टनर ई-केवाईसी फ़ॉर्म खुल रहा है...\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-cyan-400">📝</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">E-KYC Application for New Partner</div>',
      '          <div class="text-[10px] text-slate-400">नए पार्टनर व दुकानदार को नेटवर्क में जोड़ें</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '    <div onclick="alert(\'माई नेटवर्क ट्री व वॉल्यूम स्थिति: डायरेक्ट पार्टनर्स: 18 | कुल नेटवर्क: 142\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-emerald-400">🌳</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">My Network & Business Volume</div>',
      '          <div class="text-[10px] text-emerald-400">सक्रिय टीम, लेवल ट्री व मासिक इंसेंटिव</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '    <div onclick="alert(\'डाउनलोड रिसोर्स हब: बिजनेस प्लान PDF, QR स्टैंडी व एग्रीमेंट ड्राफ्ट्स\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-blue-400">📥</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Downloads & Marketing Materials</div>',
      '          <div class="text-[10px] text-slate-400">प्लान PDF, दुकान बैनर व कानूनी अनुबंध ड्राफ्ट</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '  </div>',

      // 5. Section: Manage Account & Direct Settlements
      '  <div class="bg-gradient-to-b from-[#111a30] to-[#0d1424] border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/70">',
      '    <div class="px-4 py-2.5 bg-slate-900/60 text-[11px] font-black uppercase tracking-wider text-slate-400">Manage Account & Payouts</div>',
      '    <div onclick="alert(\'बैंक खाता व UPI सेटलमेंट: ' + profileState.bankAccountMasked + '\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-slate-400">🏦</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Bank Accounts & UPI</div>',
      '          <div class="text-[10px] text-slate-400">दुकान का बैंक व दैनिक नेटवर्क पेआउट</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-[10px] text-emerald-400 font-mono font-bold">' + profileState.bankAccountMasked + '</span>',
      '    </div>',
      '    <div onclick="alert(\'पैन विवरण सत्यापित: ' + profileState.panMasked + ' (TDS कंप्लायंट)\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-slate-400">💳</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Fill PAN Details</div>',
      '          <div class="text-[10px] text-slate-400">TDS कटौती व आयकर कंप्लायंस</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-[10px] text-cyan-400 font-mono font-bold">' + profileState.panMasked + '</span>',
      '    </div>',
      '    <div onclick="alert(\'सुरक्षित मोबाइल नंबर बदलाव फ़ॉर्म खुल रहा है (OTP सत्यापन आवश्यक)\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-slate-400">📱</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Mobile Number & 2FA Change</div>',
      '          <div class="text-[10px] text-slate-400">सुरक्षित मोबाइल बदलाव व लॉगिन सुरक्षा</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '    <div onclick="alert(\'डेस्कटॉप QR कोड स्कैनर खुला — लैपटॉप पर बहीखाता सिंक करें\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-slate-400">💻</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Scan for Desktop Log In</div>',
      '          <div class="text-[10px] text-slate-400">कंप्यूटर/लैपटॉप पर वेब बहीखाता सिंक करें</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '    <div onclick="alert(\'12 कोर वर्टिकल्स एक्सेस अनुमति व सेगमेंट सेटिंग्स खुलीं\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-slate-400">⚙️</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Manage Segments</div>',
      '          <div class="text-[10px] text-slate-400">सक्रिय 12 कोर वर्टिकल्स व अनुमतियां</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '  </div>',

      // 6. Section: Social Activities & Care (Health & Environment)
      '  <div class="bg-gradient-to-b from-[#111a30] to-[#0d1424] border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/70">',
      '    <div class="px-4 py-2.5 bg-slate-900/60 flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-rose-400">',
      '      <span>🩸 Social Activities & Care</span>',
      '      <span class="text-[9px] text-slate-400 font-normal">स्वास्थ्य और स्वावलंबन</span>',
      '    </div>',
      '    <div onclick="alert(\'आपत्कालीन रक्तदाता खोज व रजिस्ट्रेशन: सक्रिय रक्तदाता उपलब्ध हैं\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-rose-400">🩸</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Blood Donor Directory</div>',
      '          <div class="text-[10px] text-slate-400">आपातकालीन रक्तदाता खोजें या खुद रक्तदान रजिस्टर करें</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '    <div onclick="alert(\'ग्रीन मित्रा वृक्षारोपण अभियान: पौधा लगाएं और पर्यावरण वाउचर प्राप्त करें\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-emerald-400">🌱</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Green Mitra Plantation</div>',
      '          <div class="text-[10px] text-slate-400">वृक्षारोपण अभियान व पर्यावरण वाउचर रिवॉर्ड्स</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '  </div>',

      // 7. Section: Sovereignty, Privacy & Security (DPDP Act 2023)
      '  <div class="bg-gradient-to-b from-[#111a30] to-[#0d1424] border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/70">',
      '    <div class="px-4 py-2.5 bg-slate-900/60 text-[11px] font-black uppercase tracking-wider text-slate-400">सुरक्षा व गोपनीयता (DPDP Act)</div>',
      '    <div onclick="alert(\'खाता अस्थायी रूप से फ्रीज कर दिया गया है — ऑफलाइन डेटा सुरक्षित है\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-amber-400">🛡️</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Freeze Account</div>',
      '          <div class="text-[10px] text-slate-400">अस्थायी रूप से बहीखाता लॉक करें</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '    <div onclick="alert(\'सॉवरेन डेटा एन्क्रिप्टेड JSON बैकअप डाउनलोड हो गया\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-cyan-400">💾</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Export Offline Data</div>',
      '          <div class="text-[10px] text-slate-400">संपूर्ण खाता व लेज़र का सुरक्षित बैकअप</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '  </div>',

      // 8. Section: Official Channels, Grievance & Support
      '  <div class="bg-gradient-to-b from-[#111a30] to-[#0d1424] border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/70">',
      '    <div class="px-4 py-2.5 bg-slate-900/60 text-[11px] font-black uppercase tracking-wider text-slate-400">Official Channels & Support</div>',
      '    <div onclick="window.open(\'https://whatsapp.com/channel/RiseMitraOfficial\', \'_blank\');" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-emerald-400">📢</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">WhatsApp Official Channel</div>',
      '          <div class="text-[10px] text-slate-400">दैनिक पेआउट अपडेट्स व आधिकारिक घोषणाएं</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-emerald-400 font-bold">जुड़ें ›</span>',
      '    </div>',
      '    <div onclick="alert(\'ग्राहक व पार्टनर शिकायत निवारण फ़ॉर्म खुला — 24 से 48 घंटे में समाधान\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-cyan-400">📨</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Customer Grievance Redressal</div>',
      '          <div class="text-[10px] text-slate-400">विधिक शिकायत निवारण व टिकट ट्रैकिंग</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '    <div onclick="alert(\'AI मित्र चैट सहायक खुल रहा है...\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-blue-400">✨</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Ask RM Mitra</div>',
      '          <div class="text-[10px] text-slate-400">24x7 बहीखाता व स्व-रोजगार AI सहायक</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '    <div onclick="alert(\'हेल्पलाइन: 1800-RISE-MITRA पर कॉल कनेक्ट हो रही है...\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-emerald-400">📞</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Call Us</div>',
      '          <div class="text-[10px] text-slate-400">स्थानीय सहायता डेस्क से संपर्क करें</div>',
      '        </div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '    <div onclick="alert(\'Rise Mitra — 0% Commission Physical Economy Super App\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-slate-400">ℹ️</span>',
      '        <div class="text-xs font-bold text-slate-200">About Rise Mitra</div>',
      '      </div>',
      '      <span class="text-xs text-slate-500">›</span>',
      '    </div>',
      '  </div>',

      // 9. Footer: Log Out & App Version
      '  <div class="pt-2 text-center space-y-2">',
      '    <button type="button" onclick="if(confirm(\'क्या आप सत्र समाप्त (Log Out) करना चाहते हैं?\')) { window.closeFullscreenModule(); alert(\'सुरक्षित रूप से लॉग आउट हो गए\'); }" class="w-full py-2.5 rounded-xl border border-red-900/60 bg-red-950/40 text-red-400 font-bold text-xs hover:bg-red-950/70 transition-all cursor-pointer">',
      '      Log Out',
      '    </button>',
      '    <div class="text-[10px] font-mono text-slate-500">' + profileState.appVersion + '</div>',
      '  </div>',

      '</div>'
    ].join('\n');
  }

  // Global Engine Mount API
  window.RM_ProfileHub = {
    mount: renderProfileHub,
    open: function () {
      if (typeof window.openFullscreenModule === 'function') {
        window.openFullscreenModule('👤 Profile & Sovereign Hub');
        var container = document.getElementById('rm-module-container');
        if (container) renderProfileHub(container);
      }
    },
    handlePhoto: handlePhotoSelect,
    removePhoto: function () {
      saveAvatar('');
      alert('फ़ोटो हटा दी गई — डिफ़ॉल्ट सिलुएट बहाल हो गया!');
    },
    syncAvatars: syncAllAvatars
  };

  // Auto-sync avatar on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncAllAvatars);
  } else {
    syncAllAvatars();
  }

})(typeof window !== 'undefined' ? window : this, typeof document !== 'undefined' ? document : null);
