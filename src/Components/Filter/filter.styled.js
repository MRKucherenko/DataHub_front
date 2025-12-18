import styled from "styled-components";


export const FilterForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]}px;
  margin: ${({theme}) => theme.space[2]}px;
`;

export const FilterSelectWrapper = styled.div`
  position: relative;
  min-width: 140px;
  flex: 1;

  &:after {
    content: '';
    position: absolute;
    right: ${({ theme }) => theme.space[3]}px;
    top: 50%;
    transform: translateY(-50%) rotate(0deg);
    width: 0;
    height: 0;
    border-left: ${({ theme }) => theme.space[1]}px solid transparent;
    border-right: ${({ theme }) => theme.space[1]}px solid transparent;
    border-top: ${({ theme }) => theme.space[2]}px solid ${({ theme }) => theme.colors.primary};
    pointer-events: none;
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
  &:focus-within:after {
    transform: translateY(-50%) rotate(180deg);
  }
`;

export const FilterSelect = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[4]}px ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  border-radius: ${({ theme }) => theme.radii.large};
  border: ${({ theme }) => theme.borders.normal};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  appearance: none;
  cursor: pointer;
  outline: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 ${({ theme }) => theme.space[1]}px rgba(74, 144, 226, 0.2);
  }
`;

export const ClearButton = styled.button`
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  border-radius: ${({ theme }) => theme.radii.normal};
  border: ${({ theme }) => theme.borders.none};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;

  &:hover {
    filter: brightness(1.1);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.muted};
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

export const NotesWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  user-select: none;
  transition: color ${({ theme }) => theme.transitions.default};

  input[type="checkbox"] {
    width: ${({ theme }) => theme.space[4]}px;
    height: ${({ theme }) => theme.space[4]}px;
    cursor: pointer;
    appearance: none;
    border: ${({ theme }) => theme.borders.normal};
    border-radius: ${({ theme }) => theme.radii.normal};
    background: ${({ theme }) => theme.colors.background};
    position: relative;
    transition: all ${({ theme }) => theme.transitions.default};
    
    &:checked {
      background: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &:checked::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 10px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: translate(-50%, -50%) rotate(45deg);
      transition: all ${({ theme }) => theme.transitions.default};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.s}px;

    input[type="checkbox"] {
      width: ${({ theme }) => theme.space[3]}px;
      height: ${({ theme }) => theme.space[3]}px;
    }
  }
`;