"use client";

import { RiPencilLine } from "react-icons/ri";
import Button1 from "@/components/button/Button1";
import Button2 from "@/components/button/Button2";
import Button3 from "@/components/button/Button3";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button1
        type="button"
        label="編集"
        onClick={() => console.log("test")}
        Icon={RiPencilLine}
        target="https://www.google.com"
      />
      <Button2
        type="button"
        label="編集"
        onClick={() => console.log("test")}
        Icon={RiPencilLine}
      />
      <Button3
        type="button"
        label="編集"
        onClick={() => console.log("test")}
        Icon={RiPencilLine}
      />
    </div>
  );
}
