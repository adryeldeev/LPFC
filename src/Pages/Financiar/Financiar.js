import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ContentFinanciar, TextContato, ContentText, DivBancos, TextFinanciar, DivInfoBanco, Button } from './FinanciarStyled';
import BV from '../../assets/bancos/bv_2x.webp';
import bradesco from '../../assets/bancos/bradesco_2x.webp';
import itau from '../../assets/bancos/itau_2x.webp';
import santander from '../../assets/bancos/santander_2x.webp';
import banco_pan from '../../assets/bancos/banco-pan_2x.webp';
import FormFinanciamento from '../../Components/FormFinan/FormFinan';
import Mapa from '../../Components/Mapa/Mapa';
import Redes from '../../Components/Redes/Redes';
const Financiar = () => {
    return (_jsxs(ContentFinanciar, { children: [_jsx("h2", { children: "Financiar" }), _jsxs(ContentText, { children: [_jsxs(TextFinanciar, { children: [_jsx("span", { children: "Fa\u00E7a o financiamento de ve\u00EDculo particular aqui com a gente. A Felipe Carneiro Motors tem parceria com as principais financiadoras do mercado." }), _jsxs(DivBancos, { children: ["''", _jsxs(DivInfoBanco, { children: [_jsx("img", { src: BV, alt: "Banco BV" }), _jsx("p", { children: "Banco BV" })] }), _jsxs(DivInfoBanco, { children: [_jsx("img", { src: bradesco, alt: "Bradesco" }), _jsx("p", { children: "Bradesco" })] }), _jsxs(DivInfoBanco, { children: [_jsx("img", { src: itau, alt: "Ita\u00FA" }), _jsx("p", { children: "Ita\u00FA" })] }), _jsxs(DivInfoBanco, { children: [_jsx("img", { src: santander, alt: "Santander" }), _jsx("p", { children: "Santander" })] }), _jsxs(DivInfoBanco, { children: [_jsx("img", { src: banco_pan, alt: "Banco Pan" }), _jsx("p", { children: "Banco Pan" })] })] })] }), _jsxs(TextContato, { children: [_jsx("span", { children: "Entre em contato com a gente e fa\u00E7a uma simula\u00E7\u00E3o de financiamento. Estamos prontos para te ajudar!" }), _jsx(Button, { href: "#contato", children: "Fale Conosco" })] })] }), _jsx(FormFinanciamento, {}), _jsx(Redes, {}), _jsx(Mapa, {})] }));
};
export default Financiar;
