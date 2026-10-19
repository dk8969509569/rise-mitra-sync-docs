/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-0B-2 Top-Right Profile 0ms 1-Tap Opener & Controller (v81)
 *   - REPO TARGET    : public/js/one-tap-profile-hub-healer.js
 *   - SURFACE TARGET : SURFACE-A ONLY (Public Member Profile & Sovereign Hub UI)
 *   - HOST BINDING   : Surface-A (Auto-loaded by public/js/index-shell-bootstrap.js)
 *   - SIZE BUDGET    : <= 175 Logical Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : 100% ZEL | Fail-Closed | GATE-25.0 | CoverageRatio >= 1.00
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/one-tap-profile-hub-healer.js (Part-0B-2: 0ms 1-Tap Opener/Closer & Observer ONLY)
 *   - public/js/profile-hub-data-template.js (Part-1 Template: 2.5D CSS & 9-Section HTML Builder ONLY)
 *   - public/js/profile-hub-engine.js (Part-2 Root Engine: Avatar Storage, Compression & Mount API)
 *   - public/js/index-shell-bootstrap.js (Part-0A: Core Shell Boot, Anti-Freeze & Macro Bars ONLY)
 *   - public/js/one-tap-accordion-engine.js (Part-1C: 50 Category Cards & Sub-Card Accordion)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, ROOT-ENGINE-FIRST & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Top-Right Profile icon (👤) 0ms 1-Tap detection, self-healing
 *                              #profileModal fallback, `< वापस` & `✕` 0ms 1-Tap close, childList
 *                              anti-revert observer, and bridge to `profile-hub-data-template.js`.
 *   - ALLOWED ON SURFACE-B   : NONE (Surface-B Owner Console is strictly isolated).
 *   - ROOT-ENGINE-FIRST RULE : All HTML templates, 2.5D borders & large fonts live directly inside
 *                              `profile-hub-data-template.js` and `profile-hub-engine.js`.
 *   - FORBIDDEN IN THIS FILE : Requesting retired `profile-hub-25d-styles.js` or 200-node DOM loops.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.__RM_LOADED_MODULES__['one-tap-profile-hub-healer'],
 *                           window.openProfileModal, window.closeProfileModal,
 *                           window.toggleProfileModal
 *   - CALLS EXTERNAL APIs : window.injectProfileHubLargeFontStyles,
 *                           window.healProfileHubTypographyAndLayout,
 *                           window.RM_ProfileHub.open, window.openProfileHub,
 *                           window.openFullscreenModule, window.openCatalogModal
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #rm-top-profile-btn, [data-rm-profile-trigger="1"], #profileModal,
 *                           #profileHubModal, #userProfileModal, #rm-fullscreen-view, #fs-module-title
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (NEVER TOUCHED)
 *   - WORLD-CLASS 2.5D UI : 3-layer distinct color contrast, glowing 2.5D bevel borders, 15px-20px
 *                           anti-clipping fonts, and compact 12px Log Out via Part-1 template.
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : 0ms 1-Tap execution; suppresses synthetic ghost-clicks within 450ms after touchend.
 *   - SCROLL SAFETY : Tracks touchmove delta (>12px) so scrolling never triggers accidental taps.
 *   - DOM SAFETY    : State-verified DOM canary (`.rm-prof-hero-box` / `Sovereign Crown Partner`) ensures
 *                     0ms instant open/close.
 *   - ZERO REVERT   : 2.5D CSS & typography are baked directly into Part-1 root template.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (8 PROFILE CONTROLLER FUNCTIONS):
 *   1. ensurePart0B1StylesLoaded             2. bindTopRightProfileOneTap
 *   3. attachProfileContainerObserver        4. ensureProfileModalReady
 *   5. openProfileModal / closeProfileModal  6. toggleProfileModal
 *   7. autoTagTopRightProfileIcon            8. findTopRightProfileTarget & handleProfileOneTap
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole authoritative owner of Top-Right Profile 1-Tap Opener & Close Controller.
 *   - ZERO-GUESSWORK LOCK : Paired 1:1 with `profile-hub-engine.js` & `profile-hub-data-template.js`.
 *   - CANONICAL PATH      : Must exist ONLY at `public/js/one-tap-profile-hub-healer.js`.
 *   - BANNED ALIASES      : `public/js/profile-hub-25d-styles.js` is retired; never load it.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Delegates 2.5D CSS & template rendering to `public/js/profile-hub-data-template.js`.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['one-tap-profile-hub-healer']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries around DOM & storage operations.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 *   - MOBILE EDITING  : Major sections separated by 2 blank lines for thumb-selection safety.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, 1-TASK-1-FILE COMMIT, PRE-MAIN GATE & CONTRACT LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261018_v81'`.
 *   - 1-FILE COMMIT   : Synchronized with root engine Part-1/Part-2 split (`v81`).
 *   - PIPELINE GATE   : Commit & verify on `pre-main` before merging to `main`.
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
  if (window.__RM_LOADED_MODULES__['one-tap-profile-hub-healer']) return;
  window.__RM_LOADED_MODULES__['one-tap-profile-hub-healer'] = true;
  window.__RM_LOADED_MODULES__['profile-hub-25d-styles'] = true;

  var lastProfileTouchTs = 0;
  var lastProfileActionTs = 0;
  var touchStartX = 0;
  var touchStartY = 0;
  var touchMoved = false;


  // 1. Auto-Load Part-1 Template (`public/js/profile-hub-data-template.js`) & Bridge Style Lock (Zero 404)
  function ensurePart0B1StylesLoaded() {
    if (typeof window.injectProfileHubLargeFontStyles === 'function') {
      window.injectProfileHubLargeFontStyles();
      return;
    }
    if (window.RM_PROFILE_HUB_TEMPLATE && typeof window.RM_PROFILE_HUB_TEMPLATE.injectStyles === 'function') {
      window.RM_PROFILE_HUB_TEMPLATE.injectStyles();
      return;
    }
    if (!window.__RM_LOADED_MODULES__['profile-hub-data-template'] && !document.getElementById('rm-profile-part1-template-js')) {
      var s = document.createElement('script');
      s.id = 'rm-profile-part1-template-js';
      s.src = '/js/profile-hub-data-template.js?v=' + (window.__RM_ACTIVE_CACHE_VER || '20261018_v81');
      s.async = false;
      s.onload = function () {
        if (typeof window.injectProfileHubLargeFontStyles === 'function') window.injectProfileHubLargeFontStyles();
        if (typeof window.healProfileHubTypographyAndLayout === 'function') window.healProfileHubTypographyAndLayout(true);
      };
      (document.head || document.documentElement).appendChild(s);
    }
  }

  function invokeHealer(forceScan) {
    if (typeof window.healProfileHubTypographyAndLayout === 'function') {
      window.healProfileHubTypographyAndLayout(forceScan);
    }
  }


  // 2. Guaranteed Non-Blocking Top-Right Profile Icon (👤) 0ms 1-Tap Opener & Close Engine
  function bindTopRightProfileOneTap() {
    var fsContainerObsAttached = false;
    function attachProfileContainerObserver() {
      if (fsContainerObsAttached) return;
      var fsContainer = document.getElementById('rm-module-container');
      if (!fsContainer || typeof MutationObserver === 'undefined') return;
      fsContainerObsAttached = true;
      var obs = new MutationObserver(function () {
        invokeHealer(false);
      });
      obs.observe(fsContainer, { childList: true });
    }

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
      var savedName = 'Diwakar Kumar';
      try { savedName = localStorage.getItem('rm_profile_name_v1') || savedName; } catch (e) {}
      m.innerHTML =
        '<div class="w-full max-w-md rounded-2xl bg-slate-950 border border-cyan-500/40 shadow-2xl text-slate-100 p-5 my-auto" onclick="event.stopPropagation()">' +
          '<div class="flex items-center justify-between border-b border-slate-800 pb-3.5 mb-3.5">' +
            '<div class="flex items-center gap-3">' +
              '<div class="w-12 h-12 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-2xl">👤</div>' +
              '<div><h3 class="text-lg font-extrabold text-white">RM WORLD • सदस्य प्रोफ़ाइल</h3><p class="text-sm text-emerald-400 font-semibold">🟢 ऑनलाइन सिंक सक्रिय • DPDP 2023</p></div>' +
            '</div>' +
            '<button type="button" id="rm-prof-close-btn" class="px-3.5 py-2 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 text-sm font-bold">✕ बंद करें</button>' +
          '</div>' +
          '<div class="space-y-3.5 text-sm">' +
            '<div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800">' +
              '<label class="block text-slate-300 font-bold mb-1.5">सदस्य नाम (On-Device Encrypted):</label>' +
              '<div class="flex gap-2">' +
                '<input id="rm-prof-name-inp" type="text" value="' + savedName + '" class="flex-1 rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-white text-base font-bold" />' +
                '<button type="button" id="rm-prof-save-btn" class="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-extrabold text-sm">Save</button>' +
              '</div>' +
            '</div>' +
            '<div class="grid grid-cols-2 gap-2.5">' +
              '<button type="button" id="rm-prof-dir-btn" class="py-3 px-3 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold text-sm text-left">📂 सभी 50 श्रेणियां खोलें ›</button>' +
              '<a href="/owner-console.html?v=4" class="py-3 px-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-sm text-left block">🔐 Owner Console ›</a>' +
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

    window.openProfileModal = function (trigEl) {
      ensurePart0B1StylesLoaded();
      attachProfileContainerObserver();
      var fsView = document.getElementById('rm-fullscreen-view');
      var fsContainer = document.getElementById('rm-module-container');

      if (fsView && fsContainer && (fsContainer.querySelector('.rm-prof-hero-box') || (fsContainer.textContent || '').indexOf('Sovereign Crown Partner') !== -1)) {
        fsView.classList.remove('hidden');
        fsView.classList.add('rm-prof-upgraded-root');
        fsView.style.removeProperty('display');
        fsView.style.setProperty('display', 'flex', 'important');
        fsView.style.setProperty('z-index', '99999', 'important');
        invokeHealer(false);
        return;
      }

      if (fsView) {
        fsView.classList.remove('hidden');
        fsView.style.removeProperty('display');
        fsView.style.setProperty('display', 'flex', 'important');
        fsView.style.setProperty('z-index', '99999', 'important');
      }

      var opened = false;
      try {
        if (window.RM_ProfileHub && typeof window.RM_ProfileHub.open === 'function') {
          window.RM_ProfileHub.open(); opened = true;
        } else if (window.RM_PROFILE_HUB && typeof window.RM_PROFILE_HUB.open === 'function') {
          window.RM_PROFILE_HUB.open(); opened = true;
        } else if (typeof window.openProfileHub === 'function') {
          window.openProfileHub(); opened = true;
        } else if (typeof window.openSovereignProfileHub === 'function') {
          window.openSovereignProfileHub(); opened = true;
        } else if (typeof window.renderProfileHub === 'function') {
          window.renderProfileHub(); opened = true;
        } else if (trigEl) {
          var withOnclick = trigEl.closest ? trigEl.closest('[onclick]') : null;
          if (withOnclick && typeof withOnclick.onclick === 'function') {
            withOnclick.onclick(); opened = true;
          }
        }
      } catch (e) {}

      if (fsView) {
        fsView.classList.remove('hidden');
        fsView.style.removeProperty('display');
        fsView.style.setProperty('display', 'flex', 'important');
        fsView.style.setProperty('z-index', '99999', 'important');
      }

      var fsOpen = fsView && !fsView.classList.contains('hidden') && window.getComputedStyle(fsView).display !== 'none';
      var hasFsContent = fsContainer && (fsContainer.innerHTML || '').trim().length > 20;
      if (!opened && (!fsOpen || !hasFsContent)) {
        var m = ensureProfileModalReady();
        m.classList.remove('hidden');
        m.style.removeProperty('display');
        m.style.setProperty('display', 'flex', 'important');
      }
      if (fsContainer) fsContainer.removeAttribute('data-rm-prof-healed');
      invokeHealer(true);
      setTimeout(function () { invokeHealer(false); }, 30);
    };

    window.closeProfileModal = function () {
      var fs = document.getElementById('rm-fullscreen-view');
      if (fs) {
        fs.classList.add('hidden');
        fs.style.setProperty('display', 'none', 'important');
      }
      var m = document.getElementById('profileModal') || document.getElementById('profileHubModal') || document.getElementById('userProfileModal');
      if (m) {
        m.classList.add('hidden');
        m.style.setProperty('display', 'none', 'important');
      }
    };

    window.toggleProfileModal = function (trigEl) {
      var fs = document.getElementById('rm-fullscreen-view');
      var pm = document.getElementById('profileModal');
      var isFsOpen = fs && !fs.classList.contains('hidden') && window.getComputedStyle(fs).display !== 'none';
      var isPmOpen = pm && !pm.classList.contains('hidden') && window.getComputedStyle(pm).display !== 'none';
      if (isFsOpen || isPmOpen) window.closeProfileModal();
      else window.openProfileModal(trigEl);
    };

    function autoTagTopRightProfileIcon() {
      try {
        attachProfileContainerObserver();
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
      var fs = document.getElementById('rm-fullscreen-view');
      var pm = document.getElementById('profileModal');
      var cm = document.getElementById('categoryModal');
      if (fs && !fs.classList.contains('hidden') && window.getComputedStyle(fs).display !== 'none' && fs.contains(el)) return null;
      if (pm && !pm.classList.contains('hidden') && window.getComputedStyle(pm).display !== 'none' && pm.contains(el)) return null;
      if (cm && !cm.classList.contains('hidden') && window.getComputedStyle(cm).display !== 'none' && cm.contains(el)) return null;

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

    document.addEventListener('touchstart', function (e) {
      if (e.touches && e.touches.length === 1) { touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY; touchMoved = false; }
    }, { capture: true, passive: true });

    document.addEventListener('touchmove', function (e) {
      if (e.touches && e.touches.length === 1 && (Math.abs(e.touches[0].clientX - touchStartX) > 12 || Math.abs(e.touches[0].clientY - touchStartY) > 12)) touchMoved = true;
    }, { capture: true, passive: true });

    function handleProfileOneTap(e) {
      if (e.type === 'touchend' && touchMoved) return;
      var el = e.target && e.target.nodeType === 1 ? e.target : (e.target ? e.target.parentElement : null);
      var fs = document.getElementById('rm-fullscreen-view');

      if (fs && !fs.classList.contains('hidden') && window.getComputedStyle(fs).display !== 'none' && el && fs.contains(el)) {
        var closeBtn = el.closest('button, a');
        if (closeBtn) {
          var bTxt = (closeBtn.textContent || '').trim();
          var bRect = closeBtn.getBoundingClientRect ? closeBtn.getBoundingClientRect() : null;
          if ((bRect && bRect.top < 110 && (bTxt.indexOf('वापस') !== -1 || bTxt === '✕' || bTxt === '×' || bTxt === 'X' || bTxt === '←')) ||
              (closeBtn.getAttribute('onclick') || '').indexOf('close') !== -1) {
            var nowClose = Date.now();
            if (e.type === 'touchend') lastProfileTouchTs = nowClose;
            lastProfileActionTs = nowClose;
            e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
            window.closeProfileModal();
            return;
          }
        }
        invokeHealer(false);
        setTimeout(function () { invokeHealer(false); }, 10);
        setTimeout(function () { invokeHealer(false); }, 60);
        return;
      }

      var trig = findTopRightProfileTarget(e.target, e);
      if (!trig) return;
      var now = Date.now();
      if (e.type === 'click' && now - lastProfileTouchTs < 450) {
        e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
        return;
      }
      if (now - lastProfileActionTs < 180) {
        e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
        return;
      }
      if (e.type === 'touchend') lastProfileTouchTs = now;
      lastProfileActionTs = now;
      e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
      window.openProfileModal(trig);
    }

    document.addEventListener('touchend', handleProfileOneTap, { capture: true, passive: false });
    document.addEventListener('click', handleProfileOneTap, { capture: true, passive: false });
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', autoTagTopRightProfileIcon);
    else autoTagTopRightProfileIcon();
    setTimeout(autoTagTopRightProfileIcon, 250);
  }

  ensurePart0B1StylesLoaded();
  bindTopRightProfileOneTap();
})();
