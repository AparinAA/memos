import React from "react";
import { describe, it, expect, beforeEach, beforeAll } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { Main } from "../MainPage";
import { useStore } from "../../../store";

describe("Main page", () => {
  beforeAll(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>,
    );
  });

  beforeEach(() => {
    useStore.setState({
      memos: [],
    });
    localStorage.clear();
  });

  it("Create memo, when filled and Save clicked", async () => {
    const user = userEvent.setup();

    expect(document.getElementById("memosCount")?.textContent).toBe("0");

    const textarea =
      screen.queryByPlaceholderText(/memo content/i) ||
      screen.getByRole("textbox");
    await user.type(textarea, "Hello memo");
    const saveBtn = screen.getByRole("button", { name: /save memo/i });
    expect(saveBtn).not.toBeDisabled();
    await user.click(saveBtn);

    await screen.findByText("Hello memo");
    await waitFor(() =>
      expect(document.getElementById("memosCount")?.textContent).toBe("1"),
    );
  });

  it("Not creating memo with empty field (button Save disabled)", async () => {
    const user = userEvent.setup();

    const saveBtn = screen.getByRole("button", { name: /save memo/i });
    expect(saveBtn).toBeDisabled();

    await user.click(saveBtn);
    expect(document.getElementById("memosCount")?.textContent).toBe("0");
  });
});
