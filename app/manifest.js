export default function manifest() {
  return {
    name: "Aicon Family Clinic",
    short_name: "Aicon Clinic",
    description: "Walk-in family care in Houston and video visits across eight states.",
    start_url: "/?source=app",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0e2a20",
    theme_color: "#0e2a20",
    categories: ["medical", "health"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Book a video visit", url: "/virtual#book", icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }] },
      { name: "Walk-in hours", url: "/clinic", icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }] },
    ],
  };
}
