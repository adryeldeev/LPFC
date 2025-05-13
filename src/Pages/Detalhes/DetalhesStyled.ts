import styled from 'styled-components';


export const DetalhesContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

export const ImagemPrincipalContainer = styled.div`
  flex: 1;
`;

export const MiniaturasContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const Miniatura = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    border-color: #007bff;
  }
`;

export const InformacoesContainer = styled.div`
  flex: 1;
`;

export const BotaoWhatsApp = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #25d366;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: #1da851;
  }
`;