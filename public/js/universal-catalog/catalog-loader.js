/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Atomic Dynamic Catalog Loader & Tier-2 Games Hydrator v2.0.0
 *   - REPO TARGET    : public/js/universal-catalog/catalog-loader.js
 *   - SURFACE TARGET : SURFACE-A ONLY (With Safe Pass-Through for Surface-B SIVME)
 *   - HOST BINDING   : Surface-A (public/index.html) | Surface-B (public/owner-console.html)
 *   - SIZE BUDGET    : Target <= 300 Logical Lines (Surface-A <= 120 KB Gzipped | 0% Secrets)
 *   - GOVERNANCE     : GATE-26.0 | 100% ZEL | Google Play Official Taxonomy | Anti-RMG
 *   - SOURCE REFS    : Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) & Folder B (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - js/app.js (Shared Client Orchestrator - Surface-A + B)
 *   - js/voucher-sync.js (IndexedDB 72h Offline Cryptographic Engine - Surface-A + B)
 *   - js/universal-catalog/catalog-metadata-registry.js (Master 50-Category Registry - Surface-A)
 *   - js/universal-catalog/games-entertainment-bridge.js (Play Store Games Taxonomy Bridge - Surface-A)
 *   - js/one-tap-catalog-hydrator.js (1-Tap Accordion & Numbering Hydrator - Surface-A)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : On-demand lazy loading of atomic cat-01.js..cat-50.js,
 *                              auto-loading games-entertainment-bridge.js, and hydrating
 *                              all Google Play Store Games (33-50) inside #tier2-list.
 *   - ALLOWED ON SURFACE-B   : None (Strict No-Op on Owner Console; SIVME triggers ignored).
 *   - FORBIDDEN IN THIS FILE : Cross-surface DOM/secret leakage, real-money gaming (RMG),
 *                              or removing existing RM_CATALOG_LOADER methods.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_CATALOG_LOADER
 *   - CALLS EXTERNAL APIs : window.RM_CATALOG_REGISTRY.registerBatch,
 *                           window.RM_CATALOG_HYDRATOR.syncAndHydrateCatalogCards,
 *                           window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog
 * ==============================================================================
 * 5. DOM ATTRIBUTE & SELECTOR CONTRACT (ZERO-COLLISION DOM RULE):
 *   - SURFACE-A SELECTORS : #categoryModal, #tier2-list, [data-cat-id], [id^="sub-g"]
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme], #rm-master-insitu-dock (EXCLUDED)
 * ==============================================================================
 * 6. ANTI-FREEZE, EVENT LISTENER & TIMER OWNERSHIP LOCK:
 *   - CLICK SAFETY  : Zero blocking listeners; delegates 1-Tap accordion to hydrator.
 *   - SCROLL SAFETY : Lazy-loads atomic scripts asynchronously without main-thread lock.
 *   - DOM SAFETY    : Appends missing #tier2-list nodes (33-50) once without wiping existing DOM.
 * ==============================================================================
 * 7. 100% ZEL FUNCTION MANIFEST:
 *   1. isSurfaceBContext               2. RM_CATALOG_LOADER.loadCategory
 *   3. RM_CATALOG_LOADER.loadRange     4. RM_CATALOG_LOADER.isLoaded
 *   5. getPlayStoreTier2GamesSpec      6. ensureGamesBridgeLoaded
 *   7. hydrateTier2GamesSection
 *   + Listeners: DOMContentLoaded (Surface-A Tier-2 auto-hydration)
 * ==============================================================================
 */

