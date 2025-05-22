import { useState } from "react";
import useApi from "../../Api/Api";
import { Button, Card, Container, Input } from "./RequestPasswordStyled";
import { NavLink } from "react-router-dom";

interface Email {
    email: string;
}

export const RequestPasswordReset = () => {
    const api = useApi()
    const [email, setEmail] = useState<Email>({
      email: "",
    });

 
  
  const handleRequestReset = async () => {
    try {
      const response = await api.post("/recuperar-senha", email);
      console.log("Resposta do servidor:", response.data);
      alert("Verifique seu e-mail para redefinir sua senha.");
    } catch (error) {
      console.error("Erro ao enviar solicitação de redefinição de senha:", error);
      alert("Erro ao enviar solicitação. Tente novamente mais tarde.");
    }
}
    return (
      <Container>
        <Card>
          <h2>Recuperação de Senha</h2>
          <p>Digite seu e-mail para receber um link de redefinição.</p>
         <Input
            type="email"
            placeholder="Digite seu e-mail"
            value={email.email}
            onChange={(e) => setEmail({ ...email, email: e.target.value })}
         />
          <Button onClick={handleRequestReset}>Enviar</Button>
          <p>Ainda não tem uma conta?</p>
          <NavLink to="/cadastrarUser">Criar conta</NavLink>
        </Card>
      </Container>
    );
  };
  