/**
 * RISE MITRA — UNIVERSAL SUB-CATEGORY CARD RENDERER MODULE
 * MODULE        : Decoupled Sub-Card UI Renderer (50 Categories Service & Game Support)
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | MAX 500-LINE BUDGET RULE | 100% ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/universal-catalog/sub-card-renderer.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var lastSubOpenTs = 0;

  function getNormalizedIds(catId) {
    if (window.RM_CARD_DATA_RESOLVER && typeof window.RM_CARD_DATA_RESOLVER.getNormalizedIds === 'function') {
      return window.RM_CARD_DATA_RESOLVER.getNormalizedIds(catId);
    }
    var rawDigits = String(catId || '').replace(/[^0-9]/g, '');
    var intNum = parseInt(rawDigits, 10);
    if (isNaN(intNum) || intNum < 1) intNum = 1;
    var normId = String(intNum);
    var paddedId = (intNum < 10 ? '0' : '') + intNum;
    return { intNum: intNum, normId: normId, paddedId: paddedId, displayNum: paddedId + '.' };
  }

  function fetchSubcategoryRegistryData(ids, cleanSub) {
    if (window.RM_CARD_DATA_RESOLVER && typeof window.RM_CARD_DATA_RESOLVER.fetchSubcategoryRegistryData === 'function') {
      return window.RM_CARD_DATA_RESOLVER.fetchSubcategoryRegistryData(ids, cleanSub);
    }
    var matrix = window.RM_CANONICAL_SUB_MATRIX || {};
    var parts = String(cleanSub || '').split('-');
    var subIdx = parts[1] || '1';
    var paddedSub = ids.paddedId + '-' + subIdx;
    var normSub = ids.normId + '-' + subIdx;
    if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.getSubcategoryData === 'function') {
      var cand = window.RM_CATALOG_REGISTRY.getSubcategoryData(ids.normId, normSub) ||
                 window.RM_CATALOG_REGISTRY.getSubcategoryData(ids.paddedId, paddedSub);
      if (cand && cand.title && String(cand.title).indexOf('सेवा ') !== 0) {
        return cand;
      }
    }
    return matrix[paddedSub] || null;
  }

  // Helper: Trigger original hidden button in legacy DOM (100% ZEL)
  function triggerLegacySubAction(subCardEl, keyword) {
    if (!subCardEl) return false;
    var allButtons = Array.from(subCardEl.querySelectorAll('button, [role="button"], a'));
    var found = allButtons.find(function (b) {
      return !b.closest('[id^="rm-playstore-sub-"]') &&
             (b.textContent || '').indexOf(keyword) !== -1;
    });
    if (found) {
      found.click();
      return true;
    }
    return false;
  }

  // Smooth 1-Tap Fullscreen Launcher for All 150 Sub-Categories & Service Chips
  function openSmoothSubServiceScreen(info, cleanSub, resolvedTitle, resolvedHindi, selectedChipText, isGame) {
    var now = Date.now();
    if (now - lastSubOpenTs < 280) return;
    lastSubOpenTs = now;

    if (!selectedChipText) {
      if ((cleanSub === '15-2' || cleanSub === '16-2') && typeof window.openFullscreenModule === 'function') {
        window.openFullscreenModule('16-2');
        return;
      }
      if ((cleanSub === '15-3' || cleanSub === '16-3') && typeof window.openFullscreenModule === 'function') {
        window.openFullscreenModule('16-3');
        return;
      }
    }

    var fs = document.getElementById('rm-fullscreen-view');
    var fsTitle = document.getElementById('fs-module-title');
    var fsContainer = document.getElementById('rm-module-container');
    if (!fs || !fsContainer) return;

    window.closeFullscreenModule = function () {
      fs.classList.add('hidden');
      fs.style.setProperty('display', 'none', 'important');
    };

    var activeHeading = selectedChipText || resolvedTitle;
    var activeSub = selectedChipText ? (resolvedTitle + ' • ' + resolvedHindi) : resolvedHindi;
    var icon = (info && info.icon) || (isGame ? '🎮' : '🛠️');

    if (fsTitle) {
      fsTitle.textContent = icon + ' ' + cleanSub + ' • ' + activeHeading;
    }

    var chips = (info && (info.services || info.chips)) || [];
    var chipsHtml = chips.map(function (c) {
      var isPicked = selectedChipText && c.text === selectedChipText;
      return '<div class="rm-fs-chip-option" style="padding:11px 12px;border-radius:11px;background:' + c.bg + ';color:' + c.c + ';border:' + (isPicked ? '2px solid #ffffff' : ('1.2px solid ' + c.c + '55')) + ';font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:space-between;cursor:pointer;">' +
               '<span>' + c.text + '</span>' +
               '<span style="font-size:11px;background:rgba(0,0,0,0.35);padding:2px 8px;border-radius:6px;color:#fff;">' + (isPicked ? '✓ चयनित' : 'चुनें ›') + '</span>' +
             '</div>';
    }).join('');

    var highlights = (info && info.highlights) || [];
    var highlightsHtml = highlights.map(function (h) {
      return '<div style="font-size:12.5px;color:#cbd5e1;display:flex;align-items:flex-start;gap:6px;"><span style="color:#10b981;font-weight:900;">✓</span><span>' + h + '</span></div>';
    }).join('');

    fsContainer.innerHTML = [
      '<div style="background:#0b0f19;border:1.5px solid rgba(56,189,248,0.4);border-radius:16px;padding:16px;display:flex;flex-direction:column;gap:14px;box-shadow:0 12px 32px rgba(0,0,0,0.65);margin-top:6px;">',
      '  <div style="display:flex;align-items:flex-start;gap:12px;border-bottom:1px solid rgba(255,255,255,0.08);padding-bottom:12px;">',
      '    <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#1e293b,#0f172a);border:1.5px solid rgba(56,189,248,0.45);display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0;">' + icon + '</div>',
      '    <div style="flex:1;min-width:0;">',
      '      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px;">',
      '        <span style="font-size:11px;font-weight:800;color:#38bdf8;background:rgba(56,189,248,0.15);padding:2px 8px;border-radius:5px;">' + cleanSub + '</span>',
      '        <span style="font-size:11px;font-weight:800;color:#facc15;background:rgba(250,204,21,0.12);padding:2px 8px;border-radius:5px;">' + ((info && info.rating) || '★ 4.9') + ' • ' + ((info && info.reviewCount) || 'सत्यापित') + '</span>',
      '      </div>',
      '      <div style="font-size:18px;font-weight:900;color:#ffffff;line-height:1.25;word-break:break-word;">' + activeHeading + '</div>',
      '      <div style="font-size:13px;font-weight:600;color:#34d399;margin-top:3px;line-height:1.35;word-break:break-word;">' + activeSub + '</div>',
      '    </div>',
      '  </div>',
      '  <div style="font-size:12px;font-weight:800;color:#94a3b8;text-transform:uppercase;">' + ((info && info.servicesTitle) || 'उपलब्ध सेवाएं व विकल्प (टैप कर चुनें):') + '</div>',
      '  <div style="display:flex;flex-direction:column;gap:8px;">' + chipsHtml + '</div>',
      '  <div style="background:rgba(15,23,42,0.9);border:1px solid rgba(255,255,255,0.08);border-radius:11px;padding:10px 12px;display:flex;flex-direction:column;gap:5px;">' + highlightsHtml + '</div>',
      '  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;padding-top:4px;">',
      '    <button type="button" id="rm-fs-confirm-btn" style="background:' + (isGame ? '#0284c7' : '#10b981') + ';color:#030712;font-weight:900;font-size:13px;padding:12px 10px;border-radius:12px;border:none;cursor:pointer;">' + (isGame ? '🎮 अभी खेलें' : '✓ अभी बुक / प्रारंभ करें') + '</button>',
      '    <button type="button" onclick="closeFullscreenModule()" style="background:#1e293b;border:1px solid rgba(148,163,184,0.4);color:#f8fafc;font-weight:700;font-size:13px;padding:12px 10px;border-radius:12px;cursor:pointer;">‹ कैटलॉग पर वापस</button>',
      '  </div>',
      '</div>'
    ].join('');

    Array.from(fsContainer.querySelectorAll('.rm-fs-chip-option')).forEach(function (optEl, idx) {
      optEl.onclick = function () {
        var picked = chips[idx] ? chips[idx].text : activeHeading;
        openSmoothSubServiceScreen(info, cleanSub, resolvedTitle, resolvedHindi, picked, isGame);
      };
    });

    var confirmBtn = fsContainer.querySelector('#rm-fs-confirm-btn');
    if (confirmBtn) {
      confirmBtn.onclick = function () {
        alert('आपका अनुरोध सफलतापूर्वक प्रारंभ हो गया है:\n' + activeHeading);
      };
    }

    fs.classList.remove('hidden');
    fs.style.setProperty('display', 'flex', 'important');
    fs.style.setProperty('z-index', '99999', 'important');
  }

  // RENDER SUB-CARD (ZERO TEXT CUTOFF + INTERACTIVE TAP HIGHLIGHT GLOW + 50 CATEGORIES RICH SUPPORT)
  function renderSubCard(subCardEl, catId, subId) {
    if (!subCardEl) return;
    var CANONICAL_SUB_MATRIX = window.RM_CANONICAL_SUB_MATRIX || {};
    var ids = getNormalizedIds(catId);
    var rawSub = String(subId || '').replace(/^[cg]/, '');
    var subParts = rawSub.split('-');
    var subIdx = subParts[1] || '1';
    var cleanSub = ids.paddedId + '-' + subIdx;
    var intNum = ids.intNum;
    var isGame = intNum >= 34;

    var defaultChips = isGame ? [
      { text: '🎮 देसी P2P लाइव गेमप्ले', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
      { text: '⚔️ 1v1 क्विक बैटल व टूर्नामेंट', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
      { text: '👥 प्राइवेट रूम कोड (दोस्तों संग)', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
      { text: '🛡️ 100% असली स्थानीय खिलाड़ी', bg: 'rgba(192,132,252,0.15)', c: '#c084fc' }
    ] : [
      { text: '✓ 100% सत्यापित सुविधा', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
      { text: '⚡ त्वरित स्थानीय पहुंच', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
      { text: '🛡️ सुरक्षित व पारदर्शी', bg: 'rgba(250,204,21,0.15)', c: '#facc15' },
      { text: '📋 पक्की ऑनलाइन रसीद', bg: 'rgba(244,114,182,0.15)', c: '#f472b6' }
    ];

    var defaultHighlights = isGame ? [
      'कोई AI बॉट नहीं — केवल असली स्थानीय खिलाड़ियों के साथ वास्तविक मुकाबला।',
      'कोई नकद सट्टा नहीं — विशुद्ध पारिवारिक मनोरंजन एवं वीकेंड मेडल लीग।',
      '2G व 3G नेटवर्क पर भी बिना रुकावट स्मूथ व सुपरफास्ट गेमिंग।'
    ] : [
      'सत्यापित और प्रशिक्षित विशेषज्ञों द्वारा विश्वसनीय सेवा व उत्पाद आपूर्ति।',
      'तय रेट कार्ड और पारदर्शी ऑनलाइन रसीद।',
      'Rise Mitra कार्य संतुष्टि गारंटी व प्रत्यक्ष सहायता।'
    ];

    var regSub = fetchSubcategoryRegistryData(ids, cleanSub);
    var info = regSub || {
      code: '[' + cleanSub + ']',
      icon: isGame ? '🎮' : '🛠️',
      title: (CANONICAL_SUB_MATRIX[cleanSub] && CANONICAL_SUB_MATRIX[cleanSub].title) || (isGame ? ('देसी खेल ' + cleanSub) : ('सेवा ' + cleanSub)),
      hindiTitle: (CANONICAL_SUB_MATRIX[cleanSub] && CANONICAL_SUB_MATRIX[cleanSub].hindiTitle) || (isGame ? 'पारंपरिक भारतीय मनोरंजन क्लब' : 'प्रमाणित व विश्वसनीय सेवा'),
      categoryTag: isGame ? 'देसी खेल प्रतियोगिता' : 'जनसुविधा नेटवर्क',
      rating: '★ 4.9',
      reviewCount: isGame ? '18k+ खिलाड़ी' : '1,500+ समीक्षाएं',
      metaBadge: isGame ? '⚡ लाइव P2P मुकाबला' : '⚡ त्वरित समाधान',
      servicesTitle: isGame ? 'उपलब्ध गेम मोड्स व फीचर्स:' : 'उपलब्ध प्रमाणित सेवाएं व उत्पाद:',
      services: defaultChips,
      highlights: defaultHighlights,
      btnText: isGame ? 'खेलें ➔' : 'खोलें ➔'
    };

    var resolvedTitle = info.title || (CANONICAL_SUB_MATRIX[cleanSub] && CANONICAL_SUB_MATRIX[cleanSub].title) || ('सेवा ' + cleanSub);
    var resolvedHindi = info.hindiTitle || info.hindi || (CANONICAL_SUB_MATRIX[cleanSub] && CANONICAL_SUB_MATRIX[cleanSub].hindiTitle) || 'प्रमाणित व विश्वसनीय सेवा';
    var renderStateKey = cleanSub + ':' + resolvedTitle + ':' + (info.icon || '');

    if (subCardEl.getAttribute('data-rm-sub-rendered') === renderStateKey) {
      return;
    }

    // Hard-collapse outer container: Eliminate vertical void completely
    subCardEl.style.setProperty('height', 'auto', 'important');
    subCardEl.style.setProperty('min-height', 'auto', 'important');
    subCardEl.style.setProperty('display', 'flex', 'important');
    subCardEl.style.setProperty('flex-direction', 'column', 'important');
    subCardEl.style.setProperty('justify-content', 'flex-start', 'important');
    subCardEl.style.setProperty('gap', '0px', 'important');
    subCardEl.style.setProperty('padding', '12px !important', 'important');

    var canonicalSubId = 'rm-playstore-sub-' + cleanSub;

    // Purge conflicting legacy or duplicate containers
    Array.from(subCardEl.children).forEach(function (child) {
      if (child.id && (child.id.indexOf('rm-master-subcard-') !== -1 || child.id.indexOf('subcard-enrich-') !== -1 || (child.id.indexOf('rm-playstore-sub-') === 0 && child.id !== canonicalSubId))) {
        child.remove();
      } else if (child.id !== canonicalSubId && !child.classList.contains('sivme-notch-pill')) {
        child.style.setProperty('display', 'none', 'important');
      }
    });

    var container = subCardEl.querySelector('#' + canonicalSubId);
    if (!container) {
      container = document.createElement('div');
      container.id = canonicalSubId;
      container.style.cssText = [
        'width: 100% !important',
        'display: flex !important',
        'flex-direction: column !important',
        'gap: 10px !important',
        'background: rgba(15, 23, 42, 0.85) !important',
        'border: 1.5px solid rgba(56, 189, 248, 0.28) !important',
        'border-radius: 14px !important',
        'padding: 14px !important',
        'box-sizing: border-box !important',
        'text-align: left !important',
        'cursor: pointer !important',
        'touch-action: manipulation !important',
        'transition: border-color 0.2s ease, box-shadow 0.2s ease !important'
      ].join(';');

      // Sub-card active tap neon border highlight
      container.addEventListener('pointerdown', function () {
        this.style.setProperty('border-color', 'rgba(56, 189, 248, 0.8)', 'important');
        this.style.setProperty('box-shadow', '0 0 16px rgba(56, 189, 248, 0.25)', 'important');
      });
      container.addEventListener('pointerup', function () {
        this.style.setProperty('border-color', 'rgba(56, 189, 248, 0.28)', 'important');
        this.style.setProperty('box-shadow', 'none', 'important');
      });

      subCardEl.appendChild(container);
    }

    var servicesList = info.services || info.chips || defaultChips;
    var servicesHtml = servicesList.map(function (s) {
      return '<span class="rm-service-chip" style="font-size:13px;font-weight:600;padding:5px 10px;background:' + s.bg + ';color:' + s.c + ';border:1.2px solid ' + s.c + '44;border-radius:7px;display:inline-flex;align-items:center;cursor:pointer;touch-action:manipulation;">' + s.text + '</span>';
    }).join(' ');

    var highlightsHtml = (info.highlights || defaultHighlights).map(function (h) {
      return '<div style="font-size:12.5px;color:#cbd5e1;line-height:1.45;display:flex;align-items:flex-start;gap:6px;"><span style="color:#10b981;font-weight:900;">✓</span><span>' + h + '</span></div>';
    }).join('');

    container.innerHTML = [
      '<!-- Top Row: Left Column (24px Number Top, Logo Below) + Right Column (20px Bold Titles, Zero Cutoff) -->',
      '<div style="display: flex; align-items: flex-start; gap: 12px; width: 100%;">',
      '  <!-- Left Column Stack -->',
      '  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-start; gap: 5px; flex-shrink: 0; min-width: 52px;">',
      '    <div style="font-size: 24px; font-weight: 900; color: #38bdf8; font-family: ui-monospace, monospace; line-height: 1; text-align: center; letter-spacing: -0.5px;">' + cleanSub + '.</div>',
      '    <div style="width: 48px; height: 48px; border-radius: 13px; background: linear-gradient(135deg, #1e293b, #0f172a); border: 1.5px solid rgba(56, 189, 248, 0.4); display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">',
      '      <span style="font-size: 26px; line-height: 1;">' + (info.icon || (isGame ? '🎮' : '🛠️')) + '</span>',
      '    </div>',
      '  </div>',
      '  <!-- Right Column Stack: 20px Bold Title & 14px Subtitle -->',
      '  <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0; padding-top: 1px;">',
      '    <div style="display: flex; align-items: center; gap: 6px;">',
      '      <span style="font-size: 11px; font-weight: 800; color: #94a3b8; text-transform: uppercase; background: rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 4px;">' + (info.categoryTag || (isGame ? 'देसी खेल प्रतियोगिता' : 'Rise Mitra Official')) + '</span>',
      '    </div>',
      '    <div style="font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: -0.3px; line-height: 1.25; margin-top: 3px; white-space: normal; word-break: break-word;">' + resolvedTitle + '</div>',
      '    <div style="font-size: 14px; font-weight: 700; color: #34d399; line-height: 1.35; margin-top: 3px; white-space: normal; word-break: break-word;">' + resolvedHindi + '</div>',
      '  </div>',
      '</div>',
      '<!-- Play Store Rating & Stats Strip -->',
      '<div style="display: flex; align-items: center; gap: 8px; width: 100%; margin-top: 1px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.08); flex-wrap: wrap;">',
      '  <span style="font-size: 12.5px; font-weight: 800; color: #facc15; background: rgba(250, 204, 21, 0.12); padding: 2px 7px; border-radius: 5px;">' + (info.rating || '★ 4.9') + '</span>',
      '  <span style="font-size: 12px; font-weight: 600; color: #94a3b8;">' + (info.reviewCount || (isGame ? '18k+ खिलाड़ी' : '1,500+ समीक्षाएं')) + '</span>',
      '  <span style="font-size: 12px; font-weight: 700; color: #34d399; background: rgba(52, 211, 153, 0.12); padding: 2px 7px; border-radius: 5px;">' + (info.metaBadge || (isGame ? '⚡ लाइव P2P मुकाबला' : '⚡ त्वरित समाधान')) + '</span>',
      '</div>',
      '<!-- Services & Products Chips Row -->',
      '<div style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;">' + (info.servicesTitle || (isGame ? 'उपलब्ध गेम मोड्स व फीचर्स:' : 'उपलब्ध सुविधाएं व सामग्री:')) + '</div>',
      '<div style="display: flex; flex-wrap: wrap; gap: 6px; width: 100%;">' + servicesHtml + '</div>',
      '<!-- Highlights Feature Box -->',
      '<div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 10px 12px; margin-top: 4px; display: flex; flex-direction: column; gap: 5px;">' + highlightsHtml + '</div>',
      '<!-- Row 5: 3 Action Buttons (Zero Clipping Guaranteed + Responsive 0.8fr 0.8fr 1.7fr Grid + Active Tap Glow) -->',
      '<div style="display: grid; grid-template-columns: 0.8fr 0.8fr 1.7fr; gap: 7px; width: 100%; margin-top: 6px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.08); box-sizing: border-box;">',
      '  <button type="button" class="rm-act-pin" style="min-width: 0 !important; background: rgba(30, 41, 59, 0.9); border: 1.2px solid rgba(248, 113, 113, 0.4); color: #fca5a5; border-radius: 10px; padding: 8px 3px; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 3px; cursor: pointer; transition: all 0.15s ease;" onpointerdown="this.style.borderColor=\'#f87171\';this.style.boxShadow=\'0 0 10px rgba(248,113,113,0.6)\'" onpointerup="this.style.borderColor=\'rgba(248,113,113,0.4)\';this.style.boxShadow=\'none\'">',
      '    <span>📌</span> <span>पिन</span>',
      '  </button>',
      '  <button type="button" class="rm-act-video" style="min-width: 0 !important; background: rgba(30, 41, 59, 0.9); border: 1.2px solid rgba(167, 139, 250, 0.4); color: #c4b5fd; border-radius: 10px; padding: 8px 3px; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 3px; cursor: pointer; transition: all 0.15s ease;" onpointerdown="this.style.borderColor=\'#a78bfa\';this.style.boxShadow=\'0 0 10px rgba(167,139,250,0.6)\'" onpointerup="this.style.borderColor=\'rgba(167,139,250,0.4)\';this.style.boxShadow=\'none\'">',
      '    <span>▶</span> <span>वीडियो</span>',
      '  </button>',
      '  <button type="button" class="rm-act-open" style="min-width: 0 !important; background: ' + (isGame ? '#0284c7' : '#059669') + '; border: 1.5px solid ' + (isGame ? '#38bdf8' : '#10b981') + '; color: #ffffff; border-radius: 10px; padding: 8px 6px; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 4px; box-shadow: 0 3px 8px rgba(0,0,0,0.4); cursor: pointer; text-align: center; line-height: 1.15; white-space: normal; word-break: break-word; transition: all 0.15s ease;" onpointerdown="this.style.borderColor=\'#38bdf8\';this.style.boxShadow=\'0 0 14px rgba(56,189,248,0.85)\';this.style.transform=\'scale(0.97)\'" onpointerup="this.style.borderColor=\'#10b981\';this.style.boxShadow=\'0 3px 8px rgba(0,0,0,0.4)\';this.style.transform=\'scale(1)\'">',
      '    <span>' + (info.btnText || (isGame ? 'खेलें ➔' : 'खोलें ➔')) + '</span>',
      '  </button>',
      '</div>'
    ].join('');

    // Wire native ZEL click delegation + Smooth 1-Tap Fullscreen Launcher
    var pinBtn = container.querySelector('.rm-act-pin');
    var vidBtn = container.querySelector('.rm-act-video');
    var openBtn = container.querySelector('.rm-act-open');

    if (pinBtn) {
      pinBtn.onclick = function (e) {
        e.stopPropagation();
        triggerLegacySubAction(subCardEl, 'पिन');
      };
    }
    if (vidBtn) {
      vidBtn.onclick = function (e) {
        e.stopPropagation();
        triggerLegacySubAction(subCardEl, 'वीडियो');
      };
    }
    if (openBtn) {
      openBtn.onclick = function (e) {
        e.stopPropagation();
        openSmoothSubServiceScreen(info, cleanSub, resolvedTitle, resolvedHindi, null, isGame);
      };
    }

    Array.from(container.querySelectorAll('.rm-service-chip')).forEach(function (chipEl) {
      chipEl.onclick = function (e) {
        e.stopPropagation();
        openSmoothSubServiceScreen(info, cleanSub, resolvedTitle, resolvedHindi, (chipEl.textContent || '').trim(), isGame);
      };
    });

    container.onclick = function (e) {
      if (e.target.closest('.rm-act-pin, .rm-act-video, .rm-act-open, .rm-service-chip, .sivme-notch-pill')) return;
      e.stopPropagation();
      openSmoothSubServiceScreen(info, cleanSub, resolvedTitle, resolvedHindi, null, isGame);
    };

    subCardEl.setAttribute('data-rm-sub-rendered', renderStateKey);
  }

  window.RM_SUB_CARD_RENDERER = {
    renderSubCard: renderSubCard,
    triggerLegacySubAction: triggerLegacySubAction,
    openSmoothSubServiceScreen: openSmoothSubServiceScreen
  };

  if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
    window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog();
  }
})();
