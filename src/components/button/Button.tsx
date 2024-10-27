import styles from "@/styles/Button.module.css";
import { AbstractButtonProps } from "@/types/button.types";

const Button: React.FC<AbstractButtonProps> = ({
  type,
  label,
  onClick,
  className = styles.button,
  addButtonStyle,
  Icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      style={addButtonStyle}
    >
      {Icon && <Icon />} {label}
    </button>
  );
};

export default Button;
