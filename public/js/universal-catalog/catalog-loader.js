/**
 * RISE MITRA — ATOMIC DYNAMIC CATALOG LOADER
 * ARCHITECTURE  : On-Demand Lazy Loading (Zero Network Choke & 0ms Initial Load)
 * GOVERNANCE    : GATE-26.0 | ZERO-ELEMENT-LOSS (ZEL) ATOMIC ENGINE
 * REPO TARGET   : public/js/universal-catalog/catalog-loader.js
 * SSOT AUTHORITY: Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 */

(function () {
  'use strict';

  var loadedCategories = {};
  var loadingPromises = {};

  var RM_CATALOG_LOADER = {
    /**
     * Dynamically fetch and register an atomic category (e.g. '01', '15', etc.)
     * @param {string|number} catId
     * @param {function} [callback]
     */
    loadCategory: function (catId, callback) {
      var num = parseInt(catId, 10);
      if (isNaN(num)) return;
      var idStr = String(num).padStart(2, '0'); // '1' -> '01'

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

    /**
     * Pre-load a batch range on idle or view change
     * @param {number} start
     * @param {number} end
     */
    loadRange: function (start, end) {
      for (var i = start; i <= end; i++) {
        this.loadCategory(i);
      }
    },

    /**
     * Check if category is already loaded in memory
     * @param {string|number} catId
     * @returns {boolean}
     */
    isLoaded: function (catId) {
      var idStr = String(parseInt(catId, 10)).padStart(2, '0');
      return !!loadedCategories[idStr];
    }
  };

  window.RM_CATALOG_LOADER = RM_CATALOG_LOADER;
})();
