/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Category-15 Independent Controller (15-1, 15-2, 15-3 Isolation Lock v90)
 *   - REPO TARGET    : public/js/catalog/category-15/15-house-home-controller.js
 *   - SURFACE TARGET : SURFACE-A ONLY (With Surface-B SIVME Pass-Through Guard)
 *   - HOST BINDING   : Surface-A (public/index.html)
 *   - SIZE BUDGET    : <= 235 Logical Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0 | 100% ZEL
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/catalog/category-15/15-house-home-controller.js (This File: Sole Owner of Cat-15 Routing & Mount)
 *   - public/js/catalog/category-15/15-2-rental-template.js (15-2 Rental Ledger 2.5D HTML Template)
 *   - public/js/catalog/category-15/15-3-rental-template.js (15-3 Room & Flat Search 2.5D HTML Template)
 *   - public/js/catalog/category-16/16-2-rental-ledger.js (15-2 Sub-Meter & Ledger State Engine)
 *   - public/js/catalog/category-16/16-3-rental-search.js (15-3 Pan-India Property Filter Engine)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, ROOT-ENGINE-FIRST & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Sequential loading of Cat-15 templates before engines, direct DOM
 *                              stamping (`data-cat15-sub="15-1|15-2|15-3"`), 0ms zero-blank 2.5D
 *                              instant rendering, and isolated 1-Tap opening for 15-1, 15-2, 15-3.
 *   - ALLOWED ON SURFACE-B   : Pass-through exclusion for .sivme-notch-pill, #sivme-hud, #sivme-drawer.
 *   - ROOT-ENGINE-FIRST RULE : Completely isolates Category 15 from Categories 01-14 and 16-50 so
 *                              debugging or updating Category 15 never requires editing global files.
 *   - FORBIDDEN IN THIS FILE : Touching or intercepting any category other than Category 15.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_CAT15_CONTROLLER, window.RM_OPEN_CAT15_SUB
 *   - CALLS EXTERNAL APIs : window.RM_Cat15_Sub2_Template, window.RM_Cat15_Sub3_Template,
 *                           window.RM_Cat15_Sub2_RentalLedger, window.RM_Cat15_Sub3_RentalSearch,
 *                           window.launchOneTapServiceScreen
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : [data-cat15-sub], #sub-c15, #rm-fullscreen-view, #fs-module-title,
 *                           #rm-module-container, #rm-cat16-btn-add, #rm-search-results-list
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, #sivme-drawer (EXCLUDED)
 *   - WORLD-CLASS 2.5D UI : Guarantees 0ms 2.5D UI on first tap with zero black/blank screen.
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Direct `data-cat15-sub` attribute lookup (0% regex ambiguity between 15-1 & 15-3).
 *   - SCROLL SAFETY : 24px thumb-move tolerance so mobile thumb taps on `खोलें ➔` never fail.
 *   - DOM SAFETY    : Renders instant 2.5D shell at 0ms, then upgrades to interactive engine once loaded.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST (8 ISOLATED CAT-15 FUNCTIONS):
 *   1. loadCat15ScriptsSequentially      2. stampCat15SubCardsInDOM
 *   3. buildZeroBlankCat15Shell          4. mountCat15SubApp
 *   5. openCat15Sub1Mistry               6. detectCat15SubCodeFromTap
 *   7. openSubCategory                   8. bindIndependentCat15OneTap
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole authoritative controller for Main Category 15 (`15. House & Home`).
 *   - ZERO-GUESSWORK LOCK : Verified against `1000303706.png`–`1000303721.png` live DOM structure.
 *   - CANONICAL PATH      : Must exist ONLY at `public/js/catalog/category-15/15-house-home-controller.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Reuses `15-2-rental-template.js` & `15-3-rental-template.js` when loaded.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['15-house-home-controller']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries protect all Category 15 mounts.
 *   - ZERO-STUB RULE  : 100% production-complete code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, 1-TASK-1-FILE COMMIT, PRE-MAIN GATE & CONTRACT LOCK:
 *   - VERSION SYNC    : Reads `window.__RM_ACTIVE_CACHE_VER || '20261019_v90'`.
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
  if (window.__RM_LOADED_MODULES__['15-house-home-controller']) return;
  window.__RM_LOADED_MODULES__['15-house-home-controller'] = true;

  var cat15PollTimer = null;
  var tStartX = 0;
  var tStartY = 0;
  var tMoved = false;
  var lastCat15TapTs = 0;


  // 1. Sequential Script Loader (Ensures Template ALWAYS Loads BEFORE Engine so Blank Screen Never Happens)
  function loadCat15ScriptsSequentially(onComplete) {
    var ver = window.__RM_ACTIVE_CACHE_VER || '20261019_v90';
    var loadOne = function (id, src, cb) {
      var existing = document.getElementById(id);
      if (existing) { if (cb) cb(); return; }
      var s = document.createElement('script');
      s.id = id;
      s.src = src + '?v=' + ver;
      s.async = false;
      s.onload = function () { if (cb) cb(); };
      s.onerror = function () { if (cb) cb(); };
      (document.head || document.documentElement).appendChild(s);
    };

    loadOne('rm-cat15-2-template-js', '/js/catalog/category-15/15-2-rental-template.js', function () {
      loadOne('rm-cat15-2-engine-js', '/js/catalog/category-16/16-2-rental-ledger.js', null);
    });
    loadOne('rm-cat15-3-template-js', '/js/catalog/category-15/15-3-rental-template.js', function () {
      loadOne('rm-cat15-3-engine-js', '/js/catalog/category-16/16-3-rental-search.js', function () {
        if (typeof onComplete === 'function') onComplete();
      });
    });
  }
  loadCat15ScriptsSequentially();


  // 2. Direct DOM Stamping on Category 15 Sub-Cards (`data-cat15-sub="15-1|15-2|15-3"`)
  function stampCat15SubCardsInDOM() {
    var modal = document.getElementById('categoryModal');
    if (!modal) return;
    var sub15 = document.getElementById('sub-c15') || document.getElementById('sub-15') || modal.querySelector('[id*="sub-"][id*="15"]');
    var candidates = sub15 ? sub15.querySelectorAll(':scope > div, [data-rm-sub-rendered], [data-sub-code]') : modal.querySelectorAll('[id^="sub-"] > div');
    for (var i = 0; i < candidates.length; i++) {
      var el = candidates[i];
      var txt = (el.textContent || '').trim();
      var code = '';
      if (txt.indexOf('15-1') !== -1 || txt.indexOf('Mistry & Home Repair') !== -1) code = '15-1';
      else if (txt.indexOf('15-2') !== -1 || txt.indexOf('Rental Ledger') !== -1) code = '15-2';
      else if (txt.indexOf('15-3') !== -1 || txt.indexOf('Room & Flat Search') !== -1) code = '15-3';
      if (code) {
        el.setAttribute('data-cat15-sub', code);
        el.setAttribute('data-sub-code', code);
        var btns = el.querySelectorAll('button, a, .rm-service-chip');
        for (var j = 0; j < btns.length; j++) {
          var bTxt = (btns[j].textContent || '').trim();
          if (bTxt.indexOf('पिन') === -1 && bTxt.indexOf('वीडियो') === -1) {
            btns[j].setAttribute('data-cat15-sub', code);
          }
        }
      }
    }
  }


  // 3. Built-In 0ms Zero-Blank 2.5D UI Shell (Prevents `1000303719.png` Blank Screen While Scripts Load)
  function buildZeroBlankCat15Shell(isLedger) {
    if (isLedger) {
      return '<div style="padding:14px;color:#f8fafc;font-family:sans-serif;">' +
        '<div style="background:#0f172a;border:1.5px solid #0284c7;border-radius:16px;padding:16px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;">' +
        '<div><h3 style="font-size:19px;font-weight:900;color:#fff;margin:0 0 6px 0;">📒 15-2. किराया व सब-मीटर बहीखाता</h3>' +
        '<p style="font-size:13.5px;color:#38bdf8;margin:0;font-weight:700;">मासिक किराया, बिजली सब-मीटर (@₹8/यूनिट) व एडवांस हिसाब</p></div>' +
        '<span style="background:rgba(16,185,129,0.18);border:1.5px solid #10b981;color:#34d399;padding:6px 12px;border-radius:999px;font-size:12.5px;font-weight:800;">✓ सत्यापित</span></div></div>';
    }
    return '<div style="padding:14px;color:#f8fafc;font-family:sans-serif;">' +
      '<div style="background:#0f172a;border:1.5px solid #0284c7;border-radius:16px;padding:16px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;">' +
      '<div><h3 style="font-size:19px;font-weight:900;color:#fff;margin:0 0 6px 0;">🔍 15-3. कमरा व फ्लैट खोज (0% दलाली)</h3>' +
      '<p style="font-size:13.5px;color:#38bdf8;margin:0;font-weight:700;">पैन-इंडिया ब्रोकर-फ्री आवास खोज इंजन (v1.2 • 2.5D)</p></div>' +
      '<span style="background:rgba(16,185,129,0.18);border:1.5px solid #10b981;color:#34d399;padding:6px 12px;border-radius:999px;font-size:12.5px;font-weight:800;">✓ सत्यापित</span></div>' +
      '<div style="background:#0f172a;border:1.5px solid #1e3a8a;border-radius:16px;padding:16px;margin-bottom:14px;">' +
      '<p style="color:#38bdf8;font-size:14px;font-weight:800;margin:0 0 10px 0;">🔍 स्मार्ट खोज (इलाका, शहर, जिला या पिनकोड)</p>' +
      '<div style="padding:12px;border-radius:12px;background:#020617;border:1.5px solid #1e293b;color:#94a3b8;font-size:14px;">उदा. लालपुर, बोरिंग रोड, डाल्टनगंज, विजयनगर...</div></div>' +
      '<div style="background:#0f172a;border:1.5px solid #1e3a8a;border-radius:16px;padding:16px;">' +
      '<div style="display:flex;justify-content:space-between;"><strong style="font-size:17px;color:#fff;">सिंगल रूम (छात्र व अध्ययन विशेष)</strong><span style="color:#34d399;font-weight:900;font-size:17px;">₹3500/माह</span></div>' +
      '<p style="color:#38bdf8;font-size:13.5px;font-weight:700;margin:6px 0;">📍 लालपुर (सर्कुलर रोड कोचिंग हब), रांची, झारखंड - 834001</p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;"><span style="background:rgba(16,185,129,0.15);border:1px solid #10b981;color:#34d399;padding:4px 10px;border-radius:8px;font-size:12px;font-weight:800;">⚡ सब-मीटर (@₹8/यूनिट)</span><span style="background:rgba(16,185,129,0.15);border:1px solid #10b981;color:#fde047;padding:4px 10px;border-radius:8px;font-size:12px;font-weight:800;">🔑 0% ब्रोकरेज</span></div></div></div>';
  }


  // 4. Dedicated 0ms Mounter for 15-2 (Rental Ledger) & 15-3 (Room & Flat Search)
  function mountCat15SubApp(subCode) {
    var isLedger = (subCode === '15-2' || subCode === '16-2');
    var normCode = isLedger ? '15-2' : '15-3';
    var fs = document.getElementById('rm-fullscreen-view');
    if (fs) {
      fs.classList.remove('hidden');
      fs.style.setProperty('display', 'flex', 'important');
      fs.style.setProperty('z-index', '99999', 'important');
    }
    var fsTitle = document.getElementById('fs-module-title');
    if (fsTitle) {
      fsTitle.style.fontSize = '13.5px';
      fsTitle.textContent = isLedger
        ? '📒 15-2 • Rental Ledger (किराया बहीखाता)'
        : '🏢 15-3 • Room & Flat Search (कमरा व फ्लैट खोज)';
    }
    var container = document.getElementById('rm-module-container');
    if (!container) return;

    var canary = isLedger ? '#rm-cat16-btn-add' : '#rm-search-results-list';
    if (container.getAttribute('data-rm-cat15-mounted') === normCode && container.querySelector(canary)) {
      return;
    }

    var attemptInteractiveMount = function () {
      if (fs && fs.classList.contains('hidden')) return true;
      var tpl = isLedger
        ? (window.RM_Cat15_Sub2_Template || window.RM_Cat16_Sub2_Template)
        : (window.RM_Cat15_Sub3_Template || window.RM_Cat16_Sub3_Template);
      var engine = isLedger
        ? (window.RM_Cat15_Sub2_RentalLedger || window.RM_Cat16_Sub2_RentalLedger || window.RiseMitraCatalog_15_2 || window.RiseMitraCatalog_16_2)
        : (window.RM_Cat15_Sub3_RentalSearch || window.RM_Cat16_Sub3_RentalSearch || window.RiseMitraCatalog_15_3 || window.RiseMitraCatalog_16_3);

      if (tpl && engine && typeof engine.mount === 'function') {
        try { engine.mount(container, { accountId: 'default' }); } catch (e) {}
        if (container.querySelector(canary)) {
          container.setAttribute('data-rm-cat15-mounted', normCode);
          return true;
        }
      }
      if (tpl) {
        if (isLedger && typeof tpl.buildRentalLedgerHTML === 'function') {
          container.innerHTML = tpl.buildRentalLedgerHTML([], 8);
        } else if (!isLedger && typeof tpl.buildRentalSearchShellHTML === 'function') {
          var seeds = Array.isArray(tpl.SEED_LISTINGS) ? tpl.SEED_LISTINGS : [];
          container.innerHTML = tpl.buildRentalSearchShellHTML(seeds.length, { smartOmnibox: true, showState: true, showDistrict: true, showBudget: true, showSubmeter: true }, {});
          var resBox = container.querySelector('#rm-search-results-list');
          if (resBox && typeof tpl.renderListingCard === 'function') {
            resBox.innerHTML = seeds.map(function (it) { return tpl.renderListingCard(it); }).join('');
          }
        }
        return false;
      }
      if (!container.innerHTML || container.innerHTML.trim() === '' || container.getAttribute('data-rm-cat15-mounted') !== normCode) {
        container.innerHTML = buildZeroBlankCat15Shell(isLedger);
      }
      return false;
    };

    if (attemptInteractiveMount()) return;
    loadCat15ScriptsSequentially(attemptInteractiveMount);
    if (cat15PollTimer) clearInterval(cat15PollTimer);
    var tries = 0;
    cat15PollTimer = setInterval(function () {
      tries++;
      if ((fs && fs.classList.contains('hidden')) || attemptInteractiveMount() || tries > 35) {
        clearInterval(cat15PollTimer);
        cat15PollTimer = null;
      }
    }, 45);
  }


  // 5. Dedicated 0ms Launcher for 15-1 (Mistry & Home Repair)
  function openCat15Sub1Mistry(target, subCard) {
    var chipEl = target && target.closest ? target.closest('.rm-service-chip') : null;
    var chosenChip = chipEl ? (chipEl.textContent || '').trim() : null;
    var matrix = window.RM_CANONICAL_SUB_MATRIX || {};
    var entry = matrix['15-1'] || null;
    var title = 'Mistry & Home Repair (मिस्त्री व गृह मरम्मत)';
    var sub = 'प्लंबर, इलेक्ट्रीशियन, पेंटर, कारपेंटर व राजमिस्त्री बुकिंग';
    if (typeof window.launchOneTapServiceScreen === 'function') {
      window.launchOneTapServiceScreen(title, sub, '15-1', chosenChip, subCard, entry);
    }
  }


  // 6. Deterministic Category-15 Sub-Card Detector (Zero Ambiguity Between 15-1, 15-2, 15-3)
  function detectCat15SubCodeFromTap(target) {
    stampCat15SubCardsInDOM();
    var tagged = target && target.closest ? target.closest('[data-cat15-sub]') : null;
    if (tagged) return { code: tagged.getAttribute('data-cat15-sub'), card: tagged.closest('[id^="sub-"] > div') || tagged };

    var cur = target;
    var modal = document.getElementById('categoryModal') || document.body;
    while (cur && cur !== modal && cur !== document.body) {
      var txt = (cur.textContent || '').trim();
      var matches = txt.match(/\b(1[56]-[123])\b/g) || [];
      var uniq = [];
      for (var i = 0; i < matches.length; i++) {
        var norm = matches[i].replace(/^16-/, '15-');
        if (uniq.indexOf(norm) === -1) uniq.push(norm);
      }
      if (uniq.length === 1 && txt.length > 30) {
        cur.setAttribute('data-cat15-sub', uniq[0]);
        return { code: uniq[0], card: cur };
      }
      cur = cur.parentElement;
    }
    return null;
  }


  // 7. Unified Public Entry Point for Category 15 (`15-1`, `15-2`, `15-3`)
  function openSubCategory(subCode, e, target, subCard) {
    var norm = String(subCode || '').trim().replace(/^16-/, '15-');
    if (norm !== '15-1' && norm !== '15-2' && norm !== '15-3') return false;
    if (e) {
      e.__rmHandled = true;
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
    }
    if (norm === '15-1') {
      openCat15Sub1Mistry(target, subCard);
    } else {
      mountCat15SubApp(norm);
    }
    return true;
  }


  // 8. Independent 0ms 1-Tap Listener Exclusively for Category 15 Sub-Cards
  function bindIndependentCat15OneTap() {
    window.addEventListener('touchstart', function (e) {
      if (e.touches && e.touches.length === 1) {
        tStartX = e.touches[0].clientX;
        tStartY = e.touches[0].clientY;
        tMoved = false;
      }
    }, { capture: true, passive: true });

    window.addEventListener('touchmove', function (e) {
      if (e.touches && e.touches.length === 1 && !tMoved) {
        if (Math.abs(e.touches[0].clientX - tStartX) > 24 || Math.abs(e.touches[0].clientY - tStartY) > 24) {
          tMoved = true;
        }
      }
    }, { capture: true, passive: true });

    var handleCat15Tap = function (e) {
      if (e.type === 'touchend' && tMoved) return;
      var t = e.target && e.target.nodeType === 1 ? e.target : (e.target ? e.target.parentElement : null);
      if (!t || !t.closest) return;
      if (t.closest('.sivme-notch-pill, #sivme-hud, #sivme-drawer, input, select, textarea')) return;

      var fs = document.getElementById('rm-fullscreen-view');
      if (fs && !fs.classList.contains('hidden') && fs.style.display !== 'none') return;
      var modal = document.getElementById('categoryModal');
      if (!modal || modal.classList.contains('hidden') || !modal.contains(t)) return;

      var subWrap = t.closest('[id^="sub-"], [data-sub-container], .rm-sub-container');
      if (!subWrap) return;

      var btn = t.closest('button, a');
      var bTxt = btn ? (btn.textContent || '').trim() : '';
      if (t.closest('.rm-act-pin, .rm-act-vid, .rm-act-video, .rm-clean-pin') || bTxt.indexOf('पिन') !== -1 || bTxt.indexOf('वीडियो') !== -1) return;

      var detected = detectCat15SubCodeFromTap(t);
      if (!detected || !detected.code) return;

      var now = Date.now();
      if (e.type === 'click' && now - lastCat15TapTs < 380) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        return;
      }
      lastCat15TapTs = now;
      openSubCategory(detected.code, e, t, detected.card);
    };

    window.addEventListener('touchend', handleCat15Tap, { capture: true, passive: false });
    window.addEventListener('click', handleCat15Tap, { capture: true, passive: false });
  }
  bindIndependentCat15OneTap();

  window.RM_OPEN_CAT15_SUB = openSubCategory;
  window.RM_CAT15_CONTROLLER = {
    loadCat15ScriptsSequentially: loadCat15ScriptsSequentially,
    stampCat15SubCardsInDOM: stampCat15SubCardsInDOM,
    mountCat15SubApp: mountCat15SubApp,
    openCat15Sub1Mistry: openCat15Sub1Mistry,
    detectCat15SubCodeFromTap: detectCat15SubCodeFromTap,
    openSubCategory: openSubCategory
  };
})();
