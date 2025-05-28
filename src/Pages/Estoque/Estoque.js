import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// Estoque.tsx
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useApi from '../../Api/Api';
import { EstoqueContainer, ListaVeiculos, CardVeiculo, ImagemVeiculo, NomeVeiculo, Detalhes, Paginacao, Button, SearchContainer, BotaoPesquisar } from './EstoqueStyled';
import { TbCalendar, TbGauge, TbPalette, TbSettings, TbArrowLeft, TbArrowRight, TbChevronsLeft, TbChevronsRight } from 'react-icons/tb';
import Mapa from '../../Components/Mapa/Mapa';
import Redes from '../../Components/Redes/Redes';
import { IoSearchOutline } from 'react-icons/io5';
const Estoque = () => {
    const [veiculos, setVeiculos] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 6;
    const [searchParams] = useSearchParams();
    const [filtro, setFiltro] = useState('');
    const api = useApi();
    const baseUrl = "https://my-first-project-repo-production.up.railway.app";
    useEffect(() => {
        const fetchVeiculos = async () => {
            try {
                const marca = searchParams.get('marca');
                const nome = searchParams.get('nome');
                let url = '/carros-all';
                if (marca)
                    url += `?marca=${marca}`;
                else if (nome)
                    url += `?nome=${nome}`;
                const res = await api.get(url);
                setVeiculos(res.data);
                setPaginaAtual(1);
            }
            catch (err) {
                console.error('Erro ao carregar veículos:', err);
            }
        };
        fetchVeiculos();
    }, [searchParams]);
    const veiculosFiltrados = veiculos.filter((veiculo) => {
        const termo = filtro.toLowerCase();
        return (veiculo.modelo.toLowerCase().includes(termo) ||
            veiculo.marca.nome.toLowerCase().includes(termo));
    });
    const totalPaginas = Math.ceil(veiculosFiltrados.length / itensPorPagina);
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const veiculosPagina = veiculosFiltrados.slice(inicio, fim);
    const irParaPrimeira = () => setPaginaAtual(1);
    const irParaAnterior = () => setPaginaAtual((prev) => Math.max(prev - 1, 1));
    const irParaProxima = () => setPaginaAtual((prev) => Math.min(prev + 1, totalPaginas));
    const irParaUltima = () => setPaginaAtual(totalPaginas);
    const formatarPreco = (preco) => {
        return preco.toLocaleString('pt-BR', { minimumFractionDigits: 0 });
    };
    return (_jsxs(_Fragment, { children: [_jsxs(EstoqueContainer, { children: [_jsx("h2", { children: "Estoque de Ve\u00EDculos" }), _jsxs(SearchContainer, { children: [_jsx("input", { type: "text", placeholder: "Buscar por nome ou marca", value: filtro, onChange: (e) => setFiltro(e.target.value) }), _jsx(BotaoPesquisar, { children: _jsx(IoSearchOutline, { size: 18 }) })] }), _jsx(ListaVeiculos, { children: veiculosPagina.length > 0 ? (veiculosPagina.map((veiculo) => (_jsxs(CardVeiculo, { children: [_jsx(ImagemVeiculo, { src: veiculo.imagens?.length > 0
                                        ? `${baseUrl}/uploads/carros/${veiculo.imagens[0].url}`
                                        : '/imagem-nao-disponivel.png', alt: veiculo.modelo }), _jsx("img", { src: `${baseUrl}${veiculo.marca.logo}`, alt: veiculo.marca.nome }), _jsx(NomeVeiculo, { children: veiculo.modelo }), _jsxs(Detalhes, { children: [_jsxs("div", { children: [_jsx(TbCalendar, {}), " ", veiculo.ano] }), _jsxs("div", { children: [_jsx(TbGauge, {}), " ", veiculo.km, " km"] }), _jsxs("div", { children: [_jsx(TbSettings, {}), " ", veiculo.cambio] }), _jsxs("div", { children: [_jsx(TbPalette, {}), " ", veiculo.cor] }), _jsx("div", { children: _jsxs("strong", { children: ["R$ ", formatarPreco(veiculo.preco)] }) }), _jsx(Button, { as: Link, to: `/detalhes/${veiculo.id}`, children: "Mais detalhes" })] })] }, veiculo.id)))) : (_jsx("p", { style: { marginTop: '2rem', fontSize: '1.2rem' }, children: "Indispon\u00EDvel no momento, em breve dispon\u00EDvel." })) }), _jsxs(Paginacao, { children: [_jsx("button", { onClick: irParaPrimeira, disabled: paginaAtual === 1, children: _jsx(TbChevronsLeft, {}) }), _jsx("button", { onClick: irParaAnterior, disabled: paginaAtual === 1, children: _jsx(TbArrowLeft, {}) }), _jsxs("span", { children: ["P\u00E1gina ", paginaAtual, " de ", totalPaginas] }), _jsx("button", { onClick: irParaProxima, disabled: paginaAtual === totalPaginas, children: _jsx(TbArrowRight, {}) }), _jsx("button", { onClick: irParaUltima, disabled: paginaAtual === totalPaginas, children: _jsx(TbChevronsRight, {}) })] })] }), _jsx(Redes, {}), _jsx(Mapa, {})] }));
};
export default Estoque;
