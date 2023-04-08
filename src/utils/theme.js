const theme = {
  light: {
    background: "hsl(0, 0%, 100%)",
    text: "#000000",
    alterText: "#FFFFFF",
    primary: "hsl(96, 72%, 67%)",
    secondary: "hsl(45, 100%, 51%)",
    gray: {
      100: "hsl(185, 5%, 95%)",
      300: "hsl(190, 5%, 80%)",
      500: "hsl(196, 4%, 60%)",
      700: "hsl(220, 5%, 40%)",
      900: "hsl(220, 3%, 20%)",
    },
    shadows: {
      small: "0px 1px 2px rgba(0, 0, 0, 0.16)",
      medium: "0px 2px 4px rgba(0, 0, 0, 0.16)",
      large: "0px 4px 8px rgba(0, 0, 0, 0.16)",
      extralarge: "0px 8px 16px rgba(0, 0, 0, 0.16)",
    },
  },
  dark: {
    background: "#1D1E20",
    text: "#FFFFFF",
    alterText: "hsl(0, 0%, 0%)",
    primary: "hsl(207, 89%, 68%)",
    secondary: "#FFD54F",
    gray: {
      100: "hsl(185, 5%, 20%)",
      300: "hsl(190, 5%, 35%)",
      500: "hsl(196, 4%, 50%)",
      700: "hsl(220, 5%, 70%)",
      900: "hsl(220, 3%, 90%)",
    },
    shadows: {
      small: "0px 1px 2px rgba(255, 255, 255, 0.16)",
      medium: "0px 2px 4px rgba(255, 255, 255, 0.16)",
      large: "0px 4px 8px rgba(255, 255, 255, 0.16)",
      extralarge: "0px 8px 16px rgba(255, 255, 255, 0.16)",
    },
  },
};

export { theme };
