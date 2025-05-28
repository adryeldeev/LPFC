import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BotaoWhatsapp, BotaoWhatsappContainer, BoxFichaTecnica, BoxMarcaPreco, DetalhesContainer, GaleriaContainer, InfoCarro, Miniaturas, Principal, MiniaturaWrapper, OverlayTexto, ModalSlider, ModalBackdrop, FecharModal } from "./DetalhesStyled";
import useApi from "../../Api/Api";
import { FaCalendarAlt, FaCarSide, FaCogs, FaGasPump, FaRoad, FaWhatsapp, FaTimes } from "react-icons/fa";
import Mapa from "../../Components/Mapa/Mapa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Redes from "../../Components/Redes/Redes";
import CarrosSemelhantes from "../../Components/Semelhantes/Semelhantes";
export const Detalhes = () => {
    const { id } = useParams();
    const api = useApi();
    const [carro, setCarro] = useState(null);
    const [imagemPrincipal, setImagemPrincipal] = useState("");
    const [vendedorSorteado, setVendedorSorteado] = useState(null);
    const [mostrarSlider, setMostrarSlider] = useState(false);
    const baseUrl = "https://my-first-project-repo-production.up.railway.app";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const carroRes = await api.get(`/carro/${id}`);
                if (carroRes.status === 200) {
                    const data = carroRes.data;
                    setCarro(data);
                    if (data.imagens.length > 0) {
                        setImagemPrincipal(data.imagens[0].url);
                    }
                }
                const vendedoresRes = await api.get("/vendedores-all");
                if (vendedoresRes.status === 200 && vendedoresRes.data.length > 0) {
                    const vendedores = vendedoresRes.data;
                    const aleatorio = vendedores[Math.floor(Math.random() * vendedores.length)];
                    setVendedorSorteado(aleatorio);
                }
            }
            catch (error) {
                console.error("Erro ao buscar dados:", error);
                toast.error("Erro ao carregar dados. Tente novamente.");
            }
        };
        fetchData();
    }, [id]);
    if (!carro)
        return _jsx("p", { children: "Carregando..." });
    const formatarPreco = (preco) => {
        return preco.toLocaleString('pt-BR', { minimumFractionDigits: 0 });
    };
    return (_jsxs(_Fragment, { children: [_jsxs(GaleriaContainer, { children: [_jsx(Principal, { children: _jsx("img", { src: `${baseUrl}/uploads/carros/${imagemPrincipal}`, alt: "Imagem principal do carro" }) }), _jsx(Miniaturas, { children: carro.imagens.slice(0, 4).map((img, index) => {
                            const isLastVisible = index === 3 && carro.imagens.length > 4;
                            return (_jsxs(MiniaturaWrapper, { onClick: () => {
                                    if (isLastVisible) {
                                        setMostrarSlider(true);
                                    }
                                    else {
                                        setImagemPrincipal(img.url);
                                    }
                                }, children: [_jsx("img", { src: `${baseUrl}/uploads/carros/${img.url}`, alt: `Miniatura ${index + 1}` }), isLastVisible && _jsx(OverlayTexto, { children: "Ver mais fotos" })] }, img.id));
                        }) })] }), _jsxs(DetalhesContainer, { children: [_jsxs(InfoCarro, { children: [_jsxs(BoxMarcaPreco, { children: [_jsx("img", { src: `${baseUrl}${carro.marca.logo}`, alt: carro.marca.nome }), _jsxs("div", { children: [_jsxs("h2", { children: [carro.marca.nome, " ", carro.modelo] }), _jsxs("h3", { children: ["R$ ", formatarPreco(carro.preco)] })] })] }), _jsxs(BoxFichaTecnica, { children: [_jsx("div", { className: "grid", children: [
                                            { icon: _jsx(FaCogs, {}), label: `Câmbio: ${carro.cambio}` },
                                            { icon: _jsx(FaCalendarAlt, {}), label: `Ano: ${carro.ano}` },
                                            {
                                                icon: _jsx(FaRoad, {}),
                                                label: `KM: ${carro.quilometragem.toLocaleString()} km`,
                                            },
                                            {
                                                icon: _jsx(FaGasPump, {}),
                                                label: `Combustível: ${carro.combustivel}`,
                                            },
                                            { icon: _jsx(FaCarSide, {}), label: `Portas: ${carro.portas}` },
                                        ].map((item, index) => (_jsxs("div", { className: "item", children: [item.icon, " ", item.label] }, index))) }), _jsx("span", { children: "Descri\u00E7\u00E3o" }), _jsx("p", { children: carro.descricao })] })] }), vendedorSorteado && (_jsx(BotaoWhatsappContainer, { children: _jsxs(BotaoWhatsapp, { href: `https://wa.me/55${vendedorSorteado.telefone.replace(/\D/g, "")}`, target: "_blank", rel: "noopener noreferrer", children: [_jsx(FaWhatsapp, { size: 20 }), " Fale com um vendedor"] }) }))] }), _jsx(CarrosSemelhantes, { marca: carro.marca.nome, carroIdAtual: String(carro.id) }), _jsx(Redes, {}), _jsx(Mapa, {}), mostrarSlider && (_jsx(ModalBackdrop, { onClick: () => setMostrarSlider(false), children: _jsxs(ModalSlider, { onClick: (e) => e.stopPropagation(), children: [_jsx(FecharModal, { onClick: () => setMostrarSlider(false), children: _jsx(FaTimes, { size: 24 }) }), _jsx(Swiper, { navigation: true, modules: [Navigation], children: carro.imagens.map((img) => (_jsx(SwiperSlide, { children: _jsx("img", { src: `${baseUrl}/uploads/carros/${img.url}`, alt: "Slide", style: { width: "100%", height: "auto", borderRadius: "12px" } }) }, img.id))) })] }) }))] }));
};
