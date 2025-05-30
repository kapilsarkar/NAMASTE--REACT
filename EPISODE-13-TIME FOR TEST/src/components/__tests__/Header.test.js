import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("Should change Login Button to Logout Onclick", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logOutButton = screen.getByRole("button", { name: "Logout" });

    expect(logOutButton).toBeInTheDocument();
})


it("Should render Header Component with Cart Items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    );

    const cartItems = screen.getByText(/Cart/)



    expect(cartItems).toBeInTheDocument();
})