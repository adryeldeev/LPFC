import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useApi from "../../Api/Api";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Button, ContentDestaque, ItemDestaque, ListaDestaque } from "./DestaqueStyled";
const Destaque = () => {
    const api = useApi();
    const [carros, setCarros] = React.useState([]);
    const baseUrl = "https://my-first-project-repo-production.up.railway.app";
    const fetchDestaques = async () => {
        try {
            const response = await api.get('/destaques');
            const data = response.data;
            const carrosDestaque = data.slice(0, 3); // Limita os carros a no máximo 3
            setCarros(carrosDestaque);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Erro ao buscar os destaques:', error.message);
            }
            else {
                console.error('Erro desconhecido:', error);
            }
        }
    };
    useEffect(() => {
        fetchDestaques();
    }, []);
    const formatarPreco = (preco) => {
        return preco.toLocaleString('pt-BR', { minimumFractionDigits: 0 });
    };
    return (_jsxs(ContentDestaque, { children: [_jsx("h1", { children: "Destaques" }), _jsx(ListaDestaque, { children: carros.map((carro) => (_jsxs(ItemDestaque, { children: [_jsx("img", { src: carro.imagens.length > 0
                                ? `${baseUrl}/uploads/carros/${carro.imagens[0].url}` // Acessa a URL da primeira imagem
                                : "/path/to/default/image" // Imagem padrão caso não haja imagens
                            , alt: carro.modelo }), _jsxs("h2", { children: [carro.modelo, " - ", carro.ano] }), _jsxs("p", { children: ["R$ ", formatarPreco(carro.preco)] }), " ", _jsx(Button, { as: Link, to: `/detalhes/${carro.id}`, children: "Mais detalhes" })] }, carro.id))) })] }));
};
export default Destaque;
