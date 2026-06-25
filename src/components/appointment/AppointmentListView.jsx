export default function AppointmentListView({ patients }) {
  if (patients.length === 0) {
    return (
      <div className="empty-state">
        <p>No appointments found. Book your first appointment above.</p>
      </div>
    );
  }

  return (
    <div className="appointment-list">
      <h3>Your Appointments</h3>
      {patients.map((p) => (
        <div key={p.id} className="appointment-card">
          <div className="appointment-card__header">
            <strong>{p.name}</strong>
            <span className="badge">{p.speciality || "General"}</span>
          </div>
          <div className="appointment-card__details">
            <span>Age: {p.age}</span>
            <span>Phone: {p.phone}</span>
            <span>Area: {p.address}</span>
            <span>Branch: {p.branch || p.branchName || "Main Branch"}</span>
            {p.doctor && <span>Doctor: {p.doctor}</span>}
            {p.date && <span>Date: {p.date}</span>}
            {p.time && <span>Time: {p.time}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
