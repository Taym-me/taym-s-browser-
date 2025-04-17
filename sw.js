// sw.js
self.addEventListener('install', function(e) {
  console.log('Service Worker installed.');
});

self.addEventListener('fetch', function(event) {
  // Just let it go through normally
});
