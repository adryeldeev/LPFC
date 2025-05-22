import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Main } from "./LayoutStyled";
import Footer from "../Components/Footer/Footer";
import WhatsAppButton from "../Components/ButtonWhatsapp/ButtonWhatsapp";

export function Layout() {
  return (
    <div>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
        <WhatsAppButton/>
      <Footer />
    </div>
  );
}
