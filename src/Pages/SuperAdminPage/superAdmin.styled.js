import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.space[5]}px;
  background: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.space[3]}px;
  }
`;

export const ChartsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[4]}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const UserList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[4]}px;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]}px;

  max-width: 900px;
  width: 100%;

  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.space[3]}px;
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.space[2]}px;
    gap: ${({ theme }) => theme.space[2]}px;
  }
`;

export const StatTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.ml}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  text-align: center;
`;