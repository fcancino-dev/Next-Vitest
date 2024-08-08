import { expect, test, describe } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import Button from "../src/app/components/button";

describe("Button Component", () => {
  test(" renders correctly", () => {
    render(<Button />);
    expect(screen.getByRole("button", { name: /Hazme clic/i })).toBeDefined();
  });

  test("handles click event", () => {
    render(<Button />);

    fireEvent.click(screen.getByRole("button", { name: /Hazme clic/i }));
    expect(screen.getByRole("button", { name: /Clic/i })).toBeDefined();
  });
});
