export const theme = Object.freeze({
  space: [0, 4, 8, 16, 20, 24, 32, 64, 128, 256, 512],

  fonts: {
  },

  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    ml: 20,
    l: 24,
    xl: 32,
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },

  colors: {
    primary: "#0056EB",
    secondary: "#FFEF00",
    background: "#F7F9FC",
    surface: "#FFFFFF",
    text: "#2C3E50",
    muted: "#7F8C8D",
    border: "#E0E6ED",
    danger: "#E74C3C",
    warning: "#F39C12",
    success: "#27AE60",

  modes: {
      dark: {
        background: "#202227",
        surface: "#141517ff",
        text: "#E6EEF6",
        muted: "#9CA3AF",
        border: "#1F2937",
        primary: "#0056EB",
        secondary: "#FFEF00",
      },
    },
  },

  radii: {
    none: "0",
    normal: "6px",
    large: "12px",
    round: "50%",
  },

  borders: {
    none: "none",
    normal: "1px solid #E0E6ED",
    bold: "2px solid #4A90E2",
  },

  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.12)",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 10px 20px rgba(0,0,0,0.15)",
  },

  transitions: {
    default: "0.3s ease",
    fast: "0.15s ease-in-out",
  },
    breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
});