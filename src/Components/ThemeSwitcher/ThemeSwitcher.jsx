import { useSelector } from "react-redux";
import { FaMoon, FaSun } from "react-icons/fa";
import * as CS from "./themeSwitcher.styled";
import { useToggleThemeSwitcher } from "./hooks/useToggleThemeSwitcher";

export const ThemeSwitcher = () => {
  const mode = useSelector((state) => state.theme.mode);
  const { toggleThemeChange } = useToggleThemeSwitcher();

  return (
    <CS.Button onClick={toggleThemeChange} aria-label="Toggle theme">
      {mode === "light" ? <FaMoon /> : <FaSun />}
    </CS.Button>
  );
};
