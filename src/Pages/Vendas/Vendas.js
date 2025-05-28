import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormPropostaVenda } from "../../Components/Form/Form";
import Mapa from "../../Components/Mapa/Mapa";
import Redes from "../../Components/Redes/Redes";
import { ContentVenda, Container, LeftSide, RightSide, Step, StepText, StepTitle, IconWrapper, ContentText, ContentOpcoes, CardProcesso } from "./VendasStyled";
import { FaComments, FaClipboardList, FaHandshake } from "react-icons/fa"; // Ícones equivalentes
export default function Venda() {
    const card = [
        {
            id: 1,
            position: "1",
            title: "Venda na hora!",
            description: "Para quem precisa de dinheiro na hora! Compramos o seu veículo e pagamos à vista. Simples assim."
        },
        {
            id: 2,
            position: "2",
            title: "Venda com troca",
            description: "Quer trocar de carro? Nós compramos o seu e você sai com outro zero km ou seminovo."
        },
        {
            id: 3,
            position: "3",
            title: "Consignação",
            description: "Mais segurança e rentabilidade para você! Anunciamos seu veículo nos principais portais e passamos as propostas. Quando vendido, você recebe o valor à vista."
        }
    ];
    return (_jsxs(ContentVenda, { children: [_jsx("h2", { children: "Quer vender seu ve\u00EDculo?" }), _jsx("p", { children: "Solicite a avalia\u00E7\u00E3o agora!" }), _jsxs(Container, { children: [_jsx(LeftSide, { children: _jsx(FormPropostaVenda, {}) }), _jsxs(RightSide, { children: [_jsx(StepTitle, { children: "QUAIS S\u00C3O OS PR\u00D3XIMOS PASSOS?" }), _jsxs(Step, { children: [_jsx(IconWrapper, { children: _jsx(FaComments, { size: 36 }) }), _jsx(StepText, { children: "Entramos em contato" })] }), _jsxs(Step, { children: [_jsx(IconWrapper, { children: _jsx(FaClipboardList, { size: 36 }) }), _jsx(StepText, { children: "Avaliamos seu ve\u00EDculo" })] }), _jsxs(Step, { children: [_jsx(IconWrapper, { children: _jsx(FaHandshake, { size: 36 }) }), _jsx(StepText, { children: "Fechamos neg\u00F3cio" })] })] })] }), _jsxs(ContentOpcoes, { children: [_jsx("h2", { children: "Conhe\u00E7o as suas  op\u00E7\u00F5es" }), _jsx(ContentText, { children: card.map((item) => (_jsxs(CardProcesso, { children: [_jsx("div", { className: "icon", children: _jsx("span", { children: item.position }) }), _jsx("h3", { children: item.title }), _jsx("p", { children: item.description })] }, item.id))) })] }), _jsx(Redes, {}), _jsx(Mapa, {})] }));
}
