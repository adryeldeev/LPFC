import { useState, useEffect, useRef } from "react";
import {
  ContentNavDiv,
  HeaderContainer,
  HeroText,
  Logo,
  Nav,
  NavItem,
  NavLink,
  NavList,
  BackgroundImage,
  Button,
  DivChamada,
  DropdownMenu,
  DropdownMenuList,
  MenuIcon,
} from "./HeaderStyled";
import Logo2 from "../../assets/Logo.webp";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Referência para o dropdown

  const toggleMenu = (): void => {
    setOpen((prev) => !prev); // Alterna entre true e false
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      // Se clicou no MenuIcon, não faz nada
      const menuIcon = document.getElementById("menu-icon");
      if (menuIcon && menuIcon.contains(event.target as Node)) {
        return;
      }
  
      setOpen(false); // Fecha o menu só se for realmente fora
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <BackgroundImage />
      <ContentNavDiv>
        <Nav>
          <a href="/">
            <Logo src={Logo2} alt="Logo" />
          </a>
          <NavList>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </NavList>
          <MenuIcon id="menu-icon" onClick={toggleMenu}>
  {open ? "X" : "☰"}
</MenuIcon>
        </Nav>
        {open && (
          <DropdownMenu ref={dropdownRef}>
            <DropdownMenuList>
              <NavItem>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </DropdownMenuList>
          </DropdownMenu>
        )}
      </ContentNavDiv>

      <HeroText>Seu novo carro está aqui!</HeroText>

      <DivChamada>
        <p>Compra, venda e consignação com confiança e agilidade</p>
        <Button>Ver carros disponíveis</Button>
      </DivChamada>
    </HeaderContainer>
  );
};

export default Header;