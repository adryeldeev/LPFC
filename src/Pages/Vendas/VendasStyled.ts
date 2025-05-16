import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 20px;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const LeftSide = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const RightSide = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
`;

export const StepTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: #666;
  text-transform: uppercase;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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
