import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {
  Container,
  ImagemPrincipalContainer,
  ImagemPrincipal,
  MiniaturasContainer,
  Miniatura,
  Infos,
  Linha,
  BotaoWhatsApp,
  InfoItem
} from "./DetalhesStyled";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaWhatsapp, FaCalendarAlt, FaGasPump, FaCogs, FaTachometerAlt, FaDoorOpen } from "react-icons/fa";
import useApi from "../../Api/Api";
import Mapa from "../../Components/Mapa/Mapa";



interface Carro {
  id: number;
  preco: number;
  modelo: string;
  marca: string;
  ano: string;
  cambio: string;
  combustivel: string;
  portas: number;
  quilometragem: number;
  imagens: Array<{ id: number; url: string }>;
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
  const mensagemWhats = carro ? `Olá, estou interessado no ${carro.modelo}` : "Olá, gostaria de mais informações.";

  return (
    <Container>
      <ImagemPrincipalContainer>
        <ImagemPrincipal src={`${BASE_URL}/imagens/${imagemPrincipal}`} alt={carro?.modelo} />
        <MiniaturasContainer>
          <Swiper direction="vertical" spaceBetween={10} slidesPerView={4} navigation modules={[Navigation]}> 
            {carro?.imagens.map((img) => (
              <SwiperSlide key={img.id}>
                <Miniatura onClick={() => setImagemPrincipal(img.url)} src={`${BASE_URL}/imagens/${img.url}`} alt="Miniatura" />
              </SwiperSlide>
            ))}
          </Swiper>
        </MiniaturasContainer>
      </ImagemPrincipalContainer>

      <Infos>
        <h2>{carro?.modelo || <Skeleton />}</h2>
        <h3>{carro?.marca || <Skeleton />}</h3>
        <h4>
          {carro?.preco ? `R$ ${carro.preco.toLocaleString("pt-BR")}` : <Skeleton width={80} />}
</h4>
        <Linha />
        <InfoItem><FaCalendarAlt /> {carro?.ano || <Skeleton width={40} />}</InfoItem>
        <InfoItem><FaCogs /> {carro?.cambio || <Skeleton width={80} />}</InfoItem>
        <InfoItem><FaGasPump /> {carro?.combustivel || <Skeleton width={60} />}</InfoItem>
        <InfoItem><FaDoorOpen /> {carro?.portas ? `${carro.portas} portas` : <Skeleton width={40} />}</InfoItem>
        <InfoItem><FaTachometerAlt /> {carro?.quilometragem ? `${carro.quilometragem.toLocaleString()} km` : <Skeleton width={60} />}</InfoItem>
        <BotaoWhatsApp href={`https://wa.me/55${telefoneFormatado}?text=${encodeURIComponent(mensagemWhats)}`} target="_blank">
          <FaWhatsapp size={20} /> Fale pelo WhatsApp
        </BotaoWhatsApp>
      </Infos>
      <Mapa/>
    </Container>
  );
};
