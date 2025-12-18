import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[2]}px;
  background: #FFFFFF;
  border: ${({ theme }) => theme.borders.normal};
  border-radius: ${({ theme }) => theme.radii.round};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  line-height: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  border: ${({ theme }) => theme.borders.normal};
  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
  min-width: 150px;
`;

export const LangButton = styled.button`
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
    color: ${({theme}) => theme.colors.text};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;