import Reveal from "@/components/Reveal";
import { ArchArt, BookButton } from "@/components/ui";

export const metadata = { title: "Our Provider" };

export default function AboutPage() {
  return (
    <>
      <section className="page-head dark">
        <div className="wrap head-grid" style={{ alignItems: "center" }}>
          <div>
            <p className="eyebrow rise">Meet your provider</p>
            <h1 className="rise r1">
              Dr. Kindness <em>Chukwukere</em>
            </h1>
            <p className="cred rise r2">DNP · APRN · FNP</p>
            <div className="btns rise r3" style={{ marginTop: 40 }}>
              <BookButton>Book a visit with her</BookButton>
            </div>
          </div>
          <div className="arch rise r2" style={{ maxWidth: 400, width: "100%", justifySelf: "end" }}>
            <ArchArt animate />
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal className="wrap bio">
          <p className="first">
            Healthcare provider, family practice owner, wife and mother of four, with more than 17 years devoted to helping
            families live healthier, happier and more confident lives.
          </p>
          <p>
            For the past 10 years, Dr. Chukwukere has owned and operated her own family practice, providing comprehensive
            care to patients of all ages. Her practice is built on a simple belief: every patient deserves to be heard,
            respected, and treated with genuine kindness.
          </p>
          <p>
            Her services include preventive and primary care, annual physicals, Pap smears, well-woman exams, sports and
            camp physicals, men's health, acute care, chronic disease management including diabetes, urgent care and minor
            procedures. She has expanded into medical weight management and aesthetic and wellness services such as Botox,
            dermal fillers, PDO thread lifts, IV hydration and NAD+ therapy.
          </p>
          <blockquote className="pull">
            “My greatest fulfillment comes from knowing that I have made a positive difference in someone's health,
            confidence, or quality of life.”
          </blockquote>
          <p>
            As a wife and mother of four, she understands firsthand how hard it is to balance family, career and personal
            wellness. That perspective lets her connect with patients on a personal level, with care that goes beyond
            symptoms and diagnoses.
          </p>
          <p>
            She believes healthcare should never feel rushed, impersonal or intimidating. Every visit is a chance to
            listen, educate, encourage, and make a real difference. For her, healthcare is more than a profession. It is
            a calling, and a lifelong commitment to serving others.
          </p>
        </Reveal>
      </section>
    </>
  );
}
