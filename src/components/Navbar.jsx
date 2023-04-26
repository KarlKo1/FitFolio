import React from "react";
import { Link } from "react-router-dom";
import { Stack, IconButton, useTheme, Typography } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode } from "../state";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      zIndex="9999"
      position="absolute"
      width="100%"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        pt: {
          sm: "32px",
          xs: "20px",
        },
        px: {
          lg: "20px",
          xs: "0",
        },
      }}
    >
      <Link to="/" style={{ display: "inherit" }}>
        <Typography id="logo" sx={{ color: theme.palette.secondary[900] }}>
          FITFOLIO
        </Typography>
      </Link>
      <Stack
        direction="row"
        fontSize="24px"
        alignItems="flex-end"
        sx={{ gap: { lg: "40px", xs: "20px" } }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: theme.palette.secondary[900],
            borderBottom: "3px solid",
            borderColor: theme.palette.secondary[900],
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: theme.palette.secondary[900],
          }}
        >
          Exercises
        </a>
      </Stack>
      <IconButton onClick={() => dispatch(setMode())}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlined
            sx={{ fontSize: "25px", color: theme.palette.secondary[600] }}
          />
        ) : (
          <LightModeOutlined
            sx={{ fontSize: "25px", color: theme.palette.secondary[600] }}
          />
        )}
      </IconButton>
    </Stack>
  );
};

export default Navbar;
