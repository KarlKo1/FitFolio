import React from "react";
import { Link } from "react-router-dom";
import { Stack, IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import Logo from "../assets/images/Logo.png";
import { setMode } from "../state";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: theme.palette.secondary[600],
            borderBottom: "3px solid",
            borderColor: theme.palette.secondary[600],
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: theme.palette.secondary[600],
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
