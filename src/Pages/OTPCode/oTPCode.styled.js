import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]}px;
  width: 90%;
  max-width: 400px;
  margin: 60px auto;
  padding: ${({ theme }) => theme.space[5]}px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.large};
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.space[4]}px;
    margin: 20px auto;
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]}px;
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  border: ${({ theme }) => theme.borders.normal};
  border-radius: ${({ theme }) => theme.radii.normal};
  transition: all ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
    transform: scale(1.02);
  }
`;

export const Button = styled.button`
  margin-top: ${({ theme }) => theme.space[3]}px;
  padding: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.radii.normal};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.03);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const qRButton = styled.button`
  margin: ${({ theme }) => theme.space[3]}px auto 0;
  display: block; 
  margin-top: ${({ theme }) => theme.space[3]}px;
  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.radii.large};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    filter: brightness(0.95);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.muted};
    cursor: not-allowed;
    box-shadow: none;
    filter: brightness(1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
    padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[3]}px;
  }
`;