import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border: ${({ theme }) => theme.borders.normal};
  border-radius: ${({ theme }) => theme.radii.normal};
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;