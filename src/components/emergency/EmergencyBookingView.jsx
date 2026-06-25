import { emergencyTimeSlots } from "../../data/emergencyData";

export default function EmergencyBookingView({
  form,
  errors,
  onChange,
  onSubmit,
  success,
  nearestBranch,
}) {
  if (success) {
    return (
      <div className="appointment-success emergency-success">
        <div className="appointment-success__icon">🚑</div>
        <h2>Emergency Appointment Confirmed</h2>
        <p>
          Your emergency visit is scheduled at <strong>{nearestBranch}</strong>.
          Our team will contact you shortly at the registered phone number.
        </p>
      </div>
    );
  }

  return (
    <form className="appointment-form emergency-form" onSubmit={onSubmit} noValidate>
      <div className="appointment-form__header">
        <h2>Book Emergency Visit</h2>
        <p>We will assign you to the nearest branch based on your location</p>
      </div>

      <div className="form-group">
        <label htmlFor="emergency-address">Your Area / Address *</label>
        <input
          id="emergency-address"
          type="text"
          name="address"
          placeholder="e.g. Gachibowli, Hyderabad"
          value={form.address}
          onChange={onChange}
          className={errors.address ? "input-error" : ""}
        />
        {errors.address && <span className="field-error">{errors.address}</span>}
        {form.address.trim() && (
          <div className="emergency-branch-preview">
            Nearest branch: <strong>{nearestBranch}</strong>
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="emergency-time">Preferred Time *</label>
        <select
          id="emergency-time"
          name="time"
          value={form.time}
          onChange={onChange}
          className={errors.time ? "input-error" : ""}
        >
          <option value="">Select preferred time</option>
          {emergencyTimeSlots.map((slot) => (
            <option key={slot.value} value={slot.label}>
              {slot.label}
            </option>
          ))}
        </select>
        {errors.time && <span className="field-error">{errors.time}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="emergency-name">Patient Name *</label>
          <input
            id="emergency-name"
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
          <label htmlFor="emergency-age">Age *</label>
          <input
            id="emergency-age"
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

      <div className="form-group">
        <label htmlFor="emergency-phone">Phone Number *</label>
        <input
          id="emergency-phone"
          type="tel"
          name="phone"
          placeholder="10-digit mobile number"
          value={form.phone}
          onChange={onChange}
          className={errors.phone ? "input-error" : ""}
        />
        {errors.phone && <span className="field-error">{errors.phone}</span>}
      </div>

      <button type="submit" className="btn btn--emergency btn--lg btn--full">
        Book Emergency Appointment
      </button>
    </form>
  );
}
