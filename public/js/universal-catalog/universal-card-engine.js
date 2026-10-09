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
    var supportBadge = regData ? regData.supportBadge : '24x7 जनसहायता केंद्र';

    // Universal Future-Proof Domain Value Pillars
    var universalPillars = [
      { icon: '🛡️', text: '100% आधार व पुलिस सत्यापित सेवा प्रदाता नेटवर्क', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.12)' },
      { icon: '⚡', text: 'पारदर्शी तय रेट कार्ड, डिजिटल बिलिंग व शून्य छुपा शुल्क', color: '#34d399', bg: 'rgba(52, 211, 153, 0.12)' },
      { icon: '🔒', text: 'Rise Mitra कार्य संतुष्टि गारंटी व प्रत्यक्ष सहायता', color: '#facc15', bg: 'rgba(250, 204, 21, 0.12)' }
    ];

    // Wipe and hide all legacy text nodes and outside duplicate numbers (kills 009. 09. ▼)
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
        'text-align: left !important'
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
      '  <div style="font-size: 13px; font-weight: 800; color: ' + (isOpen ? '#f87171' : '#34d399') + '; background: ' + (isOpen ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)') + '; border: 1px solid ' + (isOpen ? '#ef4444' : '#10b981') + '; padding: 6px 14px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 6px;">',
      '    <span>' + countText + (isOpen ? 'छुपाएं' : 'देखें') + '</span>',
      '    <span style="font-size: 11px;">' + (isOpen ? '▲' : '▼') + '</span>',
      '  </div>',
      '</div>'
    ].join('');

    headerEl.setAttribute('data-rm-parent-rendered', targetState);
  }

  // Helper: Trigger original hidden button in legacy DOM
  function triggerLegacySubAction(subCardEl, keyword) {
    if (!subCardEl) return;
    var allButtons = Array.from(subCardEl.querySelectorAll('button, [role="button"], a'));
    var found = allButtons.find(function (b) {
      return !b.closest('#rm-playstore-sub-' + subCardEl.getAttribute('data-rm-sub-rendered')) &&
             (b.textContent || '').indexOf(keyword) !== -1;
    });
    if (found) {
      found.click();
    }
  }

  // 2. RENDER SUB-CARD (LEFT: 24PX SUB-NUMBER TOP + LOGO BELOW | RIGHT: 20PX TITLE | ZERO OVERLAP 3 BUTTONS)
  function renderSubCard(subCardEl, catId, subId) {
    if (!subCardEl) return;
    var numId = String(catId).replace(/[^0-9]/g, '');
    var cleanSub = String(subId).replace(/^[c]/, '');

    if (subCardEl.getAttribute('data-rm-sub-rendered') === cleanSub) {
      return;
    }

    var info = (window.RM_CATALOG_REGISTRY && window.RM_CATALOG_REGISTRY.getSubcategoryData(numId, cleanSub)) || {
      code: '[' + cleanSub + ']',
      icon: '🛠️',
      title: 'सेवा ' + cleanSub,
      hindiTitle: 'प्रमाणित व विश्वसनीय सेवा',
      categoryTag: 'जनसुविधा नेटवर्क',
      rating: '★ 4.8',
      reviewCount: '1,500+ समीक्षाएं',
      metaBadge: '⚡ त्वरित समाधान',
      servicesTitle: 'उपलब्ध प्रमाणित सेवाएं:',
      services: [
        { text: '✓ 100% सत्यापित सुविधा', bg: 'rgba(56,189,248,0.15)', c: '#38bdf8' },
        { text: '⚡ त्वरित स्थानीय पहुंच', bg: 'rgba(52,211,153,0.15)', c: '#34d399' },
        { text: '🛡️ सुरक्षित व पारदर्शी', bg: 'rgba(250,204,21,0.15)', c: '#facc15' }
      ],
      highlights: [
        'सत्यापित और प्रशिक्षित विशेषज्ञों द्वारा विश्वसनीय सेवा।',
        'तय रेट कार्ड और पारदर्शी ऑनलाइन रसीद।',
        'Rise Mitra संतुष्टि वारंटी व प्रत्यक्ष सहायता।'
      ],
      btnText: 'खोलें ➔'
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
        'background: rgba(15, 23, 42, 0.75) !important',
        'border: 1.5px solid rgba(56, 189, 248, 0.25) !important',
        'border-radius: 14px !important',
        'padding: 14px !important',
        'box-sizing: border-box !important',
        'text-align: left !important'
      ].join(';');

      subCardEl.appendChild(container);
    }

    var servicesList = info.services || info.chips || [];
    var servicesHtml = servicesList.map(function (s) {
      return '<span style="font-size:13px;font-weight:600;padding:5px 10px;background:' + s.bg + ';color:' + s.c + ';border:1.2px solid ' + s.c + '44;border-radius:7px;display:inline-flex;align-items:center;">' + s.text + '</span>';
    }).join(' ');

    var highlightsHtml = (info.highlights || []).map(function (h) {
      return '<div style="font-size:12.5px;color:#cbd5e1;line-height:1.45;display:flex;align-items:flex-start;gap:6px;"><span style="color:#10b981;font-weight:900;">✓</span><span>' + h + '</span></div>';
    }).join('');

    container.innerHTML = [
      '<!-- Top Row: Left Column (24px Number Top, Logo Below) + Right Column (20px Bold Titles, Zero Cutoff) -->',
      '<div style="display: flex; align-items: flex-start; gap: 12px; width: 100%;">',
      '  <!-- Left Column Stack -->',
      '  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-start; gap: 5px; flex-shrink: 0; min-width: 52px;">',
      '    <div style="font-size: 24px; font-weight: 900; color: #38bdf8; font-family: ui-monospace, monospace; line-height: 1; text-align: center; letter-spacing: -0.5px;">' + cleanSub + '.</div>',
      '    <div style="width: 48px; height: 48px; border-radius: 13px; background: linear-gradient(135deg, #1e293b, #0f172a); border: 1.5px solid rgba(56, 189, 248, 0.4); display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">',
      '      <span style="font-size: 26px; line-height: 1;">' + info.icon + '</span>',
      '    </div>',
      '  </div>',
      '  <!-- Right Column Stack: 20px Bold Title & 14px Subtitle -->',
      '  <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0; padding-top: 1px;">',
      '    <div style="display: flex; align-items: center; gap: 6px;">',
      '      <span style="font-size: 11px; font-weight: 800; color: #94a3b8; text-transform: uppercase; background: rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 4px;">' + (info.categoryTag || 'Rise Mitra Official') + '</span>',
      '    </div>',
      '    <div style="font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: -0.3px; line-height: 1.25; margin-top: 3px; white-space: normal; word-break: break-word;">' + info.title + '</div>',
      '    <div style="font-size: 14px; font-weight: 700; color: #34d399; line-height: 1.35; margin-top: 3px; white-space: normal; word-break: break-word;">' + (info.hindiTitle || info.hindi || '') + '</div>',
      '  </div>',
      '</div>',
      '<!-- Play Store Rating & Stats Strip -->',
      '<div style="display: flex; align-items: center; gap: 8px; width: 100%; margin-top: 1px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.08); flex-wrap: wrap;">',
      '  <span style="font-size: 12.5px; font-weight: 800; color: #facc15; background: rgba(250, 204, 21, 0.12); padding: 2px 7px; border-radius: 5px;">' + info.rating + '</span>',
      '  <span style="font-size: 12px; font-weight: 600; color: #94a3b8;">' + info.reviewCount + '</span>',
      '  <span style="font-size: 12px; font-weight: 700; color: #34d399; background: rgba(52, 211, 153, 0.12); padding: 2px 7px; border-radius: 5px;">' + info.metaBadge + '</span>',
      '</div>',
      '<!-- Services Chips Row -->',
      '<div style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;">' + (info.servicesTitle || 'उपलब्ध सेवाएं:') + '</div>',
      '<div style="display: flex; flex-wrap: wrap; gap: 6px; width: 100%;">' + servicesHtml + '</div>',
      '<!-- Highlights Feature Box -->',
      '<div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 10px 12px; margin-top: 4px; display: flex; flex-direction: column; gap: 5px;">' + highlightsHtml + '</div>',
      '<!-- Row 5: 3 Action Buttons (Zero Overlap Guaranteed with min-width: 0) -->',
      '<div style="display: grid; grid-template-columns: 1fr 1fr 1.2fr; gap: 8px; width: 100%; margin-top: 6px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.08); box-sizing: border-box;">',
      '  <button type="button" class="rm-act-pin" style="min-width: 0 !important; background: rgba(30, 41, 59, 0.9); border: 1.2px solid rgba(248, 113, 113, 0.4); color: #fca5a5; border-radius: 10px; padding: 9px 4px; font-size: 12.5px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 4px; cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">',
      '    <span>📌</span> <span>पिन करें</span>',
      '  </button>',
      '  <button type="button" class="rm-act-video" style="min-width: 0 !important; background: rgba(30, 41, 59, 0.9); border: 1.2px solid rgba(167, 139, 250, 0.4); color: #c4b5fd; border-radius: 10px; padding: 9px 4px; font-size: 12.5px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 4px; cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">',
      '    <span>▶</span> <span>वीडियो</span>',
      '  </button>',
      '  <button type="button" class="rm-act-open" style="min-width: 0 !important; background: #059669; border: 1.5px solid #10b981; color: #ffffff; border-radius: 10px; padding: 9px 6px; font-size: 13.5px; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 4px; box-shadow: 0 3px 8px rgba(0,0,0,0.4); cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">',
      '    <span>' + (info.btnText || 'खोलें ➔') + '</span>',
      '  </button>',
      '</div>'
    ].join('');

    // Wire native ZEL click delegation to original background buttons
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
        triggerLegacySubAction(subCardEl, 'खोलें') || triggerLegacySubAction(subCardEl, 'संपर्क') || triggerLegacySubAction(subCardEl, 'उपलब्ध');
      };
    }

    subCardEl.setAttribute('data-rm-sub-rendered', cleanSub);
  }

  // 3. FULL AUTONOMOUS SCANNER ACROSS ALL 50 CATEGORIES
  function sweepCatalog() {
    if (isSweeping) return;
    isSweeping = true;
    try {
      var modal = document.getElementById('categoryModel') || document.body;
      var cats = modal.querySelectorAll('[data-cat-id]');
      cats.forEach(function (catEl) {
        var rawId = catEl.getAttribute('data-cat-id');
        if (!rawId) return;
        var cleanNum = rawId.replace(/[^0-9]/g, '');

        var header = catEl.querySelector(':scope > div:first-child');
        var sub = document.getElementById('sub-c' + cleanNum) || document.getElementById('sub-' + cleanNum);
        var isOpen = sub && !sub.classList.contains('hidden') && sub.style.display !== 'none';
        var subCards = sub ? sub.querySelectorAll(':scope > div') : [];

        if (header) {
          renderParentCard(header, cleanNum, isOpen, subCards.length);
        }

        if (sub && isOpen) {
          subCards.forEach(function (sc, idx) {
            renderSubCard(sc, cleanNum, cleanNum + '-' + (idx + 1));
          });
        }
      });
    } finally {
      isSweeping = false;
    }
  }

  // Auto Boot Engine: Polled & Click Delegated (Zero Mutation Observer Loop)
  function boot() {
    sweepCatalog();
    setTimeout(sweepCatalog, 100);
    setTimeout(sweepCatalog, 300);
    setTimeout(sweepCatalog, 800);
    setTimeout(sweepCatalog, 1500);

    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-cat-id], #categoryModel, button')) {
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
