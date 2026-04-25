import { Navigate, Route, Routes } from "react-router-dom";

import MarketingLayout from "./layouts/MarketingLayout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FeaturesPage from "./pages/FeaturesPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import LocationsPage from "./pages/LocationsPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import UserLogin from "./pages/UserLogin.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="locations" element={<LocationsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<UserLogin />} />
      </Route>
      <Route path="user/login" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
