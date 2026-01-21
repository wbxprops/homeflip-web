import React, { useMemo, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

type ExitDirection = "right" | "left";

type FeatureSection3DProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;

  // Your screenshot (prefer a WebP)
  screenshotSrc: string;
  screenshotAlt?: string;

  // Allows alternating exits per section to avoid “template fatigue”
  exitDirection?: ExitDirection;

  // Optional: adjust how strong the effect is per section
  intensity?: "subtle" | "default" | "strong";

  // Foreground content (your cards, bullets, etc.)
  children?: React.ReactNode;
};

const MotionBox = motion(Box);

function clampIntensity(intensity: FeatureSection3DProps["intensity"]) {
  switch (intensity) {
    case "subtle":
      return {
        enterX: 0,
        exitX: 110,
        enterY: 110,
        exitY: -140,
        rXEnter: 22,
        rXHold: 10,
        rXExit: 18,
        rYEnter: -5,
        rYHold: -1,
        rYExit: 8,
        blurEnter: 8,
        blurExit: 2,
        opHold: 0.85,
      };
    case "strong":
      return {
        enterX: 0,
        exitX: 170,
        enterY: 170,
        exitY: -210,
        rXEnter: 30,
        rXHold: 12,
        rXExit: 26,
        rYEnter: -8,
        rYHold: -2,
        rYExit: 12,
        blurEnter: 12,
        blurExit: 3,
        opHold: 0.92,
      };
    default:
      return {
        enterX: 0,
        exitX: 140,
        enterY: 140,
        exitY: -180,
        rXEnter: 26,
        rXHold: 10,
        rXExit: 24,
        rYEnter: -6,
        rYHold: -1,
        rYExit: 10,
        blurEnter: 10,
        blurExit: 2,
        opHold: 0.9,
      };
  }
}

export default function FeatureSection3D(props: FeatureSection3DProps) {
  const {
    eyebrow,
    title,
    subtitle,
    screenshotSrc,
    screenshotAlt = "",
    exitDirection = "right",
    intensity = "default",
    children,
  } = props;

  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Scroll progress for this section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Enter when section top hits ~70% viewport; exit as it leaves
    offset: ["start 70%", "end 30%"],
  });

  const cfg = useMemo(() => clampIntensity(intensity), [intensity]);
  const dir = exitDirection === "right" ? 1 : -1;

  // 3-keyframe mapping: enter → hold → exit
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [cfg.rXEnter, cfg.rXHold, cfg.rXExit]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [cfg.rYEnter * dir, cfg.rYHold * dir, cfg.rYExit * dir]
  );
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [cfg.enterY, 0, cfg.exitY]
  );
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [cfg.enterX, 0, cfg.exitX * dir]
  );
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.94, 1, 0.97]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.45, 1], [0, 0.75, cfg.opHold, 0.65]);
  const blur = useTransform(
    scrollYProgress,
    [0, 0.25, 0.45, 1],
    [`blur(${cfg.blurEnter}px)`, "blur(2px)", "blur(0px)", `blur(${cfg.blurExit}px)`]
  );

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 14 },
      }}
    >
      {/* Ambient BG */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1100px 600px at 40% 20%, rgba(90,255,210,0.10), rgba(0,0,0,0) 60%)," +
            "radial-gradient(900px 520px at 80% 80%, rgba(120,160,255,0.08), rgba(0,0,0,0) 55%)," +
            "linear-gradient(180deg, rgba(0,0,0,0.30), rgba(0,0,0,0.65))",
          pointerEvents: "none",
        }}
      />

      {/* 3D Screenshot Plane (behind content) */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          display: { xs: "none", md: "block" }, // disable heavy 3D on mobile
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: { md: "min(1100px, 92vw)" },
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          <MotionBox
            sx={{
              position: "relative",
              borderRadius: 4,
              overflow: "hidden",

              // glass “print” treatment
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow:
                "0 35px 120px rgba(0,0,0,0.65), 0 10px 35px rgba(0,0,0,0.45)",
              willChange: "transform, filter, opacity",

              // subtle inner top highlight
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0) 22%)",
                pointerEvents: "none",
                zIndex: 2,
              },

              // slight vignette to keep edges calm
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(120% 90% at 50% 35%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.35) 100%)",
                pointerEvents: "none",
                zIndex: 2,
              },
            }}
            style={{
              rotateX,
              rotateY,
              x: translateX,
              y: translateY,
              scale,
              opacity,
              filter: blur as any,
            }}
          >
            <Box
              component="img"
              src={screenshotSrc}
              alt={screenshotAlt}
              sx={{
                display: "block",
                width: "100%",
                height: "auto",
                transform: "translateZ(0)", // helps keep it crisp
                opacity: 0.95,
              }}
              loading="lazy"
            />
          </MotionBox>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            maxWidth: 720,
            position: "relative",

            // Text scrim (only behind copy)
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0) 100%)",
            borderRadius: 3,
            p: { xs: 2.5, md: 3.5 },
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {eyebrow && (
            <Typography
              sx={{
                textTransform: "uppercase",
                letterSpacing: "0.32em",
                fontSize: 12,
                opacity: 0.78,
                mb: 1,
                color: "rgba(120,255,220,0.85)",
              }}
            >
              {eyebrow}
            </Typography>
          )}

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              mb: 1.5,
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography sx={{ fontSize: 16, opacity: 0.82, lineHeight: 1.7 }}>
              {subtitle}
            </Typography>
          )}
        </Box>

        {/* Foreground feature content */}
        {children && (
          <Box sx={{ mt: { xs: 4, md: 6 }, position: "relative" }}>
            {children}
          </Box>
        )}
      </Container>
    </Box>
  );
}
