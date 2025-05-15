import styled from "styled-components";

export const ContentCadastrarMarcas = styled.div`
  padding: 2rem;
`;
export const Form = styled.form`
  display: flex;
  gap: 1rem;
        margin-top: 1rem;
    width: 300px;
@media (max-width: 768px) {
    width: 100%;
    }
    background: #f5f5f5;
    padding: 1rem;
    border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
    }


`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;
export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;
export const ButtonSalvar = styled.button`
  background-color: #0d6efd;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
