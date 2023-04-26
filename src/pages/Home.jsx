import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";

import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import HeroBannerImg from "../assets/images/hero-img.png";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const theme = useTheme();

  return (
    <Box>
      <Box display="flex" height="100vh">
        <Navbar />
        <Box
          bgcolor="red"
          sx={{ backgroundColor: theme.palette.secondary[500], flexGrow: 1 }}
          position="relative"
        >
          <Box
            sx={{ backgroundColor: theme.palette.secondary[500] }}
            borderRadius="50%"
            height="250px"
            width="250px"
            className="circle"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
            <p className="hero-banner-text">
              Work <br />
              <span>It Up</span>
            </p>
          </Box>
          <HeroBanner />
          <span class="bg-circle bg-circle-1"></span>
          <span class="bg-circle bg-circle-3"></span>
        </Box>
        <Box bgcolor="white" sx={{ flexGrow: 2 }}>
          <span class="bg-circle bg-circle-2"></span>
        </Box>
      </Box>
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
