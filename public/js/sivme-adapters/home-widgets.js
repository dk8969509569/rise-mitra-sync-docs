/**
 * RISE MITRA — SIVME MICRO-MODULAR ADAPTER
 * MODULE        : Home Screen Widgets & Action Buttons Adapter
 * SCOPE         : App Install, Global Search, RM CASH Atomic Card & Join Free Button
 * GOVERNANCE    : GATE-23.5 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : dk8969509569/rise-mitra-sync-docs (pre-main branch)
 */

(function () {
  'use strict';

  function cleanText(el) {
    if (!el) return '';
    var clone = el.cloneNode(true);
    var badges = clone.querySelectorAll('.sivme-inline-badge');
    badges.forEach(function (b) { b.remove(); });
    return (clone.textContent || '').trim();
  }

  function auditHomeWidgets() {
    if (!window.RM_SIVME) return;
    var isAuth = window.RM_SIVME.isConsoleAuthorized();

    // 1. App Install Button
    document.querySelectorAll('span, button, a').forEach(function (el) {
      if (cleanText(el).indexOf('ऐप इंस्टॉल') !== -1) {
        var target = el.closest('button, a, div[onclick]') || el;
        target.classList.add('sivme-btn-pill');
        if (typeof window.RM_SIVME.auditElement === 'function') {
          window.RM_SIVME.auditElement(target, 'rm:elem:app-install', 'ऐप इंस्टॉल बटन');
        }
      }
    });

    // 2. Global Search Box
    var searchBox = document.querySelector('input[placeholder*="खोजें"], input[placeholder*="search"]');
    if (searchBox) {
      var searchParent = searchBox.parentElement;
      if (searchParent) {
        searchParent.style.setProperty('overflow', 'visible', 'important');
        searchParent.classList.add('sivme-search-container');
        if (typeof window.RM_SIVME.auditElement === 'function') {
          window.RM_SIVME.auditElement(searchParent, 'rm:elem:home-search', 'ग्लोबल खोज बार');
        }
      }
    }

    // 3. RM CASH Atomic Card (No Nested Badges Inside)
    var allDivs = document.querySelectorAll('div, section');
    for (var d = 0; d < allDivs.length; d++) {
      var card = allDivs[d];
      var txt = cleanText(card);
      if (txt.indexOf('उपलब्ध शेष राशि (RM CASH)') !== -1 && txt.indexOf('खाता सक्रिय') !== -1 && card.offsetHeight > 140) {
        card.style.setProperty('overflow', 'visible', 'important');
        card.classList.add('sivme-cash-atomic-card');
        if (typeof window.RM_SIVME.auditElement === 'function') {
          window.RM_SIVME.auditElement(card, 'rm:card:rm-cash', 'RM CASH बहीखाता कार्ड');
        }

        // Clean any accidental inner badges
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
          if (typeof window.RM_SIVME.auditElement === 'function') {
            window.RM_SIVME.auditElement(jTarget, 'rm:elem:join-free', 'जुड़ना मुफ़्त बटन');
          }
          break;
        }
      }
    }
  }

  // Register with SIVME Core Engine
  function register() {
    if (window.RM_SIVME && typeof window.RM_SIVME.registerAdapter === 'function') {
      window.RM_SIVME.registerAdapter('home-widgets', auditHomeWidgets);
    } else {
      setTimeout(register, 40);
    }
  }

  register();
})();
