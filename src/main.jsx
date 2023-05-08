import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./state";
import LoadingScreen from "./components/LoadingScreen";

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

function Root() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        {loading ? <LoadingScreen isDarkMode={isDarkMode} /> : <App />}
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
