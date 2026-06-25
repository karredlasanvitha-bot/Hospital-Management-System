import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoginFormView from "./LoginFormView";

export default function LoginFormContainer() {
  const { login, isRegistered } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/dashboard";
  const prefill = location.state?.prefill;

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    if (!isRegistered) {
      navigate("/signup", { replace: true });
    }
  }, [isRegistered, navigate]);

  if (!isRegistered) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setLoginError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      newErrors.email = "Enter a valid email address";
    if (!form.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const ok = login(form.email, form.password);
    if (ok) {
      navigate(from, {
        replace: true,
        state: prefill ? { prefill } : undefined,
      });
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <LoginFormView
      form={form}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
      loginError={loginError}
    />
  );
}
