import { Navigation } from "../Navigation/Navigation";
import * as CS from "./header.styled";

export const Header = () => {
  return (
    <CS.StyledHeader>
      <Navigation />
    </CS.StyledHeader>
  );
};
