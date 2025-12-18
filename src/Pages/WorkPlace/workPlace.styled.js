import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.space[4]}px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  flex-wrap: wrap;
`;

export const LeftControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]}px;
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;
`;

export const TableWrapper = styled.div`
  margin-top: ${({ theme }) => theme.space[4]}px;
  border: ${({ theme }) => theme.borders.normal};
  border-radius: ${({ theme }) => theme.radii.large};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow-x: auto;
`;

export const TableHeader = styled.div`
  display: grid;
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
  grid-template-columns: repeat(9, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    font-size: 10px;
    gap: 4px;

    span:nth-child(n + 4) {
      display: none;
    }
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr;
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

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 2fr 2fr 1fr 2fr;
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(9, 1fr);
  }
`;

export const Cell = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    &:nth-child(n+2) {
      display: none;
    }
  }
`;

export const AddButton = styled.button`
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