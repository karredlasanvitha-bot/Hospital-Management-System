import { HELPLINE, HOSPITAL_NAME, branches, openBranchMaps } from "../data/hospitalData";
import { useAuthPrompt } from "../context/AuthPromptContext";

export default function ContactPage() {
  const { requireAuth } = useAuthPrompt();
  const mainBranch = branches.find((b) => b.id === "somajiguda");

  return (
    <div className="page">
      <div className="page-header">
        <span className="section-eyebrow">Get in Touch</span>
        <h1>Contact Us</h1>
        <p>We&apos;re here to help — reach out anytime</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <span>📞</span>
          <h3>Helpline</h3>
          <a href={`tel:${HELPLINE.replace(/\s/g, "")}`}>{HELPLINE}</a>
        </div>
        <div className="contact-card">
          <span>✉️</span>
          <h3>Email</h3>
          <p>care@arovahealth.com</p>
        </div>
        <button
          type="button"
          className="contact-card contact-card--clickable"
          onClick={() => mainBranch && openBranchMaps(mainBranch)}
        >
          <span>📍</span>
          <h3>Main Branch</h3>
          <p>{HOSPITAL_NAME}, Somajiguda, Hyderabad</p>
          <span className="contact-card__action">Open Location →</span>
        </button>
        <button
          type="button"
          className="contact-card contact-card--clickable contact-card--emergency"
          onClick={() =>
            requireAuth(
              "/emergency",
              null,
              "Please log in to book an emergency appointment."
            )
          }
        >
          <span>🚑</span>
          <h3>Emergency</h3>
          <p>108 / 24×7 Ambulance</p>
          <span className="contact-card__action">Book Emergency →</span>
        </button>
      </div>

      <section className="contact-branches">
        <h2>All Branch Locations</h2>
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
      </section>
    </div>
  );
}
