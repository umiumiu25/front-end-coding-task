import styles from "@/styles/Button.module.css";
import { ButtonProps } from "@/types/button.types";
import Button from "./BaseButton";

const Button3: React.FC<ButtonProps> = ({
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
      className={`${styles.button_common} ${styles.button_changeable} ${styles.button3}`}
      addButtonStyle={addButtonStyle}
      Icon={Icon}
    />
  );
};

export default Button3;
