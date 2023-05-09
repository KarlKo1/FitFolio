import React from "react";
import { Box, Stack, Typography, Button, useTheme } from "@mui/material";

const HeroBanner = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: { lg: "10rem", xs: "1.5rem" },
      }}
      position="relative"
    >
      <Typography
        sx={{ color: theme.palette.primary[100], display: { xs: "none" } }}
        fontWeight="600"
        fontSize="26px"
      >
        FitFolio
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "24px" },
          color: theme.palette.primary[100],
        }}
        mb="23px"
        mt="30px"
      >
        Your Comprehensive <br /> Fitness Handbook
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={2}
        sx={{ color: theme.palette.primary[100] }}
      >
        Check out the most effective exerices
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: theme.palette.secondary[900],
          color: theme.palette.secondary[500],
        }}
        href="#exercises"
      >
        Explore Now
      </Button>
      <Typography
        fontWeight="600"
        fontSize="200px"
        className="hero-text"
        sx={{
          opacity: 0.1,
          color: theme.palette.primary[100],
        }}
      >
        Exercise
      </Typography>
    </Box>
  );
};

export default HeroBanner;
