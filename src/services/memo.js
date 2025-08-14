import { MemoApi } from "../api/memoApi";

export const MemoService = {
  async setMemos(memos) {
    await MemoApi.setMemos(memos);

    return memos;
  },

  async getMemos() {
    const newMemos = await MemoApi.getMemos();

    return newMemos ? newMemos : [];
  },

  async deleteMemo(id) {
    await MemoApi.deleteMemo(id);
  },

  verify(memo) {
    if (!memo.content) {
      return false;
    }

    return true;
  },

  getInitialMemos() {
    return MemoApi.getInitialMemos();
  },
};
