import React, { useEffect, useRef, useState } from 'react';
import {
  ContentNavDiv,
  DropdownMenu,
  DropdownMenuList,
  Logo,
  MenuIcon,
  Nav,
  NavItem,
  NavLink,
  NavList,
} from './NavbarStyled';
import Logo2 from '../../assets/Logo.webp';
import { FiX } from 'react-icons/fi';
import { IoMdMenu } from "react-icons/io";
const NavbarPublic = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
 

  const toggleMenu = (): void => {
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

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      const menuIcon = document.getElementById('menu-icon');
      if (menuIcon && menuIcon.contains(event.target as Node)) {
        return;
      }
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <Nav className={isScrolled ? 'scrolled' : ''}>
        <a href="/">
          <Logo src={Logo2} alt="Logo" />
        </a>
        <NavList>
          <NavItem>
            <NavLink href="/venda-seu-carro">Venda seu carro</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/sobre">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/financie">Financie</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/estoque">Estoque</NavLink>
          </NavItem>
        </NavList>

        <MenuIcon id="menu-icon" onClick={toggleMenu}>
          {open ?<FiX size={24} /> : <IoMdMenu size={24} />}
        </MenuIcon>
      </Nav>

      <ContentNavDiv>
        {open && (
          <DropdownMenu ref={dropdownRef}>
            <DropdownMenuList>
              <NavItem>
                <NavLink href="/venda-seu-carro">Venda seu carro</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sobre">Sobre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/financie">Financie</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/estoque">Estoque</NavLink>
              </NavItem>
            </DropdownMenuList>
          </DropdownMenu>
        )}
      </ContentNavDiv>
    </>
  );
};

export default NavbarPublic;
