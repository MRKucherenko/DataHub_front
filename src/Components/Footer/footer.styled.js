import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.space[4]}px ${({ theme }) => theme.space[5]}px;
  background: ${({ theme }) => theme.colors.surface};
  border-top: ${({ theme }) => theme.borders.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const FooterText = styled.p`
  margin: 0;
`;