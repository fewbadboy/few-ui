import React from "react";
import handle from "../../utils/index"

export interface ButtonProps {
  type: "button" | "submit"
  label: string,
  className?: string
  style?: React.CSSProperties
}


const MyButton: React.FC<ButtonProps> = ({
  type = 'button',
  label = 'Default',
  className,
  style
}) => {
  async function handleClick() {
    await handle()
  }
  return (
    <button
      type={type}
      className={`btn ${className}`}
      style={style}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default MyButton;