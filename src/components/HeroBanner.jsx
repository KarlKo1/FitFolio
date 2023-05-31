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
        mb={2}
      >
        YOUR COMPREHENSIVE <br /> FITNESS HANDBOOK
      </Typography>
      <Typography
        lineHeight="35px"
        fontWeight="300"
        mb={4}
        sx={{
          color: theme.palette.primary[100],
          fontSize: theme.palette.typography.h3,
        }}
      >
        Check out the calculator for determining vital health metrics <br />{" "}
        like body mass index, ideal weight, and daily caloric intake, <br />
        along with a selection of highly effective exercises.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: theme.palette.primary[100],
          color: theme.palette.primary[500],
          fontWeight: "600",
          "&:hover": {
            backgroundColor: theme.palette.primary[100],
            color: theme.palette.primary[500],
          },
        }}
        href="#exercises"
      >
        Explore Now
      </Button>
    </Box>
  );
};

export default HeroBanner;
