import * as CS from "./footer.styled";

export const Footer = () => {
  return (
    <CS.FooterWrapper>
      <CS.FooterText>{new Date().getFullYear()} Data Hub ©</CS.FooterText>
    </CS.FooterWrapper>
  );
};
