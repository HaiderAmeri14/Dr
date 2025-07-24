self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('offline-cache-v1').then(function(cache) {
      return cache.addAll([
        'offline.html'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match('offline.html');
    })
  );
});
