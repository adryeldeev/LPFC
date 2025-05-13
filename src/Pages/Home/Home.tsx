import React from 'react'
 import Header from '../../Components/Header/Header'
 import Sobre from '../../Components/Sobre/Sobre'
 import Servico from '../../Components/Servicos/Servico'
import Destaque from '../../Components/Destaque/Destaque'

const Home:React.FC = () => {
  return (
    <>

 <Header />
  <Sobre/>
  <Servico/> 
  <Destaque/>
    </>
)
}

export default Home
