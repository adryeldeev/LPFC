import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
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

export const Left = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 900px) {
    width: 100%;
    min-width: unset;
  }
`;
export const Rigth = styled.div`
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


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    @media (max-width: 900px) {
        max-width: 100%;
        padding: 10px;
    }
`;
export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    &:focus {
        border-color: #000;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
`;
export const Button = styled.button`
    padding: 10px 20px;
    background-color: #e30613;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 900px) {
      width: 100%;
    }
`;
export const Label = styled.label`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
`;
export const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
`;
export const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;




export const Div = styled.div`
    display: flex;
    gap:10px;

    `
    export const ErrorMessage = styled.span`
      color: red;
      font-size: 0.9rem;
      font-weight: 500;
    `;
    