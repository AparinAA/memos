import React from "react";
import { Memo } from "../Memo/Memo";
import styles from "./MemosList.module.css";

export const MemosList = function ({ memos }) {
  return (
    <div className={styles.memosList}>
      {memos.map((memo) => (
        <Memo {...memo} key={memo.id} />
      ))}
    </div>
  );
};
