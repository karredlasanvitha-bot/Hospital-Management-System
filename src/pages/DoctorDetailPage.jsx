import { Link, useParams } from "react-router-dom";
import { surgeons } from "../data/hospitalData";
import DoctorImage from "../components/common/DoctorImage";
import BookAppointmentButton from "../components/common/BookAppointmentButton";

export default function DoctorDetailPage() {
  const { doctorId } = useParams();
  const doctor = surgeons.find((d) => d.id === doctorId);

  if (!doctor) {
    return (
      <div className="page">
        <div className="empty-state">
          <h2>Doctor not found</h2>
          <Link to="/doctors" className="btn btn--primary">
            Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="doctor-profile">
        <DoctorImage
          src={doctor.image}
          alt={doctor.name}
          className="doctor-profile__photo"
        />
        <div className="doctor-profile__info">
          <span className="section-eyebrow">{doctor.speciality}</span>
          <h1>{doctor.name}</h1>
          <p className="doctor-profile__qual">{doctor.qualification}</p>
          <p>
            <strong>Experience:</strong> {doctor.experience}
          </p>
          <p>
            <strong>Available:</strong> {doctor.available}
          </p>
          <BookAppointmentButton
            className="btn btn--primary btn--lg"
            prefill={{
              doctorName: doctor.name,
              speciality: doctor.speciality,
              appointmentTime: doctor.available,
            }}
          >
            Book Appointment
          </BookAppointmentButton>
        </div>
      </div>
    </div>
  );
}
