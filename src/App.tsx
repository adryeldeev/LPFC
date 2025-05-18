import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import CadastrarVendedor from "./Pages/CadastrarVendedor/CadastrarVendedor";
import Home from "./Pages/Home/Home";
import PrivateRouteAdmin from "./Routes/PrivateRoute";
import CadastrarVeiculos from "./Pages/CadastrarVeiculos/CadastrarVeiculos";
import CadastrarAdmin from "./Pages/CadastrarAdmin/CadastrarAdmin";
import Vendedores from "./Pages/Vendedores/Vendedores";
import Carros from "./Pages/Carros/Carros";
import Login from "./Pages/Login/Login";
import CadastrarUser from "./Pages/CadastrarUser/CadastrarUser";
import { Layout } from "./Layout/Layout";
import Detalhes from "./Pages/Detalhes/Detalhes";
import Estoque from "./Pages/Estoque/Estoque";
import CadastrarMarcas from "./Pages/CadastrarMarcas/CadastrarMarcas";
import Marcas from "./Pages/Marcas/Marcas.";
import Venda from "./Pages/Vendas/Vendas";
import Sobre from "./Pages/Sobre/Sobre";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrarUser" element={<CadastrarUser />} />
          

          {/* Layout e Navbar aparecem apenas nas rotas abaixo */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
              <Route path="/estoque" element={<Estoque />} />
              <Route path="/sobre" element={<Sobre />} />
            <Route path="/detalhes/:id" element={<Detalhes />} />
            <Route path="/venda-seu-carro" element={<Venda />} />

            {/* Rotas privadas para administradores */}
            <Route element={<PrivateRouteAdmin />}>
              <Route path="/cadastrarVendedor" element={<CadastrarVendedor />} />
              <Route path="/cadastrarVeiculo" element={<CadastrarVeiculos />} />
              <Route path="/veiculos" element={<Carros />} />
              <Route path="/vendedores" element={<Vendedores />} />
              <Route path="/marcas" element={<Marcas />} />
              <Route path="/CadastrarAdmin" element={<CadastrarAdmin />} />
              <Route path="/cadastrarMarca" element={<CadastrarMarcas />} />




            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
