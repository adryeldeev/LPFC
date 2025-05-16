import { FormPropostaVenda } from "../../Components/Form/Form";
import Mapa from "../../Components/Mapa/Mapa";
import { Container, LeftSide, RightSide, Step, StepText, StepTitle, IconWrapper } from "./VendasStyled";
import { FaComments, FaClipboardList, FaHandshake } from "react-icons/fa"; // Ícones equivalentes

export default function Venda() {
  return (
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
      <Mapa />
    </Container>
  );
}
