import { Container } from "@mui/material";

export default function AddressSection() {
  return (
    <section className="section-shell py-24">
      <Container maxWidth="xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="section-reveal luxury-panel rounded-[32px] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#0D9488]">Our Head Office</p>
            <h2 className="mt-4 font-['Sora'] text-3xl font-semibold tracking-[-0.05em] text-white">
              AYRA ERP Pvt. Ltd.
            </h2>
            <p className="mt-6 max-w-md leading-8 text-white/72">
              C V Raman Global University, Janla, Bhubaneswar, Khordha, Odisha, India
            </p>
            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/4 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-white/55">Office Hours</p>
              <p className="mt-2 text-white/80">Monday to Saturday, 9:00 AM to 7:00 PM IST</p>
            </div>
          </div>
          <div className="section-reveal section-reveal-delay-1 overflow-hidden rounded-[32px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
            <iframe
              title="AYRA ERP Head Office Map"
              src="https://www.google.com/maps?q=C%20V%20Raman%20Global%20University%2C%20Janla%2C%20Bhubaneswar%2C%20Khordha%2C%20Odisha&z=14&output=embed"
              width="100%"
              height="100%"
              className="min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
