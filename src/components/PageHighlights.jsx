import { Container } from "@mui/material";

export default function PageHighlights({ eyebrow, title, items = [], columns = "three" }) {
  const gridClass = columns === "four" ? "xl:grid-cols-4 md:grid-cols-2" : "lg:grid-cols-3";

  return (
    <section className="section-shell -mt-10 pb-10">
      <Container maxWidth="xl">
        <div className="luxury-panel rounded-[32px] border border-white/10 px-6 py-8 sm:px-8">
          {(eyebrow || title) && (
            <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                {eyebrow ? (
                  <p className="text-sm uppercase tracking-[0.24em] text-[#8FE3DB]">{eyebrow}</p>
                ) : null}
                {title ? (
                  <h2 className="mt-3 font-['Sora'] text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                    {title}
                  </h2>
                ) : null}
              </div>
            </div>
          )}

          <div className={`grid gap-5 ${gridClass}`}>
            {items.map((item, index) => (
              <div
                key={item.title}
                className={`section-reveal section-reveal-delay-${(index % 3) + 1} rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5`}
              >
                {item.kicker ? (
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">{item.kicker}</p>
                ) : null}
                <h3 className="mt-3 font-['Sora'] text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
