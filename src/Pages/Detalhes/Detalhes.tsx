import { useEffect, useRef, useState } from "react";
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
  principal: boolean;
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

 const Detalhes = () => {
  const { id } = useParams<{ id: string }>();
  const api = useApi();
  const [carro, setCarro] = useState<Carro | null>(null);
  const [imagemPrincipal, setImagemPrincipal] = useState<string>("");
  const [vendedorSorteado, setVendedorSorteado] = useState<Vendedor | null>(null);
  const [mostrarSlider, setMostrarSlider] = useState(false);
  const vendedoresBloqueadosRef = useRef<Map<number, number>>(new Map());
  const TEMPO_LIBERACAO = 5 * 60 * 1000; // 5 minutos
  const baseUrl = "https://my-first-project-repo-production.up.railway.app";

  // Recupera bloqueios do localStorage no carregamento
  useEffect(() => {
    const bloqueiosSalvos = localStorage.getItem("bloqueiosVendedores");
    if (bloqueiosSalvos) {
      try {
        const bloqueiosArray: [number, number][] = JSON.parse(bloqueiosSalvos);
        vendedoresBloqueadosRef.current = new Map(bloqueiosArray);
      } catch {
        vendedoresBloqueadosRef.current = new Map();
      }
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carroRes = await api.get(`/carro/${id}`);
        if (carroRes.status === 200) {
          const data = carroRes.data as Carro;

          const imagensOrdenadas = [...data.imagens].sort((a, b) => {
            if (a.principal === b.principal) return 0;
            return a.principal ? -1 : 1;
          });

          setCarro({ ...data, imagens: imagensOrdenadas });

          if (imagensOrdenadas.length > 0) {
            setImagemPrincipal(imagensOrdenadas[0].url);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        toast.error("Erro ao carregar dados. Tente novamente.");
      }
    };

    fetchData();
  }, [id, api]);
const sortearVendedor = () => {
  // Abre uma nova aba *imediatamente* ao clique do usuário, antes do await
  const novaJanela = window.open("", "_blank");

  api.get("/vendedores-all")
    .then((vendedoresRes) => {
      if (vendedoresRes.status === 200 && vendedoresRes.data.length > 0) {
        const vendedores = vendedoresRes.data as Vendedor[];
        const agora = Date.now();

        // Remove bloqueios expirados
        for (const [vendedorId, timestamp] of vendedoresBloqueadosRef.current.entries()) {
          if (agora - timestamp > TEMPO_LIBERACAO) {
            vendedoresBloqueadosRef.current.delete(vendedorId);
          }
        }

        let disponiveis = vendedores.filter(
          (v) => !vendedoresBloqueadosRef.current.has(v.id)
        );

        if (disponiveis.length === 0) {
          vendedoresBloqueadosRef.current.clear();
          disponiveis = [...vendedores];
        }

        const aleatorio = disponiveis[Math.floor(Math.random() * disponiveis.length)];
        setVendedorSorteado(aleatorio);

        vendedoresBloqueadosRef.current.set(aleatorio.id, agora);
        localStorage.setItem(
          "bloqueiosVendedores",
          JSON.stringify(Array.from(vendedoresBloqueadosRef.current.entries()))
        );

        // Formata o link do WhatsApp
        const telefone = aleatorio.telefone.replace(/\D/g, "");
        const linkWhatsApp = `https://wa.me/55${telefone}`;

        // Redireciona a aba já aberta
        if (novaJanela) {
          novaJanela.location.href = linkWhatsApp;
        }
      } else {
        toast.error("Nenhum vendedor disponível no momento.");
        if (novaJanela) novaJanela.close();
      }
    })
    .catch((error) => {
      console.error("Erro ao sortear vendedor:", error);
      toast.error("Erro ao conectar com um vendedor.");
      if (novaJanela) novaJanela.close();
    });
};

  if (!carro) return <p>Carregando...</p>;

  const formatarPreco = (preco: number) => {
    return preco.toLocaleString("pt-BR", { minimumFractionDigits: 0 });
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
            const isLastVisible = index === 3 && carro.imagens.length > 4;

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
            <img src={`${baseUrl}${carro.marca.logo}`} alt={carro.marca.nome} />
            <div>
              <h2>
                {carro.marca.nome} {carro.modelo}
              </h2>
              <h3>R$ {formatarPreco(carro.preco)}</h3>
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

      <BotaoWhatsappContainer>
  {!vendedorSorteado ? (
    <BotaoWhatsapp as="button" onClick={sortearVendedor}>
      <FaWhatsapp size={20} /> Fale com um vendedor
    </BotaoWhatsapp>
  ) : (
    <a
      href={`https://wa.me/55${vendedorSorteado.telefone.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <BotaoWhatsapp as="div">
        <FaWhatsapp size={20} /> Falar com {vendedorSorteado.nome}
      </BotaoWhatsapp>
    </a>
  )}
</BotaoWhatsappContainer>
      </DetalhesContainer>

      <CarrosSemelhantes marca={carro.marca.nome} carroIdAtual={String(carro.id)} />
      <Redes />
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
export default Detalhes;