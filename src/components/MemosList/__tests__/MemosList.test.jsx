import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { MemosList } from "../MemosList";

vi.mock("../../Memo/Memo", () => ({
  __esModule: true,
  Memo: (props) => <div>{props.title}</div>,
}));

describe("MemosList", () => {
  it("renders list of memos", () => {
    const memos = [
      { id: "1", title: "Memo #1", content: "A" },
      { id: "2", title: "Memo #2", content: "B" },
    ];

    render(
      <MemoryRouter>
        <MemosList memos={memos} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Memo #1")).toBeInTheDocument();
    expect(screen.getByText("Memo #2")).toBeInTheDocument();
  });
});
