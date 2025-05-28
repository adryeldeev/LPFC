import { Outlet } from "react-router-dom";
import { Main } from "./LayoutStyled";
import Footer from "../Components/Footer/Footer";
import WhatsAppButton from "../Components/ButtonWhatsapp/ButtonWhatsapp";
import NavbarPublic from "../Components/Navbar/Navbar";

export function Layout() {
  return (
    <div>
      <NavbarPublic />
      <Main>
        <Outlet />
      </Main>
        <WhatsAppButton/>
      <Footer />
    </div>
  );
}
