import styled from 'styled-components';

export const FiltroContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 2rem 2.5rem;
  margin: 2rem auto;
  max-width:100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 600px) {
    padding: 1.5rem 1rem;
    margin: 1rem auto;
    gap: 1.5rem;
  }
`;


export const FiltroHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start; // Alinha à esquerda
  justify-content: center;
  width: 100%;
  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

export const DivInput = styled.form`
  position: relative;
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
  }
`;


export const InputPesquisa = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 1.1rem;
  padding: 0.7rem 2.5rem 0.7rem 0.5rem; // espaço à direita para o botão
  outline: none;
  color: #222;

  &::placeholder {
    color: #aaa;
    font-size: 1rem;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between; // Mantém os itens nos extremos
  align-items: center;
  width: 100%;
  max-width: 100%; // Garante que ocupe toda a largura do container
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: 100%;
    max-width: 100%;
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

export const ListaMarcas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 120px));
  justify-content: start;
  gap: 1.2rem;
  margin-top: 0.5rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 0.8rem;
  }
`;

export const MarcaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 0.7rem 0.3rem;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s, border 0.2s;
  border: 2px solid transparent;

  &:hover {
    box-shadow: 0 4px 16px rgba(176,0,0,0.15);
    border: 2px solid #101010;
    transform: translateY(-4px) scale(1.04);
  }
  @media (max-width: 600px) {
    padding: 0.5rem 0.2rem;
  }
`;

export const MarcaImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-bottom: 0.3rem;

  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
  }
`;

export const MarcaNome = styled.div`
  font-size: 0.95rem;
  color: #222;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const BotaoEstoque = styled.button`
  background: none;
  color: #b00;
  border: 1.5px solid #b00;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  margin-top: 1rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background-color: #b00;
    color: #fff;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 0.5rem 0.5rem;
    font-size: 0.9rem;
  }
`;