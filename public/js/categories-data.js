/**
 * RM WORLD — Universal 50-Category Modular Catalog & Sub-Tree Engine
 * SPECIFICATION : 14_04__EXT_003 (Sections 3.13–3.16, 8.9) & File-09 MER (Section 9.Y)
 * GOVERNANCE    : GATE-16.6 • Zero-Element-Loss (ZEL) Canonical Frozen
 */

(function () {
  "use strict";

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
      { id: "c30", num: "30", icon: "🛠️", name: "Tools (कैलकुलेटर व टूल्स)" },
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

  window.RM_CATALOG_DATA = ROOTS;
  window.RM_CATALOG_LOCAL_CHILDREN = LOCAL_CHILDREN;

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = String(text);
    return node;
  }

  function label(item) {
    return item.title || `${item.num ? item.num + ". " : ""}${item.name}`;
  }

  function activateItem(item) {
    if (item.action === "launch") {
      if (typeof window.handleLaunchCategory === "function") {
        window.handleLaunchCategory(item.catId, item.subId);
      } else {
        alert(label(item) + " खोला जा रहा है...");
      }
    } else {
      alert(item.message || (label(item) + " — शीघ्र उपलब्ध होगी।"));
    }
  }

  function buildChildNode(child) {
    const btn = el(
      "button",
      "w-full text-left p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 text-slate-200 tactile-25d flex items-center justify-between min-h-[48px] cursor-pointer"
    );
    btn.type = "button";
    btn.dataset.catId = child.id;

    const left = el("div", "flex items-center space-x-2.5 min-w-0");
    left.append(el("span", "text-sm shrink-0", child.icon));
    left.append(el("span", "text-xs font-semibold truncate", child.title));
    btn.append(left);

    const badge = el(
      "span",
      child.isLuminous
        ? "text-[10px] bg-emerald-500 text-slate-950 px-2.5 py-1 rounded-md font-extrabold uppercase tracking-wider shadow whitespace-nowrap shrink-0 ml-2"
        : "text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md font-bold whitespace-nowrap shrink-0 ml-2",
      child.badge
    );
    btn.append(badge);

    if (child.isLuminous) {
      btn.classList.add("ring-active-luminous");
    }

    btn.addEventListener("click", () => activateItem(child));
    return btn;
  }

  function buildItemNode(item) {
    if (item.hasChildren) {
      const wrapper = el("div", "rounded-2xl border border-slate-800/90 bg-slate-900/40 overflow-hidden transition-all");
      wrapper.dataset.catId = item.id;

      const headerBtn = el(
        "button",
        "w-full text-left p-3.5 text-slate-100 tactile-25d flex items-center justify-between min-h-[52px] bg-slate-900/70 hover:bg-slate-850 cursor-pointer"
      );
      headerBtn.type = "button";

      const left = el("div", "flex items-center space-x-2.5 min-w-0");
      left.append(el("span", "text-base shrink-0", item.icon));
      left.append(el("span", "text-xs font-bold tracking-wide truncate", label(item)));
      headerBtn.append(left);

      const arrow = el("span", "sub-arrow text-sm font-bold text-emerald-400 font-mono transition-transform duration-200", item.defaultExpanded ? "▼" : "▶");
      headerBtn.append(arrow);

      const panel = el("div", "space-y-2 py-2.5 pr-2.5 ml-3.5 pl-3 border-l-2 border-emerald-500/40 transition-all");
      panel.id = `${item.id}-subs`;
      panel.style.display = item.defaultExpanded ? "block" : "none";

      const children = LOCAL_CHILDREN[item.id] || [];
      for (const child of children) {
        panel.append(buildChildNode(child));
      }

      headerBtn.addEventListener("click", () => {
        const isHidden = panel.style.display === "none";
        panel.style.display = isHidden ? "block" : "none";
        arrow.textContent = isHidden ? "▼" : "▶";
      });

      wrapper.append(headerBtn, panel);
      return wrapper;
    }

    const btn = el(
      "button",
      "w-full text-left p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 tactile-25d flex items-center justify-between min-h-[48px] cursor-pointer"
    );
    btn.type = "button";
    btn.dataset.catId = item.id;

    const left = el("div", "flex items-center space-x-2.5 min-w-0");
    left.append(el("span", "text-sm shrink-0", item.icon));
    left.append(el("span", "text-xs font-semibold truncate", label(item)));
    btn.append(left);

    const badge = el(
      "span",
      "text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md font-bold whitespace-nowrap shrink-0 ml-2",
      item.action === "launch" ? "खोलें ›" : "जल्द आ रहा"
    );
    btn.append(badge);

    btn.addEventListener("click", () => activateItem(item));
    return btn;
  }

  function render() {
    const t1Box = document.getElementById("tier1-list");
    const t2Box = document.getElementById("tier2-list");

    if (t1Box) {
      const frag1 = document.createDocumentFragment();
      for (const item of ROOTS.tier1) {
        frag1.append(buildItemNode(item));
      }
      t1Box.innerHTML = "";
      t1Box.append(frag1);
    }

    if (t2Box) {
      const frag2 = document.createDocumentFragment();
      for (const item of ROOTS.tier2) {
        frag2.append(buildItemNode(item));
      }
      t2Box.innerHTML = "";
      t2Box.append(frag2);
    }

    if (typeof window.syncCategoryVisibilityFromOwner === "function") {
      window.syncCategoryVisibilityFromOwner();
    }
  }

  window.RM_CatalogRenderer = {
    render: render,
    init: render
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render, { once: true });
  } else {
    setTimeout(render, 0);
  }
})();
