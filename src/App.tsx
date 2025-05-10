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

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrarUser" element={<CadastrarUser />} />

          {/* Rotas privadas para administradores */}
          <Route element={<PrivateRouteAdmin />}>
            <Route path="/cadastrarVendedor" element={<CadastrarVendedor />} />
            <Route path="/cadastrarVeiculo" element={<CadastrarVeiculos />} />
            <Route path="/veiculos" element={<Carros />} />
            <Route path="/vendedores" element={<Vendedores />} />
            <Route path="/CadastrarAdmin" element={<CadastrarAdmin />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;