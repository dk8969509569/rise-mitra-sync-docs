/**
 * RISE MITRA — CATALOG ACTION DISPATCHER MODULE
 * ARCHITECTURE  : Independent Micro-Module (< 100 Lines)
 * GOVERNANCE    : GATE-23.5 / Fail-Closed Event Delegation
 * SSOT REF      : Folder A (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW)
 * REPO TARGET   : public/js/catalog-action-dispatcher.js
 */

(function () {
  'use strict';

  function handleActionClick(e) {
    var target = e.target.closest('button, a, div[role="button"]');
    if (!target) return;
    var txt = (target.textContent || '').trim();

    // 15-2: Kiraya Bahi-Khata (Rental Ledger)
    if (txt.indexOf('बहीखाता खोलें') !== -1 || target.closest('#sub-15-2') || target.closest('[data-subcat-id="15-2"]')) {
      if (e.cancelable) e.preventDefault();
      e.stopPropagation();
      var ledgerModal = document.getElementById('rentalLedgerModal');
      if (ledgerModal) {
        ledgerModal.classList.remove('hidden');
        ledgerModal.style.removeProperty('display');
      } else if (typeof window.openRentalLedger === 'function') {
        window.openRentalLedger();
      } else if (typeof window.handleLaunchCategory === 'function') {
        window.handleLaunchCategory('c16', '16-2');
      } else if (typeof window.openKhataModal === 'function') {
        window.openKhataModal();
      } else {
        window.location.hash = '#merchant-khata';
      }
      return;
    }

    // 15-3: Kamra va Flat Khoj (Rental Search)
    if (txt.indexOf('मालिक से संपर्क करें') !== -1 || target.closest('#sub-15-3') || target.closest('[data-subcat-id="15-3"]')) {
      if (e.cancelable) e.preventDefault();
      e.stopPropagation();
      var searchModal = document.getElementById('rentalSearchModal');
      if (searchModal) {
        searchModal.classList.remove('hidden');
        searchModal.style.removeProperty('display');
      } else if (typeof window.openRentalSearch === 'function') {
        window.openRentalSearch();
      } else if (typeof window.handleLaunchCategory === 'function') {
        window.handleLaunchCategory('c16', '16-3');
      } else {
        alert('कमरा व फ्लैट खोज: 0% दलाली सत्यापित आवास नेटवर्क शीघ्र सक्रिय हो रहा है।');
      }
      return;
    }
  }

  document.addEventListener('click', handleActionClick, true);
  console.log('✓ Rise Mitra Modular Action Dispatcher Active');
})();
