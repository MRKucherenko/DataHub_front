import { useTranslation } from "react-i18next";
import { ChangeLanguage } from "../ChangeLanguage/ChangeLanguage";
import loginNavigation from "../../helpers/loginNavigation.json";
import * as CS from '../Navigation/navigation.styled'
import { Logout } from "../Logout/Logout";

export const MobileNavigation = ({ toggleMobileMenu, isMobile, isLogin }) => {
  const { t } = useTranslation();
  return (
    <>
      {isMobile && (
        <>
          {isLogin ? (
            <CS.NavItem className="mobile-button">
              <Logout />
            </CS.NavItem>
          ) : (
            loginNavigation.map(({ href, text, id }) => (
              <CS.NavItem className="mobile-button" key={id}>
                <CS.NavLink to={href} onClick={toggleMobileMenu}>
                  {t(`navigation.${text}`)}
                </CS.NavLink>
              </CS.NavItem>
            ))
          )}
          <CS.NavItem className="mobile-button">
            <ChangeLanguage />
          </CS.NavItem>
        </>
      )}
    </>
  );
};
