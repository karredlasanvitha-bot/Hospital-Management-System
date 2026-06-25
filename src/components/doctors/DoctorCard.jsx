import { Link } from "react-router-dom";
import DoctorImage from "../common/DoctorImage";
import BookAppointmentButton from "../common/BookAppointmentButton";

export default function DoctorCard({ doctor }) {
  return (
    <div className="surgeon-card">
      <DoctorImage src={doctor.image} alt={doctor.name} className="surgeon-card__photo" />
      <div className="surgeon-card__body">
        <h3>{doctor.name}</h3>
        <p className="surgeon-card__spec">{doctor.speciality}</p>
        <p className="surgeon-card__meta">{doctor.qualification}</p>
        <p className="surgeon-card__meta">Experience: {doctor.experience}</p>
        <p className="surgeon-card__meta">Available: {doctor.available}</p>
        <div className="surgeon-card__actions">
          <Link to={`/doctors/${doctor.id}`} className="btn btn--outline btn--sm">
            Profile
          </Link>
          <BookAppointmentButton
            className="btn btn--primary btn--sm"
            prefill={{
              doctorName: doctor.name,
              speciality: doctor.speciality,
              appointmentTime: doctor.available,
            }}
          >
            Book
          </BookAppointmentButton>
        </div>
      </div>
    </div>
  );
}
