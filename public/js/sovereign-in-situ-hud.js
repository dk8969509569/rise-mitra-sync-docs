/**
 * RISE MITRA — SOVEREIGN IN-SITU VISUAL MANAGEMENT ENGINE (SIVME)
 * MODULE        : Surface-A Unified Core Engine (Lightweight Kernel - Modular CSS Linked)
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : dk8969509569/rise-mitra-sync-docs (pre-main branch)
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var SESSION_KEY = 'rm_sov_in_situ_session';
  var REGISTRY_STORAGE_KEY = 'rm_sovereign_visibility_registry_v1';
  var DEV_AUTO_KEY = 'rm_sov_automation_mode_active';
  var isAuditing = false;
  var adapters = {};

  // 1. ZEL TEMPLATE SHIELD
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

  // 2. CONSOLE AUTHORIZATION
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

  // 3. REGISTRY BRIDGE (Strict Single-Item Setter - No Recursive Cascade)
  function getRegistry() {
    try {
      var raw = localStorage.getItem(REGISTRY_STORAGE_KEY);
      return raw ? JSON.parse(raw) : { activeMode: 'in_situ_console', items: {} };
    } catch (_) {
      return { activeMode: 'in_situ_console', items: {} };
    }
  }

  function getUrnVisibility(urn) {
    if (urn === 'rm:cat:16') {
      var s1 = getUrnVisibility('rm:cat:16:sub:16-1');
      var s2 = getUrnVisibility('rm:cat:16:sub:16-2');
      var s3 = getUrnVisibility('rm:cat:16:sub:16-3');
      return (s1 && s2 && s3);
    }

    var reg = getRegistry();
    if (reg && reg.items && reg.items[urn] !== undefined && reg.items[urn].visible !== undefined) {
      return !!reg.items[urn].visible;
    }
    if (window.RM_SovereignRegistry && typeof window.RM_SovereignRegistry.isVisible === 'function') {
      try {
        return window.RM_SovereignRegistry.isVisible(urn);
      } catch (_) {}
    }
    return true;
  }

  function setUrnVisibility(urn, nextVis, label) {
    try {
      var reg = getRegistry();
      if (!reg.items) reg.items = {};
      reg.items[urn] = { visible: nextVis, label: label, updatedAt: Date.now() };
      localStorage.setItem(REGISTRY_STORAGE_KEY, JSON.stringify(reg));
    } catch (_) {}

    if (window.RM_SovereignRegistry) {
      try {
        if (typeof window.RM_SovereignRegistry.setVisibility === 'function') {
          window.RM_SovereignRegistry.setVisibility(urn, nextVis, label);
        } else if (typeof window.RM_SovereignRegistry.set === 'function') {
          window.RM_SovereignRegistry.set(urn, nextVis);
        }
      } catch (_) {}
    }
  }

  // 4. BULLETPROOF RECONCILED HIDDEN COUNTER
  function getHiddenCount() {
    var hiddenUrns = {};
    var reg = getRegistry();
    if (reg && reg.items) {
      Object.keys(reg.items).forEach(function (k) {
        if (k === 'rm:cat:16') return;
        if (reg.items[k] && reg.items[k].visible === false) {
          hiddenUrns[k] = true;
        } else if (reg.items[k] && reg.items[k].visible === true) {
          delete hiddenUrns[k];
        }
      });
    }

    if (!getUrnVisibility('rm:cat:16')) {
      hiddenUrns['rm:cat:16'] = true;
    } else {
      delete hiddenUrns['rm:cat:16'];
    }

    return Object.keys(hiddenUrns).length;
  }

  function cleanText(el) {
    if (!el) return '';
    var clone = el.cloneNode(true);
    var badges = clone.querySelectorAll('.sivme-inline-badge');
    badges.forEach(function (b) { b.remove(); });
    return (clone.textContent || '').trim();
  }

  // 5. LIGHTWEIGHT MODULAR STYLESHEET LOADER (Replaces 160+ Lines of Raw CSS)
  function injectStyles() {
    if (document.getElementById('sivme-core-stylesheet')) return;
    var link = document.createElement('link');
    link.id = 'sivme-core-stylesheet';
    link.rel = 'stylesheet';
    link.href = '/css/sivme-hud.css?v=20261006_css1';
    document.head.appendChild(link);
  }

  // 6. MOUNT INLINE BADGES
  function mountInlineBadge(parentEl, urn, isVisible, label) {
    var badge = parentEl.querySelector(':scope > .sivme-inline-badge');
    var targetClass = isVisible ? 'sivme-inline-badge sivme-badge-live' : 'sivme-inline-badge sivme-badge-dormant';
    var targetHtml = isVisible ? '<span>👁️</span><span>Live</span>' : '<span>🚫</span><span>Hidden</span>';

    if (!badge) {
      badge = document.createElement('div');
      parentEl.appendChild(badge);
    }

    badge.className = targetClass;
    if (badge.innerHTML !== targetHtml) badge.innerHTML = targetHtml;
    badge.setAttribute('data-badge-urn', urn);
    badge.setAttribute('data-badge-label', label || '');
    badge.setAttribute('data-badge-vis', String(isVisible));
  }

  // 7. AUDIT ELEMENT DISPATCHER
  function auditElement(el, urn, label, isAuth) {
    if (!el) return;
    el.setAttribute('data-sov-urn', urn);
    el.setAttribute('data-sov-label', label || '');
    var isVis = getUrnVisibility(urn);

    if (!isAuth) {
      if (!isVis) {
        el.classList.add('sivme-public-hidden');
        el.style.setProperty('display', 'none', 'important');
      } else {
        el.classList.remove('sivme-public-hidden');
        el.style.removeProperty('display');
      }
      var oldB = el.querySelector(':scope > .sivme-inline-badge');
      if (oldB) oldB.remove();
      el.classList.remove('sivme-ghost-dormant', 'sivme-badge-anchor');
    } else {
      el.classList.remove('sivme-public-hidden');
      el.classList.add('sivme-badge-anchor');
      if (!isVis) {
        el.classList.add('sivme-ghost-dormant');
      } else {
        el.classList.remove('sivme-ghost-dormant');
      }
      mountInlineBadge(el, urn, isVis, label);

      if (el.getAttribute('data-sivme-tap-bound') !== 'true') {
        el.setAttribute('data-sivme-tap-bound', 'true');

        el.addEventListener('click', function (e) {
          if (!isConsoleAuthorized()) return;
          if (e.target.closest('.sivme-inline-badge')) return;

          var curVis = getUrnVisibility(urn);

          if (!curVis) {
            if (e.cancelable) e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            setUrnVisibility(urn, true, label);
            applyInSituAudit();
            return;
          }

          if (e.target.tagName === 'INPUT' || (el.classList.contains('sivme-cash-atomic-card') && e.target.closest('button, a, div[onclick]'))) {
            return;
          }

          if (el.classList.contains('sivme-btn-pill') || el.classList.contains('sivme-vertical-card') || el.classList.contains('sivme-catalog-card')) {
            if (urn === 'rm:cat:16') return;
            if (e.cancelable) e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            setUrnVisibility(urn, false, label);
            applyInSituAudit();
          }
        }, false);
      }
    }
  }

  // 8. UNIVERSAL AUDIT ENGINE
  function applyInSituAudit() {
    if (isAuditing) return;
    isAuditing = true;

    try {
      enforceZELTemplateRendering();
      var isAuth = isConsoleAuthorized();

      // Dynamic Full-Screen DOM Enforcement
      var openModals = document.querySelectorAll('#categoryModal, #rentalLedgerModal, #rentalSearchModal, [id*="Modal"]');
      openModals.forEach(function (m) {
        if (m.classList.contains('hidden') || m.style.display === 'none') return;
        m.style.setProperty('height', '100dvh', 'important');
        m.style.setProperty('max-height', '100dvh', 'important');
      });

      // 1. App Install Button
      document.querySelectorAll('span, button, a').forEach(function (el) {
        if (cleanText(el).indexOf('ऐप इंस्टॉल') !== -1) {
          var target = el.closest('button, a, div[onclick]') || el;
          target.classList.add('sivme-btn-pill');
          auditElement(target, 'rm:elem:app-install', 'ऐप इंस्टॉल बटन', isAuth);
        }
      });

      // 2. Global Search Box
      var searchBox = document.querySelector('input[placeholder*="खोजें"], input[placeholder*="search"]');
      if (searchBox) {
        var searchParent = searchBox.parentElement;
        if (searchParent) {
          searchParent.style.setProperty('overflow', 'visible', 'important');
          searchParent.classList.add('sivme-search-container');
          auditElement(searchParent, 'rm:elem:home-search', 'ग्लोबल खोज बार', isAuth);
        }
      }

      // 3. RM CASH ATOMIC CARD
      var allDivs = document.querySelectorAll('div, section');
      for (var d = 0; d < allDivs.length; d++) {
        var card = allDivs[d];
        var txt = cleanText(card);
        if (txt.indexOf('उपलब्ध शेष राशि (RM CASH)') !== -1 && txt.indexOf('खाता सक्रिय') !== -1 && card.offsetHeight > 140) {
          card.style.setProperty('overflow', 'visible', 'important');
          card.classList.add('sivme-cash-atomic-card');
          auditElement(card, 'rm:card:rm-cash', 'RM CASH बहीखाता कार्ड', isAuth);

          card.querySelectorAll('button, a, div[onclick]').forEach(function (btn) {
            btn.classList.remove('sivme-btn-pill', 'sivme-badge-anchor', 'sivme-ghost-dormant');
            var oldChildBadge = btn.querySelector('.sivme-inline-badge');
            if (oldChildBadge) oldChildBadge.remove();
          });
          break;
        }
      }

      // 4. "जुड़ना मुफ़्त" Button
      var potentialJoinBtns = document.querySelectorAll('button, a, span, div');
      for (var j = 0; j < potentialJoinBtns.length; j++) {
        var jEl = potentialJoinBtns[j];
        if (cleanText(jEl) === 'जुड़ना मुफ़्त' || cleanText(jEl).indexOf('जुड़ना मुफ़्त') !== -1) {
          var jTarget = jEl.closest('button, a, div[onclick]') || jEl;
          if (jTarget.offsetHeight < 70) {
            jTarget.classList.add('sivme-btn-pill');
            auditElement(jTarget, 'rm:elem:join-free', 'जुड़ना मुफ़्त बटन', isAuth);
            break;
          }
        }
      }

      // 5. Category 16 Dedicated Header Audit
      var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
      if (c16) {
        var c16Header = c16.querySelector(':scope > div:first-child');
        var isCat16Vis = getUrnVisibility('rm:cat:16');

        if (!isAuth) {
          if (!isCat16Vis) {
            c16.classList.add('sivme-public-hidden');
            c16.style.setProperty('display', 'none', 'important');
          } else {
            c16.classList.remove('sivme-public-hidden');
            c16.style.removeProperty('display');
          }
          if (c16Header) {
            var oldB = c16Header.querySelector(':scope > .sivme-inline-badge');
            if (oldB) oldB.remove();
            c16Header.classList.remove('sivme-ghost-dormant', 'sivme-badge-anchor');
          }
        } else {
          c16.classList.remove('sivme-public-hidden');
          c16.style.removeProperty('display');
          c16.classList.remove('sivme-ghost-dormant', 'sivme-badge-anchor');

          if (c16Header) {
            c16Header.classList.add('sivme-badge-anchor');
            if (!isCat16Vis) {
              c16Header.classList.add('sivme-ghost-dormant');
            } else {
              c16Header.classList.remove('sivme-ghost-dormant');
            }
            mountInlineBadge(c16Header, 'rm:cat:16', isCat16Vis, 'घर व मकान (House & Home)');
          }
        }
      }

      // 6. Scan All Other 49 Categories in Universal Catalog
      var catalogCards = document.querySelectorAll(
        '#categoryModal [data-cat-id], ' +
        '#categoryModal [id*="cat-"], ' +
        '#categoryModal div[onclick*="category"], ' +
        '#categoryModal div[onclick*="Category"]'
      );

      var processedUrns = {};
      catalogCards.forEach(function (cCard) {
        if (cCard.closest('#sub-c16')) return;

        var catId = cCard.getAttribute('data-cat-id') || cCard.id || '';
        var numStr = catId.replace(/[^0-9]/g, '');

        if (!numStr) {
          var text = cleanText(cCard);
          var match = text.match(/([0-9]{1,2})\./);
          if (match) numStr = match[1];
        }

        if (!numStr || numStr === '16') return;
        if (numStr.length === 1) numStr = '0' + numStr;

        var urn = 'rm:cat:' + numStr;
        if (processedUrns[urn]) return;
        processedUrns[urn] = true;

        cCard.setAttribute('data-cat-id', 'c' + numStr);
        cCard.classList.add('sivme-catalog-card');

        var labelEl = cCard.querySelector('.text-xs.font-bold') || cCard.querySelector('.font-bold');
        var label = labelEl ? cleanText(labelEl) : ('श्रेणी ' + numStr);

        auditElement(cCard, urn, label, isAuth);
      });

      // 7. Audit 9 Core Verticals
      var verticalCards = document.querySelectorAll('.grid > div, [data-vertical-id]');
      verticalCards.forEach(function (vCard) {
        var txt = cleanText(vCard);
        var vUrn = null;
        var vLabel = null;

        if (txt.indexOf('स्वस्थ मन') !== -1) { vUrn = 'rm:vertical:mind'; vLabel = 'स्वस्थ मन'; }
        else if (txt.indexOf('कौशल') !== -1) { vUrn = 'rm:vertical:skills'; vLabel = 'कौशल सीखें'; }
        else if (txt.indexOf('किराना') !== -1) { vUrn = 'rm:vertical:grocery'; vLabel = 'किराना'; }
        else if (txt.indexOf('डिलीवरी') !== -1) { vUrn = 'rm:vertical:delivery'; vLabel = 'डिलीवरी'; }
        else if (txt.indexOf('व्यापार टूल्स') !== -1) { vUrn = 'rm:vertical:biztools'; vLabel = 'व्यापार टूल्स'; }
        else if (txt.indexOf('विशेषज्ञ') !== -1) { vUrn = 'rm:vertical:expert'; vLabel = 'विशेषज्ञ सलाह'; }
        else if (txt.indexOf('वाउचर') !== -1) { vUrn = 'rm:vertical:voucher'; vLabel = 'वाउचर'; }
        else if (txt.indexOf('बहीखाता') !== -1) { vUrn = 'rm:vertical:ledger'; vLabel = 'बहीखाता'; }
        else if (txt.indexOf('आपात') !== -1) { vUrn = 'rm:vertical:emergency'; vLabel = 'आपात सहायता'; }

        if (!vUrn || vCard.closest('#categoryModal')) return;

        vCard.classList.add('sivme-vertical-card');
        auditElement(vCard, vUrn, vLabel, isAuth);
      });

      // Execute Micro-Adapters
      Object.keys(adapters).forEach(function (key) {
        try { adapters[key](); } catch (_) {}
      });

      updateFloatingDock(isAuth, getHiddenCount());
    } finally {
      setTimeout(function () { isAuditing = false; }, 30);
    }
  }

  // 9. FLOATING HUD DOCK
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
        <a href="/owner-console.html" style="background:#1e1b4b;border:1px solid #4338ca;color:#a5b4fc;font-size:10px;font-weight:800;padding:3px 7px;border-radius:8px;text-decoration:none;">B ⚙</a>
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

  // 10. MICRO-MODULAR ADAPTER AUTOLOADER
  function loadAdapters() {
    var basePath = '/js/sivme-adapters/';
    var curr = document.currentScript;
    if (curr && curr.src) {
      try {
        var u = new URL(curr.src);
        basePath = u.pathname.substring(0, u.pathname.lastIndexOf('/') + 1) + 'sivme-adapters/';
      } catch (_) {}
    }

    var scripts = [
      basePath + 'cat-16.js',
      basePath + 'sub-16-1.js',
      basePath + 'sub-16-2.js',
      basePath + 'sub-16-3.js'
    ];

    scripts.forEach(function (src) {
      if (!document.querySelector('script[src*="' + src + '"]')) {
        var s = document.createElement('script');
        s.src = src + '?v=20261006_v4';
        s.async = true;
        document.head.appendChild(s);
      }
    });
  }

  // 11. BULLETPROOF GLOBAL BADGE CAPTURE LISTENER (PREVENTS CASCADE ON SUB-CARDS)
  document.addEventListener('click', function (e) {
    var badge = e.target.closest('.sivme-inline-badge');
    if (!badge || !isConsoleAuthorized()) return;

    if (e.cancelable) e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    var urn = badge.getAttribute('data-badge-urn');
    var label = badge.getAttribute('data-badge-label') || '';
    var curVis = badge.getAttribute('data-badge-vis') === 'true';
    var nextVis = !curVis;

    if (!urn) return;

    if (urn === 'rm:cat:16') {
      ['rm:cat:16:sub:16-1', 'rm:cat:16:sub:16-2', 'rm:cat:16:sub:16-3'].forEach(function (su) {
        setUrnVisibility(su, nextVis);
      });
      setUrnVisibility(urn, nextVis, label);
    } else {
      setUrnVisibility(urn, nextVis, label);
    }

    applyInSituAudit();
  }, true);

  // 12. GLOBAL SIVME API & DYNAMIC OBSERVER
  window.RM_SIVME = {
    isConsoleAuthorized: isConsoleAuthorized,
    getUrnVisibility: getUrnVisibility,
    setUrnVisibility: setUrnVisibility,
    mountInlineBadge: mountInlineBadge,
    applyInSituAudit: applyInSituAudit,
    registerAdapter: function (id, fn) {
      adapters[id] = fn;
      setTimeout(applyInSituAudit, 20);
    }
  };

  // INITIALIZE
  enforceZELTemplateRendering();
  injectStyles();
  loadAdapters();
  applyInSituAudit();

  document.addEventListener('click', function () { setTimeout(applyInSituAudit, 50); }, false);
  window.addEventListener('storage', applyInSituAudit);
  window.addEventListener('rm:sov:visibility-changed', applyInSituAudit);

  var obs = new MutationObserver(function () {
    if (!isAuditing) applyInSituAudit();
  });
  obs.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
})();
