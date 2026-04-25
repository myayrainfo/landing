import { Link as RouterLink } from "react-router-dom";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import TouchAppRoundedIcon from "@mui/icons-material/TouchAppRounded";

const stats = [
  { value: "1M+", label: "Students Managed", tone: "hover:bg-[#16324f] hover:text-white" },
  { value: "500+", label: "Institutions", tone: "hover:bg-[#b85c38] hover:text-white" },
  { value: "99.9%", label: "System Uptime", tone: "hover:bg-[#22577a] hover:text-white" },
  { value: "24/7", label: "Expert Support", tone: "hover:bg-[#16324f] hover:text-white" },
];

const modules = [
  {
    title: "HR Management",
    description: "Automate payroll, attendance, and talent management with ease.",
    icon: <GroupsRoundedIcon sx={{ fontSize: 30 }} />,
    iconTone: "bg-[#d8ecff] text-[#16324f]",
    link: "/services",
    featured: false,
  },
  {
    title: "University ERP",
    description: "End-to-end governance for modern educational institutions.",
    icon: <AccountBalanceRoundedIcon sx={{ fontSize: 30 }} />,
    iconTone: "bg-[#ffe4bf] text-[#b85c38]",
    link: "/features",
    featured: false,
  },
  {
    title: "Accounts & Finance",
    description: "Real-time reconciliation and multi-currency reporting dashboards.",
    icon: <PaymentsRoundedIcon sx={{ fontSize: 30 }} />,
    iconTone: "bg-[#e2f1ff] text-[#22577a]",
    link: "/features",
    featured: false,
  },
  {
    title: "Cloud Analytics",
    description: "Turn raw data into actionable insights with our native cloud BI tool.",
    icon: <QueryStatsRoundedIcon sx={{ fontSize: 30 }} />,
    iconTone: "bg-[#ffe8dc] text-[#ff7b54]",
    link: "/features",
    featured: false,
  },
  {
    title: "Custom Integrations",
    description: "Connect your favorite tools seamlessly with our robust API suite.",
    icon: <IntegrationInstructionsRoundedIcon sx={{ fontSize: 30 }} />,
    iconTone: "bg-[#fff1dd] text-[#b85c38]",
    link: "/contact",
    featured: false,
  },
  {
    title: "24/7 Premium Support",
    description: "A dedicated success manager to help you scale effortlessly.",
    icon: <SupportAgentRoundedIcon sx={{ fontSize: 30 }} />,
    iconTone: "bg-[#eef6ff] text-[#22577a]",
    link: "/contact",
    featured: false,
  },
];

const launchPillars = [
  {
    title: "AI Workflows",
    description:
      "Automate approvals, reminders, and analysis across every department from one connected engine.",
  },
  {
    title: "Executive Visibility",
    description:
      "Track finance, HR, academics, and operations with live dashboards built for faster decisions.",
  },
  {
    title: "Faster Rollout",
    description:
      "Launch with structured onboarding, guided implementation, and a cleaner path to adoption.",
  },
];

const valueCards = [
  {
    title: "Efficiency",
    description: "Reduce manual overhead by 40% instantly.",
    icon: <BoltRoundedIcon />,
    tone: "bg-[#d8ecff] text-[#16324f] group-hover:bg-[#16324f] group-hover:text-white",
  },
  {
    title: "Scalability",
    description: "Grows with your organization's complexity.",
    icon: <TrendingUpRoundedIcon />,
    tone: "bg-[#ffe4bf] text-[#b85c38] group-hover:bg-[#b85c38] group-hover:text-white",
  },
  {
    title: "Security",
    description: "Bank-grade encryption by default.",
    icon: <VerifiedUserRoundedIcon />,
    tone: "bg-[#eef6ff] text-[#22577a] group-hover:bg-[#22577a] group-hover:text-white",
  },
  {
    title: "User First",
    description: "Interfaces designed for human delight.",
    icon: <TouchAppRoundedIcon />,
    tone: "bg-[#fff1dd] text-[#b85c38] group-hover:bg-[#16324f] group-hover:text-white",
  },
];

