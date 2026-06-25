import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import SignupFormView from "./SignupFormView";

export default function SignupFormContainer() {
  const { signup, isRegistered } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isRegistered) {
      navigate("/login", { replace: true });
    }
  }, [isRegistered, navigate]);

  if (isRegistered) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.username.trim()) newErrors.username = "Username is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      newErrors.email = "Enter a valid email address";
    if (!form.password || form.password.length < 4)
      newErrors.password = "Password must be at least 4 characters";
    if (form.password !== form.confirm)
      newErrors.confirm = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    signup(form.username, form.email.trim(), form.password);
    navigate("/login");
  };

  return (
    <SignupFormView
      form={form}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
