/**
 * RISE MITRA — SOVEREIGN IN-SITU VISUAL MANAGEMENT ENGINE (SIVME)
 * MODULE        : Surface-A Lightweight Core Kernel & Dynamic Adapter Host
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : dk8969509569/rise-mitra-sync-docs (pre-main branch)
 * DUAL-FOLDER REFERENCES:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var SESSION_KEY = 'rm_sov_in_situ_session';
  var REGISTRY_STORAGE_KEY = 'rm_sovereign_visibility_registry_v1';
  var DEV_AUTO_KEY = 'rm_sov_automation_mode_active';
  var isAuditing = false;
  var auditTimer = null;
  var adapters = {};

  // 1. ZEL TEMPLATE SHIELD: Ensure legacy modules always render complete DOM
  function enforceZELTemplateRendering() {
    try {
      var keys = ['rm_local_acct_owner_config', 'rm_local_acctdefault_owner_config', 'rm_owner_filter_config_v1'];
      keys.forEach(function (k) {
        var raw = localStorage.getItem(k);
        var cfg = raw ? JSON.parse(raw) : { filterVisibility: {} };
        if (!cfg.filterVisibility) cfg.filterVisibility = {};
        cfg.filterVisibility.smartOmnibox = true;
        cfg.filterVisibility.showState = true;
        cfg.filterVisibility.showDistrict = true;
        cfg.filterVisibility.showLocality = true;
        cfg.filterVisibility.budgetSlider = true;
        cfg.filterVisibility.subMeterOnly = true;
        localStorage.setItem(k, JSON.stringify(cfg));
      });
    } catch (_) {}
  }

  // 2. CONSOLE AUTHORIZATION (General Tab Permanent Support)
  function isConsoleAuthorized() {
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get('sov_mode') === 'in_situ' || params.get('dev_auto') === '1') {
        sessionStorage.setItem(SESSION_KEY, 'SOV_ACTIVE_2026');
        localStorage.setItem(SESSION_KEY, 'SOV_ACTIVE_2026');
        localStorage.setItem(DEV_AUTO_KEY, 'true');
      }
      if (localStorage.getItem(DEV_AUTO_KEY) === 'true') {
        sessionStorage.setItem(SESSION_KEY, 'SOV_ACTIVE_2026');
        return true;
      }
      var sToken = sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY);
      if (sToken === 'SOV_ACTIVE_2026') return true;

      var regRaw = localStorage.getItem(REGISTRY_STORAGE_KEY);
      if (regRaw) {
        var reg = JSON.parse(regRaw);
        if (reg && reg.activeMode === 'in_situ_console') return true;
      }
      return false;
    } catch (_) {
      return false;
    }
  }

  // 3. REGISTRY BRIDGE
  function getRegistry() {
    try {
      var raw = localStorage.getItem(REGISTRY_STORAGE_KEY);
      return raw ? JSON.parse(raw) : { activeMode: 'in_situ_console', items: {} };
    } catch (_) {
      return { activeMode: 'in_situ_console', items: {} };
    }
  }

  function getUrnVisibility(urn) {
    if (window.RM_SovereignRegistry && typeof window.RM_SovereignRegistry.isVisible === 'function') {
      return window.RM_SovereignRegistry.isVisible(urn);
    }
    var reg = getRegistry();
    return !(reg && reg.items && reg.items[urn] && reg.items[urn].visible === false);
  }

  function setUrnVisibility(urn, nextVis, label) {
    if (window.RM_SovereignRegistry && typeof window.RM_SovereignRegistry.toggleVisibility === 'function') {
      try { window.RM_SovereignRegistry.toggleVisibility(urn, nextVis, label); } catch (_) {}
    }
    try {
      var reg = getRegistry();
      if (!reg.items) reg.items = {};
      reg.items[urn] = { visible: nextVis, label: label, updatedAt: Date.now() };
      localStorage.setItem(REGISTRY_STORAGE_KEY, JSON.stringify(reg));
    } catch (_) {}
  }

  function getHiddenCount() {
    var reg = getRegistry();
    var count = 0;
    if (reg && reg.items) {
      Object.keys(reg.items).forEach(function (k) {
        if (reg.items[k] && reg.items[k].visible === false) {
          count++;
        }
      });
    }
    return count;
  }

  // 4. CORE STYLES (2.5D Elevation, Clearance & HUD Dock)
  function injectStyles() {
    if (document.getElementById('sivme-core-styles')) return;
    var style = document.createElement('style');
    style.id = 'sivme-core-styles';
    style.textContent = `
      .sivme-badge-anchor { position: relative !important; isolation: isolate !important; }
      .sivme-ghost-dormant {
        border: 2px dashed #ef4444 !important;
        border-radius: 14px !important;
        position: relative !important;
        background: repeating-linear-gradient(-45deg, rgba(239,68,68,0.12), rgba(239,68,68,0.12) 10px, transparent 10px, transparent 20px) !important;
        box-shadow: none !important;
        cursor: pointer !important;
      }
      [data-sov-urn*="elem:"].sivme-ghost-dormant, [data-sov-urn*="listing:"].sivme-ghost-dormant {
        border: 1.5px dashed #ef4444 !important;
        border-radius: 10px !important;
        background: rgba(239,68,68,0.08) !important;
      }
      .sivme-public-hidden { display: none !important; }
      .sivme-inline-badge {
        position: absolute; top: -10px !important; left: 14px !important; z-index: 40 !important;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 10px !important;
        font-weight: 800; padding: 3px 9px !important; border-radius: 9999px; cursor: pointer;
        display: inline-flex !important; align-items: center !important; gap: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.85); width: max-content !important;
      }
      [data-sov-urn*="elem:"] > .sivme-inline-badge { top: -8px !important; right: 12px !important; left: auto !important; font-size: 9px !important; }
      .sivme-badge-live { background: #064e3b !important; color: #6ee7b7 !important; border: 1.5px solid #10b981 !important; }
      .sivme-badge-dormant { background: #7f1d1d !important; color: #fca5a5 !important; border: 1.5px solid #ef4444 !important; }
      #categoryModal [data-cat-id]:not([data-cat-id="c16"]), #categoryModal [data-cat-id="c16"] > div:first-child {
        min-height: 72px !important; height: 72px !important; padding: 22px 14px 14px 14px !important; border-radius: 14px !important;
        display: flex !important; align-items: center !important; justify-content: space-between !important;
        background: linear-gradient(180deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.98) 100%) !important;
        border-top: 1px solid rgba(255,255,255,0.22) !important;
        box-shadow: 0 6px 16px -2px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.15) !important;
      }
      #sub-c16 > div {
        min-height: 60px !important; padding: 18px 14px 12px 14px !important; margin-bottom: 14px !important; border-radius: 12px !important;
        display: flex !important; align-items: center !important; justify-content: space-between !important;
        background: linear-gradient(180deg, rgba(24,33,47,0.85) 0%, rgba(11,17,30,0.95) 100%) !important;
        border-top: 1px solid rgba(255,255,255,0.16) !important;
      }
      .sivme-catalog-section-header {
        margin-top: 28px !important; margin-bottom: 24px !important; position: relative !important; z-index: 10 !important;
      }
      #sivmeFloatingDock {
        position: fixed; bottom: 18px; left: 50%; transform: translateX(-50%); z-index: 9999999 !important;
        display: flex; align-items: center; gap: 6px; background: rgba(3,7,18,0.96); backdrop-filter: blur(16px);
        border: 1.5px solid rgba(6,182,212,0.6); border-radius: 9999px; padding: 6px 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.9); font-family: ui-monospace, monospace; max-width: 96vw;
      }
    `;
    document.head.appendChild(style);
  }

  // 5. MOUNT INLINE BADGES & FULL-CARD WAKE-UP
  function mountInlineBadge(parentEl, urn, isVisible, label) {
    var badge = parentEl.querySelector(':scope > .sivme-inline-badge');
    var targetClass = isVisible ? 'sivme-inline-badge sivme-badge-live' : 'sivme-inline-badge sivme-badge-dormant';
    var targetHtml = isVisible ? '<span>👁️</span><span>Live</span>' : '<span>🚫</span><span>Hidden</span>';

    if (!badge) {
      badge = document.createElement('div');
      parentEl.appendChild(badge);
      badge.addEventListener('click', function (e) {
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        var targetVis = !(badge.getAttribute('data-badge-vis') === 'true');
        setUrnVisibility(urn, targetVis, label);
        applyInSituAudit();
      });

      if (urn.indexOf('sub:') === -1 && urn.indexOf('elem:') === -1 && urn.indexOf('listing:') === -1) {
        parentEl.addEventListener('click', function (e) {
          if (!parentEl.classList.contains('sivme-ghost-dormant')) return;
          if (e.target.closest('.sivme-inline-badge')) return;
          if (urn === 'rm:cat:16') return;
          if (e.target.closest('button') || e.target.closest('a')) return;
          setUrnVisibility(urn, true, label);
          applyInSituAudit();
        });
      }
    }

    badge.className = targetClass;
    if (badge.innerHTML !== targetHtml) badge.innerHTML = targetHtml;
    badge.setAttribute('data-badge-urn', urn);
    badge.setAttribute('data-badge-vis', String(isVisible));
  }

  // 6. AUDIT 50 UNIVERSAL CATALOG CATEGORIES & EXECUTE MODULAR ADAPTERS
  function applyInSituAudit() {
    if (isAuditing) return;
    isAuditing = true;

    try {
      enforceZELTemplateRendering();
      var isAuth = isConsoleAuthorized();

      // Section Headers Buffer
      var modalElements = document.querySelectorAll('#categoryModal button, #categoryModal [onclick], #categoryModal div');
      modalElements.forEach(function (el) {
        var t = (el.textContent || '').trim();
        if ((t.indexOf('आजीविका') !== -1 || t.indexOf('खेल व मनोरंजन') !== -1) && el.children.length > 0 && el.offsetHeight > 30 && el.offsetHeight < 70) {
          el.classList.add('sivme-catalog-section-header');
        }
      });

      // Audit 50 Main Categories
      var catalogCards = document.querySelectorAll('#categoryModal [data-cat-id]');
      catalogCards.forEach(function (card) {
        var catId = card.getAttribute('data-cat-id');
        if (!catId) return;
        var numStr = catId.replace(/[^0-9]/g, '');
        if (numStr.length === 1) numStr = '0' + numStr;
        var urn = 'rm:cat:' + numStr;
        var labelEl = card.querySelector('.text-xs.font-bold') || card.querySelector('.font-bold');
        var label = labelEl ? labelEl.textContent.trim() : ('श्रेणी ' + numStr);

        var isVis = getUrnVisibility(urn);

        if (!isAuth) {
          if (!isVis) {
            card.classList.add('sivme-public-hidden');
            card.style.setProperty('display', 'none', 'important');
          } else {
            card.classList.remove('sivme-public-hidden');
            card.style.removeProperty('display');
          }
          var oldB = card.querySelector(':scope > .sivme-inline-badge');
          if (oldB) oldB.remove();
          card.classList.remove('sivme-ghost-dormant', 'sivme-badge-anchor');
        } else {
          card.classList.remove('sivme-public-hidden');
          card.classList.add('sivme-badge-anchor');
          if (!isVis) {
            card.classList.add('sivme-ghost-dormant');
          } else {
            card.classList.remove('sivme-ghost-dormant');
          }
          mountInlineBadge(card, urn, isVis, label);
        }
      });

      // Run registered modular adapters
      Object.keys(adapters).forEach(function (key) {
        try { adapters[key](); } catch (_) {}
      });

      updateFloatingDock(isAuth, getHiddenCount());
    } finally {
      setTimeout(function () { isAuditing = false; }, 40);
    }
  }

  // 7. FLOATING HUD DOCK
  function updateFloatingDock(isAuth, hiddenCount) {
    var dock = document.getElementById('sivmeFloatingDock');
    if (!isAuth) { if (dock) dock.remove(); return; }

    if (!dock) {
      dock = document.createElement('div');
      dock.id = 'sivmeFloatingDock';
      dock.innerHTML = `
        <div style="display:flex;align-items:center;gap:5px;"><span>🛡️</span><span style="color:#22d3ee;font-size:11px;font-weight:900;">SIVME</span></div>
        <span style="background:#0f172a;border:1px solid #334155;color:#94a3b8;font-size:10px;font-weight:700;padding:2px 6px;border-radius:9999px;">
          Hidden: <span id="sivmeHiddenCountNum" style="color:#f87171;">${hiddenCount}</span>
        </span>
        <button id="btnHardReloadBust" style="background:#0369a1;border:1px solid #38bdf8;color:#e0f2fe;font-size:10px;font-weight:900;padding:3px 8px;border-radius:8px;cursor:pointer;">⚡ Reload</button>
        <button id="btnExitInSitu" style="background:#450a0a;border:1px solid #b91c1c;color:#fca5a5;font-size:10px;font-weight:800;padding:3px 7px;border-radius:8px;cursor:pointer;">Exit ✕</button>
        <a href="/owner-console.html" style="background:#1e1b4b;border:1px solid #4338ca;color:#a5b4fc;font-size:10px;font-weight:800;padding:3px 7px;border-radius:8px;text-decoration:none;">B ⚙️</a>
      `;
      document.body.appendChild(dock);

      document.getElementById('btnHardReloadBust').addEventListener('click', async function () {
        if ('caches' in window) { var names = await caches.keys(); await Promise.all(names.map(function(n){ return caches.delete(n); })); }
        if (navigator.serviceWorker) { var regs = await navigator.serviceWorker.getRegistrations(); for (var i=0; i<regs.length; i++) await regs[i].unregister(); }
        localStorage.setItem(DEV_AUTO_KEY, 'true');
        var u = new URL(window.location.origin + window.location.pathname);
        u.searchParams.set('sov_mode', 'in_situ'); u.searchParams.set('dev_auto', '1'); u.searchParams.set('cb', String(Date.now()));
        window.location.href = u.toString();
      });

      document.getElementById('btnExitInSitu').addEventListener('click', function () {
        sessionStorage.removeItem(SESSION_KEY); localStorage.removeItem(SESSION_KEY); localStorage.removeItem(DEV_AUTO_KEY);
        window.location.replace(window.location.origin + window.location.pathname);
      });
    } else {
      var num = document.getElementById('sivmeHiddenCountNum');
      if (num) num.textContent = String(hiddenCount);
    }
  }

  // 8. AUTO-LOAD REGISTERED ADAPTER SCRIPTS
  function loadAdapters() {
    var basePath = '/js/';
    var curr = document.currentScript;
    if (curr && curr.src) {
      try {
        var u = new URL(curr.src);
        basePath = u.pathname.substring(0, u.pathname.lastIndexOf('/') + 1);
      } catch (_) {}
    }

    var scripts = [basePath + 'sivme-adapters/cat-16.js', basePath + 'sivme-adapters/sub-16-3-search.js'];
    scripts.forEach(function (src) {
      if (!document.querySelector('script[src*="' + src + '"]')) {
        var s = document.createElement('script');
        s.src = src + '?v=20261005';
        s.async = true;
        document.head.appendChild(s);
      }
    });
  }

  // 9. EXPOSE SIVME CORE GLOBAL API
  window.RM_SIVME = {
    isConsoleAuthorized: isConsoleAuthorized,
    getUrnVisibility: getUrnVisibility,
    setUrnVisibility: setUrnVisibility,
    mountInlineBadge: mountInlineBadge,
    applyInSituAudit: applyInSituAudit,
    registerAdapter: function (id, fn) {
      adapters[id] = fn;
      setTimeout(applyInSituAudit, 30);
    }
  };

  // INITIALIZE
  enforceZELTemplateRendering();
  injectStyles();
  loadAdapters();
  applyInSituAudit();

  document.addEventListener('click', function () { setTimeout(applyInSituAudit, 60); }, false);
  window.addEventListener('storage', applyInSituAudit);
  window.addEventListener('rm:sov:visibility-changed', applyInSituAudit);
})();
