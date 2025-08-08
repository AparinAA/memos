import { useState, useMemo } from "react";
import { MemosList } from "../MemosList/MemosList";
import { Search } from "../Search/Search";
import React from "react";
import { useStore } from "../../store";

export function Memos() {
  const [searchQuery, setSearchQuery] = useState("");
  const memos = useStore((store) => store.memos);

  const filteredMemos = useMemo(
    () => memos.filter((memo) => memo.content.includes(searchQuery)),
    [searchQuery, memos],
  );

  return (
    <>
      <Search value={searchQuery} onChange={setSearchQuery} />
      <MemosList memos={filteredMemos} />
    </>
  );
}
