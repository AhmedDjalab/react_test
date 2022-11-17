import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { StarredProvider } from "../../context/starred_context";

test("renders learn react link", () => {
  render(
    <StarredProvider>
      <App />
    </StarredProvider>
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
