import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

function Button({ variant = "primary" }: ButtonProps) {
  return <ButtonContainer variant={variant}> Entrar </ButtonContainer>;
}

export { Button };
