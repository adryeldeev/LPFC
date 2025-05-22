import { FormPropostaVenda } from "../../Components/Form/Form";
import Mapa from "../../Components/Mapa/Mapa";
import Redes from "../../Components/Redes/Redes";
import { ContentVenda, Container, LeftSide, RightSide, Step, StepText, StepTitle, IconWrapper,ContentText,ContentOpcoes,CardProcesso } from "./VendasStyled";
import { FaComments, FaClipboardList, FaHandshake } from "react-icons/fa"; // Ícones equivalentes

export default function Venda() {
  const card = [
    {
      id: 1,
     position: "1",
      title: "Venda na hora!",
      description: "Para quem precisa de dinheiro na hora! Compramos o seu veículo e pagamos à vista. Simples assim."
    },
    {
      id: 2,
      position: "2",
      title: "Venda com troca",
      description: "Quer trocar de carro? Nós compramos o seu e você sai com outro zero km ou seminovo."
    },
    {
      id: 3,
      position: "3",
      title: "Consignação",
      description: "Mais segurança e rentabilidade para você! Anunciamos seu veículo nos principais portais e passamos as propostas. Quando vendido, você recebe o valor à vista."
    }

   
  ]
  return (
  <ContentVenda>
    <h2>Quer vender seu veículo?</h2>
    <p>Solicite a avaliação agora!</p>
    <Container>
      <LeftSide>
        <FormPropostaVenda />
      </LeftSide>

      <RightSide>
        <StepTitle>QUAIS SÃO OS PRÓXIMOS PASSOS?</StepTitle>

        <Step>
          <IconWrapper><FaComments size={36} /></IconWrapper>
          <StepText>Entramos em contato</StepText>
        </Step>

        <Step>
          <IconWrapper><FaClipboardList size={36} /></IconWrapper>
          <StepText>Avaliamos seu veículo</StepText>
        </Step>

        <Step>
          <IconWrapper><FaHandshake size={36} /></IconWrapper>
          <StepText>Fechamos negócio</StepText>
        </Step>
      </RightSide>
    </Container>
    <ContentOpcoes>
      <h2>Conheço as suas  opções</h2>
      <ContentText>
        {card.map((item) => (
          <CardProcesso key={item.id}>
            <div className="icon">
              <span>{item.position}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </CardProcesso>
        ))}
        
      </ContentText>
    </ContentOpcoes>
    <Redes/>
    <Mapa />
  </ContentVenda>
  );
}
