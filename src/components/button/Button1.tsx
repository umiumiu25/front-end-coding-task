import { ButtonProps } from "@/types/button.types";
import BaseButton from "./BaseButton";

const Button1: React.FC<ButtonProps> = ({
  type,
  label,
  Icon,
  onClick,
  target,
  addButtonStyleByExternal,
}) => {
  return (
    <BaseButton
      type={type}
      label={label}
      onClick={onClick}
      Icon={Icon}
      target={target}
      addButtonStyleByInternal="button1"
      addButtonStyleByExternal={addButtonStyleByExternal}
    />
  );
};

export default Button1;
