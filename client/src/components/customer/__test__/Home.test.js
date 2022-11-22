import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import * as api from "../../../api/menuListApi";
import Home from "../Home";

beforeEach(() => {
  //jest.spyOn: Spy or mock a function
  jest.spyOn(api, "getAllItem").mockResolvedValue([]);
});

describe("should have menu list in home Page", () => {
  it("loads all the items", async () => {
    api.getAllItem.mockResolvedValue([
      {
        id: 1,
        categoryname: "Early Breakfast",
        description: "6.30am to 12pm",
        items: [
          {
            id: 1,
            itemname: "Idli",
            price: 50,
          },

          {
            id: 4,
            itemname: "Uppittu",
            price: 50,
          },
          {
            id: 5,
            itemname: "Ksheera",
            price: 25,
          },
        ],
      },
      {
        id: 2,
        categoryname: "Breakfast",
        description: "7.30am to 6.30pm",
        items: [
          {
            id: 6,
            itemname: "Parota",
            price: 60,
          },
        ],
      },
      {
        id: 3,
        category_name: "Supper",
        description: "12pm to 7.30pm",
        items: [
          {
            id: 12,
            itemname: "Meal",
            price: 90,
          },

          {
            id: 15,
            itemname: "Golibhaje",
            price: 25,
          },
        ],
      },
      {
        id: 4,
        categoryname: "Beverages",
        description: null,
        items: [
          {
            id: 16,
            itemname: "Coffee",
            price: 30,
          },
        ],
      },
    ]);
    render(<Home />);

    await waitFor(() => expect(api.getAllItem).toHaveBeenCalledTimes(1));
    expect(await screen.findByText(/Early Breakfast/i)).toBeInTheDocument();
    expect(await screen.findByText("6.30am to 12pm")).toBeInTheDocument();
  });
});
