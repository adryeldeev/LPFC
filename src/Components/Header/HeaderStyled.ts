import styled from 'styled-components';

import ImgFundo2 from "../../assets/Title.png"; // Importa aqui para usar no styled

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  color: white;
  font-size: 1.5em;
  position: relative;
  z-index: 0;
  width: 100%;
  height: 70vh;

  @media (max-width: 900px) {
    height: 30vh;
  }
  @media (max-width: 600px) {
    height: 28vh;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${ImgFundo2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;

  @media (max-width: 600px) {
    background-size: contain;
   
  }
`;



    


        


