import React from "react";
import { MemoForm } from "./MemoForm";
import { useStore } from "../../store";

export function MemoFormEdit({ id, title, content, setIsEdit }) {
  const editMemo = useStore((store) => store.editMemo);

  const onEditMemo = ({ content }) => {
    editMemo(id, { title, content });
    setIsEdit((on) => !on);
  };

  return <MemoForm actionMemo={onEditMemo} initContent={content} />;
}
