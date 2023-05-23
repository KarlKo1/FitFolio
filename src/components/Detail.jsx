import React from "react";
import { Stack, Typography, Box, useTheme } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const theme = useTheme();
  const { bodyPart, name, target, gifUrl, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack>
      <Box
        width="80%"
        margin="0 auto"
        pt="4rem"
        sx={{ height: { md: "75vh" } }}
      >
        <Stack sx={{ gap: "1.5rem" }}>
          <Box sx={{ display: { md: "flex" } }}>
            <Box>
              <Typography
                textTransform="capitalize"
                sx={{
                  fontSize: theme.palette.typography.h2,
                  color: theme.palette.secondary[500],
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  fontSize: theme.palette.typography.h6,
                  width: { md: "75%" },
                  mt: { md: "2rem" },
                }}
              >
                Engaging in regular exercise is beneficial for maintaining
                overall physical strength, and exercises such as{" "}
                <b style={{ color: theme.palette.secondary[500] }}>{name}</b>{" "}
                are recognized as top choices for effectively targeting{" "}
                <b style={{ color: theme.palette.secondary[500] }}>{target}</b>{" "}
                muscles. Incorporating this exercise into your fitness routine
                can contribute to mood enhancement and increased energy levels.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                width: "100%",
                alignItems: "center",
                justifyContent: { xs: "space-evenly", md: "center" },
                gap: "1.5rem",
              }}
            >
              <img
                src={gifUrl}
                alt={name}
                className="detail-image"
                loading="lazy"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { md: "space-evenly" },
              mt: { md: "5rem" },
              mb: "2rem",
            }}
            gap="1.5rem"
          >
            {extraDetail.map((item, index) => (
              <Stack
                key={index}
                direction="row"
                gap="1.5rem"
                alignItems="center"
              >
                <Box
                  sx={{
                    background: "#fff2db",
                    borderRadius: "50%",
                    width: "15vw",
                    maxWidth: "100px",
                    height: "15vw",
                    maxHeight: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={item.icon} alt={bodyPart} className="detail-icon" />
                </Box>
                <Typography
                  textTransform="capitalize"
                  sx={{
                    fontSize: theme.palette.typography.h3,
                  }}
                >
                  {item.name}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Detail;
