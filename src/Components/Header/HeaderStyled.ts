import styled from 'styled-components';

import ImgFundo2 from "../../assets/ImgFundo2.webp"; // Importa aqui para usar no styled

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0; /* Ajuste o padding para 0 */
  background-color: #000; /* Cor de fundo padrão */
  color: white;
  font-size: 1.5em;
 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 0;
  width: 100%;
  height: 70vh;
`;

export const BackgroundImage = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url(${ImgFundo2});
background-size: cover; /* Faz a imagem ocupar toda a tela */
background-position: center 10%; /* Move a imagem para baixo (20% da altura) */
background-repeat: no-repeat;
z-index: -1;
opacity: 0.5;

/* Ajuste para afastar a imagem mais para o fundo */
`;

export const ContentNavDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

export const HeroText = styled.div`
  margin-top: 110px;
  text-align: center;
  color: white;
  z-index: 1;
  font-size: 2.5rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;


    
        export const Nav = styled.nav`
    display: flex;
justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
        }
        `

export const NavList = styled.ul`
    display: flex;
    list-style: none;
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
    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 768px) {
        font-size: 0.9em;
        }
        `
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
        
        export const DivChamada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 150px;
    color: white;
    font-weight: bold;
    z-index: 1;
    @media (max-width: 768px) {
        font-size: 1em;
        margin-top: 10px;
        }
      p{
      font-size:20px;
      color: #FFFFFF;
      }
      @media (max-width: 768px) {
        p{font-size: 15px;
        margin-top: 10px;
        }
}
        `


export const Button = styled.button`
    background-color: #fff; /* Cor de fundo do botão */
    margin-top:20px;
    color: #000; /* Cor do texto do botão */
    border: none; /* Remove a borda padrão */
    border-radius: 5px; /* Arredonda os cantos do botão */
    padding: 10px 20px; /* Espaçamento interno do botão */
    font-size: 1em; /* Tamanho da fonte do botão */
    heigth:100px;
    width: 300px; /* Largura do botão */
    cursor: pointer; /* Muda o cursor para indicar que é clicável */
    transition: background-color 0.3s ease; /* Transição suave para a cor de fundo */
    &:hover {
       
        background-color: #f0f0f0; /* Cor de fundo ao passar o mouse */
    }
    @media (max-width: 768px) {
        font-size: 0.9em; /* Tamanho da fonte do botão em telas menores */
        padding: 8px 16px; /* Espaçamento interno do botão em telas menores */
    }

    `
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