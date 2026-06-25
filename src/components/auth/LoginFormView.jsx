import { Link } from "react-router-dom";
import Logo from "../common/Logo";

export default function LoginFormView({
  form,
  errors,
  onChange,
  onSubmit,
  loginError,
}) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <Logo />
        <h2>Patient Login</h2>
        <p className="auth-subtitle">Access your dashboard and appointments</p>

        {loginError && <div className="auth-error">{loginError}</div>}

        <form onSubmit={onSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="login-email">Email ID</label>
            <input
              id="login-email"
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
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="Enter password"
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <span className="field-error">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn btn--primary btn--full">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <Link to="/" className="auth-back">← Back to Home</Link>
      </div>
    </div>
  );
}
