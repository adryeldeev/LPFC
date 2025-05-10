import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../Context/AuthProvider"; // Importa o contexto de autenticação
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
  ButtonLink,
} from "./HeaderStyled";
import Logo2 from "../../assets/Logo.webp";

const Header: React.FC = () => {
  const { user } = useAuth(); // Obtém o usuário autenticado do contexto
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
      const menuIcon = document.getElementById("menu-icon");
      if (menuIcon && menuIcon.contains(event.target as Node)) {
        return;
      }

      setOpen(false); // Fecha o menu só se for realmente fora
    }
  };

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
              <NavLink href="#sobre">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#servicos">Serviços</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contato">contato</NavLink>
            </NavItem>
            {!user ? (
              <NavItem>
                <ButtonLink>Login</ButtonLink>
              </NavItem>
            ) : (
              <NavItem>
                <ButtonLink>Sair</ButtonLink>
              </NavItem>
            )}
            {/* Links adicionais para administradores */}
            {user?.role === "ADMIN" && (
              <>
                <NavItem>
                  <NavLink href="/cadastrar-veiculo">Cadastrar Veículo</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/cadastrar-vendedor">Cadastrar Vendedor</NavLink>
                </NavItem>
              </>
            )}
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
                <NavLink href="#sore">Sobre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#servicos">Serviços</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contato">Contato</NavLink>
              </NavItem>
              {!user ? (
                <NavItem>
                  <ButtonLink>Login</ButtonLink>
                </NavItem>
              ) : (
                <NavItem>
                  <ButtonLink>Sair</ButtonLink>
                </NavItem>
              )}
              {/* Links adicionais para administradores no menu dropdown */}
              {user?.role === "ADMIN" && (
                <>
                  <NavItem>
                    <NavLink href="/veiculos">Veículo</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/vendedores">Vendedor</NavLink>
                  </NavItem>
                </>
              )}
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