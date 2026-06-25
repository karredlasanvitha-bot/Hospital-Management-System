import { useAuthPrompt } from "../../context/AuthPromptContext";

export default function BookAppointmentButton({
  prefill = null,
  children = "Book Appointment",
  className = "btn btn--primary",
  message = "Please log in to book an appointment.",
}) {
  const { requireAuth } = useAuthPrompt();

  return (
    <button
      type="button"
      className={className}
      onClick={() => requireAuth("/appointment", prefill, message)}
    >
      {children}
    </button>
  );
}
