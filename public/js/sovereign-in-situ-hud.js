/**
 * RISE MITRA — SOVEREIGN IN-SITU VISUAL MANAGEMENT ENGINE (SIVME)
 * MODULE        : Surface-A Floating HUD & DOM Injection Runtime Engine (Loop-Guarded)
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.4 | DEC-RM-SOV-VISUAL-IN-SITU-20261003 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/sovereign-in-situ-hud.js
 * DUAL-FOLDER REFERENCES:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var SESSION_KEY = 'rm_sov_in_situ_session';
  var REGISTRY_STORAGE_KEY = 'rm_sovereign_visibility_registry_v1';
  var isAuditing = false;
  var auditTimer = null;

  // 1. FAIL-CLOSED CHECK: Public user verification
  function isConsoleAuthorized() {
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get('sov_mode') === 'in_situ') {
        sessionStorage.setItem(SESSION_KEY, 'SOV_ACTIVE_2026');
        localStorage.setItem(SESSION_KEY, 'SOV_ACTIVE_2026');
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

  // Element URN Selectors Map for Category 16 & Dynamic Nodes
  var URN_SELECTORS = [
    { urn: 'rm:cat:16:sub:16-3:elem:state_filter', selector: '#stateFilterGroup, #stateFilter, [data-sov-urn="rm:cat:16:sub:16-3:elem:state_filter"]', label: 'राज्य फ़िल्टर' },
    { urn: 'rm:cat:16:sub:16-3:elem:district_filter', selector: '#districtFilterGroup, #districtFilter, [data-sov-urn="rm:cat:16:sub:16-3:elem:district_filter"]', label: 'जिला फ़िल्टर' },
    { urn: 'rm:cat:16:sub:16-3:elem:smart_omnibox', selector: '#smartOmniboxGroup, #smartOmnibox, [data-sov-urn="rm:cat:16:sub:16-3:elem:smart_omnibox"]', label: 'स्मार्ट खोज' },
    { urn: 'rm:cat:16:sub:16-3:elem:budget_slider', selector: '#budgetSliderGroup, [data-sov-urn="rm:cat:16:sub:16-3:elem:budget_slider"]', label: 'बजट स्लाइडर' },
    { urn: 'rm:cat:16:sub:16-3:elem:submeter_checkbox', selector: '#submeterFilterGroup, [data-sov-urn="rm:cat:16:sub:16-3:elem:submeter_checkbox"]', label: 'सब-मीटर फ़िल्टर' }
  ];

  // 2. INJECT SIVME STYLES
  function injectStyles() {
    if (document.getElementById('sivme-core-styles')) return;
    var style = document.createElement('style');
    style.id = 'sivme-core-styles';
    style.textContent = `
      .sivme-ghost-dormant {
        opacity: 0.38 !important;
        filter: grayscale(85%) !important;
        border: 2px dashed #ef4444 !important;
        border-radius: 12px !important;
        position: relative !important;
        pointer-events: auto !important;
        background: repeating-linear-gradient(
          -45deg,
          rgba(239, 68, 68, 0.08),
          rgba(239, 68, 68, 0.08) 10px,
          transparent 10px,
          transparent 20px
        ) !important;
      }
      .sivme-public-hidden {
        display: none !important;
      }
      .sivme-badge-anchor {
        position: relative !important;
      }
      .sivme-inline-badge {
        position: absolute;
        top: -10px;
        right: 8px;
        z-index: 99999;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 10px;
        font-weight: 800;
        padding: 3px 8px;
        border-radius: 9999px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6);
        transition: transform 0.15s ease, background 0.2s ease;
        user-select: none;
      }
      .sivme-inline-badge:active {
        transform: scale(0.92);
      }
      .sivme-badge-live {
        background: #064e3b;
        color: #6ee7b7;
        border: 1px solid #10b981;
      }
      .sivme-badge-dormant {
        background: #7f1d1d;
        color: #fca5a5;
        border: 1px solid #ef4444;
      }
      #sivmeFloatingDock {
        position: fixed;
        bottom: 18px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999999;
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(3, 7, 18, 0.95);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(6, 182, 212, 0.5);
        border-radius: 9999px;
        padding: 6px 14px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 15px rgba(6, 182, 212, 0.3);
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      }
    `;
    document.head.appendChild(style);
  }

  // 3. SCAN AND ATTACH IN-SITU CONTROLS (Protected against recursive calls)
  function applyInSituAudit() {
    if (isAuditing) return;
    isAuditing = true;

    try {
      var isAuth = isConsoleAuthorized();
      var registryEngine = window.RM_SovereignRegistry;

      var matchedElements = [];

      var explicitNodes = document.querySelectorAll('[data-sov-urn]');
      explicitNodes.forEach(function (node) {
        matchedElements.push({ el: node, urn: node.getAttribute('data-sov-urn'), label: node.getAttribute('data-sov-label') || 'फ़ीचर' });
      });

      URN_SELECTORS.forEach(function (def) {
        try {
          var nodes = document.querySelectorAll(def.selector);
          nodes.forEach(function (node) {
            if (!node.hasAttribute('data-sov-urn')) {
              node.setAttribute('data-sov-urn', def.urn);
              node.setAttribute('data-sov-label', def.label);
              matchedElements.push({ el: node, urn: def.urn, label: def.label });
            }
          });
        } catch (_) {}
      });

      var totalTracked = matchedElements.length;
      var totalHidden = 0;

      matchedElements.forEach(function (item) {
        var isVis = registryEngine ? registryEngine.isVisible(item.urn) : true;
        if (!isVis) totalHidden++;

        if (!isAuth) {
          if (!isVis) {
            item.el.classList.add('sivme-public-hidden');
          } else {
            item.el.classList.remove('sivme-public-hidden');
          }
          var oldBadge = item.el.querySelector(':scope > .sivme-inline-badge');
          if (oldBadge) oldBadge.remove();
          item.el.classList.remove('sivme-ghost-dormant', 'sivme-badge-anchor');
          return;
        }

        item.el.classList.remove('sivme-public-hidden');
        item.el.classList.add('sivme-badge-anchor');

        if (!isVis) {
          item.el.classList.add('sivme-ghost-dormant');
        } else {
          item.el.classList.remove('sivme-ghost-dormant');
        }

        mountInlineBadge(item.el, item.urn, isVis, item.label);
      });

      updateFloatingDock(isAuth, totalHidden, totalTracked);
    } finally {
      setTimeout(function () {
        isAuditing = false;
      }, 50);
    }
  }

  // 4. MOUNT INLINE TOGGLE BADGE
  function mountInlineBadge(parentEl, urn, isVisible, label) {
    var existing = parentEl.querySelector(':scope > .sivme-inline-badge');
    var targetClass = isVisible ? 'sivme-inline-badge sivme-badge-live' : 'sivme-inline-badge sivme-badge-dormant';
    var targetText = isVisible ? '<span>👁️</span><span>Live</span>' : '<span>🚫</span><span>Hidden</span>';

    if (!existing) {
      existing = document.createElement('div');
      existing.className = targetClass;
      existing.innerHTML = targetText;
      parentEl.appendChild(existing);
    } else {
      if (existing.className !== targetClass) existing.className = targetClass;
      if (existing.innerHTML !== targetText) existing.innerHTML = targetText;
    }

    existing.title = label + (isVisible ? ' छुपाने के लिए टैप करें (Hide)' : ' दिखाने के लिए टैप करें (Show)');

    existing.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (window.RM_SovereignRegistry) {
        window.RM_SovereignRegistry.toggleVisibility(urn, !isVisible, label);
        scheduleAudit();
      }
    };
  }

  // 5. FLOATING HUD DOCK
  function updateFloatingDock(isAuth, hiddenCount, trackedCount) {
    var existingDock = document.getElementById('sivmeFloatingDock');

    if (!isAuth) {
      if (existingDock) existingDock.remove();
      return;
    }

    if (!existingDock) {
      existingDock = document.createElement('div');
      existingDock.id = 'sivmeFloatingDock';
      existingDock.innerHTML = `
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="font-size:13px;">🛡️</span>
          <span style="color:#22d3ee;font-size:11px;font-weight:900;letter-spacing:0.5px;">SIVME HUD</span>
        </div>
        <span style="background:#0f172a;border:1px solid #334155;color:#94a3b8;font-size:10px;font-weight:700;padding:2px 7px;border-radius:9999px;">
          Hidden: <span id="sivmeHiddenCountNum" style="color:#f87171;">${hiddenCount}</span>
        </span>
        <button id="btnExitInSitu" style="background:#450a0a;border:1px solid #b91c1c;color:#fca5a5;font-size:10px;font-weight:800;padding:3px 8px;border-radius:8px;cursor:pointer;">
          Exit ✕
        </button>
        <a href="/owner-console.html" style="background:#1e1b4b;border:1px solid #4338ca;color:#a5b4fc;font-size:10px;font-weight:800;padding:3px 8px;border-radius:8px;text-decoration:none;display:inline-flex;align-items:center;gap:3px;">
          <span>Surface-B ⚙️</span>
        </a>
      `;
      document.body.appendChild(existingDock);

      var exitBtn = document.getElementById('btnExitInSitu');
      if (exitBtn) {
        exitBtn.onclick = function () {
          if (window.RM_SovereignRegistry) {
            window.RM_SovereignRegistry.setConsoleMode(false);
          } else {
            sessionStorage.removeItem(SESSION_KEY);
            localStorage.removeItem(SESSION_KEY);
          }
          window.location.href = window.location.pathname;
        };
      }
    } else {
      var numSpan = document.getElementById('sivmeHiddenCountNum');
      if (numSpan && numSpan.textContent !== String(hiddenCount)) {
        numSpan.textContent = String(hiddenCount);
      }
    }
  }

  function scheduleAudit() {
    if (auditTimer) clearTimeout(auditTimer);
    auditTimer = setTimeout(function () {
      applyInSituAudit();
    }, 80);
  }

  // 6. OBSERVER & INITIALIZATION (Debounced & Filtered)
  function initEngine() {
    injectStyles();
    applyInSituAudit();

    window.addEventListener('rm:sov:visibility-changed', function () {
      scheduleAudit();
    });

    window.addEventListener('storage', function (e) {
      if (e.key === REGISTRY_STORAGE_KEY || e.key === SESSION_KEY) {
        scheduleAudit();
      }
    });

    var observer = new MutationObserver(function (mutations) {
      if (isAuditing) return;
      var hasExternalChanges = false;
      for (var i = 0; i < mutations.length; i++) {
        var t = mutations[i].target;
        if (t && t.nodeType === 1) {
          if (t.id === 'sivmeFloatingDock' || t.classList.contains('sivme-inline-badge') || t.closest('#sivmeFloatingDock') || t.closest('.sivme-inline-badge')) {
            continue;
          }
        }
        hasExternalChanges = true;
        break;
      }
      if (hasExternalChanges) {
        scheduleAudit();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEngine);
  } else {
    initEngine();
  }
})();
