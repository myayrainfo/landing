import { Container } from "@mui/material";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

const features = [
  {
    title: "Communication System",
    icon: CampaignRoundedIcon,
    items: ["Announcements", "Notices", "Email Alerts", "Event Notifications"],
  },
  {
    title: "Academic Module",
    icon: MenuBookRoundedIcon,
    items: ["Assignments", "Attendance", "Projects", "Progress Tracking", "Internship Tracking"],
  },
  {
    title: "Finance Module",
    icon: AccountBalanceWalletRoundedIcon,
    items: ["Fees Management", "Payment Tracking", "Receipt Generation"],
  },
  {
    title: "HR & User Management",
    icon: ManageAccountsRoundedIcon,
    items: ["Student Records", "Teacher Information", "Role-Based Access Control"],
  },
  {
    title: "Document & Compliance",
    icon: DescriptionRoundedIcon,
    items: ["NOC Management", "Document Storage", "Digital Signatures"],
  },
  {
    title: "Extra Systems",
    icon: RocketLaunchRoundedIcon,
    items: ["Placement System", "Coding Playground", "Task Alerts", "Holiday Calendar"],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-shell py-24">
      <Container maxWidth="xl">
        <div className="section-reveal max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#0D9488]">Features</p>
          <h2 className="mt-4 font-['Sora'] text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Everything Your University Needs
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Every module is designed to reduce operational drag and help institutions move with clarity.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`feature-card section-reveal section-reveal-delay-${(index % 3) + 1} luxury-panel rounded-[30px] border p-8`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(0,74,153,0.22),rgba(13,148,136,0.16))] text-[#0D9488]">
                  <Icon />
                </div>
                <h3 className="mt-6 font-['Sora'] text-2xl font-semibold text-white">{feature.title}</h3>
                <ul className="mt-5 space-y-3 text-white/72">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#004A99]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
