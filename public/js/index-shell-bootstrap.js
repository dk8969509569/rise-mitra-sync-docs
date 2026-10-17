/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-0 Surface-A HTML Shell Bootstrapper & Sentinel Lock (v60)
 *   - REPO TARGET    : public/js/index-shell-bootstrap.js
 *   - SURFACE TARGET : SURFACE-A ONLY (With Conditional SIVME Loader for Surface-B)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 270 Lines (Target <= 300 Logical Lines | 0% Secrets)
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
 *   - ALLOWED ON SURFACE-A   : Tailwind theme config, stale SIVME/cache purge, inline ZEL
 *                              1-Tap CSS lock, 0ms 1-Tap Macro Accordion toggle, modal
 *                              fallback dispatchers, fail-safe ensureCatalogHydratedNow
 *                              sentinel, and non-blocking SW cleanup.
 *   - ALLOWED ON SURFACE-B   : Conditional loading of /js/sovereign-in-situ-hud.js ONLY when
 *                              ?sivme=owner or ?sov_mode=in_situ is present in URL.
 *   - FORBIDDEN IN THIS FILE : Calling window.stop() (which freezes WebView progress bar at 80%).
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.__RM_ACTIVE_CACHE_VER, window.tailwind.config,
 *                           window.openCatalogModal, window.closeCatalogModal,
 *                           window.toggleMenuDrawer, window.toggleAccordion,
 *                           window.ensureCatalogHydratedNow
 *   - CALLS EXTERNAL APIs : window.lockGames18StatePermanently, window.renderCatalogItems,
 *                           window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #categoryModal, #modal-catalog-count, #tier1-header-text,
 *                           #tier2-header-text, #tier1-list, #tier2-list, #rm-zel-one-tap-lock
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (ISOLATED)
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Enforces touch-action: manipulation !important & 0ms 1-Tap toggle.
 *   - SCROLL SAFETY : Tracks touchmove delta (>10px) + lightweight sentinels (150ms & 600ms).
 *   - LOAD SAFETY   : Allows natural 100% window.onload completion so progress bar auto-hides.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (7 CORE SHELL BLOCKS):
 *   1. configureTailwindTheme               2. purgeStaleShellCacheAndSivme
 *   3. injectShellOneTapLockStyle           4. toggleMacroBarElementInstantly
 *   5. registerFallbackModalDispatchers     6. ensureCatalogHydratedNow
 *   7. initSwAndConditionalSivmeSentinel    + Capture 1-Tap Macro Accordion Listener
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
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261018_v60'`.
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

  var CACHE_VER = '20261018_v60';
  window.__RM_ACTIVE_CACHE_VER = CACHE_VER;
  var lastMacroToggleTs = 0;
  var touchStartX = 0;
  var touchStartY = 0;
  var touchMoved = false;


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


  // 3. ZEL 1-Tap Instant Touch & Sub-Container Visibility Lock Styles + Full-Width Modal Header
  function injectShellOneTapLockStyle() {
    var existing = document.getElementById('rm-zel-one-tap-lock');
    var s = existing || document.createElement('style');
    s.id = 'rm-zel-one-tap-lock';
    s.textContent =
      'button, a, [onclick], .tactile-25d, #categoryModal [data-cat-id], #categoryModal [id^="sub-"] > div, .rm-service-chip { touch-action: manipulation !important; -webkit-tap-highlight-color: transparent !important; cursor: pointer !important; user-select: none !important; transition: none !important; }' +
      '.tactile-25d:active { transform: none !important; }' +
      '#categoryModal.hidden, #rm-fullscreen-view.hidden, #playStoreInstallBanner.hidden, #categoryModal [id^="sub-"]:not([data-rm-collapsed="false"]).hidden, #categoryModal [id^="sub-"][data-rm-collapsed="true"] { display: none !important; }' +
      '#categoryModal [id^="sub-"][data-rm-collapsed="false"] { display: block !important; }' +
      '#categoryModal:not(.hidden) { position: fixed !important; inset: 0 !important; width: 100vw !important; max-width: 100vw !important; z-index: 50 !important; background-color: #0b0f19 !important; display: flex !important; justify-content: center !important; }' +
      '#categoryModal > div { width: 100% !important; max-width: 100% !important; }' +
      '#rm-fullscreen-view:not(.hidden) { position: fixed !important; inset: 0 !important; z-index: 99999 !important; display: flex !important; }';
    if (!existing) (document.head || document.documentElement).appendChild(s);
  }


  // 4. 0ms Instant 1-Tap Macro Accordion Toggle (Aajeevika 32 & Games 18 Bars)
  function toggleMacroBarElementInstantly(barEl, explicitListId) {
    if (!barEl) return false;
    var now = Date.now();
    if (now - lastMacroToggleTs < 220) return true;
    lastMacroToggleTs = now;

    var listEl = explicitListId ? document.getElementById(explicitListId) : null;
    if (!listEl) listEl = barEl.nextElementSibling;
    if (!listEl && barEl.parentElement) {
      listEl = barEl.parentElement.querySelector('[id$="-list"]') || barEl.parentElement.children[1];
    }
    if (!listEl || listEl === barEl) return false;

    var isCurrentlyHidden = listEl.classList.contains('hidden') ||
                            listEl.getAttribute('data-rm-macro-collapsed') === 'true' ||
                            window.getComputedStyle(listEl).display === 'none';

    if (isCurrentlyHidden) {
      listEl.classList.remove('hidden');
      listEl.setAttribute('data-rm-macro-collapsed', 'false');
      listEl.style.setProperty('display', 'block', 'important');
    } else {
      listEl.classList.add('hidden');
      listEl.setAttribute('data-rm-macro-collapsed', 'true');
      listEl.style.setProperty('display', 'none', 'important');
    }

    var arrow = barEl.querySelector('.acc-arrow') || barEl.lastElementChild;
    if (arrow && arrow !== barEl) {
      var aTxt = (arrow.textContent || '').trim();
      if (aTxt === '▶' || aTxt === '▼' || aTxt === '▲') {
        arrow.textContent = isCurrentlyHidden ? '▼' : '▶';
      }
    }

    if (isCurrentlyHidden && (barEl.textContent || '').indexOf('खेल व मनोरंजन') !== -1) {
      if (typeof window.lockGames18StatePermanently === 'function') {
        try { window.lockGames18StatePermanently(); } catch (e) {}
      }
    }
    return true;
  }

  window.toggleAccordion = function (listId, btnEl) {
    var bar = btnEl || document.getElementById(listId === 'tier1-list' ? 'rm-tier1-toggle' : 'rm-tier2-toggle');
    toggleMacroBarElementInstantly(bar, listId);
  };


  // 5. Bulletproof Modal Fallback Dispatchers
  function registerFallbackModalDispatchers() {
    if (typeof window.openCatalogModal !== 'function') {
      window.openCatalogModal = function () {
        var m = document.getElementById('categoryModal');
        if (!m) return;
        m.classList.remove('hidden');
        m.style.setProperty('display', 'flex', 'important');
        if (typeof window.ensureCatalogHydratedNow === 'function') window.ensureCatalogHydratedNow();
        if (typeof window.lockGames18StatePermanently === 'function') window.lockGames18StatePermanently();
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


  // 6. Fail-Safe Catalog Hydration Sentinel & 18-Games Header Lock
  function ensureCatalogHydratedNow() {
    var t1 = document.getElementById('tier1-list');
    var t2 = document.getElementById('tier2-list');
    if (!t1 || !t2) return;

    var stuck1 = t1.innerHTML.indexOf('लोड हो रहा है') !== -1 || t1.children.length <= 1;
    var stuck2 = t2.innerHTML.indexOf('लोड हो रहे हैं') !== -1 || t2.children.length <= 1;

    if ((stuck1 || stuck2) && typeof window.renderCatalogItems === 'function') {
      try { window.renderCatalogItems(); } catch (e) {}
    }
    if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
      try { window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog(); } catch (e) {}
    }
    if (typeof window.lockGames18StatePermanently === 'function') {
      try { window.lockGames18StatePermanently(); } catch (e) {}
    }

    var countEl = document.getElementById('modal-catalog-count');
    if (countEl) countEl.textContent = '32 Categories • 18 Games Active';
    var t1Hdr = document.getElementById('tier1-header-text');
    if (t1Hdr) t1Hdr.textContent = '💼 आजीविका (32 श्रेणियां उपलब्ध)';
    var t2Hdr = document.getElementById('tier2-header-text');
    if (t2Hdr) t2Hdr.textContent = '🎮 खेल व मनोरंजन (18 श्रेणियां उपलब्ध)';
  }
  window.ensureCatalogHydratedNow = ensureCatalogHydratedNow;


  // 7. Capture-Phase 1-Tap Macro Listener + Conditional Surface-B SIVME Loader
  function findMacroBarTarget(target, modal) {
    var cur = target;
    while (cur && cur !== modal && cur !== document.body) {
      if (cur.hasAttribute && cur.hasAttribute('data-cat-id')) return null;
      var id = cur.id || '';
      if (id === 'rm-tier1-toggle' || id === 'rm-tier2-toggle') return cur;
      var txt = (cur.textContent || '').trim();
      if ((cur.tagName === 'BUTTON' || cur.tagName === 'DIV') &&
          txt.length < 70 &&
          (txt.indexOf('आजीविका (') !== -1 || txt.indexOf('खेल व मनोरंजन (') !== -1) &&
          cur.nextElementSibling) {
        return cur;
      }
      cur = cur.parentElement;
    }
    return null;
  }

  document.addEventListener('touchstart', function (e) {
    if (e.touches && e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchMoved = false;
    }
  }, { capture: true, passive: true });

  document.addEventListener('touchmove', function (e) {
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
    var macroBar = findMacroBarTarget(e.target, modal);
    if (macroBar) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      toggleMacroBarElementInstantly(macroBar, null);
    }
  }
  document.addEventListener('touchend', handleMacroTapEvent, { capture: true, passive: false });
  document.addEventListener('click', handleMacroTapEvent, { capture: true, passive: false });

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
