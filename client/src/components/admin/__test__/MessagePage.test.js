import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as api from "../../../api/adminSideApi";
import { MessagesPage } from "../MessagesPage";
import { AdminContext } from "../AdminPage";

// // we want to run a function or some other code repeatedly “before each” test that code can be put in the beforeEach function.
beforeEach(() => {
  //jest.spyOn: Spy or mock a function
  jest.spyOn(api, "getMessages").mockResolvedValue([]);
});

describe("render list of messages", () => {
  it("load all the message data", async () => {
    api.getMessages.mockResolvedValue([
      {
        email: "john@gmail.com",
        id: 38,
        message: "Message Mock Testing",
        messaged_at: "2022-11-20T04:35:20.232Z",
        name: "John",
        phone_number: "",
        read: false,
      },
    ]);

    // Need to add the admin context in order to provide the token value.
    render(
      <AdminContext.Provider value="token">
        <MessagesPage />
      </AdminContext.Provider>
    );

    await waitFor(() => expect(api.getMessages).toHaveBeenCalledTimes(1));
    expect(await screen.findByText("john@gmail.com")).toBeInTheDocument();
    expect(await screen.findByText("John")).toBeInTheDocument();
    expect(await screen.findByText("Message Mock Testing")).toBeInTheDocument();
  });
});

describe("delete message", () => {
  let message;
  beforeEach(() => {
    message = [
      {
        email: "john@gmail.com",
        id: 38,
        message: "Message Mock Testing",
        messaged_at: "2022-11-20T04:35:20.232Z",
        name: "John",
        phone_number: "",
        read: false,
      },
    ];
    api.deleteMessages.mockResolvedValue(message);
  });

  // not Passing

  //   TypeError: api.deleteMessages.mockResolvedValue is not a function

  //   53 |       },
  //   54 |     ];
  // > 55 |     api.deleteMessages.mockResolvedValue(message);
  //      |                        ^
  //   56 |   });
  //   57 |   it("delete message", async () => {
  //   58 |     const deleteSpy = jest.spyOn(api, "deleteMessages");

  it("delete message", async () => {
    const deleteSpy = jest.spyOn(api, "deleteMessages");
    render(
      <AdminContext.Provider value="token">
        <MessagesPage />
      </AdminContext.Provider>
    );

    const deleteButton = await screen.findByText("Delete");

    await userEvent.click(deleteButton);
    expect(deleteSpy).toHaveBeenCalledWith(message[0].id);
  });
});
