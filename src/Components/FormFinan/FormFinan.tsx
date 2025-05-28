import { useState } from "react";
import {
  Container,
  Label,
  Input,
  Button,
  ErrorMessage,
  CheckboxWrapper,
  Rigth,
  Left,
  Form,
  Div,
} from "./FormFinanStyled";
import useApi from "../../Api/Api";

interface FormData {
  veiculo: string;
  nome: string;
  telefone: string;
  whatsapp: boolean;
  email: string;
  dataNascimento?: string;
  cpf?: string;
}

export const FormFinanciamento = () => {
  const api = useApi();
  const [formData, setFormData] = useState<FormData>({
    veiculo: "",
    nome: "",
    telefone: "",
    whatsapp: false,
    email: "",
    dataNascimento: "",
    cpf: "",
  });

  const [error, setError] = useState("");

  // ✅ Função para formatar CPF
  const formatarCpf = (cpf: string) => {
    const numeros = cpf.replace(/\D/g, "").slice(0, 11);
    return numeros
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  // ✅ Função para formatar telefone
  const formatarTelefone = (telefone: string) => {
    const numeros = telefone.replace(/\D/g, "").slice(0, 11);
    if (numeros.length <= 10) {
      return numeros.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim();
    } else {
      return numeros.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim();
    }
  };

  // ✅ handleChange com lógica de formatação
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    let newValue = value;

    if (name === "cpf") {
      newValue = formatarCpf(value);
    }

    if (name === "telefone") {
      newValue = formatarTelefone(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { nome, veiculo, telefone, email } = formData;

    if (!nome || !telefone || !email || !veiculo  ) {
      setError("Preencha todos os dados");
      return;
    }

    try {
     const response =  await api.post("/financiamento", formData);
      setFormData({
        nome: "",
        telefone: "",
        whatsapp: false,
        email: "",
        veiculo: "",
        cpf: "",
        dataNascimento: "",
      });
     if (response.status === 200 || response.status === 201) {
        alert("Análise enviada com sucesso!");
        setError("");

      } else {
        alert("Erro ao enviar análise.");
      }
     
    } catch (err) {
      console.error("Erro ao enviar análise", err);
      setError("Erro ao enviar análise.");
    }
  };

  return (
    <Container id="contato">
        <Rigth>
          <h2>Entre em contato com um de nossos consultores</h2>
        </Rigth>
        <Left>
    <Form  onSubmit={handleSubmit}>

      <h3>DADOS DO VEÍCULO</h3>
      <Input
        name="veiculo"
        placeholder="Seu veículo.."
        value={formData.veiculo}
        onChange={handleChange}
      />
      <p>Ex: Polo 2020</p>

      <h3>DADOS DE CONTATO</h3>

      <Label>
        Nome:
        <Input name="nome" value={formData.nome} onChange={handleChange} />
      </Label>

      <Div>
        <Label>
          Telefone:
          <Input
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            />
        </Label>
        <CheckboxWrapper>
          <input
            type="checkbox"
            name="whatsapp"
            checked={formData.whatsapp}
            onChange={handleChange}
            />
          <span>WhatsApp?</span>
        </CheckboxWrapper>
      </Div>

      <Label>
        Email:
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
      </Label>

      <Label>
        Data de Nascimento (opcional)
        <Input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          />
      </Label>

      <Label>
        CPF (opcional)
        <Input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
        />
      </Label>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Button type="submit">SOLICITAR ANÁLISE</Button>
          </Form>
          </Left>
    </Container>
  );
};

export default FormFinanciamento;