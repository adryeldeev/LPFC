import React from 'react'
 import Header from '../../Components/Header/Header'
import Destaque from '../../Components/Destaque/Destaque'
import FiltroVeiculos from '../../Components/FiltrarCarros/FiltrarCarros'
import CardSection from '../../Components/Cards/Cards'
import Depoimentos from '../../Components/Depoimentos/Depoimentos'
import Mapa from '../../Components/Mapa/Mapa'


const Home:React.FC = () => {
  return (
    <>

 <Header />
 <FiltroVeiculos/>
  <Destaque/>
  <CardSection/>
<Depoimentos/>
<Mapa/>
    </>
)
}

export default Home
