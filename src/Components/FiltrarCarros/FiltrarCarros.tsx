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
  BotaoEstoque
} from './FiltrarCarrosStyled';

const FiltroVeiculos: React.FC = () => {
  const [marcas, setMarcas] = useState<any[]>([]);
  const [busca, setBusca] = useState('');
  const api = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMarcas = async () => {
      const res = await api.get('/marcas');
      setMarcas(res.data);
    };
    fetchMarcas();
  }, []);

  const handleFiltrarMarca = (marcaId: string) => {
    navigate(`/estoque?marca=${marcaId}`);
  };

  const handleBuscarNome = () => {
    navigate(`/estoque?nome=${busca}`);
  };

  const handleVerEstoque = () => {
    navigate('/estoque');
  };

  return (
    <FiltroContainer>
      <h2>Qual veículo você está buscando?</h2>
      <div>
        <InputPesquisa
          placeholder="Marca ou modelo"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <BotaoPesquisar onClick={handleBuscarNome}>🔍</BotaoPesquisar>
      </div>

      <ListaMarcas>
        {marcas.map((marca) => (
          <MarcaItem key={marca.id} onClick={() => handleFiltrarMarca(marca.id)}>
            <MarcaImg src={`http://localhost:8000${marca.imagem}`} alt={marca.nome} />
            <MarcaNome>{marca.nome}</MarcaNome>
          </MarcaItem>
        ))}
      </ListaMarcas>

      <BotaoEstoque onClick={handleVerEstoque}>Ver todo estoque</BotaoEstoque>
    </FiltroContainer>
  );
};

export default FiltroVeiculos;
