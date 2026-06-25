import { Link } from "react-router-dom";
import { surgeons } from "../../data/hospitalData";

export default function SurgeonsSection() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="section-eyebrow">Expert Team</span>
        <h2>Key Surgeons & Specialists</h2>
        <p>Meet our leading doctors dedicated to your health</p>
      </div>
      <div className="surgeon-grid">
        {surgeons.map((doc) => (
          <div key={doc.id} className="surgeon-card">
            <img src={doc.image} alt={doc.name} className="surgeon-card__photo" />
            <div className="surgeon-card__body">
              <h3>{doc.name}</h3>
              <p className="surgeon-card__spec">{doc.speciality}</p>
              <p className="surgeon-card__meta">{doc.qualification}</p>
              <p className="surgeon-card__meta">Experience: {doc.experience}</p>
              <Link to={`/doctors/${doc.id}`} className="btn btn--primary btn--sm">
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="section-cta">
        <Link to="/doctors" className="btn btn--outline">
          View All Doctors
        </Link>
      </div>
    </section>
  );
}
