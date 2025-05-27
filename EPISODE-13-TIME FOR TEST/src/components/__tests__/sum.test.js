import { sum } from "../sum";

test("sum function should calculate the sum ofn two functions", () => {
    const result = sum(2, 3);

    //Assertion
    expect(result).toBe(5);

});