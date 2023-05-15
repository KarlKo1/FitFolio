import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

const ExerciseVideos = ({ name, exerciseVideos }) => {
  const theme = useTheme();
  if (!exerciseVideos.length) return "Loading...";
  return (
    <Box p="20px" backgroundColor={theme.palette.secondary[500]}>
      <Typography
        variant="h3"
        mb="33px"
        color={theme.palette.primary[100]}
        sx={{
          fontSize: "clamp(2rem, 1.0331rem + 3.3058vw, 5rem)",
        }}
      >
        Youtube videos about{" "}
        <span
          style={{
            color: theme.palette.primary[100],
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
          gap: "1.5rem",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <Box
            backgroundColor={theme.palette.primary[100]}
            display="flex"
            flexDirection="column"
            alignItems="center"
            borderRadius="20px"
          >
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
                width="100%"
                style={{ borderRadius: "20px 20px 0 0" }}
              />
            </a>

            <Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p="1rem"
              >
                <Typography
                  variant="h6"
                  color={theme.palette.primary[500]}
                  sx={{
                    fontSize: "clamp(1rem, 0.3554rem + 2.2039vw, 3rem)",
                  }}
                >
                  {item.video.title}
                </Typography>
                <Typography
                  variant="h7"
                  color={theme.palette.primary[500]}
                  sx={{
                    fontSize: "clamp(1rem, 0.3554rem + 2.2039vw, 3rem)",
                  }}
                >
                  {item.video.channelName}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
