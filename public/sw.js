// Aicon Family Clinic service worker.
// Pages always come from the network. The offline screen is shown ONLY when
// the device reports it has no connection. Static files are cached for speed.
// It never stores patient data: booking, payment and video happen on
// Setmore and Doxy.me, outside this site.
const VERSION = "aicon-v2";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(VERSION)
      .then((c) => c.addAll(["/offline", "/logo.png", "/icons/icon-192.png"]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  // Clear every older cache, including any page the first version stored.
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // never touch Setmore, Doxy.me, fonts, maps

  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .catch(() => wait(1200).then(() => fetch(req))) // one retry for a brief network blip
        .catch(async () => {
          if (self.navigator && self.navigator.onLine === false) {
            const page = await caches.match("/offline");
            if (page) return page;
          }
          return Response.error();
        })
    );
    return;
  }

  // Static build files and images: cache first, but only store good responses.
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    /\.(png|svg|jpg|webp|woff2?)$/.test(url.pathname)
  ) {
    e.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok) {
              const copy = res.clone();
              caches.open(VERSION).then((c) => c.put(req, copy));
            }
            return res;
          })
      )
    );
  }
});
