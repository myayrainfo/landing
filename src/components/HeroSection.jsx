import { Button, Chip, Container } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="section-shell relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="hero-grid" />
      <div className="hero-orb left-[-7rem] top-10 h-72 w-72 bg-[#004A99]/35" />
      <div className="hero-orb right-[-5rem] top-32 h-64 w-64 bg-[#0D9488]/20" />

      <Container maxWidth="xl" className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <Chip
            label="Cloud-native ERP for universities"
            className="hero-enter !mb-6 !border !border-white/12 !bg-white/6 !px-3 !text-white/80"
          />

          <h1 className="hero-enter font-['Sora'] text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
            <span className="mb-4 block text-center">AYRA ERP</span>
            Smart ERP Solution for
            <span className="block">Modern Universities</span>
          </h1>

          <p className="hero-enter hero-enter-delay mx-auto mt-8 max-w-4xl text-lg leading-9 text-white/68 sm:text-2xl">
            Digitize. Automate. Empower. Built for the education sector of tomorrow with a premium,
            unified platform for academic, finance, operations, and engagement teams.
          </p>

          <div className="hero-enter hero-enter-delay mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              endIcon={<ArrowOutwardRoundedIcon />}
              sx={{
                background: "linear-gradient(135deg, #004A99 0%, #0D9488 100%)",
                color: "#F8FAFF",
                minWidth: 180,
                "&:hover": { opacity: 0.92 },
              }}
            >
              Get Started
            </Button>
            <Button
              component={RouterLink}
              to="/features"
              variant="outlined"
              sx={{ color: "#F8FAFF", borderColor: "rgba(255,255,255,0.18)", minWidth: 180 }}
            >
              Explore Modules
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
