/**
 * RISE MITRA — SOVEREIGN IN-SITU VISUAL MANAGEMENT ENGINE (SIVME)
 * MODULE        : Surface-A Floating HUD & Universal Auto-Scanner (Kernel v4.2 Master)
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/sovereign-in-situ-hud.js
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
  var auditTimer = null;
  var adapters = {};
  var lastUrnActionTimes = {};
  var lastAccordionToggleTime = 0;

  // ==============================================================================
  // 1. ZEL TEMPLATE SHIELD: Ensure legacy modules always render complete DOM
  // ==============================================================================
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
    window.addEventListener('rm:sov:visibility-changed', enforceZELTemplateRendering);
  }

  // ==============================================================================
  // 2. CONSOLE AUTHORIZATION GUARD
  // ==============================================================================
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

  // ==============================================================================
  // 3. REGISTRY BRIDGE (Zero Recursive Cascades)
  // ==============================================================================
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

    if (window.RM_SovereignRegistry && typeof window.RM_SovereignRegistry.isVisible === 'function') {
      return window.RM_SovereignRegistry.isVisible(urn);
    }
    var reg = getRegistry();
    if (reg && reg.items && reg.items[urn] !== undefined && reg.items[urn].visible !== undefined) {
      return !!reg.items[urn].visible;
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

  // ==============================================================================
  // 4. URN SELECTORS CONTRACT (16-3 Dynamic Filters)
  // ==============================================================================
  var URN_SELECTORS = [
    {
      urn: 'rm:cat:16:sub:16-3:elem:smart_omnibox',
      selector: '#rm-search-locality, #smartOmniboxGroup, #smartOmnibox, input[placeholder*="लालपुर"], input[placeholder*="8340"]',
      label: 'स्मार्ट खोज'
    },
    {
      urn: 'rm:cat:16:sub:16-3:elem:state_filter',
      selector: '#rm-cat16-search-state, #stateFilterGroup, #stateFilter, select[id*="state"]',
      label: 'राज्य फ़िल्टर'
    },
    {
      urn: 'rm:cat:16:sub:16-3:elem:district_filter',
      selector: '#rm-cat16-search-district, #districtFilterGroup, #districtFilter, select[id*="district"]',
      label: 'जिला फ़िल्टर'
    },
    {
      urn: 'rm:cat:16:sub:16-3:elem:budget_slider',
      selector: '#rm-search-budget-slider, #budgetSliderGroup, input[type="range"]',
      label: 'बजट स्लाइडर'
    },
    {
      urn: 'rm:cat:16:sub:16-3:elem:submeter_checkbox',
      selector: '#rm-search-submeter, #submeterFilterGroup, input[type="checkbox"]',
      label: 'सब-मीटर फ़िल्टर'
    }
  ];

  // ==============================================================================
  // 5. RECONCILED HIDDEN COUNTER & CLEAN TEXT
  // ==============================================================================
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
    var badges = clone.querySelectorAll('.sivme-inline-badge, .sivme-live-notch, .sivme-notch-pill');
    badges.forEach(function (b) { b.remove(); });
    return (clone.textContent || '').trim();
  }

  // ==============================================================================
  // 6. STYLESHEET INJECTOR (2.5D Tactile Elevation & Explicit Notch Display)
  // ==============================================================================
  function injectStyles() {
    if (document.getElementById('sivme-core-stylesheet')) return;
    var link = document.createElement('link');
    link.id = 'sivme-core-stylesheet';
    link.rel = 'stylesheet';
    link.href = '/css/sivme-hud.css?v=20261006_v25';
    document.head.appendChild(link);

    if (document.getElementById('sivme-core-styles')) return;
    var style = document.createElement('style');
    style.id = 'sivme-core-styles';
    style.textContent = [
      '.sivme-badge-anchor { position: relative !important; overflow: visible !important; }',
      '.sivme-ghost-dormant { outline: 2px dashed #ef4444 !important; outline-offset: 3px !important; opacity: 0.45 !important; }',
      '.sivme-ghost-live { outline: 2px dashed #10b981 !important; outline-offset: 3px !important; opacity: 1 !important; }',
      '.sivme-public-hidden { display: none !important; }',
      '.sivme-notch-pill { display: inline-flex !important; visibility: visible !important; opacity: 1 !important; z-index: 99 !important; }',
      '#verticalTilesGrid > div { position: relative !important; overflow: visible !important; }',
      '#cat-menu-btn { position: relative !important; overflow: visible !important; }'
    ].join('\n');
    document.head.appendChild(style);
  }

  // ==============================================================================
  // 7. MOUNT UNCLIPPED INTERACTIVE NOTCH PILL
  // ==============================================================================
  function mountInlineBadge(parentEl, urn, isVisible, label) {
    var badge = parentEl.querySelector(':scope > .sivme-notch-pill');
    if (!badge) {
      badge = document.createElement('div');
      parentEl.appendChild(badge);
    }

    badge.className = 'sivme-notch-pill ' + (isVisible ? 'sivme-badge-live' : 'sivme-badge-dormant');
    badge.setAttribute('data-badge-urn', urn);
    badge.setAttribute('data-target-urn', urn);
    badge.setAttribute('data-badge-label', label || '');
    badge.setAttribute('data-badge-vis', String(isVisible));

    var targetHtml = isVisible
      ? '<span style="color:#10b981;font-size:10px;line-height:1;">🟢</span> <span style="line-height:1;">Live</span> <span style="font-size:9px;opacity:0.8;line-height:1;">⇄</span>'
      : '<span style="color:#ef4444;font-size:10px;line-height:1;">🔴</span> <span style="line-height:1;">Hidden</span> <span style="font-size:9px;opacity:0.8;line-height:1;">⇄</span>';

    badge.innerHTML = targetHtml;

    badge.style.cssText = [
      'position: absolute !important',
      'top: -10px !important',
      'right: 8px !important',
      'z-index: 99 !important',
      'background: ' + (isVisible ? '#064e3b' : '#7f1d1d') + ' !important',
      'border: 1.5px solid ' + (isVisible ? '#10b981' : '#ef4444') + ' !important',
      'color: ' + (isVisible ? '#34d399' : '#fca5a5') + ' !important',
      'font-family: ui-monospace, SFMono-Regular, system-ui, sans-serif !important',
      'font-size: 10px !important',
      'font-weight: 800 !important',
      'padding: 2px 7px !important',
      'border-radius: 9999px !important',
      'box-shadow: 0 3px 10px rgba(0, 0, 0, 0.75) !important',
      'cursor: pointer !important',
      'display: inline-flex !important',
      'visibility: visible !important',
      'opacity: 1 !important',
      'align-items: center !important',
      'gap: 3px !important',
      'user-select: none !important',
      'line-height: 1 !important',
      'white-space: nowrap !important'
    ].join(';');

    parentEl.style.setProperty('overflow', 'visible', 'important');
    if (window.getComputedStyle(parentEl).position === 'static') {
      parentEl.style.setProperty('position', 'relative', 'important');
    }
  }

  // ==============================================================================
  // 8. STRICT SYSTEM SHELL DENYLIST (0% Tampering on System Shell)
  // ==============================================================================
  function isSystemShellElement(el) {
    if (!el || el.nodeType !== 1) return true;
    return !!(
      el.closest('header') ||
      el.closest('nav') ||
      el.closest('#header-user-avatar') ||
      el.closest('[onclick*="toggleMenuDrawer"]') && el.id !== 'cat-menu-btn' ||
      el.closest('[onclick*="closeFullscreenModule"]') ||
      el.closest('#playStoreInstallBanner') ||
      el.closest('.wallet-card') ||
      el.closest('#sivmeFloatingDock') ||
      el.closest('#sivme-floating-console-dock') ||
      el.classList.contains('acc-arrow') ||
      (el.textContent && el.textContent.indexOf('12 CORE CASHFLOW VERTICALS') !== -1 && !el.closest('#verticalTilesGrid')) ||
      el.tagName === 'HEADER' ||
      el.tagName === 'NAV'
    );
  }

  function auditElement(el, urn, label, isAuth) {
    if (!el || isSystemShellElement(el)) return;
    if (typeof isAuth === 'undefined') isAuth = isConsoleAuthorized();
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
      var oldB = el.querySelector(':scope > .sivme-notch-pill, :scope > .sivme-inline-badge');
      if (oldB) oldB.remove();
      el.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
    } else {
      el.classList.remove('sivme-public-hidden');
      el.classList.add('sivme-badge-anchor');
      if (!isVis) {
        el.classList.remove('sivme-ghost-live');
        el.classList.add('sivme-ghost-dormant');
      } else {
        el.classList.remove('sivme-ghost-dormant');
        el.classList.add('sivme-ghost-live');
      }
      mountInlineBadge(el, urn, isVis, label);

      if (el.getAttribute('data-sivme-tap-bound') !== 'true') {
        el.setAttribute('data-sivme-tap-bound', 'true');

        el.addEventListener('click', function (e) {
          if (!isConsoleAuthorized()) return;
          if (e.target.closest('.sivme-notch-pill, .sivme-inline-badge')) return;

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

  // ==============================================================================
  // 9. UNIVERSAL AUTO-SCANNER
  // ==============================================================================
  function autoScanBusinessElements(isAuth) {
    // 1. RM World Directory Button
    var dirBtn = document.getElementById('cat-menu-btn');
    if (dirBtn) {
      dirBtn.classList.add('sivme-btn-pill');
      auditElement(dirBtn, 'rm:elem:dir-menu-btn', 'RM World Directory', isAuth);
    }

    // 2. Global Search Box
    var searchBox = document.querySelector('input[placeholder*="खोजें"], input[placeholder*="search"]');
    if (searchBox && searchBox.parentElement) {
      var sParent = searchBox.parentElement;
      sParent.classList.add('sivme-search-container');
      auditElement(sParent, 'rm:elem:home-search', 'ग्लोबल खोज बार', isAuth);
    }

    // 3. Home Dashboard 12 Core Cashflow Verticals
    var vertCards = document.querySelectorAll('#verticalTilesGrid > div');
    vertCards.forEach(function (card) {
      var numSpan = card.querySelector('span.font-mono');
      var num = numSpan ? cleanText(numSpan).replace('.', '').trim() : '';
      if (!num) {
        var clickAttr = card.getAttribute('onclick') || '';
        var match = clickAttr.match(/['"]c?([0-9]{2})['"]/);
        if (match) num = match[1];
      }
      if (num) {
        var urn = 'rm:cat:' + (num.length === 1 ? '0' + num : num);
        var labelEl = card.querySelector('div.font-bold') || card;
        var label = cleanText(labelEl) || ('Vertical ' + num);
        card.classList.add('sivme-vertical-card');
        auditElement(card, urn, label, isAuth);
      }
    });

    // 4. 16-3 Inner Rental Search Dynamic Filters
    URN_SELECTORS.forEach(function (def) {
      try {
        var nodes = document.querySelectorAll(def.selector);
        nodes.forEach(function (node) {
          var targetNode = node;
          if (['INPUT', 'SELECT'].indexOf(node.tagName) !== -1 && node.parentElement) {
            targetNode = node.parentElement;
          }
          if (!isSystemShellElement(targetNode)) {
            auditElement(targetNode, def.urn, def.label, isAuth);
          }
        });
      } catch (_) {}
    });
  }

  // ==============================================================================
  // 10. CATEGORY 16 ACCORDION CONTROLLER
  // ==============================================================================
  function auditCategory16Accordion(isAuth) {
    var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
    if (!c16) return;

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
        var oldB = c16Header.querySelector(':scope > .sivme-notch-pill, :scope > .sivme-inline-badge');
        if (oldB) oldB.remove();
        c16Header.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
      }
    } else {
      c16.classList.remove('sivme-public-hidden');
      c16.style.removeProperty('display');

      if (c16Header) {
        c16Header.classList.add('sivme-badge-anchor');
        if (!isCat16Vis) {
          c16Header.classList.add('sivme-ghost-dormant');
          c16Header.classList.remove('sivme-ghost-live');
        } else {
          c16Header.classList.remove('sivme-ghost-dormant');
          c16Header.classList.add('sivme-ghost-live');
        }
        mountInlineBadge(c16Header, 'rm:cat:16', isCat16Vis, 'घर व मकान (House & Home)');

        if (c16Header.getAttribute('data-sivme-toggle-bound') !== 'true') {
          c16Header.setAttribute('data-sivme-toggle-bound', 'true');
          c16Header.addEventListener('click', function (e) {
            if (e.target.closest('.sivme-notch-pill, .sivme-inline-badge')) return;
            var now = Date.now();
            if (now - lastAccordionToggleTime < 350) return;
            lastAccordionToggleTime = now;

            var sub = document.getElementById('sub-c16');
            if (!sub) return;

            var isHidden = sub.classList.contains('hidden') || sub.style.display === 'none';
            var chevron = c16Header.querySelector('.acc-arrow');

            if (isHidden) {
              sub.classList.remove('hidden');
              sub.style.display = 'block';
              if (chevron) chevron.textContent = '▲';
            } else {
              sub.style.display = 'none';
              sub.classList.add('hidden');
              if (chevron) chevron.textContent = '▼';
            }
          }, true);
        }
      }
    }
  }

  // ==============================================================================
  // 11. SUB-SERVICES DIRECT PASS-THROUGH HANDLER
  // ==============================================================================
  function auditSub16Cards(isAuth) {
    var subCards = document.querySelectorAll('#sub-c16 > div');
    subCards.forEach(function (subCard, idx) {
      var subUrn = 'rm:cat:16:sub:16-' + (idx + 1);
      var subLabelEl = subCard.querySelector('.text-xs') || subCard;
      var subLabel = subLabelEl ? subLabelEl.textContent.trim() : ('16-' + (idx + 1) + ' सेवा');

      auditElement(subCard, subUrn, subLabel, isAuth);

      if (subCard.getAttribute('data-sivme-sub-bound') !== 'true') {
        subCard.setAttribute('data-sivme-sub-bound', 'true');
        subCard.addEventListener('click', function (e) {
          if (!isConsoleAuthorized()) return;
          var isDormant = subCard.classList.contains('sivme-ghost-dormant');
          var isBadgeClick = !!e.target.closest('.sivme-notch-pill, .sivme-inline-badge');

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
            applyInSituAudit();
            return;
          }

          var openBtn = subCard.querySelector('button, a, [onclick]');
          if (openBtn && e.target !== openBtn && !openBtn.contains(e.target)) {
            openBtn.click();
          }
        }, false);
      }
    });
  }

  // ==============================================================================
  // 12. PURE KERNEL AUDIT ENGINE & DEDUPLICATED DOCK
  // ==============================================================================
  function updateFloatingDock(isAuth, hiddenCount) {
    var legacyDock = document.getElementById('sivmeFloatingDock');
    if (legacyDock) {
      legacyDock.remove();
    }
  }

  function applyInSituAudit() {
    if (isAuditing) return;
    isAuditing = true;

    try {
      enforceZELTemplateRendering();
      var isAuth = isConsoleAuthorized();

      var openModals = document.querySelectorAll('#categoryModal, #rentalLedgerModal, #rentalSearchModal, [id*="Modal"]');
      openModals.forEach(function (m) {
        if (m.classList.contains('hidden') || m.style.display === 'none') return;
        m.style.setProperty('height', '100dvh', 'important');
        m.style.setProperty('max-height', '100dvh', 'important');
      });

      auditCategory16Accordion(isAuth);
      auditSub16Cards(isAuth);

      // Execute Micro-Adapters
      Object.keys(adapters).forEach(function (key) {
        try { adapters[key](); } catch (_) {}
      });

      // Execute Universal Auto-Scanner
      autoScanBusinessElements(isAuth);

      // Purge Duplicate HUD
      updateFloatingDock(isAuth, getHiddenCount());
    } finally {
      setTimeout(function () {
        isAuditing = false;
      }, 30);
    }
  }

  // ==============================================================================
  // 13. MICRO-MODULAR ADAPTER AUTOLOADER (8 Complete Modules)
  // ==============================================================================
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
      basePath + 'home-widgets.js',
      basePath + 'core-verticals-9.js',
      basePath + 'catalog-50.js',
      basePath + 'cat-16.js',
      basePath + 'sub-16-1.js',
      basePath + 'sub-16-2.js',
      basePath + 'sub-16-3.js',
      basePath + 'user-pinned-shortcuts.js'
    ];

    scripts.forEach(function (src) {
      if (!document.querySelector('script[src*="' + src + '"]')) {
        var s = document.createElement('script');
        s.src = src + '?v=20261006_v8';
        s.async = true;
        document.head.appendChild(s);
      }
    });
  }

  // ==============================================================================
  // 14. 1-TAP INSTANT BADGE CAPTURE LISTENER, GLOBAL API & INITIALIZATION
  // ==============================================================================
  document.addEventListener('click', function (e) {
    var badge = e.target.closest('.sivme-notch-pill, .sivme-inline-badge');
    if (!badge || !isConsoleAuthorized()) return;

    if (e.cancelable) e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    var urn = badge.getAttribute('data-badge-urn') || badge.getAttribute('data-target-urn');
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

  window.RM_SIVME = {
    isConsoleAuthorized: isConsoleAuthorized,
    getUrnVisibility: getUrnVisibility,
    setUrnVisibility: setUrnVisibility,
    mountInlineBadge: mountInlineBadge,
    auditElement: auditElement,
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
