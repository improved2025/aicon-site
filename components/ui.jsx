import Link from "next/link";
import { BOOKING_URL, clinic } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Aicon Family Clinic home">
      <img src="/logo.png" alt="" className="logo-img" />
      <span className="logo-text">
        <span className="logo-name">Aicon</span>
        <span className="logo-sub">Family Clinic</span>
      </span>
    </Link>
  );
}

const Arr = () => (
  <span className="arr" aria-hidden="true">
    →
  </span>
);

export function BookButton({ children = "Book a video visit", variant = "brass" }) {
  const href = BOOKING_URL || "/virtual#book";
  const ext = BOOKING_URL ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a className={`btn btn-${variant}`} href={href} {...ext}>
      {children} <Arr />
    </a>
  );
}

export function CallButton({ variant = "line" }) {
  return (
    <a className={`btn btn-${variant}`} href={clinic.phoneHref}>
      Call {clinic.phone}
    </a>
  );
}

export function ArchArt({ light = false, animate = false }) {
  const stroke = light ? "#b8945c" : "#c2a06a";
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className={animate ? "art-live" : ""}>
      <circle className="sun" cx="270" cy="150" r="64" fill={stroke} opacity={light ? 0.18 : 0.14} />
      <g className="leaves" fill="none" stroke={stroke} strokeWidth="1.2" opacity={light ? 0.75 : 0.6} strokeLinecap="round">
        <path d="M200 520 C 196 420, 186 330, 150 230" />
        <path d="M150 230 C 120 210, 96 214, 80 236 C 110 252, 132 250, 150 230" />
        <path d="M168 300 C 200 270, 236 268, 262 286 C 232 312, 198 316, 168 300" />
        <path d="M180 370 C 142 350, 108 356, 88 380 C 120 398, 154 394, 180 370" />
        <path d="M192 440 C 228 414, 268 414, 296 436 C 262 460, 222 462, 192 440" />
        <path d="M156 244 C 160 200, 180 168, 206 150 C 214 186, 196 222, 156 244" />
        <path d="M300 520 C 300 450, 310 400, 336 350" />
        <path d="M336 350 C 360 340, 380 346, 392 364 C 368 376, 350 372, 336 350" />
        <path d="M316 420 C 290 404, 266 408, 252 426" />
      </g>
      <g className="rings" fill="none" stroke={stroke} strokeWidth="0.8" opacity="0.25">
        <circle cx="200" cy="250" r="150" />
        <circle cx="200" cy="250" r="210" />
      </g>
    </svg>
  );
}
