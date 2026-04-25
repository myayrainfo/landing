import { useState } from "react";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import API from "../services/api.js";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const contactCards = [
  { label: "Phone", value: "+91-98765-43210", icon: <PhoneRoundedIcon /> },
  { label: "Email", value: "support@ayraerp.com", icon: <AlternateEmailRoundedIcon /> },
  { label: "Response", value: "Demos, setup, and rollout discussions", icon: <ContactMailRoundedIcon /> },
];

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, severity: "success", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      await API.post("/contact", formData);
      setFormData(initialForm);
      setSnackbar({ open: true, severity: "success", message: "Message sent successfully." });
    } catch (error) {
      const message = error.response?.data?.message || "Unable to send your message right now.";
      setSnackbar({ open: true, severity: "error", message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="px-5 pb-24 pt-32 sm:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d7e2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#001b3f]">
              <ContactMailRoundedIcon sx={{ fontSize: 16 }} />
              Contact
            </div>
            <div className="space-y-6">
              <h1 className="font-headline text-5xl font-extrabold leading-[1.05] tracking-[-0.06em] text-[#131b2e] md:text-6xl">
                Contact AYRA
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#424751]">
                This page is focused on practical contact details: phone number, email, message form, and social links for anyone exploring AYRA.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {contactCards.map((item) => (
                <div key={item.label} className="glass-card rounded-[1.5rem] p-5 text-[#424751]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef6ff] text-[#00346f]">
                    {item.icon}
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#737783]">{item.label}</p>
                  <p className="mt-2 leading-7">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,#00346f_0%,#004a99_55%,#00564e_100%)] p-8 text-white shadow-[0_32px_90px_rgba(0,52,111,0.2)]">
            <p className="text-sm uppercase tracking-[0.22em] text-blue-100/80">Social Links</p>
            <h2 className="mt-4 font-headline text-4xl font-bold tracking-[-0.04em]">
              Reach out directly or connect through your preferred channel.
            </h2>
            <p className="mt-6 leading-8 text-blue-50/85">
              I kept this page simple on purpose so visitors can move quickly from curiosity to conversation without extra friction.
            </p>
            <div className="mt-8 flex gap-4 text-white/85">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/10 p-3 hover:bg-white/16">
                <LinkedInIcon />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/10 p-3 hover:bg-white/16">
                <XIcon />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/10 p-3 hover:bg-white/16">
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <form onSubmit={handleSubmit} className="glass-card rounded-[2rem] p-8">
            <div className="grid gap-5">
              <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
              <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              <TextField label="Message" name="message" multiline minRows={5} value={formData.message} onChange={handleChange} required />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendRoundedIcon />}
                disabled={submitting}
                sx={{
                  width: "fit-content",
                  background: "linear-gradient(135deg, #00346f 0%, #004a99 100%)",
                }}
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

          <div className="grid gap-6">
            <div className="glass-card rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-[#00564e]">Phone</p>
              <h3 className="mt-4 font-headline text-2xl font-bold text-[#131b2e]">Call for a direct conversation</h3>
              <p className="mt-3 leading-7 text-[#424751]">Use `+91-98765-43210` to discuss demos, rollout planning, or support-related questions.</p>
            </div>
            <div className="glass-card rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-[#00564e]">Email</p>
              <h3 className="mt-4 font-headline text-2xl font-bold text-[#131b2e]">Share details by email</h3>
              <p className="mt-3 leading-7 text-[#424751]">Reach us at `support@ayraerp.com` if you want to outline your institution's needs before a call.</p>
            </div>
            <div className="glass-card rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-[#00564e]">Form</p>
              <h3 className="mt-4 font-headline text-2xl font-bold text-[#131b2e]">Simple message capture</h3>
              <p className="mt-3 leading-7 text-[#424751]">The form asks only for name, email, and message so serious inquiries can reach you quickly.</p>
            </div>
          </div>
        </div>
      </section>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((current) => ({ ...current, open: false }))}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() => setSnackbar((current) => ({ ...current, open: false }))}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

