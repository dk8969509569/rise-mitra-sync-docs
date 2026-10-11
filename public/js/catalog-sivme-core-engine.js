/**
 * RISE MITRA — CATALOG SIVME CORE ENGINE (MODULE 1 OF 2)
 * MODULE        : Core State, Fail-Open Registry, SIVME Toggles & CSS Purity Shield
 * SPECIFICATION : FOLDER A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) | 14_04__EXT_005
 * GOVERNANCE    : GATE-16.6 • GATE-16.7 • GATE-25.0 | ZERO-ELEMENT-LOSS (ZEL VERIFIED)
 * REPO TARGET   : public/js/catalog-sivme-core-engine.js
 */

(function (window, document) {
  'use strict';

  // 1. CANONICAL 50 TAXONOMY IDS (33 Services + 17 Games)
  var CANONICAL_50_IDS = [
    'c01', 'c02', 'c03', 'c04', 'c05', 'c06', 'c07', 'c08', 'c09', 'c10',
    'c11', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17', 'c18', 'c19', 'c20',
    'c21', 'c22', 'c23', 'c24', 'c25', 'c26', 'c27', 'c28', 'c29', 'c30',
    'c31', 'c32', 'c33',
    'g34', 'g35', 'g36', 'g37', 'g38', 'g39', 'g40', 'g41', 'g42', 'g43',
    'g44', 'g45', 'g46', 'g47', 'g48', 'g49', 'g50'
  ];

  // 2. SOVEREIGN OWNER IN-SITU AUTHENTICATION GUARD
  function isOwnerInSituActive() {
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get('sov_mode') === 'in_situ' || params.get('sivme') === 'owner' || params.get('dev_auto') === '1') {
        sessionStorage.setItem('rm_sov_in_situ_session', 'SOV_ACTIVE_2026');
        localStorage.setItem('rm_sov_in_situ_session', 'SOV_ACTIVE_2026');
        return true;
      }
      var sToken = sessionStorage.getItem('rm_sov_in_situ_session') || localStorage.getItem('rm_sov_in_situ_session');
      if (sToken === 'SOV_ACTIVE_2026') return true;

      var regRaw = localStorage.getItem('rm_sovereign_visibility_registry_v1');
      if (regRaw) {
        var reg = JSON.parse(regRaw);
        if (reg && (reg.activeMode === 'in_situ_console' || reg.activeMode === 'owner')) return true;
      }
      return false;
    } catch (_) {
      return false;
    }
  }

  // 3. FAIL-OPEN REGISTRY SAFEGUARD (ANTI-BLANK SCREEN)
  function ensureFailOpenRegistry() {
    try {
      var rawActive = localStorage.getItem('rm_active_categories_v1');
      var activeList = [];
      if (rawActive) {
        try { activeList = JSON.parse(rawActive); } catch (_) { activeList = []; }
      }
      if (!Array.isArray(activeList) || activeList.length < 2) {
        localStorage.setItem('rm_active_categories_v1', JSON.stringify(CANONICAL_50_IDS.slice()));
      }

      var regRaw = localStorage.getItem('rm_sovereign_visibility_registry_v1');
      if (regRaw) {
        try {
          var reg = JSON.parse(regRaw);
          if (reg && reg.visibility) {
            var hiddenCount = 0;
            Object.keys(reg.visibility).forEach(function (k) {
              if (reg.visibility[k] === false) hiddenCount++;
            });
            if (hiddenCount >= 30) {
              for (var i = 1; i <= 50; i++) {
                var numStr = i < 10 ? '0' + i : String(i);
                reg.visibility['rm:cat:' + numStr] = true;
              }
              localStorage.setItem('rm_sovereign_visibility_registry_v1', JSON.stringify(reg));
            }
          }
        } catch (_) {}
      }
    } catch (e) {
      console.warn('[RM-CatalogCore] Fail-open notice:', e);
    }
  }

  // 4. CSS PURITY SHIELD (ANTI-POSTER, ANTI-DOME & MODE-AWARE BORDERS)
  function injectSingleDashedStyles() {
    var styleId = 'rm-sivme-single-border-engine';
    var styleEl = document.getElementById(styleId);
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }
    var isInSitu = isOwnerInSituActive();
    var rules = [
      '/* EXT_005: IMMEDIATE PURGE OF 450PX GIANT MARKETING POSTERS */',
      '#categoryModal .universal-card, #categoryModal .universal-cat-card,',
      '#categoryModal [class*="universal-card"], #categoryModal [class*="universal-cat"],',
      '#categoryModal [id^="unicat-"],',
      '#categoryModal div[style*="min-height: 380px"], #categoryModal div[style*="min-height: 450px"] {',
      '  display: none !important; visibility: hidden !important; height: 0 !important;',
      '  max-height: 0 !important; opacity: 0 !important; pointer-events: none !important;',
      '  margin: 0 !important; padding: 0 !important; overflow: hidden !important;',
      '}',
      '/* EXT_005: ANTI-OVERLAP (10PX MARGIN) & ANTI-DOME (14PX RADIUS) */',
      '#tier1-list, #tier2-list { border: none !important; outline: none !important; box-shadow: none !important; }',
      '.sivme-cat-card {',
      '  position: relative !important; margin-top: 10px !important; margin-bottom: 10px !important;',
      '  border-radius: 14px !important; border: 1px solid rgba(51, 65, 85, 0.7) !important;',
      '  transform: none !important; clear: both !important;',
      '}',
      '.sivme-subcat-card { border-radius: 12px !important; border: 1px solid rgba(51, 65, 85, 0.6) !important; }',
      '#categoryModal [style*="border-radius: 50%"]:not(.rounded-full):not([class*="rounded-full"]) { border-radius: 14px !important; }',
      '.sivme-radar-ring, .sivme-ripple, .sivme-radar-layer { display: none !important; }'
    ];

    if (isInSitu) {
      rules.push(
        '/* IN-SITU OWNER CONSOLE MODE: SINGLE DASHED GHERA */',
        '.sivme-cat-card.is-live, .sivme-subcat-card.is-live { outline: 2px dashed #10b981 !important; outline-offset: 3px !important; }',
        '.sivme-cat-card.is-hidden, .sivme-subcat-card.is-hidden { outline: 2px dashed #ef4444 !important; outline-offset: 3px !important; opacity: 0.45 !important; }'
      );
    } else {
      rules.push(
        '/* PUBLIC MODE: ZERO DASHED LEAKAGE */',
        '.sivme-cat-card, .sivme-subcat-card { outline: none !important; }',
        '.sivme-cat-card.is-hidden, .sivme-subcat-card.is-hidden { display: none !important; }'
      );
    }
    styleEl.textContent = rules.join('\n');
  }

  // 5. VISIBILITY CHECKS
  function isCategoryLive(catId, catNum) {
    try {
      var raw = localStorage.getItem('rm_active_categories_v1');
      if (!raw) return true;
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length <= 1) return true;
      var set = new Set(parsed.map(String));
      return set.has(String(catId)) || set.has(String(catNum));
    } catch (_) {
      return true;
    }
  }

  function isSubItemLive(subId) {
    try {
      var raw = localStorage.getItem('rm_active_subcategories_v1');
      if (!raw) return true;
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0) return true;
      var set = new Set(parsed.map(String));
      return set.has(String(subId));
    } catch (_) {
      return true;
    }
  }

  // 6. TOGGLE HANDLERS (EXACT ORIGINAL LOGIC PRESERVED)
  window.toggleSivmeCategory = function (catId, num, event) {
    if (event) event.stopPropagation();
    try {
      var raw = localStorage.getItem('rm_active_categories_v1');
      var activeIds = new Set();
      if (raw) {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 1) {
          parsed.forEach(function (x) { activeIds.add(String(x)); });
        }
      }
      if (activeIds.size <= 1) {
        (window.RM_SERVICES_DATA || []).forEach(function (s) { activeIds.add(s.id); activeIds.add(s.num); });
        (window.RM_GAMES_DATA || []).forEach(function (g) { activeIds.add(g.id); activeIds.add(g.num); });
        CANONICAL_50_IDS.forEach(function (id) { activeIds.add(id); });
      }
      activeIds.add('c16'); activeIds.add('16');
      var cId = String(catId);
      var nId = String(num);
      if (activeIds.has(cId) || activeIds.has(nId)) {
        activeIds.delete(cId); activeIds.delete(nId);
      } else {
        activeIds.add(cId); activeIds.add(nId);
      }
      localStorage.setItem('rm_active_categories_v1', JSON.stringify(Array.from(activeIds)));
      if (window.RM_CatalogRenderer && typeof window.RM_CatalogRenderer.render === 'function') {
        window.RM_CatalogRenderer.render();
      }
    } catch (e) {
      console.error('Category toggle error:', e);
    }
  };

  window.toggleSivmeSub = function (subId, event) {
    if (event) event.stopPropagation();
    try {
      var raw = localStorage.getItem('rm_active_subcategories_v1');
      var activeSubs = new Set();
      if (raw) {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) parsed.forEach(function (x) { activeSubs.add(String(x)); });
      }
      if (activeSubs.size === 0) {
        (window.RM_SERVICES_DATA || []).forEach(function (s) { s.children.forEach(function (c) { activeSubs.add(c.id); }); });
        (window.RM_GAMES_DATA || []).forEach(function (g) { g.children.forEach(function (c) { activeSubs.add(c.id); }); });
      }
      var sId = String(subId);
      if (activeSubs.has(sId)) {
        activeSubs.delete(sId);
      } else {
        activeSubs.add(sId);
      }
      localStorage.setItem('rm_active_subcategories_v1', JSON.stringify(Array.from(activeSubs)));
      if (window.RM_CatalogRenderer && typeof window.RM_CatalogRenderer.render === 'function') {
        window.RM_CatalogRenderer.render();
      }
    } catch (e) {
      console.error('Sub toggle error:', e);
    }
  };

  // 7. SINGLE GHERA ENFORCEMENT
  function enforceSingleSivmeOutline() {
    var isInSitu = isOwnerInSituActive();
    document.querySelectorAll('.sivme-cat-card[data-cat-id]').forEach(function (card) {
      var catId = card.getAttribute('data-cat-id') || '';
      var num = catId.replace(/[cg]/, '');
      var isLive = isCategoryLive(catId, num);
      card.style.setProperty('border', '1px solid rgba(51, 65, 85, 0.7)', 'important');
      if (isInSitu) {
        var color = isLive ? '#10b981' : '#ef4444';
        card.style.setProperty('outline', '2px dashed ' + color, 'important');
        card.style.setProperty('outline-offset', '3px', 'important');
        card.style.opacity = isLive ? '1' : '0.45';
        card.style.display = 'block';
      } else {
        card.style.removeProperty('outline');
        card.style.setProperty('outline', 'none', 'important');
        card.style.opacity = '1';
        card.style.display = isLive ? 'block' : 'none';
      }
    });

    document.querySelectorAll('.sivme-subcat-card[data-sivme-urn]').forEach(function (sub) {
      var urn = sub.getAttribute('data-sivme-urn') || '';
      var subId = urn.split(':sub:')[1] || '';
      var isSubLive = isSubItemLive(subId);
      sub.style.setProperty('border', '1px solid rgba(51, 65, 85, 0.6)', 'important');
      if (isInSitu) {
        var color = isSubLive ? '#10b981' : '#ef4444';
        sub.style.setProperty('outline', '2px dashed ' + color, 'important');
        sub.style.setProperty('outline-offset', '3px', 'important');
        sub.style.opacity = isSubLive ? '1' : '0.45';
        sub.style.display = '';
      } else {
        sub.style.removeProperty('outline');
        sub.style.setProperty('outline', 'none', 'important');
        sub.style.opacity = '1';
        sub.style.display = isSubLive ? '' : 'none';
      }
    });
  }

  // 8. GLOBAL EXPORTS & BACKWARD COMPATIBILITY ALIASES
  window.RM_CatalogCore = {
    CANONICAL_50_IDS: CANONICAL_50_IDS,
    isOwnerInSituActive: isOwnerInSituActive,
    ensureFailOpenRegistry: ensureFailOpenRegistry,
    injectSingleDashedStyles: injectSingleDashedStyles,
    injectCatalogPurityStyles: injectSingleDashedStyles,
    isCategoryLive: isCategoryLive,
    isSubItemLive: isSubItemLive,
    toggleSivmeCategory: window.toggleSivmeCategory,
    toggleSivmeSub: window.toggleSivmeSub,
    enforceSingleSivmeOutline: enforceSingleSivmeOutline
  };

  ensureFailOpenRegistry();
  injectSingleDashedStyles();
})(typeof window !== 'undefined' ? window : this, typeof document !== 'undefined' ? document : null);
