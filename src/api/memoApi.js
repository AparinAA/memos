import { createStorage } from "./storage";

const STORAGE_KEY = "memos";

const storage = createStorage(STORAGE_KEY);

export const MemoApi = {
  setMemos(memos) {
    storage.setItem(memos);

    return memos;
  },

  getMemos() {
    const newMemos = storage.getItem();

    return newMemos ? newMemos : [];
  },

  deleteMemo(id) {
    const memos = storage.getItem();
    const memoDeleted = memos.find((memo) => memo.id === id);
    const newMemos = memos.filter((memo) => memo.id !== id);
    storage.setItem(newMemos);

    return memoDeleted ?? null;
  },
};
