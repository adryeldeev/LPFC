import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Tipagem do usuário baseada no modelo do backend
type User = {
  id: number;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  createdAt: string;
  updatedAt: string;
};

// Tipagem do contexto
type AuthContextType = {
  token: string;
  user: User | null; // O usuário pode ser `null` se não estiver logado
  loginAction: (data: LoginData) => Promise<void>;
  logOut: () => void;
  error: string;
};

// Tipagem para os dados de login
type LoginData = {
  email: string;
  password: string;
};

// Criação do contexto com tipagem
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Tipagem para o AuthProvider
type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");
  const [token, setToken] = useState<string>(localStorage.getItem("site") || "");
  const navigate = useNavigate();

  const loginAction = async (data: LoginData): Promise<void> => {
    try {
      const response = await axios.post("http://localhost:8000/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = response.data;

      if (res.token) {
        setToken(res.token);
        localStorage.setItem("site", res.token);

        setUser(res.userData);
        localStorage.setItem("user", JSON.stringify(res.userData));

        setError("");
        navigate("/");
      } else {
        throw new Error(res.message || "Login falhou");
      }
    } catch (err: any) {
      console.error("Login failed:", err.message);

      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 401:
            setError("E-mail ou senha incorreta. Tente novamente.");
            break;
          case 404:
            setError("Usuário não encontrado. Verifique o email.");
            break;
          default:
            setError("Erro ao fazer login. Tente novamente mais tarde.");
        }
      } else {
        setError("Erro de conexão. Verifique sua internet.");
      }
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("site");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const logOut = (): void => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// Hook para usar o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};