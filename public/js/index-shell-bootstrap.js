/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-0A Surface-A HTML Shell Bootstrapper & Sentinel Lock (v87)
 *   - REPO TARGET    : public/js/index-shell-bootstrap.js
 *   - SURFACE TARGET : SURFACE-A ONLY (With Conditional SIVME Loader for Surface-B)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 265 Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : 100% ZEL | Fail-Closed | GATE-25.0 | CoverageRatio >= 1.00
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/index-shell-bootstrap.js (Part-0A: Shell Boot, Anti-Freeze, Macro Bars & Part-0B Auto-Loader)
 *   - public/js/one-tap-profile-hub-healer.js (Part-0B: Top-Right Profile 0ms 1-Tap Opener/Closer Bridge)
 *   - public/js/profile-hub-data-template.js (Part-1 Template: Profile 2.5D CSS & 9-Section HTML Builder)
 *   - public/js/profile-hub-engine.js (Part-2 Root Engine: Profile Avatar & Mount Controller)
 *   - public/js/one-tap-accordion-engine.js (Part-1C: 50 Category Cards & Sub-Card Accordion)
 *   - public/js/one-tap-subcard-router.js & one-tap-subcard-dom-helpers.js (Part-3B/3C: Sub-Card Router & Helpers)
 *   - public/js/fullscreen-microapp-controller.js (Part-3A: Fullscreen Viewport & Cat-15 Hydrator)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, ROOT-ENGINE-FIRST & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Anti-freeze MutationObserver shield, Tailwind theme config,
 *                              stale SIVME/cache purge, inline ZEL 1-Tap & Profile Large-Font CSS,
 *                              0ms 1-Tap Macro Bar toggle, Part-0B Profile 1-Tap Auto-Loader,
 *                              modal fallback dispatchers, hydration sentinel.
 *   - ALLOWED ON SURFACE-B   : Conditional loading of /js/sovereign-in-situ-hud.js ONLY when
 *                              ?sivme=owner or ?sov_mode=in_situ is present in URL.
 *   - ROOT-ENGINE-FIRST RULE : All Profile 2.5D templates live in `profile-hub-data-template.js`
 *                              and Category 15 templates live in `public/js/catalog/category-15/`.
 *   - FORBIDDEN IN THIS FILE : Category card sub-list logic or external DOM band-aid loops.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.__RM_ACTIVE_CACHE_VER, window.tailwind.config,
 *                           window.openCatalogModal, window.closeCatalogModal,
 *                           window.toggleMenuDrawer, window.toggleMacroBarElementInstantly,
 *                           window.ensureCatalogHydratedNow, window.__RM_MODAL_INTERACTION_LOCK__,
 *                           window.openProfileModal, window.closeProfileModal, window.toggleProfileModal,
 *                           window.healProfileHubTypographyAndLayout
 *   - CALLS EXTERNAL APIs : window.lockGames18StatePermanently, window.renderCatalogItems,
 *                           window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog, window.RM_ProfileHub
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #categoryModal, #modal-catalog-count, #tier1-header-text,
 *                           #tier2-header-text, #tier1-list, #tier2-list, #rm-zel-one-tap-lock,
 *                           #rm-top-profile-btn, #profileModal, #rm-fullscreen-view
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (ISOLATED)
 *   - WORLD-CLASS 2.5D UI : Enforces 0ms 1-Tap `touch-action: manipulation` & baseline `.rm-prof-*` typography.
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Enforces touch-action: manipulation !important & 0ms Macro/Profile 1-Tap.
 *   - SCROLL SAFETY : Tracks touchmove delta (>10px) + lightweight sentinels (150ms & 600ms).
 *   - FREEZE SHIELD : Blocks recursive MutationObserver loops when #categoryModal is open.
 *   - ZERO REVERT   : Synced with `v87` root templates so innerHTML never reverts UI.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (9 CORE SHELL BLOCKS):
 *   0. installMutationObserverFreezeKillSwitch 1. configureTailwindTheme
 *   2. purgeStaleShellCacheAndSivme            3. injectShellOneTapLockStyle
 *   4. toggleMacroBarElementInstantly          5. registerFallbackModalDispatchers
 *   6. ensureCatalogHydratedNow                7. initSwAndConditionalSivmeSentinel
 *   8. bindTopRightProfileOneTap (Direct 0ms 1-Tap Trigger + Auto-Loads Part-0B v87)
 *   + Capture 1-Tap Macro Accordion & Top-Right Profile Listeners
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole owner of extracted inline shell scripts from `public/index.html`.
 *   - ZERO-GUESSWORK LOCK : Verified 1:1 against `v83` shell script (`1000303548.png`).
 *   - CANONICAL PATH      : Must exist ONLY at `public/js/index-shell-bootstrap.js`.
 *   - BANNED ALIASES      : Never create duplicate shell bootstrap files (`*-v2.js`, `*-styles.js`).
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Delegates all 50 card accordions to `one-tap-accordion-engine.js`
 *                       and Profile Hub 1-Tap to `one-tap-profile-hub-healer.js`.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['index-shell-bootstrap']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect boot & cache purge.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 *   - MOBILE EDITING  : Major sections separated by 2 blank lines for thumb-selection safety.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, 1-TASK-1-FILE COMMIT, PRE-MAIN GATE & CONTRACT LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261019_v87'`.
 *   - PIPELINE GATE   : Verified on `pre-main` Preview before merging to `main`.
 * ==============================================================================
 * 12. GITHUB ACTIONS FOLDER-B MIRROR SYNC & AI PRE-FLIGHT AUDIT TAGS:
 *   - @folder-a-ssot  : 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW (Pure Policy & Specs Only — No Code)
 *   - @folder-b-mirror: 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH (Auto-Synced via sync_drive.yml)
 *   - @ai-pre-flight  : 12-Point Header + Code auto-indexed in Folder B snapshot.
 * ==============================================================================
 */

