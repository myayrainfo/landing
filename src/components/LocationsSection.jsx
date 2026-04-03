import { Container } from "@mui/material";

const coverageHighlights = [
  {
    label: "Nationwide Support",
    text: "Serving institutions, businesses, and teams across India with consistent implementation support.",
  },
  {
    label: "Rapid Onboarding",
    text: "Remote setup, training, and guidance coordinated directly from our Bhubaneswar team.",
  },
  {
    label: "Scalable Delivery",
    text: "Built to support growing organizations with structured rollouts and responsive assistance.",
  },
];

const serviceRegions = [
  { name: "East India", cities: "Bhubaneswar, Kolkata, Guwahati" },
  { name: "North India", cities: "Delhi, Lucknow, Chandigarh" },
  { name: "South India", cities: "Bengaluru, Chennai, Hyderabad" },
  { name: "West India", cities: "Mumbai, Pune, Ahmedabad" },
];

const quickFacts = [
  { value: "24/7", label: "Digital Access" },
  { value: "4 Zones", label: "Service Coverage" },
  { value: "1 HQ", label: "Bhubaneswar Base" },
];

const deliveryModes = [
  "Remote onboarding for faster activation",
  "Guided implementation and training sessions",
  "Operational support for teams across India",
];

export default function LocationsSection() {
  return (
    <section className="section-shell py-24">
      <Container maxWidth="xl">
        <div className="section-reveal text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#0D9488]">Locations</p>
          <h2 className="mx-auto mt-4 max-w-4xl font-['Sora'] text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            All Over India
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            We support clients across India while operating from our Bhubaneswar head office.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="section-reveal luxury-panel relative overflow-hidden rounded-[32px] border border-white/10 p-8 sm:p-10">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0D9488]/12 to-transparent" />
            <div className="absolute -right-12 top-16 h-40 w-40 rounded-full bg-[#004A99]/10 blur-3xl" />
            <div className="absolute bottom-0 left-10 h-32 w-32 rounded-full bg-[#0D9488]/10 blur-3xl" />

            <div className="relative flex h-full flex-col">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[#0D9488]">National Reach</p>
                  <h3 className="mt-4 font-['Sora'] text-3xl font-semibold text-white sm:text-4xl">All Over India</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72">
                  Head Office: Bhubaneswar
                </div>
              </div>

              <p className="mt-5 max-w-3xl leading-8 text-white/72">
                From Bhubaneswar to every major region, we deliver software support, onboarding, training, and
                service coordination for clients across the country.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {quickFacts.map((fact, index) => (
                  <div
                    key={fact.label}
                    className={`section-reveal section-reveal-delay-${Math.min(index + 1, 3)} rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-center`}
                  >
                    <p className="font-['Sora'] text-3xl font-semibold text-white">{fact.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/55">{fact.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {coverageHighlights.map((item, index) => (
                  <div
                    key={item.label}
                    className={`section-reveal section-reveal-delay-${Math.min(index + 1, 3)} rounded-[24px] border border-white/10 bg-[#0e1431]/70 p-5`}
                  >
                    <p className="text-sm uppercase tracking-[0.18em] text-[#0D9488]">{item.label}</p>
                    <p className="mt-3 leading-7 text-white/76">{item.text}</p>
                  </div>
                ))}

                <div className="section-reveal section-reveal-delay-3 rounded-[24px] border border-dashed border-white/12 bg-white/[0.03] p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#0D9488]">Coverage Promise</p>
                  <p className="mt-3 leading-7 text-white/76">
                    Consistent product delivery, remote assistance, and rollout planning for organizations throughout
                    India.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="section-reveal section-reveal-delay-2 rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#0D9488]">Delivery Model</p>
                  <h4 className="mt-3 font-['Sora'] text-2xl font-semibold text-white">How We Reach You</h4>
                  <div className="mt-5 space-y-3">
                    {deliveryModes.map((mode) => (
                      <div key={mode} className="rounded-[18px] border border-white/10 bg-[#0e1431]/65 px-4 py-3">
                        <p className="text-white/76">{mode}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="section-reveal section-reveal-delay-3 rounded-[24px] border border-white/10 bg-[#0e1431]/75 p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#0D9488]">Coverage Snapshot</p>
                  <h4 className="mt-3 font-['Sora'] text-2xl font-semibold text-white">Strong Presence, Unified Support</h4>
                  <p className="mt-4 leading-7 text-white/72">
                    One central team, region-wide coordination, and consistent service quality for clients operating
                    across multiple cities and campuses.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4 text-center">
                      <p className="font-['Sora'] text-2xl font-semibold text-white">100%</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/55">India Focused</p>
                    </div>
                    <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4 text-center">
                      <p className="font-['Sora'] text-2xl font-semibold text-white">4+</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/55">Major Regions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="section-reveal section-reveal-delay-1 luxury-panel rounded-[32px] border border-white/10 p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-[#0D9488]">Head Office</p>
              <h3 className="mt-4 font-['Sora'] text-2xl font-semibold text-white">Bhubaneswar, Odisha</h3>
              <p className="mt-3 leading-7 text-white/78">
                C V Raman Global University, Janla, Bhubaneswar, Khordha, Odisha
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[#0D9488]">UTC +5:30</p>
            </div>

            <div className="section-reveal section-reveal-delay-2 luxury-panel rounded-[32px] border border-white/10 p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-[#0D9488]">Service Regions</p>
              <div className="mt-5 space-y-3">
                {serviceRegions.map((region) => (
                  <div key={region.name} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-['Sora'] text-lg font-semibold text-white">{region.name}</p>
                    <p className="mt-2 text-sm leading-6 text-white/65">{region.cities}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-reveal section-reveal-delay-3 luxury-panel rounded-[32px] border border-white/10 p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-[#0D9488]">Availability</p>
              <h3 className="mt-4 font-['Sora'] text-2xl font-semibold text-white">Remote + On-Site Support</h3>
              <p className="mt-3 leading-7 text-white/72">
                Our team coordinates online assistance, implementation guidance, and deployment support for clients
                throughout India.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
