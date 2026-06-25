import { Link } from "react-router-dom";
import Logo from "../common/Logo";

export default function SignupFormView({ form, errors, onChange, onSubmit }) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <Logo />
        <h2>Create Account</h2>
        <p className="auth-subtitle">Register to manage your healthcare online</p>

        <form onSubmit={onSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="signup-username">Username</label>
            <input
              id="signup-username"
              type="text"
              name="username"
              value={form.username}
              onChange={onChange}
              placeholder="Choose a username"
              className={errors.username ? "input-error" : ""}
            />
            {errors.username && (
              <span className="field-error">{errors.username}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="signup-email">Email ID</label>
            <input
              id="signup-email"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Enter your email address"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && (
              <span className="field-error">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="Create a password"
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <span className="field-error">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="signup-confirm">Confirm Password</label>
            <input
              id="signup-confirm"
              type="password"
              name="confirm"
              value={form.confirm}
              onChange={onChange}
              placeholder="Confirm password"
              className={errors.confirm ? "input-error" : ""}
            />
            {errors.confirm && (
              <span className="field-error">{errors.confirm}</span>
            )}
          </div>

          <button type="submit" className="btn btn--primary btn--full">
            Sign Up
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <Link to="/" className="auth-back">← Back to Home</Link>
      </div>
    </div>
  );
}
