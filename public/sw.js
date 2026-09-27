// =========================================================================
// RISE MITRA (RM WORLD) - SOVEREIGN PWA SERVICE WORKER (v2.2.0)
// Canonical Binding : RM-SPEC-F14-PWA-02 | File-14 Section Q & AGENT-GOV-002
// Target File       : public/sw.js
// Invariants        : 100% Offline Resilience | Precached Core | Fail-Closed
// =========================================================================

const CACHE_NAME = 'rise-mitra-cache-v2.2.0';

// Step 3.1: Pre-cache Essential Canonical Assets
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/owner-console.html',
  '/manifest.json',
  '/api-client.js',
  '/js/categories-data.js',
  '/js/app.js',
  '/js/voucher-sync.js',
  'https://cdn.tailwindcss.com',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=512&q=80'
];

// Install Event: Pre-cache Static Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching Rise Mitra v2.2.0 offline shell');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache version:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Step 3.2: Fail-Closed Cache & Network Strategy
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 1. API Requests: Network-First with Graceful Offline Fallback
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return new Response(
            JSON.stringify({
              success: false,
              offline: true,
              message: 'आप अभी ऑफ़लाइन हैं। लेन-देन स्थानीय रूप से बहीखाते में सुरक्षित कर लिया गया है।'
            }),
            { headers: { 'Content-Type': 'application/json; charset=utf-8' } }
          );
        })
    );
    return;
  }

  // 2. Static Shell & Scripts: Cache-First Strategy
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((networkResponse) => {
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== 'basic'
          ) {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        })
      );
    })
  );
});

// Step 3.3: Background Sync & Circuit-Breaker Event Listeners
self.addEventListener('sync', (event) => {
  if (event.tag === 'rm-sync-vouchers') {
    event.waitUntil(
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'TRIGGER_VOUCHER_RECONCILE' });
        });
      })
    );
  }
});

// Emergency Kill-Switch Message Listener (L2 Lockdown Cache Purge)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'KILL_SWITCH_LOCKDOWN') {
    caches.delete(CACHE_NAME).then(() => {
      console.warn('[ServiceWorker] Emergency Kill-Switch L2: Local Cache Purged.');
    });
  }
});

