import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../../Api/Api';
import {
  FiltroContainer,
  InputPesquisa,
  BotaoPesquisar,
  ListaMarcas,
  MarcaItem,
  MarcaImg,
  MarcaNome,
  BotaoEstoque,
  DivInput,
  FiltroHeader,
  Div
} from './FiltrarCarrosStyled';
import { IoSearchOutline } from "react-icons/io5";

const FiltroVeiculos: React.FC = () => {
  const [marcas, setMarcas] = useState<any[]>([]);
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

  const handleFiltrarMarca = (marcaNome: string) => {
    navigate(`/estoque?marca=${encodeURIComponent(marcaNome.toLowerCase())}`);
  };

  const handleBuscarNome = () => {
    navigate(`/estoque?nome=${encodeURIComponent(busca.trim().toLowerCase())}`);
  };

  const handleVerEstoque = () => {
    navigate('/estoque');
  };

  return (
    <FiltroContainer>
      <FiltroHeader>
        <Div>
          <h2>Qual veículo você está buscando?</h2>
          <BotaoEstoque onClick={handleVerEstoque}>Ver todo estoque</BotaoEstoque>
        </Div>
        <DivInput onSubmit={e => { e.preventDefault(); handleBuscarNome(); }}>
          <InputPesquisa
            placeholder="Marca ou modelo"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <BotaoPesquisar type="submit" aria-label="Pesquisar">
            <IoSearchOutline size={18} />
          </BotaoPesquisar>
        </DivInput>
      </FiltroHeader>

      <ListaMarcas>
        {marcas.map((marca) => (
          <MarcaItem key={marca.id} onClick={() => handleFiltrarMarca(marca.nome)}>
            <MarcaImg
              src={`https://my-first-project-repo-production.up.railway.app${marca.logo}`}
              alt={marca.nome}
            />
            <MarcaNome>{marca.nome}</MarcaNome>
          </MarcaItem>
        ))}
      </ListaMarcas>
    </FiltroContainer>
  );
};

export default FiltroVeiculos;
