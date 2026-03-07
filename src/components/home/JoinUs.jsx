import React from "react";
import { Box, Typography, Container} from "@mui/material";
import {Link} from "react-router-dom";
import { keyframes } from "@mui/system";

// --- Asset Imports ---
import bgGraphic from "../../assets/join-us/background.png";
import titleCyan from "../../assets/join-us/title.png";
import btnGraphic from "../../assets/join-us/view_open_roles.png";
import whiteDoor from "../../assets/join-us/white_door.png";
import doorBase from "../../assets/join-us/color_door.png";
import doorGlitch1 from "../../assets/join-us/glitch_door1.png";
import doorGlitchRect1 from "../../assets/join-us/glitch_door_rect1.png";
import doorGlitch2 from "../../assets/join-us/glitch_door2.png";
import doorGlitchRect2 from "../../assets/join-us/glitch_door_rect2.png";
import doorGlitch3 from "../../assets/join-us/glitch_door3.png";
import doorGlitchRect3 from "../../assets/join-us/glitch_door_rect3.png";

// --- Glitch Animation Keyframes ---
const glitchSequence = keyframes`
  0%, 10% { background-image: url('${whiteDoor}'); }
  11%, 13% { background-image: url('${doorGlitch1}'); }
  14%, 16% { background-image: url('${doorGlitchRect1}'); }
  17%, 35% { background-image: url('${doorBase}'); }
  36%, 38% { background-image: url('${doorGlitch2}'); }
  39%, 41% { background-image: url('${doorGlitchRect2}'); }
  42%, 55% { background-image: url('${whiteDoor}'); }
  56%, 58% { background-image: url('${doorGlitch3}'); }
  59%, 61% { background-image: url('${doorGlitchRect3}'); }
  62%, 80% { background-image: url('${doorBase}'); }
  81%, 83% { background-image: url('${doorGlitch1}'); }
  84%, 86% { background-image: url('${doorGlitchRect2}'); }
  87%, 100% { background-image: url('${whiteDoor}'); }
`;

function JoinUs() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#000000",
        width: "100%",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
      }}
    >
      {/* 1. BACKGROUND LAYER */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('${bgGraphic}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          opacity: 0.8,
        }}
      />

      {/* 2. CONTENT LAYER */}
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            // Changed from space-between to center to pull elements inward
            justifyContent: "center", 
            // Controlled gap ensures they don't overlap when pulled to the center
            gap: { xs: 6, md: 8, lg: 12 }, 
          }}
        >
          {/* LEFT SIDE: Text and Button */}
          <Box 
            sx={{ 
              width: "100%", 
              // Removed flex: 1. Uses explicit maxWidths so it doesn't push to edges
              maxWidth: { xs: "100%", md: "600px", lg: "650px" }, 
              display: "flex",
              flexDirection: "column",
              // Centers text visually on mobile, aligns left on desktop
              alignItems: { xs: "center", md: "flex-start" }, 
              textAlign: { xs: "center", md: "left" }
            }}
          >
            <Box
              component="img"
              src={titleCyan}
              alt="UNLOCK YOUR POTENTIAL"
              sx={{
                width: "100%",
                maxWidth: "650px",
                display: "block",
                mb: 4,
              }}
            />

            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                mb: 6,
                fontSize: { xs: "1.2rem", md: "1.6rem" },
                lineHeight: 1.6,
                textShadow: "0px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              We are looking for the next generation of creators who want to build something incredible. While the industry locks out new voices and lets senior talent wither, our door is open to everyone.
            </Typography>

            {/* View Open Roles Button */}
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <Box
                component={Link}
                to="/careers"
                sx={{
                display: "block", // Ensure the link behaves like a container
                width: "100%",
                maxWidth: "350px",
                textDecoration: "none", // Remove default link styling
                transition: "transform 0.2s ease-in-out, filter 0.2s ease",
                "&:hover": {
                    transform: "scale(1.05)",
                    filter: "drop-shadow(0 0 8px rgba(255, 0, 255, 0.6))",
                },
                }}
              >
                <Box
                component="img"
                src={btnGraphic}
                alt="View Open Roles"
                sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    cursor: "pointer",
                }}
                />
              </Box>
            </Box>
          </Box>

          {/* RIGHT SIDE: Animated Glitch Door */}
          <Box
            sx={{
              width: "100%",
              // Slightly adjusted bounds to ensure they sit nicely in the middle
              maxWidth: { xs: "350px", md: "450px", lg: "550px" }, 
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Invisible Spacer */}
            <Box
              component="img"
              src={whiteDoor} 
              alt=""
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                opacity: 0,             /* CHANGED from visibility: "hidden" */
                pointerEvents: "none",  /* ADDED so it doesn't block taps */
              }}
            />

            {/* Single Layer Animation */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                animation: `${glitchSequence} 4s infinite linear`,
                transform: "translateZ(0)",       /* ADDED for iOS GPU acceleration */
                willChange: "background-image",   /* ADDED to warn browser of changes */
              }}
            />
          </Box>
        </Box>
      </Container>
      {/* 3. THE WEBKIT PRELOADER */}
      {/* Forces iOS to cache these images in memory so the animation loop doesn't blank out */}
      <Box
        sx={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
          visibility: "hidden",
          zIndex: -1,
        }}
      >
        <img src={doorBase} alt="" />
        <img src={doorGlitch1} alt="" />
        <img src={doorGlitchRect1} alt="" />
        <img src={doorGlitch2} alt="" />
        <img src={doorGlitchRect2} alt="" />
        <img src={doorGlitch3} alt="" />
        <img src={doorGlitchRect3} alt="" />
      </Box>
    </Box>
  );
}

export default JoinUs;