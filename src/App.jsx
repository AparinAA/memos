import React from "react";
import { Main } from "./pages/Main/MainPage";
import { BrowserRouter, Route, Routes } from "react-router";
import { MemoPage } from "./pages/Memo/MemoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="memo/:memoId" element={<MemoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
