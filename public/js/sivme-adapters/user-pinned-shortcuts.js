/**
 * RISE MITRA — SIVME MICRO-MODULAR ADAPTER
 * MODULE        : Customer Pinned Shortcuts Engine (Sub-Categories Exclusive)
 * FILE          : user-pinned-shortcuts.js
 * VERSION       : v2.8 - 100% ZEL Certified (No Red Cross, 16-N Badges, Large Visual Icons)
 * GOVERNANCE    : GATE-23.5 | ZERO-ELEMENT-LOSS (ZEL)
 * REPO TARGET   : dk8969509569/rise-mitra-sync-docs (pre-main branch)
 * DUAL-FOLDER REFS:
 *   Folder A (Master Document SSOT): 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW
 *   Folder B (GitHub Mirror): 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'rm_user_pinned_shortcuts_v1';

  // 1. PINNED STORAGE HELPERS (100% ZEL PRESERVED)
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
    window.dispatchEvent(new CustomEvent('rm_pinned_shortcuts_changed'));
  }

  function isItemPinned(id) {
    var list = getPinnedList();
    return list.some(function (item) { return item.id === id; });
  }

  function togglePin(id, label, icon, seq) {
    var list = getPinnedList();
    var idx = -1;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) { idx = i; break; }
    }
    if (idx !== -1) {
      list.splice(idx, 1);
    } else {
      var derivedSeq = seq || (id && id.indexOf('sub-') === 0 ? id.replace('sub-', '') : '');
      list.push({ id: id, label: label, icon: icon || '⚡', seq: derivedSeq, addedAt: Date.now() });
    }
    setPinnedList(list);
  }

  // 2. AUDIT PIN BUTTONS (STRICTLY SUB-CATEGORIES ONLY + NO DUPLICATE IN CAT-16)
  function auditCatalogPinButtons() {
    // 50 मुख्य कैटेगरी कंटेनरों से अतिरिक्त पिन हटाएं
    document.querySelectorAll('#categoryModal [data-cat-id] > .sivme-pin-action-btn, #categoryModal [data-cat-id] > div > .sivme-pin-action-btn').forEach(function (btn) {
      btn.remove();
    });

    // Category 16 के सब-कार्ड्स में बाहरी डुप्लीकेट पिन इंजेक्ट होने से रोकें
    document.querySelectorAll('#sub-c16 .sivme-pin-action-btn').forEach(function (btn) {
      btn.remove();
    });
  }

  // 3. ROBUST FINDER FOR "9 CORE VERTICALS" HEADER ROW (100% ZEL PRESERVED)
  function get9CoreVerticalsHeader() {
    // Sibling above the 3x3 grid container
    var firstVert = document.querySelector('.sivme-vertical-card, [data-vertical-id], [onclick*="v1"]');
    var grid = firstVert ? (firstVert.closest('.grid') || firstVert.parentElement) : document.querySelector('.grid');

    if (grid && grid.parentElement) {
      var prev = grid.previousElementSibling;
      while (prev) {
        if (prev.id !== 'rmUserPinnedSection') {
          var pt = (prev.textContent || '').toUpperCase();
          if (pt.indexOf('VERTICAL') !== -1 || pt.indexOf('मुफ़्त') !== -1 || pt.indexOf('जुड़ना') !== -1) {
            return prev;
          }
        }
        prev = prev.previousElementSibling;
      }
    }

    // Fallback: Search all text/flex containers
    var allNodes = document.querySelectorAll('div, h2, h3, h4, span, p');
    for (var i = 0; i < allNodes.length; i++) {
      var el = allNodes[i];
      if (el.id === 'rmUserPinnedSection' || el.closest('#rmUserPinnedSection')) continue;
      var t = (el.textContent || '').toUpperCase();
      if (t.indexOf('CORE VERTICAL') !== -1 || (t.indexOf('VERTICAL') !== -1 && t.indexOf('9') !== -1)) {
        var curr = el;
        while (curr.parentElement && curr.parentElement !== document.body) {
          var p = curr.parentElement;
          if (curr.classList.contains('flex') && (curr.textContent.indexOf('मुफ़्त') !== -1 || curr.textContent.indexOf('जुड़ना') !== -1)) {
            return curr;
          }
          if (p.querySelector('.grid') || (curr.nextElementSibling && curr.nextElementSibling.classList.contains('grid'))) {
            return curr;
          }
          curr = p;
        }
        return el.closest('.flex') || el;
      }
    }

    return grid || document.querySelector('.grid');
  }

  // 4. RENDER CLEAN PINNED SECTION (NO RED CROSS, 16-N BADGE + LARGE ICON)
  function renderHomePinnedSection() {
    var pinnedList = getPinnedList();
    var existingSec = document.getElementById('rmUserPinnedSection');

    if (!pinnedList || pinnedList.length === 0) {
      if (existingSec) existingSec.remove();
      return;
    }

    var targetHeader = get9CoreVerticalsHeader();
    if (!targetHeader || !targetHeader.parentElement) return;

    if (!existingSec) {
      existingSec = document.createElement('div');
      existingSec.id = 'rmUserPinnedSection';
      existingSec.style.cssText = 'width: 100%; margin-top: 14px; margin-bottom: 4px;';
    }

    // Strictly enforce DOM position: existingSec sitting right before 9 Core Verticals
    if (existingSec.nextElementSibling !== targetHeader) {
      targetHeader.parentElement.insertBefore(existingSec, targetHeader);
    }

    // Clean 2-Column Cards (No Red Cross, High Tap Area)
    var cardsHtml = pinnedList.map(function (item) {
      var seq = item.seq || (item.id && item.id.indexOf('sub-') === 0 ? item.id.replace('sub-', '') : '');
      var seqBadgeHtml = seq
        ? '<span style="font-family: monospace; font-size: 11px; font-weight: 800; color: #38bdf8; background: rgba(14, 165, 233, 0.18); border: 1px solid rgba(56, 189, 248, 0.45); border-radius: 6px; padding: 2px 6px; line-height: 1;">' + seq + '</span>'
        : '';

      var iconHtml = (item.icon && (item.icon.indexOf('/') !== -1 || item.icon.indexOf('data:') === 0))
        ? '<img src="' + item.icon + '" alt="" style="width:24px;height:24px;object-fit:contain;border-radius:4px;flex-shrink:0;">'
        : '<span style="font-size:22px;line-height:1;flex-shrink:0;">' + (item.icon || '⚡') + '</span>';

      return `
        <div data-pinned-target="${item.id}" style="
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(135deg, rgba(15,23,42,0.96), rgba(30,41,59,0.94));
          border: 1px solid rgba(56,189,248,0.35);
          border-left: 3px solid #38bdf8;
          border-radius: 12px;
          padding: 10px 12px;
          min-height: 64px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.55);
          cursor: pointer;
          box-sizing: border-box;
          transition: transform 0.15s ease, border-color 0.15s ease;
        ">
          <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
            ${seqBadgeHtml}
            ${iconHtml}
          </div>
          <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-top:8px;gap:6px;">
            <span style="font-size:12.5px;font-weight:800;color:#f8fafc;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
              ${item.label || 'सेवा'}
            </span>
            <span style="font-size:13px;color:#38bdf8;font-weight:800;flex-shrink:0;">›</span>
          </div>
        </div>
      `;
    }).join('');

    existingSec.innerHTML = `
      <div class="rm-pinned-header">
        <span>⭐</span>
        <span>मेरी पसंदीदा सेवाएं (${pinnedList.length})</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; width: 100%;">
        ${cardsHtml}
      </div>
      <div class="rm-pinned-divider"></div>
    `;

    // Click Entire Card to Open Respective Service Modal
    existingSec.querySelectorAll('[data-pinned-target]').forEach(function (cardEl) {
      cardEl.addEventListener('click', function (e) {
        var tid = cardEl.getAttribute('data-pinned-target');

        if (tid === 'sub-16-2') {
          var ledgerBtn = document.querySelector('button[onclick*="rentalLedger"], [onclick*="RentalLedger"]');
          if (ledgerBtn) { ledgerBtn.click(); return; }
          var modal2 = document.getElementById('rentalLedgerModal');
          if (modal2) { modal2.classList.remove('hidden'); modal2.style.removeProperty('display'); return; }
        } else if (tid === 'sub-16-3') {
          var searchBtn = document.querySelector('button[onclick*="rentalSearch"], [onclick*="RentalSearch"]');
          if (searchBtn) { searchBtn.click(); return; }
          var modal3 = document.getElementById('rentalSearchModal');
          if (modal3) { modal3.classList.remove('hidden'); modal3.style.removeProperty('display'); return; }
        }

        var catBtn = document.querySelector('button[onclick*="category"], a[href*="category"]');
        if (catBtn) catBtn.click();
      });
    });
  }

  // 5. AUDIT DISPATCHER
  function auditPinnedShortcuts() {
    auditCatalogPinButtons();
    renderHomePinnedSection();
  }

  // 6. REGISTER MICRO-ADAPTER
  function register() {
    if (window.RM_SIVME && typeof window.RM_SIVME.registerAdapter === 'function') {
      window.RM_SIVME.registerAdapter('user-pinned-shortcuts', auditPinnedShortcuts);
    } else {
      setTimeout(register, 40);
    }
  }

  window.addEventListener('rm_pinned_shortcuts_changed', renderHomePinnedSection);
  register();
})();
