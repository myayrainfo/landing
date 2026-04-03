import LanRoundedIcon from "@mui/icons-material/LanRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";

const services = [
  {
    title: "ERP Setup & Deployment",
    description: "We plan the rollout, configure the platform, and help your institution go live with less friction.",
    icon: <LanRoundedIcon />,
  },
  {
    title: "Customization for Institutions",
    description: "Modules, workflows, and roles are adjusted to match how your institution actually operates.",
    icon: <TuneRoundedIcon />,
  },
  {
    title: "Support & Maintenance",
    description: "AYRA stays with you after launch through issue resolution, updates, and ongoing product care.",
    icon: <SupportAgentRoundedIcon />,
  },
  {
    title: "Data Management / Migration",
    description: "We help move records, organize data, and reduce migration stress during implementation.",
    icon: <StorageRoundedIcon />,
  },
  {
    title: "Training & Onboarding",
    description: "As an added layer, we can guide administrators and teams through the transition into daily usage.",
    icon: <SchoolRoundedIcon />,
  },
  {
    title: "Long-Term Optimization",
    description: "We continue refining the setup so the ERP remains useful as your processes and scale evolve.",
    icon: <HandymanRoundedIcon />,
  },
];

export default function ServicesPage() {
  return (
    <div className="px-5 pb-24 pt-32 sm:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d7e2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#001b3f]">
              <SupportAgentRoundedIcon sx={{ fontSize: 16 }} />
              Services
            </div>
            <div className="space-y-6">
              <h1 className="font-headline text-5xl font-extrabold leading-[1.05] tracking-[-0.06em] text-[#131b2e] md:text-6xl">
                Services that help the ERP succeed after the sale
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#424751]">
                AYRA is not only about software modules. We also support deployment, institutional customization, migration, and long-term maintenance so adoption feels manageable.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Rollout", value: "Guided" },
                { label: "Support", value: "Ongoing" },
                { label: "Migration", value: "Structured" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-[1.5rem] p-5">
                  <p className="font-headline text-2xl font-bold text-[#131b2e]">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#737783]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,#00346f_0%,#004a99_55%,#00564e_100%)] p-8 text-white shadow-[0_32px_90px_rgba(0,52,111,0.2)]">
            <p className="text-sm uppercase tracking-[0.22em] text-blue-100/80">Service Flow</p>
            <h2 className="mt-4 font-headline text-4xl font-bold tracking-[-0.04em]">
              From setup to support, one path instead of disconnected vendors
            </h2>
            <div className="mt-8 grid gap-4">
              {[
                {
                  step: "01",
                  title: "Setup and scope",
                  description: "We review workflows, users, data, and launch priorities before configuration starts.",
                },
                {
                  step: "02",
                  title: "Customize and migrate",
                  description: "The system is adjusted to the institution while records and operational logic are prepared carefully.",
                },
                {
                  step: "03",
                  title: "Maintain and improve",
                  description: "Post-launch support keeps the platform healthy and easier to scale over time.",
                },
              ].map((item) => (
                <div key={item.step} className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#89f5e7]">{item.step}</p>
                  <h3 className="mt-3 font-headline text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-blue-50/85">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-card rounded-[2rem] p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(0,74,153,0.14),rgba(137,245,231,0.34))] text-[#00346f]">
                {service.icon}
              </div>
              <h3 className="mt-6 font-headline text-2xl font-bold text-[#131b2e]">{service.title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-[#424751]">{service.description}</p>
              <RouterLink to="/contact" className="mt-6 inline-flex items-center gap-2 font-bold text-[#00346f]">
                Learn More
                <ArrowOutwardRoundedIcon fontSize="small" />
              </RouterLink>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}


