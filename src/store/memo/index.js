import { MemoService } from "../../services/memo";

const memos = await MemoService.getMemos();

export const createMemoSlice = (set) => ({
  memos,
  addMemo: async (memo) => {
    const memos = await MemoService.getMemos();
    const updatedMemos = [...memos, memo];
    const newMemos = await MemoService.setMemos(updatedMemos);

    set({ memos: newMemos });
  },
  deleteMemo: async (id) => {
    await MemoService.deleteMemo(id);
    const updatedMemos = await MemoService.getMemos();
    set({ memos: updatedMemos });
  },
  editMemo: async (id, updatedMemo) => {
    const memos = await MemoService.getMemos();
    const memoIndex = memos.findIndex((memo) => memo.id === id);
    if (memoIndex !== -1) {
      memos[memoIndex] = { ...memos[memoIndex], ...updatedMemo };
      const newMemos = await MemoService.setMemos(memos);
      set({ memos: newMemos });
    }
  },
});
