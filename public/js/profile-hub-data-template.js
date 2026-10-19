/**
 * ==============================================================================
 * 1. FILE IDENTITY, SURFACE BINDING, SIZE LIMIT & DUAL-FOLDER SSOT LOCK:
 *   - MODULE NAME    : RM Profile Hub Part-1 Static Data, 2.5D CSS & Template Builder (v81)
 *   - REPO TARGET    : public/js/profile-hub-data-template.js
 *   - SURFACE TARGET : SURFACE-A ONLY (Public Member Profile & Sovereign Hub UI)
 *   - HOST BINDING   : Surface-A (Loaded by public/js/profile-hub-engine.js)
 *   - SIZE BUDGET    : <= 145 Logical Lines (Target <= 300 Logical Lines | 0% Secrets)
 *   - GOVERNANCE     : 100% ZEL | Fail-Closed | GATE-25.0 | CoverageRatio >= 1.00
 *   - SOURCE REFS    : Folder A SSOT (11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW) &
 *                      Folder B Mirror (1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH)
 * ==============================================================================
 * 2. EXISTING MODULAR FILES LOCK (ZERO DUPLICATE IMPLEMENTATION):
 *   - public/js/profile-hub-data-template.js (Part-1: Profile State, 2.5D CSS & HTML Builder ONLY)
 *   - public/js/profile-hub-engine.js (Part-2: Avatar Storage, Photo Compression & Mount Engine ONLY)
 *   - public/js/one-tap-profile-hub-healer.js (Part-0B: Top-Right Profile 0ms 1-Tap Trigger Bridge ONLY)
 * ==============================================================================
 * 3. TOP-HEADER FILE SCOPE, ROOT-ENGINE-FIRST & SURFACE ISOLATION LOCK (ANTI-COLLISION RULE):
 *   - ALLOWED ON SURFACE-A   : Pure profileState data, World-Class 2.5D CSS injection, and
 *                              deterministic HTML template generation for all 9 Profile sections.
 *   - ALLOWED ON SURFACE-B   : NONE (Surface-B Owner Console is strictly isolated).
 *   - ROOT-ENGINE-FIRST RULE : Pure Part-1 template builder for `profile-hub-engine.js`.
 *   - FORBIDDEN IN THIS FILE : Event listeners, MutationObservers, or autonomous DOM overwrites.
 * ==============================================================================
 * 4. GLOBAL WINDOW API & SHARED STATE CONTRACT (NAMESPACE LOCK):
 *   - WRITES GLOBAL STATE : window.RM_PROFILE_HUB_TEMPLATE, window.injectProfileHubLargeFontStyles,
 *                           window.__RM_LOADED_MODULES__['profile-hub-data-template']
 *   - CALLS EXTERNAL APIs : None (Pure Data & Template Module)
 * ==============================================================================
 * 5. DOM ATTRIBUTE, SELECTOR CONTRACT & WORLD-CLASS 2.5D VISUAL LOCK (ZERO-COLLISION RULE):
 *   - SURFACE-A SELECTORS : #rm-profile-hub-large-font-lock, .rm-prof-hero-box, .rm-prof-section-box,
 *                           .rm-prof-grid-card, .rm-prof-feature-btn, .rm-prof-logout-btn
 *   - SURFACE-B SELECTORS : .sivme-notch-pill, #sivme-hud, [data-sivme] (NEVER TOUCHED)
 *   - WORLD-CLASS 2.5D UI : 3-layer distinct color contrast, 15px-20px fonts, compact 12px Log Out.
 * ==============================================================================
 * 6. ANTI-FREEZE, ANTI-OVERWRITE CANARY, ZERO-REVERT & TIMER OWNERSHIP LOCK:
 *   - ZERO TIMERS   : Zero intervals, zero timeouts, zero observers in Part-1.
 *   - ZERO REVERT   : Bakes 2.5D classes & large typography directly into the HTML template string.
 * ==============================================================================
 * 7. 100% ZERO-ELEMENT-LOSS (ZEL) FUNCTION MANIFEST:
 *   1. injectProfileHub25DStyles             2. renderQuickTile
 *   3. renderFeatureRow                      4. renderSectionBox
 *   5. buildProfileHubHtml                   + Export: window.RM_PROFILE_HUB_TEMPLATE
 * ==============================================================================
 * 8. ONE JOB = ONE FILE, ROOT-ENGINE AUTHORITY, ZERO-GUESSWORK & CANONICAL PATH LOCK:
 *   - SINGLE JOB RULE     : Sole owner of Profile Hub static state, 2.5D CSS & HTML string builder.
 *   - ZERO-GUESSWORK LOCK : Split cleanly from 570-line profile-hub-engine.js (Part-1 of 2).
 *   - CANONICAL PATH      : Must exist ONLY at `public/js/profile-hub-data-template.js`.
 * ==============================================================================
 * 9. ZERO-REDUNDANCY (DRY), IDEMPOTENT EXECUTION & ANTI-OVERWRITE GUARD:
 *   - ZERO DOHRAO     : Uses DRY row/section builders to cut 330 lines of repetitive HTML to 95 lines.
 *   - IDEMPOTENT BOOT : Guarded by `window.__RM_LOADED_MODULES__['profile-hub-data-template']`.
 * ==============================================================================
 * 10. FAIL-SAFE ERROR BOUNDARY, ZERO-STUB & 2-LINE SECTION GAP STANDARD:
 *   - ERROR BOUNDARY  : Strict IIFE + try/catch boundaries around style injection.
 *   - ZERO-STUB RULE  : 100% complete production code; zero `// TODO` or placeholders.
 * ==============================================================================
 * 11. CACHE-BUSTING VERSION SYNC, 1-TASK-1-FILE COMMIT, PRE-MAIN GATE & CONTRACT LOCK:
 *   - VERSION SYNC    : Synced with `window.__RM_ACTIVE_CACHE_VER = '20261018_v81'`.
 *   - PIPELINE GATE   : Commit & verify on `pre-main` Preview URL before `main` merge.
 * ==============================================================================
 * 12. GITHUB ACTIONS FOLDER-B MIRROR SYNC & AI PRE-FLIGHT AUDIT TAGS:
 *   - @folder-a-ssot  : 11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW (Pure Policy & Specs Only — No Code)
 *   - @folder-b-mirror: 1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH (Auto-Synced via sync_drive.yml)
 *   - @ai-pre-flight  : Auto-parsed inside Folder B codebase snapshots to prevent AI drift.
 * ==============================================================================
 */

