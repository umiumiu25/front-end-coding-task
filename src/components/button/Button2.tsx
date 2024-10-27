import styles from "@/styles/Button.module.css";
import { ButtonProps } from "@/types/button.types";
import Button from "./Button";

const Button2: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  addButtonStyle,
  Icon,
}) => {
  return (
    <Button
      type={type}
      label={label}
      onClick={onClick}
      className={styles.button2}
      addButtonStyle={addButtonStyle}
      Icon={Icon}
    />
  );
};

export default Button2;
