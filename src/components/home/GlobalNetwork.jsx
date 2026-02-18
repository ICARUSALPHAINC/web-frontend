import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";

// --- Assets ---
// Update these paths if your folder structure is different
import mapBase from "../../assets/global-network/map-base.png";
import lights1 from "../../assets/global-network/lights-1.png";
import lights2 from "../../assets/global-network/lights-2.png";

// --- SVG Icons (Replaces PNGs for better quality) ---
const PeopleIcon = () => (
  <svg width="45" height="45" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="45" height="45" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
  </svg>
);

// --- Number Counter Component ---
const AnimatedNumber = ({ end, duration, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, startAnimation]);

  return <>{count}</>;
};

// --- Main Component ---
const GlobalNetwork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "#0a0a0a",
        lineHeight: 0, // Removes phantom space below image
        overflow: "hidden",
      }}
    >
      {/* ================= BACKGROUND LAYER ================= */}
      {/* The base image dictates the height of the entire component naturally */}
      <Box
        component="img"
        src={mapBase}
        alt="World Map"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      {/* Static Lights Layer */}
      <Box
        component="img"
        src={lights1}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          mixBlendMode: "screen",
        }}
      />

      {/* Pulsing Lights Layer */}
      <Box
        component="img"
        src={lights2}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          mixBlendMode: "screen",
          animation: "pulseLights 2s infinite ease-in-out",
        }}
      />

      {/* ================= CONTENT OVERLAY LAYER ================= */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Pushes Header up and Stats down
          paddingY: { xs: 2, md: 6 }, // Adjusts vertical spacing from edges
          pointerEvents: "none", // Lets clicks pass through to map if needed
        }}
      >
        {/* TOP: Header */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            textAlign: "center",
            color: "white",
            fontFamily: '"Roboto Condensed", sans-serif',
            letterSpacing: "1px",
            fontSize: { xs: "1.2rem", md: "2.125rem" }, // Responsive font size
            textShadow: "0px 2px 4px rgba(0,0,0,0.8)", // Legibility against map stars
          }}
        >
          A Global Network - Uniting Creators Worldwide
        </Typography>

        {/* BOTTOM: Statistics */}
        <Grid container justifyContent="center" spacing={8} sx={{ color: "white" }}>
          {/* Left Stat */}
          <Grid item sx={{ textAlign: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <PeopleIcon />
              <Typography variant="h3" sx={{ fontWeight: "900", mt: 1, lineHeight: 1 }}>
                <AnimatedNumber end={200} duration={2000} startAnimation={isVisible} />+
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: "bold", textTransform: "uppercase", color: "#ccc", fontSize: "0.75rem", mt: 0.5 }}>
                Team Members
              </Typography>
            </Box>
          </Grid>

          {/* Right Stat */}
          <Grid item sx={{ textAlign: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <GlobeIcon />
              <Typography variant="h3" sx={{ fontWeight: "900", mt: 1, lineHeight: 1 }}>
                <AnimatedNumber end={20} duration={2000} startAnimation={isVisible} />+
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: "bold", textTransform: "uppercase", color: "#ccc", fontSize: "0.75rem", mt: 0.5 }}>
                Countries
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Keyframe Styles */}
      <style>
        {`
          @keyframes pulseLights {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
        `}
      </style>
    </Box>
  );
};

export default GlobalNetwork;
