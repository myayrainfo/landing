import { Container } from "@mui/material";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";

const aims = [
  {
    icon: TrackChangesRoundedIcon,
    title: "Digitize Operations",
    description: "Replace paper-heavy university processes with streamlined digital workflows.",
  },
  {
    icon: SettingsSuggestRoundedIcon,
    title: "Automate Workflows",
    description: "Reduce manual tasks by 80% across departments, approvals, and routine tracking.",
  },
  {
    icon: QueryStatsRoundedIcon,
    title: "Improve Transparency",
    description: "Deliver real-time reporting for students, faculty, administrators, and leadership.",
  },
];

export default function AimSection() {
  return (
    <section className="section-shell py-24">
      <Container maxWidth="xl">
        <div className="section-reveal text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#0D9488]">Our Aim</p>
          <h2 className="mt-4 font-['Sora'] text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Operational excellence with less friction
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {aims.map((aim, index) => {
            const Icon = aim.icon;
            return (
              <div
                key={aim.title}
                className={`section-reveal section-reveal-delay-${Math.min(index + 1, 3)} luxury-panel rounded-[30px] p-8`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(0,74,153,0.22),rgba(13,148,136,0.16))] text-[#0D9488]">
                  <Icon />
                </div>
                <h3 className="mt-6 font-['Sora'] text-2xl font-semibold text-white">{aim.title}</h3>
                <p className="mt-4 leading-7 text-white/70">{aim.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
