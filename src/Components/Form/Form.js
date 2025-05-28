import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Container, Label, Input, Button, ErrorMessage, CheckboxWrapper } from "./FormStyled";
import useApi from "../../Api/Api";
export const FormPropostaVenda = () => {
    const api = useApi();
    const [formData, setFormData] = useState({
        veiculo: "",
        nome: "",
        telefone: "",
        whatsapp: false,
        email: "",
    });
    const [error, setError] = useState("");
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { nome, veiculo, telefone, email } = formData;
        if (!nome || !telefone || !email || !veiculo) {
            setError("Preencha todos os dados");
            return;
        }
        try {
            await api.post("/proposta", formData);
            setFormData({ nome: "", telefone: "", whatsapp: false, email: "", veiculo: "" });
            setError("");
            alert("Proposta enviada com sucesso!");
        }
        catch (err) {
            console.error("Erro ao enviar proposta", err);
            setError("Erro ao enviar proposta");
        }
    };
    return (_jsxs(Container, { onSubmit: handleSubmit, children: [_jsx("h3", { children: "DADOS DO VE\u00CDCULO" }), _jsx(Input, { name: "veiculo", placeholder: "Seu ve\u00EDculo..", value: formData.veiculo, onChange: handleChange }), _jsx("p", { children: "Ex:Polo 2020" }), _jsx("h3", { children: " DADOS DE CONTATO " }), _jsxs(Label, { children: ["Nome:", _jsx(Input, { name: "nome", value: formData.nome, onChange: handleChange })] }), _jsxs(Label, { children: ["Telefone:", _jsx(Input, { name: "telefone", value: formData.telefone, onChange: handleChange })] }), _jsxs(Label, { children: ["Email:", _jsx(Input, { type: "email", name: "email", value: formData.email, onChange: handleChange })] }), _jsxs(CheckboxWrapper, { children: [_jsx("input", { type: "checkbox", name: "whatsapp", checked: formData.whatsapp, onChange: handleChange }), _jsx("span", { children: "\u00C9 WhatsApp?" })] }), error && _jsx(ErrorMessage, { children: error }), _jsx(Button, { type: "submit", children: "Enviar Proposta" })] }));
};
