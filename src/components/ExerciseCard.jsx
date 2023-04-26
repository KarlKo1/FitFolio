import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography, useTheme } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  const theme = useTheme();
  return (
    <Link
      style={{
        borderTop: "4px solid",
        borderColor: theme.palette.secondary[500],
      }}
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "20px",
            color: "#fff",
            background: theme.palette.secondary[500],
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "20px",
            mr: "20px",
            color: "#fff",
            background: "#f3ae18",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
        sx={{ mt: { lg: "11px", xs: "0" } }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
