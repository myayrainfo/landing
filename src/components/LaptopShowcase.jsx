import React, { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const LaptopShowcase = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.9;
      const end = windowHeight * 0.1;
      let progress = 0;

      if (rect.top < start) {
        progress = (start - rect.top) / (start - end);
        progress = Math.min(Math.max(progress, 0), 1);
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotateX = 28 - 28 * scrollProgress;
  const rotateY = -15 + 15 * scrollProgress;
  const rotateZ = 4 - 4 * scrollProgress;
  const scale = 0.75 + 0.25 * scrollProgress;
  const translateY = 50 - 50 * scrollProgress;

  const laptopStyle = {
    transform: `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale}) translateY(${translateY}px)`,
    transition: "transform 0.08s ease-out",
    willChange: "transform",
  };

  return (
    <section
      ref={sectionRef}
      style={{
        background:
          "radial-gradient(circle at 18% 20%, rgba(13,148,136,0.12), transparent 20%), radial-gradient(circle at 78% 18%, rgba(0,74,153,0.14), transparent 22%), radial-gradient(circle at 50% 72%, rgba(71,85,105,0.14), transparent 24%), linear-gradient(180deg, #0B1220 0%, #0F172A 60%, #0B1220 100%)",
        padding: "100px 20px 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(0,74,153,0.2) 0%, rgba(13,148,136,0.12) 30%, rgba(71,85,105,0.1) 45%, transparent 72%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 10 }}>
        <span
          style={{
            display: "inline-block",
            padding: "6px 18px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, rgba(0,74,153,0.16), rgba(13,148,136,0.14))",
            color: "#8FE3DB",
            border: "1px solid rgba(13,148,136,0.28)",
            fontSize: "13px",
            fontWeight: 500,
            marginBottom: "18px",
            boxShadow: "0 0 24px rgba(0,74,153,0.18)",
          }}
        >
          Powerful Dashboard
        </span>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 58px)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "16px",
            fontFamily: "Sora, sans-serif",
            lineHeight: 1.15,
          }}
        >
          Everything in{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #004A99 0%, #475569 45%, #0D9488 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            One Place
          </span>
        </h2>
        <p style={{ color: "#94a3b8", fontSize: "17px", maxWidth: "500px", margin: "0 auto" }}>
          A unified dashboard that gives your university complete visibility and control
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 10 }}>
        <div style={laptopStyle}>
          <div style={{ width: "900px", maxWidth: "90vw", margin: "0 auto" }}>
            <div
              style={{
                background: "linear-gradient(180deg, #1A2739 0%, #111C2D 100%)",
                border: "14px solid #243447",
                borderBottom: "none",
                borderRadius: "20px 20px 0 0",
                overflow: "hidden",
                boxShadow:
                  "0 0 0 1px rgba(0,74,153,0.28), 0 0 0 2px rgba(13,148,136,0.08), 0 40px 100px rgba(0,0,0,0.9), 0 0 80px rgba(0,74,153,0.16), inset 0 0 80px rgba(0,74,153,0.05)",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(180deg, #172438, #0F172A)",
                  padding: "8px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #004A99, #0D9488)",
                    boxShadow: "0 0 10px rgba(0,74,153,0.45)",
                  }}
                />
              </div>

              <div
                style={{
                  height: "480px",
                  background: "linear-gradient(180deg, #142032 0%, #0F172A 100%)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    transform: "translateZ(0)",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      aspectRatio: "16 / 9",
                      height: "100%",
                    }}
                  >
                    <video
                      className="elementor-video"
                      src="https://campx.in/wp-content/uploads/2023/07/laptop-opener-video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controlsList="nodownload"
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        border: "none",
                        backgroundColor: "#000",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(180deg, #31455D, #182335)",
                height: "22px",
                borderRadius: "0 0 6px 6px",
                position: "relative",
                boxShadow: "0 8px 20px rgba(0,74,153,0.12)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "80px",
                  height: "6px",
                  borderRadius: "3px",
                  background: "linear-gradient(90deg, #0F172A, #2B4158, #0F172A)",
                }}
              />
            </div>

            <div
              style={{
                background: "linear-gradient(180deg, #223247, #0F172A)",
                height: "12px",
                borderRadius: "0 0 60px 60px",
                width: "96%",
                margin: "0 auto",
              }}
            />

            <div
              style={{
                height: "20px",
                marginTop: "4px",
                background:
                  "radial-gradient(ellipse, rgba(0,74,153,0.26) 0%, rgba(71,85,105,0.18) 32%, rgba(13,148,136,0.14) 52%, transparent 72%)",
                borderRadius: "50%",
                filter: "blur(10px)",
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "60px", position: "relative", zIndex: 10 }}>
        <RouterLink
          to="/dashboard/cgu/login"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #004A99 0%, #475569 45%, #0D9488 100%)",
            color: "#ffffff",
            border: "none",
            padding: "14px 36px",
            borderRadius: "12px",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 0 34px rgba(0,74,153,0.32)",
            fontFamily: "Sora, sans-serif",
          }}
        >
          Get Started Free →
        </RouterLink>
      </div>
    </section>
  );
};

export default LaptopShowcase;
