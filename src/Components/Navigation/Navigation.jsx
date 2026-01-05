import { useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useAuth } from "../../hooks/useAuth";
import * as CS from "./navigation.styled";
import logo from "../../logo/main_logo.png";
import { useMobileMenu } from "./hooks/useMobileMenu";
import { MainNav } from "../MainNav/MainNav";
import { AuthMenu } from "../authMenu/authMenu";

export const Navigation = () => {
  const { isLogin, role } = useAuth();
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    isMobile,
    setIsMobile,
    setIsMobileMenuOpen,
  } = useMobileMenu();

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
        <MainNav
          toggleMobileMenu={toggleMobileMenu}
          isMobile={isMobile}
          isLogin={isLogin}
          role={role}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </CS.LeftSection>

      <CS.LogoLink to="/">
        <CS.Logo src={logo} alt="Main Logo" />
      </CS.LogoLink>
 
      <AuthMenu isLogin={isLogin} isMobile={isMobile}/>
    
      <CS.Burger onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </CS.Burger>
    </CS.Nav>
  );
};
