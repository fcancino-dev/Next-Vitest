import { expect, test } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import Button from "../src/app/components/button";

test(" render button component", () => {
  render(<Button />);
  expect(screen.getByRole("button", { name: /Click me/i })).toBeDefined();
  fireEvent.click(screen.getByRole("button", { name: /Click me/i }));
});
