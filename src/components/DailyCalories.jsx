import React, { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  useTheme,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { fitnessOptions, fetchData } from "../utils/fetchData";

const DailyColories = () => {
  const theme = useTheme();
  const [genderValue, setGenderValue] = useState("");
  const [data, setData] = useState({
    age: "",
    gender: genderValue,
    weight: "",
    height: "",
    level: "",
  });

  console.log(genderValue);
  console.log(data);
  const [dailyCalories, setDailyCalories] = useState(null);

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleGenderChange = (e) => {
    setGenderValue(e.target.value);
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    if (data.age && data.gender && data.weight && data.height && data.level) {
      const caloriesData = await fetchData(
        `https://fitness-calculator.p.rapidapi.com/dailycalorie/bodyfat?age=${data.age}&gender=${data.gender}&weight=${data.weight}&height=${data.height}&activitylevel=${data.level}`,
        fitnessOptions
      );
      setDailyCalories(caloriesData.data);
    }
  };

  return (
    <Box height="50vh">
      <form style={{ display: "flex" }} onSubmit={(e) => handleCalculate(e)}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary[100],
            flex: "2 1 0",
          }}
        >
          <Typography variant="h2">Daily Calory Requirement</Typography>
          <Typography>
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
            justifyContent="center"
            p="20px"
            rowGap="0.5rem"
          >
            <Typography>Calculator</Typography>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              onChange={handleGenderChange}
            >
              <FormControlLabel
                control={<Radio />}
                label="Female"
                value="female"
              />
              <FormControlLabel control={<Radio />} label="Male" value="male" />
            </RadioGroup>
            <TextField
              id="age"
              label="Age"
              variant="outlined"
              type="number"
              value={data.age}
              onChange={(e) => handleData(e)}
            />
            <TextField
              id="weight"
              label="Weight kg"
              variant="outlined"
              type="number"
              value={data.weight}
              onChange={(e) => handleData(e)}
            />
            <TextField
              id="height"
              label="Height cm"
              variant="outlined"
              type="number"
              value={data.height}
              onChange={(e) => handleData(e)}
            />
            {/* <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="level_1"
              name="level"
            >
              <FormControlLabel
                control={<Radio />}
                label="Level 1 - Sedentary: little or no exercise"
                id="level_1"
                value={data.level}
                checked={data.level === "level_1"}
                onChange={(e) => handleData(e)}
              />
              <FormControlLabel
                control={<Radio />}
                label="Level 2 - Exercise 1-3 times/week"
                id="level_2"
                value={data.level}
                checked={data.level === "level_2"}
                onChange={(e) => handleData(e)}
              />
              <FormControlLabel
                control={<Radio />}
                label="Level 3 - Exercise 4-5 times/week"
                id="level_3"
                value={data.level}
                checked={data.level === "level_3"}
                onChange={(e) => handleData(e)}
              />
              <FormControlLabel
                control={<Radio />}
                label="Level 4 - Daily exercise or intense exercise 3-4 times/week"
                id="level_4"
                value={data.level}
                checked={data.level === "level_4"}
                onChange={(e) => handleData(e)}
              />
              <FormControlLabel
                control={<Radio />}
                label="Level 5 - Intense exercise 6-7 times/week"
                id="level_5"
                value={data.level}
                checked={data.level === "level_5"}
                onChange={(e) => handleData(e)}
              />
              <FormControlLabel
                control={<Radio />}
                label="Level 6 - Very intense exercise daily, or physical job"
                id="level_6"
                value={data.level}
                checked={data.level === "level_6"}
                onChange={(e) => handleData(e)}
              />
            </RadioGroup> */}
            <Button type="submit" variant="text">
              Calculate
            </Button>
            {/* {dailyCalories && (
              <>
                <Typography>{bmi.health}</Typography>
                <Typography>Your BMI is {bmi.bmi.toFixed(2)}</Typography>
              </>
            )} */}
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default DailyColories;
