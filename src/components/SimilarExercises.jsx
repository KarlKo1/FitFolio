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
      <Typography
        sx={{
          fontSize: theme.palette.typography.h5,
        }}
        mt={5}
        textAlign="center"
      >
        Find more exercises for same muscle group or equipment
      </Typography>
      <Box
        width="80%"
        margin="0 auto"
        textAlign="left"
        sx={{ p: { lg: "5rem", xs: "0" } }}
      >
        <Typography
          mt={5}
          sx={{
            fontSize: theme.palette.typography.h4,
            color: theme.palette.secondary[500],
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Muscle group
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
            fontSize: theme.palette.typography.h4,
            color: theme.palette.secondary[500],
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Equipment
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
