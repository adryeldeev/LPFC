import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    background-color: #f8f8f8;  
    @media (max-width: 768px) {
        padding: 10px;
    }

` 

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin-top: 20px;
`
export const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    text-align: center;
    transition: transform 0.3s;
    
    &:hover {
        transform: scale(1.05);
    }
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
`
export const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
`
