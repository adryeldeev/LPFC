import styled from "styled-components";

export const ContentVenda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 20px;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 5px;
  }
`;

export const LeftSide = styled.div`
  flex: 1;
  min-width: 300px;
  @media (max-width: 900px) {
    width: 100%;
    min-width: unset;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  @media (max-width: 900px) {
    width: 100%;
    min-width: unset;
    align-items: center;
    text-align: center;
  }
`;

export const StepTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: #666;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
 @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
 
`;

export const IconWrapper = styled.div`
  color: #000;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepText = styled.p`
  font-size: 1rem;
  color: #222;
`;


export const ContentOpcoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export const ContentText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const CardProcesso = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;

  .icon {
    font-size: 2rem;
    color: #333;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;
