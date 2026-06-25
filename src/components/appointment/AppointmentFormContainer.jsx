import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHospital } from "../../context/HospitalContext";
import { useAuth } from "../../context/AuthContext";
import { useAuthPrompt } from "../../context/AuthPromptContext";
import { getBranch, validateAppointment } from "../../utils/branchHelper";
import { branches } from "../../data/hospitalData";
import AppointmentFormView from "./AppointmentFormView";

const emptyForm = {
  name: "",
  age: "",
  phone: "",
  address: "",
  branch: "",
  speciality: "",
  doctor: "",
  date: "",
  time: "",
};

function resolveBranchId(address = "") {
  const place = address.toLowerCase();
  if (place.includes("gachibowli")) return "gachibowli";
  if (place.includes("madhapur")) return "madhapur";
  if (place.includes("kukatpally")) return "kukatpally";
  if (place.includes("somajiguda")) return "somajiguda";
  return "somajiguda";
}

function buildInitialForm(prefill = {}) {
  return {
    ...emptyForm,
    branch: prefill.branchId || "",
    speciality: prefill.speciality || "",
    doctor: prefill.doctorName || "",
  };
}

export default function AppointmentFormContainer() {
  const location = useLocation();
  const prefill = location.state?.prefill || {};
  const { addPatient } = useHospital();
  const { isLoggedIn } = useAuth();
  const { requireAuth } = useAuthPrompt();
  const [form, setForm] = useState(() => buildInitialForm(prefill));
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "address") {
        next.branch = resolveBranchId(value);
      }
      return next;
    });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      requireAuth("/appointment", form, "Please log in to book an appointment.");
      return;
    }

    const validationErrors = validateAppointment(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const branchLabel = branches.find((b) => b.id === form.branch)?.name || getBranch(form.address, form.branch);

    addPatient({
      ...form,
      branch: getBranch(form.address, form.branch),
      branchName: branchLabel,
    });
    setSuccess(true);
    setForm(emptyForm);
    setErrors({});
  };

  const handleBookAnother = () => setSuccess(false);

  return (
    <AppointmentFormView
      form={form}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
      success={success}
      onBookAnother={handleBookAnother}
      nearestBranch={form.branch ? branches.find((b) => b.id === form.branch)?.name : ""}
    />
  );
}
