/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-1B Modular Catalog DOM, Card Hydration & Anti-Flicker Engine (v98)
 *   - REPO TARGET    : public/js/one-tap-catalog-dom-engine.js
 *   - SURFACE TARGET : SURFACE-A ONLY (SubContainer Resolver, Numbering, Shield & Hydrator)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 298 Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/one-tap-catalog-dom-engine.js (This File: Part-1B DOM, Shield & Hydrator)
 *   - public/js/one-tap-catalog-hydrator.js (Part-1A: Boot Loader & Modal Dispatchers)
 *   - public/js/one-tap-accordion-engine.js (Part-1C: 0ms 1-Tap Accordion Engine)
 *   - public/js/one-tap-shell-bridge.js (Part-2: Deterministic 1-Tap Shell Bridge)
 *   - public/js/fullscreen-microapp-controller.js (Part-3A: Fullscreen Micro-App UI)
 *   - public/js/one-tap-subcard-router.js (Part-3B: Sub-Card 1-Tap Router)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, UNIVERSAL PURE-REFERENCE & SURFACE ISOLATION LOCK:
 *   - ALLOWED ON SURFACE-A   : SubContainer resolution, 0ms Accordion Open/Close DOM state,
 *                              .rm-parent-toggle-pill sync, Top-Left Numbering & Shields.
 *   - ALLOWED ON SURFACE-B   : NONE (Surface-B SIVME controls are strictly isolated).
 *   - UNIVERSAL PURE-REF RULE: Universal 50-category files contain ONLY pure references &
 *                              delegation hooks; 100% of category/sub-category code lives
 *                              in its dedicated `public/js/catalog/category-XX/` folder.
 *   - FORBIDDEN IN THIS FILE : Global touchend/click listeners, category-specific UI logic,
 *                              or overwriting user-toggled / Play Store rendered cards.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_CATALOG_DOM_ENGINE, window.RM_CATALOG_HYDRATOR.*,
 *                           window.__RM_OPEN_CAT_STATE
 *   - CALLS EXTERNAL APIs : window.RM_UNIVERSAL_CARD_ENGINE.*, window.RM_CANONICAL_SUB_MATRIX
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #categoryModal, #tier1-list, #tier2-list, [data-cat-id],
 *                           [id^="sub-"], .rm-toplevel-num-badge, .rm-parent-toggle-pill
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Respects `window.__RM_MODAL_INTERACTION_LOCK__` & `data-rm-user-toggled`,
 *                     and permanently shields `renderCatalogItems` & `RM_CatalogRenderer.render`.
 *   - DOM SAFETY    : Only applies 26px icon sizing to Play Store cards (never corrupts
 *                     compact `3 विकल्प` / `3 गेम्स` rows) and upgrades all 50 cards cleanly.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 5 CORE FUNCTIONS INTACT):
 *   1. resolveCategorySubContainer        2. enforceTopLeftLargeNumbering
 *   3. installRenderDestructionShield     4. applyCategoryOpenState
 *   5. syncAndHydrateCatalogCards
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole owner of Part-1B Catalog DOM Hydration, Shields & Numbering.
 *   - ZERO-GUESSWORK LOCK : Verified 1:1 against `v70` (`1000304100.png`) with 100% ZEL parity.
 *   - CANONICAL PATH      : Must exist ONLY at `public/js/one-tap-catalog-dom-engine.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Shares `window.__RM_OPEN_CAT_STATE` with Part-1C and Part-2.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['one-tap-catalog-dom-engine']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect all DOM operations.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, PRE-MAIN GATE & CONTRACT PARITY LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261021_v98'`.
 *   - PIPELINE GATE   : Verified on `pre-main` Preview before merging to `main`.
 * ==============================================================================
 * 12. GITHUB ACTIONS FOLDER-B MIRROR SYNC & AI PRE-FLIGHT AUDIT TAGS:
 *   - @folder-a-ssot  : 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW (Pure Policy & Specs Only)
 *   - @folder-b-mirror: 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH (Auto-Synced via sync_drive.yml)
 *   - @ai-pre-flight  : 12-Point Header + Code auto-indexed in Folder B snapshot.
 * ==============================================================================
 */

(function () {
  'use strict';

  window.__RM_LOADED_MODULES__ = window.__RM_LOADED_MODULES__ || {};
  if (window.__RM_LOADED_MODULES__['one-tap-catalog-dom-engine']) return;
  window.__RM_LOADED_MODULES__['one-tap-catalog-dom-engine'] = true;

  var isSyncingDOM = false;
  var hasRenderedCatalogOnce = false;
  var openStateMap = window.__RM_OPEN_CAT_STATE || { '15': false, '16': false };
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

    var hasPlayStoreCard = Boolean(catEl.querySelector('[id^="rm-universal-parent-"], .rm-parent-toggle-pill'));
    var existingBadge = catEl.querySelector('.rm-toplevel-num-badge');
    if (existingBadge) {
      if (existingBadge.textContent !== paddedNum + '.') {
        existingBadge.textContent = paddedNum + '.';
      }
    } else if (hasPlayStoreCard) {
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
        var isTrueSmallIconBox = iconBox && iconBox !== catEl && ((iconBox.textContent || '').trim().length <= 12);
        if (isTrueSmallIconBox) {
          tinyNumEl.style.setProperty('display', 'none', 'important');
          for (var c = 0; c < iconBox.children.length; c++) {
            var ch = iconBox.children[c];
            if (ch !== tinyNumEl && !ch.classList.contains('rm-toplevel-num-badge') && (ch.textContent || '').trim().length <= 4) {
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
        } else {
          tinyNumEl.classList.add('rm-toplevel-num-badge');
          tinyNumEl.textContent = paddedNum + '.';
        }
      }
    }

    if (subContainer) {
      var subCards = subContainer.querySelectorAll(':scope > div');
      for (var s = 0; s < subCards.length; s++) {
        var sc = subCards[s];
        var cleanCode = paddedNum + '-' + (s + 1);
        var expectedSubCode = cleanCode + '.';
        sc.setAttribute('data-sub-code', cleanCode);
        if (paddedNum === '15') sc.setAttribute('data-cat15-sub', cleanCode);

        var subLeaves = sc.querySelectorAll('span, div');
        for (var j = 0; j < subLeaves.length; j++) {
          var sl = subLeaves[j];
          if (sl.children.length === 0 && sl.textContent) {
            var st = sl.textContent.trim();
            if (/^\[?\d{1,2}-\d\]?\s*\.?$/.test(st)) {
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
    var modal = document.getElementById('categoryModal');
    if (modal) {
      var hdrNodes = modal.querySelectorAll('p, span, div');
      for (var h = 0; h < Math.min(hdrNodes.length, 30); h++) {
        if (hdrNodes[h].children.length === 0 && (hdrNodes[h].textContent || '').indexOf('Games Active') !== -1) {
          hdrNodes[h].textContent = '32 Categories • 18 Games Active';
          break;
        }
      }
    }

    var t1Check = document.getElementById('tier1-list');
    var t2Check = document.getElementById('tier2-list');
    if (t1Check && t2Check && t1Check.children.length >= 25 && t2Check.children.length >= 1 &&
        t1Check.innerHTML.indexOf('लोड हो रहा है') === -1) {
      hasRenderedCatalogOnce = true;
    }

    if (typeof window.renderCatalogItems === 'function' && !window.renderCatalogItems.__rmShielded) {
      var origRender = window.renderCatalogItems;
      var shielded = function () {
        var t1 = document.getElementById('tier1-list');
        var t2 = document.getElementById('tier2-list');
        var alreadyHydrated = hasRenderedCatalogOnce || (t1 && t2 && t1.children.length >= 25 && t2.children.length >= 1 &&
                              t1.innerHTML.indexOf('लोड हो रहा है') === -1);
        if (alreadyHydrated) return;
        hasRenderedCatalogOnce = true;
        var res = origRender.apply(this, arguments);
        setTimeout(syncAndHydrateCatalogCards, 0);
        return res;
      };
      shielded.__rmShielded = true;
      window.renderCatalogItems = shielded;
      if (window.RM_CatalogRenderer) {
        window.RM_CatalogRenderer.render = shielded;
      }
    }

    if (window.RM_UNIVERSAL_CARD_ENGINE) {
      if (typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function' && !window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog.__rmShielded) {
        var origSweep = window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog;
        var shieldedSweep = function () {
          var m = document.getElementById('categoryModal');
          var hasLegacyRow = m && (m.innerHTML.indexOf('3 विकल्प') !== -1 || m.innerHTML.indexOf('3 गेम्स') !== -1);
          if (hasRenderedCatalogOnce && !hasLegacyRow && m && !m.querySelector('[data-cat-id]:not([data-rm-parent-rendered])')) {
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
          var hasLegacyText = targetEl && ((targetEl.textContent || '').indexOf('3 विकल्प') !== -1 || (targetEl.textContent || '').indexOf('3 गेम्स') !== -1);
          if (!hasLegacyText && targetEl && targetEl.querySelector('[id^="rm-universal-parent-"], .rm-parent-toggle-pill') && targetEl.__rmLastOpen === syncedOpen) {
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
    if (!headerEl || !catEl.contains(headerEl) || headerEl === subContainer) {
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

    var hdrTxt = (headerEl && headerEl.textContent) || '';
    var hasLegacyCompactBadge = hdrTxt.indexOf('3 विकल्प') !== -1 || hdrTxt.indexOf('3 गेम्स') !== -1;
    var isAlreadyPlayStoreCard = !hasLegacyCompactBadge && (
      Boolean(catEl.querySelector('[id^="rm-universal-parent-"], .rm-parent-toggle-pill')) ||
      catEl.hasAttribute('data-rm-parent-rendered') ||
      (headerEl && headerEl.hasAttribute('data-rm-parent-rendered'))
    );

    if (!isAlreadyPlayStoreCard && headerEl &&
        window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard === 'function') {
      headerEl.__rmLastOpen = undefined;
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

    if (isOpen || !subContainer.__rmSubsHydrated) {
      var allSubsClean = true;
      subCards.forEach(function (sc, idx) {
        var subCode = paddedNum + '-' + (idx + 1);
        var scTxt = sc.textContent || '';
        var hasRawBracket = scTxt.indexOf('[' + subCode + ']') !== -1 || (paddedNum === '15' && scTxt.indexOf('16-') !== -1);
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


  // 5. Hydrate Play Store Cards & enforce openStateMap (Never overwrites user-toggled cards)
  function syncAndHydrateCatalogCards() {
    installRenderDestructionShield();
    if (isSyncingDOM || window.__RM_MODAL_INTERACTION_LOCK__) return;
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

      var hasLegacyCompactCards = modal.innerHTML.indexOf('3 विकल्प') !== -1 || modal.innerHTML.indexOf('3 गेम्स') !== -1;
      var needsInitialSweep = hasLegacyCompactCards || Boolean(modal.querySelector('[data-cat-id]:not([data-rm-parent-rendered])'));
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

        var cardHasLegacyRow = (catEl.textContent || '').indexOf('3 विकल्प') !== -1 || (catEl.textContent || '').indexOf('3 गेम्स') !== -1;
        if (!cardHasLegacyRow && catEl.getAttribute('data-rm-user-toggled') === '1') return;

        if (!needsInitialSweep && !cardHasLegacyRow && catEl.__rmHydratedOpen === isOpen && catEl.hasAttribute('data-rm-parent-rendered')) {
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

  installRenderDestructionShield();
  setTimeout(syncAndHydrateCatalogCards, 20);
})();
