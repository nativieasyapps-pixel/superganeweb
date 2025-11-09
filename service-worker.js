self.addEventListener('install', e => {
  e.waitUntil(caches.open('sgw-v1').then(cache => cache.addAll(['/','/css/styles.css','/js/main.js','/img/favicon.svg'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
