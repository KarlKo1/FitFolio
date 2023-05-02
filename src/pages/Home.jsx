import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";

import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import HeroBannerImg from "../assets/images/hero-img.png";
import Calculator from "../components/Calculator";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const theme = useTheme();

  return (
    <Box>
      <Box display="flex" height="100vh">
        <Navbar />
        <Box
          sx={{ backgroundColor: theme.palette.secondary[500], flex: "2 1 0" }}
          position="relative"
        >
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
              style={{ color: theme.palette.primary[100] }}
            >
              Work <br />
              <span>It Up</span>
            </p>
          </Box>
          <HeroBanner />
          <span className="bg-circle bg-circle-1"></span>
          <span className="bg-circle bg-circle-3"></span>
        </Box>
        <Box
          sx={{ backgroundColor: theme.palette.primary[100], flex: "1 1 0" }}
        >
          <span
            className="bg-circle bg-circle-2"
            sx={{
              backgroundColor: theme.palette.primary[900],
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
