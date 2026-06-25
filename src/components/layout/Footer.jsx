import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import { HOSPITAL_NAME, HELPLINE } from "../../data/hospitalData";
import { useAuthPrompt } from "../../context/AuthPromptContext";

export default function Footer() {
  const { requireAuth } = useAuthPrompt();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo size="sm" />
          <p>
            Trusted multi-speciality healthcare with advanced technology and
            compassionate patient care for over three decades.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/specialities">Specialities</Link></li>
            <li><Link to="/doctors">Find a Doctor</Link></li>
            <li>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() =>
                  requireAuth("/appointment", null, "Please log in to book an appointment.")
                }
              >
                Book Appointment
              </button>
            </li>
            <li><Link to="/branches">Our Branches</Link></li>
          </ul>
        </div>

        <div>
          <h4>Patient Care</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Patient Login</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>📞 {HELPLINE}</p>
          <p>✉️ care@arovahealth.com</p>
          <p>📍 Hyderabad, Telangana</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {HOSPITAL_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
