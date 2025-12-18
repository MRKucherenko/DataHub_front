import styled from "styled-components";

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  position: sticky;
  top: 0;
  z-index: 10;
  gap: 8px;
  align-items: center;
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    gap: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    gap: 4px;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  padding: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.text};
  border-top: ${({ theme }) => theme.borders.normal};
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.background};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    transition: ${({ theme }) => theme.transitions.default};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
  }
`;

export const Cell = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    &:nth-child(n+4) {
      display: none;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]}px;
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.space[1]}px ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  border-radius: ${({ theme }) => theme.radii.normal};
  border: ${({ theme }) => theme.borders.none};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background: ${({ variant, theme }) =>
    variant === "danger" ? theme.colors.danger : theme.colors.primary};
  color: #fff;

  &:hover {
    filter: brightness(1.1);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;