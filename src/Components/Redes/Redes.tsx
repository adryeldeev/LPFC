import React from 'react'
import { InfoRedes, RedesContainer } from './RedesStyled'

const Redes = () => {
  return (
    <RedesContainer>
        <h2>Redes Sociais</h2>
        <InfoRedes>
            <a href="https://www.instagram.com/felipecarneiromotors/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" />
            </a>


            <a href="https://www.youtube.com/@Felipecarneiromotors" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
            </a>
            <a href="https://www.tiktok.com/@felipecarneiromotors" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/3046/3046120.png" alt="TikTok" width="40" height="40" />
            </a>


        </InfoRedes>
      
    </RedesContainer>
  )
}

export default Redes
