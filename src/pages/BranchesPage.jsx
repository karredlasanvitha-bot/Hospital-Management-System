import { branches, openBranchMaps } from "../data/hospitalData";

export default function BranchesPage() {
  return (
    <div className="page">
      <div className="page-header">
        <span className="section-eyebrow">Locations</span>
        <h1>Our Branches</h1>
        <p>Multi-location hospitals across Hyderabad for your convenience</p>
      </div>

      <div className="branch-grid">
        {branches.map((b) => (
          <div key={b.id} className="branch-card">
            <h3>📍 {b.name}</h3>
            <p>{b.address}</p>
            <button
              type="button"
              className="btn btn--outline btn--sm branch-card__btn"
              onClick={() => openBranchMaps(b)}
            >
              Open Location
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
