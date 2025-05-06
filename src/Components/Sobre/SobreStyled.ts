import styled from "styled-components";

export const ContentSobre = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    `;
    
    export const SobreTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding : 20px 90px;
    margin-top: 20px;
    width: 100%;
    heigth:50vh;
    background-color: #f0f0f0;
    `;
    
    export const SobreTitulo= styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;    
    color: #333;
    `
   export const SobreText = styled.p<{ isExpanded: boolean }>`
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
export const VerMaisButton = styled.button`
  margin-top: 10px;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;