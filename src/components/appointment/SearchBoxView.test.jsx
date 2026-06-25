import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBoxView from "./SearchBoxView";

describe("SearchBoxView", () => {
  it("calls onSearch with input value on submit", async () => {
    const onSearch = vi.fn();
    const user = userEvent.setup();

    render(<SearchBoxView onSearch={onSearch} />);

    const input = screen.getByPlaceholderText(/search appointments/i);
    await user.type(input, "Rajesh");
    await user.click(screen.getByRole("button", { name: /search/i }));

    expect(onSearch).toHaveBeenCalledWith("Rajesh");
  });
});
