import { telehealthHours } from "@/lib/site";

export const metadata = { title: "Telehealth Policies" };

const summary = [
  ["Cancel 12+ hours before appointment", "100% refund"],
  ["Reschedule 12+ hours before appointment", "Free"],
  ["Same-day booking canceled within 1 hour of booking", "100% refund"],
  ["Cancel less than 12 hours before", "$25 cancellation fee; balance refunded"],
  ["Patient does not show up", "$35 no-show fee; balance refunded"],
  ["Patient joins 10+ minutes late", "May require rescheduling"],
  ["Provider cancels appointment", "100% refund or free rescheduling"],
  ["Technical failure preventing consultation", "Free rescheduling or 100% refund"],
  ["Patient is evaluated but no prescription is issued", "No refund solely because medication was not prescribed"],
  ["Patient is evaluated and referred for in-person care", "Consultation fee generally remains payable"],
  ["Duplicate or incorrect payment", "Full refund of excess charge"],
];

export default function PoliciesPage() {
  return (
    <>
      <section className="page-head dark">
        <div className="wrap">
          <p className="eyebrow rise">Virtual Clinic policies</p>
          <h1 className="rise r1" style={{ fontSize: "clamp(2.8rem,6vw,5.2rem)" }}>
            Cancellations <em>and refunds.</em>
          </h1>
          <p className="lede rise r2">Effective on our launch date.</p>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <table className="policy-table">
            <tbody>
              {summary.map(([a, b]) => (
                <tr key={a}>
                  <td>{a}</td>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="wrap policy-body">
          <p>
            We value your time and appreciate the opportunity to provide convenient, compassionate, and quality
            healthcare through our telehealth services. To ensure fair appointment availability for all patients, we have
            established the following cancellation, rescheduling, and refund policy.
          </p>

          <h3>1. Appointment Payments</h3>
          <p>All telehealth appointments must be paid in full at the time of booking unless otherwise arranged.</p>

          <h3>2. Appointment Cancellations</h3>
          <p>
            Patients may cancel their appointments at least 12 hours before the scheduled appointment time and receive a
            full refund. Cancellations made less than 12 hours before the appointment may be subject to a $25
            cancellation fee, with the remaining balance refunded.
          </p>
          <p>
            <strong>Same-day appointments.</strong> If you book an appointment less than 12 hours before the visit, you
            may cancel within 1 hour of booking, and before the visit begins, for a full refund.
          </p>

          <h3>3. Rescheduling Appointments</h3>
          <p>
            Appointments may be rescheduled at no additional charge when requested at least 12 hours in advance. Late
            rescheduling requests may be subject to the applicable cancellation fee.
          </p>

          <h3>4. Missed Appointments (No-Shows)</h3>
          <p>
            Patients who fail to attend their scheduled telehealth appointment without prior notification may be charged
            a $35 no-show fee. Any remaining prepaid balance will be refunded.
          </p>

          <h3>5. Late Arrivals</h3>
          <p>
            Patients are encouraged to join their virtual appointments on time. Patients arriving more than 10 minutes
            late may need to reschedule, depending on provider availability. Any applicable fee will be disclosed before
            processing.
          </p>

          <h3>6. Completed Consultations</h3>
          <p>
            Once a medical consultation has been completed, fees are generally nonrefundable because payment covers the
            provider's professional evaluation, time, and medical recommendations. Payment does not guarantee a
            prescription, specific treatment, diagnosis, or requested medical documentation.
          </p>

          <h3>7. Technical Difficulties</h3>
          <p>
            If technical issues prevent the consultation from taking place, patients will be offered a complimentary
            rescheduling opportunity or a full refund.
          </p>

          <h3>8. Provider-Initiated Cancellations</h3>
          <p>If our provider cancels an appointment and the patient does not wish to reschedule, a full refund will be issued.</p>

          <h3>9. Emergency Circumstances</h3>
          <p>
            We understand that unexpected situations occur. Emergency-related cancellations will be reviewed
            individually, and applicable fees may be waived at our discretion.
          </p>

          <h3>10. Refund Processing</h3>
          <p>
            Approved refunds will be issued to the original payment method, generally within 5 to 10 business days,
            depending on the payment processor and financial institution.
          </p>

          <h3>11. Patient Acknowledgment</h3>
          <p>
            By scheduling and paying for a telehealth appointment, patients acknowledge that they have reviewed and agreed
            to this cancellation and refund policy. All fees and refunds are subject to applicable state and federal
            laws.
          </p>

          <h3>Telehealth hours of operation</h3>
          <table className="hours light-table" style={{ maxWidth: 480 }}>
            <tbody>
              {telehealthHours.map((h) => (
                <tr key={h.day}>
                  <td>{h.day}</td>
                  <td>{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted" style={{ marginTop: 16 }}>
            Time zone: Central Time. Same-day and scheduled appointments are available, subject to provider availability.
            All telehealth consultations are by appointment. Telehealth services are not intended for life-threatening
            emergencies. For medical emergencies, please call 911 or visit the nearest emergency department.
          </p>

          <h3>Our Commitment</h3>
          <p>
            We strive to make healthcare accessible, convenient, transparent, and respectful of every patient's time and
            needs. Thank you for trusting us with your healthcare.
          </p>
        </div>
      </section>
    </>
  );
}
