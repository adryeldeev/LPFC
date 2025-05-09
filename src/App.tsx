import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import CadastrarVendedor from "./Pages/CadastrarVendedor/CadastrarVendedor";

const App: React.FC = () => {
  return (
    <Router>
    
        <AuthProvider>
         <CadastrarVendedor/>
        </AuthProvider>
      
    </Router>
  );
};

export default App;