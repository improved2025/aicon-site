import { clinic } from "@/lib/site";

export const metadata = { title: "You're offline" };

export default function Offline() {
  return (
    <section className="page-head dark" style={{ minHeight: "100dvh" }}>
      <div className="wrap" style={{ maxWidth: 640 }}>
        <p className="eyebrow">No connection</p>
        <h1 style={{ fontSize: "clamp(2.4rem,8vw,4rem)" }}>
          You're <em>offline.</em>
        </h1>
        <p className="lede" style={{ margin: "24px 0 36px" }}>
          You can still call the clinic. Booking a video visit needs an internet connection.
        </p>
        <div className="btns">
          <a className="btn btn-brass" href={clinic.phoneHref}>
            Call {clinic.phone}
          </a>
        </div>
        <p className="np-note" style={{ marginTop: 32 }}>
          Emergency? Call 911. Mental health crisis? Call or text 988.
        </p>
      </div>
    </section>
  );
}
