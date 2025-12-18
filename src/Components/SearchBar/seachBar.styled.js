import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  margin: ${({theme}) => theme.space[2]}px;
`;

export const Input = styled.input`
  padding: 0 ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  border-radius: ${({ theme }) => theme.radii.normal};
  border: ${({ theme }) => theme.borders.normal};
  outline: none;
  width: 200px;
  transition: ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  height: 36px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary};
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.space[2]}px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.muted};
  pointer-events: none;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
`;