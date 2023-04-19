// Design tokens
export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000",
  },
  primary: {
    // Black
    100: "#333130",
    200: "#4d3c39",
    300: "#992817",
    400: "#992817",
    500: "#b32f1b",
    600: "#cc361f",
    700: "#e63c22",
    800: "#f52404",
    900: "#f52404",
  },
  secondary: {
    // Red
    50: "#ffffff",
    100: "#fff4f2",
    200: "#ffc8bf",
    300: "#ff9c8c",
    400: "#ff6f59",
    500: "#ff4326",
    600: "#ff2200",
    700: "#cc1b00",
    800: "#991400",
    900: "#660e00",
  },
};

// Reverse color theme
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// Mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // Dark mode palette values
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[100],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // Light mode palette values
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[10],
              alt: tokensDark.grey[50],
            },
          }),
      typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    },
  };
};
