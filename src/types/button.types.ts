import { IconType } from "react-icons";

export type AddButtonStyleByExternal = {
  width: string;
  height: string;
};

export type AddButtonStyleByInternal = "button1" | "button2" | "button3";

export type AbstractButtonProps = {
  type: "button" | "submit";
  label: string;
  Icon?: IconType;
  onClick?: () => Promise<void>;
  target?: string;
  addButtonStyleByInternal?: AddButtonStyleByInternal;
  addButtonStyleByExternal?: AddButtonStyleByExternal;
};

export type ButtonProps = Omit<AbstractButtonProps, "addButtonStyleByInternal">;
