import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaCalendarAlt, FaCogs, FaGasPump } from 'react-icons/fa';
import { CardProcesso, ContentInfo, ContentProcesso } from './ProcessoStyled';
const Processo = () => {
    const card = [
        {
            id: 1,
            icon: _jsx(FaCalendarAlt, {}),
            title: "Pesquisa",
            description: "Fazemos a pesquisa de taxas nos bancos com base nos seus dados básicos, do veículo e valor a ser financiado."
        },
        {
            id: 2,
            icon: _jsx(FaGasPump, {}),
            title: "Simulação",
            description: "Simulamos as melhores taxas de financiamento para você."
        },
        {
            id: 3,
            icon: _jsx(FaCogs, {}),
            title: "Aprovação",
            description: "Aprovação do financiamento com o banco escolhido."
        },
    ];
    return (_jsxs(ContentProcesso, { children: [_jsx("h2", { children: "Veja como o processo \u00E9 f\u00E1cil" }), _jsx(ContentInfo, { children: card.map((item) => (_jsxs(CardProcesso, { children: [_jsx("div", { className: "icon", children: item.icon }), _jsx("h3", { children: item.title }), _jsx("p", { children: item.description })] }, item.id))) })] }));
};
export default Processo;
