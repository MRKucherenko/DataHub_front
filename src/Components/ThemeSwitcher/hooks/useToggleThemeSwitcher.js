import { useDispatch } from "react-redux";
import { toggleTheme} from "../../../redux/theme/themeSlice";

export const useToggleThemeSwitcher = () => {
  const dispatch = useDispatch();
    const toggleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return {
    toggleThemeChange
  }
}