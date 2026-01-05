import { FiGlobe } from "react-icons/fi";
import * as CS from "./changeLanguage.styled";
import { useLanguageChange } from "./hooks/useLanguageChange";

export const ChangeLanguage = () => {
  const {open, handleLanguageChange, setOpen} = useLanguageChange();

  return (
    <CS.Wrapper>
      <CS.IconButton onClick={() => setOpen((prev) => !prev)}>
        <FiGlobe size={20} />
      </CS.IconButton>

      {open && (
        <CS.Dropdown>
          <CS.LangButton onClick={() => handleLanguageChange("en")}>
            🇬🇧 English
          </CS.LangButton>
          <CS.LangButton onClick={() => handleLanguageChange("ua")}>
            🇺🇦 Українська
          </CS.LangButton>
          <CS.LangButton onClick={() => handleLanguageChange("ru")}>
            🇷🇺 Русский
          </CS.LangButton>
        </CS.Dropdown>
      )}
    </CS.Wrapper>
  );
};