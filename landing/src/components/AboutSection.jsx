import { useEffect, useRef, useState } from "react";
import { Container } from "@mui/material";

const stats = [
  { label: "Universities", value: 50, suffix: "+" },
  { label: "Students", value: 1, suffix: "M+" },
  { label: "Uptime", value: 99.9, suffix: "%" },
  { label: "Countries", value: 10, suffix: "+" },
];

function CountUp({ value, suffix }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1400;
    const start = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const nextValue = value === 99.9 ? progress * 99.9 : Math.floor(progress * value);
      setCount(nextValue);
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, [started, value]);

  return (
    <span ref={ref}>
      {value === 99.9 ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section-shell py-24">
      <Container maxWidth="xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="section-reveal">
            <p className="text-sm uppercase tracking-[0.3em] text-[#0D9488]">About AYRA ERP</p>
            <h2 className="mt-4 max-w-2xl font-['Sora'] text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Cloud-native operations for institutions that need precision at scale.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
              AYRA ERP is a multi-tenant SaaS ERP platform purpose-built for universities and
              institutions that want one elegant operating system for academics, finance, faculty,
              administration, and student experience.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Scalable architecture for growing institutions",
                "99.9% uptime with resilient cloud infrastructure",
                "Role-based access across departments and campuses",
                "Real-time data visibility for leadership teams",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="section-reveal section-reveal-delay-1 luxury-panel rounded-[32px] p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[28px] border border-white/10 bg-white/4 p-6">
                  <p className="font-['Sora'] text-4xl font-semibold text-white">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[28px] border border-[#004A99]/35 bg-[linear-gradient(135deg,rgba(0,74,153,0.14),rgba(13,148,136,0.1))] p-6">
              <p className="font-['Sora'] text-xl font-semibold text-white">Enterprise-grade visibility</p>
              <p className="mt-2 text-white/72">
                Bring admissions, academics, finance, HR, and communication into one source of truth
                without compromising institutional complexity.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
