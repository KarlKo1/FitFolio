import React, { useState, useEffect } from "react";
import { Box, useTheme, Tabs, Tab } from "@mui/material";
import BMI from "./BMI";
import IdealWeight from "./IdealWeight";
import DailyCalories from "./DailyCalories";

const Calculator = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const fitnessCalculatorUrl = "https://fitness-calculator.p.rapidapi.com";

  return (
    <>
      <Tabs
        sx={{ background: theme.palette.secondary[500] }}
        value={selectedTab}
        onChange={(e, val) => setSelectedTab(val)}
      >
        <Tab label="BMI" />
        <Tab label="Ideal Weight" />
        <Tab label="Daily Calories" />
      </Tabs>
      {selectedTab === 0 && <BMI fitnessCalculatorUrl={fitnessCalculatorUrl} />}
      {selectedTab === 1 && (
        <IdealWeight fitnessCalculatorUrl={fitnessCalculatorUrl} />
      )}
      {selectedTab === 2 && (
        <DailyCalories fitnessCalculatorUrl={fitnessCalculatorUrl} />
      )}
    </>
  );
};

export default Calculator;
