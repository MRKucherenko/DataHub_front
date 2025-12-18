import { useDispatch, useSelector } from "react-redux";
import { toggleTheme} from "../../redux/theme/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";
import * as CS from './themeSwitcher.styled';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  const toggleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <CS.Button onClick={toggleThemeChange} aria-label="Toggle theme">
      {mode === "light" ? <FaMoon /> : <FaSun />}
    </CS.Button>
  );
};