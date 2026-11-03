import Link from "next/link";
import Reveal from "@/components/Reveal";
import VisitFinder from "@/components/VisitFinder";
import { Marquee } from "@/components/chrome";
import { ArchArt, BookButton } from "@/components/ui";
import { Counter, LiveStatus, Rotator } from "@/components/live";
import { provider, visits } from "@/lib/site";

const featured = ["General sick visit", "New patient consultation", "Chronic disease management, initial", "Weight loss consultation"];

const services = [
  "Sick visits",
  "Physicals",
  "Diabetes care",
  "Blood pressure",
  "Weight loss",
  "Well-woman exams",
  "Lab testing",
  "Vaccines",
  "Minor procedures",
  "IV hydration",
  "Video visits",
];

export default function Home() {
  const top = visits.filter((v) => featured.includes(v.name));
  return (
    <>
      <section className="hero dark">
        <div className="orb orb-1" aria-hidden="true" />
        <div className="orb orb-2" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow rise">Houston family care · Since 2016</p>
              <h1 className="rise r1" aria-label="Care that listens, heals and shows up.">
                Care that
                <Rotator words={["listens.", "heals.", "shows up."]} />
              </h1>
              <p className="lede rise r2">
                Walk in at our Houston clinic, or see the same provider by video from wherever you are.
              </p>
              <div className="btns rise r3">
                <BookButton />
                <Link href="/clinic" className="btn btn-line">
                  Walk-in clinic
                </Link>
              </div>
            </div>
            <div className="hero-art rise r2">
              <div className="chip chip-a">
                <small>Walk-in clinic</small>
                <LiveStatus kind="clinic" />
              </div>
              <div className="arch">
                <ArchArt animate />
              </div>
              <div className="chip chip-b">
                <small>Video visits</small>
                <LiveStatus kind="virtual" />
              </div>
            </div>
          </div>
          <div className="stats">
            <div className="stat">
              <Counter to={17} suffix="+" />
              <span>Years in healthcare</span>
            </div>
            <div className="stat">
              <Counter to={10} />
              <span>Years in practice</span>
            </div>
            <div className="stat">
              <Counter to={8} />
              <span>States by video</span>
            </div>
            <div className="stat">
              <Counter to={50} prefix="$" />
              <span>Video visits from</span>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={services} />

      <section className="section">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <p className="eyebrow">Find your visit</p>
              <h2>
                What brings you <em>in today?</em>
              </h2>
            </div>
            <p className="lede" style={{ maxWidth: "34ch" }}>
              Tap what you need. We'll tell you whether to log on or walk in.
            </p>
          </Reveal>
          <Reveal>
            <VisitFinder />
          </Reveal>
        </div>
      </section>

      <section className="section cream">
        <div className="wrap provider">
          <Reveal className="arch arch-provider">
            <ArchArt animate />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Your provider</p>
            <blockquote className="quote">Every patient matters, and every life deserves kindness.</blockquote>
            <div className="sig">
              <strong>
                {provider.displayName}, {provider.credentials}
              </strong>
              <span>Owner and family nurse practitioner</span>
            </div>
            <div style={{ marginTop: 40 }}>
              <Link href="/about" className="link">
                Read her story →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <p className="eyebrow">Video visits</p>
              <h2>
                Clear prices. <em>No surprises.</em>
              </h2>
            </div>
            <Link href="/virtual#prices" className="link">
              All 10 visit types →
            </Link>
          </Reveal>
          <Reveal className="price-list cols-2" as="div">
            {top.map((v) => (
              <Link href="/virtual#prices" className="price-row" key={v.name}>
                <span>{v.name}</span>
                <strong>${v.price}</strong>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cta">
        <Reveal className="wrap">
          <p className="eyebrow">Feeling unwell?</p>
          <h2>
            We can see you <em>today.</em>
          </h2>
          <div className="btns">
            <BookButton variant="forest" />
            <Link href="/clinic" className="btn btn-line-dark">
              Find the clinic
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