(function () {
  'use strict';

  var loadedCategories = {};
  var loadingPromises = {};

  // 1. isSurfaceBContext: Strict isolation guard for Surface-B Owner Console
  function isSurfaceBContext() {
    var path = (window.location && window.location.pathname) || '';
    return path.indexOf('owner-console') !== -1 || !!document.getElementById('rm-owner-cockpit');
  }

  // 2-4. RM_CATALOG_LOADER: 100% ZEL Preserved Atomic Dynamic Catalog Loader API
  var RM_CATALOG_LOADER = {
    loadCategory: function (catId, callback) {
      var num = parseInt(catId, 10);
      if (isNaN(num)) return;
      var idStr = String(num).padStart(2, '0');

      if (loadedCategories[idStr]) {
        if (typeof callback === 'function') callback(null, idStr);
        return;
      }

      if (loadingPromises[idStr]) {
        if (typeof callback === 'function') {
          loadingPromises[idStr].then(function () {
            callback(null, idStr);
          }).catch(function (err) {
            callback(err, idStr);
          });
        }
        return;
      }

      var promise = new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = '/js/universal-catalog/categories/cat-' + idStr + '.js';
        script.async = true;
        script.onload = function () {
          loadedCategories[idStr] = true;
          delete loadingPromises[idStr];
          resolve(idStr);
        };
        script.onerror = function (err) {
          delete loadingPromises[idStr];
          console.error('[RM_CATALOG_LOADER] Error loading atomic category: cat-' + idStr + '.js', err);
          reject(new Error('Failed to load cat-' + idStr));
        };
        document.head.appendChild(script);
      });

      loadingPromises[idStr] = promise;

      if (typeof callback === 'function') {
        promise.then(function () {
          callback(null, idStr);
        }).catch(function (err) {
          callback(err, idStr);
        });
      }
    },

    loadRange: function (start, end) {
      for (var i = start; i <= end; i++) {
        this.loadCategory(i);
      }
    },

    isLoaded: function (catId) {
      var idStr = String(parseInt(catId, 10)).padStart(2, '0');
      return !!loadedCategories[idStr];
    }
  };

  // 5. getPlayStoreTier2GamesSpec: Official Google Play Store 17 Game Genres + Family (33 to 50)
  function getPlayStoreTier2GamesSpec() {
    return [
      { num: '33', icon: '🎯', title: 'Action', subtitle: 'एक्शन तीरंदाजी, ई-स्पोर्ट्स व गेमिंग पार्लर', subs: ['एक्शन तीरंदाजी चैलेंज', 'ई-स्पोर्ट्स एरीना टूर्नामेंट', 'लेजर टैग व स्पीड रिफ्लेक्स'] },
      { num: '34', icon: '🧭', title: 'Adventure', subtitle: 'रोमांचक यात्रा, ट्रेकिंग कैंप व ट्रेज़र हंट क्वेस्ट', subs: ['देसी ट्रेज़र हंट क्वेस्ट', 'जंगल व पहाड़ रोमांच यात्रा', 'हेरिटेज एक्सप्लोरर पास'] },
      { num: '35', icon: '🕹️', title: 'Arcade', subtitle: 'गेंद टप्पा, क्लासिक रेट्रो आर्केड व स्पीड रन', subs: ['गेंद टप्पा क्लासिक आर्केड', 'रेट्रो जॉयस्टिक हाई-स्कोर', 'स्पीड रनर चैलेंज'] },
      { num: '36', icon: '🎲', title: 'Board', subtitle: 'देसी लूडो, कैरम क्लब व शतरंज चौपाल', subs: ['देसी लूडो चौपाल मैच', 'कैरम स्ट्राइकर क्लब', 'साँप-सीढ़ी व चौसर बोर्ड'] },
      { num: '37', icon: '🃏', title: 'Card', subtitle: 'ताश सॉलिटेयर व मेमोरी कार्ड (100% Zero Cash)', subs: ['क्लासिक सॉलिटेयर डेक', 'मेमोरी कार्ड मैचिंग', 'परिवार कार्ड पहेली (Non-RMG)'] },
      { num: '38', icon: '🎡', title: 'Casino', subtitle: 'पॉइंट्स लकी चक्र व दैनिक रिवॉर्ड स्पिन (100% Non-RMG)', subs: ['दैनिक पॉइंट्स लकी व्हील', 'मेला लकी नंबर स्पिन', 'कौशल जैकपॉट पॉइंट्स (Zero Cash)'] },
      { num: '39', icon: '🎈', title: 'Casual', subtitle: 'रंगोली क्राफ्ट, बबल पॉप व हल्के-फुल्के खेल', subs: ['रंगोली व तोरण डिज़ाइन खेल', 'बबल पॉप रिलैक्स ज़ोन', 'चाय-ब्रेक मिनी गेम्स'] },
      { num: '40', icon: '🎓', title: 'Educational', subtitle: 'भारत क्विज़, वैदिक गणित व ज्ञानवर्धक खेल', subs: ['भारत दर्शन ज्ञान क्विज़', 'वैदिक गणित स्पीड टेस्ट', 'विज्ञान व भूगोल पहेली'] },
      { num: '41', icon: '🎵', title: 'Music', subtitle: 'संगीत ताल, तबला-ढोलक बीट व सरगम अभ्यास', subs: ['तबला व ढोलक ताल मास्टर', 'देसी लोकगीत सरगम बीट', 'हारमोनियम धुन पहचानें'] },
      { num: '42', icon: '🧩', title: 'Puzzle', subtitle: 'दिमागी पहेलियाँ, सुडोकू व ब्लॉक लॉजिक', subs: ['दैनिक सुडोकू व नंबर ग्रिड', 'दिमागी बूझो तो जानें', 'ब्लॉक व जिगसॉ पहेली'] },
      { num: '43', icon: '🏎️', title: 'Racing', subtitle: 'बैलगाड़ी दौड़, ट्रैक्टर रैली व गो-कार्ट रेस', subs: ['देसी बैलगाड़ी व ट्रैक्टर रेस', 'हाईवे बाइक व कार्ट टाइम-ट्रायल', 'गली साइकिल रिले चैंपियन'] },
      { num: '44', icon: '🎭', title: 'Role Playing', subtitle: 'गाँव का प्रधान, पंचायत निर्णय व कथा रोल-प्ले', subs: ['गाँव का प्रधान विकास मिशन', 'पंचायत न्याय व नीति सिमुलेशन', 'ऐतिहासिक वीर गाथा अभियान'] },
      { num: '45', icon: '🚜', title: 'Simulation', subtitle: 'खेत सिमुलेटर, डेयरी प्रबंधन व ड्राइविंग अभ्यास', subs: ['आदर्श किसान खेत सिमुलेटर', 'स्मार्ट डेयरी व मंडी प्रबंधन', 'ट्रैक्टर व बस पार्किंग ट्रेनर'] },
      { num: '46', icon: '🏏', title: 'Sports', subtitle: 'गली क्रिकेट, कबड्डी दंगल व फुटबॉल पेनल्टी', subs: ['गली व बॉक्स क्रिकेट लीग', 'देसी कबड्डी व कुश्ती अखाड़ा', 'फुटबॉल व हॉकी गोल चैलेंज'] },
      { num: '47', icon: '♟️', title: 'Strategy', subtitle: 'चाणक्य नीति, शतरंज रणनीति व किला रक्षा', subs: ['शतरंज ग्रैंडमास्टर रणनीति', 'चाणक्य राज्य रक्षा मिशन', 'संसाधन व व्यापार योजना खेल'] },
      { num: '48', icon: '🧠', title: 'Trivia', subtitle: 'देसी ट्रिविया, सामान्य ज्ञान व रोचक तथ्य मुकाबले', subs: ['रोचक भारत ट्रिविया चैलेंज', 'जनपद व राज्य सामान्य ज्ञान', 'तेज़ दिमाग फैक्ट बज़र'] },
      { num: '49', icon: '🔤', title: 'Word', subtitle: 'शब्द पहेली, हिंदी-अंग्रेजी कोश व वर्ग पहेली', subs: ['दैनिक हिंदी-English वर्ग पहेली', 'अंताक्षरी व शब्द निर्माण', 'पर्यायवाची व मुहावरा खोज'] },
      { num: '50', icon: '👨‍👩‍👧‍👦', title: 'Family', subtitle: 'मोहल्ला तंबोला, पारिवारिक चौपाल व आनंद मेला खेल', subs: ['मोहल्ला पॉइंट्स तंबोला नाइट', 'दादी-नानी कहानी व पहेली चौपाल', 'पारिवारिक वीकेंड टीम गेम्स'] }
    ];
  }

  // 6. ensureGamesBridgeLoaded: Auto-loads games-entertainment-bridge.js on Surface-A
  function ensureGamesBridgeLoaded() {
    if (isSurfaceBContext()) return;
    if (document.getElementById('rm-games-ent-bridge-script')) return;
    var s = document.createElement('script');
    s.id = 'rm-games-ent-bridge-script';
    s.src = '/js/universal-catalog/games-entertainment-bridge.js';
    s.async = true;
    (document.head || document.documentElement).appendChild(s);
  }

  // 7. hydrateTier2GamesSection: Ensures #tier2-list ("खेल और मनोरंजन") renders all 18 Play Store Games (33-50)
  function hydrateTier2GamesSection() {
    if (isSurfaceBContext()) return;
    var specs = getPlayStoreTier2GamesSpec();

    // Register all 33-50 specs into RM_CATALOG_REGISTRY so card engines have instant Play Store data
    var batch = {};
    for (var i = 0; i < specs.length; i++) {
      var g = specs[i];
      var subMap = {};
      for (var sIdx = 0; sIdx < g.subs.length; sIdx++) {
        var code = g.num + '-' + (sIdx + 1);
        subMap[code] = {
          id: code,
          code: code,
          title: g.subs[sIdx],
          hindiTitle: g.subtitle,
          rating: '★ 4.9',
          badge: '100% Zero-RMG Verified'
        };
      }
      batch[g.num] = {
        id: 'g' + g.num,
        catId: g.num,
        num: g.num + '.',
        icon: g.icon,
        title: g.title,
        subtitle: g.subtitle,
        hindiTitle: g.subtitle,
        tier: 'tier2',
        subcategories: subMap
      };
    }

    if (window.RM_CATALOG_REGISTRY && typeof window.RM_CATALOG_REGISTRY.registerBatch === 'function') {
      window.RM_CATALOG_REGISTRY.registerBatch(batch);
    }

    var t2 = document.getElementById('tier2-list');
    if (!t2) return;

    var baseCardClass = (t2.firstElementChild && t2.firstElementChild.className) ||
      'p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 transition-all';

    var addedAny = false;
    for (var j = 0; j < specs.length; j++) {
      var item = specs[j];
      var existingCard = t2.querySelector(
        '[data-cat-id="g' + item.num + '"], [data-cat-id="c' + item.num + '"], [data-cat-id="' + item.num + '"]'
      );
      if (!existingCard) {
        var card = document.createElement('div');
        card.className = baseCardClass;
        card.setAttribute('data-cat-id', 'g' + item.num);

        var headerDiv = document.createElement('div');
        headerDiv.className = 'flex items-center justify-between gap-3 cursor-pointer';
        headerDiv.innerHTML =
          '<div class="flex items-center gap-3 min-w-0">' +
            '<div class="w-11 h-11 rounded-xl bg-slate-800/90 border border-slate-700 flex flex-col items-center justify-center shrink-0">' +
              '<span class="text-[10px] font-bold text-sky-400">' + item.num + '.</span>' +
              '<span class="text-lg leading-none">' + item.icon + '</span>' +
            '</div>' +
            '<div class="min-w-0">' +
              '<h3 class="font-bold text-white text-base truncate">' + item.title + '</h3>' +
              '<p class="text-xs text-slate-400 truncate">' + item.subtitle + '</p>' +
            '</div>' +
          '</div>' +
          '<span class="px-2.5 py-1 rounded-lg bg-slate-800 text-sky-400 text-xs font-bold shrink-0">और देखें ▼</span>';

        var subDiv = document.createElement('div');
        subDiv.id = 'sub-g' + item.num;
        subDiv.className = 'hidden space-y-2 mt-3 pt-2 border-t border-slate-800/80';
        subDiv.setAttribute('data-rm-collapsed', 'true');

        for (var k = 1; k <= 3; k++) {
          var subCode = item.num + '-' + k;
          var sc = document.createElement('div');
          sc.className = 'p-3 rounded-xl bg-slate-900/90 border border-slate-800';
          sc.setAttribute('data-sub-id', subCode);
          sc.innerHTML =
            '<div class="flex items-center justify-between"><span class="rm-sublevel-num-badge">' + subCode + '.</span><span class="text-xs text-amber-400">★ 4.9</span></div>' +
            '<h4 class="font-bold text-white text-sm mt-1">' + item.subs[k - 1] + '</h4>' +
            '<p class="text-xs text-slate-400 mt-0.5">' + item.subtitle + '</p>' +
            '<div class="mt-2 inline-block px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold rm-service-chip">खोलें ›</div>';
          subDiv.appendChild(sc);
        }

        card.appendChild(headerDiv);
        card.appendChild(subDiv);
        t2.appendChild(card);
        addedAny = true;
      }
    }

    if (addedAny) {
      if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
        try { window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog(); } catch (e) {}
      }
      if (window.RM_CATALOG_HYDRATOR && typeof window.RM_CATALOG_HYDRATOR.syncAndHydrateCatalogCards === 'function') {
        try { window.RM_CATALOG_HYDRATOR.syncAndHydrateCatalogCards(); } catch (e) {}
      }
    }
  }

  RM_CATALOG_LOADER.hydrateTier2GamesSection = hydrateTier2GamesSection;
  window.RM_CATALOG_LOADER = RM_CATALOG_LOADER;

  if (!isSurfaceBContext()) {
    ensureGamesBridgeLoaded();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        hydrateTier2GamesSection();
        setTimeout(hydrateTier2GamesSection, 120);
        setTimeout(hydrateTier2GamesSection, 400);
      });
    } else {
      hydrateTier2GamesSection();
      setTimeout(hydrateTier2GamesSection, 120);
      setTimeout(hydrateTier2GamesSection, 400);
    }
  }
})();
