import { ButtonProps } from "@/types/button.types";
import BaseButton from "./BaseButton";

const Button3: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  Icon,
  target,
  addButtonStyleByExternal,
}) => {
  return (
    <BaseButton
      type={type}
      label={label}
      Icon={Icon}
      onClick={onClick}
      target={target}
      addButtonStyleByInternal="button3"
      addButtonStyleByExternal={addButtonStyleByExternal}
    />
  );
};

export default Button3;
