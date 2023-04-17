import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

// Components & Pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="80%" m="0 auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
        </Box>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
