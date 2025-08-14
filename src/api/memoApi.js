import { createStorage } from "./storage";

const STORAGE_KEY = "memos";

const storage = createStorage(STORAGE_KEY);

export const MemoApi = {
  async setMemos(memos) {
    storage.setItem(memos);

    return memos;
  },

  async getMemos() {
    const newMemos = storage.getItem();

    return newMemos ? newMemos : [];
  },

  async deleteMemo(id) {
    const memos = storage.getItem();
    const memoDeleted = memos.find((memo) => memo.id === id);
    const newMemos = memos.filter((memo) => memo.id !== id);
    storage.setItem(newMemos);

    return memoDeleted ?? null;
  },
};
