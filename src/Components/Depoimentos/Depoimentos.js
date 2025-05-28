import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Cards, Content, Div, Title } from './DepoimentosStyled';
import Redes from '../Redes/Redes';
import depo1 from '../../assets/depoFc1.webp';
import depo2 from '../../assets/depoFc2.webp';
import depo3 from '../../assets/depoFC3.webp';
const Depoimentos = () => {
    const cards = [
        {
            id: 1,
            name: 'Lucas',
            text: 'Preço justo, carros de qualidade. Atendimento excelente.',
            image: depo1,
        },
        {
            id: 2,
            name: 'Maria',
            text: 'Transparência e ótimo pós-venda, ótimo suporte.',
            image: depo2,
        },
        {
            id: 3,
            name: 'João',
            text: 'Comprei meu carro lá e o atendimento é ótimo. Garantia funciona, recomendo.',
            image: depo3,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsxs(Content, { children: [_jsx(Title, { children: "Depoimentos de nossos clientes" }), _jsx(Cards, { children: cards.map((card) => (_jsxs(Card, { children: [_jsx("p", { children: card.text }), _jsxs(Div, { children: [_jsx("img", { src: card.image, alt: card.name }), _jsx("h3", { children: card.name })] })] }, card.id))) })] }), _jsx(Redes, {})] }));
};
export default Depoimentos;
