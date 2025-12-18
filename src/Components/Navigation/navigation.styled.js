import styled, { keyframes } from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const slideIn = keyframes`
  from { right: -100%; }
  to { right: 0; }
`;

const slideOut = keyframes`
  from { right: 0; }
  to { right: -100%; }
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.space[2]}px;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 70%;
    height: 100%;
    background: ${({ theme }) => theme.colors.surface};
    flex-direction: column;
    padding: ${({ theme }) => theme.space[5]}px 0;
    gap: ${({ theme }) => theme.space[4]}px;
    box-shadow: -2px 0 8px rgba(0,0,0,0.1);
    z-index: 999;
    animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s forwards;
    transition: right 0.3s ease;
  }
`;

export const NavItem = styled.li`
text-decoration: none;
`;

export const NavLink = styled(RouterLink)`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[3]}px;
  min-width: 80px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active::after {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    text-align: center;
    padding: ${({ theme }) => theme.space[3]}px 0;
    font-size: 16px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const LogoLink = styled(RouterLink)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 42px;
  width: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Burger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;
