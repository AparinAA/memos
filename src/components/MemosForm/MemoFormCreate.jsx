import React from "react";
import { generateId } from "../../shared/utils";
import { useStore } from "../../store";
import { MemoForm } from "./MemoForm";

export function MemoFormCreate() {
  const addMemo = useStore((store) => store.addMemo);

  const onAddMemo = ({ content }) => {
    const id = generateId();
    const title = `Memo #${id}`;

    addMemo({ id, title, content });
  };

  return <MemoForm actionMemo={onAddMemo} />;
}
