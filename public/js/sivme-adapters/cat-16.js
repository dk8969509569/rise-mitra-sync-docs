/**
 * RISE MITRA — SIVME CATEGORY 16 MASTER ADAPTER
 * MODULE        : Category 16 (House & Home) Unified Master Adapter
 * FILE          : cat-16.js
 * VERSION       : v3.5 - 100% ZEL Certified (Absolute Ghost Purge + Two-Tier 75:25 + Pill Buttons)
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
  var PIN_STORAGE_KEY = 'rm_user_pinned_shortcuts_v1';

  // 1. MASTER SUB-CATEGORIES REGISTRY (SSOT)
  var SUB_CATEGORIES = [
    {
      id: 'sub-16-1',
      urn: 'rm:cat:16:sub:16-1',
      seq: '01.',
      icon: '🛠️',
      en: 'Mistry & Home Repair',
      hi: 'मिस्त्री व गृह मरम्मत',
      actionType: 'badge',
      actionText: 'जल्द उपलब्ध'
    },
    {
      id: 'sub-16-2',
      urn: 'rm:cat:16:sub:16-2',
      seq: '02.',
      icon: '📋',
      en: 'Rental Ledger',
      hi: 'किराया बहीखाता',
      actionType: 'button',
      actionText: 'खोलें ›'
    },
    {
      id: 'sub-16-3',
      urn: 'rm:cat:16:sub:16-3',
      seq: '03.',
      icon: '🏠',
      en: 'Room & Flat Search',
      hi: 'कमरा व फ्लैट खोज',
      actionType: 'button',
      actionText: 'खोलें ›'
    }
  ];

  function getCore() {
    return window.RM_SIVME || null;
  }

  // 2. PINNED LOCAL STORAGE HELPERS
  function getPinnedList() {
    try {
      var raw = localStorage.getItem(PIN_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (_) {
      return [];
    }
  }

  function isPinned(id) {
    return getPinnedList().some(function (item) { return item.id === id; });
  }

  function togglePinState(id, label, icon) {
    var list = getPinnedList();
    var idx = -1;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) { idx = i; break; }
    }
    if (idx !== -1) {
      list.splice(idx, 1);
    } else {
      list.push({ id: id, label: label, icon: icon, addedAt: Date.now() });
    }
    try {
      localStorage.setItem(PIN_STORAGE_KEY, JSON.stringify(list));
    } catch (_) {}

    window.dispatchEvent(new CustomEvent('rm_pinned_shortcuts_changed'));
    auditCat16SubCategories();
  }

  // =========================================================
  // 3. BI-DIRECTIONAL COMPUTED PARENT SYNC (100% ZEL Preserved)
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
    core.setUrnVisibility(PARENT_URN, allLive, 'घर व मकान (House & Home)');
  }

  // =========================================================
  // 4. AUTHORITATIVE 1-TAP ACCORDION CONTROLLER (100% ZEL Preserved)
  // =========================================================
  function auditCategory16Parent() {
    var core = getCore();
    if (!core || !core.isConsoleAuthorized) return;

    var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
    if (!c16) return;

    var c16Header = c16.querySelector(':scope > div:first-child');
    if (c16Header && c16Header.getAttribute('data-sivme-c16-ctrl') !== 'true') {
      c16Header.setAttribute('data-sivme-c16-ctrl', 'true');

      // Conflicting inline click listeners ko saaf karein
      if (c16Header.hasAttribute('onclick')) c16Header.removeAttribute('onclick');
      c16Header.querySelectorAll('[onclick]').forEach(function (el) {
        el.removeAttribute('onclick');
      });

      c16Header.addEventListener('click', function (e) {
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
  // 5. LANGUAGE RESOLVER (Default English-First + Settings Hook)
  // =========================================================
  function resolveTitles(item) {
    var pref = 'en_first';
    try {
      pref = localStorage.getItem('rm_lang_pref') || 'en_first';
    } catch (_) {}

    if (pref === 'hi_first') {
      return { primary: item.hi, secondary: '(' + item.en + ')' };
    }
    return { primary: item.en, secondary: '(' + item.hi + ')' };
  }

  // =========================================================
  // 6. TWO-TIER 75:25 RENDERER WITH TOTAL GHOST CARD PURGE
  // =========================================================
  function auditCat16SubCategories() {
    var container = document.getElementById('sub-c16');
    if (!container) return;

    var core = getCore();
    var isAuth = core && typeof core.isConsoleAuthorized === 'function'
      ? core.isConsoleAuthorized()
      : false;

    // Purge unwanted legacy static duplicates
    var childList = Array.from(container.children);
    var hasGhosts = childList.length !== 3 || childList.some(function (c) {
      return c.id !== 'sub-16-1' && c.id !== 'sub-16-2' && c.id !== 'sub-16-3';
    });

    if (hasGhosts) {
      container.innerHTML = '';
    }

    SUB_CATEGORIES.forEach(function (item) {
      var card = document.getElementById(item.id);
      var titles = resolveTitles(item);
      var pinned = isPinned(item.id);

      var pinBtnHtml = pinned
        ? '<button type="button" class="sivme-pill-pin is-pinned">📌 पिन है</button>'
        : '<button type="button" class="sivme-pill-pin">📌 पिन करें</button>';

      var actBtnHtml = item.actionType === 'button'
        ? '<button type="button" class="sivme-pill-act">' + item.actionText + '</button>'
        : '<span class="sivme-pill-act is-badge">' + item.actionText + '</span>';

      if (!card) {
        card = document.createElement('div');
        card.id = item.id;
        card.setAttribute('data-subcat-id', item.id);
        container.appendChild(card);
      }

      card.className = 'sivme-subcat-card';

      // Top 75% Bilingual Stack + Bottom 25% Action Strip (Left: Pin, Right: Open)
      card.innerHTML = 
        '<div class="sivme-subcat-top-75">' +
          '<span class="sivme-subcat-seq">' + item.seq + '</span>' +
          '<span style="font-size: 16px; line-height: 1; flex-shrink: 0;">' + item.icon + '</span>' +
          '<div class="sivme-subcat-title-stack">' +
            '<span class="sivme-title-primary">' + titles.primary + '</span>' +
            '<span class="sivme-title-secondary">' + titles.secondary + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="sivme-subcat-bottom-25">' +
          pinBtnHtml +
          actBtnHtml +
        '</div>';

      // Pin button binding
      var pinBtn = card.querySelector('.sivme-pill-pin');
      if (pinBtn) {
        pinBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          togglePinState(item.id, titles.primary, item.icon);
        });
      }

      // Action Modal triggers
      if (item.id === 'sub-16-2') {
        var actBtn2 = card.querySelector('.sivme-pill-act');
        if (actBtn2 && actBtn2.tagName === 'BUTTON') {
          actBtn2.addEventListener('click', function (e) {
            e.stopPropagation();
            var modal = document.getElementById('rentalLedgerModal');
            if (modal) {
              modal.classList.remove('hidden');
              modal.style.removeProperty('display');
            } else if (typeof window.openRentalLedger === 'function') {
              window.openRentalLedger();
            }
          });
        }
      } else if (item.id === 'sub-16-3') {
        var actBtn3 = card.querySelector('.sivme-pill-act');
        if (actBtn3 && actBtn3.tagName === 'BUTTON') {
          actBtn3.addEventListener('click', function (e) {
            e.stopPropagation();
            var modal3 = document.getElementById('rentalSearchModal');
            if (modal3) {
              modal3.classList.remove('hidden');
              modal3.style.removeProperty('display');
            } else if (typeof window.openRentalSearch === 'function') {
              window.openRentalSearch();
            }
          });
        }
      }

      // SIVME in-situ visibility audit
      if (core && typeof core.auditElement === 'function') {
        core.auditElement(card, item.urn, item.en + ' (' + item.hi + ')', isAuth);
      }
    });
  }

  // =========================================================
  // 7. MASTER EXECUTION & REGISTRATION
  // =========================================================
  function auditCategory16Complete() {
    auditCategory16Parent();
    auditCat16SubCategories();
  }

  function register() {
    var core = getCore();
    if (core && typeof core.registerAdapter === 'function') {
      core.registerAdapter('cat-16', auditCategory16Complete);
    } else {
      setTimeout(register, 40);
    }
  }

  window.addEventListener('rm_pinned_shortcuts_changed', auditCat16SubCategories);
  register();
})();
