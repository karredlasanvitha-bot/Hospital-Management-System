import { Link } from "react-router-dom";
import { useAuthPrompt } from "../../context/AuthPromptContext";

export default function PatientCareOverview() {
  const { requireAuth } = useAuthPrompt();
  return (
    <div className="patient-care-overview">
      <p>
        Our patient care team ensures a seamless healthcare experience from
        admission to discharge. Explore our guides and share your feedback.
      </p>
      <div className="feature-grid">
        <Link to="/patient-care/guide" className="feature-item">
          <span>📋</span>
          <h4>Patient Guide</h4>
          <p>Step-by-step guide for your hospital visit</p>
        </Link>
        <Link to="/patient-care/feedback" className="feature-item">
          <span>💬</span>
          <h4>Feedback</h4>
          <p>Share your experience with us</p>
        </Link>
        <button
          type="button"
          className="feature-item"
          onClick={() =>
            requireAuth("/appointment", null, "Please log in to book an appointment.")
          }
        >
          <span>📅</span>
          <h4>Book Appointment</h4>
          <p>Schedule your visit online</p>
        </button>
      </div>
    </div>
  );
}
