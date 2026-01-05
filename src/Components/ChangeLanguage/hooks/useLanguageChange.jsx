import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useLanguageChange = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(!open);
  };
  return {
    open, handleLanguageChange, setOpen
  } 
};
