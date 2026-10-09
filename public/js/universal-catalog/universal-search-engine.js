/**
 * RISE MITRA — UNIVERSAL SEARCH & DEMAND INTELLIGENCE ENGINE (0.05s FUZZY)
 * MODULE        : Surface-A Vertical History + Surface-B 3-Tier Robust BI Demand Widget
 * SPECIFICATION : ENTERPRISE ARCHITECTURAL SPECIFICATION & FUTURE-PROOF ROADMAP (v2.4.4 ZEL)
 * GOVERNANCE    : GATE-23.5 | DEC-RM-BRANCH-GOV-20261004 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : public/js/universal-catalog/universal-search-engine.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var debounceTimer = null;
  var STORAGE_USER_HISTORY = 'rm_user_search_history_v1';
  var STORAGE_OWNER_ANALYTICS = 'rm_owner_search_analytics_v1';

  function getSafeEntries(obj) {
    if (!obj) return [];
    if (Object.entries) return Object.entries(obj);
    var entries = [];
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        entries.push([key, obj[key]]);
      }
    }
    return entries;
  }

  // 1. LOCAL STORAGE HELPERS
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
    if (history.length > 5) history = history.slice(0, 5);
    try {
      localStorage.setItem(STORAGE_USER_HISTORY, JSON.stringify(history));
    } catch (e) {}
  }

  function removeUserQuery(query) {
    var history = getUserHistory().filter(function (item) { return item !== query; });
    try {
      localStorage.setItem(STORAGE_USER_HISTORY, JSON.stringify(history));
    } catch (e) {}
    renderVerticalHistoryList();
  }

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
      renderSurfaceBDemandWidget();
    } catch (e) {}
  }

  // 2. RENDER VERTICAL SEARCH HISTORY DROPDOWN (SURFACE A)
  function renderVerticalHistoryList() {
    var input = findSearchInput();
    if (!input || !input.parentNode) return;

    var listContainer = document.getElementById('rm-search-history-dropdown');
    if (!listContainer) {
      listContainer = document.createElement('div');
      listContainer.id = 'rm-search-history-dropdown';
      listContainer.style.cssText = [
        'width: 100%',
        'background: #0f172a',
        'border: 1px solid rgba(56, 189, 248, 0.35)',
        'border-radius: 12px',
        'margin-top: 6px',
        'box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5)',
        'overflow: hidden',
        'display: none',
        'z-index: 9999'
      ].join(';');

      input.parentNode.appendChild(listContainer);
    }

    var history = getUserHistory();
    if (!history || history.length === 0) {
      listContainer.innerHTML = '';
      listContainer.style.display = 'none';
      return;
    }

    var html = '<div style="padding: 8px 12px 6px 12px; font-size: 11px; font-weight: 700; color: #94a3b8; border-bottom: 1px solid rgba(255,255,255,0.06);">' +
               '  🕒 हाल की खोजें (Recent Searches)' +
               '</div>' +
               '<div style="display: flex; flex-direction: column;">';

    history.forEach(function (term) {
      html += '<div class="rm-history-row" data-term="' + term + '" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer; transition: background 0.15s ease;">' +
              '  <div style="display: flex; align-items: center; gap: 10px; color: #e2e8f0; font-size: 13.5px; font-weight: 600;">' +
              '    <span style="color: #64748b; font-size: 14px;">🕒</span>' +
              '    <span>' + term + '</span>' +
              '  </div>' +
              '  <span class="rm-history-del" data-del="' + term + '" style="color: #64748b; font-weight: 700; font-size: 13px; padding: 4px 8px; border-radius: 4px;">✕</span>' +
              '</div>';
    });

    html += '</div>';
    listContainer.innerHTML = html;
    listContainer.style.display = 'block';

    listContainer.querySelectorAll('.rm-history-row').forEach(function (row) {
      row.onclick = function (e) {
        if (e.target.classList.contains('rm-history-del')) {
          e.stopPropagation();
          removeUserQuery(e.target.getAttribute('data-del'));
          return;
        }
        var term = this.getAttribute('data-term');
        if (input) {
          input.value = term;
          hideHistoryDropdown();
          performSearch(term);
        }
      };
    });
  }

  function hideHistoryDropdown() {
    var listContainer = document.getElementById('rm-search-history-dropdown');
    if (listContainer) listContainer.style.display = 'none';
  }

  // 3. FIND & ATTACH ENGINE TO EXISTING APP SEARCH BAR
  function findSearchInput() {
    return document.getElementById('rm-catalog-search-input') || 
           document.querySelector('input[placeholder*="श्रेणी"]') || 
           document.querySelector('input[placeholder*="खोजें"]') || 
           document.querySelector('input[type="text"]');
  }

  function setupExistingSearchBar() {
    var topDuplicate = document.getElementById('rm-universal-search-bar-wrap');
    if (topDuplicate) topDuplicate.remove();

    var input = findSearchInput();
    if (!input) return;

    input.id = 'rm-catalog-search-input';
    input.placeholder = 'खोजें: मिस्त्री, राशन, लूडो, दवा, लोन, कार सर्विस...';

    if (!input.dataset.rmAttached) {
      input.dataset.rmAttached = 'true';

      input.addEventListener('focus', function () {
        if (!this.value.trim()) {
          renderVerticalHistoryList();
        }
      });

      input.addEventListener('input', function () {
        var query = this.value.trim();
        if (query) {
          hideHistoryDropdown();
        } else {
          renderVerticalHistoryList();
        }

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function () {
          performSearch(query);
        }, 50);
      });

      document.addEventListener('click', function (e) {
        var dropdown = document.getElementById('rm-search-history-dropdown');
        if (dropdown && !input.contains(e.target) && !dropdown.contains(e.target)) {
          hideHistoryDropdown();
        }
      });
    }
  }

  // 4. IN-MEMORY FUZZY SEARCH CORE
  function performSearch(rawQuery) {
    var query = rawQuery.toLowerCase().replace(/[^a-z0-9\u0900-\u097F]/g, '');
    var modal = document.getElementById('categoryModel') || document.body;
    var allCatCards = modal.querySelectorAll('[data-cat-id]');
    var counterEl = document.getElementById('rm-search-results-counter');

    if (!counterEl && findSearchInput() && findSearchInput().parentNode) {
      counterEl = document.createElement('div');
      counterEl.id = 'rm-search-results-counter';
      counterEl.style.cssText = 'font-size: 11.5px; font-weight: 700; color: #34d399; margin-top: 6px; padding-left: 4px; display: none;';
      findSearchInput().parentNode.appendChild(counterEl);
    }

    if (!query) {
      allCatCards.forEach(function (cat) { cat.style.display = ''; });
      if (counterEl) counterEl.style.display = 'none';
      return;
    }

    var matchCount = 0;

    allCatCards.forEach(function (catEl) {
      var rawId = catEl.getAttribute('data-cat-id');
      var numId = String(rawId).replace(/[^0-9]/g, '');
      var regData = (window.RM_CATALOG_REGISTRY && window.RM_CATALOG_REGISTRY.getCategoryData(numId)) || null;

      var matchFound = false;

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

    clearTimeout(window._rmAnalyticsTimer);
    window._rmAnalyticsTimer = setTimeout(function () {
      saveUserQuery(rawQuery.trim());
      logOwnerAnalytics(rawQuery.trim(), matchCount);
    }, 800);
  }

  // 5. 3-TIER BULLETPROOF DOM MOUNT ENGINE FOR SURFACE-B
  function findSurfaceBTarget() {
    var allDivs = document.querySelectorAll('div, section, main');

    // Tier 1: Look for In-Situ Controller card directly
    for (var i = 0; i < allDivs.length; i++) {
      var txt = (allDivs[i].innerText || allDivs[i].textContent || '');
      if (txt.indexOf('IN-SITU CONTROLLER') !== -1 || txt.indexOf('SURFACE-A VISUAL') !== -1) {
        var node = allDivs[i];
        while (node.parentElement && node.parentElement !== document.body) {
          var pText = (node.parentElement.innerText || node.parentElement.textContent || '');
          if (pText.indexOf('KILL-SWITCH') !== -1 || pText.indexOf('INVARIANT CONTROLS') !== -1) {
            return { target: node, insertBefore: true };
          }
          node = node.parentElement;
        }
      }
    }

    // Tier 2: Look for Kill-Switch Subsystem card
    for (var j = 0; j < allDivs.length; j++) {
      var kText = (allDivs[j].innerText || allDivs[j].textContent || '');
      if (kText.indexOf('KILL-SWITCH SUBSYSTEM') !== -1) {
        var kNode = allDivs[j];
        while (kNode.parentElement && kNode.parentElement !== document.body) {
          var kpText = (kNode.parentElement.innerText || kNode.parentElement.textContent || '');
          if (kpText.indexOf('SOVEREIGN CONSOLE') !== -1 || kpText.indexOf('INVARIANT CONTROLS') !== -1) {
            return { target: kNode, insertBefore: true };
          }
          kNode = kNode.parentElement;
        }
      }
    }

    // Tier 3: Direct Sovereign Console Main Container fallback
    for (var m = 0; m < allDivs.length; m++) {
      var cText = (allDivs[m].innerText || allDivs[m].textContent || '');
      if (cText.indexOf('SOVEREIGN CONSOLE') !== -1 && cText.indexOf('ACTIVE INVARIANT CONTROLS') !== -1) {
        return { target: allDivs[m], insertBefore: false };
      }
    }

    return null;
  }

  // 6. RENDER SURFACE-B RANKED DEMAND BI WIDGET
  function renderSurfaceBDemandWidget() {
    var bodyText = document.body ? (document.body.innerText || document.body.textContent || '') : '';
    var isSurfaceB = bodyText.indexOf('SOVEREIGN CONSOLE') !== -1 || 
                     bodyText.indexOf('INVARIANT CONTROLS') !== -1 ||
                     bodyText.indexOf('KILL-SWITCH') !== -1;

    if (!isSurfaceB) return;

    var mountPoint = findSurfaceBTarget();
    if (!mountPoint || !mountPoint.target) return;

    var targetEl = mountPoint.target;
    var surfaceBHost = document.getElementById('rm-surface-b-demand-widget-wrap');

    if (!surfaceBHost) {
      surfaceBHost = document.createElement('div');
      surfaceBHost.id = 'rm-surface-b-demand-widget-wrap';
      surfaceBHost.style.cssText = 'width: 100% !important; box-sizing: border-box !important; margin: 16px 0 !important; display: block !important; position: relative !important; z-index: 50 !important;';
    }

    // Mount inside DOM tree
    if (mountPoint.insertBefore) {
      if (surfaceBHost.nextSibling !== targetEl || surfaceBHost.parentNode !== targetEl.parentNode) {
        targetEl.parentNode.insertBefore(surfaceBHost, targetEl);
      }
    } else {
      if (surfaceBHost.parentNode !== targetEl) {
        targetEl.appendChild(surfaceBHost);
      }
    }

    var report = window.RM_SEARCH_ANALYTICS ? window.RM_SEARCH_ANALYTICS.getDemandReport() : { totalSearches: 0, topDemands: [], unmetDemands: [] };

    var topDemandsHtml = report.topDemands.length > 0 
      ? report.topDemands.map(function(item, idx) {
          return '<div style="display: flex; align-items: center; justify-content: space-between; background: rgba(30, 41, 59, 0.85); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 8px 12px; margin-bottom: 6px; font-size: 13px;">' +
                 '  <div style="display: flex; align-items: center; gap: 10px; color: #f8fafc; font-weight: 600;">' +
                 '    <span style="color: #38bdf8; font-weight: 800; font-size: 11px; background: rgba(56, 189, 248, 0.15); padding: 2px 7px; border-radius: 4px;">#' + (idx + 1) + '</span>' +
                 '    <span>' + item[0] + '</span>' +
                 '  </div>' +
                 '  <span style="color: #38bdf8; font-weight: 800; background: rgba(56, 189, 248, 0.2); padding: 2px 9px; border-radius: 9999px; font-size: 11.5px;">' + item[1] + ' खोजें</span>' +
                 '</div>';
        }).join('')
      : '<div style="color: #64748b; font-size: 12px; padding: 10px; text-align: center; background: rgba(30, 41, 59, 0.4); border-radius: 8px;">अभी तक कोई खोज दर्ज नहीं हुई है</div>';

    var unmetDemandsHtml = report.unmetDemands.length > 0 
      ? report.unmetDemands.map(function(item, idx) {
          return '<div style="display: flex; align-items: center; justify-content: space-between; background: rgba(30, 41, 59, 0.85); border: 1px solid rgba(248, 113, 113, 0.25); border-radius: 8px; padding: 8px 12px; margin-bottom: 6px; font-size: 13px;">' +
                 '  <div style="display: flex; align-items: center; gap: 10px; color: #f8fafc; font-weight: 600;">' +
                 '    <span style="color: #f87171; font-weight: 800; font-size: 11px; background: rgba(248, 113, 113, 0.15); padding: 2px 7px; border-radius: 4px;">#' + (idx + 1) + '</span>' +
                 '    <span>⚠️ ' + item[0] + '</span>' +
                 '  </div>' +
                 '  <span style="color: #f87171; font-weight: 800; background: rgba(248, 113, 113, 0.2); padding: 2px 9px; border-radius: 9999px; font-size: 11.5px;">' + item[1] + ' बार नहीं मिला</span>' +
                 '</div>';
        }).join('')
      : '<div style="color: #34d399; font-size: 12px; padding: 10px; text-align: center; background: rgba(30, 41, 59, 0.4); border-radius: 8px;">✓ सभी खोजी गई सेवाएं उपलब्ध थीं</div>';

    surfaceBHost.innerHTML = [
      '<div style="background: #0f172a; border: 1.5px solid rgba(56, 189, 248, 0.35); border-radius: 16px; padding: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); font-family: inherit;">',
      '  <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; margin-bottom: 14px;">',
      '    <div style="display: flex; align-items: center; gap: 8px;">',
      '      <span style="font-size: 20px;">📊</span>',
      '      <div>',
      '        <div style="font-size: 13.5px; font-weight: 800; color: #f8fafc; letter-spacing: 0.5px;">SEARCH DEMAND INTELLIGENCE (SURFACE-B BI)</div>',
      '        <div style="font-size: 11px; color: #94a3b8; font-weight: 600;">ग्राहकों की वास्तविक मांग एवं अन-मैट बिज़नेस अवसर</div>',
      '      </div>',
      '    </div>',
      '    <span style="background: #0284c7; color: #ffffff; font-size: 11.5px; font-weight: 800; padding: 4px 10px; border-radius: 9999px;">' + report.totalSearches + ' कुल खोजें</span>',
      '  </div>',
      '  <div style="margin-bottom: 14px;">',
      '    <div style="font-size: 12px; font-weight: 700; color: #38bdf8; margin-bottom: 8px; display: flex; justify-content: space-between;">',
      '      <span>🔥 TOP 10 AVAILABLE DEMANDS (उपलब्ध सेवाएं)</span>',
      '      <span>आवृत्ति (Count)</span>',
      '    </div>',
      '    <div>' + topDemandsHtml + '</div>',
      '  </div>',
      '  <div>',
      '    <div style="font-size: 12px; font-weight: 700; color: #f87171; margin-bottom: 8px; display: flex; justify-content: space-between;">',
      '      <span>💡 TOP 10 UNAVAILABLE DEMANDS (बिज़नेस अवसर)</span>',
      '      <span>विफल संख्या</span>',
      '    </div>',
      '    <div>' + unmetDemandsHtml + '</div>',
      '  </div>',
      '</div>'
    ].join('');
  }

  // 7. OWNER SURFACE B ANALYTICS EXPOSURE
  window.RM_SEARCH_ANALYTICS = {
    getDemandReport: function () {
      try {
        var raw = JSON.parse(localStorage.getItem(STORAGE_OWNER_ANALYTICS) || '{}');
        var sortedKeywords = getSafeEntries(raw.keywords || {}).sort(function (a, b) { return b[1] - a[1]; });
        var sortedZeroResults = getSafeEntries(raw.zeroResults || {}).sort(function (a, b) { return b[1] - a[1]; });

        return {
          totalSearches: raw.totalSearches || 0,
          topDemands: sortedKeywords.slice(0, 10),
          unmetDemands: sortedZeroResults.slice(0, 10)
        };
      } catch (e) {
        return { totalSearches: 0, topDemands: [], unmetDemands: [] };
      }
    },
    clearAnalytics: function () {
      localStorage.removeItem(STORAGE_OWNER_ANALYTICS);
      renderSurfaceBDemandWidget();
    }
  };

  // 8. ENGINE BOOTSTRAPPER WITH RE-ANCHORING POLLING
  function bootSearch() {
    setupExistingSearchBar();
    renderSurfaceBDemandWidget();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootSearch);
  } else {
    bootSearch();
  }

  setInterval(function () {
    setupExistingSearchBar();
    renderSurfaceBDemandWidget();
  }, 800);

  window.RM_UNIVERSAL_SEARCH = {
    setupExistingSearchBar: setupExistingSearchBar,
    performSearch: performSearch,
    renderSurfaceBDemandWidget: renderSurfaceBDemandWidget
  };
})();
