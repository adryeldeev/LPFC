import React from 'react'
 import Header from '../../Components/Header/Header'
 import Servico from '../../Components/Servicos/Servico'
import Destaque from '../../Components/Destaque/Destaque'
import FiltroVeiculos from '../../Components/FiltrarCarros/FiltrarCarros'

const Home:React.FC = () => {
  return (
    <>

 <Header />
 <FiltroVeiculos/>
  <Destaque/>
    </>
)
}

export default Home
