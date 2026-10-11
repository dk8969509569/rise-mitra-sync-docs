# RISE MITRA — REPOSITORY HARD NEGATIVE INVARIANTS & AUTO-LEARN LEDGER
**Document Class:** STRICT MACHINE-READABLE PRE-FLIGHT AUDIT SPECIFICATION  
**SSOT Authority:** Folder A (`11xhCALIgDjUIZU33HkLEJ5J6vViDEAPW`) & Folder B (`1LjFDeDFLyZ-HvrEKMY_9sjDWvTwH-LjH`)  
**Mandate:** Mandatory for all AI assistants, developers, and code generators. Any violation of these rules causes immediate PR failure and rollback.

---

## 🛑 MANDATORY AI PRE-FLIGHT SELF-AUDIT (EVERY TURN)
Before proposing or writing any code for Rise Mitra, the AI MUST internally verify these binary checks:
- [x] Check 1: Did I add any `✕` or close icon to the Home Grid favorites? (STRICT NO).
- [x] Check 2: Is English-Roman placed FIRST, followed by Hindi-Devanagari SECOND? (STRICT YES).
- [x] Check 3: Is data schema tolerant (`seq || code || id`) with ZERO automatic wiping? (STRICT YES).
- [x] Check 4: Are giant 450px marketing posters purged from the catalog modal? (STRICT YES).
- [x] Check 5: Are counts dynamically bound (`${count} विकल्प`) instead of hardcoded? (STRICT YES).
- [x] Check 6: Is the blast radius isolated so sibling features remain unaffected? (STRICT YES).

---

## 🚫 DETAILED LIST OF PROHIBITED ANTI-PATTERNS

### 1. [INV-FAV-001] ZERO CANCEL / UNPIN BUTTON ON HOME GRID
* **Strict Rule:** Home Screen ke `My Favorites (मेरी पसंदीदा)` grid cards par kabhi bhi `✕`, close ya unpin button render NAHI hoga.
* **Reason:** Accidental cancellation prevention. Cards 100% tap-safe shortcuts hain.
* **Unpinning Authority:** Unpinning ka adhikar EXCLUSIVELY Catalog Modal ke andar `[✓ पिन किया]` toggle button ke paas hai.

### 2. [INV-I18N-002] STRICT BILINGUAL ORDER: ENGLISH-ROMAN FIRST
* **Strict Rule:** Sabhi headers, cards, badges aur labels par English-Roman pehle aayega aur Hindi-Devanagari baad me aayega.
* **Header Standard:** `My Favorites (मेरी पसंदीदा)`
* **Card Standard:** Line 1: English-Roman Title (Bold) | Line 2: Hindi-Devanagari Subtitle.

### 3. [INV-DATA-003] ZERO AUTOMATIC DATA LOSS (TOLERANT CONTRACT)
* **Strict Rule:** App update, cache refresh ya schema evolution hone par customer ka pinned data kabhi bhi auto-delete / drop nahi hoga.
* **Contract Law:** Hamesha tolerant fallback use hoga: `item.seq || item.code || item.id`.
* **User Intent Law:** Data keval aur keval customer ke explicit "Unpin" action par hi delete ho sakta hai.

### 4. [INV-PURGE-004] ZERO 450PX MARKETING POSTERS IN MODAL
* **Strict Rule:** Catalog drawer / modal ke andar koi bhi 380px ya 450px ke giant marketing banners render nahi honge.
* **Layout Law:** Clean 14px radius accordion cards aur 10px spacing wale sub-cards hi render honge.

### 5. [INV-COUNT-005] DYNAMIC i18n COUNT BINDING
* **Strict Rule:** Kisi bhi category header ya badge me static text (jaise "3 सेवाएं" ya "3 गेम्स") hardcode nahi hoga.
* **Binding Law:** Hamesha dynamic calculation aayegi: `${count} विकल्प` / `${count} गेम्स`.

### 6. [INV-ISO-006] BLAST RADIUS CONTAINMENT & DECOUPLING
* **Strict Rule:** Ek button, category ya adapter ke badlav se dusra button ya feature kabhi break ya affect nahi hona chahiye.
* **Architecture:** Har naya feature ek decoupled, modular container aur isolated namespace me chalega.

### 7. [INV-SURF-007] DUAL-SURFACE ISOLATION
* **Strict Rule:** Surface A (Public PWA) aur Surface B (Owner Stealth Console) ke controls aur styles aapas me mix nahi honge.
* **Visual Outline Law:** Public mode me dashed outlines kabhi leak nahi honge. Dashed outlines strictly Owner in-situ mode tak simit rahenge.
