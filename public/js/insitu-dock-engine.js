/**
 * RISE MITRA — SOVEREIGN IN-SITU MASTER DOCK ENGINE (Z-INDEX SHIELD & AUDIT)
 * SPECIFICATION : FOLDER A (MASTER DOCUMENT SSOT)
 * GOVERNANCE    : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0
 * REPO TARGET   : public/js/insitu-dock-engine.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT)
 *   Folder B (GitHub Mirror Sync)
 */

(function () {
  'use strict';

  const urlParams = new URLSearchParams(window.location.search);
  const isOwner = urlParams.get('sov_mode') === 'in_situ' || 
                  urlParams.get('sivme') === 'owner' || 
                  urlParams.get('dev_auto') === '1';

  if (!isOwner) return;

  // 1. Force activate authorization tokens for fail-closed bypass
  try {
    sessionStorage.setItem('rm_sov_in_situ_session', 'SOV_ACTIVE_2026');
    localStorage.setItem('rm_sov_in_situ_session', 'SOV_ACTIVE_2026');
  } catch (_) {}

  // 2. Inject Master Z-Index Shield: Dock stays on TOP of all badges (z-index: 9999999)
  const masterShieldStyle = document.createElement('style');
  masterShieldStyle.id = 'rm-master-insitu-shield-css';
  masterShieldStyle.textContent = `
    /* Eliminate legacy duplicate dock collision */
    [id*="sivme"]:not(#rm-master-insitu-dock),
    [id*="hud"]:not(#rm-master-insitu-dock),
    .sivme-hud-dock:not(#rm-master-insitu-dock),
    #sivmeFloatingDock {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }

    /* Force Master Dock to ALWAYS float above all card badges & overlays */
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

    /* Keep card badges strictly below the Master Dock layer */
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

  // 3. Inject In-Situ Registry and Scanner scripts
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

  // 4. Purge any duplicate dock from DOM
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

  // 5. Accurate Ground-Truth Hidden Count (Direct DOM + LocalStorage Sync)
  function getHiddenCount() {
    // A. Real-time DOM inspection
    const domCount = document.querySelectorAll(
      '[data-badge-vis="false"], .sivme-tracked-hidden, [data-sivme-status="hidden"], .sivme-ghost-dormant'
    ).length;
    if (domCount > 0) return domCount;

    // B. Deep registry inspection
    try {
      const raw = localStorage.getItem('rm_sovereign_visibility_registry_v1');
      if (raw) {
        const reg = JSON.parse(raw);
        const map = reg.items || reg.registry || reg;
        const count = Object.values(map).filter(v => 
          v === false || v?.visible === false || v?.status === 'hidden'
        ).length;
        if (count > 0) return count;
      }
    } catch (_) {}

    return 0;
  }

  // 6. Real-time counter updater
  function updateDockCount() {
    const badge = document.getElementById('rm-dock-hidden-count');
    if (badge) {
      badge.textContent = getHiddenCount();
    }
  }

  // 7. Render Single Authoritative In-Situ Dock
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

  // Lifecycle execution triggers
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderInSituDock);
  } else {
    renderInSituDock();
  }
  setTimeout(renderInSituDock, 300);

  // Dynamic live event listeners
  window.addEventListener('storage', updateDockCount);
  document.addEventListener('click', () => setTimeout(updateDockCount, 200));
  setInterval(updateDockCount, 500);

  // Continuous purge to ensure zero-duplicate collision
  setInterval(purgeDuplicateDocks, 300);
})();
