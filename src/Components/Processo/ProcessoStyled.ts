import styled from "styled-components";

export const ContentProcesso = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    
    h2 {
        font-size: 2rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 20px;
    }
    @media (max-width: 768px) {
        h2 {
            font-size: 1.5rem;
        }
    }
    `;
export const ContentInfo = styled.div`
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
    }
`;
export const CardProcesso = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 200px;
    text-align: center;

    .icon {
        font-size: 2rem;
        color: #333;
        margin-bottom: 10px;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
    }

    p {
        font-size: 1rem;
        color: #666;
        line-height: 1.5;
    }
    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
        margin: 10px 0;
    }
`;
