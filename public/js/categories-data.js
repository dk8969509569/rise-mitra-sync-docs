/**
 * RM WORLD — Universal 50-Category Modular Catalog & Sub-Tree Engine
 * SPECIFICATION : 14_04__EXT_003 (Sections 3.13–3.16, 8.9) & File-09 MER (Section 9.Y)
 * GOVERNANCE    : GATE-16.6 • Zero-Element-Loss (ZEL) Canonical Frozen
 *
 * PRESERVED INVARIANTS:
 * - EL-CAT-MODULAR-ENGINE   : Complete 50-root taxonomy (c01–c33, g34–g50) & immutable IDs.
 * - EL-CAT-LAZY-DOM-RECYCLER: Bounded memory, dynamic DOM mount/unmount, c16 exception.
 * - EL-CAT-ZERO-WRAP-BADGE  : whitespace-nowrap shrink-0 ml-2 on badges, non-clipping.
 * - OFFLINE LEASE CAPABILITY: Pre-authorized offline policy lease for c05 and 16-2.
 */

(function () {
  "use strict";

  const oldRenderer = window.RM_CatalogRenderer;
  if (oldRenderer && typeof oldRenderer.destroy === "function") {
    oldRenderer.destroy();
  }

  const ROOTS = {
    tier1: [
      { id: "c01", num: "01", icon: "🎨", name: "Art & Design (कला व डिज़ाइन)" },
      { id: "c02", num: "02", icon: "🚗", name: "Auto & Vehicles (ऑटो व वाहन)" },
      { id: "c03", num: "03", icon: "💄", name: "Beauty & Salon (सौंदर्य)" },
      { id: "c04", num: "04", icon: "📚", name: "Books & Reference (किताबें)" },
      { id: "c05", num: "05", icon: "💼", name: "Business (सॉवरेन बहीखाता)", action: "launch", catId: "c05" },
      { id: "c06", num: "06", icon: "🎭", name: "Comics & Stories (कहानियाँ)" },
      { id: "c07", num: "07", icon: "💬", name: "Communication (संचार व संपर्क)" },
      { id: "c08", num: "08", icon: "❤️", name: "Dating & Relations (परिचय व रिश्ते)" },
      { id: "c09", num: "09", icon: "🎓", name: "Education (हुनर व शिक्षा)" },
      { id: "c10", num: "10", icon: "🎬", name: "Entertainment (मनोरंजन)" },
      { id: "c11", num: "11", icon: "🎟️", name: "Events & Pass (मेले व आयोजन)" },
      { id: "c12", num: "12", icon: "👨‍👩‍👧", name: "Family & Care (परिवार व बच्चे)" },
      { id: "c13", num: "13", icon: "💰", name: "Finance (RM CASH लेज़र)" },
      { id: "c14", num: "14", icon: "🍲", name: "Food & Drink (खान-पान)" },
      { id: "c15", num: "15", icon: "🌿", name: "Health & Fitness (स्वस्थ मन)" },
      {
        id: "c16",
        num: "16",
        icon: "🏠",
        name: "House & Home (घर व मरम्मत)",
        isSubTree: true,
        hasChildren: true,
        defaultExpanded: true
      },
      { id: "c17", num: "17", icon: "📦", name: "Libraries & Demo (टूल्स व पुस्तकालय)" },
      { id: "c18", num: "18", icon: "🧘", name: "Lifestyle (स्वावलंबन)" },
      { id: "c19", num: "19", icon: "🗺️", name: "Maps & Navigation (नक्शा व मार्गदर्शन)" },
      { id: "c20", num: "20", icon: "💊", name: "Medical (दवा व क्लिनिक)" },
      { id: "c21", num: "21", icon: "🎵", name: "Music & Audio (संगीत)" },
      { id: "c22", num: "22", icon: "📰", name: "News & Magazines (समाचार)" },
      { id: "c23", num: "23", icon: "🍼", name: "Parenting (शिशु पोषण)" },
      { id: "c24", num: "24", icon: "✨", name: "Personalization (थीम्स)" },
      { id: "c25", num: "25", icon: "📸", name: "Photography (कैमरा व स्कैनर)" },
      { id: "c26", num: "26", icon: "⚡", name: "Productivity (बिलिंग व उत्पादकता)" },
      { id: "c27", num: "27", icon: "🛒", name: "Shopping (0% किराना स्टोर)" },
      { id: "c28", num: "28", icon: "🌐", name: "Social (चौपाल व संवाद)" },
      { id: "c29", num: "29", icon: "🏏", name: "Sports Community (खेलकूद)" },
      { id: "c30", num: "30", icon: "🛠️️", name: "Tools (कैलकुलेटर व टूल्स)" },
      { id: "c31", num: "31", icon: "✈️", name: "Travel & Local (यात्रा)" },
      { id: "c32", num: "32", icon: "🎞️", name: "Video Players & Editors" },
      { id: "c33", num: "33", icon: "☀️", name: "Weather (मौसम पूर्वानुमान)" }
    ],
    tier2: [
      { id: "g34", num: "01", icon: "🏹", name: "Action (एक्शन तीरंदाजी)" },
      { id: "g35", num: "02", icon: "🧭", name: "Adventure (रोमांचक यात्रा)" },
      { id: "g36", num: "03", icon: "🕹️", name: "Arcade (गेंद टप्पा)" },
      { id: "g37", num: "04", icon: "🎲", name: "Board (देसी लूडो व कैरम)" },
      { id: "g38", num: "05", icon: "🃏", name: "Card (ताश सॉलिटेयर - Zero Cash)" },
      { id: "g39", num: "06", icon: "🎡", name: "Casino (पॉइंट्स लकी चक्र)" },
      { id: "g40", num: "07", icon: "🎈", name: "Casual (रंगोली व क्राफ्ट)" },
      { id: "g41", num: "08", icon: "🧠", name: "Educational (भारत क्विज़)" },
      { id: "g42", num: "09", icon: "🥁", name: "Music (संगीत ताल व बीट)" },
      { id: "g43", num: "10", icon: "🧩", name: "Puzzle (दिमागी पहेलियाँ)" },
      { id: "g44", num: "11", icon: "🏎️", name: "Racing (बैलगाड़ी / कार्ट रेस)" },
      { id: "g45", num: "12", icon: "👑", name: "Role Playing (गाँव का प्रधान)" },
      { id: "g46", num: "13", icon: "🚜", name: "Simulation (खेत सिमुलेटर)" },
      { id: "g47", num: "14", icon: "🏏", name: "Sports (गली क्रिकेट)" },
      { id: "g48", num: "15", icon: "♟️", name: "Strategy (चाणक्य नीति / शतरंज)" },
      { id: "g49", num: "16", icon: "❓", name: "Trivia (देसी ट्रिविया व तथ्य)" },
      { id: "g50", num: "17", icon: "🔤", name: "Word (शब्द पहेली व कोश)" }
    ]
  };

  const LOCAL_CHILDREN = {
    c16: [
      {
        id: "16-1",
        parentId: "c16",
        icon: "🔨",
        title: "16-1. मिस्त्री व गृह मरम्मत",
        badge: "जल्द आ रहा",
        status: "upcoming",
        hasChildren: false,
        action: "notice",
        message: "16-1. मिस्त्री सेवा शीघ्र उपलब्ध होगी"
      },
      {
        id: "16-2",
        parentId: "c16",
        icon: "📄",
        title: "16-2. किराया बहीखाता (Rental Ledger)",
        badge: "खोलें ›",
        status: "active",
        hasChildren: false,
        isLuminous: true,
        action: "launch",
        catId: "c16",
        subId: "16-2"
      },
      {
        id: "16-3",
        parentId: "c16",
        icon: "🔑",
        title: "16-3. कमरा व फ्लैट लिस्टिंग",
        badge: "जल्द आ रहा",
        status: "upcoming",
        hasChildren: false,
        action: "notice",
        message: "16-3. संपत्ति लिस्टिंग शीघ्र उपलब्ध होगी"
      }
    ]
  };

  function deepFreeze(obj) {
    Object.freeze(obj);
    for (const val of Object.values(obj)) {
      if (val && typeof val === "object" && !Object.isFrozen(val)) {
        deepFreeze(val);
      }
    }
    return obj;
  }

  deepFreeze(ROOTS);
  deepFreeze(LOCAL_CHILDREN);

  window.RM_CATALOG_DATA = ROOTS;
  window.RM_CATALOG_LOCAL_CHILDREN = LOCAL_CHILDREN;

  const GROUPS = [
    { key: "tier1", containerId: "tier1-list" },
    { key: "tier2", containerId: "tier2-list" }
  ];

  const options = {
    surface: "A",
    catalogVersion: "owner-canonical-v1.0",
    pageSize: 20,
    maxDepth: 5,
    maxRenderedItems: 250,
    maxCachePages: 8,
    cacheTTLms: 60000,
    requestTimeoutMs: 15000,
    resolvePolicy: async () => ({
      catalogVersion: "owner-canonical-v1.0",
      surface: "A",
      revision: "rev-lease-canonical-v1",
      expiresAt: Date.now() + 86400000 * 365,
      allowedLaunchIds: ["c05", "16-2", "c16"]
    })
  };

  const state = {
    initialized: false,
    destroyed: false,
    rendering: false,
    epoch: 0,
    records: new Map(),
    pendingLaunches: new Set(),
    controllers: new Set(),
    policy: null,
    policyState: "UNVERIFIED"
  };

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = String(text);
    return node;
  }

  function label(item) {
    return item.title || `${item.num ? item.num + ". " : ""}${item.name}`;
  }

  function status(item) {
    return item.status || (item.action === "launch" ? "active" : "upcoming");
  }

  function notify(msg) {
    if (msg) alert(msg);
  }

  function makeController() {
    const c = new AbortController();
    state.controllers.add(c);
    return c;
  }

  function abortAll() {
    for (const c of state.controllers) c.abort();
    state.controllers.clear();
  }

  function refreshButtons() {
    for (const record of state.records.values()) {
      const { item, button, badge } = record;
      const curStatus = status(item);
      const isLaunch = item.action === "launch";

      button.disabled = ["disabled", "maintenance"].includes(curStatus);

      const isLuminousActive = Boolean(item.isLuminous && curStatus === "active");
      button.classList.toggle("ring-active-luminous", isLuminousActive);

      if (state.pendingLaunches.has(item.id)) {
        button.setAttribute("aria-busy", "true");
      } else {
        button.removeAttribute("aria-busy");
      }

      if (!badge) continue;

      let bText = item.badge || (isLaunch ? "खोलें ›" : "जल्द आ रहा");
      if (curStatus === "disabled") bText = "अनुपलब्ध";
      else if (curStatus === "maintenance") bText = "रखरखाव";

      badge.textContent = bText;
    }
  }

  async function loadPolicy() {
    try {
      const result = await options.resolvePolicy();
      state.policy = {
        revision: result.revision,
        expiresAt: result.expiresAt,
        allowed: new Set(result.allowedLaunchIds || ["c05", "16-2", "c16"])
      };
      state.policyState = "READY";
    } catch (_) {
      state.policy = {
        revision: "rev-offline-fallback",
        expiresAt: Date.now() + 86400000,
        allowed: new Set(["c05", "16-2", "c16"])
      };
      state.policyState = "READY";
    }
    refreshButtons();
  }

  async function activate(record) {
    if (state.destroyed || !record.button.isConnected) return;
    const item = record.item;
    const curStatus = status(item);

    if (["disabled", "maintenance"].includes(curStatus)) return;

    if (item.action !== "launch" || curStatus !== "active") {
      notify(item.message || `${label(item)} — अभी उपलब्ध नहीं है।`);
      return;
    }

    if (state.pendingLaunches.has(item.id)) return;
    const handler = window.handleLaunchCategory;

    if (typeof handler !== "function") {
      notify("सेवा खोलने की सुविधा अभी उपलब्ध नहीं है।");
      return;
    }

    state.pendingLaunches.add(item.id);
    refreshButtons();

    try {
      if (item.subId === undefined) {
        await handler.call(window, item.catId);
      } else {
        await handler.call(window, item.catId, item.subId);
      }
    } catch (e) {
      console.error("[RM Catalog] Launch error:", item.id, e);
      notify("सेवा खोलने में समस्या आई।");
    } finally {
      state.pendingLaunches.delete(item.id);
      if (!state.destroyed) refreshButtons();
    }
  }

  function releaseChildren(record) {
    if (record.request) {
      record.request.abort();
      state.controllers.delete(record.request);
      record.request = null;
    }
    for (const cid of record.children) {
      const child = state.records.get(cid);
      if (!child) continue;
      releaseChildren(child);
      state.records.delete(cid);
    }
    record.children = [];
    if (record.panel) record.panel.replaceChildren();
  }

  function closeBranch(record) {
    record.open = false;
    record.button.setAttribute("aria-expanded", "false");
    if (record.arrow) record.arrow.textContent = "▶";
    releaseChildren(record);
    record.panel.hidden = true;
  }

  async function loadBranch(record) {
    if (state.destroyed || !record.open || !record.button.isConnected) return;

    releaseChildren(record);
    record.panel.hidden = false;
    record.panel.setAttribute("aria-busy", "true");

    const controller = makeController();
    record.request = controller;

    try {
      const children = LOCAL_CHILDREN[record.item.id] || [];
      if (controller.signal.aborted || state.destroyed || !record.open) return;

      record.panel.replaceChildren();

      for (const item of children) {
        const child = buildItem(item, record.depth + 1, record.path);
        record.children.push(item.id);
        record.panel.append(child.node);
      }

      refreshButtons();

      if (typeof window.syncCategoryVisibilityFromOwner === "function") {
        window.syncCategoryVisibilityFromOwner();
      }
    } catch (err) {
      console.error("[RM Catalog] Branch load error:", err);
    } finally {
      controller.abort();
      state.controllers.delete(controller);
      if (record.request === controller) {
        record.request = null;
        record.panel.removeAttribute("aria-busy");
      }
    }
  }

  function openBranch(record) {
    if (record.open || record.button.disabled) return;
    record.open = true;
    record.button.setAttribute("aria-expanded", "true");
    if (record.arrow) record.arrow.textContent = "▼";
    record.panel.hidden = false;
    void loadBranch(record);
  }

  function buildItem(item, depth, ancestors) {
    const button = el(
      "button",
      "w-full text-left p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 tactile-25d flex items-center justify-between min-h-[48px] cursor-pointer"
    );
    button.type = "button";
    button.dataset.catId = item.id;
    button.dataset.rmItemId = item.id;

    const leftCol = el("div", "flex items-center space-x-2.5 min-w-0");
    const icon = el("span", "text-sm shrink-0", item.icon);
    const titleSpan = el("span", "text-xs font-semibold truncate", label(item));
    leftCol.append(icon, titleSpan);
    button.append(leftCol);

    const record = {
      item,
      button,
      node: button,
      badge: null,
      panel: null,
      arrow: null,
      depth,
      path: [...ancestors, item.id],
      children: [],
      open: false,
      request: null
    };

    if (item.hasChildren) {
      const wrapper = el("div", "rounded-2xl border border-slate-800/90 bg-slate-900/40 overflow-hidden transition-all");
      wrapper.dataset.catId = item.id;

      button.className = "w-full text-left p-3.5 text-slate-100 tactile-25d flex items-center justify-between min-h-[52px] bg-slate-900/70 hover:bg-slate-850 cursor-pointer";

      const panel = el("div", "space-y-2 py-2.5 pr-2.5 ml-3.5 pl-3 border-l-2 border-emerald-500/40 transition-all");
      panel.id = `${item.id}-subs`;
      panel.hidden = true;

      const arrow = el("span", "sub-arrow text-sm font-bold text-emerald-400 font-mono transition-transform duration-200", "▶");
      button.append(arrow);

      record.node = wrapper;
      record.panel = panel;
      record.arrow = arrow;

      button.addEventListener("click", () => {
        if (record.open) closeBranch(record);
        else openBranch(record);
      });

      wrapper.append(button, panel);
    } else {
      record.badge = el(
        "span",
        "text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded-md font-extrabold uppercase tracking-wider whitespace-nowrap shrink-0 ml-2"
      );
      if (item.isLuminous) {
        button.classList.add("ring-active-luminous");
        record.badge.className =
          "text-[10px] bg-emerald-500 text-slate-950 px-2 py-1 rounded-md font-extrabold uppercase tracking-wider shadow whitespace-nowrap shrink-0 ml-2";
      }
      button.append(record.badge);
      button.addEventListener("click", () => void activate(record));
    }

    state.records.set(item.id, record);
    return record;
  }

  function rootItems() {
    const out = {};
    for (const g of GROUPS) {
      out[g.key] = ROOTS[g.key].map(orig => ({ ...orig, hasChildren: Boolean(orig.hasChildren) }));
    }
    return out;
  }

  async function render() {
    if (!state.initialized || state.destroyed || state.rendering) return;
    state.rendering = true;

    try {
      const data = rootItems();
      const containers = GROUPS.map(g => ({ ...g, node: document.getElementById(g.containerId) }));

      if (containers.some(g => !g.node)) return;

      state.epoch += 1;
      abortAll();
      state.records.clear();

      for (const g of containers) {
        const frag = document.createDocumentFragment();
        for (const item of data[g.key]) {
          frag.append(buildItem(item, 1, []).node);
        }
        g.node.replaceChildren(frag);
      }

      await loadPolicy();

      const rootBranches = [...state.records.values()].filter(r => r.depth === 1 && r.item.hasChildren);
      for (const r of rootBranches) {
        if (r.item.defaultExpanded) {
          r.open = true;
          r.button.setAttribute("aria-expanded", "true");
          if (r.arrow) r.arrow.textContent = "▼";
          r.panel.hidden = false;
          await loadBranch(r);
        }
      }

      if (typeof window.syncCategoryVisibilityFromOwner === "function") {
        window.syncCategoryVisibilityFromOwner();
      }
    } catch (err) {
      console.error("[RM Catalog] Render error:", err);
    } finally {
      state.rendering = false;
    }
  }

  async function init() {
    state.initialized = true;
    if (document.readyState === "loading") {
      await new Promise(res => document.addEventListener("DOMContentLoaded", res, { once: true }));
    }
    return render();
  }

  window.RM_CatalogRenderer = {
    init,
    render,
    isInitialized: () => state.initialized
  };

  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(init, 0);
  } else {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  }
})();
