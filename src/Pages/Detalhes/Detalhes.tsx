import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  BotaoWhatsapp,
  BotaoWhatsappContainer,
  BoxFichaTecnica,
  BoxMarcaPreco,
  DetalhesContainer,
  GaleriaContainer,
  InfoCarro,
  Miniaturas,
  Principal,
  MiniaturaWrapper,
  OverlayTexto,
  ModalSlider,
  ModalBackdrop,
  FecharModal
} from "./DetalhesStyled";
import useApi from "../../Api/Api";
import {
  FaCalendarAlt,
  FaCarSide,
  FaCogs,
  FaGasPump,
  FaRoad,
  FaWhatsapp,
  FaTimes
} from "react-icons/fa";
import Mapa from "../../Components/Mapa/Mapa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Redes from "../../Components/Redes/Redes";
import CarrosSemelhantes from "../../Components/Semelhantes/Semelhantes";

interface Marca {
  id: number;
  nome: string;
  logo: string;
}

interface Imagem {
  id: number;
  url: string;
}

interface Carro {
  id: number;
  preco: number;
  modelo: string;
  marcaId: number;
  marca: Marca;
  ano: number;
  cambio: string;
  combustivel: string;
  descricao: string;
  portas: number;
  quilometragem: number;
  imagens: Imagem[];
}

interface Vendedor {
  id: number;
  nome: string;
  telefone: string;
}

export const Detalhes = () => {
  const { id } = useParams<{ id: string }>();
  const api = useApi();
  const [carro, setCarro] = useState<Carro | null>(null);
  const [imagemPrincipal, setImagemPrincipal] = useState<string>("");
  const [vendedorSorteado, setVendedorSorteado] = useState<Vendedor | null>(null);
  const [mostrarSlider, setMostrarSlider] = useState(false);
  const baseUrl = "https://my-first-project-repo-production.up.railway.app";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carroRes = await api.get(`/carro/${id}`);
        if (carroRes.status === 200) {
          const data = carroRes.data as Carro;
          setCarro(data);
          if (data.imagens.length > 0) {
            setImagemPrincipal(data.imagens[0].url);
          }
        }

        const vendedoresRes = await api.get("/vendedores-all");
        if (vendedoresRes.status === 200 && vendedoresRes.data.length > 0) {
          const vendedores = vendedoresRes.data as Vendedor[];
          const aleatorio =
            vendedores[Math.floor(Math.random() * vendedores.length)];
          setVendedorSorteado(aleatorio);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        toast.error("Erro ao carregar dados. Tente novamente.");
      }
    };

    fetchData();
  }, [id]);

  if (!carro) return <p>Carregando...</p>;
  const formatarPreco = (preco: number) => {
    return preco.toLocaleString('pt-BR', { minimumFractionDigits: 0 });
  };

  return (
    <>
      <GaleriaContainer>
        <Principal>
          <img
            src={`${baseUrl}/uploads/carros/${imagemPrincipal}`}
            alt="Imagem principal do carro"
          />
        </Principal>

        <Miniaturas>
          {carro.imagens.slice(0, 4).map((img, index) => {
            const isLastVisible =
              index === 3 && carro.imagens.length > 4;

            return (
              <MiniaturaWrapper
                key={img.id}
                onClick={() => {
                  if (isLastVisible) {
                    setMostrarSlider(true);
                  } else {
                    setImagemPrincipal(img.url);
                  }
                }}
              >
                <img
                  src={`${baseUrl}/uploads/carros/${img.url}`}
                  alt={`Miniatura ${index + 1}`}
                />
                {isLastVisible && <OverlayTexto>Ver mais fotos</OverlayTexto>}
              </MiniaturaWrapper>
            );
          })}
        </Miniaturas>
      </GaleriaContainer>

      <DetalhesContainer>
        <InfoCarro>
          <BoxMarcaPreco>
            <img
              src={`${baseUrl}${carro.marca.logo}`}
              alt={carro.marca.nome}
            />
            <div>
              <h2>{carro.marca.nome} {carro.modelo}</h2>
              <h3>
                R$ {formatarPreco(carro.preco)}
              </h3>
            </div>
          </BoxMarcaPreco>

          <BoxFichaTecnica>
            <div className="grid">
              {[ 
                { icon: <FaCogs />, label: `Câmbio: ${carro.cambio}` },
                { icon: <FaCalendarAlt />, label: `Ano: ${carro.ano}` },
                {
                  icon: <FaRoad />,
                  label: `KM: ${carro.quilometragem.toLocaleString()} km`,
                },
                {
                  icon: <FaGasPump />,
                  label: `Combustível: ${carro.combustivel}`,
                },
                { icon: <FaCarSide />, label: `Portas: ${carro.portas}` },
              ].map((item, index) => (
                <div className="item" key={index}>
                  {item.icon} {item.label}
                </div>
              ))}
            </div>
            <span>Descrição</span>
            <p>{carro.descricao}</p>
          </BoxFichaTecnica>
        </InfoCarro>

        {vendedorSorteado && (
          <BotaoWhatsappContainer>
            <BotaoWhatsapp
              href={`https://wa.me/55${vendedorSorteado.telefone.replace(
                /\D/g,
                ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={20} /> Fale com um vendedor
            </BotaoWhatsapp>
          </BotaoWhatsappContainer>
        )}
      </DetalhesContainer>
      <CarrosSemelhantes
        marca={carro.marca.nome}
        carroIdAtual={String(carro.id)}
      />
        <Redes/>
      <Mapa />

      {mostrarSlider && (
        <ModalBackdrop onClick={() => setMostrarSlider(false)}>
          <ModalSlider onClick={(e) => e.stopPropagation()}>
            <FecharModal onClick={() => setMostrarSlider(false)}>
              <FaTimes size={24} />
            </FecharModal>
            <Swiper navigation modules={[Navigation]}>
              {carro.imagens.map((img) => (
                <SwiperSlide key={img.id}>
                  <img
                    src={`${baseUrl}/uploads/carros/${img.url}`}
                    alt="Slide"
                    style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </ModalSlider>
        </ModalBackdrop>
      )}
    </>
  );
};
