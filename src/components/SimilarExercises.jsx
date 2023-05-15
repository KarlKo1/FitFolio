import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "0" },
        position: "relative",
        width: "100%",
        p: "20px",
      }}
    >
      <Typography
        variant="h3"
        mb={5}
        sx={{
          fontSize: "clamp(2rem, 1.0331rem + 3.3058vw, 5rem)",
        }}
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
        variant="h3"
        mb={5}
        sx={{
          fontSize: "clamp(2rem, 1.0331rem + 3.3058vw, 5rem)",
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
  );
};

export default SimilarExercises;
