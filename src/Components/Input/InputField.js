import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { InputFieldStyle } from './InputStyled';
const InputField = forwardRef(({ type = 'text', value, onChange, placeholder = '', id, label, name, ...rest }, ref) => {
    return (_jsxs("div", { children: [label && _jsx("label", { htmlFor: id, children: label }), _jsx(InputFieldStyle, { id: id, type: type, name: name, value: value, onChange: onChange, placeholder: placeholder, ref: ref, ...rest })] }));
});
InputField.displayName = 'InputField';
export default InputField;
