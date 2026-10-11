/**
 * RISE MITRA — UNIVERSAL CATALOG RENDERING & SIVME SINGLE-BORDER ENGINE
 * SPECIFICATION : FOLDER A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) | 14_04__EXT_005
 * GOVERNANCE    : GATE-16.6 • GATE-16.7 • GATE-25.0 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/catalog-sivme-engine.js
 * DUAL-FOLDER REFERENCES:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function (window, document) {
  'use strict';

  // ==============================================================================
  // SECTION 0: FAIL-OPEN CANONICAL TAXONOMY CONSTANTS & SOVEREIGN MODE GUARD
  // ==============================================================================

  var CANONICAL_50_IDS = [
    // 33 आजीविका सेवाएं (Tier-1)
    'c01', 'c02', 'c03', 'c04', 'c05', 'c06', 'c07', 'c08', 'c09', 'c10',
    'c11', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17', 'c18', 'c19', 'c20',
    'c21', 'c22', 'c23', 'c24', 'c25', 'c26', 'c27', 'c28', 'c29', 'c30',
    'c31', 'c32', 'c33',
    // 17 सुरक्षा व खेल (Tier-2)
    'g34', 'g35', 'g36', 'g37', 'g38', 'g39', 'g40', 'g41', 'g42', 'g43',
    'g44', 'g45', 'g46', 'g47', 'g48', 'g49', 'g50'
  ];

  function isOwnerInSituActive() {
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get('sov_mode') === 'in_situ' || params.get('sivme') === 'owner' || params.get('dev_auto') === '1') {
        sessionStorage.setItem('rm_sov_in_situ_session', 'SOV_ACTIVE_2026');
        localStorage.setItem('rm_sov_in_situ_session', 'SOV_ACTIVE_2026');
        return true;
      }
      var sToken = sessionStorage.getItem('rm_sov_in_situ_session') || localStorage.getItem('rm_sov_in_situ_session');
      if (sToken === 'SOV_ACTIVE_2026') return true;

      var regRaw = localStorage.getItem('rm_sovereign_visibility_registry_v1');
      if (regRaw) {
        var reg = JSON.parse(regRaw);
        if (reg && (reg.activeMode === 'in_situ_console' || reg.activeMode === 'owner')) return true;
      }
      return false;
    } catch (_) {
      return false;
    }
  }

  function ensureFailOpenRegistry() {
    try {
      var rawActive = localStorage.getItem('rm_active_categories_v1');
      var activeList = [];
      if (rawActive) {
        try { activeList = JSON.parse(rawActive); } catch (_) { activeList = []; }
      }
      if (!Array.isArray(activeList) || activeList.length < 2) {
        localStorage.setItem('rm_active_categories_v1', JSON.stringify(CANONICAL_50_IDS.slice()));
      }

      var regRaw = localStorage.getItem('rm_sovereign_visibility_registry_v1');
      if (regRaw) {
        try {
          var reg = JSON.parse(regRaw);
          if (reg && reg.visibility) {
            var hiddenCount = 0;
            Object.keys(reg.visibility).forEach(function (k) {
              if (reg.visibility[k] === false) hiddenCount++;
            });
            if (hiddenCount >= 30) {
              for (var i = 1; i <= 50; i++) {
                var numStr = i < 10 ? '0' + i : String(i);
                reg.visibility['rm:cat:' + numStr] = true;
              }
              localStorage.setItem('rm_sovereign_visibility_registry_v1', JSON.stringify(reg));
            }
          }
        } catch (_) {}
      }
    } catch (e) {
      console.warn('[SIVME] Fail-open guard initialization note:', e);
    }
  }

  // ==============================================================================
  // SECTION 1: ANTI-POSTER & GEOMETRIC STABILITY CSS SHIELD (EXT_005)
  // ==============================================================================

  function injectCatalogPurityStyles() {
    var styleId = 'rm-sivme-catalog-purity-engine';
    var styleEl = document.getElementById(styleId);
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    var isInSitu = isOwnerInSituActive();
    var cssRules = [
      '/* 1. EXT_005: IMMEDIATE PURGE OF 450PX GIANT MARKETING POSTERS INSIDE MODAL */',
      '#categoryModal .universal-card,',
      '#categoryModal .universal-cat-card,',
      '#categoryModal [class*="universal-card"],',
      '#categoryModal [class*="universal-cat"],',
      '#categoryModal [id^="unicat-"],',
      '#categoryModal div[style*="min-height: 380px"],',
      '#categoryModal div[style*="min-height:380px"],',
      '#categoryModal div[style*="min-height: 450px"],',
      '#categoryModal div[style*="min-height:450px"] {',
      '  display: none !important;',
      '  visibility: hidden !important;',
      '  height: 0 !important;',
      '  max-height: 0 !important;',
      '  opacity: 0 !important;',
      '  pointer-events: none !important;',
      '  margin: 0 !important;',
      '  padding: 0 !important;',
      '  overflow: hidden !important;',
      '}',

      '/* 2. ANTI-OVERLAP & ANTI-DOME: CLEAN 14-16PX RADIUS & 8-12PX SPACING */',
      '#tier1-list, #tier2-list, #tier1-list[data-sivme-urn], #tier2-list[data-sivme-urn] {',
      '  border: none !important;',
      '  outline: none !important;',
      '  box-shadow: none !important;',
      '}',
      '.sivme-cat-card {',
      '  position: relative !important;',
      '  margin-top: 10px !important;',
      '  margin-bottom: 10px !important;',
      '  border-radius: 14px !important;',
      '  border: 1px solid rgba(51, 65, 85, 0.7) !important;',
      '  transform: none !important;',
      '  clear: both !important;',
      '}',
      '.sivme-subcat-card {',
      '  border-radius: 12px !important;',
      '  border: 1px solid rgba(51, 65, 85, 0.6) !important;',
      '}',
      '#categoryModal [style*="border-radius: 50%"]:not(.rounded-full):not([class*="rounded-full"]) {',
      '  border-radius: 14px !important;',
      '}',

      '/* 3. RADAR & DECORATIVE OVERLAY SUPPRESSION */',
      '#categoryModal .sivme-radar-ring,',
      '#categoryModal .sivme-ripple,',
      '#categoryModal .sivme-radar-layer {',
      '  display: none !important;',
      '}'
    ];

    if (isInSitu) {
      cssRules.push(
        '/* OWNER MODE: REVEAL DASHED GHERA FOR INSPECTION */',
        '.sivme-cat-card.is-live, .sivme-subcat-card.is-live { outline: 2px dashed #10b981 !important; outline-offset: 3px !important; }',
        '.sivme-cat-card.is-hidden, .sivme-subcat-card.is-hidden { outline: 2px dashed #ef4444 !important; outline-offset: 3px !important; opacity: 0.45 !important; }'
      );
    } else {
      cssRules.push(
        '/* PUBLIC MODE: ZERO DASHED OUTLINE LEAKAGE (ZERO-LEAKAGE INVARIANT) */',
        '.sivme-cat-card, .sivme-subcat-card { outline: none !important; }',
        '.sivme-cat-card.is-hidden, .sivme-subcat-card.is-hidden { display: none !important; }'
      );
    }

    styleEl.textContent = cssRules.join('\n');
  }

  // ==============================================================================
  // SECTION 2: IDEMPOTENT DUPLICATE MARKETING POSTER PURGER
  // ==============================================================================

  function purgeMarketingDuplicates() {
    var modal = document.getElementById('categoryModal');
    if (!modal) return;

    var duplicateCandidates = modal.querySelectorAll('#tier1-list > div, #tier2-list > div');
    duplicateCandidates.forEach(function (card) {
      if (card.classList.contains('sivme-cat-card')) return;

      var text = card.textContent || '';
      var isDuplicate = text.indexOf('100% सुरक्षित व प्रमाणित सेवा') !== -1 ||
                          text.indexOf('पारदर्शी तय रेट कार्ड') !== -1 ||
                          text.indexOf('कार्य संतुष्टि गारंटी') !== -1 ||
                          card.classList.contains('universal-card') ||
                          card.classList.contains('universal-cat-card') ||
                          (card.id && card.id.indexOf('unicat-') === 0);

      if (isDuplicate) {
        card.remove();
      }
    });
  }

  // ==============================================================================
  // SECTION 3: SIVME IN-SITU LIVE/HIDDEN VISIBILITY & PIN MANAGER
  // ==============================================================================

  function getPinnedList() {
    try {
      var raw = localStorage.getItem('rm_user_pinned_shortcuts_v1');
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function isItemPinned(code) {
    try {
      var list = getPinnedList();
      if (!Array.isArray(list)) return false;
      return list.some(function (item) {
        return item && (item.code === code || item.id === code);
      });
    } catch (_) {
      return false;
    }
  }

  window.togglePinService = function (code, icon, enTitle, hiTitle, event) {
    if (event) event.stopPropagation();
    try {
      var list = getPinnedList();
      var idx = list.findIndex(function (item) { return item && (item.code === code || item.id === code); });
      if (idx !== -1) {
        list.splice(idx, 1);
      } else {
        list.push({ code: code, id: code, icon: icon, enTitle: enTitle, hiTitle: hiTitle, pinnedAt: Date.now() });
      }
      localStorage.setItem('rm_user_pinned_shortcuts_v1', JSON.stringify(list));
      if (window.RM_UserPinnedShortcuts && typeof window.RM_UserPinnedShortcuts.render === 'function') {
        window.RM_UserPinnedShortcuts.render();
      }
      renderCatalogItems();
    } catch (e) {
      console.error('Pin toggle failed:', e);
    }
  };

  window.handleLaunchVideo = function (subId, title, event) {
    if (event) event.stopPropagation();
    alert('🎬 [' + subId + '] ' + title + '\n\nसत्यापित कार्य वीडियो प्रमाण व ऑन-ग्राउंड ट्यूटोरियल जल्द उपलब्ध होगा।');
  };

  window.handleDirectActionSheet = function (catNum, subId, enName, hiName, event) {
    if (event) event.stopPropagation();
    var msg = '💼 [' + subId + '] ' + enName + ' (' + hiName + ')\n\n' +
              '🛡️ 0% कमीशन सॉवरेन लोकल नेटवर्क\n' +
              '━━━━━━━━━━━━━━━━━━━━━\n' +
              '1. सीधे स्थानीय कारीगर/दुकानदार से संपर्क\n' +
              '2. काउंटर बिल व डिजिटल टोकन रसीद\n' +
              '3. बिना बिचौलिये के सीधी भौतिक सेवा\n\n' +
              'स्थानीय सेवा प्रदाता से सीधा संपर्क जोड़ा जा रहा है...';
    alert(msg);
  };

  window.handleDirectGameSheet = function (catNum, subId, enName, hiName, event) {
    if (event) event.stopPropagation();
    var msg = '🎮 [' + subId + '] ' + enName + ' (' + hiName + ')\n\n' +
              '🏆 P2P कम्युनिटी टूर्नामेंट व मित्र कक्ष\n' +
              '━━━━━━━━━━━━━━━━━━━━━\n' +
              '1. कोई AI बॉट नहीं — केवल असली स्थानीय खिलाड़ी\n' +
              '2. प्राइवेट रूम कोड से दोस्तों के साथ खेलें\n' +
              '3. साप्ताहिक कस्बा प्रतियोगिता व अंक तालिका\n\n' +
              'मित्र कक्ष लोड हो रहा है...';
    alert(msg);
  };

  function isCategoryLive(catId, catNum) {
    try {
      var raw = localStorage.getItem('rm_active_categories_v1');
      if (!raw) return true;
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length <= 1) return true;
      var set = new Set(parsed.map(String));
      return set.has(String(catId)) || set.has(String(catNum));
    } catch (_) {
      return true;
    }
  }

  function isSubItemLive(subId) {
    try {
      var raw = localStorage.getItem('rm_active_subcategories_v1');
      if (!raw) return true;
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0) return true;
      var set = new Set(parsed.map(String));
      return set.has(String(subId));
    } catch (_) {
      return true;
    }
  }

  window.toggleSivmeCategory = function (catId, num, event) {
    if (event) event.stopPropagation();
    try {
      var raw = localStorage.getItem('rm_active_categories_v1');
      var activeIds = new Set();
      if (raw) {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 1) {
          parsed.forEach(function (x) { activeIds.add(String(x)); });
        }
      }
      if (activeIds.size <= 1) {
        (window.RM_SERVICES_DATA || []).forEach(function (s) { activeIds.add(s.id); activeIds.add(s.num); });
        (window.RM_GAMES_DATA || []).forEach(function (g) { activeIds.add(g.id); activeIds.add(g.num); });
        CANONICAL_50_IDS.forEach(function (id) { activeIds.add(id); });
      }
      activeIds.add('c16'); activeIds.add('16');

      var cId = String(catId);
      var nId = String(num);
      if (activeIds.has(cId) || activeIds.has(nId)) {
        activeIds.delete(cId);
        activeIds.delete(nId);
      } else {
        activeIds.add(cId);
        activeIds.add(nId);
      }
      localStorage.setItem('rm_active_categories_v1', JSON.stringify(Array.from(activeIds)));
      renderCatalogItems();
    } catch (e) {
      console.error('Category toggle failed:', e);
    }
  };

  window.toggleSivmeSub = function (subId, event) {
    if (event) event.stopPropagation();
    try {
      var raw = localStorage.getItem('rm_active_subcategories_v1');
      var activeSubs = new Set();
      if (raw) {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) parsed.forEach(function (x) { activeSubs.add(String(x)); });
      }
      if (activeSubs.size === 0) {
        (window.RM_SERVICES_DATA || []).forEach(function (s) { s.children.forEach(function (c) { activeSubs.add(c.id); }); });
        (window.RM_GAMES_DATA || []).forEach(function (g) { g.children.forEach(function (c) { activeSubs.add(c.id); }); });
      }
      var sId = String(subId);
      if (activeSubs.has(sId)) {
        activeSubs.delete(sId);
      } else {
        activeSubs.add(sId);
      }
      localStorage.setItem('rm_active_subcategories_v1', JSON.stringify(Array.from(activeSubs)));
      renderCatalogItems();
    } catch (e) {
      console.error('Sub toggle failed:', e);
    }
  };

  // ==============================================================================
  // SECTION 4: SINGLE GHERA ENFORCER (MODE AWARE)
  // ==============================================================================

  function enforceSingleSivmeOutline() {
    var isInSitu = isOwnerInSituActive();

    var catCards = document.querySelectorAll('.sivme-cat-card[data-cat-id]');
    catCards.forEach(function (card) {
      var catId = card.getAttribute('data-cat-id') || '';
      var num = catId.replace(/[cg]/, '');
      var isLive = isCategoryLive(catId, num);

      card.style.setProperty('border', '1px solid rgba(51, 65, 85, 0.7)', 'important');
      if (isInSitu) {
        var color = isLive ? '#10b981' : '#ef4444';
        card.style.setProperty('outline', '2px dashed ' + color, 'important');
        card.style.setProperty('outline-offset', '3px', 'important');
        card.style.opacity = isLive ? '1' : '0.45';
        card.style.display = 'block';
      } else {
        card.style.removeProperty('outline');
        card.style.setProperty('outline', 'none', 'important');
        card.style.opacity = '1';
        card.style.display = isLive ? 'block' : 'none';
      }
    });

    var subCards = document.querySelectorAll('.sivme-subcat-card[data-sivme-urn]');
    subCards.forEach(function (sub) {
      var urn = sub.getAttribute('data-sivme-urn') || '';
      var subId = urn.split(':sub:')[1] || '';
      var isSubLive = isSubItemLive(subId);

      sub.style.setProperty('border', '1px solid rgba(51, 65, 85, 0.6)', 'important');
      if (isInSitu) {
        var color = isSubLive ? '#10b981' : '#ef4444';
        sub.style.setProperty('outline', '2px dashed ' + color, 'important');
        sub.style.setProperty('outline-offset', '3px', 'important');
        sub.style.opacity = isSubLive ? '1' : '0.45';
        sub.style.display = '';
      } else {
        sub.style.removeProperty('outline');
        sub.style.setProperty('outline', 'none', 'important');
        sub.style.opacity = '1';
        sub.style.display = isSubLive ? '' : 'none';
      }
    });

    var containers = document.querySelectorAll('#tier1-list, #tier2-list');
    containers.forEach(function (c) {
      c.style.removeProperty('outline');
      c.style.setProperty('outline', 'none', 'important');
      c.style.setProperty('border', 'none', 'important');
    });

    purgeMarketingDuplicates();
  }

  function patchSivmeGlobalEngine() {
    if (window.RM_SIVME && !window.RM_SIVME.__singleOutlineEnforced) {
      window.RM_SIVME.applyInSituVisualInspection = enforceSingleSivmeOutline;
      window.RM_SIVME.__singleOutlineEnforced = true;
    }
  }

  // ==============================================================================
  // SECTION 5: DOM ACCORDION RENDER ENGINE (DYNAMIC i18n COUNT BINDING)
  // ==============================================================================

  function renderSubCards(catNum, childrenList) {
    if (!childrenList || !childrenList.length) return '';
    var isInSitu = isOwnerInSituActive();

    return childrenList.map(function (ch) {
      var isPinned = isItemPinned(ch.id);
      var pinBtn = isPinned 
        ? '<button type="button" onclick="togglePinService(\'' + ch.id + '\', \'' + ch.icon + '\', \'' + ch.enName + '\', \'' + ch.hiName + '\', event)" class="flex-1 bg-cyan-950/90 border border-cyan-500/60 text-cyan-300 px-2 py-1 rounded-lg text-[10px] font-bold flex items-center justify-center space-x-1 cursor-pointer"><span>📌</span><span>पिन है</span></button>'
        : '<button type="button" onclick="togglePinService(\'' + ch.id + '\', \'' + ch.icon + '\', \'' + ch.enName + '\', \'' + ch.hiName + '\', event)" class="flex-1 bg-slate-800/90 border border-slate-700 text-slate-300 hover:text-white px-2 py-1 rounded-lg text-[10px] font-medium flex items-center justify-center space-x-1 cursor-pointer"><span>📌</span><span>पिन करें</span></button>';
      
      var videoBtn = '<button type="button" onclick="handleLaunchVideo(\'' + ch.id + '\', \'' + ch.enName + '\', event)" class="flex-1 bg-indigo-950/90 hover:bg-indigo-900 border border-indigo-700/60 text-indigo-300 px-2 py-1 rounded-lg text-[10px] font-bold flex items-center justify-center space-x-1 cursor-pointer"><span>▶</span><span>वीडियो</span></button>';

      var actBtn = '';
      if (ch.action === 'launch') {
        actBtn = '<button type="button" onclick="handleLaunchCategory(\'c' + catNum + '\', \'' + ch.id + '\')" class="flex-1 bg-emerald-950/90 border border-emerald-600/60 text-emerald-300 hover:bg-emerald-900/90 px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap text-center cursor-pointer">' + (ch.badge || 'खोलें ›') + '</button>';
      } else if (ch.action === 'upcoming' || ch.action === 'notice') {
        actBtn = '<span class="flex-1 bg-slate-800/80 border border-slate-700/60 text-slate-400 px-2 py-1 rounded-lg text-[10px] font-medium whitespace-nowrap text-center">जल्द उपलब्ध</span>';
      } else if (ch.action === 'game') {
        actBtn = '<button type="button" onclick="handleDirectGameSheet(\'' + catNum + '\', \'' + ch.id + '\', \'' + ch.enName + '\', \'' + ch.hiName + '\', event)" class="flex-1 bg-cyan-950/90 hover:bg-cyan-900 border border-cyan-600/70 text-cyan-300 px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap text-center cursor-pointer">खेलें ›</button>';
      } else {
        actBtn = '<button type="button" onclick="handleDirectActionSheet(\'' + catNum + '\', \'' + ch.id + '\', \'' + ch.enName + '\', \'' + ch.hiName + '\', event)" class="flex-1 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap text-center cursor-pointer">' + (ch.badge || 'खोलें ›') + '</button>';
      }

      var isSubLive = isSubItemLive(ch.id);
      var subStateClass = isSubLive ? 'is-live' : 'is-hidden';
      var subNotchHtml = '';

      if (isInSitu) {
        subNotchHtml = isSubLive
          ? '<div class="sivme-live-notch absolute -top-2.5 right-2.5 z-30 flex items-center space-x-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#064e3b] text-emerald-300 border border-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.3)] cursor-pointer" onclick="toggleSivmeSub(\'' + ch.id + '\', event)"><span>🟢</span><span>Live ⇄</span></div>'
          : '<div class="sivme-live-notch absolute -top-2.5 right-2.5 z-30 flex items-center space-x-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#450a0a] text-red-300 border border-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.3)] cursor-pointer" onclick="toggleSivmeSub(\'' + ch.id + '\', event)"><span>🔴</span><span>Hidden ⇄</span></div>';
      }

      var inlineStyles = 'min-height: 114px; border: 1px solid rgba(51, 65, 85, 0.6) !important; overflow: visible;';
      if (isInSitu) {
        var subOutlineColor = isSubLive ? '#10b981' : '#ef4444';
        inlineStyles += ' outline: 2px dashed ' + subOutlineColor + ' !important; outline-offset: 3px !important;';
        if (!isSubLive) inlineStyles += ' opacity: 0.45 !important;';
      } else {
        if (!isSubLive) inlineStyles += ' display: none !important;';
      }

      return [
        '<div data-sivme-urn="rm:cat:' + catNum + ':sub:' + ch.id + '" class="sivme-subcat-card ' + subStateClass + ' w-full bg-[#0d1424] rounded-xl shadow-md flex flex-col justify-between relative mb-2.5" style="' + inlineStyles + '">',
        '  ' + subNotchHtml,
        '  <div class="p-3 pb-2 flex-1 flex flex-col justify-between relative bg-gradient-to-b from-[#111a30]/80 to-[#0d1424] rounded-t-xl">',
        '    <div class="flex items-center space-x-2 mb-1">',
        '      <span class="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/90 border border-cyan-800/70 px-2 py-0.5 rounded leading-none">[' + ch.id + ']</span>',
        '      <span class="text-lg leading-none">' + ch.icon + '</span>',
        '    </div>',
        '    <div class="flex flex-col text-left w-full mt-0.5">',
        '      <span class="text-[13.5px] font-bold text-slate-100 tracking-wide leading-tight break-normal">' + ch.enName + '</span>',
        '      <span class="text-[11.5px] font-medium text-slate-400 leading-tight mt-0.5 break-normal">(' + ch.hiName + ')</span>',
        '    </div>',
        '  </div>',
        '  <div class="px-2.5 py-1.5 bg-slate-950/90 border-t border-slate-800/70 flex items-center justify-between space-x-2 min-h-[30px] rounded-b-xl">',
        '    ' + pinBtn,
        '    ' + videoBtn,
        '    ' + actBtn,
        '  </div>',
        '</div>'
      ].join('\n');
    }).join('');
  }

  function renderCatalogItems() {
    ensureFailOpenRegistry();
    injectCatalogPurityStyles();
    patchSivmeGlobalEngine();
    purgeMarketingDuplicates();

    var services = window.RM_SERVICES_DATA || [];
    var games = window.RM_GAMES_DATA || [];
    if (!services.length && !games.length) return;

    var isInSitu = isOwnerInSituActive();
    var t1 = document.getElementById('tier1-list');
    var t2 = document.getElementById('tier2-list');

    // 1. Render Tier-1 Categories
    if (t1) {
      t1.innerHTML = services.map(function (item) {
        var isLive = isCategoryLive(item.id, item.num);
        var stateClass = isLive ? 'is-live' : 'is-hidden';
        var notchHtml = '';

        if (isInSitu) {
          notchHtml = isLive
            ? '<div class="sivme-live-notch absolute -top-2.5 right-3 z-30 flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#064e3b] text-emerald-300 border border-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.3)] cursor-pointer" onclick="toggleSivmeCategory(\'' + item.id + '\', \'' + item.num + '\', event)"><span>🟢</span><span>Live ⇄</span></div>'
            : '<div class="sivme-live-notch absolute -top-2.5 right-3 z-30 flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#450a0a] text-red-300 border border-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.3)] cursor-pointer" onclick="toggleSivmeCategory(\'' + item.id + '\', \'' + item.num + '\', event)"><span>🔴</span><span>Hidden ⇄</span></div>';
        }

        var inlineStyles = 'border: 1px solid rgba(51, 65, 85, 0.7) !important; overflow: visible;';
        if (isInSitu) {
          var outlineColor = isLive ? '#10b981' : '#ef4444';
          inlineStyles += ' outline: 2px dashed ' + outlineColor + ' !important; outline-offset: 3px !important;';
          if (!isLive) inlineStyles += ' opacity: 0.45 !important;';
        } else {
          if (!isLive) inlineStyles += ' display: none !important;';
        }

        var countNum = (item.children && Array.isArray(item.children)) ? item.children.length : 3;
        var dynamicCountBadge = countNum + ' विकल्प';

        return [
          '<div data-cat-id="' + item.id + '" data-sivme-urn="rm:cat:' + item.num + '" class="sivme-cat-card ' + stateClass + ' w-full rounded-xl bg-slate-900/90 transition-all mb-3.5 shadow-md relative" style="' + inlineStyles + '">',
          '  ' + notchHtml,
          '  <div onclick="handleCategoryClick(\'' + item.id + '\', this)" class="flex items-center justify-between p-3 cursor-pointer active:scale-[0.99] transition-transform min-h-[64px]">',
          '    <div class="flex items-center space-x-2.5 min-w-0 flex-1 pr-2">',
          '      <span class="text-[10px] font-mono font-bold bg-amber-950/70 text-amber-400 border border-amber-800/50 px-1.5 py-0.5 rounded shrink-0">' + item.num + '.</span>',
          '      <span class="text-xl shrink-0 leading-none">' + item.icon + '</span>',
          '      <div class="flex flex-col min-w-0 text-left flex-1">',
          '        <span class="text-[13.5px] font-bold text-slate-100 tracking-wide leading-tight break-normal">' + item.enName + '</span>',
          '        <span class="text-[11.5px] font-medium text-slate-400 leading-tight mt-0.5 break-normal">(' + item.hiName + ')</span>',
          '      </div>',
          '    </div>',
          '    <div class="flex items-center space-x-1.5 shrink-0">',
          '      <span class="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/50 whitespace-nowrap">' + dynamicCountBadge + '</span>',
          '      <span class="acc-arrow text-slate-300 text-xs font-mono font-bold bg-slate-800/90 border border-slate-700/80 w-6 h-6 rounded-full flex items-center justify-center">▼</span>',
          '    </div>',
          '  </div>',
          '  <div id="sub-' + item.id + '" class="p-2 pt-0 space-y-2.5 bg-slate-950/50 hidden rounded-b-xl" style="overflow: visible;">',
          '    ' + renderSubCards(item.num, item.children),
          '  </div>',
          '</div>'
        ].join('\n');
      }).join('');
      t1.dataset.rendered = 'true';
    }

    // 2. Render Tier-2 Categories
    if (t2) {
      t2.innerHTML = games.map(function (item) {
        var isLive = isCategoryLive(item.id, item.num);
        var stateClass = isLive ? 'is-live' : 'is-hidden';
        var notchHtml = '';

        if (isInSitu) {
          notchHtml = isLive
            ? '<div class="sivme-live-notch absolute -top-2.5 right-3 z-30 flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#064e3b] text-emerald-300 border border-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.3)] cursor-pointer" onclick="toggleSivmeCategory(\'' + item.id + '\', \'' + item.num + '\', event)"><span>🟢</span><span>Live ⇄</span></div>'
            : '<div class="sivme-live-notch absolute -top-2.5 right-3 z-30 flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#450a0a] text-red-300 border border-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.3)] cursor-pointer" onclick="toggleSivmeCategory(\'' + item.id + '\', \'' + item.num + '\', event)"><span>🔴</span><span>Hidden ⇄</span></div>';
        }

        var inlineStyles = 'border: 1px solid rgba(51, 65, 85, 0.7) !important; overflow: visible;';
        if (isInSitu) {
          var outlineColor = isLive ? '#10b981' : '#ef4444';
          inlineStyles += ' outline: 2px dashed ' + outlineColor + ' !important; outline-offset: 3px !important;';
          if (!isLive) inlineStyles += ' opacity: 0.45 !important;';
        } else {
          if (!isLive) inlineStyles += ' display: none !important;';
        }

        var countNumGames = (item.children && Array.isArray(item.children)) ? item.children.length : 3;
        var dynamicGameBadge = countNumGames + ' गेम्स';

        return [
          '<div data-cat-id="' + item.id + '" data-sivme-urn="rm:cat:' + item.num + '" class="sivme-cat-card ' + stateClass + ' w-full rounded-xl bg-slate-900/90 transition-all mb-3.5 shadow-md relative" style="' + inlineStyles + '">',
          '  ' + notchHtml,
          '  <div onclick="handleCategoryClick(\'' + item.id + '\', this)" class="flex items-center justify-between p-3 cursor-pointer active:scale-[0.99] transition-transform min-h-[64px]">',
          '    <div class="flex items-center space-x-2.5 min-w-0 flex-1 pr-2">',
          '      <span class="text-[10px] font-mono font-bold bg-cyan-950/70 text-cyan-400 border border-cyan-800/50 px-1.5 py-0.5 rounded shrink-0">' + item.num + '.</span>',
          '      <span class="text-xl shrink-0 leading-none">' + item.icon + '</span>',
          '      <div class="flex flex-col min-w-0 text-left flex-1">',
          '        <span class="text-[13.5px] font-bold text-slate-100 tracking-wide leading-tight break-normal">' + item.enName + '</span>',
          '        <span class="text-[11.5px] font-medium text-slate-400 leading-tight mt-0.5 break-normal">(' + item.hiName + ')</span>',
          '      </div>',
          '    </div>',
          '    <div class="flex items-center space-x-1.5 shrink-0">',
          '      <span class="text-[10px] text-cyan-400 font-bold bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-800/50 whitespace-nowrap">' + dynamicGameBadge + '</span>',
          '      <span class="acc-arrow text-slate-300 text-xs font-mono font-bold bg-slate-800/90 border border-slate-700/80 w-6 h-6 rounded-full flex items-center justify-center">▼</span>',
          '    </div>',
          '  </div>',
          '  <div id="sub-' + item.id + '" class="p-2 pt-0 space-y-2.5 bg-slate-950/50 hidden rounded-b-xl" style="overflow: visible;">',
          '    ' + renderSubCards(item.num, item.children),
          '  </div>',
          '</div>'
        ].join('\n');
      }).join('');
      t2.dataset.rendered = 'true';
    }

    // Default expand Category-16 (House & Home)
    var sub16 = document.getElementById('sub-c16');
    if (sub16) {
      sub16.classList.remove('hidden');
      sub16.style.display = 'block';
      var c16Parent = document.querySelector('[data-cat-id="c16"]');
      if (c16Parent) {
        var arr = c16Parent.querySelector('.acc-arrow');
        if (arr) arr.textContent = '▲';
      }
    }

    syncCategoryVisibilityFromOwner();
    enforceSingleSivmeOutline();
    setTimeout(enforceSingleSivmeOutline, 50);
    setTimeout(purgeMarketingDuplicates, 100);
  }

  // ==============================================================================
  // SECTION 6: OWNER CONSOLE VISIBILITY SYNC
  // ==============================================================================

  function syncCategoryVisibilityFromOwner() {
    try {
      ensureFailOpenRegistry();
      var isInSitu = isOwnerInSituActive();
      var raw = localStorage.getItem('rm_active_categories_v1');
      var activeIds = new Set();

      if (raw) {
        try {
          var parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 1) {
            parsed.forEach(function (id) { activeIds.add(String(id)); });
          }
        } catch (_) {}
      }

      if (activeIds.size <= 1) {
        (window.RM_SERVICES_DATA || []).forEach(function (s) { activeIds.add(s.id); activeIds.add(s.num); });
        (window.RM_GAMES_DATA || []).forEach(function (g) { activeIds.add(g.id); activeIds.add(g.num); });
        CANONICAL_50_IDS.forEach(function (id) {
          activeIds.add(id);
          activeIds.add(id.replace(/[cg]/, ''));
        });
      }

      activeIds.add('c16');
      activeIds.add('16');

      var t1List = document.getElementById('tier1-list');
      var liveT1 = 0;
      if (t1List && t1List.children) {
        Array.from(t1List.children).forEach(function (itemEl) {
          var catId = itemEl.getAttribute('data-cat-id');
          if (!catId) return;
          var num = catId.replace('c', '');
          var isLive = activeIds.has(catId) || activeIds.has(num);
          if (isInSitu) {
            itemEl.style.display = 'block';
            itemEl.style.opacity = isLive ? '1' : '0.45';
          } else {
            itemEl.style.display = isLive ? 'block' : 'none';
            itemEl.style.opacity = '1';
          }
          if (isLive) liveT1++;
        });

        var t1Header = document.getElementById('tier1-header-text') || document.querySelector('#tier1-toggle span');
        if (t1Header) t1Header.textContent = '💼 आजीविका (' + liveT1 + ' श्रेणियां उपलब्ध)';
      }

      var t2List = document.getElementById('tier2-list');
      var liveT2 = 0;
      if (t2List && t2List.children) {
        Array.from(t2List.children).forEach(function (itemEl) {
          var catId = itemEl.getAttribute('data-cat-id');
          if (!catId) return;
          var num = catId.replace('g', '');
          var isLive = activeIds.has(catId) || activeIds.has(num);
          if (isInSitu) {
            itemEl.style.display = 'block';
            itemEl.style.opacity = isLive ? '1' : '0.45';
          } else {
            itemEl.style.display = isLive ? 'block' : 'none';
            itemEl.style.opacity = '1';
          }
          if (isLive) liveT2++;
        });

        var t2Header = document.getElementById('tier2-header-text') || document.querySelector('#tier2-toggle span');
        if (t2Header) t2Header.textContent = '🎮 खेल व मनोरंजन (' + liveT2 + ' श्रेणियां उपलब्ध)';
      }

      var modalCount = document.getElementById('modal-catalog-count');
      if (modalCount) {
        modalCount.textContent = liveT1 + ' Categories • ' + liveT2 + ' Games Active';
      }
    } catch (err) {
      console.warn('[RM-Catalog] Sync error:', err);
    }
  }

  // ==============================================================================
  // SECTION 7: CATEGORY-16 CANONICAL TRIAD & MICRO-APP LAUNCH ENGINE
  // ==============================================================================

  function handleCategoryClick(catId, el) {
    var sub = document.getElementById('sub-' + catId);
    var arrow = el ? el.querySelector('.acc-arrow') : null;
    if (sub) {
      var isHidden = sub.style.display === 'none' || sub.classList.contains('hidden');
      if (isHidden) {
        sub.classList.remove('hidden');
        sub.style.display = 'block';
        if (arrow) arrow.textContent = '▲';
      } else {
        sub.style.display = 'none';
        sub.classList.add('hidden');
        if (arrow) arrow.textContent = '▼';
      }
      enforceSingleSivmeOutline();
    }
  }

  function handleLaunchCategory(catId, subId) {
    if (typeof toggleMenuDrawer === 'function') toggleMenuDrawer(false);
    var container = document.getElementById('rm-module-container');
    if (!container) return;

    if (catId === 'c16' && (subId === '16-2' || !subId)) {
      if (typeof openFullscreenModule === 'function') {
        openFullscreenModule('🏠 16-2. Rental Ledger (किराया बहीखाता)');
      }

      if (window.RM_Cat16_Sub2_RentalLedger && typeof window.RM_Cat16_Sub2_RentalLedger.mount === 'function') {
        window.RM_Cat16_Sub2_RentalLedger.mount(container);
      } else {
        container.innerHTML = '<div class="p-6 text-center text-xs text-emerald-400 animate-pulse">किराया बहीखाता लोड हो रहा है...</div>';
        var script = document.createElement('script');
        script.src = '/js/catalog/category-16/16-2-rental-ledger.js?v=' + (window.RM_DEPLOY_EPOCH || Date.now());
        script.async = true;

        script.onload = function () {
          if (window.RM_Cat16_Sub2_RentalLedger && typeof window.RM_Cat16_Sub2_RentalLedger.mount === 'function') {
            window.RM_Cat16_Sub2_RentalLedger.mount(container);
          } else {
            container.innerHTML = '<div class="p-6 text-center text-xs text-amber-400 bg-amber-950/40 border border-amber-800/60 rounded-xl">मॉड्यूल लोड हुआ किंतु इनिशियलाइज़ नहीं हो सका।</div>';
          }
        };

        script.onerror = function () {
          container.innerHTML = '<div class="p-6 text-center text-xs text-red-400 bg-red-950/40 border border-red-800/60 rounded-xl space-y-2"><div>मॉड्यूल लोड नहीं हो सका — कृपया पुनः प्रयास करें।</div><button onclick="handleLaunchCategory(\'c16\', \'16-2\')" class="px-3 py-1 bg-red-900/60 border border-red-700 text-red-200 rounded text-[10px] font-bold cursor-pointer">रीट्राई करें</button></div>';
        };

        document.body.appendChild(script);
      }
    } else if (catId === 'c16' && subId === '16-3') {
      if (typeof openFullscreenModule === 'function') {
        openFullscreenModule('🏠 16-3. Room & Flat Listing (कमरा व फ्लैट लिस्टिंग)');
      }

      if (window.RM_Cat16_Sub3_RentalSearch && typeof window.RM_Cat16_Sub3_RentalSearch.mount === 'function') {
        window.RM_Cat16_Sub3_RentalSearch.mount(container);
      } else {
        container.innerHTML = '<div class="p-6 text-center text-xs text-emerald-400 animate-pulse">कमरा व फ्लैट लिस्टिंग लोड हो रहा है...</div>';
        var script2 = document.createElement('script');
        script2.src = '/js/catalog/category-16/16-3-room-listing.js?v=' + (window.RM_DEPLOY_EPOCH || Date.now());
        script2.async = true;

        script2.onload = function () {
          if (window.RM_Cat16_Sub3_RentalSearch && typeof window.RM_Cat16_Sub3_RentalSearch.mount === 'function') {
            window.RM_Cat16_Sub3_RentalSearch.mount(container);
          } else {
            container.innerHTML = '<div class="p-6 text-center text-xs text-amber-400 bg-amber-950/40 border border-amber-800/60 rounded-xl">मॉड्यूल लोड हुआ किंतु इनिशियलाइज़ नहीं हो सका।</div>';
          }
        };

        script2.onerror = function () {
          container.innerHTML = '<div class="p-6 text-center text-xs text-red-400 bg-red-950/40 border border-red-800/60 rounded-xl space-y-2"><div>मॉड्यूल लोड नहीं हो सका — कृपया पुनः प्रयास करें।</div><button onclick="handleLaunchCategory(\'c16\', \'16-3\')" class="px-3 py-1 bg-red-900/60 border border-red-700 text-red-200 rounded text-[10px] font-bold cursor-pointer">रीट्राई करें</button></div>';
        };

        document.body.appendChild(script2);
      }
    } else if (catId === 'c16' && subId === '16-1') {
      alert('🛠️ [16-1] मिस्त्री व गृह मरम्मत (Mistri & Home Repairs) — सेवा जल्द शुरू होगी।');
    } else if (catId === 'c05' && (subId === '05-1' || !subId)) {
      alert('💼 [05-1] सॉवरेन बहीखाता (Business Khata) लोड हो रहा है...');
    } else {
      alert(catId + ' [' + (subId || '') + '] सेवा का विस्तार जल्द उपलब्ध होगा।');
    }
  }

  // ==============================================================================
  // SECTION 8: RESILIENT DATA-LOAD WATCHER & RECOVERY ENGINE
  // ==============================================================================

  window.RM_CatalogRenderer = {
    render: renderCatalogItems,
    sync: syncCategoryVisibilityFromOwner,
    launch: handleLaunchCategory
  };

  window.renderCatalogItems = renderCatalogItems;
  window.syncCategoryVisibilityFromOwner = syncCategoryVisibilityFromOwner;
  window.handleCategoryClick = handleCategoryClick;
  window.handleLaunchCategory = handleLaunchCategory;

  function initCatalogWhenDataReady() {
    if (window.RM_SERVICES_DATA && window.RM_GAMES_DATA) {
      renderCatalogItems();
    } else {
      setTimeout(initCatalogWhenDataReady, 40);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCatalogWhenDataReady);
  } else {
    initCatalogWhenDataReady();
  }

  window.addEventListener('storage', function () {
    syncCategoryVisibilityFromOwner();
    enforceSingleSivmeOutline();
  });

  document.addEventListener('click', function (e) {
    if (e.target && e.target.closest && e.target.closest('#cat-menu-btn, [onclick*="catalog"], [onclick*="category"], #menu-btn')) {
      setTimeout(renderCatalogItems, 20);
      setTimeout(purgeMarketingDuplicates, 60);
      setTimeout(purgeMarketingDuplicates, 180);
    }
  }, true);

  setInterval(purgeMarketingDuplicates, 350);

  var recoveryInterval = setInterval(function () {
    var t1 = document.getElementById('tier1-list');
    if (t1 && t1.innerHTML.indexOf('लोड हो रहा है') !== -1) {
      renderCatalogItems();
    } else if (t1 && t1.dataset.rendered === 'true') {
      clearInterval(recoveryInterval);
    }
  }, 150);

  setTimeout(function () {
    clearInterval(recoveryInterval);
  }, 8000);

})(typeof window !== 'undefined' ? window : this, typeof document !== 'undefined' ? document : null);
