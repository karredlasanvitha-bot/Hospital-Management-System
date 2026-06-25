import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { AuthPromptProvider } from "../context/AuthPromptContext";
import { HospitalProvider } from "../context/HospitalContext";
import AppointmentFormContainer from "../components/appointment/AppointmentFormContainer";

function renderAppointmentForm() {
  sessionStorage.setItem("loggedInUser", "testuser");
  localStorage.setItem(
    "hospitalAccount",
    JSON.stringify({
      username: "testuser",
      email: "test@test.com",
      password: "pass",
    })
  );

  return render(
    <MemoryRouter>
      <AuthProvider>
        <AuthPromptProvider>
          <HospitalProvider>
            <AppointmentFormContainer />
          </HospitalProvider>
        </AuthPromptProvider>
      </AuthProvider>
    </MemoryRouter>
  );
}

describe("Appointment booking integration", () => {
  it("shows validation errors then success on valid submission", () => {
    renderAppointmentForm();

    fireEvent.click(screen.getByRole("button", { name: /confirm appointment/i }));
    expect(screen.getByText(/patient name is required/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/patient name/i), {
      target: { value: "Test Patient" },
    });
    fireEvent.change(screen.getByLabelText(/age/i), { target: { value: "35" } });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "9876543210" },
    });
    fireEvent.change(screen.getByLabelText(/^area/i), {
      target: { value: "Gachibowli" },
    });
    fireEvent.change(screen.getByLabelText(/branch/i), {
      target: { value: "gachibowli" },
    });
    fireEvent.change(screen.getByLabelText(/speciality/i), {
      target: { value: "Cardiology" },
    });
    fireEvent.change(screen.getByLabelText(/doctor name/i), {
      target: { value: "Dr. Sneha Reddy" },
    });
    fireEvent.change(screen.getByLabelText(/appointment date/i), {
      target: { value: "2026-06-20" },
    });
    fireEvent.change(screen.getByLabelText(/appointment time/i), {
      target: { value: "10:30" },
    });

    fireEvent.click(screen.getByRole("button", { name: /confirm appointment/i }));

    expect(screen.getByText(/appointment booked successfully/i)).toBeInTheDocument();
  });
});
