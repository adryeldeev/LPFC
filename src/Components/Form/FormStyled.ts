import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  margin: auto;
  h3{
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom:30px;
  
  }
    p{
    font-size: 0.8rem;
    color: #666;
    margin-top: 5px;

    
    }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 1rem;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`;

export const Button = styled.button`
  padding: 10px;
   background-color: #e30613;
  color: white;
  border: 1px solid #000;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
  transform: scale(1.05);
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.9rem;
  font-weight: 500;
`;
