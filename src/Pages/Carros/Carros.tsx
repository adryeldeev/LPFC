import React, { useState, useEffect } from "react";
import {
  ListaCarrosContainer,
  CarroCard,
  CarroImagem,
  CarroInfo,
  PaginacaoContainer,
  BotaoPaginacao,
  CarroSliderWrapper,
  CarrosContainer,
  DivAdd,
} from "./CarrosStyled";


import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import useApi from "../../Api/Api";
import { useNavigate } from "react-router-dom";

type Imagem = {
  id: number;
  url: string;
  carroId: number;
};

type Carro = {
  id: number;
  modelo: string;
  ano: string;
  preco: string;
  imagens: Imagem[]; // Agora é um array de objetos do tipo "Imagem"
  descricao: string;
  quilometragem: string;
  combustivel: string;
  cambio: string;
  cor: string;
  marca: string;
};

const Carros: React.FC = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [carros, setCarros] = useState<Carro[]>([]);
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const itensPorPagina = 3;
 const baseUrl = "http://localhost:8000"; // Ou a URL do seu servidor

useEffect(() => {
  const fetchCarros = async () => {
    try {
      const response = await api.get("/carros");
      if (response.status === 200) {
        const { carros } = response.data; // Desestrutura apenas os carros
        console.log("dados carro:", carros);
        setCarros(response.data.carros); // Define apenas os carros no estado
      } else {
        alert("Erro ao buscar carros.");
      }
    } catch (error) {
      console.error("Erro ao buscar carros:", error);
      alert("Erro ao buscar carros.");
    }
  };
  fetchCarros();
}, []);

  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;
 const carrosPagina = Array.isArray(carros)
  ? carros.slice(indiceInicial, indiceFinal)
  : [];
  const handleProximo = () => {
    if (paginaAtual < Math.ceil(carros.length / itensPorPagina)) {
      setPaginaAtual((prev) => prev + 1);
    }
  };

  const handleVoltar = () => {
    if (paginaAtual > 1) {
      setPaginaAtual((prev) => prev - 1);
    }
  };
  const handleNavigate = () => {
    navigate("/cadastrarVeiculo");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <CarrosContainer>
      <DivAdd>

      <h1>Lista de Carros</h1>
      <BotaoPaginacao onClick={handleNavigate}>
        Adicionar Carro
      </BotaoPaginacao>
      </DivAdd>
    <ListaCarrosContainer>
      {carrosPagina.map((carro) => (
        <CarroCard key={carro.id}>
<CarroSliderWrapper>
  <Slider {...sliderSettings}>
    {carro.imagens && carro.imagens.length > 0 ? (
      carro.imagens.map((imagem, index) => (
        <div key={index}>
          <CarroImagem
            src={`${baseUrl}/uploads/carros/${imagem.url}`}
            alt={`${carro.modelo} imagem ${index + 1}`}
          />
        </div>
      ))
    ) : (
      <div>
        <CarroImagem
          src="/path/to/default/image"
          alt="Imagem padrão"
          />
      </div>
    )}
  </Slider>
</CarroSliderWrapper>

          <CarroInfo>
            <h3>{carro.modelo}</h3>
            <p>Ano: {carro.ano}</p>
            <p>Preço: {carro.preco}</p>
            <p>Descrição: {carro.descricao}</p>
            <p>Cor: {carro.cor}</p>
            <p>Quilometragem: {carro.quilometragem}</p>
            <p>Combustível: {carro.combustivel}</p>
            <p>Câmbio: {carro.cambio}</p>
            <p>Marca: {carro.marca}</p>
            <p>Cor: {carro.cor}</p>
          </CarroInfo>
        </CarroCard>
      ))}

    </ListaCarrosContainer>
      <PaginacaoContainer>
        <BotaoPaginacao onClick={handleVoltar} disabled={paginaAtual === 1}>
          <FaArrowLeft />
        </BotaoPaginacao>
      
      <p>
        Página {paginaAtual} de {Math.ceil(carros.length / itensPorPagina)}
      </p>
        <BotaoPaginacao
          onClick={handleProximo}
          disabled={paginaAtual === Math.ceil(carros.length / itensPorPagina)}
          >
          <FaArrowRight />
        </BotaoPaginacao>
      </PaginacaoContainer>
    </CarrosContainer>
  );
};

export default Carros;
