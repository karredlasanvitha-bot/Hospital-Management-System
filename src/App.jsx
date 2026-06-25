import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/common/ErrorBoundary";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { AuthPromptProvider } from "./context/AuthPromptContext";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DoctorsPage from "./pages/DoctorsPage";
import DoctorDetailPage from "./pages/DoctorDetailPage";
import SpecialitiesPage from "./pages/SpecialitiesPage";
import SpecialityDetailPage from "./pages/SpecialityDetailPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import BranchesPage from "./pages/BranchesPage";
import ContactPage from "./pages/ContactPage";
import AppointmentPage from "./pages/AppointmentPage";
import EmergencyPage from "./pages/EmergencyPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import PatientCareLayout from "./pages/patient-care/PatientCareLayout";
import PatientCareOverview from "./pages/patient-care/PatientCareOverview";
import PatientGuidePage from "./pages/patient-care/PatientGuidePage";
import FeedbackPage from "./pages/patient-care/FeedbackPage";

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AuthPromptProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="doctors" element={<DoctorsPage />} />
              <Route path="doctors/:doctorId" element={<DoctorDetailPage />} />
              <Route path="specialities" element={<SpecialitiesPage />} />
              <Route path="specialities/:specialityId" element={<SpecialityDetailPage />} />
              <Route path="technologies" element={<TechnologiesPage />} />
              <Route path="branches" element={<BranchesPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="emergency" element={<EmergencyPage />} />
              <Route
                path="appointment"
                element={
                  <ProtectedRoute>
                    <AppointmentPage />
                  </ProtectedRoute>
                }
              />

              <Route path="patient-care" element={<PatientCareLayout />}>
                <Route index element={<PatientCareOverview />} />
                <Route path="guide" element={<PatientGuidePage />} />
                <Route path="feedback" element={<FeedbackPage />} />
              </Route>

              <Route
                path="dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </AuthPromptProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
