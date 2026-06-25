import { Link, useParams } from "react-router-dom";
import { specialities, getDoctorsBySpeciality } from "../data/hospitalData";
import BookAppointmentButton from "../components/common/BookAppointmentButton";

export default function SpecialityDetailPage() {
  const { specialityId } = useParams();
  const speciality = specialities.find((s) => s.id === specialityId);

  if (!speciality) {
    return (
      <div className="page">
        <div className="empty-state">
          <h2>Speciality not found</h2>
          <Link to="/specialities" className="btn btn--primary">
            Back to Specialities
          </Link>
        </div>
      </div>
    );
  }

  const doctors = getDoctorsBySpeciality(speciality.name);

  return (
    <div className="page">
      <Link to="/specialities" className="detail-back-link">
        ← Back to Specialities
      </Link>

      <div className="speciality-detail">
        <span className="speciality-detail__icon">{speciality.icon}</span>
        <h1>{speciality.name}</h1>
        <p className="speciality-detail__desc">{speciality.description}</p>

        <section className="detail-section">
          <h2>Key Benefits</h2>
          <ul className="benefit-list">
            {speciality.benefits?.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>Treatments & Procedures</h2>
          <ul className="treatment-list">
            {speciality.treatments.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>Doctors Available</h2>
          {doctors.length === 0 ? (
            <p className="detail-empty">Consult our helpline for doctor availability.</p>
          ) : (
            <div className="detail-doctor-list">
              {doctors.map((doc) => (
                <div key={doc.id} className="detail-doctor-item">
                  <div>
                    <strong>{doc.name}</strong>
                    <p>{doc.qualification}</p>
                    <p className="detail-doctor-item__meta">{doc.available}</p>
                  </div>
                  <Link to={`/doctors/${doc.id}`} className="btn btn--outline btn--sm">
                    View Profile
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        <BookAppointmentButton
          className="btn btn--primary btn--lg"
          prefill={{ speciality: speciality.name }}
        >
          Book Appointment — {speciality.name}
        </BookAppointmentButton>
      </div>
    </div>
  );
}
