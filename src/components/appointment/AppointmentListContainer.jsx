import { useHospital } from "../../context/HospitalContext";
import AppointmentListView from "./AppointmentListView";

export default function AppointmentListContainer() {
  const { filteredPatients } = useHospital();
  return <AppointmentListView patients={filteredPatients} />;
}
