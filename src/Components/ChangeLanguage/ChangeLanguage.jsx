import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";
import * as CS from "./changeLanguage.styled";

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(!open);
  };

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