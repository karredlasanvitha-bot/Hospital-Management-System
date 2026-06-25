import { useState, useMemo } from "react";
import { surgeons, specialities } from "../data/hospitalData";
import DoctorCard from "../components/doctors/DoctorCard";

export default function DoctorsPage() {
  const [search, setSearch] = useState("");
  const [specialityFilter, setSpecialityFilter] = useState("");

  const filteredDoctors = useMemo(() => {
    return surgeons.filter((doc) => {
      const matchesName = doc.name.toLowerCase().includes(search.toLowerCase().trim());
      const matchesSpeciality =
        !specialityFilter || doc.speciality === specialityFilter;
      return matchesName && matchesSpeciality;
    });
  }, [search, specialityFilter]);

  return (
    <div className="page">
      <div className="page-header">
        <span className="section-eyebrow">Find a Doctor</span>
        <h1>Our Expert Doctors</h1>
        <p>Search and book appointments with our leading specialists</p>
      </div>

      <div className="doctor-filter-bar">
        <input
          type="text"
          placeholder="Search by doctor name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search by doctor name"
        />
        <select
          value={specialityFilter}
          onChange={(e) => setSpecialityFilter(e.target.value)}
          aria-label="Filter by speciality"
        >
          <option value="">All Specialities</option>
          {specialities.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {filteredDoctors.length === 0 ? (
        <div className="empty-state">
          <p>No doctors found matching your search.</p>
        </div>
      ) : (
        <div className="surgeon-grid">
          {filteredDoctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
