"use client";
import { useState } from "react";
import Link from "next/link";
import { BOOKING_URL, clinic, states } from "@/lib/site";

const OTHER = "__other";

export default function BookingGate() {
  const [st, setSt] = useState("");
  const [mc, setMc] = useState(null); // "yes" | "no" | null
  const [agree, setAgree] = useState(false);

  const outOfState = st === OTHER;
  const hasMedicare = mc === "yes";
  const ready = st && st !== OTHER && mc === "no" && agree;

  return (
    <div className="gate">
      <ol className="gate-steps">
        {/* 1. State */}
        <li className={`gate-step ${st ? "done" : ""}`}>
          <span className="gate-num" aria-hidden="true">1</span>
          <div className="gate-body">
            <label htmlFor="gate-state" className="gate-q">
              Where will you be during your visit?
            </label>
            <div className="select-wrap">
              <select id="gate-state" value={st} onChange={(e) => setSt(e.target.value)}>
                <option value="">Choose your state</option>
                {states.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value={OTHER}>Somewhere else</option>
              </select>
            </div>
            {outOfState && (
              <p className="gate-stop" role="alert">
                We can only see patients who are in one of our 8 states at the time of the visit. If you'll be in one of
                them soon, come back and book for then.
              </p>
            )}
          </div>
        </li>

        {/* 2. Medicare / Medicaid */}
        <li className={`gate-step ${mc ? "done" : ""}`}>
          <span className="gate-num" aria-hidden="true">2</span>
          <div className="gate-body">
            <p className="gate-q" id="gate-mc">
              Do you have Medicare or Medicaid?
            </p>
            <div className="seg" role="radiogroup" aria-labelledby="gate-mc">
              {["no", "yes"].map((v) => (
                <button
                  key={v}
                  type="button"
                  role="radio"
                  aria-checked={mc === v}
                  className={mc === v ? "on" : ""}
                  onClick={() => setMc(v)}
                >
                  {v === "yes" ? "Yes" : "No"}
                </button>
              ))}
            </div>
            {hasMedicare && (
              <div className="gate-stop" role="alert">
                <p>Our video visits are self-pay only. Please call us before booking so we can find the right option for you.</p>
                <a className="btn btn-forest" href={clinic.phoneHref}>
                  Call {clinic.phone}
                </a>
              </div>
            )}
          </div>
        </li>

        {/* 3. Policy */}
        <li className={`gate-step ${agree ? "done" : ""}`}>
          <span className="gate-num" aria-hidden="true">3</span>
          <div className="gate-body">
            <label className="gate-check">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
              <span className="box" aria-hidden="true" />
              <span>
                I've read and agree to the{" "}
                <Link href="/policies" target="_blank">
                  cancellation and refund policy
                </Link>
                .
              </span>
            </label>
            <p className="gate-fine">
              Visits are paid in full when you book. Cancel 12+ hours ahead for a full refund. Payment covers the
              provider's evaluation and does not guarantee a prescription.
            </p>
          </div>
        </li>
      </ol>

      <div className={`gate-go ${ready ? "ready" : ""}`}>
        {BOOKING_URL ? (
          <a
            className="btn btn-brass gate-btn"
            href={ready ? BOOKING_URL : undefined}
            aria-disabled={!ready}
            onClick={(e) => !ready && e.preventDefault()}
          >
            Continue to booking <span className="arr">→</span>
          </a>
        ) : (
          <a className="btn btn-brass gate-btn" href={clinic.phoneHref}>
            Call to book {clinic.phone}
          </a>
        )}
        <p className="gate-hint">
          {ready
            ? "Next you'll pick your visit type and time, then pay securely."
            : "Answer the three questions above to continue."}
        </p>
      </div>
    </div>
  );
}
