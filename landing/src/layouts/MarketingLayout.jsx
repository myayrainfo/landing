import { Outlet } from "react-router-dom";

import MouseGlowBackground from "../components/MouseGlowBackground.jsx";
import Navbar from "../components/Navbar.jsx";

export default function MarketingLayout() {
  return (
    <div className="tech-pattern relative min-h-screen overflow-hidden text-[#131b2e]">
      <MouseGlowBackground />
      <div className="relative z-[1]">
        <Navbar />
        <main className="relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
