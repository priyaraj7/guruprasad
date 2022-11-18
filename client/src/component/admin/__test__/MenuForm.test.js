import React from "react";
import { render, screen, within } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import MenuForm from "../MenuForm";

describe("should render form and form element", () => {
  it("should render item name input", () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);

    const inputNode = screen.getByLabelText(/Item name/);
    expect(inputNode).toBeInTheDocument();
  });
  it("should render item price input", () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);

    const inputNode = screen.getByLabelText(/Price/);
    expect(inputNode).toBeInTheDocument();
  });

  it("should correctly set default option", () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);
    expect(screen.getByRole("option", { name: "Select option" }).selected).toBe(
      true
    );
    expect(screen.getByLabelText(/Select Category/)).toHaveDisplayValue(
      "Select option"
    );
  });
  it("should display the correct number of options", () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);

    expect(within(screen.getByLabelText(/Select Category/)).getAllByRole("option")).toHaveLength(5);
  });
});

describe("userEvent", () => {
  it("should item name in the document", async () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);
    const inputNode = screen.getByLabelText(/Item name/);
    await userEvent.type(inputNode, "Coffee");
    expect(inputNode).toHaveDisplayValue("Coffee");
  });
  it("should item price in the document", async () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);
    const inputNode = screen.getByLabelText(/Price/);
    await userEvent.type(inputNode, "33");

    // it is not right. toBeInTheDocument does not accept argument
    expect(inputNode).toHaveDisplayValue("33");
  });
  it("should allow user to change category", async () => {
    render(<MenuForm values={{ itemname: "", price: "", categoryId: "" }} />);
    //Simulate selecting an option and verifying its value
    await userEvent.selectOptions(
      screen.getByLabelText(/Select Category/),
      screen.getByRole("option", { name: "Early Breakfast" })
    );
    expect(
      screen.getByLabelText(/Select Category/)
    ).toHaveDisplayValue('Early Breakfast');
  });
});