export default function LandingPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 md:pb-20 md:pt-32">
        <div className="hero-grid-plane absolute inset-x-5 top-20 bottom-0 sm:inset-x-8" />
        <div className="hero-grid-dots absolute inset-x-5 top-20 bottom-0 sm:inset-x-8" />
        <div className="relative z-10 mx-auto grid min-h-[68vh] max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe0f5]/70 bg-white/55 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#16324f] backdrop-blur-md">
              <AutoAwesomeRoundedIcon sx={{ fontSize: 16 }} />
              Intelligent Business Automation
            </div>

            <div className="space-y-6">
              <h1 className="font-headline text-5xl font-extrabold leading-[1.02] tracking-[-0.06em] text-[#122033] md:text-7xl">
                AI Powered <span className="hero-gradient-text">ERP System</span> that Thinks Before You Act
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[#4d5b6d] md:text-xl">
                Bring finance, HR, academics, and service workflows into one beautiful platform that
                feels premium, moves fast, and helps teams make smarter decisions with AI-led
                clarity.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <RouterLink
                to="/contact"
                className="inline-flex rounded-full px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(64,150,255,0.25)] hero-gradient"
              >
                Request Demo
              </RouterLink>
              <RouterLink
                to="/features"
                className="inline-flex rounded-full border border-[#d5e3f5] bg-white/68 px-8 py-4 text-base font-bold text-[#16324f] backdrop-blur-sm transition-all hover:bg-white"
              >
                Explore Modules
              </RouterLink>
            </div>

            <div className="grid max-w-2xl gap-4 pt-2 sm:grid-cols-3">
              {launchPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[1.5rem] border border-white/80 bg-white/58 p-5 shadow-[0_16px_36px_rgba(22,50,79,0.08)] backdrop-blur-md"
                >
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#b85c38]">
                    {pillar.title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#4d5b6d]">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="float-animation relative z-10 overflow-hidden rounded-[2rem] border border-white/75 bg-white/52 shadow-[0_28px_80px_rgba(22,50,79,0.12)] transition-all duration-700 hover:rotate-0 lg:rotate-1">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJQIAzqCCYCz0BYRcqkeiMd04K-Ta3dBYnkGqtEGe7cvPpXkkxLYmzZpoTFsylDPQWL4Az22zRpPlm3S_LDRdANipoL-Oe55wICbhu41Cnz7uQnUTyiFcG05IAOvU45LbeLJtponP01MlYFAiiGBG1P1LomN929qmKmdwiRt9kHWnpcEi9yH_9LBuwV3YF9IFLBxPbCuIWqBsFC65HzTzq2HcJydbD_jvv3CbKVokYZYYkufuxTiYgTvR-jlQkJnLj8zYMSjDRbWbr"
                alt="Modern ERP Dashboard"
                className="h-auto w-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#eef5ff]/18 via-transparent to-[#ffd7b7]/16" />
            </div>
            <div className="absolute -right-12 top-4 h-56 w-56 rounded-full bg-[#9cc4ff]/24 blur-[90px]" />
            <div className="absolute -bottom-8 left-2 h-48 w-48 rounded-full bg-[#ffca9f]/22 blur-[90px]" />
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className={`glass-card rounded-[1.5rem] p-6 text-center transition-all ${item.tone}`}
            >
              <div className="font-headline text-3xl font-extrabold md:text-4xl">{item.value}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-[0.22em] opacity-70">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-headline text-3xl font-bold text-[#1b2430] md:text-5xl">
              Unified Modules &amp; Services
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[#505766]">
              Everything you need to run your organization at peak performance, all in one
              connected space.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.title}
                className={`group flex min-h-[320px] flex-col justify-between rounded-[2rem] border p-8 transition-all hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(27,36,48,0.14)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.6),0_0_36px_rgba(255,244,214,0.9),0_28px_70px_rgba(27,36,48,0.14)] ${
                  module.featured
                    ? "border-transparent text-white shadow-xl hero-gradient"
                    : "border-[#f1e2cf] bg-white shadow-sm hover:border-[#ffe5bf] hover:bg-[#fff8ee]"
                }`}
              >
                <div>
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${module.iconTone}`}
                  >
                    {module.icon}
                  </div>
                  <h3 className="font-headline text-2xl font-bold">{module.title}</h3>
                  <p
                    className={`mt-4 leading-relaxed ${
                      module.featured ? "text-[#f8e6d3]" : "text-[#505766]"
                    }`}
                  >
                    {module.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {valueCards.map((card, index) => (
              <article
                key={card.title}
                className={`glass-card group rounded-[2rem] p-8 transition-all hover:bg-white ${
                  index % 2 === 1 ? "sm:translate-y-8" : ""
                }`}
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-all ${card.tone}`}
                >
                  {card.icon}
                </div>
                <h4 className="font-headline text-lg font-bold text-[#1b2430]">{card.title}</h4>
                <p className="mt-2 text-sm text-[#505766]">{card.description}</p>
              </article>
            ))}
          </div>

          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#b85c38]">
              <span className="h-px w-8 bg-[#b85c38]" />
              Value Proposition
            </div>
            <h2 className="font-headline text-4xl font-extrabold leading-tight text-[#1b2430] md:text-5xl">
              Why teams choose <span className="italic text-[#16324f]">AYRA</span> for the next
              phase
            </h2>
            <p className="mb-10 mt-8 text-lg leading-relaxed text-[#505766]">
              We don&apos;t just provide software; we provide a foundation for growth. Our
              AI-powered ERP approach helps organizations work faster, see clearer, and launch with
              confidence.
            </p>

            <div className="relative flex items-center gap-8 overflow-hidden rounded-[2rem] p-8 text-white hero-gradient">
              <div className="font-headline text-5xl font-extrabold">99%</div>
              <div className="text-sm font-medium leading-snug text-[#f8e6d3]">
                Uptime SLA and reliable cloud infrastructure for uninterrupted daily operations.
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-white/10 blur-xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
