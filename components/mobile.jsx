"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOKING_URL, clinic } from "@/lib/site";

/* Full-screen mobile menu that closes itself after navigation */
export function MobileMenu({ links }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);
  return (
    <div className="mmenu">
      <button
        type="button"
        className="mmenu-btn"
        aria-expanded={open}
        aria-controls="mmenu-sheet"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`burger ${open ? "x" : ""}`} aria-hidden="true">
          <i />
          <i />
        </span>
        <span className="sr">{open ? "Close menu" : "Open menu"}</span>
      </button>
      {mounted &&
        createPortal(
          <div
            id="mmenu-sheet"
            className={`mmenu-sheet ${open ? "open" : ""}`}
            hidden={!open}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="mmenu-top">
              <span className="mmenu-title">Menu</span>
              <button type="button" className="mmenu-btn" onClick={() => setOpen(false)}>
                <span className="burger x" aria-hidden="true">
                  <i />
                  <i />
                </span>
                <span className="sr">Close menu</span>
              </button>
            </div>
            <nav aria-label="Mobile">
              {links.map((l, i) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ animationDelay: `${60 + i * 50}ms` }}>
                  {l.label}
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </nav>
            <div className="mmenu-foot">
              <a href={clinic.phoneHref}>Call {clinic.phone}</a>
              <a href={clinic.mapsHref} target="_blank" rel="noopener noreferrer">
                Directions
              </a>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

/* Thumb-reach action bar on phones */
export function MobileBar() {
  const href = BOOKING_URL || "/virtual#book";
  const ext = BOOKING_URL ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <div className="mbar" role="region" aria-label="Quick actions">
      <a className="mbar-btn mbar-call" href={clinic.phoneHref} aria-label={`Call ${clinic.phone}`}>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"
          />
        </svg>
        <span className="mbar-label">Call</span>
      </a>
      <a className="mbar-btn mbar-dir" aria-label="Directions to the clinic" href={clinic.mapsHref} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
        </svg>
        <span className="mbar-label">Directions</span>
      </a>
      <a className="mbar-btn mbar-book" href={href} {...ext}>
        Book video visit
      </a>
    </div>
  );
}

/* Registers the service worker so the site can be installed like an app */
export function PwaRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);
  return null;
}
