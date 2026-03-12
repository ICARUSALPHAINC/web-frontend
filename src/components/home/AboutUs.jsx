import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

// --- Assets ---
// Make sure to move your uploaded images to your assets folder
import Wallpaper from "../../assets/about-us/wallpaper.png";
import Frame from "../../assets/about-us/frame.png";
import TitleImage from "../../assets/about-us/title.png"; // or .png if you converted it
import LearnMoreBtn from "../../assets/about-us/learn-more.png";

const AboutUs = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100%", // Ensures it takes up substantial vertical space
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${Wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: 8, // Vertical padding
        px: 2,
      }}
    >
      {/* Dark Overlay to improve text readability against the busy wallpaper */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(10, 10, 10, 0.6)", // Adjust opacity as needed
          zIndex: 1,
        }}
      />

      {/* Main Content Container (The Frame) */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // Use the provided Frame image as the background for the text box
          backgroundImage: `url(${Frame})`,
          backgroundSize: "100% 100%", // Stretch to fill the container
          backgroundRepeat: "no-repeat",
          // Padding is crucial here to keep text inside the frame's lines
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 10 },
          px: { xs: 4, md: 12 },
        }}
      >
        {/* 1. Title Image */}
        <Box
          component="img"
          src={TitleImage}
          alt="WHAT WE'RE ON..."
          sx={{
            width: "100%",
            maxWidth: "600px",
            mb: 4, // Margin bottom
            paddingY: { xs: 2, md: 0 },
            pl: {xs: 3, md: 0},
            mixBlendMode: "screen",
          }}
        />

        {/* 2. Mission Text */}
        <Typography
          variant="body1"
          align="left"
          sx={{
            color: "#fff",
            fontFamily: '"myriad-pro", sans-serif',
            fontSize: { xs: "1rem", md: "1.5rem" },
            lineHeight: 1.6,
            paddingX: { xs: "2rem", md: "4rem" },
            mb: 3,
            fontWeight: 600,
            textShadow: "0px 2px 4px rgba(0,0,0,0.8)",
            width: "100%", // Ensures it takes full width of the container
            maxWidth: "800px", // Matches the title width for alignment
          }}
        >
          We are on a mission to challenge an industry that has traded its creative soul for corporate vanity. While revolving-door studios brag about their flashy offices and kombucha bars, they’re suffocating under the weight of greed, mass layoffs, and soulless leadership. We are here to change
          the narrative and return to absolute, uncompromised creative chaos.
        </Typography>

        <Typography
          variant="body1"
          align="left" // Changed to left
          sx={{
            color: "#fff",
            fontFamily: '"myriad-pro", sans-serif',
            fontSize: { xs: "1rem", md: "1.5rem" },
            lineHeight: 1.6,
            paddingX: { xs: "2rem", md: "4rem" },
            mb: 5,
            fontWeight: 600,
            textShadow: "0px 2px 4px rgba(0,0,0,0.8)",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          While they are busy planning an exit-strategy, we are coming for their lunch.
        </Typography>

        {/* 3. Learn More Button Image */}
        <Box
          component={Link}
          to="/about"
          sx={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          <Box
            component="img"
            src={LearnMoreBtn}
            alt="Learn More"
            sx={{
              height: { xs: "100px", md: "120px" }, // Responsive height
              width: "auto",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
