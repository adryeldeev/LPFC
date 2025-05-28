import React from 'react';
import { Card, Cards, Content, Div, Title } from './DepoimentosStyled';
import Redes from '../Redes/Redes';
import depo1 from '../../assets/depoFc1.webp';
import depo2 from '../../assets/depoFc2.webp';
import depo3 from '../../assets/depoFC3.webp';

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
      image: depo1,
    },
    {
      id: 2,
      name: 'Maria',
      text: 'Transparência e ótimo pós-venda, ótimo suporte.',
      image:depo2,
    },
    {
      id: 3,
      name: 'João',
      text: 'Comprei meu carro lá e o atendimento é ótimo. Garantia funciona, recomendo.',
      image: depo3,
    },
  ];

  return (
    <>
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
      <Redes/>
    </>
  );
};

export default Depoimentos;
