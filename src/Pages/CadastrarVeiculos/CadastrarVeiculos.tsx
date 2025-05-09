import React, { useReducer } from "react";
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

// Tipagem do estado
type State = {
  modelo: string;
  cambio: string;
  ano: string;
  km: string;
  combustivel: string;
  preco: string;
  descricao: string;
  portas: string;
  imagem: string;
  destaque: boolean;
};

// Tipagem das ações
type Action =
  | { type: "SET_FIELD"; field: keyof State; value: string }
  | { type: "TOGGLE_DESTAQUE" };

// Estado inicial
const initialState: State = {
  modelo: "",
  cambio: "",
  ano: "",
  km: "",
  combustivel: "",
  preco: "",
  descricao: "",
  portas: "",
  imagem: "",
  destaque: false,
};

// Reducer para gerenciar o estado
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "TOGGLE_DESTAQUE":
      return {
        ...state,
        destaque: !state.destaque,
      };
    default:
      return state;
  }
};

const CadastrarVeiculos: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const api = useApi();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    dispatch({ type: "SET_FIELD", field: id as keyof State, value });
  };

  const handleToggleDestaque = () => {
    dispatch({ type: "TOGGLE_DESTAQUE" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação básica
    if (!state.modelo || !state.ano) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(state).forEach(([key, value]) => {
        formData.append(key, String(value));
      });

      const response = await api.post("/veiculos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Veículo cadastrado com sucesso!");
        // Redirecionar para a página de listagem de veículos
        navigate("/veiculos");
        
        // Redirecionar ou limpar o formulário
        dispatch({ type: "SET_FIELD", field: "modelo", value: "" });
        dispatch({ type: "SET_FIELD", field: "cambio", value: "" });
        dispatch({ type: "SET_FIELD", field: "ano", value: "" });
        dispatch({ type: "SET_FIELD", field: "km", value: "" });
        dispatch({ type: "SET_FIELD", field: "combustivel", value: "" });
        dispatch({ type: "SET_FIELD", field: "preco", value: "" });
        dispatch({ type: "SET_FIELD", field: "descricao", value: "" });
        dispatch({ type: "SET_FIELD", field: "portas", value: "" });
        dispatch({ type: "SET_FIELD", field: "imagem", value: "" });
        dispatch({ type: "TOGGLE_DESTAQUE" });
        } else if (response.status === 400) {
        alert("Erro ao cadastrar veículo. Verifique os dados.");
      } else if (response.status === 401) {
        alert("Não autorizado. Faça login novamente.");
        }

       else {
        alert("Erro ao cadastrar veículo.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar veículo:", error);
      alert("Ocorreu um erro ao cadastrar o veículo. Tente novamente.");
    }
  };

  return (
   <ContentCadastrarVeiculos>
    <TitleCadastrarVeiculos>Cadastre seu Veículo</TitleCadastrarVeiculos>
    <InfoCadastro>
    <FormCadastrarVeiculos onSubmit={handleSubmit}>
      <DivInputsCadastrarVeiculos>
        <IconWrapper>
          <AiOutlineCar />
        </IconWrapper>
        <InputCadastrarVeiculos
          type="text"
          id="modelo"
          placeholder="Modelo"
            value={state.modelo}
            onChange={handleInputChange}
        />
      </DivInputsCadastrarVeiculos>
      <DivInputsCadastrarVeiculos>
        <IconWrapper>
          <TbBrandTesla />
        </IconWrapper>
        <InputCadastrarVeiculos
          type="text"
          id="cambio"
          placeholder="Cambio"
            value={state.cambio}
            onChange={handleInputChange}
            />
        </DivInputsCadastrarVeiculos>
        
    
      <DivInputsCadastrarVeiculos>
        <IconWrapper>
          <TbCalendarTime />
        </IconWrapper>
        <InputCadastrarVeiculos
          type="text"
          id="ano"
          placeholder="Ano"
            value={state.ano}
            onChange={handleInputChange}
        />

      </DivInputsCadastrarVeiculos>
        <DivInputsCadastrarVeiculos>
            <IconWrapper>
            <TbGauge />
            </IconWrapper>
            <InputCadastrarVeiculos
            type="text"
            id="km"
            placeholder="Quilometragem"
            value={state.km}
            onChange={handleInputChange}
            
            />
        </DivInputsCadastrarVeiculos>
        <DivInputsCadastrarVeiculos>
            <IconWrapper>
            <TbGasStation />
            </IconWrapper>
            <InputCadastrarVeiculos
            type="text"
            id="combustivel"
            placeholder="Combustível"
            value={state.combustivel}
            onChange={handleInputChange}
            />
        </DivInputsCadastrarVeiculos>
        <DivInputsCadastrarVeiculos>
            <IconWrapper>
            <TbCurrencyReal />
            </IconWrapper>
            <InputCadastrarVeiculos
            type="text"
            id="preco"
            placeholder="Preço"
            value={state.preco}
            onChange={handleInputChange}
            />
        </DivInputsCadastrarVeiculos>
        <DivInputsCadastrarVeiculos>
            <IconWrapper>
            <TbFileDescription />
            </IconWrapper>
            <InputCadastrarVeiculos
            type="text"
            id="descricao"
            placeholder="Descrição"
            value={state.descricao}
            onChange={handleInputChange}
            />
        </DivInputsCadastrarVeiculos>
        <DivInputsCadastrarVeiculos>
            <IconWrapper>
            <TbDoor />

            </IconWrapper>
            <InputCadastrarVeiculos
            type="text"
            id="portas"
            placeholder="Portas"
            value={state.portas}
            onChange={handleInputChange}
            />
        </DivInputsCadastrarVeiculos>
        <DivInputsCadastrarVeiculos>
            <IconWrapper>
            <TbPhoto />
            </IconWrapper>
            <InputCadastrarVeiculos
            type="file"
            id="imagem"
            placeholder="Imagem"
            value={state.imagem}
            onChange={handleInputChange}
            />
        </DivInputsCadastrarVeiculos>
        <DivInputsCadastrarVeiculos>
          <Switch
            onChange={handleToggleDestaque}
            checked={state.destaque}
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


      <ButtonCadastrarVeiculos type="submit">Cadastrar</ButtonCadastrarVeiculos>
    </FormCadastrarVeiculos>
          </InfoCadastro>
   </ContentCadastrarVeiculos>
    
  )
}

export default CadastrarVeiculos
