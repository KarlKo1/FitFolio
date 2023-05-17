import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box mt="80px" bgcolor={theme.palette.secondary[700]}>
      <Stack alignItems="center">
        <Typography id="logo" sx={{ color: theme.palette.primary[100] }}>
          FITFOLIO
        </Typography>
        <Typography
          variant="h5"
          pb="40px"
          mt="20px"
          color={theme.palette.primary[100]}
        >
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
