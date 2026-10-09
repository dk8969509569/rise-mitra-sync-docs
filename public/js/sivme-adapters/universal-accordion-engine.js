/**
 * RISE MITRA — UNIVERSAL ACCORDION & SUB-CARD ENGINE (SSOT)
 * MODULE        : Decoupled Accordion State Engine, Native Pass-Through & Sub-Card Boundary Guard
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/sivme-adapters/universal-accordion-engine.js
 * DUAL-FOLDER REFS:
 * Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 * Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var lastToggleTime = 0;

  function getCore() {
    return window.RM_SIVME || {
      applyInSituAudit: function () {},
      isConsoleAuthorized: function () { return false; }
    };
  }

  // 1. UNIVERSAL ACCORDION STATE CLEANER & SUB-CARD BOUNDARY GUARD
  function syncAccordionState(subContainer, isOpen) {
    if (!subContainer) return;

    // Strip conflicting inline display styles so Tailwind .hidden class controls state cleanly
    subContainer.style.removeProperty('display');

    if (!isOpen) {
      // Deep purge sub-card badges when accordion collapses to guarantee zero border/badge leakage
      subContainer.querySelectorAll('.sivme-notch-pill, .sivme-live-notch, .sivme-inline-badge').forEach(function (badge) {
        badge.remove();
      });
      subContainer.querySelectorAll('[data-sov-urn], .sivme-subcat-card, div').forEach(function (el) {
        el.classList.remove('sivme-ghost-dormant', 'sivme-ghost-live', 'is-live', 'is-hidden', 'sivme-badge-anchor');
        el.style.setProperty('outline', 'none', 'important');
      });
    }

    var core = getCore();
    if (typeof core.applyInSituAudit === 'function') {
      setTimeout(core.applyInSituAudit, 40);
      setTimeout(core.applyInSituAudit, 220);
    }
  }

  // 2. NATIVE PASS-THROUGH LISTENER (ZERO EVENT HIJACKING)
  document.addEventListener('click', function (e) {
    // SIVME notch badges clicks are strictly isolated
    if (e.target.closest('.sivme-notch-pill, .sivme-live-notch, .sivme-inline-badge')) return;

    var trigger = e.target.closest('.acc-arrow, [onclick*="toggleAccordion"], [data-cat-id] > div:first-child');
    if (!trigger) return;

    var parentCard = trigger.closest('[data-cat-id]');
    if (!parentCard) return;

    var catId = parentCard.getAttribute('data-cat-id');
    var subContainer = document.getElementById('sub-' + catId) || parentCard.querySelector('[id^="sub-"]');
    if (!subContainer) return;

    var now = Date.now();
    if (now - lastToggleTime < 180) return;
    lastToggleTime = now;

    // Remove conflicting inline display immediately
    subContainer.style.removeProperty('display');

    // Allow native app toggleAccordion logic to complete cleanly, then sync SIVME badges
    setTimeout(function () {
      var isHidden = subContainer.classList.contains('hidden') || subContainer.style.display === 'none';
      syncAccordionState(subContainer, !isHidden);
    }, 60);
  }, false);

  // 3. REAL-TIME DOM MUTATION OBSERVER FOR ALL CATEGORIES (01 TO 50)
  var accordionObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === 'attributes' && (mutation.attributeName === 'class' || mutation.attributeName === 'style')) {
        var target = mutation.target;
        if (target && target.id && target.id.indexOf('sub-') === 0) {
          if (target.style.display && target.style.display !== 'none') {
            target.style.removeProperty('display');
          }
        }
      }
    });
  });

  function initUniversalAccordionObserver() {
    document.querySelectorAll('[id^="sub-"]').forEach(function (sub) {
      accordionObserver.observe(sub, { attributes: true, attributeFilter: ['class', 'style'] });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUniversalAccordionObserver);
  } else {
    initUniversalAccordionObserver();
  }

  // 4. GLOBAL ENGINE REGISTRY EXPORT
  window.RM_ACCORDION_ENGINE = {
    syncAccordionState: syncAccordionState,
    initUniversalAccordionObserver: initUniversalAccordionObserver
  };
})();
