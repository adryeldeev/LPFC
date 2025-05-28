import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { Main } from "./LayoutStyled";
import Footer from "../Components/Footer/Footer";
import WhatsAppButton from "../Components/ButtonWhatsapp/ButtonWhatsapp";
import NavbarPublic from "../Components/Navbar/Navbar";
export function Layout() {
    return (_jsxs("div", { children: [_jsx(NavbarPublic, {}), _jsx(Main, { children: _jsx(Outlet, {}) }), _jsx(WhatsAppButton, {}), _jsx(Footer, {})] }));
}
