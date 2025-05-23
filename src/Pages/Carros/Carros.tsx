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
  CardActions,
  ModalContainer,
  ModalContent,
  BotaoSalvar,
  BotaoCancelar,
} from "./CarrosStyled";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import useApi from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";







type Imagem = {
  id: number;
  url: string;
  carroId: number;
};

type Carro = {
  id: number;
  modelo: string;
  ano: number;
  preco: number;
  imagens: Imagem[];
  descricao: string;
  quilometragem: number;
  combustivel: string;
  cambio: string;
  cor: string;
  marca: string;
  portas:number;
  destaque: boolean;

};
type FormValues = {
  modelo: string;
  ano: number;
  preco: number;
  descricao: string;
  quilometragem: number;
  combustivel: string;
  cambio: string;
  cor: string;
  marca: string;
  destaque: boolean;
  portas: number;
  imagens: File[];
};
type Marca = {
  id: number;
  nome: string;
};

const Carros: React.FC = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [carros, setCarros] = useState<Carro[]>([]);
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
   const [open, setOpen] = React.useState(false)
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [carroSelecionado, setCarroSelecionado] = useState<Carro | null>(null);

  const itensPorPagina = 3;
  const baseUrl = "http://localhost:8000"; // Ou a URL do seu servidor

  const formik = useFormik<FormValues>({
  initialValues: {
    modelo: "",
    ano: 0,
    preco: 0,
    descricao: "",
    quilometragem: 0,
    combustivel: "",
    cambio: "",
    cor: "",
    marca: "",
    destaque: false,
    portas: 0,
    imagens: [],
  },
  validationSchema: Yup.object().shape({
    modelo: Yup.string(),
    ano: Yup.number().typeError("Ano deve ser um número"),
    preco: Yup.number().typeError("Preço deve ser um número"),
    descricao: Yup.string(),
    quilometragem: Yup.number().typeError("Quilometragem deve ser um número"),
    combustivel: Yup.string(),
    cambio: Yup.string(),
    cor: Yup.string(),
    marca: Yup.string(),
    destaque: Yup.boolean(),
    portas: Yup.number().typeError("Portas deve ser um número"),
    imagens: Yup.array().of(Yup.mixed()),
  }),
  onSubmit: (values) => {
  if (!carroSelecionado) {
    console.error("Nenhum carro selecionado para edição.");
    return;
  }

  const dadosFormatados: Partial<Carro> = {
    ...values,
    ano: values.ano || undefined,
    preco: values.preco || undefined,
    quilometragem: values.quilometragem || undefined,
    portas: values.portas || undefined,
   imagens:[],
  };

  handleEdit({ ...carroSelecionado, ...dadosFormatados });
},
});

  useEffect(() => {
      const fetchMarcas = async () => {
        try {
          const response = await api.get("/marcas");
          setMarcas(response.data);
        } catch (error) {
          console.error("Erro ao buscar marcas:", error);
        }
      };
  
      fetchMarcas();
    }, []);
  useEffect(() => {
    const fetchCarros = async () => {
      try {
        const response = await api.get("/carros");
        if (response.status === 200) {
          console.log("Dados dos carros:", response.data);
          setCarros(response.data); // Define todos os carros no estado
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
  const handleDelete = async (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este carro?")) {
      try {
        const response = await api.delete(`/carro/${id}`);
        if (response.status === 200) {
          setCarros((prevCarros) => prevCarros.filter((carro) => carro.id !== id));
          alert("Carro excluído com sucesso.");
        } else {
          alert("Erro ao excluir carro.");
        }
      } catch (error) {
        console.error("Erro ao excluir carro:", error);
        alert("Erro ao excluir carro.");
      }
    }
  };

  const handleOpenModal = (carro: Carro) => {
    setCarroSelecionado(carro);
    formik.setFieldValue("modelo", carro.modelo);
    formik.setFieldValue("ano", carro.ano);
    formik.setFieldValue("preco", carro.preco);
    formik.setFieldValue("descricao", carro.descricao);
    formik.setFieldValue("quilometragem", carro.quilometragem);
    formik.setFieldValue("combustivel", carro.combustivel);
    formik.setFieldValue("cambio", carro.cambio);
    formik.setFieldValue("cor", carro.cor);
    formik.setFieldValue("marca", carro.marca);
    formik.setFieldValue("imagens", carro.imagens);
    formik.setFieldValue("destaque", carro.destaque);
    formik.setFieldValue("portas", carro.portas);
   
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
    setCarroSelecionado(null);
    formik.resetForm();
  };



  const handleEdit = async (carro: Carro) => {
    try {
      const response = await api.put(`/carro/${carro.id}`, carro);
      if (response.status === 200) {
        setCarros((prevCarros) =>
          prevCarros.map((c) => (c.id === carro.id ? { ...c, ...carro } : c))
        );
        alert("Carro editado com sucesso.");
      } else {
        alert("Erro ao editar carro.");
      }
    } catch (error) {
      console.error("Erro ao editar carro:", error);
      alert("Erro ao editar carro.");
    } finally {
      handleCloseModal();
    }
  
  };
 

  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;
  const carrosPagina = carros.slice(indiceInicial, indiceFinal);

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
        <BotaoPaginacao onClick={handleNavigate}>Adicionar Carro</BotaoPaginacao>
      </DivAdd>
      <ListaCarrosContainer>
        {carrosPagina.map((carro) => (
          <CarroCard key={carro.id}>
            <CarroSliderWrapper>
              <Slider {...sliderSettings}>
               {carro.imagens && carro.imagens.length > 0 ? (
  carro.imagens.map((imagem) => (
    <img
      key={imagem.id}
      src={`${baseUrl}/uploads/carros/${imagem.url}`}
      alt={carro.modelo}
      style={{ width: 120, height: 80, objectFit: "cover" }}
    />
  ))
) : (
  <img src="/imagem-nao-disponivel.png" alt="Sem imagem" />
)}
              </Slider>
            </CarroSliderWrapper>

            <CarroInfo>
              <h3>{carro.modelo}</h3>
              <p>Ano: {carro.ano}</p>
             <p>Preço: R$ {carro.preco.toLocaleString("pt-BR")}</p>
              <p>Descrição: {carro.descricao}</p>
              <p>Cor: {carro.cor}</p>
              <p>Quilometragem: {carro.quilometragem} km</p>
              <p>Combustível: {carro.combustivel}</p>
              <p>Câmbio: {carro.cambio}</p>
              <p>Marca: {carro.marca.nome}</p>
            </CarroInfo>
            
                        <CardActions className="actions">
                          <button onClick={() => handleOpenModal(carro)}>Editar</button>
                          <button onClick={() => handleDelete(carro.id)}>Excluir</button>
                        </CardActions>
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
      <ModalContainer open={open}>
        <ModalContent>
          <h3>Editar Carro</h3>
         <form onSubmit={formik.handleSubmit}>
  <div>
    <label>Modelo:</label>
    <input
      type="text"
      name="modelo"
      value={formik.values.modelo}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
  </div>

  <div>
    <label>Ano:</label>
    <input
      type="number"
      name="ano"
      value={formik.values.ano}
      onChange={(e) => formik.setFieldValue("ano", parseInt(e.target.value))}
      onBlur={formik.handleBlur}
    />
  </div>

  <div>
    <label>Preço:</label>
 <input
      type="number"
      name="preco"
      value={formik.values.preco}
      onChange={(e) => formik.setFieldValue("preco", parseFloat(e.target.value))}
      onBlur={formik.handleBlur}

/>
  </div>

  <div>
    <label>Descrição:</label>
    <textarea
      name="descricao"
      value={formik.values.descricao}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
  </div>

  <div>
    <label>Quilometragem:</label>
    <input
      type="number"
      name="quilometragem"
      value={formik.values.quilometragem}
      onChange={(e) => formik.setFieldValue("quilometragem", parseInt(e.target.value))}
      onBlur={formik.handleBlur}
    />
  </div>

  <div>
    <label>Combustível:</label>
    <input
      type="text"
      name="combustivel"
      value={formik.values.combustivel}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
  </div>

  <div>
    <label>Câmbio:</label>
    <input
      type="text"
      name="cambio"
      value={formik.values.cambio}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
  </div>

  <div>
    <label>Cor:</label>
    <input
      type="text"
      name="cor"
      value={formik.values.cor}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
  </div>

  <div>
    <label>Marca:</label>
    <select
      name="marca"
      value={formik.values.marca}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    >
      <option value="">Selecione uma marca</option>
      {marcas.map((marca) => (
        <option key={marca.id} value={marca.nome}>
          {marca.nome}
        </option>
      ))}
    </select>
  </div>

  <div>
    <label>Imagens:</label>
    <input
      type="file"
      name="imagens"
      multiple
      onChange={(event) => {
        const files = event.currentTarget.files;
        if (files) {
          const fileArray = Array.from(files);
          formik.setFieldValue("imagens", fileArray);
        }
      }}
    />
  </div>

  <div>
    <label>Destaque:</label>
    <input
      type="checkbox"
      name="destaque"
      checked={formik.values.destaque}
      onChange={(e) => formik.setFieldValue("destaque", e.target.checked)}
    />
  </div>

  <div>
    <label>Portas:</label>
    <input
      type="number"
      name="portas"
      value={formik.values.portas}
      onChange={(e) => formik.setFieldValue("portas", parseInt(e.target.value))}
      onBlur={formik.handleBlur}
    />
  </div>

  <BotaoSalvar type="submit">Salvar</BotaoSalvar>
  <BotaoCancelar type="button" onClick={handleCloseModal}>Cancelar</BotaoCancelar>
</form>
        </ModalContent>
      </ModalContainer>
    </CarrosContainer>
  );
};

export default Carros;