import { useTranslation } from "react-i18next";
import { ChangeLanguage } from "../ChangeLanguage/ChangeLanguage";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import loginNavigation from "../../helpers/loginNavigation.json";
import * as CS from "../Navigation/navigation.styled";
import { Logout } from "../Logout/Logout";

export const AuthMenu = ({ isMobile, isLogin }) => {
  const { t } = useTranslation();
  return (
    <>
      {!isMobile && (
        <CS.RightSection>
          {isLogin ? (
            <Logout />
          ) : (
            loginNavigation.map(({ href, text, id }) => (
              <CS.NavLink key={id} to={href}>
                {t(`navigation.${text}`)}
              </CS.NavLink>
            ))
          )}
          <ChangeLanguage />
          <ThemeSwitcher />
        </CS.RightSection>
      )}
    </>
  );
};
