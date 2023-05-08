import React from "react";
import { Box } from "@mui/material";
import LogoLight from "../assets/icons/Logo.png";
import LogoDark from "../assets/icons/Logo-dark.png";

const LoadingScreen = ({ isDarkMode }) => {
  const logo = isDarkMode ? LogoDark : LogoLight;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: isDarkMode ? "#333130" : "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        id="loading-screen-logo"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </Box>
  );
};

export default LoadingScreen;
