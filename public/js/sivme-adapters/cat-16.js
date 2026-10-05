/**
 * RISE MITRA — SIVME CATEGORY 16 ADAPTER
 * TARGET: Category 16 Accordion (1-Tap Strict), 16-1/16-2/16-3 Isolated Single-Tap & Native Opener
 * GOVERNANCE: GATE-23.5 | ZEL SPECIFICATION
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  function getCore() {
    return window.RM_SIVME || null;
  }

  // 1. ISOLATED SUB-URN MATCHER
  function getSubUrnAndLabel(subCard, idx) {
    var txt = (subCard.textContent || '').trim();
    if (txt.indexOf('मिस्त्री') !== -1 || txt.indexOf('मरम्मत') !== -1) {
      return { urn: 'rm:cat:16:sub:16-1', label: 'मिस्त्री व गृह मरम्मत' };
    }
    if (txt.indexOf('किराया') !== -1 || txt.indexOf('बहीखाता') !== -1) {
      return { urn: 'rm:cat:16:sub:16-2', label: 'किराया बहीखाता (Rental Ledger)' };
    }
    if (txt.indexOf('कमरा') !== -1 || txt.indexOf('फ्लैट') !== -1) {
      return { urn: 'rm:cat:16:sub:16-3', label: 'कमरा व फ्लैट खोज (Rental Search)' };
    }
    var num = idx + 1;
    return { urn: 'rm:cat:16:sub:16-' + num, label: '16-' + num + ' सेवा' };
  }

  function auditCategory16() {
    var core = getCore();
    if (!core || !core.isConsoleAuthorized) return;
    var isAuth = core.isConsoleAuthorized();

    // 2. AUTHORITATIVE 1-TAP ACCORDION CONTROLLER
    var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
    if (c16) {
      var c16Header = c16.querySelector(':scope > div:first-child');
      if (c16Header && c16Header.getAttribute('data-sivme-c16-ctrl') !== 'true') {
        c16Header.setAttribute('data-sivme-c16-ctrl', 'true');

        if (c16Header.hasAttribute('onclick')) c16Header.removeAttribute('onclick');
        c16Header.querySelectorAll('[onclick]').forEach(function (el) {
          el.removeAttribute('onclick');
        });

        c16Header.addEventListener('click', function (e) {
          if (e.target.closest('.sivme-inline-badge')) return;

          if (e.cancelable) e.preventDefault();
          e.stopImmediatePropagation();
          e.stopPropagation();

          var sub = document.getElementById('sub-c16');
          if (!sub) return;

          var isHidden = sub.classList.contains('hidden') || 
                         window.getComputedStyle(sub).display === 'none' || 
                         sub.style.display === 'none';

          var chevron = c16Header.querySelector('svg, [id*="chevron"]');

          if (isHidden) {
            sub.classList.remove('hidden', 'sivme-collapsed');
            sub.style.setProperty('display', 'block', 'important');
            if (chevron) chevron.style.transform = 'rotate(180deg)';
          } else {
            sub.classList.add('hidden', 'sivme-collapsed');
            sub.style.setProperty('display', 'none', 'important');
            if (chevron) chevron.style.transform = 'rotate(0deg)';
          }
        }, true); // Capture phase with stopImmediatePropagation stops duplicate triggers
      }
    }

    // 3. ISOLATED SUB-SERVICES (16-1, 16-2, 16-3): NO CROSS-MUTATION & INSTANT 1-TAP
    var sub16Cards = document.querySelectorAll('#sub-c16 > div');
    sub16Cards.forEach(function (subCard, idx) {
      var info = getSubUrnAndLabel(subCard, idx);
      var subUrn = info.urn;
      var subLabel = info.label;

      subCard.setAttribute('data-sov-urn', subUrn);
      subCard.setAttribute('data-sov-label', subLabel);

      var isVis = core.getUrnVisibility(subUrn);

      if (!isAuth) {
        if (!isVis) {
          subCard.classList.add('sivme-public-hidden');
          subCard.style.setProperty('display', 'none', 'important');
        } else {
          subCard.classList.remove('sivme-public-hidden');
          subCard.style.removeProperty('display');
        }
        var oldB = subCard.querySelector(':scope > .sivme-inline-badge');
        if (oldB) oldB.remove();
        subCard.classList.remove('sivme-ghost-dormant', 'sivme-badge-anchor');
        return;
      }

      subCard.classList.remove('sivme-public-hidden');
      subCard.classList.add('sivme-badge-anchor');

      if (!isVis) {
        subCard.classList.add('sivme-ghost-dormant');
      } else {
        subCard.classList.remove('sivme-ghost-dormant');
      }

      core.mountInlineBadge(subCard, subUrn, isVis, subLabel);

      // SINGLE-POINT OF TOUCH CONTROL
      if (subCard.getAttribute('data-sivme-card-bound') !== 'true') {
        subCard.setAttribute('data-sivme-card-bound', 'true');

        subCard.addEventListener('click', function (e) {
          if (!core.isConsoleAuthorized()) return;

          // If badge was tapped, badge listener handles it cleanly
          if (e.target.closest('.sivme-inline-badge')) {
            return;
          }

          var isCardLive = core.getUrnVisibility(subUrn);
          var actionBtn = e.target.closest('button, a');

          // If card is Live and user clicked action button ("खोलें"): run native opener
          if (actionBtn && isCardLive) {
            return;
          }

          // Card body, text or dormant card clicked: Strictly toggle this card only!
          if (e.cancelable) e.preventDefault();
          e.stopPropagation();

          var nextVis = !isCardLive;
          core.setUrnVisibility(subUrn, nextVis, subLabel);
          core.applyInSituAudit();
        }, false);
      }
    });
  }

  function register() {
    if (window.RM_SIVME && typeof window.RM_SIVME.registerAdapter === 'function') {
      window.RM_SIVME.registerAdapter('cat-16', auditCategory16);
    } else {
      setTimeout(register, 50);
    }
  }
  register();
})();
