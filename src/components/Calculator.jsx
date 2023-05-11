import React, { useState, useEffect } from "react";
import { Box, useTheme, Tabs, Tab, styled, TextField } from "@mui/material";
import BMI from "./BMI";
import IdealWeight from "./IdealWeight";
import DailyCalories from "./DailyCalories";

const Calculator = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showElement, setShowElement] = useState(false);
  const theme = useTheme();
  const fitnessCalculatorUrl = "https://fitness-calculator.p.rapidapi.com";

  const StyledTextField = styled(TextField)({
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
      <Box
        display="flex"
        id="calculator"
        sx={{ pl: { xs: "1rem", md: "0" }, mt: { sm: "5rem", md: "0" } }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary[100],
            flex: { md: "2 1 0", xs: "2 1 0" },
            pl: { md: "5rem", xs: "none" },
          }}
          pl="5rem"
        >
          <Tabs
            className={`reveal-fade ${showElement ? "visible" : ""}`}
            value={selectedTab}
            onChange={(e, val) => setSelectedTab(val)}
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
                    fontSize: "1rem",
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
                    fontSize: "1rem",
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
                    fontSize: "1rem",
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
            flex: "1 1 0",
            display: { xs: "none", sm: "flex" },
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
