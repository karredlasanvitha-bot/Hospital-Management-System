import BookAppointmentButton from "../common/BookAppointmentButton";

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__inner">
        <div>
          <h2>Book an appointment in 2 minutes</h2>
          <p>Free second opinion • 24/7 helpline • Expert doctors</p>
        </div>
        <div className="cta-banner__actions">
          <BookAppointmentButton className="btn btn--white">
            Book Now
          </BookAppointmentButton>
          <a href="tel:+914045678900" className="btn btn--outline-white">
            Call Helpline
          </a>
        </div>
      </div>
    </section>
  );
}
