import React from 'react'
import { FaUser, FaPhone } from "react-icons/fa";
import { 
     ContentCadastrarVendedor,
    FormCadastrarVendedor,
    DivInputsCadastrarVendedor,
    IconWrapper,
    InputCadastrarVendedor,
    ButtonCadastrarVendedor,} from './CadastrarVendedorStyled'
import { useNavigate } from 'react-router-dom'
import useApi from '../../Api/Api';

type State = {
    nome: string;
    telefone: string;
    };
type Action =
    | { type: "SET_FIELD"; field: keyof State; value: string }

const initialState: State = {
    nome: "",
    telefone: "",
};
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_FIELD":
            return {
                ...state,
                [action.field]: action.value,
            };
        default:
            return state;
    }
};
const CadastrarVendedor = () => {
    const navigate = useNavigate()
    const api = useApi();

    const [state, dispatch] = React.useReducer(reducer, initialState);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch({ type: "SET_FIELD", field: name as keyof State, value });
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Validação simples
        if (!state.nome || !state.telefone) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        try {
            const response = await api.post("/vendedores", {
                nome: state.nome,
                telefone: state.telefone,

            });
            if (response.status === 200 || response.status === 201) { 
                alert("Vendedor cadastrado com sucesso!");
                navigate("/vendedores");
            } else {
                alert("Erro ao cadastrar vendedor.");
            }
        } catch (error) {
            console.error("Erro:", error);
        }
    };
  return (
    <ContentCadastrarVendedor>
    <h1>Cadastrar Vendedor</h1>
    <FormCadastrarVendedor onSubmit={handleSubmit}>
      <DivInputsCadastrarVendedor>
        <IconWrapper>
          <FaUser />
        </IconWrapper>
        <InputCadastrarVendedor
          type="text"
          placeholder="Nome"
          name="nome"
          value={state.nome}
          onChange={handleChange}
        />
      </DivInputsCadastrarVendedor>

      <DivInputsCadastrarVendedor>
        <IconWrapper>
          <FaPhone />
        </IconWrapper>
        <InputCadastrarVendedor
          type="text"
          placeholder="Telefone"
          name="telefone"
          value={state.telefone}
          onChange={handleChange}
        />
      </DivInputsCadastrarVendedor>
    
      <ButtonCadastrarVendedor type="submit">Cadastrar</ButtonCadastrarVendedor>
    </FormCadastrarVendedor>
  </ContentCadastrarVendedor>
  )
}

export default CadastrarVendedor
