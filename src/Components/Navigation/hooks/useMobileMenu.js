import { useState } from "react";

export const useMobileMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
     const [isMobile, setIsMobile] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return{
      isMobileMenuOpen,
      toggleMobileMenu,
      isMobile,
      setIsMobile,
      setIsMobileMenuOpen
    }
}