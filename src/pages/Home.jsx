import React, { useState } from "react";
import {
  Box,
  Typography,
  Link,
  Stack,
  IconButton,
  useTheme,
} from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import HeroBannerImg from "../assets/images/hero-img.png";
import Calculator from "../components/Calculator";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode } from "../state";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box>
      <Box
        display="flex"
        sx={{
          height: { xs: "100%", sm: "95vh" },
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.secondary[500],
            width: { md: "70%", xs: "100%" },
            p: {
              xs: "2rem 2rem 10rem 2rem",
              sm: "0rem 2rem 10rem 2rem",
              lg: "0rem 0rem 0rem 5rem",
              xl: "0rem 0rem 0rem 15rem",
            },
          }}
          position="relative"
        >
          <Box
            className="left-navbar"
            display="flex"
            alignItems="center"
            sx={{
              justifyContent: { md: "space-around", xs: "flex-start" },
              gap: { md: "none", xs: "5rem" },
              pt: { md: "2.5rem", xs: "0" },
            }}
          >
            <Link href="/" underline="none">
              <Typography
                id="logo"
                sx={{
                  color: theme.palette.primary[100],
                  fontSize: theme.palette.typography.logo,
                }}
              >
                FITFOLIO
              </Typography>
            </Link>
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ display: { md: "none", xs: "flex" } }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined
                  sx={{
                    fontSize: "25px",
                    color: theme.palette.primary[100],
                  }}
                />
              ) : (
                <LightModeOutlined
                  sx={{
                    fontSize: "25px",
                    color: theme.palette.primary[100],
                  }}
                />
              )}
            </IconButton>
            <Stack
              direction="row"
              sx={{
                gap: { lg: "60px", xs: "20px" },
                fontSize: theme.palette.typography.logo,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link
                fontSize={theme.palette.typography.nav}
                href="/"
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary[100],
                }}
              >
                Home
              </Link>
              <Link
                fontSize={theme.palette.typography.nav}
                href="#exercises"
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary[100],
                }}
              >
                Exercises
              </Link>
            </Stack>
          </Box>

          <Box
            sx={{
              backgroundColor: theme.palette.secondary[500],
            }}
            borderRadius="50%"
            height="250px"
            width="250px"
            className="circle"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
            <p
              className="hero-banner-text"
              style={{
                color: theme.palette.primary[100],
                fontSize: theme.palette.typography.h2,
              }}
            >
              Work <br />
              <span>It Up</span>
            </p>
          </Box>

          <HeroBanner />
          <span
            className="bg-circle bg-circle-1"
            style={{
              backgroundImage: `radial-gradient(${theme.palette.primary[100]}, ${theme.palette.secondary[500]})`,
            }}
          ></span>
          <span
            className="bg-circle bg-circle-3"
            style={{
              backgroundImage: `radial-gradient(${theme.palette.primary[100]}, ${theme.palette.secondary[500]})`,
            }}
          ></span>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.primary[100],
            width: { md: "30%", xs: "100%" },
            height: { xs: "25vh", sm: "100%" },
          }}
        >
          <Box
            className="right-navbar"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-around"
              pt="2rem"
              width="100%"
              sx={{
                fontSize: theme.palette.typography.logo,
              }}
            >
              <a
                href="#calculator"
                style={{
                  textDecoration: "none",
                  color: theme.palette.secondary[500],
                  border: "3px solid",
                  borderColor: theme.palette.secondary[500],
                  borderRadius: "4px",
                  padding: "0.25rem 1rem 0.25rem 1rem",
                }}
              >
                Calculator
              </a>
              <IconButton
                onClick={() => dispatch(setMode())}
                sx={{ display: { md: "flex" } }}
              >
                {theme.palette.mode === "dark" ? (
                  <DarkModeOutlined
                    sx={{
                      fontSize: "25px",
                      color: theme.palette.secondary[500],
                    }}
                  />
                ) : (
                  <LightModeOutlined
                    sx={{
                      fontSize: "25px",
                      color: theme.palette.secondary[500],
                    }}
                  />
                )}
              </IconButton>
            </Stack>
          </Box>
          <span
            className="bg-circle bg-circle-2"
            style={{
              backgroundImage: `radial-gradient(${theme.palette.primary[100]}, ${theme.palette.secondary[500]})`,
            }}
          ></span>
        </Box>
      </Box>
      <Calculator />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;
