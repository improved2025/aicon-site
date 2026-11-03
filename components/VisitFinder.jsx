"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { BookButton } from "@/components/ui";
import { LiveStatus } from "@/components/live";
import { clinic, visits } from "@/lib/site";

const price = (name) => visits.find((v) => v.name === name)?.price;

const NEEDS = [
  { id: "sick", label: "I feel sick", icon: "🤒", mode: "video", title: "General sick visit", priceOf: "General sick visit", why: "Colds, sinus trouble, rashes, urinary symptoms and everyday illness, treated from home." },
  { id: "chronic", label: "Diabetes or blood pressure", icon: "🩺", mode: "video", title: "Chronic care visit", priceOf: "Chronic disease management, initial", why: "Ongoing care for long term conditions, without the waiting room." },
  { id: "weight", label: "Lose weight", icon: "⚖️", mode: "video", title: "Weight loss consultation", priceOf: "Weight loss consultation", why: "A full evaluation and a plan built around your body and your schedule." },
  { id: "refill", label: "Medication refill", icon: "💊", mode: "video", title: "Refill consultation", priceOf: "Medication refill consultation", why: "Non-controlled medications, after a quick review with your provider." },
  { id: "labs", label: "My lab results", icon: "📋", mode: "video", title: "Lab results consultation", priceOf: "Lab results consultation", why: "We walk you through your numbers and what to do next." },
  { id: "physical", label: "Physical or Pap smear", icon: "📝", mode: "clinic", title: "Walk in for your exam", why: "Annual, school, sports and work physicals, plus well-woman exams. No appointment." },
  { id: "tests", label: "Shots or lab tests", icon: "💉", mode: "clinic", title: "Walk in for tests", why: "Lab draws, rapid flu and strep, EKGs and vaccines, done on site." },
  { id: "injury", label: "Cut or injury", icon: "🩹", mode: "clinic", title: "Walk in today", why: "Stitches, abscesses, sprains and minor procedures, same day." },
  { id: "wellness", label: "Botox, IV or wellness", icon: "✨", mode: "clinic", title: "Wellness at the clinic", why: "Botox, fillers, IV hydration and NAD+ therapy." },
];

export default function VisitFinder() {
  const [id, setId] = useState("sick");
  const resultRef = useRef(null);
  const pick = (next) => {
    setId(next);
    if (window.matchMedia("(max-width: 1000px)").matches) {
      requestAnimationFrame(() =>
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
      );
    }
  };
  const n = NEEDS.find((x) => x.id === id);
  const p = n.priceOf ? price(n.priceOf) : null;

  return (
    <div className="finder">
      <div className="finder-chips" role="radiogroup" aria-label="What brings you in">
        {NEEDS.map((x) => (
          <button
            key={x.id}
            type="button"
            role="radio"
            aria-checked={x.id === id}
            className={`fchip ${x.id === id ? "active" : ""}`}
            onClick={() => pick(x.id)}
          >
            <span className={`fchip-dot ${x.mode}`} aria-hidden="true" />
            {x.label}
          </button>
        ))}
      </div>

      <div ref={resultRef} key={id} className={`finder-result ${n.mode === "video" ? "is-video" : "is-clinic"}`} aria-live="polite">
        <span className="mode-tag">{n.mode === "video" ? "Video visit from home" : "At the Houston clinic"}</span>
        <h3>{n.title}</h3>
        <p>{n.why}</p>
        <div className="finder-meta">
          {p ? (
            <span className="finder-price">
              ${p}
              <small>self-pay</small>
            </span>
          ) : (
            <span className="finder-price small">
              No appointment
              <small>walk-ins welcome</small>
            </span>
          )}
          <LiveStatus kind={n.mode === "video" ? "virtual" : "clinic"} />
        </div>
        <div className="btns">
          {n.mode === "video" ? (
            <>
              <BookButton />
              <Link href="/virtual#prices" className="btn btn-line">
                All prices
              </Link>
            </>
          ) : (
            <>
              <a className="btn btn-brass" href={clinic.mapsHref} target="_blank" rel="noopener noreferrer">
                Get directions <span className="arr">→</span>
              </a>
              <a className="btn btn-line" href={clinic.phoneHref}>
                Call first
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
