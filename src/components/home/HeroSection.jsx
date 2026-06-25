import { Link } from "react-router-dom";
import { HOSPITAL_NAME, HOSPITAL_TAGLINE, stats } from "../../data/hospitalData";
import BookAppointmentButton from "../common/BookAppointmentButton";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__eyebrow">Multi-Speciality Hospital</span>
        <h1>
          Best Healthcare at <span className="text-accent">{HOSPITAL_NAME}</span>
        </h1>
        <p className="hero__tagline">{HOSPITAL_TAGLINE}</p>
        <p className="hero__desc">
          From the last three decades, we have been providing quality healthcare
          with revolutionary technology, expert medical teams, and patient-first
          compassionate care.
        </p>
        <div className="hero__actions">
          <BookAppointmentButton className="btn btn--primary btn--lg">
            Book Appointment
          </BookAppointmentButton>
          <Link to="/doctors" className="btn btn--outline btn--lg">
            Find a Doctor
          </Link>
        </div>
        <div className="hero__stats">
          {stats.map((s) => (
            <div key={s.label} className="hero-stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero__visual">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&h=500&fit=crop"
          alt="Modern hospital building"
          className="hero__img"
        />
        <div className="hero__badge">
          <span>🏆</span>
          <div>
            <strong>NABH Accredited</strong>
            <small>Quality Healthcare</small>
          </div>
        </div>
      </div>
    </section>
  );
}
