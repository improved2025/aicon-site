export const metadata = { title: "Open items for review" };

const items = [
  {
    t: "Medicare and Medicaid",
    d: "Is the provider enrolled in Medicare, and has she opted out? Until confirmed, the virtual page asks Medicare and Medicaid patients to call before booking.",
  },
  {
    t: "Setmore Health account",
    d: "Confirm the scheduling account was opened as Setmore Health with a signed BAA. The Book buttons stay inactive until we have that booking link.",
  },
  {
    t: "Exact certification letters",
    d: "The name line reads DNP, APRN, FNP. Confirm her exact Texas licensure title and national certification (for example FNP-C or FNP-BC).",
  },
  {
    t: "Use of Dr. in her name",
    d: "Shown as Dr. Kindness Chukwukere with DNP, APRN, FNP directly beside it, as Texas requires. California and Georgia have stricter rules for DNPs using Dr. with patients there. Get a quick legal check before launch, or remove those two states until then.",
  },
  {
    t: "New York license",
    d: "New York is listed with the other seven states. Confirm the license is active before launch, or we remove it.",
  },
  {
    t: "Controlled substances line",
    d: "The virtual page says we do not prescribe controlled substances by video, and refills are for non-controlled medications. Confirm this matches her practice.",
  },
  {
    t: "Same-day cancellation grace period",
    d: "Added to the policy as a proposal: same-day bookings can be canceled for free within 1 hour of booking. Approve or remove.",
  },
  {
    t: "Closing quote and photo",
    d: "Confirm she approves the quote word for word, and send a real professional photo.",
  },
  {
    t: "Clinic service list",
    d: "Built from the old site plus her bio. Confirm every listed in-person service is offered today, including PDO thread lifts and NAD+.",
  },
  {
    t: "Clinic insurance",
    d: "The old site's insurance list was removed as outdated. Tell us which plans the walk-in clinic accepts now, if any.",
  },
  {
    t: "Logo",
    d: "The mark in the header is a stand-in. Send the full-size original logo file.",
  },
  {
    t: "Effective date",
    d: "The policy needs its launch date.",
  },
];

export default function ReviewPage() {
  return (
    <>
    <section className="page-head dark">
      <div className="wrap">
        <p className="eyebrow">For Jeff and the clinic</p>
        <h1 style={{ fontSize: "clamp(2.8rem,6vw,5.2rem)" }}>Open items <em>before launch.</em></h1>
        <p className="lede">This page is removed at launch.</p>
      </div>
    </section>
    <section className="section">
      <div className="wrap" style={{ maxWidth: 820 }}>
        <ol className="policy-body" style={{ paddingLeft: 20 }}>
          {items.map((i) => (
            <li key={i.t} style={{ marginBottom: 20 }}>
              <strong style={{ display: "block" }}>{i.t}</strong>
              {i.d}
            </li>
          ))}
        </ol>
      </div>
    </section>
    </>
  );
}
