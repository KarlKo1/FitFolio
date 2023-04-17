import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography, useTheme } from "@mui/material";
import "react-horizontal-scrolling-menu/dist/styles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExerciseCard from "./ExerciseCard";

//Components and pages
import BodyPart from "./BodyPart";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  const theme = useTheme();
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <ArrowBackIcon
        alt="right-arrow"
        fontSize="large"
        style={{ color: theme.palette.secondary[500] }}
      />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  const theme = useTheme();

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <ArrowForwardIcon
        alt="right-arrow"
        fontSize="large"
        style={{ color: theme.palette.secondary[500] }}
      />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyParts }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        id={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {isBodyParts ? (
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
