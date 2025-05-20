// EstoqueStyled.ts
import styled from 'styled-components';

export const EstoqueContainer = styled.div`
  padding: 2rem;
`;

export const ListaVeiculos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const CardVeiculo = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fff;
`;

export const ImagemVeiculo = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
`;

export const NomeVeiculo = styled.h3`
  margin: 0.5rem 0;
`;

export const Detalhes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0.5rem;

  & > div {
    width: 48%;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;

    svg {
      margin-right: 0.3rem;
    }
  }
`;

export const Paginacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;

  button {
    background: none;
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }

  span {
    font-size: 0.95rem;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px; // Ajuste aqui para afastar do conteúdo acima
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ccc;
    color: #000;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;