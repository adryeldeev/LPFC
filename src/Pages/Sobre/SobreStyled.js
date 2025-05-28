import styled from "styled-components";
export const ContentSobre = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    padding: 20px 90px;
    @media (max-width: 768px) {
        padding: 20px 20px;
    }
    `;
export const SobreTextDiv = styled.div `
    display: flex;
    flex-direction: column;
    padding : 20px 90px;
    margin-top: 20px;
    width: 100%;
    heigth:50vh;
    background-color: #f0f0f0;
    @media (max-width: 768px) {
        padding: 20px 20px;
    }
    `;
export const SobreTitulo = styled.h2 `
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;    
    color: #333;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    `;
export const SobreText = styled.p `
  font-size: 1.2rem;
  color: #666;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.isExpanded ? "none" : "3")}; /* Mostra 3 linhas por padrão */
  -webkit-box-orient: vertical;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const VerMaisButton = styled.button `
  margin-top: 10px;

  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
export const DivContato = styled.div `
  display: flex;
  flex-direction: column;
  padding : 20px 90px;
  margin-top: 20px;
  width: 100%;
  heigth:50vh;
  background-color: #f0f0f0;
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;
export const DivInfoContato = styled.div `
  display: flex;
  flex-direction: column;
  padding : 20px 90px;
  margin-top: 20px;
  width: 100%;
  heigth:50vh;
  background-color: #f0f0f0;
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;
export const BotaoWhatsApp = styled.a `
  display: flex;
  align-items: center;
  background-color: #25d366;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  width: 200px;
  &:hover {
    background-color: #128c7e;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
export const MapaContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
`;
