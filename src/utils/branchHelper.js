import { branches, HOSPITAL_NAME } from "../data/hospitalData";

export function getBranchName(address = "", branchId = "") {
  if (branchId) {
    const selected = branches.find((b) => b.id === branchId);
    if (selected) return selected.name;
  }

  const place = address.toLowerCase();

  if (place.includes("somajiguda")) return "Main Branch";
  if (place.includes("gachibowli")) return "Gachibowli";
  if (place.includes("kukatpally")) return "Kukatpally";
  if (place.includes("madhapur")) return "Madhapur";

  return "Main Branch";
}

export function getBranch(address = "", branchId = "") {
  return `${HOSPITAL_NAME} — ${getBranchName(address, branchId)}`;
}

export function validateAppointment({
  name,
  age,
  address,
  phone,
  speciality,
  branch,
  doctor,
  date,
  time,
}) {
  const errors = {};

  if (!name?.trim()) errors.name = "Patient name is required";
  if (!age || Number(age) < 1 || Number(age) > 120)
    errors.age = "Enter a valid age (1–120)";
  if (!address?.trim()) errors.address = "Address or area is required";
  if (!branch) errors.branch = "Please select a branch";
  if (!phone?.trim() || !/^\d{10}$/.test(phone.replace(/\s/g, "")))
    errors.phone = "Enter a valid 10-digit phone number";
  if (!speciality) errors.speciality = "Please select a speciality";
  if (!doctor?.trim()) errors.doctor = "Doctor name is required";
  if (!date) errors.date = "Appointment date is required";
  if (!time) errors.time = "Appointment time is required";

  return errors;
}

export function validateEmergencyBooking({ name, age, address, phone, time }) {
  const errors = {};

  if (!name?.trim()) errors.name = "Patient name is required";
  if (!age || Number(age) < 1 || Number(age) > 120)
    errors.age = "Enter a valid age (1–120)";
  if (!address?.trim()) errors.address = "Address or area is required";
  if (!phone?.trim() || !/^\d{10}$/.test(phone.replace(/\s/g, "")))
    errors.phone = "Enter a valid 10-digit phone number";
  if (!time) errors.time = "Please select a preferred time";

  return errors;
}
