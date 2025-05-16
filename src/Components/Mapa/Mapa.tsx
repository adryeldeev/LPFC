import { Iframe, MapContainer, MapTitle } from './MapaStyled'

const Mapa:React.FC = () => {
  return (
    <MapContainer>
         
          <Iframe
            src="https://www.google.com/maps?q=Av.+Am%C3%A9rico+Barreira,+909+-+Dem%C3%B3crito+Rocha,+Fortaleza+-+CE,+60440-093&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
           <MapTitle>Endereço</MapTitle>
           <p>Av. Américo Barreira, 909 - LOJA 07 - Demócrito Rocha, Fortaleza - CE, 60440-093</p>
        </MapContainer>
  )
}

export default Mapa
