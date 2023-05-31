import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box mt="80px" bgcolor={theme.palette.secondary[500]}>
      <Stack alignItems="center" pt="2rem">
        <Typography id="logo" sx={{ color: theme.palette.primary[100] }}>
          FITFOLIO
        </Typography>
        <Typography
          sx={{
            fontSize: theme.palette.typography.h6,
            textAlign: "center",
          }}
          pb="1rem"
          mt="1rem"
          color={theme.palette.primary[100]}
        >
          <a href="https://www.freepik.com/free-vector/doodle-health-fitness-icons_1265560.htm#query=gym%20icon&position=0&from_view=search&track=ais">
            Image by dooder
          </a>{" "}
          on Freepik
          <br />
          @2023 KARL KO
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
