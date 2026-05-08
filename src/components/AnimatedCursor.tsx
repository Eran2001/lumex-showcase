import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const CLICKABLES = ["a", "button", "input", "select", "textarea", '[role="button"]'];

export const AnimatedCursor = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current!;
    const ring = ringRef.current!;

    // quickTo gives near-zero overhead per frame
    const dotX  = gsap.quickTo(dot,  "x", { duration: 0.08, ease: "power3.out" });
    const dotY  = gsap.quickTo(dot,  "y", { duration: 0.08, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onEnter = () => {
      gsap.to(dot,  { scale: 0.4, duration: 0.25, ease: "power2.out" });
      gsap.to(ring, { scale: 2.2, opacity: 0.6, duration: 0.3, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(dot,  { scale: 1, duration: 0.25, ease: "power2.out" });
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMove);

    const targets = CLICKABLES.flatMap((sel) => [...document.querySelectorAll(sel)]);
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // re-attach when DOM changes (e.g. accordion opens)
    const observer = new MutationObserver(() => {
      const fresh = CLICKABLES.flatMap((sel) => [...document.querySelectorAll(sel)]);
      fresh.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "oklch(0.51 0.22 285)",
        }}
      />
      {/* ring */}
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "2px solid oklch(0.51 0.22 285 / 55%)",
        }}
      />
    </>
  );
};
