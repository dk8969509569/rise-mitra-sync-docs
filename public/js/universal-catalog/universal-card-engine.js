/**
 * RISE MITRA — UNIVERSAL CATALOG CARD ENGINE (UI RENDERER)
 * MODULE        : Pure Modular Google Play Store App-Card Renderer (Decoupled SSOT)
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/universal-catalog/universal-card-engine.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var isSweeping = false;
  var lastParentTapTs = 0;
  var lastSubTapTs = 0;

  // Helper: Resolve Sub-Container across all ID conventions (sub-c1, sub-c01, sub-g34, sub-1, etc.)
  function resolveSubContainer(catEl, rawId, cleanNum) {
    var intNum = parseInt(cleanNum, 10);
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    return document.getElementById('sub-c' + cleanNum) ||
           document.getElementById('sub-c' + paddedNum) ||
           document.getElementById('sub-c' + intNum) ||
           document.getElementById('sub-g' + cleanNum) ||
           document.getElementById('sub-g' + paddedNum) ||
           document.getElementById('sub-g' + intNum) ||
           document.getElementById('sub-' + rawId) ||
           document.getElementById('sub-' + cleanNum) ||
           document.getElementById('sub-' + paddedNum) ||
           document.getElementById('sub-' + intNum) ||
           (catEl ? catEl.querySelector('[id^="sub-"]') : null);
  }

  // Helper: Open Fullscreen Micro-App Viewport on 1-Tap for Sub-Card or Service Chip
  function openOneTapSubServiceViewport(info, cleanSub, selectedChipText, isGame) {
    if (cleanSub === '16-2' && typeof window.openFullscreenModule === 'function') {
      window.openFullscreenModule('16-2');
      return;
    }
    if (cleanSub === '16-3' && typeof window.openFullscreenModule === 'function') {
      window.openFullscreenModule('16-3');
      return;
    }

    var fs = document.getElementById('rm-fullscreen-view');
    var fsTitle = document.getElementById('fs-module-title');
    var fsContainer = document.getElementById('rm-module-container');
    if (!fs || !fsContainer) return;

    if (typeof window.closeFullscreenModule !== 'function') {
      window.closeFullscreenModule = function () {
        fs.classList.add('hidden');
        fs.style.setProperty('display', 'none', 'important');
      };
    }

    var mainHeading = selectedChipText || (info && info.title) || ('सेवा ' + cleanSub);
    var subHeading = selectedChipText
      ? ((info && info.title ? info.title + ' • ' : '') + ((info && (info.hindiTitle || info.hindi)) || ''))
      : ((info && (info.hindiTitle || info.hindi)) || 'प्रमाणित व विश्वसनीय सेवा');
    var badgeIcon = (info && info.icon) || (isGame ? '🎮' : '🛠️');
    var ratingText = (info && info.rating) || '★ 4.9';
    var reviewText = (info && info.reviewCount) || (isGame ? '18k+ खिलाड़ी' : '1,500+ समीक्षाएं');

    if (fsTitle) {
      fsTitle.textContent = badgeIcon + ' ' + cleanSub + '. ' + mainHeading;
    }

    var chipsArray = (info && (info.services || info.chips)) || [];
    var chipsListHtml = chipsArray.map(function (s) {
      var isSelected = selectedChipText && s.text === selectedChipText;
      return '<div style="padding:9px 12px;border-radius:10px;background:' + s.bg + ';color:' + s.c + ';border:' + (isSelected ? '2px solid #ffffff' : ('1.2px solid ' + s.c + '44')) + ';font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:space-between;">' +
               '<span>' + s.text + '</span>' +
               '<span style="font-size:11px;opacity:0.9;">' + (isSelected ? '✓ चयनित' : 'उपलब्ध') + '</span>' +
             '</div>';
    }).join('');

    fsContainer.innerHTML = [
      '<div style="background:rgba(15,23,42,0.95);border:1.5px solid rgba(56,189,248,0.35);border-radius:16px;padding:16px;display:flex;flex-direction:column;gap:14px;box-shadow:0 10px 30px rgba(0,0,0,0.6);margin-top:6px;">',
      '  <div style="display:flex;align-items:flex-start;gap:12px;border-bottom:1px solid rgba(255,255,255,0.08);padding-bottom:12px;">',
      '    <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#1e293b,#0f172a);border:1.5px solid rgba(56,189,248,0.45);display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0;">' + badgeIcon + '</div>',
      '    <div style="flex:1;min-width:0;">',
      '      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px;">',
      '        <span style="font-size:11px;font-weight:800;color:#38bdf8;background:rgba(56,189,248,0.15);padding:2px 8px;border-radius:5px;">कोड: ' + cleanSub + '</span>',
      '        <span style="font-size:11px;font-weight:800;color:#facc15;background:rgba(250,204,21,0.12);padding:2px 8px;border-radius:5px;">' + ratingText + ' (' + reviewText + ')</span>',
      '      </div>',
      '      <div style="font-size:19px;font-weight:900;color:#ffffff;line-height:1.25;word-break:break-word;">' + mainHeading + '</div>',
      '      <div style="font-size:13.5px;font-weight:600;color:#34d399;margin-top:3px;line-height:1.35;word-break:break-word;">' + subHeading + '</div>',
      '    </div>',
      '  </div>',
      '  <div style="display:flex;flex-direction:column;gap:7px;">',
      '    <div style="font-size:12px;font-weight:700;color:#94a3b8;text-transform:uppercase;">' + ((info && info.servicesTitle) || 'उपलब्ध सेवाएं व विकल्प:') + '</div>',
           chipsListHtml,
      '  </div>',
      '  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;padding-top:6px;">',
      '    <button type="button" id="rm-fs-primary-act" style="background:' + (isGame ? '#0284c7' : '#059669') + ';border:1.5px solid ' + (isGame ? '#38bdf8' : '#10b981') + ';color:#ffffff;font-weight:800;font-size:13px;padding:12px 10px;border-radius:12px;cursor:pointer;">' + (isGame ? '🎮 अभी खेलें' : '✓ अभी बुक / ऑर्डर करें') + '</button>',
      '    <button type="button" onclick="closeFullscreenModule()" style="background:#1e293b;border:1px solid rgba(148,163,184,0.35);color:#e2e8f0;font-weight:700;font-size:13px;padding:12px 10px;border-radius:12px;cursor:pointer;">‹ कैटलॉग पर वापस</button>',
      '  </div>',
      '</div>'
    ].join('');

    var primaryBtn = fsContainer.querySelector('#rm-fs-primary-act');
    if (primaryBtn) {
      primaryBtn.onclick = function () {
        alert((isGame ? 'गेम रूम प्रारंभ हो रहा है: ' : 'आपका सेवा अनुरोध दर्ज हो गया है: ') + mainHeading);
      };
    }

    fs.classList.remove('hidden');
    fs.style.setProperty('display', 'flex', 'important');
  }

  // 1. RENDER UNIVERSAL PARENT CARD (CLEAN PLAY STORE APP-CARD - ZERO OUTSIDE NUMBERS)
  function renderParentCard(headerEl, catId, isOpen, subCount) {
    if (!headerEl) return;
    var numId = String(catId).replace(/[^0-9]/g, '');
    var intNum = parseInt(numId, 10);
    var displayNum = (intNum < 10 ? '0' : '') + intNum + '.';

    var targetState = numId + ':' + String(isOpen) + ':' + String(subCount || 0);
    if (headerEl.getAttribute('data-rm-parent-rendered') === targetState) {
      return;
    }

    var regData = (window.RM_CATALOG_REGISTRY && window.RM_CATALOG_REGISTRY.getCategoryData(numId)) || null;

    // Standard Google Play Store Authoritative Names (Folder A SSOT)
    var title = regData ? regData.title : ('Category ' + displayNum);
    var subtitle = regData ? regData.subtitle : 'दैनिक जनसेवाएं व आधिकारिक सुविधा केंद्र';
    var icon = regData ? regData.icon : '📦';
    var rating = regData ? regData.rating : '★ 4.9 (10k+ नागरिक)';
    var trustBadge = regData ? regData.trustBadge : 'Rise Verified Network';
    var supportBadge = regData ? regData.supportBadge : '24x7 सहायता केंद्र';

    // Universal Future-Proof Domain Value Pillars
    var universalPillars = [
      { icon: '🛡️', text: '100% आधार व पुलिस सत्यापित सेवा प्रदाता नेटवर्क', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.12)' },
      { icon: '⚡', text: 'पारदर्शी तय रेट कार्ड, डिजिटल बिलिंग व शून्य छुपा शुल्क', color: '#34d399', bg: 'rgba(52, 211, 153, 0.12)' },
      { icon: '🔒', text: 'Rise Mitra कार्य संतुष्टि गारंटी व प्रत्यक्ष सहायता', color: '#facc15', bg: 'rgba(250, 204, 21, 0.12)' }
    ];

    // Wipe and hide all legacy text nodes and outside stray duplicate numbers (kills 009. 09. ▼)
    Array.from(headerEl.childNodes).forEach(function (node) {
      if (node.nodeType === 1 && node.id && node.id.indexOf('rm-universal-parent-') !== -1) {
        return;
      }
      if (node.nodeType === 1) {
        node.style.display = 'none';
      } else if (node.nodeType === 3) {
        node.textContent = '';
      }
    });

    var container = headerEl.querySelector('#rm-universal-parent-' + numId);
    if (!container) {
      container = document.createElement('div');
      container.id = 'rm-universal-parent-' + numId;
      container.style.cssText = [
        'width: 100% !important',
        'display: flex !important',
        'flex-direction: column !important',
        'gap: 12px !important',
        'padding: 16px 14px 14px 14px !important',
        'box-sizing: border-box !important',
        'text-align: left !important',
        'cursor: pointer !important',
        'touch-action: manipulation !important'
      ].join(';');

      headerEl.appendChild(container);
    }

    var pillarsHtml = universalPillars.map(function (p) {
      return '<div style="font-size:13px;font-weight:700;padding:8px 12px;background:' + p.bg + ';color:' + p.color + ';border:1px solid ' + p.color + '33;border-radius:9px;display:flex;align-items:center;gap:8px;"><span style="font-size:15px;">' + p.icon + '</span><span>' + p.text + '</span></div>';
    }).join('');

    var countText = (subCount && subCount > 0) ? (subCount + ' सेवाएं ') : 'सभी सेवाएं ';

    container.innerHTML = [
      '<!-- Top Row: Squircle Badge [Icon + Order Inside] + Right Column [Play Store Bold Title & Subtitle] -->',
      '<div style="display: flex; align-items: flex-start; gap: 14px; width: 100%;">',
      '  <!-- Squircle Badge: Order & Icon strictly INSIDE, zero numbers outside -->',
      '  <div style="width: 58px; height: 58px; min-width: 58px; border-radius: 16px; background: linear-gradient(135deg, #1e293b, #0f172a); border: 1.5px solid rgba(56, 189, 248, 0.4); display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.45); flex-shrink: 0;">',
      '    <span style="font-size: 24px; line-height: 1;">' + icon + '</span>',
      '    <span style="font-size: 11px; font-weight: 800; color: #38bdf8; font-family: ui-monospace, monospace; margin-top: 3px; line-height: 1;">' + displayNum + '</span>',
      '  </div>',
      '  <!-- Right Column: Standard Play Store Bold Title & Clean Subtitle -->',
      '  <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">',
      '    <div style="font-size: 21px; font-weight: 900; color: #ffffff; letter-spacing: -0.3px; line-height: 1.25; margin-bottom: 4px; word-break: break-word;">' + title + '</div>',
      '    <div style="font-size: 13.5px; font-weight: 600; color: #34d399; line-height: 1.35; margin-bottom: 6px; word-break: break-word;">' + subtitle + '</div>',
      '    <!-- Badges Row -->',
      '    <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">',
      '      <span style="font-size: 11.5px; font-weight: 800; color: #facc15; background: rgba(250, 204, 21, 0.12); border: 1px solid rgba(250, 204, 21, 0.3); padding: 2px 7px; border-radius: 5px;">' + rating + '</span>',
      '      <span style="font-size: 11.5px; font-weight: 700; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); padding: 2px 7px; border-radius: 5px;">✓ ' + trustBadge + '</span>',
      '      <span style="font-size: 11.5px; font-weight: 700; color: #94a3b8; background: rgba(255, 255, 255, 0.06); padding: 2px 7px; border-radius: 5px;">' + supportBadge + '</span>',
      '    </div>',
      '  </div>',
      '</div>',
      '<!-- Row 2: Universal Domain Value Pillars -->',
      '<div style="display: flex; flex-direction: column; gap: 7px; width: 100%; margin-top: 4px;">' + pillarsHtml + '</div>',
      '<!-- Row 3: Dropdown Toggle Button -->',
      '<div style="display: flex; justify-content: flex-end; align-items: center; width: 100%; margin-top: 2px;">',
      '  <div class="rm-parent-toggle-pill" style="font-size: 13px; font-weight: 800; color: ' + (isOpen ? '#f87171' : '#34d399') + '; background: ' + (isOpen ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)') + '; border: 1px solid ' + (isOpen ? '#ef4444' : '#10b981') + '; padding: 6px 14px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; touch-action: manipulation;">',
      '    <span>' + countText + (isOpen ? 'छुपाएं' : 'देखें') + '</span>',
      '    <span style="font-size: 11px;">' + (isOpen ? '▲' : '▼') + '</span>',
      '  </div>',
      '</div>'
    ].join('');

    headerEl.setAttribute('data-rm-parent-rendered', targetState);
  }

  // Helper: Trigger original hidden button in legacy DOM (returns true if found & triggered)
  function triggerLegacySubAction(subCardEl, keyword) {
    if (!subCardEl) return false;
    var allButtons = Array.from(subCardEl.querySelectorAll('button, [role="button"], a'));
    var found = allButtons.find(function (b) {
      return !b.closest('#rm-playstore-sub-' + subCardEl.getAttribute('data-rm-sub-rendered')) &&
             (b.textContent || '').indexOf(keyword) !== -1;
    });
    if (found) {
      found.click();
      return true;
    }
    return false;
  }

  // 2. RENDER SUB-CARD (ZERO TEXT CUTOFF + INTERACTIVE TAP HIGHLIGHT GLOW + 50 CATEGORIES RICH SUPPORT)
  function renderSubCard(subCardEl, catId, subId) {
    if (!subCardEl) return;
    var numId = String(catId).replace(/[^0-9]/g, '');
    var cleanSub = String(subId).replace(/^[cg]/, '');
    var intNum = parseInt(numId, 10);
    var isGame = intNum >= 34;

    if (subCardEl.getAttribute('data-rm-sub-rendered') === cleanSub) {
      return;
    }

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

    var info = (window.RM_CATALOG_REGISTRY && window.RM_CATALOG_REGISTRY.getSubcategoryData(numId, cleanSub)) || {
      code: '[' + cleanSub + ']',
      icon: isGame ? '🎮' : '🛠️',
      title: isGame ? ('देसी खेल ' + cleanSub) : ('सेवा ' + cleanSub),
      hindiTitle: isGame ? 'पारंपरिक भारतीय मनोरंजन क्लब' : 'प्रमाणित व विश्वसनीय सेवा',
      categoryTag: isGame ? 'देसी खेल प्रतियोगिता' : 'जनसुविधा नेटवर्क',
      rating: '★ 4.9',
      reviewCount: isGame ? '18k+ खिलाड़ी' : '1,500+ समीक्षाएं',
      metaBadge: isGame ? '⚡ लाइव P2P मुकाबला' : '⚡ त्वरित समाधान',
      servicesTitle: isGame ? 'उपलब्ध गेम मोड्स व फीचर्स:' : 'उपलब्ध प्रमाणित सेवाएं व उत्पाद:',
      services: defaultChips,
      highlights: defaultHighlights,
      btnText: isGame ? 'खेलें ➔' : 'खोलें ➔'
    };

    // Hard-collapse outer container: Eliminate vertical void completely
    subCardEl.style.setProperty('height', 'auto', 'important');
    subCardEl.style.setProperty('min-height', 'auto', 'important');
    subCardEl.style.setProperty('display', 'flex', 'important');
    subCardEl.style.setProperty('flex-direction', 'column', 'important');
    subCardEl.style.setProperty('justify-content', 'flex-start', 'important');
    subCardEl.style.setProperty('gap', '0px', 'important');
    subCardEl.style.setProperty('padding', '12px !important', 'important');

    // Purge conflicting legacy containers
    Array.from(subCardEl.children).forEach(function (child) {
      if (child.id && (child.id.indexOf('rm-master-subcard-') !== -1 || child.id.indexOf('subcard-enrich-') !== -1)) {
        child.remove();
      } else if (child.id !== 'rm-playstore-sub-' + cleanSub && !child.classList.contains('sivme-notch-pill')) {
        child.style.display = 'none';
      }
    });

    var container = subCardEl.querySelector('#rm-playstore-sub-' + cleanSub);
    if (!container) {
      container = document.createElement('div');
      container.id = 'rm-playstore-sub-' + cleanSub;
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
    var servicesHtml = servicesList.map(function (s, chipIdx) {
      return '<span class="rm-service-chip" data-chip-idx="' + chipIdx + '" style="font-size:13px;font-weight:600;padding:5px 10px;background:' + s.bg + ';color:' + s.c + ';border:1.2px solid ' + s.c + '44;border-radius:7px;display:inline-flex;align-items:center;cursor:pointer;touch-action:manipulation;">' + s.text + '</span>';
    }).join(' ');

    var highlightsHtml = (info.highlights || defaultHighlights).map(function (h) {
      return '<div style="font-size:12.5px;color:#cbd5e1;line-height:1.45;display:flex;align-items:flex-start;gap:6px;"><span style="color:#10b981;font-weight:900;">✓</span><span>' + h + '</span></div>';
    }).join('');

    container.innerHTML = [
      '<!-- Top Row: Left Column (24px Number Top, Logo Below) + Right Column (20px Bold Titles, Zero Cutoff) -->',
      '<div class="rm-subcard-top-row" style="display: flex; align-items: flex-start; gap: 12px; width: 100%; cursor: pointer;">',
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
      '    <div style="font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: -0.3px; line-height: 1.25; margin-top: 3px; white-space: normal; word-break: break-word;">' + info.title + '</div>',
      '    <div style="font-size: 14px; font-weight: 700; color: #34d399; line-height: 1.35; margin-top: 3px; white-space: normal; word-break: break-word;">' + (info.hindiTitle || info.hindi || '') + '</div>',
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
      '  <button type="button" class="rm-act-pin" style="min-width: 0 !important; background: rgba(30, 41, 59, 0.9); border: 1.2px solid rgba(248, 113, 113, 0.4); color: #fca5a5; border-radius: 10px; padding: 8px 3px; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 3px; cursor: pointer; touch-action: manipulation; transition: all 0.15s ease;" onpointerdown="this.style.borderColor=\'#f87171\';this.style.boxShadow=\'0 0 10px rgba(248,113,113,0.6)\'" onpointerup="this.style.borderColor=\'rgba(248,113,113,0.4)\';this.style.boxShadow=\'none\'">',
      '    <span>📌</span> <span>पिन</span>',
      '  </button>',
      '  <button type="button" class="rm-act-video" style="min-width: 0 !important; background: rgba(30, 41, 59, 0.9); border: 1.2px solid rgba(167, 139, 250, 0.4); color: #c4b5fd; border-radius: 10px; padding: 8px 3px; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 3px; cursor: pointer; touch-action: manipulation; transition: all 0.15s ease;" onpointerdown="this.style.borderColor=\'#a78bfa\';this.style.boxShadow=\'0 0 10px rgba(167,139,250,0.6)\'" onpointerup="this.style.borderColor=\'rgba(167,139,250,0.4)\';this.style.boxShadow=\'none\'">',
      '    <span>▶</span> <span>वीडियो</span>',
      '  </button>',
      '  <button type="button" class="rm-act-open" style="min-width: 0 !important; background: ' + (isGame ? '#0284c7' : '#059669') + '; border: 1.5px solid ' + (isGame ? '#38bdf8' : '#10b981') + '; color: #ffffff; border-radius: 10px; padding: 8px 6px; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 4px; box-shadow: 0 3px 8px rgba(0,0,0,0.4); cursor: pointer; touch-action: manipulation; text-align: center; line-height: 1.15; white-space: normal; word-break: break-word; transition: all 0.15s ease;" onpointerdown="this.style.borderColor=\'#38bdf8\';this.style.boxShadow=\'0 0 14px rgba(56,189,248,0.85)\';this.style.transform=\'scale(0.97)\'" onpointerup="this.style.borderColor=\'#10b981\';this.style.boxShadow=\'0 3px 8px rgba(0,0,0,0.4)\';this.style.transform=\'scale(1)\'">',
      '    <span>' + (info.btnText || (isGame ? 'खेलें ➔' : 'खोलें ➔')) + '</span>',
      '  </button>',
      '</div>'
    ].join('');

    // Wire native ZEL click delegation to original background buttons + 1-Tap Instant Fallback
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
        var now = Date.now();
        if (now - lastSubTapTs < 250) return;
        lastSubTapTs = now;

        var triggered = triggerLegacySubAction(subCardEl, 'खोलें') ||
                        triggerLegacySubAction(subCardEl, 'खेलें') ||
                        triggerLegacySubAction(subCardEl, 'संपर्क') ||
                        triggerLegacySubAction(subCardEl, 'उपलब्ध');

        var fs = document.getElementById('rm-fullscreen-view');
        if (!triggered || (fs && fs.classList.contains('hidden'))) {
          openOneTapSubServiceViewport(info, cleanSub, null, isGame);
        }
      };
    }

    // Wire 1-Tap on each individual Service Chip (e.g., 🌟 एचडी स्टार फ्लेक्स बैनर...)
    var chipNodes = container.querySelectorAll('.rm-service-chip');
    chipNodes.forEach(function (chipEl) {
      chipEl.onclick = function (e) {
        e.stopPropagation();
        var now = Date.now();
        if (now - lastSubTapTs < 250) return;
        lastSubTapTs = now;
        openOneTapSubServiceViewport(info, cleanSub, (chipEl.textContent || '').trim(), isGame);
      };
    });

    // Wire 1-Tap on Sub-Card Header/Body (outside Pin & Video buttons)
    container.onclick = function (e) {
      if (e.target.closest('.rm-act-pin, .rm-act-video, .rm-act-open, .rm-service-chip, .sivme-notch-pill')) {
        return;
      }
      e.stopPropagation();
      var now = Date.now();
      if (now - lastSubTapTs < 250) return;
      lastSubTapTs = now;

      var triggered = triggerLegacySubAction(subCardEl, 'खोलें') ||
                      triggerLegacySubAction(subCardEl, 'खेलें');
      var fs = document.getElementById('rm-fullscreen-view');
      if (!triggered || (fs && fs.classList.contains('hidden'))) {
        openOneTapSubServiceViewport(info, cleanSub, null, isGame);
      }
    };

    subCardEl.setAttribute('data-rm-sub-rendered', cleanSub);
  }

  // 3. FULL AUTONOMOUS SCANNER ACROSS ALL 50 CATEGORIES (CHECKS BOTH sub-c AND sub-g CONTAINERS)
  function sweepCatalog() {
    if (isSweeping) return;
    isSweeping = true;
    try {
      var modal = document.getElementById('categoryModel') || document.getElementById('categoryModal') || document.body;
      var cats = modal.querySelectorAll('[data-cat-id]');
      cats.forEach(function (catEl) {
        var rawId = catEl.getAttribute('data-cat-id');
        if (!rawId) return;
        var cleanNum = rawId.replace(/[^0-9]/g, '');
        var intNum = parseInt(cleanNum, 10);
        var normNum = isNaN(intNum) ? cleanNum : String(intNum);

        var header = catEl.querySelector(':scope > div:first-child');
        var sub = resolveSubContainer(catEl, rawId, cleanNum);

        var isOpen = Boolean(sub && !sub.classList.contains('hidden') && window.getComputedStyle(sub).display !== 'none');
        var subCards = sub ? sub.querySelectorAll(':scope > div') : [];

        // Keep sub-container display and hidden class strictly synchronized
        if (sub) {
          if (isOpen) {
            sub.classList.remove('hidden');
            sub.style.setProperty('display', 'block', 'important');
          } else {
            sub.classList.add('hidden');
            sub.style.setProperty('display', 'none', 'important');
          }
        }

        if (header) {
          renderParentCard(header, normNum, isOpen, subCards.length);
        }

        if (sub && isOpen) {
          subCards.forEach(function (sc, idx) {
            renderSubCard(sc, normNum, normNum + '-' + (idx + 1));
          });
        }
      });
    } finally {
      isSweeping = false;
    }
  }

  // Auto Boot Engine: Polled & 1-Tap Click Delegated (Zero Mutation Observer Loop)
  function boot() {
    sweepCatalog();
    setTimeout(sweepCatalog, 100);
    setTimeout(sweepCatalog, 300);
    setTimeout(sweepCatalog, 800);
    setTimeout(sweepCatalog, 1500);

    document.addEventListener('click', function (e) {
      if (e.target.closest('.sivme-notch-pill')) return;

      // Deterministic 1-Tap Parent Category Accordion Toggle
      var catEl = e.target.closest('[data-cat-id]');
      if (catEl) {
        var rawId = catEl.getAttribute('data-cat-id') || '';
        var cleanNum = rawId.replace(/[^0-9]/g, '');
        var intNum = parseInt(cleanNum, 10);
        var normNum = isNaN(intNum) ? cleanNum : String(intNum);
        var header = catEl.querySelector(':scope > div:first-child');
        var sub = resolveSubContainer(catEl, rawId, cleanNum);

        if (header && sub && header.contains(e.target) && !sub.contains(e.target)) {
          var now = Date.now();
          if (now - lastParentTapTs < 280) {
            e.stopImmediatePropagation();
            e.preventDefault();
            return;
          }
          lastParentTapTs = now;

          e.stopImmediatePropagation();
          e.preventDefault();

          var currentlyOpen = !sub.classList.contains('hidden') && window.getComputedStyle(sub).display !== 'none';
          var nextOpen = !currentlyOpen;
          var subCards = sub.querySelectorAll(':scope > div');

          if (nextOpen) {
            sub.classList.remove('hidden');
            sub.style.setProperty('display', 'block', 'important');
            subCards.forEach(function (sc, idx) {
              renderSubCard(sc, normNum, normNum + '-' + (idx + 1));
            });
          } else {
            sub.classList.add('hidden');
            sub.style.setProperty('display', 'none', 'important');
          }

          renderParentCard(header, normNum, nextOpen, subCards.length);
          return;
        }
      }

      if (e.target.closest('[data-cat-id], #categoryModel, #categoryModal, button')) {
        setTimeout(sweepCatalog, 40);
        setTimeout(sweepCatalog, 250);
      }
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  window.RM_UNIVERSAL_CARD_ENGINE = {
    renderParentCard: renderParentCard,
    renderSubCard: renderSubCard,
    sweepCatalog: sweepCatalog
  };
})();
