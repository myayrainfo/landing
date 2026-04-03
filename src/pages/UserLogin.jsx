import { useState } from "react";
import { Alert, Button, IconButton, InputAdornment, Snackbar, TextField } from "@mui/material";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import API from "../services/api.js";

export default function UserLogin() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [snackbar, setSnackbar] = useState({ open: false, severity: "success", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      await API.post("/login", formData);
      setSnackbar({
        open: true,
        severity: "success",
        message: "Logged in successfully.",
      });
    } catch (error) {
      setSnackbar({
        open: true,
        severity: "error",
        message: error.response?.data?.message || "Login failed.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="tech-pattern flex min-h-screen items-center justify-center px-4 py-16 pt-32">
      <div className="soft-panel w-full max-w-xl rounded-[2rem] p-10 sm:p-12">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white hero-gradient">
            <ArchitectureRoundedIcon />
          </div>
          <div>
            <p className="font-headline text-xl font-bold text-[#131b2e]">AYRA</p>
            <p className="text-sm text-slate-500">Secure user sign in</p>
          </div>
        </div>

        <h1 className="mt-8 font-headline text-3xl font-extrabold tracking-[-0.04em] text-[#131b2e]">
          User Login
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Enter your credentials to continue into the AYRA platform experience.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={(event) => setFormData({ ...formData, username: event.target.value })}
            required
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={(event) => setFormData({ ...formData, password: event.target.value })}
            required
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword((current) => !current)}
                    >
                      {showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<LoginRoundedIcon />}
            disabled={submitting}
            sx={{
              background: "linear-gradient(135deg, #00346f 0%, #004a99 100%)",
              py: 1.6,
            }}
          >
            {submitting ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3500}
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


