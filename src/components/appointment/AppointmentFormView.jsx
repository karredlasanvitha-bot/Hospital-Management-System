import { branches, specialities, surgeons } from "../../data/hospitalData";

export default function AppointmentFormView({
  form,
  errors,
  onChange,
  onSubmit,
  success,
  onBookAnother,
  nearestBranch,
}) {
  if (success) {
    return (
      <div className="appointment-success">
        <div className="appointment-success__icon">✅</div>
        <h2>Appointment Booked Successfully!</h2>
        <p>
          Your appointment has been confirmed and added to Your Appointments.
          Our team will contact you shortly at the registered phone number.
        </p>
        <button type="button" className="btn btn--primary" onClick={onBookAnother}>
          Book Another Appointment
        </button>
      </div>
    );
  }

  const doctorsForSpeciality = form.speciality
    ? surgeons.filter((d) => d.speciality === form.speciality)
    : surgeons;

  return (
    <form className="appointment-form" onSubmit={onSubmit} noValidate>
      <div className="appointment-form__header">
        <h2>Book Doctor Appointment</h2>
        <p>Fill in your details — appointment in 2 minutes</p>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="patient-name">Patient Name *</label>
          <input
            id="patient-name"
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={onChange}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="patient-age">Age *</label>
          <input
            id="patient-age"
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={onChange}
            className={errors.age ? "input-error" : ""}
          />
          {errors.age && <span className="field-error">{errors.age}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="patient-phone">Phone Number *</label>
          <input
            id="patient-phone"
            type="tel"
            name="phone"
            placeholder="10-digit mobile number"
            value={form.phone}
            onChange={onChange}
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="patient-address">Area *</label>
          <input
            id="patient-address"
            type="text"
            name="address"
            placeholder="e.g. Gachibowli, Hyderabad"
            value={form.address}
            onChange={onChange}
            className={errors.address ? "input-error" : ""}
          />
          {errors.address && <span className="field-error">{errors.address}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="branch">Branch *</label>
          <select
            id="branch"
            name="branch"
            value={form.branch}
            onChange={onChange}
            className={errors.branch ? "input-error" : ""}
          >
            <option value="">Select Branch</option>
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name} — {b.area}
              </option>
            ))}
          </select>
          {errors.branch && <span className="field-error">{errors.branch}</span>}
          {nearestBranch && (
            <div className="branch-preview">Suggested branch: {nearestBranch}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="speciality">Speciality *</label>
          <select
            id="speciality"
            name="speciality"
            value={form.speciality}
            onChange={onChange}
            className={errors.speciality ? "input-error" : ""}
          >
            <option value="">Select Speciality</option>
            {specialities.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.speciality && (
            <span className="field-error">{errors.speciality}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="doctor-name">Doctor Name *</label>
          <input
            id="doctor-name"
            type="text"
            name="doctor"
            list="doctor-options"
            placeholder="Select or type doctor name"
            value={form.doctor}
            onChange={onChange}
            className={errors.doctor ? "input-error" : ""}
          />
          <datalist id="doctor-options">
            {doctorsForSpeciality.map((d) => (
              <option key={d.id} value={d.name} />
            ))}
          </datalist>
          {errors.doctor && <span className="field-error">{errors.doctor}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="appointment-date">Appointment Date *</label>
          <input
            id="appointment-date"
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
            className={errors.date ? "input-error" : ""}
          />
          {errors.date && <span className="field-error">{errors.date}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="appointment-time">Appointment Time *</label>
        <input
          id="appointment-time"
          type="time"
          name="time"
          value={form.time}
          onChange={onChange}
          className={errors.time ? "input-error" : ""}
        />
        {errors.time && <span className="field-error">{errors.time}</span>}
      </div>

      <button type="submit" className="btn btn--primary btn--lg btn--full">
        Confirm Appointment
      </button>
    </form>
  );
}
