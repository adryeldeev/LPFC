import styled from "styled-components";

interface SkeletonProps {
  width?: string;
  height?: string;
}

export const ContentDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start; /* Alinha topo para evitar espaço extra */
  }
`;

export const ImagemPrincipalContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 1024px) {
    flex: 0 0 60%; /* Ajusta a largura para telas maiores */
  }
    @media (max-width: 768px) {
    flex: 0 0 100%; /* Ajusta a largura para telas menores */
  }
`;

export const ImagemPrincipal = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  display: block; /* Evita gaps em imgs inline */
  @media (max-width: 768px) {
    width: 100%;
    height: 300px; /* Altura fixa para telas menores */
  }
`;

export const MiniaturasContainer = styled.div`
  width: 100%;
  max-height: 320px; /* Controla a altura para miniaturas */
  overflow: hidden;

  .swiper {
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-wrapper {
    display: flex;
    gap: 1rem; /* Espaçamento entre miniaturas */
  }
  .swiper-slide {
    width: 100px; /* Largura fixa para miniaturas */
    height:100px; /* Altura fixa para miniaturas */
    border-radius: 8px;
    cursor: pointer;
    opacity: 0.9;
    transition: all 0.2s ease-in-out;
    border: 2px solid transparent;

    &.ativa {
      opacity: 1;
      border-color: #22c55e;
    }

    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    max-height: 200px; /* Altura reduzida para telas menores */
    .swiper-slide {
      width: 80px; /* Largura reduzida para telas menores */
      height: 80px; /* Altura reduzida para telas menores */
    }
  }
`;

export const Miniatura = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.2s ease-in-out;
  border: 2px solid transparent;

  &.ativa {
    opacity: 1;
    border-color: #22c55e;
  }

  &:hover {
    opacity: 1;
  }
`;
export const Infos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: auto;
  min-height: 450px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.25rem;
    color: #4caf50;
  }

  h4 {
    font-size: 1.5rem;
    color: #222;
    font-weight: 700;
  }

  p,
  strong {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.25rem;
    }
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.875rem;
    }
  }
  @media (min-width: 1024px) {
    flex: 0 0 35%; /* Ajusta a largura para telas maiores */
  }
  @media (max-width: 768px) {
    flex: 0 0 100%; /* Ajusta a largura para telas menores */
  }
`;
export const MarcaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  padding: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start; /* Alinha os itens à esquerda */
  }
`;

export const MarcaLogo = styled.img`
  width: 50px;
  height: auto;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 40px; /* Largura reduzida para telas menores */
  }
`;

export const MarcaNome = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1rem; /* Tamanho reduzido para telas menores */
  }
`;
export const Linha = styled.hr`
  border: 1px solid #e0e0e0;
  margin: 1rem 0;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0.5rem 0; /* Margem reduzida para telas menores */
  }
`;

export const InfoItem = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #555;

  svg {
    color: #4caf50;
  }
  @media (max-width: 768px) {
    font-size: 0.875rem; /* Tamanho reduzido para telas menores */
  }
`;

export const BotaoWhatsApp = styled.a`
  margin-top: auto; /* Empurra o botão para baixo */
  background-color: #25d366;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 0.75rem;
  border-radius: 8px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1ebc59;
  }
  svg {
    margin-right: 0.5rem;
  }
  @media (max-width: 768px) {
    font-size: 0.875rem; /* Tamanho reduzido para telas menores */
    padding: 0.5rem; /* Padding reduzido para telas menores */
  }
    
`;

export const Skeleton = styled.div<SkeletonProps>`
  background-color: #e0e0e0;
  border-radius: 4px;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "1rem"};
  margin-top: 0.5rem;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
