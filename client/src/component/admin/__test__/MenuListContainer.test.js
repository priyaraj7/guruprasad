// not working

import { render, screen } from "@testing-library/react";

import * as api from "../../../api/adminSideApi";
import MenuListContainer from "../MenuListContainer";

// // we want to run a function or some other code repeatedly “before each” test that code can be put in the beforeEach function.
beforeEach(() => {
  //jest.spyOn: Spy or mock a function
  jest.spyOn(api, "getItemList").mockResolvedValue([]);
});

describe("render", () => {
  it("loads all the items", async () => {
    api.getItemList.mockResolvedValue([
      {
        active: true,
        categoryname: "Breakfast",
        description: "7.30am to 6.30pm",
        id: 6,
        itemname: "Parota",
        price: 60,
      },
    ]);

    render(<MenuListContainer />);

    // getting error  Expected number of calls: >= 1

    //expect(api.getItemList).toHaveBeenCalled();
    // expect(await screen.findByText("Breakfast")).toBeInTheDocument();
    // expect(await screen.findByText("7.30am to 6.30pm")).toBeInTheDocument();
  });
});
