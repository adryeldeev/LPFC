import styled from 'styled-components';
export const MapContainer = styled.div `
 display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 20px;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Left = styled.div `
  flex: 1;
min-width:400px;
@media (max-width: 768px) {
    min-width: 100%;
  }
  `;
export const Right = styled.div `
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  @media (max-width: 768px) {
    min-width: 100%;
    gap: 20px;
  }
`;
export const MapTitle = styled.h2 `
  font-size: 1.2rem;
  font-weight: bold;
  color: #666;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const Iframe = styled.iframe `
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    height: 300px;
  }
`;
export const MapText = styled.p `
  font-size: 1rem;
  color: #222;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
