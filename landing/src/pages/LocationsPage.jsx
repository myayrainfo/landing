import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import { Link as RouterLink } from "react-router-dom";

const serviceAvailability = [
  "Primary implementation and support coverage across India",
  "Remote consultations available for institutions outside the local region",
  "Global conversations possible for product demos and partnership discovery",
];

const reachCards = [
  { value: "India", label: "Primary Service Area" },
  { value: "Remote", label: "Support Model" },
  { value: "Hybrid", label: "Delivery Style" },
];

export default function LocationsPage() {
  return (
    <div className="px-5 pb-24 pt-32 sm:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d7e2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#001b3f]">
              <TravelExploreRoundedIcon sx={{ fontSize: 16 }} />
              Location
            </div>
            <div className="space-y-6">
              <h1 className="font-headline text-5xl font-extrabold leading-[1.05] tracking-[-0.06em] text-[#131b2e] md:text-6xl">
                Office location, map, and service reach
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#424751]">
                AYRA operates from Bhubaneswar while supporting institutions across India through a mix of remote coordination and guided implementation.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {reachCards.map((fact) => (
                <div key={fact.label} className="glass-card rounded-[1.5rem] p-5 text-center">
                  <p className="font-headline text-3xl font-bold text-[#131b2e]">{fact.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#737783]">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,#00346f_0%,#004a99_55%,#00564e_100%)] p-8 text-white shadow-[0_32px_90px_rgba(0,52,111,0.2)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-blue-100/80">Head Office</p>
                <h2 className="mt-4 font-headline text-4xl font-bold tracking-[-0.04em]">Bhubaneswar, Odisha</h2>
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-50/85">
                India First
              </div>
            </div>
            <p className="mt-6 leading-8 text-blue-50/85">
              This page exists to answer three practical questions quickly: where AYRA is based, how clients can find the office, and where service delivery is available.
            </p>
            <div className="mt-8 grid gap-4">
              {serviceAvailability.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 text-blue-50/85">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-card rounded-[2rem] p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(0,74,153,0.14),rgba(137,245,231,0.34))] text-[#00346f]">
              <HomeWorkRoundedIcon />
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[#00564e]">Office Address</p>
            <h2 className="mt-4 font-headline text-3xl font-bold tracking-[-0.04em] text-[#131b2e]">
              AYRA
            </h2>
            <p className="mt-6 max-w-md leading-8 text-[#424751]">
              C V Raman Global University, Janla, Bhubaneswar, Khordha, Odisha, India
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-[#c2c6d3]/50 bg-white p-5">
              <p className="text-sm uppercase tracking-[0.16em] text-[#737783]">Service Availability</p>
              <p className="mt-2 text-[#424751]">Available across India, with remote support and demo conversations for wider regions.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_24px_70px_rgba(19,27,46,0.08)]">
            <iframe
              title="AYRA Office Map"
              src="https://www.google.com/maps?q=C%20V%20Raman%20Global%20University%2C%20Janla%2C%20Bhubaneswar%2C%20Khordha%2C%20Odisha&z=14&output=embed"
              width="100%"
              height="100%"
              className="min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="hero-gradient rounded-[2.5rem] p-10 text-white md:p-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.22em] text-blue-100/80">Next Step</p>
              <h2 className="mt-4 font-headline text-4xl font-bold tracking-[-0.04em]">
                Want to discuss implementation from your location?
              </h2>
              <p className="mt-4 text-lg leading-8 text-blue-50/85">
                Use the contact page to request a demo, ask about rollout scope, or discuss whether AYRA is the right fit for your institution.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <RouterLink to="/contact" className="rounded-full bg-white px-7 py-3.5 font-bold text-[#00346f]">
                Open Contact Page
              </RouterLink>
              <RouterLink to="/services" className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white">
                View Services
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

