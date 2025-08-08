import React from "react";
import styles from "./Header.module.css";

export function Header({ memosCount }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.text}>My voice memos</span>
      </h1>
      <div className={styles.memosCount}>
        Total memos: <span id="memosCount">{memosCount}</span>
      </div>
    </header>
  );
}
