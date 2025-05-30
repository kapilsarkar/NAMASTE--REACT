import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


beforeAll(() => {
    console.log("Before All")
})

beforeEach(() => {
    console.log("Before Each")
})

afterAll(() => {
    console.log("After All")
})

afterEach(() => {
    console.log("After Each")
})
describe("Contact Us Test Cases", () => {
    it("Should load contact us component", () => {

        render(<Contact />)

        const heading = screen.getByRole("heading");

        //Assertion
        expect(heading).toBeInTheDocument();
    })

    it("Should load button inside contact component", () => {
        render(<Contact />)

        const button = screen.getByRole("button");

        //Assertion 
        expect(button).toBeInTheDocument();

    })

    it("Should load input name inside contact component", () => {
        render(<Contact />)

        const inputName = screen.getByPlaceholderText("Name");

        //Assertion
        expect(inputName).toBeInTheDocument();
    })

    it("Should load two input boxes on the Contact Component", () => {
        render(<Contact />)
        // Querying
        const inputBoxes = screen.getAllByRole("textbox")
        //console.log(inputBoxes.length);

        //Assertion
        expect(inputBoxes.length).toBe(2);
    })
})

