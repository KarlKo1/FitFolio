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

const DailyColories = ({ fitnessCalculatorUrl, StyledTextField }) => {
  const theme = useTheme();
  const [genderValue, setGenderValue] = useState("female");
  const [levelValue, setLevelValue] = useState("level_1");
  const [dailyCalories, setDailyCalories] = useState("");
  const [data, setData] = useState({
    age: "",
    gender: genderValue,
    weight: "",
    height: "",
    level: levelValue,
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

  const handleLevelChange = (e) => {
    setLevelValue(e.target.value);
    setData({ ...data, level: e.target.value });
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    if (data.age && data.gender && data.weight && data.height && data.level) {
      const caloriesData = await fetchData(
        `${fitnessCalculatorUrl}/dailycalorie?age=${data.age}&gender=${data.gender}&weight=${data.weight}&height=${data.height}&activitylevel=${data.level}`,
        fitnessOptions
      );
      setDailyCalories(caloriesData.data);
    }
  };
  return (
    <Box sx={{ height: { md: "75vh", xs: "100%" } }}>
      <form
        className="calculator-form"
        style={{ display: "flex", height: "100%" }}
        onSubmit={(e) => handleCalculate(e)}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary[100],
            flex: "2 1 0",
            p: { md: "2rem 0 0 5rem", xs: "0 0 0 1rem" },
          }}
        >
          <Typography
            variant="h2"
            color={theme.palette.secondary[500]}
            p="0.5rem 0 0.5rem 0"
          >
            Daily Calory Requirement
          </Typography>
          <Typography sx={{ width: { md: "75%", xs: "100%" } }}>
            Calories are your body's fuel. Your daily calorie requirement
            depends on your age, gender, weight, and activity level. Use an
            online calculator or consult with a registered dietitian to find
            your number. Eating the right amount of calories is important for
            maintaining a healthy weight and giving your body energy. Focus on
            quality as well as quantity by eating a variety of nutritious foods.
          </Typography>
        </Box>
        <Box
          display="flex"
          sx={{ backgroundColor: theme.palette.secondary[500], flex: "1 1 0" }}
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
              id="age"
              label="Age"
              variant="filled"
              type="number"
              value={data.age}
              onChange={(e) => handleData(e)}
            />
            <StyledTextField
              id="weight"
              label="Weight kg"
              variant="filled"
              type="number"
              value={data.weight}
              onChange={(e) => handleData(e)}
            />
            <StyledTextField
              id="height"
              label="Height cm"
              variant="filled"
              type="number"
              value={data.height}
              onChange={(e) => handleData(e)}
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
            <Button type="submit" variant="text">
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
    </Box>
  );
};

export default DailyColories;
