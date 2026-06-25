import { useHospital } from "../context/HospitalContext";
import { useAuth } from "../context/AuthContext";
import { surgeons } from "../data/hospitalData";

export default function DashboardPage() {
  const { appointmentCount, patients } = useHospital();
  const { user } = useAuth();

  return (
    <div className="page">
      <div className="page-header">
        <span className="section-eyebrow">Admin Panel</span>
        <h1>Welcome, {user}</h1>
        <p>Hospital dashboard overview</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-stat">
          <span className="dashboard-stat__icon">📅</span>
          <div>
            <strong>{appointmentCount}</strong>
            <span>Total Appointments</span>
          </div>
        </div>
        <div className="dashboard-stat">
          <span className="dashboard-stat__icon">👨‍⚕️</span>
          <div>
            <strong>{surgeons.length}</strong>
            <span>Key Surgeons</span>
          </div>
        </div>
        <div className="dashboard-stat">
          <span className="dashboard-stat__icon">🚑</span>
          <div>
            <strong>Active</strong>
            <span>Emergency Status</span>
          </div>
        </div>
      </div>

      <div className="dashboard-recent">
        <h2>Recent Appointments</h2>
        {patients.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          <div className="appointment-list">
            {patients.slice(-5).reverse().map((p) => (
              <div key={p.id} className="appointment-card">
                <strong>{p.name}</strong> — {p.speciality} — {p.address}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
