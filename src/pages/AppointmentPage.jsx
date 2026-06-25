import AppointmentFormContainer from "../components/appointment/AppointmentFormContainer";
import AppointmentListContainer from "../components/appointment/AppointmentListContainer";
import SearchBoxContainer from "../components/appointment/SearchBoxContainer";

export default function AppointmentPage() {
  return (
    <div className="page page--appointment">
      <div className="page-header">
        <span className="section-eyebrow">Patient Care</span>
        <h1>Book an Appointment</h1>
        <p>Schedule your visit with our expert doctors in just 2 minutes</p>
      </div>

      <div className="appointment-layout">
        <div className="appointment-layout__form">
          <AppointmentFormContainer />
        </div>
        <div className="appointment-layout__sidebar">
          <div className="info-panel">
            <h3>Why book with us?</h3>
            <ul>
              <li>✓ Instant confirmation</li>
              <li>✓ Nearest branch auto-assigned</li>
              <li>✓ 24/7 helpline support</li>
              <li>✓ Free follow-up consultation</li>
            </ul>
          </div>
          <SearchBoxContainer />
          <AppointmentListContainer />
        </div>
      </div>
    </div>
  );
}
