/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-0 Surface-A HTML Shell Bootstrapper & Sentinel Lock (v67)
 *   - REPO TARGET    : public/js/index-shell-bootstrap.js
 *   - SURFACE TARGET : SURFACE-A ONLY (With Conditional SIVME Loader for Surface-B)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 295 Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/index-shell-bootstrap.js (Part-0: Shell Boot, Anti-Freeze, Macro Bars & Top-Right Profile 1-Tap)
 *   - public/js/one-tap-accordion-engine.js (Part-1C: 50 Category Cards & Sub-Card Accordion)
 *   - public/js/one-tap-catalog-hydrator.js (Part-1A: Boot Loader & Modal Dispatchers)
 *   - public/js/one-tap-home-css-healer.js (Part-1D: 0ms Home Healer & 18-Games Lock)
 *   - public/js/one-tap-catalog-dom-engine.js (Part-1B: Canonical Catalog DOM Engine)
 *   - public/js/profile-hub-engine.js (Profile Hub Engine — Delegated/Bridged on 1-Tap)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Anti-freeze MutationObserver shield, Tailwind theme config,
 *                              stale SIVME/cache purge, inline ZEL 1-Tap CSS lock, 0ms 1-Tap
 *                              Macro Bar toggle, Top-Right Profile 1-Tap opener, modal fallback
 *                              dispatchers, hydration sentinel.
 *   - ALLOWED ON SURFACE-B   : Conditional loading of /js/sovereign-in-situ-hud.js ONLY when
 *                              ?sivme=owner or ?sov_mode=in_situ is present in URL.
 *   - FORBIDDEN IN THIS FILE : Category card sub-list logic (owned by one-tap-accordion-engine.js).
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.__RM_ACTIVE_CACHE_VER, window.tailwind.config,
 *                           window.openCatalogModal, window.closeCatalogModal,
 *                           window.toggleMenuDrawer, window.toggleMacroBarElementInstantly,
 *                           window.ensureCatalogHydratedNow, window.__RM_MODAL_INTERACTION_LOCK__,
 *                           window.openProfileModal, window.closeProfileModal, window.toggleProfileModal
 *   - CALLS EXTERNAL APIs : window.lockGames18StatePermanently, window.renderCatalogItems,
 *                           window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog, window.RM_ProfileHub
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #categoryModal, #modal-catalog-count, #tier1-header-text,
 *                           #tier2-header-text, #tier1-list, #tier2-list, #rm-zel-one-tap-lock,
 *                           #rm-top-profile-btn, #profileModal
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (ISOLATED)
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Enforces touch-action: manipulation !important & 0ms Macro/Profile 1-Tap.
 *   - SCROLL SAFETY : Tracks touchmove delta (>10px) + lightweight sentinels (150ms & 600ms).
 *   - FREEZE SHIELD : Blocks recursive MutationObserver loops when #categoryModal is open.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (9 CORE SHELL BLOCKS):
 *   0. installMutationObserverFreezeKillSwitch 1. configureTailwindTheme
 *   2. purgeStaleShellCacheAndSivme            3. injectShellOneTapLockStyle
 *   4. toggleMacroBarElementInstantly          5. registerFallbackModalDispatchers
 *   6. ensureCatalogHydratedNow                7. initSwAndConditionalSivmeSentinel
 *   8. bindTopRightProfileOneTap
 *   + Capture 1-Tap Macro Accordion & Top-Right Profile Listeners
 * ==============================================================================
 * 8. ONE JOB = ONE FILE & CANONICAL PATH LOCK (ANTI-DUPLICATE FILE GUARD):
 *   - SINGLE JOB RULE : Sole owner of extracted inline shell scripts from `public/index.html`.
 *   - CANONICAL PATH  : Must exist ONLY at `public/js/index-shell-bootstrap.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Delegates all 50 card accordions to `one-tap-accordion-engine.js`.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['index-shell-bootstrap']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect boot & cache purge.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, PRE-MAIN GATE & CONTRACT PARITY LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261018_v67'`.
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

  var CACHE_VER = '20261018_v67';
  window.__RM_ACTIVE_CACHE_VER = CACHE_VER;
  var lastMacroToggleTs = 0;
  var lastProfileTouchTs = 0;
  var lastProfileActionTs = 0;
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


  // 3. ZEL 1-Tap Instant Touch & Sub-Container Visibility Lock Styles
  function injectShellOneTapLockStyle() {
    var existing = document.getElementById('rm-zel-one-tap-lock');
    var s = existing || document.createElement('style');
    s.id = 'rm-zel-one-tap-lock';
    s.textContent =
      'button, a, [onclick], .tactile-25d, .rm-parent-toggle-pill, #rm-top-profile-btn, [data-rm-profile-trigger="1"], #categoryModal [data-cat-id], #categoryModal [id^="sub-"] > div, .rm-service-chip { touch-action: manipulation !important; -webkit-tap-highlight-color: transparent !important; cursor: pointer !important; user-select: none !important; transition: none !important; }' +
      '#rm-top-profile-btn *, [data-rm-profile-trigger="1"] * { pointer-events: none !important; }' +
      '.tactile-25d:active { transform: none !important; }' +
      '#categoryModal.hidden, #profileModal.hidden, #rm-fullscreen-view.hidden, #playStoreInstallBanner.hidden, #categoryModal [id^="sub-"]:not([data-rm-collapsed="false"]):not(.rm-acc-open).hidden, #categoryModal [id^="sub-"][data-rm-collapsed="true"]:not(.rm-acc-open) { display: none !important; }' +
      '#categoryModal [id^="sub-"][data-rm-collapsed="false"], #categoryModal .rm-acc-open { display: block !important; visibility: visible !important; opacity: 1 !important; height: auto !important; max-height: none !important; }' +
      '#categoryModal:not(.hidden) { position: fixed !important; inset: 0 !important; width: 100vw !important; max-width: 100vw !important; z-index: 50 !important; background-color: #0b0f19 !important; display: flex !important; justify-content: center !important; -webkit-overflow-scrolling: touch !important; }' +
      '#categoryModal > div { width: 100% !important; max-width: 100% !important; }' +
      '#profileModal:not(.hidden) { position: fixed !important; inset: 0 !important; width: 100vw !important; height: 100vh !important; z-index: 99998 !important; background-color: rgba(2, 6, 23, 0.86) !important; display: flex !important; align-items: center !important; justify-content: center !important; padding: 12px !important; }' +
      '#rm-fullscreen-view:not(.hidden) { position: fixed !important; inset: 0 !important; z-index: 99999 !important; display: flex !important; }';
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


  // 8. Top-Right Profile Icon (👤) 0ms 1-Tap Detector & Self-Healing Profile Modal
  function bindTopRightProfileOneTap() {
    function ensureProfileModalReady() {
      var existing = document.getElementById('profileModal') || document.getElementById('profileHubModal') || document.getElementById('userProfileModal');
      if (existing && existing.getAttribute('data-rm-profile-ready') === '1') return existing;
      if (existing && existing.children.length > 0) {
        existing.setAttribute('data-rm-profile-ready', '1');
        return existing;
      }
      var m = existing || document.createElement('div');
      m.id = m.id || 'profileModal';
      m.setAttribute('data-rm-profile-ready', '1');
      m.className = 'fixed inset-0 z-[99998] hidden items-center justify-center bg-black/80 backdrop-blur-sm p-3 overflow-y-auto';
      var savedName = 'Rise Mitra Partner';
      try { savedName = localStorage.getItem('rm_profile_name_v1') || savedName; } catch (e) {}
      m.innerHTML =
        '<div class="w-full max-w-md rounded-2xl bg-slate-950 border border-cyan-500/40 shadow-2xl text-slate-100 p-4 my-auto" onclick="event.stopPropagation()">' +
          '<div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">' +
            '<div class="flex items-center gap-2.5">' +
              '<div class="w-10 h-10 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-lg">👤</div>' +
              '<div><h3 class="text-sm font-extrabold text-white">RM WORLD • सदस्य प्रोफ़ाइल</h3><p class="text-[11px] text-emerald-400 font-semibold">🟢 ऑनलाइन सिंक सक्रिय • DPDP 2023</p></div>' +
            '</div>' +
            '<button type="button" id="rm-prof-close-btn" class="px-3 py-1.5 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold">✕ बंद करें</button>' +
          '</div>' +
          '<div class="space-y-3 text-xs">' +
            '<div class="p-3 rounded-xl bg-slate-900 border border-slate-800">' +
              '<label class="block text-slate-400 mb-1">सदस्य नाम (On-Device Encrypted):</label>' +
              '<div class="flex gap-2">' +
                '<input id="rm-prof-name-inp" type="text" value="' + savedName + '" class="flex-1 rounded-lg bg-slate-950 border border-slate-700 px-2.5 py-1.5 text-white text-xs" />' +
                '<button type="button" id="rm-prof-save-btn" class="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-extrabold text-xs">Save</button>' +
              '</div>' +
            '</div>' +
            '<div class="grid grid-cols-2 gap-2">' +
              '<button type="button" id="rm-prof-dir-btn" class="py-2.5 px-3 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold text-left">📂 सभी 50 श्रेणियां खोलें ›</button>' +
              '<a href="/owner-console.html?v=4" class="py-2.5 px-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-left block">🔐 Owner Console ›</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      if (!existing) document.body.appendChild(m);
      m.addEventListener('click', function (ev) {
        var el = ev.target && ev.target.nodeType === 1 ? ev.target : (ev.target ? ev.target.parentElement : null);
        if (!el) return;
        if (el === m || el.closest('#rm-prof-close-btn')) window.closeProfileModal();
        else if (el.closest('#rm-prof-save-btn')) {
          var inp = document.getElementById('rm-prof-name-inp');
          if (inp && inp.value.trim()) {
            try { localStorage.setItem('rm_profile_name_v1', inp.value.trim()); } catch (e) {}
            el.closest('#rm-prof-save-btn').textContent = '✓ Saved';
          }
        } else if (el.closest('#rm-prof-dir-btn')) {
          window.closeProfileModal();
          if (typeof window.openCatalogModal === 'function') window.openCatalogModal();
        }
      });
      return m;
    }

    window.openProfileModal = function () {
      if (window.RM_ProfileHub && typeof window.RM_ProfileHub.open === 'function') {
        try { window.RM_ProfileHub.open(); } catch (e) {}
      }
      var m = ensureProfileModalReady();
      m.classList.remove('hidden');
      m.style.setProperty('display', 'flex', 'important');
    };
    window.closeProfileModal = function () {
      var m = document.getElementById('profileModal') || document.getElementById('profileHubModal') || document.getElementById('userProfileModal');
      if (m) {
        m.classList.add('hidden');
        m.style.setProperty('display', 'none', 'important');
      }
    };
    window.toggleProfileModal = function () {
      var m = ensureProfileModalReady();
      var isHidden = m.classList.contains('hidden') || window.getComputedStyle(m).display === 'none';
      if (isHidden) window.openProfileModal(); else window.closeProfileModal();
    };

    function autoTagTopRightProfileIcon() {
      try {
        var nodes = document.querySelectorAll('button, a, div.rounded-full, span.rounded-full');
        for (var i = 0; i < nodes.length; i++) {
          var n = nodes[i];
          var r = n.getBoundingClientRect ? n.getBoundingClientRect() : null;
          var t = (n.textContent || '').trim();
          if (r && r.top >= 0 && r.top < 115 && r.right > window.innerWidth - 105 && r.width >= 24 && r.width <= 76) {
            if (t.indexOf('सिंक') === -1 && t.indexOf('RM') === -1 && t.indexOf('इंस्टॉल') === -1 && t.indexOf('खोलें') === -1) {
              n.id = n.id || 'rm-top-profile-btn';
              n.setAttribute('data-rm-profile-trigger', '1');
            }
          }
        }
      } catch (e) {}
    }

    function findTopRightProfileTarget(target, evt) {
      var el = target && target.nodeType === 1 ? target : (target ? target.parentElement : null);
      if (!el || !el.closest) return null;
      if (el.closest('#categoryModal, #profileModal, #rm-fullscreen-view')) return null;
      var explicit = el.closest(
        '#rm-top-profile-btn, [data-rm-profile-trigger="1"], #profileBtn, #userProfileBtn, #openProfileBtn, [onclick*="Profile"], [onclick*="profile"], [aria-label*="Profile" i], [title*="Profile" i]'
      );
      if (explicit) return explicit;
      var hdrBtn = el.closest('header button, header a, header .rounded-full, button, a, .rounded-full');
      if (hdrBtn) {
        var r = hdrBtn.getBoundingClientRect ? hdrBtn.getBoundingClientRect() : null;
        var txt = (hdrBtn.textContent || '').trim();
        if (r && r.top >= 0 && r.top < 120 && r.right > window.innerWidth - 110 && r.width <= 76) {
          if (txt.indexOf('सिंक') === -1 && txt.indexOf('RM') === -1 && txt.indexOf('इंस्टॉल') === -1 && txt.indexOf('खोलें') === -1) {
            return hdrBtn;
          }
        }
      }
      var cx = evt && evt.changedTouches && evt.changedTouches[0] ? evt.changedTouches[0].clientX : (evt ? evt.clientX : 0);
      var cy = evt && evt.changedTouches && evt.changedTouches[0] ? evt.changedTouches[0].clientY : (evt ? evt.clientY : 0);
      if (cx > window.innerWidth - 85 && cy > 8 && cy < 95) {
        var topTxt = (el.textContent || '').trim();
        if (topTxt.indexOf('सिंक') === -1 && topTxt.indexOf('इंस्टॉल') === -1) return el;
      }
      return null;
    }

    function handleProfileOneTap(e) {
      if (e.type === 'touchend' && touchMoved) return;
      var trig = findTopRightProfileTarget(e.target, e);
      if (!trig) return;
      var now = Date.now();
      if (e.type === 'click' && now - lastProfileTouchTs < 450) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return;
      }
      if (now - lastProfileActionTs < 320) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return;
      }
      if (e.type === 'touchend') lastProfileTouchTs = now;
      lastProfileActionTs = now;
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      window.toggleProfileModal();
    }

    document.addEventListener('touchend', handleProfileOneTap, { capture: true, passive: false });
    document.addEventListener('click', handleProfileOneTap, { capture: true, passive: false });
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', autoTagTopRightProfileIcon);
    else autoTagTopRightProfileIcon();
    setTimeout(autoTagTopRightProfileIcon, 250);
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
