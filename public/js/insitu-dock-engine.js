/**
 * RISE MITRA — SOVEREIGN IN-SITU MASTER DOCK ENGINE
 * SPECIFICATION : FOLDER A (SSOT: 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * GOVERNANCE    : RM-SPEC-ARCH-MODULAR-ZEL-MOBILE-SAFETY-001 | GATE-25.0
 * REPO TARGET   : public/js/insitu-dock-engine.js
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
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

  // 2. Inject In-Situ Registry and Master HUD Scripts
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

  // 3. Purge legacy duplicate dock (#sivmeFloatingDock)
  function purgeDuplicateDocks() {
    const legacy = document.getElementById('sivmeFloatingDock');
    if (legacy) legacy.remove();
  }

  // 4. Render Single Authoritative In-Situ Dock above bottom navigation
  function renderInSituDock() {
    purgeDuplicateDocks();
    if (document.getElementById('rm-master-insitu-dock')) return;

    const dock = document.createElement('div');
    dock.id = 'rm-master-insitu-dock';
    dock.className = 'fixed bottom-[68px] left-1/2 -translate-x-1/2 z-50 flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#06121f]/95 border border-emerald-500/80 shadow-2xl backdrop-blur-md select-none';

    let hiddenCount = 0;
    try {
      const reg = JSON.parse(localStorage.getItem('rm_sovereign_visibility_registry_v1') || '{}');
      hiddenCount = Object.values(reg).filter(v => v === false || v?.visible === false).length;
    } catch (_) {}

    dock.innerHTML = `
      <div class="flex items-center space-x-1.5">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span class="text-[10px] font-black tracking-wider text-emerald-300 uppercase">OWNER IN-SITU</span>
      </div>
      <span class="text-slate-600 text-xs">|</span>
      <span class="text-[10px] font-bold text-red-400">Hidden: <span id="rm-dock-hidden-count">${hiddenCount}</span></span>
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
  setTimeout(renderInSituDock, 400);

  // Continuous watchdog to eliminate any re-spawned duplicate dock
  setInterval(purgeDuplicateDocks, 300);
})();
