import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ContactPage from "../ContactPage";

describe("should render text in <ContactPage /> component", () => {
  it("renders Paragraph text", () => {
    render(<ContactPage />);
    const text = screen.getByText(/Fill up the form below to contact/i);
    expect(text).toBeInTheDocument();
  });

  it("renders Heading text", () => {
    render(<ContactPage />);
    const text = screen.getAllByText(/contact/i)[0];
    expect(text).toBeInTheDocument();
  });
  it("renders Phone number text", () => {
    render(<ContactPage />);
    const text = screen.getByText("+91-988888888");
    expect(text).toBeInTheDocument();
  });

  it("renders address text", () => {
    render(<ContactPage />);
    const text = screen.getByText("Ujire, Karnataka 574240, India");
    expect(text).toBeInTheDocument();
  });
});
