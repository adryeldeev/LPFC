import styled from 'styled-components';

export const FiltroContainer = styled.div`
  padding: 2rem;
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;

  
  }
`;
export const DivInput = styled.div`
  display: flex;
  align-items: center;
`;

export const InputPesquisa = styled.input`
  padding: 0.7rem;
  font-size: 1rem;
  width: 300px;
  margin-right: 10px;
`;

export const BotaoPesquisar = styled.button`
  background-color: #b00;
  color: white;
  padding: 0.7rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const ListaMarcas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const MarcaItem = styled.div`
  text-align: center;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 10px;
  width: 90px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

export const MarcaImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const MarcaNome = styled.div`
  font-size: 0.9rem;
  margin-top: 0.3rem;
`;

export const BotaoEstoque = styled.button`
  background: none;
  color: #b00;
  border: 1px solid #b00;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  margin-top: 1.5rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #b00;
    color: #fff;
  }
`;