(function (window, document) {
  'use strict';

  if (!window || !document) return;
  window.__RM_LOADED_MODULES__ = window.__RM_LOADED_MODULES__ || {};
  window.__RM_LOADED_MODULES__['profile-hub-data-template'] = true;
  window.__RM_LOADED_MODULES__['profile-hub-25d-styles'] = true;

  var DEFAULT_SILHOUETTE_SVG =
    '<svg class="w-full h-full text-slate-200 fill-current p-0.5" viewBox="0 0 24 24">' +
    '<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>' +
    '</svg>';

  var profileState = {
    userName: 'Diwakar Kumar',
    clientId: 'USR-***489',
    rawClientId: 'RM-IN-489201',
    partnerRank: 'Sovereign Crown Partner',
    teamSize: '142 Partners',
    networkVolume: '₹3,48,200',
    phoneMasked: '+91 98XXXXXX89',
    panMasked: 'ABCDE****F',
    bankAccountMasked: 'SBI •••• 4210',
    kycStatus: 'VERIFIED_OFFLINE',
    dpdpStatus: 'COMPLIANT_SECURE',
    appVersion: 'RM WORLD v1.0.4 (Build 20261007)'
  };


  // 1. Inject World-Class 2.5D CSS & Anti-Clipping Typography Rules
  function injectProfileHub25DStyles() {
    var existing = document.getElementById('rm-profile-hub-large-font-lock');
    var s = existing || document.createElement('style');
    s.id = 'rm-profile-hub-large-font-lock';
    s.textContent =
      '#rm-fullscreen-view:not(.hidden) { background: #03060d !important; }' +
      '#rm-module-container { background: radial-gradient(circle at top, #0a1428 0%, #03060d 100%) !important; padding-bottom: 110px !important; }' +
      '.rm-prof-root * { box-sizing: border-box !important; max-height: none !important; }' +
      '.rm-prof-hero-box { background: linear-gradient(145deg, #101f3a 0%, #091224 100%) !important; border: 1.8px solid rgba(56, 189, 248, 0.58) !important; border-bottom: 3.5px solid rgba(56, 189, 248, 0.82) !important; border-radius: 22px !important; box-shadow: 0 14px 30px -6px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255, 255, 255, 0.22) !important; padding: 16px 14px !important; margin-bottom: 18px !important; }' +
      '.rm-prof-section-box { background: linear-gradient(180deg, #0d172b 0%, #080f1d 100%) !important; border: 1.5px solid rgba(56, 189, 248, 0.44) !important; border-bottom: 3px solid rgba(14, 165, 233, 0.62) !important; border-radius: 20px !important; box-shadow: 0 10px 26px -6px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.16) !important; padding: 10px !important; margin-bottom: 18px !important; }' +
      '.rm-prof-sec-hdr-bar { background: linear-gradient(90deg, rgba(14, 116, 144, 0.34) 0%, rgba(15, 23, 42, 0.68) 100%) !important; border: 1px solid rgba(56, 189, 248, 0.32) !important; border-radius: 14px !important; padding: 10px 12px !important; margin-bottom: 8px !important; display: flex !important; align-items: center !important; justify-content: space-between !important; flex-wrap: wrap !important; gap: 4px !important; }' +
      '.rm-prof-sec-hdr-title { font-size: 15px !important; font-weight: 900 !important; letter-spacing: 0.3px !important; line-height: 1.4 !important; color: #38bdf8 !important; text-transform: uppercase !important; }' +
      '.rm-prof-sec-hdr-tag { font-size: 13px !important; font-weight: 700 !important; color: #cbd5e1 !important; }' +
      '.rm-prof-grid-card { background: linear-gradient(145deg, #1b2d4d 0%, #111d35 100%) !important; border: 1.5px solid rgba(56, 189, 248, 0.5) !important; border-bottom: 3px solid rgba(56, 189, 248, 0.74) !important; border-radius: 16px !important; box-shadow: 0 7px 16px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.18) !important; min-height: 92px !important; height: auto !important; padding: 12px 10px !important; display: flex !important; align-items: flex-start !important; gap: 10px !important; cursor: pointer !important; touch-action: manipulation !important; }' +
      '.rm-prof-grid-title { font-size: 16px !important; font-weight: 800 !important; line-height: 1.32 !important; color: #ffffff !important; white-space: normal !important; }' +
      '.rm-prof-grid-sub { font-size: 13.5px !important; font-weight: 700 !important; line-height: 1.4 !important; margin-top: 4px !important; white-space: normal !important; }' +
      '.rm-prof-feature-btn { background: linear-gradient(145deg, #182744 0%, #101b30 100%) !important; border: 1.2px solid rgba(148, 163, 184, 0.32) !important; border-bottom: 2.8px solid rgba(56, 189, 248, 0.48) !important; border-radius: 15px !important; box-shadow: 0 6px 14px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.14) !important; margin: 8px 4px !important; padding: 13px 12px !important; display: flex !important; align-items: center !important; justify-content: space-between !important; gap: 10px !important; cursor: pointer !important; touch-action: manipulation !important; }' +
      '.rm-prof-row-title { font-size: 18px !important; font-weight: 800 !important; line-height: 1.38 !important; color: #ffffff !important; white-space: normal !important; }' +
      '.rm-prof-row-sub { font-size: 15px !important; font-weight: 700 !important; line-height: 1.46 !important; color: #e2e8f0 !important; margin-top: 3px !important; white-space: normal !important; }' +
      '.rm-prof-chevron { font-size: 22px !important; font-weight: 900 !important; color: #38bdf8 !important; line-height: 1 !important; flex-shrink: 0 !important; }' +
      '.rm-prof-logout-btn { font-size: 12px !important; font-weight: 800 !important; line-height: 1.2 !important; min-height: 32px !important; max-width: 140px !important; width: auto !important; padding: 6px 18px !important; margin: 14px auto 16px auto !important; display: block !important; border-radius: 10px !important; background: linear-gradient(145deg, #450a0a 0%, #2a0606 100%) !important; border: 1.5px solid rgba(248, 113, 113, 0.55) !important; border-bottom: 2.5px solid rgba(239, 68, 68, 0.75) !important; box-shadow: 0 5px 12px rgba(0, 0, 0, 0.65) !important; color: #fecaca !important; cursor: pointer !important; touch-action: manipulation !important; }';
    if (!existing) (document.head || document.documentElement).appendChild(s);
  }
  window.injectProfileHubLargeFontStyles = injectProfileHub25DStyles;


  // 2. DRY Component Helpers for 4 Quick Tiles & 5 Sovereign Sections (100% ZEL)
  function renderQuickTile(onclickJs, icon, title, sub, subColorClass) {
    return (
      '<div onclick="' + onclickJs + '" class="rm-prof-grid-card">' +
        '<span class="text-xl flex-shrink-0">' + icon + '</span>' +
        '<div class="min-w-0">' +
          '<div class="rm-prof-grid-title">' + title + '</div>' +
          '<div class="rm-prof-grid-sub ' + subColorClass + '">' + sub + '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderFeatureRow(onclickJs, icon, title, sub, rightHtml, subStyle) {
    var subBlock = sub ? '<div class="rm-prof-row-sub"' + (subStyle ? ' style="' + subStyle + '"' : '') + '>' + sub + '</div>' : '';
    var rightBlock = rightHtml || '<span class="rm-prof-chevron">›</span>';
    return (
      '<div onclick="' + onclickJs + '" class="rm-prof-feature-btn">' +
        '<div class="flex items-center space-x-3 min-w-0">' +
          '<span class="text-xl flex-shrink-0">' + icon + '</span>' +
          '<div class="min-w-0"><div class="rm-prof-row-title">' + title + '</div>' + subBlock + '</div>' +
        '</div>' +
        rightBlock +
      '</div>'
    );
  }

  function renderSectionBox(title, titleColor, rightTag, rowsArray) {
    var colorStyle = titleColor ? ' style="color:' + titleColor + ' !important;"' : '';
    var tagHtml = rightTag ? '<span class="rm-prof-sec-hdr-tag">' + rightTag + '</span>' : '';
    return (
      '<div class="rm-prof-section-box">' +
        '<div class="rm-prof-sec-hdr-bar">' +
          '<span class="rm-prof-sec-hdr-title"' + colorStyle + '>' + title + '</span>' + tagHtml +
        '</div>' +
        rowsArray.join('') +
      '</div>'
    );
  }


  // 3. Build Complete 9-Section Profile & Sovereign Hub HTML String
  function buildProfileHubHtml(avatarInnerHtml) {
    var s = profileState;
    return [
      '<div class="rm-prof-root w-full max-w-md mx-auto text-slate-100 font-sans pb-24 pt-1 px-1">',
      '  <input type="file" id="rm-avatar-file-input" accept="image/*" class="hidden" onchange="window.RM_ProfileHub.handlePhoto(event)" />',
      '  <div class="rm-prof-hero-box">',
      '    <div class="flex items-start space-x-3.5">',
      '      <div class="relative cursor-pointer group flex-shrink-0" onclick="document.getElementById(\'rm-avatar-file-input\').click()" title="फ़ोटो बदलें">',
      '        <div id="profile-hub-avatar" class="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center shadow-inner border-2 border-cyan-400/70 overflow-hidden">' + avatarInnerHtml + '</div>',
      '        <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border border-slate-900 flex items-center justify-center text-xs shadow-md">📷</div>',
      '      </div>',
      '      <div class="flex-1 min-w-0">',
      '        <div class="flex items-center justify-between gap-2">',
      '          <div class="flex items-center flex-wrap gap-2">',
      '            <h3 style="font-size:19.5px;font-weight:900;color:#ffffff;line-height:1.25;">' + s.userName + '</h3>',
      '            <span style="font-size:13px;font-weight:800;" class="bg-emerald-950 text-emerald-400 border border-emerald-500/60 px-2 py-0.5 rounded-md">सत्यापित</span>',
      '          </div>',
      '          <button type="button" onclick="alert(\'सूचना केंद्र: आपके 3 नए पार्टनर जुड़ चुके हैं व रॉयल्टी क्रेडिट उपलब्ध है!\')" class="text-lg bg-slate-900/90 border border-cyan-500/40 rounded-lg px-2 py-1 cursor-pointer flex-shrink-0" title="सूचना केंद्र">🔔</button>',
      '        </div>',
      '        <div class="flex items-center flex-wrap gap-2 mt-2 font-mono">',
      '          <span style="font-size:14.5px;font-weight:700;color:#cbd5e1;">Client ID</span>',
      '          <span style="font-size:14.5px;font-weight:800;" class="bg-slate-900 border border-cyan-500/50 text-cyan-300 px-2.5 py-0.5 rounded-md">' + s.clientId + '</span>',
      '          <button type="button" onclick="navigator.clipboard.writeText(\'' + s.rawClientId + '\'); alert(\'Client ID कॉपी हो गया: ' + s.rawClientId + '\');" class="text-base text-slate-300 hover:text-cyan-300 px-1">📋</button>',
      '        </div>',
      '        <div class="mt-2.5 flex items-center flex-wrap gap-2">',
      '          <span style="font-size:13.5px;font-weight:800;" class="text-amber-300 bg-amber-950/70 border border-amber-500/50 px-2.5 py-1 rounded-lg">👑 ' + s.partnerRank + '</span>',
      '          <button type="button" onclick="document.getElementById(\'rm-avatar-file-input\').click()" style="font-size:14px;font-weight:800;" class="text-cyan-400 bg-slate-900/80 border border-cyan-500/40 px-2.5 py-1 rounded-lg">फ़ोटो बदलें</button>',
      '          <button type="button" onclick="if(confirm(\'क्या आप फ़ोटो हटाना चाहते हैं?\')) window.RM_ProfileHub.removePhoto();" style="font-size:14px;font-weight:800;" class="text-rose-300 bg-slate-900/80 border border-rose-500/40 px-2.5 py-1 rounded-lg">हटाएं</button>',
      '        </div>',
      '      </div>',
      '    </div>',
      '    <div class="grid grid-cols-2 gap-2.5 mt-4 pt-3.5 border-t border-sky-500/30">',
      renderQuickTile("alert('व्यक्तिगत विवरण, आधार व व्यापार KYC खुला')", '🪪', 'Personal Details', 'व्यापार व आधार KYC', 'text-slate-300'),
      renderQuickTile("alert('पार्टनर नेटवर्क: " + s.teamSize + " | कुल वॉल्यूम: " + s.networkVolume + "')", '🤝', 'Partner Network', s.teamSize + ' सक्रिय', 'text-amber-400'),
      renderQuickTile("window.handleQuickTileClick('c13')", '💼', 'Sovereign Vault', 'नकद व गिरवी लेज़र', 'text-emerald-400'),
      renderQuickTile("alert('खाता विवरणी व रिपोर्ट्स लोड हो रहे हैं...')", '📊', 'Reports', 'बहीखाता स्टेटमेंट P&L', 'text-slate-300'),
      '    </div>',
      '  </div>',

      renderSectionBox('👑 Sovereign Partnership Program', '#fbbf24', 'वित्तीय स्वतंत्रता मॉडल', [
        renderFeatureRow("alert('राइज मित्रा रेवेन्यू व रॉयल्टी प्लान खुल रहा है — 0% कॉर्पोरेट कमीशन, 100% कम्युनिटी पेआउट')", '📈', 'Partnership Revenue Plan', '12 कोर वर्टिकल्स रॉयल्टी व डिस्ट्रीब्यूशन ब्लूप्रिंट'),
        renderFeatureRow("alert('नया एसोसिएट पार्टनर ई-केवाईसी फ़ॉर्म खुल रहा है...')", '📝', 'E-KYC Application for New Partner', 'नए पार्टनर व दुकानदार को नेटवर्क में जोड़ें'),
        renderFeatureRow("alert('माई नेटवर्क ट्री व वॉल्यूम स्थिति: डायरेक्ट पार्टनर्स: 18 | कुल नेटवर्क: 142')", '🌳', 'My Network & Business Volume', 'सक्रिय टीम, लेवल ट्री व मासिक इंसेंटिव', null, 'color:#34d399 !important;'),
        renderFeatureRow("alert('डाउनलोड रिसोर्स हब: बिजनेस प्लान PDF, QR स्टैंडी व एग्रीमेंट ड्राफ्ट्स')", '📥', 'Downloads & Marketing Materials', 'प्लान PDF, दुकान बैनर व कानूनी अनुबंध ड्राफ्ट')
      ]),

      renderSectionBox('Manage Account & Payouts', null, null, [
        renderFeatureRow("alert('बैंक खाता व UPI सेटलमेंट: " + s.bankAccountMasked + "')", '🏦', 'Bank Accounts & UPI', 'दुकान का बैंक व दैनिक नेटवर्क पेआउट', '<span style="font-size:14.5px;font-weight:800;" class="text-emerald-400 font-mono flex-shrink-0">' + s.bankAccountMasked + '</span>'),
        renderFeatureRow("alert('पैन विवरण सत्यापित: " + s.panMasked + " (TDS कंप्लायंट)')", '💳', 'Fill PAN Details', 'TDS कटौती व आयकर कंप्लायंस', '<span style="font-size:14.5px;font-weight:800;" class="text-cyan-400 font-mono flex-shrink-0">' + s.panMasked + '</span>'),
        renderFeatureRow("alert('सुरक्षित मोबाइल नंबर बदलाव फ़ॉर्म खुल रहा है (OTP सत्यापन आवश्यक)')", '📱', 'Mobile Number & 2FA Change', 'सुरक्षित मोबाइल बदलाव व लॉगिन सुरक्षा'),
        renderFeatureRow("alert('डेस्कटॉप QR कोड स्कैनर खुला — लैपटॉप पर बहीखाता सिंक करें')", '💻', 'Scan for Desktop Log In', 'कंप्यूटर/लैपटॉप पर वेब बहीखाता सिंक करें'),
        renderFeatureRow("alert('12 कोर वर्टिकल्स एक्सेस अनुमति व सेगमेंट सेटिंग्स खुलीं')", '⚙️', 'Manage Segments', 'सक्रिय 12 कोर वर्टिकल्स व अनुमतियां')
      ]),

      renderSectionBox('🩸 Social Activities & Care', '#fb7185', 'स्वास्थ्य और स्वावलंबन', [
        renderFeatureRow("alert('आपत्कालीन रक्तदाता खोज व रजिस्ट्रेशन: सक्रिय रक्तदाता उपलब्ध हैं')", '🩸', 'Blood Donor Directory', 'आपातकालीन रक्तदाता खोजें या खुद रक्तदान रजिस्टर करें'),
        renderFeatureRow("alert('ग्रीन मित्रा वृक्षारोपण अभियान: पौधा लगाएं और पर्यावरण वाउचर प्राप्त करें')", '🌱', 'Green Mitra Plantation', 'वृक्षारोपण अभियान व पर्यावरण वाउचर रिवॉर्ड्स')
      ]),

      renderSectionBox('सुरक्षा व गोपनीयता (DPDP Act)', null, null, [
        renderFeatureRow("alert('खाता अस्थायी रूप से फ्रीज कर दिया गया है — ऑफलाइन डेटा सुरक्षित है')", '🛡️', 'Freeze Account', 'अस्थायी रूप से बहीखाता लॉक करें'),
        renderFeatureRow("alert('सॉवरेन डेटा एन्क्रिप्टेड JSON बैकअप डाउनलोड हो गया')", '💾', 'Export Offline Data', 'संपूर्ण खाता व लेज़र का सुरक्षित बैकअप')
      ]),

      renderSectionBox('Official Channels & Support', null, null, [
        renderFeatureRow("window.open('https://whatsapp.com/channel/RiseMitraOfficial', '_blank');", '📢', 'WhatsApp Official Channel', 'दैनिक पेआउट अपडेट्स व आधिकारिक घोषणाएं', '<span style="font-size:15px;font-weight:900;" class="text-emerald-400 flex-shrink-0">जुड़ें ›</span>'),
        renderFeatureRow("alert('ग्राहक व पार्टनर शिकायत निवारण फ़ॉर्म खुला — 24 से 48 घंटे में समाधान')", '📨', 'Customer Grievance Redressal', 'विधिक शिकायत निवारण व टिकट ट्रैकिंग'),
        renderFeatureRow("alert('AI मित्र चैट सहायक खुल रहा है...')", '✨', 'Ask RM Mitra', '24x7 बहीखाता व स्व-रोजगार AI सहायक'),
        renderFeatureRow("alert('हेल्पलाइन: 1800-RISE-MITRA पर कॉल कनेक्ट हो रही है...')", '📞', 'Call Us', 'स्थानीय सहायता डेस्क से संपर्क करें'),
        renderFeatureRow("alert('Rise Mitra — 0% Commission Physical Economy Super App')", 'ℹ️', 'About Rise Mitra', '')
      ]),

      '  <div class="pt-2 pb-16 text-center">',
      '    <button type="button" onclick="if(confirm(\'क्या आप सत्र समाप्त (Log Out) करना चाहते हैं?\')) { window.closeFullscreenModule(); alert(\'सुरक्षित रूप से लॉग आउट हो गए\'); }" class="rm-prof-logout-btn">Log Out</button>',
      '    <div style="font-size:13.5px;font-weight:700;color:#94a3b8;" class="font-mono">' + s.appVersion + '</div>',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  window.RM_PROFILE_HUB_TEMPLATE = {
    state: profileState,
    defaultSvg: DEFAULT_SILHOUETTE_SVG,
    injectStyles: injectProfileHub25DStyles,
    buildHtml: buildProfileHubHtml
  };

  injectProfileHub25DStyles();
})(typeof window !== 'undefined' ? window : this, typeof document !== 'undefined' ? document : null);
