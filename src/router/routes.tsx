import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashboard from "../pages/userDashboard";
import UserSchedule from "../features/user/userSchedule";
import UserPatientsScreen from "../features/user/userPatientsScreen";
import Login from "../pages/login";
import Home from "../pages/home";
import UserAppointmentsHistory from "../features/user/userAppointmentsHistory";
import TherapistDashboard from "../pages/therapistDashboard";
import TherapistPatients from "../features/therapist/therapistPatients";
import TherapistDocuments from "../features/therapist/therapistDocuments";
import TherapistSchedule from "../features/therapist/therapistSchedule";
import TherapistHistory from "../features/therapist/therapistHistory";
import UserPersonalData from "../features/user/userPersonalData";

export function AlLRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/therapist" element={<TherapistDashboard />}>
          <Route path="/therapist/patients" element={<TherapistPatients />} />
          <Route path="/therapist/schedule" element={<TherapistSchedule />} />
          <Route path="/therapist/history" element={<TherapistHistory />} />
          <Route path="/therapist/documents" element={<TherapistDocuments />} />
        </Route>

        <Route path="/user" element={<UserDashboard />}>
          <Route path="/user/me" element={<UserPersonalData />} />
          <Route path="/user/schedule" element={<UserSchedule />} />
          <Route path="/user/patients" element={<UserPatientsScreen />} />
          <Route path="/user/history" element={<UserAppointmentsHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
