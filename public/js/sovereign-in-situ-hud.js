/**
 * RISE MITRA — SOVEREIGN IN-SITU VISUAL MANAGEMENT ENGINE (SIVME)
 * MODULE        : Surface-A Floating HUD & DOM Injection Runtime Engine (Direct Sub-Card Wake-Up & Infallible Accordion)
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
  var isAuditing = false;
  var auditTimer = null;
  var lastActionTime = 0;
  var lastUrnActionTimes = {};
  var lastAccordionToggleTime = 0;

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

  // 2. FAIL-CLOSED CHECK: Public user verification
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

  // Robust Direct Registry Access (Infallible Fallback)
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

  // Element URN Selectors Map for Category 16 & Dynamic Nodes
  var URN_SELECTORS = [
    {
      urn: 'rm:cat:16:sub:16-3:elem:smart_omnibox',
      selector: '#rm-search-locality, #smartOmniboxGroup, #smartOmnibox, [data-sov-urn="rm:cat:16:sub:16-3:elem:smart_omnibox"]',
      label: 'स्मार्ट खोज'
    },
    {
      urn: 'rm:cat:16:sub:16-3:elem:state_filter',
      selector: '#rm-cat16-search-state, #stateFilterGroup, #stateFilter, [data-sov-urn="rm:cat:16:sub:16-3:elem:state_filter"]',
      label: 'राज्य फ़िल्टर'
    },
    {
      urn: 'rm:cat:16:sub:16-3:elem:district_filter',
      selector: '#rm-cat16-search-district, #districtFilterGroup, #districtFilter, [data-sov-urn="rm:cat:16:sub:16-3:elem:district_filter"]',
      label: 'जिला फ़िल्टर'
    },
    {
      urn: 'rm:cat:16:sub:16-3:elem:budget_slider',
      selector: '#rm-search-budget-slider, #budgetSliderGroup, [data-sov-urn="rm:cat:16:sub:16-3:elem:budget_slider"]',
      label: 'बजट स्लाइडर'
    },
    {
      urn: 'rm:cat:16:sub:16-3:elem:submeter_checkbox',
      selector: '#rm-search-submeter, #submeterFilterGroup, [data-sov-urn="rm:cat:16:sub:16-3:elem:submeter_checkbox"]',
      label: 'सब-मीटर फ़िल्टर'
    }
  ];

  // 3. INJECT SIVME STYLES
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
        cursor: pointer !important;
      }

      /* Single Category Dormant Rows Pointer Lock (Cat 16 and Sub-cards completely unlocked) */
      #categoryModal [data-cat-id]:not([data-cat-id="c16"]).sivme-ghost-dormant > *:not(.sivme-inline-badge) {
        opacity: 0.55 !important;
        filter: grayscale(50%) !important;
        pointer-events: none !important;
      }

      /* Category 16 Accordion & All Sub-cards MUST ALWAYS have active touch pointers */
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
        z-index: 30 !important;
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

      /* SECTION HEADERS CLEARANCE */
      .sivme-catalog-section-header {
        margin-top: 28px !important;
        margin-bottom: 24px !important;
        position: relative !important;
        z-index: 10 !important;
      }
      #categoryModal > div > div > button:first-of-type,
      #categoryModal .sivme-first-header {
        margin-top: 14px !important;
        margin-bottom: 24px !important;
      }

      /* UNIFORM 72px CARD HEIGHT ACROSS ALL 33 CATEGORIES + CATEGORY 16 HEADER */
      #categoryModal [data-cat-id]:not([data-cat-id="c16"]),
      #categoryModal [data-cat-id="c16"] > div:first-child {
        min-height: 72px !important;
        padding: 22px 14px 14px 14px !important;
        border-radius: 14px !important;
        position: relative !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        box-sizing: border-box !important;
        overflow: visible !important;
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

      /* Category 16 Sub-Services */
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
      #sivmeFloatingDock {
        position: fixed;
        bottom: 18px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999999 !important;
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

      // 4.0.1 Infallible Capture-Phase Accordion Toggle for Category 16 Header & Button
      var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
      if (c16) {
        var c16Header = c16.querySelector(':scope > div:first-child');
        if (c16Header && c16Header.getAttribute('data-sivme-toggle-bound') !== 'true') {
          c16Header.setAttribute('data-sivme-toggle-bound', 'true');
          c16Header.setAttribute('data-sivme-c16-head', 'true');

          function doAccordionToggle(e) {
            // Do not toggle accordion if clicking the Live/Hidden badge
            if (e.target.closest('.sivme-inline-badge')) return;

            if (e.cancelable) e.preventDefault();
            e.stopPropagation();

            var now = Date.now();
            if (now - lastAccordionToggleTime < 350) return;
            lastAccordionToggleTime = now;

            var sub = document.getElementById('sub-c16');
            if (!sub) return;

            // Computed layout visibility check
            var isCurrentlyVisible = (sub.offsetHeight > 0) && (window.getComputedStyle(sub).display !== 'none') && !sub.classList.contains('sivme-collapsed');
            var chevron = document.getElementById('chevron-c16') || c16Header.querySelector('svg, [id*="chevron"]');

            if (isCurrentlyVisible) {
              // Collapse Accordion
              sub.style.setProperty('display', 'none', 'important');
              sub.classList.add('hidden', 'sivme-collapsed');
              if (chevron) chevron.style.transform = 'rotate(0deg)';
            } else {
              // Expand Accordion
              sub.style.setProperty('display', 'block', 'important');
              sub.classList.remove('hidden', 'sivme-collapsed');
              if (chevron) chevron.style.transform = 'rotate(180deg)';
            }
          }

          // Bound in capture phase to reliably intercept taps on header or button
          c16Header.addEventListener('click', doAccordionToggle, true);
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

      // 4.2 Category 16-3 Dynamic Filters Resolution
      URN_SELECTORS.forEach(function (def) {
        try {
          var nodes = document.querySelectorAll(def.selector);
          nodes.forEach(function (node) {
            var targetNode = node;
            if (['INPUT', 'SELECT'].indexOf(node.tagName) !== -1 && node.parentElement) {
              targetNode = node.parentElement;
            }
            if (!targetNode.hasAttribute('data-sov-urn')) {
              targetNode.setAttribute('data-sov-urn', def.urn);
              targetNode.setAttribute('data-sov-label', def.label);
            }
            registerMatch(targetNode, def.urn, def.label);
          });
        } catch (_) {}
      });

      // 4.3 Category 16 Sub-Services Resolution & Infallible 1-Tap Wake-Up Binding
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

        // Unified 1-Tap Handler attached directly to sub-card with 550ms lock
        if (subCard.getAttribute('data-sivme-sub-bound') !== 'true') {
          subCard.setAttribute('data-sivme-sub-bound', 'true');
          function handleSubCardTap(e) {
            if (e.cancelable) e.preventDefault();
            e.stopPropagation();

            var now = Date.now();
            if (now - (lastUrnActionTimes[subUrn] || 0) < 550) return;
            lastUrnActionTimes[subUrn] = now;

            var curVis = getUrnVisibility(subUrn);
            var isDormant = subCard.classList.contains('sivme-ghost-dormant');
            var isBadgeClick = !!e.target.closest('.sivme-inline-badge');

            // 1-Tap Wakes up if Dormant, or toggles on badge click
            if (isDormant || isBadgeClick) {
              var targetVis = isDormant ? true : !curVis;

              // Set sub-category visibility in registry + localStorage
              setUrnVisibility(subUrn, targetVis, subLabel);

              // Auto-wake Category 16 parent if a child is activated
              if (targetVis) {
                setUrnVisibility('rm:cat:16', true, 'घर व मकान');
              }

              // Instant 0ms Visual UI Swap on device
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
            }
          }

          subCard.addEventListener('click', handleSubCardTap, true);
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

        // UPWARD ROLLUP ALERT: Category 16 shows Hidden alert if any sub-service is hidden
        if (item.urn === 'rm:cat:16' && isAuth) {
          if (sub16HasHidden) {
            isVis = false;
          }
        }

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

      // Category 16 master badge cascade
      if (bUrn === 'rm:cat:16') {
        setUrnVisibility('rm:cat:16', newTargetVis, bLabel);
        for (var sIdx = 1; sIdx <= 3; sIdx++) {
          setUrnVisibility('rm:cat:16:sub:16-' + sIdx, newTargetVis, '16-' + sIdx + ' सेवा');
        }
      } else {
        setUrnVisibility(bUrn, newTargetVis, bLabel);
      }

      // Surface-B Category Synchronization Bridge
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

      // Sub-cards use their direct handler to avoid double-toggle
      if (urn.indexOf('sub:') === -1) {
        badge.addEventListener('click', executeToggle);

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

  // 6. FLOATING HUD DOCK
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
        function handleCleanExit(e) {
          if (e.cancelable) e.preventDefault();
          e.stopPropagation();

          sessionStorage.removeItem(SESSION_KEY);
          localStorage.removeItem(SESSION_KEY);
          sessionStorage.removeItem('rm_sov_in_situ_session');
          localStorage.removeItem('rm_sov_in_situ_session');

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
    }, 60);
  }

  // 7. OBSERVER & INITIALIZATION
  function initEngine() {
    enforceZELTemplateRendering();
    injectStyles();
    applyInSituAudit();

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
      subtree: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEngine);
  } else {
    initEngine();
  }
})();
