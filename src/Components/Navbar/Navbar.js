import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { ContentNavDiv, DropdownMenu, DropdownMenuList, Logo, MenuIcon, Nav, NavItem, NavLink, NavList, } from './NavbarStyled';
import Logo2 from '../../assets/Logo.webp';
const NavbarPublic = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);
    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleClickOutside = (event) => {
        if (dropdownRef.current &&
            !dropdownRef.current.contains(event.target)) {
            const menuIcon = document.getElementById('menu-icon');
            if (menuIcon && menuIcon.contains(event.target)) {
                return;
            }
            setOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs(Nav, { className: isScrolled ? 'scrolled' : '', children: [_jsx("a", { href: "/", children: _jsx(Logo, { src: Logo2, alt: "Logo" }) }), _jsxs(NavList, { children: [_jsx(NavItem, { children: _jsx(NavLink, { href: "/venda-seu-carro", children: "Venda seu carro" }) }), _jsx(NavItem, { children: _jsx(NavLink, { href: "/sobre", children: "Sobre" }) }), _jsx(NavItem, { children: _jsx(NavLink, { href: "/financie", children: "Financie" }) }), _jsx(NavItem, { children: _jsx(NavLink, { href: "/estoque", children: "Estoque" }) })] }), _jsx(MenuIcon, { id: "menu-icon", onClick: toggleMenu, children: open ? 'X' : '☰' })] }), _jsx(ContentNavDiv, { children: open && (_jsx(DropdownMenu, { ref: dropdownRef, children: _jsxs(DropdownMenuList, { children: [_jsx(NavItem, { children: _jsx(NavLink, { href: "/venda-seu-carro", children: "Venda seu carro" }) }), _jsx(NavItem, { children: _jsx(NavLink, { href: "/sobre", children: "Sobre" }) }), _jsx(NavItem, { children: _jsx(NavLink, { href: "/financie", children: "Financie" }) }), _jsx(NavItem, { children: _jsx(NavLink, { href: "/estoque", children: "Estoque" }) })] }) })) })] }));
};
export default NavbarPublic;
