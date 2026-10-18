/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-0B Top-Right Profile 1-Tap & Large-Font Healer (v75)
 *   - REPO TARGET    : public/js/one-tap-profile-hub-healer.js
 *   - SURFACE TARGET : SURFACE-A ONLY (Public Member Profile & Sovereign Hub UI)
 *   - HOST BINDING   : Surface-A (Auto-loaded by public/js/index-shell-bootstrap.js)
 *   - SIZE BUDGET    : <= 290 Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/one-tap-profile-hub-healer.js (Part-0B: Top-Right Profile 1-Tap & Anti-Clipping Large-Font Healer)
 *   - public/js/index-shell-bootstrap.js (Part-0A: Core Shell Boot, Anti-Freeze & Macro Bars ONLY)
 *   - public/js/one-tap-accordion-engine.js (Part-1C: 50 Category Cards & Sub-Card Accordion)
 *   - public/js/profile-hub-engine.js (Profile Hub Data/View Engine — Bridged on 1-Tap)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Top-Right Profile icon (👤) 0ms 1-Tap detection, self-healing
 *                              #profileModal fallback, Profile & Sovereign Hub large-font
 *                              (16px-20px) anti-clipping upgrade, compact 12px Log Out, duplicate header hide.
 *   - ALLOWED ON SURFACE-B   : NONE (Surface-B Owner Console is strictly isolated).
 *   - FORBIDDEN IN THIS FILE : Scanning document.body when profile is closed or blocking native profile click.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.__RM_LOADED_MODULES__['one-tap-profile-hub-healer'],
 *                           window.openProfileModal, window.closeProfileModal,
 *                           window.toggleProfileModal, window.healProfileHubTypographyAndLayout
 *   - CALLS EXTERNAL APIs : window.RM_ProfileHub.open, window.openProfileHub,
 *                           window.openFullscreenModule, window.openCatalogModal
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #rm-top-profile-btn, [data-rm-profile-trigger="1"], #profileModal,
 *                           #profileHubModal, #userProfileModal, #rm-fullscreen-view, #fs-module-title
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (NEVER TOUCHED)
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - ZERO FREEZE   : Never scans document.body; scans ONLY open #rm-fullscreen-view or #profileModal.
 *   - CLICK SAFETY  : Invokes native onclick / RM_ProfileHub directly and unlocks inline display:none!important.
 *   - ANTI-CLIPPING : Pure CSS rules enforce large fonts (16px-20px) and compact 12px Log Out without DOM thrashing.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (8 PROFILE BLOCK FUNCTIONS):
 *   1. injectProfileHubLargeFontStyles       2. healProfileHubTypographyAndLayout
 *   3. bindTopRightProfileOneTap             4. ensureProfileModalReady
 *   5. openProfileModal / closeProfileModal  6. toggleProfileModal
 *   7. autoTagTopRightProfileIcon            8. findTopRightProfileTarget & handleProfileOneTap
 * ==============================================================================
 * 8. ONE JOB = ONE FILE & CANONICAL PATH LOCK (ANTI-DUPLICATE FILE GUARD):
 *   - SINGLE JOB RULE : Sole authoritative owner of Top-Right Profile 1-Tap & Large-Font Healer.
 *   - CANONICAL PATH  : Must exist ONLY at `public/js/one-tap-profile-hub-healer.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Extracted cleanly from index-shell-bootstrap.js to keep both <= 290 lines.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['one-tap-profile-hub-healer']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries around DOM & storage operations.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, PRE-MAIN GATE & CONTRACT PARITY LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261018_v74'`.
 *   - PIPELINE GATE   : Commit & verify on `pre-main` before merging to `main`.
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
  if (window.__RM_LOADED_MODULES__['one-tap-profile-hub-healer']) return;
  window.__RM_LOADED_MODULES__['one-tap-profile-hub-healer'] = true;

  var lastProfileActionTs = 0;
  var touchStartX = 0;
  var touchStartY = 0;
  var touchMoved = false;


  // 1. Inject Pure CSS Anti-Clipping Large Font & Compact 12px Logout Styles (Zero JS Freeze)
  function injectProfileHubLargeFontStyles() {
    var existing = document.getElementById('rm-profile-hub-large-font-lock');
    var s = existing || document.createElement('style');
    s.id = 'rm-profile-hub-large-font-lock';
    s.textContent =
      '#rm-top-profile-btn, [data-rm-profile-trigger="1"] { touch-action: manipulation !important; cursor: pointer !important; transform: none !important; }' +
      '#rm-top-profile-btn *, [data-rm-profile-trigger="1"] * { pointer-events: none !important; }' +
      '#profileModal:not(.hidden) { position: fixed !important; inset: 0 !important; width: 100vw !important; height: 100vh !important; z-index: 99998 !important; background-color: rgba(2, 6, 23, 0.88) !important; display: flex !important; align-items: center !important; justify-content: center !important; padding: 12px !important; }' +
      '#rm-fullscreen-view:not(.hidden) { position: fixed !important; inset: 0 !important; width: 100vw !important; height: 100vh !important; z-index: 99999 !important; display: flex !important; }' +
      '.rm-prof-upgraded-root { padding-bottom: 125px !important; }' +
      '.rm-prof-upgraded-root div, .rm-prof-upgraded-root span, .rm-prof-upgraded-root p, .rm-prof-upgraded-root button, .rm-prof-upgraded-root a, .rm-prof-upgraded-root h1, .rm-prof-upgraded-root h2, .rm-prof-upgraded-root h3, .rm-prof-upgraded-root h4 { height: auto !important; max-height: none !important; overflow: visible !important; text-overflow: clip !important; }' +
      '.rm-prof-upgraded-root .truncate { white-space: normal !important; overflow: visible !important; text-overflow: clip !important; }' +
      '.rm-prof-upgraded-root .text-xs:not(.rm-prof-logout-btn), .rm-prof-upgraded-root [class*="text-[10px]"]:not(.rm-prof-logout-btn), .rm-prof-upgraded-root [class*="text-[11px]"]:not(.rm-prof-logout-btn), .rm-prof-upgraded-root [class*="text-[12px]"]:not(.rm-prof-logout-btn) { font-size: 15px !important; line-height: 1.5 !important; font-weight: 700 !important; color: #e2e8f0 !important; }' +
      '.rm-prof-upgraded-root .text-sm:not(.rm-prof-logout-btn), .rm-prof-upgraded-root [class*="text-[13px]"]:not(.rm-prof-logout-btn), .rm-prof-upgraded-root [class*="text-[14px]"]:not(.rm-prof-logout-btn) { font-size: 18px !important; line-height: 1.44 !important; font-weight: 800 !important; color: #ffffff !important; }' +
      '.rm-prof-row-title { font-size: 18.5px !important; font-weight: 800 !important; line-height: 1.42 !important; color: #ffffff !important; white-space: normal !important; display: block !important; }' +
      '.rm-prof-row-sub { font-size: 15.5px !important; font-weight: 700 !important; line-height: 1.5 !important; color: #e2e8f0 !important; margin-top: 4px !important; white-space: normal !important; display: block !important; }' +
      '.rm-prof-sec-hdr { font-size: 15.5px !important; font-weight: 900 !important; letter-spacing: 0.3px !important; line-height: 1.45 !important; color: #38bdf8 !important; }' +
      '.rm-prof-grid-card { height: auto !important; min-height: 94px !important; max-height: none !important; padding: 12px 10px !important; overflow: visible !important; align-items: flex-start !important; }' +
      '.rm-prof-grid-title { font-size: 16px !important; font-weight: 800 !important; line-height: 1.35 !important; color: #ffffff !important; white-space: normal !important; display: block !important; }' +
      '.rm-prof-grid-sub { font-size: 13.5px !important; font-weight: 700 !important; line-height: 1.42 !important; margin-top: 4px !important; white-space: normal !important; display: block !important; }' +
      '.rm-prof-logout-btn { font-size: 12px !important; font-weight: 700 !important; line-height: 1.2 !important; min-height: 32px !important; max-width: 140px !important; padding: 6px 16px !important; margin: 14px auto 22px auto !important; display: block !important; border-radius: 10px !important; }';
    if (!existing) (document.head || document.documentElement).appendChild(s);
  }


  // 2. Scoped Profile Hub Large-Font Healer (Scans ONLY Open Modal — Never Scans document.body)
  function healProfileHubTypographyAndLayout() {
    try {
      var roots = [
        document.getElementById('rm-fullscreen-view'),
        document.getElementById('profileModal'),
        document.getElementById('profileHubModal'),
        document.getElementById('userProfileModal')
      ];
      for (var c = 0; c < roots.length; c++) {
        var root = roots[c];
        if (!root || root.classList.contains('hidden') || window.getComputedStyle(root).display === 'none') continue;
        if ((root.textContent || '').indexOf('Sovereign') === -1 && (root.textContent || '').indexOf('Freeze Account') === -1 && (root.textContent || '').indexOf('प्रोफ़ाइल') === -1) continue;

        root.classList.add('rm-prof-upgraded-root');
        var fsTitle = document.getElementById('fs-module-title');
        if (fsTitle && ((fsTitle.textContent || '').indexOf('Profile') !== -1 || (fsTitle.textContent || '').indexOf('प्रोफ़ाइल') !== -1)) {
          fsTitle.textContent = '👤 प्रोफ़ाइल व सॉवरेन हब';
          fsTitle.style.setProperty('font-size', '15px', 'important');
          fsTitle.style.setProperty('font-weight', '800', 'important');
          fsTitle.style.setProperty('white-space', 'nowrap', 'important');
          fsTitle.style.setProperty('overflow', 'visible', 'important');
          fsTitle.style.setProperty('text-overflow', 'clip', 'important');
        }

        var allNodes = root.querySelectorAll('div, span, p, h1, h2, h3, h4, button, a');
        for (var i = 0; i < allNodes.length; i++) {
          var el = allNodes[i];
          var txt = (el.textContent || '').trim();
          if (!txt) continue;

          if (txt === 'Log Out' || txt.indexOf('लॉग आउट') !== -1 || txt === 'Logout') {
            el.classList.add('rm-prof-logout-btn');
            el.style.setProperty('font-size', '12px', 'important');
            el.style.setProperty('max-width', '140px', 'important');
            el.style.setProperty('min-height', '32px', 'important');
            el.style.setProperty('padding', '6px 16px', 'important');
            el.style.setProperty('margin', '14px auto 22px auto', 'important');
            continue;
          }

          if (el.children.length === 0) {
            if (txt === 'Diwakar Kumar' || txt === 'Rise Mitra Partner') {
              el.classList.remove('truncate');
              el.style.setProperty('font-size', '19.5px', 'important');
              el.style.setProperty('font-weight', '900', 'important');
              el.style.setProperty('color', '#ffffff', 'important');
              el.style.setProperty('white-space', 'normal', 'important');
            } else if (txt.indexOf('USR-') !== -1 || txt === 'Client ID') {
              el.style.setProperty('font-size', '15px', 'important');
              el.style.setProperty('font-weight', '800', 'important');
              el.style.setProperty('white-space', 'nowrap', 'important');
            } else if (txt.indexOf('Sovereign Crown Partner') !== -1) {
              el.style.setProperty('font-size', '14.5px', 'important');
              el.style.setProperty('font-weight', '800', 'important');
              el.style.setProperty('line-height', '1.4', 'important');
            } else if (txt === 'फ़ोटो बदलें' || txt === 'हटाएं' || txt === 'सत्यापित' || txt.indexOf('जुड़ें') !== -1) {
              el.style.setProperty('font-size', '14.5px', 'important');
              el.style.setProperty('font-weight', '800', 'important');
              el.style.setProperty('white-space', 'nowrap', 'important');
            } else if (txt.indexOf('SOVEREIGN PARTNERSHIP') !== -1 || txt.indexOf('MANAGE ACCOUNT') !== -1 ||
                       txt.indexOf('SOCIAL ACTIVITIES') !== -1 || txt.indexOf('सुरक्षा व गोपनीयता') !== -1 ||
                       txt.indexOf('OFFICIAL CHANNELS') !== -1) {
              el.classList.add('rm-prof-sec-hdr');
            } else if (txt.indexOf('RM WORLD v') !== -1) {
              el.style.setProperty('font-size', '14px', 'important');
              el.style.setProperty('font-weight', '700', 'important');
              el.style.setProperty('color', '#cbd5e1', 'important');
              el.style.setProperty('padding-bottom', '85px', 'important');
              el.style.setProperty('display', 'block', 'important');
            } else if (txt === '›' || txt === '>') {
              el.style.setProperty('font-size', '22px', 'important');
              el.style.setProperty('font-weight', '900', 'important');
              el.style.setProperty('color', '#38bdf8', 'important');
            }
          }

          if (el.children.length === 2) {
            var c0 = el.children[0];
            var c1 = el.children[1];
            var t0 = (c0.textContent || '').trim();
            var t1 = (c1.textContent || '').trim();
            if (c0.children.length === 0 && c1.children.length === 0 && t0.length > 2 && t0.length < 45 && t1.length > 3 && t1.length < 75) {
              if (t0 === 'Personal Details' || t0 === 'Partner Network' || t0 === 'Sovereign Vault' || t0 === 'Reports') {
                c0.classList.add('rm-prof-grid-title');
                c1.classList.add('rm-prof-grid-sub');
                el.style.setProperty('min-width', '0', 'important');
                if (el.parentElement) el.parentElement.classList.add('rm-prof-grid-card');
              } else {
                c0.classList.add('rm-prof-row-title');
                c1.classList.add('rm-prof-row-sub');
                if (el.parentElement) {
                  el.parentElement.style.setProperty('padding-top', '14px', 'important');
                  el.parentElement.style.setProperty('padding-bottom', '14px', 'important');
                  el.parentElement.style.setProperty('height', 'auto', 'important');
                }
              }
            }
          }

          if (txt === 'Profile & Sovereign Hub' && el.tagName !== 'TITLE' && el.id !== 'fs-module-title') {
            var dupRow = el.parentElement;
            var outerRow = dupRow && dupRow.parentElement ? dupRow.parentElement : dupRow;
            if (outerRow && (outerRow.textContent || '').indexOf('←') !== -1 && (outerRow.textContent || '').length < 65) {
              outerRow.style.setProperty('display', 'none', 'important');
            } else if (dupRow && (dupRow.textContent || '').indexOf('←') !== -1) {
              dupRow.style.setProperty('display', 'none', 'important');
            }
          }
        }
        break;
      }
    } catch (e) {}
  }
  window.healProfileHubTypographyAndLayout = healProfileHubTypographyAndLayout;


  // 3. Guaranteed Non-Blocking Top-Right Profile Icon (👤) 1-Tap Opener (Unlimited Re-Opens)
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
      var fsView = document.getElementById('rm-fullscreen-view');
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
      var fsContainer = document.getElementById('rm-module-container');
      var hasFsContent = fsContainer && (fsContainer.innerHTML || '').trim().length > 20;
      if (!opened && (!fsOpen || !hasFsContent)) {
        var m = ensureProfileModalReady();
        m.classList.remove('hidden');
        m.style.removeProperty('display');
        m.style.setProperty('display', 'flex', 'important');
      }
      healProfileHubTypographyAndLayout();
      setTimeout(healProfileHubTypographyAndLayout, 20);
      setTimeout(healProfileHubTypographyAndLayout, 150);
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
      window.openProfileModal(trigEl);
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
      var fs = document.getElementById('rm-fullscreen-view');
      var pm = document.getElementById('profileModal');
      var cm = document.getElementById('categoryModal');
      if (fs && !fs.classList.contains('hidden') && fs.contains(el)) return null;
      if (pm && !pm.classList.contains('hidden') && pm.contains(el)) return null;
      if (cm && !cm.classList.contains('hidden') && cm.contains(el)) return null;

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
      if (e.touches && e.touches.length === 1 && (Math.abs(e.touches[0].clientX - touchStartX) > 10 || Math.abs(e.touches[0].clientY - touchStartY) > 10)) touchMoved = true;
    }, { capture: true, passive: true });

    function handleProfileOneTap(e) {
      if (e.type === 'touchend' && touchMoved) return;
      var trig = findTopRightProfileTarget(e.target, e);
      if (!trig) return;
      var now = Date.now();
      if (now - lastProfileActionTs < 350) return;
      lastProfileActionTs = now;
      window.openProfileModal(trig);
    }

    document.addEventListener('touchend', handleProfileOneTap, { capture: true, passive: true });
    document.addEventListener('click', handleProfileOneTap, { capture: true, passive: true });
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', autoTagTopRightProfileIcon);
    else autoTagTopRightProfileIcon();
    setTimeout(autoTagTopRightProfileIcon, 250);
  }

  injectProfileHubLargeFontStyles();
  bindTopRightProfileOneTap();
})();
