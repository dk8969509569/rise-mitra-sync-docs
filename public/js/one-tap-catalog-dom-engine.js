/**
 * RISE MITRA — PART 1B: MODULAR CATALOG DOM, CARD HYDRATION & NUMBERING ENGINE (SLIM <=300L ZEL)
 * MODULE        : SubContainer Resolver, Top-Left 24px Numbering, Destruction Shield & Card Hydrator
 * GOVERNANCE    : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 * REPO TARGET   : public/js/one-tap-catalog-dom-engine.js (Extracted from one-tap-catalog-hydrator.js v39)
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 * ==============================================================================
 * 🔒 TOP-HEADER FILE SCOPE LOCK (ANTI-CONFLICT GOVERNANCE RULE):
 *   ✅ ALLOWED IN THIS FILE   : SubContainer resolution, 0ms Accordion Open/Close DOM state,
 *                               .rm-parent-toggle-pill sync & Destruction Shields.
 *   🚫 FORBIDDEN IN THIS FILE : Global touchend/click listeners (belongs in one-tap-shell-bridge.js)
 *                               or Modal open/close dispatchers (belongs in one-tap-catalog-hydrator.js).
 * ==============================================================================
 */

(function () {
  'use strict';

  var isSyncingDOM = false;
  var hasRenderedCatalogOnce = false;
  var openStateMap = window.__RM_OPEN_CAT_STATE || { '15': true, '16': true };
  window.__RM_OPEN_CAT_STATE = openStateMap;

  // 1. Resolve sub-container across all 10 ID formats + validated sibling check + auto-create fallback for Games 33-50
  function resolveCategorySubContainer(catEl, rawId, cleanNum) {
    if (catEl && catEl.__rmSubBox && document.body.contains(catEl.__rmSubBox) &&
        catEl.__rmSubBox.id && catEl.__rmSubBox.id.indexOf('sub-') === 0) {
      return catEl.__rmSubBox;
    }
    var intNum = parseInt(cleanNum, 10);
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    var normNum = isNaN(intNum) ? cleanNum : String(intNum);
    var byId = document.getElementById('sub-c' + cleanNum) ||
               document.getElementById('sub-c' + paddedNum) ||
               document.getElementById('sub-c' + normNum) ||
               document.getElementById('sub-g' + cleanNum) ||
               document.getElementById('sub-g' + paddedNum) ||
               document.getElementById('sub-g' + normNum) ||
               document.getElementById('sub-' + rawId) ||
               document.getElementById('sub-' + cleanNum) ||
               document.getElementById('sub-' + paddedNum);
    if (byId) {
      if (catEl) catEl.__rmSubBox = byId;
      return byId;
    }

    if (catEl) {
      var inside = catEl.querySelector('[id^="sub-"]');
      if (inside) {
        catEl.__rmSubBox = inside;
        return inside;
      }
      var nextSib = catEl.nextElementSibling;
      if (nextSib && nextSib.id && nextSib.id.indexOf('sub-') === 0) {
        catEl.__rmSubBox = nextSib;
        return nextSib;
      }
      if (catEl.children.length > 1 && catEl.children[1].tagName === 'DIV' &&
          catEl.children[1].id && catEl.children[1].id.indexOf('sub-') === 0) {
        catEl.__rmSubBox = catEl.children[1];
        return catEl.children[1];
      }

      var created = document.createElement('div');
      created.id = (intNum >= 33 ? 'sub-g' : 'sub-c') + paddedNum;
      created.className = 'hidden space-y-2 mt-3 pt-2 border-t border-slate-800/80';
      created.setAttribute('data-rm-collapsed', 'true');
      for (var k = 1; k <= 3; k++) {
        var sc = document.createElement('div');
        sc.className = 'p-3 rounded-xl bg-slate-900/90 border border-slate-800';
        sc.setAttribute('data-sub-id', paddedNum + '-' + k);
        created.appendChild(sc);
      }
      catEl.appendChild(created);
      catEl.__rmSubBox = created;
      return created;
    }
    return null;
  }

  // 2. Promote Category Number (01. - 50.) & Sub-Card Number (01-1. - 50-3.) to Top-Left in Large Bold Size
  function enforceTopLeftLargeNumbering(catEl, subContainer, paddedNum) {
    if (!catEl) return;

    // Anti-Conflict Fast Guard: If universal-card-engine.js already rendered .rm-toplevel-num-badge at root, skip redundant parent DOM scan
    var existingBadge = catEl.querySelector('.rm-toplevel-num-badge');
    if (existingBadge) {
      if (existingBadge.textContent !== paddedNum + '.') {
        existingBadge.textContent = paddedNum + '.';
      }
    } else {
      var allEls = catEl.querySelectorAll('span, div');
      var tinyNumEl = null;
      for (var i = 0; i < allEls.length; i++) {
        var el = allEls[i];
        if (subContainer && subContainer.contains(el)) continue;
        if (el.classList && el.classList.contains('rm-toplevel-num-badge')) continue;
        if (el.children.length === 0 && el.textContent) {
          var t = el.textContent.trim();
          if (/^0?[1-9]\d?\s*\.?$/.test(t)) {
            tinyNumEl = el;
            break;
          }
        }
      }

      if (tinyNumEl) {
        var iconBox = tinyNumEl.parentElement;
        tinyNumEl.style.setProperty('display', 'none', 'important');
        if (iconBox && iconBox !== catEl) {
          for (var c = 0; c < iconBox.children.length; c++) {
            var ch = iconBox.children[c];
            if (ch !== tinyNumEl && !ch.classList.contains('rm-toplevel-num-badge')) {
              ch.style.setProperty('font-size', '26px', 'important');
              ch.style.setProperty('line-height', '1', 'important');
            }
          }
          var parentRow = iconBox.parentElement;
          if (parentRow && !parentRow.querySelector('.rm-toplevel-num-badge')) {
            var leftCol = document.createElement('div');
            leftCol.className = 'flex flex-col items-start shrink-0';
            leftCol.style.setProperty('display', 'flex', 'important');
            leftCol.style.setProperty('flex-direction', 'column', 'important');
            leftCol.style.setProperty('align-items', 'flex-start', 'important');

            var bigBadge = document.createElement('div');
            bigBadge.className = 'rm-toplevel-num-badge';
            bigBadge.textContent = paddedNum + '.';

            parentRow.insertBefore(leftCol, iconBox);
            leftCol.appendChild(bigBadge);
            leftCol.appendChild(iconBox);
          }
        }
      }
    }

    if (subContainer && subContainer.getAttribute('data-rm-collapsed') === 'false') {
      var subCards = subContainer.querySelectorAll(':scope > div');
      for (var s = 0; s < subCards.length; s++) {
        var sc = subCards[s];
        var expectedSubCode = paddedNum + '-' + (s + 1) + '.';
        var subLeaves = sc.querySelectorAll('span, div');
        for (var j = 0; j < subLeaves.length; j++) {
          var sl = subLeaves[j];
          if (sl.children.length === 0 && sl.textContent) {
            var st = sl.textContent.trim();
            if (/^\d{1,2}-\d\s*\.?$/.test(st)) {
              sl.textContent = expectedSubCode;
              sl.classList.add('rm-sublevel-num-badge');
              if (sl.parentElement && sl.parentElement !== sc) {
                sl.parentElement.style.setProperty('align-items', 'flex-start', 'important');
              }
              break;
            }
          }
        }
      }
    }
  }

  // 3. Lock legacy renderCatalogItems & sweepCatalog so background timers cannot cause lag or wipe accordions
  function installRenderDestructionShield() {
    if (typeof window.renderCatalogItems === 'function' && !window.renderCatalogItems.__rmShielded) {
      var origRender = window.renderCatalogItems;
      var shielded = function () {
        var t1 = document.getElementById('tier1-list');
        var t2 = document.getElementById('tier2-list');
        var alreadyHydrated = hasRenderedCatalogOnce || (t1 && t2 && t1.children.length >= 25 && t2.children.length >= 1 &&
                              t1.innerHTML.indexOf('लोड हो रहा है') === -1);
        if (alreadyHydrated) return;
        hasRenderedCatalogOnce = true;
        return origRender.apply(this, arguments);
      };
      shielded.__rmShielded = true;
      window.renderCatalogItems = shielded;
    }
    if (window.RM_UNIVERSAL_CARD_ENGINE) {
      if (typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function' && !window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog.__rmShielded) {
        var origSweep = window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog;
        var shieldedSweep = function () {
          var modal = document.getElementById('categoryModal');
          if (hasRenderedCatalogOnce && modal && !modal.querySelector('[data-cat-id]:not([data-rm-parent-rendered])')) {
            return;
          }
          return origSweep.apply(this, arguments);
        };
        shieldedSweep.__rmShielded = true;
        window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog = shieldedSweep;
      }
      if (typeof window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard === 'function' && !window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard.__rmShielded) {
        var origRenderParent = window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard;
        var shieldedRenderParent = function (targetEl, catId, isOpen, subCount) {
          var clean = String(catId || '').replace(/[^0-9]/g, '');
          var norm = clean ? String(parseInt(clean, 10)) : '';
          var syncedOpen = (norm && Object.prototype.hasOwnProperty.call(openStateMap, norm))
            ? Boolean(openStateMap[norm])
            : Boolean(isOpen);
          if (targetEl && targetEl.querySelector('[id^="rm-universal-parent-"]') && targetEl.__rmLastOpen === syncedOpen) {
            return;
          }
          if (targetEl) targetEl.__rmLastOpen = syncedOpen;
          return origRenderParent.call(this, targetEl, catId, syncedOpen, subCount);
        };
        shieldedRenderParent.__rmShielded = true;
        window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard = shieldedRenderParent;
      }
    }
  }

  // 4. Apply open/close state directly to a single Category Card (0ms O(1) instant — no DOM destruction loop)
  function applyCategoryOpenState(catEl, rawId, cleanNum, isOpen) {
    if (!catEl) return false;
    var intNum = parseInt(cleanNum, 10);
    var normNum = isNaN(intNum) ? cleanNum : String(intNum);
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);
    if (!subContainer) return false;

    var headerEl = catEl.__rmHeaderEl;
    if (!headerEl || !catEl.contains(headerEl)) {
      headerEl = (catEl.children && catEl.children.length > 1 && catEl.contains(subContainer) && catEl.children[0] !== subContainer)
        ? catEl.children[0]
        : (catEl.querySelector(':scope > div:first-child') || catEl);
      catEl.__rmHeaderEl = headerEl;
    }

    if (catEl.hasAttribute('onclick')) catEl.removeAttribute('onclick');
    if (headerEl && headerEl.hasAttribute('onclick')) headerEl.removeAttribute('onclick');

    if (isOpen) {
      subContainer.classList.remove('hidden');
      subContainer.setAttribute('data-rm-collapsed', 'false');
      subContainer.style.setProperty('display', 'block', 'important');
    } else {
      subContainer.classList.add('hidden');
      subContainer.setAttribute('data-rm-collapsed', 'true');
      subContainer.style.setProperty('display', 'none', 'important');
    }

    var subCards = subContainer.querySelectorAll(':scope > div');
    if (subCards.length === 0) {
      for (var cIdx = 1; cIdx <= 3; cIdx++) {
        var newSc = document.createElement('div');
        newSc.className = 'p-3 rounded-xl bg-slate-900/90 border border-slate-800';
        newSc.setAttribute('data-sub-id', paddedNum + '-' + cIdx);
        subContainer.appendChild(newSc);
      }
      subCards = subContainer.querySelectorAll(':scope > div');
    }

    var isAlreadyPlayStoreCard = Boolean(catEl.querySelector('[id^="rm-universal-parent-"]')) ||
      catEl.hasAttribute('data-rm-parent-rendered') ||
      (headerEl && headerEl.hasAttribute('data-rm-parent-rendered'));

    if (!isAlreadyPlayStoreCard && headerEl &&
        window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard === 'function') {
      window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard(headerEl, normNum, isOpen, subCards.length || 3);
      catEl.__rmPillEl = null;
    }

    catEl.setAttribute('data-rm-parent-rendered', '1');
    if (headerEl) headerEl.setAttribute('data-rm-parent-rendered', '1');
    for (var chIdx = 0; chIdx < catEl.children.length; chIdx++) {
      if (catEl.children[chIdx] !== subContainer) {
        catEl.children[chIdx].setAttribute('data-rm-parent-rendered', '1');
      }
    }

    // Anti-Conflict Sub-Card Hydration: Re-hydrates if legacy [01-1] bracket text is still visible
    if (isOpen) {
      var allSubsClean = true;
      subCards.forEach(function (sc, idx) {
        var subCode = paddedNum + '-' + (idx + 1);
        var hasRawBracket = (sc.textContent || '').indexOf('[' + subCode + ']') !== -1;
        if ((!sc.hasAttribute('data-rm-sub-rendered') || hasRawBracket) &&
            window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard === 'function') {
          try { window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard(sc, normNum, subCode); } catch (e) {}
          if ((sc.textContent || '').indexOf('[' + subCode + ']') === -1) {
            sc.setAttribute('data-rm-sub-rendered', subCode);
          } else {
            allSubsClean = false;
          }
        }
        if (!sc.innerHTML || sc.innerHTML.trim() === '') {
          var matrix = window.RM_CANONICAL_SUB_MATRIX || {};
          var entry = matrix[subCode] || {};
          var sTitle = entry.title || ('सेवा व गेमिंग विकल्प ' + subCode);
          var sSub = entry.hindiTitle || 'Rise Mitra सत्यापित सेवा व तत्काल सहायता';
          sc.innerHTML = '<div class="flex items-center justify-between"><span class="rm-sublevel-num-badge">' + subCode + '.</span><span class="text-xs text-amber-400">★ 4.9</span></div>' +
                         '<h4 class="font-bold text-white text-sm mt-1">' + sTitle + '</h4>' +
                         '<p class="text-xs text-slate-400 mt-0.5">' + sSub + '</p>' +
                         '<div class="mt-2 inline-block px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold rm-service-chip">खोलें ›</div>';
          sc.setAttribute('data-rm-sub-rendered', subCode);
        }
      });
      subContainer.__rmSubsHydrated = allSubsClean;
    }

    enforceTopLeftLargeNumbering(catEl, subContainer, paddedNum);

    // Anti-Conflict Pill Sync: Directly sync visible .rm-parent-toggle-pill first so hidden legacy spans never cause inverted button state
    var visiblePillBox = catEl.querySelector('.rm-parent-toggle-pill');
    if (visiblePillBox) {
      visiblePillBox.style.setProperty('color', isOpen ? '#f87171' : '#34d399', 'important');
      visiblePillBox.style.setProperty('background', isOpen ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)', 'important');
      visiblePillBox.style.setProperty('border-color', isOpen ? '#ef4444' : '#10b981', 'important');
      var innerSpan = visiblePillBox.querySelector('span') || visiblePillBox;
      innerSpan.textContent = isOpen ? 'समेटें ▲' : 'और देखें ▼';
      catEl.__rmPillEl = innerSpan;
    } else {
      var pill = catEl.__rmPillEl;
      if (!pill || !catEl.contains(pill) || subContainer.contains(pill)) {
        pill = null;
        var pills = catEl.querySelectorAll('button, span, div');
        for (var i = 0; i < pills.length; i++) {
          var p = pills[i];
          if (!subContainer.contains(p) && p.children.length === 0 && p.textContent && p.offsetParent !== null) {
            var txt = p.textContent.trim();
            if (txt.indexOf('और देखें') !== -1 || txt.indexOf('समेटें') !== -1 || txt.indexOf('विकल्प') !== -1 || txt.indexOf('सेवाएं') !== -1 || txt.indexOf('छुपाएं') !== -1) {
              pill = p;
              catEl.__rmPillEl = p;
              break;
            }
          }
        }
      }
      if (pill) {
        if (pill.hasAttribute('onclick')) pill.removeAttribute('onclick');
        pill.textContent = isOpen ? 'समेटें ▲' : 'और देखें ▼';
      }
    }

    catEl.__rmHydratedOpen = isOpen;
    return true;
  }

  // 5. Hydrate Play Store Cards & enforce openStateMap (O(1) skip for already-hydrated unchanged cards)
  function syncAndHydrateCatalogCards() {
    if (isSyncingDOM) return;
    isSyncingDOM = true;
    try {
      var modal = document.getElementById('categoryModal');
      if (!modal) return;

      var t1 = document.getElementById('tier1-list');
      var t2 = document.getElementById('tier2-list');
      if (!hasRenderedCatalogOnce && ((t1 && (t1.innerHTML.indexOf('लोड हो रहा है') !== -1 || t1.children.length < 25)) ||
           (t2 && t2.children.length < 1)) && typeof window.renderCatalogItems === 'function') {
        hasRenderedCatalogOnce = true;
        try { window.renderCatalogItems(); } catch (e) {}
      }

      var needsInitialSweep = Boolean(modal.querySelector('[data-cat-id]:not([data-rm-parent-rendered])'));
      if (needsInitialSweep && window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
        try { window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog(); } catch (e) {}
      }

      var cats = modal.querySelectorAll('[data-cat-id]');
      if (cats.length > 0) hasRenderedCatalogOnce = true;

      cats.forEach(function (catEl) {
        if (catEl.classList.contains('hidden')) catEl.classList.remove('hidden');
        if (catEl.style.display === 'none') catEl.style.removeProperty('display');

        var rawId = catEl.getAttribute('data-cat-id') || '';
        var cleanNum = rawId.replace(/[^0-9]/g, '');
        if (!cleanNum) return;
        var intNum = parseInt(cleanNum, 10);
        var normNum = isNaN(intNum) ? cleanNum : String(intNum);
        var isOpen = Boolean(openStateMap[normNum]);

        if (!needsInitialSweep && catEl.__rmHydratedOpen === isOpen && catEl.hasAttribute('data-rm-parent-rendered')) {
          return;
        }
        applyCategoryOpenState(catEl, rawId, cleanNum, isOpen);
      });

      installRenderDestructionShield();
    } finally {
      isSyncingDOM = false;
    }
  }

  window.RM_CATALOG_DOM_ENGINE = {
    resolveCategorySubContainer: resolveCategorySubContainer,
    enforceTopLeftLargeNumbering: enforceTopLeftLargeNumbering,
    installRenderDestructionShield: installRenderDestructionShield,
    applyCategoryOpenState: applyCategoryOpenState,
    syncAndHydrateCatalogCards: syncAndHydrateCatalogCards
  };

  if (window.RM_CATALOG_HYDRATOR) {
    window.RM_CATALOG_HYDRATOR.resolveCategorySubContainer = resolveCategorySubContainer;
    window.RM_CATALOG_HYDRATOR.enforceTopLeftLargeNumbering = enforceTopLeftLargeNumbering;
    window.RM_CATALOG_HYDRATOR.installRenderDestructionShield = installRenderDestructionShield;
    window.RM_CATALOG_HYDRATOR.applyCategoryOpenState = applyCategoryOpenState;
    window.RM_CATALOG_HYDRATOR.syncAndHydrateCatalogCards = syncAndHydrateCatalogCards;
  }

  setTimeout(syncAndHydrateCatalogCards, 20);
})();
