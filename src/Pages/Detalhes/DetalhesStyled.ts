import styled from "styled-components";

export const DetalhesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  max-width: 1280px;
  margin: 0 auto;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ImagemPrincipalContainer = styled.div`
  flex: 1;
`;

export const GaleriaSwiper = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;

export const MiniaturasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const Miniatura = styled.img`
  width: 100%;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.7;
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

export const InformacoesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.75rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.25rem;
    color: #4caf50;
  }

  p {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  strong {
    font-weight: 600;
  }
`;

export const BotaoWhatsApp = styled.a`
  margin-top: 1rem;
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
`;
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  h3 {
    font-size: 1.25rem;
    color: #4caf50;
  }
  p {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  strong {
    font-weight: 600;
  }
  svg {
    color: #4caf50;
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

`	
export const Linha = styled.hr`
  border: 1px solid #e0e0e0;
  margin: 1rem 0;
`;
export const Skeleton = styled.div`
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
export const ImagemPrincipal = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
  max-width: 1280px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;


