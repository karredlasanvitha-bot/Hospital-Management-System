export default function TechnologyModal({ technology, onClose }) {
  if (!technology) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal modal--tech"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tech-modal-title"
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <span className="tech-modal__icon">{technology.icon}</span>
        <h3 id="tech-modal-title">{technology.name}</h3>
        <p className="tech-modal__desc">{technology.details || technology.description}</p>

        {technology.benefits?.length > 0 && (
          <>
            <h4>Key Benefits</h4>
            <ul className="tech-modal__list">
              {technology.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {technology.usedFor?.length > 0 && (
          <>
            <h4>Used For</h4>
            <ul className="tech-modal__list">
              {technology.usedFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
