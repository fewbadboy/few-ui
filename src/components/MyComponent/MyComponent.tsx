import React from "react";
import handle from "../../utils/index"

export interface ButtonProps {
  type: "button" | "submit"
  label: string
}


const Button: React.FC<ButtonProps> = ({ type = 'button', label = 'Default' }) => {
  async function handleClick() {
    await handle()
  }
  return <button type={type} onClick={handleClick}>{label}</button>
}

export default Button;