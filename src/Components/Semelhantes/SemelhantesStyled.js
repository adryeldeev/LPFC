import styled from "styled-components";
export const Container = styled.div `
  margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    background-color: #f9f9f9;
    @media (max-width: 768px) {
    padding: 10px;
    }



  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;
export const Lista = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    gap: 10px;
    }
`;
export const Card = styled.div `
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s ease;
  background-color: #fff;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
    @media (max-width: 768px) {
        width: 100%;
        max-width: 90%;
        margin: 0 auto;
    }
`;
export const Img = styled.img `
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  @media (max-width: 768px) {
    height: 100px;
  }
`;
export const Nome = styled.h4 `
  margin: 10px 0 5px;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
export const Preco = styled.p `
  font-weight: bold;
  color: green;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
