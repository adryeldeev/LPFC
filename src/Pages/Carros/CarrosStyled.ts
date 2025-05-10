import styled from "styled-components";

export const ListaCarrosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

export const CarroCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CarroImagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CarroInfo = styled.div`
  margin-top: 10px;
  text-align: center;

  h3 {
    font-size: 18px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

export const PaginacaoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const BotaoPaginacao = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;