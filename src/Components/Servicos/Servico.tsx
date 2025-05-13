import React from 'react';
import { FaShoppingCart, FaCar, FaHandshake } from 'react-icons/fa'; // Ícones do React Icons
import { ContentServicos, DivServicos, DivInfo, DivText } from './ServicoStyled';

const Servico:React.FC = () => {
  return (
    <ContentServicos id="servicos">
      <DivServicos>
        <h2>Nossos Serviços</h2>
        <DivInfo>
          <DivText>
            <FaShoppingCart size={24} style={{ marginRight: '10px', color: '#4F4F4F' }} />
            <h3>Compra de veículos</h3>
            <p>Compramos seu carro por um preço justo.</p>
          </DivText>
          <DivText>
            <FaCar size={24} style={{ marginRight: '10px', color: '#4F4F4F' }} />
            <h3>Venda de seminovos</h3>
            <p>Oferecemos uma seleção de seminovos e qualidade.</p>
          </DivText>
          <DivText>
            <FaHandshake size={24} style={{ marginRight: '10px', color: '#4F4F4F' }} />
            <h3>Consignação</h3>
            <p>Vendemos seu carro usado com transparência.</p>
          </DivText>
        </DivInfo>
      </DivServicos>
    </ContentServicos>
  );
};

export default Servico;