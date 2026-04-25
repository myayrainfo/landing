import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { marketingPages } from "./marketingData.js";

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#e6dccd] bg-[#fffaf3] shadow-[0_10px_30px_rgba(27,36,48,0.06)]">
        <div className="grid w-full grid-cols-[auto_1fr_auto] items-center px-5 py-4 sm:px-8">
          <RouterLink
            to="/"
            onClick={handleNavClick}
            className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[#0f2854] font-headline"
          >
            <ArchitectureRoundedIcon sx={{ color: "#00346f" }} />
            <span>AYRA</span>
          </RouterLink>

          <div className="hidden items-center justify-center gap-8 md:flex">
            {marketingPages.map((item) => (
              <RouterLink
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                className={`rounded-full px-3 py-2 text-sm font-semibold tracking-tight transition-all duration-300 font-headline ${
                  location.pathname === item.to
                    ? "text-[#00346f] shadow-[0_0_24px_rgba(255,196,125,0.35)]"
                    : "text-slate-600 hover:text-[#0f2854] hover:shadow-[0_0_18px_rgba(255,196,125,0.28)]"
                }`}
              >
                {item.label}
              </RouterLink>
            ))}
          </div>

          <div className="flex items-center justify-self-end gap-3">
            <RouterLink
              to="/login"
              onClick={handleNavClick}
              className="hidden rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-[0_16px_30px_rgba(255,123,84,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(255,123,84,0.3)] md:inline-flex hero-gradient"
            >
              Login
            </RouterLink>
            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfce] bg-white text-[#00346f] md:hidden"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="fixed inset-x-4 top-20 z-50 rounded-[28px] border border-[#efe5d7] bg-[#fffaf3] p-4 shadow-[0_28px_70px_rgba(19,27,46,0.12)] md:hidden">
          <div className="grid gap-2">
            {marketingPages.map((item) => (
              <RouterLink
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold font-headline transition-all ${
                  location.pathname === item.to
                    ? "bg-[#fff3df] text-[#00346f] shadow-[0_0_18px_rgba(255,196,125,0.22)]"
                    : "text-slate-600 hover:bg-[#fff8ee]"
                }`}
              >
                {item.label}
              </RouterLink>
            ))}
            <RouterLink
              to="/login"
              onClick={handleNavClick}
              className="mt-2 inline-flex justify-center rounded-full px-6 py-3 text-sm font-bold text-white hero-gradient"
            >
              Login
            </RouterLink>
          </div>
        </div>
      ) : null}
    </>
  );
}


