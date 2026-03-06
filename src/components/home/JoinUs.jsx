import React from "react";
import { Box, Typography, Container } from "@mui/material";
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
  /* Start with a brief hold on White Door */
  0%, 10% { background-image: url('${whiteDoor}'); }
  
  /* First rapid glitch */
  11%, 13% { background-image: url('${doorGlitch1}'); }
  14%, 16% { background-image: url('${doorGlitchRect1}'); }
  
  /* Settle on Colored Door */
  17%, 35% { background-image: url('${doorBase}'); }
  
  /* Second glitch burst */
  36%, 38% { background-image: url('${doorGlitch2}'); }
  39%, 41% { background-image: url('${doorGlitchRect2}'); }
  
  /* Flash back to White */
  42%, 55% { background-image: url('${whiteDoor}'); }
  
  /* Third chaotic stutter */
  56%, 58% { background-image: url('${doorGlitch3}'); }
  59%, 61% { background-image: url('${doorGlitchRect3}'); }
  
  /* Settle on Colored Door again */
  62%, 80% { background-image: url('${doorBase}'); }
  
  /* Final glitch before loop resets */
  81%, 83% { background-image: url('${doorGlitch1}'); }
  84%, 86% { background-image: url('${doorGlitchRect2}'); }
  
  /* Resolve to White Door just in time for the 0% reset */
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
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,
          }}
        >
          {/* LEFT SIDE: Text and Button */}
          <Box sx={{ flex: 1, maxWidth: { md: "600px" } }}>
            {/* Removed the extra Typography component that was duplicating "UNLOCK YOUR" */}
            <Box
              component="img"
              src={titleCyan}
              alt="UNLOCK YOUR POTENTIAL"
              sx={{
                width: "100%",
                maxWidth: "500px",
                display: "block",
                mb: 3,
              }}
            />

            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                mb: 5,
                fontSize: "1.1rem",
                lineHeight: 1.6,
                textShadow: "0px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              We are looking for the next generation of creators who want to build something incredible. While the industry locks out new voices and lets senior talent wither, our door is open to everyone.
            </Typography>

            <Box
              component="img"
              src={btnGraphic}
              alt="View Open Roles"
              sx={{
                height: { xs: "50px", md: "60px" },
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out, filter 0.2s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  filter: "drop-shadow(0 0 8px rgba(255, 0, 255, 0.6))",
                },
              }}
            />
          </Box>

          {/* RIGHT SIDE: Animated Glitch Door */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              position: "relative",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            {/* Invisible Spacer: Keeps the container sized correctly */}
            <Box
              component="img"
              src={whiteDoor} 
              alt=""
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                visibility: "hidden", 
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
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default JoinUs;