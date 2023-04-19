import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import LogoFull from "../assets/images/Logo-full.png";
import LogoFullDark from "../assets/images/Logo-full-dark.png";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box mt="80px" bgcolor={theme.palette.secondary[500]}>
      <Stack gap="40px" alignItems="200pxcenter" px="40px" pt="24px">
        {theme.palette.mode === "dark" ? (
          <img src={LogoFullDark} alt="logo" width="100px" height="100px" />
        ) : (
          <img src={LogoFull} alt="logo" width="100px" height="100px" />
        )}

        <Typography variant="h5" pb="40px" mt="20px">
          <a href="https://www.freepik.com/free-vector/doodle-health-fitness-icons_1265560.htm#query=gym%20icon&position=0&from_view=search&track=ais">
            Image by dooder
          </a>{" "}
          on Freepik
          <br />
          @Karl Ko
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
