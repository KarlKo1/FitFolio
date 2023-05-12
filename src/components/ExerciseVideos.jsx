import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

const ExerciseVideos = ({ name, exerciseVideos }) => {
  const theme = useTheme();
  if (!exerciseVideos.length) return "Loading...";
  return (
    <Box p="20px">
      <Typography
        variant="h3"
        mb="33px"
        sx={{
          fontSize: "clamp(2rem, 1.0331rem + 3.3058vw, 5rem)",
        }}
      >
        Youtube videos about{" "}
        <span
          style={{
            color: theme.palette.primary[500],
            textTransform: "capitalize",
          }}
        >
          {name}
        </span>
      </Typography>
      <Stack
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: "row",
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            key={index}
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              width="75%"
            />
            <Box>
              <Typography
                variant="h6"
                color={theme.palette.primary[500]}
                sx={{
                  fontSize: "clamp(1rem, 0.3554rem + 2.2039vw, 3rem)",
                }}
              >
                {item.video.title}
              </Typography>
              <Typography variant="h7" color={theme.palette.primary[500]}>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
