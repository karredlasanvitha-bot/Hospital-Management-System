import { useState } from "react";
import { Link } from "react-router-dom";
import { useHospital } from "../../context/HospitalContext";
import { useAuth } from "../../context/AuthContext";
import { useAuthPrompt } from "../../context/AuthPromptContext";
import { getBranch, validateEmergencyBooking } from "../../utils/branchHelper";
import EmergencyBookingView from "./EmergencyBookingView";

const initialForm = {
  name: "",
  age: "",
  phone: "",
  address: "",
  time: "",
};

export default function EmergencyBookingContainer() {
  const { addPatient } = useHospital();
  const { isLoggedIn } = useAuth();
  const { requireAuth } = useAuthPrompt();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [confirmedBranch, setConfirmedBranch] = useState("");

  const nearestBranch = getBranch(form.address);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      requireAuth(
        "/emergency",
        null,
        "Please log in to book an emergency appointment."
      );
      return;
    }

    const validationErrors = validateEmergencyBooking(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const branchName = nearestBranch;
    addPatient({
      ...form,
      speciality: "Emergency",
      doctor: "Emergency Team",
      date: new Date().toISOString().split("T")[0],
      time: form.time,
      branch: branchName,
    });
    setConfirmedBranch(branchName);
    setSuccess(true);
    setForm(initialForm);
    setErrors({});
  };

  return (
    <EmergencyBookingView
      form={form}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
      success={success}
      nearestBranch={success ? confirmedBranch : nearestBranch}
    />
  );
}
