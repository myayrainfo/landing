import { Container } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import LanRoundedIcon from "@mui/icons-material/LanRounded";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import { Link as RouterLink } from "react-router-dom";

const services = [
  {
    title: "ERP Implementation",
    description: "End-to-end deployment planning, migration, onboarding, and launch support.",
    icon: LanRoundedIcon,
  },
  {
    title: "Cloud Hosting",
    description: "Secure, scalable cloud infrastructure with monitoring and uptime assurance.",
    icon: CloudQueueRoundedIcon,
  },
  {
    title: "Custom ERP Development",
    description: "Tailored workflows, modules, and integrations for your institutional model.",
    icon: CodeRoundedIcon,
  },
  {
    title: "Maintenance & Support",
    description: "24/7 dedicated support, issue resolution, platform care, and continuous optimization.",
    icon: SupportAgentRoundedIcon,
  },
];

export default function ServicesSection() {
  return (
    <section className="section-shell py-24">
      <Container maxWidth="xl">
        <div className="section-reveal max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#0D9488]">Services</p>
          <h2 className="mt-4 font-['Sora'] text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            What We Offer
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`section-reveal section-reveal-delay-${(index % 3) + 1} luxury-panel rounded-[30px] p-8`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(0,74,153,0.22),rgba(13,148,136,0.16))] text-[#0D9488]">
                  <Icon />
                </div>
                <h3 className="mt-6 font-['Sora'] text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-white/70">{service.description}</p>
                <RouterLink to="/contact" className="mt-6 inline-flex items-center gap-2 text-[#0D9488]">
                  Learn More <ArrowOutwardRoundedIcon fontSize="small" />
                </RouterLink>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
