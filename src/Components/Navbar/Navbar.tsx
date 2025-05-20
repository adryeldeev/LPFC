import React, { useEffect, useRef, useState } from 'react';
import {
  AdminDropdown,
  ButtonLink,
  ContentNavDiv,
  DropdownContent,
  DropdownMenu,
  DropdownMenuList,
  Logo,
  MenuIcon,
  Nav,
  NavItem,
  NavLink,
  NavList,
} from './NavbarStyled';
import { useAuth } from '../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Logo2 from '../../assets/Logo.webp';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    logOut();
    navigate('/');
  };

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
            <NavLink  href="/sobre">
              Sobre
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="/financie">
             Financie
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="/estoque">
              Estoque
            </NavLink>
          </NavItem>
          {!user ? (
            <NavItem>
              <ButtonLink onClick={handleLoginClick}>Login</ButtonLink>
            </NavItem>
          ) : (
            <NavItem>
              <ButtonLink onClick={handleLogoutClick}>Sair</ButtonLink>
            </NavItem>
          )}
          {user?.role === 'ADMIN' && (
  <NavItem>
    <AdminDropdown>
      <NavLink as="button">Administração ▾</NavLink>
      <DropdownContent>
        <NavLink href="/veiculos">Veículos</NavLink>
        <NavLink href="/vendedores">Vendedores</NavLink>
        <NavLink href="/marcas">Marcas</NavLink>
        <NavLink href="/cadastrarAdmin">Cadastrar administrador</NavLink>
      </DropdownContent>
    </AdminDropdown>
  </NavItem>
)}
        </NavList>

        <MenuIcon id="menu-icon" onClick={toggleMenu}>
          {open ? 'X' : '☰'}
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
            <NavLink  href="/sobre">
              Sobre
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="/financie">
             Financie
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="/estoque">
              Estoque
            </NavLink>
          </NavItem>
              {!user ? (
                <NavItem>
                  <ButtonLink onClick={handleLoginClick}>Login</ButtonLink>
                </NavItem>
              ) : (
                <NavItem>
                  <ButtonLink onClick={handleLogoutClick}>Sair</ButtonLink>
                </NavItem>
              )}
                 {user?.role === 'ADMIN' && (
  <NavItem>
    <AdminDropdown>
      <NavLink as="button">Administração ▾</NavLink>
      <DropdownContent>
        <NavLink href="/veiculos">Veículos</NavLink>
        <NavLink href="/vendedores">Vendedores</NavLink>
        <NavLink href="/marcas">Marcas</NavLink>
        <NavLink href="/cadastrarAdmin">Cadastrar administrador</NavLink>
      </DropdownContent>
    </AdminDropdown>
  </NavItem>
)}
            </DropdownMenuList>
          </DropdownMenu>
        )}
      </ContentNavDiv>
    </>
  );
};

export default Navbar;
