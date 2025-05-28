import styled from "styled-components";
export const FooterContainer = styled.footer `
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: white;
  padding: 20px;
  font-size: 14px;
  position: relative;
  bottom: 0;
  width: 100%;
    @media (max-width: 768px) {
        font-size: 12px;
        padding: 10px;
    }
`;
