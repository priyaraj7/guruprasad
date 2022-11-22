import { render, screen } from "@testing-library/react";
import AdminHome from "../AdminHome";
describe("render Admin page test", () => {
  it("should show welcome message", async () => {
    render(<AdminHome />);

    expect(
      await screen.findByText("Welcome to Admin Page")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Please Sign In to proceed")
    ).toBeInTheDocument();
  });
});
