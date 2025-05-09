import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastrarVeiculos from './Pages/CadastrarVeiculos/CadastrarVeiculos';


function App() {
  return (
    <Router>
      {/* <AuthProvider> */}
        <Routes>
          {/* Rotas públicas */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/cadastrarUser" element={<CadastroUser />} /> */}
          <Route path="/" element={<CadastrarVeiculos />} /> {/* Landing Page / Home */}

          {/* Rotas privadas (Admin apenas) */}
          {/* <Route element={<PrivateRouteAdmin />}>
            <Route path="/cadastrar-admin" element={<CadastrarAdmin />} />
            <Route path="/cadastrar-vendedor" element={<CadastrarVendedor />} />
            <Route path="/cadastrar-veiculo" element={<CadastrarVeiculo />} />
          </Route> */}
        </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;
