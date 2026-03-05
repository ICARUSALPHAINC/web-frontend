import React from "react";
import { Box, Typography } from "@mui/material";
function AboutUsPage() {

  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: "url(/about-images/about-icons-background.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <Box
          component="img"
          src="/about-images/about-us-block.webp"
          sx={{
            display: "block",
            width: "min(800px, 70vw)",
            height: "min(800px, 70vh)",
            // border: "2px solid green",
            // borderRadius: "10px",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: "2px solid blue",
            // borderRadius: "10px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: "clamp(14px, 1vw, 24px)",
              textAlign: "center",
              wordBreak: "break-word",
              maxHeight: "100%",
              maxWidth: "90%",
              // border: "2px solid red",
              // borderRadius: "10px",
            }}
          >
            Redefining the Future of Play
            <br />
            <br />
            Icarus Alpha is a next-generation game studio dedicated to building groundbreaking digital experiences.
            We unite a world-class team of developers, artists, and visionaries under one mission: to redefine what’s possible for interactive entertainment.
            <br />
            <br />
            Our studio focuses on delivering projects that combine creativity and technical innovation at the highest level.
            By pushing the limits of storytelling and world-building, we aim to create unforgettable experiences that elevate the future of play.
            <br />
            <br />
            At Icarus Alpha, our greatest strength is our team – creators, innovators, and leaders who challenge each other to achieve more.
            We are building something big, and the opportunity is open to all who share our vision.
            <br />
            <br />
            Together, we are shaping ideas into reality.

          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUsPage;
