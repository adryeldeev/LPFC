import { jsx as _jsx } from "react/jsx-runtime";
import { HeaderContainer, BackgroundImage, } from "./HeaderStyled";
const Header = () => {
    return (_jsx(HeaderContainer, { children: _jsx(BackgroundImage, {}) }));
};
export default Header;
