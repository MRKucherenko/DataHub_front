import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space[5]}px;
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const QRWrapper = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.space[4]}px;
  border-radius: ${({ theme }) => theme.radii.large};
  display: inline-block;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const Description = styled.p`
  margin-top: ${({ theme }) => theme.space[4]}px;
  opacity: 0.7;
`;

export const Button = styled.button`
  margin-top: ${({ theme }) => theme.space[5]}px;
  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  color: white;
  border-radius: ${({ theme }) => theme.radii.normal};
  cursor: pointer;
`;
