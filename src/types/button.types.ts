import { IconType } from "react-icons";

export type AddButtonStyle = {
  width: string;
  height: string;
};

export type AbstractButtonProps = {
  type: "button" | "submit";
  label: string;
  onClick?: () => void;
  className?: string;
  addButtonStyle?: AddButtonStyle;
  Icon?: IconType;
  target?: string;
};

export type ButtonProps = Omit<AbstractButtonProps, "className">;
