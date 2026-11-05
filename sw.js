/* Cache simples: o app abre sem internet. O teste de banda continua exigindo conexão. */
const V = 'ondas-v3';
const ARQ = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-180.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(ARQ)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.pathname.includes('/speed/')) return;          // teste de banda sempre vai à rede
  if (u.origin !== location.origin) {                                         // fontes: cache ao usar
    e.respondWith(caches.open(V).then(c => c.match(r).then(m => m || fetch(r).then(n => { c.put(r, n.clone()); return n; }).catch(() => m))));
    return;
  }
  e.respondWith(fetch(r).then(n => { const cp = n.clone(); caches.open(V).then(c => c.put(r, cp)); return n; }).catch(() => caches.match(r).then(m => m || caches.match('index.html'))));
});
