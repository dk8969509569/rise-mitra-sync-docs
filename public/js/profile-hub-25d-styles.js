/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Part-0B-1 Profile Hub 2.5D Visuals & Large-Font DOM Healer (v79)
 *   - REPO TARGET    : public/js/profile-hub-25d-styles.js
 *   - SURFACE TARGET : SURFACE-A ONLY (Public Member Profile & Sovereign Hub UI)
 *   - HOST BINDING   : Surface-A (Auto-loaded by public/js/one-tap-profile-hub-healer.js)
 *   - SIZE BUDGET    : <= 165 Logical Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/profile-hub-25d-styles.js (Part-0B-1: 2.5D CSS & Large-Font DOM Healer ONLY)
 *   - public/js/one-tap-profile-hub-healer.js (Part-0B-2: 0ms 1-Tap Opener/Closer & Observer ONLY)
 *   - public/js/index-shell-bootstrap.js (Part-0A: Core Shell Boot, Anti-Freeze & Macro Bars ONLY)
 *   - public/js/profile-hub-engine.js (Profile Hub Data/View Engine — Bridged on 1-Tap)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : World-Class 2.5D single outer borders, 3-layer distinct background
 *                              & feature button contrast, large fonts (16px-20px), compact 12px
 *                              Log Out, duplicate header hide, state-verified DOM canary healing.
 *   - ALLOWED ON SURFACE-B   : NONE (Surface-B Owner Console is strictly isolated).
 *   - FORBIDDEN IN THIS FILE : Event listeners or modal open/close dispatchers (owned by Part-0B-2).
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.__RM_LOADED_MODULES__['profile-hub-25d-styles'],
 *                           window.injectProfileHubLargeFontStyles,
 *                           window.healProfileHubTypographyAndLayout
 *   - CALLS EXTERNAL APIs : None (Pure DOM & CSS Healer)
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #rm-profile-hub-large-font-lock, #rm-fullscreen-view, #profileModal,
 *                           #fs-module-title, .rm-prof-hero-box, .rm-prof-section-box,
 *                           .rm-prof-feature-btn, .rm-prof-grid-card, .rm-prof-logout-btn
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (NEVER TOUCHED)
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - ZERO FREEZE   : Never scans document.body; scans ONLY open #rm-fullscreen-view or #profileModal.
 *   - DOM CANARY    : Verifies `.rm-prof-grid-card` & `.rm-prof-logout-btn` before skipping scan
 *                     so if profile-hub-engine.js re-renders innerHTML, it heals in 0ms.
 *   - SINGLE BORDER : Applies `.rm-prof-hero-box` ONLY to outer `.rounded-2xl, .rounded-3xl` (no nested boxes).
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST:
 *   1. injectProfileHubLargeFontStyles (2.5D GPU CSS + Large Fonts + 12px Compact Log Out)
 *   2. healProfileHubTypographyAndLayout (State-Verified Canary DOM Healer)
 * ==============================================================================
 * 8. ONE JOB = ONE FILE & CANONICAL PATH LOCK (ANTI-DUPLICATE FILE GUARD):
 *   - SINGLE JOB RULE : Sole owner of Profile Hub 2.5D CSS and Large-Font DOM Typography Healer.
 *   - CANONICAL PATH  : Must exist ONLY at `public/js/profile-hub-25d-styles.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Split cleanly from `one-tap-profile-hub-healer.js` to keep both files small.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['profile-hub-25d-styles']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries around all DOM operations.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, PRE-MAIN GATE & CONTRACT PARITY LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261018_v79'`.
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
  if (window.__RM_LOADED_MODULES__['profile-hub-25d-styles']) return;
  window.__RM_LOADED_MODULES__['profile-hub-25d-styles'] = true;

  var isHealingDOM = false;


  // 1. Inject Pure CSS Anti-Clipping Large Font, World-Class 2.5D Borders & Compact 12px Logout Styles
  function injectProfileHubLargeFontStyles() {
    var existing = document.getElementById('rm-profile-hub-large-font-lock');
    var s = existing || document.createElement('style');
    s.id = 'rm-profile-hub-large-font-lock';
    s.textContent =
      '#rm-top-profile-btn, [data-rm-profile-trigger="1"] { touch-action: manipulation !important; cursor: pointer !important; transform: none !important; outline: none !important; -webkit-tap-highlight-color: transparent !important; }' +
      '#rm-top-profile-btn *, [data-rm-profile-trigger="1"] * { pointer-events: none !important; }' +
      '#profileModal:not(.hidden) { position: fixed !important; inset: 0 !important; width: 100vw !important; height: 100vh !important; z-index: 99998 !important; background-color: rgba(2, 6, 23, 0.88) !important; display: flex !important; align-items: center !important; justify-content: center !important; padding: 12px !important; }' +
      '#rm-fullscreen-view:not(.hidden) { position: fixed !important; inset: 0 !important; width: 100vw !important; height: 100vh !important; z-index: 99999 !important; display: flex !important; background: #03060d !important; }' +
      '.rm-prof-upgraded-root { padding-bottom: 125px !important; background: radial-gradient(circle at top, #0a1428 0%, #03060d 100%) !important; }' +
      '.rm-prof-upgraded-root div, .rm-prof-upgraded-root span, .rm-prof-upgraded-root p, .rm-prof-upgraded-root button, .rm-prof-upgraded-root a, .rm-prof-upgraded-root h1, .rm-prof-upgraded-root h2, .rm-prof-upgraded-root h3, .rm-prof-upgraded-root h4 { height: auto !important; max-height: none !important; overflow: visible !important; text-overflow: clip !important; }' +
      '.rm-prof-upgraded-root .truncate { white-space: normal !important; overflow: visible !important; text-overflow: clip !important; }' +
      '.rm-prof-hero-box { background: linear-gradient(145deg, #101f3a 0%, #091224 100%) !important; border: 1.8px solid rgba(56, 189, 248, 0.58) !important; border-bottom: 3.5px solid rgba(56, 189, 248, 0.78) !important; border-radius: 22px !important; box-shadow: 0 14px 30px -6px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255, 255, 255, 0.22) !important; }' +
      '.rm-prof-section-box { background: linear-gradient(180deg, #0d172b 0%, #080f1d 100%) !important; border: 1.5px solid rgba(56, 189, 248, 0.44) !important; border-bottom: 3px solid rgba(14, 165, 233, 0.58) !important; border-radius: 20px !important; box-shadow: 0 10px 26px -6px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.16) !important; padding: 10px !important; margin-bottom: 18px !important; }' +
      '.rm-prof-sec-hdr-bar { background: linear-gradient(90deg, rgba(14, 116, 144, 0.34) 0%, rgba(15, 23, 42, 0.65) 100%) !important; border: 1px solid rgba(56, 189, 248, 0.32) !important; border-radius: 14px !important; padding: 10px 12px !important; margin-bottom: 8px !important; }' +
      '.rm-prof-feature-btn { background: linear-gradient(145deg, #182744 0%, #101b30 100%) !important; border: 1.2px solid rgba(148, 163, 184, 0.32) !important; border-bottom: 2.8px solid rgba(56, 189, 248, 0.48) !important; border-radius: 15px !important; box-shadow: 0 6px 14px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.14) !important; margin: 8px 4px !important; padding: 14px 12px !important; }' +
      '.rm-prof-upgraded-root .text-xs:not(.rm-prof-logout-btn), .rm-prof-upgraded-root [class*="text-[10px]"]:not(.rm-prof-logout-btn), .rm-prof-upgraded-root [class*="text-[11px]"]:not(.rm-prof-logout-btn), .rm-prof-upgraded-root [class*="text-[12px]"]:not(.rm-prof-logout-btn) { font-size: 15px !important; line-height: 1.5 !important; font-weight: 700 !important; color: #e2e8f0 !important; }' +
      '.rm-prof-upgraded-root .text-sm:not(.rm-prof-logout-btn), .rm-prof-upgraded-root [class*="text-[13px]"]:not(.rm-prof-logout-btn), .rm-prof-upgraded-root [class*="text-[14px]"]:not(.rm-prof-logout-btn) { font-size: 18px !important; line-height: 1.44 !important; font-weight: 800 !important; color: #ffffff !important; }' +
      '.rm-prof-row-title { font-size: 18.5px !important; font-weight: 800 !important; line-height: 1.42 !important; color: #ffffff !important; white-space: normal !important; display: block !important; }' +
      '.rm-prof-row-sub { font-size: 15.5px !important; font-weight: 700 !important; line-height: 1.5 !important; color: #e2e8f0 !important; margin-top: 4px !important; white-space: normal !important; display: block !important; }' +
      '.rm-prof-sec-hdr { font-size: 15.5px !important; font-weight: 900 !important; letter-spacing: 0.3px !important; line-height: 1.45 !important; color: #38bdf8 !important; }' +
      '.rm-prof-grid-card { background: linear-gradient(145deg, #1b2d4d 0%, #111d35 100%) !important; border: 1.5px solid rgba(56, 189, 248, 0.5) !important; border-bottom: 3px solid rgba(56, 189, 248, 0.72) !important; border-radius: 16px !important; box-shadow: 0 7px 16px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.18) !important; height: auto !important; min-height: 94px !important; max-height: none !important; padding: 12px 10px !important; overflow: visible !important; align-items: flex-start !important; }' +
      '.rm-prof-grid-title { font-size: 16px !important; font-weight: 800 !important; line-height: 1.35 !important; color: #ffffff !important; white-space: normal !important; display: block !important; }' +
      '.rm-prof-grid-sub { font-size: 13.5px !important; font-weight: 700 !important; line-height: 1.42 !important; margin-top: 4px !important; white-space: normal !important; display: block !important; }' +
      '.rm-prof-logout-btn { font-size: 12px !important; font-weight: 700 !important; line-height: 1.2 !important; min-height: 32px !important; max-width: 140px !important; padding: 6px 16px !important; margin: 14px auto 22px auto !important; display: block !important; border-radius: 10px !important; background: linear-gradient(145deg, #450a0a 0%, #2a0606 100%) !important; border: 1.5px solid rgba(248, 113, 113, 0.52) !important; border-bottom: 2.5px solid rgba(239, 68, 68, 0.7) !important; box-shadow: 0 5px 12px rgba(0, 0, 0, 0.65) !important; color: #fecaca !important; }';
    if (!existing) (document.head || document.documentElement).appendChild(s);
  }
  window.injectProfileHubLargeFontStyles = injectProfileHubLargeFontStyles;


  // 2. Scoped Profile Hub Large-Font & 2.5D Visual Healer (State-Verified Canary — Zero Revert & Zero Nested Box)
  function healProfileHubTypographyAndLayout(forceScan) {
    if (isHealingDOM) return;
    isHealingDOM = true;
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

        var fsContainer = document.getElementById('rm-module-container') || root;
        var hasCanary = root.querySelector('.rm-prof-grid-card') && root.querySelector('.rm-prof-logout-btn');
        if (!forceScan && hasCanary && fsContainer.getAttribute('data-rm-prof-healed') === '1') {
          isHealingDOM = false;
          return;
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
              var heroBox = el.closest('.rounded-2xl, .rounded-3xl');
              if (heroBox) heroBox.classList.add('rm-prof-hero-box');
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
              if (el.parentElement) el.parentElement.classList.add('rm-prof-sec-hdr-bar');
              var secBox = el.closest('.rounded-2xl, .rounded-3xl');
              if (secBox) secBox.classList.add('rm-prof-section-box');
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
                  el.parentElement.classList.add('rm-prof-feature-btn');
                  el.parentElement.style.setProperty('padding-top', '14px', 'important');
                  el.parentElement.style.setProperty('padding-bottom', '14px', 'important');
                  el.parentElement.style.setProperty('height', 'auto', 'important');
                  var parentSec = el.parentElement.closest('.rounded-2xl, .rounded-3xl');
                  if (parentSec) parentSec.classList.add('rm-prof-section-box');
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
        fsContainer.setAttribute('data-rm-prof-healed', '1');
        break;
      }
    } catch (e) {}
    isHealingDOM = false;
  }
  window.healProfileHubTypographyAndLayout = healProfileHubTypographyAndLayout;

  injectProfileHubLargeFontStyles();
  healProfileHubTypographyAndLayout(true);
})();
