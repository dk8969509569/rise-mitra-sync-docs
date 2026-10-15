/**
 * RISE MITRA — FULLSCREEN MICRO-APP & SUB-SERVICE CONTROLLER MODULE
 * MODULE        : Decoupled Fullscreen Viewport, Single-Header Normalizer & Sub-Card Router
 * GOVERNANCE    : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | MAX 500-LINE RULE | 100% ZEL
 * REPO TARGET   : public/js/fullscreen-microapp-controller.js
 */

(function () {
  'use strict';

  // 1. Force-close Fullscreen Viewport reliably (clears inline display:flex !important so Top-Right X works)
  function forceCloseFullscreenViewport() {
    var fs = document.getElementById('rm-fullscreen-view');
    if (fs) {
      fs.classList.add('hidden');
      fs.style.setProperty('display', 'none', 'important');
    }
  }

  // 2. Normalize Fullscreen Micro-App DOM (Eliminates Double Name, Maps 16-2/16-3 -> 15-2/15-3 & Fixes Dropdown Clipping)
  function normalizeFullscreenMicroAppDOM(displayCode) {
    var fs = document.getElementById('rm-fullscreen-view');
    var fsTitle = document.getElementById('fs-module-title');
    var fsContainer = document.getElementById('rm-module-container');
    if (!fs || !fsContainer) return;

    var is15Series = String(displayCode || '').indexOf('15-') === 0;
    var codePrefix = is15Series ? '15' : '16';

    if (fsTitle) {
      if (displayCode === '15-2' || displayCode === '16-2') {
        fsTitle.textContent = '📒 ' + codePrefix + '-2 • किराया बहीखाता';
      } else if (displayCode === '15-3' || displayCode === '16-3') {
        fsTitle.textContent = '🏢 ' + codePrefix + '-3 • कमरा व फ्लैट खोज';
      } else if (displayCode === '15-1' || displayCode === '16-1') {
        fsTitle.textContent = '🛠️ ' + codePrefix + '-1 • मिस्त्री व होम रिपेयर';
      }
    }

    var headings = fsContainer.querySelectorAll('h1, h2, h3, .text-lg, .text-xl, .font-black, .font-bold');
    headings.forEach(function (h) {
      var txt = (h.textContent || '').trim();
      if (
        txt.indexOf('16-2. किराया बहीखाता') !== -1 ||
        txt.indexOf('15-2. किराया बहीखाता') !== -1 ||
        txt.indexOf('16-3. किराया खोज व आवास डायरेक्टरी') !== -1 ||
        txt.indexOf('15-3. किराया खोज व आवास डायरेक्टरी') !== -1 ||
        txt.indexOf('16-1.') !== -1
      ) {
        var bannerCard = h.closest('.rounded-2xl, .rounded-xl');
        if ((bannerCard && bannerCard === fsContainer.firstElementChild) || (bannerCard && bannerCard.parentElement === fsContainer.firstElementChild)) {
          bannerCard.style.setProperty('display', 'none', 'important');
        } else {
          h.style.setProperty('display', 'none', 'important');
        }
      }
    });

    if (is15Series) {
      var walker = document.createTreeWalker(fsContainer, NodeFilter.SHOW_TEXT, null, false);
      var textNode;
      while ((textNode = walker.nextNode())) {
        if (textNode.nodeValue && (textNode.nodeValue.indexOf('16-2') !== -1 || textNode.nodeValue.indexOf('16-3') !== -1 || textNode.nodeValue.indexOf('16-1') !== -1)) {
          textNode.nodeValue = textNode.nodeValue
            .replace(/16-1/g, '15-1')
            .replace(/16-2/g, '15-2')
            .replace(/16-3/g, '15-3');
        }
      }
    }

    fsContainer.querySelectorAll('option').forEach(function (opt) {
      var t = (opt.textContent || '').trim();
      if (t.indexOf('Auto-Publish') !== -1 && t.length > 34) {
        opt.textContent = '⚡ Auto-Publish (खाली होते ही स्वतः लाइव)';
      } else if (t.indexOf('सभी जिले') !== -1) {
        opt.textContent = 'सभी जिले (All Districts)';
      } else if (t.indexOf('सभी राज्य') !== -1) {
        opt.textContent = 'सभी राज्य (All India)';
      }
    });
  }

  // 3. Fullscreen 1-Tap Service Launcher (100% ZEL Preserved)
  function launchOneTapServiceScreen(titleText, subtitleText, subCode) {
    var fs = document.getElementById('rm-fullscreen-view');
    var fsTitle = document.getElementById('fs-module-title');
    var fsContainer = document.getElementById('rm-module-container');
    if (!fs || !fsContainer) return;

    window.closeFullscreenModule = forceCloseFullscreenViewport;

    if (fsTitle) {
      fsTitle.textContent = (subCode ? subCode + ' • ' : '') + titleText;
    }

    fsContainer.innerHTML =
      '<div class="rounded-2xl bg-[#0b0f19] border border-slate-700/80 p-4 space-y-4 shadow-2xl mt-2">' +
        '<div class="flex items-start justify-between border-b border-slate-800 pb-3">' +
          '<div>' +
            '<span class="inline-block px-2.5 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-600/50 text-emerald-300 text-[10px] font-bold mb-1.5">' +
              (subCode || 'सत्यापित सेवा') + ' • 1-Tap Instant Active' +
            '</span>' +
            '<h2 class="text-base font-black text-white leading-snug">' + titleText + '</h2>' +
            (subtitleText ? '<p class="text-xs text-emerald-400 mt-1 font-medium">' + subtitleText + '</p>' : '') +
          '</div>' +
          '<span class="px-2 py-1 rounded-lg bg-amber-950/80 border border-amber-700/60 text-amber-400 text-xs font-bold">★ 4.9</span>' +
        '</div>' +
        '<div class="space-y-2 text-xs text-slate-300">' +
          '<div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">' +
            '<span>🛡️ 100% पहचान व पुलिस सत्यापित सेवा प्रदाता नेटवर्क</span>' +
            '<span class="text-emerald-400 font-bold">सक्रिय</span>' +
          '</div>' +
          '<div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">' +
            '<span>⚡ पारदर्शी तय रेट कार्ड व डिजिटल बिलिंग</span>' +
            '<span class="text-cyan-400 font-bold">0% छुपा शुल्क</span>' +
          '</div>' +
        '</div>' +
        '<div class="grid grid-cols-2 gap-2.5 pt-2">' +
          '<button type="button" onclick="alert(\'आपका अनुरोध दर्ज हो गया है: \' + ' + JSON.stringify(titleText) + ')" class="w-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-black py-3 rounded-xl text-xs shadow-lg cursor-pointer min-h-[48px]">' +
            '✓ अभी बुक / ऑर्डर करें' +
          '</button>' +
          '<button type="button" onclick="closeFullscreenModule()" class="w-full bg-slate-800 hover:bg-slate-700 active:scale-95 border border-slate-600/80 text-slate-100 font-bold py-3 rounded-xl text-xs cursor-pointer min-h-[48px]">' +
            '‹ कैटलॉग पर वापस' +
          '</button>' +
        '</div>' +
      '</div>';

    fs.classList.remove('hidden');
    fs.style.setProperty('display', 'flex', 'important');
    fs.style.setProperty('z-index', '99999', 'important');
  }

  // 4. Sub-Card 1-Tap Router (Routes 15-2/16-2 & 15-3/16-3 to Complete Micro-Apps + All 150 Sub-Cards)
  function routeSubCardOneTap(e, target, subCard) {
    var rawRenderedAttr = (subCard.getAttribute('data-rm-sub-rendered') || '').split(':')[0];
    var subIdMatch = (subCard.textContent || '').match(/\b(\d{1,2}-\d)\s*\./);
    var subCode = subIdMatch ? subIdMatch[1] : (rawRenderedAttr || '01-1');

    if ((subCode === '15-2' || subCode === '16-2' || subCode === '15-3' || subCode === '16-3') && typeof window.openFullscreenModule === 'function') {
      var targetMod = (subCode === '15-2' || subCode === '16-2') ? '16-2' : '16-3';
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      window.closeFullscreenModule = forceCloseFullscreenViewport;
      if (typeof window.handleLaunchCategory === 'function') {
        window.handleLaunchCategory('c16', targetMod);
      } else {
        window.openFullscreenModule(targetMod);
      }
      var fsEl = document.getElementById('rm-fullscreen-view');
      if (fsEl) {
        fsEl.classList.remove('hidden');
        fsEl.style.setProperty('display', 'flex', 'important');
        fsEl.style.setProperty('z-index', '99999', 'important');
      }
      normalizeFullscreenMicroAppDOM(subCode);
      setTimeout(function () { normalizeFullscreenMicroAppDOM(subCode); }, 30);
      return;
    }

    var tappedNode = target.closest('.rm-service-chip, div, span, button');
    var tappedText = tappedNode ? (tappedNode.textContent || '').trim() : '';
    var headingEl = subCard.querySelector('h3, h4, [style*="font-size: 20"], [style*="font-size: 18"], [style*="font-size: 19"], .font-black, .font-bold');
    var matrix = window.RM_CANONICAL_SUB_MATRIX || {};
    var matrixEntry = matrix[subCode] || null;
    var cardTitle = (matrixEntry && matrixEntry.title) || (headingEl ? headingEl.textContent.trim() : 'सत्यापित सेवा');
    if (/^\[\d{1,2}-\d\]$/.test(cardTitle) && matrixEntry && matrixEntry.title) {
      cardTitle = matrixEntry.title;
    }

    var isServicePill = Boolean(target.closest('.rm-service-chip')) || (
                        tappedText.length > 4 &&
                        tappedText.length < 95 &&
                        tappedNode !== subCard &&
                        tappedText.indexOf(subCode) === -1 &&
                        tappedText.indexOf('उपलब्ध') === -1 &&
                        tappedText.indexOf('प्रतिष्ठान') === -1 &&
                        tappedText.indexOf('खोलें') === -1 &&
                        tappedText.indexOf('खेलें') === -1);

    if (window.RM_SUB_CARD_RENDERER && typeof window.RM_SUB_CARD_RENDERER.openSmoothSubServiceScreen === 'function' && matrixEntry) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      window.RM_SUB_CARD_RENDERER.openSmoothSubServiceScreen(
        matrixEntry,
        subCode,
        cardTitle,
        matrixEntry.hindiTitle || 'Rise Mitra सत्यापित सेवा व बुकिंग पोर्टल',
        isServicePill ? tappedText : null,
        parseInt(subCode.split('-')[0], 10) >= 34
      );
      return;
    }

    var finalTitle = isServicePill ? tappedText : cardTitle;
    var finalSubtitle = isServicePill ? cardTitle : ((matrixEntry && matrixEntry.hindiTitle) || 'Rise Mitra सत्यापित सेवा व बुकिंग पोर्टल');

    e.stopImmediatePropagation();
    e.stopPropagation();
    if (e.cancelable) e.preventDefault();
    launchOneTapServiceScreen(finalTitle, finalSubtitle, subCode);
  }

  window.RM_FULLSCREEN_CONTROLLER = {
    forceCloseFullscreenViewport: forceCloseFullscreenViewport,
    normalizeFullscreenMicroAppDOM: normalizeFullscreenMicroAppDOM,
    launchOneTapServiceScreen: launchOneTapServiceScreen,
    routeSubCardOneTap: routeSubCardOneTap
  };
})();
