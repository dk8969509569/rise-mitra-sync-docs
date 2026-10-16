/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Play Store Official Games & Entertainment Bridge v2.0.0
 *   - REPO TARGET    : public/js/universal-catalog/games-entertainment-bridge.js
 *   - SURFACE TARGET : SURFACE-A ONLY (With Safe Pass-Through for Surface-B SIVME)
 *   - HOST BINDING   : Surface-A (public/index.html) | Surface-B (public/owner-console.html)
 *   - SIZE BUDGET    : Target <= 300 Logical Lines (Surface-A <= 120 KB Gzipped | 0% Secrets)
 *   - GOVERNANCE     : 100% ZEL | Google Play Official Taxonomy | Anti-RMG Points Only
 *   - SOURCE REFS    : Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) & Folder B (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - js/app.js (Shared Client Orchestrator - Surface-A + B)
 *   - js/voucher-sync.js (IndexedDB 72h Offline Cryptographic Engine - Surface-A + B)
 *   - js/universal-catalog/catalog-metadata-registry.js (Master 50-Category Registry - Surface-A)
 *   - js/universal-catalog/extensions/ext-batch-31-40.js & ext-batch-41-50.js (Surface-A)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Enforcing Google Play Store Official Taxonomy titles
 *                              (Action, Adventure, Arcade, Board, Card, Casino, Casual,
 *                              Educational, Music, Puzzle, Racing, Role Playing,
 *                              Simulation, Sports, Strategy, Trivia, Word, Family) and
 *                              rendering all categories inside Games & Entertainment UI.
 *   - ALLOWED ON SURFACE-B   : None (Strict No-Op on Owner Console; SIVME triggers ignored).
 *   - FORBIDDEN IN THIS FILE : Cross-surface DOM/secret leakage, non-Play-Store custom
 *                              titles, real-money gaming (RMG), or sibling code duplication.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_GAMES_ENTERTAINMENT_BRIDGE, window.RM_CATALOG_REGISTRY
 *   - CALLS EXTERNAL APIs : window.openCategoryModal (Surface-A Category Modal Opener)
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : [data-group="games-entertainment"], #rm-games-entertainment-grid,
 *                           [data-category-group="entertainment"], .rm-tier2-games-list
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme], #rm-master-insitu-dock (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Suppress synthetic click only within a 350ms window after touchend.
 *   - SCROLL SAFETY : Track touchmove distance (>10px) so scrolling never triggers tap handlers.
 *   - DOM SAFETY    : Never strip attributes on touchstart or run full-DOM sweeps on tap.
 * ==============================================================================
 * 7. 100% ZEL FUNCTION MANIFEST:
 *   1. isSurfaceBContext              2. getPlayStoreOfficialGamesTaxonomy
 *   3. syncPlayStoreTaxonomyRegistry  4. buildPlayStoreCategoryCard
 *   5. renderGamesEntertainmentGroup  6. bindSafeCardDelegation
 *   7. initGamesEntertainmentBridge
 *   + Listeners: DOMContentLoaded, touchstart/touchmove/touchend/click (Surface-A delegated)
 * ==============================================================================
 */

