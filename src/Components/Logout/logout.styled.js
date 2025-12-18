import styled from "styled-components";

export const Button = styled.button`
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  background: none;
  border: none;
  border-radius: ${({ theme }) => theme.radii.normal};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;

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

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:hover::after {
    width: 100%;
  }

  &:active {
    transform: scale(0.98);
  }
`;