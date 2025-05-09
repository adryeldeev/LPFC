import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider"; // Ajuste o caminho se necessário

const PrivateRouteAdmin = () => {
  const { token, user } = useAuth();

  // Não logado: permite ver páginas públicas (landing page, por exemplo)
  if (!token) {
    return <Outlet />; // Permite acessar a landing page ou qualquer outra rota pública
  }

  // Logado, mas não é ADMIN: redireciona para a página inicial
  if (user?.role !== "ADMIN") {
    return <Navigate to="/" />; // Pode redirecionar para a página inicial ou outra página pública
  }

  // ADMIN logado: permite acessar a rota de admin
  return <Outlet />;
};

export default PrivateRouteAdmin;
