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
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    p{
      text-align: center;
      font-size: 1.2rem;
      color: #333;}
  }
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
  border: 1px solid  #e30613;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  maring-top: 1rem;




  
  &:hover {
   background-color: #e30613;
  color: white;
  }
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
    }
`;


export const SearchContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  max-width: 420px;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 0.3rem 0.7rem;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 0.7rem 0.3rem;
    };
    
    input {
      outline: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    background: transparent;
  }
@media (max-width: 600px) {
  padding: 0.5rem 0.3rem;
  font-size: 0.9rem;
}
  
`;

export const BotaoPesquisar = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #b00;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  transition: background 0.2s, transform 0.2s;
  
  &:hover {
    background: #d00;
    transform: scale(1.05) translateY(-50%);
    }

    @media (max-width: 600px) {
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
  }
`;