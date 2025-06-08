import styled from "styled-components";

export const GaleriaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
  padding: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Principal = styled.div`
   width: 100%;
  max-width: 600px;
  height: 350px; /* Altura fixa */
  overflow: hidden;
  border-radius: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Preenche mantendo proporção e cortando o excesso */
    display: block;
  }
`;

export const Miniaturas = styled.div`
  width: 48%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  img:hover {
    transform: scale(1.03);
  }
    @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    img {
      height: 100px;
    }
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    img {
      height: 80px;
    }
  }

`;
export const MiniaturaWrapper = styled.div`
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.2s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    img {
      height: 100px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 80px;
    }
  }
`;

export const OverlayTexto = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);
  pointer-events: none;
`;

export const DetalhesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 20px;
  padding: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 480px) {
    padding: 8px;
  }
`;
export const BoxMarcaPreco = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;

  img {
    width: 60px;
    height: auto;
    border-radius: 8px;
  }

  h2 {
    margin: 0;
    font-size: 24px;
  }

  h3 {
    color: #008000;
    font-size: 20px;
    margin-top: 4px;
  }
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    img {
      width: 50px;
    }
    h2 {
      font-size: 20px;
    }
`;

export const BoxFichaTecnica = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas fixas */
    gap: 12px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas menores */
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr; /* 1 coluna em telas muito pequenas */
    }
  }
    span{
    font-size: 26px;
    font-weight: bold;
    color: #333;
    margin-top: 23px;
    padding: 3px 6px;
    @media (max-width: 768px) {
      font-size: 20px;
      margin-top: 16px;


    }
  p{
    margin: 0;
    font-size: 16px;
    color: #011;
    font-weight: 500;
    margin-top: 4px;
    padding: 4px 8px;
    @media (max-width: 768px) {
      font-size: 14px;
      margin-top: 2px;
    }
  .item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    background-color: #fff;
    padding: 10px 12px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
`;
export const InfoCarro = styled.div`
  flex: 1;

  h2 {
    margin-bottom: 4px;
    font-size: 24px;
  }

  h3 {
    color: #008000;
    margin-bottom: 16px;
    font-size: 20px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 16px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 18px;
    }

    ul li {
      font-size: 14px;
    }
  }
`;


export const BotaoWhatsappContainer = styled.div`
  min-width: 260px;
  align-self: flex-start;
  @media (max-width: 768px) {
    align-self: center;
    margin-top: 16px;
  }
`;

export const BotaoWhatsapp = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e30613;
  color: #fff;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  gap: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c90010;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    padding: 10px;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalSlider = styled.div`
  background: #fff;
  padding: 20px;
  width: 90%;
  max-width: 900px;
  border-radius: 8px;
  position: relative;
`;

export const FecharModal = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
  z-index: 1000;
`;