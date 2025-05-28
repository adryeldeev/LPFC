import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Iframe, Left, MapContainer, MapTitle, Right } from './MapaStyled';
const Mapa = () => {
    return (_jsxs(MapContainer, { children: [_jsx(Left, { children: _jsx(Iframe, { src: "https://www.google.com/maps?q=Av.+Am%C3%A9rico+Barreira,+909+-+Dem%C3%B3crito+Rocha,+Fortaleza+-+CE,+60440-093&output=embed", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }), _jsxs(Right, { children: [_jsx(MapTitle, { children: "Endere\u00E7o" }), _jsx("p", { children: "Av. Am\u00E9rico Barreira, 909 - LOJA 07 - Dem\u00F3crito Rocha, Fortaleza - CE, 60440-093" })] })] }));
};
export default Mapa;
