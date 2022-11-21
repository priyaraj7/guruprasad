import React from "react";
import { render, screen } from "@testing-library/react";

import MenuList from "../MenuList";

describe("table", () => {
  let itemData = [
    {
      active: true,
      categoryname: "Early Breakfast",
      description: "6.30am to 12pm",
      id: 1,
      itemname: "Idli",
      price: 50,
    },
    {
      active: true,
      categoryname: "Breakfast",
      description: "7.30am to 6.30pm",
      id: 6,
      itemname: "Parota",
      price: 60,
    },
  ];
  it("should render item name input", () => {
    render(<MenuList itemData={itemData} />);

    const trElements = screen.getAllByRole("row");
    expect(trElements).toHaveLength(3);
  });

  it("renders with expected values", () => {
    render(<MenuList itemData={itemData} />);
    expect(
      screen.getByRole("cell", { name: /Early Breakfast/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: /6.30am to 12pm/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: /Idli/i })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: /50/i })).toBeInTheDocument();
  });
  it("has the correct class", () => {
    render(<MenuList itemData={itemData} />);
    // screen.debug();
    expect(screen.getByRole("table")).toHaveAttribute(
      "class",
      "chakra-table css-0"
    );
  });
});
