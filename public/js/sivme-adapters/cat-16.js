/**
 * RISE MITRA — SIVME CATEGORY 16 MASTER ADAPTER
 * MODULE        : Category 16 (House & Home) Unified Master Adapter
 * FILE          : cat-16.js
 * VERSION       : v4.0 - Enhanced Visibility (108px Height, 15px English, 12.5px Hindi, Touch-Friendly)
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

  // 1. MASTER REGISTRY (COMPACT 16-N + BILINGUAL METADATA)
  var SUB_CATEGORIES = [
    {
      id: 'sub-16-1',
      urn: 'rm:cat:16:sub:16-1',
      seq: '16-1',
      icon: '🛠️',
      en: 'Mistry & Home Repair',
      hi: 'मिस्त्री व गृह मरम्मत',
      actionType: 'badge',
      actionText: 'जल्द उपलब्ध',
      btnStyle: 'color: #94a3b8 !important; background: rgba(30, 41, 59, 0.9) !important; border: 1px solid rgba(71, 85, 105, 0.6) !important;'
    },
    {
      id: 'sub-16-2',
      urn: 'rm:cat:16:sub:16-2',
      seq: '16-2',
      icon: '📋',
      en: 'Rental Ledger',
      hi: 'किराया बहीखाता',
      actionType: 'button',
      actionText: 'खोलें ›',
      btnStyle: 'color: #34d399 !important; background: rgba(6, 78, 59, 0.85) !important; border: 1px solid rgba(16, 185, 129, 0.6) !important;'
    },
    {
      id: 'sub-16-3',
      urn: 'rm:cat:16:sub:16-3',
      seq: '16-3',
      icon: '🏠',
      en: 'Room & Flat Search',
      hi: 'कमरा व फ्लैट खोज',
      actionType: 'button',
      actionText: 'खोलें ›',
      btnStyle: 'color: #34d399 !important; background: rgba(6, 78, 59, 0.85) !important; border: 1px solid rgba(16, 185, 129, 0.6) !important;'
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
    } catch (_) { return []; }
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

  // 3. BI-DIRECTIONAL COMPUTED PARENT SYNC (100% ZEL Preserved)
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

  // 4. AUTHORITATIVE 1-TAP ACCORDION CONTROLLER (100% ZEL Preserved)
  function auditCategory16Parent() {
    var core = getCore();
    if (!core || !core.isConsoleAuthorized) return;

    var c16 = document.querySelector('#categoryModal [data-cat-id="c16"]');
    if (!c16) return;

    var c16Header = c16.querySelector(':scope > div:first-child');
    if (c16Header && c16Header.getAttribute('data-sivme-c16-ctrl') !== 'true') {
      c16Header.setAttribute('data-sivme-c16-ctrl', 'true');

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

  // 5. LANGUAGE RESOLVER (Default English-First)
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

  // 6. ENLARGED SUB-CATEGORY RENDERER (108px HEIGHT, CLEAR TYPOGRAPHY)
  function auditCat16SubCategories() {
    var container = document.getElementById('sub-c16');
    if (!container) return;

    var core = getCore();
    var isAuth = core && typeof core.isConsoleAuthorized === 'function'
      ? core.isConsoleAuthorized()
      : false;

    // Purge legacy static duplicates
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

      if (!card) {
        card = document.createElement('div');
        card.id = item.id;
        card.setAttribute('data-subcat-id', item.id);
        container.appendChild(card);
      }

      // Purge any foreign injected pin buttons inside card
      card.querySelectorAll('.sivme-pin-action-btn, button[class*="pin"]:not(.rm-clean-pin)').forEach(function (el) {
        el.remove();
      });

      card.className = 'sivme-subcat-card';

      // Card Lockdown: Roomy 108px minimum height for clear, bold typography
      card.style.cssText = 'box-sizing: border-box !important; min-height: 108px !important; padding: 12px 14px 10px 14px !important; margin-bottom: 12px !important; border-radius: 14px !important; display: flex !important; flex-direction: column !important; justify-content: space-between !important; background: linear-gradient(180deg, rgba(24,33,47,0.96) 0%, rgba(11,17,30,0.98) 100%) !important; border: 1px solid rgba(255,255,255,0.08) !important; border-top: 1px solid rgba(255,255,255,0.22) !important; box-shadow: 0 4px 14px rgba(0,0,0,0.6) !important; position: relative !important;';

      // Touch-Friendly Pin Button (26px height, spacious tap target)
      var pinBtnHtml = pinned
        ? '<button type="button" class="rm-clean-pin" style="height: 26px !important; min-height: 26px !important; max-height: 26px !important; width: auto !important; font-size: 11px !important; font-weight: 700 !important; border-radius: 9999px !important; padding: 0 12px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; cursor: pointer !important; white-space: nowrap !important; line-height: 1 !important; color: #38bdf8 !important; background: rgba(3, 105, 161, 0.3) !important; border: 1px solid rgba(56, 189, 248, 0.6) !important; box-shadow: 0 0 8px rgba(56, 189, 248, 0.3) !important;">📌 पिन है</button>'
        : '<button type="button" class="rm-clean-pin" style="height: 26px !important; min-height: 26px !important; max-height: 26px !important; width: auto !important; font-size: 11px !important; font-weight: 700 !important; border-radius: 9999px !important; padding: 0 12px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; cursor: pointer !important; white-space: nowrap !important; line-height: 1 !important; color: #94a3b8 !important; background: rgba(15, 23, 42, 0.8) !important; border: 1px solid rgba(71, 85, 105, 0.6) !important;">📌 पिन करें</button>';

      // Touch-Friendly Action Button (26px height, spacious tap target)
      var actBtnHtml = item.actionType === 'button'
        ? '<button type="button" class="rm-clean-act" style="height: 26px !important; min-height: 26px !important; max-height: 26px !important; width: auto !important; font-size: 11px !important; font-weight: 700 !important; border-radius: 9999px !important; padding: 0 14px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; cursor: pointer !important; white-space: nowrap !important; line-height: 1 !important; ' + item.btnStyle + '">' + item.actionText + '</button>'
        : '<span class="rm-clean-act" style="height: 26px !important; min-height: 26px !important; max-height: 26px !important; width: auto !important; font-size: 11px !important; font-weight: 700 !important; border-radius: 9999px !important; padding: 0 12px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; white-space: nowrap !important; line-height: 1 !important; ' + item.btnStyle + '">' + item.actionText + '</span>';

      // 75% Top: Sequence + Icon + Large Crisp Typography (15px English Bold + 12.5px Hindi)
      // 25% Bottom: 26px Action Row with comfortable tap spacing
      card.innerHTML = 
        '<div style="display: flex !important; align-items: flex-start !important; gap: 11px !important; width: 100% !important; flex: 1 1 auto !important;">' +
          '<span style="font-family: monospace !important; font-size: 12px !important; font-weight: 800 !important; color: #38bdf8 !important; background: rgba(14, 165, 233, 0.18) !important; border: 1px solid rgba(56, 189, 248, 0.45) !important; border-radius: 7px !important; padding: 3px 7px !important; line-height: 1 !important; margin-top: 2px !important; flex-shrink: 0 !important;">' + item.seq + '</span>' +
          '<span style="font-size: 22px !important; line-height: 1 !important; flex-shrink: 0 !important; margin-top: 1px !important;">' + item.icon + '</span>' +
          '<div style="display: flex !important; flex-direction: column !important; justify-content: center !important; gap: 4px !important; flex: 1 1 auto !important; min-width: 0 !important;">' +
            '<span style="font-size: 15px !important; font-weight: 700 !important; color: #f8fafc !important; line-height: 1.3 !important; letter-spacing: 0.01em !important;">' + titles.primary + '</span>' +
            '<span style="font-size: 12.5px !important; font-weight: 500 !important; color: #94a3b8 !important; line-height: 1.25 !important;">' + titles.secondary + '</span>' +
          '</div>' +
        '</div>' +
        '<div style="width: 100% !important; height: 1px !important; background: rgba(255, 255, 255, 0.08) !important; margin: 8px 0 6px 0 !important;"></div>' +
        '<div style="height: 28px !important; display: flex !important; align-items: center !important; justify-content: space-between !important; width: 100% !important; box-sizing: border-box !important;">' +
          pinBtnHtml +
          actBtnHtml +
        '</div>';

      // Pin button binding
      var pinBtn = card.querySelector('.rm-clean-pin');
      if (pinBtn) {
        pinBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          togglePinState(item.id, titles.primary, item.icon);
        });
      }

      // Action modal triggers
      if (item.id === 'sub-16-2') {
        var actBtn2 = card.querySelector('.rm-clean-act');
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
        var actBtn3 = card.querySelector('.rm-clean-act');
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

      if (core && typeof core.auditElement === 'function') {
        core.auditElement(card, item.urn, item.en + ' (' + item.hi + ')', isAuth);
      }
    });
  }

  // 7. MASTER EXECUTION & REGISTRATION
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
