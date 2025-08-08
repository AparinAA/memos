import { MemoService } from "../../services/memo";

export const createMemoSlice = (set) => ({
  memos: MemoService.getMemos(),
  addMemo: (memo) => {
    const updatedMemos = [...MemoService.getMemos(), memo];
    const newMemos = MemoService.setMemos(updatedMemos);

    set({ memos: newMemos });
  },
  deleteMemo: (id) => {
    MemoService.deleteMemo(id);
    const updatedMemos = MemoService.getMemos();
    set({ memos: updatedMemos });
  },
  editMemo: (id, updatedMemo) => {
    const memos = MemoService.getMemos();
    const memoIndex = memos.findIndex((memo) => memo.id === id);
    if (memoIndex !== -1) {
      memos[memoIndex] = { ...memos[memoIndex], ...updatedMemo };
      const newMemos = MemoService.setMemos(memos);
      set({ memos: newMemos });
    }
  },
});
