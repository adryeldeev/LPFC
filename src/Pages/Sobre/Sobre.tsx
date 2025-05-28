import React, { useState, useEffect } from "react";
import { BotaoWhatsApp, ContentSobre, DivContato, DivInfoContato, SobreText, SobreTextDiv, SobreTitulo } from "./SobreStyled";
import Mapa from "../../Components/Mapa/Mapa";
import { FaWhatsapp } from "react-icons/fa";

const Sobre: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleText = () => {
    setIsExpanded((prev) => !prev);
  };

  // Hook para monitorar o tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const mensagemWhats = "Olá, Felipe! Estou interessado em saber mais sobre os veículos disponíveis. Poderia me ajudar?";
  const telefoneFormatado = "55987733712";

  return (
    <ContentSobre id="sobre">
      <SobreTextDiv>
        <SobreTitulo>Sobre Felipe Caneiro</SobreTitulo>
        <SobreText isExpanded={isExpanded || !isMobile}>
          Felipe Carneiro Alves do Vale iniciou sua trajetória no setor automotivo lavando carros, onde, com muita determinação e paixão pelo que fazia, rapidamente se destacou. Seu talento o levou a se tornar um dos principais vendedores da CODISMAN, onde construiu uma carreira sólida ao longo de 15 anos.
          Inconformado com a rotina e impulsionado pelo desejo de crescer, Felipe decidiu dar um passo corajoso e empreender. Assim, em dezembro de 2024, nasceu a Felipe Carneiro Motors — uma empresa criada para transformar a experiência de compra e venda de veículos, oferecendo atendimento diferenciado, ambiente confortável e o compromisso genuíno de ajudar cada cliente a realizar o sonho do primeiro carro ou da tão esperada troca.
          Movido pelo seu espírito empreendedor, Felipe também expandiu seus horizontes e fundou uma barbearia, unindo duas grandes paixões: carros e cuidado pessoal, sempre com o mesmo foco na excelência no atendimento e na realização de sonhos.
        </SobreText>
        {isMobile && (
          <button
            onClick={toggleText}
            style={{
              marginTop: "10px",
              background: "none",
              border: "none",
              color: "#007BFF",
              cursor: "pointer",
            }}
          >
            {isExpanded ? "Ver menos" : "Ver mais"}
          </button>
        )}
      </SobreTextDiv>
      <DivContato>

        <h2>Atendimento</h2>
        <DivInfoContato>
        <span>Entre em contato pelo WhatsApp da Felipe Carneiro:</span>

          <BotaoWhatsApp
                      href={`https://wa.me/${telefoneFormatado}?text=${encodeURIComponent(mensagemWhats)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Fale com o vendedor via WhatsApp`}
                    >
                      <FaWhatsapp style={{ marginRight: "8px" }} />
                      Fale conosco
                    </BotaoWhatsApp>
                  
                      </DivInfoContato>
      </DivContato>
      <Mapa/>
    </ContentSobre>
  );
};

export default Sobre;