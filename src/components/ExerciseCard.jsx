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
      <Stack
        direction="row"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap="5px"
      >
        <Button
          sx={{
            ml: { md: "20px", xs: "5px" },
            mr: { md: "20px", xs: "5px" },
            color: "#fff",
            background: theme.palette.secondary[500],
            fontSize: "clamp(0.6rem, 0.3905rem + 0.7163vw, 1.25rem)",
            borderRadius: "20px",
            textTransform: "capitalize",
            flexWrap: "wrap",
            width: { md: "64px", xs: "24px" },
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: { md: "20px", xs: "5px" },
            mr: { md: "20px", xs: "5px" },
            color: "#fff",
            background: "#f3ae18",
            fontSize: "clamp(0.6rem, 0.3905rem + 0.7163vw, 1.25rem)",
            borderRadius: "20px",
            textTransform: "capitalize",
            flexWrap: "wrap",
            width: { md: "64px", xs: "24px" },
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        color="#000"
        fontWeight="bold"
        pl="5px"
        pr="5px"
        textTransform="capitalize"
        textAlign="center"
        sx={{
          mt: { lg: "11px", xs: "5px" },
          fontSize: "clamp(0.6rem, 0.2293rem + 1.2672vw, 1.75rem)",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
