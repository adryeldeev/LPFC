import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import { Layout } from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Estoque from "./Pages/Estoque/Estoque";
import Sobre from "./Pages/Sobre/Sobre";
import Financiar from "./Pages/Financiar/Financiar";
import { Detalhes } from "./Pages/Detalhes/Detalhes";
import Venda from "./Pages/Vendas/Vendas";







const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
   

   
          
          {/* Layout público - Navbar pública */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/financie" element={<Financiar />} />
            <Route path="/detalhes/:id" element={<Detalhes />} />
            <Route path="/venda-seu-carro" element={<Venda />} />
          </Route>

        
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
