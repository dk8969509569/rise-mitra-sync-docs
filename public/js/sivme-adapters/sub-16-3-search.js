/**
 * RISE MITRA — SIVME 16-3 RENTAL SEARCH ADAPTER
 * TARGET: 16-3 Inner Filters (Omnibox, State, District, Budget Slider, Submeter), 7 Listings & Auto-Collapse
 * GOVERNANCE: GATE-23.5 | ZEL SPECIFICATION
 * DUAL-FOLDER REFS: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) / Folder B (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 */

(function () {
  'use strict';

  function getCore() {
    return window.RM_SIVME || null;
  }

  function audit16_3Search() {
    var core = getCore();
    if (!core || !core.isConsoleAuthorized) return;
    var isAuth = core.isConsoleAuthorized();

    var filterItems = [];
    function matchFilter(el, urn, label) {
      if (!el) return;
      el.setAttribute('data-sov-urn', urn);
      el.setAttribute('data-sov-label', label);
      filterItems.push({ el: el, urn: urn, label: label });
    }

    // 1. Smart Omnibox
    try {
      var omni = document.querySelector('#rm-search-locality, #smartOmniboxGroup, #smartOmnibox, input[placeholder*="लालपुर"], input[placeholder*="8340"], input[placeholder*="Lalpur"]');
      if (omni) {
        var omniTarget = omni.closest('.space-y-2, .mb-4, .form-group') || omni.parentElement;
        matchFilter(omniTarget, 'rm:cat:16:sub:16-3:elem:smart_omnibox', 'स्मार्ट खोज');
      }
    } catch (_) {}

    // 2. State Filter
    try {
      var stateSelect = document.querySelector('#rm-cat16-search-state, #stateFilterGroup, select[id*="state"]');
      if (!stateSelect) {
        document.querySelectorAll('select').forEach(function (s) {
          if ((s.textContent || '').indexOf('राज्य') !== -1 || (s.textContent || '').indexOf('India') !== -1) stateSelect = s;
        });
      }
      if (stateSelect) {
        var stateTarget = stateSelect.closest('div') || stateSelect.parentElement;
        matchFilter(stateTarget, 'rm:cat:16:sub:16-3:elem:state_filter', 'राज्य फ़िल्टर');
      }
    } catch (_) {}

    // 3. District Filter
    try {
      var distSelect = document.querySelector('#rm-cat16-search-district, #districtFilterGroup, select[id*="district"]');
      if (!distSelect) {
        document.querySelectorAll('select').forEach(function (s) {
          if (s !== stateSelect && ((s.textContent || '').indexOf('जिला') !== -1 || (s.textContent || '').indexOf('District') !== -1)) distSelect = s;
        });
      }
      if (distSelect) {
        var distTarget = distSelect.closest('div') || distSelect.parentElement;
        matchFilter(distTarget, 'rm:cat:16:sub:16-3:elem:district_filter', 'जिला फ़िल्टर');
      }
    } catch (_) {}

    // 4. Budget Slider Section
    try {
      var range = document.querySelector('input[type="range"]');
      if (range) {
        var rangeRow = range.closest('div');
        var budgetTarget = rangeRow ? (rangeRow.parentElement || rangeRow) : range.parentElement;
        matchFilter(budgetTarget, 'rm:cat:16:sub:16-3:elem:budget_slider', 'बजट स्लाइडर');
      }
    } catch (_) {}

    // 5. Sub-Meter Checkbox (Decoupled)
    try {
      var submeter = document.querySelector('#rm-search-submeter, input[type="checkbox"]');
      if (submeter) {
        var subTarget = submeter.closest('label') || submeter.parentElement;
        matchFilter(subTarget, 'rm:cat:16:sub:16-3:elem:submeter_checkbox', 'सब-मीटर फ़िल्टर');
      }
    } catch (_) {}

    // 6. Rental Listings (All 7 Cards)
    try {
      var listingHeading = null;
      var headings = document.querySelectorAll('div, h2, h3, h4, span');
      for (var h = 0; h < headings.length; h++) {
        var ht = (headings[h].textContent || '').trim();
        if (ht.indexOf('उपलब्ध आवास सूची') !== -1 && headings[h].children.length < 3) {
          listingHeading = headings[h];
          break;
        }
      }
      if (listingHeading) {
        var container = listingHeading.nextElementSibling || listingHeading.parentElement;
        if (container) {
          var allCards = container.querySelectorAll(':scope > div, .space-y-3 > div, .space-y-4 > div, div');
          var listingIdx = 1;
          allCards.forEach(function (card) {
            var cText = card.textContent || '';
            if ((cText.indexOf('/माह') !== -1 || cText.indexOf('डिपॉजिट') !== -1) && cText.indexOf('उपलब्ध आवास सूची') === -1 && card.children.length >= 2) {
              if (card.parentElement && (card.parentElement.textContent || '').indexOf('/माह') !== -1 && card.parentElement.children.length === 1) return;
              var lUrn = 'rm:cat:16:sub:16-3:listing:' + listingIdx;
              var titleEl = card.querySelector('.font-bold, h4, h3, div:first-child') || card;
              var cleanTitle = (titleEl ? titleEl.textContent.trim().split('\n')[0] : ('आवास ' + listingIdx)).replace(/[₹0-9,/माह]/g, '').trim().substring(0, 24);
              matchFilter(card, lUrn, cleanTitle || ('आवास ' + listingIdx));
              listingIdx++;
            }
          });
        }
      }
    } catch (_) {}

    // Process Badges and Visibility
    filterItems.forEach(function (item) {
      var isVis = core.getUrnVisibility(item.urn);
      if (!isAuth) {
        if (!isVis) {
          item.el.classList.add('sivme-public-hidden');
          item.el.style.setProperty('display', 'none', 'important');
        } else {
          item.el.classList.remove('sivme-public-hidden');
          item.el.style.removeProperty('display');
        }
        var oldB = item.el.querySelector(':scope > .sivme-inline-badge');
        if (oldB) oldB.remove();
        item.el.classList.remove('sivme-ghost-dormant', 'sivme-badge-anchor');
        return;
      }

      item.el.classList.remove('sivme-public-hidden');
      item.el.classList.add('sivme-badge-anchor');
      if (!isVis) {
        item.el.classList.add('sivme-ghost-dormant');
      } else {
        item.el.classList.remove('sivme-ghost-dormant');
      }
      core.mountInlineBadge(item.el, item.urn, isVis, item.label);
    });

    // 7. Smart Auto-Collapse in Public Mode
    try {
      var omniEl = document.querySelector('#rm-search-locality, input[placeholder*="लालपुर"], input[placeholder*="8340"]');
      if (omniEl) {
        var filterCard = omniEl.closest('.bg-slate-900, .bg-slate-800, .rounded-xl, .border, .p-4, .p-3') || omniEl.parentElement.parentElement;
        if (filterCard) {
          var innerUrns = [
            'rm:cat:16:sub:16-3:elem:smart_omnibox',
            'rm:cat:16:sub:16-3:elem:state_filter',
            'rm:cat:16:sub:16-3:elem:district_filter',
            'rm:cat:16:sub:16-3:elem:budget_slider',
            'rm:cat:16:sub:16-3:elem:submeter_checkbox'
          ];
          var allHidden = innerUrns.every(function (u) {
            return !core.getUrnVisibility(u);
          });

          if (!isAuth && allHidden) {
            filterCard.style.setProperty('display', 'none', 'important');
            filterCard.classList.add('sivme-public-hidden');
          } else {
            filterCard.style.removeProperty('display');
            filterCard.classList.remove('sivme-public-hidden');
          }
        }
      }
    } catch (_) {}
  }

  function register() {
    if (window.RM_SIVME && typeof window.RM_SIVME.registerAdapter === 'function') {
      window.RM_SIVME.registerAdapter('sub-16-3-search', audit16_3Search);
    } else {
      setTimeout(register, 50);
    }
  }
  register();
})();
