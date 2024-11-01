declare module "*.{css, scss}" {}

export interface ButtonProps {
  type: "button" | "submit"
  label: string
}