import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Link,
  Typography,
  useTheme,
  IconButton,
  Stack,
} from "@mui/material";

import { exerciseOptions, youtubeOptions, fetchData } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode } from "../state";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExerciseData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Box
        className="navbar"
        display="flex"
        alignItems="center"
        pt="2.5rem"
        sx={{
          justifyContent: { md: "space-around", xs: "flex-start" },
          gap: { md: "none", xs: "5rem" },
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Link href="/" underline="none">
          <Typography id="logo" sx={{ color: theme.palette.secondary[500] }}>
            FITFOLIO
          </Typography>
        </Link>
        <IconButton
          onClick={() => dispatch(setMode())}
          sx={{ display: "flex", order: "2" }}
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
        <Stack
          direction="row"
          sx={{
            gap: { lg: "60px", xs: "20px" },
            fontSize: theme.palette.typography.logo,
            display: { xs: "none", md: "flex" },
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: theme.palette.secondary[500],
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{
              textDecoration: "none",
              color: theme.palette.secondary[500],
            }}
          >
            Exercises
          </a>
        </Stack>
      </Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
