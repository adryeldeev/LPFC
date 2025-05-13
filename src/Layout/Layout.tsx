import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Main } from "./LayoutStyled";

export function Layout() {
  return (
    <div>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
