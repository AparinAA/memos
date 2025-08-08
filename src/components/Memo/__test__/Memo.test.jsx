import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router";
import { Memo } from "../Memo";
import { generateId } from "../../../shared/utils";

const deleteMemoMock = vi.fn();
const editMemoMock = vi.fn();

vi.mock("../../../store", () => ({
  __esModule: true,
  useStore: (selector) =>
    selector({
      deleteMemo: deleteMemoMock,
      editMemo: editMemoMock,
    }),
}));

describe("Memo", () => {
  const defaultProps = {
    id: "1",
    title: "Memo #1",
    content: "Hello world",
  };

  beforeEach(() => {
    deleteMemoMock.mockClear();
    editMemoMock.mockClear();
  });

  it("renders title link and content", () => {
    render(
      <BrowserRouter>
        <Memo {...defaultProps} />
      </BrowserRouter>,
    );

    expect(screen.getByText("Memo #1")).toBeInTheDocument();
    expect(screen.getByText("Hello world")).toBeInTheDocument();

    const link = screen.getByRole("link", { name: /memo #1/i });
    expect(link).toHaveAttribute("href", "/memo/1");
  });

  it("opens modal and confirms delete", async () => {
    const user = userEvent.setup();

    const id = generateId();
    render(
      <BrowserRouter>
        <Memo {...{ ...defaultProps, id }} />
      </BrowserRouter>,
    );

    await user.click(screen.getByTestId(`delete-button-${id}`));
    expect(screen.getByText(/delete memo\?/i)).toBeInTheDocument();
    await user.click(screen.getByTestId(`confirm-delete-button-${id}`));

    expect(deleteMemoMock).toHaveBeenCalledWith(id);
  });

  it("can cancel delete", async () => {
    const user = userEvent.setup();

    const id = generateId();
    render(
      <BrowserRouter>
        <Memo {...{ ...defaultProps, id }} />
      </BrowserRouter>,
    );

    await user.click(screen.getByTestId(`delete-button-${id}`));
    await user.click(screen.getByTestId(`cancel-delete-button-${id}`));

    expect(deleteMemoMock).not.toHaveBeenCalled();
  });

  it("edits memo via Edit form and saves", async () => {
    const user = userEvent.setup();

    const id = generateId();
    const title = `Memo #${id}`;
    const initialContent = "Initial content";
    const editedContent = "Edited content";

    render(
      <BrowserRouter>
        <Memo {...{ id, title, content: initialContent }} />
      </BrowserRouter>,
    );

    await user.click(screen.getByTestId(`edit-button-${id}`));

    const textarea = screen.getByRole("textbox");
    await user.clear(textarea);
    await user.type(textarea, editedContent);

    const saveBtn = screen.getByRole("button", { name: /save memo/i });
    await user.click(saveBtn);

    expect(editMemoMock).toHaveBeenCalledWith(id, {
      title,
      content: editedContent,
    });
  });
});
