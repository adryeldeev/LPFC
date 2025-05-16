import styled from 'styled-components';




export const MapContainer = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 20px;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;
export const Left = styled.div`
  flex: 1;
min-width:400px;
  `;
export const Right = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
`;
export const MapTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: #666;
  text-transform: uppercase;
`;
export const Iframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const MapText = styled.p`
  font-size: 1rem;
  color: #222;
`;