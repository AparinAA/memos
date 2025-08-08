import { Header } from "../../components/Header/Header";
import React from "react";
import styles from "./MainPage.module.css";
import { Memos } from "../../components/Memos/Memos";
import { useStore } from "../../store";
import { MemoFormCreate } from "../../components/MemosForm";

export function Main() {
  const memos = useStore((store) => store.memos);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header memosCount={memos.length} />
        <MemoFormCreate />
        <Memos />
      </div>
    </div>
  );
}
