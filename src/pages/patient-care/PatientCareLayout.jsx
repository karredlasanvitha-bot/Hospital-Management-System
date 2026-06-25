import { Outlet, NavLink } from "react-router-dom";

export default function PatientCareLayout() {
  return (
    <div className="page">
      <div className="page-header">
        <span className="section-eyebrow">Patient Care</span>
        <h1>Patient Care Services</h1>
      </div>

      <nav className="sub-nav">
        <NavLink to="/patient-care" end className={({ isActive }) => (isActive ? "sub-nav__link sub-nav__link--active" : "sub-nav__link")}>
          Overview
        </NavLink>
        <NavLink to="/patient-care/guide" className={({ isActive }) => (isActive ? "sub-nav__link sub-nav__link--active" : "sub-nav__link")}>
          Patient Guide
        </NavLink>
        <NavLink to="/patient-care/feedback" className={({ isActive }) => (isActive ? "sub-nav__link sub-nav__link--active" : "sub-nav__link")}>
          Feedback
        </NavLink>
      </nav>

      <div className="nested-content">
        <Outlet />
      </div>
    </div>
  );
}
