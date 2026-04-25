import { useState } from "react";
import { Alert, Box, Button, Container, Snackbar, TextField } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

import API from "../services/api.js";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
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
    <section className="section-shell py-24">
      <Container maxWidth="xl">
        <div className="section-reveal mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#0D9488]">Contact</p>
          <h2 className="mt-4 font-['Sora'] text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Get in Touch
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <Box component="form" onSubmit={handleSubmit} className="section-reveal luxury-panel rounded-[32px] p-8">
            <div className="grid gap-5">
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                InputLabelProps={{ sx: { color: "rgba(248,250,255,0.68)" } }}
                sx={{ "& .MuiOutlinedInput-root": { color: "#F8FAFF" } }}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                InputLabelProps={{ sx: { color: "rgba(248,250,255,0.68)" } }}
                sx={{ "& .MuiOutlinedInput-root": { color: "#F8FAFF" } }}
              />
              <TextField
                label="Message"
                name="message"
                multiline
                minRows={5}
                value={formData.message}
                onChange={handleChange}
                required
                InputLabelProps={{ sx: { color: "rgba(248,250,255,0.68)" } }}
                sx={{ "& .MuiOutlinedInput-root": { color: "#F8FAFF" } }}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendRoundedIcon />}
                disabled={submitting}
                sx={{ width: "fit-content", background: "linear-gradient(135deg, #004A99 0%, #0D9488 100%)" }}
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </Box>

          <div className="section-reveal section-reveal-delay-1 luxury-panel rounded-[32px] p-8">
            <p className="font-['Sora'] text-2xl font-semibold text-white">Connect with our team</p>
            <p className="mt-4 max-w-lg leading-7 text-white/70">
              Whether you are planning a campus-wide rollout or exploring a regional deployment, we can
              help you design the right AYRA ERP implementation.
            </p>
            <div className="mt-8 space-y-5 text-white/78">
              <p>Phone: +91-98765-43210</p>
              <p>Email: support@ayraerp.com</p>
              <p>Web: www.ayraerp.com</p>
            </div>
            <div className="mt-10 flex gap-4 text-white/70">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 hover:bg-white/8">
                <LinkedInIcon />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 hover:bg-white/8">
                <XIcon />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 hover:bg-white/8">
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </Container>

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
    </section>
  );
}
