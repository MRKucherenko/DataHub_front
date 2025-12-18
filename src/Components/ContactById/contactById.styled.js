import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]}px;
  padding: ${({ theme }) => theme.space[5]}px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.large};
  width: 400px;
  max-width: 90vw;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  align-items: center;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Label = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: ${({ theme }) => theme.space[1]}px;
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.text};
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]}px;
  margin-top: ${({ theme }) => theme.space[4]}px;
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[4]}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: ${({ variant, theme }) =>
    variant === "danger" ? theme.colors.danger : theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    opacity: 0.9;
  }
`;