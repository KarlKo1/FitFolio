import React, { useState } from "react";
import {
  Box,
  Stack,
  Button,
  Typography,
  useTheme,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { fitnessOptions, fetchData } from "../utils/fetchData";

const IdealWeight = ({ fitnessCalculatorUrl, StyledTextField }) => {
  const theme = useTheme();
  const [genderValue, setGenderValue] = useState("female");
  const [idealWeight, setIdealWeight] = useState("");
  const [data, setData] = useState({
    gender: genderValue,
    height: "",
  });

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleGenderChange = (e) => {
    setGenderValue(e.target.value);
    setData({ ...data, gender: e.target.value });
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    if (data.gender && data.height) {
      const idealWeightData = await fetchData(
        `${fitnessCalculatorUrl}/idealweight?gender=${data.gender}&height=${data.height}`,
        fitnessOptions
      );
      setIdealWeight(idealWeightData.data);
    }
  };

  return (
    <Box sx={{ height: { md: "35vh", xs: "100%" } }}>
      <form
        className="calculator-form"
        style={{ display: "flex", height: "100%" }}
        onSubmit={(e) => handleCalculate(e)}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary[100],
            flex: "2 1 0",
            p: { md: "2rem 0 0 5rem", xs: "2rem" },
          }}
        >
          <Typography
            variant="h2"
            color={theme.palette.secondary[500]}
            p="0.5rem 0 0.5rem 0"
            fontSize="clamp(2rem, 1.436rem + 1.9284vw, 3.75rem)"
          >
            Ideal Weight
          </Typography>
          <Typography sx={{ width: { md: "75%", xs: "100%" } }}>
            Your ideal weight is like a superhero outfit - it's unique to you
            and helps you feel your best. Just like how Superman needs the right
            suit to fight crime, your body needs the right weight to fight off
            health issues and keep you feeling great. So let's suit up and find
            your ideal weight, because who doesn't want to feel like a
            superhero?
          </Typography>
        </Box>
        <Box
          display="flex"
          sx={{
            backgroundColor: theme.palette.secondary[500],
            flex: "1 1 0",
            p: { xs: "2rem", md: "0" },
          }}
          justifyContent="center"
        >
          <Stack
            alignItems="center"
            justifyContent="space-evenly"
            rowGap="0.5rem"
          >
            <Typography
              fontSize="2rem"
              sx={{
                color: theme.palette.primary[100],
              }}
            >
              Calculator
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              onChange={handleGenderChange}
              sx={{
                color: theme.palette.primary[100],
                "& .MuiSvgIcon-root": {
                  fontSize: 16,
                  color: theme.palette.primary[100],
                },
              }}
            >
              <FormControlLabel
                control={<Radio />}
                label="Female"
                value="female"
              />
              <FormControlLabel control={<Radio />} label="Male" value="male" />
            </RadioGroup>
            <StyledTextField
              id="height"
              label="Height cm"
              variant="filled"
              type="number"
              value={data.height}
              onChange={(e) => handleData(e)}
              inputProps={{
                min: "130",
                max: "230",
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary[100],
                color: theme.palette.primary[500],
                "&:hover": {
                  color: theme.palette.primary[100],
                  backgroundColor: theme.palette.secondary[500],
                },
              }}
            >
              Calculate
            </Button>
            {idealWeight && (
              <>
                <Typography>
                  Your ideal weight is ~{idealWeight["Robinson"].toFixed()} kg.
                </Typography>
              </>
            )}
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default IdealWeight;
