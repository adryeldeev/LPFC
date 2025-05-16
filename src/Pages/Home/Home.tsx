import React from 'react'
 import Header from '../../Components/Header/Header'
import Destaque from '../../Components/Destaque/Destaque'
import FiltroVeiculos from '../../Components/FiltrarCarros/FiltrarCarros'
import CardSection from '../../Components/Cards/Cards'
import { FormPropostaVenda } from '../../Components/Form/Form'

const Home:React.FC = () => {
  return (
    <>

 <Header />
 <FiltroVeiculos/>
  <Destaque/>
  <CardSection/>
  <FormPropostaVenda/>
    </>
)
}

export default Home
