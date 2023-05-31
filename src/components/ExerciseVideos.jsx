import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const ExerciseVideos = ({ name, exerciseVideos }) => {
  const theme = useTheme();
  if (!exerciseVideos.length) return "Loading...";
  return (
    <Box p="20px" backgroundColor={theme.palette.secondary[500]}>
      <Box width="80%" margin="0 auto" sx={{ p: { md: "5rem", xs: "0" } }}>
        <Typography
          sx={{
            fontSize: theme.palette.typography.h5,
          }}
          mb="33px"
          color={theme.palette.primary[100]}
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
          alignItems="center"
          sx={{
            flexDirection: { md: "row", xs: "column" },
            gap: "1.5rem",
          }}
        >
          {exerciseVideos?.slice(0, 3).map((item, index) => (
            <Box
              backgroundColor={theme.palette.primary[100]}
              display="flex"
              flexDirection="column"
              alignItems="center"
              borderRadius="20px"
              key={index}
              sx={{
                width: { md: "300px", xs: "250px" },
                height: { md: "400px", xs: "300px" },
              }}
            >
              <a
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
                style={{ position: "relative" }}
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  width="100%"
                  style={{
                    borderRadius: "20px 20px 0 0",
                  }}
                />
                <PlayArrowIcon
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    margin: "auto",
                    fontSize: 85,
                    color: theme.palette.secondary[500],
                  }}
                />
              </a>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p="1rem"
                height="100%"
              >
                <Typography
                  sx={{
                    fontSize: theme.palette.typography.h3,
                  }}
                  color={theme.palette.primary[500]}
                >
                  {item.video.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: theme.palette.typography.h3,
                  }}
                  color={theme.palette.primary[500]}
                >
                  {item.video.channelName}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ExerciseVideos;
