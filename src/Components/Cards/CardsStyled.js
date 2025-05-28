// src/components/CardSection/styles.ts
import styled from "styled-components";
export const Container = styled.div `
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    @media (max-width: 600px) {
    padding: 0.5rem;
    gap: 0.5rem;
  }
`;
export const Card = styled.div `
  display: flex;
  background-color: #1a1a1a;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  flex: 1 1 48%;
  min-width: 300px;
  border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    @media (max-width: 600px) {
    flex: 1 1 100%;
    min-width: 100%;
    }
`;
export const Content = styled.div `
  flex: 1;
  padding: 1.5rem;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;
export const Title = styled.h2 `
  margin: 0 0 0.5rem;
  font-size: 1.4rem;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
export const Description = styled.p `
  font-weight: bold;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;
export const Button = styled.button `
  background-color: #e30613;
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 600px) {
    padding: 0.5rem 1rem;
  }

`;
export const ImageWrapper = styled.div `
  flex-shrink: 0;

  img {
    height: 100%;
    width: 180px;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    img {
      width: 100px;
    }
  }
`;
