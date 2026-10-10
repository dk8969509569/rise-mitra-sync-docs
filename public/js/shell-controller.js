/**
 * RISE MITRA — SHELL CONTROLLER & VIEWPORT DISPATCHER ENGINE
 * SPECIFICATION : FOLDER A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/shell-controller.js
 * GOVERNANCE    : GATE-24.5 | 100% ZEL MODULAR CONTROLLER DECOUPLING
 * ENHANCEMENT   : AUTONOMOUS ZERO-CLICK SCROLL RESET & INSTANT CARD HYDRATION
 */

(function (window, document) {
  'use strict';

  var deferredPrompt = null;
  var banner = null;

  function initPWA() {
    banner = document.getElementById('playStoreInstallBanner');

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').catch(function (err) {
          console.log('SW Registration:', err);
        });
      });
    }

    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      deferredPrompt = e;
      if (banner && !window.matchMedia('(display-mode: standalone)').matches) {
        banner.style.display = 'block';
      }
    });

    window.addEventListener('appinstalled', function () {
      if (banner) banner.style.display = 'none';
      deferredPrompt = null;
    });

    if (window.matchMedia('(display-mode: standalone)').matches) {
      if (banner) banner.style.display = 'none';
    }
  }

  // Global PWA Actions
  window.triggerPWAInstall = async function () {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      var choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted' && banner) {
        banner.style.display = 'none';
      }
      deferredPrompt = null;
    }
  };

  window.dismissPlayBanner = function () {
    if (banner) banner.style.display = 'none';
  };

  // Universal Catalog Accordion Toggle
  window.toggleAccordion = function (listId, btnEl) {
    window.triggerCatalogRender();
    var list = document.getElementById(listId);
    if (!list) return;
    var isHidden = list.style.display === 'none';
    list.style.display = isHidden ? 'block' : 'none';
    var arrow = btnEl ? btnEl.querySelector('.acc-arrow') : null;
    if (arrow) arrow.textContent = isHidden ? '▼' : '▶';
  };

  // Autonomous Zero-Click Catalog Drawer Modal Toggle & Instant Card Hydration
  window.toggleMenuDrawer = function (show) {
    var modal = document.getElementById('categoryModal');
    if (!modal) return;
    if (show) {
      window.triggerCatalogRender();
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      // 1. Auto-Reset Scroll to Top (Ensures Opening from Category 01)
      var scrollContainer = modal.querySelector('.overflow-y-auto') || modal;
      if (scrollContainer) {
        scrollContainer.scrollTop = 0;
      }

      // 2. Auto-Hydrate Premium Card Engine Instantly (Eliminates Manual Refresh)
      if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
        window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog();
        setTimeout(window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog, 60);
        setTimeout(window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog, 180);
      }
    } else {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  // Dynamic Catalog Trigger with Card Engine Sweep Pipeline
  window.triggerCatalogRender = function () {
    if (window.RM_CatalogRenderer && typeof window.RM_CatalogRenderer.render === 'function') {
      window.RM_CatalogRenderer.render();
    } else if (typeof window.renderCatalogItems === 'function') {
      window.renderCatalogItems();
    }

    if (window.RM_UNIVERSAL_CARD_ENGINE && typeof window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog === 'function') {
      window.RM_UNIVERSAL_CARD_ENGINE.sweepCatalog();
    }
  };

  // Fullscreen Micro-App Viewport Controllers
  window.openFullscreenModule = function (titleText) {
    var fsView = document.getElementById('rm-fullscreen-view');
    var titleEl = document.getElementById('fs-module-title');
    if (titleEl && titleText) titleEl.textContent = titleText;
    if (fsView) {
      fsView.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeFullscreenModule = function () {
    var fsView = document.getElementById('rm-fullscreen-view');
    if (fsView) {
      fsView.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  // Generic Dynamic Script Loader Helper
  window.loadModuleScript = function (src, onLoadCallback, container) {
    if (container) {
      container.innerHTML = '<div class="p-6 text-center text-xs text-cyan-400 animate-pulse">मॉड्यूल लोड हो रहा है...</div>';
    }
    var script = document.createElement('script');
    script.src = src + '?v=' + Date.now();
    script.async = true;
    script.onload = onLoadCallback;
    script.onerror = function () {
      if (container) {
        container.innerHTML = '<div class="p-6 text-center text-xs text-red-400 bg-red-950/40 border border-red-800/60 rounded-xl">मॉड्यूल लोड नहीं हो सका — कृपया पुनः प्रयास करें।</div>';
      }
    };
    document.body.appendChild(script);
  };

  // Category Launch Dispatcher
  window.handleLaunchCategory = function (catId, subId) {
    window.toggleMenuDrawer(false);
    var container = document.getElementById('rm-module-container');
    if (!container) return;

    // 16-2: किराया बहीखाता (Rental Ledger)
    if (catId === 'c16' && (subId === '16-2' || !subId)) {
      window.openFullscreenModule('🏠 16-2. किराया बहीखाता (Rental Ledger)');
      if (window.RM_Cat16_Sub2_RentalLedger) {
        window.RM_Cat16_Sub2_RentalLedger.mount(container);
      } else {
        window.loadModuleScript('/js/catalog/category-16/16-2-rental-ledger.js', function () {
          if (window.RM_Cat16_Sub2_RentalLedger) window.RM_Cat16_Sub2_RentalLedger.mount(container);
        }, container);
      }
    }
    // 16-3: कमरा व फ्लैट खोज (Canonical Modular Engine Mount)
    else if (catId === 'c16' && subId === '16-3') {
      window.openFullscreenModule('🏠 16-3. कमरा व फ्लैट खोज (Rental Search)');

      var mountSub3 = function () {
        if (window.RM_Cat16_Sub3_RentalSearch) {
          window.RM_Cat16_Sub3_RentalSearch.mount(container, {
            state: {
              publicListings: [
                {
                  listingId: 'LST-001',
                  title: '1 BHK स्वतंत्र फ्लैट (ग्राउंड फ्लोर)',
                  status: 'AVAILABLE',
                  monthlyRent: 4500,
                  securityDeposit: 4500,
                  unitType: '1 BHK',
                  addressPublic: { city: 'इंदौर', locality: 'शांति नगर', pincode: '452010' },
                  electricityBilling: { meterType: 'sub_meter_per_unit', ratePerUnit: 8.0 },
                  landlordContactMasked: { name: 'सुरेश जी (मकान मालिक)', maskedPhone: '+91 98XXXXXX01' },
                  lifecycleVerification: { availableFromDate: 'तत्काल' }
                },
                {
                  listingId: 'LST-002',
                  title: 'सिंगल रूम (अटैच लेट-बाथ)',
                  status: 'AVAILABLE',
                  monthlyRent: 2500,
                  securityDeposit: 2000,
                  unitType: 'Single Room',
                  addressPublic: { city: 'इंदौर', locality: 'कॉलेज रोड', pincode: '452001' },
                  electricityBilling: { meterType: 'sub_meter_per_unit', ratePerUnit: 7.5 },
                  landlordContactMasked: { name: 'राजेश वर्मा', maskedPhone: '+91 97XXXXXX42' },
                  lifecycleVerification: { availableFromDate: 'तत्काल' }
                },
                {
                  listingId: 'LST-003',
                  title: '2 BHK फॅमिली आवास (कार पार्किंग सहित)',
                  status: 'AVAILABLE',
                  monthlyRent: 7500,
                  securityDeposit: 7500,
                  unitType: '2 BHK',
                  addressPublic: { city: 'इंदौर', locality: 'विजयनगर', pincode: '452010' },
                  electricityBilling: { meterType: 'sub_meter_per_unit', ratePerUnit: 8.5 },
                  landlordContactMasked: { name: 'अमित शर्मा', maskedPhone: '+91 94XXXXXX18' },
                  lifecycleVerification: { availableFromDate: 'तत्काल' }
                }
              ]
            }
          });
        }
      };

      if (window.RM_Cat16_Sub3_RentalSearch) {
        mountSub3();
      } else {
        window.loadModuleScript('/js/catalog/category-16/16-3-rental-search.js', mountSub3, container);
      }
    } else if (catId === 'c05') {
      alert('सॉवरेन बहीखाता (Business Khata) लोड हो रहा है...');
    } else {
      alert(catId + ' सेवा का विस्तार जल्द उपलब्ध होगा।');
    }
  };

  // Bootstrap lifecycle listeners
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initPWA();
      window.triggerCatalogRender();
    });
  } else {
    initPWA();
    window.triggerCatalogRender();
  }

  window.addEventListener('storage', function () {
    if (typeof window.syncCategoryVisibilityFromOwner === 'function') {
      window.syncCategoryVisibilityFromOwner();
    }
  });

})(typeof window !== 'undefined' ? window : this, typeof document !== 'undefined' ? document : null);
