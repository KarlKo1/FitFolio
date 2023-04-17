import React from "react";
import { Box, Stack, Typography, Button, useTheme } from "@mui/material";

import HeroBannerImg from "../assets/images/banner.png";
const HeroBanner = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="2px"
    >
      <Typography
        sx={{ color: theme.palette.secondary[600] }}
        fontWeight="600"
        fontSize="26px"
      >
        FitFolio
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "38px" } }}
        mb="23px"
        mt="30px"
      >
        Your Comprehensive <br /> Fitness Handbook
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={2}>
        Check out the most effective exerices
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: theme.palette.secondary[600],
          color: theme.palette.secondary[900],
        }}
        href="#exercises"
      >
        Explore Now
      </Button>
      <Typography
        fontWeight="600"
        fontSize="200px"
        sx={{
          opacity: 0.2,
          color: theme.palette.secondary[600],
          display: { lg: "block", sx: "none" },
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
