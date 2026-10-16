/**
 * RISE MITRA — PART 1: MODULAR CATALOG HYDRATOR, DISPATCHERS & CACHE SENTINEL
 * MODULE        : Decoupled CSS Lock, Catalog Sync, Global Modal Dispatchers & SIVME Loader
 * GOVERNANCE    : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 * REPO TARGET   : public/js/one-tap-catalog-hydrator.js (Split from one-tap-shell-bridge.js v26/v27)
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var CACHE_VERSION = '20261016_v30';
  var isSyncingDOM = false;

  // Shared state across Part 1 (Hydrator) and Part 2 (1-Tap Bridge)
  var openStateMap = window.__RM_OPEN_CAT_STATE || { '15': true, '16': true };
  window.__RM_OPEN_CAT_STATE = openStateMap;
  window.__RM_LAST_MODAL_OPEN_TS = window.__RM_LAST_MODAL_OPEN_TS || 0;

  // Auto-load decoupled Fullscreen Micro-App Controller Module (public/js/fullscreen-microapp-controller.js)
  (function ensureFullscreenControllerLoaded() {
    if (window.RM_FULLSCREEN_CONTROLLER || document.getElementById('rm-fs-microapp-controller-script')) return;
    var s = document.createElement('script');
    s.id = 'rm-fs-microapp-controller-script';
    s.src = '/js/fullscreen-microapp-controller.js?v=' + CACHE_VERSION;
    s.async = false;
    (document.head || document.documentElement).appendChild(s);
  })();

  // 1. AUTO-PURGE STALE SIVME FLAGS, STALE VISIBILITY LOCKS & STALE CACHE ON NORMAL PUBLIC LAUNCH
  (function purgeStaleState() {
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
      if (localStorage.getItem('rm_cache_ver') !== CACHE_VERSION && 'caches' in window) {
        caches.keys().then(function (names) {
          for (var i = 0; i < names.length; i++) {
            caches.delete(names[i]);
          }
        });
        localStorage.setItem('rm_cache_ver', CACHE_VERSION);
      }
    } catch (e) {}
  })();

  // 2. INJECT ZEL 1-TAP INSTANT TOUCH & SUB-CONTAINER VISIBILITY LOCK CSS
  (function injectOneTapLockStyles() {
    if (document.getElementById('rm-zel-one-tap-lock')) return;
    var style = document.createElement('style');
    style.id = 'rm-zel-one-tap-lock';
    style.textContent = [
      'button, a, [onclick], .tactile-25d, #categoryModal [data-cat-id], #categoryModal [id^="sub-"] > div, .rm-service-chip {',
      '  touch-action: manipulation !important; -webkit-tap-highlight-color: transparent !important;',
      '  cursor: pointer !important; user-select: none !important; -webkit-user-select: none !important;',
      '}',
      '.tactile-25d:active { transform: none !important; }',
      '#categoryModal.hidden, #rm-fullscreen-view.hidden, #playStoreInstallBanner.hidden, #categoryModal .hidden, #categoryModal [id^="sub-"].hidden, #categoryModal [id^="sub-"][data-rm-collapsed="true"] { display: none !important; }',
      '#categoryModal [id^="sub-"][data-rm-collapsed="false"] { display: block !important; }',
      '#categoryModal:not(.hidden) { position: fixed !important; inset: 0 !important; z-index: 50 !important; background-color: #0b0f19 !important; display: flex !important; justify-content: center !important; }',
      '#rm-fullscreen-view:not(.hidden) { position: fixed !important; inset: 0 !important; z-index: 99999 !important; display: flex !important; }',
      '#fs-module-title { margin: 0 10px !important; font-size: 14px !important; font-weight: 800 !important; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; text-align: center !important; flex: 1 !important; }',
      '#rm-module-container select { font-size: 12.5px !important; padding-right: 24px !important; text-overflow: ellipsis !important; }'
    ].join('\n');
    document.head.appendChild(style);
  })();

  // Helper: Force-close Fullscreen Viewport reliably
  function forceCloseFullscreenViewport() {
    var fs = document.getElementById('rm-fullscreen-view');
    if (fs) {
      fs.classList.add('hidden');
      fs.style.setProperty('display', 'none', 'important');
    }
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.forceCloseFullscreenViewport === 'function') {
      try { window.RM_FULLSCREEN_CONTROLLER.forceCloseFullscreenViewport(); } catch (e) {}
    }
  }

  // Helper: Normalize Fullscreen Micro-App DOM
  function normalizeFullscreenMicroAppDOM(displayCode) {
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.normalizeFullscreenMicroAppDOM === 'function') {
      try { window.RM_FULLSCREEN_CONTROLLER.normalizeFullscreenMicroAppDOM(displayCode); } catch (e) {}
    }
    var fsTitle = document.getElementById('fs-module-title');
    if (!fsTitle) return;
    var is15Series = String(displayCode || '').indexOf('15-') === 0;
    var codePrefix = is15Series ? '15' : '16';
    if (displayCode === '15-2' || displayCode === '16-2') {
      fsTitle.textContent = '📒 ' + codePrefix + '-2 • किराया बहीखाता';
    } else if (displayCode === '15-3' || displayCode === '16-3') {
      fsTitle.textContent = '🏢 ' + codePrefix + '-3 • कमरा व फ्लैट खोज';
    } else if (displayCode === '15-1' || displayCode === '16-1') {
      fsTitle.textContent = '🛠️ ' + codePrefix + '-1 • मिस्त्री व होम रिपेयर';
    }
  }

  // Helper: Zero-Hang Micro-App Hydration Guard
  function ensureMicroAppRendered(subCode, titleText, subtitleText) {
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered === 'function') {
      window.RM_FULLSCREEN_CONTROLLER.ensureMicroAppRendered(subCode, titleText, subtitleText);
    }
  }

  // Helper: Resolve sub-container across all 10 ID formats + sibling check + auto-create fallback for Games 33-50
  function resolveCategorySubContainer(catEl, rawId, cleanNum) {
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
    if (byId) return byId;

    if (catEl) {
      var inside = catEl.querySelector('[id^="sub-"]');
      if (inside) return inside;
      var nextSib = catEl.nextElementSibling;
      if (nextSib && nextSib.id && nextSib.id.indexOf('sub-') === 0) return nextSib;
      if (catEl.children.length > 1 && catEl.children[1].tagName === 'DIV') return catEl.children[1];

      // Auto-build missing sub-container (e.g., 33. Action Games) so 1-Tap NEVER returns null
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
      return created;
    }
    return null;
  }

  // Helper: Lock legacy renderCatalogItems so 20ms/120ms timers cannot wipe out opened accordions
  function installRenderDestructionShield() {
    if (typeof window.renderCatalogItems === 'function' && !window.renderCatalogItems.__rmShielded) {
      var origRender = window.renderCatalogItems;
      var shielded = function () {
        var t1 = document.getElementById('tier1-list');
        var t2 = document.getElementById('tier2-list');
        var alreadyHydrated = t1 && t2 && t1.children.length >= 10 && t2.children.length >= 1 &&
                              t1.innerHTML.indexOf('लोड हो रहा है') === -1;
        if (alreadyHydrated) return;
        return origRender.apply(this, arguments);
      };
      shielded.__rmShielded = true;
      window.renderCatalogItems = shielded;
    }
  }

  // Helper: Apply open/close state directly to a single Category Card (0ms deterministic)
  function applyCategoryOpenState(catEl, rawId, cleanNum, isOpen) {
    if (!catEl) return false;
    var intNum = parseInt(cleanNum, 10);
    var normNum = isNaN(intNum) ? cleanNum : String(intNum);
    var paddedNum = (intNum < 10 ? '0' : '') + intNum;
    var subContainer = resolveCategorySubContainer(catEl, rawId, cleanNum);
    if (!subContainer) return false;

    var headerEl = (catEl.children && catEl.children.length > 1 && catEl.contains(subContainer))
      ? catEl.children[0]
      : (catEl.querySelector(':scope > div:first-child') || catEl);

    if (headerEl && headerEl.hasAttribute('onclick')) {
      headerEl.removeAttribute('onclick');
    }

    var subCards = subContainer.querySelectorAll(':scope > div');

    if (isOpen) {
      subContainer.classList.remove('hidden');
      subContainer.setAttribute('data-rm-collapsed', 'false');
      subContainer.style.setProperty('display', 'block', 'important');
      if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard === 'function') {
        subCards.forEach(function (sc, idx) {
          sc.removeAttribute('data-rm-sub-rendered');
          window.RM_UNIVERSAL_CARD_ENGINE.renderSubCard(sc, normNum, paddedNum + '-' + (idx + 1));
        });
      }
    } else {
      subContainer.classList.add('hidden');
      subContainer.setAttribute('data-rm-collapsed', 'true');
      subContainer.style.setProperty('display', 'none', 'important');
    }

    if (headerEl && window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard === 'function') {
      headerEl.removeAttribute('data-rm-parent-rendered');
      window.RM_UNIVERSAL_CARD_ENGINE.renderParentCard(headerEl, normNum, isOpen, subCards.length || 3);
    }

    // Update pill text directly ("और देखें ▼" <-> "समेटें ▲")
    var pills = catEl.querySelectorAll('button, span, div');
    for (var i = 0; i < pills.length; i++) {
      var p = pills[i];
      if (p.children.length === 0 && p.textContent) {
        var txt = p.textContent.trim();
        if (isOpen && (txt.indexOf('और देखें') !== -1 || txt.indexOf('विकल्प ▼') !== -1 || txt.indexOf('सेवाएं ▼') !== -1)) {
          p.textContent = 'समेटें ▲';
        } else if (!isOpen && (txt.indexOf('समेटें') !== -1 || txt.indexOf('छुपाएं ▲') !== -1)) {
          p.textContent = 'और देखें ▼';
        }
      }
    }
    return true;
  }

  // Helper: Hydrate Play Store Cards & enforce openStateMap after legacy 20ms/120ms renders
  function syncAndHydrateCatalogCards() {
    if (isSyncingDOM) return;
    isSyncingDOM = true;
    try {
      var modal = document.getElementById('categoryModal');
      if (!modal) return;

      var t1 = document.getElementById('tier1-list');
      if (t1 && (t1.innerHTML.indexOf('लोड हो रहा है') !== -1 || t1.children.length <= 1) && typeof window.renderCatalogItems === 'function') {
        try { window.renderCatalogItems(); } catch (e) {}
      }

      installRenderDestructionShield();

      if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
        try { window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog(); } catch (e) {}
      }

      var cats = modal.querySelectorAll('[data-cat-id]');
      cats.forEach(function (catEl) {
        catEl.classList.remove('hidden');
        if (catEl.style.display === 'none') catEl.style.removeProperty('display');

        var rawId = catEl.getAttribute('data-cat-id') || '';
        var cleanNum = rawId.replace(/[^0-9]/g, '');
        if (!cleanNum) return;
        var intNum = parseInt(cleanNum, 10);
        var normNum = isNaN(intNum) ? cleanNum : String(intNum);
        var isOpen = Boolean(openStateMap[normNum]);

        applyCategoryOpenState(catEl, rawId, cleanNum, isOpen);
      });
    } finally {
      isSyncingDOM = false;
    }
  }

  // 3. GLOBAL MODAL & DRAWER DISPATCHERS (100% ZEL PRESERVED)
  window.openCatalogModal = function () {
    var m = document.getElementById('categoryModal');
    if (!m) return;
    window.__RM_LAST_MODAL_OPEN_TS = Date.now();
    m.classList.remove('hidden');
    m.style.setProperty('display', 'flex', 'important');
    syncAndHydrateCatalogCards();
    setTimeout(syncAndHydrateCatalogCards, 10);
    setTimeout(syncAndHydrateCatalogCards, 50);
    setTimeout(syncAndHydrateCatalogCards, 140);
    setTimeout(syncAndHydrateCatalogCards, 260);
  };

  window.closeCatalogModal = function () {
    if (Date.now() - (window.__RM_LAST_MODAL_OPEN_TS || 0) < 350) return;
    var m = document.getElementById('categoryModal');
    if (!m) return;
    m.classList.add('hidden');
    m.style.setProperty('display', 'none', 'important');
  };

  window.toggleMenuDrawer = function (open) {
    var m = document.getElementById('categoryModal');
    if (open === true) {
      window.openCatalogModal();
    } else if (open === false) {
      window.__RM_LAST_MODAL_OPEN_TS = 0;
      window.closeCatalogModal();
    } else if (m && (m.classList.contains('hidden') || window.getComputedStyle(m).display === 'none')) {
      window.openCatalogModal();
    } else {
      window.closeCatalogModal();
    }
  };

  window.closeFullscreenModule = forceCloseFullscreenViewport;

  window.dismissPlayBanner = function () {
    var b = document.getElementById('playStoreInstallBanner') || document.getElementById('pwa-install-banner');
    if (b) {
      b.classList.add('hidden');
      b.style.setProperty('display', 'none', 'important');
    }
  };

  // 4. FULLSCREEN 1-TAP SERVICE LAUNCHER
  function launchOneTapServiceScreen(titleText, subtitleText, subCode) {
    if (window.RM_FULLSCREEN_CONTROLLER && typeof window.RM_FULLSCREEN_CONTROLLER.launchOneTapServiceScreen === 'function') {
      window.RM_FULLSCREEN_CONTROLLER.launchOneTapServiceScreen(titleText, subtitleText, subCode);
    }
  }
  window.launchOneTapServiceScreen = launchOneTapServiceScreen;

  // Expose all helpers on window.RM_CATALOG_HYDRATOR for Part 2 Bridge
  window.RM_CATALOG_HYDRATOR = {
    forceCloseFullscreenViewport: forceCloseFullscreenViewport,
    normalizeFullscreenMicroAppDOM: normalizeFullscreenMicroAppDOM,
    ensureMicroAppRendered: ensureMicroAppRendered,
    resolveCategorySubContainer: resolveCategorySubContainer,
    installRenderDestructionShield: installRenderDestructionShield,
    applyCategoryOpenState: applyCategoryOpenState,
    syncAndHydrateCatalogCards: syncAndHydrateCatalogCards,
    launchOneTapServiceScreen: launchOneTapServiceScreen
  };

  function attachCatalogHydrationObserver() {
    var modal = document.getElementById('categoryModal');
    if (!modal || typeof MutationObserver === 'undefined') return;
    var obs = new MutationObserver(function () {
      if (isSyncingDOM) return;
      installRenderDestructionShield();
      var rawHeader = modal.querySelector('[data-cat-id] > div:first-child:not([data-rm-parent-rendered])');
      if (rawHeader) {
        syncAndHydrateCatalogCards();
      }
    });
    obs.observe(modal, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      window.closeFullscreenModule = forceCloseFullscreenViewport;
      attachCatalogHydrationObserver();
      setTimeout(syncAndHydrateCatalogCards, 60);
      setTimeout(syncAndHydrateCatalogCards, 180);
    });
  } else {
    window.closeFullscreenModule = forceCloseFullscreenViewport;
    attachCatalogHydrationObserver();
    setTimeout(syncAndHydrateCatalogCards, 60);
    setTimeout(syncAndHydrateCatalogCards, 180);
  }

  // 6. SERVICE WORKER AUTO-UPDATE SENTINEL
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      for (var i = 0; i < regs.length; i++) {
        regs[i].update();
      }
    });
  }

  // 7. CONDITIONAL SIVME DEBUG ENGINE LOADER (SURFACE-B ONLY)
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('sivme') === 'owner' || urlParams.get('sov_mode') === 'in_situ') {
    var s = document.createElement('script');
    s.src = '/js/sovereign-in-situ-hud.js';
    s.async = false;
    document.body.appendChild(s);
  }
})();
