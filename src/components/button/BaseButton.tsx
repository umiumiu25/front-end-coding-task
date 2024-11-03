import { useState } from "react";
import styled, { css } from "styled-components";
// import styles from "@/styles/Button.module.css";
import {
  AbstractButtonProps,
  AddButtonStyleByInternal,
} from "@/types/button.types";

type ButtonStyleProps = {
  addbuttonstylebyinternal?: AddButtonStyleByInternal;
};

const Button = styled.button<ButtonStyleProps>`
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 4px;

  /* ボタン文字列を中央揃え */
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 50px;
  min-height: 50px;
  padding: 4px 8px;
  font-size: 0.9rem;

  ${({ addbuttonstylebyinternal }) => {
    switch (addbuttonstylebyinternal) {
      case "button1":
        return css`
          background-color: black;
          color: white;
          border: none;
        `;
      case "button2":
        return css`
          background-color: white;
          color: black;
          border: 2px solid black;
        `;
      case "button3":
        return css`
          background-color: white;
          color: black;
          border: none;
        `;
      default:
        return css`
          background-color: black;
          color: white;
          border: none;
        `;
    }
  }}

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  &:disabled {
    background-color: #ddd; /* ボタンの色を薄く */
    cursor: not-allowed; /* カーソルを禁止マークに */
    opacity: 0.6; /* 半透明にして無効感を出す */
  }

  /* タブレット向け */
  @media (min-width: 481px) {
    width: 350px;
    height: 70px;
    padding: 6px 12px;
    font-size: 1rem;
  }

  /* パソコン向け */
  @media (min-width: 769px) {
    width: 400px; /* 画面幅いっぱいに */
    height: 80px; /* 高さを自動調整 */
    padding: 8px 16px;
    font-size: 1.2rem;
  }
`;

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
