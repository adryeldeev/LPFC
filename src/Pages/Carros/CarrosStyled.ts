import styled from "styled-components";

export const CarrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  h1{
  
    text-align: start;
    margin-left:120px;
    font-size: 24px;
    color: #333;

  
  }
`;

export const DivAdd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ListaCarrosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
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
  align-items: center;
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
export const CarroSliderWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;

  .slick-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;