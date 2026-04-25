import { Button, Container } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";

export default function SectionCta({
  eyebrow,
  title,
  description,
  primary = { label: "Contact Us", to: "/contact" },
  secondary = { label: "User Login", to: "/dashboard/cgu/login" },
}) {
  return (
    <section className="section-shell py-24">
      <Container maxWidth="xl">
        <div className="section-reveal luxury-panel relative overflow-hidden rounded-[36px] border border-white/10 px-8 py-10 sm:px-12 sm:py-14">
          <div className="absolute -left-12 top-0 h-48 w-48 rounded-full bg-[#004A99]/14 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#0D9488]/12 blur-3xl" />
          <div className="relative max-w-4xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[#0D9488]">{eyebrow}</p>
            <h2 className="mt-4 font-['Sora'] text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">{description}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                component={RouterLink}
                to={primary.to}
                variant="contained"
                endIcon={<ArrowOutwardRoundedIcon />}
                sx={{
                  background: "linear-gradient(135deg, #004A99 0%, #0D9488 100%)",
                  color: "#F8FAFF",
                }}
              >
                {primary.label}
              </Button>
              <Button
                component={RouterLink}
                to={secondary.to}
                variant="outlined"
                sx={{ color: "#F8FAFF", borderColor: "rgba(255,255,255,0.18)" }}
              >
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
