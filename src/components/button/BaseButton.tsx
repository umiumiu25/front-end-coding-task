import { useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (onClick: () => Promise<void>) => {
    console.log("ローディング開始");
    setIsLoading(true); // ローディング開始
    if (onClick != undefined) await onClick();
    setIsLoading(false); // ローディング終了
    console.log("ローディング終了");
  };
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
      onClick={onClick && (() => handleClick(onClick))}
      className={`${styles.button_common} ${styles.button_changeable} ${className}`}
      style={addButtonStyle}
      disabled={isLoading}
    >
      {Icon && <Icon />} {label}
    </button>
  );
};

export default Button;
