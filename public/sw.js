// Retired service worker. Any browser still running an older version picks
// this file up, clears everything that version stored, removes itself, and
// reloads open pages so they come straight from the website again.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const pages = await self.clients.matchAll({ type: "window" });
      pages.forEach((page) => page.navigate(page.url));
    })()
  );
});

// No fetch handler: every request goes straight to the network.
