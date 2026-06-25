import { Link } from "react-router-dom";
import { specialities } from "../../data/hospitalData";

export default function SpecialitiesSection() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="section-eyebrow">Centers of Excellence</span>
        <h2>Our Specialities</h2>
        <p>World-class super speciality care across multiple departments</p>
      </div>
      <div className="speciality-grid">
        {specialities.map((s) => (
          <Link to={`/specialities/${s.id}`} key={s.id} className="speciality-card">
            <span className="speciality-card__icon">{s.icon}</span>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <span className="speciality-card__link">Learn more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
