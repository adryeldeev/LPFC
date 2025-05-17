import styled from 'styled-components';

import ImgFundo2 from "../../assets/Title.png"; // Importa aqui para usar no styled

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0; /* Ajuste o padding para 0 */
  
  color: white;
  font-size: 1.5em;
 
 
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


/* Ajuste para afastar a imagem mais para o fundo */
`;




    


        


