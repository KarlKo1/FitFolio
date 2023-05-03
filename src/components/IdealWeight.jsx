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

const IdealWeight = ({ fitnessCalculatorUrl }) => {
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
    <Box height="50vh">
      <form style={{ display: "flex" }} onSubmit={(e) => handleCalculate(e)}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary[100],
            flex: "2 1 0",
          }}
        >
          <Typography variant="h2">Ideal Weight</Typography>
          <Typography>
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
