import { render, fireEvent, act, waitFor } from "@testing-library/react";
import { RiPencilLine } from "react-icons/ri";
import { describe, test, expect, vi } from "vitest";
import BaseButton from "./BaseButton";

describe("BaseButton", () => {
  // ボタンが正しくレンダリングされるかどうかをテスト
  test("ボタンが正しくレンダリングされる", () => {
    const { getByRole } = render(
      <BaseButton
        type="button"
        label="編集"
        Icon={RiPencilLine}
        onClick={async () => {}}
        addButtonStyleByInternal="button1"
        addButtonStyleByExternal={{ width: "400px", height: "80px" }}
      />
    );
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  // ボタンがクリックされたときに onClick ハンドラーが正しく呼び出されるかどうかをテスト
  test("ボタンがクリックされたときに onClick ハンドラーが正しく呼び出される", async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <BaseButton
        type="button"
        label="編集"
        onClick={handleClick}
        addButtonStyleByExternal={{ width: "400px", height: "80px" }}
        Icon={RiPencilLine}
      />
    );
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    act(() => {
      fireEvent.click(buttonElement);
    });
    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
  });

  // ボタンがローディング状態であるかどうかをテスト
  test("ボタンがローディング状態である", async () => {
    const { getByRole } = render(
      <BaseButton
        type="button"
        label="編集"
        onClick={async () => {
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }}
        addButtonStyleByExternal={{ width: "400px", height: "80px" }}
        Icon={RiPencilLine}
      />
    );
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    act(() => {
      fireEvent.click(buttonElement!);
    });
    await waitFor(() => expect(buttonElement).toBeDisabled());
  });

  // ボタンがリンクとして振る舞うかどうかをテスト
  test("ボタンがリンクとして振る舞う", () => {
    const { getByRole } = render(
      <BaseButton
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
      <BaseButton
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
      <BaseButton
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

  // TODO: レスポンシブデザインが正しく適用されているかどうかをテスト（e2eテストモジュールでないとviewportの調整をしたレスポンシブデザインテストが出来ないかも...）

  // describe("レスポンシブデザインが正しく適用されている", () => {
  //   // テスト用のwindow.resizeToメソッドを追加
  //   Object.defineProperty(window, "resizeTo", {
  //     value: (width: number, height: number) => {
  //       Object.assign(window, {
  //         innerWidth: width,
  //         innerHeight: height,
  //       }).dispatchEvent(new Event("resize"));
  //     },
  //   });

  //   beforeEach(() => {
  //     // ビューポートサイズを変更してテストが他のテストに影響しないようにする
  //     window.resizeTo(479, 768); // 初期設定をスマホサイズに設定
  //   });

  //   // スマホサイズの場合
  //   test("スマホの場合", () => {
  //     const { getByRole } = render(
  //       <BaseButton type="button" label="編集" Icon={RiPencilLine} />
  //     );
  //     const buttonElement = getByRole("button");
  //     expect(buttonElement).toHaveStyle({ width: "250px", height: "50px" });
  //   });

  //   // タブレットの場合
  //   test("タブレットの場合", () => {
  //     console.log(window.innerWidth);
  //     const { getByRole } = render(
  //       <BaseButton type="button" label="編集" Icon={RiPencilLine} />
  //     );
  //     window.resizeTo(480, 768);
  //     const buttonElement = getByRole("button");
  //     expect(buttonElement).toHaveStyle({ width: "350px", height: "70px" });
  //   });

  //   // パソコンの場合
  //   test("パソコンの場合", () => {
  //     window.resizeTo(768, 768);
  //     console.log(window.innerWidth);
  //     const { getByRole } = render(
  //       <BaseButton type="button" label="編集" Icon={RiPencilLine} />
  //     );
  //     const buttonElement = getByRole("button");
  //     expect(buttonElement).toHaveStyle({ width: "400px", height: "80px" });
  //   });
  // });
});
