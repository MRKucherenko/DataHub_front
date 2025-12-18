import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { theme } from "../../helpers/theme";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.25s ease, color 0.25s ease;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const ThemeComponent = ({ children }) => {
  const mode = useSelector((state) => state.theme.mode);

  const activeTheme =
    mode === "dark"
      ? { ...theme, colors: { ...theme.colors, ...theme.colors.modes.dark } }
      : theme;

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};