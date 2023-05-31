import React, { useState, useEffect } from "react";
import { Box, useTheme, Tabs, Tab, styled, TextField } from "@mui/material";
import BMI from "./BMI";
import IdealWeight from "./IdealWeight";
import DailyCalories from "./DailyCalories";

//TODO: Eliminate repetitive code from BMI,DailyCalories & IdealWeight
const Calculator = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showElement, setShowElement] = useState(false);
  const theme = useTheme();
  const fitnessCalculatorUrl = "https://fitness-calculator.p.rapidapi.com";

  const StyledTextField = styled(TextField)({
    width: "150px",
    pt: "14px",
    "& label": {
      color: theme.palette.primary[100],
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .Mui-underline:before": {
      borderBottomColor: "white",
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowElement(true);
      } else {
        setShowElement(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box display="flex" id="calculator" sx={{ mt: "0" }}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary[100],
            display: "flex",
            width: { md: "70%", xs: "100%" },
            pl: { lg: "5rem", xl: "15rem" },
          }}
        >
          <Tabs
            className={`reveal-fade ${showElement ? "visible" : ""}`}
            value={selectedTab}
            onChange={(e, val) => setSelectedTab(val)}
            sx={{ justifyContent: "center" }}
            TabIndicatorProps={{
              style: {
                backgroundColor: theme.palette.secondary[500],
              },
            }}
            aria-label="calculator-tabs"
          >
            <Tab
              label={
                <span
                  style={{
                    fontSize: theme.palette.typography.h2,
                    color: theme.palette.secondary[500],
                  }}
                >
                  BMI
                </span>
              }
            />
            <Tab
              label={
                <span
                  style={{
                    fontSize: theme.palette.typography.h2,
                    color: theme.palette.secondary[500],
                  }}
                >
                  Ideal Weight
                </span>
              }
            />

            <Tab
              label={
                <span
                  style={{
                    fontSize: theme.palette.typography.h5,
                    color: theme.palette.secondary[500],
                  }}
                >
                  Daily Calories
                </span>
              }
            />
          </Tabs>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.secondary[500],
            display: { xs: "none", md: "flex" },
            width: { md: "30%", xs: "100%" },
          }}
        ></Box>
      </Box>
      {selectedTab === 0 && (
        <BMI
          fitnessCalculatorUrl={fitnessCalculatorUrl}
          StyledTextField={StyledTextField}
        />
      )}
      {selectedTab === 1 && (
        <IdealWeight
          fitnessCalculatorUrl={fitnessCalculatorUrl}
          StyledTextField={StyledTextField}
        />
      )}
      {selectedTab === 2 && (
        <DailyCalories
          fitnessCalculatorUrl={fitnessCalculatorUrl}
          StyledTextField={StyledTextField}
        />
      )}
    </>
  );
};

export default Calculator;
