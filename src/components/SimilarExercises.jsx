import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "0" },
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        width="80%"
        margin="0 auto"
        textAlign="center"
        sx={{ p: { lg: "5rem", xs: "0" } }}
      >
        <Typography
          sx={{
            fontSize: theme.palette.typography.h5,
          }}
          mt={5}
        >
          Exercises that target the same muscle group
        </Typography>
        <Stack direction="column" sx={{ position: "relative", width: "100%" }}>
          {targetMuscleExercises.length ? (
            <HorizontalScrollbar data={targetMuscleExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
        <Typography
          mt={5}
          sx={{
            fontSize: theme.palette.typography.h5,
          }}
        >
          Exercises that use the same equipment
        </Typography>
        <Stack direction="column" sx={{ position: "relative", width: "100%" }}>
          {equipmentExercises.length ? (
            <HorizontalScrollbar data={equipmentExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default SimilarExercises;
