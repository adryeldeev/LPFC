import styled from "styled-components";

export const ContentCadastrarVeiculos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #f0f0f0;
    padding: 20px;
    box-sizing: border-box;
    @media (max-width: 768px) {
        height: auto;
    }
    `;
export const TitleCadastrarVeiculos = styled.h1`
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 20px;
    }
    `;
export const FormCadastrarVeiculos = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
        width: 90%;
        max-width: none;
    }
    `;
export const DivInputsCadastrarVeiculos = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    background-color: #f9f9f9;
    transition: border-color 0.3s ease;
    &:focus-within {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
    `;
export const InputCadastrarVeiculos = styled.input`
    flex: 1;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 16px;
    color: #333;
    &::placeholder {
        color: #aaa;
    }
    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
    `;
export const IconWrapper = styled.div`
    font-size: 20px;
    color: #007bff;
    margin-right: 10px;
    `;
export const ButtonCadastrarVeiculos = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #0056b3;
    }
    `;
export const ContetnCadadstrarVeiculos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #f0f0f0;
    padding: 20px;
    box-sizing: border-box;
    @media (max-width: 768px) {
        height: auto;
    }
    `;
    