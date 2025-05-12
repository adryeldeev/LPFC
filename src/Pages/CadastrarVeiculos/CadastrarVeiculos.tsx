import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineCar } from "react-icons/ai";
import {
  TbBrandTesla,
  TbCalendarTime,
  TbGauge,
  TbGasStation,
  TbCurrencyReal,
  TbFileDescription,
  TbPhoto,
  TbDoor,
  TbPalette,
  TbTag
  
} from "react-icons/tb";
import {
  ButtonCadastrarVeiculos,
  ContentCadastrarVeiculos,
  DivInputsCadastrarVeiculos,
  FormCadastrarVeiculos,
  IconWrapper,
  InfoCadastro,
  InputCadastrarVeiculos,
  TitleCadastrarVeiculos,
} from "./CadastrarVeiculoStyyled";
import Switch from "react-switch";
import useApi from "../../Api/Api";
import { useNavigate } from "react-router-dom";

interface FormularioVeiculo {
  modelo: string;
  ano: number;
  preco: number;
  quilometragem: number;
  portas: number;
  destaque: boolean;
  cor: string;
  combustivel: string;
  cambio: string;
  descricao: string;
  marca: string;
}

const CadastrarVeiculos: React.FC = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [imagens, setImagens] = useState<File[]>([]); // Agora é um array de arquivos
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik<FormularioVeiculo>({
    initialValues: {
      modelo: "",
      ano: 0,
      preco: 0,
      quilometragem: 0,
      portas: 0,
      destaque: false,
      cor: "",
      combustivel: "",
      cambio: "",
      descricao: "", 
      marca: "",
    },
    validationSchema: Yup.object({
      modelo: Yup.string().required("Modelo é obrigatório"),
      marca: Yup.string().required("Marca é obrigatória"),
      ano: Yup.number().required("Ano é obrigatório").min(1900, "Ano inválido"),
      preco: Yup.number().required("Preço é obrigatório").min(0, "Preço inválido"),
      quilometragem: Yup.number().min(0, "Quilometragem inválida").nullable(),
      portas: Yup.number().min(1, "Deve ter pelo menos 1 porta").nullable(),
      destaque: Yup.boolean(),
      cor: Yup.string().nullable(),
      combustivel: Yup.string().nullable(),
      cambio: Yup.string().nullable(),
      descricao: Yup.string().nullable(),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (imagens.length === 0) {
        alert("Pelo menos uma imagem é obrigatória");
        return;
      }

      setIsSubmitting(true);

      try {
        const formData = new FormData();

        // Adiciona os valores ao FormData
        formData.append("modelo", values.modelo);
        formData.append("marca",values.marca);
        formData.append("ano", values.ano.toString());
        formData.append("preco", values.preco.toString());
        formData.append("quilometragem", values.quilometragem.toString());
        formData.append("portas", values.portas.toString());
        formData.append("destaque", String(values.destaque));
        formData.append("cor", values.cor);
        formData.append("combustivel", values.combustivel);
        formData.append("cambio", values.cambio);
        formData.append("descricao", values.descricao);
        imagens.forEach((imagem) => {
          formData.append("imagens", imagem); // <- note os colchetes aqui
        });

        const response = await api.post("/carro", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log('resosta do dados',response.data)
        if (response.status === 200 || response.status === 201) {
          alert("Veículo cadastrado com sucesso!");
          navigate("/veiculos");
          resetForm();
          setImagens([]); 
        } else if (response.status === 400) {
          alert("Erro ao cadastrar veículo. Verifique os dados.");
        } else if (response.status === 401) {
          alert("Não autorizado. Faça login novamente.");
        } else {
          alert("Erro ao cadastrar veículo.");
        }
      } catch (error: any) {
        console.error("Erro ao cadastrar veículo:", error);
       

        if (error.response) {
          alert(`Erro: ${error.response.data.message || "Erro ao cadastrar veículo."}`);
        } else if (error.request) {
          alert("Erro: Nenhuma resposta do servidor.");
        } else {
          alert("Erro desconhecido ao cadastrar veículo.");
        }
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <ContentCadastrarVeiculos>
      <TitleCadastrarVeiculos>Cadastre seu Veículo</TitleCadastrarVeiculos>
      <InfoCadastro>
        <FormCadastrarVeiculos onSubmit={formik.handleSubmit}>
          {[
            { id: "modelo", icon: <AiOutlineCar />, placeholder: "Modelo" },
            { id: "marca", icon: <TbTag />, placeholder: "Marca" },
            { id: "cambio", icon: <TbBrandTesla />, placeholder: "Câmbio" },
            { id: "ano", icon: <TbCalendarTime />, placeholder: "Ano" },
            { id: "quilometragem", icon: <TbGauge />, placeholder: "Quilometragem" },
            { id: "combustivel", icon: <TbGasStation />, placeholder: "Combustível" },
            { id: "preco", icon: <TbCurrencyReal />, placeholder: "Preço" },
            { id: "descricao", icon: <TbFileDescription />, placeholder: "Descrição" },
            { id: "portas", icon: <TbDoor />, placeholder: "Portas" },
            { id: "cor", icon: <TbPalette />, placeholder: "Cor" },
          ].map(({ id, icon, placeholder }) => (
            <DivInputsCadastrarVeiculos key={id}>
              <IconWrapper>{icon}</IconWrapper>
              <InputCadastrarVeiculos
                type={id === "ano" || id === "quilometragem" || id === "preco" || id === "portas" ? "number" : "text"}
                id={id}
                placeholder={placeholder}
                value={formik.values[id as keyof typeof formik.values] ?? ""} // Converte null/undefined para string vazia
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched[id as keyof typeof formik.touched] && formik.errors[id as keyof typeof formik.errors] && (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {formik.errors[id as keyof typeof formik.errors]}
                </div>
              )}
            </DivInputsCadastrarVeiculos>
          ))}

          <DivInputsCadastrarVeiculos>
            <IconWrapper>
              <TbPhoto />
            </IconWrapper>
            <InputCadastrarVeiculos
  type="file"
  id="imagens"
  multiple // Permite selecionar múltiplos arquivos
  onChange={(e) => {
    const files = e.target.files;
    if (files) {
      setImagens(Array.from(files)); // Converte FileList para array
    }
  }}
/>
          </DivInputsCadastrarVeiculos>

          <DivInputsCadastrarVeiculos>
          <Switch
  onChange={(checked) => formik.setFieldValue("destaque", checked)} // Atualiza o valor no formik
  checked={formik.values.destaque} // Usa o valor do formik
  onColor="#86d3ff"
  offColor="#ccc"
  onHandleColor="#2693e6"
  offHandleColor="#000"
  handleDiameter={28}
  uncheckedIcon={false}
  checkedIcon={false}
  height={20}
  width={48}
  id="destaque"
/>
            <span style={{ marginLeft: "10px" }}>Destacar</span>
          </DivInputsCadastrarVeiculos>

          <ButtonCadastrarVeiculos type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
          </ButtonCadastrarVeiculos>
        </FormCadastrarVeiculos>
      </InfoCadastro>
    </ContentCadastrarVeiculos>
  );
};

export default CadastrarVeiculos;