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
      alignItems="center"
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
        display: {
          xs: "block",
          lg: "flex",
        },
        p: {
          xs: "2rem",
        },
      }}
    >
      <Link to="/" style={{ display: "inherit" }}>
        <Typography id="logo" sx={{ color: theme.palette.primary[100] }}>
          FITFOLIO
        </Typography>
      </Link>
      <Stack
        direction="row"
        fontSize="clamp(1rem, 0.7679rem + 0.7934vw, 1.72rem)"
        alignItems="center"
        sx={{ gap: { lg: "40px", xs: "20px" } }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: theme.palette.primary[100],
            borderBottom: "3px solid",
            borderColor: theme.palette.primary[100],
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: theme.palette.primary[100],
          }}
        >
          Exercises
        </a>
        <a
          href="#bmi"
          style={{
            textDecoration: "none",
            color: theme.palette.secondary[500],
            border: "3px solid",
            borderColor: theme.palette.secondary[500],
            borderRadius: "5px",
            marginLeft: "25rem",
            padding: "0.25rem 1rem 0.25rem 1rem",
          }}
        >
          BMI
        </a>
      </Stack>
      <IconButton onClick={() => dispatch(setMode())}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlined
            sx={{ fontSize: "25px", color: theme.palette.secondary[500] }}
          />
        ) : (
          <LightModeOutlined
            sx={{ fontSize: "25px", color: theme.palette.secondary[500] }}
          />
        )}
      </IconButton>
    </Stack>
  );
};

export default Navbar;
