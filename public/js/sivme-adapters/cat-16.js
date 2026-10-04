/**
 * RISE MITRA — SIVME CATEGORY 16 ADAPTER
 * TARGET: Category 16 Accordion, 16-1, 16-2, 16-3 Sub-Cards & Seamless Opener
 * GOVERNANCE: GATE-23.5 | ZEL SPECIFICATION
 * DUAL-FOLDER REFS: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) / Folder B (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 */

(function () {
  'use strict';

  var lastAccordionToggleTime = 0;
  var lastUrnActionTimes = {};

  function getCore() {
    return window.RM_SIVME || null;
  }

  function auditCategory16() {
    var core = getCore();
    if (!core || !core.isConsoleAuthorized) return;
    var isAuth = core.isConsoleAuthorized();

    // 1. Infallible Category 16 Accordion Header Toggle
    var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
    if (c16) {
      var c16Header = c16.querySelector(':scope > div:first-child');
      if (c16Header && c16Header.getAttribute('data-sivme-toggle-bound') !== 'true') {
        c16Header.setAttribute('data-sivme-toggle-bound', 'true');
        c16Header.addEventListener('click', function (e) {
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
        }, true);
      }
    }

    // 2. Sub-Services 16-1, 16-2, 16-3 Resolution & Pure Pass-Through Opener
    var sub16Cards = document.querySelectorAll('#sub-c16 > div');
    sub16Cards.forEach(function (subCard, idx) {
      var subUrn = 'rm:cat:16:sub:16-' + (idx + 1);
      var subLabelEl = subCard.querySelector('.text-xs') || subCard;
      var subLabel = subLabelEl ? subLabelEl.textContent.trim() : ('16-' + (idx + 1) + ' सेवा');

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

      if (subCard.getAttribute('data-sivme-sub-bound') !== 'true') {
        subCard.setAttribute('data-sivme-sub-bound', 'true');
        subCard.addEventListener('click', function (e) {
          if (!core.isConsoleAuthorized()) return;

          var isDormant = subCard.classList.contains('sivme-ghost-dormant');
          var isBadgeClick = !!e.target.closest('.sivme-inline-badge');

          if (isDormant || isBadgeClick) {
            if (e.cancelable) e.preventDefault();
            e.stopPropagation();

            var now = Date.now();
            if (now - (lastUrnActionTimes[subUrn] || 0) < 550) return;
            lastUrnActionTimes[subUrn] = now;

            var curVis = core.getUrnVisibility(subUrn);
            var targetVis = isDormant ? true : !curVis;
            core.setUrnVisibility(subUrn, targetVis, subLabel);

            if (targetVis) core.setUrnVisibility('rm:cat:16', true, 'घर व मकान');
            setTimeout(core.applyInSituAudit, 50);
            return;
          }

          // Delegate to Native Open Action without closing catalog
          var openTrigger = subCard.querySelector('button, a, [onclick]');
          if (openTrigger && e.target !== openTrigger && !openTrigger.contains(e.target)) {
            openTrigger.click();
          }
          setTimeout(core.applyInSituAudit, 100);
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
