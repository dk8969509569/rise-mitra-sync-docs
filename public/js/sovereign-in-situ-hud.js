/**
 * RISE MITRA — SOVEREIGN IN-SITU VISUAL MANAGEMENT ENGINE (SIVME)
 * MODULE        : Surface-A Floating HUD & Automation Engine (Native Pass-Through Opener & Zero-Redirect 16-3 Navigation)
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
  var lastActionTime = 0;
  var lastUrnActionTimes = {};
  var lastAccordionToggleTime = 0;
  var lastSubCardOpenTime = 0;

  // 1. ZEL TEMPLATE SHIELD: Ensure legacy modules always render complete DOM
  function enforceZELTemplateRendering() {
    try {
      var configKeys = [
        'rm_local_acct_owner_config',
        'rm_local_acctdefault_owner_config',
        'rm_owner_filter_config_v1'
      ];
      configKeys.forEach(function (k) {
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

  if (typeof window !== 'undefined') {
    enforceZELTemplateRendering();
    window.addEventListener('rm:sov:visibility-changed', function () {
      enforceZELTemplateRendering();
    });
  }

  // 2. FAIL-CLOSED & AUTOMATION MODE AUTHORIZATION (Permanent for General Tab)
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

  // Robust Direct Registry Access
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
    if (reg && reg.items && reg.items[urn] !== undefined) {
      return reg.items[urn].visible !== false;
    }
    return true;
  }

  function setUrnVisibility(urn, nextVis, label) {
    if (window.RM_SovereignRegistry && typeof window.RM_SovereignRegistry.toggleVisibility === 'function') {
      try {
        window.RM_SovereignRegistry.toggleVisibility(urn, nextVis, label);
      } catch (_) {}
    }
    try {
      var reg = getRegistry();
      if (!reg.items) reg.items = {};
      reg.items[urn] = {
        visible: nextVis,
        label: label,
        updatedAt: Date.now()
      };
      localStorage.setItem(REGISTRY_STORAGE_KEY, JSON.stringify(reg));
    } catch (_) {}
  }

  // 3. INJECT SIVME STYLES (2.5D Elevation, Filter Isolation & Clearances)
  function injectStyles() {
    if (document.getElementById('sivme-core-styles')) return;
    var style = document.createElement('style');
    style.id = 'sivme-core-styles';
    style.textContent = `
      .sivme-badge-anchor {
        position: relative !important;
        isolation: isolate !important;
      }
      .sivme-badge-anchor:active {
        transform: none !important;
        transition: none !important;
      }
      .sivme-ghost-dormant {
        border: 2px dashed #ef4444 !important;
        border-radius: 14px !important;
        position: relative !important;
        background: repeating-linear-gradient(
          -45deg,
          rgba(239, 68, 68, 0.12),
          rgba(239, 68, 68, 0.12) 10px,
          transparent 10px,
          transparent 20px
        ) !important;
        box-shadow: none !important;
        cursor: pointer !important;
      }

      /* Inner Filter Dormant State */
      [data-sov-urn*="elem:"].sivme-ghost-dormant {
        border: 1.5px dashed #ef4444 !important;
        border-radius: 10px !important;
        background: rgba(239, 68, 68, 0.08) !important;
        opacity: 0.75 !important;
      }

      #categoryModal [data-cat-id]:not([data-cat-id="c16"]).sivme-ghost-dormant > *:not(.sivme-inline-badge) {
        opacity: 0.55 !important;
        filter: grayscale(50%) !important;
        pointer-events: none !important;
      }

      #categoryModal [data-cat-id="c16"],
      #categoryModal [data-cat-id="c16"] *,
      #sub-c16,
      #sub-c16 * {
        pointer-events: auto !important;
      }

      .sivme-public-hidden {
        display: none !important;
      }

      /* UNIVERSAL ANTI-SQUISH INLINE BADGE */
      .sivme-inline-badge {
        position: absolute;
        top: -10px !important;
        left: 14px !important;
        right: auto !important;
        z-index: 40 !important;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 10px !important;
        font-weight: 800;
        padding: 3px 9px !important;
        border-radius: 9999px;
        cursor: pointer;
        display: inline-flex !important;
        flex-direction: row !important;
        align-items: center !important;
        gap: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.85);
        user-select: none !important;
        -webkit-user-select: none !important;
        touch-action: manipulation !important;
        pointer-events: auto !important;
        opacity: 1 !important;
        white-space: nowrap !important;
        writing-mode: horizontal-tb !important;
        width: max-content !important;
        box-sizing: border-box !important;
        line-height: 1.2 !important;
      }
      .sivme-inline-badge::before {
        content: '';
        position: absolute;
        top: -8px;
        bottom: -8px;
        left: -10px;
        right: -10px;
        z-index: 1;
      }
      .sivme-inline-badge * {
        pointer-events: none !important;
        white-space: nowrap !important;
      }
      .sivme-inline-badge:active {
        transform: scale(0.92) !important;
      }

      /* Inner Filter Badges (Placed at Top-Right to prevent label squish) */
      [data-sov-urn*="elem:"] > .sivme-inline-badge {
        top: -8px !important;
        right: 12px !important;
        left: auto !important;
        font-size: 9px !important;
        padding: 2px 7px !important;
        z-index: 50 !important;
      }

      /* Submeter specific standalone inline badge anchor */
      [data-sov-urn="rm:cat:16:sub:16-3:elem:submeter_checkbox"] {
        display: inline-flex !important;
        align-items: center !important;
        padding: 4px 8px !important;
        margin: 2px 0 !important;
      }

      /* SECTION HEADERS CLEARANCE */
      .sivme-catalog-section-header {
        margin-top: 28px !important;
        margin-bottom: 24px !important;
        position: relative !important;
        z-index: 10 !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4) !important;
      }
      #categoryModal > div > div > button:first-of-type,
      #categoryModal .sivme-first-header {
        margin-top: 14px !important;
        margin-bottom: 24px !important;
      }

      /* 2.5D TACTILE ELEVATION & UNIFORM 72px GEOMETRY */
      #categoryModal [data-cat-id]:not([data-cat-id="c16"]),
      #categoryModal [data-cat-id="c16"] > div:first-child {
        min-height: 72px !important;
        height: 72px !important;
        padding: 22px 14px 14px 14px !important;
        border-radius: 14px !important;
        position: relative !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        box-sizing: border-box !important;
        overflow: visible !important;
        width: 100% !important;
        background: linear-gradient(180deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.98) 100%) !important;
        border: 1px solid rgba(255, 255, 255, 0.08) !important;
        border-top: 1px solid rgba(255, 255, 255, 0.22) !important;
        box-shadow: 0 6px 16px -2px rgba(0, 0, 0, 0.75), 0 2px 4px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
        transition: transform 0.12s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.12s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }

      #categoryModal [data-cat-id]:not([data-cat-id="c16"]):active,
      #categoryModal [data-cat-id="c16"] > div:first-child:active {
        transform: translateY(1.5px) !important;
        box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.85), inset 0 2px 4px rgba(0, 0, 0, 0.5) !important;
      }

      #categoryModal [data-cat-id]:not([data-cat-id="c16"]) {
        margin-bottom: 20px !important;
      }

      #categoryModal [data-cat-id="c16"] {
        display: block !important;
        min-height: auto !important;
        margin-top: 18px !important;
        margin-bottom: 24px !important;
        position: relative !important;
        box-sizing: border-box !important;
        overflow: visible !important;
      }

      #categoryModal [data-cat-id="c16"] > div:first-child {
        cursor: pointer !important;
        user-select: none !important;
      }

      #sub-c16 {
        width: 100% !important;
        margin-top: 14px !important;
        overflow: visible !important;
        pointer-events: auto !important;
      }
      #sub-c16.hidden,
      #sub-c16[style*="display: none"],
      #sub-c16.sivme-collapsed {
        display: none !important;
      }
      #sub-c16:not(.hidden):not([style*="display: none"]):not(.sivme-collapsed) {
        display: block !important;
      }

      #categoryModal [data-cat-id] > div:first-child > div:first-child,
      #categoryModal [data-cat-id]:not([data-cat-id="c16"]) > div:first-child {
        min-width: 0 !important;
        flex: 1 1 auto !important;
        padding-right: 12px !important;
      }

      #categoryModal [data-cat-id] .text-xs,
      #categoryModal [data-cat-id] .font-bold,
      #categoryModal [data-cat-id] span,
      #categoryModal [data-cat-id] div,
      #sub-c16 * {
        line-height: 1.5 !important;
        overflow: visible !important;
      }

      #categoryModal [data-cat-id] button,
      #categoryModal [data-cat-id] a,
      #categoryModal [data-cat-id] .text-cyan-400,
      #categoryModal [data-cat-id] .text-emerald-400,
      #categoryModal [data-cat-id] .text-slate-400,
      #sub-c16 button,
      #sub-c16 a,
      #sub-c16 span {
        white-space: nowrap !important;
        word-break: keep-all !important;
        flex-shrink: 0 !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 3px !important;
      }

      /* 2.5D TACTILE SUB-SERVICES */
      #sub-c16 > div {
        min-height: 60px !important;
        padding: 18px 14px 12px 14px !important;
        margin-bottom: 14px !important;
        border-radius: 12px !important;
        position: relative !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        overflow: visible !important;
        box-sizing: border-box !important;
        pointer-events: auto !important;
        cursor: pointer !important;
        background: linear-gradient(180deg, rgba(24, 33, 47, 0.85) 0%, rgba(11, 17, 30, 0.95) 100%) !important;
        border: 1px solid rgba(255, 255, 255, 0.06) !important;
        border-top: 1px solid rgba(255, 255, 255, 0.16) !important;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
        transition: transform 0.12s ease, box-shadow 0.12s ease !important;
      }
      #sub-c16 > div:active {
        transform: translateY(1.5px) !important;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.75), inset 0 2px 3px rgba(0, 0, 0, 0.45) !important;
      }
      #sub-c16 > div .sivme-inline-badge {
        top: -9px !important;
        left: 14px !important;
        right: auto !important;
      }

      #categoryModal .overflow-y-auto,
      #categoryModal > div > div:last-child {
        padding-top: 20px !important;
        padding-bottom: 120px !important;
      }

      .sivme-badge-live {
        background: #064e3b !important;
        color: #6ee7b7 !important;
        border: 1.5px solid #10b981 !important;
      }
      .sivme-badge-dormant {
        background: #7f1d1d !important;
        color: #fca5a5 !important;
        border: 1.5px solid #ef4444 !important;
        box-shadow: 0 0 10px rgba(239, 68, 68, 0.6) !important;
      }

      #categoryModal,
      #categoryModal > div:first-child {
        z-index: 99999 !important;
      }

      /* SIVME AUTOMATION FLOATING DOCK */
      #sivmeFloatingDock {
        position: fixed;
        bottom: 18px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999999 !important;
        display: flex;
        align-items: center;
        gap: 6px;
        background: rgba(3, 7, 18, 0.96);
        backdrop-filter: blur(16px);
        border: 1.5px solid rgba(6, 182, 212, 0.6);
        border-radius: 9999px;
        padding: 6px 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9), 0 0 15px rgba(6, 182, 212, 0.4);
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        max-width: 96vw;
        overflow-x: auto;
      }
    `;
    document.head.appendChild(style);
  }

  // Helper to safely locate the native "खोलें" trigger element inside a card
  function findSubCardOpenTrigger(subCard) {
    if (!subCard) return null;
    var candidates = subCard.querySelectorAll('button, a, [onclick], span, div');
    for (var i = 0; i < candidates.length; i++) {
      var el = candidates[i];
      if (el.classList.contains('sivme-inline-badge')) continue;
      var text = (el.textContent || '').trim();
      if (text === 'खोलें' || text.indexOf('खोलें') !== -1) {
        return el;
      }
    }
    return subCard.querySelector('button, a, [onclick]');
  }

  // 4. SCAN AND ATTACH IN-SITU CONTROLS
  function applyInSituAudit() {
    if (isAuditing) return;
    isAuditing = true;

    try {
      enforceZELTemplateRendering();
      var isAuth = isConsoleAuthorized();

      // 4.0 Section Headers Buffer Enforcement
      var modalElements = document.querySelectorAll('#categoryModal button, #categoryModal [onclick], #categoryModal .cursor-pointer, #categoryModal div');
      modalElements.forEach(function (el) {
        var t = (el.textContent || '').trim();
        if ((t.indexOf('आजीविका') !== -1 || t.indexOf('खेल व मनोरंजन') !== -1) && el.children.length > 0 && el.offsetHeight > 30 && el.offsetHeight < 70) {
          el.classList.add('sivme-catalog-section-header');
          el.style.setProperty('margin-top', '28px', 'important');
          el.style.setProperty('margin-bottom', '24px', 'important');
        }
      });

      // 4.0.1 Infallible Capture-Phase Accordion Toggle for Category 16 Header
      var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
      if (c16) {
        var c16Header = c16.querySelector(':scope > div:first-child');
        if (c16Header) {
          c16Header.style.setProperty('min-height', '72px', 'important');
          c16Header.style.setProperty('height', '72px', 'important');
          c16Header.style.setProperty('padding', '22px 14px 14px 14px', 'important');
          c16Header.style.setProperty('display', 'flex', 'important');
          c16Header.style.setProperty('align-items', 'center', 'important');
          c16Header.style.setProperty('justify-content', 'space-between', 'important');
          c16Header.style.setProperty('box-sizing', 'border-box', 'important');
          c16Header.style.setProperty('width', '100%', 'important');

          if (c16Header.getAttribute('data-sivme-toggle-bound') !== 'true') {
            c16Header.setAttribute('data-sivme-toggle-bound', 'true');
            c16Header.setAttribute('data-sivme-c16-head', 'true');

            function doAccordionToggle(e) {
              if (e.target.closest('.sivme-inline-badge')) return;

              if (e.cancelable) e.preventDefault();
              e.stopPropagation();

              var now = Date.now();
              if (now - lastAccordionToggleTime < 350) return;
              lastAccordionToggleTime = now;

              var sub = document.getElementById('sub-c16');
              if (!sub) return;

              var isCurrentlyVisible = (sub.offsetHeight > 0) && (window.getComputedStyle(sub).display !== 'none') && !sub.classList.contains('sivme-collapsed');
              var chevron = document.getElementById('chevron-c16') || c16Header.querySelector('svg, [id*="chevron"]');

              if (isCurrentlyVisible) {
                sub.style.setProperty('display', 'none', 'important');
                sub.classList.add('hidden', 'sivme-collapsed');
                if (chevron) chevron.style.transform = 'rotate(0deg)';
              } else {
                sub.style.setProperty('display', 'block', 'important');
                sub.classList.remove('hidden', 'sivme-collapsed');
                if (chevron) chevron.style.transform = 'rotate(180deg)';
              }
            }

            c16Header.addEventListener('click', doAccordionToggle, true);
          }
        }
      }

      var matchedElements = [];
      var seenNodes = [];

      function registerMatch(node, urn, label) {
        if (!node || seenNodes.indexOf(node) !== -1) return;
        seenNodes.push(node);
        matchedElements.push({ el: node, urn: urn, label: label });
      }

      // 4.1 Home 9 Core Verticals
      var explicitNodes = document.querySelectorAll('[data-sov-urn]');
      explicitNodes.forEach(function (node) {
        registerMatch(
          node,
          node.getAttribute('data-sov-urn'),
          node.getAttribute('data-sov-label') || 'फ़ीचर'
        );
      });

      // 4.2 Robust & Exception-Safe 16-3 Dynamic Filters Resolution
      var resolvedFilterCardContainer = null;

      function resolve16_3Filters() {
        var oldBuggy = document.getElementById('rm-budget-slider-container');
        if (oldBuggy) {
          while (oldBuggy.firstChild) {
            oldBuggy.parentNode.insertBefore(oldBuggy.firstChild, oldBuggy);
          }
          oldBuggy.remove();
        }

        // 1. Smart Omnibox
        try {
          var omni = document.querySelector('#rm-search-locality, #smartOmniboxGroup, #smartOmnibox, input[placeholder*="लालपुर"], input[placeholder*="8340"], input[placeholder*="Lalpur"]');
          if (omni) {
            var omniTarget = omni.closest('.space-y-2, .mb-4, .form-group') || omni.parentElement;
            if (omniTarget) {
              omniTarget.setAttribute('data-sov-urn', 'rm:cat:16:sub:16-3:elem:smart_omnibox');
              omniTarget.setAttribute('data-sov-label', 'स्मार्ट खोज');
              registerMatch(omniTarget, 'rm:cat:16:sub:16-3:elem:smart_omnibox', 'स्मार्ट खोज');
            }
          }
        } catch (_) {}

        // 2. State Filter
        try {
          var stateSelect = document.querySelector('#rm-cat16-search-state, #stateFilterGroup, #stateFilter, select[id*="state"]');
          if (!stateSelect) {
            var allSelects = document.querySelectorAll('select');
            allSelects.forEach(function (s) {
              var st = s.textContent || '';
              if (st.indexOf('राज्य') !== -1 || st.indexOf('State') !== -1 || st.indexOf('India') !== -1) {
                stateSelect = s;
              }
            });
          }
          if (stateSelect) {
            var stateTarget = stateSelect.closest('div') || stateSelect.parentElement;
            if (stateTarget) {
              stateTarget.setAttribute('data-sov-urn', 'rm:cat:16:sub:16-3:elem:state_filter');
              stateTarget.setAttribute('data-sov-label', 'राज्य फ़िल्टर');
              registerMatch(stateTarget, 'rm:cat:16:sub:16-3:elem:state_filter', 'राज्य फ़िल्टर');
            }
          }
        } catch (_) {}

        // 3. District Filter
        try {
          var distSelect = document.querySelector('#rm-cat16-search-district, #districtFilterGroup, #districtFilter, select[id*="district"]');
          if (!distSelect) {
            var allSelects2 = document.querySelectorAll('select');
            allSelects2.forEach(function (s) {
              var dt = s.textContent || '';
              if (s !== stateSelect && (dt.indexOf('जिला') !== -1 || dt.indexOf('District') !== -1)) {
                distSelect = s;
              }
            });
          }
          if (distSelect) {
            var distTarget = distSelect.closest('div') || distSelect.parentElement;
            if (distTarget) {
              distTarget.setAttribute('data-sov-urn', 'rm:cat:16:sub:16-3:elem:district_filter');
              distTarget.setAttribute('data-sov-label', 'जिला फ़िल्टर');
              registerMatch(distTarget, 'rm:cat:16:sub:16-3:elem:district_filter', 'जिला फ़िल्टर');
            }
          }
        } catch (_) {}

        // 4. Budget Slider Section (Strictly Encompassing ONLY: Label + 16000 + Range Slider Bar)
        try {
          var range = document.querySelector('input[type="range"]');
          if (range) {
            var budgetWrapper = document.getElementById('rm-budget-slider-wrapper');

            if (!budgetWrapper) {
              var prevEl = range.previousElementSibling;
              var isRangeInOwnDiv = false;

              if (!prevEl && range.parentElement && range.parentElement.tagName === 'DIV' && range.parentElement.children.length === 1) {
                prevEl = range.parentElement.previousElementSibling;
                isRangeInOwnDiv = true;
              }

              var hasBudgetText = prevEl && ((prevEl.textContent || '').indexOf('किराया') !== -1 || (prevEl.textContent || '').indexOf('बजट') !== -1);

              if (hasBudgetText) {
                budgetWrapper = document.createElement('div');
                budgetWrapper.id = 'rm-budget-slider-wrapper';
                budgetWrapper.className = 'w-full mb-3 sivme-badge-anchor';

                var targetToWrap = isRangeInOwnDiv ? range.parentElement : range;
                prevEl.parentNode.insertBefore(budgetWrapper, prevEl);
                budgetWrapper.appendChild(prevEl);
                budgetWrapper.appendChild(targetToWrap);
              } else {
                budgetWrapper = document.createElement('div');
                budgetWrapper.id = 'rm-budget-slider-wrapper';
                budgetWrapper.className = 'w-full mb-3 sivme-badge-anchor';
                range.parentNode.insertBefore(budgetWrapper, range);
                budgetWrapper.appendChild(range);
              }
            }

            if (budgetWrapper) {
              budgetWrapper.setAttribute('data-sov-urn', 'rm:cat:16:sub:16-3:elem:budget_slider');
              budgetWrapper.setAttribute('data-sov-label', 'बजट स्लाइडर');
              registerMatch(budgetWrapper, 'rm:cat:16:sub:16-3:elem:budget_slider', 'बजट स्लाइडर');
            }
          }
        } catch (_) {}

        // 5. Submeter Checkbox (Completely Decoupled & Independent Standalone Target)
        try {
          var submeter = document.querySelector('#rm-search-submeter, #submeterFilterGroup, input[type="checkbox"]');
          if (!submeter) {
            var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
            if (allCheckboxes.length > 0) submeter = allCheckboxes[0];
          }
          if (submeter) {
            var subTarget = submeter.closest('label');
            if (!subTarget) {
              subTarget = submeter.parentElement;
            }
            if (subTarget) {
              subTarget.setAttribute('data-sov-urn', 'rm:cat:16:sub:16-3:elem:submeter_checkbox');
              subTarget.setAttribute('data-sov-label', 'सब-मीटर फ़िल्टर');
              registerMatch(subTarget, 'rm:cat:16:sub:16-3:elem:submeter_checkbox', 'सब-मीटर फ़िल्टर');
            }
          }
        } catch (_) {}

        // 6. Search & Reset Action Buttons (खोजें व रीसेट रो)
        try {
          var searchBtn = null;
          var allBtns = document.querySelectorAll('button');
          allBtns.forEach(function (b) {
            if ((b.textContent || '').trim() === 'खोजें') searchBtn = b;
          });
          if (searchBtn) {
            var actionRow = searchBtn.closest('.flex, .flex-row') || searchBtn.parentElement;
            if (actionRow) {
              actionRow.setAttribute('data-sov-urn', 'rm:cat:16:sub:16-3:elem:search_actions');
              actionRow.setAttribute('data-sov-label', 'खोज व रीसेट बटन');
              registerMatch(actionRow, 'rm:cat:16:sub:16-3:elem:search_actions', 'खोज व रीसेट बटन');
            }

            // Find Outer Filter Card Container (Holding all 5 filters + action buttons)
            var pNode = searchBtn.parentElement;
            while (pNode && pNode !== document.body) {
              var sib = pNode.nextElementSibling;
              if (sib && (sib.textContent || '').indexOf('उपलब्ध आवास सूची') !== -1) {
                resolvedFilterCardContainer = pNode;
                break;
              }
              pNode = pNode.parentElement;
            }
          }
        } catch (_) {}
      }

      resolve16_3Filters();

      // 4.3 Category 16 Sub-Services Resolution & Non-Blocking Native Pass-Through Opener
      var sub16Cards = document.querySelectorAll('#sub-c16 > div');
      var sub16HasHidden = false;
      sub16Cards.forEach(function (subCard, idx) {
        var subUrn = 'rm:cat:16:sub:16-' + (idx + 1);
        var subLabelEl = subCard.querySelector('.text-xs') || subCard;
        var subLabel = subLabelEl ? subLabelEl.textContent.trim() : ('16-' + (idx + 1) + ' सेवा');

        if (!subCard.hasAttribute('data-sov-urn')) {
          subCard.setAttribute('data-sov-urn', subUrn);
          subCard.setAttribute('data-sov-label', subLabel);
        }
        registerMatch(subCard, subUrn, subLabel);

        var subIsVis = getUrnVisibility(subUrn);
        if (!subIsVis) {
          sub16HasHidden = true;
        }

        if (subCard.getAttribute('data-sivme-sub-bound') !== 'true') {
          subCard.setAttribute('data-sivme-sub-bound', 'true');

          function handleSubCardClick(e) {
            if (!isConsoleAuthorized()) return;

            var isDormant = subCard.classList.contains('sivme-ghost-dormant');
            var isBadgeClick = !!e.target.closest('.sivme-inline-badge');

            // CASE 1: Badge Click or Dormant Wake-Up -> Toggle Visibility ONLY
            if (isDormant || isBadgeClick) {
              if (e.cancelable) e.preventDefault();
              e.stopPropagation();

              var now = Date.now();
              if (now - (lastUrnActionTimes[subUrn] || 0) < 550) return;
              lastUrnActionTimes[subUrn] = now;

              var curVis = getUrnVisibility(subUrn);
              var targetVis = isDormant ? true : !curVis;

              setUrnVisibility(subUrn, targetVis, subLabel);

              if (targetVis) {
                setUrnVisibility('rm:cat:16', true, 'घर व मकान');
              }

              if (targetVis) {
                subCard.classList.remove('sivme-ghost-dormant');
              } else {
                subCard.classList.add('sivme-ghost-dormant');
              }
              var subBadge = subCard.querySelector(':scope > .sivme-inline-badge');
              if (subBadge) {
                subBadge.className = targetVis ? 'sivme-inline-badge sivme-badge-live' : 'sivme-inline-badge sivme-badge-dormant';
                subBadge.innerHTML = targetVis ? '<span>👁️</span><span>Live</span>' : '<span>🚫</span><span>Hidden</span>';
                subBadge.setAttribute('data-badge-vis', String(targetVis));
              }

              enforceZELTemplateRendering();
              setTimeout(applyInSituAudit, 50);
              return;
            }

            // CASE 2: Sub-Card is LIVE
            var triggerBtn = findSubCardOpenTrigger(subCard);

            // If user clicked directly on or inside the "खोलें" button:
            // Allow native application open logic to execute completely unhindered!
            if (triggerBtn && (e.target === triggerBtn || triggerBtn.contains(e.target))) {
              setTimeout(applyInSituAudit, 100);
              return;
            }

            // If user clicked anywhere else on the live card body (title, icon, whitespace):
            // Delegate the click directly to the native "खोलें" button!
            if (triggerBtn) {
              var nowTime = Date.now();
              if (nowTime - lastSubCardOpenTime < 400) return;
              lastSubCardOpenTime = nowTime;

              triggerBtn.click();
              setTimeout(applyInSituAudit, 100);
            }
          }

          subCard.addEventListener('click', handleSubCardClick, false);
        }
      });

      // 4.4 Universal Catalog (33 Services + 17 Games)
      var catalogCards = document.querySelectorAll('#categoryModal [data-cat-id]');
      catalogCards.forEach(function (card) {
        var catId = card.getAttribute('data-cat-id');
        if (!catId) return;

        var numStr = catId.replace(/[^0-9]/g, '');
        if (numStr.length === 1) numStr = '0' + numStr;
        var urn = 'rm:cat:' + numStr;

        var labelEl = card.querySelector('.text-xs.font-bold') || card.querySelector('.font-bold');
        var label = labelEl ? labelEl.textContent.trim() : ('श्रेणी ' + numStr);

        if (!card.hasAttribute('data-sov-urn')) {
          card.setAttribute('data-sov-urn', urn);
          card.setAttribute('data-sov-label', label);
        }
        registerMatch(card, urn, label);
      });

      var totalTracked = matchedElements.length;
      var totalHidden = 0;

      matchedElements.forEach(function (item) {
        var isVis = getUrnVisibility(item.urn);

        if (item.urn === 'rm:cat:16' && isAuth) {
          if (sub16HasHidden) {
            isVis = false;
          }
        }

        if (!isVis) totalHidden++;

        if (!isAuth) {
          if (!isVis) {
            item.el.classList.add('sivme-public-hidden');
            item.el.style.setProperty('display', 'none', 'important');
          } else {
            item.el.classList.remove('sivme-public-hidden');
            item.el.style.removeProperty('display');
          }
          var oldBadge = item.el.querySelector(':scope > .sivme-inline-badge');
          if (oldBadge) oldBadge.remove();
          item.el.classList.remove('sivme-ghost-dormant', 'sivme-badge-anchor');
          return;
        }

        if (item.el.style.display === 'none') {
          item.el.style.display = '';
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

      // SMART AUTO-COLLAPSE FOR 16-3 FILTER PANEL IN PUBLIC MODE
      if (resolvedFilterCardContainer) {
        if (!isAuth) {
          var innerFilterUrns = [
            'rm:cat:16:sub:16-3:elem:smart_omnibox',
            'rm:cat:16:sub:16-3:elem:state_filter',
            'rm:cat:16:sub:16-3:elem:district_filter',
            'rm:cat:16:sub:16-3:elem:budget_slider',
            'rm:cat:16:sub:16-3:elem:submeter_checkbox'
          ];
          var allInnerHidden = innerFilterUrns.every(function (u) {
            return !getUrnVisibility(u);
          });

          if (allInnerHidden) {
            resolvedFilterCardContainer.classList.add('sivme-public-hidden');
            resolvedFilterCardContainer.style.setProperty('display', 'none', 'important');
          } else {
            resolvedFilterCardContainer.classList.remove('sivme-public-hidden');
            resolvedFilterCardContainer.style.removeProperty('display');
          }
        } else {
          resolvedFilterCardContainer.classList.remove('sivme-public-hidden');
          resolvedFilterCardContainer.style.removeProperty('display');
        }
      }

      updateFloatingDock(isAuth, totalHidden, totalTracked);
    } finally {
      setTimeout(function () {
        isAuditing = false;
      }, 40);
    }
  }

  // 5. MOUNT INLINE TOGGLE BADGE & FULL-CARD WAKE-UP
  function mountInlineBadge(parentEl, urn, isVisible, label) {
    var badge = parentEl.querySelector(':scope > .sivme-inline-badge');
    var targetClass = isVisible ? 'sivme-inline-badge sivme-badge-live' : 'sivme-inline-badge sivme-badge-dormant';
    var targetHtml = isVisible ? '<span>👁️</span><span>Live</span>' : '<span>🚫</span><span>Hidden</span>';

    function executeToggle(e) {
      if (e.cancelable) e.preventDefault();
      e.stopPropagation();

      var now = Date.now();
      if (now - (lastUrnActionTimes[urn] || 0) < 550) return;
      lastUrnActionTimes[urn] = now;

      var bUrn = badge ? badge.getAttribute('data-badge-urn') : urn;
      var bVis = badge ? (badge.getAttribute('data-badge-vis') === 'true') : isVisible;
      var bLabel = badge ? (badge.getAttribute('data-badge-label') || label) : label;
      var newTargetVis = !bVis;

      if (bUrn === 'rm:cat:16') {
        setUrnVisibility('rm:cat:16', newTargetVis, bLabel);
        for (var sIdx = 1; sIdx <= 3; sIdx++) {
          setUrnVisibility('rm:cat:16:sub:16-' + sIdx, newTargetVis, '16-' + sIdx + ' सेवा');
        }
      } else {
        setUrnVisibility(bUrn, newTargetVis, bLabel);
      }

      try {
        var match = bUrn.match(/^rm:cat:([0-9]{2})$/);
        if (match) {
          var catNum = match[1];
          var rawActive = localStorage.getItem('rm_active_categories_v1');
          var activeArr = rawActive ? JSON.parse(rawActive) : [];
          var id1 = 'c' + catNum;
          var id2 = 'g' + catNum;
          var id3 = catNum;
          if (!bVis) {
            if (activeArr.indexOf(id1) === -1) activeArr.push(id1);
            if (activeArr.indexOf(id2) === -1) activeArr.push(id2);
            if (activeArr.indexOf(id3) === -1) activeArr.push(id3);
          } else {
            activeArr = activeArr.filter(function (x) {
              return x !== id1 && x !== id2 && x !== id3;
            });
          }
          localStorage.setItem('rm_active_categories_v1', JSON.stringify(activeArr));
        }
      } catch (_) {}

      enforceZELTemplateRendering();
      applyInSituAudit();
    }

    if (!badge) {
      badge = document.createElement('div');
      parentEl.appendChild(badge);

      badge.addEventListener('click', executeToggle);

      if (urn.indexOf('sub:') === -1 && urn.indexOf('elem:') === -1) {
        function handleCardWakeUp(e) {
          if (!parentEl.classList.contains('sivme-ghost-dormant')) return;
          if (e.target.closest('.sivme-inline-badge')) return;
          if (urn === 'rm:cat:16') return;
          if (e.target.closest('button') || e.target.closest('a')) return;

          executeToggle(e);
        }

        parentEl.addEventListener('click', handleCardWakeUp);
      }
    }

    badge.className = targetClass;
    if (badge.innerHTML !== targetHtml) badge.innerHTML = targetHtml;
    badge.setAttribute('data-badge-urn', urn);
    badge.setAttribute('data-badge-vis', String(isVisible));
    badge.setAttribute('data-badge-label', label);
    badge.title = label + (isVisible ? ' छुपाने के लिए टैप करें (Hide)' : ' लाइव दिखाने के लिए टैप करें (Show)');
  }

  // 6. FLOATING HUD DOCK WITH AUTOMATION HARD-RELOAD
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
        <div style="display:flex;align-items:center;gap:5px;">
          <span style="font-size:12px;">🛡️</span>
          <span style="color:#22d3ee;font-size:11px;font-weight:900;letter-spacing:0.5px;">SIVME</span>
        </div>
        <span style="background:#0f172a;border:1px solid #334155;color:#94a3b8;font-size:10px;font-weight:700;padding:2px 6px;border-radius:9999px;">
          Hidden: <span id="sivmeHiddenCountNum" style="color:#f87171;">${hiddenCount}</span>
        </span>
        <button id="btnHardReloadBust" title="1-टैप हार्ड रीलोड व कैश डिलीट" style="background:#0369a1;border:1px solid #38bdf8;color:#e0f2fe;font-size:10px;font-weight:900;padding:3px 8px;border-radius:8px;cursor:pointer;display:inline-flex;align-items:center;gap:3px;">
          <span>⚡ Reload</span>
        </button>
        <button id="btnExitInSitu" title="पब्लिक मोड में जाएँ" style="background:#450a0a;border:1px solid #b91c1c;color:#fca5a5;font-size:10px;font-weight:800;padding:3px 7px;border-radius:8px;cursor:pointer;">
          Exit ✕
        </button>
        <a href="/owner-console.html" style="background:#1e1b4b;border:1px solid #4338ca;color:#a5b4fc;font-size:10px;font-weight:800;padding:3px 7px;border-radius:8px;text-decoration:none;display:inline-flex;align-items:center;gap:2px;">
          <span>B ⚙️</span>
        </a>
      `;
      document.body.appendChild(existingDock);

      var hardReloadBtn = document.getElementById('btnHardReloadBust');
      if (hardReloadBtn) {
        hardReloadBtn.addEventListener('click', async function (e) {
          if (e.cancelable) e.preventDefault();
          e.stopPropagation();

          hardReloadBtn.innerHTML = '<span>⏳ Clearing...</span>';

          try {
            if ('caches' in window) {
              var cacheNames = await caches.keys();
              await Promise.all(cacheNames.map(function (k) { return caches.delete(k); }));
            }
            if (navigator.serviceWorker) {
              var registrations = await navigator.serviceWorker.getRegistrations();
              for (var i = 0; i < registrations.length; i++) {
                await registrations[i].unregister();
              }
            }
          } catch (_) {}

          localStorage.setItem(DEV_AUTO_KEY, 'true');
          sessionStorage.setItem(SESSION_KEY, 'SOV_ACTIVE_2026');
          localStorage.setItem(SESSION_KEY, 'SOV_ACTIVE_2026');

          var freshUrl = new URL(window.location.origin + window.location.pathname);
          freshUrl.searchParams.set('sov_mode', 'in_situ');
          freshUrl.searchParams.set('dev_auto', '1');
          freshUrl.searchParams.set('cb', String(Date.now()));
          window.location.href = freshUrl.toString();
        });
      }

      var exitBtn = document.getElementById('btnExitInSitu');
      if (exitBtn) {
        function handleCleanExit(e) {
          if (e.cancelable) e.preventDefault();
          e.stopPropagation();

          sessionStorage.removeItem(SESSION_KEY);
          localStorage.removeItem(SESSION_KEY);
          localStorage.removeItem(DEV_AUTO_KEY);

          if (window.RM_SovereignRegistry) {
            window.RM_SovereignRegistry.setConsoleMode(false);
          }
          try {
            var regRaw = localStorage.getItem(REGISTRY_STORAGE_KEY);
            if (regRaw) {
              var reg = JSON.parse(regRaw);
              if (reg) {
                reg.activeMode = 'public';
                localStorage.setItem(REGISTRY_STORAGE_KEY, JSON.stringify(reg));
              }
            }
          } catch (_) {}

          if (existingDock) existingDock.remove();
          var badges = document.querySelectorAll('.sivme-inline-badge');
          badges.forEach(function (b) { b.remove(); });

          var cleanTargetUrl = window.location.origin + window.location.pathname;
          window.location.replace(cleanTargetUrl);
        }

        exitBtn.addEventListener('click', handleCleanExit);
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
    }, 50);
  }

  // 7. OBSERVER & INITIALIZATION
  function initEngine() {
    enforceZELTemplateRendering();
    injectStyles();
    applyInSituAudit();

    document.addEventListener('click', function () {
      setTimeout(applyInSituAudit, 60);
      setTimeout(applyInSituAudit, 300);
    }, false);

    window.addEventListener('rm:sov:visibility-changed', function () {
      applyInSituAudit();
    });

    window.addEventListener('storage', function (e) {
      if (e.key === REGISTRY_STORAGE_KEY || e.key === SESSION_KEY) {
        applyInSituAudit();
      }
    });

    var observer = new MutationObserver(function (mutations) {
      if (isAuditing) return;
      var hasStructuralChanges = false;
      for (var i = 0; i < mutations.length; i++) {
        var t = mutations[i].target;
        if (t && t.nodeType === 1) {
          if (t.id === 'sivmeFloatingDock' || t.classList.contains('sivme-inline-badge') || t.closest('#sivmeFloatingDock') || t.closest('.sivme-inline-badge')) {
            continue;
          }
        }
        hasStructuralChanges = true;
        break;
      }
      if (hasStructuralChanges) {
        scheduleAudit();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style', 'hidden']
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEngine);
  } else {
    initEngine();
  }
})();
