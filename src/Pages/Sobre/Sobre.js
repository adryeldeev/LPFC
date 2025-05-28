import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { BotaoWhatsApp, ContentSobre, DivContato, DivInfoContato, SobreText, SobreTextDiv, SobreTitulo } from "./SobreStyled";
import Mapa from "../../Components/Mapa/Mapa";
import { FaWhatsapp } from "react-icons/fa";
const Sobre = () => {
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
    return (_jsxs(ContentSobre, { id: "sobre", children: [_jsxs(SobreTextDiv, { children: [_jsx(SobreTitulo, { children: "Sobre Felipe Caneiro" }), _jsx(SobreText, { isExpanded: isExpanded || !isMobile, children: "Felipe Carneiro Alves do Vale iniciou sua trajet\u00F3ria no setor automotivo lavando carros, onde, com muita determina\u00E7\u00E3o e paix\u00E3o pelo que fazia, rapidamente se destacou. Seu talento o levou a se tornar um dos principais vendedores da CODISMAN, onde construiu uma carreira s\u00F3lida ao longo de 15 anos. Inconformado com a rotina e impulsionado pelo desejo de crescer, Felipe decidiu dar um passo corajoso e empreender. Assim, em dezembro de 2024, nasceu a Felipe Carneiro Motors \u2014 uma empresa criada para transformar a experi\u00EAncia de compra e venda de ve\u00EDculos, oferecendo atendimento diferenciado, ambiente confort\u00E1vel e o compromisso genu\u00EDno de ajudar cada cliente a realizar o sonho do primeiro carro ou da t\u00E3o esperada troca. Movido pelo seu esp\u00EDrito empreendedor, Felipe tamb\u00E9m expandiu seus horizontes e fundou uma barbearia, unindo duas grandes paix\u00F5es: carros e cuidado pessoal, sempre com o mesmo foco na excel\u00EAncia no atendimento e na realiza\u00E7\u00E3o de sonhos." }), isMobile && (_jsx("button", { onClick: toggleText, style: {
                            marginTop: "10px",
                            background: "none",
                            border: "none",
                            color: "#007BFF",
                            cursor: "pointer",
                        }, children: isExpanded ? "Ver menos" : "Ver mais" }))] }), _jsxs(DivContato, { children: [_jsx("h2", { children: "Atendimento" }), _jsxs(DivInfoContato, { children: [_jsx("span", { children: "Entre em contato pelo WhatsApp da Felipe Carneiro:" }), _jsxs(BotaoWhatsApp, { href: `https://wa.me/${telefoneFormatado}?text=${encodeURIComponent(mensagemWhats)}`, target: "_blank", rel: "noopener noreferrer", "aria-label": `Fale com o vendedor via WhatsApp`, children: [_jsx(FaWhatsapp, { style: { marginRight: "8px" } }), "Fale conosco"] })] })] }), _jsx(Mapa, {})] }));
};
export default Sobre;
