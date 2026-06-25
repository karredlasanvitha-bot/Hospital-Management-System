import { useState } from "react";
import TechnologiesSection from "../components/home/TechnologiesSection";
import TechnologyModal from "../components/technology/TechnologyModal";

export default function TechnologiesPage() {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div className="page page--flush">
      <div className="page-header page-header--inline">
        <span className="section-eyebrow">Innovation</span>
        <h1>Medical Technology</h1>
        <p>Click any technology to learn more about our advanced equipment</p>
      </div>
      <TechnologiesSection interactive onSelect={setSelectedTech} hideHeader />
      <TechnologyModal technology={selectedTech} onClose={() => setSelectedTech(null)} />
    </div>
  );
}