(function () {
  'use strict';

  var lastTouchEndTs = 0;
  var touchStartPos = { x: 0, y: 0 };
  var touchMoved = false;

  // 1. isSurfaceBContext: Strict isolation guard for Surface-B Owner Console
  function isSurfaceBContext() {
    var path = (window.location && window.location.pathname) || '';
    return path.indexOf('owner-console') !== -1 || !!document.getElementById('rm-owner-cockpit');
  }

  // 2. getPlayStoreOfficialGamesTaxonomy: 100% Official Google Play Store Titles & Codes
  function getPlayStoreOfficialGamesTaxonomy() {
    return [
      { num: '10', legacyNum: '10', id: 'c10', playId: 'ENTERTAINMENT', tier: 'app', icon: '🎪', title: 'Entertainment', hindi: 'मनोरंजन व लोक संस्कृति', slug: 'entertainment' },
      { num: '11', legacyNum: '11', id: 'c11', playId: 'EVENTS', tier: 'app', icon: '🎟️', title: 'Events', hindi: 'स्थानीय मेले, उत्सव व पास', slug: 'events' },
      { num: '28', legacyNum: '29', id: 'c28', playId: 'SPORTS', tier: 'app', icon: '🏆', title: 'Sports', hindi: 'स्थानीय खेलकूद व लाइव स्कोर', slug: 'sports' },
      { num: '33', legacyNum: '34', id: 'g34', playId: 'GAME_ACTION', tier: 'game', icon: '🎯', title: 'Action', hindi: 'एक्शन तीरंदाजी व गेमिंग पार्लर', slug: 'game-action' },
      { num: '34', legacyNum: '35', id: 'g35', playId: 'GAME_ADVENTURE', tier: 'game', icon: '🧭', title: 'Adventure', hindi: 'रोमांचक यात्रा व ट्रेज़र हंट', slug: 'game-adventure' },
      { num: '35', legacyNum: '36', id: 'g36', playId: 'GAME_ARCADE', tier: 'game', icon: '🕹️', title: 'Arcade', hindi: 'गेंद टप्पा व रेट्रो आर्केड', slug: 'game-arcade' },
      { num: '36', legacyNum: '37', id: 'g37', playId: 'GAME_BOARD', tier: 'game', icon: '🎲', title: 'Board', hindi: 'देसी लूडो, कैरम व शतरंज क्लब', slug: 'game-board' },
      { num: '37', legacyNum: '38', id: 'g38', playId: 'GAME_CARD', tier: 'game', icon: '🃏', title: 'Card', hindi: 'ताश सॉलिटेयर (Zero Cash)', slug: 'game-card' },
      { num: '38', legacyNum: '39', id: 'g39', playId: 'GAME_CASINO', tier: 'game', icon: '🎡', title: 'Casino', hindi: 'पॉइंट्स लकी चक्र (Non-RMG)', slug: 'game-casino' },
      { num: '39', legacyNum: '40', id: 'g40', playId: 'GAME_CASUAL', tier: 'game', icon: '🎈', title: 'Casual', hindi: 'रंगोली व हल्के-फुल्के खेल', slug: 'game-casual' },
      { num: '40', legacyNum: '41', id: 'g41', playId: 'GAME_EDUCATIONAL', tier: 'game', icon: '🎓', title: 'Educational', hindi: 'भारत क्विज़ व ज्ञान खेल', slug: 'game-educational' },
      { num: '41', legacyNum: '42', id: 'g42', playId: 'GAME_MUSIC', tier: 'game', icon: '🎵', title: 'Music', hindi: 'संगीत ताल, तबला व ढोलक बीट', slug: 'game-music' },
      { num: '42', legacyNum: '43', id: 'g43', playId: 'GAME_PUZZLE', tier: 'game', icon: '🧩', title: 'Puzzle', hindi: 'दिमागी पहेलियाँ व सुडोकू', slug: 'game-puzzle' },
      { num: '43', legacyNum: '44', id: 'g44', playId: 'GAME_RACING', tier: 'game', icon: '🏎️', title: 'Racing', hindi: 'बैलगाड़ी व गो-कार्ट रेस', slug: 'game-racing' },
      { num: '44', legacyNum: '45', id: 'g45', playId: 'GAME_ROLE_PLAYING', tier: 'game', icon: '🎭', title: 'Role Playing', hindi: 'गाँव का प्रधान व रोल प्लेइंग', slug: 'game-role-playing' },
      { num: '45', legacyNum: '46', id: 'g46', playId: 'GAME_SIMULATION', tier: 'game', icon: '🚜', title: 'Simulation', hindi: 'खेत व ड्राइविंग सिमुलेटर', slug: 'game-simulation' },
      { num: '46', legacyNum: '47', id: 'g47', playId: 'GAME_SPORTS', tier: 'game', icon: '🏏', title: 'Sports', hindi: 'गली क्रिकेट व टर्फ गेम्स', slug: 'game-sports' },
      { num: '47', legacyNum: '48', id: 'g48', playId: 'GAME_STRATEGY', tier: 'game', icon: '♟️', title: 'Strategy', hindi: 'चाणक्य नीति व शतरंज रणनीति', slug: 'game-strategy' },
      { num: '48', legacyNum: '49', id: 'g49', playId: 'GAME_TRIVIA', tier: 'game', icon: '🧠', title: 'Trivia', hindi: 'देसी ट्रिविया व सामान्य ज्ञान', slug: 'game-trivia' },
      { num: '49', legacyNum: '50', id: 'g50', playId: 'GAME_WORD', tier: 'game', icon: '🔤', title: 'Word', hindi: 'शब्द पहेली व कोश', slug: 'game-word' },
      { num: '50', legacyNum: '12', id: 'g50_family', playId: 'FAMILY', tier: 'family', icon: '👨‍👩‍👧‍👦', title: 'Family', hindi: 'मोहल्ला तंबोला व पारिवारिक खेल', slug: 'family-games' }
    ];
  }

  // 3. syncPlayStoreTaxonomyRegistry: Aligns all registry keys without losing existing subcategories
  function syncPlayStoreTaxonomyRegistry() {
    var reg = (window.RM_CATALOG_REGISTRY = window.RM_CATALOG_REGISTRY || {});
    var store = reg.categories || reg.data || reg;
    var list = getPlayStoreOfficialGamesTaxonomy();

    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var cKey = 'c' + item.num;
      var legacyCKey = 'c' + item.legacyNum;
      var existing = store[item.num] || store[item.legacyNum] || store[item.id] || store[cKey] || store[legacyCKey] || {};

      var synced = {
        id: item.id,
        playStoreCategoryId: item.playId,
        number: item.num + '.',
        icon: existing.icon || item.icon,
        title: item.title,
        subtitle: item.hindi,
        hindiTitle: item.hindi,
        tier: item.tier,
        groupKey: 'games-entertainment',
        slug: item.slug,
        rating: existing.rating || '★ 4.9',
        trustBadge: existing.trustBadge || 'Google Play Taxonomy Verified',
        supportBadge: existing.supportBadge || '100% Zero-RMG • कौशल व मनोरंजन',
        macroPillars: existing.macroPillars || [],
        subcategories: existing.subcategories || {}
      };

      store[item.num] = synced;
      store[item.id] = synced;
      store[cKey] = synced;
      if (item.legacyNum && !store[item.legacyNum]) {
        store[item.legacyNum] = synced;
      }
    }
    return list;
  }

  // 4. buildPlayStoreCategoryCard: English Official Play Store Name (Line 1) + Hindi (Line 2)
  function buildPlayStoreCategoryCard(item) {
    var tagText = item.tier === 'app' ? 'APP #' + item.num : 'GAME #' + item.num;
    return (
      '<button type="button" class="rm-service-chip rm-games-ent-card" ' +
      'data-cat-num="' + item.num + '" data-legacy-num="' + item.legacyNum + '" ' +
      'data-cat-id="' + item.id + '" data-play-id="' + item.playId + '" ' +
      'style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;' +
      'background:rgba(30,41,59,0.88);border:1px solid rgba(56,189,248,0.3);text-align:left;width:100%;cursor:pointer;">' +
      '<span style="font-size:1.45rem;line-height:1;flex-shrink:0;">' + item.icon + '</span>' +
      '<span style="display:flex;flex-direction:column;min-width:0;flex:1;">' +
      '<strong style="color:#f8fafc;font-size:0.88rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' +
      item.num + '. ' + item.title + '</strong>' +
      '<span style="color:#94a3b8;font-size:0.76rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' +
      item.hindi + '</span>' +
      '</span>' +
      '<span style="font-size:0.65rem;padding:2px 6px;border-radius:6px;background:rgba(52,211,153,0.15);color:#34d399;flex-shrink:0;">' +
      tagText + '</span>' +
      '</button>'
    );
  }

  // 5. renderGamesEntertainmentGroup: Populates the Games & Entertainment section with all official categories
  function renderGamesEntertainmentGroup() {
    if (isSurfaceBContext()) return;
    var list = syncPlayStoreTaxonomyRegistry();
    var selectors = [
      '[data-group="games-entertainment"]',
      '#rm-games-entertainment-grid',
      '[data-category-group="entertainment"]',
      '.rm-tier2-games-list'
    ];
    var containers = document.querySelectorAll(selectors.join(','));
    if (!containers || !containers.length) return;

    var html = '';
    for (var i = 0; i < list.length; i++) {
      html += buildPlayStoreCategoryCard(list[i]);
    }

    for (var j = 0; j < containers.length; j++) {
      var el = containers[j];
      if (el.closest('.sivme-notch-pill, #sivme-hud, [data-sivme], #rm-master-insitu-dock')) continue;
      el.innerHTML = html;
      el.setAttribute('data-rm-games-count', String(list.length));
    }
  }

  // 6. bindSafeCardDelegation: Scroll-safe and SIVME-safe 1-Tap category opener
  function bindSafeCardDelegation() {
    if (isSurfaceBContext()) return;

    document.addEventListener('touchstart', function (e) {
      if (!e.touches || !e.touches[0]) return;
      touchStartPos.x = e.touches[0].clientX;
      touchStartPos.y = e.touches[0].clientY;
      touchMoved = false;
    }, { passive: true });

    document.addEventListener('touchmove', function (e) {
      if (!e.touches || !e.touches[0]) return;
      var dx = Math.abs(e.touches[0].clientX - touchStartPos.x);
      var dy = Math.abs(e.touches[0].clientY - touchStartPos.y);
      if (dx > 10 || dy > 10) touchMoved = true;
    }, { passive: true });

    document.addEventListener('touchend', function (e) {
      if (touchMoved) return;
      var target = e.target && e.target.closest ? e.target.closest('.rm-games-ent-card') : null;
      if (!target) return;
      if (target.closest('.sivme-notch-pill, #sivme-hud, [data-sivme], #rm-master-insitu-dock')) return;
      lastTouchEndTs = Date.now();
      var catNum = target.getAttribute('data-cat-num');
      if (catNum && typeof window.openCategoryModal === 'function') {
        window.openCategoryModal(catNum);
      }
    }, { passive: true });

    document.addEventListener('click', function (e) {
      if (Date.now() - lastTouchEndTs < 350) return;
      var target = e.target && e.target.closest ? e.target.closest('.rm-games-ent-card') : null;
      if (!target) return;
      if (target.closest('.sivme-notch-pill, #sivme-hud, [data-sivme], #rm-master-insitu-dock')) return;
      var catNum = target.getAttribute('data-cat-num');
      if (catNum && typeof window.openCategoryModal === 'function') {
        window.openCategoryModal(catNum);
      }
    });
  }

  // 7. initGamesEntertainmentBridge: Main entrypoint
  function initGamesEntertainmentBridge() {
    if (isSurfaceBContext()) return;
    syncPlayStoreTaxonomyRegistry();
    renderGamesEntertainmentGroup();
    bindSafeCardDelegation();
  }

  window.RM_GAMES_ENTERTAINMENT_BRIDGE = {
    getOfficialTaxonomy: getPlayStoreOfficialGamesTaxonomy,
    syncRegistry: syncPlayStoreTaxonomyRegistry,
    renderGroup: renderGamesEntertainmentGroup
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGamesEntertainmentBridge);
  } else {
    initGamesEntertainmentBridge();
  }
})();
