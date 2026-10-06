/**
 * RISE MITRA — SIVME MICRO-MODULAR ADAPTER
 * MODULE        : Customer Pinned Shortcuts Engine (Sub-Categories Exclusive)
 * FILE          : user-pinned-shortcuts.js
 * VERSION       : v2.2 - Proper Header Hierarchy & Robust Label Extraction
 * GOVERNANCE    : GATE-23.5 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : dk8969509569/rise-mitra-sync-docs (pre-main branch)
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'rm_user_pinned_shortcuts_v1';

  // 1. PINNED STORAGE HELPERS
  function getPinnedList() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (_) {
      return [];
    }
  }

  function setPinnedList(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (_) {}
    renderHomePinnedSection();
    auditCatalogPinButtons();
  }

  function isItemPinned(id) {
    var list = getPinnedList();
    return list.some(function (item) { return item.id === id; });
  }

  function togglePin(id, label, icon) {
    var list = getPinnedList();
    var idx = -1;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) { idx = i; break; }
    }
    if (idx !== -1) {
      list.splice(idx, 1);
    } else {
      list.push({ id: id, label: label, icon: icon || '⚡', addedAt: Date.now() });
    }
    setPinnedList(list);
  }

  // 2. AUDIT PIN BUTTONS (STRICTLY SUB-CATEGORIES ONLY)
  function auditCatalogPinButtons() {
    // Remove accidental pins from 50 main category containers
    document.querySelectorAll('#categoryModal [data-cat-id] > .sivme-pin-action-btn, #categoryModal [data-cat-id] > div > .sivme-pin-action-btn').forEach(function (btn) {
      btn.remove();
    });

    // Target strictly sub-category elements
    var subCards = document.querySelectorAll(
      '#sub-c16 > div, ' +
      '[data-subcat-id], ' +
      '.sivme-subcat-card'
    );

    subCards.forEach(function (card) {
      var cardId = card.getAttribute('data-subcat-id') || card.id || '';
      
      // Clean clone to extract text accurately without button/pin markup
      var clone = card.cloneNode(true);
      var trash = clone.querySelectorAll('.sivme-pin-action-btn, button, a, .sivme-inline-badge, svg');
      trash.forEach(function (t) { t.remove(); });
      var rawText = (clone.textContent || '').trim();

      var icon = '⚡';
      if (!cardId) {
        if (rawText.indexOf('मिस्त्री') !== -1) {
          cardId = 'sub-16-1';
          icon = '🛠️';
          rawText = 'मिस्त्री व गृह मरम्मत';
        } else if (rawText.indexOf('किराया बहीखाता') !== -1) {
          cardId = 'sub-16-2';
          icon = '📋';
          rawText = 'किराया बहीखाता (Rental Ledger)';
        } else if (rawText.indexOf('कमरा व फ्लैट') !== -1) {
          cardId = 'sub-16-3';
          icon = '🏠';
          rawText = 'कमरा व फ्लैट खोज (Rental Search)';
        } else {
          return;
        }
      }

      var cleanLabel = rawText.replace(/खोलें.*$/, '').replace(/जल्द उपलब्ध.*$/, '').trim();
      var isPinned = isItemPinned(cardId);
      var pinBtn = card.querySelector('.sivme-pin-action-btn');

      if (!pinBtn) {
        pinBtn = document.createElement('button');
        pinBtn.className = 'sivme-pin-action-btn';
        pinBtn.type = 'button';
        pinBtn.setAttribute('data-target-id', cardId);
        pinBtn.style.cssText = `
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(56, 189, 248, 0.4);
          color: #94a3b8;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 9999px;
          margin-right: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
          z-index: 20;
        `;

        var actionSlot = card.querySelector('button, a, span.text-cyan-400, span.text-emerald-400, span[class*="text-slate"]');
        if (actionSlot && actionSlot.parentNode) {
          actionSlot.parentNode.insertBefore(pinBtn, actionSlot);
        } else {
          card.appendChild(pinBtn);
        }

        pinBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          togglePin(cardId, cleanLabel, icon);
        }, true);
      }

      if (isPinned) {
        pinBtn.innerHTML = '<span>📌</span><span style="color:#38bdf8;">पिन है</span>';
        pinBtn.style.borderColor = '#0284c7';
        pinBtn.style.background = 'rgba(3, 105, 161, 0.3)';
        pinBtn.style.boxShadow = '0 0 8px rgba(56, 189, 248, 0.4)';
      } else {
        pinBtn.innerHTML = '<span style="opacity:0.6;">📌</span><span>पिन करें</span>';
        pinBtn.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        pinBtn.style.background = 'rgba(15, 23, 42, 0.6)';
        pinBtn.style.boxShadow = 'none';
      }
    });
  }

  // 3. RENDER HOME SCREEN PINNED SECTION & NEON DIVIDER ABOVE 9 CORE VERTICALS
  function renderHomePinnedSection() {
    var pinnedList = getPinnedList();
    var existingSec = document.getElementById('rmUserPinnedSection');

    if (!pinnedList || pinnedList.length === 0) {
      if (existingSec) existingSec.remove();
      return;
    }

    // Find "9 CORE VERTICALS" header container so we can mount ABOVE it
    var header9 = null;
    var allNodes = document.querySelectorAll('div, h2, h3, p, span');
    for (var i = 0; i < allNodes.length; i++) {
      var t = (allNodes[i].textContent || '').trim();
      if (t.indexOf('9 CORE VERTICALS') !== -1 && allNodes[i].children.length < 5) {
        header9 = allNodes[i].closest('.flex') || allNodes[i];
        break;
      }
    }

    var targetMount = header9;
    if (!targetMount) {
      var verticals = document.querySelectorAll('.sivme-vertical-card, [data-vertical-id]');
      if (verticals.length > 0) {
        targetMount = verticals[0].parentElement;
      } else {
        targetMount = document.querySelector('.grid');
      }
    }

    if (!targetMount || !targetMount.parentElement) return;

    if (!existingSec) {
      existingSec = document.createElement('div');
      existingSec.id = 'rmUserPinnedSection';
      existingSec.style.cssText = 'width: 100%; margin-top: 14px; margin-bottom: 12px;';
      targetMount.parentElement.insertBefore(existingSec, targetMount);
    }

    var cardsHtml = pinnedList.map(function (item) {
      return `
        <div data-pinned-target="${item.id}" style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.9));
          border: 1px solid rgba(56,189,248,0.35);
          border-left: 3px solid #38bdf8;
          border-radius: 12px;
          padding: 10px 14px;
          margin-bottom: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
          cursor: pointer;
        ">
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="font-size:18px;">${item.icon || '⚡'}</span>
            <span style="font-size:13px;font-weight:800;color:#f1f5f9;">${item.label || 'सेवा'}</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:11px;color:#38bdf8;font-weight:700;">खोलें ›</span>
            <button class="rm-unpin-btn" data-unpin-id="${item.id}" style="
              background:rgba(239,68,68,0.25);
              border:1px solid rgba(239,68,68,0.45);
              color:#fca5a5;
              border-radius:9999px;
              width:22px;
              height:22px;
              font-size:11px;
              cursor:pointer;
              display:flex;
              align-items:center;
              justify-content:center;
            ">✕</button>
          </div>
        </div>
      `;
    }).join('');

    existingSec.innerHTML = `
      <div class="rm-pinned-header">
        <span>⭐</span>
        <span>मेरी पसंदीदा सेवाएं (${pinnedList.length})</span>
      </div>
      <div>${cardsHtml}</div>
      <div class="rm-pinned-divider"></div>
    `;

    // Unpin Action
    existingSec.querySelectorAll('.rm-unpin-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var uid = btn.getAttribute('data-unpin-id');
        togglePin(uid, '', '');
      });
    });

    // Pinned Card Click
    existingSec.querySelectorAll('[data-pinned-target]').forEach(function (cardEl) {
      cardEl.addEventListener('click', function (e) {
        if (e.target.closest('.rm-unpin-btn')) return;
        var tid = cardEl.getAttribute('data-pinned-target');

        if (tid === 'sub-16-2') {
          var ledgerBtn = document.querySelector('button[onclick*="rentalLedger"], [onclick*="RentalLedger"]');
          if (ledgerBtn) { ledgerBtn.click(); return; }
        } else if (tid === 'sub-16-3') {
          var searchBtn = document.querySelector('button[onclick*="rentalSearch"], [onclick*="RentalSearch"]');
          if (searchBtn) { searchBtn.click(); return; }
        }

        var catBtn = document.querySelector('button[onclick*="category"], a[href*="category"]');
        if (catBtn) catBtn.click();
      });
    });
  }

  // 4. AUDIT DISPATCHER
  function auditPinnedShortcuts() {
    auditCatalogPinButtons();
    renderHomePinnedSection();
  }

  // 5. REGISTER ADAPTER
  function register() {
    if (window.RM_SIVME && typeof window.RM_SIVME.registerAdapter === 'function') {
      window.RM_SIVME.registerAdapter('user-pinned-shortcuts', auditPinnedShortcuts);
    } else {
      setTimeout(register, 40);
    }
  }

  register();
})();
