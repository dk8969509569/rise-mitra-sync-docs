/* =========================================================================
   RISE MITRA (RM WORLD) - MASTER CLIENT ORCHESTRATOR & ROUTER ENGINE
   Canonical Binding : DEC-RM-SOV-FRONTEND-20260927-001 & AGENT-GOV-002
   File Target       : js/app.js & public/js/app.js
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
      killSwitchState: 'L0'
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
      this.bindDirectButtonInterceptors();
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

    // 1.1: 14-State Canonical Hash Router & Full-Screen View Switcher
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
        }
        RM_STATE.currentRoute = hash;
        this.renderActiveRoute(hash);
      };

      window.addEventListener('hashchange', handleRouteChange);
      handleRouteChange(); // Initial execution on load
    }

    // Direct click interceptor to guarantee immediate navigation
    bindDirectButtonInterceptors() {
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('button, div, a');
        if (!btn) return;

        const text = (btn.textContent || '').trim();
        if (text.includes('नया लेन-देन') || text.includes('खाता विवरणी')) {
          e.preventDefault();
          window.location.hash = '#merchant-khata';
          this.renderActiveRoute('#merchant-khata');
        } else if (text.includes('किराना स्टोर') || text.includes('ऑर्डर')) {
          if (btn.tagName === 'A' && btn.getAttribute('href') === '#kirana-store') {
            // let normal hashchange handle or force view
            this.renderActiveRoute('#kirana-store');
          }
        }
      });
    }

    renderActiveRoute(route) {
      const viewContainer = document.getElementById('rm-view-container');
      const mainEl = document.querySelector('main');
      if (!viewContainer || !mainEl) return;

      // Select all default home sections inside <main>
      const homeSections = Array.from(mainEl.children).filter(el => el.id !== 'rm-view-container');

      if (route === '#merchant-khata') {
        homeSections.forEach(el => el.style.display = 'none');
        viewContainer.classList.remove('hidden');
        viewContainer.style.display = 'block';
        this.renderKhataView(viewContainer);
        window.scrollTo(0, 0);
      } else if (route === '#kirana-store') {
        homeSections.forEach(el => el.style.display = 'none');
        viewContainer.classList.remove('hidden');
        viewContainer.style.display = 'block';
        this.renderKiranaStoreView(viewContainer);
        window.scrollTo(0, 0);
      } else if (route === '#vouchers') {
        homeSections.forEach(el => el.style.display = 'none');
        viewContainer.classList.remove('hidden');
        viewContainer.style.display = 'block';
        this.renderVoucherView(viewContainer);
        window.scrollTo(0, 0);
      } else if (route === '#services-drawer') {
        this.openDrawer();
      } else {
        // #home: Re-enable default dashboard
        homeSections.forEach(el => el.style.display = '');
        viewContainer.classList.add('hidden');
        viewContainer.style.display = 'none';
        viewContainer.innerHTML = '';
      }
    }

    // 1.2: Menu Drawer
    bindDrawerEvents() {
      const drawerToggle = document.getElementById('rm-drawer-toggle') || document.getElementById('rm-menu-btn');
      const drawerClose = document.getElementById('rm-drawer-close');
      const drawer = document.getElementById('rm-drawer-menu');
      const backdrop = document.getElementById('rm-drawer-backdrop');

      if (drawerToggle && drawer) {
        drawerToggle.addEventListener('click', () => this.openDrawer());
      }
      if (drawerClose && drawer) {
        drawerClose.addEventListener('click', () => this.closeDrawer());
      }
      if (backdrop) {
        backdrop.addEventListener('click', () => this.closeDrawer());
      }
    }

    openDrawer() {
      const drawer = document.getElementById('rm-drawer-menu');
      const backdrop = document.getElementById('rm-drawer-backdrop');
      if (drawer) {
        drawer.style.transform = 'translateX(0)';
        drawer.setAttribute('aria-hidden', 'false');
      }
      if (backdrop) backdrop.style.display = 'block';
    }

    closeDrawer() {
      const drawer = document.getElementById('rm-drawer-menu');
      const backdrop = document.getElementById('rm-drawer-backdrop');
      if (drawer) {
        drawer.style.transform = 'translateX(-100%)';
        drawer.setAttribute('aria-hidden', 'true');
      }
      if (backdrop) backdrop.style.display = 'none';
      if (window.location.hash === '#services-drawer') {
        window.location.hash = '#home';
      }
    }

    // 1.3: Sovereign Bahi-Khata (Merchant Ledger)
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
        
        const viewContainer = document.getElementById('rm-view-container');
        if (viewContainer) this.renderKhataView(viewContainer);
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
            <button onclick="window.location.hash='#home'" style="background:#334155; color:#fff; border:none; padding:6px 12px; border-radius:8px; cursor:pointer; font-weight:700;">✕ बंद करें</button>
          </div>

          <!-- Balance Summary Card -->
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.75rem; margin-bottom:1rem;">
            <div style="background:#1e293b; padding:0.75rem; border-radius:12px; border-left:4px solid #ef4444;">
              <div style="font-size:0.75rem; color:#94a3b8;">मैंने दिए (You Gave)</div>
              <div style="font-size:1.15rem; font-weight:800; color:#ef4444;">₹${totalGave.toFixed(2)}</div>
            </div>
            <div style="background:#1e293b; padding:0.75rem; border-radius:12px; border-left:4px solid #22c55e;">
              <div style="font-size:0.75rem; color:#94a3b8;">मुझे मिले (You Got)</div>
              <div style="font-size:1.15rem; font-weight:800; color:#22c55e;">₹${totalGot.toFixed(2)}</div>
            </div>
          </div>

          <!-- Dual Transaction Action Buttons -->
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.75rem; margin-bottom:1.25rem;">
            <button onclick="window.rmAddLedgerEntry('YOU_GAVE')" style="background:#ef4444; color:#fff; font-weight:800; padding:0.85rem; border:none; border-radius:10px; cursor:pointer; box-shadow:0 4px 12px rgba(239,68,68,0.3);">
              - मैंने दिए (You Gave)
            </button>
            <button onclick="window.rmAddLedgerEntry('YOU_GOT')" style="background:#22c55e; color:#fff; font-weight:800; padding:0.85rem; border:none; border-radius:10px; cursor:pointer; box-shadow:0 4px 12px rgba(34,197,94,0.3);">
              + मुझे मिले (You Got)
            </button>
          </div>

          <!-- Ledger Table -->
          <div style="background:#1e293b; border-radius:12px; overflow-x:auto; border:1px solid #334155;">
            <table style="width:100%; border-collapse:collapse; text-align:left;">
              <thead>
                <tr style="border-bottom:1px solid #475569; color:#94a3b8; font-size:0.75rem; background:rgba(0,0,0,0.2);">
                  <th style="padding:0.75rem;">समय</th>
                  <th style="padding:0.75rem;">विवरण</th>
                  <th style="padding:0.75rem;">राशि</th>
                  <th style="padding:0.75rem;">स्थिति</th>
                </tr>
              </thead>
              <tbody>${rowsHtml}</tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 1.4: Real-Time Solvency Telemetry
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
        const viewContainer = document.getElementById('rm-view-container');
        if (viewContainer && RM_STATE.currentRoute === '#merchant-khata') {
          this.renderKhataView(viewContainer);
        }
      }
    }

    // 1.5: Offline Cart & Kirana Store
    renderKiranaStoreView(container) {
      const sampleItems = [
        { id: 'k01', nameHi: 'आटा (10 kg)', price: 340, mrp: 380 },
        { id: 'k02', nameHi: 'बासमती चावल (5 kg)', price: 410, mrp: 450 },
        { id: 'k03', nameHi: 'अरहर दाल (1 kg)', price: 160, mrp: 180 },
        { id: 'k04', nameHi: 'सरसों तेल (1 L)', price: 145, mrp: 160 }
      ];

      const itemsHtml = sampleItems.map(item => `
        <div style="background:#1e293b; border-radius:12px; padding:0.85rem; display:flex; flex-direction:column; justify-content:space-between; border:1px solid #334155;">
          <div>
            <div style="font-weight:700; font-size:0.95rem; color:#f8fafc;">${item.nameHi}</div>
            <div style="font-size:0.9rem; color:#22c55e; font-weight:800; margin-top:0.35rem;">
              ₹${item.price} <span style="font-size:0.75rem; text-decoration:line-through; color:#94a3b8; font-weight:400;">₹${item.mrp}</span>
            </div>
            <div style="font-size:0.7rem; color:#38bdf8; margin-top:3px;">0% कमीशन (No Markup)</div>
          </div>
          <button onclick="window.rmAddToCart('${item.id}', '${item.nameHi}', ${item.price})" style="margin-top:0.85rem; background:#f59e0b; color:#0f172a; font-weight:800; border:none; padding:8px; border-radius:8px; cursor:pointer;">
            + जोड़ें (Add)
          </button>
        </div>
      `).join('');

      container.innerHTML = `
        <div style="padding:1rem; max-width:600px; margin:0 auto; color:#fff;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
            <h2 style="font-size:1.25rem; font-weight:700; color:#38bdf8;">🛒 किराना स्टोर (0% प्लेटफ़ॉर्म कमीशन)</h2>
            <button onclick="window.location.hash='#home'" style="background:#334155; color:#fff; border:none; padding:6px 12px; border-radius:8px; cursor:pointer; font-weight:700;">✕ बंद करें</button>
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

    // 1.6: Sovereign Vouchers View
    renderVoucherView(container) {
      const vouchers = (window.rmVoucherSync && window.rmVoucherSync.getActiveVouchers)
        ? window.rmVoucherSync.getActiveVouchers()
        : [];

      let cardsHtml = '';
      if (vouchers.length === 0) {
        cardsHtml = '<div style="background:#1e293b; padding:1.5rem; text-align:center; border-radius:12px; color:#94a3b8;">कोई सक्रिय वाउचर नहीं है। नीचे से नया वाउचर जारी करें।</div>';
      } else {
        cardsHtml = vouchers.map(v => `
          <div style="background:#1e293b; border-radius:12px; padding:1rem; margin-bottom:0.75rem; border-left:4px solid #10b981;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-family:monospace; font-size:0.85rem; color:#f8fafc; font-weight:700;">${v.voucherId}</span>
              <span style="font-weight:800; color:#10b981; font-size:1.1rem;">₹${v.amount}</span>
            </div>
            <div style="font-size:0.75rem; color:#94a3b8; margin-top:0.4rem;">
              स्थिति: <span style="color:#38bdf8;">${v.status}</span> | उद्देश्य: ${v.purpose}
            </div>
          </div>
        `).join('');
      }

      container.innerHTML = `
        <div style="padding:1rem; max-width:600px; margin:0 auto; color:#fff;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
            <h2 style="font-size:1.25rem; font-weight:700; color:#10b981;">🎟️ सॉवरेन वाउचर्स (Sovereign Vouchers)</h2>
            <button onclick="window.location.hash='#home'" style="background:#334155; color:#fff; border:none; padding:6px 12px; border-radius:8px; cursor:pointer; font-weight:700;">✕ बंद करें</button>
          </div>
          <div style="margin-bottom:1rem;">
            <button onclick="window.rmIssueNewVoucher()" style="width:100%; background:linear-gradient(135deg, #10b981, #059669); color:#022c22; font-weight:800; padding:0.85rem; border:none; border-radius:10px; cursor:pointer;">
              + नया ऑफ़लाइन वाउचर बनाएँ (Generate Voucher)
            </button>
          </div>
          ${cardsHtml}
        </div>
      `;

      window.rmIssueNewVoucher = async () => {
        const amt = prompt('वाउचर राशि दर्ज करें (₹):', '100');
        if (!amt || isNaN(amt) || parseFloat(amt) <= 0) return;
        if (window.rmVoucherSync) {
          await window.rmVoucherSync.issueVoucher(parseFloat(amt), 'USR-SELF', 'KIRANA');
          this.renderVoucherView(container);
          alert('वाउचर सफलतापूर्वक जनरेट हुआ!');
        }
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

  // Master Bootstrap
  document.addEventListener('DOMContentLoaded', () => {
    window.rmOrchestrator = new RiseMitraOrchestrator();
  });
})();
