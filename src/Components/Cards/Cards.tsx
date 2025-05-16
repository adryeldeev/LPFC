import React from "react";
import { Container, Card, ImageWrapper, Content, Title, Description, Button } from "./CardsStyled";
import chave from '../../assets/chaveCarro.webp'; // substitua pela URL correta da imagem


interface CardData {
  title: string;
  description: string;
  buttonText: string;
  imageUrl?: string; // URL da imagem
}

const cards: CardData[] = [
  {
    title: "Venda seu Carro",
    description: "Faça a avaliação do seu carro online, no conforto da sua casa.",
    buttonText: "Avalie agora",
    imageUrl: chave,
  },
  {
    title: "Finance seu sonho",
    description: "Trabalhamos com as principais financeiras, isso garante melhores taxas para você!",
    buttonText: "Faça uma simulação"
   
  },
];

const CardSection: React.FC = () => {
    return (
      <Container>
        {cards.map((card, index) => (
          <Card key={index}>
            <Content>
              <Title>{card.title}</Title>
              <Description>{card.description}</Description>
              <Button>{card.buttonText}</Button>
            </Content>
  
            {/* Só renderiza a imagem se imageUrl existir */}
            {card.imageUrl && (
              <ImageWrapper>
                <img src={card.imageUrl} alt={card.title} />
              </ImageWrapper>
            )}
          </Card>
        ))}
      </Container>
    );
  };
export default CardSection;
