/**
 * RISE MITRA — SIVME MICRO-MODULAR ADAPTER
 * MODULE        : Customer Pinned Shortcuts & Home Neon Divider Engine
 * FILE          : user-pinned-shortcuts.js
 * SCOPE         : Pin/Unpin Catalog Items & Render Custom Strip above 9 Core Verticals
 * GOVERNANCE    : GATE-23.5 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : dk8969509569/rise-mitra-sync-docs (pre-main branch)
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'rm_user_pinned_shortcuts_v1';

  // 1. PINNED STORAGE HELPER
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
      list.push({ id: id, label: label, icon: icon || '📌', addedAt: Date.now() });
    }
    setPinnedList(list);
  }

  // 2. INJECT PIN BUTTONS ON ALL CATALOG CARDS
  function auditCatalogPinButtons() {
    var cards = document.querySelectorAll(
      '#categoryModal [data-cat-id], ' +
      '#sub-c16 > div'
    );

    cards.forEach(function (card) {
      if (card.getAttribute('data-cat-id') === 'c16' && !card.closest('#sub-c16')) {
        // Parent c16 accordion header
        return;
      }

      var cardId = card.getAttribute('data-cat-id') || card.id || '';
      var labelEl = card.querySelector('.text-xs.font-bold, .font-bold, span');
      var label = labelEl ? (labelEl.textContent || '').trim() : 'सेवा';

      // Clean label text
      label = label.replace(/^[0-9]{1,2}\.\s*/, '').replace(/खोलें.*$/, '').trim();

      if (!cardId) {
        if (label.indexOf('मिस्त्री') !== -1) cardId = 'sub-16-1';
        else if (label.indexOf('किराया बहीखाता') !== -1) cardId = 'sub-16-2';
        else if (label.indexOf('कमरा व फ्लैट') !== -1) cardId = 'sub-16-3';
        else return;
      }

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

        // Insert before action button (खोलें/खेलें)
        var actionSlot = card.querySelector('button:not(.sivme-pin-action-btn), a, span.text-cyan-400, span.text-emerald-400');
        if (actionSlot && actionSlot.parentNode) {
          actionSlot.parentNode.insertBefore(pinBtn, actionSlot);
        } else {
          card.appendChild(pinBtn);
        }

        pinBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          togglePin(cardId, label, '📌');
        }, true);
      }

      // Update button visual state
      if (isPinned) {
        pinBtn.innerHTML = '<span>📌</span><span style="color:#38bdf8;">पिन है</span>';
        pinBtn.style.borderColor = '#0284c7';
        pinBtn.style.background = 'rgba(3, 105, 161, 0.25)';
        pinBtn.style.boxShadow = '0 0 8px rgba(56, 189, 248, 0.35)';
      } else {
        pinBtn.innerHTML = '<span style="opacity:0.6;">📌</span><span>पिन करें</span>';
        pinBtn.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        pinBtn.style.background = 'rgba(15, 23, 42, 0.6)';
        pinBtn.style.boxShadow = 'none';
      }
    });
  }

  // 3. RENDER PINNED SHORTCUTS & NEON DIVIDER ON HOME SCREEN
  function renderHomePinnedSection() {
    var pinnedList = getPinnedList();
    var existingSec = document.getElementById('rmUserPinnedSection');

    // If no items are pinned, hide section
    if (!pinnedList || pinnedList.length === 0) {
      if (existingSec) existingSec.remove();
      return;
    }

    // Locate mounting spot: right above 9 Core Verticals
    var verticals = document.querySelectorAll('.sivme-vertical-card, [data-vertical-id]');
    var targetMount = null;

    if (verticals.length > 0) {
      var gridContainer = verticals[0].parentElement;
      targetMount = gridContainer || verticals[0];
    } else {
      targetMount = document.querySelector('.grid') || document.querySelector('[data-sivme-card="rm-cash"]');
    }

    if (!targetMount || !targetMount.parentElement) return;

    if (!existingSec) {
      existingSec = document.createElement('div');
      existingSec.id = 'rmUserPinnedSection';
      existingSec.style.cssText = 'width: 100%; margin-top: 14px; margin-bottom: 8px;';
      targetMount.parentElement.insertBefore(existingSec, targetMount);
    }

    // Build Pinned Cards HTML
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
          padding: 10px 12px;
          margin-bottom: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
          cursor: pointer;
        ">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:16px;">${item.icon || '📌'}</span>
            <span style="font-size:12px;font-weight:800;color:#f1f5f9;">${item.label}</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font-size:11px;color:#38bdf8;font-weight:700;">खोलें ›</span>
            <button class="rm-unpin-btn" data-unpin-id="${item.id}" style="
              background:rgba(239,68,68,0.2);
              border:1px solid rgba(239,68,68,0.4);
              color:#fca5a5;
              border-radius:9999px;
              width:20px;
              height:20px;
              font-size:10px;
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

    // Bind Unpin Actions
    existingSec.querySelectorAll('.rm-unpin-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var uid = btn.getAttribute('data-unpin-id');
        togglePin(uid, '', '');
      });
    });

    // Bind Card Click to Trigger Original Action
    existingSec.querySelectorAll('[data-pinned-target]').forEach(function (cardEl) {
      cardEl.addEventListener('click', function (e) {
        if (e.target.closest('.rm-unpin-btn')) return;
        var tid = cardEl.getAttribute('data-pinned-target');

        // Target either catalog card or sub-c16 element
        var targetCard = document.querySelector('[data-cat-id="' + tid + '"], #' + tid);
        if (targetCard) {
          var openTrigger = targetCard.querySelector('button, a, div[onclick]') || targetCard;
          openTrigger.click();
        } else {
          // If modal closed, open catalog modal
          var catBtn = document.querySelector('button[onclick*="category"], a[href*="category"]');
          if (catBtn) catBtn.click();
        }
      });
    });
  }

  // 4. MAIN AUDIT WRAPPER
  function auditPinnedShortcuts() {
    auditCatalogPinButtons();
    renderHomePinnedSection();
  }

  // 5. REGISTER WITH CORE ENGINE
  function register() {
    if (window.RM_SIVME && typeof window.RM_SIVME.registerAdapter === 'function') {
      window.RM_SIVME.registerAdapter('user-pinned-shortcuts', auditPinnedShortcuts);
    } else {
      setTimeout(register, 40);
    }
  }

  register();
})();
