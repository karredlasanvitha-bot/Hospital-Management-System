import { useHospital } from "../../context/HospitalContext";
import SearchBoxView from "./SearchBoxView";

export default function SearchBoxContainer() {
  const { setSearch } = useHospital();
  return <SearchBoxView onSearch={setSearch} />;
}
