import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useAuth } from "./AuthContext";

const HospitalContext = createContext(null);

export function HospitalProvider({ children }) {
  const { user } = useAuth();
  const [patients, setPatients] = useState(() => {
    const data = localStorage.getItem("patients");
    return data ? JSON.parse(data) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const addPatient = (patient) => {
    setPatients((prev) => [
      ...prev,
      {
        ...patient,
        id: Date.now(),
        bookedAt: new Date().toISOString(),
        bookedBy: user || "guest",
      },
    ]);
  };

  const userPatients = useMemo(
    () =>
      patients.filter((p) => !user || p.bookedBy === user || p.bookedBy === "guest"),
    [patients, user]
  );

  const filteredPatients = useMemo(
    () =>
      userPatients.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      ),
    [userPatients, search]
  );

  const appointmentCount = userPatients.length;

  return (
    <HospitalContext.Provider
      value={{
        patients: userPatients,
        addPatient,
        search,
        setSearch,
        filteredPatients,
        appointmentCount,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
}

export function useHospital() {
  const ctx = useContext(HospitalContext);
  if (!ctx) throw new Error("useHospital must be used within HospitalProvider");
  return ctx;
}
