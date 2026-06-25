import { describe, it, expect } from "vitest";
import { getBranch, validateAppointment } from "../utils/branchHelper";

describe("getBranch", () => {
  it("returns Gachibowli branch for gachibowli address", () => {
    expect(getBranch("123 Main St, Gachibowli")).toContain("Gachibowli");
  });

  it("returns Main Branch for unknown address", () => {
    expect(getBranch("Random City")).toContain("Main Branch");
  });
});

describe("validateAppointment", () => {
  it("returns errors for empty form", () => {
    const errors = validateAppointment({});
    expect(errors.name).toBeDefined();
    expect(errors.age).toBeDefined();
    expect(errors.phone).toBeDefined();
  });

  it("passes validation for valid data", () => {
    const errors = validateAppointment({
      name: "John Doe",
      age: "30",
      phone: "9876543210",
      address: "Gachibowli",
      branch: "gachibowli",
      speciality: "Cardiology",
      doctor: "Dr. Sneha Reddy",
      date: "2026-06-20",
      time: "10:30",
    });
    expect(Object.keys(errors)).toHaveLength(0);
  });
});
