import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import {
  DetalhesContainer,
  ImagemPrincipalContainer,
  MiniaturasContainer,
  Miniatura,
  InformacoesContainer,
  BotaoWhatsApp,
} from "./DetalhesStyled";
import useApi from "../../Api/Api";

type Imagem = {
  id: number;
  url: string;
};

type Carro = {
  id: number;
  modelo: string;
  ano: string;
  preco: string;
  quilometragem: string;
  cor: string;
  combustivel: string;
  cambio: string;
  descricao: string;
  imagens: Imagem[];
};

const Detalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const api = useApi();
  const [carro, setCarro] = useState<Carro | null>(null);
  const [imagemPrincipal, setImagemPrincipal] = useState<string>("");

  useEffect(() => {
    const fetchCarro = async () => {
      try {
        const response = await api.get(`/carro/${id}`);
        if (response.status === 200) {
          const data = response.data;
          setCarro(data);
          if (data.imagens.length > 0) {
            setImagemPrincipal(data.imagens[0].url);
          }
        } else {
          alert("Erro ao buscar os detalhes do carro.");
        }
      } catch (error) {
        console.error("Erro ao buscar os detalhes do carro:", error);
        alert("Erro ao buscar os detalhes do carro.");
      }
    };

    fetchCarro();
  }, [id]);

  if (!carro) {
    return <p>Carregando...</p>;
  }

  return (
    <DetalhesContainer>
      <ImagemPrincipalContainer>
        <Zoom>
          <img
            src={`http://localhost:8000/uploads/carros/${imagemPrincipal}`}
            alt={carro.modelo}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Zoom>
        <MiniaturasContainer>
          {carro.imagens.map((imagem) => (
            <Miniatura
              key={imagem.id}
              src={`http://localhost:8000/uploads/carros/${imagem.url}`}
              alt={`Miniatura ${imagem.id}`}
              onClick={() => setImagemPrincipal(imagem.url)}
            />
          ))}
        </MiniaturasContainer>
      </ImagemPrincipalContainer>
      <InformacoesContainer>
        <h2>{carro.modelo}</h2>
        <h3>R$ {parseFloat(carro.preco).toLocaleString("pt-BR")}</h3>
        <p>
          <strong>Ano:</strong> {carro.ano}
        </p>
        <p>
          <strong>Quilometragem:</strong> {carro.quilometragem} km
        </p>
        <p>
          <strong>Cor:</strong> {carro.cor}
        </p>
        <p>
          <strong>Combustível:</strong> {carro.combustivel}
        </p>
        <p>
          <strong>Câmbio:</strong> {carro.cambio}
        </p>
        <p>{carro.descricao}</p>
        <BotaoWhatsApp
          href={`https://wa.me/5599999999999?text=Olá, estou interessado no ${carro.modelo}`}
          target="_blank"
        >
          Fale com um vendedor
        </BotaoWhatsApp>
      </InformacoesContainer>
    </DetalhesContainer>
  );
};

export default Detalhes;