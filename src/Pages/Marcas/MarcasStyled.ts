// src/pages/Marcas/Marcas.styles.ts
import styled from "styled-components";

export const ContentListaMarcas = styled.div`
  padding: 2rem;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #0d6efd;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const ListaMarcaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

export const CardMarca = styled.div`
  width: 200px;
  height: 220px;
  background: #f5f5f5;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
  padding: 1rem;
  text-align: center;

  &:hover .actions {
    bottom: 10px;
    opacity: 1;
  }

  img {
    width: 100px;
    height: auto;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.1rem;
    margin: 0;
  }
`;

export const CardActions = styled.div`
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  gap: 10px;

  &.actions {
    z-index: 10;
  }

  button {
    background-color: #dc3545;
    border: none;
    padding: 0.3rem 0.7rem;
    color: white;
    border-radius: 5px;
    cursor: pointer;

    &:first-child {
      background-color: #ffc107;
      color: black;
    }
  }
`;

export const ModalBackground = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
`;
