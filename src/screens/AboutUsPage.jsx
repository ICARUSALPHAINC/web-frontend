import React from "react";
import { Container, Box, Button, Typography, Paper } from "@mui/material";
function AboutUsPage() {
  const divStyle = {
    margin: "0 auto",
    padding: "0 16px",
    backgroundImage: "url(/about-images/about-icons-background.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url(/about-images/about-us-block.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "70%",
          width: "70%",
          padding: "2rem",
          margin: "2rem",
          // border: '2px solid red',
          // borderRadius: '10px',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "60%",
            maxHeight: "100%",
            width: "50%",
            // padding: '2rem',
            margin: "2rem",
            fontSize: "clamp(8px, 1vw, 24px)",
            // overflow: 'hidden',
            textAlign: "center",
            wordBreak: "break-word",
            // border: '2px solid red',
            // borderRadius: '10px',
          }}
        >
          About Icarus Development
          <br />
          <br />
          Icarus Alpha is a next-generation creative studio dedicated to building groundbreaking digital experiences. We specialize in game development and interactive media, uniting a world-class team of developers, artists, and visionaries under one mission: to redefine what's possible for the
          future.
          <br />
          <br />
          Our gaming division is focused on delivering expansive projects that combine creativity and technical innovation at the highest level. By pushing the limits of storytelling and world-building, we aim to create unforgettable experiences that elevate the future of play.
          <br />
          <br />
          We are also developing a new social media platform designed to reshape how people connect and share in the digital age, where meaningful connections grow naturally from shared interests and creativity. With an emphasis on authenticity and collaboration, it reflects our vision of building
          digital spaces that matter.
          <br />
          <br />
          At Icarus Alpha, our greatest strength is our team—creators, innovators, and leaders who push each other to achieve more. We are building something big, and the opportunity to be a part of it is open to all who share our vision. Together, we are shaping ideas into reality.
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutUsPage;
