import { useRef } from "react";

export default function SearchBoxView({ onSearch }) {
  const searchRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchRef.current?.value || "");
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search appointments by patient name..."
        aria-label="Search appointments"
      />
      <button type="submit" className="btn btn--primary">
        Search
      </button>
    </form>
  );
}
