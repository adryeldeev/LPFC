// Estoque.tsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useApi from '../../Api/Api';
import {
  EstoqueContainer,
  ListaVeiculos,
  CardVeiculo,
  ImagemVeiculo,
  NomeVeiculo,
  Detalhes,
  Paginacao
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

const Estoque: React.FC = () => {
  const [veiculos, setVeiculos] = useState<any[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 6;
  const [searchParams] = useSearchParams();
  const api = useApi();

  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        const marca = searchParams.get('marca');
        const nome = searchParams.get('nome');

        let url = '/carros';

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

  const totalPaginas = Math.ceil(veiculos.length / itensPorPagina);
  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const veiculosPagina = veiculos.slice(inicio, fim);

  const irParaPrimeira = () => setPaginaAtual(1);
  const irParaAnterior = () => setPaginaAtual((prev) => Math.max(prev - 1, 1));
  const irParaProxima = () => setPaginaAtual((prev) => Math.min(prev + 1, totalPaginas));
  const irParaUltima = () => setPaginaAtual(totalPaginas);

  return (
    <EstoqueContainer>
      <h2>Estoque de Veículos</h2>
      <ListaVeiculos>
        {veiculosPagina.map((veiculo) => (
          <CardVeiculo key={veiculo.id}>
            <ImagemVeiculo src={`http://localhost:8000${veiculo.imagemPrincipal}`} alt={veiculo.nome} />
            <NomeVeiculo>{veiculo.modelo}</NomeVeiculo>
            <p>{veiculo.descricao}</p>
            <Detalhes>
              <div><TbCalendar /> {veiculo.ano}</div>
              <div><TbGauge /> {veiculo.km} km</div>
              <div><TbSettings /> {veiculo.cambio}</div>
              <div><TbPalette /> {veiculo.cor}</div>
                <div><strong>R$ {veiculo.preco.toFixed(2).replace('.', ',')}</strong></div>
            </Detalhes>
          </CardVeiculo>
        ))}
      </ListaVeiculos>

      <Paginacao>
        <button onClick={irParaPrimeira} disabled={paginaAtual === 1}><TbChevronsLeft /></button>
        <button onClick={irParaAnterior} disabled={paginaAtual === 1}><TbArrowLeft /></button>
        <span>Página {paginaAtual} de {totalPaginas}</span>
        <button onClick={irParaProxima} disabled={paginaAtual === totalPaginas}><TbArrowRight /></button>
        <button onClick={irParaUltima} disabled={paginaAtual === totalPaginas}><TbChevronsRight /></button>
      </Paginacao>
    </EstoqueContainer>
  );
};

export default Estoque;
