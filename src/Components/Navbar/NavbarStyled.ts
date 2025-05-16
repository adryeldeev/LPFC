import styled from "styled-components";

export const ContentNavDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

export const Nav = styled.nav`
position: absolute;
top: 0;
left: 0;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 40px;
  background-color: rgba(0, 0, 0, 0.85); /* mais escuro e semi-transparente */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6); /* sombra mais suave */
  backdrop-filter: blur(4px); /* leve efeito de desfoque no fundo */
z-index: 10;

@media (max-width: 768px) {
  padding: 10px 20px;
  flex-direction: row;
}
`;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    background-color: transparent;


    
    padding: 0;
    margin: 0;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        }
        
  @media (max-width: 768px) {
    display: none; /* Esconde o menu em telas menores */
  }
        `
export const NavItem = styled.li`
    margin: 0 10px;
    font-size: 1.2em;
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 768px) {
        margin: 5px 0;
        font-size: 1em;
        }
        `
export const NavLink = styled.a`
    color: white;
    text-decoration: none;
     background-color: transparent;
         border:none;
         padding:0;
           font-size: 0.9em;
        font-weight: bold;
         cursor:pointer;
     &:hover {
        text-decoration: underline;
    }
    @media (max-width: 768px) {
        font-size: 0.9em;
        }
        `;


        export const ButtonLink = styled.button`
        background-color: transparent;
        border: none;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        padding: 10px 15px;
        text-decoration: none;
      
      
        &:hover {
          color: #007bff;
        }
      `;
      export const AdminDropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: block;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  top: 100%;
  right: 0;

  a {
    color: #000;
    padding: 10px 15px;
    display: block;
    text-decoration: none;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;
    
        export const DropdownMenu = styled.div`
        position: absolute;
        top: 80px;
        right: 0;
        background-color: #000;
        color: white;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 3;
    
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
    
        li {
            margin: 5px 0;
        }
           @media (min-width: 769px) {
        display: none; /* Esconde o menu dropdown em telas maiores */
      }
        
    `;
    export const Logo = styled.img`
        width: 50px;
        height: 50px;
        margin-right: 20px;
        border-radius: 15%;
        @media (max-width: 768px) {
            width: 40px;
            height: 40px;
            margin-right: 10px;
            }
            `
    export const MenuIcon = styled.div`
        display: none; /* Esconde o ícone do menu em telas maiores */
        font-size: 2em;
        padding: 20px;
        cursor: pointer;
        @media (max-width: 768px) {
            display: block; /* Mostra o ícone do menu em telas menores */
            }
            `;
            export const DropdownMenuList = styled.ul`
      display: none; /* Esconde o menu dropdown por padrão */
      list-style: none;
            padding: 20px;
      padding: 0;
      margin: 0;
      gap: 10px;
      flex-direction: column;
    
      @media (max-width: 768px) {
        display: flex; /* Mostra o menu dropdown em telas menores */
      }
    `;