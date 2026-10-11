/**
 * RISE MITRA — SOVEREIGN IN-SITU MASTER DOCK, CLOAKING & ANTI-OVERLAP ENGINE
 * SPECIFICATION : FOLDER A (MASTER DOCUMENT SSOT)
 * GOVERNANCE    : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0
 * REPO TARGET   : public/js/insitu-dock-engine.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT)
 *   Folder B (GitHub Mirror Sync)
 */

(function () {
  'use strict';

  // =========================================================================
  // 0. UNIVERSAL CATALOG ANTI-OVERLAP & ANTI-DOME CSS SHIELD (RUNS ALWAYS)
  // =========================================================================
  const catalogCleanShield = document.createElement('style');
  catalogCleanShield.id = 'rm-universal-catalog-clean-shield-css';
  catalogCleanShield.textContent = `
    /* 1. Universal Anti-Overlap: Vertical 12px Clean Stacking */
    #categoryModal #tier1-list > div,
    #categoryModal #tier2-list > div,
    #categoryModal #tier1-list div,
    #categoryModal #tier2-list div,
    #categoryModal [class*="card"],
    #categoryModal [id^="cat-"],
    #categoryModal [data-cat-id] {
      position: relative !important;
      margin-top: 12px !important;
      margin-bottom: 12px !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      border-radius: 16px !important;
      top: auto !important;
      bottom: auto !important;
      left: auto !important;
      right: auto !important;
      transform: none !important;
      clip-path: none !important;
      -webkit-clip-path: none !important;
      clear: both !important;
      float: none !important;
      box-sizing: border-box !important;
    }

    /* 2. Universal Anti-Dome: Eradicate 50% / Oval Border-Radius */
    #categoryModal div,
    #tier1-list div,
    #tier2-list div,
    #categoryModal [style*="border-radius: 50%"],
    #categoryModal [style*="border-radius:50%"],
    #categoryModal [style*="border-radius: 100px"] {
      border-radius: 16px !important;
    }

    /* Keep native round badges and avatars intact */
    #categoryModal .rounded-full,
    #categoryModal [class*="rounded-full"],
    #header-user-avatar {
      border-radius: 9999px !important;
    }

    /* 3. Strip Negative Margins on Category Cards */
    #categoryModal [style*="margin-top:-"],
    #categoryModal [style*="margin-top: -"] {
      margin-top: 12px !important;
    }

    /* 4. Suppress Radar Rings, Ripples and Overlays */
    #categoryModal .sivme-radar-ring,
    #categoryModal .sivme-ripple,
    #categoryModal .sivme-radar-layer,
    #categoryModal [class*="radar"],
    #categoryModal [class*="ripple"] {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }
  `;
  (document.head || document.documentElement).appendChild(catalogCleanShield);

  // Active DOM Sanitizer to eliminate inline dome styles
  function sanitizeCatalogDOM() {
    const modal = document.getElementById('categoryModal');
    if (!modal) return;

    modal.querySelectorAll('#tier1-list > div, #tier2-list > div, [data-cat-id]').forEach(card => {
      // Reset negative margin
      if (card.style.marginTop && card.style.marginTop.includes('-')) {
        card.style.setProperty('margin-top', '12px', 'important');
      }
      card.style.setProperty('margin-bottom', '12px', 'important');

      // Reset dome curves
      if (card.style.borderRadius && (card.style.borderRadius.includes('50%') || parseInt(card.style.borderRadius) > 24)) {
        card.style.setProperty('border-radius', '16px', 'important');
      }

      // Neutralize absolute positioning
      if (card.style.position === 'absolute') {
        card.style.setProperty('position', 'relative', 'important');
      }
    });

    // Remove legacy radar ring layers
    modal.querySelectorAll('.sivme-radar-ring, .sivme-ripple, .sivme-radar-layer').forEach(el => el.remove());
  }

  // Hook sanitizer to clicks and accordion toggles
  document.addEventListener('click', () => setTimeout(sanitizeCatalogDOM, 80));
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sanitizeCatalogDOM);
  } else {
    sanitizeCatalogDOM();
  }

  const urlParams = new URLSearchParams(window.location.search);
  const isOwner = urlParams.get('sov_mode') === 'in_situ' || 
                  urlParams.get('sivme') === 'owner' || 
                  urlParams.get('dev_auto') === '1';

  // Helper: Extract hidden items from Sovereign Visibility Registry
  function getHiddenKeys() {
    try {
      const raw = localStorage.getItem('rm_sovereign_visibility_registry_v1');
      if (!raw) return [];
      const reg = JSON.parse(raw);
      const map = reg.items || reg.registry || reg || {};
      return Object.keys(map).filter(k => {
        const v = map[k];
        return v === false || v?.visible === false || v?.status === 'hidden';
      });
    } catch (_) {
      return [];
    }
  }

  // =========================================================================
  // 1. PUBLIC MODE CLOAKING ENFORCER (Executes when isOwner is FALSE)
  // =========================================================================
  if (!isOwner) {
    const hiddenKeys = getHiddenKeys();
    if (hiddenKeys.length > 0) {
      const selectors = [];

      hiddenKeys.forEach(urn => {
        selectors.push(`[data-sov-urn="${urn}"]`);
        selectors.push(`[data-target-urn="${urn}"]`);
        selectors.push(`[data-badge-urn="${urn}"]`);

        if (urn === 'rm:elem:dir-menu-btn') selectors.push('#cat-menu-btn');
        if (urn === 'rm:card:rm-cash') selectors.push('.wallet-card');
        if (urn === 'rm:elem:home-search') selectors.push('.sivme-search-container');

        const catMatch = urn.match(/^rm:cat:(\d+)$/);
        if (catMatch) {
          const num = catMatch[1];
          const intNum = parseInt(num, 10);
          selectors.push(`[data-cat-id="${num}"]`);
          selectors.push(`[data-cat-id="${intNum}"]`);
          selectors.push(`[data-cat-id="c${num}"]`);
          selectors.push(`[data-cat-id="c${intNum}"]`);
          selectors.push(`[onclick*="'c${num}'"]`);
          selectors.push(`[onclick*="'${num}'"]`);
        }

        const subMatch = urn.match(/^rm:cat:(\d+):sub:(\d+)-(\d+)$/);
        if (subMatch) {
          const catNum = subMatch[1];
          const subIdx = subMatch[3];
          selectors.push(`#sub-c${catNum} > div:nth-child(${subIdx})`);
        }

        const safeKey = urn.replace(/[^a-zA-Z0-9_-]/g, '\\$&');
        selectors.push(`#${safeKey}`);
        selectors.push(`[data-id="${urn}"]`);
      });

      let cloakStyle = document.getElementById('rm-public-cloaking-shield');
      if (!cloakStyle) {
        cloakStyle = document.createElement('style');
        cloakStyle.id = 'rm-public-cloaking-shield';
        (document.head || document.documentElement).appendChild(cloakStyle);
      }
      cloakStyle.textContent = `
        ${selectors.join(',\n        ')} {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
          height: 0 !important;
          min-height: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          border: none !important;
          overflow: hidden !important;
        }
      `;

      function sweepDOM() {
        hiddenKeys.forEach(urn => {
          if (urn === 'rm:elem:dir-menu-btn') {
            const el = document.getElementById('cat-menu-btn');
            if (el) el.style.setProperty('display', 'none', 'important');
          }
          if (urn === 'rm:card:rm-cash') {
            const el = document.querySelector('.wallet-card');
            if (el) el.style.setProperty('display', 'none', 'important');
          }
          if (urn === 'rm:elem:home-search') {
            const inp = document.getElementById('liveSearchInput');
            if (inp && inp.parentElement) inp.parentElement.style.setProperty('display', 'none', 'important');
          }

          const catMatch = urn.match(/^rm:cat:(\d+)$/);
          if (catMatch) {
            const num = catMatch[1];
            const intNum = parseInt(num, 10);
            document.querySelectorAll(
              `[data-cat-id="${num}"], [data-cat-id="${intNum}"], [data-cat-id="c${num}"], [data-cat-id="c${intNum}"], [onclick*="'c${num}'"], [onclick*="'${num}'"]`
            ).forEach(node => node.style.setProperty('display', 'none', 'important'));
          }

          document.querySelectorAll(`[data-sov-urn="${urn}"], [data-target-urn="${urn}"]`).forEach(node => {
            node.style.setProperty('display', 'none', 'important');
          });
        });
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', sweepDOM);
      } else {
        sweepDOM();
      }
      setTimeout(sweepDOM, 250);

      const observer = new MutationObserver(sweepDOM);
      observer.observe(document.documentElement, { childList: true, subtree: true });
    }
    return;
  }

  // =========================================================================
  // 2. OWNER IN-SITU MODE (Executes when isOwner is TRUE)
  // =========================================================================

  try {
    sessionStorage.setItem('rm_sov_in_situ_session', 'SOV_ACTIVE_2026');
    localStorage.setItem('rm_sov_in_situ_session', 'SOV_ACTIVE_2026');
  } catch (_) {}

  const masterShieldStyle = document.createElement('style');
  masterShieldStyle.id = 'rm-master-insitu-shield-css';
  masterShieldStyle.textContent = `
    [id*="sivme"]:not(#rm-master-insitu-dock),
    [id*="hud"]:not(#rm-master-insitu-dock),
    .sivme-hud-dock:not(#rm-master-insitu-dock),
    #sivmeFloatingDock {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }

    #rm-master-insitu-dock {
      position: fixed !important;
      bottom: 68px !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      z-index: 9999999 !important;
      display: flex !important;
      opacity: 1 !important;
      pointer-events: auto !important;
      background: #030a16 !important;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9), 0 0 15px rgba(16, 185, 129, 0.3) !important;
    }

    .sivme-inline-badge,
    .sivme-notch-pill,
    [data-badge-vis],
    .cat-action-btn,
    .sivme-tracked-live,
    .sivme-tracked-hidden {
      z-index: 20 !important;
    }
  `;
  document.head.appendChild(masterShieldStyle);

  const scripts = [
    '/js/sovereign-in-situ-registry.js',
    '/js/sovereign-in-situ-hud.js'
  ];
  scripts.forEach(src => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    document.body.appendChild(s);
  });

  function purgeDuplicateDocks() {
    const master = document.getElementById('rm-master-insitu-dock');
    document.querySelectorAll('body > div, body > footer, [class*="fixed"]').forEach(el => {
      if (el === master || master?.contains(el)) return;
      if (el === document.body || el === document.documentElement) return;

      if (el.id !== 'rm-master-insitu-dock' && 
          el.textContent && 
          el.textContent.includes('OWNER IN-SITU') && 
          el.textContent.includes('Disable')) {
        el.remove();
      }
    });
  }

  function getHiddenCount() {
    const domCount = document.querySelectorAll(
      '[data-badge-vis="false"], .sivme-tracked-hidden, [data-sivme-status="hidden"], .sivme-ghost-dormant'
    ).length;
    if (domCount > 0) return domCount;

    return getHiddenKeys().length;
  }

  function updateDockCount() {
    const badge = document.getElementById('rm-dock-hidden-count');
    if (badge) {
      badge.textContent = getHiddenCount();
    }
  }

  function renderInSituDock() {
    purgeDuplicateDocks();
    if (document.getElementById('rm-master-insitu-dock')) {
      updateDockCount();
      return;
    }

    const dock = document.createElement('div');
    dock.id = 'rm-master-insitu-dock';
    dock.className = 'fixed bottom-[68px] left-1/2 -translate-x-1/2 z-[9999999] flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#030a16] border border-emerald-500/80 shadow-2xl backdrop-blur-md select-none';
    dock.style.cssText = 'position: fixed !important; bottom: 68px !important; left: 50% !important; transform: translateX(-50%) !important; z-index: 9999999 !important; background: #030a16 !important; pointer-events: auto !important;';

    dock.innerHTML = `
      <div class="flex items-center space-x-1.5">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span class="text-[10px] font-black tracking-wider text-emerald-300 uppercase">OWNER IN-SITU</span>
      </div>
      <span class="text-slate-600 text-xs">|</span>
      <span class="text-[10px] font-bold text-red-400">Hidden: <span id="rm-dock-hidden-count">${getHiddenCount()}</span></span>
      <button type="button" onclick="window.disableOwnerInSitu()" class="px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-[9px] font-bold border border-slate-700 active:scale-95 cursor-pointer">Disable</button>
      <button type="button" onclick="window.location.reload()" class="px-2.5 py-0.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black text-[10px] flex items-center space-x-1 active:scale-95 cursor-pointer">
        <span>⚡</span><span>Reload</span>
      </button>
    `;
    document.body.appendChild(dock);
  }

  window.disableOwnerInSitu = function () {
    try {
      sessionStorage.removeItem('rm_sov_in_situ_session');
      localStorage.removeItem('rm_sov_in_situ_session');
      localStorage.removeItem('sivme_active');
      localStorage.removeItem('sivme_mode');
    } catch (_) {}
    window.location.href = window.location.pathname;
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderInSituDock);
  } else {
    renderInSituDock();
  }
  setTimeout(renderInSituDock, 300);

  window.addEventListener('storage', updateDockCount);
  document.addEventListener('click', () => setTimeout(updateDockCount, 200));
  setInterval(updateDockCount, 500);
  setInterval(purgeDuplicateDocks, 300);
  setInterval(sanitizeCatalogDOM, 400);
})();
