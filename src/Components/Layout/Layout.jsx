import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import * as CS from "./layout.styled";

export const Layout = () => {
  return (
    <>
      <Header />
      <CS.Main>
        <Outlet />
      </CS.Main>
      <Footer />
    </>
  );
};
