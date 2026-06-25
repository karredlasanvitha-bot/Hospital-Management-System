import { technologies } from "../../data/hospitalData";

export default function TechnologiesSection({
  interactive = false,
  onSelect,
  hideHeader = false,
}) {
  return (
    <section className="section section--alt">
      {!hideHeader && (
        <div className="section-header">
          <span className="section-eyebrow">Advanced Care</span>
          <h2>Cutting-Edge Technology</h2>
          <p>State-of-the-art medical equipment for precise diagnosis and treatment</p>
        </div>
      )}
      <div className="tech-grid">
        {technologies.map((t) =>
          interactive ? (
            <button
              key={t.id}
              type="button"
              className="tech-card tech-card--clickable"
              onClick={() => onSelect?.(t)}
            >
              <span className="tech-card__icon">{t.icon}</span>
              <h3>{t.name}</h3>
              <p>{t.description}</p>
              <span className="tech-card__link">View details →</span>
            </button>
          ) : (
            <div key={t.id} className="tech-card">
              <span className="tech-card__icon">{t.icon}</span>
              <h3>{t.name}</h3>
              <p>{t.description}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
