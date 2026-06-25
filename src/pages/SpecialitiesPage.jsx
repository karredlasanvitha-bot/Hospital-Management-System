import { Link } from "react-router-dom";
import { specialities } from "../data/hospitalData";

export default function SpecialitiesPage() {
  return (
    <div className="page">
      <div className="page-header">
        <span className="section-eyebrow">Centers of Excellence</span>
        <h1>Specialities & Treatments</h1>
        <p>Comprehensive super speciality care across multiple departments</p>
      </div>

      <div className="speciality-grid">
        {specialities.map((s) => (
          <Link to={`/specialities/${s.id}`} key={s.id} className="speciality-card">
            <span className="speciality-card__icon">{s.icon}</span>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <span className="speciality-card__link">View treatments →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
