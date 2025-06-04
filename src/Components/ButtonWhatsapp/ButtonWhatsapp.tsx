import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const Button = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "+5585987733712"; // Substitua pelo número correto com DDI (ex: 55 para Brasil)

  return (
    <Button
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={30} />
    </Button>
  );
};

export default WhatsAppButton;
