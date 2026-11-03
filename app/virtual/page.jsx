import Link from "next/link";
import Reveal from "@/components/Reveal";
import { BookButton, CallButton } from "@/components/ui";
import StateCheck from "@/components/StateCheck";
import { LiveStatus } from "@/components/live";
import { BOOKING_URL, states, telehealthHours, visits } from "@/lib/site";

export const metadata = { title: "Virtual Clinic" };

export default function VirtualPage() {
  return (
    <>
      <section className="page-head dark">
        <div className="wrap head-grid">
          <div>
            <p className="eyebrow rise">Virtual Clinic</p>
            <h1 className="rise r1">
              The clinic, <em>on your screen.</em>
            </h1>
            <p className="lede rise r2">Same-day and scheduled video visits. Paid when you book. No insurance needed.</p>
            <div className="btns rise r3">
              <BookButton />
              <a href="#prices" className="btn btn-line">
                See prices
              </a>
            </div>
          </div>
          <div className="glass rise r2">
            <LiveStatus kind="virtual" className="status-lg" />
            <h3 style={{ marginTop: 20 }}>Hours, Central Time</h3>
            <table className="hours">
              <tbody>
                {telehealthHours.map((h) => (
                  <tr key={h.day}>
                    <td>{h.day}</td>
                    <td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="ol" className="steps">
            <li>
              <strong>Book and pay</strong>
              <p>Pick a visit and a time.</p>
            </li>
            <li>
              <strong>Get your link</strong>
              <p>Secure video. No app needed.</p>
            </li>
            <li>
              <strong>See your provider</strong>
              <p>From any private, quiet spot.</p>
            </li>
          </Reveal>
        </div>
      </section>

      <section className="section cream" style={{ paddingTop: 0, background: "transparent" }}>
        <div className="wrap">
          <Reveal className="card" style={{ background: "var(--cream)" }}>
            <div className="split">
              <div>
                <p className="eyebrow">Where we see you</p>
                <h2 style={{ marginTop: 20, fontSize: "clamp(2rem,4vw,3.2rem)" }}>
                  Eight states. <em>Your location counts.</em>
                </h2>
              </div>
              <div>
                <StateCheck />
                <ul className="states">
                  {states.map((s) => (
                    <li key={s.name}>{s.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section dark" id="prices">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <p className="eyebrow">Self-pay prices</p>
              <h2>
                One price. <em>Paid up front.</em>
              </h2>
            </div>
            <Link href="/policies" className="link">
              Cancellation policy →
            </Link>
          </Reveal>
          <Reveal className="price-list cols-2">
            {visits.map((v) => (
              <div className="price-row" key={v.name}>
                <span>{v.name}</span>
                <strong>${v.price}</strong>
              </div>
            ))}
          </Reveal>
          <p className="fine">
            Refills cover non-controlled medications only. Exams, Pap smears, vaccines and lab draws happen at the clinic.
            Payment covers the evaluation and does not guarantee a prescription.
          </p>
        </div>
      </section>

      <section className="section" id="book">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Ready?</p>
            <h2 style={{ marginTop: 20 }}>
              Book in <em>two minutes.</em>
            </h2>
            <div className="btns" style={{ marginTop: 40 }}>
              {BOOKING_URL ? <BookButton variant="forest" /> : <CallButton variant="line-dark" />}
            </div>
          </Reveal>
          <Reveal delay={120} style={{ display: "grid", gap: 24, alignContent: "end" }}>
            <p className="note">
              <strong>Medicare or Medicaid?</strong> Please call us before booking.
            </p>
            <p className="note">
              <strong>Emergency?</strong> Call 911. For a mental health crisis, call or text 988.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
