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

const DailyColories = ({ fitnessCalculatorUrl, StyledTextField }) => {
  const theme = useTheme();
  const [genderValue, setGenderValue] = useState("female");
  const [levelValue, setLevelValue] = useState("level_1");
  const [dailyCalories, setDailyCalories] = useState("");
  const [data, setData] = useState({
    age: {
      value: "",
      touched: false,
    },
    gender: {
      value: genderValue,
      touched: false,
    },
    weight: {
      value: "",
      touched: false,
    },
    height: {
      value: "",
      touched: false,
    },
    level: {
      value: levelValue,
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

  const handleLevelChange = (e) => {
    const value = e.target.value;
    setLevelValue(value);
    setData((prevData) => ({
      ...prevData,
      level: {
        ...prevData.level,
        value: value,
      },
    }));
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    const { age, gender, weight, height, level } = data;

    if (
      age.value &&
      gender.value &&
      weight.value &&
      height.value &&
      level.value
    ) {
      const caloriesData = await fetchData(
        `${fitnessCalculatorUrl}/dailycalorie?age=${age.value}&gender=${gender.value}&weight=${weight.value}&height=${height.value}&activitylevel=${level.value}`,
        fitnessOptions
      );
      setDailyCalories(caloriesData.data);
    }
  };
  const getHelperText = (input) => {
    const { value, touched } = data[input];
    switch (input) {
      case "age":
        return touched && (value < 1 || value > 80)
          ? "Age must be between 1 and 80"
          : "";
      case "weight":
        return touched && (value < 40 || value > 160)
          ? "Weight must be between 40 and 160"
          : "";
      case "height":
        return touched && (value < 130 || value > 230)
          ? "Height must be between 130 and 230"
          : "";
      default:
        return "";
    }
  };
  return (
    <Box sx={{ height: { md: "75vh", xs: "100%" } }}>
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
              variant="h2"
              color={theme.palette.secondary[500]}
              p="0.5rem 0 0.5rem 0"
              fontSize="clamp(2rem, 1.436rem + 1.9284vw, 3.75rem)"
            >
              Daily Calory Requirement
            </Typography>
            <Typography sx={{ width: { md: "75%", xs: "100%" } }}>
              Calories are your body's fuel. Your daily calorie requirement
              depends on your age, gender, weight, and activity level. Use an
              online calculator or consult with a registered dietitian to find
              your number. Eating the right amount of calories is important for
              maintaining a healthy weight and giving your body energy. Focus on
              quality as well as quantity by eating a variety of nutritious
              foods.
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
                id="age"
                label="Age"
                variant="filled"
                type="number"
                required
                value={data.age.value}
                onChange={(e) => handleData(e)}
                onFocus={() => handleTouch("age")}
                onBlur={() => handleBlur("age")}
                inputProps={{
                  min: "1",
                  max: "80",
                }}
                helperText={getHelperText("age")}
              />
              <StyledTextField
                id="weight"
                label="Weight kg"
                variant="filled"
                type="number"
                required
                value={data.weight.value}
                onChange={(e) => handleData(e)}
                onFocus={() => handleTouch("weight")}
                onBlur={() => handleBlur("weight")}
                inputProps={{
                  min: "40",
                  max: "160",
                }}
                helperText={getHelperText("weight")}
              />
              <StyledTextField
                id="height"
                label="Height cm"
                variant="filled"
                type="number"
                required
                value={data.height.value}
                onChange={(e) => handleData(e)}
                onFocus={() => handleTouch("height")}
                onBlur={() => handleBlur("height")}
                inputProps={{
                  min: "130",
                  max: "230",
                }}
                helperText={getHelperText("height")}
              />
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="level_1"
                name="level"
                onChange={handleLevelChange}
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
                  label="Level 1 - Little or no exercise"
                  value="level_1"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Level 2 - Exercise 1-3 times/week"
                  value="level_2"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Level 3 - Exercise 4-5 times/week"
                  value="level_3"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Level 4 - Daily exercise"
                  value="level_4"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Level 5 - Intense exercise 6-7 times/week"
                  value="level_5"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Level 6 - Intense exercise daily or physical job"
                  value="level_6"
                />
              </RadioGroup>
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
              {dailyCalories && (
                <>
                  <Typography>
                    Your daily calory requirement to maintain weight is{" "}
                    {dailyCalories.goals["maintain weight"].toFixed()} calories.
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

export default DailyColories;
