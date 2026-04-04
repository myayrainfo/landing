import { useEffect, useState } from "react";
import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import GppGoodRoundedIcon from "@mui/icons-material/GppGoodRounded";
import CrisisAlertRoundedIcon from "@mui/icons-material/CrisisAlertRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";

const aboutBlocks = [
  {
    title: "What AYRA Is",
    text: "AYRA is an AI-powered ERP platform for institutions that want one system for academic and operational control.",
    icon: <ArchitectureRoundedIcon />,
  },
  {
    title: "Purpose / Mission",
    text: "Our mission is to simplify institutional operations through connected workflows, cleaner data, and smarter decisions.",
    icon: <TrackChangesRoundedIcon />,
  },
  {
    title: "Problem It Solves",
    text: "AYRA removes the friction created by scattered spreadsheets, disconnected tools, delayed reporting, and repetitive manual work.",
    icon: <CrisisAlertRoundedIcon />,
  },
  {
    title: "One Strong Benefit",
    text: "Teams work faster because student, exam, fee, and communication workflows stay aligned in one place.",
    icon: <BoltRoundedIcon />,
  },
];

const proofPoints = [
  "One place for academic, financial, and operational visibility",
  "Cleaner handoffs between administration, faculty, and support teams",
  "A better daily experience for institutions that need precision at scale",
];

const teamMembers = [
  {
    name: "Biswajeet Rout",
    role: "Project Architecture",
    photo: "/assets/team/Biswajeet-Rout.jpeg",
    accent: "from-[#ffd4c8] to-[#fff2ec]",
  },
  {
    name: "Ashutosh Pradhan",
    role: "AI Engineer",
    photo: "/assets/team/Ashutosh-Pradhan.jpeg",
    accent: "from-[#d7e7ff] to-[#f2f7ff]",
  },
  {
    name: "Neeladri Bijay Misra",
    role: "Project Coordination Head",
    photo: "/assets/team/Neeladri-Bijay-Misra.jpeg",
    accent: "from-[#d9fff2] to-[#effff8]",
  },
  {
    name: "Monideepa Kar",
    role: "Lead Developer",
    photo: "/assets/team/Monideepa-Kar.jpeg",
    accent: "from-[#ffe8bf] to-[#fff7ea]",
  },
  {
    name: "Ishita Paul",
    role: "Customer Relation",
    photo: "/assets/team/Ishita-Paul.jpeg",
    accent: "from-[#ecd9ff] to-[#f8f1ff]",
  },
];

const orbitSlots = [
  { x: 0, y: 0, scale: 1, opacity: 1, z: 50, blur: 0 },
  { x: 170, y: -74, scale: 0.84, opacity: 0.62, z: 30, blur: 0.4 },
  { x: 138, y: 116, scale: 0.8, opacity: 0.5, z: 20, blur: 0.8 },
  { x: -138, y: 116, scale: 0.8, opacity: 0.5, z: 20, blur: 0.8 },
  { x: -170, y: -74, scale: 0.84, opacity: 0.62, z: 30, blur: 0.4 },
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % teamMembers.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  return (
    <div className="px-5 pb-24 pt-32 sm:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d7e2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#001b3f]">
              <ArchitectureRoundedIcon sx={{ fontSize: 16 }} />
              About AYRA
            </div>
            <div className="space-y-6">
              <h1 className="font-headline text-5xl font-extrabold leading-[1.05] tracking-[-0.06em] text-[#131b2e] md:text-6xl">
                A smarter ERP built to reduce operational noise.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#424751]">
                AYRA helps institutions move from fragmented admin processes to one connected ERP experience that feels cleaner, faster, and easier to trust.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div key={item} className="glass-card rounded-[1.5rem] p-5 text-[#424751]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,#00346f_0%,#004a99_55%,#00564e_100%)] p-8 text-white shadow-[0_32px_90px_rgba(0,52,111,0.22)]">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-100/75">Why Institutions Switch</p>
            <h2 className="mt-4 font-headline text-4xl font-bold tracking-[-0.04em]">
              Better visibility, fewer delays, and less dependence on manual coordination.
            </h2>
            <div className="mt-8 rounded-[1.5rem] border border-white/15 bg-white/10 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/14 text-white">
                <GppGoodRoundedIcon />
              </div>
              <p className="mt-4 text-lg leading-8 text-blue-50/90">
                AYRA gives leadership and teams a stronger operational view without forcing them to jump between disconnected tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aboutBlocks.map((block) => (
            <article key={block.title} className="glass-card rounded-[2rem] p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(0,74,153,0.14),rgba(137,245,231,0.34))] text-[#00346f]">
                {block.icon}
              </div>
              <h3 className="mt-6 font-headline text-2xl font-bold text-[#131b2e]">{block.title}</h3>
              <p className="mt-4 leading-7 text-[#424751]">{block.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0e8] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#b85c38]">
              Team Showcase
            </div>
            <h2 className="font-headline text-4xl font-extrabold leading-tight text-[#131b2e] md:text-5xl">
              The people behind smoother rollout and day-to-day execution.
            </h2>
            <p className="text-lg leading-8 text-[#424751]">
              This concept keeps one member card in focus while the others orbit around it with softer scale and opacity, giving the About page a more alive, premium feel.
            </p>
          </div>

          <div
            className="glass-card relative min-h-[540px] overflow-hidden rounded-[2.5rem] px-4 py-10 sm:px-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-[radial-gradient(circle,rgba(216,236,255,0.55)_0%,rgba(255,255,255,0)_70%)]" />
            <div className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e7d7c3]/70" />

            <div className="relative mx-auto h-[500px] max-w-[520px]">
              {teamMembers.map((member, index) => {
                const relativeIndex = (index - activeIndex + teamMembers.length) % teamMembers.length;
                const slot = orbitSlots[relativeIndex];
                const isFocused = relativeIndex === 0;

                return (
                  <article
                    key={member.name}
                    className="absolute left-1/2 top-1/2 w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/80 bg-white/78 p-4 shadow-[0_24px_60px_rgba(27,36,48,0.12)] backdrop-blur-xl transition-all duration-700 ease-out"
                    style={{
                      transform: `translate(-50%, -50%) translate(${slot.x}px, ${slot.y}px) scale(${slot.scale})`,
                      opacity: slot.opacity,
                      zIndex: slot.z,
                      filter: `blur(${slot.blur}px)`,
                      animation: `float ${isFocused ? 5.6 : 7.2}s ease-in-out infinite`,
                    }}
                  >
                    <div className={`rounded-[1.5rem] bg-gradient-to-br ${member.accent} p-3`}>
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-48 w-full rounded-[1.25rem] object-cover"
                      />
                    </div>
                    <div className="px-1 pb-1 pt-4">
                      <p className="font-headline text-xl font-bold text-[#131b2e]">{member.name}</p>
                      <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[#6d7683]">{member.role}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



