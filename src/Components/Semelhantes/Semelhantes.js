import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Lista, Card, Img, Nome, Preco } from "./SemelhantesStyled";
import useApi from "../../Api/Api";
const CarrosSemelhantes = ({ marca, carroIdAtual }) => {
    const api = useApi();
    const [semelhantes, setSemelhantes] = useState([]);
    const navigate = useNavigate();
    const baseUrl = "https://my-first-project-repo-production.up.railway.app";
    useEffect(() => {
        const fetchSemelhantes = async () => {
            try {
                const res = await api.get(`/carros-all?marca=${marca}`);
                const filtrados = res.data.filter((carro) => carro.id !== carroIdAtual);
                setSemelhantes(filtrados);
            }
            catch (err) {
                console.error("Erro ao buscar carros semelhantes", err);
            }
        };
        if (marca)
            fetchSemelhantes();
    }, [marca, carroIdAtual]);
    if (semelhantes.length === 0)
        return null;
    return (_jsxs(Container, { children: [_jsx("h3", { children: "Veja carros semelhantes" }), _jsx(Lista, { children: semelhantes.map((carro) => (_jsxs(Card, { onClick: () => navigate(`/detalhes/${carro.id}`), children: [carro.imagens.length > 0 && (_jsx(Img, { src: `${baseUrl}/uploads/carros/${carro.imagens[0].url}`, alt: carro.modelo })), _jsxs(Nome, { children: [carro.modelo, " ", carro.ano] }), _jsxs(Preco, { children: ["R$ ", carro.preco.toLocaleString("pt-BR")] })] }, carro.id))) })] }));
};
export default CarrosSemelhantes;
