
import {

  HeaderContainer,
  HeroText,

  BackgroundImage,
  Button,
  DivChamada,
} from "./HeaderStyled";

const Header: React.FC = () => {


  return (
    <HeaderContainer>
      <BackgroundImage />
      <HeroText>Seu novo carro está aqui!</HeroText>

      <DivChamada>
        <p>Compra, venda e consignação com confiança e agilidade</p>
        <Button>Ver carros disponíveis</Button>
      </DivChamada>
    </HeaderContainer>
  );
};

export default Header;
