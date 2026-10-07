/**
 * RISE MITRA — SIVME SUB-CATEGORY 16-2 ADAPTER
 * TARGET       : Sub-Service 16-2 (किराया बहीखाता - Rental Ledger)
 * URN          : rm:cat:16:sub:16-2
 * SPECIFICATION: Zero-Element-Loss (ZEL) Micro-Modular Architecture
 * GOVERNANCE   : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var URN = 'rm:cat:16:sub:16-2';
  var LABEL = 'किराया बहीखाता (Rental Ledger)';

  function getSubCard() {
    var cards = document.querySelectorAll('#sub-c16 > div');
    for (var i = 0; i < cards.length; i++) {
      var txt = (cards[i].textContent || '').trim();
      if (txt.indexOf('किराया') !== -1 || txt.indexOf('बहीखाता') !== -1) {
        return cards[i];
      }
    }
    return cards[1] || null;
  }

  function auditSub16_2() {
    var core = window.RM_SIVME;
    if (!core || !core.isConsoleAuthorized) return;
    var isAuth = core.isConsoleAuthorized();

    var card = getSubCard();
    if (!card) return;

    card.setAttribute('data-sov-urn', URN);
    card.setAttribute('data-sov-label', LABEL);

    var isVis = core.getUrnVisibility(URN);

    if (!isAuth) {
      if (!isVis) {
        card.classList.add('sivme-public-hidden');
        card.style.setProperty('display', 'none', 'important');
      } else {
        card.classList.remove('sivme-public-hidden');
        card.style.removeProperty('display');
      }
      var oldBadge = card.querySelector(':scope > .sivme-inline-badge');
      if (oldBadge) oldBadge.remove();
      card.classList.remove('sivme-ghost-dormant', 'sivme-badge-anchor');
      return;
    }

    card.classList.remove('sivme-public-hidden');
    card.classList.add('sivme-badge-anchor');

    if (!isVis) {
      card.classList.add('sivme-ghost-dormant');
    } else {
      card.classList.remove('sivme-ghost-dormant');
    }

    core.mountInlineBadge(card, URN, isVis, LABEL);

    // Single-Tap Dispatcher for Sub-Card 16-2
    if (card.getAttribute('data-sivme-sub2-bound') !== 'true') {
      card.setAttribute('data-sivme-sub2-bound', 'true');

      card.addEventListener('click', function (e) {
        if (!core.isConsoleAuthorized()) return;
        if (e.target.closest('.sivme-inline-badge')) return;

        var actionBtn = e.target.closest('button, a');
        var isLive = core.getUrnVisibility(URN);

        // If Live and user specifically clicked "खोलें", allow default modal opener
        if (actionBtn && isLive) {
          return;
        }

        // Otherwise (Card body, text or dormant card clicked): Single-tap toggle!
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();

        var nextVis = !isLive;
        core.setUrnVisibility(URN, nextVis, LABEL);
        core.applyInSituAudit();
      }, false);
    }
  }

  function register() {
    if (window.RM_SIVME && typeof window.RM_SIVME.registerAdapter === 'function') {
      window.RM_SIVME.registerAdapter('sub-16-2', auditSub16_2);
    } else {
      setTimeout(register, 50);
    }
  }
  register();
})();
