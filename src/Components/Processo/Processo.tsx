import React from 'react'
import { FaCalendarAlt, FaCogs, FaGasPump } from 'react-icons/fa'
import { CardProcesso, ContentInfo, ContentProcesso } from './ProcessoStyled'

const Processo:React.FC = () => {
    const card = [
        {
            id: 1,
            icon: <FaCalendarAlt/>,
            title: "Pesquisa",
            description: "Fazemos a pesquisa de taxas nos bancos com base nos seus dados básicos, do veículo e valor a ser financiado."
        },
        {
            id: 2,
            icon: <FaGasPump/>,
            title: "Simulação",
            description: "Simulamos as melhores taxas de financiamento para você."
        },
        {
            id: 3,
            icon: <FaCogs/>,
            title: "Aprovação",
            description: "Aprovação do financiamento com o banco escolhido."
        },
      

    ]
  return (
    
    <ContentProcesso>
        <h2>Veja como o processo é fácil</h2>
        <ContentInfo>
            {card.map((item) => (
                <CardProcesso key={item.id}>
                    <div className="icon">
                        {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </CardProcesso>
            ))}
        </ContentInfo>

           
    </ContentProcesso>
    
  )
}

export default Processo
