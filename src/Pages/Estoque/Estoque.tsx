// Estoque.tsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useApi from '../../Api/Api';
import {
  EstoqueContainer,
  ListaVeiculos,
  CardVeiculo,
  ImagemVeiculo,
  NomeVeiculo,
  Detalhes,
  Paginacao,
  Button,
  SearchContainer,
  BotaoPesquisar
} from './EstoqueStyled';
import {
  TbCalendar,
  TbGauge,
  TbPalette,
  TbSettings,
  TbArrowLeft,
  TbArrowRight,
  TbChevronsLeft,
  TbChevronsRight
} from 'react-icons/tb';
import Mapa from '../../Components/Mapa/Mapa';
import Redes from '../../Components/Redes/Redes';
import { IoSearchOutline } from 'react-icons/io5';

const Estoque: React.FC = () => {
  const [veiculos, setVeiculos] = useState<any[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 6;
  const [searchParams] = useSearchParams();
  const [filtro, setFiltro] = useState('');
  const api = useApi();
  const baseUrl = "https://my-first-project-repo-production.up.railway.app"

  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        const marca = searchParams.get('marca');
        const nome = searchParams.get('nome');

        let url = '/carros-all';

        if (marca) url += `?marca=${marca}`;
        else if (nome) url += `?nome=${nome}`;

        const res = await api.get(url);
        setVeiculos(res.data);
        setPaginaAtual(1);
      } catch (err) {
        console.error('Erro ao carregar veículos:', err);
      }
    };

    fetchVeiculos();
  }, [searchParams]);

 const veiculosFiltrados = veiculos.filter((veiculo) => {
  const termo = filtro.toLowerCase();
  return (
    veiculo.modelo.toLowerCase().includes(termo) ||
    veiculo.marca.nome.toLowerCase().includes(termo)
  );
});

const totalPaginas = Math.ceil(veiculosFiltrados.length / itensPorPagina);
const inicio = (paginaAtual - 1) * itensPorPagina;
const fim = inicio + itensPorPagina;
const veiculosPagina = veiculosFiltrados.slice(inicio, fim)

  const irParaPrimeira = () => setPaginaAtual(1);
  const irParaAnterior = () => setPaginaAtual((prev) => Math.max(prev - 1, 1));
  const irParaProxima = () => setPaginaAtual((prev) => Math.min(prev + 1, totalPaginas));
  const irParaUltima = () => setPaginaAtual(totalPaginas);

   const formatarPreco = (preco: number) => {
    return preco.toLocaleString('pt-BR', { minimumFractionDigits: 0 });
  };

  return (
    <>
    <EstoqueContainer>
      <h2>Estoque de Veículos</h2>
      <SearchContainer>
  <input
    type="text"
    placeholder="Buscar por nome ou marca"
    value={filtro}
    onChange={(e) => setFiltro(e.target.value)}
  />
  <BotaoPesquisar >

  <IoSearchOutline  size={18}/>
  </BotaoPesquisar>
</SearchContainer>
      <ListaVeiculos>
  {veiculosPagina.length > 0 ? (
    veiculosPagina.map((veiculo) => (
      <CardVeiculo key={veiculo.id}>
        <ImagemVeiculo
          src={
            veiculo.imagens?.length > 0
              ? `${baseUrl}/uploads/carros/${veiculo.imagens[0].url}`
              : '/imagem-nao-disponivel.png'
          }
          alt={veiculo.modelo}
        />
        <img src={`${baseUrl}${veiculo.marca.logo}`} alt={veiculo.marca.nome} />
        <NomeVeiculo>{veiculo.modelo}</NomeVeiculo>
        <Detalhes>
          <div><TbCalendar /> {veiculo.ano}</div>
          <div><TbGauge /> {veiculo.km} km</div>
          <div><TbSettings /> {veiculo.cambio}</div>
          <div><TbPalette /> {veiculo.cor}</div>
          <div><strong>R$ {formatarPreco(veiculo.preco)}</strong></div>
          <Button as={Link} to={`/detalhes/${veiculo.id}`}>Mais detalhes</Button>
        </Detalhes>
      </CardVeiculo>
    ))
  ) : (
    <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
      Indisponível no momento, em breve disponível.
    </p>
  )}
</ListaVeiculos>

      <Paginacao>
        <button onClick={irParaPrimeira} disabled={paginaAtual === 1}><TbChevronsLeft /></button>
        <button onClick={irParaAnterior} disabled={paginaAtual === 1}><TbArrowLeft /></button>
        <span>Página {paginaAtual} de {totalPaginas}</span>
        <button onClick={irParaProxima} disabled={paginaAtual === totalPaginas}><TbArrowRight /></button>
        <button onClick={irParaUltima} disabled={paginaAtual === totalPaginas}><TbChevronsRight /></button>
      </Paginacao>
    </EstoqueContainer>
    <Redes/>
    <Mapa/>
    </>
  );
};

export default Estoque;
