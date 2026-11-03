"use client";
import { useState } from "react";
import { BookButton } from "@/components/ui";
import { states } from "@/lib/site";

const ALL = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
  "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

export default function StateCheck() {
  const [st, setSt] = useState("");
  const ok = states.some((s) => s.name === st);
  return (
    <div className="statecheck">
      <label htmlFor="state">Where will you be during your visit?</label>
      <div className="select-wrap">
        <select id="state" value={st} onChange={(e) => setSt(e.target.value)}>
          <option value="">Choose a state</option>
          {ALL.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      {st && (
        <div key={st} className={`sc-result ${ok ? "yes" : "no"}`} aria-live="polite">
          {ok ? (
            <>
              <strong>Yes, we can see you in {st}.</strong>
              <BookButton variant="forest" />
            </>
          ) : (
            <strong>Not yet. We can only see patients located in our 8 states at the time of the visit.</strong>
          )}
        </div>
      )}
    </div>
  );
}
