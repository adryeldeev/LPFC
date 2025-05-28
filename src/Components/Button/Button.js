import { jsx as _jsx } from "react/jsx-runtime";
import { ButtonField } from './ButtonStyled';
const Button = ({ text, onClick }) => {
    return (_jsx(ButtonField, { onClick: onClick, children: text }));
};
export default Button;
