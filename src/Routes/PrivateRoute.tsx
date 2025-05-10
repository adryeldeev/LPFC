import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider"; // Ajuste o caminho se necessário

const PrivateRouteAdmin = () => {
  const { token, user } = useAuth();


  // Logado, mas não é ADMIN: redireciona para a página inicial
  if (user?.role !== "ADMIN") {
    return <Navigate to="/" />; // Pode redirecionar para a página inicial ou outra página pública
  }

  // ADMIN logado: permite acessar a rota de admin
  return <Outlet />;
};

export default PrivateRouteAdmin;
