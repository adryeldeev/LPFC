import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
const PrivateRouteAdmin = () => {
  const { user, token, loading } = useAuth();

  console.log("Usuário no PrivateRouteAdmin:", user); // Log para depuração

  // Exibe um indicador de carregamento enquanto o estado está sendo atualizado
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Verifica se o token existe
  if (!token) {
    console.log("Token não encontrado. Redirecionando para login.");
    return <Navigate to="/login" replace />;
  }

  // Verifica se o usuário é ADMIN
  if (user?.role !== "ADMIN") {
    console.log("Usuário não é ADMIN. Redirecionando para a página inicial.");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRouteAdmin;