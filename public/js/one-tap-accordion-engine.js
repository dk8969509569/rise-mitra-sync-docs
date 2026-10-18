/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-1C Capture-Phase 1-Tap Accordion & Subcard Engine (v65)
 *   - REPO TARGET    : public/js/one-tap-accordion-engine.js
 *   - SURFACE TARGET : SURFACE-A ONLY (Universal Catalog 01-50 Accordion Controller)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 285 Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/one-tap-accordion-engine.js (This File: Part-1C 1-Tap Accordion & Subcards)
 *   - public/js/index-shell-bootstrap.js (Part-0: Shell Boot, Anti-Freeze & Macro Tier Bars)
 *   - public/js/one-tap-catalog-hydrator.js (Part-1A: 0ms Home Healer, CSS Lock & Dispatchers)
 *   - public/js/one-tap-home-css-healer.js (Part-1D: 0ms Home Verticals Healer & CSS Lock)
 *   - public/js/one-tap-catalog-dom-engine.js (Part-1B: Canonical 50-Category DOM Engine)
 *   - public/js/fullscreen-microapp-controller.js (Fullscreen Micro-App Viewport Controller)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Capture-phase 0ms touchend + click 1-Tap dropdown toggle for
 *                              Categories 01-50, all-pill "और देखें ▼ ⇄ समेटें ▲" sync,
 *                              raw [02-1] badge cleanup, and 3-subcard fallback.
 *   - ALLOWED ON SURFACE-B   : NONE (Surface-B SIVME controls are strictly isolated).
 *   - FORBIDDEN IN THIS FILE : Duplicating Home 12-Verticals healer or mutating outer <div> bars.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_ACCORDION_ENGINE, window.toggleCategoryAccordion1Tap,
 *                           window.toggleAccordion, window.__RM_OPEN_CAT_STATE,
 *                           window.__RM_MODAL_INTERACTION_LOCK__
 *   - CALLS EXTERNAL APIs : window.RM_CATALOG_DOM_ENGINE.*, window.healHomeVerticalsInstantly,
 *                           window.toggleMacroBarElementInstantly
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #categoryModal, [data-cat-id], [id^="sub-"], .rm-toplevel-num-badge,
 *                           .rm-parent-toggle-pill, .rm-sublevel-num-badge
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Capture-phase 0ms touchend + 450ms synthetic ghost-click guard and
 *                     380ms per-card lock prevents 1-1=0 double-toggle race conditions.
 *   - SCROLL SAFETY : Tracks touchmove (>10px) so scrolling never triggers accordion taps.
 *   - DOM SAFETY    : Sets window.__RM_MODAL_INTERACTION_LOCK__ during toggle to prevent freeze.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (ALL 10 FUNCTIONS INTACT):
 *   1. resolveCategorySubContainer  2. enforceTopLeftLargeNumbering 3. installRenderDestructionShield
 *   4. ensureSubCardsPopulated      5. updateAccordionPillUI        6. applyCategoryOpenState
 *   7. syncAndHydrateCatalogCards   8. findCategoryCardElement      9. handleInstantAccordionTap
 *   10. installMasterOneTapAccordionEngine
 * ==============================================================================
 * 8. ONE JOB = ONE FILE & CANONICAL PATH LOCK (ANTI-DUPLICATE FILE GUARD):
 *   - SINGLE JOB RULE : Sole owner of 1-Tap Category Accordion & Subcard Population (01-50).
 *   - CANONICAL PATH  : Must exist ONLY at `public/js/one-tap-accordion-engine.js`.
 *   - BANNED ALIASES  : Never duplicate these functions back into `one-tap-catalog-hydrator.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY) & IDEMPOTENT EXECUTION GUARD (NO DOHRAO RULE):
 *   - ZERO DOHRAO     : Exposes `window.RM_ACCORDION_ENGINE` called by Part-1A Hydrator.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['one-tap-accordion-engine']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect Catalog DOM.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 *   - MOBILE EDITING  : 2-line blank spacing preserved between major functional blocks.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, PRE-MAIN GATE & CONTRACT PARITY LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261018_v65'`.
 *   - PIPELINE GATE   : Verified on `pre-main` before merging to `main`.
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
  if (window.__RM_LOADED_MODULES__['one-tap-accordion-engine']) return;
  window.__RM_LOADED_MODULES__['one-tap-accordion-engine'] = true;

  var openStateMap = window.__RM_OPEN_CAT_STATE || { '15': true, '16': true };
  window.__RM_OPEN_CAT_STATE = openStateMap;
  var lastAccordionTapTs = 0;
  var lastTouchEndTapTs = 0;
  var lastCatToggleMap = {};
  var touchStartX = 0;
  var touchStartY = 0;
  var wasTouchDragged = false;


  function resolveCategorySubContainer(catEl, rawId, cleanNum) {
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.resolveCategorySubContainer === 'function') {
      var fromEngine = window.RM_CATALOG_DOM_ENGINE.resolveCategorySubContainer(catEl, rawId, cleanNum);
      if (fromEngine) return fromEngine;
    }
    var intNum = parseInt(cleanNum, 10);
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    return (catEl && catEl.querySelector('[id^="sub-"], [data-sub-container], .rm-sub-container')) ||
           document.getElementById('sub-c' + paddedNum) ||
           document.getElementById('sub-c' + cleanNum) ||
           document.getElementById('sub-g' + paddedNum) ||
           document.getElementById('sub-g' + cleanNum) ||
           document.getElementById('sub-' + paddedNum) ||
           document.getElementById('sub-' + cleanNum);
  }

  function enforceTopLeftLargeNumbering(catEl, subContainer, paddedNum) {
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.enforceTopLeftLargeNumbering === 'function') {
      return window.RM_CATALOG_DOM_ENGINE.enforceTopLeftLargeNumbering(catEl, subContainer, paddedNum);
    }
  }

  function installRenderDestructionShield() {
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.installRenderDestructionShield === 'function') {
      return window.RM_CATALOG_DOM_ENGINE.installRenderDestructionShield();
    }
  }


  function ensureSubCardsPopulated(catEl, subContainer, intNum, paddedNum) {
    if (!subContainer) return;
    if (subContainer.children.length > 0) {
      var badges = subContainer.querySelectorAll('span, div');
      for (var b = 0; b < badges.length; b++) {
        var el = badges[b];
        if (el.children.length === 0) {
          var bTxt = (el.textContent || '').trim();
          var m = bTxt.match(/^\[(\d{2}-\d+)\]$/);
          if (m) {
            el.textContent = m[1] + '.';
            el.className = 'rm-sublevel-num-badge';
          }
        }
      }
      return;
    }
    var enTitleEl = catEl ? catEl.querySelector('h3, h4, .text-white.font-bold, .text-slate-100.font-black, .text-xl') : null;
    var parentEn = enTitleEl ? (enTitleEl.textContent || '').replace(/^\d+\.\s*/, '').trim() : ('Category ' + paddedNum);
    var subTemplates = [
      { idx: 1, tag: 'प्रमुख सेवा (#1 मांग)', en: parentEn + ' — Hub 1', hi: 'तत्काल बुकिंग, सत्यापित विशेषज्ञ व होम सर्विस', badge: '⚡ 15-मिनट त्वरित सेवा' },
      { idx: 2, tag: 'डिजिटल टूल व बहीखाता', en: parentEn + ' — Ledger & Pass', hi: 'डिजिटल हिसाब, ऑटो-रसीद व मासिक पास प्रबंधन', badge: '🧾 ऑटो-बिलिंग व पास' },
      { idx: 3, tag: '0% कमीशन लोकल नेटवर्क', en: parentEn + ' — Local Directory', hi: 'पिनकोड अनुसार सीधे स्थानीय प्रदाता से जुड़ें (0% दलाली)', badge: '📍 पिनकोड डायरेक्ट कनेक्ट' }
    ];
    subContainer.innerHTML = subTemplates.map(function (t) {
      var subCode = paddedNum + '-' + t.idx;
      var safeEn = t.en.replace(/'/g, '');
      var safeHi = t.hi.replace(/'/g, '');
      return '<div data-sub-code="' + subCode + '" class="bg-[#081226] border border-cyan-500/40 rounded-2xl p-4 mt-3 shadow-xl">' +
        '<div class="flex items-center justify-between mb-1.5">' +
          '<span class="rm-sublevel-num-badge">' + subCode + '.</span>' +
          '<span class="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700">' + t.tag + '</span>' +
        '</div>' +
        '<div class="text-base font-black text-white leading-snug">' + t.en + '</div>' +
        '<div class="text-xs font-bold text-emerald-400 mt-0.5 mb-2">' + t.hi + '</div>' +
        '<div class="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 mb-3">' + t.badge + '</div>' +
        '<div class="flex items-center gap-2 mt-2 pt-2 border-t border-slate-800/80">' +
          '<button type="button" onclick="window.toggleFavoriteItem && window.toggleFavoriteItem(\'' + subCode + '\', \'' + safeEn + '\', \'' + safeHi + '\')" class="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200">📌 पिन</button>' +
          '<button type="button" onclick="window.launchOneTapServiceScreen && window.launchOneTapServiceScreen(\'' + safeEn + '\', \'' + safeHi + '\', \'' + subCode + '\')" class="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200">▶ वीडियो</button>' +
          '<button type="button" onclick="window.launchOneTapServiceScreen && window.launchOneTapServiceScreen(\'' + safeEn + '\', \'' + safeHi + '\', \'' + subCode + '\')" class="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs text-center shadow-md">खोलें →</button>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  function updateAccordionPillUI(catEl, isOpen) {
    if (!catEl) return;
    /* Updates ALL matching pills in the card (no premature break; never styles wrapper <div> bars) */
    var candidates = catEl.querySelectorAll('.rm-parent-toggle-pill, [data-accordion-btn], button, span');
    for (var i = 0; i < candidates.length; i++) {
      var el = candidates[i];
      if (el.closest('[id^="sub-"]')) continue;
      if (el.tagName === 'DIV' && !el.classList.contains('rm-parent-toggle-pill')) continue;
      if (el.children.length === 0) {
        var txt = (el.textContent || '').trim();
        if (txt.indexOf('और देखें') !== -1 || txt.indexOf('समेटें') !== -1 || txt.indexOf('सेवाएं') !== -1) {
          el.textContent = isOpen ? 'समेटें ▲' : 'और देखें ▼';
          var pill = el.tagName === 'BUTTON' ? el : (el.parentElement && el.parentElement.tagName === 'BUTTON' ? el.parentElement : (el.classList.contains('rm-parent-toggle-pill') ? el : null));
          if (pill) {
            pill.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            pill.style.setProperty('border-color', isOpen ? 'rgba(244,63,94,0.75)' : 'rgba(16,185,129,0.75)', 'important');
            pill.style.setProperty('color', isOpen ? '#fda4af' : '#6ee7b7', 'important');
            pill.style.setProperty('background-color', isOpen ? 'rgba(76,5,25,0.55)' : 'rgba(6,78,59,0.45)', 'important');
          }
        }
      }
    }
  }


  function applyCategoryOpenState(catEl, rawId, cleanNum, isOpen, isUserTap) {
    var intNum = parseInt(cleanNum, 10) || 1;
    var now = Date.now();
    if (!isUserTap && now - (lastCatToggleMap[intNum] || 0) < 380) {
      return true;
    }
    if (isUserTap) {
      lastCatToggleMap[intNum] = now;
      window.__RM_MODAL_INTERACTION_LOCK__ = true;
    }

    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    openStateMap[String(intNum)] = Boolean(isOpen);
    openStateMap[paddedNum] = Boolean(isOpen);
    openStateMap['c' + paddedNum] = Boolean(isOpen);
    openStateMap['c' + intNum] = Boolean(isOpen);
    openStateMap['g' + paddedNum] = Boolean(isOpen);
    if (rawId) openStateMap[rawId] = Boolean(isOpen);

    if (!isUserTap && window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.applyCategoryOpenState === 'function') {
      try { window.RM_CATALOG_DOM_ENGINE.applyCategoryOpenState(catEl, rawId, cleanNum, isOpen); } catch (e) {}
    }

    var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);
    if (!subContainer && catEl) {
      subContainer = document.createElement('div');
      subContainer.id = (intNum >= 33 ? 'sub-g' : 'sub-c') + paddedNum;
      subContainer.className = 'mt-3 space-y-3';
      catEl.appendChild(subContainer);
    }
    if (!subContainer) {
      if (isUserTap) setTimeout(function () { window.__RM_MODAL_INTERACTION_LOCK__ = false; }, 420);
      return false;
    }
    if (isOpen) {
      ensureSubCardsPopulated(catEl, subContainer, intNum, paddedNum);
    }
    subContainer.classList.toggle('hidden', !isOpen);
    subContainer.classList.toggle('rm-acc-open', Boolean(isOpen));
    subContainer.setAttribute('data-rm-collapsed', isOpen ? 'false' : 'true');
    subContainer.style.setProperty('display', isOpen ? 'block' : 'none', 'important');
    updateAccordionPillUI(catEl, isOpen);

    if (isUserTap) {
      setTimeout(function () { window.__RM_MODAL_INTERACTION_LOCK__ = false; }, 420);
    }
    return true;
  }

  function syncAndHydrateCatalogCards() {
    if (window.__RM_MODAL_INTERACTION_LOCK__) return;
    if (typeof window.healHomeVerticalsInstantly === 'function') {
      window.healHomeVerticalsInstantly();
    }
    if (window.RM_CATALOG_DOM_ENGINE && typeof window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards === 'function') {
      return window.RM_CATALOG_DOM_ENGINE.syncAndHydrateCatalogCards();
    }
  }


  function findCategoryCardElement(target, modal) {
    if (!target || !modal) return null;
    if (target.closest('.sivme-notch-pill, #sivme-hud, [data-sivme], #rm-master-insitu-dock')) return null;
    var direct = target.closest('[data-cat-id], [id^="cat-c"], [id^="cat-g"], [data-game-cat]');
    if (direct && modal.contains(direct)) return direct;

    var cur = target;
    while (cur && cur !== modal && cur !== document.body) {
      if (cur.tagName === 'DIV') {
        var txt = (cur.textContent || '');
        if (txt.indexOf('और देखें') !== -1 || txt.indexOf('समेटें') !== -1) {
          var badges = cur.querySelectorAll('.rm-toplevel-num-badge, span, div');
          var numFound = '';
          var badgeCount = 0;
          for (var i = 0; i < badges.length && i < 25; i++) {
            var bTxt = (badges[i].textContent || '').trim();
            var m = bTxt.match(/^(0?[1-9]|[1-4][0-9]|50)\.$/);
            if (m && badges[i].children.length === 0) {
              numFound = m[1];
              badgeCount++;
            }
          }
          if (badgeCount === 1 && numFound) {
            var nInt = parseInt(numFound, 10);
            var nPad = (nInt < 10 ? '0' : '') + nInt;
            if (!cur.getAttribute('data-cat-id')) {
              cur.setAttribute('data-cat-id', (nInt >= 33 ? 'g' : 'c') + nPad);
            }
            return cur;
          }
        }
      }
      cur = cur.parentElement;
    }
    return null;
  }

  function handleInstantAccordionTap(e) {
    if (e.type === 'touchend' && wasTouchDragged) return;
    var modal = document.getElementById('categoryModal');
    if (!modal || modal.classList.contains('hidden') || !modal.contains(e.target)) return;
    var target = e.target;
    if (target.closest('[onclick*="closeCatalogModal"], [onclick*="toggleMenuDrawer"], [id^="sub-"]')) return;

    var catEl = findCategoryCardElement(target, modal);
    if (!catEl) return;

    var now = Date.now();
    /* Block synthetic ghost-click within 450ms after touchend so 1-tap NEVER double-toggles */
    if (e.type === 'click' && now - lastTouchEndTapTs < 450) {
      if (e.cancelable) e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return;
    }
    if (now - lastAccordionTapTs < 260) {
      if (e.cancelable) e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return;
    }
    lastAccordionTapTs = now;
    if (e.type === 'touchend') lastTouchEndTapTs = now;

    if (e.cancelable) e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    var rawId = catEl.getAttribute('data-cat-id') || catEl.id || '';
    var numMatch = rawId.match(/(\d+)/);
    var cleanNum = numMatch ? numMatch[1] : '';
    if (!cleanNum) {
      var badgeEl = catEl.querySelector('.rm-toplevel-num-badge');
      if (badgeEl) {
        var bm = (badgeEl.textContent || '').match(/(\d+)/);
        if (bm) cleanNum = bm[1];
      }
    }
    if (!cleanNum) return;

    var intNum = parseInt(cleanNum, 10);
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);
    var isCurrentlyOpen = Boolean(subContainer && (subContainer.classList.contains('rm-acc-open') ||
                          (window.getComputedStyle(subContainer).display !== 'none' &&
                           subContainer.getAttribute('data-rm-collapsed') !== 'true' &&
                           !subContainer.classList.contains('hidden'))));
    applyCategoryOpenState(catEl, rawId || ('c' + paddedNum), String(intNum), !isCurrentlyOpen, true);
  }

  function installMasterOneTapAccordionEngine() {
    if (window.__RM_MASTER_ACCORDION_INSTALLED) return;
    window.__RM_MASTER_ACCORDION_INSTALLED = true;

    window.addEventListener('touchstart', function (e) {
      if (e.touches && e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        wasTouchDragged = false;
      }
    }, { capture: true, passive: true });

    window.addEventListener('touchmove', function (e) {
      if (e.touches && e.touches.length === 1) {
        if (Math.abs(e.touches[0].clientX - touchStartX) > 10 || Math.abs(e.touches[0].clientY - touchStartY) > 10) {
          wasTouchDragged = true;
        }
      }
    }, { capture: true, passive: true });

    window.addEventListener('touchend', handleInstantAccordionTap, { capture: true, passive: false });
    window.addEventListener('click', handleInstantAccordionTap, true);
  }

  installMasterOneTapAccordionEngine();
  window.toggleCategoryAccordion1Tap = applyCategoryOpenState;
  window.toggleAccordion = function (listId, btnEl) {
    if (!listId) return;
    if (listId === 'tier1-list' || listId === 'tier2-list') {
      if (typeof window.toggleMacroBarElementInstantly === 'function') {
        var bar = btnEl || document.getElementById(listId === 'tier1-list' ? 'rm-tier1-toggle' : 'rm-tier2-toggle');
        window.toggleMacroBarElementInstantly(bar, listId);
      }
      return;
    }
    var m = String(listId).match(/(\d+)/);
    if (!m) return;
    var intNum = parseInt(m[1], 10);
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    var sub = document.getElementById('sub-' + listId) || document.getElementById(listId);
    var card = (sub && sub.closest('[data-cat-id]')) || (btnEl && btnEl.closest('[data-cat-id]'));
    var isOpen = Boolean(sub && !sub.classList.contains('hidden') && sub.getAttribute('data-rm-collapsed') !== 'true');
    applyCategoryOpenState(card, (intNum >= 33 ? 'g' : 'c') + paddedNum, String(intNum), !isOpen, true);
  };

  window.RM_ACCORDION_ENGINE = {
    resolveCategorySubContainer: resolveCategorySubContainer,
    enforceTopLeftLargeNumbering: enforceTopLeftLargeNumbering,
    installRenderDestructionShield: installRenderDestructionShield,
    ensureSubCardsPopulated: ensureSubCardsPopulated,
    updateAccordionPillUI: updateAccordionPillUI,
    applyCategoryOpenState: applyCategoryOpenState,
    syncAndHydrateCatalogCards: syncAndHydrateCatalogCards,
    findCategoryCardElement: findCategoryCardElement,
    handleInstantAccordionTap: handleInstantAccordionTap,
    installMasterOneTapAccordionEngine: installMasterOneTapAccordionEngine
  };
})();
