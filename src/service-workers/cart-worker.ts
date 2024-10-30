/// <reference lib="webworker" />
/// <reference lib="es2015" />

// Service Worker for cart updates
const CACHE_NAME = 'cart-cache-v1';

self.addEventListener('install', ((event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
  );
}) as EventListener);

self.addEventListener('message', (event) => {
  if (event.data.type === 'CART_UPDATE') {
    // Broadcast the cart update to all clients
    self.clients.matchAll().then((clients: ReadonlyArray<Client>) => {
      clients.forEach((client) => {
        if ('window' in client && client.id !== event.source?.id) {
          client.postMessage({
            type: 'CART_UPDATED',
            payload: event.data.payload
          });
        }
      });
    });
  }
});

self.addEventListener('fetch', (event: FetchEvent) => {
  if (event.request.url.includes('/cart')) {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  }
});
