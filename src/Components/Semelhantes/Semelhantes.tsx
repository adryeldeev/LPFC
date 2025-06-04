import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Lista, Card, Img, Nome, Preco } from "./SemelhantesStyled";
import useApi from "../../Api/Api";

interface Imagem {
  id: number;
  url: string;
  principal: boolean;
}

interface Carro {
  id: string;
  modelo: string;
  marca: {
    id: number;
    nome: string;
  };
  ano: number;
  preco: number;
  imagens: Imagem[];
}

interface Props {
  marca: string;
  carroIdAtual: string;
}

const CarrosSemelhantes: React.FC<Props> = ({ marca, carroIdAtual }) => {
  const api = useApi();
  const [semelhantes, setSemelhantes] = useState<Carro[]>([]);
  const navigate = useNavigate();
  const baseUrl = "https://my-first-project-repo-production.up.railway.app";

 useEffect(() => {
  const fetchSemelhantes = async () => {
    try {
      const res = await api.get(`/carros-all?marca=${marca}`);
      
      const filtrados = res.data
        .filter((carro: Carro) => carro.id !== carroIdAtual)
        .filter((carro: Carro) => carro.marca.nome === marca)
        .map((carro: Carro) => {
          const imagensOrdenadas = [...carro.imagens].sort((a, b) => {
            if (a.principal === b.principal) return 0;
            return a.principal ? -1 : 1;
          });

          return { ...carro, imagens: imagensOrdenadas };
        });

      setSemelhantes(filtrados);
    } catch (err) {
      console.error("Erro ao buscar carros semelhantes", err);
    }
  };

  if (marca) fetchSemelhantes();
}, [marca, carroIdAtual]);

  if (semelhantes.length === 0) return null;

  return (
    <Container>
      <h3>Veja carros semelhantes</h3>
      <Lista>
        {semelhantes.map((carro) => (
          <Card key={carro.id} onClick={() => navigate(`/detalhes/${carro.id}`)}>
            {carro.imagens.length > 0 && (
              <Img
                src={`${baseUrl}/uploads/carros/${carro.imagens[0].url}`}
                alt={carro.modelo}
              />
            )}
            <Nome>
              {carro.modelo} {carro.ano}
            </Nome>
            <Preco>R$ {carro.preco.toLocaleString("pt-BR")}</Preco>
          </Card>
        ))}
      </Lista>
    </Container>
  );
};

export default CarrosSemelhantes;
