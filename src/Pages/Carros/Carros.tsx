import React, { useState, useEffect } from "react";
import {
  ListaCarrosContainer,
  CarroCard,
  CarroImagem,
  CarroInfo,
  PaginacaoContainer,
  BotaoPaginacao,
} from "./CarrosStyled";
import { useAuth } from "../../Context/AuthProvider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Tipagem para o carro
type Carro = {
  id: number;
  modelo: string;
  ano: string;
  preco: string;
  imagem: string; // URL da imagem do carro
    descricao: string;
    cor: string;
    quilometragem: string;
    combustivel: string;
    cambio: string;
};

const Carros: React.FC = () => {
  const { api } = useAuth();
  const [carros, setCarros] = useState<Carro[]>([]); // Lista de carros
  const [paginaAtual, setPaginaAtual] = useState<number>(1); // Página atual
  const itensPorPagina = 3; // Número de carros por página

  // Função para buscar os carros do backend
  const fetchCarros = async () => {
    try {
      const response = await api.get("/carros");
      if (response.status === 200) {
        setCarros(response.data); // Atualiza a lista de carros
      } else {
        alert("Erro ao buscar carros.");
      }
    } catch (error) {
      console.error("Erro ao buscar carros:", error);
      alert("Erro ao buscar carros.");
    }
  };

  // useEffect para buscar os carros ao montar o componente
  useEffect(() => {
    fetchCarros();
  }, []);

  // Cálculo para exibir os carros da página atual
  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;
  const carrosPagina = carros.slice(indiceInicial, indiceFinal);

  // Função para ir para a próxima página
  const handleProximo = () => {
    if (paginaAtual < Math.ceil(carros.length / itensPorPagina)) {
      setPaginaAtual((prev) => prev + 1);
    }
  };

  // Função para voltar para a página anterior
  const handleVoltar = () => {
    if (paginaAtual > 1) {
      setPaginaAtual((prev) => prev - 1);
    }
  };

  return (
    <ListaCarrosContainer>
      {carrosPagina.map((carro) => (
        <CarroCard key={carro.id}>
          <CarroImagem src={carro.imagem} alt={carro.modelo} />
          <CarroInfo>
            <h3>{carro.modelo}</h3>
            <p>Ano: {carro.ano}</p>
            <p>Preço: {carro.preco}</p>
            <p>Descrição: {carro.descricao}</p>
            <p>Cor: {carro.cor}</p>
            <p>Quilometragem: {carro.quilometragem}</p>
            <p>Combustível: {carro.combustivel}</p>
            <p>Cambio: {carro.cambio}</p>

          </CarroInfo>
        </CarroCard>
      ))}

      <PaginacaoContainer>
             <BotaoPaginacao onClick={handleVoltar} disabled={paginaAtual === 1}>
               <FaArrowLeft /> {/* Ícone de voltar */}
             </BotaoPaginacao>
             <BotaoPaginacao
               onClick={handleProximo}
               disabled={paginaAtual === Math.ceil(carros.length / itensPorPagina)}
             >
               <FaArrowRight /> {/* Ícone de próximo */}
             </BotaoPaginacao>
           </PaginacaoContainer>
    </ListaCarrosContainer>
  );
};

export default Carros;