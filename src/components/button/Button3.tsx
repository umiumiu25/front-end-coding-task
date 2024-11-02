import styles from "@/styles/Button.module.css";
import { ButtonProps } from "@/types/button.types";
import Button from "./BaseButton";

const Button3: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  addButtonStyle,
  Icon,
  target,
}) => {
  return (
    <Button
      type={type}
      label={label}
      onClick={onClick}
      className={styles.button3}
      addButtonStyle={addButtonStyle}
      Icon={Icon}
      target={target}
    />
  );
};

export default Button3;
