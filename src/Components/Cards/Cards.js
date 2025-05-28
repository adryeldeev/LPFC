import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { Container, Card, ImageWrapper, Content, Title, Description, Button, } from "./CardsStyled";
import chave from "../../assets/chaveCarro.webp"; // substitua pela URL correta da imagem
const cards = [
    {
        title: "Venda seu Carro",
        description: "Faça a avaliação do seu carro online, no conforto da sua casa.",
        buttonText: "Avalie agora",
        imageUrl: chave,
        route: "/venda-seu-carro",
    },
    {
        title: "Finance seu sonho",
        description: "Trabalhamos com as principais financeiras, isso garante melhores taxas para você!",
        buttonText: "Faça uma simulação",
        route: "/financie",
    },
];
const CardSection = () => {
    const navigate = useNavigate();
    return (_jsx(Container, { children: cards.map((card, index) => (_jsxs(Card, { children: [_jsxs(Content, { children: [_jsx(Title, { children: card.title }), _jsx(Description, { children: card.description }), _jsx(Button, { onClick: () => navigate(card.route), children: card.buttonText })] }), card.imageUrl && (_jsx(ImageWrapper, { children: _jsx("img", { src: card.imageUrl, alt: card.title }) }))] }, index))) }));
};
export default CardSection;
