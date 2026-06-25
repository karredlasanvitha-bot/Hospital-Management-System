import { Link } from "react-router-dom";
import EmergencyBookingContainer from "../components/emergency/EmergencyBookingContainer";
import { HELPLINE, emergencyDoctors } from "../data/hospitalData";
import { useAuth } from "../context/AuthContext";
import { useAuthPrompt } from "../context/AuthPromptContext";

export default function EmergencyPage() {
  const { isLoggedIn } = useAuth();
  const { requireAuth } = useAuthPrompt();

  const scrollToBooking = () => {
    document.getElementById("emergency-booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page page--emergency">
      <div className="page-header page-header--emergency">
        <span className="section-eyebrow">24/7 Emergency Care</span>
        <h1>Emergency Appointment</h1>
        <p>
          Emergency doctors available now. For life-threatening emergencies, call{" "}
          <a href={`tel:${HELPLINE.replace(/\s/g, "")}`} className="emergency-helpline">
            {HELPLINE}
          </a>{" "}
          immediately.
        </p>
      </div>

      <section className="emergency-doctors-section">
        <h2>Emergency Doctors Available Now</h2>
        <div className="emergency-doctor-grid">
          {emergencyDoctors.map((doc) => (
            <div key={doc.id} className="emergency-doctor-card">
              <div className="emergency-doctor-card__header">
                <span className="emergency-doctor-card__status">● On Duty</span>
                <h3>{doc.name}</h3>
                <p className="emergency-doctor-card__spec">{doc.speciality}</p>
              </div>
              <div className="emergency-doctor-card__body">
                <p>
                  <strong>Available:</strong> {doc.available}
                </p>
                <p>
                  <strong>Contact:</strong>{" "}
                  <a href={`tel:${doc.contact.replace(/\s/g, "")}`}>{doc.contact}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="btn btn--emergency btn--lg"
          onClick={() => {
            if (isLoggedIn) {
              scrollToBooking();
              return;
            }
            requireAuth(
              "/emergency",
              null,
              "Please log in to book an emergency appointment."
            );
          }}
        >
          Book Emergency Appointment
        </button>
      </section>

      <div className="emergency-layout" id="emergency-booking">
        <div className="emergency-layout__form">
          <EmergencyBookingContainer />
        </div>
        <div className="emergency-layout__sidebar">
          <div className="info-panel info-panel--emergency">
            <h3>What to expect</h3>
            <ul>
              <li>✓ Nearest branch auto-assigned from your area</li>
              <li>✓ Priority scheduling for urgent cases</li>
              <li>✓ 24/7 ambulance support — dial 108</li>
              <li>✓ Login required to confirm booking</li>
            </ul>
          </div>
          <div className="info-panel">
            <h3>Need help now?</h3>
            <p>Call our emergency helpline for immediate assistance.</p>
            <a
              href={`tel:${HELPLINE.replace(/\s/g, "")}`}
              className="btn btn--emergency btn--full"
            >
              Call {HELPLINE}
            </a>
          </div>
          <p className="emergency-note">
            Regular appointments available on the{" "}
            <Link to="/appointment">appointment page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
