import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../../Components/Header/Header';
import Destaque from '../../Components/Destaque/Destaque';
import FiltroVeiculos from '../../Components/FiltrarCarros/FiltrarCarros';
import CardSection from '../../Components/Cards/Cards';
import Depoimentos from '../../Components/Depoimentos/Depoimentos';
import Mapa from '../../Components/Mapa/Mapa';
const Home = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(FiltroVeiculos, {}), _jsx(Destaque, {}), _jsx(CardSection, {}), _jsx(Depoimentos, {}), _jsx(Mapa, {})] }));
};
export default Home;
