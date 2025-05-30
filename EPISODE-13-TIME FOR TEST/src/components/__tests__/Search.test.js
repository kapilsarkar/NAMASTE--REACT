import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { json } from "react-router";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("Should Search Res-List for Burger Text Input", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>

    )
    )
    const cardsBeforeSearch = screen.getAllByTestId('resCard')
    expect(cardsBeforeSearch.length).toBe(20)

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(searchBtn)



    //console.log(searchBtn);



    const cardsAfterSearch = screen.getAllByTestId('resCard');


    expect(cardsAfterSearch.length).toBe(1);
});