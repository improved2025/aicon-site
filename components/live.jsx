"use client";
import { useEffect, useRef, useState } from "react";

/* ---------- Live open / closed status (Central Time) ---------- */

// Minutes after midnight, index 0 = Sunday.
const SCHEDULES = {
  clinic: [null, [510, 1050], [510, 1050], [510, 1050], [510, 1050], [510, 1050], [540, 780]],
  virtual: [null, [480, 1200], [480, 1200], [480, 1200], [480, 1200], [480, 1200], [480, 1020]],
};
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function fmt(m) {
  let h = Math.floor(m / 60);
  const mm = m % 60;
  const ap = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}${mm ? ":" + String(mm).padStart(2, "0") : ""} ${ap}`;
}

function nowCentral() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t)?.value;
  return { day: DAYS.indexOf(get("weekday")), min: parseInt(get("hour"), 10) * 60 + parseInt(get("minute"), 10) };
}

function getStatus(kind) {
  const s = SCHEDULES[kind];
  const { day, min } = nowCentral();
  const today = s[day];
  if (today && min >= today[0] && min < today[1]) {
    const left = today[1] - min;
    return { open: true, label: left <= 60 ? `Open · closes in ${left} min` : `Open now · until ${fmt(today[1])}` };
  }
  for (let i = 0; i < 8; i++) {
    const d = (day + i) % 7;
    const w = s[d];
    if (!w || (i === 0 && min >= w[0])) continue;
    const when = i === 0 ? "today" : i === 1 ? "tomorrow" : DAYS[d];
    return { open: false, label: `Closed · opens ${when} ${fmt(w[0])}` };
  }
  return { open: false, label: "Closed" };
}

export function LiveStatus({ kind = "clinic", className = "" }) {
  const [s, setS] = useState(null);
  useEffect(() => {
    const update = () => setS(getStatus(kind));
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, [kind]);
  return (
    <span className={`status ${className}`}>
      <span className={`dot ${s ? (s.open ? "on" : "off") : ""}`} aria-hidden="true" />
      <span>{s ? s.label : "Checking hours"}</span>
    </span>
  );
}

/* ---------- Rotating headline word ---------- */

export function Rotator({ words, interval = 2600 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((x) => (x + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  return (
    <span className="rotator" aria-hidden="true">
      <span key={i} className="rot-word">
        {words[i]}
      </span>
    </span>
  );
}

/* ---------- Count-up number ---------- */

export function Counter({ to, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const [v, setV] = useState(to);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    setV(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1600;
      const step = (t) => {
        const p = Math.min(1, (t - start) / dur);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <strong ref={ref}>
      {prefix}
      {v}
      {suffix}
    </strong>
  );
}

/* ---------- Sticky header that turns solid on scroll ---------- */

export function HeaderShell({ children }) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={`site-header ${solid ? "solid" : ""}`}>{children}</header>;
}
