import { render } from "@testing-library/react";
import { RiPencilLine } from "react-icons/ri";
import { describe, test, expect } from "vitest";
import Button1 from "./Button1";

describe("Button1", () => {
  // ボタンがリンクとして振る舞うかどうかをテスト
  test("ボタンがリンクとして振る舞う", () => {
    const { getByRole } = render(
      <Button1
        type="button"
        label="編集"
        onClick={async () => {}}
        addButtonStyleByExternal={{ width: "400px", height: "80px" }}
        Icon={RiPencilLine}
        target="https://example.com"
      />
    );
    const linkElement = getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://example.com");
    expect(linkElement).toHaveAttribute("target", "_blank");
  });

  // ボタンのラベルは外部から指定することができます。
  test("ボタンのラベルは外部から指定することができる", () => {
    const { getByRole } = render(
      <Button1
        type="button"
        label="編集"
        onClick={async () => {}}
        addButtonStyleByExternal={{ width: "400px", height: "80px" }}
        Icon={RiPencilLine}
      />
    );
    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveTextContent("編集");
  });

  // ボタンの高さ、横幅は親コンポーネントから制御できます。
  test("ボタンの高さ、横幅は親コンポーネントから制御できる", () => {
    const { getByRole } = render(
      <Button1
        type="button"
        label="編集"
        onClick={async () => {}}
        addButtonStyleByExternal={{ width: "400px", height: "80px" }}
        Icon={RiPencilLine}
      />
    );
    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveStyle({ width: "400px", height: "80px" });
  });
});
