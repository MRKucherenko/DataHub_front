import styled from "styled-components";

export const UserCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borders.normal};
  border-radius: ${({ theme }) => theme.radii.normal};
  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.fast};
  gap: ${({ theme }) => theme.space[3]}px;
  flex-wrap: wrap;

    &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 200px;
  min-width: 150px;
`;

export const Name = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  word-break: break-word;
`;

export const Email = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 0;
  word-break: break-word;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.space[2]}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const Select = styled.select`
  padding: ${({ theme }) => theme.space[1]}px ${({ theme }) => theme.space[2]}px;
  border-radius: ${({ theme }) => theme.radii.small};
  border: ${({ theme }) => theme.borders.normal};
  background: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({theme}) => theme.colors.text};
  cursor: pointer;
  min-width: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    min-width: 80px;
  }
`;

export const DeleteButton = styled.button`
  padding: ${({ theme }) => theme.space[1]}px ${({ theme }) => theme.space[3]}px;
  background: ${({ theme }) => theme.colors.danger};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radii.small};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.space[1]}px ${({ theme }) => theme.space[2]}px;
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
  }
`;