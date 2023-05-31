import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  TextField,
  useTheme,
} from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts([...bodyPartsData, "all"]);
    };
    fetchExercisesData();
  }, []);

  const theme = useTheme();
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1750, left: 100, behavior: "smooth" });
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        p: {
          lg: "0 5rem 0 5rem",
          xs: "2rem",
        },
        mt: {
          md: "90px",
          xs: "0",
        },
      }}
      id="exercises"
    >
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          color: theme.palette.secondary[500],
        }}
        mb="50px"
        textAlign="center"
      >
        Find Awesome Exercises
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: {
              fontWeight: "700",
            },
            width: { lg: "800px", xs: "300px" },
            backgroundColor: theme.palette.secondary[900],
            borderRadius: "4px",
          }}
        />
        <Button
          sx={{
            bgcolor: theme.palette.primary[500],
            color: theme.palette.secondary[900],
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            fontWeight: "700",
            height: "56px",
            position: "absolute",
            right: 0,
            borderRadius: "4px",

            "&:hover": {
              color: theme.palette.primary[100],
              backgroundColor: theme.palette.secondary[500],
            },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "80%",
        }}
      >
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