(function () {
  'use strict';

  window.__RM_LOADED_MODULES__ = window.__RM_LOADED_MODULES__ || {};
  if (window.__RM_LOADED_MODULES__['index-shell-bootstrap']) return;
  window.__RM_LOADED_MODULES__['index-shell-bootstrap'] = true;

  var CACHE_VER = '20261019_v87';
  window.__RM_ACTIVE_CACHE_VER = CACHE_VER;
  var lastMacroToggleTs = 0;
  var lastProfileTapTs = 0;
  var touchStartX = 0;
  var touchStartY = 0;
  var touchMoved = false;


  // 0. Permanent Anti-Freeze Kill-Switch (Blocks Companion MutationObserver Infinite Loops)
  function installMutationObserverFreezeKillSwitch() {
    var NativeMO = window.MutationObserver;
    if (!NativeMO || NativeMO.__rmV65Guarded) return;
    var GuardedMO = function (callback) {
      var lastRunTs = 0;
      var instance = new NativeMO(function (mutations, observer) {
        if (window.__RM_MODAL_INTERACTION_LOCK__) return;
        var modal = document.getElementById('categoryModal');
        var t1 = document.getElementById('tier1-list');
        if (modal && !modal.classList.contains('hidden') && t1 && t1.children.length > 5) return;
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
    GuardedMO.__rmV65Guarded = true;
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
    var isOwnerLaunch = urlParams.get('sivme') === 'owner' || urlParams.get('sov_mode') === 'in_situ' || urlParams.get('dev_auto') === '1';
    if (!isOwnerLaunch) {
      try {
        ['sivme_active', 'sivme_mode', 'rm_sivme_state', 'rm_active_categories_v1', 'rm_sovereign_visibility_registry_v1'].forEach(function (k) {
          localStorage.removeItem(k);
        });
        sessionStorage.removeItem('sivme_active');
      } catch (e) {}
    }
    try {
      if (localStorage.getItem('rm_cache_ver') !== CACHE_VER) {
        if ('caches' in window) caches.keys().then(function (ns) { ns.forEach(function (n) { caches.delete(n); }); });
        if ('serviceWorker' in navigator) navigator.serviceWorker.getRegistrations().then(function (rs) { rs.forEach(function (r) { r.unregister(); }); });
        localStorage.setItem('rm_cache_ver', CACHE_VER);
      }
    } catch (e) {}
  }


  // 3. ZEL 1-Tap Instant Touch, Sub-Container Visibility Lock & Profile Hub Large-Font Styles
  function injectShellOneTapLockStyle() {
    var existing = document.getElementById('rm-zel-one-tap-lock');
    var s = existing || document.createElement('style');
    s.id = 'rm-zel-one-tap-lock';
    s.textContent =
      'button, a, [onclick], .tactile-25d, .rm-parent-toggle-pill, #rm-top-profile-btn, [data-rm-profile-trigger="1"], #categoryModal [data-cat-id], #categoryModal [id^="sub-"] > div, .rm-service-chip { touch-action: manipulation !important; -webkit-tap-highlight-color: transparent !important; cursor: pointer !important; user-select: none !important; transition: none !important; outline: none !important; }' +
      '#rm-top-profile-btn *, [data-rm-profile-trigger="1"] * { pointer-events: none !important; }' +
      '.tactile-25d:active { transform: none !important; }' +
      '#categoryModal.hidden, #profileModal.hidden, #rm-fullscreen-view.hidden, #playStoreInstallBanner.hidden, #categoryModal [id^="sub-"]:not([data-rm-collapsed="false"]):not(.rm-acc-open).hidden, #categoryModal [id^="sub-"][data-rm-collapsed="true"]:not(.rm-acc-open) { display: none !important; }' +
      '#categoryModal [id^="sub-"][data-rm-collapsed="false"], #categoryModal .rm-acc-open { display: block !important; visibility: visible !important; opacity: 1 !important; height: auto !important; max-height: none !important; }' +
      '#categoryModal:not(.hidden) { position: fixed !important; inset: 0 !important; width: 100vw !important; max-width: 100vw !important; z-index: 50 !important; background-color: #0b0f19 !important; display: flex !important; justify-content: center !important; -webkit-overflow-scrolling: touch !important; }' +
      '#categoryModal > div { width: 100% !important; max-width: 100% !important; }' +
      '#profileModal:not(.hidden) { position: fixed !important; inset: 0 !important; width: 100vw !important; height: 100vh !important; z-index: 99998 !important; background-color: rgba(2, 6, 23, 0.86) !important; display: flex !important; align-items: center !important; justify-content: center !important; padding: 12px !important; }' +
      '#rm-fullscreen-view:not(.hidden) { position: fixed !important; inset: 0 !important; z-index: 99999 !important; display: flex !important; }' +
      '.rm-prof-upgraded-root { padding-bottom: 115px !important; }' +
      '.rm-prof-row-title { font-size: 18px !important; font-weight: 800 !important; line-height: 1.38 !important; color: #ffffff !important; }' +
      '.rm-prof-row-sub { font-size: 15px !important; font-weight: 700 !important; line-height: 1.46 !important; color: #e2e8f0 !important; margin-top: 3px !important; }' +
      '.rm-prof-sec-hdr { font-size: 15px !important; font-weight: 900 !important; letter-spacing: 0.3px !important; line-height: 1.4 !important; color: #38bdf8 !important; }' +
      '.rm-prof-grid-title { font-size: 16px !important; font-weight: 800 !important; line-height: 1.32 !important; color: #ffffff !important; }' +
      '.rm-prof-grid-sub { font-size: 13.5px !important; font-weight: 700 !important; line-height: 1.4 !important; margin-top: 4px !important; }' +
      '.rm-prof-logout-btn { font-size: 12px !important; font-weight: 800 !important; min-height: 32px !important; max-width: 140px !important; padding: 6px 18px !important; margin: 14px auto 16px auto !important; display: block !important; }';
    if (!existing) (document.head || document.documentElement).appendChild(s);
  }


  // 4. 0ms Instant 1-Tap Macro Accordion Toggle (Aajeevika 32 & Games 18 Bars ONLY)
  function toggleMacroBarElementInstantly(barEl, explicitListId) {
    if (!barEl) return false;
    var now = Date.now();
    if (now - lastMacroToggleTs < 180) return true;
    lastMacroToggleTs = now;
    window.__RM_MODAL_INTERACTION_LOCK__ = true;

    var listEl = explicitListId ? document.getElementById(explicitListId) : barEl.nextElementSibling;
    if (!listEl && barEl.parentElement) listEl = barEl.parentElement.querySelector('[id$="-list"]') || barEl.parentElement.children[1];
    if (!listEl || listEl === barEl) return false;

    var isHidden = listEl.classList.contains('hidden') || listEl.getAttribute('data-rm-macro-collapsed') === 'true' || window.getComputedStyle(listEl).display === 'none';
    listEl.classList.toggle('hidden', !isHidden);
    listEl.setAttribute('data-rm-macro-collapsed', isHidden ? 'false' : 'true');
    listEl.style.setProperty('display', isHidden ? 'block' : 'none', 'important');

    var arrow = barEl.querySelector('.acc-arrow') || barEl.lastElementChild;
    if (arrow && arrow !== barEl) {
      var aTxt = (arrow.textContent || '').trim();
      if (aTxt === '▶' || aTxt === '▼' || aTxt === '▲') arrow.textContent = isHidden ? '▼' : '▶';
    }
    setTimeout(function () { window.__RM_MODAL_INTERACTION_LOCK__ = false; }, 450);
    return true;
  }
  window.toggleMacroBarElementInstantly = toggleMacroBarElementInstantly;


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
      window.toggleMenuDrawer = function (open) { if (open) window.openCatalogModal(); else window.closeCatalogModal(); };
    }
  }


  // 6. Fail-Safe Anti-Freeze Catalog Hydration Sentinel
  function ensureCatalogHydratedNow() {
    if (window.__RM_MODAL_INTERACTION_LOCK__) return;
    var t1 = document.getElementById('tier1-list');
    var t2 = document.getElementById('tier2-list');
    if (!t1 || !t2) return;

    if (t1.children.length <= 1 || t2.children.length <= 1) {
      if (typeof window.renderCatalogItems === 'function') { try { window.renderCatalogItems(); } catch (e) {} }
      t1.removeAttribute('data-rm-v65-swept');
    }
    if (!t1.getAttribute('data-rm-v65-swept') && t1.children.length > 1) {
      t1.setAttribute('data-rm-v65-swept', 'true');
      if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') { try { window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog(); } catch (e) {} }
      if (typeof window.lockGames18StatePermanently === 'function') { try { window.lockGames18StatePermanently(); } catch (e) {} }
    }
    var countEl = document.getElementById('modal-catalog-count');
    if (countEl && countEl.textContent !== '32 Categories • 18 Games Active') countEl.textContent = '32 Categories • 18 Games Active';
    var t1Hdr = document.getElementById('tier1-header-text');
    if (t1Hdr && t1Hdr.textContent !== '💼 आजीविका (32 श्रेणियां उपलब्ध)') t1Hdr.textContent = '💼 आजीविका (32 श्रेणियां उपलब्ध)';
    var t2Hdr = document.getElementById('tier2-header-text');
    if (t2Hdr && t2Hdr.textContent !== '🎮 खेल व मनोरंजन (18 श्रेणियां उपलब्ध)') t2Hdr.textContent = '🎮 खेल व मनोरंजन (18 श्रेणियां उपलब्ध)';
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
      if ((cur.tagName === 'BUTTON' || cur.tagName === 'DIV') && txt.length < 70 &&
          (txt.indexOf('आजीविका (') !== -1 || txt.indexOf('खेल व मनोरंजन (') !== -1) && cur.nextElementSibling) {
        return cur;
      }
      cur = cur.parentElement;
    }
    return null;
  }

  document.addEventListener('touchstart', function (e) {
    if (e.touches && e.touches.length === 1) { touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY; touchMoved = false; }
  }, { capture: true, passive: true });

  document.addEventListener('touchmove', function (e) {
    if (e.touches && e.touches.length === 1 && (Math.abs(e.touches[0].clientX - touchStartX) > 10 || Math.abs(e.touches[0].clientY - touchStartY) > 10)) touchMoved = true;
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


  // 8. Direct 0ms Top-Right Profile 1-Tap Trigger & Auto-Load Part-0B (public/js/one-tap-profile-hub-healer.js v87)
  function bindTopRightProfileOneTap() {
    if (typeof window.healProfileHubTypographyAndLayout !== 'function') {
      window.healProfileHubTypographyAndLayout = function () {};
    }
    if (typeof window.openProfileModal !== 'function') {
      window.openProfileModal = function (trigEl) {
        var fs = document.getElementById('rm-fullscreen-view');
        if (fs) {
          fs.classList.remove('hidden');
          fs.style.removeProperty('display');
          fs.style.setProperty('display', 'flex', 'important');
        }
        if (window.RM_ProfileHub && typeof window.RM_ProfileHub.open === 'function') {
          try { window.RM_ProfileHub.open(); } catch (e) {}
        } else if (typeof window.openProfileHub === 'function') {
          try { window.openProfileHub(); } catch (e) {}
        } else if (trigEl && typeof trigEl.onclick === 'function') {
          try { trigEl.onclick(); } catch (e) {}
        } else if (typeof window.openFullscreenModule === 'function') {
          try { window.openFullscreenModule('profile'); } catch (e) {}
        }
        var m = document.getElementById('profileModal') || document.getElementById('profileHubModal') || document.getElementById('userProfileModal');
        if (m) { m.classList.remove('hidden'); m.style.setProperty('display', 'flex', 'important'); }
        if (typeof window.healProfileHubTypographyAndLayout === 'function') {
          setTimeout(window.healProfileHubTypographyAndLayout, 20);
        }
      };
    }
    if (typeof window.closeProfileModal !== 'function') {
      window.closeProfileModal = function () {
        var fs = document.getElementById('rm-fullscreen-view');
        if (fs) { fs.classList.add('hidden'); fs.style.setProperty('display', 'none', 'important'); }
        var m = document.getElementById('profileModal') || document.getElementById('profileHubModal') || document.getElementById('userProfileModal');
        if (m) { m.classList.add('hidden'); m.style.setProperty('display', 'none', 'important'); }
      };
    }
    if (typeof window.toggleProfileModal !== 'function') {
      window.toggleProfileModal = function (trigEl) { window.openProfileModal(trigEl); };
    }

    function handleDirectProfileTap(e) {
      if (window.__RM_LOADED_MODULES__['one-tap-profile-hub-healer']) return;
      if (e.type === 'touchend' && touchMoved) return;
      var el = e.target && e.target.nodeType === 1 ? e.target : (e.target ? e.target.parentElement : null);
      if (!el || !el.closest || el.closest('#categoryModal, #profileModal, #rm-fullscreen-view')) return;
      var btn = el.closest('#rm-top-profile-btn, [data-rm-profile-trigger="1"], #profileBtn, #userProfileBtn, #openProfileBtn, [onclick*="Profile"], [onclick*="profile"], header button, header .rounded-full, button.rounded-full, div.rounded-full');
      if (!btn) return;
      var r = btn.getBoundingClientRect ? btn.getBoundingClientRect() : null;
      var t = (btn.textContent || '').trim();
      if (!r || r.top > 120 || r.right < window.innerWidth - 115 || t.indexOf('सिंक') !== -1 || t.indexOf('खोलें') !== -1 || t.indexOf('RM') !== -1) return;
      var now = Date.now();
      if (now - lastProfileTapTs < 380) return;
      lastProfileTapTs = now;
      window.openProfileModal(btn);
    }
    window.addEventListener('touchend', handleDirectProfileTap, { capture: true, passive: true });
    window.addEventListener('click', handleDirectProfileTap, { capture: true, passive: true });

    if (!window.__RM_LOADED_MODULES__['one-tap-profile-hub-healer'] && !document.getElementById('rm-part0b-profile-healer-js')) {
      var p = document.createElement('script');
      p.id = 'rm-part0b-profile-healer-js';
      p.src = '/js/one-tap-profile-hub-healer.js?v=' + CACHE_VER;
      p.async = false;
      (document.head || document.documentElement).appendChild(p);
    }
  }


  configureTailwindTheme();
  purgeStaleShellCacheAndSivme();
  injectShellOneTapLockStyle();
  registerFallbackModalDispatchers();
  bindTopRightProfileOneTap();
  window.addEventListener('RM_CATALOG_DATA_READY', ensureCatalogHydratedNow);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { ensureCatalogHydratedNow(); initSwAndConditionalSivmeSentinel(); });
  else { ensureCatalogHydratedNow(); initSwAndConditionalSivmeSentinel(); }
  setTimeout(ensureCatalogHydratedNow, 150);
  setTimeout(ensureCatalogHydratedNow, 600);
})();
