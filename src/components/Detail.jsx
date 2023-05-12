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
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          variant="h3"
          textTransform="capitalize"
          sx={{ color: theme.palette.secondary[500] }}
        >
          {name}
        </Typography>
        <Typography>
          Engaging in regular exercise is beneficial for maintaining overall
          physical strength, and exercises such as <b>{name}</b> are recognized
          as top choices for effectively targeting <b>{target}</b> muscles.
          Incorporating this exercise into your fitness routine can contribute
          to mood enhancement and increased energy levels.
        </Typography>
        <img src={gifUrl} alt={name} className="detail-image" loading="lazy" />
        {extraDetail.map((item, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
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
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
