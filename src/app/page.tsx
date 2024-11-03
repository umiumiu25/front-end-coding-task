"use client";

import { RiPencilLine } from "react-icons/ri";
import styled from "styled-components";
import Button1 from "@/components/button/Button1";
import Button2 from "@/components/button/Button2";
import Button3 from "@/components/button/Button3";

const Div = styled.div`
  background-color: #e9e9e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 100vh; /* ページ全体の高さを確保 */
`;

export default function Home() {
  const onClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  };

  return (
    <Div>
      <Button1
        type="button"
        label="編集"
        onClick={onClick}
        Icon={RiPencilLine}
        target="https://www.google.com"
        addButtonStyleByExternal={{ width: "200px", height: "60px" }}
      />
      <Button2 type="button" label="編集" Icon={RiPencilLine} />
      <Button3
        type="button"
        label="編集"
        onClick={onClick}
        Icon={RiPencilLine}
      />
    </Div>
  );
}
