import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography, useTheme } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  const theme = useTheme();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Link
      style={{
        borderTop: "4px solid",
        borderColor: theme.palette.secondary[500],
      }}
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
      onClick={handleClick}
    >
      <Typography
        color="#000"
        fontWeight="bold"
        pl="5px"
        pr="5px"
        textTransform="capitalize"
        textAlign="center"
        sx={{
          mt: { lg: "11px", xs: "5px" },
          fontSize: theme.palette.typography.h6,
        }}
      >
        {exercise.name}
      </Typography>
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
            color: theme.palette.primary[100],
            background: theme.palette.secondary[500],
            borderRadius: "4px",
            textTransform: "capitalize",
            flexWrap: "wrap",
            width: "fit-content",
            fontSize: theme.palette.typography.h6,
            "&:hover": {
              backgroundColor: theme.palette.secondary[200],
            },
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: { md: "20px", xs: "5px" },
            mr: { md: "20px", xs: "5px" },
            color: theme.palette.primary[100],
            background: theme.palette.secondary[500],
            borderRadius: "4px",
            textTransform: "capitalize",
            flexWrap: "wrap",
            fontSize: theme.palette.typography.h6,
            width: "fit-content",
            "&:hover": {
              backgroundColor: theme.palette.secondary[200],
            },
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
    </Link>
  );
};

export default ExerciseCard;
