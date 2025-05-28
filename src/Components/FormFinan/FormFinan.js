import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Container, Label, Input, Button, ErrorMessage, CheckboxWrapper, Rigth, Left, Form, Div, } from "./FormFinanStyled";
import useApi from "../../Api/Api";
export const FormFinanciamento = () => {
    const api = useApi();
    const [formData, setFormData] = useState({
        veiculo: "",
        nome: "",
        telefone: "",
        whatsapp: false,
        email: "",
        dataNascimento: "",
        cpf: "",
    });
    const [error, setError] = useState("");
    // ✅ Função para formatar CPF
    const formatarCpf = (cpf) => {
        const numeros = cpf.replace(/\D/g, "").slice(0, 11);
        return numeros
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    };
    // ✅ Função para formatar telefone
    const formatarTelefone = (telefone) => {
        const numeros = telefone.replace(/\D/g, "").slice(0, 11);
        if (numeros.length <= 10) {
            return numeros.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim();
        }
        else {
            return numeros.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim();
        }
    };
    // ✅ handleChange com lógica de formatação
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let newValue = value;
        if (name === "cpf") {
            newValue = formatarCpf(value);
        }
        if (name === "telefone") {
            newValue = formatarTelefone(value);
        }
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : newValue,
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
            const response = await api.post("/financiamento", formData);
            setFormData({
                nome: "",
                telefone: "",
                whatsapp: false,
                email: "",
                veiculo: "",
                cpf: "",
                dataNascimento: "",
            });
            if (response.status === 200 || response.status === 201) {
                alert("Análise enviada com sucesso!");
                setError("");
            }
            else {
                alert("Erro ao enviar análise.");
            }
        }
        catch (err) {
            console.error("Erro ao enviar análise", err);
            setError("Erro ao enviar análise.");
        }
    };
    return (_jsxs(Container, { id: "contato", children: [_jsx(Rigth, { children: _jsx("h2", { children: "Entre em contato com um de nossos consultores" }) }), _jsx(Left, { children: _jsxs(Form, { onSubmit: handleSubmit, children: [_jsx("h3", { children: "DADOS DO VE\u00CDCULO" }), _jsx(Input, { name: "veiculo", placeholder: "Seu ve\u00EDculo..", value: formData.veiculo, onChange: handleChange }), _jsx("p", { children: "Ex: Polo 2020" }), _jsx("h3", { children: "DADOS DE CONTATO" }), _jsxs(Label, { children: ["Nome:", _jsx(Input, { name: "nome", value: formData.nome, onChange: handleChange })] }), _jsxs(Div, { children: [_jsxs(Label, { children: ["Telefone:", _jsx(Input, { name: "telefone", value: formData.telefone, onChange: handleChange })] }), _jsxs(CheckboxWrapper, { children: [_jsx("input", { type: "checkbox", name: "whatsapp", checked: formData.whatsapp, onChange: handleChange }), _jsx("span", { children: "WhatsApp?" })] })] }), _jsxs(Label, { children: ["Email:", _jsx(Input, { type: "email", name: "email", value: formData.email, onChange: handleChange })] }), _jsxs(Label, { children: ["Data de Nascimento (opcional)", _jsx(Input, { type: "date", name: "dataNascimento", value: formData.dataNascimento, onChange: handleChange })] }), _jsxs(Label, { children: ["CPF (opcional)", _jsx(Input, { type: "text", name: "cpf", value: formData.cpf, onChange: handleChange })] }), error && _jsx(ErrorMessage, { children: error }), _jsx(Button, { type: "submit", children: "SOLICITAR AN\u00C1LISE" })] }) })] }));
};
export default FormFinanciamento;
