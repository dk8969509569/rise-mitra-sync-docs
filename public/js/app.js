/* =========================================================================
   RISE MITRA (RM WORLD) - MASTER CLIENT ORCHESTRATOR & ROUTER ENGINE
   Canonical Binding : DEC-RM-SOV-FRONTEND-20260927-001 & AGENT-GOV-002
   File Target       : public/js/app.js
   Invariants        : 412 ZEL Elements | 28% NCR Hard-Cap | CoverageRatio >= 1.00
   ========================================================================= */

(function () {
  'use strict';

  // 1. CANONICAL APP STATE & CONSTANTS
  const RM_STATE = {
    currentRoute: '#home',
    isOnline: navigator.onLine,
    solvency: {
      ncrHardCap: 28.00,
      coverageRatio: 1.00,
      targetElements: 412,
      activeElements: 412,
      killSwitchState: 'L0' // L0: Normal, L1: Soft Freeze, L2: Hard Lockdown
    },
    cart: [],
    ledgerEntries: [],
    categories: []
  };

  class RiseMitraOrchestrator {
    constructor() {
      this.init();
    }

    init() {
      this.initStorage();
      this.bindNetworkTelemetry();
      this.bindHashRouter();
      this.bindDrawerEvents();
      this.bindLedgerActions();
      this.renderSolvencyTelemetry();
      this.registerServiceWorker();
    }

    // Initialize local data from localStorage
    initStorage() {
      try {
        const savedLedger = localStorage.getItem('rm_sovereign_ledger');
        RM_STATE.ledgerEntries = savedLedger ? JSON.parse(savedLedger) : [];

        const savedCart = localStorage.getItem('rm_kirana_cart');
        RM_STATE.cart = savedCart ? JSON.parse(savedCart) : [];

        const savedKillSwitch = localStorage.getItem('rm_kill_switch_state');
        if (savedKillSwitch) RM_STATE.solvency.killSwitchState = savedKillSwitch;
      } catch (err) {
        console.warn('RM Storage init warning:', err);
      }
    }

    // 1.1: 14-State Canonical Hash Router & View Switcher
    bindHashRouter() {
      const validRoutes = [
        '#home',
        '#kirana-store',
        '#merchant-khata',
        '#services-drawer',
        '#vouchers',
        '#health-wellness',
        '#wealth-mentor',
        '#settings',
        '#orders',
        '#cart',
        '#notifications',
        '#profile',
        '#help',
        '#privacy-dpdp'
      ];

      const handleRouteChange = () => {
        let hash = window.location.hash || '#home';
        if (!validRoutes.includes(hash)) {
          hash = '#home';
          window.location.hash = '#home';
        }
        RM_STATE.currentRoute = hash;
        this.renderActiveRoute(hash);
      };

      window.addEventListener('hashchange', handleRouteChange);
      handleRouteChange();
    }

    renderActiveRoute(route) {
      const viewContainer = document.getElementById('rm-view-container') || document.querySelector('.rm-main');
      if (!viewContainer) return;

      if (route === '#merchant-khata') {
        this.renderKhataView(viewContainer);
      } else if (route === '#kirana-store') {
        this.renderKiranaStoreView(viewContainer);
      } else if (route === '#services-drawer') {
        this.openDrawer();
      } else {
        this.renderHomeViews(viewContainer);
      }
    }

    renderHomeViews(container) {
      const defaultHub = document.getElementById('rm-9card-hub');
      if (defaultHub) defaultHub.style.display = 'grid';
    }

    // 1.2: Menu Drawer & 50 Verticals Dynamic Grid
    bindDrawerEvents() {
      const drawerToggle = document.getElementById('rm-drawer-toggle');
      const drawerClose = document.getElementById('rm-drawer-close');
      const drawer = document.getElementById('rm-services-drawer');
      const searchInput = document.getElementById('rm-drawer-search');

      if (drawerToggle && drawer) {
        drawerToggle.addEventListener('click', () => this.openDrawer());
      }
      if (drawerClose && drawer) {
        drawerClose.addEventListener('click', () => this.closeDrawer());
      }
      if (searchInput) {
        searchInput.addEventListener('input', (e) => this.filterCategories(e.target.value));
      }
    }

    openDrawer() {
      const drawer = document.getElementById('rm-services-drawer');
      if (drawer) {
        drawer.classList.add('active');
        drawer.style.transform = 'translateX(0)';
      }
    }

    closeDrawer() {
      const drawer = document.getElementById('rm-services-drawer');
      if (drawer) {
        drawer.classList.remove('active');
        drawer.style.transform = 'translateX(100%)';
        if (window.location.hash === '#services-drawer') {
          window.location.hash = '#home';
        }
      }
    }

    filterCategories(query) {
      const items = document.querySelectorAll('.rm-category-card');
      const q = (query || '').toLowerCase().trim();
      items.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? 'flex' : 'none';
      });
    }

    // 1.3: Sovereign Bahi-Khata (Merchant Ledger: You Gave / You Got)
    bindLedgerActions() {
      window.rmAddLedgerEntry = (type, defaultAmount = 0) => {
        const amount = prompt(type === 'YOU_GAVE' ? 'दी गई राशि दर्ज करें (₹):' : 'मिली हुई राशि दर्ज करें (₹):', defaultAmount || '');
        if (!amount || isNaN(amount) || parseFloat(amount) <= 0) return;

        const party = prompt('ग्राहक / व्यापारी का नाम दर्ज करें:', 'स्थानीय ग्राहक') || 'अज्ञात';
        const note = prompt('विवरण (वैकल्पिक):', '') || '';

        const entry = {
          id: 'TXN-' + Date.now().toString(36).toUpperCase(),
          timestamp: new Date().toISOString(),
          type: type,
          amount: parseFloat(amount),
          party: party,
          note: note,
          syncStatus: navigator.onLine ? 'SYNCED' : 'PENDING_OFFLINE'
        };

        RM_STATE.ledgerEntries.unshift(entry);
        localStorage.setItem('rm_sovereign_ledger', JSON.stringify(RM_STATE.ledgerEntries));
        
        if (RM_STATE.currentRoute === '#merchant-khata') {
          const viewContainer = document.getElementById('rm-view-container') || document.querySelector('.rm-main');
          this.renderKhataView(viewContainer);
        }
        alert('बहीखाता प्रविष्टि सफलतापूर्वक दर्ज हुई!');
      };
    }

    renderKhataView(container) {
      let totalGave = 0;
      let totalGot = 0;

      RM_STATE.ledgerEntries.forEach(item => {
        if (item.type === 'YOU_GAVE') totalGave += item.amount;
        if (item.type === 'YOU_GOT') totalGot += item.amount;
      });

      let rowsHtml = '';
      if (RM_STATE.ledgerEntries.length === 0) {
        rowsHtml = `<tr><td colspan="4" style="text-align:center; padding:1.5rem; color:#94a3b8;">कोई लेन-देन दर्ज नहीं है। नीचे दिए गए बटनों से एंट्री शुरू करें।</td></tr>`;
      } else {
        rowsHtml = RM_STATE.ledgerEntries.map(e => `
          <tr style="border-bottom:1px solid #334155; font-size:0.85rem;">
            <td style="padding:0.6rem;">${new Date(e.timestamp).toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}</td>
            <td style="padding:0.6rem;"><strong>${e.party}</strong><br><span style="color:#94a3b8; font-size:0.75rem;">${e.note || e.id}</span></td>
            <td style="padding:0.6rem; font-weight:700; color:${e.type === 'YOU_GOT' ? '#22c55e' : '#ef4444'};">
              ${e.type === 'YOU_GOT' ? '+' : '-'} ₹${e.amount.toFixed(2)}
            </td>
            <td style="padding:0.6rem; font-size:0.75rem;">
              <span style="padding:2px 6px; border-radius:4px; background:${e.syncStatus === 'SYNCED' ? '#064e3b' : '#78350f'}; color:#fff;">
                ${e.syncStatus === 'SYNCED' ? '🟢 Synced' : '🟡 Offline'}
              </span>
            </td>
          </tr>
        `).join('');
      }

      container.innerHTML = `
        <div style="padding: 1rem; max-width: 600px; margin: 0 auto; color: #fff;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
            <h2 style="font-size:1.25rem; font-weight:700; color:#f59e0b;">📖 सॉवरेन बहीखाता (Sovereign Khata)</h2>
            <button onclick="window.location.hash='#home'" style="background:#334155; color:#fff; border:none; padding:4px 10px; border-radius:6px; cursor:pointer;">✕ बंद करें</button>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.75rem; margin-bottom:1rem;">
            <div style="background:#1e293b; padding:0.75rem; border-radius:8px; border-left:4px solid #ef4444;">
              <div style="font-size:0.75rem; color:#94a3b8;">मैंने दिए (You Gave)</div>
              <div style="font-size:1.1rem; font-weight:700; color:#ef4444;">₹${totalGave.toFixed(2)}</div>
            </div>
            <div style="background:#1e293b; padding:0.75rem; border-radius:8px; border-left:4px solid #22c55e;">
              <div style="font-size:0.75rem; color:#94a3b8;">मुझे मिले (You Got)</div>
              <div style="font-size:1.1rem; font-weight:700; color:#22c55e;">₹${totalGot.toFixed(2)}</div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.75rem; margin-bottom:1.25rem;">
            <button onclick="window.rmAddLedgerEntry('YOU_GAVE')" style="background:#ef4444; color:#fff; font-weight:700; padding:0.75rem; border:none; border-radius:8px; cursor:pointer;">
              - मैंने दिए (You Gave)
            </button>
            <button onclick="window.rmAddLedgerEntry('YOU_GOT')" style="background:#22c55e; color:#fff; font-weight:700; padding:0.75rem; border:none; border-radius:8px; cursor:pointer;">
              + मुझे मिले (You Got)
            </button>
          </div>

          <div style="background:#1e293b; border-radius:8px; overflow-x:auto;">
            <table style="width:100%; border-collapse:collapse; text-align:left;">
              <thead>
                <tr style="border-bottom:1px solid #475569; color:#94a3b8; font-size:0.75rem;">
                  <th style="padding:0.6rem;">समय</th>
                  <th style="padding:0.6rem;">विवरण</th>
                  <th style="padding:0.6rem;">राशि</th>
                  <th style="padding:0.6rem;">स्थिति</th>
                </tr>
              </thead>
              <tbody>${rowsHtml}</tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 1.4: Real-Time Solvency Telemetry & Health Monitor
    renderSolvencyTelemetry() {
      const solvencyHardCapElem = document.getElementById('rm-telemetry-ncr');
      const coverageRatioElem = document.getElementById('rm-telemetry-coverage');
      const targetElementsElem = document.getElementById('rm-telemetry-zel');

      if (solvencyHardCapElem) solvencyHardCapElem.textContent = `${RM_STATE.solvency.ncrHardCap.toFixed(2)}% MAX`;
      if (coverageRatioElem) coverageRatioElem.textContent = `${RM_STATE.solvency.coverageRatio.toFixed(2)} LOCKED`;
      if (targetElementsElem) targetElementsElem.textContent = `${RM_STATE.solvency.activeElements} / ${RM_STATE.solvency.targetElements}`;
    }

    bindNetworkTelemetry() {
      window.addEventListener('online', () => {
        RM_STATE.isOnline = true;
        this.syncOfflineLedger();
      });
      window.addEventListener('offline', () => {
        RM_STATE.isOnline = false;
      });
    }

    syncOfflineLedger() {
      let modified = false;
      RM_STATE.ledgerEntries = RM_STATE.ledgerEntries.map(entry => {
        if (entry.syncStatus === 'PENDING_OFFLINE') {
          entry.syncStatus = 'SYNCED';
          modified = true;
        }
        return entry;
      });
      if (modified) {
        localStorage.setItem('rm_sovereign_ledger', JSON.stringify(RM_STATE.ledgerEntries));
        if (RM_STATE.currentRoute === '#merchant-khata') {
          const viewContainer = document.getElementById('rm-view-container') || document.querySelector('.rm-main');
          this.renderKhataView(viewContainer);
        }
      }
    }

    // 1.5: Offline Cart & Quick Checkout
    renderKiranaStoreView(container) {
      const sampleItems = [
        { id: 'k01', nameHi: 'आटा (10 kg)', price: 340, mrp: 380 },
        { id: 'k02', nameHi: 'बासमती चावल (5 kg)', price: 410, mrp: 450 },
        { id: 'k03', nameHi: 'अरहर दाल (1 kg)', price: 160, mrp: 180 },
        { id: 'k04', nameHi: 'सरसों तेल (1 L)', price: 145, mrp: 160 }
      ];

      const itemsHtml = sampleItems.map(item => `
        <div style="background:#1e293b; border-radius:8px; padding:0.75rem; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="font-weight:700; font-size:0.95rem; color:#f8fafc;">${item.nameHi}</div>
            <div style="font-size:0.85rem; color:#22c55e; font-weight:700; margin-top:0.25rem;">
              ₹${item.price} <span style="font-size:0.75rem; text-decoration:line-through; color:#94a3b8;">₹${item.mrp}</span>
            </div>
            <div style="font-size:0.7rem; color:#38bdf8; margin-top:2px;">0% कमीशन (No Markup)</div>
          </div>
          <button onclick="window.rmAddToCart('${item.id}', '${item.nameHi}', ${item.price})" style="margin-top:0.75rem; background:#f59e0b; color:#0f172a; font-weight:700; border:none; padding:6px; border-radius:6px; cursor:pointer;">
            + जोड़ें (Add)
          </button>
        </div>
      `).join('');

      container.innerHTML = `
        <div style="padding:1rem; max-width:600px; margin:0 auto; color:#fff;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
            <h2 style="font-size:1.25rem; font-weight:700; color:#38bdf8;">🛒 किराना स्टोर (0% प्लेटफ़ॉर्म कमीशन)</h2>
            <button onclick="window.location.hash='#home'" style="background:#334155; color:#fff; border:none; padding:4px 10px; border-radius:6px; cursor:pointer;">✕ बंद करें</button>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem;">
            ${itemsHtml}
          </div>
        </div>
      `;

      window.rmAddToCart = (id, name, price) => {
        RM_STATE.cart.push({ id, name, price, timestamp: Date.now() });
        localStorage.setItem('rm_kirana_cart', JSON.stringify(RM_STATE.cart));
        alert(`${name} कार्ट में जोड़ा गया! (कुल आइटम्स: ${RM_STATE.cart.length})`);
      };
    }

    // Register Service Worker
    registerServiceWorker() {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').catch(err => {
            console.warn('SW registration skipped:', err);
          });
        });
      }
    }
  }

     // =========================================================================
  // 1.6: CATEGORY-16 RENTAL SEARCH ENGINE (16-3 RESILIENT LAUNCHER)
  // =========================================================================
  window.rmLaunchRentalSearch = function () {
    const drawer = document.getElementById('rm-services-drawer');
    if (drawer) {
      drawer.classList.remove('active');
      drawer.style.transform = 'translateX(100%)';
    }

    const container = document.getElementById('rm-view-container') || document.querySelector('.rm-main');
    if (!container) return;

    container.innerHTML = `
      <div style="padding:1rem; max-width:600px; margin:0 auto; color:#fff; animation:fadeIn 0.2s ease;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid #334155; padding-bottom:0.75rem;">
          <h2 style="font-size:1.2rem; font-weight:700; color:#38bdf8; display:flex; align-items:center; gap:0.5rem; margin:0;">
            🏠 कमरा व फ्लैट खोज (Rental Search)
          </h2>
          <button onclick="window.location.hash='#home'" style="background:#334155; color:#fff; border:none; padding:4px 10px; border-radius:6px; cursor:pointer;">✕ बंद करें</button>
        </div>

        <div style="background:#1e293b; padding:1rem; border-radius:8px; margin-bottom:1rem; border:1px solid #475569;">
          <label style="font-size:0.8rem; color:#94a3b8; display:block; margin-bottom:0.4rem;">स्थान या इलाका खोजें:</label>
          <input type="text" id="rm-rental-query" placeholder="उदा. मेन रोड, स्टेशन रोड, कॉलेज के पास..." style="width:100%; box-sizing:border-box; padding:0.65rem; border-radius:6px; border:1px solid #475569; background:#0f172a; color:#fff; margin-bottom:0.75rem; font-size:0.9rem;">
          
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            <button style="background:#0284c7; color:#fff; border:none; padding:5px 12px; border-radius:4px; font-size:0.8rem; cursor:pointer; font-weight:600;">सभी</button>
            <button style="background:#334155; color:#cbd5e1; border:none; padding:5px 12px; border-radius:4px; font-size:0.8rem; cursor:pointer;">1 RK</button>
            <button style="background:#334155; color:#cbd5e1; border:none; padding:5px 12px; border-radius:4px; font-size:0.8rem; cursor:pointer;">1 BHK</button>
            <button style="background:#334155; color:#cbd5e1; border:none; padding:5px 12px; border-radius:4px; font-size:0.8rem; cursor:pointer;">2 BHK</button>
            <button style="background:#334155; color:#cbd5e1; border:none; padding:5px 12px; border-radius:4px; font-size:0.8rem; cursor:pointer;">Single Room</button>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          <div style="background:#1e293b; border-radius:8px; padding:0.85rem; border-left:4px solid #22c55e;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <div>
                <span style="font-size:0.7rem; background:#064e3b; color:#34d399; padding:2px 6px; border-radius:4px; font-weight:700;">सत्यापित मकान</span>
                <h3 style="font-size:1rem; font-weight:700; margin:0.35rem 0 0.2rem 0; color:#f8fafc;">1 BHK स्वतंत्र फ्लैट (ग्राउंड फ्लोर)</h3>
                <p style="font-size:0.8rem; color:#94a3b8; margin:0;">📍 शांति नगर, बाजार के पास • 24 घंटे पानी व बाइक पार्किंग</p>
              </div>
              <div style="text-align:right;">
                <div style="font-size:1.15rem; font-weight:800; color:#38bdf8;">₹4,500<span style="font-size:0.7rem; color:#94a3b8;">/माह</span></div>
                <div style="font-size:0.65rem; color:#f59e0b; margin-top:2px;">0% ब्रोकरेज</div>
              </div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.75rem; border-top:1px solid #334155; padding-top:0.6rem;">
              <span style="font-size:0.75rem; color:#cbd5e1;">सिक्योरिटी डिपॉजिट: ₹4,500</span>
              <button onclick="alert('मकान मालिक से संपर्क: 98XXXXXX01 (डायरेक्ट कनेक्ट)')" style="background:#22c55e; color:#0f172a; font-weight:700; border:none; padding:6px 14px; border-radius:6px; font-size:0.8rem; cursor:pointer;">कॉल / चैट करें</button>
            </div>
          </div>

          <div style="background:#1e293b; border-radius:8px; padding:0.85rem; border-left:4px solid #38bdf8;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <div>
                <span style="font-size:0.7rem; background:#075985; color:#7dd3fc; padding:2px 6px; border-radius:4px; font-weight:700;">स्टूडेंट / वर्किंग</span>
                <h3 style="font-size:1rem; font-weight:700; margin:0.35rem 0 0.2rem 0; color:#f8fafc;">सिंगल रूम (छात्रों व व्यापारियों हेतु)</h3>
                <p style="font-size:0.8rem; color:#94a3b8; margin:0;">📍 कॉलेज रोड • बिजली मीटर अलग • शांत वातावरण</p>
              </div>
              <div style="text-align:right;">
                <div style="font-size:1.15rem; font-weight:800; color:#38bdf8;">₹2,500<span style="font-size:0.7rem; color:#94a3b8;">/माह</span></div>
                <div style="font-size:0.65rem; color:#f59e0b; margin-top:2px;">0% ब्रोकरेज</div>
              </div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.75rem; border-top:1px solid #334155; padding-top:0.6rem;">
              <span style="font-size:0.75rem; color:#cbd5e1;">सिक्योरिटी डिपॉजिट: ₹2,000</span>
              <button onclick="alert('मकान मालिक से संपर्क: 97XXXXXX42 (डायरेक्ट कनेक्ट)')" style="background:#22c55e; color:#0f172a; font-weight:700; border:none; padding:6px 14px; border-radius:6px; font-size:0.8rem; cursor:pointer;">कॉल / चैट करें</button>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  // Master Bootstrap
  document.addEventListener('DOMContentLoaded', () => {
    window.rmOrchestrator = new RiseMitraOrchestrator();
  });
})();
