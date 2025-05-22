import styled from "styled-components";

export const RedesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    h2 {
        font-size: 24px;
        margin-bottom: 10px;
        color: #343a40;
    }
    
    @media (max-width: 768px) {
        padding: 15px;
        h2 {
            font-size: 20px;
        }
    }
`;

export const InfoRedes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
    
    img {
        width: 30px;
        height: 30px;
        transition: transform 0.3s;
    
        &:hover {
        transform: scale(1.1);
        }
    }
    @media (max-width: 768px) {
        gap: 10px;
        img {
            width: 25px;
            height: 25px;
        }
    }
        
    `;

