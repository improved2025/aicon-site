import Reveal from "@/components/Reveal";
import { CallButton } from "@/components/ui";
import { LiveStatus } from "@/components/live";
import { clinic } from "@/lib/site";

export const metadata = { title: "Walk-in Clinic" };

const services = [
  ["Primary care", "Annual, school, sports, camp and work physicals. Well-woman exams, Pap smears and men's health."],
  ["Same-day care", "Colds, flu, sore throats, infections, rashes, sprains and back pain."],
  ["Chronic care", "Diabetes, blood pressure, asthma and reflux, with referrals when you need them."],
  ["Tests and vaccines", "Lab work, EKGs, rapid flu and strep, pregnancy and STI testing, immunizations."],
  ["Minor procedures", "Stitches, abscess drainage, ingrown nails, skin tags, warts and earwax removal."],
  ["Weight and wellness", "Medical weight loss, Botox, fillers, PDO threads, IV hydration and NAD+."],
];

export default function ClinicPage() {
  return (
    <>
      <section className="page-head dark">
        <div className="wrap head-grid">
          <div>
            <p className="eyebrow rise">Walk-in Clinic · Houston</p>
            <h1 className="rise r1">
              Walk in. <em>We'll see you.</em>
            </h1>
            <p className="lede rise r2">No appointment. Newborns to older adults.</p>
            <div className="btns rise r3">
              <a className="btn btn-brass" href={clinic.mapsHref} target="_blank" rel="noopener noreferrer">
                Get directions <span className="arr">→</span>
              </a>
              <CallButton />
            </div>
          </div>
          <div className="glass rise r2">
            <LiveStatus kind="clinic" className="status-lg" />
            <h3 style={{ marginTop: 20 }}>Clinic hours</h3>
            <table className="hours">
              <tbody>
                {clinic.hours.map((h) => (
                  <tr key={h.day}>
                    <td>{h.day}</td>
                    <td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 20, fontSize: "0.92rem", opacity: 0.75 }}>
              {clinic.street}, {clinic.city}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <p className="eyebrow">What we treat</p>
              <h2>
                Everyday care, <em>done well.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal className="services">
            {services.map(([t, d]) => (
              <div className="service" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </Reveal>
          <p className="fine">Not sure we handle your concern, or whether we take your insurance? Call before you come in.</p>
        </div>
      </section>
    </>
  );
}
