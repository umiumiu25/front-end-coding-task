import { useState } from "react";
// import styles from "@/styles/Button.module.css";
import { Button } from "@/components/button/button.style";
import { AbstractButtonProps } from "@/types/button.types";

const BaseButton: React.FC<AbstractButtonProps> = ({
  type,
  label,
  Icon,
  onClick,
  target,
  addButtonStyleByInternal,
  addButtonStyleByExternal,
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
    <Button
      as="a"
      href={target}
      target="_blank"
      rel="noreferrer"
      addbuttonstylebyinternal={addButtonStyleByInternal}
      style={addButtonStyleByExternal}
    >
      {Icon && <Icon />} {label}
    </Button>
  ) : (
    <Button
      type={type}
      onClick={onClick && (() => handleClick(onClick))}
      addbuttonstylebyinternal={addButtonStyleByInternal}
      style={addButtonStyleByExternal}
      disabled={isLoading}
    >
      {Icon && <Icon />} {label}
    </Button>
  );
};

export default BaseButton;
