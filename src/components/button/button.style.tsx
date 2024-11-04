import styled, { css } from "styled-components";
import { AddButtonStyleByInternal } from "@/types/button.types";

type ButtonStyleProps = {
  addbuttonstylebyinternal?: AddButtonStyleByInternal;
};

export const Button = styled.button<ButtonStyleProps>`
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 4px;

  /* ボタン文字列を中央揃え */
  display: flex;
  justify-content: center;
  align-items: center;

  width: 250px;
  height: 50px;
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
  @media (min-width: 480px) {
    width: 350px;
    height: 70px;
    padding: 6px 12px;
    font-size: 1rem;
  }

  /* パソコン向け */
  @media (min-width: 768px) {
    width: 400px; /* 画面幅いっぱいに */
    height: 80px; /* 高さを自動調整 */
    padding: 8px 16px;
    font-size: 1.2rem;
  }
`;
