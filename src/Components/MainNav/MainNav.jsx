import { useTranslation } from "react-i18next";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";
import navigation from "../../helpers/navigation.json";
import * as CS from '../Navigation/navigation.styled'

export const MainNav = ({
  toggleMobileMenu,
  isMobile,
  isLogin,
  role,
  isMobileMenuOpen,
}) => {
  const { t } = useTranslation();

  return (
    <CS.NavList isOpen={isMobileMenuOpen}>
      {navigation.map(({ href, text, id }) => (
        <CS.NavItem key={id}>
          <CS.NavLink
            to={href}
            onClick={isMobile ? toggleMobileMenu : undefined}
          >
            {t(`navigation.${text}`)}
          </CS.NavLink>
        </CS.NavItem>
      ))}

      {role === "superAdmin" && (
        <CS.NavItem>
          <CS.NavLink
            to="/superAdmin"
            onClick={isMobile ? toggleMobileMenu : undefined}
          >
            {t("navigation.superAdmin")}
          </CS.NavLink>
        </CS.NavItem>
      )}

      <MobileNavigation
        toggleMobileMenu={toggleMobileMenu}
        isMobile={isMobile}
        isLogin={isLogin}
      />
    </CS.NavList>
  );
};
