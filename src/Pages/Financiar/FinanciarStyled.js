import styled from 'styled-components';
export const ContentFinanciar = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;

   
    @media (max-width: 768px) {
        h2 {
            font-size: 1.5rem;
        }
    }
`;
export const ContentText = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-center; 
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        
    }
`;
export const TextContato = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 400px;
    text-align: center;

    span {
        font-size: 1.2rem;
        color: #333;
        margin-bottom: 10px;
    }

   

    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;

        span {
            font-size: 1rem;
        }
        button {
            padding: 8px 16px;
            font-size: 0.9rem;
        }
        button:hover {
           transition: background-color 0.3s ease;
            background-color: #333;
        }
    }
`;
export const Button = styled.a `
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s ease;
        text-decoration: none;

        &:hover {
            transition: background-color 0.3s ease;
            background-color: #333;
        }
    }
`;
export const TextFinanciar = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 400px;
    text-align: center;

    span {
        font-size: 1.2rem;
        color: #333;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;

        span {
            font-size: 1rem;
            width:100%;


        }
    }
`;
export const DivBancos = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;
export const DivInfoBanco = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    padding: 20px;
    width:45%;
    text-align: center;

    img {
        width: 30%;
        height: auto;
        margin-bottom: 10px;
    }

    p {
        font-size: 1rem;
        color: #333;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;

        img {
            width: 30%;
        }

        p {
            font-size: 0.8rem;
        }
    }
`;
