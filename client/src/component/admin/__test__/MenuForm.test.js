import React from "react";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import MenuForm from "../MenuForm";

describe("should render form and form element", () => {
  it("should render item name input", () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);

    const inputNode = screen.getByTestId("item-name");
    expect(inputNode).toBeInTheDocument();
  });
  it("should render item price input", () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);

    const inputNode = screen.getByTestId("price");
    expect(inputNode).toBeInTheDocument();
  });

  it("should correctly set default option", () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);
    expect(screen.getByRole("option", { name: "Select option" }).selected).toBe(
      true
    );
  });
  it("should display the correct number of options", () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);

    expect(screen.getAllByRole("option").length).toBe(5);
  });
});

describe("userEvent", () => {
  it("should item name in the document", () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);
    const inputNode = screen.getByTestId("item-name");
    userEvent.type(inputNode, "Coffee");
    expect(inputNode).toBeInTheDocument("Coffee");
  });
  it("should item price in the document", () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);
    const inputNode = screen.getByTestId("price");
    userEvent.type(inputNode, "33");
    expect(inputNode).toBeInTheDocument("33");
  });
  it("should allow user to change category", () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Early Breakfast" })
    );
    expect(
      screen.getByRole("option", { name: "Breakfast" })
    ).toBeInTheDocument();
  });
});
