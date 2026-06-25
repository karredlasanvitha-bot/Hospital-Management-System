import { HOSPITAL_NAME } from "../data/hospitalData";

export default function AboutPage() {
  return (
    <div className="page">
      <div className="page-header">
        <span className="section-eyebrow">About Us</span>
        <h1>About {HOSPITAL_NAME}</h1>
        <p>
          A leading multi-speciality healthcare institution dedicated to delivering
          exceptional medical services with compassion, innovation, and excellence.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>🏥 Our Journey</h3>
          <p>
            For over three decades, {HOSPITAL_NAME} has grown into a trusted
            medical center serving thousands of patients every year across Hyderabad.
          </p>
        </div>
        <div className="about-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To provide affordable, patient-centered healthcare using modern
            technology and qualified medical professionals.
          </p>
        </div>
        <div className="about-card">
          <h3>👁️ Our Vision</h3>
          <p>
            To become the most trusted healthcare provider known for innovation,
            excellence, and compassionate patient care.
          </p>
        </div>
      </div>

      <div className="about-features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <span>👨‍⚕️</span>
            <h4>Expert Doctors</h4>
            <p>350+ experienced specialists across departments</p>
          </div>
          <div className="feature-item">
            <span>🚑</span>
            <h4>24/7 Emergency</h4>
            <p>Round-the-clock emergency care with rapid response</p>
          </div>
          <div className="feature-item">
            <span>🔬</span>
            <h4>Advanced Technology</h4>
            <p>Robotic surgery, PET-CT, and digital cath labs</p>
          </div>
          <div className="feature-item">
            <span>❤️</span>
            <h4>Patient First</h4>
            <p>Focused on comfort, safety, and satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}
