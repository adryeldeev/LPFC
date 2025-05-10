import React from 'react'
 import Header from '../../Components/Header/Header'
 import Sobre from '../../Components/Sobre/Sobre'
 import Servico from '../../Components/Servicos/Servico'

const Home:React.FC = () => {
  return (
    <>
 <Header />
  <Sobre/>
  <Servico/> 
    </>
)
}

export default Home
