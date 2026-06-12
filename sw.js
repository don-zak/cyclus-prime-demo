// CYCLUS Prime Service Worker — for the built public demo only (dist/index.html or github_public_demo/)
// Does NOT cache js/ or css/ source files. Use the standalone dist/index.html for offline play.
const CYCLUS_CACHE = 'cyclus-prime-v3-7-1-fixed-20260612';
const CORE_ASSETS = ['./index.html', './manifest.webmanifest', './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CYCLUS_CACHE).then(cache => cache.addAll(CORE_ASSETS)).catch(() => undefined));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CYCLUS_CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CYCLUS_CACHE).then(cache => cache.put(event.request, copy)).catch(() => undefined);
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html'))));
});

