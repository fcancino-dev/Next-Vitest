import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Home from "../src/app/page";

// Mock fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        login: "fcancino-dev",
        avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4",
        html_url: "https://github.com/fcancino-dev",
      }),
  })
) as any;

describe("Home page", () => {
  it("should fetch and display GitHub user information", async () => {
    render(await Home());

    await waitFor(() =>
      expect(screen.getByText("fcancino-dev")).toBeInTheDocument()
    );

    const avatarImage = screen.getByRole("img", {
      name: /fcancino-dev's avatar/i,
    });

    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/123456?v=4"
    );
    expect(screen.getByText("Visit Profile")).toHaveAttribute(
      "href",
      "https://github.com/fcancino-dev"
    );
  });
});
