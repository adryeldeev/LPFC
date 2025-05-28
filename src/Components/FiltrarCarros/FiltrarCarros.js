import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../../Api/Api';
import { FiltroContainer, InputPesquisa, BotaoPesquisar, ListaMarcas, MarcaItem, MarcaImg, MarcaNome, BotaoEstoque, DivInput, FiltroHeader, Div } from './FiltrarCarrosStyled';
import { IoSearchOutline } from "react-icons/io5";
const FiltroVeiculos = () => {
    const [marcas, setMarcas] = useState([]);
    const [busca, setBusca] = useState('');
    const api = useApi();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchMarcas = async () => {
            const res = await api.get('/marcas-all');
            setMarcas(res.data);
        };
        fetchMarcas();
    }, []);
    const handleFiltrarMarca = (marcaId) => {
        navigate(`/estoque?marca=${marcaId}`);
    };
    const handleBuscarNome = () => {
        navigate(`/estoque?nome=${busca}`);
    };
    const handleVerEstoque = () => {
        navigate('/estoque');
    };
    return (_jsxs(FiltroContainer, { children: [_jsxs(FiltroHeader, { children: [_jsxs(Div, { children: [_jsx("h2", { children: "Qual ve\u00EDculo voc\u00EA est\u00E1 buscando?" }), _jsx(BotaoEstoque, { onClick: handleVerEstoque, children: "Ver todo estoque" })] }), _jsxs(DivInput, { onSubmit: e => { e.preventDefault(); handleBuscarNome(); }, children: [_jsx(InputPesquisa, { placeholder: "Marca ou modelo", value: busca, onChange: (e) => setBusca(e.target.value) }), _jsx(BotaoPesquisar, { type: "submit", "aria-label": "Pesquisar", children: _jsx(IoSearchOutline, { size: 18 }) })] })] }), _jsx(ListaMarcas, { children: marcas.map((marca) => (_jsxs(MarcaItem, { onClick: () => handleFiltrarMarca(marca.id), children: [_jsx(MarcaImg, { src: `https://my-first-project-repo-production.up.railway.app${marca.logo}`, alt: marca.nome }), _jsx(MarcaNome, { children: marca.nome })] }, marca.id))) })] }));
};
export default FiltroVeiculos;
