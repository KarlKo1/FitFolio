import React, { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  useTheme,
  FormControl,
} from "@mui/material";
import { fitnessOptions, fetchData } from "../utils/fetchData";

const BMI = () => {
  const theme = useTheme();
  const [data, setData] = useState({
    age: "",
    weight: "",
    height: "",
  });
  const [bmi, setBMI] = useState(null);

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    if (data.age && data.weight && data.height) {
      const bmiData = await fetchData(
        `https://fitness-calculator.p.rapidapi.com/bmi?age=${data.age}&weight=${data.weight}&height=${data.height}`,
        fitnessOptions
      );
      setBMI(bmiData.data);
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
          <Typography variant="h2">BMI</Typography>
          <Typography>
            BMI stands for Body Mass Index, but you can call it your Body Math
            Indicator! It's a way to figure out if your weight is healthy for
            your height. All you need to do is plug in your weight and height
            into a calculator and voila! Your BMI pops out. If your BMI is too
            high or too low, it might mean you need to make some changes to your
            diet and exercise habits. But remember, BMI is just one tool, and
            it's always best to talk to your doctor or a nutritionist to figure
            out what's best for you.
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
            <Button type="submit" variant="text">
              Calculate
            </Button>
            {bmi && (
              <>
                <Typography>{bmi.health}</Typography>
                <Typography>Your BMI is {bmi.bmi.toFixed(2)}</Typography>
              </>
            )}
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default BMI;
