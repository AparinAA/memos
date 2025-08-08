import { MemoApi } from "../api/memoApi";

export const MemoService = {
  setMemos(memos) {
    MemoApi.setMemos(memos);

    return memos;
  },

  getMemos() {
    const newMemos = MemoApi.getMemos();

    return newMemos ? newMemos : [];
  },

  deleteMemo(id) {
    return MemoApi.deleteMemo(id);
  },

  verify(memo) {
    if (!memo.content) {
      return false;
    }

    return true;
  },
};
