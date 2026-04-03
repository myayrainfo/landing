import { useEffect, useRef } from "react";

const DEFAULT_POSITION = { x: 48, y: 22 };

export default function MouseGlowBackground() {
  const layerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const layer = layerRef.current;
    if (!layer) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    const setPosition = (x, y, opacity) => {
      layer.style.setProperty("--glow-x", `${x}%`);
      layer.style.setProperty("--glow-y", `${y}%`);
      layer.style.setProperty("--glow-opacity", opacity);
    };

    setPosition(DEFAULT_POSITION.x, DEFAULT_POSITION.y, prefersReducedMotion || coarsePointer ? "0.38" : "0.62");

    if (prefersReducedMotion || coarsePointer) {
      return undefined;
    }

    let rafId = 0;
    let targetX = DEFAULT_POSITION.x;
    let targetY = DEFAULT_POSITION.y;

    const commitPosition = () => {
      setPosition(targetX, targetY, "0.88");
      rafId = 0;
    };

    const handlePointerMove = (event) => {
      targetX = (event.clientX / window.innerWidth) * 100;
      targetY = (event.clientY / window.innerHeight) * 100;

      if (!rafId) {
        rafId = window.requestAnimationFrame(commitPosition);
      }
    };

    const handlePointerLeave = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(() => {
          setPosition(DEFAULT_POSITION.x, DEFAULT_POSITION.y, "0.5");
          rafId = 0;
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return <div ref={layerRef} aria-hidden="true" className="page-atmosphere" />;
}
