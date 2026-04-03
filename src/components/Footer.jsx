import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import { footerColumns } from "./marketingData.js";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full border-t border-slate-200 bg-white pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 sm:px-8 md:grid-cols-4">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-2xl font-bold text-[#0f2854] font-headline">
            <ArchitectureRoundedIcon sx={{ color: "#00346f" }} />
            <span>AYRA</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-500">
            The precision-engineered ERP for the modern enterprise. Unified data, elevated insights.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all hover:bg-[#00346f] hover:text-white"
            >
              <ShareRoundedIcon sx={{ fontSize: 18 }} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all hover:bg-[#00346f] hover:text-white"
            >
              <LanguageRoundedIcon sx={{ fontSize: 18 }} />
            </a>
          </div>
        </div>

        {Object.entries(footerColumns).map(([title, links]) => (
          <div key={title} className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0f2854]">{title}</span>
            {links.map((link) => (
              <RouterLink key={link.label} to={link.to} className="text-sm text-slate-500 transition-colors hover:text-[#004a99]">
                {link.label}
              </RouterLink>
            ))}
          </div>
        ))}

        <div className="space-y-6 md:col-span-4 md:max-w-sm">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0f2854]">Stay Connected</span>
          <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 p-1.5">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="footer-input w-full px-4 py-2 text-sm"
            />
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-all hover:shadow-lg hero-gradient"
              aria-label="Subscribe"
            >
              <SendRoundedIcon sx={{ fontSize: 18 }} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-slate-400 sm:px-8 md:flex-row">
          <p>© 2024 AYRA. All rights reserved. Built with precision.</p>
          <div className="flex gap-6">
            <RouterLink to="/contact" className="hover:text-[#00346f]">Privacy Policy</RouterLink>
            <RouterLink to="/contact" className="hover:text-[#00346f]">Terms of Service</RouterLink>
            <RouterLink to="/contact" className="hover:text-[#00346f]">Cookie Settings</RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}


