import { useState } from "react";
import { Container, Label, Input, Button, ErrorMessage, CheckboxWrapper } from "./FormStyled";
import useApi from "../../Api/Api";
interface FormData {
    veiculo: string;
  nome: string;
  telefone: string;
  whatsapp: boolean;
  email: string;
}

export const FormPropostaVenda = () => {
    const api = useApi();
  const [formData, setFormData] = useState<FormData>({
    veiculo: "",
    nome: "",
    telefone: "",
    whatsapp: false,
    email: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, veiculo, telefone, email } = formData;

    if (!nome || !telefone || !email ||!veiculo) {
      setError("Preencha todos os dados");
      return;
    }

    try {
      await api.post("/proposta", formData);
      setFormData({ nome: "", telefone: "", whatsapp: false, email: "", veiculo: "" });
      setError("");
      alert("Proposta enviada com sucesso!");
    } catch (err) {
      console.error("Erro ao enviar proposta", err);
      setError("Erro ao enviar proposta");
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
        <h3>DADOS DO VEÍCULO</h3>
   
        <Input name="veiculo" placeholder="Seu veículo.." value={formData.veiculo} onChange={handleChange} />
        <p>Ex:Polo 2020</p>
        <h3> DADOS DE CONTATO </h3>
        <Label>Nome:
        <Input name="nome" value={formData.nome} onChange={handleChange} />
        </Label>
      <Label>Telefone:
        <Input name="telefone" value={formData.telefone} onChange={handleChange} />
      </Label>

      <Label>Email:
        <Input type="email" name="email" value={formData.email} onChange={handleChange} />
      </Label>

      <CheckboxWrapper>
        <input
          type="checkbox"
          name="whatsapp"
          checked={formData.whatsapp}
          onChange={handleChange}
        />
        <span>É WhatsApp?</span>
      </CheckboxWrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Button type="submit">Enviar Proposta</Button>
    </Container>
  );
};
