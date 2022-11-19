import { render, screen, waitFor } from "@testing-library/react";

import * as api from "../../../api/adminSideApi";
import { MenuListContainer } from "../MenuListContainer";
import { AdminContext } from "../AdminPage";

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

    // Need to add the admin context in order to provide the token value.
    render(
      <AdminContext.Provider value="token">
        <MenuListContainer />
      </AdminContext.Provider>
    );

    await waitFor(() => expect(api.getItemList).toHaveBeenCalledTimes(1));
    expect(await screen.findByText("Breakfast")).toBeInTheDocument();
    expect(await screen.findByText("7.30am to 6.30pm")).toBeInTheDocument();
  });
});
