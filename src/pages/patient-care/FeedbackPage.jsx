import { useState } from "react";

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="feedback-success">
        <h2>Thank you for your feedback!</h2>
        <p>We appreciate your input and will use it to improve our services.</p>
      </div>
    );
  }

  return (
    <div className="feedback-form-wrap">
      <h2>Share Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fb-name">Name</label>
          <input id="fb-name" type="text" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="fb-email">Email</label>
          <input id="fb-email" type="email" placeholder="Email address" required />
        </div>
        <div className="form-group">
          <label htmlFor="fb-dept">Department</label>
          <select id="fb-dept" required>
            <option value="">Select Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Pediatrics</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fb-msg">Feedback</label>
          <textarea id="fb-msg" placeholder="Your feedback..." required />
        </div>
        <button type="submit" className="btn btn--primary">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
