import Link from "next/link";
import { Logo, BookButton } from "@/components/ui";
import { HeaderShell } from "@/components/live";
import { clinic } from "@/lib/site";

const nav = [
  { href: "/clinic", label: "Walk-in Clinic" },
  { href: "/virtual", label: "Virtual Clinic" },
  { href: "/about", label: "Our Provider" },
];

export function Header() {
  return (
    <HeaderShell>
      <div className="wrap">
        <div className="header-inner">
          <Logo />
          <nav className="nav" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>
          <BookButton>Book online</BookButton>
          <details className="menu">
            <summary>Menu</summary>
            <nav aria-label="Mobile">
              {nav.map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
              <Link href="/policies">Policies</Link>
              <BookButton variant="forest" />
            </nav>
          </details>
        </div>
      </div>
    </HeaderShell>
  );
}

export function Marquee({ items }) {
  const row = items.map((t, i) => (
    <span key={i} className="mq-item">
      {t}
      <span className="mq-dot" aria-hidden="true">
        ✦
      </span>
    </span>
  ));
  return (
    <div className="marquee" aria-label={items.join(", ")}>
      <div className="mq-track" aria-hidden="true">
        {row}
        {row}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Logo />
            <p style={{ maxWidth: "30ch" }}>Family care in Houston, and by video across eight states.</p>
          </div>
          <div>
            <p className="foot-head">Visit</p>
            <div className="foot-list">
              <Link href="/clinic">Walk-in Clinic</Link>
              <Link href="/virtual">Virtual Clinic</Link>
              <Link href="/about">Our Provider</Link>
              <Link href="/policies">Policies</Link>
            </div>
          </div>
          <div>
            <p className="foot-head">Contact</p>
            <div className="foot-list">
              <a href={clinic.phoneHref}>{clinic.phone}</a>
              <a href={clinic.mapsHref} target="_blank" rel="noopener noreferrer">
                {clinic.street}
                <br />
                {clinic.city}
              </a>
            </div>
          </div>
          <div>
            <p className="foot-head">Emergencies</p>
            <p>Call 911 for a medical emergency. Call or text 988 for a mental health crisis.</p>
          </div>
        </div>
        <div className="foot-legal">
          <span>© {new Date().getFullYear()} {clinic.legalName}</span>
          <Link href="/review">Preview build · open items</Link>
        </div>
      </div>
    </footer>
  );
}
