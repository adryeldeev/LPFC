import styled from 'styled-components';

export const ContentServicos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    `;
export const DivServicos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    background-color: #F5F5F5;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const DivInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const DivText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    margin: 20px;
    text-align: center;
    h3 {
        color: #4F4F4F;
        font-size: 24px;
        margin-bottom: 10px;
    }
    p {
        color: #7D7D7D;
        font-size: 16px;
        line-height: 1.5;
    }
        @media (max-width: 768px) {
        width: 80%;
        margin-top: 10px 0;
    }
`;
