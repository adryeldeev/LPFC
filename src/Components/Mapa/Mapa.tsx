import { Iframe, Left, MapContainer, MapTitle, Right } from './MapaStyled'

const Mapa:React.FC = () => {
  return (
    <MapContainer>
         <Left>


          <Iframe
            src="https://www.google.com/maps?q=Av.+Am%C3%A9rico+Barreira,+909+-+Dem%C3%B3crito+Rocha,+Fortaleza+-+CE,+60440-093&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
            </Left>
            <Right>

           <MapTitle>Endereço</MapTitle>
           <p>Av. Américo Barreira, 909 - LOJA 07 - Demócrito Rocha, Fortaleza - CE, 60440-093</p>
            </Right>
        </MapContainer>
  )
}

export default Mapa
