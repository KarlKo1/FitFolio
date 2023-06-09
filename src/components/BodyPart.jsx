import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";

import dumbell from "../assets/icons/dumbell.svg";
import kettlebell from "../assets/icons/kettlebell.svg";
import jumpingRope from "../assets/icons/jumping-ropes.svg";
import abs from "../assets/icons/abs.svg";
import muscle from "../assets/icons/muscle.svg";
import treadmill from "../assets/icons/treadmill.svg";
import heart from "../assets/icons/heart.svg";
import stationaryBicycle from "../assets/icons/stationary-bicycle.svg";
import stopper from "../assets/icons/stopper.svg";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  const theme = useTheme();
  const getGategory = (gategory) => {
    switch (gategory) {
      case "back":
        return kettlebell;
      case "cardio":
        return jumpingRope;
      case "chest":
        return abs;
      case "lower arms":
        return muscle;
      case "lower leg":
        return treadmill;
      case "neck":
        return heart;
      case "shoulders":
        return kettlebell;
      case "upper arms":
        return muscle;
      case "upper leg":
        return stationaryBicycle;
      case "waist":
        return stopper;
      default:
        return dumbell;
    }
  };
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop:
          bodyPart === item
            ? `4px solid ${theme.palette.secondary[500]}`
            : "none",
        borderRadius: "4px",
        backgroundColor: theme.palette.grey[50],
        width: { lg: "280px", xs: "150px" },
        height: { lg: "280px", xs: "150px" },
        cursor: "pointer",
        margin: "0 20px 0 0",
      }}
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img
        src={getGategory(item)}
        alt="equipment"
        style={{ width: "40px", height: "40px" }}
      />

      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#141414"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};
export default BodyPart;
