import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import GradingRoundedIcon from "@mui/icons-material/GradingRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import ViewKanbanRoundedIcon from "@mui/icons-material/ViewKanbanRounded";
import { Link as RouterLink } from "react-router-dom";

const features = [
  {
    title: "Student Management",
    icon: <SchoolRoundedIcon />,
    items: ["Student profiles", "Enrollment records", "Department mapping", "Academic history"],
  },
  {
    title: "Attendance Tracking",
    icon: <EventAvailableRoundedIcon />,
    items: ["Daily attendance", "Faculty updates", "Absence visibility", "Attendance summaries"],
  },
  {
    title: "Exam & Results",
    icon: <GradingRoundedIcon />,
    items: ["Exam scheduling", "Marks entry", "Result publishing", "Performance tracking"],
  },
  {
    title: "Fee Management",
    icon: <AccountBalanceWalletRoundedIcon />,
    items: ["Fee plans", "Payment records", "Receipts", "Collection monitoring"],
  },
  {
    title: "Notifications",
    icon: <CampaignRoundedIcon />,
    items: ["Campus announcements", "Student alerts", "Reminder workflows", "Important notices"],
  },
  {
    title: "Added Value",
    icon: <InsightsRoundedIcon />,
    items: ["Live reporting", "Operational insights", "Smarter follow-ups", "Better leadership visibility"],
  },
];

const summaryCards = [
  { label: "Core Features", value: "5+" },
  { label: "Extended Value", value: "Analytics" },
  { label: "Access Control", value: "Role-Based" },
  { label: "Purpose", value: "Daily Clarity" },
];

export default function FeaturesPage() {
  return (
    <div className="px-5 pb-24 pt-32 sm:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d7e2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#001b3f]">
              <ViewKanbanRoundedIcon sx={{ fontSize: 16 }} />
              Features
            </div>
            <div className="space-y-6">
              <h1 className="font-headline text-5xl font-extrabold leading-[1.05] tracking-[-0.06em] text-[#131b2e] md:text-6xl">
                The modules institutions ask for first
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#424751]">
                AYRA focuses on the workflows institutions use every day, then strengthens them with reporting, role-based access, and better coordination.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Student records and academic continuity in one place",
                "Attendance, exams, and fee workflows connected instead of siloed",
                "Notifications that keep faculty, students, and teams aligned",
                "Cleaner operational visibility for administrators and decision makers",
              ].map((item) => (
                <div key={item} className="glass-card rounded-[1.5rem] p-5 text-[#424751]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,#00346f_0%,#004a99_60%,#00564e_100%)] p-8 text-white shadow-[0_32px_90px_rgba(0,52,111,0.2)]">
            <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-100/75">Feature Lens</p>
              <h2 className="mt-3 font-headline text-3xl font-bold">Built around real institutional workflows</h2>
              <p className="mt-4 leading-8 text-blue-50/85">
                The strongest feature set is the one teams can actually use every day without confusion. AYRA is designed to keep those daily actions clear and connected.
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {summaryCards.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/15 bg-white/8 p-5">
                  <p className="font-headline text-2xl font-bold">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-blue-100/75">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`rounded-[2rem] border p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(19,27,46,0.12)] ${
                index === 0 ? "bg-[linear-gradient(135deg,#00346f_0%,#004a99_100%)] text-white border-transparent" : "glass-card"
              }`}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                index === 0
                  ? "bg-white/14 text-white"
                  : "bg-[linear-gradient(135deg,rgba(0,74,153,0.14),rgba(137,245,231,0.34))] text-[#00346f]"
              }`}>
                {feature.icon}
              </div>
              <h3 className={`mt-6 font-headline text-2xl font-bold ${index === 0 ? "text-white" : "text-[#131b2e]"}`}>
                {feature.title}
              </h3>
              <ul className={`mt-5 space-y-3 ${index === 0 ? "text-blue-50/85" : "text-[#424751]"}`}>
                {feature.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className={`mt-2 h-2 w-2 rounded-full ${index === 0 ? "bg-[#89f5e7]" : "bg-[#004a99]"}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="hero-gradient rounded-[2.5rem] p-10 text-white md:p-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.22em] text-blue-100/80">Implementation Ready</p>
              <h2 className="mt-4 font-headline text-4xl font-bold tracking-[-0.04em]">
                Need help setting these modules up for your institution?
              </h2>
              <p className="mt-4 text-lg leading-8 text-blue-50/85">
                AYRA also supports deployment, customization, migration, and long-term maintenance so the feature list becomes a working system, not just a brochure.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <RouterLink to="/services" className="rounded-full bg-white px-7 py-3.5 font-bold text-[#00346f]">
                View Services
              </RouterLink>
              <RouterLink to="/contact" className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white">
                Contact Team
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

