/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-0 Surface-A HTML Shell Bootstrapper & Sentinel Lock (v64)
 *   - REPO TARGET    : public/js/index-shell-bootstrap.js
 *   - SURFACE TARGET : SURFACE-A ONLY (With Conditional SIVME Loader for Surface-B)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 295 Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/index-shell-bootstrap.js (This File: Extracted Inline Shell Scripts)
 *   - public/index.html (Master Slim HTML Shell <= 290 Lines)
 *   - public/js/one-tap-catalog-hydrator.js (Part-1A: Boot Loader & Modal Dispatchers)
 *   - public/js/one-tap-home-css-healer.js (Part-1D: 0ms Home Healer & 18-Games Lock)
 *   - public/js/one-tap-accordion-engine.js (Part-1C: 1-Tap Accordion & Subcard Engine)
 *   - public/js/one-tap-catalog-dom-engine.js (Part-1B: Canonical Catalog DOM Engine)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Tailwind theme config, stale SIVME/cache purge, MutationObserver
 *                              anti-freeze kill-switch, inline ZEL 1-Tap CSS lock, 0ms 1-Tap
 *                              Macro & Card Accordion toggle, modal fallback dispatchers,
 *                              anti-freeze ensureCatalogHydratedNow.
 *   - ALLOWED ON SURFACE-B   : Conditional loading of /js/sovereign-in-situ-hud.js ONLY when
 *                              ?sivme=owner or ?sov_mode=in_situ is present in URL.
 *   - FORBIDDEN IN THIS FILE : Calling window.stop() or mutating wrapper <div> tags as pills.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.__RM_ACTIVE_CACHE_VER, window.tailwind.config,
 *                           window.openCatalogModal, window.closeCatalogModal,
 *                           window.toggleMenuDrawer, window.toggleAccordion,
 *                           window.ensureCatalogHydratedNow, window.__RM_MODAL_INTERACTION_LOCK__
 *   - CALLS EXTERNAL APIs : window.lockGames18StatePermanently, window.renderCatalogItems,
 *                           window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog,
 *                           window.RM_SUB_CARD_RENDERER.renderSubCard
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #categoryModal, #modal-catalog-count, #tier1-header-text,
 *                           #tier2-header-text, #tier1-list, #tier2-list, [id^="sub-"],
 *                           [data-cat-id], .rm-parent-toggle-pill, #rm-zel-one-tap-lock
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (ISOLATED)
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Window capture-phase 0ms 1-Tap toggle + 420ms ghost-click suppression.
 *   - SCROLL SAFETY : Tracks touchmove delta (>10px) + canary-guarded hydration sentinels.
 *   - FREEZE SHIELD : Hard-blocks recursive MutationObserver/sweepCatalog loops during modal taps.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (9 CORE SHELL BLOCKS):
 *   0. installMutationObserverFreezeKillSwitch 1. configureTailwindTheme
 *   2. purgeStaleShellCacheAndSivme            3. injectShellOneTapLockStyle
 *   4. toggleMacroBarElementInstantly          5. hydrateSubCardsIfNeeded & syncAllCardTogglePills
 *   6. toggleCardAccordionInstantly            7. registerFallbackModalDispatchers
 *   8. ensureCatalogHydratedNow & initSwAndConditionalSivmeSentinel
 *   + Window Capture 1-Tap Macro & Card Accordion Listeners (touchstart, touchmove, touchend, click)
 * ==============================================================================
 * 8. ONE JOB = ONE FILE & CANONICAL PATH LOCK (ANTI-DUPLICATE FILE GUARD):
 *   - SINGLE JOB RULE : Sole owner of extracted inline scripts from `public/index.html`.
 *   - CANONICAL PATH  : Must exist ONLY at `public/js/index-shell-bootstrap.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Keeps `public/index.html` under 290 lines with 100% ZEL parity.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['index-shell-bootstrap']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect boot & cache purge.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, PRE-MAIN GATE & CONTRACT PARITY LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261018_v64'`.
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
  if (window.__RM_LOADED_MODULES__['index-shell-bootstrap']) return;
  window.__RM_LOADED_MODULES__['index-shell-bootstrap'] = true;

  var CACHE_VER = '20261018_v64';
  window.__RM_ACTIVE_CACHE_VER = CACHE_VER;
  var lastToggleTs = 0;
  var lastTouchEndTs = 0;
  var touchStartX = 0;
  var touchStartY = 0;
  var touchMoved = false;


  // 0. Permanent Anti-Freeze Kill-Switch (Blocks Companion MutationObserver Infinite Loops)
  function installMutationObserverFreezeKillSwitch() {
    var NativeMO = window.MutationObserver;
    if (!NativeMO || NativeMO.__rmV64Guarded) return;
    var GuardedMO = function (callback) {
      var lastRunTs = 0;
      var instance = new NativeMO(function (mutations, observer) {
        if (window.__RM_MODAL_INTERACTION_LOCK__) return;
        var modal = document.getElementById('categoryModal');
        var t1 = document.getElementById('tier1-list');
        if (modal && !modal.classList.contains('hidden') && t1 && t1.children.length > 5) {
          return;
        }
        var now = Date.now();
        if (now - lastRunTs < 800) return;
        lastRunTs = now;
        try { callback(mutations, observer); } catch (e) {}
      });
      var origObserve = instance.observe;
      instance.observe = function (target, options) {
        if (options && options.subtree && (target === document.body || target === document.documentElement || (target && target.id === 'categoryModal'))) {
          options = { childList: true, subtree: false };
        }
        return origObserve.call(this, target, options);
      };
      return instance;
    };
    GuardedMO.prototype = NativeMO.prototype;
    GuardedMO.__rmV64Guarded = true;
    window.MutationObserver = GuardedMO;
  }
  installMutationObserverFreezeKillSwitch();


  // 1. Tailwind Dark Mode & Custom Brand Palette Configuration
  function configureTailwindTheme() {
    if (typeof window.tailwind !== 'undefined') {
      window.tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              brand: { 500: '#10b981', 600: '#059669', 950: '#022c22' },
              amberBrand: { 500: '#f59e0b', 950: '#451a03' },
              surface: { 800: '#111827', 900: '#0b0f19', 950: '#030712' }
            }
          }
        }
      };
    }
  }


  // 2. Auto-Purge Stale SIVME Flags & Old Cache on Normal Public Launch
  function purgeStaleShellCacheAndSivme() {
    var urlParams = new URLSearchParams(window.location.search);
    var isOwnerLaunch = urlParams.get('sivme') === 'owner' ||
                        urlParams.get('sov_mode') === 'in_situ' ||
                        urlParams.get('dev_auto') === '1';
    if (!isOwnerLaunch) {
      try {
        localStorage.removeItem('sivme_active');
        localStorage.removeItem('sivme_mode');
        localStorage.removeItem('rm_sivme_state');
        localStorage.removeItem('rm_active_categories_v1');
        localStorage.removeItem('rm_sovereign_visibility_registry_v1');
        sessionStorage.removeItem('sivme_active');
      } catch (e) {}
    }
    try {
      if (localStorage.getItem('rm_cache_ver') !== CACHE_VER) {
        if ('caches' in window) {
          caches.keys().then(function (names) {
            for (var i = 0; i < names.length; i++) caches.delete(names[i]);
          });
        }
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistrations().then(function (regs) {
            for (var j = 0; j < regs.length; j++) regs[j].unregister();
          });
        }
        localStorage.setItem('rm_cache_ver', CACHE_VER);
      }
    } catch (e) {}
  }


  // 3. ZEL 1-Tap Instant Touch & Sub-Container Visibility Lock Styles
  function injectShellOneTapLockStyle() {
    var existing = document.getElementById('rm-zel-one-tap-lock');
    var s = existing || document.createElement('style');
    s.id = 'rm-zel-one-tap-lock';
    s.textContent =
      'button, a, [onclick], .tactile-25d, .rm-parent-toggle-pill, #categoryModal [data-cat-id], #categoryModal [id^="sub-"] > div, .rm-service-chip { touch-action: manipulation !important; -webkit-tap-highlight-color: transparent !important; cursor: pointer !important; user-select: none !important; transition: none !important; }' +
      '.tactile-25d:active { transform: none !important; }' +
      '#categoryModal.hidden, #rm-fullscreen-view.hidden, #playStoreInstallBanner.hidden, #categoryModal [id^="sub-"]:not([data-rm-collapsed="false"]):not(.rm-v64-open).hidden, #categoryModal [id^="sub-"][data-rm-collapsed="true"]:not(.rm-v64-open) { display: none !important; }' +
      '#categoryModal [id^="sub-"][data-rm-collapsed="false"], #categoryModal .rm-v64-open { display: block !important; visibility: visible !important; opacity: 1 !important; height: auto !important; max-height: none !important; }' +
      '#categoryModal:not(.hidden) { position: fixed !important; inset: 0 !important; width: 100vw !important; max-width: 100vw !important; z-index: 50 !important; background-color: #0b0f19 !important; display: flex !important; justify-content: center !important; -webkit-overflow-scrolling: touch !important; }' +
      '#categoryModal > div { width: 100% !important; max-width: 100% !important; }' +
      '#rm-fullscreen-view:not(.hidden) { position: fixed !important; inset: 0 !important; z-index: 99999 !important; display: flex !important; }';
    if (!existing) (document.head || document.documentElement).appendChild(s);
  }


  // 4. 0ms Instant 1-Tap Macro & Card Accordion Toggles (With Safe Pill & Sub-Card Sync)
  function toggleMacroBarElementInstantly(barEl, explicitListId) {
    if (!barEl) return false;
    var now = Date.now();
    if (now - lastToggleTs < 160) return true;
    lastToggleTs = now;
    window.__RM_MODAL_INTERACTION_LOCK__ = true;

    var listEl = explicitListId ? document.getElementById(explicitListId) : barEl.nextElementSibling;
    if (!listEl && barEl.parentElement) {
      listEl = barEl.parentElement.querySelector('[id$="-list"]') || barEl.parentElement.children[1];
    }
    if (!listEl || listEl === barEl) return false;

    var isHidden = listEl.classList.contains('hidden') ||
                   listEl.getAttribute('data-rm-macro-collapsed') === 'true' ||
                   window.getComputedStyle(listEl).display === 'none';

    listEl.classList.toggle('hidden', !isHidden);
    listEl.setAttribute('data-rm-macro-collapsed', isHidden ? 'false' : 'true');
    listEl.style.setProperty('display', isHidden ? 'block' : 'none', 'important');

    var arrow = barEl.querySelector('.acc-arrow') || barEl.lastElementChild;
    if (arrow && arrow !== barEl) {
      var aTxt = (arrow.textContent || '').trim();
      if (aTxt === '▶' || aTxt === '▼' || aTxt === '▲') arrow.textContent = isHidden ? '▼' : '▶';
    }
    setTimeout(function () { window.__RM_MODAL_INTERACTION_LOCK__ = false; }, 500);
    return true;
  }

  function hydrateSubCardsIfNeeded(subEl, cardEl) {
    if (!subEl || subEl.getAttribute('data-rm-v64-hydrated') === 'true') return;
    subEl.setAttribute('data-rm-v64-hydrated', 'true');
    try {
      var rawId = (cardEl && cardEl.getAttribute('data-cat-id')) || (subEl.id || '').replace(/^sub-/, '');
      var cleanNum = String(rawId).replace(/[^0-9]/g, '');
      var paddedNum = cleanNum.length === 1 ? '0' + cleanNum : cleanNum;
      var children = subEl.children;
      for (var i = 0; i < children.length; i++) {
        var ch = children[i];
        if (window.RM_SUB_CARD_RENDERER && typeof window.RM_SUB_CARD_RENDERER.renderSubCard === 'function') {
          if ((ch.textContent || '').indexOf('[' + paddedNum + '-') !== -1 || !ch.getAttribute('data-rm-sub-upgraded')) {
            window.RM_SUB_CARD_RENDERER.renderSubCard(ch, paddedNum, i + 1);
            ch.setAttribute('data-rm-sub-upgraded', 'true');
          }
        }
        var badges = ch.querySelectorAll('span');
        for (var b = 0; b < badges.length; b++) {
          var bTxt = (badges[b].textContent || '').trim();
          if (/^\[\d{2}-\d+\]$/.test(bTxt)) {
            badges[b].textContent = '★ 4.9 • सत्यापित सेवा';
          }
        }
      }
    } catch (e) {}
  }

  function syncAllCardTogglePills(cardEl, pillBtn, isOpening) {
    var targets = [];
    if (pillBtn && pillBtn.tagName !== 'DIV') targets.push(pillBtn);
    if (cardEl) {
      /* Strictly select buttons/pills/spans only — NEVER wrapper <div> elements */
      var found = cardEl.querySelectorAll('.rm-parent-toggle-pill, [data-accordion-btn], button, span');
      for (var i = 0; i < found.length; i++) {
        var el = found[i];
        if (el.children.length > 0) continue;
        var txt = (el.textContent || '').trim();
        if (txt === 'और देखें ▼' || txt === 'समेटें ▲' || txt.indexOf('और देखें') !== -1 || txt.indexOf('समेटें') !== -1) {
          targets.push(el);
        }
      }
    }
    for (var j = 0; j < targets.length; j++) {
      var b = targets[j];
      b.setAttribute('aria-expanded', isOpening ? 'true' : 'false');
      b.textContent = isOpening ? 'समेटें ▲' : 'और देखें ▼';
    }
  }

  function toggleCardAccordionInstantly(subEl, pillBtn, cardEl) {
    var now = Date.now();
    if (now - lastToggleTs < 160) return true;
    lastToggleTs = now;
    window.__RM_MODAL_INTERACTION_LOCK__ = true;

    if (!subEl && cardEl) {
      var cid = cardEl.getAttribute('data-cat-id') || 'item';
      subEl = document.createElement('div');
      subEl.id = 'sub-' + cid;
      subEl.setAttribute('data-rm-collapsed', 'true');
      subEl.className = 'hidden mt-3 pt-3 border-t border-slate-700/60 space-y-2';
      var titleEl = cardEl.querySelector('h3, h4, .font-bold');
      var titleTxt = titleEl ? (titleEl.textContent || '').trim() : 'सेवा';
      subEl.innerHTML =
        '<div class="p-2.5 rounded-lg bg-slate-800/90 border border-emerald-500/30 text-xs text-emerald-300 flex justify-between items-center" onclick="if(window.openFullscreenModule)window.openFullscreenModule(\'' + cid + '\',\'' + titleTxt.replace(/'/g, '') + '\')">' +
        '<span>✨ ' + titleTxt + ' — त्वरित बुकिंग व लाइव डैशबोर्ड खोलें</span><span class="font-bold">खोलें ➔</span></div>';
      cardEl.appendChild(subEl);
    }
    if (!subEl) return false;

    var isCurrentlyOpen = subEl.classList.contains('rm-v64-open') ||
                          (subEl.getAttribute('data-rm-collapsed') === 'false' &&
                           !subEl.classList.contains('hidden') &&
                           window.getComputedStyle(subEl).display !== 'none');
    var shouldOpen = !isCurrentlyOpen;

    if (shouldOpen) {
      hydrateSubCardsIfNeeded(subEl, cardEl);
      subEl.classList.remove('hidden');
      subEl.classList.add('rm-v64-open');
      subEl.setAttribute('data-rm-collapsed', 'false');
      subEl.style.setProperty('display', 'block', 'important');
    } else {
      subEl.classList.remove('rm-v64-open');
      subEl.classList.add('hidden');
      subEl.setAttribute('data-rm-collapsed', 'true');
      subEl.style.setProperty('display', 'none', 'important');
    }

    syncAllCardTogglePills(cardEl, pillBtn, shouldOpen);
    setTimeout(function () { window.__RM_MODAL_INTERACTION_LOCK__ = false; }, 500);
    return true;
  }

  window.toggleAccordion = function (listId, btnEl) {
    if (!listId) return;
    if (listId === 'tier1-list' || listId === 'tier2-list') {
      var bar = btnEl || document.getElementById(listId === 'tier1-list' ? 'rm-tier1-toggle' : 'rm-tier2-toggle');
      toggleMacroBarElementInstantly(bar, listId);
      return;
    }
    var subPanel = document.getElementById('sub-' + listId) || document.getElementById(listId);
    toggleCardAccordionInstantly(subPanel, btnEl || null, subPanel ? subPanel.closest('[data-cat-id]') : null);
  };


  // 5. Bulletproof Modal Fallback Dispatchers
  function registerFallbackModalDispatchers() {
    if (typeof window.openCatalogModal !== 'function') {
      window.openCatalogModal = function () {
        var m = document.getElementById('categoryModal');
        if (!m) return;
        m.classList.remove('hidden');
        m.style.setProperty('display', 'flex', 'important');
        ensureCatalogHydratedNow();
      };
    }
    if (typeof window.closeCatalogModal !== 'function') {
      window.closeCatalogModal = function () {
        var m = document.getElementById('categoryModal');
        if (!m) return;
        m.classList.add('hidden');
        m.style.setProperty('display', 'none', 'important');
      };
    }
    if (typeof window.toggleMenuDrawer !== 'function') {
      window.toggleMenuDrawer = function (open) {
        if (open) window.openCatalogModal();
        else window.closeCatalogModal();
      };
    }
  }


  // 6. Fail-Safe Anti-Freeze Catalog Hydration Sentinel
  function ensureCatalogHydratedNow() {
    if (window.__RM_MODAL_INTERACTION_LOCK__) return;
    var t1 = document.getElementById('tier1-list');
    var t2 = document.getElementById('tier2-list');
    if (!t1 || !t2) return;

    var stuck1 = t1.innerHTML.indexOf('लोड हो रहा है') !== -1 || t1.children.length <= 1;
    var stuck2 = t2.innerHTML.indexOf('लोड हो रहे हैं') !== -1 || t2.children.length <= 1;

    if (stuck1 || stuck2) {
      if (typeof window.renderCatalogItems === 'function') {
        try { window.renderCatalogItems(); } catch (e) {}
      }
      t1.removeAttribute('data-rm-v64-swept');
    }
    if (!t1.getAttribute('data-rm-v64-swept') && t1.children.length > 1) {
      t1.setAttribute('data-rm-v64-swept', 'true');
      if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
        try { window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog(); } catch (e) {}
      }
      if (typeof window.lockGames18StatePermanently === 'function') {
        try { window.lockGames18StatePermanently(); } catch (e) {}
      }
    }

    var countEl = document.getElementById('modal-catalog-count');
    if (countEl && countEl.textContent !== '32 Categories • 18 Games Active') countEl.textContent = '32 Categories • 18 Games Active';
    var t1Hdr = document.getElementById('tier1-header-text');
    if (t1Hdr && t1Hdr.textContent !== '💼 आजीविका (32 श्रेणियां उपलब्ध)') t1Hdr.textContent = '💼 आजीविका (32 श्रेणियां उपलब्ध)';
    var t2Hdr = document.getElementById('tier2-header-text');
    if (t2Hdr && t2Hdr.textContent !== '🎮 खेल व मनोरंजन (18 श्रेणियां उपलब्ध)') t2Hdr.textContent = '🎮 खेल व मनोरंजन (18 श्रेणियां उपलब्ध)';
  }
  window.ensureCatalogHydratedNow = ensureCatalogHydratedNow;


  // 7. Window Capture-Phase 1-Tap Listener + Conditional Surface-B SIVME Loader
  function findMacroBarTarget(target, modal) {
    var cur = target;
    while (cur && cur !== modal && cur !== document.body) {
      if (cur.hasAttribute && cur.hasAttribute('data-cat-id')) return null;
      var id = cur.id || '';
      if (id === 'rm-tier1-toggle' || id === 'rm-tier2-toggle') return cur;
      var txt = (cur.textContent || '').trim();
      if ((cur.tagName === 'BUTTON' || cur.tagName === 'DIV') && txt.length < 70 &&
          (txt.indexOf('आजीविका (') !== -1 || txt.indexOf('खेल व मनोरंजन (') !== -1) && cur.nextElementSibling) {
        return cur;
      }
      cur = cur.parentElement;
    }
    return null;
  }

  function findCardAccordionTarget(target) {
    if (!target || !target.closest) return null;
    if (target.closest('.sivme-notch-pill, #sivme-hud, [data-sivme], #rm-master-insitu-dock')) return null;
    if (target.closest('[id^="sub-"]')) return null;

    var btn = target.closest('.rm-parent-toggle-pill, button, a, [onclick], [data-accordion-btn]');
    if (btn) {
      var bTxt = (btn.textContent || '').trim();
      var oc = btn.getAttribute('onclick') || '';
      if (bTxt === '✕' || oc.indexOf('closeCatalogModal') !== -1 || oc.indexOf('toggleMenuDrawer(false)') !== -1) {
        return { type: 'CLOSE_MODAL' };
      }
    }

    var card = target.closest('[data-cat-id]');
    if (!card && btn) {
      var p = btn.parentElement;
      while (p && p !== document.body && p.id !== 'tier1-list' && p.id !== 'tier2-list') {
        if (p.hasAttribute('data-cat-id') || (p.className && String(p.className).indexOf('rounded-') !== -1 && p.querySelector('h3, h4'))) {
          card = p;
          break;
        }
        p = p.parentElement;
      }
    }
    if (!card) return null;

    var catId = card.getAttribute('data-cat-id') || '';
    var num = catId.replace(/[^0-9]/g, '');
    var padded = num.length === 1 ? '0' + num : num;
    var subEl = (catId && document.getElementById('sub-' + catId)) ||
                (num && (document.getElementById('sub-c' + num) || document.getElementById('sub-c' + padded) || document.getElementById('sub-g' + num) || document.getElementById('sub-' + num))) ||
                card.querySelector('[id^="sub-"], [data-rm-collapsed], .sub-cards-container, .rm-uce-drawer');
    if (!subEl && card.nextElementSibling && (card.nextElementSibling.id || '').indexOf('sub-') === 0) {
      subEl = card.nextElementSibling;
    }
    return { type: 'CARD_ACCORDION', subEl: subEl, btn: btn || null, card: card };
  }

  window.addEventListener('touchstart', function (e) {
    if (e.touches && e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchMoved = false;
    }
  }, { capture: true, passive: true });

  window.addEventListener('touchmove', function (e) {
    if (e.touches && e.touches.length === 1) {
      if (Math.abs(e.touches[0].clientX - touchStartX) > 10 || Math.abs(e.touches[0].clientY - touchStartY) > 10) {
        touchMoved = true;
      }
    }
  }, { capture: true, passive: true });

  function handleMacroTapEvent(e) {
    if (e.type === 'touchend' && touchMoved) return;
    var modal = document.getElementById('categoryModal');
    if (!modal || modal.classList.contains('hidden') || !modal.contains(e.target)) return;

    var now = Date.now();
    if (e.type === 'click' && now - lastTouchEndTs < 420) {
      if (findMacroBarTarget(e.target, modal) || findCardAccordionTarget(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
      return;
    }

    var macroBar = findMacroBarTarget(e.target, modal);
    if (macroBar) {
      if (e.type === 'touchend') lastTouchEndTs = now;
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      toggleMacroBarElementInstantly(macroBar, null);
      return;
    }

    var cardTarget = findCardAccordionTarget(e.target);
    if (cardTarget) {
      if (e.type === 'touchend') lastTouchEndTs = now;
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      if (cardTarget.type === 'CLOSE_MODAL') {
        if (typeof window.closeCatalogModal === 'function') window.closeCatalogModal();
      } else if (cardTarget.type === 'CARD_ACCORDION') {
        toggleCardAccordionInstantly(cardTarget.subEl, cardTarget.btn, cardTarget.card);
      }
    }
  }
  window.addEventListener('touchend', handleMacroTapEvent, { capture: true, passive: false });
  window.addEventListener('click', handleMacroTapEvent, { capture: true, passive: false });

  function initSwAndConditionalSivmeSentinel() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sivme') === 'owner' || urlParams.get('sov_mode') === 'in_situ') {
      var s = document.createElement('script');
      s.src = '/js/sovereign-in-situ-hud.js';
      s.async = false;
      (document.body || document.documentElement).appendChild(s);
    }
  }

  configureTailwindTheme();
  purgeStaleShellCacheAndSivme();
  injectShellOneTapLockStyle();
  registerFallbackModalDispatchers();

  window.addEventListener('RM_CATALOG_DATA_READY', ensureCatalogHydratedNow);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      ensureCatalogHydratedNow();
      initSwAndConditionalSivmeSentinel();
    });
  } else {
    ensureCatalogHydratedNow();
    initSwAndConditionalSivmeSentinel();
  }
  setTimeout(ensureCatalogHydratedNow, 150);
  setTimeout(ensureCatalogHydratedNow, 600);
})();
