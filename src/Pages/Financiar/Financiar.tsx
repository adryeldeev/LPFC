import React from 'react'
import { ContentFinanciar,TextContato, ContentText, DivBancos, TextFinanciar, DivInfoBanco, Button } from './FinanciarStyled'
import BV from '../../assets/bancos/bv_2x.webp'
import bradesco from '../../assets/bancos/bradesco_2x.webp'
import itau from '../../assets/bancos/itau_2x.webp'
import santander from '../../assets/bancos/santander_2x.webp'
import banco_pan from '../../assets/bancos/banco-pan_2x.webp'
import FormFinanciamento from '../../Components/FormFinan/FormFinan'
import Mapa from '../../Components/Mapa/Mapa'
import Redes from '../../Components/Redes/Redes'





const Financiar = () => {
  return (
   <ContentFinanciar>
    <h2>Financiar</h2>
    <ContentText>
        <TextFinanciar>
            <span>Faça o financiamento de veículo particular aqui com a gente. A Felipe Carneiro Motors tem parceria com as principais financiadoras do mercado.</span>
            <DivBancos>
            ''<DivInfoBanco>
                <img src={BV} alt="Banco BV" />
                <p>Banco BV</p>
            </DivInfoBanco>
            <DivInfoBanco>
                <img src={bradesco} alt="Bradesco" />
                <p>Bradesco</p>
            </DivInfoBanco>
            <DivInfoBanco>
                <img src={itau} alt="Itaú" />
                <p>Itaú</p>
            </DivInfoBanco>
            
            <DivInfoBanco>
                <img src={santander} alt="Santander" />
                <p>Santander</p>
            </DivInfoBanco>
            <DivInfoBanco>
                <img src={banco_pan} alt="Banco Pan" />
                <p>Banco Pan</p>
            </DivInfoBanco>
            </DivBancos>
        </TextFinanciar>
        <TextContato>

            <span>Entre em contato com a gente e faça uma simulação de financiamento. Estamos prontos para te ajudar!</span>
            <Button href="#contato">Fale Conosco</Button>
        </TextContato>
    </ContentText>
    <FormFinanciamento/>
    <Redes/>
    <Mapa/>
   </ContentFinanciar>
  )
}

export default Financiar
