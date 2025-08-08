import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Memo } from "../../components/Memo/Memo";
import { useStore } from "../../store";
import styles from "./MemoPage.module.css";

export const MemoPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const memos = useStore((store) => store.memos);

  const memo = memos.find(({ id }) => id === params.memoId);

  useEffect(() => {
    if (!memo) {
      navigate("/");
    }
  }, [memo, navigate]);

  const handleBack = () => {
    navigate("/");
  };

  if (!memo) {
    return <div>Memo not found</div>;
  }

  return (
    <div className={styles.page}>
      <button type="button" className={styles.backButton} onClick={handleBack}>
        Back
      </button>
      <Memo {...memo} />
    </div>
  );
};
