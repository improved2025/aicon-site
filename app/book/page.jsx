import BookingGate from "@/components/BookingGate";
import { telehealthHours } from "@/lib/site";

export const metadata = { title: "Book a video visit" };

export default function BookPage() {
  return (
    <>
      <section className="page-head dark book-head">
        <div className="wrap">
          <p className="eyebrow rise">Book a video visit</p>
          <h1 className="rise r1">
            Three quick <em>questions.</em>
          </h1>
          <p className="lede rise r2">
            So we know we can see you. Then you'll choose a time and pay.
          </p>
        </div>
      </section>

      <section className="section book-body">
        <div className="wrap book-grid">
          <BookingGate />
          <aside className="book-side">
            <h3>Video visit hours</h3>
            <table className="hours light-table">
              <tbody>
                {telehealthHours.map((h) => (
                  <tr key={h.day}>
                    <td>{h.day}</td>
                    <td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="fine" style={{ marginTop: 16 }}>Central Time. Visits from $50, self-pay.</p>
            <p className="note" style={{ marginTop: 24 }}>
              <strong>Emergency?</strong> Call 911. For a mental health crisis, call or text 988.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
