import styled from "styled-components";

export const ContentDestaque = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f8f9fa;
  margin-top: 20px;
`;  

export const ListaDestaque = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
`;
export const ItemDestaque = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
    color: #333;
  }
  
  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
    text-align: center;
  }

`;
export const Button = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: 1px solid  #e30613;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;




  
  &:hover {
   background-color: #e30613;
  color: white;
  }
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
    }
`;