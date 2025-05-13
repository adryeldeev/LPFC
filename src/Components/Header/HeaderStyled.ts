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
background-position: center 5%; /* Move a imagem para baixo (20% da altura) */
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


    


        
        export const DivChamada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 50px;
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
    margin-top:10px;
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
