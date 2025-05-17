import React from 'react';
import { Card, Cards, Content, Div, Title } from './DepoimentosStyled';

interface CardProps {
  id: number;
  name: string;
  text: string;
  image: string;
}

const Depoimentos: React.FC = () => {
  const cards: CardProps[] = [
    {
      id: 1,
      name: 'Lucas',
      text: 'Preço justo, carros de qualidade. Atendimento excelente.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Maria',
      text: 'Transparência e ótimo pós-venda, ótimo suporte.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'João',
      text: 'Comprei meu carro lá e o atendimento é ótimo. Garantia funciona, recomendo.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <Content>
      <Title>Depoimentos de nossos clientes</Title>
      <Cards>
        {cards.map((card) => (
          <Card key={card.id}>
            <p>{card.text}</p>
            <Div>
              <img src={card.image} alt={card.name} />
              <h3>{card.name}</h3>
            </Div>
          </Card>
        ))}
      </Cards>
    </Content>
  );
};

export default Depoimentos;
