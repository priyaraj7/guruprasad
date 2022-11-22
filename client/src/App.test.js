// app.test.js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import App from "./App";
//import { App, LocationDisplay } from "./app";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

it("landing on a bad page", () => {
  const badRoute = "/some/bad/route";

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  // verify navigation to "no match" route
  expect(screen.getByText(/404 Error/i)).toBeInTheDocument();
});

it("renders the landing page", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});
