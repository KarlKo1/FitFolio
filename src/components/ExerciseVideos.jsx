import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

const ExerciseVideos = ({ name, exerciseVideos }) => {
  const theme = useTheme();
  if (!exerciseVideos.length) return "Loading...";
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "200px" } }} p="20px">
      <Typography variant="h3" mb="33px">
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
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "column", xs: "row" },
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
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h6" color={theme.palette.primary[500]}>
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
