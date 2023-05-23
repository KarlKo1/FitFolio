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
  FormControl,
} from "@mui/material";
import { fitnessOptions, fetchData } from "../utils/fetchData";

const IdealWeight = ({ fitnessCalculatorUrl, StyledTextField }) => {
  const theme = useTheme();
  const [genderValue, setGenderValue] = useState("female");
  const [idealWeight, setIdealWeight] = useState("");
  const [data, setData] = useState({
    gender: {
      value: genderValue,
      touched: false,
    },
    height: {
      value: "",
      touched: false,
    },
  });

  const handleTouch = (input) => {
    setData((prevData) => ({
      ...prevData,
      [input]: {
        ...prevData[input],
        touched: true,
      },
    }));
  };

  const handleBlur = (input) => {
    setData((prevData) => ({
      ...prevData,
      [input]: {
        ...prevData[input],
        touched: false,
      },
    }));
  };

  const handleData = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: {
        ...prevData[id],
        value: value,
      },
    }));
  };

  const handleGenderChange = (e) => {
    const value = e.target.value;
    setGenderValue(value);
    setData((prevData) => ({
      ...prevData,
      gender: {
        ...prevData.gender,
        value: value,
      },
    }));
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    const { gender, height } = data;
    if (gender.value && height.value) {
      const idealWeightData = await fetchData(
        `${fitnessCalculatorUrl}/idealweight?gender=${gender.value}&height=${height.value}`,
        fitnessOptions
      );
      setIdealWeight(idealWeightData.data);
    }
  };

  const getHelperText = (input) => {
    const { value, touched } = data[input];
    switch (input) {
      case "height":
        return touched && (value < 130 || value > 230)
          ? "Height must be between 130 and 230"
          : "";
      default:
        return "";
    }
  };

  return (
    <Box sx={{ height: { md: "40vh", xs: "100%" } }}>
      <FormControl>
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
              sx={{
                fontSize: theme.palette.typography.h2,
              }}
              color={theme.palette.secondary[500]}
              p="0.5rem 0 0.5rem 0"
            >
              Ideal Weight
            </Typography>
            <Typography sx={{ width: { md: "75%", xs: "100%" } }}>
              Your ideal weight is like a superhero outfit - it's unique to you
              and helps you feel your best. Just like how Superman needs the
              right suit to fight crime, your body needs the right weight to
              fight off health issues and keep you feeling great. So let's suit
              up and find your ideal weight, because who doesn't want to feel
              like a superhero?
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
              sx={{
                p: { md: "2rem" },
              }}
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
                <FormControlLabel
                  control={<Radio />}
                  label="Male"
                  value="male"
                />
              </RadioGroup>
              <StyledTextField
                id="height"
                label="Height cm"
                variant="filled"
                type="number"
                required
                value={data.height.value}
                onChange={handleData}
                onFocus={() => handleTouch("height")}
                onBlur={() => handleBlur("height")}
                inputProps={{
                  min: "130",
                  max: "230",
                }}
                helperText={getHelperText("height")}
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
                    Your ideal weight is ~{idealWeight["Robinson"].toFixed()}{" "}
                    kg.
                  </Typography>
                </>
              )}
            </Stack>
          </Box>
        </form>
      </FormControl>
    </Box>
  );
};

export default IdealWeight;
