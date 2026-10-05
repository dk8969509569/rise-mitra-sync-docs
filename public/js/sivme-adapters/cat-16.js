/**
 * RISE MITRA — SIVME CATEGORY 16 ADAPTER
 * TARGET: Category 16 Accordion, 16-1, 16-2, 16-3 Single-Tap Sovereign Toggle & Instant Parent Sync
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

  // 1. NEUTRALIZE NATIVE DOUBLE-TRIGGER ON CATEGORY 16 DROPDOWN
  if (typeof window.toggleCategory === 'function' && !window.__sivme_c16_hooked) {
    window.__sivme_c16_hooked = true;
    var origToggle = window.toggleCategory;
    window.toggleCategory = function (id) {
      if (id === '16' || id === 'c16') {
        // Handled exclusively by SIVME cat-16 adapter to prevent open-close clashing
        return;
      }
      return origToggle.apply(this, arguments);
    };
  }

  // 2. BI-DIRECTIONAL PARENT SYNC
  function syncCategory16Parent() {
    var core = getCore();
    if (!core) return;
    var subUrns = ['rm:cat:16:sub:16-1', 'rm:cat:16:sub:16-2', 'rm:cat:16:sub:16-3'];
    var allLive = true;
    for (var i = 0; i < subUrns.length; i++) {
      if (!core.getUrnVisibility(subUrns[i])) {
        allLive = false;
        break;
      }
    }
    core.setUrnVisibility('rm:cat:16', allLive, 'घर व मकान');
  }

  function auditCategory16() {
    var core = getCore();
    if (!core || !core.isConsoleAuthorized) return;
    var isAuth = core.isConsoleAuthorized();

    // 3. SINGLE-TAP SOVEREIGN ACCORDION (1-Tap Smooth Open/Close)
    var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
    if (c16) {
      var c16Header = c16.querySelector(':scope > div:first-child');
      if (c16Header && c16Header.getAttribute('data-sivme-c16-bound') !== 'true') {
        c16Header.setAttribute('data-sivme-c16-bound', 'true');

        if (c16Header.hasAttribute('onclick')) c16Header.removeAttribute('onclick');
        c16Header.querySelectorAll('[onclick]').forEach(function (el) {
          el.removeAttribute('onclick');
        });

        c16Header.addEventListener('click', function (e) {
          if (e.target.closest('.sivme-inline-badge')) return;
          if (e.cancelable) e.preventDefault();
          e.stopPropagation();

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
        }, true);
      }
    }

    // 4. SUB-SERVICES 16-1, 16-2, 16-3: GUARANTEED 1-TAP VISIBILITY TOGGLE
    var sub16Cards = document.querySelectorAll('#sub-c16 > div');
    sub16Cards.forEach(function (subCard, idx) {
      var subNum = idx + 1;
      var subUrn = 'rm:cat:16:sub:16-' + subNum;
      var subLabelEl = subCard.querySelector('.text-xs') || subCard;
      var subLabel = subLabelEl ? subLabelEl.textContent.trim() : ('16-' + subNum + ' सेवा');

      if (!subCard.hasAttribute('data-sov-urn')) {
        subCard.setAttribute('data-sov-urn', subUrn);
        subCard.setAttribute('data-sov-label', subLabel);
      }

      var isVis = core.getUrnVisibility(subUrn);

      if (!isAuth) {
        if (!isVis) {
          subCard.classList.add('sivme-public-hidden');
          subCard.style.setProperty('display', 'none', 'important');
        } else {
          subCard.classList.remove('sivme-public-hidden');
          subCard.style.removeProperty('display');
        }
        var oldBadge = subCard.querySelector(':scope > .sivme-inline-badge');
        if (oldBadge) oldBadge.remove();
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

      // SINGLE-TAP CAPTURE DISPATCHER
      if (subCard.getAttribute('data-sivme-tap-active') !== 'true') {
        subCard.setAttribute('data-sivme-tap-active', 'true');

        subCard.addEventListener('click', function (e) {
          if (!core.isConsoleAuthorized()) return;

          // Check if user specifically tapped the Action Button ("खोलें" / "जल्द उपलब्ध")
          var actionBtn = e.target.closest('button, a');
          var isCardLive = core.getUrnVisibility(subUrn);

          // If the card is Live AND user tapped specifically on the action button: Run native action!
          if (actionBtn && isCardLive) {
            return;
          }

          // Otherwise (Card body, text, icon, badge, or dormant button tapped): STRICT 1-TAP TOGGLE!
          if (e.cancelable) e.preventDefault();
          e.stopPropagation();

          var curVis = core.getUrnVisibility(subUrn);
          var nextVis = !curVis;

          core.setUrnVisibility(subUrn, nextVis, subLabel);

          // Instant Bi-Directional Parent Cascade
          syncCategory16Parent();

          // Instant UI Re-Audit
          core.applyInSituAudit();
        }, true);
      }
    });

    syncCategory16Parent();
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
