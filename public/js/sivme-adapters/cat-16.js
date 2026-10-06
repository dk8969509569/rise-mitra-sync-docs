/**
 * RISE MITRA — SIVME CATEGORY 16 MASTER ADAPTER
 * MODULE        : Category 16 (House & Home) Unified Master Adapter
 * FILE          : cat-16.js
 * VERSION       : v3.0 - 100% ZEL Certified (Parent Accordion + Two-Tier Bilingual 01-N Sub-Cards)
 * GOVERNANCE    : GATE-23.5 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : dk8969509569/rise-mitra-sync-docs (pre-main branch)
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var PARENT_URN = 'rm:cat:16';
  var SUB_URNS = ['rm:cat:16:sub:16-1', 'rm:cat:16:sub:16-2', 'rm:cat:16:sub:16-3'];

  // Master SSOT for Sub-Categories (01-N Numbering + Bilingual Metadata)
  var SUB_CATEGORIES = [
    {
      id: 'sub-16-1',
      urn: 'rm:cat:16:sub:16-1',
      seq: '01.',
      icon: '🛠️',
      en: 'Mistry & Home Repair',
      hi: 'मिस्त्री व गृह मरम्मत',
      actionType: 'badge',
      actionText: 'जल्द उपलब्ध',
      actionClass: 'text-slate-400 bg-slate-800/80 border border-slate-700'
    },
    {
      id: 'sub-16-2',
      urn: 'rm:cat:16:sub:16-2',
      seq: '02.',
      icon: '📋',
      en: 'Rental Ledger',
      hi: 'किराया बहीखाता',
      actionType: 'button',
      actionText: 'खोलें ›',
      actionClass: 'text-emerald-400 bg-emerald-950/60 border border-emerald-600/50 hover:bg-emerald-900/60'
    },
    {
      id: 'sub-16-3',
      urn: 'rm:cat:16:sub:16-3',
      seq: '03.',
      icon: '🏠',
      en: 'Room & Flat Search',
      hi: 'कमरा व फ्लैट खोज',
      actionType: 'button',
      actionText: 'खोलें ›',
      actionClass: 'text-emerald-400 bg-emerald-950/60 border border-emerald-600/50 hover:bg-emerald-900/60'
    }
  ];

  function getCore() {
    return window.RM_SIVME || null;
  }

  // =========================================================
  // 1. BI-DIRECTIONAL COMPUTED PARENT SYNC (100% ZEL Preserved)
  // =========================================================
  function syncCategory16Parent() {
    var core = getCore();
    if (!core) return;

    var allLive = true;
    for (var i = 0; i < SUB_URNS.length; i++) {
      if (!core.getUrnVisibility(SUB_URNS[i])) {
        allLive = false;
        break;
      }
    }
    // Update Master Registry SSOT
    core.setUrnVisibility(PARENT_URN, allLive, 'घर व मकान (House & Home)');
  }

  // =========================================================
  // 2. AUTHORITATIVE 1-TAP ACCORDION CONTROLLER (100% ZEL Preserved)
  // =========================================================
  function auditCategory16Parent() {
    var core = getCore();
    if (!core || !core.isConsoleAuthorized) return;

    var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
    if (!c16) return;

    var c16Header = c16.querySelector(':scope > div:first-child');
    if (c16Header && c16Header.getAttribute('data-sivme-c16-ctrl') !== 'true') {
      c16Header.setAttribute('data-sivme-c16-ctrl', 'true');

      // Strip native conflicting inline click listeners
      if (c16Header.hasAttribute('onclick')) c16Header.removeAttribute('onclick');
      c16Header.querySelectorAll('[onclick]').forEach(function (el) {
        el.removeAttribute('onclick');
      });

      c16Header.addEventListener('click', function (e) {
        // If badge itself is tapped, let badge listener handle cascade
        if (e.target.closest('.sivme-inline-badge')) return;

        if (e.cancelable) e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();

        var sub = document.getElementById('sub-c16');
        if (!sub) return;

        var isHidden = sub.classList.contains('hidden') || 
                       window.getComputedStyle(sub).display === 'none' || 
                       sub.style.display === 'none';

        var chevron = c16Header.querySelector('svg, [id*="chevron"]');

        if (isHidden) {
          sub.classList.remove('hidden', 'sivme-collapsed');
          sub.style.setProperty('display', 'block', 'important');
          if (chevron) chevron.style.transform = 'rotate(180deg)';
        } else {
          sub.classList.add('hidden', 'sivme-collapsed');
          sub.style.setProperty('display', 'none', 'important');
          if (chevron) chevron.style.transform = 'rotate(0deg)';
        }
      }, true);
    }

    syncCategory16Parent();
  }

  // =========================================================
  // 3. LANGUAGE RESOLVER (Default English-First + Settings Hook)
  // =========================================================
  function resolveTitles(item) {
    var pref = 'en_first';
    try {
      pref = localStorage.getItem('rm_lang_pref') || 'en_first';
    } catch (_) {}

    if (pref === 'hi_first') {
      return {
        primary: item.hi,
        secondary: '(' + item.en + ')'
      };
    }
    return {
      primary: item.en,
      secondary: '(' + item.hi + ')'
    };
  }

  // =========================================================
  // 4. TWO-TIER SUB-CATEGORY CARDS & BILINGUAL DOM RENDERER
  // =========================================================
  function auditCat16SubCategories() {
    var container = document.getElementById('sub-c16');
    if (!container) return;

    var core = getCore();
    var isAuth = core && typeof core.isConsoleAuthorized === 'function'
      ? core.isConsoleAuthorized()
      : false;

    SUB_CATEGORIES.forEach(function (item) {
      var card = document.getElementById(item.id);
      var titles = resolveTitles(item);

      // Render or Upgrade Card to Two-Tier Structure
      if (!card || !card.querySelector('.sivme-subcat-top-row')) {
        if (!card) {
          card = document.createElement('div');
          card.id = item.id;
          container.appendChild(card);
        }

        card.className = 'sivme-subcat-card';
        card.setAttribute('data-subcat-id', item.id);

        var actionHtml = item.actionType === 'button'
          ? `<button type="button" class="sivme-subcat-btn text-xs px-3 py-1 rounded-full font-bold transition cursor-pointer ${item.actionClass}">${item.actionText}</button>`
          : `<span class="text-xs px-2.5 py-0.5 rounded-full font-medium ${item.actionClass}">${item.actionText}</span>`;

        card.innerHTML = `
          <div class="sivme-subcat-top-row">
            <span class="sivme-subcat-seq">${item.seq}</span>
            <span style="font-size: 18px; line-height: 1; flex-shrink: 0;">${item.icon}</span>
            <div class="sivme-subcat-title-stack">
              <span class="sivme-subcat-title-primary">${titles.primary}</span>
              <span class="sivme-subcat-title-secondary">${titles.secondary}</span>
            </div>
          </div>
          <div class="sivme-subcat-split"></div>
          <div class="sivme-subcat-actions-row">
            <div class="sivme-pin-slot" style="display:flex;align-items:center;"></div>
            ${actionHtml}
          </div>
        `;

        // Direct Action Binding
        if (item.id === 'sub-16-2') {
          var btn2 = card.querySelector('button');
          if (btn2) {
            btn2.addEventListener('click', function (e) {
              e.stopPropagation();
              var ledgerModal = document.getElementById('rentalLedgerModal');
              if (ledgerModal) {
                ledgerModal.classList.remove('hidden');
                ledgerModal.style.removeProperty('display');
              } else if (typeof window.openRentalLedger === 'function') {
                window.openRentalLedger();
              }
            });
          }
        } else if (item.id === 'sub-16-3') {
          var btn3 = card.querySelector('button');
          if (btn3) {
            btn3.addEventListener('click', function (e) {
              e.stopPropagation();
              var searchModal = document.getElementById('rentalSearchModal');
              if (searchModal) {
                searchModal.classList.remove('hidden');
                searchModal.style.removeProperty('display');
              } else if (typeof window.openRentalSearch === 'function') {
                window.openRentalSearch();
              }
            });
          }
        }
      } else {
        // Sync Titles dynamically if language preference changes
        var pEl = card.querySelector('.sivme-subcat-title-primary');
        var sEl = card.querySelector('.sivme-subcat-title-secondary');
        if (pEl && pEl.textContent !== titles.primary) pEl.textContent = titles.primary;
        if (sEl && sEl.textContent !== titles.secondary) sEl.textContent = titles.secondary;
      }

      // Delegate Sovereign In-Situ Audit & Badges
      if (core && typeof core.auditElement === 'function') {
        core.auditElement(card, item.urn, item.en + ' (' + item.hi + ')', isAuth);
      }
    });
  }

  // =========================================================
  // 5. MASTER EXECUTION DISPATCHER
  // =========================================================
  function auditCategory16Complete() {
    auditCategory16Parent();
    auditCat16SubCategories();
  }

  // =========================================================
  // 6. REGISTER WITH MASTER SIVME ENGINE
  // =========================================================
  function register() {
    var core = getCore();
    if (core && typeof core.registerAdapter === 'function') {
      core.registerAdapter('cat-16', auditCategory16Complete);
    } else {
      setTimeout(register, 40);
    }
  }

  register();
})();
