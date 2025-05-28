import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext(undefined);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const navigate = useNavigate();
    const api = axios.create({
        baseURL: "https://my-first-project-repo-production.up.railway.app",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const loginAction = async (data) => {
        try {
            const response = await axios.post("https://my-first-project-repo-production.up.railway.app/login", data, {
                headers: { "Content-Type": "application/json" },
            });
            const res = response.data;
            if (res.token) {
                setToken(res.token);
                localStorage.setItem("site", res.token);
                const decodedUser = jwtDecode(res.token);
                setUser(decodedUser);
                setError("");
                navigate("/");
            }
            else {
                throw new Error(res.message || "Login falhou");
            }
        }
        catch (err) {
            console.error("Login failed:", err.message);
            if (err.response && err.response.status) {
                switch (err.response.status) {
                    case 401:
                        setError("E-mail ou senha incorreta.");
                        break;
                    case 404:
                        setError("Usuário não encontrado.");
                        break;
                    default:
                        setError("Erro ao fazer login. Tente novamente.");
                }
            }
            else {
                setError("Erro de conexão. Verifique sua internet.");
            }
        }
    };
    useEffect(() => {
        const storedToken = localStorage.getItem("site");
        if (storedToken) {
            try {
                const decodedUser = jwtDecode(storedToken);
                setToken(storedToken);
                setUser(decodedUser);
            }
            catch (error) {
                console.error("Erro ao decodificar o token:", error);
                localStorage.removeItem("site");
                setToken("");
                setUser(null);
            }
        }
        setLoading(false); // Finaliza o carregamento após a verificação
    }, []);
    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
    };
    return (_jsx(AuthContext.Provider, { value: { token, user, loginAction, logOut, error, api, loading }, children: children }));
};
export default AuthProvider;
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
