import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
export const ApiUrlContext = createContext("");
export const ApiUrlProvider = ({ children }) => {
    const [apiUrl] = useState(() => {
        const url = import.meta.env.VITE_API_URL;
        if (!url) {
            console.warn("VITE_API_URL não definida. Usando fallback.");
            return "https://my-first-project-repo-production.up.railway.app/";
        }
        return url;
    });
    return _jsx(ApiUrlContext.Provider, { value: apiUrl, children: children });
};
