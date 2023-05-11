import React, { useState } from "react";
import { Box, Stack, Button, Typography, useTheme } from "@mui/material";
import { fitnessOptions, fetchData } from "../utils/fetchData";

const BMI = ({ fitnessCalculatorUrl, StyledTextField }) => {
  const theme = useTheme();
  const [bmi, setBMI] = useState("");
  const [data, setData] = useState({
    age: "",
    weight: "",
    height: "",
  });

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    if (data.age && data.weight && data.height) {
      const bmiData = await fetchData(
        `${fitnessCalculatorUrl}/bmi?age=${data.age}&weight=${data.weight}&height=${data.height}`,
        fitnessOptions
      );
      setBMI(bmiData.data);
    }
  };

  return (
    <Box sx={{ height: { md: "35vh", xs: "100%" } }}>
      <form
        className="calculator-form"
        style={{
          display: "flex",
          height: "100%",
        }}
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
            BMI
          </Typography>
          <Typography sx={{ width: { md: "75%", xs: "100%" } }}>
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
          justifyContent="center
          "
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
