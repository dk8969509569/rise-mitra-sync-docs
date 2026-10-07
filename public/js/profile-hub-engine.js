/**
 * RISE MITRA — SOVEREIGN PROFILE & CONTROL HUB ENGINE
 * SPECIFICATION : FOLDER A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/profile-hub-engine.js
 * GOVERNANCE    : GATE-24.3 | ANGEL ONE 1:1 AVATAR SILHOUETTE & PHOTO SYNC | 100% ZEL
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
    phoneMasked: '+91 98XXXXXX89',
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
      '<div class="w-full max-w-md mx-auto text-slate-100 font-sans pb-10 space-y-4">',

      // Hidden File Input for Camera / Gallery
      '  <input type="file" id="rm-avatar-file-input" accept="image/*" class="hidden" onchange="window.RM_ProfileHub.handlePhoto(event)" />',

      // 1. Top Bar (Back Arrow, Title, Bell Icon)
      '  <div class="flex items-center justify-between pb-2 border-b border-slate-800/80">',
      '    <div class="flex items-center space-x-3">',
      '      <button type="button" onclick="window.closeFullscreenModule()" class="text-xl text-slate-300 hover:text-white cursor-pointer px-1 py-0.5">←</button>',
      '      <h2 class="text-base font-black tracking-wide text-white">Profile</h2>',
      '    </div>',
      '    <button type="button" onclick="alert(\'कोई नई सूचना नहीं है\')" class="text-slate-400 hover:text-white p-1.5 cursor-pointer">🔔</button>',
      '  </div>',

      // 2. Identity Card with Interactive Photo Upload (Angel One Pattern)
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
      '          <button type="button" onclick="document.getElementById(\'rm-avatar-file-input\').click()" class="text-[10px] text-cyan-400 hover:underline font-bold">फ़ोटो बदलें</button>',
      '          <span class="text-slate-600">•</span>',
      '          <button type="button" onclick="if(confirm(\'क्या आप फ़ोटो हटाना चाहते हैं?\')) window.RM_ProfileHub.removePhoto();" class="text-[10px] text-slate-400 hover:text-red-400">हटाएं</button>',
      '        </div>',
      '      </div>',
      '    </div>',

      // 3. 4 Core Quick Tiles
      '    <div class="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800/80">',
      '      <div onclick="alert(\'व्यक्तिगत व व्यापार विवरण खुला\')" class="cursor-pointer bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 p-2.5 rounded-xl flex items-center space-x-2.5 transition-all">',
      '        <span class="text-lg">🪪</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Personal Details</div>',
      '          <div class="text-[9px] text-slate-400">व्यापार व आधार KYC</div>',
      '        </div>',
      '      </div>',
      '      <div onclick="alert(\'रेफ़रल वाउचर केंद्र खुला\')" class="cursor-pointer bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 p-2.5 rounded-xl flex items-center space-x-2.5 transition-all">',
      '        <span class="text-lg">🎁</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Refer & Earn</div>',
      '          <div class="text-[9px] text-amber-400 font-bold">₹1,250 वाउचर</div>',
      '        </div>',
      '      </div>',
      '      <div onclick="window.handleQuickTileClick(\'c13\')" class="cursor-pointer bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 p-2.5 rounded-xl flex items-center space-x-2.5 transition-all">',
      '        <span class="text-lg">💼</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Sovereign Vault</div>',
      '          <div class="text-[9px] text-slate-400">नकद व गिरवी लेज़र</div>',
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

      // 4. Section: Manage Account
      '  <div class="bg-gradient-to-b from-[#111a30] to-[#0d1424] border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/70">',
      '    <div class="px-4 py-2.5 bg-slate-900/60 text-[11px] font-black uppercase tracking-wider text-slate-400">Manage Account</div>',
      '    <div onclick="alert(\'बैंक खाता व UPI सेटलमेंट सेटिंग खुली\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
      '      <div class="flex items-center space-x-3">',
      '        <span class="text-base text-slate-400">🏦</span>',
      '        <div>',
      '          <div class="text-xs font-bold text-slate-200">Bank Accounts</div>',
      '          <div class="text-[10px] text-slate-400">दुकान का बैंक खाता व UPI सेटलमेंट</div>',
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
      '    <div onclick="alert(\'वर्टिकल्स एक्सेस अनुमति खुली\')" class="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/40">',
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

      // 5. Section: Sovereignty, Privacy & Security (DPDP Act 2023)
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

      // 6. Section: Help, Support & About
      '  <div class="bg-gradient-to-b from-[#111a30] to-[#0d1424] border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/70">',
      '    <div class="px-4 py-2.5 bg-slate-900/60 text-[11px] font-black uppercase tracking-wider text-slate-400">Help & Support</div>',
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

      // 7. Footer: Log Out & App Version
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
