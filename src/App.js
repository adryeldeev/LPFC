import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Estoque from "./Pages/Estoque/Estoque";
import Sobre from "./Pages/Sobre/Sobre";
import Financiar from "./Pages/Financiar/Financiar";
import { Detalhes } from "./Pages/Detalhes/Detalhes";
import Venda from "./Pages/Vendas/Vendas";
import AuthProvider from "./Context/AuthProvider";
const App = () => {
    return (_jsx(Router, { children: _jsx(AuthProvider, { children: _jsx(Routes, { children: _jsxs(Route, { element: _jsx(Layout, {}), children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/estoque", element: _jsx(Estoque, {}) }), _jsx(Route, { path: "/sobre", element: _jsx(Sobre, {}) }), _jsx(Route, { path: "/financie", element: _jsx(Financiar, {}) }), _jsx(Route, { path: "/detalhes/:id", element: _jsx(Detalhes, {}) }), _jsx(Route, { path: "/venda-seu-carro", element: _jsx(Venda, {}) })] }) }) }) }));
};
export default App;
