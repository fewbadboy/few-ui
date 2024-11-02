import React from "react";
import { ButtonProps } from "types"
import handle from "../../utils/index"

const Button: React.FC<ButtonProps> = ({ type = 'button', label = 'Default' }) => {
  async function handleClick() {
    await handle()
  }
  return <button type={type} onClick={handleClick}>{label}</button>
}

export default Button;