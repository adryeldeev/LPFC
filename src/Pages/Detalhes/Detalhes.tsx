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
import {
  TbCalendar,
  TbRoad,
  TbPalette,
  TbGasStation,
  TbManualGearbox,
} from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

type Vendedor = {
  id: number;
  nome: string;
  telefone: string;
};

const Detalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const api = useApi();

  const [carro, setCarro] = useState<Carro | null>(null);
  const [imagemPrincipal, setImagemPrincipal] = useState<string>("");
  const [vendedorSorteado, setVendedorSorteado] = useState<Vendedor | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [carroRes, vendedoresRes] = await Promise.all([
          api.get(`/carro/${id}`),
          api.get("/vendedores"),
        ]);

        if (carroRes.status === 200) {
          const data = carroRes.data;
          setCarro(data);
          if (data.imagens.length > 0) {
            setImagemPrincipal(data.imagens[0].url);
          }
        }

        if (vendedoresRes.status === 200 && vendedoresRes.data.length > 0) {
          const vendedores = vendedoresRes.data;
          const aleatorio = vendedores[Math.floor(Math.random() * vendedores.length)];
          setVendedorSorteado(aleatorio);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        toast.error("Erro ao carregar dados. Tente novamente.");
      }
    };

    fetchData();
  }, [id]);

  const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
  const telefoneFormatado = vendedorSorteado?.telefone.replace(/\D/g, "");
  const mensagemWhats = carro
    ? `Olá, estou interessado no ${carro.modelo}`
    : "Olá, gostaria de mais informações.";

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} />
      <DetalhesContainer>
        <ImagemPrincipalContainer>
          {imagemPrincipal ? (
            <Zoom>
              <img
                src={`${BASE_URL}/uploads/carros/${imagemPrincipal}`}
                alt={`Imagem principal do carro ${carro?.modelo}`}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Zoom>
          ) : (
            <Skeleton height={300} />
          )}

          <MiniaturasContainer>
            {carro?.imagens.map((imagem) => (
              <Miniatura
                key={imagem.id}
                src={`${BASE_URL}/uploads/carros/${imagem.url}`}
                alt={`Miniatura ${imagem.id}`}
                onClick={() => setImagemPrincipal(imagem.url)}
                className={imagem.url === imagemPrincipal ? "ativa" : ""}
                loading="lazy"
              />
            )) || <Skeleton count={3} width={80} height={60} />}
          </MiniaturasContainer>
        </ImagemPrincipalContainer>

        <InformacoesContainer>
          <h2>{carro?.modelo || <Skeleton width={200} />}</h2>
          <h3>
            {carro?.preco
              ? `R$ ${parseFloat(carro.preco).toLocaleString("pt-BR")}`
              : <Skeleton width={100} />}
          </h3>
          <p><TbCalendar /> <strong>Ano:</strong> {carro?.ano || <Skeleton width={50} />}</p>
          <p><TbRoad /> <strong>Quilometragem:</strong> {carro?.quilometragem || <Skeleton width={80} />} km</p>
          <p><TbPalette /> <strong>Cor:</strong> {carro?.cor || <Skeleton width={60} />}</p>
          <p><TbGasStation /> <strong>Combustível:</strong> {carro?.combustivel || <Skeleton width={80} />}</p>
          <p><TbManualGearbox /> <strong>Câmbio:</strong> {carro?.cambio || <Skeleton width={60} />}</p>
          <p>{carro?.descricao || <Skeleton count={3} />}</p>

          {vendedorSorteado && telefoneFormatado && (
            <BotaoWhatsApp
              href={`https://wa.me/55${telefoneFormatado}?text=${encodeURIComponent(mensagemWhats)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Fale com o vendedor via WhatsApp`}
            >
              <FaWhatsapp style={{ marginRight: "8px" }} />
              Fale conosco
            </BotaoWhatsApp>
          )}
        </InformacoesContainer>
      </DetalhesContainer>
    </>
  );
};

export default Detalhes;
