import useApi from "../../Api/Api";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Button, ContentDestaque, ItemDestaque, ListaDestaque } from "./DestaqueStyled";

const Destaque: React.FC = () => {
  const api = useApi();
  const [carros, setCarros] = React.useState<any[]>([]);
  const baseUrl = "https://my-first-project-repo-production.up.railway.app";

  const fetchDestaques = async () => {
  try {
    const response = await api.get('/destaques');
    const data = response.data;

    const carrosDestaque = data.slice(0, 3).map((carro: any) => {
      const imagensOrdenadas = [...carro.imagens].sort((a, b) => {
        if (a.principal === b.principal) return 0;
        return a.principal ? -1 : 1;
      });

      return {
        ...carro,
        imagens: imagensOrdenadas
      };
    });

    setCarros(carrosDestaque);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Erro ao buscar os destaques:', error.message);
    } else {
      console.error('Erro desconhecido:', error);
    }
  }
};
  useEffect(() => {
    fetchDestaques();
  }, []);

  const formatarPreco = (preco: number) => {
    return preco.toLocaleString('pt-BR', { minimumFractionDigits: 0 });
  };

 
  return (
    <ContentDestaque>
  <h1>Destaques</h1>
  <ListaDestaque>
    {carros.map((carro) => (
      <ItemDestaque key={carro.id}>
        <img
          src={
            carro.imagens.length > 0
              ? `${baseUrl}/uploads/carros/${carro.imagens[0].url}` // Acessa a URL da primeira imagem
              : "/path/to/default/image" // Imagem padrão caso não haja imagens
          }
          alt={carro.modelo}
        />
        <h2>
          {carro.modelo} - {carro.ano}
        </h2>
        <p>R$ {formatarPreco(carro.preco)}</p> {/* Formata o preço */}
        <Button as={Link} to={`/detalhes/${carro.id}`}>
  Mais detalhes
</Button>
      </ItemDestaque>
    ))}
  </ListaDestaque>
</ContentDestaque>
  );
};

export default Destaque;