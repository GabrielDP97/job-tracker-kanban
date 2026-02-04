import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  it("allows user to type username and click login", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText("Username");
    const button = screen.getByRole("button", { name: "Login" });


    fireEvent.change(input, { target: { value: "Gabriel" } });
    fireEvent.click(button);

    expect(input).toHaveValue("Gabriel");
  });
});
