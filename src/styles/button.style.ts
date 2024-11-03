import { css } from "styled-components";
import { AddButtonStyleByInternal } from "@/types/button.types";

export const buttonStyle = css`
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

  background-color: ${({
    addbuttonstylebyinternal,
  }: {
    addbuttonstylebyinternal: AddButtonStyleByInternal | undefined;
  }) => {
    switch (addbuttonstylebyinternal) {
      case "button1":
        return "black";
      case "button2":
        return "white";
      case "button3":
        return "white";
      default:
        return "black";
    }
  }};
  color: ${({
    addbuttonstylebyinternal,
  }: {
    addbuttonstylebyinternal: AddButtonStyleByInternal | undefined;
  }) => {
    switch (addbuttonstylebyinternal) {
      case "button1":
        return "white";
      case "button2":
        return "black";
      case "button3":
        return "black";
      default:
        return "white";
    }
  }};
  border: ${({
    addbuttonstylebyinternal,
  }: {
    addbuttonstylebyinternal: AddButtonStyleByInternal | undefined;
  }) => {
    switch (addbuttonstylebyinternal) {
      case "button1":
        return "none";
      case "button2":
        return "solid 2px black";
      case "button3":
        return "none";
      default:
        return "none";
    }
  }};

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
