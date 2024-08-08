import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/page";

test("renders Page ", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Hello, Next.js!" })
  ).toBeDefined();

  //   const main = within(screen.getByRole("main"));
  expect(screen.getByRole("img", { name: /Vercel Logo/i })).toBeDefined();
});
