import { Container } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";

const routeCards = [
  {
    title: "About AYRA ERP",
    description: "Understand the product vision, institutional focus, and why the platform is structured for modern campuses.",
    to: "/about",
    accent: "from-[#004A99]/30 to-transparent",
  },
  {
    title: "Explore Features",
    description: "See academic, finance, HR, communication, and compliance modules without crowding the homepage.",
    to: "/features",
    accent: "from-[#0D9488]/24 to-transparent",
  },
  {
    title: "Implementation Services",
    description: "Review rollout support, cloud hosting, customization, and long-term maintenance options.",
    to: "/services",
    accent: "from-[#475569]/26 to-transparent",
  },
  {
    title: "Reach & Contact",
    description: "Find regional delivery coverage, head office details, and a dedicated contact page for inquiries.",
    to: "/contact",
    accent: "from-[#1E3A8A]/28 to-transparent",
  },
];

export default function RouteShowcase() {
  return (
    <section className="section-shell py-24">
      <Container maxWidth="xl">
        <div className="section-reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#0D9488]">Explore By Page</p>
            <h2 className="mt-4 font-['Sora'] text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              A cleaner ERP story with dedicated pages
            </h2>
          </div>
          <p className="max-w-xl text-white/65">
            Each section now has its own destination, so visitors can browse the product like a premium platform site instead of a one-page template.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {routeCards.map((card, index) => (
            <RouterLink
              key={card.title}
              to={card.to}
              className={`section-reveal section-reveal-delay-${(index % 3) + 1} luxury-panel group relative overflow-hidden rounded-[30px] border p-8`}
            >
              <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${card.accent}`} />
              <div className="relative">
                <p className="text-sm uppercase tracking-[0.24em] text-[#0D9488]">Page</p>
                <h3 className="mt-5 font-['Sora'] text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-white/70">{card.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/86 transition group-hover:text-[#8FE3DB]">
                  Open page <ArrowOutwardRoundedIcon fontSize="small" />
                </span>
              </div>
            </RouterLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
