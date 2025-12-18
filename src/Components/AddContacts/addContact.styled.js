import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[3]}px;
  max-height: 70vh;
  overflow-y: auto;
  padding-right: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-height: 80vh;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[3]}px;
  border-radius: ${({ theme }) => theme.radii.normal};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }
`;

export const Select = styled.select`
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[3]}px;
  border-radius: ${({ theme }) => theme.radii.normal};
  border: ${({ theme }) => theme.borders.normal};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }
`;

export const Button = styled.button`
  grid-column: span 2;
  margin-top: ${({ theme }) => theme.space[3]}px;
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[4]}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  border-radius: ${({ theme }) => theme.radii.normal};
  border: ${({ theme }) => theme.borders.none};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  background: ${({ disabled, theme }) =>
    disabled ? theme.colors.muted : theme.colors.primary};
  color: #fff;

  &:hover:not(:disabled) {
    filter: brightness(1.1);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  padding: ${({ theme }) => theme.space[1]}px ${({ theme }) => theme.space[2]}px; 
  border-radius: ${({ theme }) => theme.radii.normal};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }
`;