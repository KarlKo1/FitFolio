import React, { useState } from "react";
import {
  Box,
  Stack,
  Button,
  Typography,
  useTheme,
  FormControl,
} from "@mui/material";
import { fitnessOptions, fetchData } from "../utils/fetchData";

const BMI = ({ fitnessCalculatorUrl, StyledTextField }) => {
  const theme = useTheme();
  const [bmi, setBMI] = useState("");
  const [data, setData] = useState({
    age: {
      value: "",
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
        value,
      },
    }));
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    const { age, weight, height } = data;
    if (age.value && weight.value && height.value) {
      const bmiData = await fetchData(
        `${fitnessCalculatorUrl}/bmi?age=${age.value}&weight=${weight.value}&height=${height.value}`,
        fitnessOptions
      );
      setBMI(bmiData.data);
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
    <Box sx={{ height: { md: "40vh", xs: "100%" } }}>
      <FormControl>
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
              width: { md: "70%", xs: "100%" },
              p: { lg: "0 0 0 15rem", xs: "2rem" },
            }}
          >
            <Typography
              color={theme.palette.secondary[500]}
              p="1.5rem 0 0.5rem 0"
              sx={{
                fontSize: theme.palette.typography.h2,
                textAlign: "left",
              }}
            >
              BMI
            </Typography>
            <Typography sx={{ width: { md: "75%", xs: "100%" } }}>
              BMI stands for Body Mass Index, but you can call it your Body Math
              Indicator! It's a way to figure out if your weight is healthy for
              your height. All you need to do is plug in your weight and height
              into a calculator and voila! Your BMI pops out. If your BMI is too
              high or too low, it might mean you need to make some changes to
              your diet and exercise habits. But remember, BMI is just one tool,
              and it's always best to talk to your doctor or a nutritionist to
              figure out what's best for you.
            </Typography>
          </Box>
          <Box
            display="flex"
            sx={{
              backgroundColor: theme.palette.secondary[500],
              width: { md: "30%", xs: "100%" },
              p: { xs: "2rem", md: "0" },
            }}
            justifyContent="center
          "
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
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary[100],
                  color: theme.palette.primary[500],
                  "&:hover": {
                    backgroundColor: theme.palette.primary[100],
                    color: theme.palette.primary[500],
                  },
                }}
              >
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
      </FormControl>
    </Box>
  );
};

export default BMI;
