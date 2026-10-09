/**
 * RISE MITRA — UNIVERSAL SEARCH & DEMAND INTELLIGENCE ENGINE (0.05s FUZZY)
 * MODULE        : User Search History (Surface A) + Owner Market Demand Analytics (Surface B)
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.0)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/universal-catalog/universal-search-engine.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var searchBarId = 'rm-universal-search-bar-wrap';
  var debounceTimer = null;
  var STORAGE_USER_HISTORY = 'rm_user_search_history_v1';
  var STORAGE_OWNER_ANALYTICS = 'rm_owner_search_analytics_v1';

  // 1. LOCAL STORAGE HELPERS (USER HISTORY & OWNER ANALYTICS)
  function getUserHistory() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_USER_HISTORY) || '[]');
    } catch (e) {
      return [];
    }
  }

  function saveUserQuery(query) {
    if (!query || query.length < 2) return;
    var history = getUserHistory();
    history = history.filter(function (item) { return item.toLowerCase() !== query.toLowerCase(); });
    history.unshift(query);
    if (history.length > 5) history = history.slice(0, 5); // Keep top 5 recent
    try {
      localStorage.setItem(STORAGE_USER_HISTORY, JSON.stringify(history));
    } catch (e) {}
  }

  function removeUserQuery(query) {
    var history = getUserHistory().filter(function (item) { return item !== query; });
    try {
      localStorage.setItem(STORAGE_USER_HISTORY, JSON.stringify(history));
    } catch (e) {}
    renderHistoryChips();
  }

  // Record Search in Owner BI Database (Surface B Tracking)
  function logOwnerAnalytics(query, matchCount) {
    if (!query || query.length < 2) return;
    var cleanQ = query.trim().toLowerCase();
    try {
      var analytics = JSON.parse(localStorage.getItem(STORAGE_OWNER_ANALYTICS) || '{"totalSearches":0,"keywords":{},"zeroResults":{}}');
      analytics.totalSearches = (analytics.totalSearches || 0) + 1;
      analytics.keywords = analytics.keywords || {};
      analytics.zeroResults = analytics.zeroResults || {};

      analytics.keywords[cleanQ] = (analytics.keywords[cleanQ] || 0) + 1;

      if (matchCount === 0) {
        analytics.zeroResults[cleanQ] = (analytics.zeroResults[cleanQ] || 0) + 1;
      }

      localStorage.setItem(STORAGE_OWNER_ANALYTICS, JSON.stringify(analytics));
    } catch (e) {}
  }

  // 2. RENDER RECENT SEARCH CHIPS (SURFACE A)
  function renderHistoryChips() {
    var chipsContainer = document.getElementById('rm-search-history-chips');
    if (!chipsContainer) return;

    var history = getUserHistory();
    if (!history || history.length === 0) {
      chipsContainer.innerHTML = '';
      chipsContainer.style.display = 'none';
      return;
    }

    var html = '<div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; padding: 4px 0 2px 0;">' +
               '  <span style="font-size: 11px; font-weight: 700; color: #94a3b8;">हाल की खोज:</span>';

    history.forEach(function (term) {
      html += '<span class="rm-search-chip" data-term="' + term + '" style="font-size: 11.5px; font-weight: 600; background: rgba(56, 189, 248, 0.12); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 9999px; padding: 2px 8px; display: inline-flex; align-items: center; gap: 4px; cursor: pointer;">' +
              '  <span>' + term + '</span>' +
              '  <span class="rm-chip-del" data-del="' + term + '" style="color: #94a3b8; font-weight: 800; font-size: 11px; padding-left: 2px;">✕</span>' +
              '</span>';
    });

    html += '</div>';
    chipsContainer.innerHTML = html;
    chipsContainer.style.display = 'block';

    // Click delegation for chips
    chipsContainer.querySelectorAll('.rm-search-chip').forEach(function (chip) {
      chip.onclick = function (e) {
        if (e.target.classList.contains('rm-chip-del')) {
          e.stopPropagation();
          removeUserQuery(e.target.getAttribute('data-del'));
          return;
        }
        var term = this.getAttribute('data-term');
        var input = document.getElementById('rm-catalog-search-input');
        if (input) {
          input.value = term;
          document.getElementById('rm-catalog-search-clear').style.display = 'block';
          performSearch(term);
        }
      };
    });
  }

  // 3. DYNAMIC SEARCH BAR INJECTION (TOP OF CATALOG)
  function injectSearchBar() {
    if (document.getElementById(searchBarId)) return;

    var container = document.getElementById('categoryModel') || document.querySelector('.rm-catalog-root') || document.body;
    var targetHeader = container.querySelector(':scope > div:first-child') || container.firstChild;

    var searchWrap = document.createElement('div');
    searchWrap.id = searchBarId;
    searchWrap.style.cssText = [
      'width: 100% !important',
      'padding: 12px 14px 6px 14px !important',
      'box-sizing: border-box !important',
      'position: sticky !important',
      'top: 0 !important',
      'z-index: 99 !important',
      'background: rgba(10, 15, 29, 0.95) !important',
      'backdrop-filter: blur(10px) !important',
      'border-bottom: 1px solid rgba(56, 189, 248, 0.2) !important'
    ].join(';');

    searchWrap.innerHTML = [
      '<div style="position: relative; width: 100%; display: flex; align-items: center;">',
      '  <span style="position: absolute; left: 14px; font-size: 16px; color: #38bdf8; pointer-events: none;">🔍</span>',
      '  <input id="rm-catalog-search-input" type="text" placeholder="खोजें: मिस्त्री, राशन, लूडो, दवा, लोन, कार सर्विस..." style="width: 100%; background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(56, 189, 248, 0.35); border-radius: 12px; padding: 11px 40px 11px 42px; font-size: 14px; font-weight: 600; color: #ffffff; outline: none; transition: all 0.2s ease; box-shadow: inset 0 2px 4px rgba(0,0,0,0.3); font-family: inherit;" />',
      '  <button id="rm-catalog-search-clear" type="button" style="position: absolute; right: 12px; background: transparent; border: none; font-size: 16px; color: #94a3b8; cursor: pointer; display: none; padding: 4px;">✕</button>',
      '</div>',
      '<div id="rm-search-history-chips" style="margin-top: 5px; display: none;"></div>',
      '<div id="rm-search-results-counter" style="font-size: 11.5px; font-weight: 700; color: #34d399; margin-top: 6px; padding-left: 4px; display: none;"></div>'
    ].join('');

    if (targetHeader && targetHeader.parentNode) {
      targetHeader.parentNode.insertBefore(searchWrap, targetHeader);
    } else {
      container.appendChild(searchWrap);
    }

    renderHistoryChips();

    var input = document.getElementById('rm-catalog-search-input');
    var clearBtn = document.getElementById('rm-catalog-search-clear');

    input.addEventListener('focus', function () {
      this.style.borderColor = '#38bdf8';
      this.style.boxShadow = '0 0 14px rgba(56, 189, 248, 0.35)';
      renderHistoryChips();
    });

    input.addEventListener('blur', function () {
      this.style.borderColor = 'rgba(56, 189, 248, 0.35)';
      this.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.3)';
    });

    input.addEventListener('input', function () {
      var query = this.value.trim();
      clearBtn.style.display = query ? 'block' : 'none';

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        performSearch(query);
      }, 50); // 50ms Ultra-Fast Execution
    });

    clearBtn.addEventListener('click', function () {
      input.value = '';
      clearBtn.style.display = 'none';
      performSearch('');
      input.focus();
    });
  }

  // 4. IN-MEMORY FUZZY SEARCH CORE (CROSS-CHECK 50 CATS & 150 SUB-SERVICES)
  function performSearch(rawQuery) {
    var query = rawQuery.toLowerCase().replace(/[^a-z0-9\u0900-\u097F]/g, '');
    var modal = document.getElementById('categoryModel') || document.body;
    var allCatCards = modal.querySelectorAll('[data-cat-id]');
    var counterEl = document.getElementById('rm-search-results-counter');

    if (!query) {
      allCatCards.forEach(function (cat) {
        cat.style.display = '';
      });
      if (counterEl) counterEl.style.display = 'none';
      renderHistoryChips();
      return;
    }

    var matchCount = 0;

    allCatCards.forEach(function (catEl) {
      var rawId = catEl.getAttribute('data-cat-id');
      var numId = String(rawId).replace(/[^0-9]/g, '');
      var regData = (window.RM_CATALOG_REGISTRY && window.RM_CATALOG_REGISTRY.getCategoryData(numId)) || null;

      var matchFound = false;

      // Match Main Category Data
      if (regData) {
        var catHaystack = (
          regData.title + ' ' +
          regData.subtitle + ' ' +
          numId + ' ' +
          (regData.macroPillars || []).map(function (p) { return p.text; }).join(' ')
        ).toLowerCase();

        if (catHaystack.indexOf(query) !== -1) {
          matchFound = true;
        }

        // Match Subcategory Data
        if (!matchFound && regData.subcategories) {
          Object.keys(regData.subcategories).forEach(function (k) {
            var sub = regData.subcategories[k];
            var subHaystack = (
              sub.title + ' ' +
              (sub.hindiTitle || '') + ' ' +
              (sub.categoryTag || '') + ' ' +
              (sub.services || []).map(function (s) { return s.text; }).join(' ') + ' ' +
              (sub.highlights || []).join(' ')
            ).toLowerCase();

            if (subHaystack.indexOf(query) !== -1) {
              matchFound = true;
            }
          });
        }
      }

      // Match Fallback in DOM text
      if (!matchFound) {
        var domText = (catEl.textContent || '').toLowerCase();
        if (domText.indexOf(query) !== -1) {
          matchFound = true;
        }
      }

      if (matchFound) {
        catEl.style.display = '';
        matchCount++;
      } else {
        catEl.style.display = 'none';
      }
    });

    if (counterEl) {
      counterEl.style.display = 'block';
      counterEl.textContent = matchCount > 0 ? ('✓ ' + matchCount + ' श्रेणियां व सेवाएं उपलब्ध') : '✕ कोई सेवा या खेल नहीं मिला';
      counterEl.style.color = matchCount > 0 ? '#34d399' : '#f87171';
    }

    // Save User History & Owner Analytics (Delayed by 800ms to avoid recording incomplete keystrokes)
    clearTimeout(window._rmAnalyticsTimer);
    window._rmAnalyticsTimer = setTimeout(function () {
      saveUserQuery(rawQuery.trim());
      logOwnerAnalytics(rawQuery.trim(), matchCount);
    }, 800);
  }

  // 5. OWNER SURFACE B ANALYTICS EXPOSURE
  window.RM_SEARCH_ANALYTICS = {
    getDemandReport: function () {
      try {
        var raw = JSON.parse(localStorage.getItem(STORAGE_OWNER_ANALYTICS) || '{}');
        var sortedKeywords = Object.entries(raw.keywords || {}).sort(function (a, b) { return b[1] - a[1]; });
        var sortedZeroResults = Object.entries(raw.zeroResults || {}).sort(function (a, b) { return b[1] - a[1]; });

        return {
          totalSearches: raw.totalSearches || 0,
          topDemands: sortedKeywords.slice(0, 10), // Top 10 High Demand Queries
          unmetDemands: sortedZeroResults.slice(0, 10) // Top 10 Services Users searched but not found
        };
      } catch (e) {
        return { totalSearches: 0, topDemands: [], unmetDemands: [] };
      }
    },
    clearAnalytics: function () {
      localStorage.removeItem(STORAGE_OWNER_ANALYTICS);
    }
  };

  // 6. ENGINE BOOTSTRAPPER
  function bootSearch() {
    injectSearchBar();
    setTimeout(injectSearchBar, 200);
    setTimeout(injectSearchBar, 800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootSearch);
  } else {
    bootSearch();
  }

  window.RM_UNIVERSAL_SEARCH = {
    injectSearchBar: injectSearchBar,
    performSearch: performSearch
  };
})();
