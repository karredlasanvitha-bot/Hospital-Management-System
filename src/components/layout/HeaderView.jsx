import { Link, useLocation } from "react-router-dom";
import Logo from "../common/Logo";
import { HELPLINE } from "../../data/hospitalData";
import { useAuthPrompt } from "../../context/AuthPromptContext";

export default function HeaderView({
  isLoggedIn,
  user,
  onLogout,
  mobileOpen,
  onToggleMobile,
}) {
  const location = useLocation();
  const { requireAuth } = useAuthPrompt();

  const isActive = (path) =>
    location.pathname === path ? "nav-link nav-link--active" : "nav-link";

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="top-bar__inner">
          <Link to="/emergency" className="top-bar__badge top-bar__badge--link">
            24/7 Emergency
          </Link>
          <a href={`tel:${HELPLINE.replace(/\s/g, "")}`} className="top-bar__phone">
            📞 {HELPLINE}
          </a>
          <span className="top-bar__tag">Book appointment in 2 minutes</span>
        </div>
      </div>

      <nav className="main-nav">
        <Link to="/" className="brand-link">
          <Logo />
        </Link>

        <button
          type="button"
          className="mobile-toggle"
          onClick={onToggleMobile}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-links ${mobileOpen ? "nav-links--open" : ""}`}>
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About
          </Link>
          <Link to="/specialities" className={isActive("/specialities")}>
            Specialities
          </Link>
          <Link to="/doctors" className={isActive("/doctors")}>
            Doctors
          </Link>
          <Link to="/technologies" className={isActive("/technologies")}>
            Technology
          </Link>
          <Link to="/branches" className={isActive("/branches")}>
            Branches
          </Link>
          <Link to="/contact" className={isActive("/contact")}>
            Contact
          </Link>
          <Link to="/patient-care" className={isActive("/patient-care")}>
            Patient Care
          </Link>

          <button
            type="button"
            className="btn btn--cta"
            onClick={() =>
              requireAuth("/appointment", null, "Please log in to book an appointment.")
            }
          >
            Book Appointment
          </button>

          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className={isActive("/dashboard")}>
                Dashboard
              </Link>
              <button type="button" className="btn btn--outline btn--sm" onClick={onLogout}>
                Logout ({user})
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn--login">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
