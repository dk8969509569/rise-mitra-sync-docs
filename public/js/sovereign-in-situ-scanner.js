/**
 * RISE MITRA — SOVEREIGN IN-SITU SCANNER ENGINE (PARENT ORCHESTRATOR)
 * MODULE        : Universal Auto-Scanner, 50 Catalog Cards, RM CASH & Modal Zero-Leak Sync
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/sovereign-in-situ-scanner.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var isAuditing = false;
  var lastToggleTime = 0;

  function getCore() {
    return window.RM_SIVME || {
      isConsoleAuthorized: function () { return false; },
      getUrnVisibility: function () { return true; },
      setUrnVisibility: function () {},
      cleanText: function (el) { return (el && el.textContent) ? el.textContent.trim() : ''; },
      enforceZELTemplateRendering: function () {},
      getAdapters: function () { return {}; }
    };
  }

  function getExt() {
    return window.RM_SIVME_EXT || {
      URN_SELECTORS: [],
      mountInlineBadge: function () {},
      persistToggle: function () {},
      isSystemShellElement: function () { return false; },
      auditCategory16Accordion: function () {},
      auditSub16Cards: function () {}
    };
  }

  // 1. ELEMENT AUDITOR & DORMANT CARD WAKEUP
  function auditElement(el, urn, label, isAuth) {
    var ext = getExt(), core = getCore();
    if (!el || ext.isSystemShellElement(el)) return;
    if (typeof isAuth === 'undefined') isAuth = core.isConsoleAuthorized();
    el.setAttribute('data-sov-urn', urn);
    el.setAttribute('data-sov-label', label || '');
    var isVis = core.getUrnVisibility(urn);

    if (!isAuth) {
      el.classList.toggle('sivme-public-hidden', !isVis);
      el.style.display = isVis ? '' : 'none';
      var oldB = el.querySelector(':scope > .sivme-notch-pill, :scope > .sivme-inline-badge, :scope > .sivme-live-notch');
      if (oldB) oldB.remove();
      el.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
    } else {
      el.classList.remove('sivme-public-hidden');
      el.classList.add('sivme-badge-anchor');
      el.classList.toggle('sivme-ghost-live', isVis);
      el.classList.toggle('sivme-ghost-dormant', !isVis);
      el.style.setProperty('opacity', '1', 'important');
      ext.mountInlineBadge(el, urn, isVis, label);

      if (el.getAttribute('data-sivme-tap-bound') !== 'true') {
        el.setAttribute('data-sivme-tap-bound', 'true');
        el.addEventListener('click', function (e) {
          if (!core.isConsoleAuthorized()) return;
          if (e.target.closest('.sivme-notch-pill, .sivme-inline-badge, .sivme-live-notch')) {
            if (e.cancelable) e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return;
          }
          if (!core.getUrnVisibility(urn)) {
            if (e.cancelable) e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            if (ext.persistToggle) {
              ext.persistToggle(urn, true, label, core);
            } else {
              core.setUrnVisibility(urn, true, label);
            }
            applyInSituAudit();
          }
        }, false);
      }
    }
  }

  // 2. UNIVERSAL AUTO-SCANNER
  function autoScanBusinessElements(isAuth) {
    var core = getCore(), ext = getExt();

    // 1. RM World Directory Button
    var dirBtn = document.getElementById('cat-menu-btn');
    if (dirBtn) {
      dirBtn.classList.add('sivme-btn-pill');
      auditElement(dirBtn, 'rm:elem:dir-menu-btn', 'RM World Directory', isAuth);
    }

    // 2. Global Search Box
    var searchBox = document.querySelector('input[placeholder*="खोजें"], input[placeholder*="search"]');
    if (searchBox && searchBox.parentElement) {
      searchBox.parentElement.classList.add('sivme-search-container');
      auditElement(searchBox.parentElement, 'rm:elem:home-search', 'ग्लोबल खोज बार', isAuth);
    }

    // 3. RM CASH Atomic Wallet Card
    var walletCard = document.querySelector('.wallet-card');
    if (walletCard) {
      walletCard.style.setProperty('overflow', 'visible', 'important');
      walletCard.classList.add('sivme-cash-atomic-card');
      auditElement(walletCard, 'rm:card:rm-cash', 'RM CASH बहीखाता कार्ड', isAuth);
    }

    // 4. Home Dashboard 12 Core Cashflow Verticals
    document.querySelectorAll('#verticalTilesGrid > div').forEach(function (card) {
      var numSpan = card.querySelector('span.font-mono');
      var num = numSpan ? core.cleanText(numSpan).replace('.', '').trim() : '';
      if (!num) {
        var clickAttr = card.getAttribute('onclick') || '';
        var match = clickAttr.match(/['"]c?([0-9]{2})['"]/);
        if (match) num = match[1];
      }
      if (num) {
        card.classList.add('sivme-vertical-card');
        auditElement(card, 'rm:cat:' + (num.length === 1 ? '0' + num : num), 'Vertical ' + num, isAuth);
      }
    });

    // 5. Universal Catalog Cards (50 Categories & Games)
    document.querySelectorAll('#categoryModal [data-cat-id]').forEach(function (cCard) {
      var catId = cCard.getAttribute('data-cat-id') || '';
      var num = catId.replace(/[cg]/, '');
      if (num && num !== '16') {
        cCard.classList.add('sivme-catalog-card');
        var labelEl = cCard.querySelector('.font-bold') || cCard;
        var label = core.cleanText(labelEl) || ('Category ' + num);
        auditElement(cCard, 'rm:cat:' + (num.length === 1 ? '0' + num : num), label, isAuth);
      } else if (num === '16') {
        // Enforce single anchor: C16 outer container NEVER gets outlines or badges
        cCard.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
        cCard.style.removeProperty('outline');
        cCard.querySelectorAll(':scope > .sivme-notch-pill, :scope > .sivme-live-notch, :scope > .sivme-inline-badge').forEach(function (n) { n.remove(); });
      }
    });

    // 6. Universal Catalog Sub-Cards
    var subC16 = document.getElementById('sub-c16');
    var isSubC16Open = subC16 && !subC16.classList.contains('hidden') && subC16.style.display !== 'none';
    document.querySelectorAll('#categoryModal .sivme-subcat-card[data-sivme-urn]').forEach(function (sub) {
      var urn = sub.getAttribute('data-sivme-urn') || '';
      if (urn && urn.indexOf('rm:cat:16') === -1) {
        var sLabelEl = sub.querySelector('span.font-bold') || sub;
        var sLabel = core.cleanText(sLabelEl) || urn;
        auditElement(sub, urn, sLabel, isAuth);
      } else if (urn && urn.indexOf('rm:cat:16') !== -1 && !isSubC16Open) {
        sub.querySelectorAll('.sivme-notch-pill, .sivme-live-notch, .sivme-inline-badge').forEach(function (n) { n.remove(); });
        sub.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'sivme-badge-anchor');
        sub.style.removeProperty('outline');
      }
    });

    // 7. 16-3 Dynamic Filters
    ext.URN_SELECTORS.forEach(function (def) {
      var node = document.querySelector(def.selector);
      if (node && !ext.isSystemShellElement(node.parentElement || node)) {
        auditElement(node.parentElement || node, def.urn, def.label, isAuth);
      }
    });
  }

  // 3. MAIN AUDIT ENGINE DISPATCHER & MODAL STATE SUPPRESSOR
  function applyInSituAudit() {
    if (isAuditing) return;
    isAuditing = true;
    try {
      var core = getCore(), ext = getExt();
      if (core.enforceZELTemplateRendering) core.enforceZELTemplateRendering();
      var isAuth = core.isConsoleAuthorized();

      var openModals = document.querySelectorAll('#categoryModal, #rentalLedgerModal, #rentalSearchModal, #rm-fullscreen-view');
      var isAnyModalOpen = false;
      openModals.forEach(function (m) {
        if (!m.classList.contains('hidden') && m.style.display !== 'none') {
          isAnyModalOpen = true;
          m.style.setProperty('height', '100dvh', 'important');
          m.style.setProperty('max-height', '100dvh', 'important');
        }
      });

      document.body.classList.toggle('sivme-modal-active', isAnyModalOpen);

      var mainEl = document.querySelector('main');
      var headerEl = document.querySelector('header');
      if (mainEl) {
        if (isAnyModalOpen) {
          mainEl.style.setProperty('display', 'none', 'important');
        } else {
          mainEl.style.removeProperty('display');
        }
      }
      if (headerEl) {
        if (isAnyModalOpen) {
          headerEl.style.setProperty('display', 'none', 'important');
        } else {
          headerEl.style.removeProperty('display');
        }
      }

      ext.auditCategory16Accordion(isAuth, auditElement, applyInSituAudit);
      ext.auditSub16Cards(isAuth, auditElement, applyInSituAudit);

      var registeredAdapters = core.getAdapters ? core.getAdapters() : {};
      Object.keys(registeredAdapters).forEach(function (key) { try { registeredAdapters[key](); } catch (_) {} });

      autoScanBusinessElements(isAuth);

      var legacyDock = document.getElementById('sivmeFloatingDock');
      if (legacyDock) legacyDock.remove();
    } finally {
      setTimeout(function () { isAuditing = false; }, 30);
    }
  }

  // 4. LEAK-PROOF 1-TAP INSTANT TOGGLE (CAPTURE-PHASE INTERCEPTOR)
  document.addEventListener('click', function (e) {
    var badge = e.target.closest('.sivme-notch-pill, .sivme-inline-badge, .sivme-live-notch');
    if (!badge) return;

    if (e.cancelable) e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    var core = getCore(), ext = getExt();
    if (!core.isConsoleAuthorized()) return;

    var now = Date.now();
    if (now - lastToggleTime < 200) return;
    lastToggleTime = now;

    var urn = badge.getAttribute('data-badge-urn') || badge.getAttribute('data-target-urn');
    var label = badge.getAttribute('data-badge-label') || '';
    var currentVis = core.getUrnVisibility ? core.getUrnVisibility(urn) : (badge.getAttribute('data-badge-vis') === 'true');
    var nextVis = !currentVis;

    if (!urn) return;

    // 1. Immediate Visual DOM Flip (0ms)
    badge.setAttribute('data-badge-vis', String(nextVis));
    badge.className = 'sivme-notch-pill ' + (nextVis ? 'sivme-badge-live' : 'sivme-badge-dormant');
    badge.innerHTML = nextVis
      ? '<span style="color:#10b981;font-size:11px;line-height:1;">🟢</span> <span style="line-height:1;">Live</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>'
      : '<span style="color:#ff4d4d;font-size:11px;line-height:1;">🔴</span> <span style="line-height:1;">Hidden</span> <span style="font-size:9.5px;opacity:0.85;line-height:1;">⇄</span>';
    badge.style.setProperty('background', (nextVis ? '#064e3b' : '#7f1d1d'), 'important');
    badge.style.setProperty('border', '1.5px solid ' + (nextVis ? '#10b981' : '#ff4d4d'), 'important');
    badge.style.setProperty('color', (nextVis ? '#34d399' : '#fca5a5'), 'important');

    var parentCard = badge.closest('[data-cat-id], .sivme-cat-card, .sivme-subcat-card, .sivme-vertical-card, .wallet-card');
    if (parentCard) {
      parentCard.classList.toggle('sivme-ghost-live', nextVis);
      parentCard.classList.toggle('sivme-ghost-dormant', !nextVis);
      parentCard.classList.toggle('is-live', nextVis);
      parentCard.classList.toggle('is-hidden', !nextVis);
      parentCard.style.setProperty('outline', '2.5px dashed ' + (nextVis ? '#10b981' : '#ff3838'), 'important');
      parentCard.style.setProperty('outline-offset', '3px', 'important');
      parentCard.style.setProperty('opacity', '1', 'important');
      var cardInner = parentCard.querySelector(':scope > div:first-child');
      if (cardInner) {
        cardInner.style.setProperty('opacity', nextVis ? '1' : '0.55', 'important');
      }
    }

    // 2. Persist across all local storage structures
    if (ext.persistToggle) {
      ext.persistToggle(urn, nextVis, label, core);
    } else {
      core.setUrnVisibility(urn, nextVis, label);
    }

    applyInSituAudit();
  }, true);

  window.RM_SIVME = window.RM_SIVME || {};
  window.RM_SIVME.auditElement = auditElement;
  window.RM_SIVME.applyInSituAudit = applyInSituAudit;

  applyInSituAudit();

  document.addEventListener('click', function (e) {
    if (e.target && e.target.closest && e.target.closest('#cat-menu-btn, [onclick*="toggleMenuDrawer"], [onclick*="toggleAccordion"], [data-cat-id], .acc-arrow')) {
      setTimeout(applyInSituAudit, 20);
      setTimeout(applyInSituAudit, 150);
      setTimeout(applyInSituAudit, 320);
    } else {
      setTimeout(applyInSituAudit, 60);
    }
  }, false);

  window.addEventListener('storage', applyInSituAudit);
  window.addEventListener('rm:sov:visibility-changed', applyInSituAudit);

  new MutationObserver(function () { if (!isAuditing) applyInSituAudit(); })
    .observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
})();
