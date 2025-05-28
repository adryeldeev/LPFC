import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaShoppingCart, FaCar, FaHandshake } from 'react-icons/fa'; // Ícones do React Icons
import { ContentServicos, DivServicos, DivInfo, DivText } from './ServicoStyled';
const Servico = () => {
    return (_jsx(ContentServicos, { id: "servicos", children: _jsxs(DivServicos, { children: [_jsx("h2", { children: "Nossos Servi\u00E7os" }), _jsxs(DivInfo, { children: [_jsxs(DivText, { children: [_jsx(FaShoppingCart, { size: 24, style: { marginRight: '10px', color: '#4F4F4F' } }), _jsx("h3", { children: "Compra de ve\u00EDculos" }), _jsx("p", { children: "Compramos seu carro por um pre\u00E7o justo." })] }), _jsxs(DivText, { children: [_jsx(FaCar, { size: 24, style: { marginRight: '10px', color: '#4F4F4F' } }), _jsx("h3", { children: "Venda de seminovos" }), _jsx("p", { children: "Oferecemos uma sele\u00E7\u00E3o de seminovos e qualidade." })] }), _jsxs(DivText, { children: [_jsx(FaHandshake, { size: 24, style: { marginRight: '10px', color: '#4F4F4F' } }), _jsx("h3", { children: "Consigna\u00E7\u00E3o" }), _jsx("p", { children: "Vendemos seu carro usado com transpar\u00EAncia." })] })] })] }) }));
};
export default Servico;
