import { Button, Chip, Container } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";

const heroThemes = {
  ocean: {
    leftOrb: "bg-[#004A99]/28",
    rightOrb: "bg-[#0D9488]/18",
    panel: "from-[#004A99]/18 via-transparent to-[#0D9488]/12",
    line: "from-[#8FE3DB]/55 via-white/10 to-transparent",
  },
  slate: {
    leftOrb: "bg-[#475569]/28",
    rightOrb: "bg-[#1D4ED8]/18",
    panel: "from-[#475569]/22 via-transparent to-[#1D4ED8]/10",
    line: "from-white/35 via-white/10 to-transparent",
  },
  emerald: {
    leftOrb: "bg-[#0D9488]/24",
    rightOrb: "bg-[#1E3A8A]/18",
    panel: "from-[#0D9488]/20 via-transparent to-[#1E3A8A]/10",
    line: "from-[#8FE3DB]/45 via-white/10 to-transparent",
  },
};

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  align = "left",
  theme = "ocean",
  stats = [],
}) {
  const isCentered = align === "center";
  const palette = heroThemes[theme] || heroThemes.ocean;

  return (
    <section className="section-shell relative overflow-hidden pt-32 pb-20">
      <div className="hero-grid opacity-60" />
      <div className={`hero-orb left-[-5rem] top-8 h-64 w-64 ${palette.leftOrb}`} />
      <div className={`hero-orb right-[-4rem] top-16 h-56 w-56 ${palette.rightOrb}`} />
      <Container maxWidth="xl" className="relative z-10">
        <div className={`grid gap-10 ${stats.length > 0 && !isCentered ? "xl:grid-cols-[1.15fr_0.85fr] xl:items-end" : ""}`}>
          <div className={isCentered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
            <Chip
              label={eyebrow}
              className="hero-enter !mb-6 !border !border-white/12 !bg-white/6 !px-3 !text-white/80"
            />
            <h1 className="hero-enter font-['Sora'] text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <div className={`hero-enter hero-enter-delay mt-7 h-px w-full max-w-2xl bg-gradient-to-r ${palette.line}`} />
            <p className="hero-enter hero-enter-delay mt-7 max-w-3xl text-lg leading-9 text-white/68 sm:text-xl">
              {description}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className={`hero-enter hero-enter-delay mt-10 flex flex-wrap gap-4 ${isCentered ? "justify-center" : ""}`}>
                {primaryCta ? (
                  <Button
                    component={RouterLink}
                    to={primaryCta.to}
                    variant="contained"
                    endIcon={<ArrowOutwardRoundedIcon />}
                    sx={{
                      background: "linear-gradient(135deg, #004A99 0%, #0D9488 100%)",
                      color: "#F8FAFF",
                      minWidth: 180,
                      "&:hover": { opacity: 0.92 },
                    }}
                  >
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button
                    component={RouterLink}
                    to={secondaryCta.to}
                    variant="outlined"
                    sx={{
                      color: "#F8FAFF",
                      borderColor: "rgba(255,255,255,0.18)",
                      minWidth: 180,
                    }}
                  >
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            )}
          </div>

          {stats.length > 0 && !isCentered ? (
            <div className="hero-enter hero-enter-delay luxury-panel relative overflow-hidden rounded-[34px] border border-white/10 p-6 sm:p-8">
              <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${palette.panel}`} />
              <div className="relative">
                <p className="text-sm uppercase tracking-[0.24em] text-[#8FE3DB]">Page Snapshot</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5">
                      <p className="font-['Sora'] text-3xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
