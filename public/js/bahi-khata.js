/* =========================================================================
   RISE MITRA (RM WORLD) - SOVEREIGN BAHI-KHATA MODULE
   File Target: public/js/bahi-khata.js
   Governance : 100% Offline Ledger • In-App Native Form • Zero-Prompt
   ========================================================================= */

(function () {
  'use strict';

  function getLedgerData() {
    try {
      const d = localStorage.getItem('rm_sovereign_ledger');
      return d ? JSON.parse(d) : [];
    } catch (e) {
      return [];
    }
  }

  function saveLedgerData(data) {
    localStorage.setItem('rm_sovereign_ledger', JSON.stringify(data));
  }

  window.openKhataModal = function () {
    const modal = document.getElementById('khataModal');
    if (modal) {
      modal.classList.remove('hidden');
      window.renderKhataEntries();
    }
  };

  window.closeKhataModal = function () {
    const modal = document.getElementById('khataModal');
    if (modal) modal.classList.add('hidden');
    if (window.location.hash === '#merchant-khata') {
      window.location.hash = '#home';
    }
  };

  window.openEntryForm = function (type) {
    const modal = document.getElementById('entryFormModal');
    const title = document.getElementById('entryFormTitle');
    const subtitle = document.getElementById('entryFormSubtitle');
    const icon = document.getElementById('entryTypeIcon');
    const typeInput = document.getElementById('entryFormType');
    const submitBtn = document.getElementById('entrySubmitBtn');
    const amtInput = document.getElementById('entryAmountInput');
    const err = document.getElementById('entryFormError');

    if (!modal) return;
    typeInput.value = type;
    amtInput.value = '';
    document.getElementById('entryPartyInput').value = '';
    document.getElementById('entryNoteInput').value = '';
    if (err) err.classList.add('hidden');

    if (type === 'YOU_GAVE') {
      title.textContent = 'मैंने दिए (You Gave - Debit)';
      title.className = 'text-sm font-black text-red-400';
      subtitle.textContent = 'खाते से निकली राशि (व्यय / उधारी दी)';
      icon.textContent = '🔴';
      submitBtn.className = 'w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl text-xs font-black shadow-lg shadow-red-500/30 active:scale-95 cursor-pointer';
      submitBtn.textContent = 'दी गई राशि सेव करें (Save)';
    } else {
      title.textContent = 'मुझे मिले (You Got - Credit)';
      title.className = 'text-sm font-black text-emerald-400';
      subtitle.textContent = 'खाते में आई राशि (आय / उधारी मिली)';
      icon.textContent = '🟢';
      submitBtn.className = 'w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-xl text-xs font-black shadow-lg shadow-emerald-500/30 active:scale-95 cursor-pointer';
      submitBtn.textContent = 'मिली राशि सेव करें (Save)';
    }

    modal.classList.remove('hidden');
    setTimeout(() => amtInput.focus(), 150);
  };

  window.closeEntryFormModal = function () {
    const modal = document.getElementById('entryFormModal');
    if (modal) modal.classList.add('hidden');
  };

  window.submitKhataEntry = function () {
    const amtInput = document.getElementById('entryAmountInput');
    const partyInput = document.getElementById('entryPartyInput');
    const noteInput = document.getElementById('entryNoteInput');
    const typeInput = document.getElementById('entryFormType');
    const err = document.getElementById('entryFormError');

    const amount = parseFloat(amtInput.value);
    if (isNaN(amount) || amount <= 0) {
      if (err) err.classList.remove('hidden');
      amtInput.focus();
      return;
    }
    if (err) err.classList.add('hidden');

    const party = (partyInput.value || '').trim() || 'स्थानीय ग्राहक';
    const note = (noteInput.value || '').trim() || '';
    const type = typeInput.value || 'YOU_GOT';

    const entry = {
      id: 'TXN-' + Date.now().toString(36).toUpperCase(),
      timestamp: new Date().toISOString(),
      type: type,
      amount: amount,
      party: party,
      note: note,
      syncStatus: navigator.onLine ? 'SYNCED' : 'PENDING_OFFLINE'
    };

    const list = getLedgerData();
    list.unshift(entry);
    saveLedgerData(list);
    window.renderKhataEntries();
    window.closeEntryFormModal();
  };

  window.renderKhataEntries = function () {
    const list = getLedgerData();
    let gave = 0, got = 0;
    list.forEach(e => {
      if (e.type === 'YOU_GAVE') gave += e.amount;
      if (e.type === 'YOU_GOT') got += e.amount;
    });

    const gaveEl = document.getElementById('khataTotalGave');
    const gotEl = document.getElementById('khataTotalGot');
    const countEl = document.getElementById('khataTxCount');
    const tbody = document.getElementById('khataTableBody');

    if (gaveEl) gaveEl.textContent = '₹' + gave.toFixed(2);
    if (gotEl) gotEl.textContent = '₹' + got.toFixed(2);
    if (countEl) countEl.textContent = list.length + ' Entries';

    if (!tbody) return;
    if (list.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4" class="p-6 text-center text-slate-500">कोई प्रविष्टि दर्ज नहीं है। नीचे बटनों से एंट्री करें।</td></tr>';
      return;
    }

    tbody.innerHTML = list.map(e => `
      <tr class="border-b border-slate-800/60 hover:bg-slate-800/30">
        <td class="p-2.5 text-slate-400 font-mono text-[10px]">${new Date(e.timestamp).toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}</td>
        <td class="p-2.5 font-bold text-slate-200">${e.party}<br><span class="text-[9px] font-normal text-slate-500">${e.note || e.id}</span></td>
        <td class="p-2.5 font-extrabold ${e.type === 'YOU_GOT' ? 'text-emerald-400' : 'text-red-400'}">${e.type === 'YOU_GOT' ? '+' : '-'} ₹${e.amount.toFixed(2)}</td>
        <td class="p-2.5 text-[9px]"><span class="px-1.5 py-0.5 rounded font-bold ${e.syncStatus === 'SYNCED' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40' : 'bg-amber-950 text-amber-400 border border-amber-800/40'}">${e.syncStatus === 'SYNCED' ? '🟢 Synced' : '🟡 Offline'}</span></td>
      </tr>
    `).join('');
  };
})();
