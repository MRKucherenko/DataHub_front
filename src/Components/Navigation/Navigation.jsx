import { useEffect, useState } from "react";
import navigation from "../../helpers/navigation.json";
import loginNavigation from "../../helpers/loginNavigation.json";
import { Logout } from "../Logout/Logout";
import { useAuth } from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { ChangeLanguage } from "../ChangeLanguage/ChangeLanguage";
import * as CS from "./navigation.styled";
import { HiMenu, HiX } from "react-icons/hi";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

export const Navigation = () => {
  const { isLogin, role } = useAuth();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <CS.Nav>
      <CS.LeftSection>
        <CS.NavList isOpen={isMobileMenuOpen}>
          {navigation.map(({ href, text, id }) => (
            <CS.NavItem key={id}>
              <CS.NavLink to={href} onClick={isMobile ? toggleMobileMenu : undefined}>
                {t(`navigation.${text}`)}
              </CS.NavLink>
            </CS.NavItem>
          ))}

          {role === "superAdmin" && (
            <CS.NavItem>
              <CS.NavLink to="/superAdmin" onClick={isMobile ? toggleMobileMenu : undefined}>
                {t("navigation.superAdmin")}
              </CS.NavLink>
            </CS.NavItem>
          )}

          {isMobile && (
            <>
              {isLogin ? (
                <CS.NavItem className="mobile-button"><Logout /></CS.NavItem>
              ) : (
                loginNavigation.map(({ href, text, id }) => (
                  <CS.NavItem className="mobile-button" key={id}>
                    <CS.NavLink to={href} onClick={toggleMobileMenu}>
                      {t(`navigation.${text}`)}
                    </CS.NavLink>
                  </CS.NavItem>
                ))
              )}
              <CS.NavItem className="mobile-button"><ChangeLanguage /></CS.NavItem>
            </>
          )}
        </CS.NavList>
      </CS.LeftSection>

      <CS.LogoLink to="/">
        <CS.Logo src="../logo/main_logo.png" alt="Main Logo" />
      </CS.LogoLink>

      {!isMobile && (
        <CS.RightSection>
          {isLogin ? <Logout /> : loginNavigation.map(({ href, text, id }) => (
            <CS.NavLink key={id} to={href}>{t(`navigation.${text}`)}</CS.NavLink>
          ))}
          <ChangeLanguage />
          <ThemeSwitcher /> 
        </CS.RightSection>
      )}

      <CS.Burger onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </CS.Burger>
    </CS.Nav>
  );
};
