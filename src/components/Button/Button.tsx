import React from "react";
import { ButtonProps } from "types"
const Button: React.FC<ButtonProps> = ({ type = 'button', label = 'Default' }) => {
  return <button type={type}>{label}</button>
}

export default Button;