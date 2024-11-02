import styles from "@/styles/Button.module.css";
import { AbstractButtonProps } from "@/types/button.types";

const Button: React.FC<AbstractButtonProps> = ({
  type,
  label,
  onClick,
  className = styles.button,
  addButtonStyle,
  Icon,
  target,
}) => {
  return typeof target === "string" ? (
    <a
      href={target}
      target="_blank"
      rel="noreferrer"
      className={`${styles.button_common} ${styles.button_changeable} ${className}`}
      style={addButtonStyle}
    >
      {Icon && <Icon />} {label}
    </a>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button_common} ${styles.button_changeable} ${className}`}
      style={addButtonStyle}
    >
      {Icon && <Icon />} {label}
    </button>
  );
};

export default Button;
