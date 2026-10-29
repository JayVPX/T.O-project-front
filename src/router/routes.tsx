import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashboard from "../pages/userDashboard";
import UserSchedule from "../features/userSchedule";
import UserPatientsScreen from "../features/userPatientsScreen";
import Login from "../pages/login";
import Home from "../pages/home";
import UserAppointmentsHistory from "../features/userAppointmentsHistory";

export function AlLRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserDashboard />}>
          <Route path="/user/schedule" element={<UserSchedule />} />
          <Route path="/user/patients" element={<UserPatientsScreen />} />
          <Route path="/user/history" element={<UserAppointmentsHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
