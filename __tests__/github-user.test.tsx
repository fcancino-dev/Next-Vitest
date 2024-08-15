import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Page from "../src/app/page";

describe("Home page", () => {
  it("should fetch and display GitHub user information", async () => {
    const mockResponse = {
      login: "fcancino-dev",
      avatar_url: "https://avatars.githubusercontent.com/u/129630901?v=4",
      html_url: "https://github.com/fcancino-dev",
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    ) as any;

    render(<Page user={mockResponse} />);

    await waitFor(() =>
      expect(screen.getByText("fcancino-dev")).toBeInTheDocument()
    );
    const avatarImage = screen.getByRole("img", {
      name: /fcancino-dev's avatar/i,
    });
    expect(avatarImage).toBeInTheDocument();
    expect(screen.getByText("Visit Profile")).toHaveAttribute(
      "href",
      "https://github.com/fcancino-dev"
    );
  });
});
