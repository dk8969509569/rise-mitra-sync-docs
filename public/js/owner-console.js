/**
 * RISE MITRA — SOVEREIGN OWNER CONSOLE RUNTIME CONTROLLER
 * MODULE        : public/js/owner-console.js
 * SPECIFICATION : Folder A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * GOVERNANCE    : GATE-23.5 | ZERO-ELEMENT-LOSS (ZEL) | ANTI-BLOAT MODULARITY
 */

(function (window, document) {
  'use strict';

  var SOV_HASH = "202609";
  var SOV_OTP_MOCK = "789012";

  // 100% CANONICAL TAXONOMY: 33 SERVICES & UTILITIES + 17 GAMES
  var MASTER_CATEGORIES = [
    { id: "c01", no: "01", name: "Art & Design (डिज़ाइन व प्रिंट)", icon: "🎨", type: "Service" },
    { id: "c02", no: "02", name: "Auto & Vehicles (वाहन सेवा)", icon: "🚗", type: "Service" },
    { id: "c03", no: "03", name: "Beauty & Salon (ब्यूटी व केयर)", icon: "💄", type: "Service" },
    { id: "c04", no: "04", name: "Books & Reference (किताबें)", icon: "📚", type: "Service" },
    { id: "c05", no: "05", name: "Business (सॉवरेन बहीखाता)", icon: "💼", type: "Service", default: true },
    { id: "c06", no: "06", name: "Comics & Stories (कहानियाँ)", icon: "🎭", type: "Service" },
    { id: "c07", no: "07", name: "Communication (संपर्क)", icon: "💬", type: "Service" },
    { id: "c08", no: "08", name: "Dating & Relations (रिश्ते)", icon: "❤️", type: "Service" },
    { id: "c09", no: "09", name: "Education (हुनर सीखें)", icon: "🎓", type: "Service" },
    { id: "c10", no: "10", name: "Entertainment (मनोरंजन)", icon: "🎬", type: "Service" },
    { id: "c11", no: "11", name: "Events & Pass (कार्यक्रम)", icon: "🎟️", type: "Service" },
    { id: "c12", no: "12", name: "Family & Care (परिवार)", icon: "👨‍👩‍👧", type: "Service" },
    { id: "c13", no: "13", name: "Finance (RM CASH लेज़र)", icon: "💰", type: "Service", default: true },
    { id: "c14", no: "14", name: "Food & Drink (ढाबा व भोजन)", icon: "🍲", type: "Service" },
    { id: "c15", no: "15", name: "Health & Fitness (स्वस्थ मन)", icon: "🌿", type: "Service" },
    { id: "c16", no: "16", name: "House & Home (आवास व मिस्त्री)", icon: "🏠", type: "Service" },
    { id: "c17", no: "17", name: "Libraries & Demo (पुस्तकालय)", icon: "📦", type: "Service" },
    { id: "c18", no: "18", name: "Lifestyle (जीवनशैली)", icon: "🧘", type: "Service" },
    { id: "c19", no: "19", name: "Maps & Navigation (मार्गदर्शन)", icon: "🗺️", type: "Service" },
    { id: "c20", no: "20", name: "Medical (दवाई व वेलनेस)", icon: "💊", type: "Service" },
    { id: "c21", no: "21", name: "Music & Audio (संगीत)", icon: "🎵", type: "Service" },
    { id: "c22", no: "22", name: "News & Magazines (समाचार)", icon: "📰", type: "Service" },
    { id: "c23", no: "23", name: "Parenting (शिशु व मातृत्व)", icon: "🍼", type: "Service" },
    { id: "c24", no: "24", name: "Personalization (थीम्स)", icon: "✨", type: "Service" },
    { id: "c25", no: "25", name: "Photography (स्टूडियो)", icon: "📸", type: "Service" },
    { id: "c26", no: "26", name: "Productivity (रनर डिलीवरी)", icon: "⚡", type: "Service" },
    { id: "c27", no: "27", name: "Shopping (0% किराना स्टोर)", icon: "🛒", type: "Service", default: true },
    { id: "c28", no: "28", name: "Social (चौपाल व नेटवर्क)", icon: "🌐", type: "Service" },
    { id: "c29", no: "29", name: "Sports Community (खेलकूद)", icon: "🏏", type: "Service" },
    { id: "c30", no: "30", name: "Tools (कैलकुलेटर व SaaS)", icon: "🛠️", type: "Service" },
    { id: "c31", no: "31", name: "Travel & Local (यात्रा व पर्यटन)", icon: "✈️", type: "Service" },
    { id: "c32", no: "32", name: "Video Editors (वीडियो संपादन)", icon: "🎞", type: "Service" },
    { id: "c33", no: "33", name: "Weather (मौसम व कृषि)", icon: "☀️", type: "Service" },

    // 17 GAMES
    { id: "g34", no: "34", name: "Action (ऐक्शन)", icon: "🏹", type: "Game" },
    { id: "g35", no: "35", name: "Adventure (साहसिक)", icon: "🧭", type: "Game" },
    { id: "g36", no: "36", name: "Arcade (आर्केड)", icon: "🕹️", type: "Game" },
    { id: "g37", no: "37", name: "Board (लूडो / कैरम)", icon: "🎲", type: "Game" },
    { id: "g38", no: "38", name: "Card (पत्ते)", icon: "🃏", type: "Game" },
    { id: "g39", no: "39", name: "Casino Points (स्पिन व्हील)", icon: "🎡", type: "Game" },
    { id: "g40", no: "40", name: "Casual (कैज़ुअल)", icon: "🎈", type: "Game" },
    { id: "g41", no: "41", name: "Educational (ज्ञानवर्धक)", icon: "🧠", type: "Game" },
    { id: "g42", no: "42", name: "Music (लय व धुन)", icon: "🥁", type: "Game" },
    { id: "g43", no: "43", name: "Puzzle (पहेली)", icon: "🧩", type: "Game" },
    { id: "g44", no: "44", name: "Racing (दौड़)", icon: "🏎️", type: "Game" },
    { id: "g45", no: "45", name: "Role Playing (रोल-प्लेइंग)", icon: "👑", type: "Game" },
    { id: "g46", no: "46", name: "Simulation (सिमुलेशन)", icon: "🚜", type: "Game" },
    { id: "g47", no: "47", name: "Sports (क्रिकेट / कबड्डी)", icon: "🏏", type: "Game" },
    { id: "g48", no: "48", name: "Strategy (शतरंज / रणनीति)", icon: "♟️", type: "Game" },
    { id: "g49", no: "49", name: "Trivia (क्विज़ व सामान्य ज्ञान)", icon: "❓", type: "Game" },
    { id: "g50", no: "50", name: "Word (शब्द रचना)", icon: "🔤", type: "Game" }
  ];

  var activeCategoryIds = new Set();

  var DEFAULT_CAT16_FILTER_CONFIG = {
    filterVisibility: {
      showCountry: false,
      showState: true,
      showDistrict: true,
      showLocality: true,
      smartOmnibox: true,
      budgetSlider: true,
      subMeterOnly: true
    }
  };

  var currentCat16FilterConfig = JSON.parse(JSON.stringify(DEFAULT_CAT16_FILTER_CONFIG));

  // --- IN-SITU HUD CONTROLS ---
  function updateInSituModeUI(isConsoleActive) {
    var badge = document.getElementById("inSituModeBadge");
    var btnPublic = document.getElementById("btnModePublic");
    var btnInSitu = document.getElementById("btnModeInSitu");

    if (isConsoleActive) {
      if (badge) {
        badge.textContent = "IN-SITU CONSOLE ACTIVE";
        badge.className = "text-[9px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-600 px-2 py-0.5 rounded-full";
      }
      if (btnInSitu) {
        btnInSitu.className = "bg-cyan-950 border-2 border-cyan-400 text-xs py-2.5 px-3 rounded-xl text-cyan-200 font-black shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer flex items-center justify-center space-x-1.5";
      }
      if (btnPublic) {
        btnPublic.className = "bg-slate-950 border border-slate-800 text-xs py-2.5 px-3 rounded-xl text-slate-400 font-bold active:scale-95 cursor-pointer flex items-center justify-center space-x-1.5";
      }
    } else {
      if (badge) {
        badge.textContent = "PUBLIC LIVE MODE";
        badge.className = "text-[9px] font-bold bg-slate-900 text-emerald-400 border border-emerald-700/60 px-2 py-0.5 rounded-full";
      }
      if (btnPublic) {
        btnPublic.className = "bg-emerald-950 border-2 border-emerald-400 text-xs py-2.5 px-3 rounded-xl text-emerald-200 font-black shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer flex items-center justify-center space-x-1.5";
      }
      if (btnInSitu) {
        btnInSitu.className = "bg-slate-950 border border-slate-800 text-xs py-2.5 px-3 rounded-xl text-slate-400 font-bold active:scale-95 cursor-pointer flex items-center justify-center space-x-1.5";
      }
    }
  }

  function setInSituMode(enableConsole) {
    if (window.RM_SovereignRegistry && typeof window.RM_SovereignRegistry.setConsoleMode === 'function') {
      window.RM_SovereignRegistry.setConsoleMode(enableConsole);
    } else {
      try {
        var regRaw = localStorage.getItem('rm_sovereign_visibility_registry_v1');
        var reg = regRaw ? JSON.parse(regRaw) : { activeMode: 'public' };
        reg.activeMode = enableConsole ? 'in_situ_console' : 'public';
        localStorage.setItem('rm_sovereign_visibility_registry_v1', JSON.stringify(reg));
      } catch (_) {}
    }

    if (enableConsole) {
      sessionStorage.setItem('rm_sov_in_situ_session', 'SOV_ACTIVE_2026');
      localStorage.setItem('rm_sov_in_situ_session', 'SOV_ACTIVE_2026');
    } else {
      sessionStorage.removeItem('rm_sov_in_situ_session');
      localStorage.removeItem('rm_sov_in_situ_session');
    }

    updateInSituModeUI(enableConsole);
  }

  function checkInSituModeState() {
    var isConsole = false;
    if (window.RM_SovereignRegistry && typeof window.RM_SovereignRegistry.isConsoleModeActive === 'function') {
      isConsole = window.RM_SovereignRegistry.isConsoleModeActive();
    } else {
      try {
        var regRaw = localStorage.getItem('rm_sovereign_visibility_registry_v1');
        var reg = regRaw ? JSON.parse(regRaw) : null;
        var token = sessionStorage.getItem('rm_sov_in_situ_session') || localStorage.getItem('rm_sov_in_situ_session');
        isConsole = (token === 'SOV_ACTIVE_2026' || (reg && reg.activeMode === 'in_situ_console'));
      } catch (_) {}
    }
    updateInSituModeUI(isConsole);
  }

  function launchSurfaceAInSitu() {
    setInSituMode(true);
    window.location.href = '/?sov_mode=in_situ';
  }

  function emergencyResetAllVisible() {
    var confirmReset = window.confirm("⚠️ क्या आप सुनिश्चित हैं? यह क्रिया सम्पूर्ण सुपर ऐप के सभी 50 श्रेणियों व सब-फीचर्स को 100% विज़िबल (पब्लिक लाइव) पर रीसेट कर देगी।");
    if (!confirmReset) return;

    if (window.RM_SovereignRegistry && typeof window.RM_SovereignRegistry.resetAllToPublicLive === 'function') {
      window.RM_SovereignRegistry.resetAllToPublicLive();
    } else {
      try {
        var regRaw = localStorage.getItem('rm_sovereign_visibility_registry_v1');
        if (regRaw) {
          var reg = JSON.parse(regRaw);
          Object.keys(reg.registry || {}).forEach(function(k) {
            if (reg.registry[k]) reg.registry[k].hidden = false;
          });
          reg.activeMode = 'public';
          localStorage.setItem('rm_sovereign_visibility_registry_v1', JSON.stringify(reg));
        }
        sessionStorage.removeItem('rm_sov_in_situ_session');
        localStorage.removeItem('rm_sov_in_situ_session');
      } catch (_) {}
    }

    currentCat16FilterConfig = {
      filterVisibility: {
        showCountry: false,
        showState: true,
        showDistrict: true,
        showLocality: true,
        smartOmnibox: true,
        budgetSlider: true,
        subMeterOnly: true
      }
    };
    saveOwnerFilterConfig();
    applyFilterConfigToUI();
    updateInSituModeUI(false);
    alert("✅ सम्पूर्ण सिस्टम 100% पब्लिक लाइव और दृश्यता पर सफलतापूर्वक रीसेट कर दिया गया है!");
  }

  // --- CATEGORY 16 RUNTIME FILTERS ---
  function loadOwnerFilterConfig() {
    try {
      var saved = localStorage.getItem('rm_local_acct_owner_config');
      if (saved) {
        var parsed = JSON.parse(saved);
        if (parsed && parsed.filterVisibility) {
          currentCat16FilterConfig = parsed;
        }
      }
    } catch (e) {
      console.warn('Filter config read error:', e);
    }
    applyFilterConfigToUI();
  }

  function applyFilterConfigToUI() {
    var fv = currentCat16FilterConfig.filterVisibility || {};
    ['showState', 'showDistrict', 'smartOmnibox', 'budgetSlider', 'subMeterOnly', 'showCountry'].forEach(function(key) {
      var el = document.getElementById('cfg_' + key);
      if (el) el.checked = Boolean(fv[key]);
    });
  }

  function updateFilterToggle(key, isChecked) {
    if (!currentCat16FilterConfig.filterVisibility) {
      currentCat16FilterConfig.filterVisibility = {};
    }
    currentCat16FilterConfig.filterVisibility[key] = Boolean(isChecked);
    saveOwnerFilterConfig();
  }

  function saveOwnerFilterConfig() {
    try {
      var jsonStr = JSON.stringify(currentCat16FilterConfig);
      localStorage.setItem('rm_local_acct_owner_config', jsonStr);
      localStorage.setItem('rm_local_acctdefault_owner_config', jsonStr);
      localStorage.setItem('rm_owner_filter_config_v1', jsonStr);

      var ind = document.getElementById('filterSaveIndicator');
      if (ind) {
        ind.textContent = '✓ UPDATED LIVE';
        ind.className = 'text-[9px] font-bold bg-amber-950 text-amber-300 border border-amber-600 px-2 py-0.5 rounded-full';
        setTimeout(function() {
          ind.textContent = 'SYNCED TO SURFACE-A';
          ind.className = 'text-[9px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-700/60 px-2 py-0.5 rounded-full';
        }, 1500);
      }
    } catch (err) {
      console.error('Filter config save error:', err);
    }
  }

  // --- CATEGORIES DRAWER ---
  function loadCategoriesState() {
    var saved = localStorage.getItem('rm_active_categories_v1');
    if (saved) {
      try {
        activeCategoryIds = new Set(JSON.parse(saved));
      } catch (_) {
        initDefaultCategories();
      }
    } else {
      initDefaultCategories();
    }
    renderCategoryList();
    updateBadge();
  }

  function initDefaultCategories() {
    activeCategoryIds = new Set(
      MASTER_CATEGORIES.filter(function(c) { return c.default; }).map(function(c) { return c.id; })
    );
  }

  function renderCategoryList(filterText) {
    filterText = filterText || '';
    var container = document.getElementById("categoryItemsContainer");
    if (!container) return;

    var filtered = MASTER_CATEGORIES.filter(function(c) { 
      return c.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 || 
             c.no.indexOf(filterText) !== -1;
    });

    container.innerHTML = filtered.map(function(c) {
      var isChecked = activeCategoryIds.has(c.id);
      var isGame = c.type === 'Game';
      return '<div class="flex items-center justify-between py-2 px-1">' +
             '  <div class="flex items-center space-x-2">' +
             '    <span class="text-sm">' + c.icon + '</span>' +
             '    <div>' +
             '      <div class="font-bold text-slate-200 text-xs flex items-center space-x-1.5">' +
             '        <span class="text-amber-500 font-mono text-[10px]">' + c.no + '.</span>' +
             '        <span>' + c.name + '</span>' +
             '      </div>' +
             '      <span class="text-[9px] ' + (isGame ? 'text-pink-400 font-bold' : 'text-cyan-400') + ' font-sans">' +
             '        ' + (isGame ? '🎮 खेल (Game)' : '💼 सेवा व सुविधा (Service & Utility)') +
             '      </span>' +
             '    </div>' +
             '  </div>' +
             '  <label class="relative inline-flex items-center cursor-pointer">' +
             '    <input type="checkbox" ' + (isChecked ? 'checked' : '') + ' onchange="window.RM_OwnerOps.toggleCategory(\'' + c.id + '\', this.checked)" class="sr-only switch-checkbox">' +
             '    <div class="w-10 h-5 bg-slate-800 border border-slate-700 rounded-full switch-label transition-colors">' +
             '      <div class="w-4 h-4 bg-white rounded-full switch-dot transform transition-transform mt-0.5 ml-0.5"></div>' +
             '    </div>' +
             '  </label>' +
             '</div>';
    }).join('');
  }

  function toggleCategory(catId, isActive) {
    if (isActive) activeCategoryIds.add(catId);
    else activeCategoryIds.delete(catId);
    updateBadge();
  }

  function setAllCategories(state) {
    if (state) activeCategoryIds = new Set(MASTER_CATEGORIES.map(function(c) { return c.id; }));
    else activeCategoryIds.clear();
    renderCategoryList(document.getElementById("categoryFilterInput").value);
    updateBadge();
  }

  function filterCategoriesList() {
    var q = document.getElementById("categoryFilterInput").value;
    renderCategoryList(q);
  }

  function updateBadge() {
    var badge = document.getElementById("activeCountBadge");
    if (badge) {
      badge.textContent = activeCategoryIds.size + " / 50 LIVE";
    }
  }

  function saveAndPublishCategories() {
    var arr = Array.from(activeCategoryIds);
    localStorage.setItem('rm_active_categories_v1', JSON.stringify(arr));
    alert("सफलतापूर्वक सुरक्षित! " + arr.length + " श्रेणियां Surface-A पर लाइव कर दी गई हैं।");
    toggleDrawer(false);
  }

  function toggleDrawer(isOpen) {
    var drawer = document.getElementById("categoryDrawer");
    var overlay = document.getElementById("drawerOverlay");
    if (isOpen) {
      drawer.classList.remove("-translate-x-full");
      overlay.classList.remove("hidden");
    } else {
      drawer.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    }
  }

  // --- AUTHENTICATION & SECURITY GATES ---
  async function triggerBiometricAuth() {
    var statusText = document.getElementById("authStatusText");
    if (window.PublicKeyCredential) {
      try {
        statusText.textContent = "फ़िंगरप्रिंट सेंसर पर उंगली रखें...";
        var isAvailable = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
        if (isAvailable) {
          var challenge = new Uint8Array(32);
          window.crypto.getRandomValues(challenge);
          var dummyUserId = new Uint8Array(16);
          window.crypto.getRandomValues(dummyUserId);

          var credential = await navigator.credentials.create({
            publicKey: {
              challenge: challenge,
              rp: { name: "Rise Mitra Sovereign Authority" },
              user: { id: dummyUserId, name: "owner@risemitra.in", displayName: "Sovereign Owner" },
              pubKeyCredParams: [{ alg: -7, type: "public-key" }, { alg: -257, type: "public-key" }],
              authenticatorSelection: { authenticatorAttachment: "platform", userVerification: "required" },
              timeout: 30000
            }
          });

          if (credential) {
            unlockDashboard();
            return;
          }
        }
      } catch (err) {
        statusText.textContent = "बायोमेट्रिक रद्द हुआ। PIN (202609) दर्ज करें।";
      }
    } else {
      statusText.textContent = "बायोमेट्रिक उपलब्ध नहीं है। PIN दर्ज करें।";
    }
  }

  function initWebOTP() {
    if ('OTPCredential' in window) {
      var ac = new AbortController();
      navigator.credentials.get({ otp: { transport: ['sms'] }, signal: ac.signal })
        .then(function(otp) {
          if (otp && otp.code) {
            document.getElementById('otpInput').value = otp.code;
            document.getElementById('otpBadge').classList.remove('hidden');
            verifyOtpCode(otp.code);
          }
        }).catch(function() {});
    }
  }

  function verifyOtpCode(code) {
    if (code === SOV_OTP_MOCK || (code && code.length === 6)) unlockDashboard();
    else showError();
  }

  function verifyPinFallback() {
    var pin = (document.getElementById("consolePin").value || '').trim();
    if (pin === SOV_HASH) unlockDashboard();
    else showError();
  }

  function unlockDashboard() {
    document.getElementById("authGate").style.display = "none";
    document.getElementById("consolePanel").style.display = "block";
    document.getElementById("authError").style.display = "none";
    loadOwnerFilterConfig();
    checkInSituModeState();
    hydrateDemandWidget();
  }

  function showError() {
    document.getElementById("authError").style.display = "block";
  }

  function lockConsole() {
    document.getElementById("consolePin").value = "";
    document.getElementById("otpInput").value = "";
    document.getElementById("consolePanel").style.display = "none";
    document.getElementById("authGate").style.display = "block";
    document.getElementById("authStatusText").textContent = "कंसोल लॉक है • फ़िंगरप्रिंट या पिन से अनलॉक करें";
    toggleDrawer(false);
  }

  function setKillSwitch(level) {
    var pill = document.getElementById("killSwitchState");
    if (!pill) return;
    if (level === 'L0') {
      pill.textContent = "LEVEL-0 (NORMAL)";
      pill.className = "text-[10px] font-black bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700";
    } else if (level === 'L1') {
      pill.textContent = "LEVEL-1 (SOFT FREEZE)";
      pill.className = "text-[10px] font-black bg-amber-950 text-amber-400 px-2 py-0.5 rounded border border-amber-700";
    } else if (level === 'L2') {
      pill.textContent = "LEVEL-2 (HARD LOCKDOWN)";
      pill.className = "text-[10px] font-black bg-red-950 text-red-400 px-2 py-0.5 rounded border border-red-700";
    }
  }

  // --- SEARCH DEMAND INTELLIGENCE BI HYDRATION ---
  function hydrateDemandWidget() {
    try {
      var raw = JSON.parse(localStorage.getItem('rm_owner_search_analytics_v1') || '{}');
      var totalSearches = raw.totalSearches || 0;
      var totalBadge = document.getElementById('rm-bi-total-searches-badge');
      if (totalBadge && totalSearches > 0) {
        totalBadge.textContent = totalSearches + ' कुल खोजें';
      }

      var topContainer = document.getElementById('rm-bi-top-demands-container');
      if (topContainer && raw.keywords && Object.keys(raw.keywords).length > 0) {
        var sorted = Object.entries(raw.keywords).sort(function(a, b) { return b[1] - a[1]; }).slice(0, 10);
        topContainer.innerHTML = sorted.map(function(item, idx) {
          return '<div style="display: flex; align-items: center; justify-content: space-between; background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 7px 12px; margin-bottom: 5px; font-size: 13px;">' +
                 '  <div style="display: flex; align-items: center; gap: 10px; color: #f8fafc; font-weight: 600;">' +
                 '    <span style="color: #38bdf8; font-weight: 800; font-size: 11px; background: rgba(56, 189, 248, 0.15); padding: 2px 7px; border-radius: 4px;">#' + (idx + 1) + '</span>' +
                 '    <span>' + item[0] + '</span>' +
                 '  </div>' +
                 '  <span style="color: #38bdf8; font-weight: 800; background: rgba(56, 189, 248, 0.2); padding: 2px 9px; border-radius: 9999px; font-size: 11.5px;">' + item[1] + ' खोजें</span>' +
                 '</div>';
        }).join('');
      }

      var unmetContainer = document.getElementById('rm-bi-unmet-demands-container');
      if (unmetContainer && raw.zeroResults && Object.keys(raw.zeroResults).length > 0) {
        var sortedUnmet = Object.entries(raw.zeroResults).sort(function(a, b) { return b[1] - a[1]; }).slice(0, 10);
        unmetContainer.innerHTML = sortedUnmet.map(function(item, idx) {
          return '<div style="display: flex; align-items: center; justify-content: space-between; background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(248, 113, 113, 0.25); border-radius: 8px; padding: 7px 12px; margin-bottom: 5px; font-size: 13px;">' +
                 '  <div style="display: flex; align-items: center; gap: 10px; color: #f8fafc; font-weight: 600;">' +
                 '    <span style="color: #f87171; font-weight: 800; font-size: 11px; background: rgba(248, 113, 113, 0.15); padding: 2px 7px; border-radius: 4px;">#' + (idx + 1) + '</span>' +
                 '    <span>⚠️ ' + item[0] + '</span>' +
                 '  </div>' +
                 '  <span style="color: #f87171; font-weight: 800; background: rgba(248, 113, 113, 0.2); padding: 2px 9px; border-radius: 9999px; font-size: 11.5px;">' + item[1] + ' बार विफल</span>' +
                 '</div>';
        }).join('');
      }
    } catch(e) {}
  }

  // --- BOOTSTRAP INITIALIZATION ---
  window.addEventListener('DOMContentLoaded', function() {
    try {
      localStorage.removeItem('rm_owner_authenticated');
      localStorage.removeItem('rm_owner_auth_expiry');
    } catch (_) {}

    var authEl = document.getElementById("authGate");
    var consoleEl = document.getElementById("consolePanel");
    if (authEl) authEl.style.display = "block";
    if (consoleEl) consoleEl.style.display = "none";

    loadCategoriesState();
    loadOwnerFilterConfig();
    checkInSituModeState();
    initWebOTP();

    var otpEl = document.getElementById('otpInput');
    if (otpEl) {
      otpEl.addEventListener('input', function(e) {
        var val = e.target.value.trim();
        if (val.length === 6) verifyOtpCode(val);
      });
    }
  });

  // Global Operations Bridge for inline HTML event handlers
  window.RM_OwnerOps = {
    triggerBiometricAuth: triggerBiometricAuth,
    verifyPinFallback: verifyPinFallback,
    toggleDrawer: toggleDrawer,
    setInSituMode: setInSituMode,
    launchSurfaceAInSitu: launchSurfaceAInSitu,
    emergencyResetAllVisible: emergencyResetAllVisible,
    setKillSwitch: setKillSwitch,
    updateFilterToggle: updateFilterToggle,
    setAllCategories: setAllCategories,
    filterCategoriesList: filterCategoriesList,
    saveAndPublishCategories: saveAndPublishCategories,
    lockConsole: lockConsole,
    toggleCategory: toggleCategory,
    hydrateDemandWidget: hydrateDemandWidget
  };

  // Bind legacy global function signatures
  window.triggerBiometricAuth = triggerBiometricAuth;
  window.verifyPinFallback = verifyPinFallback;
  window.toggleDrawer = toggleDrawer;
  window.setInSituMode = setInSituMode;
  window.launchSurfaceAInSitu = launchSurfaceAInSitu;
  window.emergencyResetAllVisible = emergencyResetAllVisible;
  window.setKillSwitch = setKillSwitch;
  window.updateFilterToggle = updateFilterToggle;
  window.setAllCategories = setAllCategories;
  window.filterCategoriesList = filterCategoriesList;
  window.saveAndPublishCategories = saveAndPublishCategories;
  window.lockConsole = lockConsole;

})(typeof window !== 'undefined' ? window : this, typeof document !== 'undefined' ? document : null);
